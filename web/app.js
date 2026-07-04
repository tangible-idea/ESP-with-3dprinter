// 딤섬 클리커 웹 컨피규레이터
// three.js + three-bvh-csg 로 브라우저에서 파라메트릭 CSG 설계
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { STLLoader } from 'three/addons/loaders/STLLoader.js';
import { STLExporter } from 'three/addons/exporters/STLExporter.js';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import ManifoldModule from './vendor/manifold.js';

// ------------------------------------------------------------------
// 부품 실측 상수 (mm)
// ------------------------------------------------------------------
const BAT = { w: 36.5, d: 28.5, h: 4.3, clr: 0.7 };
const ESP = { l: 24, w: 18, h: 4.2 };
const MOD = { l: 19, w: 14, h: 4.5, usbZ: 2.9, usbOver: 1.0 }; // USB가 x끝에서 1mm 돌출
const OLED = { w: 15, hgt: 16, t: 2.4 };
const STAND_FLARE_Z = 5.4;   // keyboard_switch_stand.stl: 몸통(플레어) 시작 높이
const STAND_H = 14.0;
const F1_PLATE = 1.6, F2_PLATE = 2.0, F2_PLATFORM = 2.2, F3_PLATE = 3.2;
const RIDGE = { inn: 2.1, out: 0.9, h: 1.5 };      // 아래층 턱 (외곽 inset 기준)
const RABBET = { out: 0.7, d: 1.8 };                // 위층 바닥 단차
const POCKET_CLR = 0.4;

// ------------------------------------------------------------------
// 파라미터 & UI 바인딩
// ------------------------------------------------------------------
const P = {
  W: 44, D: 39, R: 8, wall: 2.3, bands: true,
  f1H: 7.5, f2H: 20.5, f3H: 10, bossH: 2.5, standSink: 1.2,
  espX: -10, espY: 0, espRot: 90, modY: 0, oledSide: 'N',
  wireX: 4, wireY: -12.5,
};
const sliders = ['W','D','R','wall','f1H','f2H','f3H','bossH','standSink',
                 'espX','espY','modY','wireX','wireY'];
let rebuildTimer = null;
function queueRebuild() {
  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(rebuild, 250);
}
for (const k of sliders) {
  const el = document.getElementById(k);
  const vl = document.getElementById(k + 'v');
  const show = () => { vl.textContent = (+el.value).toFixed(1); };
  el.addEventListener('input', () => { P[k] = +el.value; show(); queueRebuild(); });
  show();
}
document.getElementById('espRot').addEventListener('change', e => { P.espRot = +e.target.value; queueRebuild(); });
document.getElementById('oledSide').addEventListener('change', e => { P.oledSide = e.target.value; queueRebuild(); });
document.getElementById('bands').addEventListener('change', e => { P.bands = e.target.checked; queueRebuild(); });

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
// 외곽 base 의 inset 버전 (둥근 모서리 유지)
const baseShape  = i => rrShape(P.W - 2 * i, P.D - 2 * i, P.R - i);
const basePath   = i => rrPath(THREE.Path, P.W - 2 * i, P.D - 2 * i, P.R - i);

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
  return new Promise((res, rej) => loader.load(encodeURI(url), g => {
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
  const [usb, stand, bat, esp, mod, oled, face] = await Promise.all([
    loadSTL('../stl_files/usb_c_hole.stl'),
    loadSTL('../stl_files/keyboard_switch_stand.stl'),
    loadSTL('../stl_files/520Mah_battery.stl'),
    loadSTL('../stl_files/esp32_c3_supermini.stl'),
    loadSTL('../stl_files/battery_charging_module.stl'),
    loadSTL('../stl_files/oled_0.49inch.stl'),
    loadSTL('../dimsum/obj_2_sup 2.0 face.stl'),
  ]);
  // USB 구멍 툴: 정규화 → 길이 60% 압축 → 중심 정렬 → 나팔 입구가 +X를 향하게
  normalize(usb, false);
  usb.scale(0.6, 1, 1);
  usb.computeBoundingBox();
  const ub = usb.boundingBox;
  usb.translate(-(ub.min.x + ub.max.x) / 2, -(ub.min.y + ub.max.y) / 2, -(ub.min.z + ub.max.z) / 2);
  usb.rotateZ(Math.PI);
  ASSETS.usb = usb;

  // 스탠드: xy 중심, z0 = 다리 바닥. 절삭용은 xy 3.5% + z 살짝 팽창
  normalize(stand);
  ASSETS.stand = stand;
  const cut = stand.clone();
  cut.scale(1.035, 1.035, 1.0);
  cut.translate(0, 0, -0.25);
  ASSETS.standCut = cut;

  ASSETS.bat = normalize(bat);
  ASSETS.esp = normalize(esp, false);   // min corner 기준 (USB는 -x 끝)
  ASSETS.mod = normalize(mod, false);
  ASSETS.oled = normalize(oled, false);
  ASSETS.face = normalize(face);
}

// ------------------------------------------------------------------
// 층 빌더
// ------------------------------------------------------------------
function decoBands(body, zList) {
  if (!P.bands) return body;
  for (const z of zList) {
    const s = rrShape(P.W + 0.1, P.D + 0.1, P.R);
    s.holes.push(basePath(0.6));
    body = sub(body, extrude(s, 1.2, z - 0.6));
  }
  return body;
}
const innerHalfW = () => P.W / 2 - P.wall;
const innerHalfD = () => P.D / 2 - P.wall;

function buildFloor1() {
  let b = extrude(baseShape(0), F1_PLATE);                       // 바닥판
  b = add(b, ringBrush(0, P.wall, P.f1H - F1_PLATE, F1_PLATE));  // 벽
  b = add(b, ringBrush(RIDGE.out, RIDGE.inn, RIDGE.h, P.f1H));   // 상단 턱
  // 배터리 고정 테두리
  const bw = BAT.w + BAT.clr, bd = BAT.d + BAT.clr;
  if (innerHalfW() * 2 > bw + 1 && innerHalfD() * 2 > bd + 1) {
    const rim = baseShape(P.wall);
    rim.holes.push(rrPath(THREE.Path, bw, bd, 2));
    b = add(b, extrude(rim, 1.2, F1_PLATE));
  }
  b = decoBands(b, [P.f1H * 0.55]);
  return b;
}

function espFoot() {  // ESP32 footprint (회전 반영)
  const l = P.espRot === 90 ? ESP.w : ESP.l;
  const w = P.espRot === 90 ? ESP.l : ESP.w;
  return { w: l + POCKET_CLR, d: w + POCKET_CLR };
}
function modCenter() {
  return { x: innerHalfW() - 0.2 - MOD.l / 2, y: P.modY };
}
function oledFrame() {
  // OLED 그룹 로컬(+Y벽) → 월드 변환
  const side = P.oledSide;
  const dHalf = (side === 'W') ? P.W / 2 : P.D / 2;
  const ang = side === 'N' ? 0 : side === 'W' ? Math.PI / 2 : Math.PI;
  const m = new THREE.Matrix4().makeRotationZ(ang);
  return { dHalf, m, innerFace: dHalf - P.wall };
}

function buildFloor2() {
  let b = extrude(baseShape(0), F2_PLATE);
  b = add(b, ringBrush(0, P.wall, P.f2H - F2_PLATE, F2_PLATE));
  b = add(b, ringBrush(RIDGE.out, RIDGE.inn, RIDGE.h, P.f2H));
  b = add(b, extrude(baseShape(P.wall), F2_PLATFORM, F2_PLATE));  // 포켓 플랫폼

  // 포켓
  const ef = espFoot();
  b = sub(b, boxBrush(ef.w, ef.d, F2_PLATFORM + 2, P.espX, P.espY, F2_PLATE, 1.5));
  const mc = modCenter();
  b = sub(b, boxBrush(MOD.l + POCKET_CLR, MOD.w + POCKET_CLR, F2_PLATFORM + 2, mc.x, mc.y, F2_PLATE, 1.5));

  // OLED 소켓
  if (P.oledSide !== 'none') {
    const { m, innerFace } = oledFrame();
    let boss = boxBrush(18, 4.4, P.f2H - F2_PLATE, 0, innerFace - 2.1, F2_PLATE, 0, m);
    boss = inter(boss, extrude(baseShape(P.wall - 0.01), P.f2H, 0));
    b = add(b, boss);
    b = sub(b, boxBrush(OLED.w + 0.5, OLED.t + 0.3, P.f2H, 0, innerFace - (OLED.t + 0.3) / 2, 4.2, 0, m));
    b = sub(b, boxBrush(11, OLED.t + 0.3, 4.2 - F2_PLATE + 0.1, 0, innerFace - (OLED.t + 0.3) / 2, F2_PLATE, 0, m));
    // 디스플레이 창 (벽 관통)
    const wg = new THREE.ExtrudeGeometry(rrShape(13.5, 8, 1.5), { depth: P.wall + 2, bevelEnabled: false, curveSegments: 12 });
    wg.deleteAttribute('uv');
    wg.rotateX(-Math.PI / 2);
    wg.translate(0, innerFace - 0.8, Math.min(4.2 + OLED.hgt * 0.62, P.f2H - 4.5));
    b = sub(b, toMan(wg, m));
  }

  // USB-C 구멍 (충전모듈 USB 정면, 동쪽 벽)
  const usbM = new THREE.Matrix4().makeTranslation(innerHalfW(), P.modY, F2_PLATE + MOD.usbZ);
  b = sub(b, meshBrush(ASSETS.usb, usbM));

  // 배터리 배선 구멍
  b = sub(b, boxBrush(8, 4, F2_PLATE + F2_PLATFORM + 1, P.wireX, P.wireY, -0.4, 1.5));

  // 바닥 rabbet + 장식
  b = sub(b, ringBrush(RABBET.out, P.wall + 0.6, RABBET.d, -0.05));
  b = decoBands(b, [P.f2H * 0.3, P.f2H * 0.66]);
  return b;
}

function buildFloor3() {
  let b = ringBrush(0, P.wall, P.f3H, 0);                             // 벽
  b = add(b, extrude(baseShape(P.wall - 0.1), F3_PLATE, P.f3H - F3_PLATE)); // 상판
  // 스위치 보스 (뚜껑 꼭지처럼 봉긋한 받침)
  const bossTop = P.f3H + P.bossH;
  if (P.bossH > 0.1) {
    b = add(b, boxBrush(21, 23, P.bossH, 0, 0, P.f3H, 5));
  }
  // 스탠드 실물 메시로 절삭 → 자연스럽게 매립
  const standZ = bossTop - P.standSink - STAND_FLARE_Z;
  b = sub(b, meshBrush(ASSETS.standCut, new THREE.Matrix4().makeTranslation(0, 0, standZ)));
  // 중앙 배선 통로 (상판 관통)
  b = sub(b, boxBrush(7, 7, P.f3H + P.bossH, 0, 0, P.f3H - F3_PLATE - 0.5, 0.8));

  b = sub(b, ringBrush(RABBET.out, P.wall + 0.6, RABBET.d, -0.05));
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
  // 1층: 배터리
  G[0].add(ghostMesh(ASSETS.bat, MATS.bat, T(0, 0, F1_PLATE)));
  // 2층
  const rot = P.espRot === 90 ? Math.PI / 2 : 0;
  const eg = ASSETS.esp.clone();
  eg.translate(-ESP.l / 2, -ESP.w / 2, 0);   // 중심 정렬 후 회전
  G[1].add(ghostMesh(eg, MATS.esp, T(P.espX, P.espY, F2_PLATE, rot)));
  const mg = ASSETS.mod.clone();
  mg.rotateZ(Math.PI);                        // USB를 +X로
  mg.translate(MOD.l / 2, MOD.w / 2, 0);      // 중심 (0,0) 정렬
  const mc = modCenter();
  G[1].add(ghostMesh(mg, MATS.mod, T(mc.x, mc.y, F2_PLATE)));
  if (P.oledSide !== 'none') {
    const { m, innerFace } = oledFrame();
    const og = ASSETS.oled.clone();
    og.translate(-OLED.w / 2, innerFace - OLED.t - 0.15, 4.2);
    og.applyMatrix4(m);
    G[1].add(ghostMesh(og, MATS.oled));
  }
  // 3층: 스탠드 + 딤섬 캐릭터
  const standZ = P.f3H + P.bossH - P.standSink - STAND_FLARE_Z;
  G[2].add(ghostMesh(ASSETS.stand, MATS.stand, T(0, 0, standZ)));
  G[2].add(ghostMesh(ASSETS.face, MATS.face, T(0, 0, standZ + STAND_H + 2)));
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
      updateInfo(performance.now() - t0);
    } catch (e) {
      document.getElementById('warnings').textContent = '⚠ 생성 오류: ' + e.message;
      console.error(e);
    }
    status.classList.remove('on');
  }, 10);
}

// 분해/조립
function applyExplode() {
  const e = +document.getElementById('explode').value;
  const gap = 26 * e;
  G[0].position.z = 0;
  G[1].position.z = P.f1H + gap;
  G[2].position.z = P.f1H + P.f2H + gap * 2;
}
document.getElementById('explode').addEventListener('input', () => {
  document.getElementById('explodev').textContent = (+document.getElementById('explode').value).toFixed(2);
  applyExplode();
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
function insideInner(hx, hy) {   // (±hx, ±hy) 사각형이 내부 rrect 안에 있는지
  const iw = innerHalfW(), id = innerHalfD(), r = Math.max(P.R - P.wall, 0.05);
  if (hx > iw || hy > id) return false;
  const dx = hx - (iw - r), dy = hy - (id - r);
  return !(dx > 0 && dy > 0 && dx * dx + dy * dy > r * r);
}
function rectsOverlap(a, b) {
  return Math.abs(a.x - b.x) * 2 < a.w + b.w && Math.abs(a.y - b.y) * 2 < a.d + b.d;
}
function updateInfo(ms) {
  const total = P.f1H + P.f2H + P.f3H + P.bossH;
  document.getElementById('dims').textContent =
    `전체 ${P.W} × ${P.D} × ${total.toFixed(1)}mm (보스 포함) · CSG ${ms.toFixed(0)}ms`;
  const warn = [];
  if (!insideInner(BAT.w / 2 + 0.4, BAT.d / 2 + 0.4)) warn.push('⚠ 배터리(36.5×28.5)가 1층에 안 들어갑니다 — W/D를 키우거나 모서리를 줄이세요');
  const ef = espFoot();
  const eRect = { x: P.espX, y: P.espY, w: ef.w, d: ef.d };
  const mc = modCenter();
  const mRect = { x: mc.x, y: mc.y, w: MOD.l + POCKET_CLR, d: MOD.w + POCKET_CLR };
  if (!insideInner(Math.abs(P.espX) + ef.w / 2, Math.abs(P.espY) + ef.d / 2)) warn.push('⚠ ESP32가 벽과 겹칩니다');
  if (Math.abs(P.modY) + (MOD.w + POCKET_CLR) / 2 > innerHalfD() - 1) warn.push('⚠ 충전모듈이 위/아래 벽과 겹칩니다');
  if (rectsOverlap(eRect, mRect)) warn.push('⚠ ESP32와 충전모듈 포켓이 겹칩니다');
  if (P.oledSide !== 'none' && P.f2H < 4.2 + OLED.hgt + 0.3) warn.push(`⚠ OLED(세로 16mm) 때문에 2층 높이는 ${(4.2 + OLED.hgt + 0.3).toFixed(1)}mm 이상이어야 합니다`);
  if (P.oledSide !== 'none' && P.oledSide !== 'W' && rectsOverlap(eRect, { x: 0, y: (P.oledSide === 'N' ? 1 : -1) * (innerHalfD() - 2.2), w: 18, d: 4.4 }))
    warn.push('⚠ ESP32가 OLED 소켓과 겹칩니다');
  if (P.oledSide === 'W' && rectsOverlap(eRect, { x: -(innerHalfW() - 2.2), y: 0, w: 4.4, d: 18 }))
    warn.push('⚠ ESP32가 OLED 소켓과 겹칩니다');
  if (P.f1H < F1_PLATE + BAT.h + 1.2) warn.push('⚠ 1층이 너무 낮습니다 (배터리 + 배선 공간 부족)');
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
  a.click();
  URL.revokeObjectURL(a.href);
}
document.getElementById('ex1').addEventListener('click', () => exportFloor(0, 'floor1_battery.stl'));
document.getElementById('ex2').addEventListener('click', () => exportFloor(1, 'floor2_esp32.stl'));
document.getElementById('ex3').addEventListener('click', () => exportFloor(2, 'floor3_switch_lid.stl'));

// ------------------------------------------------------------------
Promise.all([
  loadAssets(),
  ManifoldModule().then(w => { w.setup(); M = w; }),
]).then(rebuild).catch(e => {
  document.getElementById('warnings').textContent =
    '⚠ 초기화 실패: ' + e + '\n프로젝트 루트에서 `python3 -m http.server` 로 실행했는지 확인하세요.';
  console.error(e);
});
