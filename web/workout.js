// 운동 모션 센서 — TW802040(40×20×8) 배터리 footprint에 맞춘 3단 적층 케이스.
// 1) 자석+배터리 베이스, 2) TP4056+MPU6050 트레이, 3) ESP32+LED 뚜껑.
// 좌표: X=배터리 40mm 방향, Y=20mm/운동 상하 방향, Z=자석면→뚜껑.

export function initWorkout(env) {
  const {
    THREE, P, t, G, MATS, matCase, matCaseX, boxBrush, add, sub,
    manToGeo, downloadSTL, status, getView, clearFloors, setFloorMeshes,
    markRulers, setRulerExtras,
  } = env;

  const BAT = { w: 40, d: 20, h: 8 };
  const ESP = { w: 24, d: 18, h: 4.2 };
  const CHARGER = { w: 19, d: 14, h: 4.5 };
  const MAG = { w: 30, d: 10, h: 2 };
  const LED = { w: 5, d: 2, h: 7 };
  const CLR = 0.4;
  const JOINT_H = 1.6, JOINT_W = 1.05;
  const TRAY_TOP = 12.6, TRAY_FLOOR_TOP = 2.8;
  const LID_CAGE_H = 4.6, LID_PLATE = 2.2;

  let geos = [null, null, null], meshes = [null, null, null], lastLayout = null;
  const partMat = color => new THREE.MeshStandardMaterial({ color, roughness: 0.58, transparent: true, opacity: 0.9 });
  const mpuMat = partMat(0x3c9b70);
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
    const pairW = CHARGER.w + CLR + mpu.w + CLR;
    const gap = Math.max(0.2, innerW - 1.0 - pairW);
    const left = -innerW / 2 + 0.5;
    const chargerX = left + (CHARGER.w + CLR) / 2;
    const mpuX = chargerX + (CHARGER.w + CLR) / 2 + gap + (mpu.w + CLR) / 2;
    return {
      W, D, baseH, wall, innerW, mpu, gap, chargerX, mpuX,
      magnetZ: P.wkMagSkin, batteryZ: P.wkMagSkin + MAG.h + 0.2,
      ledX: W / 2 - wall - 3.4,
    };
  }

  function jointDims(q) {
    const outW = q.W - 2 * q.wall + 0.2, outD = q.D - 2 * q.wall + 0.2;
    return { outW, outD, inW: outW - 2 * JOINT_W, inD: outD - 2 * JOINT_W };
  }

  function buildBase() {
    const q = layout(), r = Math.min(5.5, q.W / 2 - 1, q.D / 2 - 1);
    let body = boxBrush(q.W, q.D, q.baseH, 0, 0, 0, r);
    body = sub(body, boxBrush(MAG.w + CLR, MAG.d + CLR, MAG.h + 0.25, 0, 0, q.magnetZ, 0.8));
    body = sub(body, boxBrush(BAT.w + CLR, BAT.d + CLR, q.baseH - q.batteryZ + 0.2,
                              0, 0, q.batteryZ, 1.4));
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
    lid = sub(lid, boxBrush(LED.d + 0.3, LED.w + 0.3, LID_PLATE + 0.8,
                            q.ledX, 0, LID_CAGE_H - 0.4, 0.35));
    return lid;
  }

  function ghostBox(group, dims, pos, mat) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...dims), mat);
    mesh.position.set(...pos); mesh.visible = getView().showGhosts; mesh.userData.ghost = true;
    group.add(mesh);
  }

  function placeGhosts(q) {
    ghostBox(G[0], [MAG.w, MAG.d, MAG.h], [0, 0, q.magnetZ + MAG.h / 2], magnetMat);
    ghostBox(G[0], [BAT.w, BAT.d, BAT.h], [0, 0, q.batteryZ + BAT.h / 2], MATS.bat);
    ghostBox(G[1], [CHARGER.w, CHARGER.d, CHARGER.h],
             [q.chargerX, 0, TRAY_FLOOR_TOP + CHARGER.h / 2], MATS.mod);
    ghostBox(G[1], [q.mpu.w, q.mpu.d, q.mpu.h],
             [q.mpuX, 0, TRAY_FLOOR_TOP + q.mpu.h / 2], mpuMat);
    ghostBox(G[2], [ESP.w, ESP.d, ESP.h], [0, 0, 0.2 + ESP.h / 2], MATS.esp);
    ghostBox(G[2], [LED.d, LED.w, LED.h], [q.ledX, 0, LID_CAGE_H + LED.h / 2 - 0.6], MATS.led);
  }

  function workoutRulerDims(q) {
    const f = v => v.toFixed(1);
    return [
      { a: [-BAT.w / 2, -q.D / 2 - 6, 0.2], b: [BAT.w / 2, -q.D / 2 - 6, 0.2],
        tick: [0, -1, 0], label: f(BAT.w),
        extA: [-BAT.w / 2, -BAT.d / 2, 0.2], extB: [BAT.w / 2, -BAT.d / 2, 0.2] },
      { a: [q.W / 2 + 7, -BAT.d / 2, 0.2], b: [q.W / 2 + 7, BAT.d / 2, 0.2],
        tick: [1, 0, 0], label: f(BAT.d),
        extA: [BAT.w / 2, -BAT.d / 2, 0.2], extB: [BAT.w / 2, BAT.d / 2, 0.2] },
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
        const totalH = lastLayout.baseH + (TRAY_TOP - JOINT_H) + LID_PLATE;
        document.getElementById('dims').textContent =
          t('workoutDims', lastLayout.W.toFixed(1), lastLayout.D.toFixed(1), totalH.toFixed(1),
            (performance.now() - t0).toFixed(0)) + '\n' + t('workoutReady');
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
    if (geos[0]) downloadSTL(geos[0].clone(), 'workout_sensor_tw802040_base.stl');
  });
  document.getElementById('wkExTray').addEventListener('click', () => {
    if (geos[1]) downloadSTL(geos[1].clone(), 'workout_sensor_electronics_tray.stl');
  });
  document.getElementById('wkExLid').addEventListener('click', () => {
    if (!geos[2]) return;
    const geo = geos[2].clone(); geo.rotateX(Math.PI); geo.computeBoundingBox();
    geo.translate(0, 0, -geo.boundingBox.min.z);
    downloadSTL(geo, 'workout_sensor_esp32_led_lid.stl');
  });

  return { rebuildWorkout, applyWorkoutExplode };
}
