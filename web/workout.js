// 운동 모션 센서 — TW802040(40×20×8) 배터리 footprint에 맞춘 3단 적층 케이스.
// 1) KY-035+자석+배터리 베이스, 2) TP4056+MPU6050 트레이, 3) ESP32+OLED 뚜껑.
// 좌표: X=배터리 40mm 방향, Y=20mm/운동 상하 방향, Z=자석면→뚜껑.

export function initWorkout(env) {
  const {
    THREE, P, t, G, MATS, matCase, matCaseX, boxBrush, add, sub,
    meshBrush, ASSETS,
    manToGeo, downloadSTL, status, getView, clearFloors, setFloorMeshes,
    markRulers, setRulerExtras, refreshWires = () => {},
  } = env;

  const BAT = { w: 40, d: 20 };   // 두께는 실측값(P.wkBatH)
  const ESP = { w: 24, d: 18, h: 4.2 };
  // TP4056 실측: 외형 27 × 17.3, 총높이 4.0 (USB-C 커넥터 포함), PCB만 1.2.
  // 긴 변 양쪽의 폭 2.6mm 날개(패드 열)는 부품이 없어 걸림턱으로 눌러 잡을 수 있다.
  const CHARGER = { w: 27, d: 17.3, h: 4.0, pcb: 1.2, wing: 2.6 };
  const HALL = { w: 19, h: 15 };       // KY-035 PCB: X=19, 세움 높이 Z=15
  const MAG = { w: 30, d: 10, h: 2 };
  const OLED = { w: 25, d: 27.05, h: 3.5, winW: 23.2, winD: 12.4, winY: 0.975 };
  const CLR = 0.4;
  const OLED_CLR = 0.4, OLED_RIM = 1.6, OLED_RIM_H = 4.2;
  const OLED_CAV_W = OLED.w + OLED_CLR, OLED_CAV_D = OLED.d + OLED_CLR;
  const OLED_OUT_W = OLED_CAV_W + 2 * OLED_RIM, OLED_OUT_D = OLED_CAV_D + 2 * OLED_RIM;
  const JOINT_H = 1.6, JOINT_W = 0.8;
  // USB-C 셸은 PCB 위에 얹히므로 셸 z중심 = PCB + (총높이 - PCB)/2.
  const USB_Z = CHARGER.pcb + (CHARGER.h - CHARGER.pcb) / 2;
  // 트레이 바닥은 2.0 두께로 깔고, 모듈 외형대로 POCKET_D 만큼 파서 보드를 떨어뜨려
  // 넣는다. SEAT_Z = 파낸 자리의 바닥(= 보드 안착면), TRAY_FLOOR_TOP = 바닥 윗면.
  const TRAY_TOP = 12.6, TRAY_FLOOR = 2.0, TRAY_FLOOR_TOP = 1.4 + TRAY_FLOOR;
  const POCKET_D = 1.2, SEAT_Z = TRAY_FLOOR_TOP - POCKET_D;
  const WIRE_SLOT = { w: 9.0, d: 3.5 };   // 배터리 배선 관통 슬롯 (X × Y)
  const LID_CAGE_H = 4.6, LID_PLATE = 1.8;

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

  // TP4056 충전 포트: 딤섬 클리커와 같은 나팔형 USB-C 툴로 뚫어 플러그가 비스듬히
  // 들어와도 물리게 한다. 원본 툴은 길이 9에 나팔 입구가 +X이므로 Z로 180° 돌려
  // -X 바깥면을 향하게 하고, 벽 두께에 맞춰 길이만 스케일한다.
  function usbCut(q) {
    const L = Math.max(3.0, q.wall + 1.6);
    const z = SEAT_Z + USB_Z;
    if (!ASSETS || !ASSETS.usb)   // 에셋 로드 전이면 사각 개구부로 대체
      return boxBrush(L + 1.0, 9.4, 3.6, -q.W / 2 + q.wall / 2, 0, z - 1.8, 1.0);
    const m = new THREE.Matrix4()
      .makeTranslation(-(q.W / 2 + 0.4) + L / 2, 0, z)
      .multiply(new THREE.Matrix4().makeRotationZ(Math.PI))
      .multiply(new THREE.Matrix4().makeScale(L / 9, 1, 3.5 / 3.8));
    return meshBrush(ASSETS.usb, m);
  }

  function buildTray() {
    const q = layout(), r = Math.min(5.5, q.W / 2 - 1, q.D / 2 - 1);
    const j = jointDims(q), fit = P.wkFit;
    let tray = ring(j.outW - 2 * fit, j.outD - 2 * fit,
                    j.inW + 2 * fit, j.inD + 2 * fit,
                    JOINT_H, 0, Math.max(0.6, r - q.wall - fit));
    tray = add(tray, boxBrush(q.W, q.D, TRAY_FLOOR, 0, 0, 1.4, r));
    tray = add(tray, ring(q.W, q.D, q.W - 2 * q.wall, q.D - 2 * q.wall,
                          TRAY_TOP - 1.4, 1.4, r));
    // 모듈 자리: 바닥을 보드 외형대로 파서 떨어뜨려 넣는다. 깊이는 PCB 두께라
    // 보드 윗면이 바닥과 거의 나란해지고, 사방 벽이 그대로 자리잡기 역할을 한다.
    const leftEdge = q.chargerX + (CHARGER.w + CLR) / 2;
    const rightEdge = q.mpuX - (q.mpu.w + CLR) / 2;
    for (const [cx, mw, md] of [[q.chargerX, CHARGER.w, CHARGER.d],
                                [q.mpuX, q.mpu.w, q.mpu.d]])
      tray = sub(tray, boxBrush(mw + CLR, md + CLR, POCKET_D + 0.2,
                                cx, 0, SEAT_Z, 0.6));

    // 두 포켓을 잇는 배선 홈 — 모듈 사이 전선이 바닥 위로 솟지 않게 한다.
    tray = sub(tray, boxBrush(Math.max(1.2, rightEdge - leftEdge) + 1.2, 3.0,
                              POCKET_D + 0.2, (leftEdge + rightEdge) / 2, 0, SEAT_Z, 0.45));

    // 배터리 +/− 두 가닥이 베이스에서 올라오는 관통 구멍. 기본 위치는 B+/B− 패드가
    // 있는 -X 끝(USB 구멍 옆)이고, wkWireX/wkWireY로 옮길 수 있다. 벽을 뚫지 않도록
    // 안쪽 캐비티 안으로 잘라 넣는다.
    const slotW = WIRE_SLOT.w, slotD = WIRE_SLOT.d;
    const limX = q.W / 2 - q.wall - slotW / 2 - 0.4;
    const limY = q.innerHalfD - JOINT_W - slotD / 2 - 0.4;
    tray = sub(tray, boxBrush(slotW, slotD, TRAY_FLOOR + 1.2,
                              Math.max(-limX, Math.min(limX, P.wkWireX)),
                              Math.max(-limY, Math.min(limY, P.wkWireY)),
                              1.0, Math.min(1.4, slotD / 2 - 0.1)));
    tray = sub(tray, usbCut(q));
    if (P.wkHallOn) {
      // 베이스가 KY-035(높이 15)보다 낮아도 되도록 결합 텅과 트레이 바닥을 관통하는
      // 슬롯을 낸다. 보드 윗부분은 MPU 옆(-Y 벽 쪽) 빈 공간으로 그대로 올라온다.
      tray = sub(tray, boxBrush(HALL.w + CLR + 0.6, q.hallT + CLR + 0.6,
                                TRAY_FLOOR_TOP + 0.4, 0, q.hallY, -0.1, 0.45));
    }
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
    ghostGeo(group, new THREE.BoxGeometry(...dims), pos, mat);
  }

  function ghostGeo(group, geo, pos, mat) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(...pos); mesh.visible = getView().showGhosts; mesh.userData.ghost = true;
    group.add(mesh);
  }

  function placeGhosts(q) {
    ghostBox(G[0], [MAG.w, MAG.d, MAG.h], [0, q.magnetY, q.magnetZ + MAG.h / 2], magnetMat);
    ghostBox(G[0], [BAT.w, BAT.d, P.wkBatH], [0, q.batteryY, q.batteryZ + P.wkBatH / 2], MATS.bat);
    if (P.wkHallOn)
      ghostBox(G[0], [HALL.w, q.hallT, HALL.h], [0, q.hallY, 0.75 + HALL.h / 2], hallMat);
    ghostBox(G[1], [CHARGER.w, CHARGER.d, CHARGER.pcb],
             [q.chargerX, 0, SEAT_Z + CHARGER.pcb / 2], MATS.mod);
    ghostBox(G[1], [9.0, 8.9, CHARGER.h - CHARGER.pcb],
             [q.chargerX - CHARGER.w / 2 + 4.5, 0,
              SEAT_Z + CHARGER.pcb + (CHARGER.h - CHARGER.pcb) / 2], MATS.mod);
    ghostBox(G[1], [q.mpu.w, q.mpu.d, q.mpu.h],
             [q.mpuX, 0, SEAT_Z + q.mpu.h / 2], mpuMat);
    // ESP32-C3 SuperMini는 뚜껑 밑 케이지에 아래에서 끼워 넣는다 — 실물 STL로 표시해야
    // USB(-X)·안테나 방향이 한눈에 보인다. 에셋 로드 전이면 박스로 대체한다.
    if (ASSETS && ASSETS.esp) {
      const eg = ASSETS.esp.clone();
      eg.translate(-ESP.w / 2, -ESP.d / 2, 0);   // min corner 기준 → 중심 정렬
      ghostGeo(G[2], eg, [0, 0, 0.2], MATS.esp);
    } else {
      ghostBox(G[2], [ESP.w, ESP.d, ESP.h], [0, 0, 0.2 + ESP.h / 2], MATS.esp);
    }
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
    // 전선은 케이스 외곽 안쪽에서만 지나가야 한다. 레인은 실제 배선 수만큼
    // 내부 폭(D - 벽 2장)을 균등 분할해 얻고, 높이도 한 칸씩 어긋내 겹침을 막는다.
    const specs = [];
    const wire = (a, b, color, l1, l2, tag) => specs.push({ a, b, color, l1, l2, tag });
    const route = (a, b, lane, i) => {
      const z = Math.max(a[2], b[2]) + 2.0 + i * 0.5;
      return [a, [a[0], a[1], z], [a[0], lane, z + 0.8],
              [b[0], lane, z + 0.8], [b[0], b[1], z], b];
    };
    const flush = () => {
      const half = Math.max(1.0, q.D / 2 - q.wall - 0.8);
      specs.forEach((s, i) => {
        const lane = specs.length > 1
          ? -half + 2 * half * (i + 0.5) / specs.length : 0;
        addWire(route(s.a, s.b, lane, i), s.color, s.l1, s.l2, s.tag);
      });
    };

    const batTop = q.batteryZ + P.wkBatH;
    const batPlus = world(G[0], [-BAT.w / 2 + 2, q.batteryY - 3.2, batTop]);
    const batMinus = world(G[0], [-BAT.w / 2 + 2, q.batteryY + 3.2, batTop]);
    const chgTop = SEAT_Z + CHARGER.pcb;
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

    wire(batPlus, chgBPlus, colors.plus, t('wtBatPlus'), 'B+');
    wire(batMinus, chgBMinus, colors.minus, t('wtBatMinus'), 'B−');
    wire(chgOutPlus, esp5V, colors.plus, 'OUT+', '5V');
    wire(chgOutMinus, espGnd, colors.minus, 'OUT−', 'GND');

    // KY-035: 보드 상단 3핀을 S/AO, +, − 순서로 시각화한다.
    const hallZ = 0.75 + HALL.h;
    const hallAo = world(G[0], [-5, q.hallY, hallZ]);
    const hallVcc = world(G[0], [0, q.hallY, hallZ]);
    const hallGnd = world(G[0], [5, q.hallY, hallZ]);
    if (P.wkHallOn) {
      wire(hallVcc, esp3V3, colors.plus, 'KY +', '3V3');
      wire(hallGnd, espGnd, colors.minus, 'KY −', null);
      wire(hallAo, espHall, colors.gpio, 'S/AO', 'G' + P.wkHallGpio, 'hall');
    }

    // GY-521/MPU6050 헤더의 앞 4개 논리 핀: VCC, GND, SCL, SDA.
    const mpuTop = SEAT_Z + q.mpu.h;
    const mpuPin = x => world(G[1], [q.mpuX + x, -q.mpu.d / 2, mpuTop]);
    const mpuVcc = mpuPin(-5), mpuGnd = mpuPin(-1.7);
    const mpuScl = mpuPin(1.7), mpuSda = mpuPin(5);
    wire(mpuVcc, esp3V3, colors.plus, 'VCC', null);
    wire(mpuGnd, espGnd, colors.minus, 'GND', null);
    wire(mpuSda, espSda, colors.sda, 'SDA', 'G' + P.sdaGpio, 'sda');
    wire(mpuScl, espScl, colors.scl, 'SCL', 'G' + P.sclGpio, 'scl');

    // 0.96" OLED: MPU6050과 GPIO8/9 I2C 버스를 공유한다.
    if (P.wkOledOn) {
      const oledZ = LID_CAGE_H + LID_PLATE + OLED.h + 0.15;
      const oledPin = i => world(G[2], [-3.81 + i * 2.54, -OLED.d / 2 + 1.5, oledZ]);
      const oGnd = oledPin(0), oVcc = oledPin(1), oScl = oledPin(2), oSda = oledPin(3);
      wire(oVcc, esp3V3, colors.plus, 'VCC', '3V3');
      wire(oGnd, espGnd, colors.minus, 'GND', null);
      wire(oSda, espSda, colors.sda, 'SDA', 'G' + P.sdaGpio, 'sda');
      wire(oScl, espScl, colors.scl, 'SCL', 'G' + P.sclGpio, 'scl');
    }
    flush();
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
    const batteryTop = q.batteryZ + P.wkBatH;
    if (batteryTop > q.baseH - 0.4) warnings.push(t('wkBatteryHeight', (batteryTop + 0.4).toFixed(1)));
    if (q.mpu.h > TRAY_TOP - SEAT_Z - LID_CAGE_H - 0.8) warnings.push(t('wkMpuHeightFit'));
    const hallNeedD = BAT.d + CLR + q.hallT + CLR + 1.3 + 2 * q.wall;
    // KY-035는 트레이 바닥 슬롯을 지나 위로 올라오므로, 베이스 높이가 아니라
    // ESP32 케이지 밑면까지의 전체 여유가 기준이다.
    const hallCeil = q.baseH - JOINT_H + (TRAY_TOP - LID_CAGE_H);
    const hallNeedH = 0.75 + HALL.h + 0.4 - (TRAY_TOP - LID_CAGE_H) + JOINT_H;
    if (P.wkHallOn && (q.D < hallNeedD || 0.75 + HALL.h + 0.4 > hallCeil))
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
