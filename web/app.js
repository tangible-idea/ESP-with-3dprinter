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

// ------------------------------------------------------------------
// 부품 실측 상수 (mm)
// ------------------------------------------------------------------
// 배터리 종류별 실측 — L=길이, W=폭(세움 시 높이), T=두께(세움 시 끼움 방향)
const BAT_TYPES = {
  '520': { L: 36.5, W: 28.5, T: 4.3, clr: 0.7 },
  '650': { L: 40,   W: 20,   T: 8,   clr: 0.5 },
};
const batSpec = () => BAT_TYPES[P.batType] || BAT_TYPES['520'];
const noBat = () => P.batType === 'none';   // 배터리 없음: 충전모듈도 빠지고 ESP32가 USB 직결
const batStand = () => !noBat() && P.batPose === 'stand';
const espStand = () => !noBat() && ['s0', 's90', 'u0', 'u90'].includes(P.espRot);
const ESP = { l: 24, w: 18, h: 4.2, usbZ: 2.6 };   // usbZ = USB 셸 z중심 (실측 1.0~4.2)
const MOD = { l: 19, w: 14, h: 4.5, usbZ: 2.9, usbOver: 1.0 }; // USB가 x끝에서 1mm 돌출
// OLED 종류별 실측 (win: 디스플레이 창, winC: 모듈 바닥 기준 창 중심 높이)
const OLED_TYPES = {
  '049': { w: 15, hgt: 16, t: 2.4, winW: 13.5, winH: 8, winC: 8.9 },
  '096': { w: 26, hgt: 26, t: 3.5, winW: 23.2, winH: 12.4, winC: 12.0,
           pegs: { pitch: 22, d: 1.8, len: 2.0 } },   // 모서리 4홀(22×22)용 위치결정 핀
};
const OLED_HCLR = 0.2;   // OLED 세로(높이) 삽입 여유 — 헐렁하면 빠지므로 타이트하게
const OLED_FACE_T = 0.6; // OLED 앞(바깥) 벽 두께 — 매우 얇게 (0.4 노즐 기준 한계 근처)
const oledSpec = () => OLED_TYPES[P.oledType] || OLED_TYPES['049'];
const effBossH = () => P.bossOn ? P.bossH : 0;   // 스위치 보스(둔덕) 끄면 상판에 바로 매립
const oledTowerW = () => oledSpec().w + 3;                             // 좌우 레일 1.25씩
const oledTowerTop = () => 4.2 + oledSpec().hgt + OLED_HCLR + 1.2;     // 턱 4.2 + 모듈 + 여유 + 천장 1.2
// MX 스위치 홀더 (Mechanical Key Holder V3 실측 기반)
const SW = {
  body: 14.3,        // 스위치 몸통 포켓 한 변 (14 + 여유)
  seatH: 5.5,        // 몸통 바닥 → 플랜지 아래면 높이
  floorT: 3.0,       // 홀더 바닥(구멍 뚫리는 판) 두께
  cup: 20,           // 홀더 컵 바깥 한 변
  H: 17.9,           // 스위치 전체 높이 (고스트/캐릭터 배치용)
  pinLen: 3.1,       // 몸통 바닥 아래 핀/기둥 돌출 길이 (구멍에 꽂힘)
  // 바닥 구멍 [x, y, Ø]: 중앙 기둥 1 + 구리선 4 (핀 2 + 다리 2, 스위치 180° 장착 기준)
  holes: [[0, 0, 4.3], [5.0, 0, 1.8], [-5.0, 0, 1.8], [3.8, -2.7, 1.8], [-2.7, -5.2, 1.8]],
};
const F1_PLATE = 1.6, F2_PLATE = 2.0, F2_PLATFORM = 2.2, F3_PLATE = 3.2;
const RIDGE_H = 1.5, RIDGE_W = 1.2;   // 아래층 턱 높이/폭
const RABBET = { out: 0.7, d: 1.8 };  // 위층 바닥 단차 (외곽 inset 기준)
// 턱 바깥면 inset = RABBET.out + P.fitClr → 결합 유격을 슬라이더로 조절
const POCKET_CLR = 0.4;

// ------------------------------------------------------------------
// 파라미터 & UI 바인딩
// ------------------------------------------------------------------
const P = {
  shape: 'rect',   // 'rect' 둥근 네모 | 'circle' 완전 원형 (딤섬 찜기)
  W: 44, D: 39, R: 8, wall: 2.3, bands: true, fitClr: 0.08, jointV: true,
  f1H: 7.5, f2H: 16, f3H: 10, bossOn: true, bossH: 2.5, standSink: 2.5,
  espX: 0, espY: 8, espRot: 0, espLift: 0, modY: -9, oledSide: 'W', oledType: '049', oledProud: 0,
  batType: '520', batPose: 'flat', batX: -8,
  wireX: -6, wireY: -12, wireRot: 0, swGpio: 4, sdaGpio: 8, sclGpio: 9,
};

// 저장된 설정 복원 (localStorage)
try {
  const saved = JSON.parse(localStorage.getItem('dimsum-params') || '{}');
  for (const k in saved) if (k in P) P[k] = saved[k];
  // 구버전 호환: batPose 분리 전에는 batType '650' = 세워서 2층이었음
  if (saved.batType === '650' && !('batPose' in saved)) P.batPose = 'stand';
} catch (e) { /* 무시 */ }
const saveParams = () => {
  try { localStorage.setItem('dimsum-params', JSON.stringify(P)); } catch (e) { /* 무시 */ }
};

const sliders = ['W','D','R','wall','fitClr','f1H','f2H','f3H','bossH','standSink',
                 'espX','espY','espLift','modY','oledProud','batX','wireX','wireY'];
let rebuildTimer = null;
function queueRebuild() {
  saveParams();
  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(rebuild, 250);
}
for (const k of sliders) {
  const el = document.getElementById(k);
  const vl = document.getElementById(k + 'v');
  const dec = (+el.step < 0.1) ? 2 : 1;
  const show = () => { vl.textContent = (+el.value).toFixed(dec); };
  el.value = P[k];   // 저장값 반영
  el.addEventListener('input', () => { P[k] = +el.value; show(); queueRebuild(); });
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
// 모양 선택: 원형이면 W=지름, D/R 슬라이더는 비활성. 원형 전환 시 기본 Ø54 보장
function applyShapeUI() {
  const circ = P.shape === 'circle';
  document.getElementById('D').disabled = circ;
  document.getElementById('R').disabled = circ;
  applyBatUI();   // modY 등은 배터리 모드와 함께 결정
}
// 배터리 없음: 배터리·충전모듈 컨트롤 잠금, ESP32는 동쪽 벽 자동 도킹(X/회전/띄움 잠금)
function applyBatUI() {
  const nb = noBat();
  const circ = P.shape === 'circle';
  document.getElementById('batPose').disabled = nb;
  document.getElementById('batX').disabled = !batStand();
  document.getElementById('espX').disabled = nb;
  document.getElementById('espY').disabled = nb && circ;   // 원형 도킹은 항상 중앙
  document.getElementById('espRot').disabled = nb;
  document.getElementById('espLift').disabled = nb || espStand();
  document.getElementById('modY').disabled = nb || circ;   // 원형: 충전모듈은 항상 중앙 고정
  for (const id of ['wireX', 'wireY', 'wireRot']) document.getElementById(id).disabled = nb;
}
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
  applyShapeUI();
  queueRebuild();
});

document.getElementById('espRot').value = String(P.espRot);
document.getElementById('wireRot').value = String(P.wireRot);
document.getElementById('oledSide').value = P.oledSide;
document.getElementById('oledType').value = P.oledType;
document.getElementById('oledType').addEventListener('change', e => { P.oledType = e.target.value; queueRebuild(); });
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
document.getElementById('jointV').checked = P.jointV;
document.getElementById('jointV').addEventListener('change', e => { P.jointV = e.target.checked; queueRebuild(); });
document.getElementById('bossOn').checked = P.bossOn;
document.getElementById('bossH').disabled = !P.bossOn;
document.getElementById('bossOn').addEventListener('change', e => {
  P.bossOn = e.target.checked;
  document.getElementById('bossH').disabled = !P.bossOn;
  queueRebuild();
});
document.getElementById('espRot').addEventListener('change', e => {
  const v = e.target.value;
  P.espRot = (v === '0' || v === '90') ? +v : v;   // 's0'/'s90'/'u0'/'u90' = 세움
  applyBatUI();   // 띄움은 눕힘 전용
  queueRebuild();
});
document.getElementById('wireRot').addEventListener('change', e => { P.wireRot = +e.target.value; queueRebuild(); });
document.getElementById('oledSide').addEventListener('change', e => { P.oledSide = e.target.value; queueRebuild(); });
document.getElementById('bands').addEventListener('change', e => { P.bands = e.target.checked; queueRebuild(); });
document.getElementById('resetBtn').addEventListener('click', () => {
  localStorage.removeItem('dimsum-params');
  location.reload();
});

// 모든 UI 컨트롤을 현재 P 값으로 동기화 (프리셋 불러오기 후 호출)
function syncControls() {
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
  document.getElementById('batType').value = P.batType;
  document.getElementById('batPose').value = P.batPose;
  document.getElementById('bands').checked = P.bands;
  document.getElementById('jointV').checked = P.jointV;
  document.getElementById('bossOn').checked = P.bossOn;
  document.getElementById('bossH').disabled = !P.bossOn;
  applyShapeUI();
}

// 프리셋 내보내기/불러오기 (전체 설정 JSON)
document.getElementById('presetExport').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(P, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'dimsum-preset.json';
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
      saveParams();
      rebuild();
      document.getElementById('warnings').textContent = `✓ 프리셋 불러옴 (${n}개 항목 적용)`;
    } catch (err) {
      document.getElementById('warnings').textContent = '⚠ 프리셋 파일을 읽을 수 없습니다 (JSON 형식 오류)';
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
};

// 층 그룹 (분해/조립용)
const G = [new THREE.Group(), new THREE.Group(), new THREE.Group()];
G.forEach(g => scene.add(g));
let floorMeshes = [null, null, null];
let exportGeos = [null, null, null];

// ------------------------------------------------------------------
// 셰이프 헬퍼 (CSG: manifold WASM — 파이썬 생성기와 동일 엔진)
// ------------------------------------------------------------------
let M = null;   // manifold wasm 모듈 (초기화 후 할당)

function toMan(geo, matrix) {
  let g = geo;
  if (matrix) { g = geo.clone(); g.applyMatrix4(matrix); }
  const merged = BufferGeometryUtils.mergeVertices(g, 1e-5);
  const mesh = new M.Mesh({
    numProp: 3,
    vertProperties: new Float32Array(merged.attributes.position.array),
    triVerts: new Uint32Array(merged.index.array),
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
// 결합부 프로파일 — 기존(사각) / V형(계단식 58°, 홈 천장이 없어 서포트 불필요)
const V = { c: 1.8, hw: 1.2, d: 1.8, step: 0.3 };   // 중심 inset, 밑변 반폭, 깊이, 계단 높이

function topRidge(z) {   // 아래층 상단 턱
  if (!P.jointV) {
    const o = RABBET.out + P.fitClr;
    return ringBrush(o, o + RIDGE_W, RIDGE_H, z);
  }
  // V형: 계단식 삼각 단면 (5단, 높이 1.5 — 홈보다 0.3 낮아 꼭대기 여유)
  let r = null;
  for (let k = 0; k < 5; k++) {
    const hw = V.hw * (1 - (V.step * k) / V.d) - P.fitClr;
    if (hw <= 0.05) break;
    const ring = ringBrush(V.c - hw, Math.min(V.c + hw, P.wall), V.step + 0.02,
                           z + V.step * k);
    r = r ? add(r, ring) : ring;
  }
  return r;
}

function bottomJointCut(b) {   // 위층 바닥 결합부 컷
  if (!P.jointV) {
    return sub(b, ringBrush(RABBET.out, P.wall + 0.6, RABBET.d, -0.05));
  }
  // V형 홈: 계단마다 0.2mm씩 좁아져 최대 평면 오버행이 0.2mm → 서포트 프리
  for (let k = 0; k < 6; k++) {
    const hw = V.hw * (1 - (V.step * k) / V.d);
    b = sub(b, ringBrush(V.c - hw, V.c + hw, V.step + 0.04, V.step * k - 0.02));
  }
  return b;
}
const csgOp = (a, b, f) => { const r = a[f](b); a.delete(); b.delete(); return r; };
const add = (a, b) => csgOp(a, b, 'add');
const sub = (a, b) => csgOp(a, b, 'subtract');
const inter = (a, b) => csgOp(a, b, 'intersect');
const meshBrush = (geo, matrix) => toMan(geo, matrix);

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
  const [usb, sw, bat, esp, mod, oled, face] = await Promise.all([
    loadSTL(usbHoleUrl),
    loadSTL(switchMxUrl),
    loadSTL(batteryUrl),
    loadSTL(esp32Url),
    loadSTL(chargeModuleUrl),
    loadSTL(oledUrl),
    loadSTL(faceUrl),
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

function buildFloor1() {
  let b = extrude(baseShape(0), F1_PLATE);                       // 바닥판
  b = add(b, ringBrush(0, P.wall, P.f1H - F1_PLATE, F1_PLATE));  // 벽
  b = add(b, topRidge(P.f1H));   // 상단 턱
  // 배터리 고정 테두리 (눕힘 배치 전용 — 세움은 2층 소켓에 꽂음)
  // insideInner: 테두리 구멍 모서리가 원형/둥근 외곽 밖으로 나가면 CSG가 깨지므로 곡률 기준 검사
  const bs = batSpec();
  const bw = bs.L + bs.clr, bd = bs.W + bs.clr;
  if (!noBat() && !batStand() && insideInner(bw / 2 + 0.6, bd / 2 + 0.6)) {
    const rim = baseShape(P.wall);
    rim.holes.push(rrPath(THREE.Path, bw, bd, 2));
    b = add(b, extrude(rim, 1.2, F1_PLATE));
  }
  b = decoBands(b, [P.f1H * 0.55]);
  return b;
}

const espUsbDown = () => P.espRot === 'u0' || P.espRot === 'u90';   // USB 끝이 바닥
const espThinX = () => P.espRot === 's90' || P.espRot === 'u90';    // 두께 방향이 x축
// USB아래: 커넥터 끝이 바닥판에 1mm 박혀 고정 앵커 역할
const espBaseZ = () => espUsbDown() ? F2_PLATE - 1.0 : F2_PLATE;

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
const LIFT_SINK = 3.0;   // USB/부품 실루엣이 받침선에 파묻히는 깊이 (셸 위 1mm를 립이 덮음)
const USB_C_OFF = 7.5;   // 보드 중심 → USB 셸 중심 오프셋 (뒤집힌 후 길이축 +쪽)
function espLiftGeo(inflate = false) {
  const g = ASSETS.esp.clone();
  g.rotateY(Math.PI);                              // 뒤집기 — USB·부품면이 아래
  if (P.espRot === 90) g.rotateZ(Math.PI / 2);
  normalize(g);                                    // xy 중심, 바닥 z=0 (= USB 쉘 밑면)
  if (inflate) {
    g.scale(1.04, 1.04, 1.03);
    g.translate(0, 0, -0.15);
  }
  return g;
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
  if (P.shape === 'circle') {
    // 원형: 모듈은 무조건 중앙, 플랫 패드(두께 2.5) 안쪽면에 안착
    const edgeX = flatPadX() - 2.5;
    return { x: edgeX - 0.2 - MOD.l / 2, y: 0, edgeX };
  }
  // 동쪽 벽 안쪽면(곡률 반영)에 PCB 끝이 0.2 남기고 닿도록
  const edgeX = surfAt(Math.abs(P.modY) + MOD.w / 2 + 0.4, effD() / 2, P.W / 2, P.wall);
  return { x: edgeX - 0.2 - MOD.l / 2, y: P.modY, edgeX };
}
// 배터리 없음: ESP32가 충전모듈 자리(동쪽 벽)에 도킹 — USB가 벽 구멍으로 직결 (180° 회전)
function espDock() {
  if (P.shape === 'circle') {
    const edgeX = flatPadX() - 2.5;
    return { x: edgeX - 0.2 - ESP.l / 2, y: 0, edgeX };
  }
  const edgeX = surfAt(Math.abs(P.espY) + ESP.w / 2 + 0.4, effD() / 2, P.W / 2, P.wall);
  return { x: edgeX - 0.2 - ESP.l / 2, y: P.espY, edgeX };
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

function buildFloor2() {
  let b = extrude(baseShape(0), F2_PLATE);
  b = add(b, ringBrush(0, P.wall, P.f2H - F2_PLATE, F2_PLATE));
  b = add(b, topRidge(P.f2H));
  b = add(b, extrude(baseShape(P.wall), F2_PLATFORM, F2_PLATE));  // 포켓 플랫폼

  // 원형 모드: 동쪽 벽에 플랫 USB 패드 (사진 참조 디자인) — 곡면을 깎고 평평한 벽 세그먼트로 대체
  if (P.shape === 'circle') {
    const fx = flatPadX();
    const padTop = Math.max(8, P.f2H - 2.5);   // USB 구멍(상단 7.2)을 덮되 상단 림은 원형 유지
    // 평평한 벽 세그먼트: 바닥(z0)까지 내림 — 하단 결합 홈이 자연스럽게 관통해 박편이 안 생김
    b = add(b, boxBrush(2.5, 18, padTop, fx - 1.25, 0, 0));
    // 곡면 컷은 결합부(z<2.0) 위에서만 → 하단 링·스커트 온전히 보존
    b = sub(b, boxBrush(10, 18, padTop - 2.0, fx + 5, 0, 2.0));
  }

  // 포켓
  const ef = espFoot();
  const espLifted = !noBat() && !espStand() && P.espLift > 0;   // 2.5층: 레일 홈에 끼워 공중 배치
  // 세움: 실물 메시(USB 모양 포함)를 팽창시켜 그대로 절삭 → 꽂아서 고정
  // 배터리 없음: 충전모듈 자리에 도킹 (USB 끝이 벽 안쪽면에 붙음)
  const espPocket = () => noBat()
    ? boxBrush(ESP.l + POCKET_CLR, ESP.w + POCKET_CLR, F2_PLATFORM + 2,
               espDock().x, espDock().y, F2_PLATE, 1.5)
    : espStand()
    ? meshBrush(espStandGeo(true), new THREE.Matrix4().makeTranslation(P.espX, P.espY, espBaseZ()))
    : boxBrush(ef.w, ef.d, F2_PLATFORM + 2, P.espX, P.espY, F2_PLATE, 1.5);
  if (!espLifted) b = sub(b, espPocket());

  // 2.5층 받침 선(빔): 벽에서 벽까지 한 줄로 가로지르고, 보드 자리만 24mm 홈을 파냄 —
  // 보드가 홈에 안착해 공중에 뜨고(양끝 턱이 잡음), 옆 공간 아래로 충전모듈이 지나감
  if (espLifted) {
    const beamW = 8, shoulderH = 2.5;               // 선 폭 / 홈 양끝 턱 높이
    const topZ = F2_PLATE + P.espLift;              // 홈 바닥 = 보드 바닥
    const rot90 = P.espRot === 90;
    const span = P.W + effD();                      // 넉넉히 → 외곽으로 잘림
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
    const slotL = ESP.l + POCKET_CLR;
    b = sub(b, rot90
      ? boxBrush(beamW + 2, slotL, shoulderH + 1, P.espX, P.espY, topZ)
      : boxBrush(slotL, beamW + 2, shoulderH + 1, P.espX, P.espY, topZ));
    // 보드는 뒤집어(USB 아래) 안착 — USB/부품 밑면 실루엣을 실물 메시로 절삭 → 꽂아서 고정
    b = sub(b, meshBrush(espLiftGeo(true),
                         new THREE.Matrix4().makeTranslation(P.espX, P.espY, topZ - LIFT_SINK)));
    // 스냅 립: USB 홈 위 가장자리를 0.4mm씩 살짝 덮음 → 눌러 넣으면 셸이 찰칵 걸림
    const lipIn = 4.3, lipW = 1.3, lipH = 0.9, lipL = 5;
    for (const s of [-1, 1]) {
      b = add(b, rot90
        ? boxBrush(lipW, lipL, lipH, P.espX + s * (lipIn + lipW / 2), P.espY + USB_C_OFF, topZ - lipH)
        : boxBrush(lipL, lipW, lipH, P.espX + USB_C_OFF, P.espY + s * (lipIn + lipW / 2), topZ - lipH));
    }
  }
  // 충전모듈 포켓: 모듈이 직각 사각형이라 모서리 거의 직각(R0.4), 뒤쪽(USB 반대)으로 1mm 여유
  if (!noBat()) {
    const mc = modCenter();
    b = sub(b, boxBrush(MOD.l + POCKET_CLR + 1, MOD.w + POCKET_CLR, F2_PLATFORM + 2,
                        mc.x - 0.5, mc.y, F2_PLATE, 0.4));
  }

  // 세움 배터리 소켓 홈: 플랫폼을 관통해 바닥판 위에 세워서 꽂음 (두께×길이 세로 슬롯)
  if (batStand()) {
    const bs = batSpec();
    b = sub(b, boxBrush(bs.T + bs.clr, bs.L + bs.clr, F2_PLATFORM + 2,
                        P.batX, 0, F2_PLATE, 1.5));
  }

  // OLED 소켓 타워 — 2층 높이와 무관하게 항상 OLED가 다 들어가는 높이.
  // 2층 벽보다 높으면 3층 뚜껑의 노치(cutout)에 끼워짐 → 조립 키 역할.
  if (P.oledSide !== 'none') {
    const spec = oledSpec();
    const { m, seatY, proud, outHalf } = oledFrame();
    // 곡면 벽이면 모듈이 곡률 안쪽 평면(seatY)에 앉음 → 타워가 그만큼 깊어짐
    const towerBack = seatY - spec.t - 2.0;
    const towerD = outHalf - towerBack;
    const tTop = oledTowerTop();
    let tower = boxBrush(oledTowerW(), towerD, tTop - F2_PLATE,
                         0, outHalf - towerD / 2, F2_PLATE, 0, m);
    // 네모: 외곽 곡선(돌출 시 proud만큼 offset) 따라 자르기.
    // 원형: 자르지 않고 평평한 앞면 박스 그대로 → 네모 모드와 같은 포드 모양
    if (P.shape !== 'circle') tower = inter(tower, extrude(baseShape(-proud), tTop, 0));
    b = add(b, tower);
    // 뒤에서 장착: OLED 전체가 내부에서 통째로 들어가는 포켓.
    // 뒷면은 완전 개방(뒷벽 관통), 앞은 seatY 평면 + 디스플레이 창이 잡아줌. 위는 막힘.
    const pocketD = spec.t + 2.2 + proud;   // 뒷벽까지 완전 관통 (돌출 시 삽입 터널 연장)
    b = sub(b, boxBrush(spec.w + 0.5, pocketD, spec.hgt + OLED_HCLR,
                        0, seatY - pocketD / 2, 4.2, 0, m));
    // 디스플레이 창 (seatY 평면에서 외벽까지 관통 — 곡면이면 깊은 터널)
    const winDepth = (outHalf - seatY) + P.wall + 2;
    const wg = new THREE.ExtrudeGeometry(rrShape(spec.winW, spec.winH, 1.5), { depth: winDepth, bevelEnabled: false, curveSegments: 12 });
    wg.deleteAttribute('uv');
    wg.rotateX(-Math.PI / 2);
    wg.translate(0, seatY - 0.8, 4.2 + spec.winC);
    b = sub(b, toMan(wg, m));
    // 0.96": 모서리 4홀(22×22)용 위치결정 핀 — 안착면에서 포켓으로 돌출
    if (spec.pegs) {
      const pg = spec.pegs;
      const zc = 4.2 + spec.hgt / 2;   // 포켓 중심 높이
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
        const peg = new THREE.CylinderGeometry(pg.d / 2, pg.d / 2 - 0.2, pg.len, 12);
        peg.translate(sx * pg.pitch / 2, seatY - pg.len / 2 + 0.05,
                      zc + sz * pg.pitch / 2);   // 실린더 축 = y (벽 → 내부 방향)
        peg.deleteAttribute('uv');
        b = add(b, toMan(peg, m));
      }
    }
    // ESP32 포켓 우선: 타워 add로 메워진 부분을 다시 파내 ESP32 홈을 확보
    if (!espLifted) b = sub(b, espPocket());
  }

  // USB-C 구멍 — 배터리 없음이면 ESP32 USB 정면, 아니면 충전모듈 USB 정면 (원형이면 플랫 패드 관통)
  {
    const dk = noBat() ? espDock() : modCenter();
    const usbZ = noBat() ? ESP.usbZ : MOD.usbZ;
    const outerX = P.shape === 'circle'
      ? flatPadX()
      : surfAt(Math.abs(dk.y) + 5.5, effD() / 2, P.W / 2, 0);
    const L = Math.max(5.4, outerX + 0.4 - (dk.edgeX - 1.5));   // 원본 툴 길이 9 기준
    const usbM = new THREE.Matrix4()
      .makeTranslation(outerX + 0.4 - L / 2, dk.y, F2_PLATE + usbZ)
      .multiply(new THREE.Matrix4().makeScale(L / 9, 1, 1));
    b = sub(b, meshBrush(ASSETS.usb, usbM));
  }

  // 배터리 배선 구멍 (긴 슬롯 — +/− 두 가닥이 함께 통과, 가로/세로 회전 가능)
  if (!noBat()) {
    const ww = P.wireRot === 90 ? 5 : 14;
    const wd = P.wireRot === 90 ? 14 : 5;
    b = sub(b, boxBrush(ww, wd, F2_PLATE + F2_PLATFORM + 1, P.wireX, P.wireY, -0.4, 2.4));
  }

  // 바닥 rabbet + 장식 — 돌출 포드 구간은 장식 홈이 포드 내부를 뚫지 않게 보호
  b = bottomJointCut(b);
  // 돌출 > 0 또는 원형(평면 포드가 곡면 밖으로 나옴)이면 포드 보호 필요
  const podProtect = (P.oledSide !== 'none' && (P.oledProud > 0 || P.shape === 'circle')) ? () => {
    const spec = oledSpec();
    const { m, seatY, outHalf } = oledFrame();
    const backY = seatY - spec.t - 2.0;
    return boxBrush(oledTowerW(), outHalf - backY + 0.4, oledTowerTop(),
                    0, (outHalf + backY) / 2 + 0.2, 0, 0, m);
  } : null;
  b = decoBands(b, [P.f2H * 0.3, P.f2H * 0.66], podProtect);
  return b;
}

function buildFloor3() {
  let b = ringBrush(0, P.wall, P.f3H, 0);                             // 벽
  b = add(b, extrude(baseShape(P.wall - 0.1), F3_PLATE, P.f3H - F3_PLATE)); // 상판
  // 스위치 보스 (뚜껑 꼭지처럼 봉긋한 받침)
  const bossTop = P.f3H + effBossH();
  if (effBossH() > 0.1) {
    b = add(b, boxBrush(21, 23, effBossH(), 0, 0, P.f3H, 5));
  }
  // MX 스위치 홀더 (Key Holder V3 방식): 몸통 포켓 + 바닥에 중앙 1 + 구리선 4 구멍
  const seatZ = bossTop - P.standSink - SW.seatH;   // 스위치 몸통 바닥 안착면
  const cupBottom = seatZ - SW.floorT;
  // 컵 몸체: 보스/상판 아래로 매달리는 홀더 (기존 재료와 합쳐짐)
  b = add(b, boxBrush(SW.cup, SW.cup, bossTop - cupBottom, 0, 0, cupBottom, 3));
  // 몸통 포켓: 위로 개방 (보스 관통)
  b = sub(b, boxBrush(SW.body, SW.body, P.standSink + SW.seatH + 2, 0, 0, seatZ, 1));
  // 바닥 구멍: 중앙 기둥 1 + 구리선 4, 아래로 갈수록 넓어지는 깔때기 (배선 삽입 유도)
  for (const [hx, hy, hd] of SW.holes) {
    const flare = hd > 4 ? 1.0 : 0.6;   // 깔때기: 작은 구리선 구멍은 플레어도 작게
    const cyl = new THREE.CylinderGeometry(hd / 2, hd / 2 + flare, SW.floorT + 1.2, 24);
    cyl.rotateX(Math.PI / 2);   // 축을 z로
    cyl.translate(hx, hy, seatZ - SW.floorT / 2 - 0.05);
    cyl.deleteAttribute('uv');
    b = sub(b, toMan(cyl));
  }

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
  }

  b = decoBands(b, [P.f3H * 0.4]);
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
      G[1].add(ghostMesh(bg, MATS.bat, T(P.batX, 0, F2_PLATE)));
    } else if (P.batType === '520') {
      G[0].add(ghostMesh(ASSETS.bat, MATS.bat, T(0, 0, F1_PLATE)));   // 실물 STL
    } else {
      const bg = new THREE.BoxGeometry(bs.L, bs.W, bs.T);             // 650 눕힘: 박스 고스트
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
    G[1].add(ghostMesh(eg, MATS.esp, T(dk.x, dk.y, F2_PLATE)));
  } else if (espStand()) {
    G[1].add(ghostMesh(espStandGeo(), MATS.esp, T(P.espX, P.espY, espBaseZ())));
  } else if (P.espLift > 0) {
    // 2.5층: 뒤집힌 보드가 받침선 홈에 안착 (USB 실루엣 매립)
    G[1].add(ghostMesh(espLiftGeo(), MATS.esp, T(P.espX, P.espY, F2_PLATE + P.espLift - LIFT_SINK)));
  } else {
    const rot = P.espRot === 90 ? Math.PI / 2 : 0;
    const eg = ASSETS.esp.clone();
    eg.translate(-ESP.l / 2, -ESP.w / 2, 0);   // 중심 정렬 후 회전
    G[1].add(ghostMesh(eg, MATS.esp, T(P.espX, P.espY, F2_PLATE, rot)));
  }
  if (!noBat()) {
    const mg = ASSETS.mod.clone();
    mg.rotateZ(Math.PI);                        // USB를 +X로
    mg.translate(MOD.l / 2, MOD.w / 2, 0);      // 중심 (0,0) 정렬
    const mc = modCenter();
    G[1].add(ghostMesh(mg, MATS.mod, T(mc.x, mc.y, F2_PLATE)));
  }
  if (P.oledSide !== 'none') {
    const spec = oledSpec();
    const { m, seatY } = oledFrame();
    let og;
    if (P.oledType === '096') {   // 0.96"은 STL이 없어 간단 박스 고스트
      og = new THREE.BoxGeometry(spec.w, spec.t, spec.hgt);
      og.translate(0, seatY - spec.t / 2 - 0.15, 4.2 + spec.hgt / 2);
    } else {
      og = ASSETS.oled.clone();
      og.translate(-spec.w / 2, seatY - spec.t - 0.15, 4.2);
    }
    og.applyMatrix4(m);
    G[1].add(ghostMesh(og, MATS.oled));
  }
  // 3층: MX 스위치(실물) + 딤섬 캐릭터
  const seatZ3 = P.f3H + effBossH() - P.standSink - SW.seatH;
  const sg = ASSETS.switch.clone();
  sg.rotateZ(Math.PI);   // 핀 배치를 홀더 구멍(180° 장착 기준)에 정렬
  G[2].add(ghostMesh(sg, MATS.stand, T(0, 0, seatZ3 - SW.pinLen)));
  G[2].add(ghostMesh(ASSETS.face, MATS.face, T(0, 0, seatZ3 + (SW.H - SW.pinLen) + 1)));
}

// ------------------------------------------------------------------
// 리빌드
// ------------------------------------------------------------------
const status = document.getElementById('status');
function rebuild() {
  status.classList.add('on');
  setTimeout(() => {
    try {
      const t0 = performance.now();
      const builders = [buildFloor1, buildFloor2, buildFloor3];
      for (let i = 0; i < 3; i++) {
        G[i].clear();
        const man = builders[i]();
        const geo = manToGeo(man);
        man.delete();
        exportGeos[i] = geo;
        const mesh = new THREE.Mesh(geo, xray ? matCaseX : matCase);
        floorMeshes[i] = mesh;
        G[i].add(mesh);
      }
      placeGhosts();
      applyExplode();
      updateInfo(performance.now() - t0, checkFit());
    } catch (e) {
      document.getElementById('warnings').textContent = '⚠ 생성 오류: ' + e.message;
      console.error(e);
    }
    status.classList.remove('on');
  }, 10);
}

// 조립 간섭 자동 검사: 층을 실제 조립 위치에 놓고 교집합 부피 계산 (0이어야 정상)
function checkFit() {
  try {
    const vol = mm => (typeof mm.volume === 'function') ? mm.volume() : mm.getProperties().volume;
    const garbage = [];
    const g = x => { garbage.push(x); return x; };
    const m1 = g(toMan(exportGeos[0]));
    const m2 = g(g(toMan(exportGeos[1])).translate([0, 0, P.f1H]));
    const m3 = g(g(toMan(exportGeos[2])).translate([0, 0, P.f1H + P.f2H]));
    const i12 = vol(g(m1.intersect(m2)));
    const i23 = vol(g(m2.intersect(m3)));
    garbage.forEach(x => x.delete());
    return { i12, i23, ok: i12 < 0.5 && i23 < 0.5 };
  } catch (e) { return null; }
}

// 분해/조립
function applyExplode() {
  const e = +document.getElementById('explode').value;
  const gap = 26 * e;
  G[0].position.z = 0;
  G[1].position.z = P.f1H + gap;
  G[2].position.z = P.f1H + P.f2H + gap * 2;
  updateWires();
}
document.getElementById('explode').addEventListener('input', () => {
  document.getElementById('explodev').textContent = (+document.getElementById('explode').value).toFixed(2);
  applyExplode();
});

// ------------------------------------------------------------------
// 배선 시각화: 배터리 → 충전모듈 → ESP32 → OLED (실제 핀 배치 기반)
// ------------------------------------------------------------------
let wiresOn = true;
const wireGroup = new THREE.Group();
scene.add(wireGroup);
const WIRE_COLORS = { plus: 0xd63c2f, minus: 0x333333, sda: 0x2e9e57, scl: 0xe0a13a, gpio: 0x8e44ad };
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
  gpio: { key: 'swGpio', name: '스위치' },
  sda:  { key: 'sdaGpio', name: 'OLED SDA' },
  scl:  { key: 'sclGpio', name: 'OLED SCL' },
};

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
  wireGroup.clear();
  if (!wiresOn) return;
  try {
    const z1b = G[0].position.z, z2b = G[1].position.z;
    const mc = noBat() ? null : modCenter();

    // --- 배터리 → 충전모듈 B+/B− : 520은 1층에서 배선구멍 경유, 650은 2층 안에서 직접 ---
    const modW = mc ? mc.x - MOD.l / 2 : 0;                   // 모듈 서쪽(USB 반대) 끝
    const bz = z2b + F2_PLATE + 2;                            // 모듈 패드 높이
    const holeTop = z2b + F2_PLATE + F2_PLATFORM + 1.5;
    if (mc) for (const [sy, col, l1, l2] of [[+1, WIRE_COLORS.plus, '배터리 +', 'B+'],
                                             [-1, WIRE_COLORS.minus, '배터리 −', 'B−']]) {
      if (batStand()) {
        addWire([
          [P.batX + sy * 2, sy * 4, z2b + F2_PLATE + batSpec().W],
          [modW + 1.2, mc.y + sy * 4.5, bz + 4],
          [modW + 1.2, mc.y + sy * 4.5, bz],
        ], col, l1, l2);
      } else {
        const batTop = z1b + F1_PLATE + batSpec().T;
        const tabX = (P.wireX >= 0 ? 1 : -1) * (batSpec().L / 2 - 4);   // 배선구멍 쪽 끝에 탭
        addWire([
          [tabX, sy * 5, batTop],
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
        return [dk.x - dx, dk.y - dy, z2b + F2_PLATE + ESP.h];
      }
      // 세움: 보드 평면이 수직 → 폭(dy) 또는 길이(dx) 방향이 높이가 됨
      if (P.espRot === 's0')  return [P.espX + dx, P.espY, z2b + F2_PLATE + ESP.w / 2 + dy];
      if (P.espRot === 's90') return [P.espX, P.espY + dx, z2b + F2_PLATE + ESP.w / 2 + dy];
      if (espUsbDown()) {   // USB(−dx 끝)가 바닥 → 길이 방향이 수직
        const zP = z2b + espBaseZ() + ESP.l / 2 + dx;
        return P.espRot === 'u90' ? [P.espX, P.espY + dy, zP] : [P.espX + dy, P.espY, zP];
      }
      const [rx, ry] = P.espRot === 90 ? [-dy, dx] : [dx, dy];
      const lift = P.espLift > 0 ? P.espLift - LIFT_SINK : 0;   // 2.5층: 뒤집혀 매립된 만큼 보정
      return [P.espX + rx, P.espY + ry, z2b + F2_PLATE + lift + ESP.h];
    };
    const pin5V = espPin(...ESP_PINS['5V']), pinGND = espPin(...ESP_PINS.GND), pin3V3 = espPin(...ESP_PINS['3V3']);
    const pinSDA = espPin(...(ESP_PINS[P.sdaGpio] || ESP_PINS[8]));
    const pinSCL = espPin(...(ESP_PINS[P.sclGpio] || ESP_PINS[9]));

    // --- 충전모듈 OUT+/OUT− → ESP32 5V/GND (배터리 없음이면 USB 직결이라 생략) ---
    const arc = 6;   // 보드 위로 띄우는 높이
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, Math.max(a[2], b[2]) + arc];
    if (mc) {
      const outP = [modW + 3.5, mc.y + 6, bz], outM = [modW + 3.5, mc.y - 6, bz];
      addWire([outP, mid(outP, pin5V), pin5V], WIRE_COLORS.plus, 'OUT+', '5V');
      addWire([outM, mid(outM, pinGND), pinGND], WIRE_COLORS.minus, 'OUT−', 'GND');
    }

    // --- ESP32 → OLED (I2C: 3V3, GND, GPIO8=SDA, GPIO9=SCL) ---
    if (P.oledSide !== 'none') {
      const spec = oledSpec();
      const { m, seatY } = oledFrame();
      const pinZ = 4.2 + (P.oledType === '096' ? spec.hgt - 2.5 : 11.5);   // 핀 행 높이 (실측 도면)
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
      const pinSw = espPin(...(ESP_PINS[P.swGpio] || ESP_PINS[4]));
      const dropMid = (p, dst) =>
        [(p[0] + dst[0]) / 2, (p[1] + dst[1]) / 2, (below + dst[2]) / 2];
      const pinA = [3.8, -2.7], pinB = [-2.7, -5.2];   // 홀더 구리선 구멍 = 스위치 핀 위치
      addWire([[...pinA, seatZ3 + 1], [...pinA, below], dropMid(pinA, pinSw), pinSw],
              WIRE_COLORS.gpio, '스위치', 'G' + P.swGpio, 'gpio');
      addWire([[...pinB, seatZ3 + 1], [...pinB, below], dropMid(pinB, pinGND), pinGND],
              WIRE_COLORS.minus, null, null);
    }
  } catch (e) { /* 초기화 전 호출 등은 무시 */ }
}
document.getElementById('wiresBtn').addEventListener('click', e => {
  wiresOn = !wiresOn;
  e.target.textContent = '배선 표시: ' + (wiresOn ? '켬' : '끔');
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
  gpioTitle.textContent = role.name + ' GPIO 선택';
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

document.getElementById('ghostBtn').addEventListener('click', e => {
  showGhosts = !showGhosts;
  e.target.textContent = '부품 표시: ' + (showGhosts ? '켬' : '끔');
  G.forEach(g => g.traverse(o => { if (o.userData.ghost) o.visible = showGhosts; }));
});
document.getElementById('xrayBtn').addEventListener('click', e => {
  xray = !xray;
  e.target.textContent = '케이스 반투명: ' + (xray ? '켬' : '끔');
  floorMeshes.forEach(m => { if (m) m.material = xray ? matCaseX : matCase; });
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
function updateInfo(ms, fit) {
  const total = P.f1H + P.f2H + P.f3H + effBossH();
  const fitTxt = fit
    ? (fit.ok ? ' · 조립 간섭 없음 ✓' : ` · 조립 간섭 ${fit.i12.toFixed(1)}/${fit.i23.toFixed(1)}mm³ ⚠`)
    : '';
  const sizeTxt = P.shape === 'circle' ? `Ø${P.W}` : `${P.W} × ${P.D}`;
  document.getElementById('dims').textContent =
    `전체 ${sizeTxt} × ${total.toFixed(1)}mm (보스 포함) · CSG ${ms.toFixed(0)}ms${fitTxt}`;
  const warn = [];
  if (fit && !fit.ok) warn.push('⚠ 조립 시 층끼리 겹칩니다 — 부품 배치나 층 높이를 조정하세요');
  if (!noBat() && !batStand() && !insideInner(batSpec().L / 2 + 0.4, batSpec().W / 2 + 0.4))
    warn.push(`⚠ 배터리(${batSpec().L}×${batSpec().W})가 1층에 안 들어갑니다 — W/D를 키우거나 모서리를 줄이세요`);
  const ef = espFoot();
  const eRect = noBat()
    ? { x: espDock().x, y: espDock().y, w: ESP.l + POCKET_CLR, d: ESP.w + POCKET_CLR }
    : { x: P.espX, y: P.espY, w: ef.w, d: ef.d };
  const mc = modCenter();
  const mRect = noBat() ? null : { x: mc.x, y: mc.y, w: MOD.l + POCKET_CLR, d: MOD.w + POCKET_CLR };
  const bRect650 = batStand()
    ? { x: P.batX, y: 0, w: batSpec().T + batSpec().clr, d: batSpec().L + batSpec().clr } : null;
  if (bRect650) {
    if (!insideInner(Math.abs(P.batX) + bRect650.w / 2, bRect650.d / 2))
      warn.push(`⚠ 세운 배터리(${batSpec().T}×${batSpec().L})가 2층에 안 들어갑니다 — 세로 D를 키우거나 배터리 X를 옮기세요`);
    if (rectsOverlap(bRect650, eRect)) warn.push('⚠ 세운 배터리가 ESP32와 겹칩니다');
    if (rectsOverlap(bRect650, mRect)) warn.push('⚠ 세운 배터리가 충전모듈과 겹칩니다');
    if (F2_PLATE + batSpec().W > P.f2H + P.f3H - F3_PLATE - 0.3)
      warn.push(`⚠ 세운 배터리(높이 ${batSpec().W})가 3층 상판에 닿습니다 — 2·3층 높이를 키우세요`);
  }
  if (noBat()) {
    // 도킹 모드: 동쪽 벽에 붙는 건 정상 — Y 방향과 가로 수납만 검사
    if (P.shape !== 'circle' && Math.abs(P.espY) + (ESP.w + POCKET_CLR) / 2 > innerHalfD() - 1)
      warn.push('⚠ ESP32가 위/아래 벽과 겹칩니다 — ESP32 Y를 중앙 쪽으로 옮기세요');
    if (eRect.x - eRect.w / 2 < -innerHalfW() + 0.5)
      warn.push(`⚠ ESP32(길이 ${ESP.l})가 가로로 안 들어갑니다 — W를 키우세요`);
  } else if (!insideInner(Math.abs(P.espX) + ef.w / 2, Math.abs(P.espY) + ef.d / 2)) warn.push('⚠ ESP32가 벽과 겹칩니다');
  if (espStand() && espBaseZ() + (espUsbDown() ? ESP.l : ESP.w) > P.f2H + P.f3H - F3_PLATE - 0.3)
    warn.push(`⚠ 세운 ESP32(높이 ${espUsbDown() ? ESP.l : ESP.w})가 3층 상판에 닿습니다 — 2·3층 높이를 키우세요`);
  if (!noBat() && P.shape !== 'circle' && Math.abs(P.modY) + (MOD.w + POCKET_CLR) / 2 > innerHalfD() - 1) warn.push('⚠ 충전모듈이 위/아래 벽과 겹칩니다');
  if (!noBat() && P.shape !== 'circle' && mc.edgeX < MOD.l - 2) warn.push('⚠ 충전모듈이 곡면 벽과 맞지 않습니다 — Y를 중앙 쪽으로 옮기세요');
  const espLifted = !noBat() && !espStand() && P.espLift > 0;
  if (mRect && rectsOverlap(eRect, mRect)) {
    if (!espLifted) warn.push('⚠ ESP32와 충전모듈 포켓이 겹칩니다 — 띄움(2.5층)을 올리면 공존 가능');
    else if (P.espLift < MOD.h + 0.8)
      warn.push(`⚠ ESP32 띄움(${P.espLift})이 충전모듈 높이(${MOD.h})보다 낮습니다 — ${(MOD.h + 1).toFixed(0)} 이상으로 올리세요`);
  }
  if (espLifted && F2_PLATE + P.espLift - LIFT_SINK + ESP.h > P.f2H + P.f3H - F3_PLATE - 0.3)
    warn.push('⚠ 띄운 ESP32가 3층 상판에 닿습니다 — 띄움을 줄이거나 층 높이를 키우세요');
  if (espLifted) {
    const beamRect = P.espRot === 90
      ? { x: P.espX, y: 0, w: 8, d: effD() } : { x: 0, y: P.espY, w: P.W, d: 8 };
    if (mRect && rectsOverlap(beamRect, mRect)) warn.push('⚠ 2.5층 받침 선이 충전모듈 자리를 가로지릅니다 — ESP32 위치를 옮기세요');
    if (bRect650 && rectsOverlap(beamRect, bRect650)) warn.push('⚠ 2.5층 받침 선이 세운 배터리 자리를 가로지릅니다 — 위치를 조정하세요');
  }
  if (P.oledSide !== 'none') {
    const of = oledFrame();
    // OLED 타워 footprint (월드 좌표)
    const tD = (of.dHalf - of.seatY) + oledSpec().t + 3.0;
    const tW = oledTowerW() + 1.2;
    const tower = P.oledSide === 'W'
      ? { x: -(P.W / 2 - tD / 2), y: 0, w: tD, d: tW }
      : { x: 0, y: (P.oledSide === 'N' ? 1 : -1) * (effD() / 2 - tD / 2), w: tW, d: tD };
    if (rectsOverlap(eRect, tower)) warn.push('⚠ ESP32가 OLED 타워와 겹칩니다');
    if (mRect && rectsOverlap(mRect, tower)) warn.push('⚠ 충전모듈이 OLED 타워와 겹칩니다');
    if (bRect650 && rectsOverlap(bRect650, tower)) warn.push('⚠ 650 배터리가 OLED 타워와 겹칩니다');
    if (oledTowerTop() - P.f2H > P.f3H - F3_PLATE - 0.3)
      warn.push('⚠ OLED 타워가 3층 상판을 뚫습니다 — 2층 또는 3층 높이를 키우세요');
    if (of.seatY < oledSpec().t + 4)
      warn.push('⚠ OLED가 벽 폭/곡률에 비해 큽니다 — 지름(W)을 키우세요');
  }
  if (!noBat() && !batStand() && P.f1H < F1_PLATE + batSpec().T + 1.2) warn.push('⚠ 1층이 너무 낮습니다 (배터리 + 배선 공간 부족)');
  // 스위치 홀더 컵 하단 (3층 로컬 z)
  const cupBotZ = P.f3H + effBossH() - P.standSink - SW.seatH - SW.floorT;
  if (cupBotZ < 0.5)
    warn.push('⚠ 스위치 홀더가 뚜껑 아래로 뚫고 나갑니다 — 매립을 줄이거나 3층/보스를 키우세요');
  const cupRect = { x: 0, y: 0, w: SW.cup, d: SW.cup };
  if (bRect650 && rectsOverlap(bRect650, cupRect) && F2_PLATE + batSpec().W > P.f2H + cupBotZ - 0.3)
    warn.push('⚠ 세운 배터리가 스위치 홀더 컵에 부딪힙니다 — 배터리 X를 옮기거나 층 높이를 키우세요');
  const espTopLocal = espStand()
    ? espBaseZ() + (espUsbDown() ? ESP.l : ESP.w)
    : F2_PLATE + (P.espLift > 0 ? P.espLift - LIFT_SINK : 0) + ESP.h;
  if ((espStand() || espLifted) && rectsOverlap(eRect, cupRect) &&
      espTopLocal > P.f2H + cupBotZ - 0.3)
    warn.push('⚠ ESP32가 스위치 홀더 컵에 부딪힙니다 — 위치를 옮기거나 층 높이를 키우세요');
  document.getElementById('warnings').textContent = warn.join('\n');
}

// ------------------------------------------------------------------
// STL 내보내기
// ------------------------------------------------------------------
const exporter = new STLExporter();
function exportFloor(i, name) {
  if (!exportGeos[i]) return;
  let geo = exportGeos[i].clone();
  if (i === 2 && document.getElementById('flip3').checked) {
    geo.rotateX(Math.PI);
    geo.computeBoundingBox();
    geo.translate(0, 0, -geo.boundingBox.min.z);
  }
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
document.getElementById('ex1').addEventListener('click', () => exportFloor(0, 'floor1_battery.stl'));
document.getElementById('ex2').addEventListener('click', () => exportFloor(1, 'floor2_esp32.stl'));
document.getElementById('ex3').addEventListener('click', () => exportFloor(2, 'floor3_switch_lid.stl'));

// ------------------------------------------------------------------
Promise.all([
  loadAssets(),
  ManifoldModule({ locateFile: () => manifoldWasmUrl }).then(w => { w.setup(); M = w; }),
]).then(rebuild).catch(e => {
  document.getElementById('warnings').textContent =
    '⚠ 초기화 실패: ' + e + '\n`npm run dev` 로 실행했는지 확인하세요.';
  console.error(e);
});
