// ------------------------------------------------------------------
// 식물관리 — Seeed XIAO Soil Moisture Sensor 케이스 + 0.96" OLED 커스텀.
// 제조사 제공 케이스 STL(my_designs/moisture/)을 그대로 불러와 상판(뚜껑)만 개조한다.
// app.js를 import하지 않고 initPlant(env)로 엔진만 주입받는다 (todo.js / workout.js와 같은 규약).
//
// 상판 원본 좌표(정규화, min corner = 0): X=길이 70(+X 끝 = 탐침 슬롯), Y=폭 32,
// Z=0 이 뚜껑 바깥면(출력 시 베드면) → Z=17 이 하판에 꽂히는 립 끝.
// 실측: 뚜껑판 1.0, 벽 2.9, 내부 폭 26.2, PCB 윗면 z≈6.0 (스탠드오프 끝 5.95),
// XIAO ESP32-C6 는 PCB 위 x 33~51 에 가로로 얹혀 뚜껑 안쪽까지 여유가 거의 없다.
// → z=SPLIT_Z 위를 E 만큼 끌어올려 뚜껑판만 띄운다(벽·LED 라이트파이프·스탠드오프가 그만큼 길어짐).
//   버튼·PCB 슬롯·결합 립은 PCB/하판 기준 위치가 그대로 유지된다.
// ------------------------------------------------------------------
import topUrl from '../my_designs/moisture/xiao-soil-sensor-top-3d-printed.stl?url';
import botUrl from '../my_designs/moisture/xiao-soil-sensor-buttom-3d-printed.stl?url';

const CASE = { L: 70, W: 32, topH: 17, ledge: 9.0 };   // ledge = 하판 안쪽 턱(상판 립 끝이 얹힘)
const SPLIT_Z = 2.015;    // 바깥 모서리 라운드 끝(2.0)과 버튼 슬롯 시작(2.03) 사이 — 여기 위만 끌어올림
const LID_T = 1.0;        // 뚜껑판 두께 (OLED 유리가 닿는 안쪽면 z)
const IN_Y0 = 2.9, IN_Y1 = 29.1;                         // 벽 안쪽면
const STANDOFF_X = [28.5, 62.5];                         // 스탠드오프 돌기 사이 — OLED가 들어갈 수 있는 X 구간
const PCB_TOP = 6.0, PCB_T = 1.6;                        // 원본 상판 좌표 기준 PCB 윗면
const RIB = 1.2;          // OLED 길이 방향 위치결정 리브 두께

export function initPlant(env) {
  const {
    THREE, P, t, G, MATS, OLED_TYPES, matCase, matCaseX,
    boxBrush, add, sub, meshBrush, manToGeo, loadSTL, downloadSTL, status,
    queueRebuild, markRulers, getView, clearFloors, setFloorMeshes,
  } = env;

  const O = OLED_TYPES['096'];        // w 25(폭, Y) · hgt 27.05(길이, X) · t 3.5 · 창 23.2×12.4, 창 중심 = 핀 반대쪽 끝 + 14.5
  let src = null;                     // { topGeo, botGeo } — 첫 빌드 때 1회 로드 (정규화된 원본)
  let geos = [null, null];            // [하판(원본), 상판(개조, 출력 방향 좌표)]
  let lastQ = null;

  async function loadSources() {
    if (src) return src;
    const [top, bot] = await Promise.all([loadSTL(topUrl), loadSTL(botUrl)]);
    for (const g of [top, bot]) {
      g.computeBoundingBox();
      const m = g.boundingBox.min;
      g.translate(-m.x, -m.y, -m.z);
    }
    src = { topGeo: top, botGeo: bot };
    return src;
  }

  function layout() {
    const E = P.plExt, clr = P.plOledClr;
    const pocketL = O.hgt + clr, pocketW = O.w + clr;
    const cx = (STANDOFF_X[0] + STANDOFF_X[1]) / 2 + P.plOledX;
    const x0 = cx - pocketL / 2, x1 = cx + pocketL / 2;        // 포켓 (핀 반대쪽 끝 = x0, 핀 = +X 탐침 쪽)
    const winCx = x0 + clr / 2 + O.winC;
    const oledBack = LID_T + O.t;                               // OLED 뒷면 z (출력 좌표)
    const xiaoTop = LID_T + E;                                  // 원래 뚜껑 안쪽면이 밀려난 위치 = XIAO 위 한계
    return {
      E, clr, cx, x0, x1, pocketL, pocketW, winCx, oledBack, xiaoTop,
      totalH: CASE.ledge + CASE.topH + E,
      ribOk: x0 - RIB >= STANDOFF_X[0] - 0.01 && x1 + RIB <= STANDOFF_X[1] + 0.01,
    };
  }

  // 상판 개조 — 결과는 원본과 같은 출력 좌표(뚜껑면 z=0이 베드)
  // 뚜껑 올림은 자르고 붙이는 대신 SPLIT_Z 위 꼭짓점만 E만큼 끌어올린다(스트레치).
  // 위상이 원본 그대로라 항상 watertight — trim+extrude+union은 절단면이 겹쳐 길이 0 모서리가 남았다.
  // SPLIT_Z를 가로지르는 삼각형은 벽·스탠드오프(수직)와 LED 라이트파이프 테이퍼뿐이라 늘여도 형상이 유지된다.
  function buildTop(q) {
    const g = src.topGeo.clone();
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const z = pos.getZ(i);
      if (z > SPLIT_Z) pos.setZ(i, z + q.E);
    }
    let man = meshBrush(g, null, 1e-4);
    g.dispose();

    if (P.plOledOn) {
      // 위치결정 프레임: 벽 사이를 채우는 블록에서 포켓을 뺀다 → 좌우는 포켓 벽, 길이 방향은 리브가 잡음.
      const fz0 = LID_T, fh = O.t + 0.3;
      const fy0 = IN_Y0 - 0.3, fy1 = IN_Y1 + 0.3;
      const fx0 = q.x0 - RIB, fx1 = q.x1 + RIB;
      let frame = boxBrush(fx1 - fx0, fy1 - fy0, fh, (fx0 + fx1) / 2, (fy0 + fy1) / 2, fz0);
      frame = sub(frame, boxBrush(q.pocketL, q.pocketW, fh + 0.2, q.cx, CASE.W / 2, fz0 - 0.1));
      man = add(man, frame);
      // 디스플레이 창 (뚜껑판 관통). 창 긴 변 = 모듈 폭 방향(Y).
      man = sub(man, boxBrush(O.winH, O.winW, LID_T + 1.0, q.winCx, CASE.W / 2, -0.5, 0.6));
    }
    return man;
  }

  // 출력 좌표(상판) → 조립 월드 좌표: X축 180° 뒤집고 하판 턱 위에 얹음, XY 중심 원점
  const topToWorld = q => new THREE.Matrix4()
    .makeTranslation(-CASE.L / 2, CASE.W / 2, q.totalH)
    .multiply(new THREE.Matrix4().makeRotationX(Math.PI));
  const botToWorld = () => new THREE.Matrix4().makeTranslation(-CASE.L / 2, -CASE.W / 2, 0);

  const pcbMat = new THREE.MeshStandardMaterial({ color: 0x1b1e24, roughness: 0.7, transparent: true, opacity: 0.85 });

  function ghost(group, geo, mat, matrix) {
    const m = new THREE.Mesh(geo, mat);
    if (matrix) m.applyMatrix4(matrix);
    m.userData.ghost = true;
    m.visible = getView().showGhosts;
    group.add(m);
    return m;
  }
  // 상판 좌표계 박스 고스트 (조립 시 상판과 함께 움직임 → G[1])
  function topBox(q, w, d, h, x, y, z0, mat) {
    const g = new THREE.BoxGeometry(w, d, h);
    g.translate(x, y, z0 + h / 2);
    return ghost(G[1], g, mat, topToWorld(q));
  }

  function placeGhosts(q) {
    // PCB (KiCad 외곽 실측: 본체 x3~66 × y3.5~28.5, 탐침 폭 15 · 끝 x≈165). 상판 좌표에서 F면이 뚜껑을 향함.
    const pz = PCB_TOP + q.E;   // 개조 상판 좌표의 PCB 윗면
    const s = new THREE.Shape();
    s.moveTo(5, 3.5); s.lineTo(64, 3.5); s.lineTo(66, 5.45); s.lineTo(66, 8.5); s.lineTo(157, 8.5);
    s.lineTo(166.7, 16); s.lineTo(157, 23.5); s.lineTo(66, 23.5); s.lineTo(66, 26.45); s.lineTo(64, 28.5);
    s.lineTo(5, 28.5); s.lineTo(3, 26.45); s.lineTo(3, 5.45); s.closePath();
    const pcb = new THREE.ExtrudeGeometry(s, { depth: PCB_T, bevelEnabled: false });
    pcb.translate(0, 0, pz);
    ghost(G[1], pcb, pcbMat, topToWorld(q));
    // XIAO ESP32-C6 (21×17.8, 가로 배치 — USB가 +Y 쪽 노치)
    topBox(q, 17.8, 21, 3.4, 42, 15.5, pz - 3.4, MATS.esp);
    // AA 홀더 + 전지 (PCB 뒷면, 중심 x 34.6)
    const aa = new THREE.CylinderGeometry(7.25, 7.25, 50.5, 32);
    aa.rotateZ(Math.PI / 2);
    aa.translate(34.6, 16, pz + PCB_T + 7.6);
    ghost(G[1], aa, MATS.bat, topToWorld(q));
    if (P.plOledOn) {
      topBox(q, O.hgt, O.w, O.t, q.x0 + q.clr / 2 + O.hgt / 2, CASE.W / 2, LID_T, MATS.oled);
      // 핀 헤더 위치 표시 (탐침 쪽 끝, 4핀)
      topBox(q, 2.5, 10.2, 2.5, q.x0 + q.clr / 2 + O.hgt - 1.5, CASE.W / 2, q.oledBack, MATS.bat);
    }
  }

  function warnings(q) {
    const w = [];
    if (P.plOledOn && q.oledBack > q.xiaoTop - 0.15)
      w.push(t('plWarnExt', (q.oledBack + 0.15 - LID_T).toFixed(1)));
    if (P.plOledOn && !q.ribOk) w.push(t('plWarnRib'));
    return w;
  }

  function applyPlantExplode() {
    if (!lastQ) return;
    const gap = 30 * +document.getElementById('explode').value;
    G[0].position.set(0, 0, 0);
    G[1].position.set(0, 0, gap);
    for (let i = 2; i < G.length; i++) G[i].position.set(0, 0, 0);
    markRulers();
  }

  function rebuildPlant() {
    status.classList.add('on');
    setTimeout(async () => {
      try {
        const t0 = performance.now();
        await loadSources();
        G.forEach(g => { g.clear(); g.position.set(0, 0, 0); });
        clearFloors();
        const q = layout();
        const topMan = buildTop(q);
        const topGeo = manToGeo(topMan); topMan.delete();
        geos = [src.botGeo, topGeo];
        const { xray } = getView();
        const mat = xray ? matCaseX : matCase;
        const botMesh = new THREE.Mesh(src.botGeo.clone().applyMatrix4(botToWorld()), mat);
        const topMesh = new THREE.Mesh(topGeo.clone().applyMatrix4(topToWorld(q)), mat);
        G[0].add(botMesh); G[1].add(topMesh);
        setFloorMeshes([botMesh, topMesh, null, null]);
        lastQ = q;
        placeGhosts(q);
        applyPlantExplode();
        document.getElementById('dims').textContent =
          t('plantDims', CASE.L, CASE.W, q.totalH.toFixed(1), (performance.now() - t0).toFixed(0));
        document.getElementById('warnings').textContent = warnings(q).join('\n');
      } catch (e) {
        geos = [null, null];
        document.getElementById('warnings').textContent = t('buildErrGeneric', e.message || e);
        console.error(e);
      }
      status.classList.remove('on');
    }, 10);
  }

  const el = document.getElementById('plOledOn');
  el.checked = P.plOledOn;
  el.addEventListener('change', e => { P.plOledOn = e.target.checked; queueRebuild(); });
  document.getElementById('plExTop').addEventListener('click', () => {
    if (geos[1]) downloadSTL(geos[1].clone(), P.plOledOn
      ? `xiao_soil_sensor_top_oled096_ext${P.plExt}.stl`
      : `xiao_soil_sensor_top_ext${P.plExt}.stl`);
  });
  document.getElementById('plExBot').addEventListener('click', () => {
    if (geos[0]) downloadSTL(geos[0].clone(), 'xiao_soil_sensor_bottom.stl');
  });

  return { rebuildPlant, applyPlantExplode };
}
