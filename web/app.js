// 딤섬 클리커 웹 컨피규레이터
// three.js + three-bvh-csg 로 브라우저에서 파라메트릭 CSG 설계
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import ManifoldModule from './vendor/manifold.js';
import manifoldWasmUrl from './vendor/manifold.wasm?url';
import usbHoleUrl from '../stl_files/usb_c_hole.stl?url';
import switchMxUrl from '../stl_files/switch_mx.stl?url';
import batteryUrl from '../stl_files/520Mah_battery.stl?url';
import esp32Url from '../stl_files/esp32_c3_supermini.stl?url';
import chargeModuleUrl from '../stl_files/battery_charging_module.stl?url';
import oledUrl from '../stl_files/oled_0.49inch.stl?url';
import faceUrl from '../dimsum/obj_2_sup 2.0 face.stl?url';
import bunLidUrl from '../my_designs/bun_lid_clean.stl?url';
// 투두 서포터는 별도 소스(todo.js)로 분리됨 — 아래 initTodo(env)로 엔진만 주입한다.
// (todo.js는 app.js를 import하지 않으므로 순환/누락 import로 깨질 위험이 없음)
import { initTodo } from './todo.js';
import { TEXTURES, loadHeightMap, applySideTexture } from './texture.js';
let rebuildTodo = () => {};   // initTodo(env) 실행 후 실제 함수로 채워짐 (rebuild()에서 호출)
import { initWorkout } from './workout.js';
let rebuildWorkout = () => {};
let applyWorkoutExplode = () => {};
let drawWorkoutWires = () => {};

// ------------------------------------------------------------------
// i18n: 기본 English, 설정 메뉴에서 한국어(ko)로 전환. 개발자 주석은 그대로 둠.
// 사용자에게 보이는 텍스트만 여기서 관리 — 정적 텍스트는 index.html의 data-i18n 속성으로,
// 동적 텍스트(경고·배선표·정보줄 등)는 t(key, ...args)로 조회한다.
// ------------------------------------------------------------------
const I18N = {
  en: {
    title: 'Configurator',
    titleTodo: 'Todo Supporter Configurator',
    titleWorkout: 'Workout Motion Sensor Configurator',
    // 층 이름 (STL 빌드 오류 메시지용)
    layerNames: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4', 'OLED pod', 'OLED cover'],
    buildErr: (name, msg) => `⚠ ${name} build error: ${msg}`,
    texErr: name => `⚠ Could not load the "${name}" texture image.`,
    buildErrGeneric: (msg) => `⚠ Build error: ${msg}`,
    initError: (e) => `⚠ Initialization failed: ${e}\nCheck that you ran it with \`npm run dev\`.`,
    presetLoaded: (n) => `✓ Preset loaded (${n} items applied)`,
    presetError: '⚠ Cannot read preset file (JSON format error)',
    // GPIO 역할 이름 (우클릭 메뉴)
    roleSwitch: 'Switch', roleSwitch2: 'Switch 2', roleOledSda: 'OLED SDA',
    roleOledScl: 'OLED SCL', roleLed: 'LED', roleLedGreen: 'LED green', roleBuzzer: 'Buzzer',
    roleWorkoutHall: 'KY-035 analog',
    gpioSelect: (name) => `${name} GPIO select`,
    // 배선표
    wtGrpPower: 'Power',
    wtUsbC: 'USB-C', wtEspDirect: 'ESP32 direct', wtNoBattery: 'no battery',
    wtGrpPowerChain: 'Power (battery → charger → ESP32)',
    wtBatPlus: 'Battery +', wtBatMinus: 'Battery −',
    wtChgBplus: 'Charger B+', wtChgBminus: 'Charger B−',
    wtChgOutPlus: 'Charger OUT+', wtChgOutMinus: 'Charger OUT−',
    wtEsp5v: 'ESP32 5V', wtEspGnd: 'ESP32 GND', wtEsp3v3: 'ESP32 3V3',
    wtTpPowerStage: 'Verified power input / regulator (not modeled)',
    wtGrpOled: 'OLED (I2C)', wtOledVcc: 'OLED VCC', wtOledGnd: 'OLED GND',
    wtOledSda: 'OLED SDA', wtOledScl: 'OLED SCL', wtSckNote: 'module may label it SCK',
    wtGrpSwitch: 'Switch (MX)',
    wtSw1PinA: 'Switch 1 pin A', wtSw1PinB: 'Switch 1 pin B',
    wtSw2PinA: 'Switch 2 pin A', wtSw2PinB: 'Switch 2 pin B',
    wtSwPinA: 'Switch pin A', wtSwPinB: 'Switch pin B', wtPullup: 'internal pull-up input',
    wtGrpLedRgb: 'LED (2×5 two-tone 3-pin)',
    wtLedRed: 'LED red (pin 1)', wtLedGreen: 'LED green (pin 3)', wtLedCommon: 'LED common − (center)',
    wtResistor: '150~220Ω resistor',
    wtResistorRed: '1kΩ recommended (brightness match)',
    wtGrpLedRound: (d) => `LED (round ${d}mm)`,
    wtLedPlusLeg: 'LED + (long leg)', wtLedMinusLeg: 'LED − (short leg)',
    wtGrpBuzzer: 'Piezo buzzer', wtBzPlus: 'Buzzer +', wtBzMinus: 'Buzzer −', wtPwmTone: 'PWM tone',
    wtGrpWorkoutHall: 'KY-035 Hall sensor (analog)',
    wtHallSignal: 'KY-035 S / AO', wtHallVcc: 'KY-035 +', wtHallGnd: 'KY-035 −',
    wtHallNote: 'analog input · learn both magnet states',
    wtGrpWorkoutMpu: 'MPU6050 (I2C)',
    wtMpuVcc: 'MPU6050 VCC', wtMpuGnd: 'MPU6050 GND',
    wtMpuSda: 'MPU6050 SDA', wtMpuScl: 'MPU6050 SCL',
    // 3D 스프라이트 라벨
    spSw1: 'SW1', spSw2: 'SW2', spSw: 'SW', spBzPlus: 'BZ+', spBzMinus: 'BZ−',
    // 토글 버튼
    tgGhost: (on) => `Components: ${on ? 'On' : 'Off'}`,
    tgWires: (on) => `Wiring: ${on ? 'On' : 'Off'}`,
    tgXray: (on) => `Case X-ray: ${on ? 'On' : 'Off'}`,
    tgRuler: (on) => `Dimensions: ${on ? 'On' : 'Off'}`,
    // 정보줄
    infoDims: (size, total, lidTxt, ms, fitTxt) => `Total ${size} × ${total}mm (incl. boss)${lidTxt} · CSG ${ms}ms${fitTxt}`,
    todoDims: (w, d, h, ms) => `Todo supporter ${w} × ${d} × ${h}mm · CSG ${ms}ms`,
    infoLid: (d, h) => ` · Layer 4 Ø${d} × ${h}mm`,
    fitOk: ' · no assembly interference ✓',
    fitBad: (a, b, c, d) => ` · assembly interference ${a}/${b}/${c}/${d}mm³ ⚠`,
    // 경고
    wFit: '⚠ Layers overlap when assembled — adjust component layout or layer heights',
    wBatFit: (l, w) => `⚠ Battery (${l}×${w}) doesn't fit in Layer 1 — increase W/D or reduce the corner`,
    wBatStandFit: (tk, l) => `⚠ Upright battery (${tk}×${l}) doesn't fit in Layer 2 — increase depth D or move Battery X`,
    wBatStandEsp: '⚠ Upright battery overlaps the ESP32',
    wBatStandMod: '⚠ Upright battery overlaps the charge module',
    wBatStandTop: (w) => `⚠ Upright battery (height ${w}) touches the Layer 3 top plate — increase Layer 2·3 heights`,
    wEspWallYNoBat: '⚠ ESP32 overlaps the top/bottom wall — move ESP32 Y toward center',
    wEspWidthNoBat: (l) => `⚠ ESP32 (length ${l}) doesn't fit widthwise — increase W`,
    wEspWall: '⚠ ESP32 overlaps the wall',
    wEspStandTop: (h) => `⚠ Upright ESP32 (height ${h}) touches the Layer 3 top plate — increase Layer 2·3 heights`,
    wModWall: '⚠ Charge module overlaps the top/bottom wall',
    wModCurve: '⚠ Charge module doesn\'t fit the curved wall — move Y toward center',
    wTp4056Power: '⚠ TP4056 OUT is battery voltage, not regulated 5V — verify the ESP32 power input or add a regulator, and set charge current for your cell',
    wEspModOverlap: '⚠ ESP32 and charge module pockets overlap — raising the lift (Layer 2.5) lets them coexist',
    wEspLiftLow: (lift, h, min) => `⚠ ESP32 lift (${lift}) is lower than the charge module height (${h}) — raise it to at least ${min}`,
    wEspLiftTop: '⚠ Lifted ESP32 touches the Layer 3 top plate — reduce the lift or increase layer heights',
    wBeamMod: '⚠ The Layer 2.5 support beam crosses the charge module — move the ESP32',
    wBeamBat: '⚠ The Layer 2.5 support beam crosses the upright battery — adjust the position',
    wEspTower: '⚠ ESP32 overlaps the OLED tower',
    wModTower: '⚠ Charge module overlaps the OLED tower',
    wLedTower: '⚠ LED overlaps the OLED tower (notch)',
    wBatTower: '⚠ 650 battery overlaps the OLED tower',
    wOledBat: '⚠ Lowered OLED housing overlaps the battery in Layer 1 — move the OLED outward/up or remove the battery',
    wTowerTop: '⚠ OLED tower pierces the Layer 3 top plate — increase Layer 2 or 3 height',
    wOledBig: '⚠ OLED is large for the wall width/curvature — increase the diameter (W)',
    wF1Low: '⚠ Layer 1 is too low (not enough room for battery + wiring)',
    wCoverRib: (len, base) => `⚠ Cover triangle support was reduced to ${len}mm by the switch (base ${base})`,
    wSwThrough: '⚠ Switch holder pokes through below the lid — reduce recess or increase Layer 3/boss',
    wDblD: '⚠ Double mode recommends depth D of 60 or more',
    wSwGap: '⚠ Switch spacing is too narrow — dim sum characters (Ø28.7) overlap; 29 or more recommended',
    wCharWall: '⚠ Characters touch the front/back wall — increase D or reduce switch spacing',
    wLidWide: (d) => `⚠ Layer 4 (Ø${d}) is wider than the case outline and hangs over — set W to 41 or more`,
    wLedWall: '⚠ LED overlaps the Layer 3 wall/outline — move X/Y inward',
    wLedBoss: '⚠ LED overlaps the switch boss/holder — move it outward',
    wLedBand: '⚠ LED overlaps the Layer 4 joint groove/band — move it toward center',
    wLidChar: (min) => `⚠ Layer 4 touches the dim sum character — set the band height to ${min} or more (or use without the character)`,
    wBatCup: '⚠ Upright battery hits the switch holder cup — move Battery X or increase layer heights',
    wEspCup: '⚠ ESP32 hits the switch holder cup — move it or increase layer heights',
    wBzWall: '⚠ Buzzer overlaps the wall — move it inward',
    wBzCup: '⚠ Buzzer overlaps the switch holder cup — if there\'s no room, change buzzer mount to the Layer 2 floor',
    wBzLed: '⚠ Buzzer overlaps the LED',
    wBzThick: (mm) => `⚠ Buzzer (8.3) is thicker than Layer 3 and pokes ${mm}mm below — check it doesn't overlap Layer 2 components`,
    wBzEsp: '⚠ Buzzer overlaps the ESP32',
    wBzMod: '⚠ Buzzer overlaps the charge module',
    wBzLayFlipThrough: '⚠ Laid-down buzzer pokes through the Layer 3 top plate — increase layer heights',
    wBzLayPocket: '⚠ Laid-down buzzer carve intrudes into the switch pocket — move X/Y',
    wBzLayCup: '⚠ Laid-down buzzer carves into the Layer 3 holder cup (watch for thin cup walls)',
    wBzPinsNfc: '⚠ Buzzer pin/cable channel pierces the NFC pocket — move the buzzer or the NFC sticker',
    wBzPinsBottom: '⚠ With Layer 1 off, buzzer pins may protrude below the case — trim the pins after fitting',
    wBzCupBelow: '⚠ Buzzer touches under the Layer 3 switch holder cup — move X/Y',
    wBzTop: '⚠ Buzzer touches the Layer 3 top plate — increase layer heights',
    wSolderFloor: (left) => `⚠ Solder relief leaves only ${left}mm of Layer 2 floor under the channel — make it shallower`,
    wSolderNfcHit: (over) => `⚠ Solder relief cuts ${over}mm into the NFC pocket below — the sticker seat is breached, make the relief shallower or move the NFC pocket`,
    wSolderNfc: (skin) => `⚠ Only ${skin}mm between the solder relief and the NFC pocket below — make the relief shallower or move the NFC pocket`,
    wEspOutWall: (left) => `⚠ USB push-out leaves only ${left}mm of wall around the connector — pull it back, or thicken the wall / raise "Wall left at port"`,
    wEspDockGap: (gap) => `⚠ Auto-dock is off and the connector sits ${gap}mm behind the wall — a plug may not reach; raise ESP32 X`,
    wUsbThinNoop: (wall) => `⚠ "Wall left at port" is not thinner than the wall itself (${wall}mm) — lower it or the option does nothing`,
    wEspGripRoom: (room) => `⚠ Finger notches have only ${room}mm of room — the pocket sits too close to the wall, move the ESP32 toward the center`,
    wNfcThick: (fl, plate, room) => `⚠ NFC pocket breaks through the Layer ${fl} floor plate (${plate}) — keep the depth at ${room} or less, or lower the pocket floor`,
    wNfcWall: (d) => `⚠ NFC pocket (Ø${d}) runs into the wall / bottom joint groove — shrink it or move it toward the center`,
    wNfcWallF1: (d, skin) => `⚠ NFC pocket (Ø${d}) leaves less than ${skin}mm of skin to the Layer 1 outside face — shrink it or move it toward the center`,
    wNfcWire: '⚠ NFC pocket overlaps the wire hole — the pocket opens into the slot; move the NFC X/Y or the wire hole',
    wWireWall: '⚠ Wire hole reaches the case wall — move the hole toward the center or enlarge the case',
    wNfcNoF1: '⚠ NFC pocket is set to the Layer 1 floor plate, but Layer 1 is off — turn Layer 1 on or move the pocket to Layer 2',
  },
  ko: {
    title: '🥟 딤섬 클리커 컨피규레이터',
    titleTodo: '투두 서포터 컨피규레이터',
    titleWorkout: '운동 모션 센서 컨피규레이터',
    layerNames: ['1층', '2층', '3층', '4층', 'OLED 포드', 'OLED 커버'],
    buildErr: (name, msg) => `⚠ ${name} 생성 오류: ${msg}`,
    texErr: name => `⚠ "${name}" 텍스처 이미지를 불러오지 못했습니다.`,
    buildErrGeneric: (msg) => `⚠ 생성 오류: ${msg}`,
    initError: (e) => `⚠ 초기화 실패: ${e}\n\`npm run dev\` 로 실행했는지 확인하세요.`,
    presetLoaded: (n) => `✓ 프리셋 불러옴 (${n}개 항목 적용)`,
    presetError: '⚠ 프리셋 파일을 읽을 수 없습니다 (JSON 형식 오류)',
    roleSwitch: '스위치', roleSwitch2: '스위치 2', roleOledSda: 'OLED SDA',
    roleOledScl: 'OLED SCL', roleLed: 'LED', roleLedGreen: 'LED 초록', roleBuzzer: '부저',
    roleWorkoutHall: 'KY-035 아날로그',
    gpioSelect: (name) => `${name} GPIO 선택`,
    wtGrpPower: '전원',
    wtUsbC: 'USB-C', wtEspDirect: 'ESP32 직결', wtNoBattery: '배터리 없음',
    wtGrpPowerChain: '전원 (배터리 → 충전모듈 → ESP32)',
    wtBatPlus: '배터리 +', wtBatMinus: '배터리 −',
    wtChgBplus: '충전모듈 B+', wtChgBminus: '충전모듈 B−',
    wtChgOutPlus: '충전모듈 OUT+', wtChgOutMinus: '충전모듈 OUT−',
    wtEsp5v: 'ESP32 5V', wtEspGnd: 'ESP32 GND', wtEsp3v3: 'ESP32 3V3',
    wtTpPowerStage: '확인된 전원 입력 / 승압 회로 (모델에 없음)',
    wtGrpOled: 'OLED (I2C)', wtOledVcc: 'OLED VCC', wtOledGnd: 'OLED GND',
    wtOledSda: 'OLED SDA', wtOledScl: 'OLED SCL', wtSckNote: '모듈 표기는 SCK이기도',
    wtGrpSwitch: '스위치 (MX)',
    wtSw1PinA: '스위치1 핀 A', wtSw1PinB: '스위치1 핀 B',
    wtSw2PinA: '스위치2 핀 A', wtSw2PinB: '스위치2 핀 B',
    wtSwPinA: '스위치 핀 A', wtSwPinB: '스위치 핀 B', wtPullup: '내부 풀업 입력',
    wtGrpLedRgb: 'LED (2×5 투톤 3핀)',
    wtLedRed: 'LED 빨강 (1번 핀)', wtLedGreen: 'LED 초록 (3번 핀)', wtLedCommon: 'LED 공통 − (가운데)',
    wtResistor: '저항 150~220Ω',
    // 순방향 전압 차이(빨강 ~2.0V, 초록 ~3.0V)로 같은 저항이면 빨강이 훨씬 밝다
    wtResistorRed: '저항 1kΩ 권장 (밝기 균형)',
    wtGrpLedRound: (d) => `LED (원형 ${d}mm)`,
    wtLedPlusLeg: 'LED + (긴 다리)', wtLedMinusLeg: 'LED − (짧은 다리)',
    wtGrpBuzzer: '피에조 부저', wtBzPlus: '부저 +', wtBzMinus: '부저 −', wtPwmTone: 'PWM 톤',
    wtGrpWorkoutHall: 'KY-035 홀센서 (아날로그)',
    wtHallSignal: 'KY-035 S / AO', wtHallVcc: 'KY-035 +', wtHallGnd: 'KY-035 −',
    wtHallNote: '아날로그 입력 · 두 자석 상태 학습',
    wtGrpWorkoutMpu: 'MPU6050 (I2C)',
    wtMpuVcc: 'MPU6050 VCC', wtMpuGnd: 'MPU6050 GND',
    wtMpuSda: 'MPU6050 SDA', wtMpuScl: 'MPU6050 SCL',
    spSw1: '스위치1', spSw2: '스위치2', spSw: '스위치', spBzPlus: '부저+', spBzMinus: '부저−',
    tgGhost: (on) => `부품 표시: ${on ? '켬' : '끔'}`,
    tgWires: (on) => `배선 표시: ${on ? '켬' : '끔'}`,
    tgXray: (on) => `케이스 반투명: ${on ? '켬' : '끔'}`,
    tgRuler: (on) => `치수 표시: ${on ? '켬' : '끔'}`,
    infoDims: (size, total, lidTxt, ms, fitTxt) => `전체 ${size} × ${total}mm (보스 포함)${lidTxt} · CSG ${ms}ms${fitTxt}`,
    todoDims: (w, d, h, ms) => `투두 서포터 ${w} × ${d} × ${h}mm · CSG ${ms}ms`,
    infoLid: (d, h) => ` · 4층 Ø${d} × ${h}mm`,
    fitOk: ' · 조립 간섭 없음 ✓',
    fitBad: (a, b, c, d) => ` · 조립 간섭 ${a}/${b}/${c}/${d}mm³ ⚠`,
    wFit: '⚠ 조립 시 층끼리 겹칩니다 — 부품 배치나 층 높이를 조정하세요',
    wBatFit: (l, w) => `⚠ 배터리(${l}×${w})가 1층에 안 들어갑니다 — W/D를 키우거나 모서리를 줄이세요`,
    wBatStandFit: (tk, l) => `⚠ 세운 배터리(${tk}×${l})가 2층에 안 들어갑니다 — 세로 D를 키우거나 배터리 X를 옮기세요`,
    wBatStandEsp: '⚠ 세운 배터리가 ESP32와 겹칩니다',
    wBatStandMod: '⚠ 세운 배터리가 충전모듈과 겹칩니다',
    wBatStandTop: (w) => `⚠ 세운 배터리(높이 ${w})가 3층 상판에 닿습니다 — 2·3층 높이를 키우세요`,
    wEspWallYNoBat: '⚠ ESP32가 위/아래 벽과 겹칩니다 — ESP32 Y를 중앙 쪽으로 옮기세요',
    wEspWidthNoBat: (l) => `⚠ ESP32(길이 ${l})가 가로로 안 들어갑니다 — W를 키우세요`,
    wEspWall: '⚠ ESP32가 벽과 겹칩니다',
    wEspStandTop: (h) => `⚠ 세운 ESP32(높이 ${h})가 3층 상판에 닿습니다 — 2·3층 높이를 키우세요`,
    wModWall: '⚠ 충전모듈이 위/아래 벽과 겹칩니다',
    wModCurve: '⚠ 충전모듈이 곡면 벽과 맞지 않습니다 — Y를 중앙 쪽으로 옮기세요',
    wEspModOverlap: '⚠ ESP32와 충전모듈 포켓이 겹칩니다 — 띄움(2.5층)을 올리면 공존 가능',
    wEspLiftLow: (lift, h, min) => `⚠ ESP32 띄움(${lift})이 충전모듈 높이(${h})보다 낮습니다 — ${min} 이상으로 올리세요`,
    wTp4056Power: '⚠ TP4056 OUT은 안정화된 5V가 아닌 배터리 전압입니다 — ESP32 전원 입력을 확인하거나 승압 회로를 추가하고, 충전 전류를 배터리에 맞추세요',
    wEspLiftTop: '⚠ 띄운 ESP32가 3층 상판에 닿습니다 — 띄움을 줄이거나 층 높이를 키우세요',
    wBeamMod: '⚠ 2.5층 받침 선이 충전모듈 자리를 가로지릅니다 — ESP32 위치를 옮기세요',
    wBeamBat: '⚠ 2.5층 받침 선이 세운 배터리 자리를 가로지릅니다 — 위치를 조정하세요',
    wEspTower: '⚠ ESP32가 OLED 타워와 겹칩니다',
    wModTower: '⚠ 충전모듈이 OLED 타워와 겹칩니다',
    wLedTower: '⚠ LED가 OLED 타워(노치)와 겹칩니다',
    wBatTower: '⚠ 650 배터리가 OLED 타워와 겹칩니다',
    wOledBat: '⚠ 아래로 내린 OLED 하우징이 1층 배터리와 겹칩니다 — OLED를 바깥/위로 옮기거나 배터리를 빼세요',
    wTowerTop: '⚠ OLED 타워가 3층 상판을 뚫습니다 — 2층 또는 3층 높이를 키우세요',
    wOledBig: '⚠ OLED가 벽 폭/곡률에 비해 큽니다 — 지름(W)을 키우세요',
    wF1Low: '⚠ 1층이 너무 낮습니다 (배터리 + 배선 공간 부족)',
    wCoverRib: (len, base) => `⚠ 커버 세모 받침이 스위치 자리 때문에 ${len}mm로 줄었습니다 (기준 ${base})`,
    wSwThrough: '⚠ 스위치 홀더가 뚜껑 아래로 뚫고 나갑니다 — 매립을 줄이거나 3층/보스를 키우세요',
    wDblD: '⚠ 더블 모드는 세로 D 60 이상을 권장합니다',
    wSwGap: '⚠ 스위치 간격이 좁아 딤섬 캐릭터(Ø28.7)끼리 겹칩니다 — 29 이상 권장',
    wCharWall: '⚠ 캐릭터가 앞뒤 벽에 닿습니다 — D를 키우거나 스위치 간격을 줄이세요',
    wLidWide: (d) => `⚠ 4층(Ø${d})이 케이스 외곽보다 넓어 밖으로 걸칩니다 — W를 41 이상으로`,
    wLedWall: '⚠ LED가 3층 벽/외곽과 겹칩니다 — X/Y를 안쪽으로 옮기세요',
    wLedBoss: '⚠ LED가 스위치 보스/홀더와 겹칩니다 — 밖으로 옮기세요',
    wLedBand: '⚠ LED가 4층 결합 홈/밴드와 겹칩니다 — 중심 쪽으로 옮기세요',
    wLidChar: (min) => `⚠ 4층이 딤섬 캐릭터에 닿습니다 — 밴드 높이를 ${min} 이상으로 (또는 캐릭터 없이 사용)`,
    wBatCup: '⚠ 세운 배터리가 스위치 홀더 컵에 부딪힙니다 — 배터리 X를 옮기거나 층 높이를 키우세요',
    wEspCup: '⚠ ESP32가 스위치 홀더 컵에 부딪힙니다 — 위치를 옮기거나 층 높이를 키우세요',
    wBzWall: '⚠ 부저가 벽과 겹칩니다 — 안쪽으로 옮기세요',
    wBzCup: '⚠ 부저가 스위치 홀더 컵과 겹칩니다 — 자리가 없으면 부저 장착을 2층 바닥으로 바꾸세요',
    wBzLed: '⚠ 부저가 LED와 겹칩니다',
    wBzThick: (mm) => `⚠ 부저(8.3)가 3층보다 두꺼워 아래로 ${mm}mm 튀어나옵니다 — 2층 부품과 겹치지 않는지 확인하세요`,
    wBzEsp: '⚠ 부저가 ESP32와 겹칩니다',
    wBzMod: '⚠ 부저가 충전모듈과 겹칩니다',
    wBzLayFlipThrough: '⚠ 눕힌 부저가 3층 상판을 뚫고 나옵니다 — 층 높이를 키우세요',
    wBzLayPocket: '⚠ 눕힌 부저 파임이 스위치 포켓까지 침범합니다 — X/Y를 옮기세요',
    wBzLayCup: '⚠ 눕힌 부저 자리만큼 3층 홀더 컵이 파입니다 (컵 벽 얇아짐 주의)',
    wBzPinsNfc: '⚠ 부저 핀/케이블 홈이 NFC 포켓을 뚫습니다 — 부저나 NFC 스티커를 옮기세요',
    wBzPinsBottom: '⚠ 1층을 끄면 부저 핀이 케이스 바닥 밖으로 나올 수 있습니다 — 조립 후 핀 길이를 맞춰 자르세요',
    wBzCupBelow: '⚠ 부저가 3층 스위치 홀더 컵 아래에 닿습니다 — X/Y를 옮기세요',
    wBzTop: '⚠ 부저가 3층 상판에 닿습니다 — 층 높이를 키우세요',
    wSolderFloor: (left) => `⚠ 납땜 릴리프 아래 2층 바닥이 ${left}mm만 남습니다 — 릴리프를 얕게 하세요`,
    wSolderNfcHit: (over) => `⚠ 납땜 릴리프가 아래 NFC 포켓을 ${over}mm 뚫고 들어갑니다 — 스티커 자리가 깨집니다. 릴리프를 얕게 하거나 NFC 포켓을 옮기세요`,
    wSolderNfc: (skin) => `⚠ 납땜 릴리프와 아래 NFC 포켓 사이가 ${skin}mm뿐입니다 — 릴리프를 얕게 하거나 NFC 포켓을 옮기세요`,
    wEspOutWall: (left) => `⚠ USB 내밀기 때문에 커넥터 둘레 벽살이 ${left}mm만 남습니다 — 내밀기를 줄이거나 벽/포트 둘레 남길 벽을 키우세요`,
    wEspDockGap: (gap) => `⚠ 자동 도킹을 껐는데 커넥터가 벽에서 ${gap}mm 뒤에 있습니다 — 플러그가 안 닿을 수 있으니 ESP32 X를 키우세요`,
    wUsbThinNoop: (wall) => `⚠ 포트 둘레 남길 벽이 벽 두께(${wall}mm)보다 얇지 않습니다 — 값을 낮추지 않으면 아무 효과가 없습니다`,
    wEspGripRoom: (room) => `⚠ 집게 홈 여유가 ${room}mm뿐입니다 — 포켓이 벽에 너무 붙어 있으니 ESP32를 중앙 쪽으로 옮기세요`,
    wNfcThick: (fl, plate, room) => `⚠ NFC 포켓이 ${fl}층 바닥판(${plate})을 뚫습니다 — 깊이를 ${room} 이하로 줄이거나 아래 살을 낮추세요`,
    wNfcWall: (d) => `⚠ NFC 포켓(Ø${d})이 벽·바닥 결합 홈에 닿습니다 — 지름을 줄이거나 중앙 쪽으로 옮기세요`,
    wNfcWallF1: (d, skin) => `⚠ NFC 포켓(Ø${d})과 1층 바깥면 사이 살이 ${skin}mm에 못 미칩니다 — 지름을 줄이거나 중앙 쪽으로 옮기세요`,
    wNfcWire: '⚠ NFC 포켓이 배선구멍과 겹칩니다 — 포켓이 슬롯으로 뚫립니다. NFC X/Y 또는 배선구멍을 옮기세요',
    wWireWall: '⚠ 배선구멍이 케이스 벽에 닿습니다 — 구멍을 중앙으로 옮기거나 케이스를 키우세요',
    wNfcNoF1: '⚠ NFC 포켓이 1층 바닥판으로 설정돼 있는데 1층이 꺼져 있습니다 — 1층을 켜거나 포켓을 2층으로 옮기세요',
  },
};
// 정적 UI 텍스트 (index.html의 data-i18n / data-i18n-html / data-i18n-title 키) — I18N에 병합
const STATIC_I18N = {
  en: {
    appTitle: 'Configurator',
    sub: 'Move the sliders to redesign the STL in real time',
    secSettings: '⚙ Settings',
    lblLanguage: 'Language', optLangEn: 'English', optLangKo: '한국어 (Korean)',
    secOuter: 'Outer design',
    lblShape: 'Shape', optRect: 'Rounded square', optRect2: 'Rounded square double (2 switches)',
    optCircle: 'Full circle (dim sum steamer)',
    lblW: 'Width W / diameter', lblD: 'Depth D', lblCorner: 'Corner rounding',
    lblWall: 'Wall thickness', lblFit: 'Fit clearance', lblBands: 'Decorative grooves',
    hintOuter: 'Layer joints and the Layer 4 joint use a square-section tab (1.2×1.5) and groove (depth 1.8) — the smaller the fit clearance, the tighter the grip. Settings are saved automatically.',
    secLayers: 'Layer heights',
    lblF1On: 'Use Layer 1 (battery)', lblF1: 'Layer 1 height', lblF2: 'Layer 2 (board)', lblF3: 'Layer 3 (switch)',
    lblLid: 'Layer 4 (dim sum lid)', lblLidH: 'Layer 4 band height',
    hintLayers: 'Turn off Layer 1 to remove the battery floor and use Layer 2 as the bottom part; the battery and charge module are then omitted and the ESP32 uses direct USB. Layer 4 = the bun_lid design (Ø41) placed as-is as the dim sum lid. Adjust the total height with the band height; the joint uses the same square tab and groove as the other layers.',
    secLayout2: 'Component layout (Layer 2)',
    tCenter: 'Center', tCenterTitle: 'Center (Y=0)',
    tNfcCenter: 'Center NFC pocket', tNfcCenterTitle: 'Center the NFC pocket (X=0, Y=0)',
    lblEspRot: 'ESP32 rotation',
    optEsp0: 'Flat (24×18)', optEsp90: 'Flat rotated (18×24)',
    optEspS0: 'Upright-wide (24×5, h18)', optEspS90: 'Upright-tall (5×24, h18)',
    optEspU0: 'Upright-USB down (18×5, h24)', optEspU90: 'Upright-USB down tall (5×18, h24)',
    lblEspLift: 'ESP32 lift (Layer 2.5)', lblEspZ: 'ESP32 Z fine-tune',
    lblEspHeader4: 'ESP32 4-pin header mount',
    hintEspHeader4: 'Uses the USB-end 5V, GND, 3V3 and GPIO4 holes. A 3.7mm pin socket plus the 2.3mm header block leaves 6mm below the board.',
    lblEspBarGap: 'ESP32 insertion bar clearance (mm)',
    hintEspBarGap: 'Long-axis gap between the two insertion bars: lower is tighter, higher is looser. Bar height and board Z position stay unchanged.',
    lblModType: 'Charge module', optModGeneric: 'Existing module (19×14×4.5)',
    optModTp4056: 'TP4056 USB-C (27×17.3×4.0)', lblModY: 'Charge module Y',
    hintModType: 'TP4056 uses the measured USB-C board outline. It is larger than the existing module, so the default case may need more space. Board sizes vary: check yours before printing. Its OUT pads are not regulated 5V; verify the ESP32 power input and charge current before wiring.',
    lblEspOut: 'USB push-out (no battery)', lblEspGrip: 'Finger notches in pocket',
    lblSolder: 'Solder relief (pin rows)', lblSolderD: 'Relief depth',
    lblEspAutoDock: 'Auto-dock to wall', lblUsbThin: 'Thin wall at USB port', lblUsbWallT: 'Wall left at port', lblUsbThroat: 'USB throat setback',
    lblBatType: 'Battery capacity', optBatNone: 'No battery (ESP32 direct USB)',
    lblBatPose: 'Battery placement', optBatFlat: 'Flat on Layer 1 (horizontal, long side X)',
    optBatFlatRot: 'Flat on Layer 1 (vertical, long side Y)', optBatStand: 'Upright on Layer 2 (slot-in)',
    lblBatX: 'Battery X (upright)',
    lblOledType: 'OLED type', optOled096: '0.96" (pocket 25.5×27.3, 4-hole pin mount)',
    lblOledSide: 'OLED position', optOledW: 'West wall (opposite USB)', optOledN: 'North wall (back)',
    optOledS: 'South wall (front)', optOledNone: 'None',
    lblOledZ: 'OLED Z position', lblOledProud: 'OLED protrusion', lblOledPod: 'OLED separate pod', lblOledCover: 'OLED back cover',
    lblWireX: 'Wire hole X', lblWireY: 'Wire hole Y', lblWireRot: 'Wire hole orientation',
    lblNfc: 'NFC sticker pocket', lblNfcD: 'Pocket Ø', lblNfcT: 'Pocket depth',
    lblNfcBase: 'Pocket floor (pause here)',
    lblNfcFloor: 'Which floor plate',
    optNfcF2: 'Layer 2 floor plate (2.0)', optNfcF1: 'Layer 1 floor plate — case bottom (1.6)',
    hintNfc: 'A round cavity buried inside a floor plate for an NFC sticker — nothing shows on the outside. Pause the print when the nozzle reaches the pocket floor height, drop the sticker in flat, and resume. Set the depth to the sticker thickness (0.4 → 0.5) so the next layer lands straight on the sticker instead of bridging the gap. The pocket floor height is where you pause: 0.6 = layer 3 at a 0.2 layer height, 0.8 = layer 4. Ø26.6 fits a round Ø26 sticker; a square 26×26 sticker needs Ø37 or more. <b>Which floor plate:</b> Layer 2 (2.0 thick) is the default; Layer 1 is the case bottom, so the sticker sits closest to the phone tapping the underside, but the plate is thinner (1.6) — keep the pocket floor + depth at 1.2 or less, and Layer 1 must be on. On Layer 2 the pocket nearly fills the floor at Ø26.6, so it sits off-center by default to clear the battery wire slot — the warnings tell you if it runs into the slot or the bottom joint groove.',
    optWire0: 'Horizontal (14×5)', optWire90: 'Vertical (5×14)', optWire90x17: 'Vertical (5×17)',
    optWire8x17: 'Vertical (8×17)',
    hintLayout2: 'OLED Z is relative to its original Layer 2 position: negative values lower the OLED into Layer 1. At the minimum, the OLED module stays above the bottom plate while its housing extends to the outside bottom edge. The allowed minimum follows the current Layer 1 height. The housing, window, socket and wiring move together and are split cleanly at the layer joint for printing. Raising OLED protrusion pushes the pod outside the outline. <b>No battery</b> or turning off Layer 1 removes the battery and charge module and docks the ESP32 against the east wall for direct USB. <b>OLED separate pod</b> makes the OLED housing a separate printed part that slides into the aligned openings and rails.',
    secLayout3: 'Component layout (Layer 3)',
    lblBoss: 'Switch boss', lblBossH: 'Boss height', lblSink: 'Switch recess depth',
    lblSwGap: 'Switch spacing (double)', lblPocketX: 'Pocket width (X)', lblPocketY: 'Pocket depth (Y)',
    lblCornerOut: 'Pocket corner clearance', lblSteam: 'Steamer floor slats',
    lblLedType: 'LED type',
    optLed3: '3mm round (hole Ø3.3, protrusion ~1.2)', optLed4: '4mm round (hole Ø4.3, protrusion ~2.6)',
    optLed5: '5mm round (hole Ø5.3, protrusion ~4.5)', optLedR25: '2×5 rect two-tone 3-pin (hole 2.3×5.3, protrusion ~3.8)',
    lblBz: 'Buzzer (Ø12 piezo)', lblBzMount: 'Buzzer mount',
    optBzF2: 'Layer 2 floor upright (recess + ring)', optBzF2s: 'Layer 2 floor laid down (half-round groove)',
    optBzF3: 'Layer 3 ceiling (sleeve hang)', lblBzX: 'Buzzer X', lblBzY: 'Buzzer Y',
    lblBzPinPitch: 'Buzzer pin spacing', lblBzPinD: 'Buzzer pin hole Ø',
    hintBzPins: 'Two thin pin holes follow the Layer 2 buzzer mount. Measure your buzzer\'s pin spacing before printing. Layer 3 leaves the pins in open space.',
    hintLayout3: 'The MX switch fits into the holder pocket (14.3 square), and the floor has 1 central post hole + 4 copper-wire holes (funneled downward). The deeper the recess, the deeper the switch sits. Boss = raised support on top of the lid. Round LEDs (3/4/5mm) plug in from below (Layer 2 side) into the body+0.3 hole on the Layer 3 top plate — the flange stops against the underside so only the dome tip protrudes (1.2/2.6/4.5 by size); the legs connect to the ESP32 (right-click the blue LED+ wire to change GPIO; 150~220Ω resistor recommended). The 2×5 rect two-tone (3-pin, pitch 2.54) inserts until the body is flush with the floor and protrudes ~3.8 upward — the center pin is the common cathode (GND), the two sides are the red/green anodes (right-click the blue/cyan wires to change GPIO; 150~220Ω resistor each). The OLED back cover is a separate part that plugs its tongue into a groove in the Layer 3 top plate — it only appears when the OLED tower rises above Layer 3 and leaves the pocket back exposed.',
    secTex: 'Side texture', btnTexNone: 'None',
    lblTexDepth: 'Depth', lblTexTile: 'Pattern size', lblTexRes: 'Detail (mm/triangle)',
    hintTex: 'Carves the texture into the outer side walls only — top and bottom faces, joint ridges and pocket walls stay untouched, so layers still stack and parts still fit. The pattern is only cut inward, so outer dimensions never grow. Picking a texture loads the pattern size and detail that suit that image (each one repeats a different number of times), so tune them after choosing. Smaller "Detail" means finer relief but many more triangles (slower rebuild, bigger STL). Textures from CNCKitchen/stlTexturizer.',
    secView: 'View', lblExplode: 'Explode ⟷ Assemble', btnAnim: '▶ Assembly animation', btnReset: 'Reset settings',
    hintViewTools: 'Components, wiring, X-ray and dimension toggles sit as icons in the top-left corner of the 3D view.',
    secExport: 'STL export',
    btnEx1: 'Layer 1.stl', btnEx2: 'Layer 2.stl', btnEx3: 'Layer 3.stl', btnEx4: 'Layer 4.stl',
    btnEx5: 'OLED pod.stl', btnEx6: 'OLED cover.stl', btnExOledTest: 'OLED test.stl',
    lblFlip3: 'Flip Layer 3 for printing',
    hintExport: 'Layer 3 has its top plate on top, so it must be printed flipped to avoid supports. OLED test.stl crops the OLED area from the assembled Layer 1 and 2 geometry, joining a tower split across the layer boundary into one test part.',
    secPreset: 'Presets (save/load settings)',
    btnPresetExport: '⬇ Export (.json)', btnPresetImport: '⬆ Import',
    hintPreset: 'Save all current settings to a .json file, or load a saved file to restore them exactly. You can manage multiple designs as files.',
    woHead: 'Wiring table',
    woHint: 'Auto-updates with current settings · right-click a wire/label to change GPIO',
    statusText: 'Building model…',
    // 제품 선택
    secProduct: 'Product', lblProduct: 'Design',
    optProdDimsum: 'Dim Sum Clicker', optProdTodo: 'Todo Supporter (iMac)',
    optProdWorkout: 'Workout Motion Sensor',
    hintProduct: 'Choose which 3D design to configure. Each product has its own settings below.',
    // 운동 모션 센서
    secWorkoutCase: 'Case & magnet fit', lblWkWidth: 'Long side X', lblWkLength: 'Short side Y',
    lblWkBodyH: 'Battery base height', lblWkWall: 'Wall thickness', lblWkFit: 'Joint clearance',
    lblWkMagSkin: 'Magnet skin', lblWkBatH: 'Battery thickness', lblWkHallOn: 'Use KY-035',
    lblWkWireX: 'Battery wire hole X', lblWkWireY: 'Battery wire hole Y',
    lblWkSwOn: 'Power switch', lblWkSwY: 'Switch Y', lblWkSwZ: 'Switch height',
    lblWkDivBar: 'Divider bar length', lblWkDivH: 'Divider bar height', lblWkDivGrow: 'Divider thicker (USB side)', lblWkChgX: 'TP4056 X offset', lblWkUsbY: 'USB hole Y', lblWkUsbFit: 'ESP32 USB grip',
    lblWkHallGap: 'Hall–magnet gap', lblWkHallT: 'KY-035 thickness',
    hintWorkoutCase: 'A 30×10×2mm magnet sits under the battery. When enabled, the 15×19mm KY-035 board stands beside it with the Hall element end downward; adjust the gap so the built-in magnet creates a stable baseline without saturating the analog output. Disable it to remove the slot and recenter the battery and magnet.',
    secWorkoutComp: 'Electronics layout',
    lblWkOledOn: 'Use 0.96" OLED',
    lblWkMpuW: 'MPU6050 width', lblWkMpuL: 'MPU6050 length', lblWkMpuH: 'MPU6050 thickness',
    hintWorkoutComp: 'Three stacked parts keep the footprint compact: optional KY-035+magnet+battery base, TP4056+MPU6050 tray, and an ESP32-C3 lid with an optional top-loading 0.96" OLED cradle. The 23.2×12.4mm display remains visible from above and its four wires pass through the lid to the ESP32. Verify each module silkscreen before wiring.',
    secWorkoutExport: 'STL export', btnWkExBody: 'Hall + battery base.stl', btnWkExTray: 'Electronics tray.stl', btnWkExLid: 'ESP32 display lid.stl',
    hintWorkoutExport: 'Print the base and tray as shown. With OLED off, the lid export is flipped onto its flat top. With OLED on, it exports upright so the display cradle faces up; use bridge-friendly settings or support under the ESP32-cage ceiling.',
    workoutDims: (w, l, h, ms) => `Workout sensor ${w} × ${l} × ${h}mm · CSG ${ms}ms`,
    workoutReady: (hall, oled) => `✓ Stack: ${hall ? 'KY-035 15×19 · ' : ''}30×10×2 magnet · 40×20×${P.wkBatH} cell · TP4056 · MPU6050 · ESP32-C3${oled ? ' · 0.96" OLED' : ''}`,
    wkRowOverlap: '⚠ TP4056 and MPU6050 pockets overlap — increase case width or reduce the MPU6050 width',
    wkBatteryFit: (w, d) => `⚠ TW802040 battery needs at least ${w}×${d}mm outside with the current wall`,
    wkMpuDepthFit: d => `⚠ MPU6050 pocket needs at least ${d}mm on the short side`,
    wkBatteryHeight: h => `⚠ Battery base needs at least ${h}mm height with the current magnet skin`,
    wkMpuHeightFit: '⚠ MPU6050 is too thick for the electronics tray and ESP32 clearance',
    wkHallFit: (d, h) => `⚠ KY-035 upright pocket needs at least ${d}mm on the short side and ${h}mm base height`,
    wkOledFit: (w, d) => `⚠ The 0.96" OLED cradle needs at least ${w}×${d}mm lid footprint`,
    wtGrpWorkoutSw: 'Power switch (SPDT slide)',
    wtSwCom: 'Switch ② COM (centre)', wtSwOut: 'Switch ① side pin',
    wtSwNote: 'third pin unused — cuts OUT+ only, so it still charges when off',
    // 투두 서포터
    secTodoClip: 'Corner clip & fit',
    lblTWidth: 'Device width', lblTEdge: 'iMac edge thickness', lblTClr: 'Slot clearance',
    lblTWall: 'Wall thickness', lblTBridge: 'Bottom bridge thickness', lblTRound: 'Corner rounding',
    hintTodoClip: 'A ⊓-shaped clip that hooks over the iMac\'s bottom edge near the bottom-right corner: a front lip and back lip grip both faces, and the bottom bridge wraps under the edge. The slot depth = edge thickness + clearance. For a 24" M-series iMac the edge is about 11.5mm; increase the clearance if the fit is too tight.',
    secTodoWalls: 'Lips (front / back)', lblTFront: 'Front lip height', lblTBack: 'Back lip height',
    hintTodoWalls: 'The front wall faces the user and houses the OLED (its window looks forward). The back wall is hidden behind the display and forms the ESP32 pocket. With the OLED on, the front height follows the OLED; turn it off and this slider sets a short front lip.',
    secTodoComp: 'Electronics (ESP32 & OLED)', lblTEsp: 'ESP32 back pocket', lblTOled: '0.96" OLED front housing',
    hintTodoComp: 'The whole part is one clean block the width of the OLED. The 0.96" OLED slides into the front wall from the slot side, its window facing the user. The ESP32-C3 supermini sits in the back wall, USB facing down into a flared USB-C port in the base. A hidden wire channel runs under the slot (inside the bridge) so the OLED wires reach the ESP32 without showing outside.',
    secTodoExport: 'STL export', btnTEx1: 'Todo supporter.stl',
    hintTodoExport: 'One printed part. Print it as it appears (bridge on the plate, clip opening facing up) — the chamfered top, pocket and OLED window need no supports.',
  },
  ko: {
    appTitle: '🥟 딤섬 클리커 컨피규레이터',
    sub: '슬라이더를 움직이면 STL이 실시간으로 다시 설계됩니다',
    secSettings: '⚙ 설정',
    lblLanguage: '언어', optLangEn: 'English', optLangKo: '한국어',
    secOuter: '외곽 디자인',
    lblShape: '모양', optRect: '둥근 네모', optRect2: '둥근 네모 더블 (스위치 2개)',
    optCircle: '완전 원형 (딤섬 찜기)',
    lblW: '가로 W / 지름', lblD: '세로 D', lblCorner: '모서리 둥글기',
    lblWall: '벽 두께', lblFit: '결합 유격', lblBands: '장식 홈',
    hintOuter: '층간 결합부와 4층 결합부는 사각 단면 턱(1.2×1.5)·홈(깊이 1.8)을 사용합니다. 결합 유격을 줄일수록 더 꽉 끼며, 설정은 자동 저장됩니다.',
    secLayers: '층 높이',
    lblF1On: '1층 사용 (배터리)', lblF1: '1층 높이', lblF2: '2층 (보드)', lblF3: '3층 (스위치)',
    lblLid: '4층 (딤섬 뚜껑)', lblLidH: '4층 밴드 높이',
    hintLayers: '1층을 끄면 배터리층이 빠지고 2층이 바닥 파트가 됩니다. 이때 배터리·충전모듈도 빠지며 ESP32는 USB 직결 모드로 바뀝니다. 4층은 bun_lid 디자인(Ø41)이 그대로 올라간 딤섬 뚜껑이며, 다른 층과 같은 사각 턱·홈으로 결합됩니다.',
    secLayout2: '부품 배치 (2층)',
    tCenter: '중앙', tCenterTitle: '중앙 정렬 (Y=0)',
    tNfcCenter: 'NFC 포켓 중앙으로', tNfcCenterTitle: 'NFC 포켓을 바닥 중앙으로 (X=0, Y=0)',
    lblEspRot: 'ESP32 회전',
    optEsp0: '가로 (24×18)', optEsp90: '세로 (18×24)',
    optEspS0: '세움-가로 (24×5, 높이 18)', optEspS90: '세움-세로 (5×24, 높이 18)',
    optEspU0: '세움-USB아래 (18×5, 높이 24)', optEspU90: '세움-USB아래-세로 (5×18, 높이 24)',
    lblEspLift: 'ESP32 띄움 (2.5층)', lblEspZ: 'ESP32 Z 미세조정',
    lblEspHeader4: 'ESP32 4핀 헤더 고정',
    hintEspHeader4: 'USB 쪽 끝의 5V·GND·3V3·GPIO4 홀을 사용합니다. 3.7mm 핀 소켓과 2.3mm 헤더 블록을 합쳐 보드 아래 6mm를 확보합니다.',
    lblEspBarGap: 'ESP32 끼움 막대 간격 여유 (mm)',
    hintEspBarGap: '보드 길이 방향의 양끝 끼움 막대 사이 여유: 낮추면 타이트, 올리면 널널합니다. 막대 높이와 보드 Z 위치는 그대로입니다.',
    lblModType: '충전모듈', optModGeneric: '기존 모듈 (19×14×4.5)',
    optModTp4056: 'TP4056 USB-C (27×17.3×4.0)', lblModY: '충전모듈 Y',
    hintModType: 'TP4056은 실측한 USB-C 보드 외형을 기준으로 합니다. 기존 모듈보다 커서 기본 케이스의 폭·깊이나 부품 배치를 조정해야 할 수 있습니다. 제품마다 치수가 달라 출력 전 실물 확인이 필요합니다. OUT 단자는 안정화된 5V가 아니므로 ESP32 전원 입력과 충전 전류를 확인하세요.',
    lblEspOut: 'USB 내밀기 (배터리 없음)', lblEspGrip: '포켓 집게 홈',
    lblSolder: '납땜 릴리프 (핀 2열)', lblSolderD: '릴리프 깊이',
    lblEspAutoDock: '벽에 자동 도킹', lblUsbThin: 'USB 포트 벽 얇게', lblUsbWallT: '포트 둘레 남길 벽', lblUsbThroat: 'USB 목 뒤로 (0=최대 전진)',
    lblBatType: '배터리 용량', optBatNone: '배터리 없음 (ESP32 USB 직결)',
    lblBatPose: '배터리 배치', optBatFlat: '눕혀서 1층 (가로·긴 변 X)',
    optBatFlatRot: '눕혀서 1층 (세로·긴 변 Y)', optBatStand: '세워서 2층 (홈에 꽂기)',
    lblBatX: '배터리 X (세움)',
    lblOledType: 'OLED 종류', optOled096: '0.96" (포켓 25.5×27.3, 4홀 핀 고정)',
    lblOledSide: 'OLED 위치', optOledW: '서쪽 벽 (USB 반대)', optOledN: '북쪽 벽 (뒤)',
    optOledS: '남쪽 벽 (앞)', optOledNone: '없음',
    lblOledZ: 'OLED Z 위치', lblOledProud: 'OLED 돌출', lblOledPod: 'OLED 분리 포드', lblOledCover: 'OLED 뒷면 커버',
    lblWireX: '배선구멍 X', lblWireY: '배선구멍 Y', lblWireRot: '배선구멍 방향',
    lblNfc: 'NFC 스티커 포켓', lblNfcD: '포켓 지름 Ø', lblNfcT: '포켓 깊이',
    lblNfcBase: '포켓 아래 살 (일시정지 높이)',
    lblNfcFloor: '포켓을 넣을 층',
    optNfcF2: '2층 바닥판 (두께 2.0)', optNfcF1: '1층 바닥판 — 케이스 맨 밑 (두께 1.6)',
    hintNfc: 'NFC 스티커를 넣는 원형 자리를 바닥판 속에 파묻습니다 — 밖에서는 아무것도 보이지 않습니다. 노즐이 포켓 아래 살 높이에 도달하면 출력을 일시정지하고 스티커를 눕혀 넣은 뒤 재개하세요. 포켓 깊이를 스티커 두께에 맞추면(0.4 → 0.5) 다음 레이어가 빈 공간을 건너지 않고 스티커 위에 바로 얹힙니다. 아래 살 높이가 곧 일시정지 지점입니다: 레이어 높이 0.2 기준 0.6 = 3레이어, 0.8 = 4레이어. Ø26.6은 원형 Ø26 스티커용이며, 정사각 26×26 스티커라면 Ø37 이상이 필요합니다. <b>포켓을 넣을 층:</b> 기본은 2층 바닥판(두께 2.0)이고, 1층 바닥판은 케이스 맨 밑이라 바닥에 대고 태그할 때 스티커가 가장 가깝지만 판이 얇습니다(1.6) — 아래 살 + 깊이를 1.2 이하로 유지해야 하고 1층이 켜져 있어야 합니다. 2층에서는 Ø26.6이 바닥을 거의 채우기 때문에 기본 위치가 중앙이 아니라 배터리 배선구멍을 피해 살짝 치우쳐 있습니다 — 배선구멍이나 바닥 결합 홈에 닿으면 경고로 알려줍니다.',
    optWire0: '가로 (14×5)', optWire90: '세로 (5×14)', optWire90x17: '세로 (5×17)',
    optWire8x17: '세로 (8×17)',
    hintLayout2: 'OLED Z는 기존 2층 위치를 0으로 한 값입니다. 음수로 내리면 OLED가 1층까지 내려가며, 최저 위치에서는 OLED 모듈은 바닥판 위에 남고 케이스 외곽은 제품의 바닥 끝까지 이어집니다. 최솟값은 현재 1층 높이에 맞춰집니다. 하우징·창·소켓·배선이 함께 이동하고 출력할 때는 층 결합면에서 정확히 나뉩니다. OLED 돌출을 올리면 포드가 외곽선 밖으로 나옵니다. <b>배터리 없음</b> 또는 <b>1층 끄기</b>는 배터리·충전모듈을 제거하고 ESP32를 동쪽 벽 USB 직결로 바꿉니다. <b>OLED 분리 포드</b>는 정렬된 개구와 레일에 끼우는 별도 출력 파트를 만듭니다.',
    secLayout3: '부품 배치 (3층)',
    lblBoss: '스위치 Boss', lblBossH: 'Boss 높이', lblSink: '스위치 매립 깊이',
    lblSwGap: '스위치 간격 (더블)', lblPocketX: '포켓 가로 (X)', lblPocketY: '포켓 세로 (Y)',
    lblCornerOut: '포켓 귀퉁이 여유', lblSteam: '찜통 바닥 슬랫',
    lblLedType: 'LED 종류',
    optLed3: '3mm 원형 (구멍 Ø3.3, 돌출 ~1.2)', optLed4: '4mm 원형 (구멍 Ø4.3, 돌출 ~2.6)',
    optLed5: '5mm 원형 (구멍 Ø5.3, 돌출 ~4.5)', optLedR25: '2×5 사각 투톤 3핀 (구멍 2.3×5.3, 돌출 ~3.8)',
    lblBz: '부저 (Ø12 피에조)', lblBzMount: '부저 장착',
    optBzF2: '2층 바닥 세움 (리세스 + 링)', optBzF2s: '2층 바닥 눕힘 (반원 홈)',
    optBzF3: '3층 천장 (슬리브 매달림)', lblBzX: '부저 X', lblBzY: '부저 Y',
    lblBzPinPitch: '부저 핀 간격', lblBzPinD: '부저 핀 구멍 Ø',
    hintBzPins: '2층 부저 장착 방향에 맞춰 얇은 핀 구멍 두 개를 뚫습니다. 출력 전 실물 부저의 핀 간격을 재 주세요. 3층 매달림은 핀이 빈 공간을 향합니다.',
    hintLayout3: 'MX 스위치가 홀더 포켓(14.3각)에 꽂히고, 바닥에 중앙 기둥 구멍 1개 + 구리선 구멍 4개가 뚫립니다(아래로 깔때기). 매립 깊이가 클수록 스위치가 깊게 파묻힙니다. Boss = 뚜껑 위 볼록 받침. LED(3/4/5mm 원형)는 3층 상판의 몸통+0.3 구멍에 아래(2층 쪽)에서 꽂습니다 — 플랜지가 밑면에 걸려 돔 끝만 돌출(크기별 1.2/2.6/4.5), 다리는 ESP32로 연결(LED+ 파란 전선 우클릭으로 GPIO 변경, 저항 150~220Ω 권장). 2×5 사각 투톤(3핀, 피치 2.54)은 몸통이 바닥과 같은 높이까지 들어가 위로 ~3.8 돌출 — 가운데 핀이 공통 캐소드(GND), 양쪽이 빨강/초록 애노드(각각 파란/청록 전선 우클릭으로 GPIO 변경, 저항 각 150~220Ω). OLED 뒷면 커버는 3층 상판 홈에 텅을 꽂는 별도 출력 파트입니다 — OLED 타워가 3층 위로 올라와 포켓 뒷면이 노출될 때만 나타납니다.',
    secTex: '측면 텍스처', btnTexNone: '없음',
    lblTexDepth: '깊이', lblTexTile: '무늬 크기', lblTexRes: '디테일 (mm/삼각형)',
    hintTex: '바깥쪽 옆면에만 무늬를 새깁니다 — 위·아래 면, 결합 턱/홈, 포켓 안쪽 벽은 건드리지 않아서 층 결합과 부품 끼움이 그대로 유지됩니다. 무늬는 안쪽으로만 파내므로 바깥 치수가 커지지 않습니다. 무늬를 고르면 그 이미지에 맞는 무늬 크기·디테일이 자동으로 들어가니(이미지마다 반복 횟수가 다릅니다) 조절은 고른 뒤에 하세요. \'디테일\' 값이 작을수록 무늬가 선명해지지만 삼각형이 크게 늘어나 리빌드가 느려지고 STL이 커집니다. 텍스처 이미지 출처: CNCKitchen/stlTexturizer.',
    secView: '보기', lblExplode: '분해 ⟷ 조립', btnAnim: '▶ 조립 애니메이션', btnReset: '설정 초기화',
    hintViewTools: '부품·배선·반투명·치수 표시 토글은 3D 뷰 왼쪽 위 아이콘에 있습니다.',
    secExport: 'STL 내보내기',
    btnEx1: '1층.stl', btnEx2: '2층.stl', btnEx3: '3층.stl', btnEx4: '4층.stl',
    btnEx5: 'OLED포드.stl', btnEx6: 'OLED커버.stl', btnExOledTest: 'OLED 테스트.stl',
    lblFlip3: '3층 출력용 뒤집기',
    hintExport: '3층은 상판이 위에 있어서 뒤집어 출력해야 서포트가 없습니다. OLED 테스트.stl은 조립된 1·2층 형상에서 OLED 주변을 잘라내며, 층 경계에서 나뉜 타워도 하나의 테스트 파트로 합쳐 저장합니다.',
    secPreset: '프리셋 (설정 저장/불러오기)',
    btnPresetExport: '⬇ 내보내기 (.json)', btnPresetImport: '⬆ 불러오기',
    hintPreset: '현재 모든 설정을 .json 파일로 저장하거나, 저장해둔 파일을 불러와 그대로 복원합니다. 여러 디자인을 파일로 관리할 수 있습니다.',
    woHead: '배선표',
    woHint: '현재 설정에 맞춰 자동 갱신 · 전선/라벨 우클릭으로 GPIO 변경',
    statusText: '모델 생성 중…',
    // 제품 선택
    secProduct: '제품', lblProduct: '디자인',
    optProdDimsum: '딤섬 클리커', optProdTodo: '투두 서포터 (아이맥)',
    optProdWorkout: '운동 모션 센서',
    hintProduct: '설계할 3D 디자인을 선택하세요. 제품마다 아래에 별도 설정이 있습니다.',
    // 운동 모션 센서
    secWorkoutCase: '케이스 & 자석 결합', lblWkWidth: '긴 변 X', lblWkLength: '짧은 변 Y',
    lblWkBodyH: '배터리 베이스 높이', lblWkWall: '벽 두께', lblWkFit: '결합 유격',
    lblWkMagSkin: '자석 앞 스킨', lblWkBatH: '배터리 두께', lblWkHallOn: 'KY-035 사용',
    lblWkWireX: '배터리선 구멍 X', lblWkWireY: '배터리선 구멍 Y',
    lblWkSwOn: '전원 스위치', lblWkSwY: '스위치 Y', lblWkSwZ: '스위치 높이',
    lblWkDivBar: '칸막이 막대 길이', lblWkDivH: '칸막이 막대 높이', lblWkDivGrow: '칸막이 두껍게 (USB쪽)', lblWkChgX: 'TP4056 X 오프셋', lblWkUsbY: 'USB 구멍 Y', lblWkUsbFit: 'ESP32 USB 물림',
    lblWkHallGap: '홀센서–자석 간격', lblWkHallT: 'KY-035 설치 두께',
    hintWorkoutCase: '30×10×2mm 자석을 배터리 아래에 둡니다. 사용 시 15×19mm KY-035 보드는 홀소자 끝이 아래로 가도록 옆에 세우며, 내장 자석이 아날로그 출력을 포화시키지 않도록 간격을 조절합니다. 사용을 끄면 슬롯이 없어지고 배터리와 자석이 중앙 정렬됩니다.',
    secWorkoutComp: '전자부품 배치',
    lblWkOledOn: '0.96" OLED 사용',
    lblWkMpuW: 'MPU6050 폭', lblWkMpuL: 'MPU6050 길이', lblWkMpuH: 'MPU6050 두께',
    hintWorkoutComp: '컴팩트한 3단 구조입니다: 선택형 KY-035+자석+배터리 베이스, TP4056+MPU6050 트레이, 위에서 끼우는 선택형 0.96" OLED 받침이 있는 ESP32-C3 뚜껑. 23.2×12.4mm 화면은 위로 보이고 4가닥 배선은 뚜껑 슬롯을 통해 ESP32로 내려갑니다. 실제 배선 전 모듈 실크를 확인하세요.',
    secWorkoutExport: 'STL 내보내기', btnWkExBody: '홀센서 배터리 베이스.stl', btnWkExTray: '전자부품 트레이.stl', btnWkExLid: 'ESP32 디스플레이 뚜껑.stl',
    hintWorkoutExport: '베이스와 트레이는 보이는 방향으로 출력하세요. OLED를 끄면 뚜껑은 평평한 윗면이 베드에 닿도록 뒤집혀 저장됩니다. OLED를 켜면 화면 받침이 위를 향하도록 정방향으로 저장되므로 ESP32 케이지 천장에 브리지 설정 또는 서포트를 사용하세요.',
    workoutDims: (w, l, h, ms) => `운동 센서 ${w} × ${l} × ${h}mm · CSG ${ms}ms`,
    workoutReady: (hall, oled) => `✓ 적층: ${hall ? 'KY-035 15×19 · ' : ''}30×10×2 자석 · 40×20×${P.wkBatH} 셀 · TP4056 · MPU6050 · ESP32-C3${oled ? ' · 0.96" OLED' : ''}`,
    wkRowOverlap: '⚠ TP4056과 MPU6050 포켓이 겹칩니다 — 케이스 폭을 늘리거나 MPU6050 폭을 줄이세요',
    wkBatteryFit: (w, d) => `⚠ 현재 벽 두께에서 TW802040 배터리를 넣으려면 외형이 최소 ${w}×${d}mm여야 합니다`,
    wkMpuDepthFit: d => `⚠ MPU6050 포켓을 넣으려면 짧은 변이 최소 ${d}mm여야 합니다`,
    wkBatteryHeight: h => `⚠ 현재 자석 스킨에서 배터리 베이스 높이가 최소 ${h}mm여야 합니다`,
    wkMpuHeightFit: '⚠ MPU6050이 너무 두꺼워 전자부품 트레이와 ESP32 사이에 들어가지 않습니다',
    wkHallFit: (d, h) => `⚠ KY-035 세움 포켓에는 짧은 변 ${d}mm, 베이스 높이 ${h}mm 이상이 필요합니다`,
    wkOledFit: (w, d) => `⚠ 0.96" OLED 받침에는 뚜껑 외형이 최소 ${w}×${d}mm 필요합니다`,
    wtGrpWorkoutSw: '전원 스위치 (SPDT 슬라이드)',
    wtSwCom: '스위치 ② 공통(가운데)', wtSwOut: '스위치 ① 바깥 다리',
    wtSwNote: '남는 다리 1개는 미사용 — OUT+만 끊으므로 꺼둔 채로도 충전됨',
    // 투두 서포터
    secTodoClip: '코너 클립 & 물림',
    lblTWidth: '기기 폭', lblTEdge: '아이맥 모서리 두께', lblTClr: '슬롯 유격',
    lblTWall: '벽 두께', lblTBridge: '바닥 브릿지 두께', lblTRound: '모서리 둥글기',
    hintTodoClip: '아이맥 우측하단 코너의 아래 가장자리에 걸쳐 끼우는 ㄷ자 클립입니다: 앞턱·뒤턱이 양쪽 면을 잡고, 바닥 브릿지가 가장자리 밑을 감쌉니다. 슬롯 깊이 = 모서리 두께 + 유격. 24" M시리즈 아이맥은 모서리가 약 11.5mm이며, 너무 빡빡하면 유격을 늘리세요.',
    secTodoWalls: '턱 (앞/뒤)', lblTFront: '앞턱 높이', lblTBack: '뒤턱 높이',
    hintTodoWalls: '앞벽은 사용자를 향하며 OLED를 품습니다(창이 앞으로). 뒤벽은 화면 뒤에 숨어 ESP32 포켓을 이룹니다. OLED를 켜면 앞 높이는 OLED에 맞춰지고, 끄면 이 슬라이더가 짧은 앞턱 높이를 정합니다.',
    secTodoComp: '전자부품 (ESP32 & OLED)', lblTEsp: 'ESP32 뒷면 포켓', lblTOled: '0.96" OLED 앞면 하우징',
    hintTodoComp: '전체가 OLED 폭만큼의 깔끔한 한 블록입니다. 0.96" OLED는 슬롯 쪽에서 앞벽으로 밀어 넣고 창이 사용자를 향합니다. ESP32-C3 슈퍼미니는 뒷벽에 앉고 USB는 아래를 향해 바닥의 나팔형 USB-C 포트로 꽂힙니다. 슬롯 아래(브릿지 속)로 숨은 배선 통로가 지나가 OLED 전선이 밖으로 안 보이게 ESP32까지 이어집니다.',
    secTodoExport: 'STL 내보내기', btnTEx1: '투두 서포터.stl',
    hintTodoExport: '한 개짜리 출력 파트입니다. 보이는 그대로 출력하세요(브릿지를 바닥에, 클립 입구가 위로) — 챔퍼된 상단·포켓·OLED 창 모두 서포트가 필요 없습니다.',
  },
};
Object.assign(I18N.en, STATIC_I18N.en);
Object.assign(I18N.ko, STATIC_I18N.ko);
let LANG = 'en';
try { const s = localStorage.getItem('dimsum-lang'); if (s === 'en' || s === 'ko') LANG = s; } catch (e) { /* 무시 */ }
function t(key, ...args) {
  const d = I18N[LANG] || I18N.en;
  const v = (key in d) ? d[key] : (I18N.en[key] ?? key);
  return typeof v === 'function' ? v(...args) : v;
}
// 정적 텍스트(index.html data-i18n) 일괄 적용
function applyStaticI18n() {
  document.documentElement.lang = LANG;
  const ti = t('title'); if (ti) document.title = ti;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
}
// 3D 뷰 좌상단 아이콘 토글 — 켬/끔은 색으로, 설명은 툴팁(i18n)으로 보여준다
const VIEW_TOGGLES = [
  ['ghostBtn', 'tgGhost', () => showGhosts],
  ['wiresBtn', 'tgWires', () => wiresOn],
  ['xrayBtn',  'tgXray',  () => xray],
  ['rulerBtn', 'tgRuler', () => rulersOn],
];
function syncToggleLabels() {
  for (const [id, key, get] of VIEW_TOGGLES) {
    const el = document.getElementById(id);
    if (!el) continue;
    const on = get();
    el.classList.toggle('on', on);
    el.title = t(key, on);
    el.setAttribute('aria-label', el.title);
    el.setAttribute('aria-pressed', String(on));
  }
}
// 언어 전환 — 정적/동적 텍스트 모두 갱신 후 저장. 파라미터·모델은 그대로 유지.
function setLang(l) {
  LANG = (l === 'ko') ? 'ko' : 'en';
  try { localStorage.setItem('dimsum-lang', LANG); } catch (e) { /* 무시 */ }
  applyStaticI18n();
  applyProductUI();
  syncToggleLabels();
  renderWireTable();
  updateWires();
  rebuild();
}

// ------------------------------------------------------------------
// 부품 실측 상수 (mm)
// ------------------------------------------------------------------
// 배터리 종류별 실측 — L=길이, W=폭(세움 시 높이), T=두께(세움 시 끼움 방향)
const BAT_TYPES = {
  '520': { L: 36.5, W: 28.5, T: 4.3, clr: 0.7 },
  '650': { L: 40,   W: 20,   T: 8,   clr: 0.5 },
};
const batSpec = () => BAT_TYPES[P.batType] || BAT_TYPES['520'];
const f1BaseH = () => P.f1On ? P.f1H : 0;
const noBat = () => !P.f1On || P.batType === 'none';   // 1층/배터리 없음: 충전모듈도 빠지고 ESP32가 USB 직결
const batStand = () => !noBat() && P.batPose === 'stand';
const batFlatRot = () => P.batPose === 'flatRot';
const batFlatFoot = () => {
  const bs = batSpec();
  return batFlatRot() ? { w: bs.W + bs.clr, d: bs.L + bs.clr }
                      : { w: bs.L + bs.clr, d: bs.W + bs.clr };
};
// 기존 저장값(숫자 0/90)과 확장 슬롯 선택값을 함께 지원한다.
const wireSlotSize = () => {
  const mode = String(P.wireRot);
  return mode === '8x17' ? { w: 8, d: 17 }
       : mode === '90x17' ? { w: 5, d: 17 }
       : mode === '90' ? { w: 5, d: 14 }
       : { w: 14, d: 5 };
};
const espStand = () => !noBat() && ['s0', 's90', 'u0', 'u90'].includes(P.espRot);
const ESP = { l: 24, w: 18, h: 4.2, usbZ: 2.6 };   // usbZ = USB 셸 z중심 (실측 1.0~4.2)
// 기존 STL은 칩/제품명이 없는 19×14 범용 모듈. TP4056은 운동 센서 설계의 USB-C 실측값.
const MOD_TYPES = {
  generic: { l: 19, w: 14, h: 4.5, usbZ: 2.9, usbOver: 0.0 },
  tp4056: { l: 27, w: 17.3, h: 4.0, usbZ: 2.6, usbOver: 1.0 },
};
const modSpec = () => MOD_TYPES[P.modType] || MOD_TYPES.generic;
// OLED 종류별 실측 (win: 디스플레이 창, winC: 모듈 바닥 기준 창 중심 높이)
const OLED_TYPES = {
  '049': { w: 15, hgt: 16, t: 2.4, winW: 13.5, winH: 8, winC: 8.9 },
  // 096 실피팅 보정(7/19 3차): 포켓 25.5×27.25(가로세로 확정). 핀은 세로 벌림(위+0.3/아래−0.3
  // → pz 22.1), 가로는 왼쪽 열만 우측 0.3(px 21.2 + 중심 ox 0.15) — 홀 그리드가 정사각이 아님.
  // 창 중심 13.5→14.5 ('구멍 살짝 더 위' 피드백)
  '096': { w: 25, hgt: 27.05, t: 3.5, winW: 23.2, winH: 12.4, winC: 14.5,
           pegs: { px: 21.2, pz: 22.1, ox: 0.15, d: 2.8, len: 2.5 } },   // Ø2.8: obj_2_Oled-Lid.stl 기둥 실측
};
const OLED_HCLR = 0.2;   // OLED 세로(높이) 삽입 여유 — 헐렁하면 빠지므로 타이트하게
const OLED_FACE_T = 0.6; // OLED 앞(바깥) 벽 두께 — 매우 얇게 (0.4 노즐 기준 한계 근처)
const OLED_SEAT_BASE_Z = 4.2; // OLED Z=0일 때 2층 바닥 기준 모듈 하단
const oledSpec = () => OLED_TYPES[P.oledType] || OLED_TYPES['049'];
const effBossH = () => P.bossOn ? P.bossH : 0;   // 스위치 보스(둔덕) 끄면 상판에 바로 매립
const oledTowerW = () => oledSpec().w + 3;                             // 좌우 레일 1.25씩
const oledSeatZ = () => OLED_SEAT_BASE_Z + P.oledZ;                    // 2층 바닥 기준 모듈 하단
const oledTowerBase = () => F2_PART_BASE + P.oledZ;                        // 기존 타워 바닥도 OLED와 함께 이동
// 케이스 외곽은 OLED 모듈보다 아래에서 시작하며, 1층 사용 시 제품 바닥면까지 내려갈 수 있다.
const oledCaseBaseZ = () => P.f1On
  ? Math.max(-P.f1H, oledTowerBase())
  : Math.max(0, oledTowerBase());
const oledTowerTop = () => oledSeatZ() + oledSpec().hgt + OLED_HCLR + 1.2;
// MX 스위치 홀더 (Mechanical Key Holder V3 실측 기반)
const SW = {
  // 몸통 포켓 가로/세로는 P.swBodyX / P.swBodyY 슬라이더 (실측상 정사각이 아님)
  seatH: 5.5,        // 몸통 바닥 → 플랜지 아래면 높이
  floorT: 0.6,       // 홀더 바닥(구멍 뚫리는 판) 두께
  cup: 20,           // 홀더 컵 바깥 한 변
  H: 17.9,           // 스위치 전체 높이 (고스트/캐릭터 배치용)
  pinLen: 3.1,       // 몸통 바닥 아래 핀/기둥 돌출 길이 (구멍에 꽂힘)
  cornerSq: 4,       // 포켓 네 귀퉁이 여유 사각형 한 변 (삐져나오는 양은 P.cornerOut 슬라이더)
  // 바닥 구멍 [x, y, Ø]: 중앙 기둥 1 + 구리선 4 (핀 2 + 다리 2, 스위치 180° 장착 기준)
  holes: [[0, 0, 4.3], [5.0, 0, 1.8], [-5.0, 0, 1.8], [3.8, -2.7, 1.8], [-2.7, -5.2, 1.8]],
};
// 딤섬 뚜껑 (my_designs/bun_lid_clean.stl 실측): Ø41, 높이 14.22, 내부 천장 z10.9(평평), 림 r19.5~20.5
// 원본 디자인은 그대로 얹고, 아래에 스트레이트 밴드(높이 = lidH 슬라이더, 벽 2.3) + 결합 턱을 이어붙임.
// 결합부 = 층간과 동일 프로파일(V형/사각, fitClr 적용)을 원(Ø41) 기준으로 — 단 3층은 뒤집어
// 출력하므로 방향을 미러: 홈이 3층 상판에(출력 시 바닥面), 턱이 뚜껑 밑면에(출력 시 바닥) → 둘 다 서포트 프리
const LID = { r: 20.5, bandW: 2.3, h: 14.22, innerH: 10.9 };
const FACE_H = 21.6;   // 딤섬 캐릭터(obj_2_sup face) 실측 높이
// LED 종류: d=몸통 Ø, fl=플랜지 Ø, cyl=원통부 높이, domeR=돔 반경.
// 구멍 Ø = d+0.2, 플랜지가 상판 밑면에 정지 → 돌출 = cyl+domeR−3.2 (3mm≈1.2 / 4mm≈2.6 / 5mm≈4.5)
// r25 = 2×5 사각 투톤 3핀 (데이터시트: 몸통 5×2, 깊이 7, 핀 피치 2.54, 핀2=공통 캐소드):
//   플랜지 없음 — 구멍 2.2×5.2 관통, 몸통 바닥이 상판 밑면과 나란할 때까지 삽입 → 돌출 = 7−3.2 = 3.8
//   fl은 경고(간섭 체크)용 유효 지름
const LED_TYPES = {
  '3':   { d: 3, fl: 3.85, cyl: 2.9, domeR: 1.5 },
  '4':   { d: 4, fl: 4.8,  cyl: 3.8, domeR: 2.0 },
  '5':   { d: 5, fl: 5.8,  cyl: 5.2, domeR: 2.5 },
  'r25': { rect: true, w: 5, t: 2, bodyH: 7, pitch: 2.54, fl: 5.6 },
};
const ledSpec = () => LED_TYPES[P.ledType] || LED_TYPES['3'];
// 분리형 OLED 포드 (소켓형): 포드가 자기 전면(창·안착면 포함)을 통째로 갖고 벽 관통 개구에
// 위에서 슬라이드 — 텅(전면부)은 외곽면과 플러시, 어깨가 벽 안쪽면에 걸려 밖으로 못 빠지고,
// 안쪽 U자 소켓 레일(양옆 기둥+뒤판)이 뒤·옆을 잡음. 아래=플랫폼, 위=3층 노치 잠금.
// clr=슬라이드 유격/측, railT=레일 두께. 레일·포드 모두 바닥부터 수직이라 서포트 프리
const POD = { clr: 0.15, railT: 1.2 };
// 텅 폭: 창 프레임 최소 1.05/측 확보하면서 어깨(빠짐 방지 턱)를 남김
const oledTongueW = () => Math.max(oledSpec().winW + 2.1, oledSpec().w - 2);
// OLED 뒷면 커버: 타워 꼭대기가 3층 상판을 넘으면 포켓 뒷면 노출부를 막는 별도 파트.
// 하단 텅이 3층 상판 홈(깊이 tab+0.2)에 꽂히고, 판이 타워 뒷면에 기대어 섬.
// 뒤(클리커 쪽)에는 세모형 받침 리브(ribW 폭, 기준 ribL=10) — 3층에 같은 모양 홈이 받아줌
const COVER = { t: 1.2, tab: 1.5, ribW: 2.4, ribL: 10, ribHMax: 15 };   // t: 1.6→1.2 (얇게 피드백)
const oledCoverW = () => oledTowerW();   // 폭 = OLED 타워(케이스)와 동일
const oledCoverNeeded = () =>
  P.coverOn && P.oledSide !== 'none' && oledTowerTop() > P.f2H + P.f3H - 0.05;
// 삼각 받침 높이: 커버 노출 높이를 따라가되 최대 ribHMax(15)로 제한 — 너무 높지 않게
const coverRibH = () => Math.min(oledTowerTop() - P.f2H - P.f3H, COVER.ribHMax);
// 커버 뒷면(로컬 y) 평면
const coverBackY = () => oledFrame().seatY - oledSpec().t - 2.0 - COVER.t - 0.15;
// 받침 길이: 기준 10, 스위치 포켓 직전에서 자동 클램프 (보스·컵 구간은 홈이 파여 통과)
function coverRibL() {
  const keep = Math.max(P.swBodyX, P.swBodyY) / 2 + P.cornerOut + 0.4;
  return Math.max(0, Math.min(COVER.ribL, coverBackY() - keep));
}
// 직각삼각형 프리즘 (수직변이 y=yBack 평면, 빗변이 뒤로 내려감, x폭 w) — oled 프레임 m 적용.
// apexR > 0이면 위 꼭짓점을 둥글려 손가락이 닿아도 안 아프게 (받아주는 홈은 각지게 유지)
function triPrism(len, hgt, w, yBack, zBase, m, apexR = 0) {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.lineTo(-len, 0);
  if (apexR > 0.05 && hgt > apexR * 1.4) {
    const hl = Math.hypot(len, hgt);
    const ux = -len / hl, uy = -hgt / hl;            // 꼭짓점 → 빗변 아래쪽 단위벡터
    s.lineTo(ux * apexR, hgt + uy * apexR);          // 빗변 위 접점에서 멈추고
    s.quadraticCurveTo(0, hgt, 0, hgt - apexR);      // 꼭짓점을 둥글려 수직변으로
  } else {
    s.lineTo(0, hgt);
  }
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false, curveSegments: 8 });
  g.deleteAttribute('uv');
  g.rotateX(Math.PI / 2);   // (프로파일x, 프로파일y, 폭) → …
  g.rotateZ(Math.PI / 2);   // … → (폭, 프로파일x=깊이, 프로파일y=높이)
  g.translate(-w / 2, yBack, zBase);
  return toMan(g, m);
}
// 수동 피에조 부저 (Ø12 × 8.3): f3 = 3층 천장 슬리브에 매달림(상판 안 뚫음) / f2 = 2층 바닥 리세스+가이드 링
// f2s = 2층 바닥에 옆으로 눕힘(축 X) — sideSink 만큼 반원 크래들로 파묻히고,
//       상단이 2층을 넘으면 3층의 겹치는 부분(컵·상판)도 같은 자리만큼 파냄
const BZ = { d: 12, h: 8.3, clr: 0.25, wall: 1.6, sink: 1.8, sideSink: 3.15, ring: 4 };
// 2층 부저: 소켓 바닥의 짧은 세로 홈에서 왼쪽으로 전선이 빠지는, 위에서 보이는 T자 홈.
function bzCableTSpec() {
  return {
    barL: 5.2,                 // 화면상 세로: 두 가닥이 꺾일 자리
    barW: 2.2,                 // 화면상 가로: T의 짧은 막대 두께
    stemW: 2.8,                // 왼쪽으로 나가는 케이블 홈 폭
    stemOut: BZ.d / 2 + BZ.clr + BZ.wall + F2_PAD_MARGIN + 0.4,
  };
}
// 캐릭터는 바닥에 17.9각 공동(깊이 10.7)이 있어 스위치를 통째로 덮고 보스 윗면에 얹힘
const charTopOverLid = () => effBossH() + FACE_H;
const F1_PLATE = 1.6, F2_PLATE = 0.8, F2_PART_BASE = 2.0, F2_PLATFORM = 2.2, F3_PLATE = 3.2;
// 2층 바닥판만 얇게 한다. 부품 안착·OLED 타워·USB·부저의 기존 Z 기준은 2.0mm로 유지.
const F2_PAD_HEIGHT = F2_PART_BASE + F2_PLATFORM - F2_PLATE;
const F2_PAD_MARGIN = 1.2;
const RIDGE_H = 1.5, RIDGE_W = 1.2;   // 결합 턱 높이/폭 (사각 단면)
const RABBET = { out: 0.7, d: 1.8 };  // 결합 홈 (외곽 inset 기준) — 턱 바깥면 inset = RABBET.out + fitClr
const USB_PAD = { t: 2.5, w: 18 };    // 원형 모드 동쪽 평면 USB 패드 (두께 × 폭)
const USB_REC = { w: 13 };            // USB 벽 얇게 패널 폭 (높이는 결합부 한계까지 자동 확장)
const USB_MIN_WALL = 1.0;             // 리세스 후 반드시 남길 벽 두께
const MOD_USB_MIN_WALL = 0.4;          // 충전모듈 포켓 앞쪽 최소 벽살
const MOD_USB_SHELL_GAP = 0.4;         // 충전모듈 USB 셸 끝에서 외벽까지 목표 거리
const MOD_POCKET_FRONT_INSET = 0.8;    // USB 셸보다 뒤에 있는 PCB 끝에 맞춰 포켓 앞면을 물림
const POCKET_CLR = 0.4;

// ------------------------------------------------------------------
// 파라미터 & UI 바인딩
// ------------------------------------------------------------------
const P = {
  product: 'todo',   // 'dimsum' 딤섬 | 'todo' 아이맥 클립 | 'workout' 자석 운동 모션 센서
  // --- 투두 서포터 (아이맥 우측하단 코너 ㄷ자 클립) ---
  tWidth: 62, tEdge: 11.5, tClr: 0.6, tWall: 2.5, tBridge: 3, tRound: 3,
  tFront: 15, tBack: 30, tEspOn: true, tOledOn: true,
  // --- 운동 모션 센서 (30×10×2 자석 + MPU6050) ---
  wkWidth: 49.5, wkLength: 31, wkBodyH: 11.5, wkWall: 1.6, wkFit: 0.15, wkMagSkin: 0.6,
  wkBatH: 4.0,   // 배터리 실측 두께 (802040 공칭 8.0이지만 실제 셀에 맞춰 조절)
  wkWireX: -14.0, wkWireY: 7.5,   // 2층 바닥 배터리 배선 구멍 — TP4056 날개(패드 열) 밑
  wkDivGrow: 0.3,  // 칸막이 벽을 USB 쪽으로 더 두껍게 (TP4056 포켓의 +X 끝만 짧아짐)
  wkDivBar: 7.5,
  wkDivH: 1.0,     // 칸막이 막대를 바닥 위로 세우는 높이
  wkSwOn: true, wkSwY: 0, wkSwZ: 9.0,   // 전원 스위치 (SPDT 슬라이드, 창 8.4×3.6)   // 칸막이 막대 길이 (낮출수록 바깥에서 중앙 쪽으로 더 파임, 0=칸막이 없음)
  wkChgX: -0.5,    // TP4056 포켓 X 오프셋 (음수 = USB 쪽으로, 칸막이도 같이 이동)
  wkUsbY: 0,       // USB 구멍 Y 오프셋
  wkUsbFit: -0.2,  // ESP32 USB-C 소켓 물림 (셸 폭에 더하는 값, 음수 = 조여서 물림)
  wkMpuW: 16, wkMpuL: 21, wkMpuH: 3.5, wkHallOn: true, wkOledOn: true,
  wkHallGap: 1, wkHallT: 3.25,
  wkHallGpio: 0, wkRev: 8,
  shape: 'rect',   // 'rect' 둥근 네모 | 'circle' 완전 원형 (딤섬 찜기)
  W: 44, D: 39, R: 8, wall: 2.3, bands: true, fitClr: 0.08,
  f1On: true, f1H: 7.5, f2H: 16, f3H: 10, bossOn: true, bossH: 2.5, standSink: 2.5, cornerOut: 0.4,
  swBodyX: 14.3, swBodyY: 14.3, steamOn: true,
  espX: 0, espY: 8, espRot: 0, espLift: 0, espZ: 0,
  espHeader4On: true, espBarGap: 0.2,
  modType: 'generic', modY: -9, oledSide: 'W', oledType: '049', oledZ: 0, oledProud: 0,
  espOut: 0.8, espGripOn: true,   // 도킹 시 보드를 벽 쪽으로 더 밀기 / 손으로 빼는 집게 홈
  espAutoDock: true,              // 끄면 배터리 없음에서도 espX/espY 자유 배치
  usbThin: true, usbWallT: 1.5,   // USB 포트 둘레 벽만 얇게 (남길 두께)
  usbThroat: 0,                   // 깔때기 목이 벽 안쪽면보다 얼마나 더 안쪽인지 (0 = 최대 전진)
  solderOn: true, solderD: 0.5,   // 핀 2열 아래 납땜 릴리프 채널 (깊이)
  oledPodOn: false, coverOn: true,
  batType: '520', batPose: 'flat', batX: -8,
  // GPIO 기본값은 펌웨어(project147 wiring.html / platformio.ini build_flags)와 동일하게 맞춘다:
  // 2=부저 3=스위치 6=LED 초록 7=LED 빨강 8=SDA 9=SCL · 여유 0·1·4·5·10·20·21
  wireX: -6, wireY: -12, wireRot: 0, swGpio: 3, sw2Gpio: 4, sdaGpio: 8, sclGpio: 9, swGap: 29,
  lidOn: true, lidH: 6,
  ledOn: true, ledType: '3', ledX: 0, ledY: -14.5, ledGpio: 7, led2Gpio: 6,
  bzOn: true, bzMount: 'f2', bzX: 8, bzY: -8, bzPinPitch: 6.5, bzPinD: 1.5, bzGpio: 2,
  // NFC 스티커 포켓 (바닥판 속에 파묻는 원형 자리) — 출력 중 일시정지해서 스티커를 넣고 덮는다.
  // nfcBase = 포켓 아래 살 두께(= 넣을 레이어 높이), nfcT = 포켓 깊이(스티커 두께 + 여유)
  // nfcFloor = 포켓이 들어갈 층('2' = 2층 바닥판, '1' = 1층 바닥판 = 케이스 맨 밑바닥)
  // 2층 기본 위치가 중앙이 아닌 이유: Ø26.6 포켓이 44×39 바닥을 거의 채워서, 중앙에 두면
  // 바닥을 관통하는 배터리 배선구멍(기본 -6,-12)과 겹쳐 포켓 바닥에 구멍이 뚫린다.
  nfcOn: true, nfcFloor: '2', nfcD: 26.6, nfcT: 0.5, nfcBase: 0.6, nfcX: 5.5, nfcY: 3,
  // 측면 텍스처 (Weave 1·2·3) — 바깥 옆면에만 무늬를 새김. texture.js 참고
  texKey: 'none', texDepth: 0.4, texTile: 12, texRes: 0.45,
  pinRev: 2,   // 핀 기본값 리비전 (localStorage 마이그레이션용)
};

// 저장된 설정 복원 (localStorage)
try {
  const saved = JSON.parse(localStorage.getItem('dimsum-params') || '{}');
  for (const k in saved) if (k in P) P[k] = saved[k];
  if (!('wkOledOn' in saved) && 'wkLedOn' in saved) P.wkOledOn = saved.wkLedOn;
  // 운동 센서: 저장된 값이 항상 이깁니다. 리비전 마이그레이션은 TW802040 배치 이전
  // (wkRev < 3)의 옛 저장본만 되돌리고, 그 뒤로는 사용자가 맞춘 수치를 덮지 않습니다.
  if (!saved.wkRev || saved.wkRev < 3) Object.assign(P, {
    wkWidth: 49.5, wkLength: 31, wkBodyH: 11.5, wkWall: 1.6, wkBatH: 4.0,
    wkFit: 0.15, wkMagSkin: 0.6, wkMpuW: 16, wkMpuL: 21, wkMpuH: 3.5,
    wkHallGap: 1, wkHallT: 3.25, wkRev: 8,
    wkWireX: -14.0, wkWireY: 7.5,
  });
  // 구버전 호환: batPose 분리 전에는 batType '650' = 세워서 2층이었음
  if (saved.batType === '650' && !('batPose' in saved)) P.batPose = 'stand';
  // pinRev 1 → 2: 펌웨어 핀맵으로 기본값 변경. 예전 기본값을 그대로 쓰던 항목만 옮기고,
  // 사용자가 직접 바꾼 핀은 건드리지 않는다.
  if (!saved.pinRev) {
    const remap = { swGpio: [4, 3], sw2Gpio: [6, 4], ledGpio: [3, 7], led2Gpio: [5, 6] };
    for (const k in remap) {
      const [old, next] = remap[k];
      if (saved[k] === old) P[k] = next;
    }
    P.pinRev = 2;
  }
} catch (e) { /* 무시 */ }
const saveParams = () => {
  try { localStorage.setItem('dimsum-params', JSON.stringify(P)); } catch (e) { /* 무시 */ }
};
function espBarClearance() {
  const value = Number(P.espBarGap);
  return Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0.2;
}
P.espBarGap = espBarClearance();

const sliders = ['W','D','R','wall','fitClr','f1H','f2H','f3H','bossH','standSink','cornerOut','swBodyX','swBodyY',
                 'espX','espY','espLift','espBarGap','espZ','espOut','solderD','usbWallT','usbThroat','modY','oledZ','oledProud','batX','wireX','wireY','lidH','swGap',
                 'ledX','ledY','bzX','bzY','bzPinPitch','bzPinD','nfcD','nfcT','nfcBase','nfcX','nfcY',
                 'tWidth','tEdge','tClr','tWall','tBridge','tRound','tFront','tBack',
                 'wkWidth','wkLength','wkBodyH','wkBatH','wkWall','wkFit','wkMagSkin','wkWireX','wkWireY','wkDivBar','wkDivH','wkDivGrow','wkSwY','wkSwZ','wkChgX','wkUsbY','wkUsbFit','wkMpuW','wkMpuL','wkMpuH','wkHallGap','wkHallT',
                 'texDepth','texTile','texRes'];
let rebuildTimer = null;
let retexTimer = null;
// 슬라이더를 드래그하는 동안에는 측면 텍스처를 건너뛰고 형상만 빠르게 다시 만든다.
// 손을 떼고 잠깐 지나면 retexture()가 무늬만 다시 입힌다 (CSG를 다시 돌리지 않음).
let texSkip = false;
function queueRebuild() {
  saveParams();
  clearTimeout(rebuildTimer);
  clearTimeout(retexTimer);
  texSkip = P.texKey !== 'none';
  rebuildTimer = setTimeout(rebuild, 250);
}
for (const k of sliders) {
  const el = document.getElementById(k);
  const vl = document.getElementById(k + 'v');
  const dec = (+el.step < 0.1) ? 2 : 1;
  const show = () => { vl.textContent = (+el.value).toFixed(dec); };
  el.value = P[k];   // 저장값 반영
  el.addEventListener('input', () => {
    P[k] = +el.value;
    if (k === 'espLift')
      document.getElementById('espBarGap').disabled = noBat() || espStand() || (P.espLift <= 0 && !P.espHeader4On);
    show(); queueRebuild();
  });
  show();
}

// 모든 range 슬라이더에 −/+ 미세조절 버튼 주입 (min/max/step는 각 슬라이더에서 읽음)
function nudge(el, dir) {
  if (el.disabled) return;
  const step = +el.step || 1;
  const decimals = (step < 1) ? (String(step).split('.')[1] || '').length : 0;
  let v = +el.value + dir * step;
  v = Math.min(+el.max, Math.max(+el.min, v));
  el.value = decimals ? v.toFixed(decimals) : Math.round(v);
  el.dispatchEvent(new Event('input'));
}
for (const el of document.querySelectorAll('input[type=range]')) {
  const mk = (txt, dir) => {
    const b = document.createElement('button');
    b.className = 'nudge'; b.textContent = txt; b.tabIndex = -1;
    b.addEventListener('click', () => nudge(el, dir));
    return b;
  };
  const val = el.nextElementSibling;   // .val 스팬 (있으면)
  el.parentNode.insertBefore(mk('−', -1), el);
  el.parentNode.insertBefore(mk('+', +1), val && val.classList.contains('val') ? val : el.nextSibling);
}
const applyWorkoutOptionsUI = () => {
  for (const id of ['wkHallGap', 'wkHallT'])
    document.getElementById(id).disabled = !P.wkHallOn;
};
document.getElementById('wkHallOn').checked = P.wkHallOn;
document.getElementById('wkOledOn').checked = P.wkOledOn;
applyWorkoutOptionsUI();
document.getElementById('wkHallOn').addEventListener('change', e => {
  P.wkHallOn = e.target.checked;
  applyWorkoutOptionsUI();
  queueRebuild();
});
document.getElementById('wkSwOn').checked = P.wkSwOn;
document.getElementById('wkSwOn').addEventListener('change', e => {
  P.wkSwOn = e.target.checked;
  queueRebuild();
});
document.getElementById('wkOledOn').addEventListener('change', e => {
  P.wkOledOn = e.target.checked;
  queueRebuild();
});
// 모양 선택: 원형이면 W=지름, D/R 슬라이더는 비활성. 원형 전환 시 기본 Ø54 보장
function applyShapeUI() {
  const circ = P.shape === 'circle';
  document.getElementById('D').disabled = circ;
  document.getElementById('R').disabled = circ;
  document.getElementById('swGap').disabled = P.shape !== 'rect2';   // 스위치 간격은 더블 전용
  applyBatUI();   // modY 등은 배터리 모드와 함께 결정
}
// 배터리 없음: 배터리·충전모듈 컨트롤 잠금, ESP32는 동쪽 벽 자동 도킹(X/회전/띄움 잠금)
function applyBatUI() {
  const nb = noBat();
  const circ = P.shape === 'circle';
  document.getElementById('batType').disabled = !P.f1On;
  document.getElementById('modType').disabled = nb;
  document.getElementById('batPose').disabled = nb;
  document.getElementById('batX').disabled = !batStand();
  const autoDock = nb && P.espAutoDock;   // 자동 도킹을 끄면 배터리 없음에서도 X/Y 자유
  document.getElementById('espX').disabled = autoDock;
  document.getElementById('espY').disabled = autoDock && circ;   // 원형 도킹은 항상 중앙
  document.getElementById('espYCenter').disabled = autoDock && circ;
  document.getElementById('espRot').disabled = nb;
  document.getElementById('espLift').disabled = nb || espStand() || P.espHeader4On;
  document.getElementById('espZ').disabled = espHeader4Active();
  document.getElementById('espHeader4On').disabled = nb || espStand();
  document.getElementById('espBarGap').disabled = nb || espStand() || (P.espLift <= 0 && !P.espHeader4On);
  document.getElementById('espAutoDock').disabled = !nb;
  document.getElementById('espOut').disabled = !autoDock;    // 자동 도킹으로 벽에 붙일 때만 의미 있음
  document.getElementById('usbThin').disabled = !nb;
  document.getElementById('usbWallT').disabled = !nb || !P.usbThin;
  document.getElementById('espGripOn').disabled = espStand();
  document.getElementById('modY').disabled = nb || circ;   // 원형: 충전모듈은 항상 중앙 고정
  for (const id of ['wireX', 'wireY', 'wireRot']) document.getElementById(id).disabled = nb;
}
function applyFloor1UI() {
  document.getElementById('f1On').checked = P.f1On;
  document.getElementById('f1H').disabled = !P.f1On;
  document.getElementById('ex1').disabled = !P.f1On;
  const oledZ = document.getElementById('oledZ');
  // OLED 모듈 하단이 1층 바닥판(F1_PLATE)을 뚫지 않는 가장 낮은 0.5mm 단위 위치.
  const min = P.f1On
    ? Math.ceil((F1_PLATE - P.f1H - OLED_SEAT_BASE_Z) * 2) / 2
    : 0;
  oledZ.min = String(min);
  if (P.oledZ < min) {
    P.oledZ = min;
    oledZ.value = String(min);
    document.getElementById('oledZv').textContent = min.toFixed(1);
  }
  applyBatUI();
}
document.getElementById('f1On').checked = P.f1On;
document.getElementById('f1On').addEventListener('change', e => {
  P.f1On = e.target.checked;
  applyFloor1UI();
  queueRebuild();
});
document.getElementById('f1H').addEventListener('input', applyFloor1UI);
applyFloor1UI();
document.getElementById('shape').value = P.shape;
applyShapeUI();
document.getElementById('shape').addEventListener('change', e => {
  P.shape = e.target.value;
  if (P.shape === 'circle' && P.W < 52) {
    P.W = 54;   // 배터리 대각선 46.3 + 여유 + 벽 → 원형 기본 지름
    const el = document.getElementById('W');
    el.value = 54;
    document.getElementById('Wv').textContent = '54.0';
  }
  if (P.shape === 'rect2' && P.D < 63) {
    P.D = 63;   // 더블: 스위치 2개 + 캐릭터 2개(Ø28.7, 간격 29)가 들어가는 세로
    document.getElementById('D').value = 63;
    document.getElementById('Dv').textContent = '63.0';
  }
  applyShapeUI();
  queueRebuild();
});

document.getElementById('espRot').value = String(P.espRot);
document.getElementById('wireRot').value = String(P.wireRot);
document.getElementById('oledSide').value = P.oledSide;
document.getElementById('oledType').value = P.oledType;
document.getElementById('oledType').addEventListener('change', e => { P.oledType = e.target.value; queueRebuild(); });
document.getElementById('modType').value = P.modType;
document.getElementById('modType').addEventListener('change', e => { P.modType = e.target.value; queueRebuild(); });
document.getElementById('batType').value = P.batType;
document.getElementById('batPose').value = P.batPose;
document.getElementById('batType').addEventListener('change', e => {
  P.batType = e.target.value;
  // 배터리 없음 진입 시: 도킹 Y가 벽 곡면 밖이면 수납 가능 범위로 자동 클램프
  if (noBat()) {
    const maxY = Math.max(0, innerHalfD() - (ESP.w + POCKET_CLR) / 2 - 1);
    if (Math.abs(P.espY) > maxY) {
      P.espY = Math.round(Math.sign(P.espY) * maxY * 2) / 2;
      syncControls();
    }
  }
  applyBatUI();
  queueRebuild();
});
document.getElementById('batPose').addEventListener('change', e => {
  P.batPose = e.target.value;
  applyBatUI();
  queueRebuild();
});
document.getElementById('bands').checked = P.bands;
document.getElementById('bossOn').checked = P.bossOn;
document.getElementById('bossH').disabled = !P.bossOn;
document.getElementById('bossOn').addEventListener('change', e => {
  P.bossOn = e.target.checked;
  document.getElementById('bossH').disabled = !P.bossOn;
  queueRebuild();
});
document.getElementById('steamOn').checked = P.steamOn;
document.getElementById('steamOn').addEventListener('change', e => {
  P.steamOn = e.target.checked;
  queueRebuild();
});
document.getElementById('lidOn').checked = P.lidOn;
document.getElementById('lidH').disabled = !P.lidOn;
document.getElementById('lidOn').addEventListener('change', e => {
  P.lidOn = e.target.checked;
  document.getElementById('lidH').disabled = !P.lidOn;
  queueRebuild();
});
const applyLedUI = () => {
  for (const id of ['ledType', 'ledX', 'ledY']) document.getElementById(id).disabled = !P.ledOn;
};
document.getElementById('ledOn').checked = P.ledOn;
document.getElementById('ledType').value = P.ledType;
applyLedUI();
document.getElementById('ledOn').addEventListener('change', e => {
  P.ledOn = e.target.checked;
  applyLedUI();
  queueRebuild();
});
document.getElementById('ledType').addEventListener('change', e => { P.ledType = e.target.value; queueRebuild(); });
const applyBzUI = () => {
  for (const id of ['bzMount', 'bzX', 'bzY']) document.getElementById(id).disabled = !P.bzOn;
  for (const id of ['bzPinPitch', 'bzPinD'])
    document.getElementById(id).disabled = !P.bzOn || P.bzMount === 'f3';
};
document.getElementById('bzOn').checked = P.bzOn;
document.getElementById('bzMount').value = P.bzMount;
applyBzUI();
document.getElementById('bzOn').addEventListener('change', e => {
  P.bzOn = e.target.checked;
  applyBzUI();
  queueRebuild();
});
document.getElementById('bzMount').addEventListener('change', e => { P.bzMount = e.target.value; applyBzUI(); queueRebuild(); });
// ESP32 Y 중앙 정렬: Y=0으로 스냅
document.getElementById('espYCenter').addEventListener('click', () => {
  P.espY = 0;
  document.getElementById('espY').value = 0;
  document.getElementById('espYv').textContent = '0.0';
  queueRebuild();
});
// NFC 포켓을 바닥 중앙으로 (기본값은 배선구멍을 피해 치우쳐 있음 — 중앙이 필요할 때 한 번에)
document.getElementById('nfcCenter').addEventListener('click', () => {
  if (!P.nfcOn) return;
  for (const k of ['nfcX', 'nfcY']) {
    P[k] = 0;
    document.getElementById(k).value = 0;
    document.getElementById(k + 'v').textContent = '0.0';
  }
  queueRebuild();
});
document.getElementById('espRot').addEventListener('change', e => {
  const v = e.target.value;
  P.espRot = (v === '0' || v === '90') ? +v : v;   // 's0'/'s90'/'u0'/'u90' = 세움
  applyBatUI();   // 띄움은 눕힘 전용
  queueRebuild();
});
document.getElementById('espHeader4On').checked = P.espHeader4On;
document.getElementById('espHeader4On').addEventListener('change', e => {
  P.espHeader4On = e.target.checked;
  applyBatUI();
  queueRebuild();
});
document.getElementById('wireRot').addEventListener('change', e => { P.wireRot = e.target.value; queueRebuild(); });
document.getElementById('oledSide').addEventListener('change', e => { P.oledSide = e.target.value; queueRebuild(); });
document.getElementById('oledPodOn').checked = P.oledPodOn;
document.getElementById('oledPodOn').addEventListener('change', e => { P.oledPodOn = e.target.checked; queueRebuild(); });
document.getElementById('coverOn').checked = P.coverOn;
document.getElementById('coverOn').addEventListener('change', e => { P.coverOn = e.target.checked; queueRebuild(); });
document.getElementById('bands').addEventListener('change', e => { P.bands = e.target.checked; queueRebuild(); });
document.getElementById('espGripOn').checked = P.espGripOn;
document.getElementById('espGripOn').addEventListener('change', e => {
  P.espGripOn = e.target.checked;
  queueRebuild();
});
document.getElementById('espAutoDock').checked = P.espAutoDock;
document.getElementById('espAutoDock').addEventListener('change', e => {
  P.espAutoDock = e.target.checked;
  applyBatUI();
  queueRebuild();
});
document.getElementById('usbThin').checked = P.usbThin;
document.getElementById('usbThin').addEventListener('change', e => {
  P.usbThin = e.target.checked;
  document.getElementById('usbWallT').disabled = !noBat() || !P.usbThin;
  queueRebuild();
});
document.getElementById('solderOn').checked = P.solderOn;
document.getElementById('solderD').disabled = !P.solderOn;
document.getElementById('solderOn').addEventListener('change', e => {
  P.solderOn = e.target.checked;
  document.getElementById('solderD').disabled = !P.solderOn;
  queueRebuild();
});
const applyNfcUI = () => {
  for (const id of ['nfcFloor', 'nfcD', 'nfcT', 'nfcBase', 'nfcX', 'nfcY', 'nfcCenter'])
    document.getElementById(id).disabled = !P.nfcOn;
};
document.getElementById('nfcOn').checked = P.nfcOn;
document.getElementById('nfcFloor').value = P.nfcFloor;
applyNfcUI();
document.getElementById('nfcOn').addEventListener('change', e => {
  P.nfcOn = e.target.checked;
  applyNfcUI();
  queueRebuild();
});
document.getElementById('nfcFloor').addEventListener('change', e => {
  P.nfcFloor = e.target.value;
  queueRebuild();
});
document.getElementById('resetBtn').addEventListener('click', () => {
  localStorage.removeItem('dimsum-params');
  location.reload();
});

// 모든 UI 컨트롤을 현재 P 값으로 동기화 (프리셋 불러오기 후 호출)
function syncControls() {
  P.espBarGap = espBarClearance();
  for (const k of sliders) {
    const el = document.getElementById(k);
    const dec = (+el.step < 0.1) ? 2 : 1;
    el.value = P[k];
    document.getElementById(k + 'v').textContent = (+el.value).toFixed(dec);
  }
  document.getElementById('shape').value = P.shape;
  document.getElementById('espRot').value = String(P.espRot);
  document.getElementById('wireRot').value = String(P.wireRot);
  document.getElementById('oledSide').value = P.oledSide;
  document.getElementById('oledType').value = P.oledType;
  document.getElementById('modType').value = P.modType;
  document.getElementById('oledPodOn').checked = P.oledPodOn;
  document.getElementById('coverOn').checked = P.coverOn;
  document.getElementById('batType').value = P.batType;
  document.getElementById('batPose').value = P.batPose;
  document.getElementById('bands').checked = P.bands;
  document.getElementById('f1On').checked = P.f1On;
  document.getElementById('bossOn').checked = P.bossOn;
  document.getElementById('bossH').disabled = !P.bossOn;
  document.getElementById('steamOn').checked = P.steamOn;
  document.getElementById('lidOn').checked = P.lidOn;
  document.getElementById('lidH').disabled = !P.lidOn;
  document.getElementById('ledOn').checked = P.ledOn;
  document.getElementById('ledType').value = P.ledType;
  applyLedUI();
  document.getElementById('bzOn').checked = P.bzOn;
  document.getElementById('bzMount').value = P.bzMount;
  applyBzUI();
  document.getElementById('nfcOn').checked = P.nfcOn;
  document.getElementById('nfcFloor').value = P.nfcFloor;
  applyNfcUI();
  document.getElementById('espGripOn').checked = P.espGripOn;
  document.getElementById('espHeader4On').checked = P.espHeader4On;
  document.getElementById('solderOn').checked = P.solderOn;
  document.getElementById('solderD').disabled = !P.solderOn;
  document.getElementById('espAutoDock').checked = P.espAutoDock;
  document.getElementById('usbThin').checked = P.usbThin;
  applyShapeUI();
  applyFloor1UI();
  document.getElementById('product').value = P.product;
  document.getElementById('tEspOn').checked = P.tEspOn;
  document.getElementById('tOledOn').checked = P.tOledOn;
  document.getElementById('wkHallOn').checked = P.wkHallOn;
  document.getElementById('wkOledOn').checked = P.wkOledOn;
  document.getElementById('wkSwOn').checked = P.wkSwOn;
  applyWorkoutOptionsUI();
  syncTexBtns();
}

// 프리셋 내보내기/불러오기 (전체 설정 JSON)
function presetTimestamp(now = new Date()) {
  const twoDigits = value => String(value).padStart(2, '0');
  return `${now.getFullYear()}-${twoDigits(now.getMonth() + 1)}-${twoDigits(now.getDate())}`
    + `_${twoDigits(now.getHours())}-${twoDigits(now.getMinutes())}-${twoDigits(now.getSeconds())}`;
}

document.getElementById('presetExport').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(P, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `dimsum-preset_${presetTimestamp()}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
});
const presetFile = document.getElementById('presetFile');
document.getElementById('presetImport').addEventListener('click', () => presetFile.click());
presetFile.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const obj = JSON.parse(r.result);
      let n = 0;
      for (const k in obj) if (k in P) { P[k] = obj[k]; n++; }
      syncControls();
      applyProductUI();
      saveParams();
      rebuild();
      document.getElementById('warnings').textContent = t('presetLoaded', n);
    } catch (err) {
      document.getElementById('warnings').textContent = t('presetError');
    }
  };
  r.readAsText(file);
  presetFile.value = '';   // 같은 파일 다시 선택 가능하도록
});

// ------------------------------------------------------------------
// three.js 씬
// ------------------------------------------------------------------
const viewer = document.getElementById('viewer');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
viewer.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf6f1e7);
const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 2000);
camera.position.set(95, -110, 85);
camera.up.set(0, 0, 1);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 28);
controls.enableDamping = true;

scene.add(new THREE.HemisphereLight(0xfffaf0, 0xb0a080, 1.1));
const dir = new THREE.DirectionalLight(0xffffff, 1.6);
dir.position.set(60, -80, 120);
scene.add(dir);
const dir2 = new THREE.DirectionalLight(0xffe9c0, 0.5);
dir2.position.set(-80, 60, 40);
scene.add(dir2);

const grid = new THREE.GridHelper(300, 30, 0xd8cbaa, 0xe8dfc9);
grid.rotation.x = Math.PI / 2;
grid.position.z = -14;
scene.add(grid);

function resize() {
  const w = viewer.clientWidth, h = viewer.clientHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
resize();
(function loop() { requestAnimationFrame(loop); controls.update(); renderer.render(scene, camera); })();

// 재질
const matCase = new THREE.MeshStandardMaterial({ color: 0xdec08c, roughness: 0.75, metalness: 0.02 });
const matCaseX = new THREE.MeshStandardMaterial({ color: 0xdec08c, roughness: 0.75, transparent: true, opacity: 0.42 });
const partMat = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, transparent: true, opacity: 0.9 });
const MATS = {
  bat: partMat(0x8494a8), esp: partMat(0x33475c), mod: partMat(0xc0503c),
  oled: partMat(0x1f9e86), stand: partMat(0x9061c2), face: partMat(0xf4d271),
  led: new THREE.MeshStandardMaterial({ color: 0xfff6e0, emissive: 0xffc36b,
    emissiveIntensity: 0.6, roughness: 0.25, transparent: true, opacity: 0.95 }),
  ledR: new THREE.MeshStandardMaterial({ color: 0xffe3dc, emissive: 0xe0523c,   // 투톤 빨강 반쪽
    emissiveIntensity: 0.5, roughness: 0.25, transparent: true, opacity: 0.95 }),
  ledG: new THREE.MeshStandardMaterial({ color: 0xdff3e2, emissive: 0x3ca35a,   // 투톤 초록 반쪽
    emissiveIntensity: 0.5, roughness: 0.25, transparent: true, opacity: 0.95 }),
  bz: partMat(0x23272e), bzPin: partMat(0xb6bdc5), nfc: partMat(0xb98f3f),
};

// 층 그룹 (분해/조립용) — [0..2] = 1~3층, [3] = 딤섬 뚜껑, [4] = OLED 뒷면 커버(자체 분해 이동)
const G = [new THREE.Group(), new THREE.Group(), new THREE.Group(), new THREE.Group(), new THREE.Group()];
G.forEach(g => scene.add(g));
let floorMeshes = [null, null, null, null];
let exportGeos = [null, null, null, null];
// 측면 텍스처가 적용된 표시/내보내기용 지오메트리. exportGeos 는 항상 무늬 없는 원본을
// 유지한다 — 간섭 체크(CSG)는 삼각형이 적은 원본으로 해야 빠르고 정확하기 때문.
let texGeos = [null, null, null, null];

// ------------------------------------------------------------------
// 셰이프 헬퍼 (CSG: manifold WASM — 파이썬 생성기와 동일 엔진)
// ------------------------------------------------------------------
let M = null;   // manifold wasm 모듈 (초기화 후 할당)

// tol: 꼭짓점 용접 허용치 — 미세 디테일 메시(bun_lid)는 1e-5로 용접하면 서로 다른
// 꼭짓점이 합쳐져 non-manifold가 되므로 1e-6을 넘겨야 함
function toMan(geo, matrix, tol = 1e-5) {
  let g = geo;
  if (matrix) { g = geo.clone(); g.applyMatrix4(matrix); }
  const merged = BufferGeometryUtils.mergeVertices(g, tol);
  const idx = merged.index.array;
  const tris = [];   // 용접이 만든 퇴화 삼각형(같은 꼭짓점 반복) 제거
  for (let i = 0; i < idx.length; i += 3) {
    if (idx[i] !== idx[i + 1] && idx[i + 1] !== idx[i + 2] && idx[i] !== idx[i + 2])
      tris.push(idx[i], idx[i + 1], idx[i + 2]);
  }
  const mesh = new M.Mesh({
    numProp: 3,
    vertProperties: new Float32Array(merged.attributes.position.array),
    triVerts: new Uint32Array(tris),
  });
  mesh.merge();
  return new M.Manifold(mesh);
}
function manToGeo(man) {
  const mm = man.getMesh();
  let geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(mm.vertProperties.slice(), 3));
  geo.setIndex(new THREE.BufferAttribute(mm.triVerts.slice(), 1));
  geo = geo.toNonIndexed();
  geo.computeVertexNormals();
  return geo;
}

function rrPath(cls, w, d, r) {
  const p = new cls();
  const hw = w / 2, hd = d / 2;
  r = Math.max(0.05, Math.min(r, hw - 0.01, hd - 0.01));
  p.moveTo(-hw + r, -hd);
  p.lineTo(hw - r, -hd);  p.absarc(hw - r, -hd + r, r, -Math.PI / 2, 0);
  p.lineTo(hw, hd - r);   p.absarc(hw - r, hd - r, r, 0, Math.PI / 2);
  p.lineTo(-hw + r, hd);  p.absarc(-hw + r, hd - r, r, Math.PI / 2, Math.PI);
  p.lineTo(-hw, -hd + r); p.absarc(-hw + r, -hd + r, r, Math.PI, Math.PI * 1.5);
  return p;
}
const rrShape = (w, d, r) => rrPath(THREE.Shape, w, d, r);
// 모양: 둥근 네모 / 완전 원형(D=W, R=W/2 → rrPath가 원이 됨)
const effD = () => P.shape === 'circle' ? P.W : P.D;
const effR = () => P.shape === 'circle' ? P.W / 2 : P.R;
// 둥근 네모 더블: 스위치 홀더 2개 (y ±swGap/2), 세로 D 60 이상 권장. Ø41 뚜껑(4층)은 비활성
const dbl = () => P.shape === 'rect2';
// NFC 포켓 윗면 z (해당 층 로컬) — 바닥판 두께를 넘으면 판을 뚫으므로 포켓을 만들지 않는다
const nfcTop = () => P.nfcBase + P.nfcT;
const nfcOnF1 = () => P.nfcFloor === '1';                        // 1층 바닥판(케이스 맨 밑) 에 묻기
const nfcPlate = () => nfcOnF1() ? F1_PLATE : F2_PART_BASE;          // 2층 NFC 위쪽은 플랫폼/부품 받침이 덮음
// 포켓을 실제로 파낼 수 있는지 — 1층을 껐으면 1층 포켓은 갈 곳이 없다
const nfcFits = () => P.nfcOn && nfcTop() < nfcPlate() - 0.05 && (!nfcOnF1() || P.f1On);
const NFC_T = 0.4;   // 스티커 실측 두께 (고스트 표시용)
const swOffsets = () => dbl() ? [-P.swGap / 2, P.swGap / 2] : [0];
// 외곽 base 의 inset 버전 (둥근 모서리 유지)
const baseShape  = i => rrShape(P.W - 2 * i, effD() - 2 * i, effR() - i);
const basePath   = i => rrPath(THREE.Path, P.W - 2 * i, effD() - 2 * i, effR() - i);

function extrudeGeo(shape, h, z0 = 0, cx = 0, cy = 0) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 14 });
  g.deleteAttribute('uv');
  g.translate(cx, cy, z0);
  return g;
}
const extrude = (shape, h, z0 = 0, cx = 0, cy = 0) => toMan(extrudeGeo(shape, h, z0, cx, cy));
function ringBrush(insetOut, insetIn, h, z0) {   // 외곽 inset 링
  const s = baseShape(insetOut);
  s.holes.push(basePath(insetIn));
  return extrude(s, h, z0);
}
function boxBrush(w, d, h, cx, cy, z0, r = 0, matrix = null) {
  const s = r > 0 ? rrShape(w, d, r) : rrShape(w, d, 0.05);
  return toMan(extrudeGeo(s, h, z0, cx, cy), matrix);
}
function cylBrush(r, h, z0, seg = 96) {   // 원기둥 (뚜껑 스커트/안착 홈용 — 부드러운 원)
  const g = new THREE.CylinderGeometry(r, r, h, seg);
  g.rotateX(Math.PI / 2);
  g.translate(0, 0, z0 + h / 2);
  g.deleteAttribute('uv');
  return toMan(g);
}
// 결합부 — 사각 단면 턱·홈 (턱 1.2×1.5가 홈 1.8 깊이에 꽂힘, fitClr로 유격 조절)
function topRidge(z) {   // 아래층 상단 턱
  const o = RABBET.out + P.fitClr;
  return ringBrush(o, o + RIDGE_W, RIDGE_H, z);
}

function bottomJointCut(b) {   // 위층 바닥 홈
  return sub(b, ringBrush(RABBET.out, P.wall + 0.6, RABBET.d, -0.05));
}
const csgOp = (a, b, f) => { const r = a[f](b); a.delete(); b.delete(); return r; };
const add = (a, b) => csgOp(a, b, 'add');
const sub = (a, b) => csgOp(a, b, 'subtract');
const inter = (a, b) => csgOp(a, b, 'intersect');
const meshBrush = (geo, matrix, tol) => toMan(geo, matrix, tol);

// ------------------------------------------------------------------
// 외부 STL 로드 (usb 구멍, 스위치 스탠드, 고스트 부품들)
// ------------------------------------------------------------------
const loader = new STLLoader();
const ASSETS = {};
function loadSTL(url) {
  return new Promise((res, rej) => loader.load(url, g => {
    g.deleteAttribute('uv'); g.computeVertexNormals(); res(g);
  }, undefined, rej));
}
function normalize(g, centerXY = true) {
  g.computeBoundingBox();
  const b = g.boundingBox;
  const cx = centerXY ? (b.min.x + b.max.x) / 2 : b.min.x;
  const cy = centerXY ? (b.min.y + b.max.y) / 2 : b.min.y;
  g.translate(-cx, -cy, -b.min.z);
  return g;
}

async function loadAssets() {
  const [usb, sw, bat, esp, mod, oled, face, bunLid] = await Promise.all([
    loadSTL(usbHoleUrl),
    loadSTL(switchMxUrl),
    loadSTL(batteryUrl),
    loadSTL(esp32Url),
    loadSTL(chargeModuleUrl),
    loadSTL(oledUrl),
    loadSTL(faceUrl),
    loadSTL(bunLidUrl),
  ]);
  // USB 구멍 툴: 정규화 → 중심 정렬 → 나팔 입구가 +X를 향하게 (길이 9, 사용 시 벽두께에 맞춰 x 스케일)
  normalize(usb, false);
  usb.computeBoundingBox();
  const ub = usb.boundingBox;
  usb.translate(-(ub.min.x + ub.max.x) / 2, -(ub.min.y + ub.max.y) / 2, -(ub.min.z + ub.max.z) / 2);
  usb.rotateZ(Math.PI);
  ASSETS.usb = usb;

  // MX 스위치: xy 중심, z0 = 핀 끝 → 몸통 바닥이 z0이 되도록 핀 길이만큼 내림 없이 그대로
  ASSETS.switch = normalize(sw);

  ASSETS.bat = normalize(bat);
  ASSETS.esp = normalize(esp, false);   // min corner 기준 (USB는 -x 끝)
  ASSETS.mod = normalize(mod, false);
  ASSETS.oled = normalize(oled, false);
  ASSETS.face = normalize(face);
  ASSETS.bunLid = normalize(bunLid);   // xy 중심, z0 바닥 (파이썬 전처리와 동일 규약)
}

// ------------------------------------------------------------------
// 층 빌더
// ------------------------------------------------------------------
function decoBands(body, zList, protect = null) {
  if (!P.bands) return body;
  for (const z of zList) {
    const s = rrShape(P.W + 0.1, effD() + 0.1, effR());
    s.holes.push(basePath(0.6));
    let ring = extrude(s, 1.2, z - 0.6);
    if (protect) ring = sub(ring, protect());   // 돌출 포드 등 보호 영역은 홈 안 팜
    body = sub(body, ring);
  }
  return body;
}
const innerHalfW = () => P.W / 2 - P.wall;
const innerHalfD = () => effD() / 2 - P.wall;

// 벽 안쪽/바깥 면의 깊이 좌표: 가로 위치 hw(중앙 기준 절대값)에서 벽면까지의 거리.
// 직선 구간이면 상수, 모서리/원형 구간이면 곡률을 따라 계산 (원형 모드 핵심)
function surfAt(hw, acrossHalf, depthHalf, inset) {
  const R = effR() - inset;
  const cx = acrossHalf - effR(), cy = depthHalf - effR();
  if (hw <= cx) return depthHalf - inset;
  const dq = R * R - (hw - cx) * (hw - cx);
  return dq > 0 ? cy + Math.sqrt(dq) : 0;   // 0 = 그 폭에서는 벽면이 없음 (경고용)
}

// NFC 스티커 포켓: 바닥판 속에 파묻는 원형 자리 (바깥으로 뚫리지 않는 내부 공동).
// 아래 살 nfcBase 만큼 깔고 → 포켓 nfcT → 나머지가 천장. 출력 중 nfcBase 높이에서 일시정지해
// 스티커를 눕혀 넣고 그대로 덮으면 된다. 포켓 깊이를 스티커 두께에 맞추면 다음 레이어가
// 스티커 위에 바로 얹혀서 브릿지가 거의 생기지 않는다. 1·2층 바닥판 공용.
function nfcCut(b) {
  const c = new THREE.CylinderGeometry(P.nfcD / 2, P.nfcD / 2, P.nfcT, 96);
  c.rotateX(Math.PI / 2);
  c.translate(P.nfcX, P.nfcY, P.nfcBase + P.nfcT / 2);
  c.deleteAttribute('uv');
  return sub(b, toMan(c));
}

function buildFloor1() {
  let b = extrude(baseShape(0), F1_PLATE);                       // 바닥판
  b = add(b, ringBrush(0, P.wall, P.f1H - F1_PLATE, F1_PLATE));  // 벽
  b = add(b, topRidge(P.f1H));
  // 배터리 고정 테두리 (눕힘 배치 전용 — 세움은 2층 소켓에 꽂음)
  // insideInner: 테두리 구멍 모서리가 원형/둥근 외곽 밖으로 나가면 CSG가 깨지므로 곡률 기준 검사
  const { w: bw, d: bd } = batFlatFoot();
  if (!noBat() && !batStand() && insideInner(bw / 2 + 0.6, bd / 2 + 0.6)) {
    const rim = baseShape(P.wall);
    rim.holes.push(rrPath(THREE.Path, bw, bd, 2));
    b = add(b, extrude(rim, 1.2, F1_PLATE));
  }
  // OLED를 아래로 내리면 타워/소켓의 1층 구간도 1층 파트에 나눠 담는다.
  // 각 층이 자기 높이까지만 형상을 가지므로 조립면에서 겹치지 않고 따로 출력할 수 있다.
  if (P.oledSide !== 'none' && oledCaseBaseZ() < 0) {
    if (P.oledPodOn) {
      b = oledPodSocket(b, P.f1H, 0, P.f1H, P.f1H);
    } else {
      const z0 = Math.max(0, P.f1H + oledCaseBaseZ());
      if (z0 < P.f1H) b = add(b, oledTowerSection(z0, P.f1H));
      b = oledCavityCut(b, true, P.f1H, 0, P.f1H);
    }
  }
  if (nfcFits() && nfcOnF1()) b = nfcCut(b);   // 1층 바닥판(케이스 맨 밑)에 묻는 NFC 포켓
  const oledProtect = P.oledSide !== 'none' && oledCaseBaseZ() < 0
    ? () => oledProtectBrush(0, P.f1H) : null;
  b = decoBands(b, [P.f1H * 0.55], oledProtect);
  return b;
}

const espUsbDown = () => P.espRot === 'u0' || P.espRot === 'u90';   // USB 끝이 바닥
const espThinX = () => P.espRot === 's90' || P.espRot === 'u90';    // 두께 방향이 x축
// USB아래: 커넥터 끝이 바닥판에 1mm 박혀 고정 앵커 역할. espZ = 안착면 미세조정(위로 +)
const espBaseZ = () => (espUsbDown() ? F2_PART_BASE - 1.0 : F2_PART_BASE) + P.espZ;

function espFoot() {  // ESP32 footprint (회전/세움 반영)
  if (espStand()) {
    const t = ESP.h + 1.6;   // 두께 + USB 커넥터 돌출 여유
    const along = (espUsbDown() ? ESP.w : ESP.l) + POCKET_CLR;
    return espThinX() ? { w: t, d: along } : { w: along, d: t };
  }
  const l = P.espRot === 90 ? ESP.w : ESP.l;
  const w = P.espRot === 90 ? ESP.l : ESP.w;
  return { w: l + POCKET_CLR, d: w + POCKET_CLR };
}

// 2.5층(띄움): 보드를 뒤집어(USB·부품면 아래) 받침선에 얹음 — USB 실루엣이 홈에 꽂혀 고정
const LIFT_SINK = 3.0;   // USB/부품 실루엣이 받침선에 파묻히는 깊이
const LIFT_SHOULDER_H = 2.5; // ESP32 받침선 홈 양끝 턱 높이
const LIFT_REAR_RISE = 3.0, LIFT_REAR_W = 2.2; // USB 반대쪽 삽입 턱만 3mm 더 높임
const ESP_HEADER4 = { blockH: 2.3, pinBelow: 3.7, pinD: 0.65, holeD: 0.95,
                      railW: 3.0, endWall: 1.4 };
const USB_C_OFF = 7.5;   // 보드 중심 → USB 셸 중심 오프셋 (뒤집힌 후 길이축 +쪽)
const LIFT_USB_EXTRA_DEPTH = 2.2; // 뒤집힌 USB 셸 바닥에 추가로 주는 Z 방향 끼움 여유
const LIFT_USB_MIN_SKIN = F2_PLATE; // 깊게 파되 USB 홈 밑면에는 0.8mm 바닥판을 남김
const LIFT_USB_SHELL_SIDE = 9.0, LIFT_USB_SHELL_H = 2.5;
const LIFT_USB_FIT_CLR = 0.4;      // USB 셸 둘레 한쪽당 XY 끼움 여유
const LIFT_USB_TOP_CLR = 0.4;      // USB 셸 위쪽 여유
const LIFT_Y_TIGHTEN = 0.15;       // 뒤집힌 ESP32의 케이스 앞뒤(Y) 홈을 0.15mm 조임
function espHeader4Active() {
  return !!P.espHeader4On && !noBat() && !espStand();
}
function espLiftActive() {
  return !noBat() && !espStand() && (P.espLift > 0 || P.espHeader4On);
}
function espLiftTopZ() {
  return espHeader4Active()
    ? F2_PLATE + ESP_HEADER4.pinBelow + ESP_HEADER4.blockH
    : F2_PART_BASE + P.espLift + P.espZ;
}
function espLiftGeo(inflate = false) {
  const g = ASSETS.esp.clone();
  g.rotateY(Math.PI);                              // 뒤집기 — USB·부품면이 아래
  if (P.espRot === 90) g.rotateZ(Math.PI / 2);
  normalize(g);                                    // xy 중심, 바닥 z=0 (= USB 쉘 밑면)
  if (inflate) {
    const ySize = P.espRot === 90 ? ESP.l : ESP.w;
    const longScale = 1 + espBarClearance() / ESP.l;
    g.scale(P.espRot === 90 ? 1.04 : longScale,
            P.espRot === 90 ? longScale : 1.04 - LIFT_Y_TIGHTEN / ySize,
            1.03);
    g.translate(0, 0, -0.15);
  }
  return g;
}

// 실물 USB-C 셸의 둥근 YZ 단면을 XY(폭)×Z(높이) 프로파일로 그린 뒤
// 커넥터 길이 방향으로 압출한다. 사각 홈과 달리 둥근 셸 전체가 균일하게 들어간다.
function liftedUsbShellCut(cx, cy, z0, z1, rot90) {
  const side = LIFT_USB_SHELL_SIDE + 2 * LIFT_USB_FIT_CLR;
  const h = z1 - z0;
  const geo = extrudeGeo(rrShape(side, h, 0.8), side);
  const m = new THREE.Matrix4();
  if (rot90) {
    // 압출축→-Y, 단면 가로→X, 단면 높이→Z (회전행렬, 반사 없음)
    m.set(1, 0, 0, cx,
          0, 0, -1, cy + side / 2,
          0, 1, 0, z0 + h / 2,
          0, 0, 0, 1);
  } else {
    // 압출축→X, 단면 가로→Y, 단면 높이→Z
    m.set(0, 0, 1, cx - side / 2,
          1, 0, 0, cy,
          0, 1, 0, z0 + h / 2,
          0, 0, 0, 1);
  }
  return toMan(geo, m);
}

// 세움 ESP32 지오메트리: 실물 메시를 수직으로 세움.
// inflate=절삭용 — USB 커넥터 모양 포함 실루엣 그대로 홈이 파여 꽂아서 고정
function espStandGeo(inflate = false) {
  const g = ASSETS.esp.clone();
  if (espUsbDown()) {
    g.rotateY(-Math.PI / 2);                       // 길이(24)를 수직으로, USB 끝이 바닥
    if (P.espRot === 'u90') g.rotateZ(Math.PI / 2);
  } else {
    g.rotateX(Math.PI / 2);                        // 폭(18)을 수직으로
    if (P.espRot === 's90') g.rotateZ(Math.PI / 2);
  }
  normalize(g);                                    // xy 중심, 바닥 z=0
  if (inflate) {
    const sT = 1.10, sL = 1.02;                    // 끼움(두께) 방향 위주 팽창
    g.scale(espThinX() ? sT : sL, espThinX() ? sL : sT, 1.02);
    g.translate(0, 0, -0.3);                       // 바닥판에 살짝 매립 → 박편 방지
  }
  return g;
}
// 원형 모드: 동쪽 벽의 플랫 USB 패드 (반폭 9) 외면 x 좌표
const flatPadX = () => Math.sqrt(Math.max((P.W / 2) ** 2 - 81, 1));

function modCenter() {
  const mod = modSpec();
  const circ = P.shape === 'circle';
  const edgeX = circ
    ? flatPadX() - USB_PAD.t
    : surfAt(Math.abs(P.modY) + mod.w / 2 + 0.4, effD() / 2, P.W / 2, P.wall);
  const cy = circ ? 0 : P.modY;
  const outerAtUsb = circ ? flatPadX()
    : surfAt(Math.abs(cy) + 5.5, effD() / 2, P.W / 2, 0);
  const outerAtPocketEdge = circ ? flatPadX()
    : surfAt(Math.abs(cy) + (mod.w + POCKET_CLR) / 2, effD() / 2, P.W / 2, 0);
  // 케이스 외면은 그대로 두고 모듈을 USB 쪽으로 전진시킨다. 곡면 모서리에서도
  // PCB 포켓 앞쪽 벽살은 최소 0.4mm 남기고, 셸은 평평한 외벽에 더 가깝게 둔다.
  const desiredPush = outerAtUsb - (edgeX - 0.2 + mod.usbOver) - MOD_USB_SHELL_GAP;
  const maxPush = outerAtPocketEdge - MOD_USB_MIN_WALL
    - (edgeX - 0.2 - MOD_POCKET_FRONT_INSET);
  // 포켓 끝이 곡면 안쪽 유효 범위를 벗어나면 기존 충돌 경고에 맡기고 전진시키지 않는다.
  const push = edgeX > 0 && outerAtUsb > 0 && outerAtPocketEdge > 0
    ? Math.max(0, Math.min(desiredPush, maxPush)) : 0;
  if (P.shape === 'circle') {
    // 원형: 모듈은 무조건 중앙, 플랫 패드(두께 2.5) 앞까지 전진
    return { x: edgeX - 0.2 - mod.l / 2 + push, y: 0, edgeX };
  }
  return { x: edgeX - 0.2 - mod.l / 2 + push, y: P.modY, edgeX };
}
// 배터리 없음: ESP32가 충전모듈 자리(동쪽 벽)에 도킹 — USB가 벽 구멍으로 직결 (180° 회전)
// espOut: 보드를 벽 쪽으로 더 밀어 넣는 양. 포켓도 같이 벽을 파고 들어가 커넥터가 벽 두께
// 안쪽에 자리잡으므로, USB 플러그가 벽을 그만큼 덜 파고들어도 꽂힌다 (남는 벽살 = wall − espOut).
// espAutoDock 을 끄면 벽에 붙이지 않고 espX/espY 그대로 — 위치를 직접 잡고 싶을 때
function espDock() {
  const out = noBat() ? P.espOut : 0;
  const free = !P.espAutoDock;
  if (P.shape === 'circle') {
    const edgeX = flatPadX() - USB_PAD.t;
    return free ? { x: P.espX, y: P.espY, edgeX }
                : { x: edgeX - 0.2 - ESP.l / 2 + out, y: 0, edgeX };
  }
  const edgeX = surfAt(Math.abs(P.espY) + ESP.w / 2 + 0.4, effD() / 2, P.W / 2, P.wall);
  return free ? { x: P.espX, y: P.espY, edgeX }
              : { x: edgeX - 0.2 - ESP.l / 2 + out, y: P.espY, edgeX };
}
// ESP32 집게 홈: 포켓 마주 보는 두 벽을 터서 보드 옆면(두께 4.2)을 손가락이 직접 잡게 한다.
// 여유가 더 넓은 축을 골라 파고, 어떤 경우에도 케이스 벽을 뚫지 않도록 내부 외곽선으로 잘라낸다.
const GRIP = { w: 11, out: 4 };   // 홈 폭 / 포켓 바깥으로 파는 깊이
function espGripRoom(cx, cy, w, d) {
  return {
    y: Math.min(innerHalfD() - (cy + d / 2), (cy - d / 2) + innerHalfD()),
    x: Math.min(innerHalfW() - (cx + w / 2), (cx - w / 2) + innerHalfW()),
  };
}
// ESP32 핀 납땜 릴리프: 핀 2열(보드 중심 ±8, ESP_PINS 기준) 안쪽 경계에서 바깥으로 쭉 파낸다.
// 포켓 옆벽을 뚫고 나가므로 납이 옆으로 빠질 길이 생기고, 가운데 넓은 바닥(±6.5)은 그대로 남아
// 보드를 받친다. 케이스 벽은 절대 뚫지 않도록 내부 외곽선에서 잘라낸다.
const SOLDER = { off: 8, w: 3, len: 20 };   // 핀열 오프셋 / 핀열 폭 / 길이 (핀 x범위 −9~8.5 커버)
const solderInner = () => SOLDER.off - SOLDER.w / 2;   // 릴리프 안쪽 경계 (보드 중심 기준)
// 릴리프가 실제로 덮는 사각형들 (내부 외곽선에서 잘린 뒤 기준) — 경고 계산과 공유
function espSolderRects(cx, cy, alongX) {
  const lim = alongX ? innerHalfD() : innerHalfW();
  const base = alongX ? cy : cx;
  const rects = [];
  for (const s of [-1, 1]) {
    const a = base + s * solderInner(), edge = s * lim;
    if (s > 0 ? a >= edge : a <= edge) continue;   // 그쪽은 이미 벽 밖 → 슬롯 없음
    const lo = Math.min(a, edge), hi = Math.max(a, edge);
    rects.push(alongX
      ? { x: cx, y: (lo + hi) / 2, w: SOLDER.len, d: hi - lo }
      : { x: (lo + hi) / 2, y: cy, w: hi - lo, d: SOLDER.len });
  }
  return rects;
}
function espSolderCut(cx, cy, alongX) {
  const z0 = F2_PART_BASE + P.espZ - P.solderD;
  const h = P.solderD + 0.05;               // 포켓 바닥과 확실히 이어지게 살짝 겹침
  const span = P.W + effD();                // 넉넉히 뻗어두고 내부 외곽선으로 잘라낸다
  let g = null;
  for (const s of [-1, 1]) {
    const off = s * (solderInner() + span / 2);
    const c = alongX
      ? boxBrush(SOLDER.len, span, h, cx, cy + off, z0, 1.2)
      : boxBrush(span, SOLDER.len, h, cx + off, cy, z0, 1.2);
    g = g ? add(g, c) : c;
  }
  return inter(g, extrude(baseShape(P.wall), h + 1, z0 - 0.5));   // 케이스 벽 관통 방지
}
// 원(중심 cx,cy · 반지름 r)과 축정렬 사각형이 겹치는지
function circleRectOverlap(cx, cy, r, rect) {
  const dx = Math.max(Math.abs(cx - rect.x) - rect.w / 2, 0);
  const dy = Math.max(Math.abs(cy - rect.y) - rect.d / 2, 0);
  return dx * dx + dy * dy < r * r;
}

function espGripCut(cx, cy, w, d) {
  const room = espGripRoom(cx, cy, w, d);
  const useY = room.y >= room.x;
  const h = F2_PLATFORM + 2, z0 = F2_PART_BASE + P.espZ;
  let g = null;
  for (const s of [-1, 1]) {
    const box = useY
      ? boxBrush(GRIP.w, GRIP.out * 2, h, cx, cy + s * d / 2, z0, 1.5)
      : boxBrush(GRIP.out * 2, GRIP.w, h, cx + s * w / 2, cy, z0, 1.5);
    g = g ? add(g, box) : box;
  }
  return inter(g, extrude(baseShape(P.wall), h + 1, z0 - 0.5));   // 벽 관통 방지
}

function oledFrame() {
  // OLED 그룹 로컬(+Y벽) → 월드 변환
  const side = P.oledSide;
  const dHalf = (side === 'W') ? P.W / 2 : effD() / 2;
  const acrossHalf = (side === 'W') ? effD() / 2 : P.W / 2;
  const ang = side === 'N' ? 0 : side === 'W' ? Math.PI / 2 : Math.PI;
  const m = new THREE.Matrix4().makeRotationZ(ang);
  // 모듈 앞면 안착 평면: 모듈 폭 모서리가 곡면 벽에 닿는 깊이.
  // 앞벽은 케이스 벽보다 얇은 OLED_FACE_T 기준 → 디스플레이가 바깥에 더 가깝게
  // 돌출(proud) 시 포드 외곽면과 함께 안착면도 바깥으로 밀려남.
  // 원형 모드: 포드가 네모 모드처럼 평평한 앞면 박스 (플랫 USB 패드와 같은 디자인)
  const proud = P.oledProud;
  const seatY = (P.shape === 'circle')
    ? dHalf - OLED_FACE_T + proud
    : surfAt(oledSpec().w / 2 + 0.4, acrossHalf, dHalf, OLED_FACE_T) + proud;
  return { dHalf, acrossHalf, m, innerFace: dHalf - P.wall, seatY, proud, outHalf: dHalf + proud };
}

function oledProtectBrush(z0, h) {
  const spec = oledSpec();
  const { m, seatY, outHalf } = oledFrame();
  const backY = seatY - spec.t - 2.0;
  return boxBrush(oledTowerW(), outHalf - backY + 0.4, h,
                  0, (outHalf + backY) / 2 + 0.2, z0, 0, m);
}

// 내장 OLED 타워의 한 층 구간. OLED Z가 음수면 같은 타워를 1층/2층 경계에서 분할한다.
function oledTowerSection(z0, z1) {
  const spec = oledSpec();
  const { m, seatY, proud, outHalf } = oledFrame();
  const towerBack = seatY - spec.t - 2.0;
  const towerD = outHalf - towerBack;
  let tower = boxBrush(oledTowerW(), towerD, z1 - z0,
                       0, outHalf - towerD / 2, z0, 0, m);
  if (P.shape !== 'circle')
    tower = inter(tower, extrude(baseShape(-proud), z1 - z0 + 0.2, z0 - 0.1));
  return tower;
}

// 분리형 포드가 지나가는 벽 개구와 U자 가이드 레일. zShift로 각 층 로컬 좌표에 맞춘다.
function oledPodSocket(b, zShift, clipZ0, clipZ1, ridgeZ) {
  const spec = oledSpec();
  const { m, seatY, innerFace, outHalf } = oledFrame();
  const towerBack = seatY - spec.t - 2.0;
  const zR = oledCaseBaseZ() + zShift;
  const zTop = oledTowerTop() + zShift;
  const railH = Math.min(8, Math.max(0, zTop - zR));
  const hx = oledTowerW() / 2 + POD.clr;
  if (railH > 0.1) {
    let rails = boxBrush(POD.railT, 4.5, railH, hx + POD.railT / 2, towerBack + 2.05, zR, 0, m);
    rails = add(rails, boxBrush(POD.railT, 4.5, railH, -(hx + POD.railT / 2), towerBack + 2.05, zR, 0, m));
    rails = add(rails, boxBrush(2 * hx + 2 * POD.railT, POD.railT, railH,
                                0, towerBack - POD.clr - POD.railT / 2, zR, 0, m));
    rails = inter(rails, extrude(baseShape(0), clipZ1 - clipZ0, clipZ0));
    b = add(b, rails);
  }
  const tw = oledTongueW() + 2 * POD.clr;
  // 외벽은 좁은 텅만 통과시키되, 벽 안쪽은 넓은 포드 몸통과 어깨가 층 경계를 지나도록 비운다.
  const bodyBack = towerBack - POD.clr;
  const bodyFront = innerFace + 0.2;
  b = sub(b, boxBrush(2 * hx, bodyFront - bodyBack, zTop - zR + 0.8,
                      0, (bodyFront + bodyBack) / 2, zR - 0.2, 0, m));
  b = sub(b, boxBrush(tw, P.wall + 3.2, zTop - zR + 0.8,
                      0, outHalf + P.oledProud + 1 - (P.wall + 3.2) / 2, zR - 0.2, 0, m));
  if (zR < ridgeZ + RIDGE_H && zTop > ridgeZ) {
    b = sub(b, boxBrush(tw + 0.4, P.wall + 3, RIDGE_H + 0.4,
                        0, outHalf + 0.5 - (P.wall + 3) / 2, ridgeZ - 0.05, 0, m));
  }
  return b;
}

function buildFloor2() {
  let b = extrude(baseShape(0), F2_PLATE);                            // 일반 바닥판 0.8mm
  b = add(b, ringBrush(0, P.wall, P.f2H - F2_PLATE, F2_PLATE));
  b = add(b, topRidge(P.f2H));

  // 원형 모드: 동쪽 벽에 플랫 USB 패드 (사진 참조 디자인) — 곡면을 깎고 평평한 벽 세그먼트로 대체
  if (P.shape === 'circle') {
    const fx = flatPadX();
    const padTop = Math.max(8, P.f2H - 2.5);   // USB 구멍(상단 7.2)을 덮되 상단 림은 원형 유지
    // 평평한 벽 세그먼트: 바닥(z0)까지 내림 — 하단 결합 홈이 자연스럽게 관통해 박편이 안 생김
    b = add(b, boxBrush(USB_PAD.t, USB_PAD.w, padTop, fx - USB_PAD.t / 2, 0, 0));
    // 곡면 컷은 결합부(z<2.0) 위에서만 → 하단 링·스커트 온전히 보존
    b = sub(b, boxBrush(10, USB_PAD.w, padTop - 2.0, fx + 5, 0, 2.0));
  }

  // 포켓
  const ef = espFoot();
  const espLifted = espLiftActive();   // 2.5층: 레일 또는 4핀 헤더로 공중 배치
  // 일반 바닥은 실제로 0.8mm만 남기고, 부품 포켓 둘레만 기존 플랫폼 꼭대기
  // (4.2mm)까지 올려 포켓 깊이와 안착 위치를 보존한다.
  const seatPad = (w, d, cx, cy, r = 1.2) => {
    const margin = F2_PAD_MARGIN;
    const z0 = F2_PLATE;
    let pad = boxBrush(w + 2 * margin, d + 2 * margin, F2_PAD_HEIGHT + 0.05,
                       cx, cy, z0 - 0.05, r);
    pad = inter(pad, extrude(baseShape(P.wall), F2_PAD_HEIGHT + 0.15, z0 - 0.1));
    b = add(b, pad);
  };
  if (!espLifted) {
    const dk = noBat() ? espDock() : null;
    seatPad(dk ? ESP.l + POCKET_CLR : ef.w, dk ? ESP.w + POCKET_CLR : ef.d,
            dk ? dk.x : P.espX, dk ? dk.y : P.espY);
  }
  if (!noBat()) {
    const mc = modCenter(), mod = modSpec();
    seatPad(mod.l + 1.2 - MOD_POCKET_FRONT_INSET, mod.w + POCKET_CLR, mc.x - 1, mc.y);
  }
  if (batStand()) {
    const bs = batSpec();
    seatPad(bs.T + bs.clr, bs.L + bs.clr, P.batX, 0);
  }
  if (P.bzOn && (P.bzMount === 'f2' || P.bzMount === 'f2s')) {
    if (P.bzMount === 'f2') {
      const diameter = BZ.d + 2 * (BZ.clr + BZ.wall);
      seatPad(diameter, diameter, P.bzX, P.bzY, diameter / 2);
    } else {
      seatPad(BZ.h + 0.5, BZ.d + 2 * BZ.clr, P.bzX, P.bzY, 3);
    }
  }
  // NFC 스티커는 기본값에서 z=0.6~1.1mm에 묻힌다. 0.8mm 일반판 안에는
  // 들어가지 않으므로 그 자리만 기존 2.0mm 높이로 받쳐 포켓을 그대로 보존한다.
  if (nfcFits() && !nfcOnF1()) {
    const diameter = P.nfcD + 1.2;
    let boss = boxBrush(diameter, diameter, F2_PART_BASE - F2_PLATE + 0.05,
                        P.nfcX, P.nfcY, F2_PLATE - 0.05, diameter / 2);
    boss = inter(boss, extrude(baseShape(P.wall), F2_PART_BASE - F2_PLATE + 0.15,
                               F2_PLATE - 0.1));
    b = add(b, boss);
  }
  // OLED 타워/분리 포드 소켓의 밑부분도 기존 z=2.0 기준까지 받쳐 둔다.
  if (P.oledSide !== 'none') {
    let oledFoot = oledProtectBrush(F2_PLATE - 0.05,
                                    F2_PART_BASE - F2_PLATE + 0.05);
    oledFoot = inter(oledFoot, extrude(baseShape(0), F2_PART_BASE - F2_PLATE + 0.15,
                                       F2_PLATE - 0.1));
    b = add(b, oledFoot);
  }
  // 세움: 실물 메시(USB 모양 포함)를 팽창시켜 그대로 절삭 → 꽂아서 고정
  // 배터리 없음: 충전모듈 자리에 도킹 (USB 끝이 벽 안쪽면에 붙음)
  const espPocket = () => {
    if (espStand())   // 세움은 보드가 이미 드러나 있어 집게 홈 불필요
      return meshBrush(espStandGeo(true), new THREE.Matrix4().makeTranslation(P.espX, P.espY, espBaseZ()));
    const dk = noBat() ? espDock() : null;
    const cx = dk ? dk.x : P.espX, cy = dk ? dk.y : P.espY;
    const w = dk ? ESP.l + POCKET_CLR : ef.w, d = dk ? ESP.w + POCKET_CLR : ef.d;
    let cut = boxBrush(w, d, F2_PLATFORM + 2, cx, cy, F2_PART_BASE + P.espZ, 1.5);
    if (P.espGripOn) cut = add(cut, espGripCut(cx, cy, w, d));
    // 핀 2열은 보드 길이축을 따라간다 (도킹은 항상 X축, 평면 배치는 회전 반영)
    if (P.solderOn) cut = add(cut, espSolderCut(cx, cy, dk ? true : P.espRot !== 90));
    return cut;
  };
  if (!espLifted) b = sub(b, espPocket());

  // 2.5층 받침 선(빔): 벽에서 벽까지 한 줄로 가로지르고, 보드 자리만 24mm 홈을 파냄 —
  // 보드가 홈에 안착해 공중에 뜨고(양끝 턱이 잡음), 옆 공간 아래로 충전모듈이 지나감
  if (espLifted) {
    const beamW = 8, shoulderH = LIFT_SHOULDER_H;    // 선 폭 / 홈 양끝 턱 높이
    const topZ = espLiftTopZ();                         // 홈 바닥 = 보드 바닥
    const rot90 = P.espRot === 90;
    const span = P.W + effD();                      // 넉넉히 → 외곽으로 잘림
    // 받침선은 얇아진 바닥판까지 내려 연결해 공중 브리지가 생기지 않게 한다.
    let beam = rot90
      ? boxBrush(beamW, span, topZ + shoulderH - F2_PLATE, P.espX, 0, F2_PLATE)
      : boxBrush(span, beamW, topZ + shoulderH - F2_PLATE, 0, P.espY, F2_PLATE);
    // USB 앵커 블록: 셸(9×9)이 받침선보다 넓어서 그 자리만 넓힘
    beam = add(beam, rot90
      ? boxBrush(13, 11, topZ - F2_PLATE, P.espX, P.espY + USB_C_OFF, F2_PLATE, 1)
      : boxBrush(11, 13, topZ - F2_PLATE, P.espX + USB_C_OFF, P.espY, F2_PLATE, 1));
    beam = inter(beam, extrude(baseShape(0), topZ + shoulderH, 0));   // 벽 곡면 따라 자르고 벽과 융합
    b = add(b, beam);
    // 홈: 보드 길이(24)만큼만 턱을 파내서 끼움
    const slotL = ESP.l + espBarClearance();
    b = sub(b, rot90
      ? boxBrush(beamW + 2, slotL, shoulderH + 1, P.espX, P.espY, topZ)
      : boxBrush(slotL, beamW + 2, shoulderH + 1, P.espX, P.espY, topZ));
    // USB 반대쪽(-길이축) 턱만 높인다. 보드 아래 부품/USB 실루엣 절삭은 그대로 둔다.
    const rearInner = (rot90 ? P.espY : P.espX) - slotL / 2;
    // 4핀 헤더가 보드를 고정할 때는 높은 뒤쪽 턱이 3층 스위치 컵과 겹치므로 생략한다.
    // 일반 레일 모드에서는 요청한 3mm 추가 높이를 그대로 유지한다.
    if (!espHeader4Active()) {
      let rearPlate = rot90
        ? boxBrush(beamW, LIFT_REAR_W, LIFT_REAR_RISE + 0.05,
                   P.espX, rearInner - LIFT_REAR_W / 2,
                   topZ + shoulderH - 0.05)
        : boxBrush(LIFT_REAR_W, beamW, LIFT_REAR_RISE + 0.05,
                   rearInner - LIFT_REAR_W / 2, P.espY,
                   topZ + shoulderH - 0.05);
      rearPlate = inter(rearPlate, extrude(baseShape(0),
                            topZ + shoulderH + LIFT_REAR_RISE + 0.2, 0));
      b = add(b, rearPlate);
    }
    if (espHeader4Active()) {
      // 사진 기준 USB 쪽 끝의 5V·GND·3V3·GPIO4 연속 4핀.
      // 보드를 Y축으로 뒤집었으므로 로컬 X가 반전되고, 90° 회전도 그대로 적용한다.
      const headerPins = [ESP_PINS['5V'], ESP_PINS.GND, ESP_PINS['3V3'], ESP_PINS[4]]
        .map(([dx, dy]) => rot90
          ? [P.espX - dy, P.espY - dx]
          : [P.espX - dx, P.espY + dy]);
      const xs = headerPins.map(p => p[0]), ys = headerPins.map(p => p[1]);
      const railL = Math.max(Math.max(...xs) - Math.min(...xs),
                             Math.max(...ys) - Math.min(...ys)) + 2 * ESP_HEADER4.endWall;
      const railX = (Math.min(...xs) + Math.max(...xs)) / 2;
      const railY = (Math.min(...ys) + Math.max(...ys)) / 2;
      let socket = rot90
        ? boxBrush(ESP_HEADER4.railW, railL, ESP_HEADER4.pinBelow + 0.05,
                   railX, railY, F2_PLATE - 0.05, 0.7)
        : boxBrush(railL, ESP_HEADER4.railW, ESP_HEADER4.pinBelow + 0.05,
                   railX, railY, F2_PLATE - 0.05, 0.7);
      socket = inter(socket, extrude(baseShape(P.wall), ESP_HEADER4.pinBelow + 0.2,
                                     F2_PLATE - 0.1));
      b = add(b, socket);
      // 3.7mm 핀이 끝까지 들어가되 0.75mm 바닥 스킨은 남긴다.
      for (const [x, y] of headerPins) {
        let hole = cylBrush(ESP_HEADER4.holeD / 2,
                            ESP_HEADER4.pinBelow + 0.15, F2_PLATE - 0.05, 28);
        hole = hole.translate([x, y, 0]);
        b = sub(b, hole);
      }
    }
    // 보드는 뒤집어(USB 아래) 안착 — USB/부품 밑면 실루엣을 실물 메시로 절삭 → 꽂아서 고정
    b = sub(b, meshBrush(espLiftGeo(true),
                         new THREE.Matrix4().makeTranslation(P.espX, P.espY, topZ - LIFT_SINK)));
    // 실물 USB 셸 9×9×2.5mm를 따라 둥근 단면으로 통째로 절삭한다.
    // 바닥 방향 2.2mm와 상단 0.4mm 여유를 주되 0.8mm 밑면은 남긴다.
    const usbFloorZ = Math.max(LIFT_USB_MIN_SKIN, topZ - LIFT_SINK - LIFT_USB_EXTRA_DEPTH);
    const usbReliefTop = topZ - LIFT_SINK + LIFT_USB_SHELL_H + LIFT_USB_TOP_CLR;
    if (usbReliefTop > usbFloorZ) {
      b = sub(b, liftedUsbShellCut(P.espX + (rot90 ? 0 : USB_C_OFF),
                                    P.espY + (rot90 ? USB_C_OFF : 0),
                                    usbFloorZ, usbReliefTop, rot90));
    }
    // 립은 USB 절삭 홈 반폭(4.9mm) 밖에 두어 커넥터가 눌려 뜨지 않게 한다.
    const lipIn = 4.9, lipW = 1.3, lipH = 0.9, lipL = 5;
    for (const s of [-1, 1]) {
      b = add(b, rot90
        ? boxBrush(lipW, lipL, lipH, P.espX + s * (lipIn + lipW / 2), P.espY + USB_C_OFF, topZ - lipH)
        : boxBrush(lipL, lipW, lipH, P.espX + USB_C_OFF, P.espY + s * (lipIn + lipW / 2), topZ - lipH));
    }
  }
  // 충전모듈 포켓: USB 셸은 전용 관통 구멍에 들어가므로 PCB 홈의 앞면만 0.8mm 물린다.
  // 뒤쪽 1.2mm 여유는 유지한다. 앞 모서리를 둥글리면 목표 0.4mm보다
  // 벽살이 더 두꺼워지므로 포켓은 직각으로 절삭한다.
  if (!noBat()) {
    const mc = modCenter();
    const mod = modSpec();
    const pocketBackClear = 1.2;
    b = sub(b, boxBrush(mod.l + pocketBackClear - MOD_POCKET_FRONT_INSET,
                        mod.w + POCKET_CLR, F2_PLATFORM + 2,
                        mc.x - (pocketBackClear + MOD_POCKET_FRONT_INSET) / 2,
                        mc.y, F2_PART_BASE));
  }

  // 세움 배터리 소켓 홈: 플랫폼을 관통해 바닥판 위에 세워서 꽂음 (두께×길이 세로 슬롯)
  if (batStand()) {
    const bs = batSpec();
    b = sub(b, boxBrush(bs.T + bs.clr, bs.L + bs.clr, F2_PLATFORM + 2,
                        P.batX, 0, F2_PART_BASE, 1.5));
  }

  // OLED 소켓 타워 — 2층 높이와 무관하게 항상 OLED가 다 들어가는 높이.
  // 2층 벽보다 높으면 3층 뚜껑의 노치(cutout)에 끼워짐 → 조립 키 역할.
  if (P.oledSide !== 'none') {
    if (P.oledPodOn) {
      // 창·포켓·핀은 포드 쪽, 케이스에는 벽 개구와 U자 가이드 레일만 둔다.
      b = oledPodSocket(b, 0, 0, P.f2H, P.f2H);
    } else {
      const z0 = Math.max(0, oledCaseBaseZ());
      if (oledTowerTop() > z0) b = add(b, oledTowerSection(z0, oledTowerTop()));
      b = oledCavityCut(b, true, 0, 0, oledTowerTop() + 1);   // 포켓 + 창 + 핀
      // ESP32 포켓 우선: 타워 add로 메워진 부분을 다시 파내 ESP32 홈을 확보
      if (!espLifted) b = sub(b, espPocket());
    }
  }

  // USB-C 구멍 — 배터리 없음이면 ESP32 USB 정면, 아니면 충전모듈 USB 정면 (원형이면 플랫 패드 관통)
  {
    const dk = noBat() ? espDock() : modCenter();
    const usbZ = noBat() ? ESP.usbZ + P.espZ : modSpec().usbZ;   // 도킹: 구멍도 espZ 따라 통째로 이동
    const circ = P.shape === 'circle';
    const outerX = circ
      ? flatPadX()
      : surfAt(Math.abs(dk.y) + 5.5, effD() / 2, P.W / 2, 0);
    // 깔때기 목구멍(가장 좁은 지점) 위치 — usbThroat 이 0이면 벽 안쪽면에 딱 맞춰 최대한 전진,
    // 값을 키우면 그만큼 안쪽으로 물러난다. 목이 앞으로 나올수록 그 뒤가 뻥 뚫려서
    // 플러그 오버몰드가 들어갈 자리가 생긴다. 벽 안쪽면보다 더 나가면 구멍이 안 뚫리므로 상한.
    const throat = dk.edgeX - P.usbThroat;
    const L = Math.max(3.0, outerX + 0.4 - throat);   // 원본 툴 길이 9 기준
    // z 스케일: 툴 조임부 실측 3.8 → 3.5 (셸 3.2 + 0.3) — 보드가 포켓 바닥에 앉아 위쪽만 뜨는 것 교정
    const usbM = new THREE.Matrix4()
      .makeTranslation(outerX + 0.4 - L / 2, dk.y, F2_PART_BASE + usbZ)
      .multiply(new THREE.Matrix4().makeScale(L / 9, 1, 3.5 / 3.8));
    b = sub(b, meshBrush(ASSETS.usb, usbM));

    // 충전모듈 쪽은 외벽을 평평하게 두고 실제 USB 구멍만 남긴다.
    // 배터리 없는 ESP32 직결 모드에서만 선택형 외벽 리세스를 유지한다.
    if (noBat() && P.usbThin) {
      const wallAtPort = circ ? USB_PAD.t : P.wall;
      const depth = Math.min(wallAtPort - P.usbWallT, wallAtPort - USB_MIN_WALL);
      const zHi = Math.min(P.f2H - RIDGE_H - 0.4,
                           circ ? Math.max(8, P.f2H - 2.5) - 0.4 : Infinity);
      const rz0 = RABBET.d + 0.5;
      const rw = circ ? Math.min(USB_REC.w, USB_PAD.w - 4) : USB_REC.w;
      if (depth > 0.05 && zHi - rz0 >= 3) {
        const rh = zHi - rz0;
        const cut = circ
          ? boxBrush(depth + 6, rw, rh, outerX + 3 - depth / 2, dk.y, rz0, 1.5)
          : inter(boxBrush(20, rw, rh, outerX, dk.y, rz0, 1.5),
                  sub(extrude(baseShape(0), rh + 2, rz0 - 1),
                      extrude(baseShape(depth), rh + 4, rz0 - 2)));
        b = sub(b, cut);
      }
    }
  }

  // 배터리 배선 구멍 (긴 슬롯 — +/− 두 가닥이 함께 통과, 가로/세로 회전 가능)
  if (!noBat()) {
    const { w, d } = wireSlotSize();
    b = sub(b, boxBrush(w, d, F2_PART_BASE + F2_PLATFORM + 1, P.wireX, P.wireY, -0.4, 2.4));
  }

  // 피에조 부저 소켓 (2층 바닥): 플랫폼 리세스 1.8 + 가이드 링, 왼쪽으로 전선 T자 홈
  if (P.bzOn && P.bzMount === 'f2') {
    const zP = F2_PART_BASE + F2_PLATFORM;
    let ring = sub(bzTube(BZ.d / 2 + BZ.clr + BZ.wall, BZ.ring, zP),
                   bzTube(BZ.d / 2 + BZ.clr, BZ.ring + 0.4, zP - 0.2));
    ring = inter(ring, extrude(baseShape(0), zP + BZ.ring + 1, 0));   // 벽 곡면 따라 잘림
    b = add(b, ring);
    b = sub(b, bzTube(BZ.d / 2 + BZ.clr, BZ.sink + 0.05, zP - BZ.sink));
    // 홈을 소켓 바닥에서 링 꼭대기까지 완전히 열어, 아래에 숨은 채널이 아니라
    // 스크린샷처럼 받침 표면에도 왼쪽 출구가 보이도록 한다.
    const cable = bzCableTSpec();
    const wireZ0 = F2_PLATE + 0.05, wireZ1 = zP + BZ.ring + 0.25;
    const wireH = wireZ1 - wireZ0;
    let wireT = boxBrush(cable.barW, cable.barL, wireH,
                         P.bzX, P.bzY, wireZ0, 0.5);
    const overlap = 0.3;
    const stemL = cable.stemOut - cable.barW / 2 + overlap;
    wireT = add(wireT, boxBrush(stemL, cable.stemW, wireH,
      P.bzX - (cable.stemOut + cable.barW / 2 - overlap) / 2,
      P.bzY, wireZ0, 0.5));
    // 케이스 외벽·결합 홈은 침범하지 않는다.
    wireT = inter(wireT, extrude(baseShape(P.wall), wireH + 0.2, wireZ0 - 0.1));
    b = sub(b, wireT);
    // 몸통 리세스 바닥에서 2층 밑면까지 핀 두 개가 빠져나가도록 관통한다.
    for (const sign of [-1, 1])
      b = sub(b, bzPinHole(P.bzX + sign * P.bzPinPitch / 2, P.bzY,
                           -0.2, zP - BZ.sink + 0.4));
  }

  // 피에조 부저 눕힘 (2층 바닥): ESP32 포켓처럼 플랫폼에 반원 홈만 파냄 (sideSink 파묻힘, 축 = X)
  if (P.bzOn && P.bzMount === 'f2s') {
    const zc = F2_PART_BASE + F2_PLATFORM - BZ.sideSink + BZ.d / 2;   // 눕힌 축 높이
    const c = new THREE.CylinderGeometry(BZ.d / 2 + BZ.clr, BZ.d / 2 + BZ.clr, BZ.h + 0.5, 48);
    c.rotateZ(Math.PI / 2);
    c.translate(P.bzX, P.bzY, zc);
    c.deleteAttribute('uv');
    b = sub(b, toMan(c));
    // 눕힌 몸통의 +X 끝면에서 나오는 두 핀을 축방향으로 받아준다.
    for (const sign of [-1, 1])
      b = sub(b, bzPinHole(P.bzX + BZ.h / 2 - 0.2, P.bzY,
                           zc + sign * P.bzPinPitch / 2, 4.2, true));
    // 눕힌 부저에서 나온 전선을 ESP32의 낮은 안착면 윗부분에 놓는
    // 얕은 반원형 T자 홈. 기존 Ø1.5 선 구멍과 같은 굵기로 이어 파낸다.
    if (espLifted && P.espRot !== 90) {
      const pinX = P.bzX + BZ.h / 2 - 0.2;
      const tailX = pinX + 4.2 - 0.5; // 기존 아래쪽 핀 구멍 끝과 0.5mm 겹침
      const headX = P.espX + USB_C_OFF - LIFT_USB_SHELL_SIDE / 2
                    - LIFT_USB_FIT_CLR - 0.1; // USB 셸 파임 바로 왼쪽
      if (headX > tailX + 2.5) {
        const cableY = P.bzY;
        const headY = Math.abs(P.espY - P.bzY) <= 1.4 ? P.espY : P.bzY;
        const headL = 8.8, radius = P.bzPinD / 2;
        const seatTop = F2_PART_BASE + P.espLift + P.espZ;
        const tubeZ = seatTop - 0.1; // 기존 아래쪽 핀 구멍과 연결, 윗면 홈 깊이 ≈0.85mm
        const tube = (length, x, y, alongX) => {
          const c = new THREE.CylinderGeometry(radius, radius, length, 32);
          if (alongX) c.rotateZ(Math.PI / 2);
          c.translate(x, y, tubeZ);
          c.deleteAttribute('uv');
          return toMan(c);
        };
        const stemRight = headX + 1.2; // USB 하부 파임에는 최소한만 이어짐
        let wireT = tube(stemRight - tailX, (tailX + stemRight) / 2, cableY, true);
        wireT = add(wireT, tube(headL, headX, headY, false));
        b = sub(b, wireT);
      }
    }
  }

  // NFC 스티커 포켓 (2층 바닥판) — 1층으로 옮겼으면 여기서는 파지 않는다. nfcCut() 주석 참고
  if (nfcFits() && !nfcOnF1()) b = nfcCut(b);

  // 바닥 rabbet + 장식 — 돌출 포드 구간은 장식 홈이 포드 내부를 뚫지 않게 보호
  if (P.f1On) b = bottomJointCut(b);
  // 돌출 > 0, 원형(평면 포드가 곡면 밖으로 나옴), 분리 포드(개구 가장자리)면 보호 필요
  const podProtect = (P.oledSide !== 'none' && (P.oledProud > 0 || P.shape === 'circle' || P.oledPodOn)) ? () => {
    return oledProtectBrush(0, Math.max(0.1, oledTowerTop()));
  } : null;
  b = decoBands(b, [P.f2H * 0.3, P.f2H * 0.66], podProtect);
  return b;
}

// OLED 포켓 + 디스플레이 창 + (096) 위치결정 핀 — 내장 타워와 분리 포드가 공용으로 사용.
// withPegs: 핀은 벽쪽 안착면에 붙으므로 케이스(또는 내장 타워)에만 추가 — 포드에 넣으면 공중에 뜸
function oledCavityCut(b, withPegs, zShift = 0, clipZ0 = -100, clipZ1 = 100) {
  const spec = oledSpec();
  const { m, seatY, proud, outHalf } = oledFrame();
  const seatZ = oledSeatZ() + zShift;
  // 뒤에서 장착: OLED 전체가 내부에서 통째로 들어가는 포켓.
  // 뒷면은 완전 개방(뒷벽 관통), 앞은 seatY 평면 + 디스플레이 창이 잡아줌. 위는 막힘.
  const pocketD = spec.t + 2.2 + proud;   // 뒷벽까지 완전 관통 (돌출 시 삽입 터널 연장)
  b = sub(b, boxBrush(spec.w + 0.5, pocketD, spec.hgt + OLED_HCLR,
                      0, seatY - pocketD / 2, seatZ, 0, m));
  // 디스플레이 창 (seatY 평면에서 외벽까지 관통 — 곡면이면 깊은 터널)
  const winDepth = (outHalf - seatY) + P.wall + 2;
  const wg = new THREE.ExtrudeGeometry(rrShape(spec.winW, spec.winH, 1.5), { depth: winDepth, bevelEnabled: false, curveSegments: 12 });
  wg.deleteAttribute('uv');
  wg.rotateX(-Math.PI / 2);
  wg.translate(0, seatY - 0.8, seatZ + spec.winC);
  b = sub(b, toMan(wg, m));
  // 0.96": 모서리 4홀용 위치결정 핀 — 안착면에서 포켓으로 돌출.
  // px/pz = 가로/세로 홀 그리드, ox = 가로 중심 오프셋 (실피팅 보정)
  if (withPegs && spec.pegs) {
    const pg = spec.pegs;
    const zc = seatZ + spec.hgt / 2;   // 포켓 중심 높이
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const peg = new THREE.CylinderGeometry(pg.d / 2, pg.d / 2 - 0.2, pg.len, 12);
      peg.translate(pg.ox + sx * pg.px / 2, seatY - pg.len / 2 + 0.05,
                    zc + sz * pg.pz / 2);   // 실린더 축 = y (벽 → 내부 방향)
      peg.deleteAttribute('uv');
      let pin = toMan(peg, m);
      pin = inter(pin, boxBrush(200, 200, clipZ1 - clipZ0, 0, 0, clipZ0));
      b = add(b, pin);
    }
  }
  return b;
}

// 분리형 OLED 포드 (소켓형, 별도 출력): 내장 타워의 벽 부분까지 통째로 가진 블록.
// 몸통(폭 towerW)은 벽 안쪽면 − 0.05까지, 텅(폭 tongueW)은 벽 개구를 관통해 외곽면과 플러시.
// 어깨(몸통−텅 폭 차)가 벽 안쪽면에 걸려 밖으로 안 빠짐. 창·포켓·(096)핀 전부 포함.
// 플랫폼 위 안착, 세워서 그대로 출력 — 수직 형상이라 서포트 프리
function buildOledPod() {
  const spec = oledSpec();
  const { m, seatY, proud, outHalf } = oledFrame();
  const towerBack = seatY - spec.t - 2.0;
  const towerD = outHalf - towerBack;
  const tTop = oledTowerTop();
  const sill = oledCaseBaseZ();      // 내장형과 같은 케이스 바닥 — 최저 Z에서는 제품 바닥까지 연장
  // 몸통: 벽 안쪽 곡면 − 0.05까지만
  let b = boxBrush(oledTowerW(), towerD, tTop - sill, 0, outHalf - towerD / 2, sill, 0, m);
  b = sub(b, sub(extrude(baseShape(-proud - 2), tTop - sill + 2, sill - 0.5),
                 extrude(baseShape(P.wall + 0.05), tTop - sill + 2.4, sill - 0.7)));
  // 텅: 벽 두께를 관통해 외곽면(돌출 시 +proud)까지 — 원형은 평평한 앞면(내장형과 동일)
  const tD = P.wall + 2 + proud;
  let tongue = boxBrush(oledTongueW(), tD, tTop - sill, 0, outHalf + proud - tD / 2, sill, 0, m);
  if (P.shape !== 'circle') tongue = inter(tongue, extrude(baseShape(-proud), tTop, 0));
  b = add(b, tongue);
  b = oledCavityCut(b, true, 0, sill - 0.1, tTop + 0.1);   // 창 + 포켓 + (096) 위치결정 핀
  return b;
}

// OLED 뒷면 커버 (3층 로컬 좌표, 별도 출력): 하단 텅이 3층 상판 홈에 꽂히고
// 판이 타워 뒷면(0.15 유격)에 기대어 노출된 포켓 뒷면을 막음. 눕혀서 출력.
// OLED 쪽 앞면은 각지고 평평하게(딱 맞게), 뒤쪽(클리커 쪽) 세로 모서리만 둥글게
function buildOledCover() {
  const spec = oledSpec();
  const { m, seatY } = oledFrame();
  const towerBack = seatY - spec.t - 2.0;
  const topLocal = oledTowerTop() - P.f2H;      // 3층 로컬 타워 꼭대기
  const z0 = P.f3H - COVER.tab;                 // 텅이 홈에 1.5 삽입 (홈 바닥 여유 0.2)
  const h = topLocal - z0;
  // 앞판 (타워 쪽): 완전 각진 평면 — y towerBack−0.85 ~ −0.15
  let b = boxBrush(oledCoverW(), 0.7, h, 0, towerBack - 0.5, z0, 0, m);
  // 뒤판: 뒤쪽 세로 모서리만 둥글게 — y towerBack−1.35 ~ −0.45 (앞판과 겹쳐 union, 총 두께 1.2)
  b = add(b, boxBrush(oledCoverW(), 0.9, h, 0, towerBack - 0.9, z0, 0.45, m));
  // 세모 받침 리브 (뒤쪽 중앙): 아래는 텅 연장(홈에 같이 꽂힘), 위는 직각삼각 버팀
  const L = coverRibL();
  if (L > 1) {
    const backP = towerBack - 0.15 - COVER.t;
    b = add(b, boxBrush(COVER.ribW, L + 0.1, P.f3H - z0 + 0.05, 0, backP - L / 2 + 0.05, z0, 0, m));
    b = add(b, triPrism(L, coverRibH(), COVER.ribW, backP + 0.05, P.f3H - 0.05, m,
                        Math.min(1.2, coverRibH() * 0.5)));
  }
  return b;
}

function buildFloor3() {
  let b = ringBrush(0, P.wall, P.f3H, 0);                             // 벽
  b = add(b, extrude(baseShape(P.wall - 0.1), F3_PLATE, P.f3H - F3_PLATE)); // 상판
  // 스위치 보스 (뚜껑 꼭지처럼 봉긋한 받침)
  const bossTop = P.f3H + effBossH();
  if (effBossH() > 0.1) {
    // 더블이면 보스를 y로 늘려 두 스위치를 한 둔덕이 덮음
    b = add(b, boxBrush(21, 23 + (dbl() ? P.swGap : 0), effBossH(), 0, 0, P.f3H, 5));
  }
  // MX 스위치 홀더 (Key Holder V3 방식): 몸통 포켓 + 바닥에 중앙 1 + 구리선 4 구멍.
  // 더블(rect2)이면 y ±swGap/2 두 곳에 홀더 전체를 복제
  const seatZ = bossTop - P.standSink - SW.seatH;   // 스위치 몸통 바닥 안착면
  const cupBottom = seatZ - SW.floorT;
  for (const oy of swOffsets()) {
    // 컵 몸체: 보스/상판 아래로 매달리는 홀더 (기존 재료와 합쳐짐)
    b = add(b, boxBrush(SW.cup, SW.cup, bossTop - cupBottom, 0, oy, cupBottom, 3));
    // 몸통 포켓: 위로 개방 (보스 관통) — 가로/세로 실측이 달라 별도 슬라이더
    b = sub(b, boxBrush(P.swBodyX, P.swBodyY, P.standSink + SW.seatH + 2, 0, oy, seatZ, 1));
    // 포켓 귀퉁이 여유: 네 귀퉁이에 4×4 사각형을 놓고 파냄 — 각 사각형이 포켓 밖으로
    // x/y 각각 1mm씩만 삐져나와 몸통 모서리가 안 걸리게. 벽면 중앙 그립은 그대로 유지
    {
      const ch = P.standSink + SW.seatH + 2;
      const ccx = P.swBodyX / 2 + P.cornerOut - SW.cornerSq / 2;   // 귀퉁이 사각형 중심
      const ccy = P.swBodyY / 2 + P.cornerOut - SW.cornerSq / 2;
      for (const sx of [-1, 1]) for (const sy of [-1, 1])
        b = sub(b, boxBrush(SW.cornerSq, SW.cornerSq, ch, sx * ccx, oy + sy * ccy, seatZ));
    }
    // 바닥 구멍: 중앙 기둥 1 + 구리선 4, 아래로 갈수록 넓어지는 깔때기 (배선 삽입 유도)
    for (const [hx, hy, hd] of SW.holes) {
      const flare = hd > 4 ? 1.0 : 0.6;   // 깔때기: 작은 구리선 구멍은 플레어도 작게
      const cyl = new THREE.CylinderGeometry(hd / 2, hd / 2 + flare, SW.floorT + 1.2, 24);
      cyl.rotateX(Math.PI / 2);   // 축을 z로
      cyl.translate(hx, oy + hy, seatZ - SW.floorT / 2 - 0.05);
      cyl.deleteAttribute('uv');
      b = sub(b, toMan(cyl));
    }
  }

  // LED 구멍: 몸통+0.3 관통(실피팅 피드백: +0.2는 꽉 낌) — 원형은 아래에서 꽂으면
  // 플랜지가 상판 밑면에 정지, 돔 끝만 돌출. 사각 투톤(r25)은 플랜지 없이 2.3×5.3 구멍에
  // 마찰 끼움. 다리는 2층 ESP32로 (저항 150~220Ω 권장)
  if (P.ledOn) {
    const s = ledSpec();
    const len = F3_PLATE + effBossH() + 1;
    let cut;
    if (s.rect) {
      cut = new THREE.BoxGeometry(s.w + 0.3, s.t + 0.3, len);   // 핀 열 = X 방향
    } else {
      const r = s.d / 2 + 0.15;
      cut = new THREE.CylinderGeometry(r, r, len, 24);
      cut.rotateX(Math.PI / 2);
    }
    cut.translate(P.ledX, P.ledY, P.f3H - F3_PLATE + len / 2 - 0.5);
    cut.deleteAttribute('uv');
    b = sub(b, toMan(cut));
  }

  // 눕힌 부저(2층)의 상단이 2층 높이를 넘으면 3층의 겹치는 부분(홀더 컵·상판)도 같은 자리만큼 파냄
  if (P.bzOn && P.bzMount === 'f2s') {
    const zcW = F2_PART_BASE + F2_PLATFORM - BZ.sideSink + BZ.d / 2;   // 2층 로컬 축 높이
    if (zcW + BZ.d / 2 + BZ.clr > P.f2H) {
      const c = new THREE.CylinderGeometry(BZ.d / 2 + BZ.clr, BZ.d / 2 + BZ.clr, BZ.h + 0.6, 48);
      c.rotateZ(Math.PI / 2);
      c.translate(P.bzX, P.bzY, zcW - P.f2H);   // 3층 로컬로 변환
      c.deleteAttribute('uv');
      b = sub(b, toMan(c));
    }
  }

  // 피에조 부저 소켓 (3층 천장): 상판 밑면에서 내려오는 슬리브 — 상판은 뚫지 않음.
  // 부저(8.3)가 3층 내부 높이보다 크면 아래로 튀어나와 2층 공간을 씀 (경고 표시)
  if (P.bzOn && P.bzMount === 'f3') {
    const zTop = P.f3H - F3_PLATE;
    const d = Math.min(6, zTop - 0.2);
    let ring = sub(bzTube(BZ.d / 2 + BZ.clr + BZ.wall, d, zTop - d),
                   bzTube(BZ.d / 2 + BZ.clr, d + 0.2, zTop - d - 0.2));
    ring = inter(ring, extrude(baseShape(0), P.f3H, 0));
    b = add(b, ring);
  }

  // 딤섬 찜통 바닥: 상판에 대나무 슬랫 립 + 통풍 슬릿
  if (P.steamOn) b = steamerFloor(b);

  b = bottomJointCut(b);

  // OLED 타워 노치: 2층 타워가 뚜껑을 관통해 끼워지도록 커팅 (여유 0.4/측)
  if (P.oledSide !== 'none') {
    const { m, seatY, outHalf } = oledFrame();
    const cutTop = Math.min(oledTowerTop() - P.f2H + 0.8, P.f3H + effBossH() + 1);
    if (cutTop > 0) {
      const cutD = (outHalf - seatY) + oledSpec().t + 3.0;
      b = sub(b, boxBrush(oledTowerW() + 0.8, cutD, cutTop + 0.1,
                          0, outHalf + 0.5 - cutD / 2, -0.1, 0, m));
    }
    // 타워가 3층 상판보다 높으면 포켓 뒷면이 위로 노출됨 → 노치 뒤 상판에 커버 텅 홈을 파고,
    // 별도 파트(OLED 뒷면 커버)가 여기 꽂혀 노출부를 막음 (buildOledCover)
    if (oledCoverNeeded()) {
      const towerBack = seatY - oledSpec().t - 2.0;
      b = sub(b, boxBrush(oledCoverW() + 0.3, COVER.t + 0.4, COVER.tab + 0.2,
                          0, towerBack - 0.05 - (COVER.t + 0.4) / 2, P.f3H - COVER.tab - 0.1, 0, m));
      // 세모 받침을 받아주는 홈: 텅 홈에 연결된 리브 채널(아래) + 삼각 채널(위, 보스 구간 관통)
      const L = coverRibL();
      if (L > 1) {
        const backP = towerBack - 0.15 - COVER.t;
        b = sub(b, boxBrush(COVER.ribW + 0.3, L + 0.4, COVER.tab + 0.2,
                            0, backP - L / 2 + 0.05, P.f3H - COVER.tab - 0.1, 0, m));
        b = sub(b, triPrism(L + 0.5, coverRibH() * (1 + 0.5 / Math.max(L, 1)) + 0.4,
                            COVER.ribW + 0.3, backP + 0.2, P.f3H - 0.1, m));
      }
    }
  }

  // 딤섬 뚜껑 결합 홈: 층간 bottomJointCut과 동일 프로파일을 원(Ø41) 기준으로 상판에 컷 (위로 개방).
  // flip3 출력 시 홈이 바닥면을 향해 서포트 프리. 더블(스위치 2개)은 뚜껑 미지원이라 생략.
  if (P.lidOn && !dbl()) b = lidJointGroove(b);

  b = decoBands(b, [P.f3H * 0.4]);
  return b;
}

// 3층 상판 찜통 바닥: 대나무 찜기 바닥처럼 평행 슬랫(상판 위 0.8 돌출 립)을 깔고,
// 슬랫 사이 골에는 얕은 홈(관통 X — 속이 안 보이게)을 파서 음영 라인만 살린다.
// 립은 스위치 포켓·LED만 피하고 보스 옆면에 융합, 홈은 컵/보스·LED·뚜껑 결합 홈·벽 림을 피한다.
const STEAM = { ribW: 2.8, gap: 1.8, ribH: 0.8, grooveD: 1.0 };   // 슬랫 폭 / 골 폭 / 립 높이 / 골 홈 깊이
function steamerFloor(b) {
  const pitch = STEAM.ribW + STEAM.gap;
  const half = Math.max(P.W, effD()) / 2;
  const ledKeep = (margin, h, z0) => {
    const s = ledSpec();
    const r = s.fl / 2 + margin;
    const c = new THREE.CylinderGeometry(r, r, h, 24);
    c.rotateX(Math.PI / 2);
    c.translate(P.ledX, P.ledY, z0 + h / 2);
    c.deleteAttribute('uv');
    return toMan(c);
  };
  // y0 오프셋에서 pitch 간격으로 y방향 스트립들을 합친 브러시
  const strips = (w, h, z0, y0) => {
    let m = null;
    for (let y = y0; y <= half; y += pitch)
      for (const s of (y === 0 ? [1] : [-1, 1])) {
        const box = boxBrush(P.W + 4, w, h, 0, s * y, z0);
        m = m ? add(m, box) : box;
      }
    return m;
  };
  // --- 슬랫 립: 상판 위 돌출, 벽/뚜껑 홈 안쪽으로 트림 ---
  const rimR = LID.r - LID.bandW - 1.0;   // 뚜껑 결합 홈 안쪽 슬랫 경계 반지름
  const ringW = 1.6;                      // 테두리 링 폭
  let ribs = strips(STEAM.ribW, STEAM.ribH, P.f3H, 0);
  ribs = inter(ribs, extrude(baseShape(P.wall + 0.6), STEAM.ribH + 0.2, P.f3H - 0.1));
  if (P.lidOn && !dbl()) ribs = inter(ribs, cylBrush(rimR, STEAM.ribH + 0.2, P.f3H - 0.1));
  // 테두리 링: 슬랫 경계를 따라 립과 같은 높이로 두름 — 뒤집어 출력 시 립 끝과 한 평면 접지
  ribs = add(ribs, (P.lidOn && !dbl())
    ? cylRing(rimR, rimR - ringW, STEAM.ribH, P.f3H)
    : ringBrush(P.wall + 0.6, P.wall + 0.6 + ringW, STEAM.ribH, P.f3H));
  ribs = sub(ribs, boxBrush(17, 17 + (dbl() ? P.swGap : 0), STEAM.ribH + 0.4, 0, 0, P.f3H - 0.2));   // 스위치 포켓 + 귀퉁이 여유 (더블은 y로 확장)
  if (P.ledOn) ribs = sub(ribs, ledKeep(1.0, STEAM.ribH + 0.4, P.f3H - 0.2));
  b = add(b, ribs);
  // --- 골 홈: 골 자리에 얕게만 파냄 (관통 X — 아래 살이 남아 속이 안 보임, 링 안쪽까지만) ---
  const z0 = P.f3H - STEAM.grooveD, h = STEAM.grooveD + 0.2;
  let slits = strips(STEAM.gap - 0.2, h, z0, pitch / 2);
  slits = inter(slits, extrude(baseShape(P.wall + 0.6 + ringW), h + 0.2, z0 - 0.1));
  if (P.lidOn && !dbl()) slits = inter(slits, cylBrush(rimR - ringW, h + 0.2, z0 - 0.1));
  slits = sub(slits, boxBrush(24, 26 + (dbl() ? P.swGap : 0), h + 0.4, 0, 0, z0 - 0.2, 6));          // 컵/보스 보호 (더블 확장)
  if (P.ledOn) slits = sub(slits, ledKeep(1.6, h + 0.4, z0 - 0.2));
  return sub(b, slits);
}

// 원형 링 (뚜껑 결합부용): rOut~rIn 도넛
const cylRing = (rOut, rIn, h, z0) => sub(cylBrush(rOut, h, z0), cylBrush(rIn, h + 0.2, z0 - 0.1));

// 부저 위치(bzX, bzY) 기준 원기둥
function bzTube(r, h, z0) {
  const c = new THREE.CylinderGeometry(r, r, h, 48);
  c.rotateX(Math.PI / 2);
  c.translate(P.bzX, P.bzY, z0 + h / 2);
  c.deleteAttribute('uv');
  return toMan(c);
}

function bzPinHole(x, y, z0, length, alongX = false) {
  const c = new THREE.CylinderGeometry(P.bzPinD / 2, P.bzPinD / 2, length, 20);
  if (alongX) {
    c.rotateZ(Math.PI / 2);
    c.translate(x + length / 2, y, z0);
  } else {
    c.rotateX(Math.PI / 2);
    c.translate(x, y, z0 + length / 2);
  }
  c.deleteAttribute('uv');
  return toMan(c);
}

// 3층 상판의 뚜껑 홈: bottomJointCut과 동일한 사각 프로파일, 원(Ø41) 기준·위로 개방 미러.
// Ø41 케이스면 홈이 벽 상단을 지나며 바깥 살 0.7이 남음 — 층간 결합부와 동일한 형태.
// 재료가 없는 곳은 no-op이라 케이스 크기와 무관하게 항상 컷.
function lidJointGroove(b) {
  return sub(b, cylRing(LID.r - RABBET.out, LID.r - LID.bandW - 0.6, RABBET.d + 0.05,
                        P.f3H - RABBET.d));
}

// 뚜껑 밑면의 결합 턱: topRidge와 동일한 사각 프로파일, 아래로 내림 미러
// (z0~RIDGE_H, 림 밑면 = RIDGE_H). 뚜껑은 무게와 rabbet 마찰로 잡는다.
function lidJointRidge() {
  const o = RABBET.out + P.fitClr;
  return cylRing(LID.r - o, LID.r - o - RIDGE_W, RIDGE_H, 0);
}

// 딤섬 뚜껑: 결합 턱(z0~1.5) + 스트레이트 밴드(높이 lidH, 벽 2.3) + bun_lid 디자인 원본.
// 림(z1.5)이 3층 상판 위에 얹히고 턱이 홈에 꽂힘(층간 결합과 동일, 깊이 여유 0.3).
// 돔 위로 그대로 출력 — 턱이 바닥부터 쌓이고 림 오버행은 0.8mm 이내
function buildLid() {
  let b = sub(cylBrush(LID.r, P.lidH + 0.1, RIDGE_H),                          // 밴드
              cylBrush(LID.r - LID.bandW, P.lidH + 0.4, RIDGE_H - 0.15));
  b = add(b, lidJointRidge());                                                 // 결합 턱
  b = add(b, meshBrush(ASSETS.bunLid,
                       new THREE.Matrix4().makeTranslation(0, 0, RIDGE_H + P.lidH), 1e-6));
  // OLED 타워가 3층을 넘어 뚜껑 높이까지 오면 뚜껑에도 같은 실루엣 노치 (3층 노치와 동일 여유 0.4/측)
  if (P.oledSide !== 'none') {
    const over = oledTowerTop() - (P.f2H + P.f3H - RIDGE_H);   // 뚜껑 local z 기준 침범 높이
    if (over > -0.5) {
      const { m, seatY, outHalf } = oledFrame();
      const cutD = (outHalf - seatY) + oledSpec().t + 3.0;
      b = sub(b, boxBrush(oledTowerW() + 0.8, cutD, over + 0.9,
                          0, outHalf + 0.5 - cutD / 2, -0.1, 0, m));
    }
  }
  return b;
}

// ------------------------------------------------------------------
// 고스트 부품 배치
// ------------------------------------------------------------------
let showGhosts = true, xray = false;
function ghostMesh(geo, mat, matrix) {
  const m = new THREE.Mesh(geo, mat);
  if (matrix) m.applyMatrix4(matrix);
  m.visible = showGhosts;
  m.userData.ghost = true;
  return m;
}
const T = (x, y, z, rotZ = 0) => {
  const m = new THREE.Matrix4().makeRotationZ(rotZ);
  m.setPosition(x, y, z);
  return m;
};

function placeGhosts() {
  // 배터리: 눕혀서 1층 / 세워서 2층 소켓 (배터리 없음이면 생략)
  if (!noBat()) {
    const bs = batSpec();
    if (batStand()) {
      const bg = new THREE.BoxGeometry(bs.T, bs.L, bs.W);
      bg.translate(0, 0, bs.W / 2);
      G[1].add(ghostMesh(bg, MATS.bat, T(P.batX, 0, F2_PART_BASE)));
    } else if (P.batType === '520') {
      G[0].add(ghostMesh(ASSETS.bat, MATS.bat,
                         T(0, 0, F1_PLATE, batFlatRot() ? Math.PI / 2 : 0)));   // 실물 STL
    } else {
      const bg = new THREE.BoxGeometry(batFlatRot() ? bs.W : bs.L,
                                       batFlatRot() ? bs.L : bs.W, bs.T); // 650 눕힘: 박스 고스트
      bg.translate(0, 0, bs.T / 2);
      G[0].add(ghostMesh(bg, MATS.bat, T(0, 0, F1_PLATE)));
    }
  }
  // 2층
  if (noBat()) {
    // 도킹: 충전모듈처럼 USB를 +X(동쪽 벽 구멍)로 돌려 안착
    const dk = espDock();
    const eg = ASSETS.esp.clone();
    eg.rotateZ(Math.PI);
    eg.translate(ESP.l / 2, ESP.w / 2, 0);      // 중심 (0,0) 정렬
    G[1].add(ghostMesh(eg, MATS.esp, T(dk.x, dk.y, F2_PART_BASE + P.espZ)));
  } else if (espStand()) {
    G[1].add(ghostMesh(espStandGeo(), MATS.esp, T(P.espX, P.espY, espBaseZ())));
  } else if (espLiftActive()) {
    // 2.5층: 뒤집힌 보드가 받침선 홈에 안착 (USB 실루엣 매립)
    G[1].add(ghostMesh(espLiftGeo(), MATS.esp,
                       T(P.espX, P.espY, espLiftTopZ() - LIFT_SINK)));
  } else {
    const rot = P.espRot === 90 ? Math.PI / 2 : 0;
    const eg = ASSETS.esp.clone();
    eg.translate(-ESP.l / 2, -ESP.w / 2, 0);   // 중심 정렬 후 회전
    G[1].add(ghostMesh(eg, MATS.esp, T(P.espX, P.espY, F2_PART_BASE + P.espZ, rot)));
  }
  if (!noBat()) {
    const mc = modCenter();
    const mod = modSpec();
    if (P.modType === 'tp4056') {
      // 전용 STL이 없어 실측 외형(PCB + USB-C 셸)을 보수적인 고스트로 표시한다.
      const pcb = new THREE.BoxGeometry(mod.l, mod.w, 1.2);
      pcb.translate(0, 0, 0.6);
      G[1].add(ghostMesh(pcb, MATS.mod, T(mc.x, mc.y, F2_PART_BASE)));
      const usb = new THREE.BoxGeometry(3.5, 8.8, 2.8);
      usb.translate(mod.l / 2 - 0.75, 0, mod.usbZ);
      G[1].add(ghostMesh(usb, MATS.mod, T(mc.x, mc.y, F2_PART_BASE)));
    } else {
      const mg = ASSETS.mod.clone();
      mg.rotateZ(Math.PI);                        // USB를 +X로
      mg.translate(mod.l / 2, mod.w / 2, 0);      // 중심 (0,0) 정렬
      G[1].add(ghostMesh(mg, MATS.mod, T(mc.x, mc.y, F2_PART_BASE)));
    }
  }
  if (P.oledSide !== 'none') {
    const spec = oledSpec();
    const { m, seatY } = oledFrame();
    let og;
    if (P.oledType === '096') {   // 0.96"은 STL이 없어 간단 박스 고스트
      og = new THREE.BoxGeometry(spec.w, spec.t, spec.hgt);
      og.translate(0, seatY - spec.t / 2 - 0.15, oledSeatZ() + spec.hgt / 2);
    } else {
      og = ASSETS.oled.clone();
      og.translate(-spec.w / 2, seatY - spec.t - 0.15, oledSeatZ());
    }
    og.applyMatrix4(m);
    G[1].add(ghostMesh(og, MATS.oled));
  }
  // 3층: MX 스위치(실물) + 딤섬 캐릭터
  const seatZ3 = P.f3H + effBossH() - P.standSink - SW.seatH;
  for (const oy of swOffsets()) {
    const sg = ASSETS.switch.clone();
    sg.rotateZ(Math.PI);   // 핀 배치를 홀더 구멍(180° 장착 기준)에 정렬
    G[2].add(ghostMesh(sg, MATS.stand, T(0, oy, seatZ3 - SW.pinLen)));
    // 캐릭터: 바닥 공동(17.9각×10.7)이 스위치를 통째로 덮고 보스/컵 윗면에 얹힘
    G[2].add(ghostMesh(ASSETS.face, MATS.face, T(0, oy, P.f3H + effBossH())));
  }
  // LED: 원형(3/4/5mm)은 플랜지가 상판 밑면에 정지 → 원통부 + 돔 끝만 상판 위로 돌출.
  // 사각 투톤(2×5×7)은 몸통 바닥이 상판 밑면과 나란 → 위로 3.8 돌출. 빨강/초록 반쪽으로 표시
  if (P.ledOn) {
    const s = ledSpec();
    const zB = P.f3H - F3_PLATE;
    if (s.rect) {
      const half = () => new THREE.BoxGeometry(s.w / 2, s.t, s.bodyH);
      const hR = half(); hR.translate(P.ledX - s.w / 4, P.ledY, zB + s.bodyH / 2);
      const hG = half(); hG.translate(P.ledX + s.w / 4, P.ledY, zB + s.bodyH / 2);
      for (const g of [hR, hG]) g.deleteAttribute('uv');
      G[2].add(ghostMesh(hR, MATS.ledR));
      G[2].add(ghostMesh(hG, MATS.ledG));
    } else {
      const body = new THREE.CylinderGeometry(s.d / 2, s.d / 2, s.cyl, 20);
      body.rotateX(Math.PI / 2); body.translate(P.ledX, P.ledY, zB + s.cyl / 2);
      const dome = new THREE.SphereGeometry(s.domeR, 20, 12);
      dome.translate(P.ledX, P.ledY, zB + s.cyl);
      const flange = new THREE.CylinderGeometry(s.fl / 2, s.fl / 2, 1.0, 20);
      flange.rotateX(Math.PI / 2); flange.translate(P.ledX, P.ledY, zB - 0.5);
      for (const g of [body, dome, flange]) g.deleteAttribute('uv');
      G[2].add(ghostMesh(BufferGeometryUtils.mergeGeometries([body, dome, flange]), MATS.led));
    }
  }
  // 피에조 부저 (Ø12×8.3): f3 = 3층 천장에 매달림 / f2 = 2층 바닥 리세스 / f2s = 2층 바닥 눕힘
  if (P.bzOn) {
    const f3m = P.bzMount === 'f3', side = P.bzMount === 'f2s';
    const body = new THREE.CylinderGeometry(BZ.d / 2, BZ.d / 2, BZ.h, 28);
    const hole = new THREE.CylinderGeometry(1.5, 1.5, 0.5, 16);   // 소리 구멍 (보이는 면에)
    let zc;
    if (side) {
      zc = F2_PART_BASE + F2_PLATFORM - BZ.sideSink + BZ.d / 2;
      body.rotateZ(Math.PI / 2);   // 축 = X (눕힘)
      hole.rotateZ(Math.PI / 2);
      hole.translate(-BZ.h / 2 - 0.3, 0, 0);   // 소리구멍 면 = −X 끝
    } else {
      zc = f3m ? P.f3H - F3_PLATE - BZ.h / 2
               : F2_PART_BASE + F2_PLATFORM - BZ.sink + BZ.h / 2;
      body.rotateX(Math.PI / 2);
      hole.rotateX(Math.PI / 2);
      hole.translate(0, 0, f3m ? -BZ.h / 2 - 0.2 : BZ.h / 2 + 0.2);
    }
    body.translate(P.bzX, P.bzY, zc);
    hole.translate(P.bzX, P.bzY, zc);
    for (const g of [body, hole]) g.deleteAttribute('uv');
    const mountGroup = G[f3m ? 2 : 1];
    mountGroup.add(ghostMesh(BufferGeometryUtils.mergeGeometries([body, hole]), MATS.bz));
    for (const sign of [-1, 1]) {
      const pin = new THREE.CylinderGeometry(0.35, 0.35, 3, 12);
      if (side) {
        pin.rotateZ(Math.PI / 2);
        pin.translate(P.bzX + BZ.h / 2 + 1.5, P.bzY,
                      zc + sign * P.bzPinPitch / 2);
      } else {
        pin.rotateX(Math.PI / 2);
        pin.translate(P.bzX + sign * P.bzPinPitch / 2, P.bzY,
                      zc - BZ.h / 2 - 1.5);
      }
      pin.deleteAttribute('uv');
      mountGroup.add(ghostMesh(pin, MATS.bzPin));
    }
  }
  // NFC 스티커: 포켓 바닥에 눕혀 놓인 얇은 원판 (케이스 반투명으로 봐야 보임)
  if (nfcFits()) {
    const g = new THREE.CylinderGeometry(P.nfcD / 2 - 0.3, P.nfcD / 2 - 0.3, NFC_T, 64);
    g.rotateX(Math.PI / 2);
    g.deleteAttribute('uv');
    G[nfcOnF1() ? 0 : 1].add(ghostMesh(g, MATS.nfc, T(P.nfcX, P.nfcY, P.nfcBase + NFC_T / 2)));
  }
}

// ------------------------------------------------------------------
// 리빌드
// ------------------------------------------------------------------
const status = document.getElementById('status');
// 투두 서포터(buildTodoCase/rebuildTodo)는 todo.js로 분리됨 — 파일 하단에서 initTodo(env)로 연결.

// ------------------------------------------------------------------
// 측면 텍스처 (Weave 1·2·3) — texture.js 의 순수 함수를 호출하는 얇은 연결부
// ------------------------------------------------------------------
let texMap = null;      // 현재 로드된 높이맵
let texMapKey = 'none'; // texMap 이 어떤 텍스처인지

// 무늬는 "케이스 외곽선(원통) 위에 있는 면"에만 넣는다. 외곽선에서 벗어난 것 —
// OLED 타워/커버, 플랫 USB 패드, 결합 턱·홈처럼 안으로 물러났거나 밖으로 튀어나온 면 —
// 은 전부 매끈하게 남는다. 얇은 OLED 앞벽(0.6mm)이 파여 뚫리는 문제도 이걸로 같이 해결.
const TEX_OUTLINE_TOL = 0.35;   // 외곽선에서 이만큼 안에 있어야 "원통 위"로 본다 (mm)

// 둥근 사각형(원형 포함) 부호거리 — 안이면 음수, 밖이면 양수
function outlineSDF(x, y, hw, hd, r) {
  const qx = Math.abs(x) - (hw - r), qy = Math.abs(y) - (hd - r);
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
}

// 층별 무늬 규칙. 4(OLED 포드)·5(OLED 커버)는 부품 전체가 OLED 하우징이라 아예 안 넣는다.
function texSkipFor(i) {
  if (i === 4 || i === 5) return 'all';
  // 4층 뚜껑은 P.W 와 무관하게 항상 Ø41 밴드 (그 위 딤섬 캐릭터는 외곽선 밖이라 자동 제외)
  const [hw, hd, r] = (i === 3)
    ? [LID.r, LID.r, LID.r]
    : [P.W / 2, effD() / 2, effR()];
  return (x, y) => Math.abs(outlineSDF(x, y, hw, hd, r)) > TEX_OUTLINE_TOL;
}

/** 무늬가 켜져 있으면 옆면에 새긴 새 지오메트리를, 아니면 원본을 그대로 돌려준다. */
function texturize(geo, skip) {
  if (texSkip || !geo || P.texKey === 'none' || !texMap || texMapKey !== P.texKey) return geo;
  try {
    return applySideTexture(geo, texMap, { depth: P.texDepth, tile: P.texTile, res: P.texRes, skip });
  } catch (e) {
    console.error('side texture', e);
    return geo;
  }
}

function syncTexBtns() {
  document.querySelectorAll('#texBtns button').forEach(b => {
    b.classList.toggle('on', b.dataset.tex === P.texKey);
  });
  for (const id of ['texDepth', 'texTile', 'texRes'])
    document.getElementById(id).disabled = P.texKey === 'none';
}

// 텍스처 요청 번호 — setTexture 는 중간에 이미지 로딩을 await 하므로, 로딩이 끝나기 전에
// 다른 무늬를 누르면 두 요청이 겹친다. 그때 늦게 도착한 쪽(= 먼저 누른 쪽)이 texMapKey 를
// 덮어쓰면 P.texKey 와 어긋나서 texturize 가 무늬 없는 원본을 그대로 돌려주고, 그 상태로
// 리빌드가 끝나버린다(= "바꿔도 적용이 안 됨"). 마지막 요청만 상태를 건드리게 막는다.
let texReq = 0;

/** 텍스처 선택 → 필요하면 이미지를 굽고(캐시됨) 리빌드 */
async function setTexture(key) {
  const req = ++texReq;
  const changed = P.texKey !== key;
  P.texKey = key;
  texSkip = false;
  clearTimeout(retexTimer);
  // 다른 무늬로 바꿀 때는 그 이미지에 맞는 기본 무늬 크기/디테일을 넣어준다.
  // (이미지마다 한 장 안의 반복 횟수가 달라서 같은 값을 쓰면 잘거나 뭉개진다)
  if (changed && TEXTURES[key]) {
    for (const [src, id] of [['tile', 'texTile'], ['res', 'texRes']]) {
      const v = TEXTURES[key][src];
      if (v == null) continue;
      P[id] = v;
      const el = document.getElementById(id);
      el.value = v;
      document.getElementById(id + 'v').textContent = v.toFixed(+el.step < 0.1 ? 2 : 1);
    }
  }
  saveParams();
  syncTexBtns();
  if (key === 'none') { texMap = null; texMapKey = 'none'; rebuild(); return; }
  if (texMapKey !== key) {
    status.classList.add('on');
    let map = null;
    try {
      map = await loadHeightMap(key);
    } catch (e) {
      if (req !== texReq) return;   // 이미 다른 무늬로 넘어갔으면 이 실패는 무시
      texMap = null; texMapKey = 'none';
      status.classList.remove('on');
      document.getElementById('warnings').textContent = t('texErr', TEXTURES[key]?.name || key);
      console.error(e);
      return;
    }
    // 로딩 중에 다른 무늬를 눌렀다 → 이 요청은 버린다 (마지막 요청만 상태를 건드린다)
    if (req !== texReq) { status.classList.remove('on'); return; }
    texMap = map;
    texMapKey = key;
    status.classList.remove('on');
  }
  rebuild();
}
document.querySelectorAll('#texBtns button').forEach(b => {
  b.addEventListener('click', () => setTexture(b.dataset.tex));
});
syncTexBtns();

/** CSG는 그대로 두고 측면 텍스처만 다시 입힌다 (드래그가 끝난 뒤 호출) */
function retexture() {
  if (P.product === 'todo') { rebuildTodo(); return; }
  if (P.texKey === 'none' || !texMap) return;
  status.classList.add('on');
  setTimeout(() => {
    for (let i = 0; i < 6; i++) {
      if (!exportGeos[i] || !floorMeshes[i]) continue;
      const sk = texSkipFor(i);
      const shown = sk === 'all' ? exportGeos[i] : texturize(exportGeos[i], sk);
      if (shown === exportGeos[i]) continue;
      const old = floorMeshes[i].geometry;
      texGeos[i] = shown;
      floorMeshes[i].geometry = shown;
      if (old && old !== exportGeos[i]) old.dispose();
    }
    status.classList.remove('on');
  }, 10);
}

function rebuild() {
  if (P.product === 'todo') { rebuildTodo(); return; }
  if (P.product === 'workout') { rebuildWorkout(); return; }
  status.classList.add('on');
  setTimeout(() => {
    const buildErrs = [];
    try {
      const t0 = performance.now();
      const builders = [buildFloor1, buildFloor2, buildFloor3, buildLid, buildOledPod, buildOledCover];
      const names = t('layerNames');
      for (let i = 0; i < 6; i++) {
        if (i < 4) G[i].clear();        // 포드(i=4)는 G[1]에 얹혀 2층과 함께 움직임
        else if (i === 5) G[4].clear(); // 커버(i=5)는 자체 그룹 G[4] — 분해 애니메이션 참여
        if (i === 0 && !P.f1On) { exportGeos[0] = texGeos[0] = null; floorMeshes[0] = null; continue; }
        if (i === 3 && (!P.lidOn || dbl())) { exportGeos[3] = texGeos[3] = null; floorMeshes[3] = null; continue; }
        if (i === 4 && !(P.oledSide !== 'none' && P.oledPodOn)) {
          exportGeos[4] = texGeos[4] = null; floorMeshes[4] = null; continue;
        }
        if (i === 5 && !oledCoverNeeded()) { exportGeos[5] = texGeos[5] = null; floorMeshes[5] = null; continue; }
        try {   // 한 층이 실패해도 나머지 층은 유지
          const man = builders[i]();
          const geo = manToGeo(man);
          man.delete();
          exportGeos[i] = geo;
          const sk = texSkipFor(i);
          const shown = sk === 'all' ? geo : texturize(geo, sk);
          texGeos[i] = shown === geo ? null : shown;
          const mesh = new THREE.Mesh(shown, xray ? matCaseX : matCase);
          floorMeshes[i] = mesh;
          G[i === 4 ? 1 : i === 5 ? 4 : i].add(mesh);
        } catch (e) {
          exportGeos[i] = null;
          texGeos[i] = null;
          floorMeshes[i] = null;
          buildErrs.push(t('buildErr', names[i], e.message || e));
          console.error(names[i], e);
        }
      }
      placeGhosts();
      applyExplode();
      updateInfo(performance.now() - t0, checkFit());
    } catch (e) {
      buildErrs.push(t('buildErrGeneric', e.message || e));
      console.error(e);
    }
    if (buildErrs.length) {
      const w = document.getElementById('warnings');
      w.textContent = buildErrs.join('\n') + (w.textContent ? '\n' + w.textContent : '');
    }
    status.classList.remove('on');
    if (texSkip) {   // 드래그 중이라 무늬를 건너뛴 상태 → 잠시 뒤 무늬만 입힌다
      clearTimeout(retexTimer);
      retexTimer = setTimeout(() => { if (texSkip) { texSkip = false; retexture(); } }, 600);
    }
  }, 10);
}

// 조립 간섭 자동 검사: 층을 실제 조립 위치에 놓고 교집합 부피 계산 (0이어야 정상)
function checkFit() {
  try {
    const vol = mm => (typeof mm.volume === 'function') ? mm.volume() : mm.getProperties().volume;
    const garbage = [];
    const g = x => { garbage.push(x); return x; };
    const base1 = f1BaseH();
    const m1 = P.f1On ? g(toMan(exportGeos[0])) : null;
    const m2 = g(g(toMan(exportGeos[1])).translate([0, 0, base1]));
    const m3 = g(g(toMan(exportGeos[2])).translate([0, 0, base1 + P.f2H]));
    const i12 = m1 ? vol(g(m1.intersect(m2))) : 0;
    const i23 = vol(g(m2.intersect(m3)));
    let i34 = 0;
    if (exportGeos[3]) {   // 뚜껑 ↔ 3층 (홈 안착 위치) — bun 디테일 때문에 1e-6 용접
      const m4 = g(g(toMan(exportGeos[3], null, 1e-6)).translate([0, 0, base1 + P.f2H + P.f3H - RIDGE_H]));
      i34 = vol(g(m3.intersect(m4)));
    }
    let iPod = 0;
    if (exportGeos[4]) {   // OLED 분리 포드 ↔ 2층·3층 (슬라이드 안착 위치)
      const mp = g(g(toMan(exportGeos[4])).translate([0, 0, base1]));
      iPod = vol(g(m2.intersect(mp))) + vol(g(m3.intersect(mp)));
      if (m1) iPod += vol(g(m1.intersect(mp)));
    }
    if (exportGeos[5]) {   // OLED 뒷면 커버 ↔ 3층 (텅 홈 안착 위치)
      const mc = g(g(toMan(exportGeos[5])).translate([0, 0, base1 + P.f2H]));
      iPod += vol(g(m3.intersect(mc)));
    }
    garbage.forEach(x => x.delete());
    return { i12, i23, i34, iPod, ok: i12 < 0.5 && i23 < 0.5 && i34 < 0.5 && iPod < 0.5 };
  } catch (e) { return null; }
}

// 분해/조립
function applyExplode() {
  if (P.product === 'workout') { applyWorkoutExplode(); return; }
  const e = +document.getElementById('explode').value;
  const gap = 26 * e;
  const base1 = f1BaseH();
  const firstGap = P.f1On ? gap : 0;
  G[0].position.z = 0;
  G[1].position.z = base1 + firstGap;
  G[2].position.z = base1 + P.f2H + firstGap + gap;
  // 뚜껑: 림(local z=RIDGE_H)이 3층 상판 위에 안착, 턱이 홈에 꽂힘
  G[3].position.z = base1 + P.f2H + P.f3H - RIDGE_H + firstGap + gap * 2;
  // OLED 뒷면 커버: 조립 시 3층 홈에 안착(3층과 같은 기준), 분해 시 3층 위로 떠오름
  G[4].position.z = base1 + P.f2H + firstGap + gap + gap * 0.8;
  updateWires();
  markRulers();
}
document.getElementById('explode').addEventListener('input', () => {
  document.getElementById('explodev').textContent = (+document.getElementById('explode').value).toFixed(2);
  applyExplode();
});

// ------------------------------------------------------------------
// 치수 룰러: 각 층·주요 지점의 실측 크기를 연붉은색 치수선으로 표시 (토글)
// 층 높이/전체 폭·깊이는 실제 메시 바운딩박스에서 자동 산출 → 제품이 바뀌어도 그대로 동작.
// 제품별 추가 치수(슬롯 깊이 등)는 rulerExtras로 등록받는다.
// ------------------------------------------------------------------
let rulersOn = false;
const rulerGroup = new THREE.Group();
rulerGroup.visible = false;
scene.add(rulerGroup);
const RULER_COLOR = 0xe0736b;                    // 연붉은색
const rulerMat = new THREE.LineBasicMaterial({ color: RULER_COLOR, depthTest: false, transparent: true, opacity: 0.95 });
const RULER_OFF = 9;                             // 모델 바깥으로 띄우는 거리 (mm)
let rulerExtras = { product: null, list: [] };   // 제품별 추가 치수 (todo.js 등이 등록)

// 라벨 텍스처 캐시 — 분해 슬라이더를 드래그해도 텍스트가 같으면 캔버스를 다시 굽지 않는다
const rulerLabelCache = new Map();
function rulerLabelMat(text) {
  let e = rulerLabelCache.get(text);
  if (!e) {
    if (rulerLabelCache.size > 200) { rulerLabelCache.forEach(v => { v.mat.map.dispose(); v.mat.dispose(); }); rulerLabelCache.clear(); }
    const fs = 30, pad = 9;
    const c = document.createElement('canvas');
    let g = c.getContext('2d');
    g.font = `bold ${fs}px sans-serif`;
    const w = Math.ceil(g.measureText(text).width) + pad * 2, h = fs + pad;
    c.width = w; c.height = h;
    g = c.getContext('2d');
    g.fillStyle = 'rgba(255,250,249,0.93)'; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#e8a9a3'; g.lineWidth = 3; g.strokeRect(0, 0, w, h);
    g.fillStyle = '#c8564c';
    g.font = `bold ${fs}px sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(text, w / 2, h / 2 + 1);
    // sizeAttenuation:false → 확대/축소해도 라벨은 화면상 같은 크기 (룰러 눈금처럼 읽힌다)
    const mat = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), depthTest: false, transparent: true, sizeAttenuation: false });
    e = { mat, w, h };
    rulerLabelCache.set(text, e);
  }
  return e;
}

// 치수선 하나: a→b 본선 + 양끝 슬래시 눈금 + (선택) 모델 지점까지의 연장선 + 값 라벨.
// tick = 라벨/눈금이 뻗는 방향, extA/extB = 실제 모델 위 대응 지점, at = 선 위 라벨 위치(0~1).
function dimLine(a, b, label, tick, extA, extB, at = 0.5) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
  const len = A.distanceTo(B);
  if (len < 0.15) return;
  const u = B.clone().sub(A).divideScalar(len);
  const tk = new THREE.Vector3(...tick).normalize();
  const s = u.clone().multiplyScalar(1.5), tv = tk.clone().multiplyScalar(1.5);
  const pts = [A, B,
    A.clone().sub(s).sub(tv), A.clone().add(s).add(tv),      // 끝단 슬래시
    B.clone().sub(s).sub(tv), B.clone().add(s).add(tv)];
  if (extA) { const e = new THREE.Vector3(...extA); pts.push(e, A.clone().add(A.clone().sub(e).setLength(1.5))); }
  if (extB) { const e = new THREE.Vector3(...extB); pts.push(e, B.clone().add(B.clone().sub(e).setLength(1.5))); }
  const line = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), rulerMat);
  line.renderOrder = 998;
  rulerGroup.add(line);
  if (!label) return;
  const { mat, w, h } = rulerLabelMat(label);
  const sp = new THREE.Sprite(mat);
  const sh = 0.019;                                          // 라벨 높이 = 뷰포트 높이의 1.9%
  sp.scale.set(sh * w / h, sh, 1);
  sp.position.copy(A).addScaledVector(B.clone().sub(A), at).add(tk.clone().multiplyScalar(3.4));
  sp.renderOrder = 999;
  rulerGroup.add(sp);
}

const rlFmt = v => (Math.round(v * 10) / 10).toFixed(1);
// 층 그룹의 실제 케이스 부피 상자 (고스트 부품·배선은 제외)
function rulerGroupBox(g) {
  const box = new THREE.Box3();
  let has = false;
  g.traverse(o => {
    if (!o.isMesh || o.userData.ghost) return;
    box.union(new THREE.Box3().setFromObject(o));
    has = true;
  });
  return has ? box : null;
}

function updateRulers() {
  rulerGroup.children.forEach(o => { if (o.isLineSegments) o.geometry.dispose(); });
  rulerGroup.clear();
  if (!rulersOn) return;
  const boxes = [];
  for (let i = 0; i < G.length; i++) {
    const b = rulerGroupBox(G[i]);
    if (b && b.max.z - b.min.z > 0.2) boxes.push({ i, b });
  }
  if (!boxes.length) return;
  const all = new THREE.Box3();
  boxes.forEach(x => all.union(x.b));
  const rx = all.max.x + RULER_OFF;    // 폭·깊이 치수선이 놓이는 X/Y
  const ry = all.min.y - RULER_OFF;
  // 층 높이는 오른쪽 앞 코너에서 더 멀리 — 카메라에서 모델 위에 겹치지 않도록
  const vx = all.max.x + RULER_OFF * 1.6, vy = all.min.y - RULER_OFF * 1.6;
  const z0 = all.min.z;
  // 층별 높이 — 분해 위치를 그대로 따라간다
  for (const { b } of boxes)
    dimLine([vx, vy, b.min.z], [vx, vy, b.max.z], rlFmt(b.max.z - b.min.z), [1, 0, 0],
            [b.max.x, b.min.y, b.min.z], [b.max.x, b.min.y, b.max.z]);
  // 전체 폭(X) / 깊이(Y) — 바닥 높이에서
  dimLine([all.min.x, ry, z0], [all.max.x, ry, z0], rlFmt(all.max.x - all.min.x), [0, -1, 0],
          [all.min.x, all.min.y, z0], [all.max.x, all.min.y, z0]);
  dimLine([rx, all.min.y, z0], [rx, all.max.y, z0], rlFmt(all.max.y - all.min.y), [1, 0, 0],
          [all.max.x, all.min.y, z0], [all.max.x, all.max.y, z0]);
  // 조립 상태(분해 0)에서만 총 높이 — 분해 중에는 층 사이 간격이 섞여 의미가 없다
  if (boxes.length > 1 && +document.getElementById('explode').value < 0.02) {
    const tx = all.max.x + RULER_OFF * 2.7, ty = all.min.y - RULER_OFF * 2.7;
    dimLine([tx, ty, all.min.z], [tx, ty, all.max.z], rlFmt(all.max.z - all.min.z),
            [1, 0, 0], null, null, 0.82);
  }
  // 제품별 추가 치수
  if (rulerExtras.product === P.product)
    for (const e of rulerExtras.list) dimLine(e.a, e.b, e.label, e.tick || [1, 0, 0], e.extA, e.extB, e.at);
}

// 분해 애니메이션/슬라이더 중에도 프레임당 한 번만 다시 그린다
let rulerPending = false;
function markRulers() {
  if (!rulersOn || rulerPending) return;
  rulerPending = true;
  requestAnimationFrame(() => { rulerPending = false; updateRulers(); });
}
function setRulerExtras(product, list) { rulerExtras = { product, list: list || [] }; }

// ------------------------------------------------------------------
// 배선 시각화: 배터리 → 충전모듈 → ESP32 → OLED (실제 핀 배치 기반)
// ------------------------------------------------------------------
let wiresOn = true;
const wireGroup = new THREE.Group();
scene.add(wireGroup);
const WIRE_COLORS = { plus: 0xd63c2f, minus: 0x333333, sda: 0x2e9e57, scl: 0xe0a13a,
                      gpio: 0x8e44ad, led: 0x2b7de9, led2: 0x1fa87a, bz: 0xc2589c };
// ESP32-C3 supermini 핀 로컬 좌표 (USB가 -x 끝, 핀아웃 실측: 북열 5V,G,3V3,4,3,2,1,0 / 남열 5,6,7,8,9,10,20,21)
const ESP_PINS = {
  '5V': [-9, 8], 'GND': [-6.5, 8], '3V3': [-4, 8],
  4: [-1.5, 8], 3: [1, 8], 2: [3.5, 8], 1: [6, 8], 0: [8.5, 8],
  5: [-9, -8], 6: [-6.5, -8], 7: [-4, -8], 8: [-1.5, -8], 9: [1, -8],
  10: [3.5, -8], 20: [6, -8], 21: [8.5, -8],
};
const ALL_GPIOS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 21];
// 우클릭으로 핀을 바꿀 수 있는 배선 (태그 → P 키/이름). ESP32-C3는 I2C 핀도 자유 지정 가능
const GPIO_ROLES = {
  gpio: { key: 'swGpio', name: 'roleSwitch' },
  gpio2: { key: 'sw2Gpio', name: 'roleSwitch2' },
  sda:  { key: 'sdaGpio', name: 'roleOledSda' },
  scl:  { key: 'sclGpio', name: 'roleOledScl' },
  led:  { key: 'ledGpio', name: 'roleLed' },
  led2: { key: 'led2Gpio', name: 'roleLedGreen' },
  bz:   { key: 'bzGpio', name: 'roleBuzzer' },
  hall: { key: 'wkHallGpio', name: 'roleWorkoutHall' },
};

// ------------------------------------------------------------------
// 배선표: 현재 설정(부품 on/off, GPIO 지정)을 3D 뷰 우측 상단 오버레이 표로 요약 — updateWires마다 갱신
// ------------------------------------------------------------------
const wireTableEl = document.getElementById('wireTable');
function renderWireTable() {
  const hex = c => '#' + c.toString(16).padStart(6, '0');
  const rows = [];
  const grp = t => rows.push(`<tr class="grp"><td colspan="4">${t}</td></tr>`);
  const row = (color, from, to, note = '') => rows.push(
    `<tr><td><span class="sw" style="background:${hex(color)}"></span></td>` +
    `<td>${from}</td><td>${to}</td><td>${note}</td></tr>`);
  if (P.product === 'workout') {
    grp(t('wtGrpPowerChain'));
    row(WIRE_COLORS.plus, t('wtBatPlus'), t('wtChgBplus'));
    row(WIRE_COLORS.minus, t('wtBatMinus'), t('wtChgBminus'));
    if (P.wkSwOn) {
      row(WIRE_COLORS.plus, t('wtChgOutPlus'), t('wtSwCom'));
      row(WIRE_COLORS.plus, t('wtSwOut'), t('wtEsp5v'), t('wtSwNote'));
    } else {
      row(WIRE_COLORS.plus, t('wtChgOutPlus'), t('wtEsp5v'));
    }
    row(WIRE_COLORS.minus, t('wtChgOutMinus'), t('wtEspGnd'));
    if (P.wkHallOn) {
      grp(t('wtGrpWorkoutHall'));
      row(WIRE_COLORS.plus, t('wtHallVcc'), t('wtEsp3v3'));
      row(WIRE_COLORS.minus, t('wtHallGnd'), t('wtEspGnd'));
      row(WIRE_COLORS.gpio, t('wtHallSignal'), 'GPIO ' + P.wkHallGpio, t('wtHallNote'));
    }
    grp(t('wtGrpWorkoutMpu'));
    row(WIRE_COLORS.plus, t('wtMpuVcc'), t('wtEsp3v3'));
    row(WIRE_COLORS.minus, t('wtMpuGnd'), t('wtEspGnd'));
    row(WIRE_COLORS.sda, t('wtMpuSda'), 'GPIO ' + P.sdaGpio);
    row(WIRE_COLORS.scl, t('wtMpuScl'), 'GPIO ' + P.sclGpio);
    if (P.wkOledOn) {
      grp(t('wtGrpOled'));
      row(WIRE_COLORS.plus, t('wtOledVcc'), t('wtEsp3v3'));
      row(WIRE_COLORS.minus, t('wtOledGnd'), t('wtEspGnd'));
      row(WIRE_COLORS.sda, t('wtOledSda'), 'GPIO ' + P.sdaGpio);
      row(WIRE_COLORS.scl, t('wtOledScl'), 'GPIO ' + P.sclGpio, t('wtSckNote'));
    }
    wireTableEl.innerHTML = `<table><tbody>${rows.join('')}</tbody></table>`;
    return;
  }
  if (noBat()) {
    grp(t('wtGrpPower'));
    row(WIRE_COLORS.plus, t('wtUsbC'), t('wtEspDirect'), t('wtNoBattery'));
  } else {
    grp(t('wtGrpPowerChain'));
    row(WIRE_COLORS.plus, t('wtBatPlus'), t('wtChgBplus'));
    row(WIRE_COLORS.minus, t('wtBatMinus'), t('wtChgBminus'));
    row(WIRE_COLORS.plus, t('wtChgOutPlus'), P.modType === 'tp4056' ? t('wtTpPowerStage') : t('wtEsp5v'));
    row(WIRE_COLORS.minus, t('wtChgOutMinus'), t('wtEspGnd'));
  }
  if (P.oledSide !== 'none') {
    grp(t('wtGrpOled'));
    row(WIRE_COLORS.plus, t('wtOledVcc'), t('wtEsp3v3'));
    row(WIRE_COLORS.minus, t('wtOledGnd'), t('wtEspGnd'));
    row(WIRE_COLORS.sda, t('wtOledSda'), 'GPIO ' + P.sdaGpio);
    row(WIRE_COLORS.scl, t('wtOledScl'), 'GPIO ' + P.sclGpio, t('wtSckNote'));
  }
  grp(t('wtGrpSwitch'));
  if (dbl()) {
    row(WIRE_COLORS.gpio, t('wtSw1PinA'), 'GPIO ' + P.swGpio, t('wtPullup'));
    row(WIRE_COLORS.minus, t('wtSw1PinB'), t('wtEspGnd'));
    row(WIRE_COLORS.gpio, t('wtSw2PinA'), 'GPIO ' + P.sw2Gpio, t('wtPullup'));
    row(WIRE_COLORS.minus, t('wtSw2PinB'), t('wtEspGnd'));
  } else {
    row(WIRE_COLORS.gpio, t('wtSwPinA'), 'GPIO ' + P.swGpio, t('wtPullup'));
    row(WIRE_COLORS.minus, t('wtSwPinB'), t('wtEspGnd'));
  }
  if (P.ledOn) {
    if (ledSpec().rect) {
      grp(t('wtGrpLedRgb'));
      row(WIRE_COLORS.led, t('wtLedRed'), 'GPIO ' + P.ledGpio, t('wtResistorRed'));
      row(WIRE_COLORS.led2, t('wtLedGreen'), 'GPIO ' + P.led2Gpio, t('wtResistor'));
      row(WIRE_COLORS.minus, t('wtLedCommon'), t('wtEspGnd'));
    } else {
      grp(t('wtGrpLedRound', ledSpec().d));
      row(WIRE_COLORS.led, t('wtLedPlusLeg'), 'GPIO ' + P.ledGpio, t('wtResistor'));
      row(WIRE_COLORS.minus, t('wtLedMinusLeg'), t('wtEspGnd'));
    }
  }
  if (P.bzOn) {
    grp(t('wtGrpBuzzer'));
    row(WIRE_COLORS.bz, t('wtBzPlus'), 'GPIO ' + P.bzGpio, t('wtPwmTone'));
    row(WIRE_COLORS.minus, t('wtBzMinus'), t('wtEspGnd'));
  }
  wireTableEl.innerHTML = `<table><tbody>${rows.join('')}</tbody></table>`;
}

function wireLabel(text, colorHex, pos) {
  const c = document.createElement('canvas');
  c.width = 160; c.height = 44;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(255,253,248,0.9)';
  g.fillRect(0, 0, 160, 44);
  g.strokeStyle = '#c9bfa5'; g.lineWidth = 3; g.strokeRect(0, 0, 160, 44);
  g.fillStyle = '#' + colorHex.toString(16).padStart(6, '0');
  g.font = 'bold 26px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 80, 23);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(c), depthTest: false, transparent: true }));
  sp.scale.set(7, 1.9, 1);
  sp.position.copy(pos).add(new THREE.Vector3(0, 0, 2.2));
  wireGroup.add(sp);
  return sp;
}

function addWire(points, color, label1, label2, tag) {
  const objs = [];
  const vs = points.map(p => new THREE.Vector3(...p));
  const curve = new THREE.CatmullRomCurve3(vs, false, 'catmullrom', 0.3);
  const tube = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 40, 0.35, 8),
    new THREE.MeshStandardMaterial({ color, roughness: 0.5 }));
  wireGroup.add(tube); objs.push(tube);
  if (tag) {   // 우클릭 판정용 투명 히트 튜브 (가는 전선을 클릭하기 쉽게)
    const hitTube = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 24, 2.0, 6),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
    wireGroup.add(hitTube); objs.push(hitTube);
  }
  for (const [v, txt] of [[vs[0], label1], [vs[vs.length - 1], label2]]) {
    if (!txt) continue;
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.6, 10, 8),
                               new THREE.MeshStandardMaterial({ color }));
    dot.position.copy(v);
    wireGroup.add(dot); objs.push(dot);
    objs.push(wireLabel(txt, color, v));
  }
  if (tag) objs.forEach(o => { o.userData.tag = tag; });
}

function updateWires() {
  renderWireTable();
  wireGroup.clear();
  if (!wiresOn || (P.product !== 'dimsum' && P.product !== 'workout')) return;
  try {
    if (P.product === 'workout') {
      drawWorkoutWires(addWire, WIRE_COLORS);
      return;
    }
    const z1b = G[0].position.z, z2b = G[1].position.z;
    const mc = noBat() ? null : modCenter();

    // --- 배터리 → 충전모듈 B+/B− : 520은 1층에서 배선구멍 경유, 650은 2층 안에서 직접 ---
    const modW = mc ? mc.x - modSpec().l / 2 : 0;             // 모듈 서쪽(USB 반대) 끝
    const bz = z2b + F2_PART_BASE + 2;                            // 모듈 패드 높이
    const holeTop = z2b + F2_PART_BASE + F2_PLATFORM + 1.5;
    if (mc) for (const [sy, col, l1, l2] of [[+1, WIRE_COLORS.plus, t('wtBatPlus'), 'B+'],
                                             [-1, WIRE_COLORS.minus, t('wtBatMinus'), 'B−']]) {
      if (batStand()) {
        addWire([
          [P.batX + sy * 2, sy * 4, z2b + F2_PART_BASE + batSpec().W],
          [modW + 1.2, mc.y + sy * 4.5, bz + 4],
          [modW + 1.2, mc.y + sy * 4.5, bz],
        ], col, l1, l2);
      } else {
        const batTop = z1b + F1_PLATE + batSpec().T;
        const bs = batSpec();
        const tab = batFlatRot()
          ? [sy * 5, (P.wireY >= 0 ? 1 : -1) * (bs.L / 2 - 4)]
          : [(P.wireX >= 0 ? 1 : -1) * (bs.L / 2 - 4), sy * 5];
        addWire([
          [tab[0], tab[1], batTop],
          [P.wireX + sy * 1.2, P.wireY, z2b - 2],
          [P.wireX + sy * 1.2, P.wireY, holeTop],
          [modW + 1.2, mc.y + sy * 4.5, bz + 2],
          [modW + 1.2, mc.y + sy * 4.5, bz],
        ], col, l1, l2);
      }
    }

    // --- ESP32 핀 (pinout: USB쪽부터 북열 5V,G,3V3 / 남열 5,6,7,8=SDA,9=SCL) ---
    const espPin = (dx, dy) => {
      if (noBat()) {   // 도킹: 180° 회전(USB가 +X) → 핀 로컬좌표 반전
        const dk = espDock();
        return [dk.x - dx, dk.y - dy, z2b + F2_PART_BASE + P.espZ + ESP.h];
      }
      // 세움: 보드 평면이 수직 → 폭(dy) 또는 길이(dx) 방향이 높이가 됨
      if (P.espRot === 's0')  return [P.espX + dx, P.espY, z2b + espBaseZ() + ESP.w / 2 + dy];
      if (P.espRot === 's90') return [P.espX, P.espY + dx, z2b + espBaseZ() + ESP.w / 2 + dy];
      if (espUsbDown()) {   // USB(−dx 끝)가 바닥 → 길이 방향이 수직
        const zP = z2b + espBaseZ() + ESP.l / 2 + dx;
        return P.espRot === 'u90' ? [P.espX, P.espY + dy, zP] : [P.espX + dy, P.espY, zP];
      }
      if (espLiftActive()) {
        // 뒤집힌 보드: Y축 반전 후 선택한 평면 회전을 적용한다.
        const [rx, ry] = P.espRot === 90 ? [-dy, -dx] : [-dx, dy];
        return [P.espX + rx, P.espY + ry,
                z2b + espLiftTopZ() - LIFT_SINK + ESP.h];
      }
      const [rx, ry] = P.espRot === 90 ? [-dy, dx] : [dx, dy];
      return [P.espX + rx, P.espY + ry, z2b + F2_PART_BASE + P.espZ + ESP.h];
    };
    const pin5V = espPin(...ESP_PINS['5V']), pinGND = espPin(...ESP_PINS.GND), pin3V3 = espPin(...ESP_PINS['3V3']);
    const pinSDA = espPin(...(ESP_PINS[P.sdaGpio] || ESP_PINS[8]));
    const pinSCL = espPin(...(ESP_PINS[P.sclGpio] || ESP_PINS[9]));

    // --- 충전모듈 OUT+/OUT− → ESP32. TP4056의 배터리 전압은 5V로 가정할 수 없으므로 + 배선은 그리지 않는다. ---
    const arc = 6;   // 보드 위로 띄우는 높이
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, Math.max(a[2], b[2]) + arc];
    if (mc) {
      const outP = [modW + 3.5, mc.y + 6, bz], outM = [modW + 3.5, mc.y - 6, bz];
      if (P.modType !== 'tp4056')
        addWire([outP, mid(outP, pin5V), pin5V], WIRE_COLORS.plus, 'OUT+', '5V');
      addWire([outM, mid(outM, pinGND), pinGND], WIRE_COLORS.minus, 'OUT−', 'GND');
    }

    // --- ESP32 → OLED (I2C: 3V3, GND, GPIO8=SDA, GPIO9=SCL) ---
    if (P.oledSide !== 'none') {
      const spec = oledSpec();
      const { m, seatY } = oledFrame();
      const pinZ = oledSeatZ() + (P.oledType === '096' ? spec.hgt - 2.5 : 11.5);   // 핀 행 높이 (실측 도면)
      const oledPin = (i) => {   // GND,VCC,SCL,SDA 순서 (2.54 피치)
        const lx = -3.81 + i * 2.54;
        const v = new THREE.Vector3(lx, seatY - spec.t - 0.6, 0).applyMatrix4(m);
        return [v.x, v.y, z2b + pinZ];
      };
      const oGND = oledPin(0), oVCC = oledPin(1), oSCL = oledPin(2), oSDA = oledPin(3);
      const gnd2 = espPin(-6.5, 8);
      addWire([pin3V3, mid(pin3V3, oVCC), oVCC], WIRE_COLORS.plus, '3V3', 'VCC');
      addWire([gnd2, mid(gnd2, oGND), oGND], WIRE_COLORS.minus, null, 'GND');
      addWire([pinSDA, mid(pinSDA, oSDA), oSDA], WIRE_COLORS.sda, 'G' + P.sdaGpio, 'SDA', 'sda');
      addWire([pinSCL, mid(pinSCL, oSCL), oSCL], WIRE_COLORS.scl, 'G' + P.sclGpio, 'SCL', 'scl');
    }

    // --- 스위치 (MX, 3층 홀더) → ESP32: 금속 핀 2개에 구리선, 홀더 바닥 구멍 통과 ---
    // GPIO 번호는 보라 전선/라벨 우클릭으로 변경 (P.swGpio)
    {
      const z3b = G[2].position.z;
      const seatZ3 = z3b + P.f3H + effBossH() - P.standSink - SW.seatH;   // 홀더 안착면
      const below = seatZ3 - SW.floorT - 2;                               // 구멍 아래로 나온 지점
      const dropMid = (p, dst) =>
        [(p[0] + dst[0]) / 2, (p[1] + dst[1]) / 2, (below + dst[2]) / 2];
      const swCfg = dbl()
        ? [{ oy: -P.swGap / 2, gpio: P.swGpio, tag: 'gpio', lb: t('spSw1') },
           { oy: P.swGap / 2, gpio: P.sw2Gpio, tag: 'gpio2', lb: t('spSw2') }]
        : [{ oy: 0, gpio: P.swGpio, tag: 'gpio', lb: t('spSw') }];
      for (const c of swCfg) {
        const pinSw = espPin(...(ESP_PINS[c.gpio] || ESP_PINS[3]));
        const pinA = [3.8, c.oy - 2.7], pinB = [-2.7, c.oy - 5.2];   // 홀더 구리선 구멍 = 스위치 핀 위치
        addWire([[...pinA, seatZ3 + 1], [...pinA, below], dropMid(pinA, pinSw), pinSw],
                WIRE_COLORS.gpio, c.lb, 'G' + c.gpio, c.tag);
        addWire([[...pinB, seatZ3 + 1], [...pinB, below], dropMid(pinB, pinGND), pinGND],
                WIRE_COLORS.minus, null, null);
      }
    }

    // --- LED (3층 상판 관통, 다리가 아래로) → ESP32: GPIO(저항 권장) + GND ---
    // 사각 투톤(r25)은 3핀: 1=빨강 애노드, 2=공통 캐소드(GND), 3=초록 애노드 (피치 2.54)
    if (P.ledOn) {
      const s = ledSpec();
      const z3b = G[2].position.z;
      const under = z3b + P.f3H - F3_PLATE - 1.2;   // 플랜지(몸통 바닥) 바로 아래
      const pinLed = espPin(...(ESP_PINS[P.ledGpio] || ESP_PINS[7]));
      const dm = (p, dst) => [(p[0] + dst[0]) / 2, (p[1] + dst[1]) / 2, (p[2] + dst[2]) / 2];
      if (s.rect) {
        const pinLed2 = espPin(...(ESP_PINS[P.led2Gpio] || ESP_PINS[6]));
        const legR = [P.ledX - s.pitch, P.ledY, under];
        const legC = [P.ledX, P.ledY, under];
        const legG = [P.ledX + s.pitch, P.ledY, under];
        addWire([legR, dm(legR, pinLed), pinLed], WIRE_COLORS.led, 'LED R', 'G' + P.ledGpio, 'led');
        addWire([legG, dm(legG, pinLed2), pinLed2], WIRE_COLORS.led2, 'LED G', 'G' + P.led2Gpio, 'led2');
        addWire([legC, dm(legC, pinGND), pinGND], WIRE_COLORS.minus, 'LED−', null);
      } else {
        const legA = [P.ledX - 1.3, P.ledY, under], legB = [P.ledX + 1.3, P.ledY, under];
        addWire([legA, dm(legA, pinLed), pinLed], WIRE_COLORS.led, 'LED+', 'G' + P.ledGpio, 'led');
        addWire([legB, dm(legB, pinGND), pinGND], WIRE_COLORS.minus, 'LED−', null);
      }
    }

    // --- 피에조 부저 → ESP32: GPIO(PWM 톤) + GND ---
    if (P.bzOn) {
      const pinBz = espPin(...(ESP_PINS[P.bzGpio] || ESP_PINS[2]));
      const dm = (p, dst) => [(p[0] + dst[0]) / 2, (p[1] + dst[1]) / 2, (p[2] + dst[2]) / 2 + 3];
      let lA, lB;
      if (P.bzMount === 'f2s') {   // 눕힘: 핀이 +X 끝면에 세로로
        const zc = z2b + F2_PART_BASE + F2_PLATFORM - BZ.sideSink + BZ.d / 2;
        const ex = P.bzX + BZ.h / 2 + 1;
        lA = [ex, P.bzY, zc + P.bzPinPitch / 2]; lB = [ex, P.bzY, zc - P.bzPinPitch / 2];
      } else {
        const zLeg = P.bzMount === 'f3'
          ? G[2].position.z + P.f3H - F3_PLATE - BZ.h - 1
          : z2b + F2_PART_BASE + F2_PLATFORM - BZ.sink + 1;
        lA = [P.bzX - P.bzPinPitch / 2, P.bzY, zLeg]; lB = [P.bzX + P.bzPinPitch / 2, P.bzY, zLeg];
      }
      addWire([lA, dm(lA, pinBz), pinBz], WIRE_COLORS.bz, t('spBzPlus'), 'G' + P.bzGpio, 'bz');
      addWire([lB, dm(lB, pinGND), pinGND], WIRE_COLORS.minus, t('spBzMinus'), null);
    }
  } catch (e) { /* 초기화 전 호출 등은 무시 */ }
}
document.getElementById('wiresBtn').addEventListener('click', () => {
  wiresOn = !wiresOn;
  syncToggleLabels();
  document.getElementById('wireOverlay').style.display = wiresOn ? '' : 'none';   // 배선표 오버레이도 함께
  updateWires();
});

// GPIO 배선(스위치/SDA/SCL) 전선·라벨 우클릭 → GPIO 번호 선택 메뉴
const gpioMenu = document.createElement('div');
gpioMenu.style.cssText =
  'position:fixed; display:none; z-index:50; background:#fffdf8; border:1px solid #ddd2b5;' +
  'border-radius:10px; box-shadow:0 4px 14px rgba(77,58,20,.18); padding:8px; width:186px;';
gpioMenu.innerHTML =
  '<div id="gpioTitle" style="font-size:11px; font-weight:600; color:#6b5d43; margin:2px 4px 6px;"></div>' +
  '<div id="gpioGrid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:4px;"></div>';
document.body.appendChild(gpioMenu);
const gpioGrid = gpioMenu.querySelector('#gpioGrid');
const gpioTitle = gpioMenu.querySelector('#gpioTitle');

function openGpioMenu(tag, clientX, clientY) {
  const role = GPIO_ROLES[tag];
  if (!role) return;
  gpioTitle.textContent = t('gpioSelect', t(role.name));
  // 다른 배선이 이미 쓰는 핀은 제외 (충돌 방지)
  const used = Object.values(GPIO_ROLES).filter(r => r.key !== role.key).map(r => +P[r.key]);
  gpioGrid.innerHTML = '';
  for (const n of ALL_GPIOS) {
    const b = document.createElement('button');
    b.textContent = 'G' + n;
    const cur = +P[role.key] === n, taken = used.includes(n);
    b.disabled = taken;
    b.style.cssText = 'padding:5px 0; font-size:11px; border-radius:6px;' +
      (cur ? 'background:#e9b95f;color:#4d3a14;'
           : taken ? 'background:#efe9dc;color:#c3b89a;'
                   : 'background:#f1ead7;color:#6b5d43;');
    if (!taken) b.addEventListener('click', () => {
      P[role.key] = n;
      saveParams();
      updateWires();
      gpioMenu.style.display = 'none';
    });
    gpioGrid.appendChild(b);
  }
  gpioMenu.style.left = Math.min(clientX + 6, window.innerWidth - 200) + 'px';
  gpioMenu.style.top = Math.min(clientY + 6, window.innerHeight - 150) + 'px';
  gpioMenu.style.display = 'block';
}

const pickRay = new THREE.Raycaster();
renderer.domElement.addEventListener('contextmenu', e => {
  if (!wiresOn) return;
  const r = renderer.domElement.getBoundingClientRect();
  const ndc = new THREE.Vector2(
    ((e.clientX - r.left) / r.width) * 2 - 1,
    -((e.clientY - r.top) / r.height) * 2 + 1);
  pickRay.setFromCamera(ndc, camera);
  const hit = pickRay.intersectObjects(wireGroup.children, true)
                     .find(h => GPIO_ROLES[h.object.userData.tag]);
  if (!hit) return;
  e.preventDefault();
  openGpioMenu(hit.object.userData.tag, e.clientX, e.clientY);
});
window.addEventListener('pointerdown', e => {
  if (!gpioMenu.contains(e.target)) gpioMenu.style.display = 'none';
});
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') gpioMenu.style.display = 'none';
});

// 조립 애니메이션
let animId = null;
document.getElementById('animBtn').addEventListener('click', () => {
  cancelAnimationFrame(animId);
  const el = document.getElementById('explode');
  const from = +el.value > 0.05 ? +el.value : 1.0;
  const to = +el.value > 0.05 ? 0 : 1.0;
  const t0 = performance.now(), dur = 1100;
  (function step(t) {
    const k = Math.min((t - t0) / dur, 1);
    const s = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    el.value = from + (to - from) * s;
    applyExplode();
    if (k < 1) animId = requestAnimationFrame(step);
  })(t0);
});

document.getElementById('ghostBtn').addEventListener('click', () => {
  showGhosts = !showGhosts;
  syncToggleLabels();
  G.forEach(g => g.traverse(o => { if (o.userData.ghost) o.visible = showGhosts; }));
});
document.getElementById('xrayBtn').addEventListener('click', () => {
  xray = !xray;
  syncToggleLabels();
  floorMeshes.forEach(m => { if (m) m.material = xray ? matCaseX : matCase; });
});
document.getElementById('rulerBtn').addEventListener('click', () => {
  rulersOn = !rulersOn;
  syncToggleLabels();
  rulerGroup.visible = rulersOn;
  updateRulers();
});

// ------------------------------------------------------------------
// 치수/경고
// ------------------------------------------------------------------
function insideInner(hx, hy) {   // (±hx, ±hy) 사각형이 내부 rrect/원 안에 있는지
  const iw = innerHalfW(), id = innerHalfD(), r = Math.max(effR() - P.wall, 0.05);
  if (hx > iw || hy > id) return false;
  const dx = hx - (iw - r), dy = hy - (id - r);
  return !(dx > 0 && dy > 0 && dx * dx + dy * dy > r * r);
}
function rectsOverlap(a, b) {
  return Math.abs(a.x - b.x) * 2 < a.w + b.w && Math.abs(a.y - b.y) * 2 < a.d + b.d;
}
// 원판(중심 cx,cy · 반지름 rr)이 외곽 inset 안쪽 둥근네모/원 에 완전히 들어가는지.
// 둥근네모를 반지름 rr 로 침식하면 (반폭−rr, 모서리R−rr) 인 둥근네모가 되고,
// 모서리R ≤ rr 이면 침식 결과가 각진 사각형이 된다 — 원판이라 사각 바운딩박스보다 여유가 크다.
function circleInsideInset(cx, cy, rr, inset) {
  const HW = P.W / 2 - inset - rr, HD = effD() / 2 - inset - rr;
  if (HW < 0 || HD < 0) return false;
  const ax = Math.abs(cx), ay = Math.abs(cy);
  if (ax > HW || ay > HD) return false;
  const CR = effR() - inset - rr;
  if (CR <= 0) return true;
  const dx = ax - (HW - CR), dy = ay - (HD - CR);
  return !(dx > 0 && dy > 0 && dx * dx + dy * dy > CR * CR);
}
function updateInfo(ms, fit) {
  const total = f1BaseH() + P.f2H + P.f3H + effBossH();
  const fitTxt = fit
    ? (fit.ok ? t('fitOk') : t('fitBad', fit.i12.toFixed(1), fit.i23.toFixed(1), (fit.i34 || 0).toFixed(1), (fit.iPod || 0).toFixed(1)))
    : '';
  const sizeTxt = P.shape === 'circle' ? `Ø${P.W}` : `${P.W} × ${P.D}`;
  const lidTxt = P.lidOn && !dbl() ? t('infoLid', LID.r * 2, (RIDGE_H + P.lidH + LID.h).toFixed(1)) : '';
  document.getElementById('dims').textContent =
    t('infoDims', sizeTxt, total.toFixed(1), lidTxt, ms.toFixed(0), fitTxt);
  const warn = [];
  if (fit && !fit.ok) warn.push(t('wFit'));
  if (!noBat()) {
    const { w, d } = wireSlotSize();
    if (!insideInner(Math.abs(P.wireX) + w / 2, Math.abs(P.wireY) + d / 2))
      warn.push(t('wWireWall'));
  }
  const flatFoot = batFlatFoot();
  if (!noBat() && !batStand() && !insideInner(flatFoot.w / 2, flatFoot.d / 2))
    warn.push(t('wBatFit', flatFoot.w, flatFoot.d));
  const ef = espFoot();
  const eRect = noBat()
    ? { x: espDock().x, y: espDock().y, w: ESP.l + POCKET_CLR, d: ESP.w + POCKET_CLR }
    : { x: P.espX, y: P.espY, w: ef.w, d: ef.d };
  const mc = modCenter();
  const mod = modSpec();
  const mRect = noBat() ? null : { x: mc.x, y: mc.y, w: mod.l + POCKET_CLR, d: mod.w + POCKET_CLR };
  const bRect650 = batStand()
    ? { x: P.batX, y: 0, w: batSpec().T + batSpec().clr, d: batSpec().L + batSpec().clr } : null;
  const bRectFlat = !noBat() && !batStand()
    ? { x: 0, y: 0, w: flatFoot.w, d: flatFoot.d } : null;
  if (bRect650) {
    if (!insideInner(Math.abs(P.batX) + bRect650.w / 2, bRect650.d / 2))
      warn.push(t('wBatStandFit', batSpec().T, batSpec().L));
    if (rectsOverlap(bRect650, eRect)) warn.push(t('wBatStandEsp'));
    if (rectsOverlap(bRect650, mRect)) warn.push(t('wBatStandMod'));
    if (F2_PART_BASE + batSpec().W > P.f2H + P.f3H - F3_PLATE - 0.3)
      warn.push(t('wBatStandTop', batSpec().W));
  }
  if (noBat()) {
    // 도킹 모드: 동쪽 벽에 붙는 건 정상 — Y 방향과 가로 수납만 검사
    if (P.shape !== 'circle' && Math.abs(P.espY) + (ESP.w + POCKET_CLR) / 2 > innerHalfD() - 1)
      warn.push(t('wEspWallYNoBat'));
    if (eRect.x - eRect.w / 2 < -innerHalfW() + 0.5)
      warn.push(t('wEspWidthNoBat', ESP.l));
  } else if (!insideInner(Math.abs(P.espX) + ef.w / 2, Math.abs(P.espY) + ef.d / 2)) warn.push(t('wEspWall'));
  if (espStand() && espBaseZ() + (espUsbDown() ? ESP.l : ESP.w) > P.f2H + P.f3H - F3_PLATE - 0.3)
    warn.push(t('wEspStandTop', espUsbDown() ? ESP.l : ESP.w));
  if (!noBat() && P.shape !== 'circle' && Math.abs(P.modY) + (mod.w + POCKET_CLR) / 2 > innerHalfD() - 1) warn.push(t('wModWall'));
  if (!noBat() && P.shape !== 'circle' && mc.edgeX < mod.l - 2) warn.push(t('wModCurve'));
  if (!noBat() && P.modType === 'tp4056') warn.push(t('wTp4056Power'));
  const espLifted = espLiftActive();
  if (mRect && rectsOverlap(eRect, mRect)) {
    if (!espLifted) warn.push(t('wEspModOverlap'));
    else {
      const clearance = espHeader4Active()
        ? ESP_HEADER4.pinBelow + ESP_HEADER4.blockH : P.espLift;
      if (clearance < mod.h + 0.8)
        warn.push(t('wEspLiftLow', clearance, mod.h, (mod.h + 1).toFixed(0)));
    }
  }
  if (espLifted && espLiftTopZ() - LIFT_SINK + ESP.h > P.f2H + P.f3H - F3_PLATE - 0.3)
    warn.push(t('wEspLiftTop'));
  if (espLifted) {
    const beamRect = P.espRot === 90
      ? { x: P.espX, y: 0, w: 8, d: effD() } : { x: 0, y: P.espY, w: P.W, d: 8 };
    if (mRect && rectsOverlap(beamRect, mRect)) warn.push(t('wBeamMod'));
    if (bRect650 && rectsOverlap(beamRect, bRect650)) warn.push(t('wBeamBat'));
  }
  if (P.oledSide !== 'none') {
    const of = oledFrame();
    // OLED 타워 footprint (월드 좌표)
    const tD = (of.dHalf - of.seatY) + oledSpec().t + 3.0;
    const tW = oledTowerW() + 1.2;
    const tower = P.oledSide === 'W'
      ? { x: -(P.W / 2 - tD / 2), y: 0, w: tD, d: tW }
      : { x: 0, y: (P.oledSide === 'N' ? 1 : -1) * (effD() / 2 - tD / 2), w: tW, d: tD };
    if (rectsOverlap(eRect, tower)) warn.push(t('wEspTower'));
    if (mRect && rectsOverlap(mRect, tower)) warn.push(t('wModTower'));
    if (P.ledOn && rectsOverlap({ x: P.ledX, y: P.ledY, w: ledSpec().fl, d: ledSpec().fl }, tower))
      warn.push(t('wLedTower'));
    if (bRect650 && rectsOverlap(bRect650, tower)) warn.push(t('wBatTower'));
    if (bRectFlat && oledTowerBase() < 0 && rectsOverlap(bRectFlat, tower)) warn.push(t('wOledBat'));
    if (oledTowerTop() - P.f2H > P.f3H - F3_PLATE - 0.3)
      warn.push(t('wTowerTop'));
    if (of.seatY < oledSpec().t + 4)
      warn.push(t('wOledBig'));
  }
  if (!noBat() && !batStand() && P.f1H < F1_PLATE + batSpec().T + 1.2) warn.push(t('wF1Low'));
  // 스위치 홀더 컵 하단 (3층 로컬 z)
  if (oledCoverNeeded() && coverRibL() < COVER.ribL - 0.01)
    warn.push(t('wCoverRib', coverRibL().toFixed(1), COVER.ribL));
  const cupBotZ = P.f3H + effBossH() - P.standSink - SW.seatH - SW.floorT;
  if (cupBotZ < 0.5)
    warn.push(t('wSwThrough'));
  if (dbl()) {
    if (P.D < 60) warn.push(t('wDblD'));
    if (P.swGap < 29) warn.push(t('wSwGap'));
    if (P.swGap / 2 + 14.4 > innerHalfD())
      warn.push(t('wCharWall'));
  }
  if (P.lidOn && !dbl() && LID.r * 2 > Math.min(P.W, effD()) + 0.1)
    warn.push(t('wLidWide', LID.r * 2));
  if (P.ledOn) {
    const lfr = ledSpec().fl / 2 + 0.1;   // 플랜지 반경 + 여유
    if (!insideInner(Math.abs(P.ledX) + lfr, Math.abs(P.ledY) + lfr))
      warn.push(t('wLedWall'));
    const ox = (P.bossOn ? 10.5 : SW.cup / 2) + lfr, oy = (P.bossOn ? 11.5 : SW.cup / 2) + lfr;
    if (Math.abs(P.ledX) < ox && Math.abs(P.ledY) < oy)
      warn.push(t('wLedBoss'));
    if (P.lidOn && !dbl() && Math.hypot(P.ledX, P.ledY) + lfr > LID.r - LID.bandW - 0.6)
      warn.push(t('wLedBand'));
  }
  if (P.lidOn && !dbl() && P.lidH + LID.innerH < charTopOverLid() + 0.3)
    warn.push(t('wLidChar', Math.max(0, charTopOverLid() + 0.5 - LID.innerH).toFixed(1)));
  const cupRect = { x: 0, y: 0, w: SW.cup, d: SW.cup + (dbl() ? P.swGap : 0) };
  if (bRect650 && rectsOverlap(bRect650, cupRect) && F2_PART_BASE + batSpec().W > P.f2H + cupBotZ - 0.3)
    warn.push(t('wBatCup'));
  const espTopLocal = espStand()
    ? espBaseZ() + (espUsbDown() ? ESP.l : ESP.w)
    : (espLifted ? espLiftTopZ() - LIFT_SINK : F2_PART_BASE + P.espZ) + ESP.h;
  if ((espStand() || espLifted) && rectsOverlap(eRect, cupRect) &&
      espTopLocal > P.f2H + cupBotZ - 0.3)
    warn.push(t('wEspCup'));
  if (P.bzOn) {
    const side = P.bzMount === 'f2s';
    if (P.bzMount === 'f2' && nfcFits() && !nfcOnF1()) {
      const cable = bzCableTSpec();
      const pinHitsNfc = [-1, 1].some(sign =>
        Math.hypot(P.bzX + sign * P.bzPinPitch / 2 - P.nfcX, P.bzY - P.nfcY)
          < P.nfcD / 2 + P.bzPinD / 2);
      const barHitsNfc = circleRectOverlap(P.nfcX, P.nfcY, P.nfcD / 2,
        { x: P.bzX, y: P.bzY, w: cable.barW, d: cable.barL });
      const stemHitsNfc = circleRectOverlap(P.nfcX, P.nfcY, P.nfcD / 2,
        { x: P.bzX - cable.stemOut / 2, y: P.bzY,
          w: cable.stemOut, d: cable.stemW });
      if (pinHitsNfc || barHitsNfc || stemHitsNfc) warn.push(t('wBzPinsNfc'));
    }
    if (P.bzMount === 'f2' && !P.f1On) warn.push(t('wBzPinsBottom'));
    const hx2 = side ? (BZ.h + 0.5) / 2 : BZ.d / 2 + BZ.clr;
    const hy2 = BZ.d / 2 + BZ.clr;
    const bzR = { x: P.bzX, y: P.bzY, w: hx2 * 2, d: hy2 * 2 };
    const wallHit = P.shape === 'circle'
      ? (side ? Math.hypot(Math.abs(P.bzX) + hx2, Math.abs(P.bzY) + hy2)
              : Math.hypot(P.bzX, P.bzY) + hx2) > P.W / 2 - P.wall + 0.1
      : !insideInner(Math.abs(P.bzX) + hx2, Math.abs(P.bzY) + hy2);
    if (wallHit) warn.push(t('wBzWall'));
    if (P.bzMount === 'f3') {
      if (rectsOverlap(bzR, cupRect))
        warn.push(t('wBzCup'));
      if (P.ledOn && Math.hypot(P.ledX - P.bzX, P.ledY - P.bzY) < BZ.d / 2 + BZ.clr + ledSpec().fl / 2 + 0.3)
        warn.push(t('wBzLed'));
      if (P.f3H - F3_PLATE < BZ.h)
        warn.push(t('wBzThick', (BZ.h - P.f3H + F3_PLATE).toFixed(1)));
    } else {
      if (rectsOverlap(bzR, eRect)) warn.push(t('wBzEsp'));
      if (mRect && rectsOverlap(bzR, mRect)) warn.push(t('wBzMod'));
      const bzTop = F2_PART_BASE + F2_PLATFORM + (side ? BZ.d - BZ.sideSink : BZ.h - BZ.sink);
      if (side) {
        // 3층 파임은 자동 — 관통·스위치 포켓 침범만 경고
        if (bzTop > P.f2H + P.f3H - 0.3)
          warn.push(t('wBzLayFlipThrough'));
        if (bzTop > P.f2H + cupBotZ &&
            rectsOverlap(bzR, { x: 0, y: 0, w: P.swBodyX + 2, d: P.swBodyY + 2 }))
          warn.push(t('wBzLayPocket'));
        else if (bzTop > P.f2H + cupBotZ && rectsOverlap(bzR, cupRect))
          warn.push(t('wBzLayCup'));
      } else {
        if (rectsOverlap(bzR, cupRect) && bzTop > P.f2H + cupBotZ - 0.2)
          warn.push(t('wBzCupBelow'));
        else if (bzTop > P.f2H + P.f3H - F3_PLATE - 0.3)
          warn.push(t('wBzTop'));
      }
    }
  }
  // ESP32 USB 내밀기: 포켓이 벽을 파고 들어간 만큼 벽살이 얇아진다 (USB 벽 얇게와 겹쳐서 계산)
  const wallAtPort = P.shape === 'circle' ? USB_PAD.t : P.wall;
  // 패널을 판 뒤 남는 살에서 다시 espOut 만큼 안쪽이 파이므로, 둘을 겹쳐서 실제 남는 두께를 본다
  const usbWall = P.usbThin ? Math.max(USB_MIN_WALL, Math.min(wallAtPort, P.usbWallT)) : wallAtPort;
  if (noBat() && P.espAutoDock && P.espOut > 0) {
    const left = usbWall - P.espOut;
    if (left < 0.8) warn.push(t('wEspOutWall', left.toFixed(1)));
  }
  // 자동 도킹을 끈 상태: 커넥터가 벽에서 멀면 케이블이 안 닿는다
  if (noBat() && !P.espAutoDock) {
    const gap = espDock().edgeX - (P.espX + ESP.l / 2);
    if (gap > 2) warn.push(t('wEspDockGap', gap.toFixed(1)));
  }
  if (noBat() && P.usbThin && Math.min(wallAtPort - P.usbWallT, wallAtPort - USB_MIN_WALL) <= 0.05)
    warn.push(t('wUsbThinNoop', wallAtPort.toFixed(1)));
  // ESP32 집게 홈: 벽에 막혀 클립되면 손가락이 안 들어간다
  if (P.espGripOn && !espStand() && !espLifted) {
    const dk = noBat() ? espDock() : null;
    const gw = dk ? ESP.l + POCKET_CLR : ef.w, gd = dk ? ESP.w + POCKET_CLR : ef.d;
    const room = espGripRoom(dk ? dk.x : P.espX, dk ? dk.y : P.espY, gw, gd);
    const best = Math.max(room.x, room.y);
    if (best < 2) warn.push(t('wEspGripRoom', best.toFixed(1)));
  }
  // 납땜 릴리프: 바닥판을 더 파므로 남는 살 + 아래 NFC 포켓과의 막 두께를 본다
  if (P.solderOn && !espStand() && !espLifted) {
    const chBot = F2_PART_BASE + P.espZ - P.solderD;   // 채널 바닥 z
    if (chBot < 0.8) warn.push(t('wSolderFloor', chBot.toFixed(2)));
    if (nfcFits() && !nfcOnF1()) {   // 릴리프는 2층 바닥판 — 1층 포켓과는 만나지 않는다
      const dk = noBat() ? espDock() : null;
      const cx = dk ? dk.x : P.espX, cy = dk ? dk.y : P.espY;
      const alongX = dk ? true : P.espRot !== 90;
      for (const rect of espSolderRects(cx, cy, alongX)) {
        if (circleRectOverlap(P.nfcX, P.nfcY, P.nfcD / 2, rect)) {
          const skin = chBot - nfcTop();
          if (skin <= 0) warn.push(t('wSolderNfcHit', (-skin).toFixed(2)));
          else if (skin < 0.39) warn.push(t('wSolderNfc', skin.toFixed(2)));
          break;
        }
      }
    }
  }
  // NFC 스티커 포켓: 바닥판 안에 완전히 묻혀야 하고(위·아래 살), 옆면·배선구멍과 겹치면 안 됨
  if (P.nfcOn) {
    const nr = P.nfcD / 2, plate = nfcPlate(), fl = nfcOnF1() ? '1' : '2';
    if (nfcOnF1() && !P.f1On) warn.push(t('wNfcNoF1'));
    if (nfcTop() > plate - 0.4)
      warn.push(t('wNfcThick', fl, plate.toFixed(1), (plate - 0.4 - P.nfcBase).toFixed(1)));
    if (nfcOnF1()) {
      // 1층 바닥판은 외곽까지 꽉 찬 판 — 결합 홈은 없지만 옆면 살(+측면 텍스처 깊이)은 남겨야 한다
      const skin = 1.2 + (P.texKey !== 'none' ? P.texDepth : 0);
      if (!circleInsideInset(P.nfcX, P.nfcY, nr, skin))
        warn.push(t('wNfcWallF1', P.nfcD.toFixed(1), skin.toFixed(1)));
    } else {
      // 결합 홈(rabbet)은 외곽 inset wall+0.6 까지 z1.75 를 파낸다 — 포켓이 거기 닿으면 옆이 뚫림
      if (!circleInsideInset(P.nfcX, P.nfcY, nr, P.wall + 0.6))
        warn.push(t('wNfcWall', P.nfcD.toFixed(1)));
      if (!noBat()) {
        const { w, d } = wireSlotSize();
        if (rectsOverlap({ x: P.nfcX, y: P.nfcY, w: P.nfcD, d: P.nfcD },
                         { x: P.wireX, y: P.wireY, w, d }))
          warn.push(t('wNfcWire'));
      }
    }
  }
  document.getElementById('warnings').textContent = warn.join('\n');
}

// ------------------------------------------------------------------
// STL 내보내기
// ------------------------------------------------------------------
const exporter = new STLExporter();
function downloadSTL(geo, name) {
  const mesh = new THREE.Mesh(geo);
  const data = exporter.parse(mesh, { binary: true });
  const blob = new Blob([data], { type: 'application/octet-stream' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

function exportFloor(i, name) {
  if (!exportGeos[i]) return;
  let geo = (texGeos[i] || exportGeos[i]).clone();   // 무늬가 켜져 있으면 무늬 있는 쪽
  if (i === 2 && document.getElementById('flip3').checked) {
    geo.rotateX(Math.PI);
    geo.computeBoundingBox();
    geo.translate(0, 0, -geo.boundingBox.min.z);
  }
  // OLED Z를 1층 쪽으로 내린 분리 포드도 베드 아래 좌표 없이 바로 슬라이싱할 수 있게 정렬.
  if (i === 4) {
    geo.computeBoundingBox();
    geo.translate(0, 0, -geo.boundingBox.min.z);
  }
  downloadSTL(geo, name);
}

// 테스트 내보내기: 조립 위치의 1·2층에서 OLED 타워 주변만 크롭한 조각.
// OLED가 층 경계에서 나뉘면 양쪽을 CSG 결합해 하나의 테스트 파트로 저장한다.
// 분리 포드 모드면 같은 방식으로 소켓 레일·개구 구간이 잘려 나옴 (포드는 ex5로 따로)
function exportOledTest() {
  if (!exportGeos[1] || P.oledSide === 'none') return;
  const { m, seatY, proud, outHalf } = oledFrame();
  const backY = seatY - oledSpec().t - 2.0 - 5;          // 소켓 뒤판까지 포함
  const frontY = outHalf + proud + 2;
  const base1 = f1BaseH();
  const cropZ0 = -0.3;
  const cropZ1 = base1 + oledTowerTop() + 1;
  const crop = () => boxBrush(oledTowerW() + 8, frontY - backY, cropZ1 - cropZ0,
                              0, (frontY + backY) / 2, cropZ0, 0, m);

  // exportGeos[1]은 2층 로컬 좌표이므로 조립 높이로 이동한 다음 자른다.
  let floor2 = toMan(exportGeos[1]);
  if (base1 > 0) {
    const assembled = floor2.translate([0, 0, base1]);
    floor2.delete();
    floor2 = assembled;
  }
  let piece = inter(floor2, crop());

  // 내려간 OLED 타워/소켓의 하단은 1층 형상에 들어 있다. 같은 영역을 잘라
  // 위쪽 조각과 union하여 슬라이서에서 하나의 연속 파트로 인식되게 한다.
  if (P.f1On && exportGeos[0] && oledCaseBaseZ() < 0)
    piece = add(piece, inter(toMan(exportGeos[0]), crop()));

  // 결합 후 가장 낮은 면을 출력 베드(Z=0)에 놓는다.
  const minZ = piece.boundingBox().min[2];
  if (Math.abs(minZ) > 1e-6) {
    const onBed = piece.translate([0, 0, -minZ]);
    piece.delete();
    piece = onBed;
  }
  const geo = manToGeo(piece);
  piece.delete();
  downloadSTL(geo, 'oled_fit_test.stl');
}
document.getElementById('ex1').addEventListener('click', () => exportFloor(0, 'floor1_battery.stl'));
document.getElementById('ex2').addEventListener('click', () => exportFloor(1, 'floor2_esp32.stl'));
document.getElementById('ex3').addEventListener('click', () => exportFloor(2, 'floor3_switch_lid.stl'));
document.getElementById('ex4').addEventListener('click', () => exportFloor(3, 'floor4_bun_lid.stl'));
document.getElementById('ex5').addEventListener('click', () => exportFloor(4, 'oled_pod.stl'));
document.getElementById('ex6').addEventListener('click', () => exportFloor(5, 'oled_back_cover.stl'));
document.getElementById('exOledTest').addEventListener('click', exportOledTest);

// ------------------------------------------------------------------
// 제품 선택(딤섬 / 투두 / 운동 센서) — 메뉴 섹션 표시 전환 + 리빌드
function applyProductUI() {
  document.body.classList.toggle('prod-dimsum', P.product === 'dimsum');
  document.body.classList.toggle('prod-todo', P.product === 'todo');
  document.body.classList.toggle('prod-workout', P.product === 'workout');
  const titleKey = P.product === 'workout' ? 'titleWorkout' : P.product === 'todo' ? 'titleTodo' : 'title';
  const heading = document.querySelector('.phead h1');
  if (heading) heading.textContent = t(titleKey);
  document.title = t(titleKey);
  const wiringProduct = P.product === 'dimsum' || P.product === 'workout';
  const wo = document.getElementById('wireOverlay');
  if (wo) wo.style.display = (wiringProduct && wiresOn) ? '' : 'none';
  wireGroup.visible = wiringProduct && wiresOn;
  const wireBtn = document.getElementById('wiresBtn');
  if (wireBtn) wireBtn.style.display = wiringProduct ? '' : 'none';
}
const productSel = document.getElementById('product');
productSel.value = P.product;
productSel.addEventListener('change', e => {
  P.product = e.target.value;
  saveParams();
  applyProductUI();
  rebuild();
});
// 투두 서포터 연결: 엔진 기능만 주입해 rebuildTodo를 받아온다 (todo.js는 app.js를 모름)
({ rebuildTodo } = initTodo({
  THREE, P, t, G, MATS, matCase, matCaseX, ASSETS, ESP, OLED_TYPES,
  boxBrush, add, sub, meshBrush, manToGeo, downloadSTL, status, queueRebuild,
  markRulers, setRulerExtras,
  getView: () => ({ xray, showGhosts }),
  clearFloors: () => { floorMeshes = [null, null, null, null]; exportGeos = [null, null, null, null]; texGeos = [null, null, null, null]; },
  texturize,
}));
// 운동 모션 센서 연결: 본체/뚜껑 2피스와 제품 전용 분해 위치를 주입한다.
({ rebuildWorkout, applyWorkoutExplode, drawWorkoutWires } = initWorkout({
  THREE, P, t, G, MATS, matCase, matCaseX, boxBrush, add, sub,
  meshBrush, ASSETS,
  manToGeo, downloadSTL, status, queueRebuild, markRulers, setRulerExtras,
  getView: () => ({ xray, showGhosts }),
  clearFloors: () => { floorMeshes = [null, null, null, null]; exportGeos = [null, null, null, null]; },
  setFloorMeshes: meshes => { floorMeshes = meshes; },
  refreshWires: updateWires,
}));
applyProductUI();

// 언어 선택 UI 연결 + 저장된 언어로 초기 텍스트 적용 (기본 English)
const langSel = document.getElementById('lang');
if (langSel) {
  langSel.value = LANG;
  langSel.addEventListener('change', e => setLang(e.target.value));
}
// 설정 버튼 → 중앙 팝업(모달) 열기/닫기
const settingsModal = document.getElementById('settingsModal');
const openSettings = () => { settingsModal.hidden = false; };
const closeSettings = () => { settingsModal.hidden = true; };
document.getElementById('settingsBtn').addEventListener('click', openSettings);
document.getElementById('settingsClose').addEventListener('click', closeSettings);
settingsModal.addEventListener('click', e => { if (e.target === settingsModal) closeSettings(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !settingsModal.hidden) closeSettings(); });
applyStaticI18n();
applyProductUI();
syncToggleLabels();

// ------------------------------------------------------------------
Promise.all([
  loadAssets(),
  ManifoldModule({ locateFile: () => manifoldWasmUrl }).then(w => { w.setup(); M = w; }),
]).then(() => (P.texKey !== 'none' ? setTexture(P.texKey) : rebuild())).catch(e => {
  document.getElementById('warnings').textContent = t('initError', e);
  console.error(e);
});
