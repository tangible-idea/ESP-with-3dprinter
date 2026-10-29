// 운동 모션 센서 — TW802040(40×20×8) 배터리 footprint에 맞춘 3단 적층 케이스.
// 1) KY-035+자석+배터리 베이스, 2) 충전모듈 또는 XIAO+MPU6050 트레이, 3) SuperMini 또는 OLED 뚜껑.
// 좌표: X=배터리 40mm 방향, Y=20mm/운동 상하 방향, Z=자석면→뚜껑.

import { UDO_MARK, UDO_FLAME, UDO_FLAME_U } from './udo-logo.js';

export function initWorkout(env) {
  const {
    THREE, P, t, G, MATS, ESP_TYPES, ESP_PINS_XIAO, ESP_PINS_TFT, ESP_PINS_X114,
    matCase, matCaseX, boxBrush, add, sub,
    meshBrush, polyBrush, ASSETS,
    manToGeo, downloadSTL, download3MF, status, getView, clearFloors, setFloorMeshes,
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
  // ESP32-S3 1.14" TFT (Feather 규격): 50.8 × 22.9, PCB 1.3, LCD까지 총 3.0, LCD 모듈 30.9 × 17.6.
  // IMU(QMI8658C)·충전 회로·PH2.0 배터리 커넥터가 보드에 있어 MPU6050·충전모듈·전원 스위치를 뺀다.
  // 케이스에서는 USB-C 끝을 -X 벽으로 돌려 놓는다 → LCD는 +X 쪽, 커넥터·버튼은 -X 끝.
  // USB-C는 짧은 변 한가운데(usbY = 0, 실측). PH2.0(jst*)은 사진에서 잰 대략 위치로,
  // USB 셸(폭 8.94) 옆에 겹치지 않게 둔다. 입구는 -X 끝을 향한다고 가정.
  const TFT = { l: 50.8, w: 22.9, pcb: 1.3, h: 3.0, lcdL: 30.9, lcdW: 17.6,
                usbY: 0, jstX: 3.4, jstY: 7.6 };
  const TFT_LEDGE = 1.5;   // 바닥을 뚫고 남기는 X 양 끝 받침턱 (뒷면 부품은 이 사이에)
  const tftOn = () => P.wkEspType === 'tft';
  // Seeed XIAO 1.14" IPS Display (nRF52840 / ESP32-S3, 같은 PCB): 공식 STEP과 참고 인클로저
  // (hardwares/enclosure-for-xiao-114-…)에서 잰 값. 보드 25 × 46.7 × 1.51. 한쪽 면에 LCD
  // (17.6 × 31, 두께 3.69), 반대 면에 XIAO·USB-C·PH2.0·Grove·옆 버튼이 최대 5.6 깊이로 붙는다.
  // 케이스에서는 LCD가 위, 부품면이 아래, USB-C 끝이 -X 벽. 좌표는 보드 중심 기준
  // (u = 케이스 X, v = 케이스 Y, w = LCD 쪽 PCB 면에서 위로). STEP(xs, ys, zs)에서
  // u = 23.35 − ys, v = −xs, w = −zs 로 옮겼다.
  const X114 = {
    l: 46.7, w: 25, pcb: 1.51, lcdH: 3.69, compD: 5.59,
    lcd: { u: -7.2, l: 31, w: 17.6 },
    win: { u: -8.55, l: 24.4, w: 14.7 },          // 참고 인클로저 화면 창 (VA 24.9 × 14.9)
    usb: { v: 0, w: -4.34, over: 1.39 },           // XIAO 위 USB-C 셸 중심 (PCB 끝 밖 1.39)
    btns: [[14.35, 6.95], [14.35, -6.95]],         // 앞면 버튼 A·B (참고 구멍 Ø7.7)
    mic: [14.9, 0], micD: 2.3,   // 버튼 구멍은 wkX114BtnD(캡 기둥) + 0.3 (참고 인클로저는 Ø7.7)
    // 옆면 버튼 C (+v 긴 변): [u0, u1, w0, w1] — 미리보기와 케이스 구멍 높이를 함께 맞춘다.
    // 그 옆 전원 스위치(u 3.99~10.69)는 벽으로 덮어 두므로 창을 내지 않는다.
    sideBtn: [12.82, 17.28, -3.09, -1.15],
    ph: { u: 7.45, v: -5.5 },                      // PH2.0 (플러그는 -v 긴 변으로 나옴)
    grove: { u: 17.8, l: 10.5, w: 12, d: 5.28 },
    xiao: { u0: -23.21, u1: -2.07, w: 17.78 },
    // 부품면 밑 받침 리브가 설 수 있는 빈 구간 (긴 변 양쪽)
    ribs: [[-22.45, 2.35], [17.85, 22.85]],
    // PCB 고정 구멍 Ø2.5 (STEP PCB y=2.5·23, x=±10 → u = 23.35 − y). 버튼 쪽 한 쌍(lid)은
    // 위가 비어 핀이 뚜껑까지 올라가고, 가운데 한 쌍은 LCD 가장자리가 구멍 위를 덮어 PCB 면에서 멈춘다.
    holes: [[20.85, 10, true], [20.85, -10, true], [0.35, 10, false], [0.35, -10, false]], holeD: 2.5,
  };
  const x114On = () => P.wkEspType === 'x114';
  // 앞 버튼 캡 기둥 지름(wkX114BtnD). 구멍은 0.3 크게, 걸림 턱은 1.7 크게(참고 캡 7.4 → 9.1 비율).
  const x114Btn = () => {
    const stem = Math.max(2.5, Math.min(7.4, Number(P.wkX114BtnD) || 4.5));
    return { stem, hole: stem + 0.3, flange: stem + 1.7 };
  };
  // 앞 버튼을 뚜껑과 한 번에 출력하는 휨 버튼: 상판에 U자 틈을 내 패드를 +X 쪽 경첩에 매단다.
  // 윗면은 상판과 같은 면이라 뒤집어 출력해도 튀어나오지 않고, 누름 기둥은 패드 밑에 붙는다.
  const btnFlexOn = () => x114On() && P.wkX114BtnFlex !== false;
  const FLEX_SLOT = 0.5, FLEX_ARM = 6.5;
  // 불꽃 버튼: 휨 패드를 UDO 불꽃 모양으로 바꾸고 윗면 0.4mm를 라임 파트로 따로 만들어 3MF 2색으로 낸다.
  // 불꽃 둥근 몸통(1024 그리드 중심 (512, 620))이 버튼 위에 오고, 끝은 화면 쪽(−X), 경첩 팔은 몸통 쪽(+X).
  const flameBtnOn = () => btnFlexOn() && P.wkX114BtnFlame !== false;
  const FLAME_BTN_INLAY = 0.4, FLAME_BODY_Y = (512 - 620) / 1024;
  // PCB 고정 구멍 핀: 트레이 바닥에서 올라온 기둥(어깨가 PCB 밑면을 받침)이 구멍을 지나고,
  // 버튼 쪽 두 핀은 뚜껑 밑 소켓에 꽂혀 뚜껑을 트레이에 직접 맞춘다. wkX114PinFit = 소켓 한쪽 유격.
  const pinsOn = () => x114On() && P.wkX114PinsOn !== false;
  function x114PinDims(q) {
    const b = q.x114, pinD = X114.holeD - 0.3;
    const fit = Math.max(0, Math.min(0.3, Number(P.wkX114PinFit ?? 0.15)));
    const sockD = pinD + 2 * fit, toLid = q.trayTop - q.lidCageH;
    return { pinD, shoulderD: 3.2, sockD, bossD: sockD + 1.6,
             tipZ: b.faceZ + Math.min(3.0, q.trayTop - b.faceZ - 0.6), bossZ0: b.faceZ + 0.3, toLid,
             pins: X114.holes.map(([u, v, up]) => ({ x: b.cx + u, y: b.y + v, up })) };
  }
  // 끝을 0.4 모따기한 원기둥 핀 (z0 → z1)
  function pinGeo(r, z0, z1, x, y) {
    const c = Math.min(0.4, r * 0.4, (z1 - z0) / 2);
    const g = new THREE.LatheGeometry([[0, z0], [r, z0], [r, z1 - c], [r - c, z1], [0, z1]]
      .map(([a, z]) => new THREE.Vector2(a, z)), 40);
    g.rotateX(Math.PI / 2); g.translate(x, y, 0);
    g.deleteAttribute('uv'); g.deleteAttribute('normal');
    return g;
  }
  function x114FlexDims(q) {
    const b = q.x114, pad = x114Btn().stem;
    const armT = Math.max(0.6, Math.min(LID_PLATE, Number(P.wkX114FlexT) || 0.8));
    const gap = Math.max(0, Math.min(0.8, Number(P.wkX114BtnGap ?? 0.2)));
    // 경첩은 뚜껑 결합 텅 안쪽에서 끝낸다(텅은 상판 밑이라 겹쳐도 되지만 상판이 너무 얇아지지 않게).
    const hingeMax = q.W / 2 - q.wall - jointW() - 0.5;
    const plungerD = Math.min(2.6, pad - 1.0);
    const toLid = q.trayTop - q.lidCageH;
    return { pad, armT, gap, plungerD, armW: Math.min(3.2, pad - 0.8),
             plungerZ0: b.faceZ + b.btnH + gap - toLid,
             pads: X114.btns.map(([u, v]) => {
               const x = b.cx + u, y = b.y + v;
               return { x, y, hinge: Math.max(x + pad / 2 + 1.5, Math.min(hingeMax, x + FLEX_ARM)) };
             }) };
  }
  const dispOn = () => tftOn() || x114On();      // 디스플레이 일체형 보드 (MPU·충전모듈·OLED 없음)
  const miniOn = () => !xiaoOn() && !dispOn();   // SuperMini + 충전모듈 + MPU6050 구성
  const oledOn = () => P.wkOledOn && !dispOn();
  // 포켓 절삭에서 CLR을 더하므로, 슬라이더의 완성 치수에서 미리 뺀다.
  const trayBoard = () => xiaoOn()
    ? { ...XIAO, w: P.wkXiaoPocketX - CLR, d: P.wkXiaoPocketY - CLR }
    : chargerSpec();
  const HALL = { w: 19, h: 15 };       // KY-035 PCB: X=19, 세움 높이 Z=15
  const MAG = { w: 30, d: 10 };   // 두께는 실측값(P.wkMagH)
  // 뚜껑 위 OLED 종류(wkOledType). pinY = 핀 열(배선 슬롯) 위치, winY = 화면 창 중심.
  // 0.49"는 메인 디자인 실측(15×16, 두께 2.4, 창 13.5×8 — 아래 끝 기준 창 중심 8.9,
  // 핀 열 11.5)을 그대로 쓴다. 0.49"는 SuperMini 핀 열(±8) 안쪽에 앉으므로 받침을
  // 네 모서리 대신 X 양옆 막대로 둔다(feet: 'sides').
  const OLED_SPECS = {
    '096': { w: 25, d: 27.05, h: 3.5, winW: 23.2, winD: 12.4, winY: 0.975,
             pinY: -27.05 / 2 + 1.5, feet: 'corners', label: '0.96"' },
    '049': { w: 15, d: 16, h: 2.4, winW: 13.5, winD: 8, winY: 8.9 - 8,
             pinY: 11.5 - 8, feet: 'sides', label: '0.49"' },
  };
  // OLED는 뚜껑 윗면 포켓에 넣고, 화면 창만 뚫린 베젤(별도 출력)을 위에 눌러 끼워
  // 윗면과 평평하게 맞춘다. 베젤은 OLED 포켓 둘레의 턱(BZ_LIP)에 걸쳐 앉는다.
  const OLED_CLR = 0.4, OLED_RIM = 1.6, BEZEL_T = 0.8, BZ_LIP = 1.2, LID_SKIN = 1.2, OLED_LEDGE = 1.5;
  const oledDims = () => {
    const o = OLED_SPECS[P.wkOledType] || OLED_SPECS['096'];
    const cavW = o.w + OLED_CLR, cavD = o.d + OLED_CLR;
    return { ...o, cavW, cavD,
             outW: cavW + 2 * (BZ_LIP + OLED_RIM), outD: cavD + 2 * (BZ_LIP + OLED_RIM),
             rimH: 0.1 + o.h + BEZEL_T };   // 포켓 바닥 → 윗면 (보드는 바닥에서 0.1 뜸)
  };
  // 베젤 크기: 턱은 뚜껑 외벽이 1mm 이상 남는 만큼만 낸다(0.96"은 Y가 빠듯함).
  const bezelDims = q => {
    const o = oledDims();
    const lipX = Math.max(0.4, Math.min(BZ_LIP, (q.W - o.cavW) / 2 - 1.0));
    const lipY = Math.max(0.4, Math.min(BZ_LIP, (q.D - o.cavD) / 2 - 1.0));
    return { o, w: o.cavW + 2 * lipX, d: o.cavD + 2 * lipY };
  };
  // 0.49" 핀 직결: OLED 헤더(GND·VCC·SCL·SDA)가 XIAO 핀 열 GND·3V3·D10·D9와 순서·간격이
  // 같아 그대로 꽂힌다. OLED 본체는 보드 위를 덮는 쪽으로 눕히고, 뚜껑 윗면 스킨
  // (PLUG_SKIN) 바로 밑에 닿는 높이에서 핀이 XIAO에 덜 꽂힌 채로 물린다. 뚜껑을 덮으면
  // 스킨이 OLED를 위에서 눌러 준다. I2C는 SDA=GPIO9, SCL=GPIO10.
  const PLUG_SKIN = 0.8, PLUG_CLR = 0.3;
  const oledPlug = () => xiaoOn() && oledOn() && P.wkOledType === '049' && !!P.wkOledPlug;
  // XIAO는 OLED 헤더 순서와 같은 GND·3V3·D10·D9 열을 쓰도록 I2C를 9/10으로 고정한다
  // (직결이 아니어도 4핀 일자 케이블 하나로 꼬임 없이 이어진다).
  const i2cPins = () => (xiaoOn() ? { sda: 9, scl: 10 } : { sda: P.sdaGpio, scl: P.sclGpio });
  // 뚜껑 로컬 좌표 기준 OLED 자세. spacer = XIAO 윗면 ↔ OLED 뒷면 (헤더 플라스틱 2.5 포함),
  // grip = 핀이 XIAO에 들어간 길이(헤더 긴 쪽 6.0 기준).
  // XIAO 핀 좌표(ESP_PINS_XIAO)는 보드 길이 22.7 기준 중심 좌표다. 포켓 길이 슬라이더가
  // 바뀌어도 핀은 USB 끝에 고정이므로, 보드 -X 끝(USB 끝)을 기준으로 환산한다.
  const xiaoPinX = (q, px) => q.chargerX - trayBoard().w / 2 + ESP_TYPES.xiao.l / 2 + px;
  const plugPose = q => {
    const o = oledDims(), gnd = ESP_PINS_XIAO.GND;
    const x = xiaoPinX(q, gnd[0]) + 3.81, y = q.boardY + gnd[1] - o.pinY;
    const lidTop = q.lidCageH + LID_PLATE;
    const oTop = lidTop - PLUG_SKIN - 0.1, zBack = oTop - o.h;
    const toLid = q.trayTop - q.lidCageH;        // 트레이 z → 뚜껑 로컬 z 오프셋
    const xiaoTop = SEAT_Z + XIAO.pcb - toLid;
    const spacer = zBack - xiaoTop;
    return { o, x, y, oTop, zBack, toLid, spacer,
             grip: HEADER_PIN - (spacer - HEADER_BODY) };
  };
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
  const XIAO_USB_OVER = 1.0;   // XIAO USB-C 셸이 PCB 끝 밖으로 나온 길이(보수적으로)
  const SW = { w: 8.4, d: 3.6, body: 4.0 };   // SPDT 슬라이드 스위치 (창 8.4 × 3.6)
  const ESP_PCB = 1.0;   // PCB 두께
  // SuperMini는 부품면(USB 셸)이 뚜껑 상판 쪽을 향하게 끼워 상판에 0.2 띄워 닿는다.
  // 케이지가 깊어지면 보드는 상판 쪽에 붙고 남는 여유는 열린 밑쪽으로 간다.
  const espZ0 = q => Math.max(0.2, q.lidCageH - 0.2 - ESP.h);
  // 핀헤더를 부품면 쪽(위)으로 납땜해 뚜껑 상판을 관통시키는 모드. 핀은 2.54 피치 8개씩
  // 두 줄(±8). 헤더 플라스틱 2.5는 상판 밑, 긴 핀(6.0)이 상판 위로 올라온다.
  const pinsUp = () => miniOn() && P.wkEspPinsUp;
  const MINI_PIN_ROW_Y = 8, HEADER_BODY = 2.5, HEADER_PIN = 6.0;
  const miniPinX = i => -0.25 + (i - 3.5) * 2.54;
  // OLED는 핀 끝 위로 wkOledLift 만큼 띄워 얹는다 (핀 모드가 아니면 상판에 바로 앉음).
  const oledLift = () => (oledOn() && pinsUp() ? Math.max(0, Number(P.wkOledLift) || 0) : 0);
  const LID_CAGE_DEFAULT = 4.6, LID_PLATE = 1.8;

  let geos = [null, null, null], meshes = [null, null, null], lastLayout = null, bezelGeo = null, capGeo = null, logoGeo = null, btnFlameGeo = null;
  const partMat = color => new THREE.MeshStandardMaterial({ color, roughness: 0.58, transparent: true, opacity: 0.9 });
  const mpuMat = partMat(0x3c9b70);
  const hallMat = partMat(0x8f5aa8);
  const switchMat = partMat(0xb0752f);
  const switchLeverMat = partMat(0x252525);
  const oledBoardMat = partMat(0x235c48);
  const tftPcbMat = partMat(0x1d1f24);
  const jstMat = partMat(0xe8e4d8);
  const oledScreenMat = new THREE.MeshStandardMaterial({
    color: 0x16262c, emissive: 0x2aa7b8, emissiveIntensity: 0.32,
    roughness: 0.22, transparent: true, opacity: 0.96,
  });
  const magnetMat = new THREE.MeshStandardMaterial({ color: 0x7b818a, roughness: 0.32, metalness: 0.75 });
  const logoMat = new THREE.MeshStandardMaterial({ color: UDO_MARK.color, roughness: 0.5 });
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
    let trayTop = TRAY_TOP_DEFAULT + espCaseH - LID_CAGE_DEFAULT;
    const lidCageH = xiaoOn() || dispOn() ? LID_CAGE_DEFAULT : espCaseH;
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
    let boardY = xiaoOn() ? Math.max(-xiaoYLimit,
      Math.min(xiaoYLimit, P.wkUsbY)) : 0;
    // OLED 직결이면 OLED가 +Y 쪽 트레이 벽에 걸리지 않을 만큼 XIAO를 -Y로 당긴다.
    // OLED는 XIAO 핀에 묶여 있으므로 보드를 옮겨야 같이 움직인다.
    if (oledPlug()) {
      const o = oledDims();
      const oledTop = ESP_PINS_XIAO.GND[1] - o.pinY + o.d / 2 + PLUG_CLR;
      boardY = Math.max(-xiaoYLimit, Math.min(boardY, innerHalfD - 0.2 - oledTop));
    }
    // KY-035를 -Y 벽에 세우고, 보드 안쪽면에서 wkHallGap 떨어진 곳에 자석 가장자리를 둔다.
    const hallY = -innerHalfD + P.wkHallT / 2 + 0.25;
    const hallInnerY = hallY + P.wkHallT / 2;
    const batteryY = P.wkHallOn ? hallInnerY + 0.8 + (BAT.d + CLR) / 2 : 0;
    const magnetY = P.wkHallOn ? hallInnerY + P.wkHallGap + MAG.d / 2 : 0;
    // TFT 보드: 포켓 -X(USB) 끝을 벽 안쪽면에 붙여 USB-C 셸이 벽 구멍에 바로 닿게 한다.
    // wkTftEndGap으로 띄울 수 있지만, 띄운 만큼 플러그가 덜 꽂힌다.
    // Y는 wkUsbY로 옮긴다. 트레이 높이는 LCD·커넥터 중 높은 쪽 + 0.3 → 뚜껑 밑면.
    let tft = null;
    if (tftOn()) {
      const L = TFT.l + CLR, Wd = TFT.w + CLR;
      const x0 = -W / 2 + wall + Math.max(0, Number(P.wkTftEndGap) || 0);
      const yLim = Math.max(0, innerHalfD - Wd / 2);
      const y = Math.max(-yLim, Math.min(yLim, Number(P.wkUsbY) || 0));
      const compH = Math.max(TFT.h - TFT.pcb, Number(P.wkTftCompH) || 3.6);
      const cx = x0 + L / 2, lcdX = cx + (Number(P.wkTftLcdX) || 0);
      tft = { x0, cx, y, L, Wd, compH, lcdX,
              winX: lcdX + (Number(P.wkTftWinX) || 0),
              winW: Number(P.wkTftWinW) || 24, winD: Number(P.wkTftWinD) || 13.6,
              pcbTop: SEAT_Z + TFT.pcb, lcdTop: SEAT_Z + TFT.h };
      trayTop = SEAT_Z + Math.max(TFT.h, TFT.pcb + compH) + 0.3;
    }
    // XIAO 1.14": 부품면이 아래라 트레이 바닥 위 wkX114CompD 높이의 리브에 PCB를 얹는다.
    // LCD 윗면 위 0.2가 뚜껑 밑면 → LCD는 눌리지 않는다.
    let x114 = null;
    if (x114On()) {
      const L = X114.l + CLR, Wd = X114.w + CLR;
      const x0 = -W / 2 + wall + Math.max(0, Number(P.wkTftEndGap) || 0);
      const yLim = Math.max(0, innerHalfD - Wd / 2);
      const y = Math.max(-yLim, Math.min(yLim, Number(P.wkUsbY) || 0));
      const compD = Math.max(1, Number(P.wkX114CompD) || 5.9);
      const pcbZ0 = TRAY_FLOOR + compD, faceZ = pcbZ0 + X114.pcb;
      x114 = { x0, cx: x0 + L / 2, y, L, Wd, compD, pcbZ0, faceZ,
               btnH: Math.max(0.5, Number(P.wkX114BtnH) || 1.8) };
      trayTop = faceZ + X114.lcdH + 0.2;
    }
    return {
      tft, x114,
      W, D, baseH, wall, trayTop, lidCageH, innerW, innerHalfD,
      mpu, gap, chargerX, boardY, mpuX, mpuY, mpuDepth, mpuSeatZ,
      // 스위치 창 위로 벽이 1mm는 남아야 하고, 몸통이 뚜껑에 닿지 않게 높이를 묶는다.
      swZ: Math.max(TRAY_FLOOR_TOP + SW.d / 2 + 0.3,
                    Math.min(P.wkSwZ, trayTop - 1.0 - (SW.d + 0.3) / 2)),
      hallY, hallInnerY, batteryY, magnetY, hallT: P.wkHallT,
      magnetZ: P.wkMagSkin, batteryZ: P.wkMagSkin + P.wkMagH + 0.2,
    };
  }

  // 케이스 외곽 모서리 반경 (wkRound, 기본 5.5). 짧은 변 절반을 넘지 않게 자른다.
  const caseR = q => Math.max(0.05, Math.min(Number(P.wkRound ?? 5.5), q.W / 2 - 1, q.D / 2 - 1));

  function jointDims(q) {
    const outW = q.W - 2 * q.wall + 0.2, outD = q.D - 2 * q.wall + 0.2;
    const jw = jointW();
    return { outW, outD, inW: outW - 2 * jw, inD: outD - 2 * jw };
  }

  function buildBase() {
    const q = layout(), r = caseR(q);
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
    if (P.wkLoopOn) body = sub(body, meshBrush(loopTunnelGeo(q)));
    if (P.wkLogoOn) body = sub(body, logoInlay(q, -0.1, logoDims(q).depth + 0.1));
    return body;
  }

  // UDO 로고 인레이: 1층 바깥 바닥(자석면) 가운데에 앱 마크(라임 불꽃, 가운데 U자는 비움)를 파고,
  // 같은 모양의 별도 바디를 만든다. 베이스와 함께 3MF 한 파일의 두 파트로 내보내 로고 파트에만
  // 색을 주면 첫 레이어부터 2색으로 나오고 바닥은 평평하게 남는다.
  // 불꽃은 90° 눕혀 긴 축을 케이스 긴 변(X)에 맞추고 끝이 +X(키링 쪽)를 향한다. 케이스를 X축으로
  // 뒤집어 밑에서 보면 앱 마크를 시계 방향으로 90° 돌린 모양이 되도록 Y를 뒤집어 넣는다.
  // 앱의 짙은 네모는 검정 바닥과 같은 색이라 따로 만들지 않는다. 13mm 길이에서 U자 홈은 약 1.3mm.
  const FLAME_X0 = Math.min(...UDO_FLAME.map(p => p[0])), FLAME_X1 = Math.max(...UDO_FLAME.map(p => p[0]));
  const FLAME_Y0 = Math.min(...UDO_FLAME.map(p => p[1])), FLAME_Y1 = Math.max(...UDO_FLAME.map(p => p[1]));
  const FLAME_ASPECT = (FLAME_X1 - FLAME_X0) / (FLAME_Y1 - FLAME_Y0);   // 폭 / 길이
  function logoDims(q) {
    // 둥근 모서리 안쪽 X, 벽에서 2mm 띄운 Y 안에 들어가게 길이를 제한한다.
    const maxL = Math.max(6, Math.min(q.W - 2 * caseR(q), (q.D - 4) / FLAME_ASPECT));
    const len = Math.max(6, Math.min(maxL, Number(P.wkLogoL) || 13));
    // 자석 포켓 밑 피부를 0.2 이상 검정으로 남긴다.
    const depth = Math.max(0.2, Math.min(Number(P.wkLogoDepth) || 0.4, P.wkMagSkin - 0.2));
    return { len, k: len / (FLAME_Y1 - FLAME_Y0), depth, y: Number(P.wkLogoY) || 0 };
  }

  function logoInlay(q, z0, h) {
    const l = logoDims(q), cx = (FLAME_X0 + FLAME_X1) / 2, cy = (FLAME_Y0 + FLAME_Y1) / 2;
    // 마크 (x, y↑끝) → 모델 (X = y, Y = x): 끝이 +X, 밑에서 보면 시계 방향 90°.
    const pt = ([x, y]) => [(y - cy) * l.k, l.y + (x - cx) * l.k];
    const flame = UDO_FLAME.map(pt), u = UDO_FLAME_U.map(pt);
    return sub(polyBrush([flame], h, z0), polyBrush([u], h + 0.4, z0 - 0.2));
  }

  // 불꽃 버튼 윤곽: 폭 = 패드 지름 + 1.2. 마크 (x, y↑끝) → 뚜껑 (X = −y, Y = x)로 반시계 90° 돌려
  // 끝을 −X(화면 쪽)로 보낸다. 위에서 보면 앱 마크를 그대로 돌린 모양이다.
  function flameBtnPts(f, p) {
    const k = (f.pad + 1.2) / (FLAME_X1 - FLAME_X0), cx = (FLAME_X0 + FLAME_X1) / 2;
    return UDO_FLAME.map(([x, y]) => [p.x - (y - FLAME_BODY_Y) * k, p.y + (x - cx) * k]);
  }
  function flameBtnInlay(q, z0, h) {
    const f = x114FlexDims(q);
    return polyBrush(f.pads.map(p => flameBtnPts(f, p)), h, z0);
  }

  // 키링 고리: 1층 +X 끝면(USB 반대쪽, KY-035에서도 먼 쪽)에 옆으로 나란한 둥근 구멍 두 개를
  // 뚫고, 안에서 반타원으로 휘는 통로로 잇는다. 키링은 한쪽 구멍으로 들어가 다른 쪽으로 나오며
  // 두 구멍 사이 기둥을 감는다. 이전 반원 터널은 기둥(폭 3.8)이 가늘고 물방울 꼭짓점이
  // 처져 무너졌다 → 구멍 간격을 넓혀 기둥을 굵게 하고, 단면 위쪽은 45°로 좁히다 끝을
  // 평평하게 잘라(짧은 브리지) 서포트 없이 출력한다. 배터리 포켓까지 1.0은 남기고
  // 남는 깊이를 기둥 깊이(X)로 쓴다.
  const LOOP_TOP = 1.1;   // 단면 평평한 천장 높이 (× 반지름)
  function loopDims(q) {
    const r = Math.max(0.8, Math.min(1.7, (Number(P.wkLoopD) || 2.4) / 2));
    const bar = Math.max(2, Math.min(8, Number(P.wkLoopBar) || 4));
    const half = bar / 2 + 2 * r;   // 중심에서 바깥 구멍 가장자리까지 (Y)
    const yLim = Math.max(0, q.D / 2 - caseR(q) - half - 0.5);
    const y = Math.max(-yLim, Math.min(yLim, Number(P.wkLoopY) || 0));
    const z = Math.max(r + 0.8, Math.min(q.baseH - LOOP_TOP * r - 1.0, Number(P.wkLoopZ) || 5));
    const xf = q.W / 2;
    const room = xf - (BAT.w + CLR) / 2 - 1.0;
    // 반타원 통로 중심선: X 반지름 a(깊이), Y 반지름 b(구멍 중심 간 절반)
    return { r, y, z, bar, xf, a: Math.max(r + 1.0, room - r), b: bar / 2 + r };
  }

  function loopTunnelGeo(q) {
    const l = loopDims(q), M = 32, seg = 40, ext = l.xf + 1.5;
    // 단면 (u = XY 평면 안 바깥 법선 방향, w = Z): 아래는 원, 위는 45°로 좁혀 평평하게 자른다.
    const top = LOOP_TOP * l.r, ft = l.r * Math.SQRT2 - top;
    const sec = [[ft, top], [-ft, top]];
    for (let i = 0; i <= M; i++) {
      const p = (135 + 270 * i / M) * Math.PI / 180;
      sec.push([l.r * Math.cos(p), l.r * Math.sin(p)]);
    }
    // 경로 점 [x, y, nx, ny]: 끝면 밖(-Y 구멍) → 반타원(가장 깊은 곳이 t = 180°) → 끝면 밖(+Y 구멍)
    const path = [[ext, l.y - l.b, 0, -1]];
    for (let k = 0; k <= seg; k++) {
      const t = (270 - 180 * k / seg) * Math.PI / 180, c = Math.cos(t), s = Math.sin(t);
      const nx = l.b * c, ny = l.a * s, nl = Math.hypot(nx, ny);
      path.push([l.xf + l.a * c, l.y + l.b * s, nx / nl, ny / nl]);
    }
    path.push([ext, l.y + l.b, 0, 1]);
    const v = [], idx = [], n = sec.length;
    for (const [px, py, nx, ny] of path)
      for (const [u, w] of sec) v.push(px + u * nx, py + u * ny, l.z + w);
    for (let k = 0; k < path.length - 1; k++)
      for (let i = 0; i < n; i++) {
        const a = k * n + i, b = k * n + (i + 1) % n, c = a + n, d = b + n;
        idx.push(a, b, c, b, d, c);
      }
    const last = (path.length - 1) * n;
    for (let i = 1; i < n - 1; i++) idx.push(0, i + 1, i, last, last + i, last + i + 1);
  // 감김 방향은 부호 있는 부피로 확인해 바깥을 향하게 맞춘다.
    let vol = 0;
    for (let t = 0; t < idx.length; t += 3) {
      const [a, b, c] = [idx[t], idx[t + 1], idx[t + 2]].map(i => v.slice(3 * i, 3 * i + 3));
      vol += a[0] * (b[1] * c[2] - b[2] * c[1]) - a[1] * (b[0] * c[2] - b[2] * c[0])
           + a[2] * (b[0] * c[1] - b[1] * c[0]);
    }
    if (vol < 0) for (let t = 0; t < idx.length; t += 3) [idx[t + 1], idx[t + 2]] = [idx[t + 2], idx[t + 1]];
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    g.setIndex(idx);
    return g;
  }

  // TP4056 충전 포트: 딤섬 클리커와 같은 나팔형 USB-C 툴로 뚫어 플러그가 비스듬히
  // 들어와도 물리게 한다. 원본 툴은 길이 9에 나팔 입구가 +X이므로 Z로 180° 돌려
  // -X 바깥면을 향하게 하고, 벽 두께에 맞춰 길이만 스케일한다.
  function usbCut(q) {
    const L = Math.max(3.0, q.wall + 1.6);
    // TFT는 USB-C 셸(두께 3.26)이 PCB 윗면에 얹혀 있다.
    const slim = xiaoOn() || dispOn();
    const z = tftOn() ? q.tft.pcbTop + USB_C.d / 2
      : x114On() ? q.x114.faceZ + X114.usb.w
      : SEAT_Z + (xiaoOn() ? XIAO.usbZ : chargerSpec().usbZ);
    const y = tftOn() ? q.tft.y + TFT.usbY : x114On() ? q.x114.y + X114.usb.v
      : xiaoOn() ? q.boardY : P.wkUsbY;
    // 원래 나팔형 USB 구멍에서 XIAO 쪽만 폭 약 0.4mm, 높이 약 0.36mm 축소.
    const usbYScale = slim ? 0.96 : 1;
    const usbZScale = (slim ? 3.2 : 3.5) / 3.8;
    if (!ASSETS || !ASSETS.usb)   // 에셋 로드 전이면 사각 개구부로 대체
      return boxBrush(L + 1.0, slim ? 9.0 : 9.4,
                      slim ? 3.3 : 3.6,
                      -q.W / 2 + q.wall / 2, y,
                      z - (slim ? 1.65 : 1.8), 1.0);
    const m = new THREE.Matrix4()
      .makeTranslation(-(q.W / 2 + 0.4) + L / 2, y, z)
      .multiply(new THREE.Matrix4().makeRotationZ(Math.PI))
      .multiply(new THREE.Matrix4().makeScale(L / 9, usbYScale, usbZScale));
    return meshBrush(ASSETS.usb, m);
  }

  // TFT 트레이: 보드 하나만 화면이 위로 오게 눕힌다. 포켓 바닥은 X 양 끝 받침턱만 남기고
  // 1층까지 뚫어 뒷면 부품(ESP32-S3 칩 등)을 비우고 배터리 배선 길로 쓴다. 보드 -X 끝과
  // 벽 사이는 PH2.0 플러그 자리 — 그 밑 바닥에도 배선 슬롯을 낸다.
  function buildTrayTft(q, r, j) {
    const b = q.tft;
    let tray = boxBrush(q.W, q.D, TRAY_FLOOR, 0, 0, 0, r);
    if (BASE_JOINT_H > 0)
      tray = sub(tray, ring(j.outW, j.outD, j.inW, j.inD, BASE_JOINT_H + 0.2,
                            -0.2, Math.max(0.8, r - q.wall)));
    tray = add(tray, ring(q.W, q.D, q.W - 2 * q.wall, q.D - 2 * q.wall,
                          q.trayTop - TRAY_FLOOR, TRAY_FLOOR, r));
    tray = sub(tray, boxBrush(b.L, b.Wd, POCKET_D + 0.2, b.cx, b.y, SEAT_Z, 0.6));
    // 관통 구멍은 1층 결합 홈(밑면 링) 천장을 건드리지 않도록 홈 안쪽으로 잘라 넣는다.
    const limX = BASE_JOINT_H > 0 ? j.inW / 2 - 0.5 : q.W / 2 - q.wall;
    const limY = BASE_JOINT_H > 0 ? j.inD / 2 - 0.5 : q.D / 2 - q.wall;
    const cutThrough = (x0, x1, y0, y1) => {
      x0 = Math.max(x0, -limX); x1 = Math.min(x1, limX);
      y0 = Math.max(y0, -limY); y1 = Math.min(y1, limY);
      if (x1 - x0 > 0.8 && y1 - y0 > 0.8)
        tray = sub(tray, boxBrush(x1 - x0, y1 - y0, TRAY_FLOOR + 0.4, (x0 + x1) / 2,
                                  (y0 + y1) / 2, -0.2,
                                  Math.min(0.6, (x1 - x0) / 2 - 0.1, (y1 - y0) / 2 - 0.1)));
    };
    cutThrough(b.x0 + TFT_LEDGE, b.x0 + b.L - TFT_LEDGE, b.y - b.Wd / 2, b.y + b.Wd / 2);
    const jy = b.y + TFT.jstY;
    cutThrough(-q.W / 2, b.x0 - 0.4, jy - 4, jy + 4);
    if (P.wkHallOn)
      tray = sub(tray, boxBrush(HALL.w + CLR + 0.6, q.hallT + CLR + 0.6,
                                TRAY_FLOOR_TOP + 0.4, 0, q.hallY, -0.1, 0.45));
    tray = sub(tray, ring(j.outW, j.outD, j.inW, j.inD, JOINT_H + 0.15,
                          q.trayTop - JOINT_H, Math.max(0.8, r - q.wall)));
    // USB 구멍 위 벽이 얇으므로(뚜껑 결합 홈까지 파여 1mm 남짓) 구멍 둘레 벽을 뚜껑 상판
    // 속까지 세운다. 뚜껑은 밑에서 같은 자리를 따내 받고, 윗면 스킨은 남겨 뚫리지 않는다. 결합 홈을 판 뒤에 붙여야
    // 홈에 깎이지 않고, USB 구멍은 그 뒤에 뚫는다.
    const tab = usbTab(q, r);
    tray = add(tray, boxBrush(q.wall, tab.w, tab.z1 - tab.z0, -q.W / 2 + q.wall / 2,
                              tab.y, tab.z0));
    tray = sub(tray, usbCut(q));
    return tray;
  }

  // XIAO 1.14" 트레이: 부품면이 아래이므로 바닥 위로 긴 변 리브를 세워 PCB 가장자리를 받친다
  // (부품이 없는 구간만). 보드 밑 바닥은 1층까지 뚫어 배터리 배선(PH2.0)과 깊은 부품이
  // 지나가게 하고, +Y 벽에는 옆 버튼 C·스위치를 누를 수 있는 창을 낸다.
  function buildTrayX114(q, r, j) {
    const b = q.x114;
    let tray = boxBrush(q.W, q.D, TRAY_FLOOR, 0, 0, 0, r);
    if (BASE_JOINT_H > 0)
      tray = sub(tray, ring(j.outW, j.outD, j.inW, j.inD, BASE_JOINT_H + 0.2,
                            -0.2, Math.max(0.8, r - q.wall)));
    tray = add(tray, ring(q.W, q.D, q.W - 2 * q.wall, q.D - 2 * q.wall,
                          q.trayTop - TRAY_FLOOR, TRAY_FLOOR, r));
    const limX = BASE_JOINT_H > 0 ? j.inW / 2 - 0.5 : q.W / 2 - q.wall;
    const limY = BASE_JOINT_H > 0 ? j.inD / 2 - 0.5 : q.D / 2 - q.wall;
    {
      const x0 = Math.max(b.x0 + 1.5, -limX), x1 = Math.min(b.x0 + b.L - 1.5, limX);
      const y0 = Math.max(b.y - X114.w / 2 + 1.4, -limY), y1 = Math.min(b.y + X114.w / 2 - 1.4, limY);
      if (x1 - x0 > 1 && y1 - y0 > 1)
        tray = sub(tray, boxBrush(x1 - x0, y1 - y0, TRAY_FLOOR + 0.4, (x0 + x1) / 2,
                                  (y0 + y1) / 2, -0.2, 0.6));
    }
    // 리브: 긴 변에서 0.6 안쪽, 폭 1.2. 바닥 윗면에서 PCB 밑면까지.
    for (const [u0, u1] of X114.ribs)
      for (const sv of [-1, 1])
        tray = add(tray, boxBrush(u1 - u0, 1.2, b.pcbZ0 - TRAY_FLOOR + 0.1,
                                  b.cx + (u0 + u1) / 2, b.y + sv * (X114.w / 2 - 0.6),
                                  TRAY_FLOOR - 0.1, 0.3));
    // 고정 구멍 기둥: 바닥이 뚫린 자리라 베드에서 세우고, 어깨는 옆 리브·바닥 띠와 붙는다.
    if (pinsOn()) {
      const pd = x114PinDims(q);
      for (const p of pd.pins) {
        tray = add(tray, boxBrush(pd.shoulderD, pd.shoulderD, b.pcbZ0, p.x, p.y, 0, pd.shoulderD / 2));
        tray = add(tray, meshBrush(pinGeo(pd.pinD / 2, b.pcbZ0 - 0.1, p.up ? pd.tipZ : b.faceZ, p.x, p.y)));
      }
    }
    // KY-035 슬롯은 PCB 밑면까지 올려, 바닥 위로 솟은 KY-035가 리브에 걸리지 않게 한다.
    if (P.wkHallOn)
      tray = sub(tray, boxBrush(HALL.w + CLR + 0.6, q.hallT + CLR + 0.6,
                                b.pcbZ0, 0, q.hallY, -0.1, 0.45));
    tray = sub(tray, ring(j.outW, j.outD, j.inW, j.inD, JOINT_H + 0.15,
                          q.trayTop - JOINT_H, Math.max(0.8, r - q.wall)));
    // 옆 버튼 C 창: 부품 외형 + 0.5 여유로 +Y 벽을 관통. 둥근 창 둘레를 벽 바깥으로 갈수록
    // 부드럽게 넓혀 손톱이 미끄러져 들어가게 한다(wkX114BtnScoop = 0이면 직사각 창).
    {
      const [u0, u1, w0, w1] = X114.sideBtn;
      const flare = x114ScoopFlare(q, r, u0, u1, w0, w1);
      tray = sub(tray, flare > 0
        ? meshBrush(x114ScoopGeo(q, b.cx + (u0 + u1) / 2, b.faceZ + (w0 + w1) / 2,
                                 (u1 - u0 + 1.0) / 2, (w1 - w0 + 1.0) / 2, flare))
        : boxBrush(u1 - u0 + 1.0, q.wall + 2, w1 - w0 + 1.0,
                   b.cx + (u0 + u1) / 2, q.D / 2 - q.wall / 2, b.faceZ + w0 - 0.5, 0.4));
    }
    tray = sub(tray, usbCut(q));
    return tray;
  }

  // 옆 버튼 손톱 홈의 바깥 벌어짐(반지름 증가량). 위로는 결합 홈, 아래로는 트레이 바닥,
  // +X로는 케이스 둥근 모서리 시작점에서 멈춘다.
  function x114ScoopFlare(q, r, u0, u1, w0, w1) {
    const b = q.x114, hz = (w1 - w0 + 1.0) / 2, zc = b.faceZ + (w0 + w1) / 2;
    const xc = b.cx + (u0 + u1) / 2, hx = (u1 - u0 + 1.0) / 2;
    const want = Math.max(0, Math.min(2.5, Number(P.wkX114BtnScoop ?? 1.8)));
    return Math.max(0, Math.min(want, q.trayTop - JOINT_H - 0.6 - (zc + hz),
                                zc - hz - TRAY_FLOOR - 0.8, q.W / 2 - r + 0.5 - (xc + hx)));
  }
  // 옆 버튼 손톱 홈 절삭체: X-Z 단면이 경기장(stadium) 모양인 창을 +Y 벽 두께 방향으로 뽑되,
  // 바깥면에서 flare만큼 넓고 안쪽면에서 창 크기로 줄어드는 1/4 타원 필렛 단면으로 깎는다.
  // 바깥 가장자리는 벽면에 접하고 안쪽은 창 벽에 접해 모서리 없이 이어진다.
  function x114ScoopGeo(q, xc, zc, hx, hz, flare) {
    const outer = q.D / 2, inner = outer - q.wall, seg = 20, N = 64;
    const levels = [[outer + 1, flare]];
    for (let k = 0; k <= seg; k++) {
      const s = k / seg;
      levels.push([outer - s * q.wall, flare * (1 - Math.sqrt(1 - (1 - s) * (1 - s)))]);
    }
    levels.push([inner - 1, 0]);
    const v = [], idx = [];
    for (const [y, e] of levels) {
      // 경기장 둘레: 가로 직선 + 양 끝 반원. 벌어질 때는 반지름과 직선 길이가 함께 커진다.
      const rr = hz + e, half = Math.max(0, hx - hz);
      for (let i = 0; i < N; i++) {
        const a = (i / N) * 2 * Math.PI, ca = Math.cos(a), sa = Math.sin(a);
        v.push(xc + Math.sign(ca) * half + rr * ca, y, zc + rr * sa);
      }
    }
    const L = levels.length;
    for (let l = 0; l < L - 1; l++)
      for (let i = 0; i < N; i++) {
        const a = l * N + i, b2 = l * N + (i + 1) % N, c = a + N, d = b2 + N;
        idx.push(a, b2, c, b2, d, c);
      }
    const c0 = v.length / 3, c1 = c0 + 1;
    v.push(xc, levels[0][0], zc, xc, levels[L - 1][0], zc);
    for (let i = 0; i < N; i++) {
      idx.push(c0, (i + 1) % N, i);
      idx.push(c1, (L - 1) * N + i, (L - 1) * N + (i + 1) % N);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    g.setIndex(idx);
    return g;
  }

  // XIAO 1.14" 앞면 버튼 캡: 걸림 턱(Ø9.1)이 상판 밑에 걸리고 기둥(Ø7.4)이 Ø7.7 구멍으로
  // 1.5 올라온다. 바닥은 버튼 윗면(LCD 쪽 PCB 면 + wkX114BtnH)에 닿는다. z=0이 바닥.
  function x114CapDims(q) {
    const b = q.x114, under = q.trayTop;
    const flange = Math.max(0.8, under - 0.15 - (b.faceZ + b.btnH));
    const d = x114Btn();
    const catchR = P.wkX114BtnCatch > 0 ? d.hole / 2 + Math.min(0.4, Number(P.wkX114BtnCatch)) : 0;
    return { flange, stem: 0.15 + LID_PLATE + 1.5, flangeD: d.flange, stemD: d.stem, catchR };
  }
  function x114CapGeo(q) {
    const c = x114CapDims(q), seg = 48;
    const parts = [];
    const f = new THREE.CylinderGeometry(c.flangeD / 2, c.flangeD / 2, c.flange, seg);
    f.rotateX(Math.PI / 2); f.translate(0, 0, c.flange / 2);
    // 기둥: 상판 윗면에서 0.5(버튼 눌림 여유) 위에 걸림 턱 링을 둘러, 뚜껑을 들거나 뒤집어도
    // 캡이 안쪽으로 빠지지 않게 한다. 턱은 구멍보다 wkX114BtnCatch(반지름)만큼 커서 조립할 때
    // 안쪽에서 구멍으로 밀어 넣으면 '딸깍' 넘어간다. 아래는 45°, 위는 완만한 경사라 서포트 없이 출력된다.
    const r = c.stemD / 2, z0 = c.flange - 0.1, zTop = c.flange + c.stem;
    const pts = [[0, z0], [r, z0]];
    if (c.catchR > 0) {
      const zb = c.flange + 0.15 + LID_PLATE + 0.5, k = c.catchR - r;
      pts.push([r, zb], [r + k, zb + k], [r + k, zb + k + 0.2], [r, Math.min(zTop - 0.1, zb + 2 * k + 0.2 + 0.25)]);
    }
    pts.push([r, zTop], [0, zTop]);
    const st = new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), seg);
    st.rotateX(Math.PI / 2);
    for (const g of [f, st]) { g.deleteAttribute('uv'); g.deleteAttribute('normal'); parts.push(g); }
    return parts;
  }

  // TFT USB 벽 연장(트레이 좌표). 폭은 케이스 둥근 모서리 전 직선 구간 안에서 잡는다.
  // 뚜껑 상판 속으로 rise(= 상판 − USB_TAB_SKIN) 만큼만 올라간다.
  const USB_TAB_SKIN = 1.0;   // 벽은 상판 속 0.8까지, 그 위 유격 0.2 + 스킨 0.8
  function usbTab(q, r) {
    const rise = Math.max(0.2, LID_PLATE - USB_TAB_SKIN);
    const w = Math.max(10, Math.min(14, q.D - 2 * r - 1));
    return { w, y: Math.max(-(q.D / 2 - r - w / 2), Math.min(q.D / 2 - r - w / 2,
                                                            q.tft.y + TFT.usbY)),
             z0: q.trayTop - JOINT_H - 0.3, z1: q.trayTop + rise, rise };
  }

  // 뚜껑 윗면 화면 창에 45° 모따기를 내는 사각뿔대(밑면 w0×d0 → 윗면 w1×d1).
  function frustumGeo(w0, d0, w1, d1, z0, z1, cx, cy) {
    const v = [];
    for (const [w, d, z] of [[w0, d0, z0], [w1, d1, z1]])
      v.push(cx - w / 2, cy - d / 2, z, cx + w / 2, cy - d / 2, z,
             cx + w / 2, cy + d / 2, z, cx - w / 2, cy + d / 2, z);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
    g.setIndex([0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4,
                1, 2, 6, 1, 6, 5, 2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7]);
    return g;
  }

  function buildTray() {
    const q = layout(), r = caseR(q);
    const j = jointDims(q), fit = P.wkFit;
    if (tftOn()) return buildTrayTft(q, r, j);
    if (x114On()) return buildTrayX114(q, r, j);
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
    if (miniOn()) tray = solderRelief(tray, chgCx + chgLen / 2, board.d + CLR, -1);
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

      // USB 안쪽 소켓: 벽 안쪽면부터 보드 -X 끝 너머까지 칼라를 세워 USB-C 셸의
      // 양옆과 위를 물고, 셸 밑(돌출부)은 받쳐 준다. 셸 옆 버튼(B/R)에 닿지 않도록
      // PCB 위로는 wkXiaoUsbGrip 만큼만 들어가고, PCB 높이 아래는 돌출부까지만 채운다.
      const boardX0 = q.chargerX - board.w / 2;
      const wallIn = -q.W / 2 + q.wall;
      const grip = Math.max(0, Number(P.wkXiaoUsbGrip) || 0);
      const cavW = USB_C.w + P.wkUsbFit;
      const shellZ0 = SEAT_Z + XIAO.usbZ - USB_C.d / 2 - 0.1;
      const shellZ1 = shellZ0 + USB_C.d + 0.25;
      const collarTop = Math.min(shellZ1 + 1.0, q.trayTop - JOINT_H - 0.3);
      if (grip > 0.05 && collarTop > shellZ1 + 0.4) {
        const sockW = cavW + 2 * USB_SOCK_WALL;
        const lowX1 = boardX0 + Math.min(grip, XIAO_USB_OVER);
        tray = add(tray, boxBrush(lowX1 - wallIn + 0.2, sockW, collarTop - SEAT_Z,
                                  (wallIn - 0.2 + lowX1) / 2, q.boardY, SEAT_Z, 0.3));
        const upX1 = boardX0 + grip, upZ0 = SEAT_Z + XIAO.pcb + 0.1;
        if (upX1 > lowX1 + 0.05)
          tray = add(tray, boxBrush(upX1 - wallIn + 0.2, sockW, collarTop - upZ0,
                                    (wallIn - 0.2 + upX1) / 2, q.boardY, upZ0, 0.3));
        tray = sub(tray, boxBrush(upX1 - wallIn + 1.2, cavW, shellZ1 - shellZ0,
                                  (wallIn - 0.6 + upX1 + 0.6) / 2, q.boardY, shellZ0, 0.3));
      }

      // 옆 레일: 포켓 긴 변(±Y)을 따라 보드 옆면을 PCB 윗면 위까지 감싼다. 레일 윗끝에
      // 안쪽으로 걸림 꼬다리(wkXiaoRailLip)를 내밀면 보드 가장자리를 눌러 잡는다.
      // USB 옆 B/R 버튼을 누르지 않도록 USB 끝에서 4mm 뒤부터 시작한다.
      const railUp = Math.max(0, Number(P.wkXiaoRailH) || 0);
      const railLip = Math.max(0, Number(P.wkXiaoRailLip) || 0);
      const railX0 = boardX0 + 4.0;
      const railX1 = q.chargerX + (board.w + CLR) / 2;
      const railT = 1.2, railNose = 0.3, railZ0 = SEAT_Z + XIAO.pcb + 0.1;
      if (railUp > 0.05 && railX1 - railX0 > 2) {
        const railTop = Math.max(SEAT_Z + XIAO.pcb + railUp,
                                 railLip > 0.05 ? railZ0 + railNose + railLip : 0);
        const railLen = railX1 - railX0, railCx = (railX0 + railX1) / 2;
        for (const sy of [-1, 1]) {
          const edgeY = q.boardY + sy * (board.d + CLR) / 2;
          tray = add(tray, boxBrush(railLen, railT, railTop - TRAY_FLOOR_TOP + 0.1,
                                    railCx, edgeY + sy * railT / 2,
                                    TRAY_FLOOR_TOP - 0.1, 0.3));
          if (railLip > 0.05) {
            const g = clipGeo(railLip, railNose, railLen, 0, 0, railZ0);
            g.rotateZ(sy > 0 ? Math.PI / 2 : -Math.PI / 2);
            g.translate(railCx, edgeY, 0);
            tray = add(tray, meshBrush(g));
          }
        }
      }
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
    if (P.wkSwOn && miniOn()) {
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
    const q = layout(), r = caseR(q);
    const j = jointDims(q), fit = P.wkFit;
    let lid = boxBrush(q.W, q.D, LID_PLATE, 0, 0, q.lidCageH, r);
    lid = add(lid, ring(j.outW - 2 * fit, j.outD - 2 * fit,
                        j.inW + 2 * fit, j.inD + 2 * fit,
                        JOINT_H, q.lidCageH - JOINT_H,
                        Math.max(0.6, r - q.wall - fit)));
    // 조임 돌기: 긴 변 텅 바깥면에 Ø1 반원 기둥 3개씩. 결합 유격과 상관없이 트레이 벽(홈 면)보다
    // wkLidGrip 만큼 더 나와 눌려 들어가며 꽉 낀다. 아래 0.4는 비우고 모따기해 텅이 먼저 들어간다.
    const grip = Math.max(0, Math.min(0.3, Number(P.wkLidGrip ?? 0.1)));
    if (grip > 0) {
      const wallY = j.outD / 2, rr = 0.5, z0 = q.lidCageH - JOINT_H + 0.4, z1 = q.lidCageH + 0.1;
      for (const x of [-q.W / 4, 0, q.W / 4])
        for (const sy of [-1, 1]) {
          const g = new THREE.LatheGeometry([[0, z0], [rr - 0.35, z0], [rr, z0 + 0.35], [rr, z1], [0, z1]]
            .map(([a, z]) => new THREE.Vector2(a, z)), 24);
          g.rotateX(Math.PI / 2); g.translate(x, sy * (wallY + grip - rr), 0);
          g.deleteAttribute('uv'); g.deleteAttribute('normal');
          lid = add(lid, meshBrush(g));
        }
    }
    // 전원 스위치 몸통과 리브가 결합 텅 높이까지 올라오므로 그 자리 텅만 비워 둔다.
    // 나머지 세 변의 텅으로도 뚜껑 위치는 충분히 잡힌다.
    if (P.wkSwOn && miniOn()) {
      const nx0 = q.W / 2 - q.wall - SW.body - 0.6;
      lid = sub(lid, boxBrush(q.W / 2 + 1 - nx0, SW.w + 0.3 + 2.4 + 1.0, JOINT_H + 0.2,
                              (nx0 + q.W / 2 + 1) / 2, P.wkSwY,
                              q.lidCageH - JOINT_H - 0.2, 0.4));
    }

    // ESP32-C3 SuperMini는 뚜껑 밑 케이지에 아래에서 끼워 넣는다. 모서리 받침 돌기는
    // 끼울 때 걸려서 없앴고, 대신 -X 끝의 USB-C 소켓이 커넥터를 물어 고정한다.
    if (miniOn()) {
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
    if (tftOn()) {
      const b = q.tft;
      // USB 플러그와 PH2.0 플러그가 -X 벽 안쪽을 지나가므로 그 짧은 변의 결합 텅은 비운다.
      const nx1 = -j.inW / 2 + 0.6;
      lid = sub(lid, boxBrush(nx1 + q.W / 2 + 1, q.D + 2, JOINT_H + 0.2,
                              (nx1 - q.W / 2 - 1) / 2, 0, q.lidCageH - JOINT_H - 0.2));
      // 트레이에서 올라온 USB 벽 연장을 받는 자리 (결합 유격만큼 넓게). 밑에서 rise + 0.2
      // 까지만 따내 윗면 스킨은 남긴다.
      const tab = usbTab(q, r), tw = q.wall + fit + 0.2;
      lid = sub(lid, boxBrush(tw + 1, tab.w + 2 * fit, JOINT_H + 1 + tab.rise + 0.2,
                              -q.W / 2 + (tw - 1) / 2, tab.y, q.lidCageH - JOINT_H - 1));
      // 상판 밑면은 커넥터 높이에 맞춰져 LCD 위로 떠 있다. LCD를 누르는 받침은 액정을
      // 눌러서 뺐다. 화면 창은 상판만 관통하고 윗면 쪽에 45° 모따기를 낸다.
      lid = sub(lid, boxBrush(b.winW, b.winD, LID_PLATE + 1, b.winX, b.y, q.lidCageH - 0.5, 0.4));
      const ch = LID_PLATE + 0.5;
      lid = sub(lid, meshBrush(frustumGeo(b.winW, b.winD, b.winW + 2 * ch, b.winD + 2 * ch,
                                          q.lidCageH, q.lidCageH + ch, b.winX, b.y)));
    }
    if (x114On()) {
      const b = q.x114, toLid = q.trayTop - q.lidCageH;
      // LCD가 닿는 상판 밑면을 LCD 외형(+0.3 여유)만큼 wkX114LcdRecess 깊이로 파 올려
      // 뚜껑이 LCD를 누르지 않게 한다. 스킨은 최소 0.6 남긴다.
      const rec = Math.max(0, Math.min(LID_PLATE - 0.6, Number(P.wkX114LcdRecess ?? 0.5)));
      if (rec > 0)
        lid = sub(lid, boxBrush(X114.lcd.l + 0.6, X114.lcd.w + 0.6, rec + 0.5, b.cx + X114.lcd.u, b.y,
                                q.lidCageH - 0.5, 0.4));
      // 화면 창 + 윗면 45° 모따기
      const wx = b.cx + X114.win.u, wl = X114.win.l, ww = X114.win.w;
      lid = sub(lid, boxBrush(wl, ww, LID_PLATE + 1, wx, b.y, q.lidCageH - 0.5, 0.4));
      const ch = LID_PLATE + 0.5;
      lid = sub(lid, meshBrush(frustumGeo(wl, ww, wl + 2 * ch, ww + 2 * ch,
                                          q.lidCageH, q.lidCageH + ch, wx, b.y)));
      // 보드가 −X 벽에 붙어 LCD 끝(보드 끝에서 0.65)이 결합 텅 띠 밑으로 들어온다. LCD 윗면이
      // 텅 아래끝보다 높아 뚜껑이 LCD 모서리에 얹혀 끝까지 안 닫히므로 그 자리 텅만 비운다.
      lid = sub(lid, boxBrush(X114.lcd.l + 1.0, X114.lcd.w + 1.0, JOINT_H + 0.2, b.cx + X114.lcd.u, b.y,
                              q.lidCageH - JOINT_H - 0.2, 0.4));
      if (btnFlexOn()) {
        const f = x114FlexDims(q), lidTop = q.lidCageH + LID_PLATE;
        const flame = flameBtnOn();
        for (const p of f.pads) {
          if (flame) {
            // 불꽃 둘레로 FLEX_SLOT 틈 + 경첩까지 팔 양옆 0.5 틈.
            lid = sub(lid, polyBrush([flameBtnPts(f, p)], LID_PLATE + 1, q.lidCageH - 0.5, FLEX_SLOT));
            lid = sub(lid, boxBrush(p.hinge - p.x, f.armW + 2 * FLEX_SLOT, LID_PLATE + 1, (p.x + p.hinge) / 2, p.y,
                                    q.lidCageH - 0.5, 0.4));
          } else {
            const x0 = p.x - f.pad / 2 - FLEX_SLOT, hw = f.pad / 2 + FLEX_SLOT;
            lid = sub(lid, boxBrush(p.hinge - x0, 2 * hw, LID_PLATE + 1, (x0 + p.hinge) / 2, p.y,
                                    q.lidCageH - 0.5, 0.4));
          }
          // 팔은 윗면 쪽(출력 시 베드 쪽)에 armT만 남겨 휘게 하고, 패드는 상판 두께 그대로 둔다.
          lid = add(lid, boxBrush(p.hinge + 0.2 - p.x, f.armW, f.armT, (p.x + p.hinge + 0.2) / 2, p.y,
                                  lidTop - f.armT, 0.2));
          lid = add(lid, flame ? polyBrush([flameBtnPts(f, p)], LID_PLATE, q.lidCageH)
                               : boxBrush(f.pad, f.pad, LID_PLATE, p.x, p.y, q.lidCageH, f.pad / 2));
          if (q.lidCageH - f.plungerZ0 > 0.1)
            lid = add(lid, boxBrush(f.plungerD, f.plungerD, q.lidCageH - f.plungerZ0 + 0.1, p.x, p.y,
                                    f.plungerZ0, f.plungerD / 2));
        }
        // 불꽃 윗면 0.4mm는 라임 파트 자리로 비운다 (flameBtnInlay와 같은 모양).
        if (flame) lid = sub(lid, flameBtnInlay(q, lidTop - FLAME_BTN_INLAY, FLAME_BTN_INLAY + 0.1));
      } else {
        // 앞면 버튼 A·B 구멍 (별도 출력 캡)
        for (const [u, v] of X114.btns)
          lid = sub(lid, boxBrush(x114Btn().hole, x114Btn().hole, LID_PLATE + 1, b.cx + u, b.y + v,
                                  q.lidCageH - 0.5, x114Btn().hole / 2));
      }
      lid = sub(lid, boxBrush(X114.micD, X114.micD, LID_PLATE + 1, b.cx + X114.mic[0],
                              b.y + X114.mic[1], q.lidCageH - 0.5, X114.micD / 2));
      // LCD 양옆 PCB 가장자리를 눌러 보드를 잡는 리브 (LCD는 건드리지 않음)
      const ribZ0 = b.faceZ + 0.1 - toLid;
      if (q.lidCageH - ribZ0 > 0.1)
        for (const sv of [-1, 1])
          lid = add(lid, boxBrush(22, 1.2, q.lidCageH - ribZ0 + 0.1, b.cx - 8.5,
                                  b.y + sv * (X114.w / 2 - 0.9), ribZ0, 0.3));
      if (pinsOn()) {
        const pd = x114PinDims(q);
        for (const p of pd.pins.filter(p => p.up)) {
          const z0 = pd.bossZ0 - toLid;
          lid = add(lid, boxBrush(pd.bossD, pd.bossD, q.lidCageH - z0 + 0.1, p.x, p.y, z0, pd.bossD / 2));
          lid = sub(lid, boxBrush(pd.sockD, pd.sockD, pd.tipZ + 0.3 - pd.bossZ0 + 0.1, p.x, p.y,
                                  z0 - 0.1, pd.sockD / 2));
        }
      }
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
    if (oledPlug()) {
      // 핀 직결: OLED는 XIAO 핀에 꽂혀 있고 뚜껑이 위에서 덮는다. 상판을 아래에서 OLED
      // 외형만큼 파 올려 스킨만 남기고, 화면 창만 뚫는다(베젤 불필요). 결합 텅과 겹치면
      // 그 자리 텅도 같이 비운다.
      const pp = plugPose(q), o = pp.o;
      const z0 = q.lidCageH - JOINT_H - 1;
      lid = sub(lid, boxBrush(o.w + 2 * PLUG_CLR, o.d + 2 * PLUG_CLR, pp.oTop + 0.1 - z0,
                              pp.x, pp.y, z0, 0.5));
      lid = sub(lid, boxBrush(o.winW + 0.2, o.winD + 0.2, PLUG_SKIN + 1.0,
                              pp.x, pp.y + o.winY, pp.oTop, 0.3));
    } else if (oledOn()) {
      // 뚜껑 윗면 전체를 베젤 윗면 높이까지 평평하게 올리고, OLED 포켓과 그 위 베젤
      // 자리를 판다. 베젤이 화면 창만 남기고 나머지를 가린다. 헤더 쪽 4가닥은 상판
      // 슬롯을 통과해 바로 아래 ESP32로 내려간다. 핀 관통 모드면 포켓 바닥의 받침 위로
      // 띄워, 상판 위로 올라온 ESP 핀 끝이 OLED에 닿지 않게 한다.
      const lidTop = q.lidCageH + LID_PLATE, lift = oledLift(), o = oledDims();
      const topZ = lidTop + lift + o.rimH, bz = bezelDims(q);
      lid = add(lid, boxBrush(q.W, q.D, topZ - lidTop + 0.1, 0, 0, lidTop - 0.1, r));
      // 다이어트: 윗면 스킨(LID_SKIN)과 외벽·결합 텅 띠만 남기고 속을 밑에서 비운다.
      // OLED 포켓 둘레와 SuperMini 케이지(+USB 소켓) 위 상판은 그대로 둔다.
      const hollowTop = topZ - LID_SKIN;
      if (hollowTop > q.lidCageH + 0.4) {
        let hollow = boxBrush(j.inW, j.inD, hollowTop - q.lidCageH + 0.2, 0, 0,
                              q.lidCageH - 0.2, Math.max(0.6, r - q.wall - jointW()));
        // OLED 포켓 둘레는 베젤 자리 바깥으로 0.6만 남긴 얇은 벽이면 충분하다.
        hollow = sub(hollow, boxBrush(bz.w + 1.2, bz.d + 1.2,
                                      hollowTop + 1, 0, 0, -0.5, 0.8));
        if (miniOn()) {
          const cw = ESP.w + CLR + 2.0, cd = ESP.d + CLR + 2.0;
          const x0 = -cw / 2 - USB_C.over - 0.4 - 0.8, x1 = cw / 2 + 0.8;
          hollow = sub(hollow, boxBrush(x1 - x0, cd + 1.6, hollowTop + 1,
                                        (x0 + x1) / 2, 0, -0.5, 1.0));
        }
        lid = sub(lid, hollow);
      }
      lid = sub(lid, boxBrush(o.cavW, o.cavD, topZ - lidTop + 0.4, 0, 0, lidTop, 0.5));
      lid = sub(lid, boxBrush(bz.w, bz.d, BEZEL_T + 0.4, 0, 0, topZ - BEZEL_T, 0.8));
      // XIAO 모드는 OLED 밑에 케이지가 없으므로 포켓 바닥 가운데를 뚫고 가장자리
      // 받침턱(OLED_LEDGE)만 남긴다. 배선도 이 구멍으로 바로 내려간다.
      const openFloor = xiaoOn();
      if (openFloor)
        lid = sub(lid, boxBrush(o.cavW - 2 * OLED_LEDGE, o.cavD - 2 * OLED_LEDGE,
                                LID_PLATE + 1.0, 0, 0, q.lidCageH - 0.5, 0.8));
      if (lift > 0.05 && o.feet === 'corners')
        for (const sx of [-1, 1])
          for (const sy of [-1, 1])
            lid = add(lid, boxBrush(3.0, 3.0, lift + 0.1,
                                    sx * (o.cavW / 2 - 1.4), sy * (o.cavD / 2 - 1.4),
                                    lidTop - 0.1, 0.4));
      else if (lift > 0.05)
        // 핀 열(y=±8)을 피해 X 양옆 벽에 붙인 막대로 받친다.
        for (const sx of [-1, 1])
          lid = add(lid, boxBrush(1.6, Math.min(10, MINI_PIN_ROW_Y * 2 - 4), lift + 0.1,
                                  sx * (o.cavW / 2 - 0.8), 0, lidTop - 0.1, 0.4));
      // 0.49" 받침은 SuperMini 핀 열(±8) 바로 위에 벽이 걸린다. 핀 구멍을 OLED 밑면
      // 높이까지 다시 뚫어 벽 밑동에 홈을 내 준다(0.96"은 벽이 핀 열 밖이라 영향 없음).
      if (pinsUp()) {
        const hd = P.wkPinHoleD;
        for (const sy of [-1, 1])
          for (let i = 0; i < 8; i++)
            lid = sub(lid, boxBrush(hd, hd, LID_PLATE + lift + 0.5, miniPinX(i),
                                    sy * MINI_PIN_ROW_Y, q.lidCageH - 0.5, hd / 2));
      }
      // 배선 슬롯은 핀 열 바로 밑. 0.49"는 핀 열이 ESP 핀 구멍과 겹치지 않는 안쪽에 온다.
      const slotW = Math.min(12, o.cavW - 2);
      if (!openFloor)
        lid = sub(lid, boxBrush(slotW, 3.2, LID_PLATE + 0.8,
                                0, o.pinY + Math.sign(o.pinY) * -0.2, q.lidCageH - 0.4, 0.65));
    }
    return lid;
  }

  // OLED 베젤: 화면 창만 뚫린 얇은 판. 뚜껑 윗면 홈에 눌러 끼워(필요하면 접착) OLED를
  // 위에서 눌러 잡는다. z=0이 OLED에 닿는 밑면.
  function buildBezel(q) {
    const bz = bezelDims(q), o = bz.o, f = Math.max(0.05, P.wkFit / 2);
    let b = boxBrush(bz.w - 2 * f, bz.d - 2 * f, BEZEL_T, 0, 0, 0, Math.max(0.3, 0.8 - f));
    b = sub(b, boxBrush(o.winW + 0.2, o.winD + 0.2, BEZEL_T + 1, 0, o.winY, -0.5, 0.3));
    return b;
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
    if (tftOn()) {
      // PCB · LCD 모듈 · 화면 창 · USB-C 셸 · PH2.0 커넥터 (모두 트레이 그룹)
      const b = q.tft, edge = b.x0 + CLR / 2, upH = TFT.h - TFT.pcb;
      ghostBox(G[1], [TFT.l, TFT.w, TFT.pcb], [b.cx, b.y, SEAT_Z + TFT.pcb / 2], tftPcbMat);
      ghostBox(G[1], [TFT.lcdL, TFT.lcdW, upH], [b.lcdX, b.y, b.pcbTop + upH / 2], oledBoardMat);
      ghostBox(G[1], [b.winW, b.winD, 0.1], [b.winX, b.y, b.lcdTop + 0.05], oledScreenMat);
      ghostBox(G[1], [7.35, USB_C.w, USB_C.d],
               [edge + 7.35 / 2 - 0.5, b.y + TFT.usbY, b.pcbTop + USB_C.d / 2], MATS.esp);
      const jstH = Math.min(b.compH, 4.5);
      ghostBox(G[1], [4.5, 6.0, jstH],
               [edge + TFT.jstX, b.y + TFT.jstY, b.pcbTop + jstH / 2], jstMat);
    } else if (x114On()) {
      // 부품면이 아래: PCB · LCD · 화면 · XIAO · USB-C · PH2.0 · Grove · 옆 버튼 · 앞 버튼 캡
      const b = q.x114, Z = w => b.faceZ + w, X = u => b.cx + u, Y = v => b.y + v;
      ghostBox(G[1], [X114.l, X114.w, X114.pcb], [b.cx, b.y, Z(-X114.pcb / 2)], tftPcbMat);
      ghostBox(G[1], [X114.lcd.l, X114.lcd.w, X114.lcdH], [X(X114.lcd.u), b.y, Z(X114.lcdH / 2)], oledBoardMat);
      ghostBox(G[1], [X114.win.l, X114.win.w, 0.1], [X(X114.win.u), b.y, Z(X114.lcdH + 0.05)], oledScreenMat);
      ghostBox(G[1], [X114.xiao.u1 - X114.xiao.u0, X114.xiao.w, 1.12],
               [X((X114.xiao.u0 + X114.xiao.u1) / 2), b.y, Z(-X114.pcb - 0.04 - 0.56)], MATS.esp);
      ghostBox(G[1], [7.75, 8.94, USB_C.d], [X(-X114.l / 2 - X114.usb.over + 3.875), Y(X114.usb.v), Z(X114.usb.w)], MATS.esp);
      ghostBox(G[1], [7.9, 8.6, 5.6], [X(X114.ph.u), Y(X114.ph.v), Z(-X114.pcb - 2.8)], jstMat);
      ghostBox(G[1], [X114.grove.l, X114.grove.w, X114.grove.d],
               [X(X114.grove.u), b.y, Z(-X114.pcb - X114.grove.d / 2)], jstMat);
      {
        const [u0, u1, w0, w1] = X114.sideBtn;
        ghostBox(G[1], [u1 - u0, 3.5, w1 - w0], [X((u0 + u1) / 2), Y(X114.w / 2 - 1.2), Z((w0 + w1) / 2)], switchMat);
      }
      // 전원 스위치 몸체와 돌기 (벽 안쪽에 덮여 있다)
      ghostBox(G[1], [6.7, 2.8, 1.4], [X(7.35), Y(10.75), Z(-2.395)], switchMat);
      ghostBox(G[1], [1.6, 1.5, 1.0], [X(7.25), Y(12.9), Z(-2.39)], switchLeverMat);
      const lz = q.trayTop - q.lidCageH;
      if (!btnFlexOn()) for (const [u, v] of X114.btns)
        for (const g of x114CapGeo(q)) ghostGeo(G[2], g, [X(u), Y(v), b.faceZ + b.btnH - lz], hallMat);
    } else if (xiaoOn()) {
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
    if (!dispOn())
      ghostBox(G[1], [q.mpu.w, q.mpu.d, q.mpu.h],
               [q.mpuX, q.mpuY, q.mpuSeatZ + q.mpu.h / 2], mpuMat);
    if (P.wkSwOn && miniOn())
      ghostBox(G[1], [SW.body, SW.w, SW.d],
               [q.W / 2 - q.wall - SW.body / 2 + 0.6, P.wkSwY,
                q.swZ], switchMat);
    // ESP32-C3 SuperMini는 뚜껑 밑 케이지에 아래에서 끼워 넣는다 — 실물 STL로 표시해야
    // USB(-X)·안테나 방향이 한눈에 보인다. 에셋 로드 전이면 박스로 대체한다.
    if (miniOn() && ASSETS && ASSETS.esp) {
      const eg = ASSETS.esp.clone();
      eg.translate(-ESP.w / 2, -ESP.d / 2, 0);   // min corner 기준 → 중심 정렬
      ghostGeo(G[2], eg, [0, 0, espZ0(q)], MATS.esp);
    } else if (miniOn()) {
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
    if (oledPlug()) {
      // XIAO에 꽂힌 부품이므로 트레이 그룹에 둔다.
      const pp = plugPose(q), o = pp.o, zb = pp.zBack + pp.toLid;
      ghostBox(G[1], [o.w, o.d, o.h], [pp.x, pp.y, zb + o.h / 2], oledBoardMat);
      ghostBox(G[1], [o.winW, o.winD, 0.45], [pp.x, pp.y + o.winY, zb + o.h + 0.12], oledScreenMat);
      const pinLen = pp.spacer + XIAO.pcb + 1.0;
      for (let i = 0; i < 4; i++)
        ghostBox(G[1], [0.64, 0.64, pinLen],
                 [pp.x - 3.81 + i * 2.54, pp.y + o.pinY, zb - pinLen / 2], MATS.mod);
      ghostBox(G[1], [4 * 2.54, 2.5, HEADER_BODY],
               [pp.x, pp.y + o.pinY, zb - HEADER_BODY / 2 - (pp.spacer - HEADER_BODY)], switchMat);
    } else if (oledOn()) {
      const lidTop = q.lidCageH + LID_PLATE + oledLift(), o = oledDims();
      ghostBox(G[2], [o.w, o.d, o.h],
               [0, 0, lidTop + 0.1 + o.h / 2], oledBoardMat);
      ghostBox(G[2], [o.winW, o.winD, 0.45],
               [0, o.winY, lidTop + o.h + 0.12], oledScreenMat);
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
    const wire = (a, b, color, l1, l2, tag, down = null, ribbon = false) =>
      specs.push({ a, b, color, l1, l2, tag, down, ribbon });
    // 아래로 빠지는 배선(OLED 뒷면 핀): 핀에서 곧장 내려가 목표 높이 근처(또는 뚜껑
    // 밑)에서 옆으로 건너간 뒤 목표 핀에 닿는다. down = 뚜껑 밑면의 월드 z.
    const routeDown = (a, b, under, i) => {
      const z = Math.min(a[2] - 0.8, Math.max(b[2] + 1.0, under)) - i * 0.4;
      return [a, [a[0], a[1], z], [b[0], b[1], z], b];
    };
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
        // 리본(4핀 일자 케이블)은 같은 높이로 나란히 지나가게 층을 나누지 않는다.
        addWire(s.down != null ? routeDown(s.a, s.b, s.down, s.ribbon ? 0 : i)
                               : route(s.a, s.b, lane, i), s.color, s.l1, s.l2, s.tag);
      });
    };

    const batTop = q.batteryZ + P.wkBatH;
    const batPlus = world(G[0], [-BAT.w / 2 + 2, q.batteryY - 3.2, batTop]);
    const batMinus = world(G[0], [-BAT.w / 2 + 2, q.batteryY + 3.2, batTop]);
    const hallZ = 0.75 + HALL.h;
    const hallAo = world(G[0], [-5, q.hallY, hallZ]);
    const hallVcc = world(G[0], [0, q.hallY, hallZ]);
    const hallGnd = world(G[0], [5, q.hallY, hallZ]);

    if (tftOn()) {
      // 배터리는 PH2.0 플러그로 꽂고, IMU·디스플레이는 보드에 있으므로 KY-035만 배선한다.
      const b = q.tft;
      const pin = n => {
        const p = ESP_PINS_TFT[n] || ESP_PINS_TFT[10];
        return world(G[1], [b.cx + p[0], b.y + p[1], b.pcbTop]);
      };
      const jx = b.x0 + CLR / 2 + TFT.jstX - 2.25, jz = b.pcbTop + 1.5;
      wire(batPlus, world(G[1], [jx, b.y + TFT.jstY - 1, jz]), colors.plus, t('wtBatPlus'), 'PH2.0 +');
      wire(batMinus, world(G[1], [jx, b.y + TFT.jstY + 1, jz]), colors.minus, t('wtBatMinus'), 'PH2.0 −');
      if (P.wkHallOn) {
        wire(hallVcc, pin('3V3'), colors.plus, 'KY +', '3V3');
        wire(hallGnd, pin('GND'), colors.minus, 'KY −', 'GND');
        wire(hallAo, pin(P.wkHallGpio), colors.gpio, 'S/AO', 'G' + P.wkHallGpio, 'hall');
      }
      flush();
      return;
    }

    if (x114On()) {
      // 배터리는 PH2.0 플러그(-Y 긴 변)로. KY-035는 Grove 커넥터 쪽 핀으로 그린다 —
      // Grove SDA/SCL(D4/D5)은 IMU I2C와 공유이므로 아날로그 핀은 실물에서 정해야 한다.
      const b = q.x114, at = (u, v, w) => world(G[1], [b.cx + u, b.y + v, b.faceZ + w]);
      wire(batPlus, at(X114.ph.u - 1, -X114.w / 2, -4), colors.plus, t('wtBatPlus'), 'PH2.0 +');
      wire(batMinus, at(X114.ph.u + 1, -X114.w / 2, -4), colors.minus, t('wtBatMinus'), 'PH2.0 −');
      if (P.wkHallOn) {
        const gp = n => {
          const p = ESP_PINS_X114[n] || ESP_PINS_X114[4];
          return at(p[0], p[1], -X114.pcb - X114.grove.d + 0.5);
        };
        wire(hallVcc, gp('3V3'), colors.plus, 'KY +', '3V3');
        wire(hallGnd, gp('GND'), colors.minus, 'KY −', 'GND');
        wire(hallAo, gp(P.wkHallGpio), colors.gpio, 'S/AO', 'D' + P.wkHallGpio, 'hall');
      }
      flush();
      return;
    }

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
      ? world(G[1], [xiaoPinX(q, x), q.boardY + y, espTop])
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
    const i2c = i2cPins();
    const espSda = espGpio(i2c.sda, 8), espScl = espGpio(i2c.scl, 9);

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
    if (miniOn() && P.wkSwOn) {
      // SPDT 가운데 다리(COM)로 들어와 바깥쪽 한 다리로 나간다. 남는 다리는 미사용.
      const sx = lastLayout.W / 2 - lastLayout.wall - 1.2;
      const swCom = world(G[1], [sx, P.wkSwY, lastLayout.swZ]);
      const swOut = world(G[1], [sx, P.wkSwY + 2.54, lastLayout.swZ]);
      wire(chgOutPlus, swCom, colors.plus, 'OUT+', 'SW ②');
      wire(swOut, esp5V, colors.plus, 'SW ①', '5V');
    } else if (miniOn()) {
      wire(chgOutPlus, esp5V, colors.plus, 'OUT+', '5V');
    }
    if (miniOn()) wire(chgOutMinus, espGnd, colors.minus, 'OUT−', 'GND');

    // KY-035: 보드 상단 3핀을 S/AO, +, − 순서로 시각화한다.
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
    wire(mpuSda, espSda, colors.sda, 'SDA', 'G' + i2c.sda, 'sda');
    wire(mpuScl, espScl, colors.scl, 'SCL', 'G' + i2c.scl, 'scl');

    // OLED: MPU6050과 GPIO8/9 I2C 버스를 공유한다. 핀 직결이면 배선 없음.
    if (oledOn() && !oledPlug()) {
      const o = oledDims();
      // 핀은 OLED 뒷면(밑면)으로 나오므로 배선도 밑면에서 시작해 아래로 내려간다.
      const oledZ = q.lidCageH + LID_PLATE + oledLift() + 0.1 - 0.3;
      const oledPin = i => world(G[2], [-3.81 + i * 2.54, o.pinY, oledZ]);
      const under = world(G[2], [0, 0, q.lidCageH - 1.0])[2];
      const oGnd = oledPin(0), oVcc = oledPin(1), oScl = oledPin(2), oSda = oledPin(3);
      const rb = xiaoOn();
      wire(oVcc, esp3V3, colors.plus, 'VCC', '3V3', undefined, under, rb);
      wire(oGnd, espGnd, colors.minus, 'GND', null, undefined, under, rb);
      wire(oSda, espSda, colors.sda, 'SDA', 'G' + i2c.sda, 'sda', under, rb);
      wire(oScl, espScl, colors.scl, 'SCL', 'G' + i2c.scl, 'scl', under, rb);
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
    if (tftOn()) {
      const b = q.tft;
      const tftNeedW = 2 * q.wall + Math.max(0, Number(P.wkTftEndGap) || 0) + b.L;
      const tftNeedD = 2 * q.wall + b.Wd;
      if (q.W + 0.01 < tftNeedW || q.D + 0.01 < tftNeedD)
        warnings.push(t('wkTftFit', tftNeedW.toFixed(1), tftNeedD.toFixed(1)));
      const winOver = Math.abs(b.winX - b.lcdX) + b.winW / 2 > TFT.lcdL / 2 - 0.5
        || b.winD / 2 > TFT.lcdW / 2 - 0.5;
      if (winOver) warnings.push(t('wkTftWinFit'));
    } else if (x114On()) {
      const b = q.x114;
      const needW = 2 * q.wall + Math.max(0, Number(P.wkTftEndGap) || 0) + b.L;
      const needD = 2 * q.wall + b.Wd;
      if (q.W + 0.01 < needW || q.D + 0.01 < needD)
        warnings.push(t('wkX114Fit', needW.toFixed(1), needD.toFixed(1)));
      if (b.compD < X114.compD + 0.2)
        warnings.push(t('wkX114CompFit', (X114.compD + 0.3).toFixed(1)));
    } else {
      const pairNeedW = trayBoard().w + q.mpu.w + 2 * CLR + 1.0 + 2 * q.wall;
      if (q.W + 0.01 < pairNeedW) warnings.push(t('wkRowOverlap'));
      const mpuNeedD = q.mpu.d + CLR + 2 * q.wall;
      if (q.D + 0.01 < mpuNeedD) warnings.push(t('wkMpuDepthFit', mpuNeedD.toFixed(1)));
    }
    const batteryTop = q.batteryZ + P.wkBatH;
    if (batteryTop > q.baseH - 0.4) warnings.push(t('wkBatteryHeight', (batteryTop + 0.4).toFixed(1)));
    if (!dispOn() && q.mpu.h > q.trayTop - q.mpuSeatZ - q.lidCageH - 0.8 && !oledPlug())
      warnings.push(t('wkMpuHeightFit'));
    if (xiaoOn() && SEAT_Z + XIAO.h > q.trayTop - q.lidCageH - 0.2 && !oledPlug())
      warnings.push(t('wkXiaoHeightFit'));
    if (oledPlug()) {
      // 핀 직결은 트레이를 낮춰야 핀이 충분히 물린다. XIAO 위로는 뚜껑 상판뿐이므로
      // 실제 천장(상판 밑면)과 USB 소켓 칼라만 확인한다.
      const pp = plugPose(q);
      const oTopY = pp.y + pp.o.d / 2 + PLUG_CLR;
      if (oTopY > q.innerHalfD - 0.2 + 0.01)
        warnings.push(t('wkPlugWall', (q.D + 2 * (oTopY - q.innerHalfD + 0.2)).toFixed(1)));
      if (SEAT_Z + XIAO.h > q.trayTop - 0.2) warnings.push(t('wkXiaoHeightFit'));
      if (q.mpuSeatZ + q.mpu.h > q.trayTop - JOINT_H - 0.3) warnings.push(t('wkMpuHeightFit'));
      const caseH = Number(P.wkEspCaseH) || LID_CAGE_DEFAULT;
      const fitH = h => +(caseH - (h - pp.grip)).toFixed(1);
      if (pp.spacer < HEADER_BODY - 0.05)
        warnings.push(t('wkPlugLow', fitH(HEADER_PIN)));
      else if (pp.grip < XIAO.pcb + 1.0)
        warnings.push(t('wkPlugGrip', pp.grip.toFixed(1), fitH(3.5)));
      else
        warnings.push(t('wkPlugOk', pp.spacer.toFixed(1), pp.grip.toFixed(1)));
    }
    if (miniOn() && espZ0(q) + ESP.h > q.lidCageH - 0.2 + 0.01)
      warnings.push(t('wkEspHeightFit'));
    if (pinsUp()) {
      const pcbTop = espZ0(q) + 1.3;
      if (pcbTop + HEADER_BODY > q.lidCageH + 0.01) warnings.push(t('wkHeaderFit'));
      // 상판 위로 나온 핀 길이 — OLED 밑면(띄움 높이)보다 0.3 낮게 잘라야 한다.
      const stick = pcbTop + HEADER_BODY + HEADER_PIN - (q.lidCageH + LID_PLATE);
      if (oledOn() && stick > oledLift() - 0.3)
        warnings.push(t('wkPinTrim', stick.toFixed(1), Math.max(0, oledLift() - 0.3).toFixed(1)));
    }
    const hallNeedD = BAT.d + CLR + q.hallT + CLR + 1.3 + 2 * q.wall;
    // KY-035는 트레이 바닥 슬롯을 지나 위로 올라오므로, 베이스 높이가 아니라
    // ESP32 케이지 밑면까지의 전체 여유가 기준이다.
    // TFT는 보드가 트레이 바닥 바로 위를 덮으므로, KY-035가 보드 밑에 걸리면 보드
    // 밑면(SEAT_Z)이 천장이 된다.
    const hallUnderTft = tftOn()
      && q.hallY + (q.hallT + CLR) / 2 > q.tft.y - q.tft.Wd / 2;
    // XIAO 1.14"는 부품면이 아래라 가장 깊은 부품(PH2.0) 밑이 천장이다.
    const hallRoom = x114On() ? q.x114.pcbZ0 - X114.compD - 0.2
      : !tftOn() ? q.trayTop - q.lidCageH
      : hallUnderTft ? SEAT_Z - 0.2 : q.trayTop - 0.2;
    const hallCeil = q.baseH + hallRoom;
    const hallNeedH = 0.75 + HALL.h + 0.4 - hallRoom;
    if (P.wkHallOn && (q.D < hallNeedD || 0.75 + HALL.h + 0.4 > hallCeil))
      warnings.push(t('wkHallFit', hallNeedD.toFixed(1), hallNeedH.toFixed(1)));
    const od = oledDims();
    if (oledOn() && (q.W < od.outW || q.D < od.outD))
      warnings.push(t('wkOledFit', od.outW.toFixed(1), od.outD.toFixed(1), od.label));
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
        bezelGeo = null; capGeo = null; logoGeo = null;
        if (P.wkLogoOn) {
          const q0 = layout(), lm = logoInlay(q0, 0, logoDims(q0).depth);
          logoGeo = manToGeo(lm); lm.delete();
          const logoMesh = new THREE.Mesh(logoGeo, logoMat);
          logoMesh.name = 'udo_logo_inlay';
          G[0].add(logoMesh);
        }
        btnFlameGeo = null;
        if (flameBtnOn()) {
          const q0 = layout(), top = q0.lidCageH + LID_PLATE;
          const fm = flameBtnInlay(q0, top - FLAME_BTN_INLAY, FLAME_BTN_INLAY);
          btnFlameGeo = manToGeo(fm); fm.delete();
          const flameMesh = new THREE.Mesh(btnFlameGeo, logoMat);
          flameMesh.name = 'x114_button_flames';
          G[2].add(flameMesh);
        }
        document.getElementById('wkExBezel').disabled = !oledOn() || oledPlug();
        document.getElementById('wkExCaps').disabled = !x114On() || btnFlexOn();
        if (x114On() && !btnFlexOn()) {
          // 앞면 버튼 캡 2개 (걸림 턱이 베드에 닿는 출력 방향)
          const q0 = layout();
          const mergeCaps = [];
          X114.btns.forEach(([u, v], i) => x114CapGeo(q0).forEach(g => {
            g.translate(i * 12 - 6, 0, 0); mergeCaps.push(g); }));
          capGeo = mergeCaps;
        }
        if (oledOn() && !oledPlug()) {
          const bm = buildBezel(layout());
          bezelGeo = manToGeo(bm); bm.delete();
          const q0 = layout();
          const bzMesh = new THREE.Mesh(bezelGeo, xray ? matCaseX : matCase);
          bzMesh.userData.caseLike = true;
          bzMesh.position.z = q0.lidCageH + LID_PLATE + oledLift() + oledDims().rimH - BEZEL_T;
          G[2].add(bzMesh);
        }
        setFloorMeshes(meshes); lastLayout = layout(); placeGhosts(lastLayout);
        applyWorkoutExplode(); setRulerExtras('workout', workoutRulerDims(lastLayout));
        const totalH = lastLayout.baseH + lastLayout.trayTop + LID_PLATE
          + (oledOn() ? oledDims().rimH + oledLift() : 0);
        const totalW = oledOn() ? Math.max(lastLayout.W, oledDims().outW) : lastLayout.W;
        const totalD = oledOn() ? Math.max(lastLayout.D, oledDims().outD) : lastLayout.D;
        document.getElementById('dims').textContent =
          t('workoutDims', totalW.toFixed(1), totalD.toFixed(1), totalH.toFixed(1),
            (performance.now() - t0).toFixed(0)) + '\n' + t('workoutReady', P.wkHallOn, oledOn());
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
    if (!geos[0]) return;
    const stem = P.wkHallOn ? 'workout_sensor_ky035_tw802040_base' : 'workout_sensor_tw802040_base';
    if (P.wkLogoOn && logoGeo) {
      // 베이스 + 로고 인레이를 한 오브젝트의 두 파트로 묶은 3MF 하나. 좌표가 같아 제자리에 앉는다.
      download3MF([
        { geo: geos[0], name: 'base', color: 0x222222 },
        { geo: logoGeo, name: 'udo_logo_inlay', color: UDO_MARK.color },
      ], stem + '_udo_logo.3mf', stem);
    } else downloadSTL(geos[0].clone(), stem + '.stl');
  });
  document.getElementById('wkExTray').addEventListener('click', () => {
    if (geos[1]) downloadSTL(geos[1].clone(), x114On()
      ? 'workout_sensor_xiao114_tray.stl'
      : tftOn() ? 'workout_sensor_tft114_tray.stl'
      : xiaoOn() ? 'workout_sensor_xiao_electronics_tray.stl'
      : 'workout_sensor_electronics_tray.stl');
  });
  document.getElementById('wkExLid').addEventListener('click', () => {
    if (!geos[2]) return;
    const geo = geos[2].clone();
    // 일반 뚜껑은 평평한 윗면을 베드로 뒤집는다. OLED가 있으면 윗면 포켓이 위로
    // 향해야 하므로 모델 방향 그대로 내보내고 ESP32 케이지 쪽 브리지만 출력한다.
    if (!oledOn()) geo.rotateX(Math.PI);
    geo.computeBoundingBox();
    const dz = -geo.boundingBox.min.z;
    geo.translate(0, 0, dz);
    if (flameBtnOn() && btnFlameGeo) {
      // 뚜껑 + 라임 불꽃 버튼 윗면을 한 오브젝트의 두 파트로 묶은 3MF. 같은 회전·이동을 준다.
      const fl = btnFlameGeo.clone();
      if (!oledOn()) fl.rotateX(Math.PI);
      fl.translate(0, 0, dz);
      download3MF([
        { geo, name: 'lid', color: 0x222222 },
        { geo: fl, name: 'button_flames', color: UDO_MARK.color },
      ], 'workout_sensor_xiao114_lid_flame_buttons.3mf', 'workout_sensor_xiao114_lid');
      return;
    }
    downloadSTL(geo, x114On() ? 'workout_sensor_xiao114_lid.stl' : tftOn() ? 'workout_sensor_tft114_lid.stl' : xiaoOn()
      ? (oledOn() ? `workout_sensor_xiao_oled${P.wkOledType}_lid.stl` : 'workout_sensor_xiao_lid.stl')
      : (oledOn() ? `workout_sensor_esp32_oled${P.wkOledType}_lid.stl` : 'workout_sensor_esp32_lid.stl'));
  });

  document.getElementById('wkExBezel').addEventListener('click', () => {
    if (!bezelGeo) return;
    // 보이는 윗면이 베드에 닿도록 뒤집는다.
    const geo = bezelGeo.clone();
    geo.rotateX(Math.PI);
    geo.computeBoundingBox();
    geo.translate(0, 0, -geo.boundingBox.min.z);
    downloadSTL(geo, `workout_sensor_oled${P.wkOledType}_bezel.stl`);
  });

  document.getElementById('wkExCaps').addEventListener('click', () => {
    if (!capGeo) return;
    // 원기둥 두 개씩을 하나의 매니폴드로 합쳐 내보낸다.
    let m = null;
    for (const g of capGeo) { const b = meshBrush(g); m = m ? add(m, b) : b; }
    const geo = manToGeo(m); m.delete();
    downloadSTL(geo, 'workout_sensor_xiao114_button_caps.stl');
  });

  return { rebuildWorkout, applyWorkoutExplode, drawWorkoutWires };
}
