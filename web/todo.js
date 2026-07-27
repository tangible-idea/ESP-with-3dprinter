// ------------------------------------------------------------------
// 투두 서포터 (아이맥 우측하단 코너 ㄷ자 클립) — 딤섬 클리커와 완전히 분리된 소스.
// app.js(딤섬 + 엔진)는 이 파일에서 아무것도 import하지 않으며, 반대로 이 파일도 app.js를
// import하지 않는다. 대신 app.js가 initTodo(env)로 필요한 엔진 기능만 주입한다.
// → 이 파일만 고치면 투두 서포터가 바뀌고, 딤섬 코드에는 절대 영향이 없다.
//
// 좌표: X=폭(가장자리 방향), Y=화면 깊이(+Y 앞/사용자, −Y 뒤/화면 뒷면), Z=수직
// ㄷ자 입구가 위를 향하고 바닥 브릿지가 가장자리 밑을 감쌈. 앞턱=화면 앞(OLED), 뒤턱=화면 뒤(ESP32).
// ------------------------------------------------------------------

// env = app.js가 주입하는 공용 엔진:
//   THREE, P, t, G, MATS, matCase, matCaseX, ASSETS, ESP, OLED_TYPES,
//   boxBrush, add, sub, meshBrush, manToGeo, downloadSTL, status,
//   queueRebuild, getView()->{xray,showGhosts}, clearFloors()
export function initTodo(env) {
  const {
    THREE, P, t, G, MATS, matCase, matCaseX, ASSETS, ESP, OLED_TYPES,
    boxBrush, add, sub, meshBrush, manToGeo, downloadSTL, status,
    queueRebuild, getView, clearFloors,
  } = env;

  let todoGeo = null;

  // 상단 모서리 하나를 45° 챔퍼로 깎는다. edge = 'x+'|'x-'|'y+'|'y-'.
  // (xC±xH, yC±yH) = 블록 풋프린트, zTop = 상단, c = 챔퍼 크기.
  // 커터는 해당 축 방향으로만 블록 폭에 맞춰 한정 → 키 다른 블록끼리 서로 안 깎임.
  function bevelTop(man, edge, xC, xH, yC, yH, zTop, c) {
    const L = 400, marg = 0.5;
    let n, dim, p;
    if (edge === 'y+')      { n = new THREE.Vector3(0, 1, 1);  p = new THREE.Vector3(xC, yC + yH - c, zTop); dim = [2 * xH + 2 * marg, L, L]; }
    else if (edge === 'y-') { n = new THREE.Vector3(0, -1, 1); p = new THREE.Vector3(xC, yC - yH + c, zTop); dim = [2 * xH + 2 * marg, L, L]; }
    else if (edge === 'x+') { n = new THREE.Vector3(1, 0, 1);  p = new THREE.Vector3(xC + xH - c, yC, zTop); dim = [L, 2 * yH + 2 * marg, L]; }
    else                    { n = new THREE.Vector3(-1, 0, 1); p = new THREE.Vector3(xC - xH + c, yC, zTop); dim = [L, 2 * yH + 2 * marg, L]; }
    n.normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    const center = p.clone().add(n.clone().multiplyScalar(L / 2));
    const m = new THREE.Matrix4().compose(center, q, new THREE.Vector3(1, 1, 1));
    return sub(man, meshBrush(new THREE.BoxGeometry(dim[0], dim[1], dim[2]), m));
  }

  // 박스 하나를 만들고 상단 네 모서리를 챔퍼 — 반드시 union 전에 "홀로" 깎아야
  // 무한 평면 커터가 다른 블록(슬롯 건너편)을 침범하지 않는다.
  function chamferBox(bw, bd, bh, cx, cy, z0, r, c) {
    let m = boxBrush(bw, bd, bh, cx, cy, z0, r);
    if (c > 0.05) {
      const zTop = z0 + bh;
      for (const e of ['y+', 'y-', 'x+', 'x-']) m = bevelTop(m, e, cx, bw / 2, cy, bd / 2, zTop, c);
    }
    return m;
  }

  function buildTodoCase() {
    const eClr = 0.6;                               // ESP32 삽입 유격
    const tWall = P.tWall, tBridge = P.tBridge, tFront = P.tFront, tBack = P.tBack;
    const w = ESP.w + eClr + 2 * tWall;             // 통일 폭 = ESP32 가로폭 + 유격 + 양쪽 벽
    const slotY = P.tEdge + P.tClr;                 // 슬롯 깊이 = 모서리 두께 + 유격
    const halfSlot = slotY / 2;
    const totalY = slotY + 2 * tWall;
    const cyFront = halfSlot + tWall / 2;
    const Yf = halfSlot + tWall, Yb = -(halfSlot + tWall);   // 앞턱/뒤턱 바깥면
    const r = Math.max(0.3, Math.min(P.tRound, tWall * 0.95, w / 2 - 1));
    const ch = Math.min(2.0, tWall * 0.7, tFront * 0.4, tBack * 0.4);   // 상단 챔퍼 크기

    // ESP32 포켓 치수 & 뒷벽(뒤턱+포켓 통합) 높이 — 뒤쪽은 하나의 깔끔한 벽으로.
    const pw = ESP.w + eClr, ph = ESP.l + eClr, pd = ESP.h + eClr;   // X=18, Z=24, Y=4.2
    const zEsp0 = tBridge + 2;
    const espOn = P.tEspOn;
    const backTop = espOn ? Math.max(zEsp0 + ph + tWall, tBridge + tBack) : tBridge + tBack;
    const backYi = -halfSlot;                                   // 뒷벽 안쪽면 (슬롯 뒷벽)
    const backYo = espOn ? (Yb - pd - tWall) : Yb;              // 뒷벽 바깥면 (ESP 포켓 깊이만큼 −Y로)
    const backYc = (backYi + backYo) / 2;

    // 바닥 브릿지 (뒷벽 바깥까지 덮도록 −Y로 확장) — 바닥이라 챔퍼 없음
    const briBackY = backYo, briFrontY = Yf;
    let man = boxBrush(w, briFrontY - briBackY, tBridge, 0, (briFrontY + briBackY) / 2, 0, r);
    // 앞턱 (짧은 그립) — 상단 챔퍼 (union 전에 홀로 깎음)
    man = add(man, chamferBox(w, tWall, tBridge + tFront, 0, cyFront, 0, r, ch));
    // 뒷벽 = 뒤턱 그립 + ESP32 포켓 통합 (윗면 평평, 폭 통일) — 상단 챔퍼
    man = add(man, chamferBox(w, backYi - backYo, backTop, 0, backYc, 0, r, ch));

    const info = { w, totalY: briFrontY - briBackY, tops: [tBridge + tFront, backTop], esp: null, oled: null };

    // ESP32 포켓 파냄 — 바깥 −Y 벽은 닫고 안쪽(슬롯 쪽)을 관통시켜 보드를 안에서 밀어 넣음.
    if (espOn) {
      const cavCy = Yb - pd / 2;               // 보드는 바깥 −Y 벽에 밀착
      const cavBackY = Yb - pd;                // 닫힌 바깥 벽 (화면 뒤)
      const cavFrontY = Yb + tWall + 1.5;      // 안쪽으로 열려 삽입
      man = sub(man, boxBrush(pw, cavFrontY - cavBackY, ph + 0.6,
                              0, (cavBackY + cavFrontY) / 2, zEsp0, 0.05));
      // USB-C 구멍 — 실측 나팔형 usb_c_hole 툴. 보드가 세워져 USB가 −Z를 향함.
      // 뒷벽이 바닥(z=0)까지 꽉 차 있으므로, 툴 길이축(로컬 X)을 줄여 나팔 입구가
      // 바닥면에 딱 뚫려 나오도록 배치: throat=커넥터(zEsp0), 입구=바닥(z≈0).
      // 커넥터 넓은 면(툴 +Y)을 보드 폭(X)에 맞춤.
      const usbLen = 0.6;                          // 로컬 X 길이 스케일 (원본 툴 길이 9 기준)
      const usbCz = zEsp0 - 9 * usbLen / 2;        // 중심 z → 입구가 바닥면에 정렬
      const usbM = new THREE.Matrix4()
        .makeTranslation(0, cavCy, usbCz)
        .multiply(new THREE.Matrix4().makeRotationZ(-Math.PI / 2))
        .multiply(new THREE.Matrix4().makeRotationY(Math.PI / 2))
        .multiply(new THREE.Matrix4().makeScale(usbLen, 1, 1));
      man = sub(man, meshBrush(ASSETS.usb, usbM));
      info.esp = { cy: cavCy, z0: zEsp0 };
    }

    return { man, info };
  }

  function rebuildTodo() {
    const { xray, showGhosts } = getView();
    status.classList.add('on');
    setTimeout(() => {
      try {
        const t0 = performance.now();
        G.forEach(g => { g.clear(); g.position.set(0, 0, 0); });
        clearFloors();
        const { man, info } = buildTodoCase();
        const geo = manToGeo(man); man.delete();
        todoGeo = geo;
        G[0].add(new THREE.Mesh(geo, xray ? matCaseX : matCase));
        // 고스트 (반투명 부품 박스)
        if (info.esp) {
          const g = new THREE.Mesh(new THREE.BoxGeometry(ESP.w, ESP.h, ESP.l), MATS.esp);
          g.position.set(0, info.esp.cy, info.esp.z0 + ESP.l / 2 + 0.3);
          g.userData.ghost = true; g.visible = showGhosts; G[0].add(g);
        }
        const totalH = Math.max(...info.tops);
        document.getElementById('dims').textContent =
          t('todoDims', info.w.toFixed(0), info.totalY.toFixed(0), totalH.toFixed(0), (performance.now() - t0).toFixed(0));
        document.getElementById('warnings').textContent = '';
      } catch (e) {
        todoGeo = null;
        document.getElementById('warnings').textContent = t('buildErrGeneric', e.message || e);
        console.error(e);
      }
      status.classList.remove('on');
    }, 10);
  }

  // 투두 전용 UI 바인딩 (체크박스 + STL 내보내기) — 슬라이더는 app.js의 공용 바인딩이 처리
  for (const id of ['tEspOn']) {
    const el = document.getElementById(id);
    el.checked = P[id];
    el.addEventListener('change', e => { P[id] = e.target.checked; queueRebuild(); });
  }
  document.getElementById('tEx1').addEventListener('click', () => {
    if (todoGeo) downloadSTL(todoGeo.clone(), 'todo_supporter_imac.stl');
  });

  return { rebuildTodo };
}
