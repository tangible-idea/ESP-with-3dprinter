// 운동 모션 센서 — TW802040(40×20×8) 배터리 footprint에 맞춘 3단 적층 케이스.
// 1) KY-035+자석+배터리 베이스, 2) 충전모듈 또는 XIAO+MPU6050 트레이, 3) SuperMini 또는 OLED 뚜껑.
// 좌표: X=배터리 40mm 방향, Y=20mm/운동 상하 방향, Z=자석면→뚜껑.

export function initWorkout(env) {
  const {
    THREE, P, t, G, MATS, ESP_TYPES, ESP_PINS_XIAO,
    matCase, matCaseX, boxBrush, add, sub,
    meshBrush, ASSETS,
    manToGeo, downloadSTL, status, getView, clearFloors, setFloorMeshes,
    markRulers, setRulerExtras, refreshWires = () => {},
  } = env;

  const BAT = { w: 40, d: 20 };   // 두께는 실측값(P.wkBatH)
  const ESP = { w: 24, d: 18, h: 4.2 };
  const XIAO = { h: ESP_TYPES.xiao.h,
                 pcb: 1.0 + ESP_TYPES.xiao.pcbRise, usbZ: ESP_TYPES.xiao.usbZ };
  // 뒷면 BAT−는 D2(GPIO4), BAT+는 D3(GPIO5) 근처. 핀 자체에 배터리를 잇는 것이 아니다.
  // Seeed 뒷면 핀아웃 기준: USB는 −X, D0~D6 핀 열은 −Y.
  const XIAO_BAT_PADS = {
    minus: [ESP_PINS_XIAO[4][0], -4.4],
    plus: [ESP_PINS_XIAO[5][0], -4.4],
  };
  // TP4056 실측: 외형 27 × 17.3, 총높이 4.0 (USB-C 커넥터 포함), PCB만 1.2.
  // 긴 변 양쪽의 폭 2.6mm 날개(패드 열)는 부품이 없어 걸림턱으로 눌러 잡을 수 있다.
  // generic은 메인 디자인의 기존 소형 충전모듈(19 × 14 × 4.5)과 같은 치수.
  // usbZ = 보드 밑면 기준 USB 셸 z중심.
  const CHARGERS = {
    tp4056: { w: 27, d: 17.3, h: 4.0, pcb: 1.2, usbZ: 1.2 + (4.0 - 1.2) / 2 },
    generic: { w: 19, d: 14, h: 4.5, pcb: 1.2, usbZ: 2.9 },
  };
  // 외형 X·Y는 슬라이더(wkChgW/wkChgD) 실측값으로 덮어쓴다 — 포켓·배선 구멍·받침 턱이 따라온다.
  const chargerSpec = () => ({ ...(CHARGERS[P.wkModType] || CHARGERS.tp4056),
                               w: Number(P.wkChgW) || 27, d: Number(P.wkChgD) || 17.3 });
  const CLR = 0.4;
  const xiaoOn = () => P.wkEspType === 'xiao';
  // 포켓 절삭에서 CLR을 더하므로, 슬라이더의 완성 치수에서 미리 뺀다.
  const trayBoard = () => xiaoOn()
    ? { ...XIAO, w: P.wkXiaoPocketX - CLR, d: P.wkXiaoPocketY - CLR }
    : chargerSpec();
  const HALL = { w: 19, h: 15 };       // KY-035 PCB: X=19, 세움 높이 Z=15
  const MAG = { w: 30, d: 10 };   // 두께는 실측값(P.wkMagH)
  const OLED = { w: 25, d: 27.05, h: 3.5, winW: 23.2, winD: 12.4, winY: 0.975 };
  const OLED_CLR = 0.4, OLED_RIM = 1.6, OLED_RIM_H = 4.2;
  const OLED_CAV_W = OLED.w + OLED_CLR, OLED_CAV_D = OLED.d + OLED_CLR;
  const OLED_OUT_W = OLED_CAV_W + 2 * OLED_RIM, OLED_OUT_D = OLED_CAV_D + 2 * OLED_RIM;
  // 결합부: 텅이 얇으면 베드에서 떨어져 나가거나 조립 중 부러진다. 벽 두께의 85%를
  // 그대로 쓰고(최대 1.6), 물림 깊이도 2.2로 늘려 옆으로 흔들리지 않게 한다.
  // 뚜껑 결합은 2.2 고정. 1층↔2층 결합 깊이는 2층 바닥 두께(wkTrayFloor)에서 정해진다.
  const JOINT_H = 2.2;
  const jointW = () => Math.min(1.6, Math.max(0.9, P.wkWall * 0.85));
  // 모듈 외형대로 바닥을 POCKET_D 만큼 파서 보드를 떨어뜨려 넣는다.
  // SEAT_Z = 파낸 자리의 바닥(= 보드 안착면), TRAY_FLOOR_TOP = 바닥 윗면.
  // 트레이 바닥은 베드에 그대로 닿는 통짜 판이다. 결합 홈이 밑면에서 BASE_JOINT_H 만큼
  // 파고들고 MPU·충전모듈 포켓 끝이 그 홈 위에 걸리므로, 바닥 = 홈 + 0.4 덮개 + 포켓.
  // 두께는 wkTrayFloor 하나로 정하고 아래 syncFloor()가 셋으로 나눈다. 트레이 전체
  // 높이는 보드 안착면 기준으로 맞춰, 바닥이 얇아져도 보드 위 여유는 그대로 둔다.
  let BASE_JOINT_H, POCKET_D, TRAY_FLOOR, TRAY_FLOOR_TOP, TRAY_TOP_DEFAULT, SEAT_Z;
  function syncFloor() {
    const F = Math.min(4.4, Math.max(0.4, Number(P.wkTrayFloor) || 3.4));
    let joint = 2.2, pocket = 0.8, cover = 0.4;
    if (F >= 3.4) {
      cover = F - joint - pocket;   // 더 두꺼우면 덮개로 보탠다
    } else {
      // 결합 깊이(2.2)를 가장 늦게 깎는다: 포켓 0.8→0 을 먼저 없애고, 그래도 얇으면
      // 결합을 줄인다. 결합이 0.8 밑이면 텅이 제 역할을 못 하므로 아예 없애고 평판으로 얹는다.
      let cut = 3.4 - F;
      const take = (v, min) => { const d = Math.min(cut, v - min); cut -= d; return v - d; };
      pocket = take(pocket, 0); joint = take(joint, 0);
      if (joint < 0.8) joint = 0;
      cover = F - joint - pocket;
    }
    BASE_JOINT_H = joint; POCKET_D = pocket;
    TRAY_FLOOR = TRAY_FLOOR_TOP = F;
    SEAT_Z = F - pocket;
    TRAY_TOP_DEFAULT = SEAT_Z + 9.2;
    return cover;
  }
  syncFloor();
  // 배터리 배선 관통 슬롯 — 크기는 wkWireLen(X) × wkWireW(Y)로 조절한다.
  // ESP32-C3 SuperMini USB-C 셸: 폭 8.94 × 두께 3.26, 보드 끝에서 1.5 돌출.
  const USB_C = { w: 8.94, d: 3.26, over: 1.5 };
  const USB_SOCK_WALL = 1.2;
  const SW = { w: 8.4, d: 3.6, body: 4.0 };   // SPDT 슬라이드 스위치 (창 8.4 × 3.6)
  const ESP_PCB = 1.0;   // PCB 두께
  // SuperMini는 부품면(USB 셸)이 뚜껑 상판 쪽을 향하게 끼워 상판에 0.2 띄워 닿는다.
  // 케이지가 깊어지면 보드는 상판 쪽에 붙고 남는 여유는 열린 밑쪽으로 간다.
  const espZ0 = q => Math.max(0.2, q.lidCageH - 0.2 - ESP.h);
  // 핀헤더를 부품면 쪽(위)으로 납땜해 뚜껑 상판을 관통시키는 모드. 핀은 2.54 피치 8개씩
  // 두 줄(±8). 헤더 플라스틱 2.5는 상판 밑, 긴 핀(6.0)이 상판 위로 올라온다.
  const pinsUp = () => !xiaoOn() && P.wkEspPinsUp;
  const MINI_PIN_ROW_Y = 8, HEADER_BODY = 2.5, HEADER_PIN = 6.0;
  const miniPinX = i => -0.25 + (i - 3.5) * 2.54;
  // OLED는 핀 끝 위로 wkOledLift 만큼 띄워 얹는다 (핀 모드가 아니면 상판에 바로 앉음).
  const oledLift = () => (P.wkOledOn && pinsUp() ? Math.max(0, Number(P.wkOledLift) || 0) : 0);
  const LID_CAGE_DEFAULT = 4.6, LID_PLATE = 1.8;

  let geos = [null, null, null], meshes = [null, null, null], lastLayout = null;
  const partMat = color => new THREE.MeshStandardMaterial({ color, roughness: 0.58, transparent: true, opacity: 0.9 });
  const mpuMat = partMat(0x3c9b70);
  const hallMat = partMat(0x8f5aa8);
  const switchMat = partMat(0xb0752f);
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

  // 걸림 꼬다리 단면(X-Z): 벽면 x0에서 -X로 lip 만큼 나온 수평 밑면 + 코 + 45° 윗면.
  // Y 방향으로 len 만큼 뽑아 cy에 가운데 맞춘다. 벽 안으로 0.2 파묻어 확실히 합쳐지게 한다.
  function clipGeo(lip, nose, len, x0, cy, z0) {
    const s = new THREE.Shape();
    s.moveTo(x0 + 0.2, z0);
    s.lineTo(x0 - lip, z0);
    s.lineTo(x0 - lip, z0 + nose);
    s.lineTo(x0, z0 + nose + lip);
    s.lineTo(x0 + 0.2, z0 + nose + lip);
    s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: len, bevelEnabled: false });
    g.deleteAttribute('uv');
    g.rotateX(Math.PI / 2);          // 단면 y → z, 뽑은 방향 z → -y
    g.translate(0, cy + len / 2, 0);
    return g;
  }

  function layout() {
    syncFloor();
    const W = P.wkWidth, D = P.wkLength, baseH = P.wkBodyH, wall = P.wkWall, mpu = mpuSpec();
    // 뚜껑 결합 텅(2.2mm)이 상판 아래에 남도록 최소 0.2mm 여유를 둔다.
    const espCaseH = Math.max(JOINT_H + 0.2,
      Math.min(12, Number(P.wkEspCaseH) || LID_CAGE_DEFAULT));
    // SuperMini는 케이지와 외벽을 같이 높인다. XIAO는 트레이 외벽을 높이고 뚜껑의
    // 결합부 깊이는 고정해 보드 위 공간을 확보한다. 기본값 4.6은 기존 형상과 동일.
    const trayTop = TRAY_TOP_DEFAULT + espCaseH - LID_CAGE_DEFAULT;
    const lidCageH = xiaoOn() ? LID_CAGE_DEFAULT : espCaseH;
    const innerW = W - 2 * wall;
    const innerHalfD = D / 2 - wall;
    const board = trayBoard();
    const pairW = board.w + CLR + mpu.w + CLR;
    const gap = Math.max(0.2, innerW - 1.0 - pairW);
    const left = -innerW / 2 + 0.5;
    // MPU 자리는 고정하고 TP4056만 wkChgX 만큼 옮긴다 — 음수면 USB(-X) 쪽으로 붙으면서
    // 두 포켓 사이 칸막이도 같이 USB 쪽으로 밀린다. 벽을 넘지 않게 잘라 넣는다.
    const chargerX0 = left + (board.w + CLR) / 2;
    let mpuX = chargerX0 + (board.w + CLR) / 2 + gap + (mpu.w + CLR) / 2;
    // MPU 포켓은 wkMpuPocket 만큼 따로 깊게 판다(바닥 밑 0.4는 남김). +X 끝이 1층 결합
    // 홈 위에 걸치는데, 홈 덮개(0.2)보다 깊이 파야 하면 MPU를 홈 안쪽으로 당긴다.
    // 칸막이 자리(2.4)가 모자라 못 당기면 덮개가 남는 깊이까지만 판다.
    const jd = jointDims({ W, D, wall });
    const mpuHalfW = (mpu.w + CLR) / 2, mpuHalfD = (mpu.d + CLR) / 2;
    // XIAO는 뚜껑 결합 텅보다 안쪽에 놓여야 보드 가장자리가 텅과 충돌하지 않는다.
    const chargerMin = xiaoOn()
      ? -jd.inW / 2 + board.w / 2 + CLR
      : -innerW / 2 + (board.w + CLR) / 2;
    // wkMpuX/wkMpuY로 MPU 자리를 옮긴다. X는 +X 벽에 붙은 자리가 한계이고, 음수면
    // 충전모듈 쪽으로 오되(충전모듈은 -X 끝까지 밀려남) 칸막이 자리 1.2는 남긴다.
    // Y는 벽 안쪽까지.
    const chgRight0 = chargerMin + (board.w + CLR) / 2;
    mpuX = Math.max(Math.min(mpuX, chgRight0 + 1.2 + mpuHalfW),
                    Math.min(mpuX, mpuX + (Number(P.wkMpuX) || 0)));
    const mpuYLim = Math.max(0, innerHalfD - 0.5 - mpuHalfD);
    const mpuY = Math.max(-mpuYLim, Math.min(mpuYLim, Number(P.wkMpuY) || 0));
    let mpuDepth = Math.max(0, Math.min(Number(P.wkMpuPocket) || 0, TRAY_FLOOR - 0.4));
    if (BASE_JOINT_H > 0 && TRAY_FLOOR - mpuDepth < BASE_JOINT_H + 0.2) {
      const over = mpuX + mpuHalfW - jd.inW / 2;
      const room = mpuX - mpuHalfW - chgRight0;
      const insideY = Math.abs(mpuY) + mpuHalfD <= jd.inD / 2;
      if (over > 0 && room - over >= 2.4 && insideY) mpuX -= over;
      else if (over > 0 || !insideY)
        mpuDepth = Math.min(mpuDepth, TRAY_FLOOR - BASE_JOINT_H - 0.2);
    }
    const mpuSeatZ = TRAY_FLOOR - mpuDepth;
    const chargerMax = mpuX - (mpu.w + CLR) / 2 - (board.w + CLR) / 2 - 1.2;
    const chargerX = Math.min(Math.max(chargerMin, chargerX0 + P.wkChgX),
                              Math.max(chargerMin, chargerMax));
    const xiaoYLimit = jointDims({ W, D, wall }).inD / 2 - board.d / 2 - CLR;
    const boardY = xiaoOn() ? Math.max(-xiaoYLimit,
      Math.min(xiaoYLimit, P.wkUsbY)) : 0;
    // KY-035를 -Y 벽에 세우고, 보드 안쪽면에서 wkHallGap 떨어진 곳에 자석 가장자리를 둔다.
    const hallY = -innerHalfD + P.wkHallT / 2 + 0.25;
    const hallInnerY = hallY + P.wkHallT / 2;
    const batteryY = P.wkHallOn ? hallInnerY + 0.8 + (BAT.d + CLR) / 2 : 0;
    const magnetY = P.wkHallOn ? hallInnerY + P.wkHallGap + MAG.d / 2 : 0;
    return {
      W, D, baseH, wall, trayTop, lidCageH, innerW, innerHalfD,
      mpu, gap, chargerX, boardY, mpuX, mpuY, mpuDepth, mpuSeatZ,
      // 스위치 창 위로 벽이 1mm는 남아야 하고, 몸통이 뚜껑에 닿지 않게 높이를 묶는다.
      swZ: Math.max(TRAY_FLOOR_TOP + SW.d / 2 + 0.3,
                    Math.min(P.wkSwZ, trayTop - 1.0 - (SW.d + 0.3) / 2)),
      hallY, hallInnerY, batteryY, magnetY, hallT: P.wkHallT,
      magnetZ: P.wkMagSkin, batteryZ: P.wkMagSkin + P.wkMagH + 0.2,
    };
  }

  function jointDims(q) {
    const outW = q.W - 2 * q.wall + 0.2, outD = q.D - 2 * q.wall + 0.2;
    const jw = jointW();
    return { outW, outD, inW: outW - 2 * jw, inD: outD - 2 * jw };
  }

  function buildBase() {
    const q = layout(), r = Math.min(5.5, q.W / 2 - 1, q.D / 2 - 1);
    let body = boxBrush(q.W, q.D, q.baseH, 0, 0, 0, r);
    body = sub(body, boxBrush(MAG.w + CLR, MAG.d + CLR, P.wkMagH + 0.25,
                              0, q.magnetY, q.magnetZ, 0.8));
    body = sub(body, boxBrush(BAT.w + CLR, BAT.d + CLR, q.baseH - q.batteryZ + 0.2,
                              0, q.batteryY, q.batteryZ, 1.4));
    if (P.wkHallOn) {
      // KY-035 세움 슬롯: 센서 소자 끝이 바닥/자석 쪽, 커넥터가 위쪽으로 오도록 삽입.
      body = sub(body, boxBrush(HALL.w + CLR, q.hallT + CLR,
                                q.baseH - 0.75 + 0.2,
                                0, q.hallY, 0.75, 0.45));
    }
    // 결합부 암수를 뒤집었다: 1층이 텅을 위로 세우고 2층이 밑면에 홈을 판다.
    // 그래야 2층 밑면이 완전히 평평해져 바닥 밑에 서포트가 생기지 않는다.
    const j = jointDims(q), fit = P.wkFit;
    // 텅은 홈보다 0.2 낮게 — 홈 천장(브리지)이 처져도 끝까지 들어간다.
    if (BASE_JOINT_H > 0)
      body = add(body, ring(j.outW - 2 * fit, j.outD - 2 * fit,
                            j.inW + 2 * fit, j.inD + 2 * fit,
                            BASE_JOINT_H - 0.2, q.baseH, Math.max(0.6, r - q.wall - fit)));
    return body;
  }

  // TP4056 충전 포트: 딤섬 클리커와 같은 나팔형 USB-C 툴로 뚫어 플러그가 비스듬히
  // 들어와도 물리게 한다. 원본 툴은 길이 9에 나팔 입구가 +X이므로 Z로 180° 돌려
  // -X 바깥면을 향하게 하고, 벽 두께에 맞춰 길이만 스케일한다.
  function usbCut(q) {
    const L = Math.max(3.0, q.wall + 1.6);
    const z = SEAT_Z + (xiaoOn() ? XIAO.usbZ : chargerSpec().usbZ);
    const y = xiaoOn() ? q.boardY : P.wkUsbY;
    // 원래 나팔형 USB 구멍에서 XIAO 쪽만 폭 약 0.4mm, 높이 약 0.36mm 축소.
    const usbYScale = xiaoOn() ? 0.96 : 1;
    const usbZScale = (xiaoOn() ? 3.2 : 3.5) / 3.8;
    if (!ASSETS || !ASSETS.usb)   // 에셋 로드 전이면 사각 개구부로 대체
      return boxBrush(L + 1.0, xiaoOn() ? 9.0 : 9.4,
                      xiaoOn() ? 3.3 : 3.6,
                      -q.W / 2 + q.wall / 2, y,
                      z - (xiaoOn() ? 1.65 : 1.8), 1.0);
    const m = new THREE.Matrix4()
      .makeTranslation(-(q.W / 2 + 0.4) + L / 2, y, z)
      .multiply(new THREE.Matrix4().makeRotationZ(Math.PI))
      .multiply(new THREE.Matrix4().makeScale(L / 9, usbYScale, usbZScale));
    return meshBrush(ASSETS.usb, m);
  }

  function buildTray() {
    const q = layout(), r = Math.min(5.5, q.W / 2 - 1, q.D / 2 - 1);
    const j = jointDims(q), fit = P.wkFit;
    // 바닥판은 베드에 평평하게 놓인다. 결합 홈만 밑면에서 위로 파고들어오므로
    // 서포트가 필요한 곳은 폭 1mm 남짓의 홈 천장(브리지)뿐이다.
    let tray = boxBrush(q.W, q.D, TRAY_FLOOR, 0, 0, 0, r);
    if (BASE_JOINT_H > 0)
      tray = sub(tray, ring(j.outW, j.outD, j.inW, j.inD, BASE_JOINT_H + 0.2,
                            -0.2, Math.max(0.8, r - q.wall)));
    tray = add(tray, ring(q.W, q.D, q.W - 2 * q.wall, q.D - 2 * q.wall,
                          q.trayTop - TRAY_FLOOR, TRAY_FLOOR, r));
    // 모듈 자리: 바닥을 보드 외형대로 POCKET_D만큼 파서 떨어뜨려 넣는다.
    // 얕아도 사방 벽이 보드를 자리잡아 준다.
    // 납땜 릴리프: 보드 밑면 패드 열에 납이 볼록하게 남으면 보드가 뜬다. 그 줄을
    // 바닥까지 아예 관통시켜 납이 얼마나 두껍든 걸리지 않게 한다. 단, 결합 홈
    // (밑면에서 BASE_JOINT_H) 자리는 건드리지 않도록 바깥쪽 한계선 안으로 잘라 넣는다.
    function solderRelief(t, edgeX, depthY, dir = -1, cy = 0) {
      const sw = P.wkSolderW;
      if (sw <= 0.1) return t;
      // 결합 홈이 없으면 어디든 관통해도 된다.
      const lim = BASE_JOINT_H > 0 ? jointDims(q).inW / 2 - 0.5 : Infinity;
      const clamp = v => Math.max(-lim, Math.min(lim, v));
      const r0 = Math.min(edgeX, edgeX + dir * sw), r1 = Math.max(edgeX, edgeX + dir * sw);
      const x0 = clamp(r0), x1 = clamp(r1);
      if (x1 - x0 >= 0.4)
        t = sub(t, boxBrush(x1 - x0, depthY, TRAY_FLOOR + 0.4,
                            (x0 + x1) / 2, cy, -0.2, 0.3));
      // 한계선 밖(홈 위)으로 넘어간 부분은 관통 대신 홈 덮개 위까지만 파서, 슬롯이
      // 포켓 끝에 닿게 한다. 안 그러면 관통 구멍만 포켓 가운데에 떠 보인다.
      const zb = BASE_JOINT_H + 0.3;
      if (zb < TRAY_FLOOR - 0.1)
        for (const [o0, o1] of [[r0, Math.min(r1, -lim + 0.2)], [Math.max(r0, lim - 0.2), r1]])
          if (o1 - o0 > 0.3)
            t = sub(t, boxBrush(o1 - o0, depthY, TRAY_FLOOR + 0.2 - zb,
                                (o0 + o1) / 2, cy, zb, 0.3));
      return t;
    }

    // 칸막이 벽은 wkDivGrow 만큼 USB(-X) 쪽으로 더 두꺼워진다 — TP4056 포켓의 +X
    // 끝만 그만큼 짧아지고, USB 쪽 끝은 제자리라 커넥터 위치는 그대로다.
    const board = trayBoard();
    const grow = xiaoOn() ? 0 : P.wkDivGrow;
    const chgLen = Math.max(1.0, board.w + CLR - grow);
    const chgCx = q.chargerX - grow / 2;
    const leftEdge = chgCx + chgLen / 2;
    const rightEdge = q.mpuX - (q.mpu.w + CLR) / 2;
    tray = sub(tray, boxBrush(chgLen, board.d + CLR, POCKET_D + 0.2,
                              chgCx, q.boardY, SEAT_Z, 0.6));
    if (q.mpuDepth > 0.05)
      tray = sub(tray, boxBrush(q.mpu.w + CLR, q.mpu.d + CLR, q.mpuDepth + 0.2,
                                q.mpuX, q.mpuY, q.mpuSeatZ, 0.6));
    // 칸막이 벽 양쪽(TP4056 오른쪽 끝 · MPU 왼쪽 끝 = GY-521 핀헤더 쪽)에 관통 슬롯.
    if (!xiaoOn()) tray = solderRelief(tray, chgCx + chgLen / 2, board.d + CLR, -1);
    tray = solderRelief(tray, q.mpuX - (q.mpu.w + CLR) / 2, q.mpu.d + CLR, +1, q.mpuY);
    // GY-521 반대쪽(+X, 스위치 쪽) 두 모서리의 고정 구멍(Ø3)에 끼우는 둥근 핀 2개.
    // 높이는 PCB(1.6) 위로 0.8 더 — MPU 윗면과 스위치 받침에는 닿지 않는다.
    const pegD = P.wkMpuPegD, pegIn = P.wkMpuPegIn;
    if (pegD > 0.5)
      for (const sy of [-1, 1])
        tray = add(tray, boxBrush(pegD, pegD, 2.5,
                                  q.mpuX + q.mpu.w / 2 - pegIn,
                                  q.mpuY + sy * (q.mpu.d / 2 - pegIn),
                                  q.mpuSeatZ - 0.1, pegD / 2));

    // 칸막이 벽은 가운데 배선 홈(3.0)을 두고 막대 두 개(' - - ')만 남긴다. 막대 길이는
    // wkDivBar로 조절 — 값을 낮출수록 파인 곳이 바깥에서 중앙 쪽으로 밀려오고,
    // 0이면 칸막이가 통째로 사라진다. TP4056이 실측보다 클 때 여기서 여유를 준다.
    const dividerW = Math.max(1.2, rightEdge - leftEdge) + 1.2;
    const dividerX = (leftEdge + rightEdge) / 2;
    tray = sub(tray, boxBrush(dividerW, 3.0, POCKET_D + 0.2, dividerX, 0, SEAT_Z, 0.45));
    const barEnd = Math.min(q.innerHalfD, 1.5 + P.wkDivBar);
    if (q.innerHalfD - barEnd > 0.05)
      for (const sy of [-1, 1])
        tray = sub(tray, boxBrush(dividerW, q.innerHalfD - barEnd, POCKET_D + 0.2,
                                  dividerX, sy * (barEnd + q.innerHalfD) / 2, SEAT_Z, 0.45));

    // 막대를 바닥 위로 더 세워 두 모듈이 서로 밀리지 않게 한다. ESP32 케이지에 닿지
    // 않는 높이까지만 올라간다.
    // XIAO 클립: 두 막대 윗끝에 포켓(-X) 쪽으로 꼬다리를 내밀어 보드 뒤끝을 눌러 잡는다.
    // 밑면은 PCB 윗면 바로 위의 수평 걸림면, 윗면은 45° 경사라 USB 쪽을 먼저 넣고
    // 뒤끝을 누르면 딸깍 걸린다. 1mm 안쪽 돌출이라 서포트 없이 출력된다.
    const lip = xiaoOn() ? P.wkClipLip : 0;
    const clipZ0 = SEAT_Z + XIAO.pcb + 0.1, clipNose = 0.3;
    const divLimit = q.trayTop - q.lidCageH - TRAY_FLOOR_TOP - 0.3;
    const divH = Math.min(lip > 0.05
                            ? Math.max(P.wkDivH, clipZ0 + clipNose + lip - TRAY_FLOOR_TOP)
                            : P.wkDivH,
                          divLimit);
    const barLen = barEnd - 1.5;
    if (divH > 0.05 && barEnd > 1.5 && rightEdge - leftEdge > 0.05)
      for (const sy of [-1, 1]) {
        const by = sy * (1.5 + barEnd) / 2;
        tray = add(tray, boxBrush(rightEdge - leftEdge, barLen, divH,
                                  (leftEdge + rightEdge) / 2, by, TRAY_FLOOR_TOP, 0.3));
        if (lip > 0.05 && TRAY_FLOOR_TOP + divH >= clipZ0 + clipNose + lip - 0.01)
          tray = add(tray, meshBrush(clipGeo(lip, clipNose, barLen, leftEdge, by, clipZ0)));
      }

    // 배터리 +/− 두 가닥이 베이스에서 올라오는 관통 구멍. 기본 위치는 B+/B− 패드가
    // 있는 -X 끝(USB 구멍 옆)이고, wkWireX/wkWireY로 옮길 수 있다. 벽을 뚫지 않도록
    // 안쪽 캐비티 안으로 잘라 넣는다.
    if (xiaoOn()) {
      // XIAO는 포켓 바닥을 통째로 뚫어 1층과 이어 준다. Y는 포켓 폭 그대로라 보드를
      // 비스듬히 기울이면 구멍을 드나들고, 평평하게 놓으면 X 양 끝 턱(wkXiaoLedge)에
      // 걸쳐 앉는다. 포켓은 결합 홈 안쪽에 놓이므로 구멍도 홈을 건드리지 않는다.
      const holeW = Math.max(4, board.w + CLR - 2 * P.wkXiaoLedge);
      tray = sub(tray, boxBrush(holeW, board.d + CLR, TRAY_FLOOR + 0.4,
                                q.chargerX, q.boardY, -0.2, 0.6));
    } else {
      // 구멍이 커져 더 못 움직일 만큼 자리가 좁아지면 그냥 가운데로 붙인다.
      const slotW = P.wkWireLen, slotD = P.wkWireW;
      const limX = q.W / 2 - q.wall - slotW / 2 - 0.4;
      const limY = q.innerHalfD - jointW() - slotD / 2 - 0.4;
      const clampPos = (v, lim) => (lim <= 0 ? 0 : Math.max(-lim, Math.min(lim, v)));
      const sx = clampPos(P.wkWireX, limX), sy = clampPos(P.wkWireY, limY);
      // 구멍은 TP4056 포켓 안쪽, 테두리 받침 턱(wkChgLedge) 안으로만 낸다. 그래야
      // 보드가 사방 턱에 걸쳐 앉고, 칸막이 막대나 MPU 자리 밑이 뚫려 공중에 뜨지 않는다.
      const ledge = Math.max(0, Math.min(P.wkChgLedge, (board.d + CLR) / 2 - 1));
      const x0 = Math.max(sx - slotW / 2, chgCx - chgLen / 2 + ledge);
      const x1 = Math.min(sx + slotW / 2, chgCx + chgLen / 2 - ledge);
      const y0 = Math.max(sy - slotD / 2, q.boardY - (board.d + CLR) / 2 + ledge);
      const y1 = Math.min(sy + slotD / 2, q.boardY + (board.d + CLR) / 2 - ledge);
      if (x1 - x0 > 1 && y1 - y0 > 1)
        tray = sub(tray, boxBrush(x1 - x0, y1 - y0, TRAY_FLOOR + 0.4,
                                  (x0 + x1) / 2, (y0 + y1) / 2, -0.2,
                                  Math.min(1.4, (y1 - y0) / 2 - 0.1, (x1 - x0) / 2 - 0.1)));
    }
    tray = sub(tray, usbCut(q));
    if (P.wkHallOn) {
      // 베이스가 KY-035(높이 15)보다 낮아도 되도록 결합 텅과 트레이 바닥을 관통하는
      // 슬롯을 낸다. 보드 윗부분은 MPU 옆(-Y 벽 쪽) 빈 공간으로 그대로 올라온다.
      tray = sub(tray, boxBrush(HALL.w + CLR + 0.6, q.hallT + CLR + 0.6,
                                TRAY_FLOOR_TOP + 0.4, 0, q.hallY, -0.1, 0.45));
    }
    tray = sub(tray, ring(j.outW, j.outD, j.inW, j.inD, JOINT_H + 0.15,
                          q.trayTop - JOINT_H, Math.max(0.8, r - q.wall)));
    if (P.wkSwOn && !xiaoOn()) {
      // 전원 스위치(SPDT 슬라이드)는 USB 반대쪽(+X) 짧은 벽에 레버가 밖으로 나오게
      // 끼운다. 뚜껑 결합 홈을 판 뒤에 붙여야 리브가 홈에 깎이지 않는다(그 자리 뚜껑
      // 텅은 비워 둠). 창을 뚫고 양옆 세로 리브가 몸통을 잡으며, 두 리브 사이에 받침 선반을
      // 걸쳐 몸통 밑을 받친다. 선반은 리브 사이 브리지라 서포트 없이 출력된다.
      const wx = q.W / 2 - q.wall / 2;
      tray = sub(tray, boxBrush(q.wall + 2.0, SW.w + 0.3, SW.d + 0.3,
                                wx, P.wkSwY, q.swZ - (SW.d + 0.3) / 2, 0.4));
      const swBottom = q.swZ - (SW.d + 0.3) / 2;
      // 리브와 선반은 바로 밑 MPU 윗면에 닿지 않는 높이에서 시작한다.
      const mpuTop = q.mpuSeatZ + q.mpu.h + 0.3;
      const ribZ = Math.max(mpuTop, swBottom - 1.2);
      const ribH = q.trayTop - 0.2 - ribZ;
      if (ribH > 0.1)
        for (const sy of [-1, 1])
          tray = add(tray, boxBrush(1.2, 1.2, ribH,
                                    q.W / 2 - q.wall - 0.6,
                                    P.wkSwY + sy * (SW.w + 0.3 + 1.2) / 2,
                                    ribZ, 0.3));
      if (swBottom - ribZ > 0.4)
        tray = add(tray, boxBrush(SW.body - 0.4, SW.w + 0.3 + 2.4, swBottom - ribZ,
                                  q.W / 2 - q.wall - (SW.body - 0.4) / 2 + 0.2,
                                  P.wkSwY, ribZ, 0.3));
    }
    return tray;
  }

  function buildLid() {
    const q = layout(), r = Math.min(5.5, q.W / 2 - 1, q.D / 2 - 1);
    const j = jointDims(q), fit = P.wkFit;
    let lid = boxBrush(q.W, q.D, LID_PLATE, 0, 0, q.lidCageH, r);
    lid = add(lid, ring(j.outW - 2 * fit, j.outD - 2 * fit,
                        j.inW + 2 * fit, j.inD + 2 * fit,
                        JOINT_H, q.lidCageH - JOINT_H,
                        Math.max(0.6, r - q.wall - fit)));
    // 전원 스위치 몸통과 리브가 결합 텅 높이까지 올라오므로 그 자리 텅만 비워 둔다.
    // 나머지 세 변의 텅으로도 뚜껑 위치는 충분히 잡힌다.
    if (P.wkSwOn && !xiaoOn()) {
      const nx0 = q.W / 2 - q.wall - SW.body - 0.6;
      lid = sub(lid, boxBrush(q.W / 2 + 1 - nx0, SW.w + 0.3 + 2.4 + 1.0, JOINT_H + 0.2,
                              (nx0 + q.W / 2 + 1) / 2, P.wkSwY,
                              q.lidCageH - JOINT_H - 0.2, 0.4));
    }

    // ESP32-C3 SuperMini는 뚜껑 밑 케이지에 아래에서 끼워 넣는다. 모서리 받침 돌기는
    // 끼울 때 걸려서 없앴고, 대신 -X 끝의 USB-C 소켓이 커넥터를 물어 고정한다.
    if (!xiaoOn()) {
    const cageOuterW = ESP.w + CLR + 2.0, cageOuterD = ESP.d + CLR + 2.0;
    lid = add(lid, ring(cageOuterW, cageOuterD, ESP.w + CLR, ESP.d + CLR,
                        q.lidCageH, 0, 1.0));

    // wkUsbFit은 셸 폭(8.94)에 더하는 값. 출력하면 구멍이 0.1~0.2 좁아지므로 기본 +0.3으로
    // 살짝 여유를 두고, 음수로 내리면 조여서 물린다.
    const cavW = USB_C.w + P.wkUsbFit;
    const cavZ0 = espZ0(q) + ESP_PCB;
    const blkX1 = -(ESP.w + CLR) / 2;
    const blkX0 = -cageOuterW / 2 - USB_C.over - 0.4;
    lid = add(lid, boxBrush(blkX1 - blkX0, cavW + 2 * USB_SOCK_WALL, q.lidCageH,
                            (blkX0 + blkX1) / 2, 0, 0, 0.6));
    // 커넥터가 들어갈 길 — 소켓 바깥부터 케이지 벽을 지나 보드 자리까지 관통시킨다.
    const cavX1 = blkX1 + 0.6, cavX0 = blkX0 - 0.6;
    lid = sub(lid, boxBrush(cavX1 - cavX0, cavW, q.lidCageH - cavZ0 + 0.4,
                            (cavX0 + cavX1) / 2, 0, cavZ0, 0.3));
    }
    if (pinsUp()) {
      // 납땜된 핀헤더 16핀이 상판을 지나 위로 나오는 구멍. 0.64 각핀은 대각이 0.9라
      // Ø1.0은 출력 후 줄어든 구멍에 안 들어갔다 — 기본 Ø1.2 원형.
      const hd = P.wkPinHoleD;
      for (const sy of [-1, 1])
        for (let i = 0; i < 8; i++)
          lid = sub(lid, boxBrush(hd, hd, LID_PLATE + 1.0, miniPinX(i),
                                  sy * MINI_PIN_ROW_Y, q.lidCageH - 0.5, hd / 2));
    }
    if (P.wkOledOn) {
      // OLED는 뚜껑 위에서 내려놓는 개방형 보호 림에 안착한다. 화면은 위로 보이고,
      // 헤더 쪽 4가닥은 상판 슬롯을 통과해 바로 아래 ESP32로 내려간다. 핀 관통 모드면
      // 네 모서리 받침 위로 띄워, 상판 위로 올라온 ESP 핀 끝이 OLED에 닿지 않게 한다.
      const lidTop = q.lidCageH + LID_PLATE, lift = oledLift();
      lid = add(lid, ring(OLED_OUT_W, OLED_OUT_D, OLED_CAV_W, OLED_CAV_D,
                          OLED_RIM_H + lift, lidTop, 1.4));
      if (lift > 0.05)
        for (const sx of [-1, 1])
          for (const sy of [-1, 1])
            lid = add(lid, boxBrush(3.0, 3.0, lift + 0.1,
                                    sx * (OLED_CAV_W / 2 - 1.4), sy * (OLED_CAV_D / 2 - 1.4),
                                    lidTop - 0.1, 0.4));
      lid = sub(lid, boxBrush(12, 3.2, LID_PLATE + 0.8,
                              0, -OLED.d / 2 + 1.7, q.lidCageH - 0.4, 0.65));
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
    ghostBox(G[0], [MAG.w, MAG.d, P.wkMagH], [0, q.magnetY, q.magnetZ + P.wkMagH / 2], magnetMat);
    ghostBox(G[0], [BAT.w, BAT.d, P.wkBatH], [0, q.batteryY, q.batteryZ + P.wkBatH / 2], MATS.bat);
    if (P.wkHallOn)
      ghostBox(G[0], [HALL.w, q.hallT, HALL.h], [0, q.hallY, 0.75 + HALL.h / 2], hallMat);
    if (xiaoOn()) {
      const board = trayBoard();
      ghostBox(G[1], [board.w, board.d, XIAO.pcb],
               [q.chargerX, q.boardY, SEAT_Z + XIAO.pcb / 2], MATS.esp);
      ghostBox(G[1], [8.94, 9.0, 3.2],
               [q.chargerX - board.w / 2 + 3.5, q.boardY,
                SEAT_Z + XIAO.usbZ], MATS.esp);
      for (const pad of Object.values(XIAO_BAT_PADS))
        ghostBox(G[1], [2, 1.8, 0.1],
                 [q.chargerX + pad[0], q.boardY + pad[1],
                  SEAT_Z - 0.06], MATS.mod);
    } else {
      const CHARGER = chargerSpec();
      ghostBox(G[1], [CHARGER.w, CHARGER.d, CHARGER.pcb],
               [q.chargerX, 0, SEAT_Z + CHARGER.pcb / 2], MATS.mod);
      ghostBox(G[1], [9.0, 8.9, CHARGER.h - CHARGER.pcb],
               [q.chargerX - CHARGER.w / 2 + 4.5, 0,
                SEAT_Z + CHARGER.usbZ], MATS.mod);
    }
    ghostBox(G[1], [q.mpu.w, q.mpu.d, q.mpu.h],
             [q.mpuX, q.mpuY, q.mpuSeatZ + q.mpu.h / 2], mpuMat);
    if (P.wkSwOn && !xiaoOn())
      ghostBox(G[1], [SW.body, SW.w, SW.d],
               [q.W / 2 - q.wall - SW.body / 2 + 0.6, P.wkSwY,
                q.swZ], switchMat);
    // ESP32-C3 SuperMini는 뚜껑 밑 케이지에 아래에서 끼워 넣는다 — 실물 STL로 표시해야
    // USB(-X)·안테나 방향이 한눈에 보인다. 에셋 로드 전이면 박스로 대체한다.
    if (!xiaoOn() && ASSETS && ASSETS.esp) {
      const eg = ASSETS.esp.clone();
      eg.translate(-ESP.w / 2, -ESP.d / 2, 0);   // min corner 기준 → 중심 정렬
      ghostGeo(G[2], eg, [0, 0, espZ0(q)], MATS.esp);
    } else if (!xiaoOn()) {
      ghostBox(G[2], [ESP.w, ESP.d, ESP.h], [0, 0, espZ0(q) + ESP.h / 2], MATS.esp);
    }
    if (pinsUp()) {
      // 헤더 플라스틱(PCB 위)과 위로 솟은 긴 핀
      const pcbTop = espZ0(q) + 1.3;
      for (const sy of [-1, 1]) {
        ghostBox(G[2], [8 * 2.54, 2.5, HEADER_BODY],
                 [miniPinX(3.5), sy * MINI_PIN_ROW_Y, pcbTop + HEADER_BODY / 2], switchMat);
        for (let i = 0; i < 8; i++)
          ghostBox(G[2], [0.64, 0.64, HEADER_PIN],
                   [miniPinX(i), sy * MINI_PIN_ROW_Y, pcbTop + HEADER_BODY + HEADER_PIN / 2],
                   MATS.mod);
      }
    }
    if (P.wkOledOn) {
      const lidTop = q.lidCageH + LID_PLATE + oledLift();
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
    const CHARGER = chargerSpec();
    const chgTop = SEAT_Z + CHARGER.pcb;
    const chgBPlus = world(G[1], [q.chargerX - CHARGER.w / 2, -4.3, chgTop]);
    const chgBMinus = world(G[1], [q.chargerX - CHARGER.w / 2, 4.3, chgTop]);
    const chgOutPlus = world(G[1], [q.chargerX + CHARGER.w / 2, -4.3, chgTop]);
    const chgOutMinus = world(G[1], [q.chargerX + CHARGER.w / 2, 4.3, chgTop]);

    // SuperMini는 뚜껑, XIAO는 충전모듈 자리의 트레이에 놓인다.
    // 핀 관통 모드면 배선이 상판 위로 나온 핀 끝에서 시작한다.
    const espTop = xiaoOn() ? SEAT_Z + XIAO.h
      : pinsUp() ? Math.min(espZ0(q) + 1.3 + HEADER_BODY + HEADER_PIN,
                            q.lidCageH + LID_PLATE + oledLift() - 0.3)
      : espZ0(q) + ESP.h;
    const espPin = (x, y) => xiaoOn()
      ? world(G[1], [q.chargerX + x, q.boardY + y, espTop])
      : world(G[2], [x, y, espTop]);
    const miniPins = {
      4: [-1.5, 8], 3: [1, 8], 2: [3.5, 8], 1: [6, 8], 0: [8.5, 8],
      5: [-9, -8], 6: [-6.5, -8], 7: [-4, -8], 8: [-1.5, -8], 9: [1, -8],
      10: [3.5, -8], 20: [6, -8], 21: [8.5, -8],
    };
    const gpioPins = xiaoOn() ? ESP_PINS_XIAO : miniPins;
    const espGpio = (n, fallback) => espPin(...(gpioPins[+n] || gpioPins[fallback]));
    const esp5V = xiaoOn() ? espPin(...ESP_PINS_XIAO['5V']) : espPin(-9, 8);
    const espGnd = xiaoOn() ? espPin(...ESP_PINS_XIAO.GND) : espPin(-6.5, 8);
    const esp3V3 = xiaoOn() ? espPin(...ESP_PINS_XIAO['3V3']) : espPin(-4, 8);
    const espHall = espGpio(P.wkHallGpio, xiaoOn() ? 2 : 0);
    const espSda = espGpio(P.sdaGpio, 8), espScl = espGpio(P.sclGpio, 9);

    if (xiaoOn()) {
      const padZ = SEAT_Z - 0.05;
      wire(batPlus, world(G[1], [q.chargerX + XIAO_BAT_PADS.plus[0],
           q.boardY + XIAO_BAT_PADS.plus[1], padZ]),
           colors.plus, t('wtBatPlus'), 'B+');
      wire(batMinus, world(G[1], [q.chargerX + XIAO_BAT_PADS.minus[0],
           q.boardY + XIAO_BAT_PADS.minus[1], padZ]),
           colors.minus, t('wtBatMinus'), 'B−');
    } else {
      wire(batPlus, chgBPlus, colors.plus, t('wtBatPlus'), 'B+');
      wire(batMinus, chgBMinus, colors.minus, t('wtBatMinus'), 'B−');
    }
    // XIAO의 BAT 패드는 충전과 공급을 겸하므로 5V나 전원 스위치로 우회하지 않는다.
    if (!xiaoOn() && P.wkSwOn) {
      // SPDT 가운데 다리(COM)로 들어와 바깥쪽 한 다리로 나간다. 남는 다리는 미사용.
      const sx = lastLayout.W / 2 - lastLayout.wall - 1.2;
      const swCom = world(G[1], [sx, P.wkSwY, lastLayout.swZ]);
      const swOut = world(G[1], [sx, P.wkSwY + 2.54, lastLayout.swZ]);
      wire(chgOutPlus, swCom, colors.plus, 'OUT+', 'SW ②');
      wire(swOut, esp5V, colors.plus, 'SW ①', '5V');
    } else if (!xiaoOn()) {
      wire(chgOutPlus, esp5V, colors.plus, 'OUT+', '5V');
    }
    if (!xiaoOn()) wire(chgOutMinus, espGnd, colors.minus, 'OUT−', 'GND');

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
    const mpuTop = q.mpuSeatZ + q.mpu.h;
    const mpuPin = x => world(G[1], [q.mpuX + x, q.mpuY - q.mpu.d / 2, mpuTop]);
    const mpuVcc = mpuPin(-5), mpuGnd = mpuPin(-1.7);
    const mpuScl = mpuPin(1.7), mpuSda = mpuPin(5);
    wire(mpuVcc, esp3V3, colors.plus, 'VCC', null);
    wire(mpuGnd, espGnd, colors.minus, 'GND', null);
    wire(mpuSda, espSda, colors.sda, 'SDA', 'G' + P.sdaGpio, 'sda');
    wire(mpuScl, espScl, colors.scl, 'SCL', 'G' + P.sclGpio, 'scl');

    // 0.96" OLED: MPU6050과 GPIO8/9 I2C 버스를 공유한다.
    if (P.wkOledOn) {
      const oledZ = q.lidCageH + LID_PLATE + oledLift() + OLED.h + 0.15;
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
    const pairNeedW = trayBoard().w + q.mpu.w + 2 * CLR + 1.0 + 2 * q.wall;
    if (q.W + 0.01 < pairNeedW) warnings.push(t('wkRowOverlap'));
    const mpuNeedD = q.mpu.d + CLR + 2 * q.wall;
    if (q.D + 0.01 < mpuNeedD) warnings.push(t('wkMpuDepthFit', mpuNeedD.toFixed(1)));
    const batteryTop = q.batteryZ + P.wkBatH;
    if (batteryTop > q.baseH - 0.4) warnings.push(t('wkBatteryHeight', (batteryTop + 0.4).toFixed(1)));
    if (q.mpu.h > q.trayTop - q.mpuSeatZ - q.lidCageH - 0.8) warnings.push(t('wkMpuHeightFit'));
    if (xiaoOn() && SEAT_Z + XIAO.h > q.trayTop - q.lidCageH - 0.2)
      warnings.push(t('wkXiaoHeightFit'));
    if (!xiaoOn() && espZ0(q) + ESP.h > q.lidCageH - 0.2 + 0.01)
      warnings.push(t('wkEspHeightFit'));
    if (pinsUp()) {
      const pcbTop = espZ0(q) + 1.3;
      if (pcbTop + HEADER_BODY > q.lidCageH + 0.01) warnings.push(t('wkHeaderFit'));
      // 상판 위로 나온 핀 길이 — OLED 밑면(띄움 높이)보다 0.3 낮게 잘라야 한다.
      const stick = pcbTop + HEADER_BODY + HEADER_PIN - (q.lidCageH + LID_PLATE);
      if (P.wkOledOn && stick > oledLift() - 0.3)
        warnings.push(t('wkPinTrim', stick.toFixed(1), Math.max(0, oledLift() - 0.3).toFixed(1)));
    }
    const hallNeedD = BAT.d + CLR + q.hallT + CLR + 1.3 + 2 * q.wall;
    // KY-035는 트레이 바닥 슬롯을 지나 위로 올라오므로, 베이스 높이가 아니라
    // ESP32 케이지 밑면까지의 전체 여유가 기준이다.
    const hallCeil = q.baseH + (q.trayTop - q.lidCageH);
    const hallNeedH = 0.75 + HALL.h + 0.4 - (q.trayTop - q.lidCageH);
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
    G[1].position.set(0, 0, lastLayout.baseH + gap);
    const trayTopWorld = lastLayout.baseH + lastLayout.trayTop;
    G[2].position.set(0, 0, trayTopWorld - lastLayout.lidCageH + gap * 2);
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
        const totalH = lastLayout.baseH + lastLayout.trayTop + LID_PLATE
          + (P.wkOledOn ? OLED_RIM_H + oledLift() : 0);
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
    if (geos[1]) downloadSTL(geos[1].clone(), xiaoOn()
      ? 'workout_sensor_xiao_electronics_tray.stl'
      : 'workout_sensor_electronics_tray.stl');
  });
  document.getElementById('wkExLid').addEventListener('click', () => {
    if (!geos[2]) return;
    const geo = geos[2].clone();
    // 일반 뚜껑은 평평한 윗면을 베드로 뒤집는다. OLED 림이 있으면 화면 받침이 위로
    // 향해야 하므로 모델 방향 그대로 내보내고 ESP32 케이지 쪽 브리지만 출력한다.
    if (!P.wkOledOn) geo.rotateX(Math.PI);
    geo.computeBoundingBox();
    geo.translate(0, 0, -geo.boundingBox.min.z);
    downloadSTL(geo, xiaoOn()
      ? (P.wkOledOn ? 'workout_sensor_xiao_oled096_lid.stl' : 'workout_sensor_xiao_lid.stl')
      : (P.wkOledOn ? 'workout_sensor_esp32_oled096_lid.stl' : 'workout_sensor_esp32_lid.stl'));
  });

  return { rebuildWorkout, applyWorkoutExplode, drawWorkoutWires };
}
