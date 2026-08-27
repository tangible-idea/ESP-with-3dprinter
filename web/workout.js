// 운동 모션 센서 — TW802040(40×20×8) 배터리 footprint에 맞춘 3단 적층 케이스.
// 1) KY-035+자석+배터리 베이스, 2) TP4056+MPU6050 트레이, 3) ESP32+OLED 뚜껑.
// 좌표: X=배터리 40mm 방향, Y=20mm/운동 상하 방향, Z=자석면→뚜껑.

export function initWorkout(env) {
  const {
    THREE, P, t, G, MATS, matCase, matCaseX, boxBrush, add, sub,
    manToGeo, downloadSTL, status, getView, clearFloors, setFloorMeshes,
    markRulers, setRulerExtras, refreshWires = () => {},
  } = env;

  const BAT = { w: 40, d: 20, h: 8 };
  const ESP = { w: 24, d: 18, h: 4.2 };
  const CHARGER = { w: 19, d: 14, h: 4.5 };
  const HALL = { w: 19, h: 15 };       // KY-035 PCB: X=19, 세움 높이 Z=15
  const MAG = { w: 30, d: 10, h: 2 };
  const OLED = { w: 25, d: 27.05, h: 3.5, winW: 23.2, winD: 12.4, winY: 0.975 };
  const CLR = 0.4;
  const OLED_CLR = 0.4, OLED_RIM = 1.6, OLED_RIM_H = 4.2;
  const OLED_CAV_W = OLED.w + OLED_CLR, OLED_CAV_D = OLED.d + OLED_CLR;
  const OLED_OUT_W = OLED_CAV_W + 2 * OLED_RIM, OLED_OUT_D = OLED_CAV_D + 2 * OLED_RIM;
  const JOINT_H = 1.6, JOINT_W = 1.05;
  const TRAY_TOP = 12.6, TRAY_FLOOR_TOP = 2.8;
  const LID_CAGE_H = 4.6, LID_PLATE = 2.2;

  let geos = [null, null, null], meshes = [null, null, null], lastLayout = null;
  const partMat = color => new THREE.MeshStandardMaterial({ color, roughness: 0.58, transparent: true, opacity: 0.9 });
  const mpuMat = partMat(0x3c9b70);
  const hallMat = partMat(0x8f5aa8);
  const oledBoardMat = partMat(0x235c48);
  const oledScreenMat = new THREE.MeshStandardMaterial({
    color: 0x16262c, emissive: 0x2aa7b8, emissiveIntensity: 0.32,
    roughness: 0.22, transparent: true, opacity: 0.96,
  });
  const magnetMat = new THREE.MeshStandardMaterial({ color: 0x7b818a, roughness: 0.32, metalness: 0.75 });
  const mpuSpec = () => ({ w: P.wkMpuW, d: P.wkMpuL, h: P.wkMpuH });

  function ring(outW, outD, inW, inD, h, z0, r) {
    return sub(boxBrush(outW, outD, h, 0, 0, z0, r),
               boxBrush(inW, inD, h + 0.2, 0, 0, z0 - 0.1,
                        Math.max(0.35, r - (outW - inW) / 2)));
  }

  function layout() {
    const W = P.wkWidth, D = P.wkLength, baseH = P.wkBodyH, wall = P.wkWall, mpu = mpuSpec();
    const innerW = W - 2 * wall;
    const innerHalfD = D / 2 - wall;
    const pairW = CHARGER.w + CLR + mpu.w + CLR;
    const gap = Math.max(0.2, innerW - 1.0 - pairW);
    const left = -innerW / 2 + 0.5;
    const chargerX = left + (CHARGER.w + CLR) / 2;
    const mpuX = chargerX + (CHARGER.w + CLR) / 2 + gap + (mpu.w + CLR) / 2;
    // KY-035를 -Y 벽에 세우고, 보드 안쪽면에서 wkHallGap 떨어진 곳에 자석 가장자리를 둔다.
    const hallY = -innerHalfD + P.wkHallT / 2 + 0.25;
    const hallInnerY = hallY + P.wkHallT / 2;
    const batteryY = P.wkHallOn ? hallInnerY + 0.8 + (BAT.d + CLR) / 2 : 0;
    const magnetY = P.wkHallOn ? hallInnerY + P.wkHallGap + MAG.d / 2 : 0;
    return {
      W, D, baseH, wall, innerW, innerHalfD, mpu, gap, chargerX, mpuX,
      hallY, hallInnerY, batteryY, magnetY, hallT: P.wkHallT,
      magnetZ: P.wkMagSkin, batteryZ: P.wkMagSkin + MAG.h + 0.2,
    };
  }

  function jointDims(q) {
    const outW = q.W - 2 * q.wall + 0.2, outD = q.D - 2 * q.wall + 0.2;
    return { outW, outD, inW: outW - 2 * JOINT_W, inD: outD - 2 * JOINT_W };
  }

  function buildBase() {
    const q = layout(), r = Math.min(5.5, q.W / 2 - 1, q.D / 2 - 1);
    let body = boxBrush(q.W, q.D, q.baseH, 0, 0, 0, r);
    body = sub(body, boxBrush(MAG.w + CLR, MAG.d + CLR, MAG.h + 0.25,
                              0, q.magnetY, q.magnetZ, 0.8));
    body = sub(body, boxBrush(BAT.w + CLR, BAT.d + CLR, q.baseH - q.batteryZ + 0.2,
                              0, q.batteryY, q.batteryZ, 1.4));
    if (P.wkHallOn) {
      // KY-035 세움 슬롯: 센서 소자 끝이 바닥/자석 쪽, 커넥터가 위쪽으로 오도록 삽입.
      body = sub(body, boxBrush(HALL.w + CLR, q.hallT + CLR,
                                q.baseH - 0.75 + 0.2,
                                0, q.hallY, 0.75, 0.45));
    }
    const j = jointDims(q);
    body = sub(body, ring(j.outW, j.outD, j.inW, j.inD, JOINT_H + 0.15,
                          q.baseH - JOINT_H, Math.max(0.8, r - q.wall)));
    return body;
  }

  const locatingRing = (w, d, x, z0) => ring(w + CLR + 1.2, d + CLR + 1.2,
                                             w + CLR, d + CLR, 1.2, z0, 0.8);

  function buildTray() {
    const q = layout(), r = Math.min(5.5, q.W / 2 - 1, q.D / 2 - 1);
    const j = jointDims(q), fit = P.wkFit;
    let tray = ring(j.outW - 2 * fit, j.outD - 2 * fit,
                    j.inW + 2 * fit, j.inD + 2 * fit,
                    JOINT_H, 0, Math.max(0.6, r - q.wall - fit));
    if (P.wkHallOn) {
      // 베이스에서 올라온 KY-035 상단/배선과 트레이 결합 텅이 충돌하지 않는 노치.
      tray = sub(tray, boxBrush(HALL.w + CLR + 0.6, q.hallT + CLR + 0.6,
                                JOINT_H + 0.2, 0, q.hallY, -0.1, 0.45));
    }
    tray = add(tray, boxBrush(q.W, q.D, 1.4, 0, 0, 1.4, r));
    tray = add(tray, ring(q.W, q.D, q.W - 2 * q.wall, q.D - 2 * q.wall,
                          TRAY_TOP - 1.4, 1.4, r));
    tray = add(tray, locatingRing(CHARGER.w, CHARGER.d, q.chargerX, TRAY_FLOOR_TOP));
    tray = add(tray, locatingRing(q.mpu.w, q.mpu.d, q.mpuX, TRAY_FLOOR_TOP));

    const leftEdge = q.chargerX + (CHARGER.w + CLR) / 2;
    const rightEdge = q.mpuX - (q.mpu.w + CLR) / 2;
    tray = sub(tray, boxBrush(Math.max(1.2, rightEdge - leftEdge + 0.6), 3.0, 1.6,
                              (leftEdge + rightEdge) / 2, 0, 2.2, 0.45));
    tray = sub(tray, boxBrush(q.wall + 2.0, 10.0, 4.4,
                              -q.W / 2 + q.wall / 2 - 0.7, 0,
                              TRAY_FLOOR_TOP + 0.1, 1.0));
    tray = sub(tray, ring(j.outW, j.outD, j.inW, j.inD, JOINT_H + 0.15,
                          TRAY_TOP - JOINT_H, Math.max(0.8, r - q.wall)));
    return tray;
  }

  function buildLid() {
    const q = layout(), r = Math.min(5.5, q.W / 2 - 1, q.D / 2 - 1);
    const j = jointDims(q), fit = P.wkFit;
    let lid = boxBrush(q.W, q.D, LID_PLATE, 0, 0, LID_CAGE_H, r);
    lid = add(lid, ring(j.outW - 2 * fit, j.outD - 2 * fit,
                        j.inW + 2 * fit, j.inD + 2 * fit,
                        JOINT_H, LID_CAGE_H - JOINT_H,
                        Math.max(0.6, r - q.wall - fit)));

    const cageOuterW = ESP.w + CLR + 2.0, cageOuterD = ESP.d + CLR + 2.0;
    lid = add(lid, ring(cageOuterW, cageOuterD, ESP.w + CLR, ESP.d + CLR,
                        LID_CAGE_H, 0, 1.0));
    for (const sx of [-1, 1]) for (const sy of [-1, 1]) {
      lid = add(lid, boxBrush(2.8, 2.8, 0.65,
                              sx * (ESP.w / 2 - 1.4 + 0.45),
                              sy * (ESP.d / 2 - 1.4 + 0.45), 0.05, 0.35));
    }
    if (P.wkOledOn) {
      // OLED는 뚜껑 위에서 내려놓는 개방형 보호 림에 안착한다. 화면은 위로 보이고,
      // 헤더 쪽 4가닥은 상판 슬롯을 통과해 바로 아래 ESP32로 내려간다.
      const lidTop = LID_CAGE_H + LID_PLATE;
      lid = add(lid, ring(OLED_OUT_W, OLED_OUT_D, OLED_CAV_W, OLED_CAV_D,
                          OLED_RIM_H, lidTop, 1.4));
      lid = sub(lid, boxBrush(12, 3.2, LID_PLATE + 0.8,
                              0, -OLED.d / 2 + 1.7, LID_CAGE_H - 0.4, 0.65));
    }
    return lid;
  }

  function ghostBox(group, dims, pos, mat) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...dims), mat);
    mesh.position.set(...pos); mesh.visible = getView().showGhosts; mesh.userData.ghost = true;
    group.add(mesh);
  }

  function placeGhosts(q) {
    ghostBox(G[0], [MAG.w, MAG.d, MAG.h], [0, q.magnetY, q.magnetZ + MAG.h / 2], magnetMat);
    ghostBox(G[0], [BAT.w, BAT.d, BAT.h], [0, q.batteryY, q.batteryZ + BAT.h / 2], MATS.bat);
    if (P.wkHallOn)
      ghostBox(G[0], [HALL.w, q.hallT, HALL.h], [0, q.hallY, 0.75 + HALL.h / 2], hallMat);
    ghostBox(G[1], [CHARGER.w, CHARGER.d, CHARGER.h],
             [q.chargerX, 0, TRAY_FLOOR_TOP + CHARGER.h / 2], MATS.mod);
    ghostBox(G[1], [q.mpu.w, q.mpu.d, q.mpu.h],
             [q.mpuX, 0, TRAY_FLOOR_TOP + q.mpu.h / 2], mpuMat);
    ghostBox(G[2], [ESP.w, ESP.d, ESP.h], [0, 0, 0.2 + ESP.h / 2], MATS.esp);
    if (P.wkOledOn) {
      const lidTop = LID_CAGE_H + LID_PLATE;
      ghostBox(G[2], [OLED.w, OLED.d, OLED.h],
               [0, 0, lidTop + 0.1 + OLED.h / 2], oledBoardMat);
      ghostBox(G[2], [OLED.winW, OLED.winD, 0.45],
               [0, OLED.winY, lidTop + OLED.h + 0.12], oledScreenMat);
    }
  }

  // 분해 위치까지 반영한 실제 부품 좌표로 배선을 그린다. 핀 배열은 논리 연결을
  // 알아보기 위한 배치이므로 조립 전 각 모듈의 실크(VCC/GND/S/AO)를 반드시 확인한다.
  function drawWorkoutWires(addWire, colors) {
    if (!lastLayout) return;
    const q = lastLayout;
    const world = (group, p) => [
      p[0] + group.position.x, p[1] + group.position.y, p[2] + group.position.z,
    ];
    // 전선을 제품 양옆의 서로 다른 Y 레인으로 빼서 겹쳐 보이지 않게 한다.
    const route = (a, b, lane) => {
      const z = Math.max(a[2], b[2]) + 4.0;
      return [a, [a[0], a[1], z], [a[0], lane, z + 1],
              [b[0], lane, z + 1], [b[0], b[1], z], b];
    };

    const batTop = q.batteryZ + BAT.h;
    const batPlus = world(G[0], [-BAT.w / 2 + 2, q.batteryY - 3.2, batTop]);
    const batMinus = world(G[0], [-BAT.w / 2 + 2, q.batteryY + 3.2, batTop]);
    const chgTop = TRAY_FLOOR_TOP + CHARGER.h;
    const chgBPlus = world(G[1], [q.chargerX - CHARGER.w / 2, -4.3, chgTop]);
    const chgBMinus = world(G[1], [q.chargerX - CHARGER.w / 2, 4.3, chgTop]);
    const chgOutPlus = world(G[1], [q.chargerX + CHARGER.w / 2, -4.3, chgTop]);
    const chgOutMinus = world(G[1], [q.chargerX + CHARGER.w / 2, 4.3, chgTop]);

    // ESP32-C3 SuperMini: USB가 -X를 향하는 뚜껑 포켓 기준 핀 좌표.
    const espTop = 0.2 + ESP.h;
    const espPin = (x, y) => world(G[2], [x, y, espTop]);
    const gpioPins = {
      4: [-1.5, 8], 3: [1, 8], 2: [3.5, 8], 1: [6, 8], 0: [8.5, 8],
      5: [-9, -8], 6: [-6.5, -8], 7: [-4, -8], 8: [-1.5, -8], 9: [1, -8],
      10: [3.5, -8], 20: [6, -8], 21: [8.5, -8],
    };
    const espGpio = (n, fallback) => espPin(...(gpioPins[+n] || gpioPins[fallback]));
    const esp5V = espPin(-9, 8), espGnd = espPin(-6.5, 8), esp3V3 = espPin(-4, 8);
    const espHall = espGpio(P.wkHallGpio, 0);
    const espSda = espGpio(P.sdaGpio, 8), espScl = espGpio(P.sclGpio, 9);

    addWire(route(batPlus, chgBPlus, -18), colors.plus, t('wtBatPlus'), 'B+');
    addWire(route(batMinus, chgBMinus, -16), colors.minus, t('wtBatMinus'), 'B−');
    addWire(route(chgOutPlus, esp5V, -14), colors.plus, 'OUT+', '5V');
    addWire(route(chgOutMinus, espGnd, -12), colors.minus, 'OUT−', 'GND');

    // KY-035: 보드 상단 3핀을 S/AO, +, − 순서로 시각화한다.
    const hallZ = 0.75 + HALL.h;
    const hallAo = world(G[0], [-5, q.hallY, hallZ]);
    const hallVcc = world(G[0], [0, q.hallY, hallZ]);
    const hallGnd = world(G[0], [5, q.hallY, hallZ]);
    if (P.wkHallOn) {
      addWire(route(hallVcc, esp3V3, -10), colors.plus, 'KY +', '3V3');
      addWire(route(hallGnd, espGnd, -8), colors.minus, 'KY −', null);
      addWire(route(hallAo, espHall, -6), colors.gpio, 'S/AO', 'G' + P.wkHallGpio, 'hall');
    }

    // GY-521/MPU6050 헤더의 앞 4개 논리 핀: VCC, GND, SCL, SDA.
    const mpuTop = TRAY_FLOOR_TOP + q.mpu.h;
    const mpuPin = x => world(G[1], [q.mpuX + x, -q.mpu.d / 2, mpuTop]);
    const mpuVcc = mpuPin(-5), mpuGnd = mpuPin(-1.7);
    const mpuScl = mpuPin(1.7), mpuSda = mpuPin(5);
    addWire(route(mpuVcc, esp3V3, 6), colors.plus, 'VCC', null);
    addWire(route(mpuGnd, espGnd, 8), colors.minus, 'GND', null);
    addWire(route(mpuSda, espSda, 10), colors.sda, 'SDA', 'G' + P.sdaGpio, 'sda');
    addWire(route(mpuScl, espScl, 12), colors.scl, 'SCL', 'G' + P.sclGpio, 'scl');

    // 0.96" OLED: MPU6050과 GPIO8/9 I2C 버스를 공유한다.
    if (P.wkOledOn) {
      const oledZ = LID_CAGE_H + LID_PLATE + OLED.h + 0.15;
      const oledPin = i => world(G[2], [-3.81 + i * 2.54, -OLED.d / 2 + 1.5, oledZ]);
      const oGnd = oledPin(0), oVcc = oledPin(1), oScl = oledPin(2), oSda = oledPin(3);
      addWire(route(oVcc, esp3V3, 14), colors.plus, 'VCC', '3V3');
      addWire(route(oGnd, espGnd, 16), colors.minus, 'GND', null);
      addWire(route(oSda, espSda, 18), colors.sda, 'SDA', 'G' + P.sdaGpio, 'sda');
      addWire(route(oScl, espScl, 20), colors.scl, 'SCL', 'G' + P.sclGpio, 'scl');
    }
  }

  function workoutRulerDims(q) {
    const f = v => v.toFixed(1);
    return [
      { a: [-BAT.w / 2, -q.D / 2 - 6, 0.2], b: [BAT.w / 2, -q.D / 2 - 6, 0.2],
        tick: [0, -1, 0], label: f(BAT.w),
        extA: [-BAT.w / 2, q.batteryY - BAT.d / 2, 0.2], extB: [BAT.w / 2, q.batteryY - BAT.d / 2, 0.2] },
      { a: [q.W / 2 + 7, q.batteryY - BAT.d / 2, 0.2], b: [q.W / 2 + 7, q.batteryY + BAT.d / 2, 0.2],
        tick: [1, 0, 0], label: f(BAT.d),
        extA: [BAT.w / 2, q.batteryY - BAT.d / 2, 0.2], extB: [BAT.w / 2, q.batteryY + BAT.d / 2, 0.2] },
    ];
  }

  function layoutWarnings(q) {
    const warnings = [];
    const needW = BAT.w + CLR + 2 * q.wall, needD = BAT.d + CLR + 2 * q.wall;
    if (q.W + 0.01 < needW || q.D + 0.01 < needD)
      warnings.push(t('wkBatteryFit', needW.toFixed(1), needD.toFixed(1)));
    const pairNeedW = CHARGER.w + q.mpu.w + 2 * CLR + 1.0 + 2 * q.wall;
    if (q.W + 0.01 < pairNeedW) warnings.push(t('wkRowOverlap'));
    const mpuNeedD = q.mpu.d + CLR + 2 * q.wall;
    if (q.D + 0.01 < mpuNeedD) warnings.push(t('wkMpuDepthFit', mpuNeedD.toFixed(1)));
    const batteryTop = q.batteryZ + BAT.h;
    if (batteryTop > q.baseH - 0.4) warnings.push(t('wkBatteryHeight', (batteryTop + 0.4).toFixed(1)));
    if (q.mpu.h > TRAY_TOP - TRAY_FLOOR_TOP - LID_CAGE_H - 0.8) warnings.push(t('wkMpuHeightFit'));
    const hallNeedD = BAT.d + CLR + q.hallT + CLR + 1.3 + 2 * q.wall;
    const hallNeedH = HALL.h + 1.15;
    if (P.wkHallOn && (q.D < hallNeedD || q.baseH < hallNeedH))
      warnings.push(t('wkHallFit', hallNeedD.toFixed(1), hallNeedH.toFixed(1)));
    if (P.wkOledOn && (q.W < OLED_OUT_W || q.D < OLED_OUT_D))
      warnings.push(t('wkOledFit', OLED_OUT_W.toFixed(1), OLED_OUT_D.toFixed(1)));
    return warnings;
  }

  function applyWorkoutExplode() {
    if (!lastLayout) return;
    const gap = 18 * +document.getElementById('explode').value;
    G[0].position.set(0, 0, 0);
    G[1].position.set(0, 0, lastLayout.baseH - JOINT_H + gap);
    const trayTopWorld = lastLayout.baseH - JOINT_H + TRAY_TOP;
    G[2].position.set(0, 0, trayTopWorld - LID_CAGE_H + gap * 2);
    for (let i = 3; i < G.length; i++) G[i].position.set(0, 0, 0);
    markRulers();
    refreshWires();
  }

  function rebuildWorkout() {
    status.classList.add('on');
    setTimeout(() => {
      try {
        const t0 = performance.now();
        G.forEach(g => g.clear()); clearFloors();
        const mans = [buildBase(), buildTray(), buildLid()];
        geos = mans.map(m => { const geo = manToGeo(m); m.delete(); return geo; });
        const { xray } = getView();
        meshes = geos.map(g => new THREE.Mesh(g, xray ? matCaseX : matCase));
        for (let i = 0; i < 3; i++) G[i].add(meshes[i]);
        setFloorMeshes(meshes); lastLayout = layout(); placeGhosts(lastLayout);
        applyWorkoutExplode(); setRulerExtras('workout', workoutRulerDims(lastLayout));
        const totalH = lastLayout.baseH + (TRAY_TOP - JOINT_H) + LID_PLATE
          + (P.wkOledOn ? OLED_RIM_H : 0);
        const totalW = P.wkOledOn ? Math.max(lastLayout.W, OLED_OUT_W) : lastLayout.W;
        const totalD = P.wkOledOn ? Math.max(lastLayout.D, OLED_OUT_D) : lastLayout.D;
        document.getElementById('dims').textContent =
          t('workoutDims', totalW.toFixed(1), totalD.toFixed(1), totalH.toFixed(1),
            (performance.now() - t0).toFixed(0)) + '\n' + t('workoutReady', P.wkHallOn, P.wkOledOn);
        document.getElementById('warnings').textContent = layoutWarnings(lastLayout).join('\n');
      } catch (e) {
        geos = [null, null, null];
        document.getElementById('warnings').textContent = t('buildErrGeneric', e.message || e);
        console.error(e);
      }
      status.classList.remove('on');
    }, 10);
  }

  document.getElementById('wkExBody').addEventListener('click', () => {
    if (geos[0]) downloadSTL(geos[0].clone(), P.wkHallOn
      ? 'workout_sensor_ky035_tw802040_base.stl'
      : 'workout_sensor_tw802040_base.stl');
  });
  document.getElementById('wkExTray').addEventListener('click', () => {
    if (geos[1]) downloadSTL(geos[1].clone(), 'workout_sensor_electronics_tray.stl');
  });
  document.getElementById('wkExLid').addEventListener('click', () => {
    if (!geos[2]) return;
    const geo = geos[2].clone();
    // 일반 뚜껑은 평평한 윗면을 베드로 뒤집는다. OLED 림이 있으면 화면 받침이 위로
    // 향해야 하므로 모델 방향 그대로 내보내고 ESP32 케이지 쪽 브리지만 출력한다.
    if (!P.wkOledOn) geo.rotateX(Math.PI);
    geo.computeBoundingBox();
    geo.translate(0, 0, -geo.boundingBox.min.z);
    downloadSTL(geo, P.wkOledOn
      ? 'workout_sensor_esp32_oled096_lid.stl'
      : 'workout_sensor_esp32_lid.stl');
  });

  return { rebuildWorkout, applyWorkoutExplode, drawWorkoutWires };
}
