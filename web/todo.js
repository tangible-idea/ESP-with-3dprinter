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

  function buildTodoCase() {
    const tWall = P.tWall, tBridge = P.tBridge, tFront = P.tFront, tBack = P.tBack, w = P.tWidth;
    const slotY = P.tEdge + P.tClr;                 // 슬롯 깊이 = 모서리 두께 + 유격
    const halfSlot = slotY / 2;
    const totalY = slotY + 2 * tWall;
    const cyFront = halfSlot + tWall / 2, cyBack = -(halfSlot + tWall / 2);
    const Yf = halfSlot + tWall, Yb = -(halfSlot + tWall);   // 앞턱/뒤턱 바깥면
    const r = Math.max(0.3, Math.min(P.tRound, tWall * 0.95, w / 2 - 1));

    // 바닥 브릿지 + 앞턱 + 뒤턱 (ㄷ자)
    let man = boxBrush(w, totalY, tBridge, 0, 0, 0, r);
    man = add(man, boxBrush(w, tWall, tBridge + tFront, 0, cyFront, 0, r));
    man = add(man, boxBrush(w, tWall, tBridge + tBack, 0, cyBack, 0, r));

    const info = { totalY, tops: [tBridge + tFront, tBridge + tBack], esp: null, oled: null };

    // --- ESP32 뒷면 포켓 (뒤턱 바깥 −Y로 돌출, 위에서 드롭인, USB 아래) ---
    if (P.tEspOn) {
      const eClr = 0.6;
      const pw = ESP.w + eClr, ph = ESP.l + eClr, pd = ESP.h + eClr;   // X=18, Z=24, Y=4.2
      const zEsp0 = tBridge + 2;
      const potTop = zEsp0 + ph + tWall;
      const potFrontY = Yb + 0.6, potBackY = Yb - pd - tWall;
      man = add(man, boxBrush(pw + 2 * tWall, potFrontY - potBackY, potTop - tBridge,
                              0, (potFrontY + potBackY) / 2, tBridge, r));
      const cavCy = Yb - pd / 2;
      man = sub(man, boxBrush(pw, pd, ph + 25, 0, cavCy, zEsp0, 0.05));          // 캐비티 (위 열림)
      // USB-C 구멍 — 딤섬 클리커와 동일하게 실측 나팔형 usb_c_hole 툴로 뚫음 (기존 각진 박스 슬롯 대체).
      // 보드가 세워져 USB가 아래(−Z)를 향하므로: 나팔 입구(툴 +X)를 −Z로, 커넥터 넓은 면(툴 +Y)을 보드 폭(X)에 맞춤.
      const usbM = new THREE.Matrix4()
        .makeTranslation(0, cavCy, zEsp0)
        .multiply(new THREE.Matrix4().makeRotationZ(-Math.PI / 2))
        .multiply(new THREE.Matrix4().makeRotationY(Math.PI / 2));
      man = sub(man, meshBrush(ASSETS.usb, usbM));
      info.esp = { cy: cavCy, z0: zEsp0 }; info.tops.push(potTop);
    }

    // --- OLED 0.96" 앞면 하우징 (앞턱 앞 +Y로 돌출, 위에서 드롭인, 창은 사용자 향함) ---
    if (P.tOledOn) {
      const o = OLED_TYPES['096'], oClr = 0.6;
      const ow = o.w + oClr, oh = o.hgt + oClr, od = o.t + oClr;
      const backT = tWall, frontT = 1.0;
      const zO0 = tBridge + 3, oledBotZ = zO0 + tWall;
      const housBackY = Yf - 0.6, housFrontY = housBackY + (0.6 + backT + od + frontT);
      const housTop = oledBotZ + oh + 2;
      man = add(man, boxBrush(ow + 2 * tWall, housFrontY - housBackY, housTop - tBridge,
                              0, (housFrontY + housBackY) / 2, tBridge, r));
      const cavY0 = Yf + backT, cavCy = cavY0 + od / 2;
      man = sub(man, boxBrush(ow, od, oh + 25, 0, cavCy, oledBotZ, 0.05));       // OLED 캐비티 (위 열림)
      man = sub(man, boxBrush(o.winW, frontT + 1.0, o.winH, 0,
                              cavY0 + od + frontT / 2, oledBotZ + o.winC - o.winH / 2, 0.05)); // 창
      info.oled = { cy: cavCy, botZ: oledBotZ }; info.tops.push(housTop);
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
        if (info.oled) {
          const o = OLED_TYPES['096'];
          const g = new THREE.Mesh(new THREE.BoxGeometry(o.w, o.t, o.hgt), MATS.oled);
          g.position.set(0, info.oled.cy, info.oled.botZ + o.hgt / 2 + 0.3);
          g.userData.ghost = true; g.visible = showGhosts; G[0].add(g);
        }
        const totalH = Math.max(...info.tops);
        document.getElementById('dims').textContent =
          t('todoDims', P.tWidth, info.totalY.toFixed(0), totalH.toFixed(0), (performance.now() - t0).toFixed(0));
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
  for (const id of ['tEspOn', 'tOledOn']) {
    const el = document.getElementById(id);
    el.checked = P[id];
    el.addEventListener('change', e => { P[id] = e.target.checked; queueRebuild(); });
  }
  document.getElementById('tEx1').addEventListener('click', () => {
    if (todoGeo) downloadSTL(todoGeo.clone(), 'todo_supporter_imac.stl');
  });

  return { rebuildTodo };
}
