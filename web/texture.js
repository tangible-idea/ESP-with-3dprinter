// ------------------------------------------------------------------
// 측면 텍스처 (Weave 1·2·3) — CNCKitchen/stlTexturizer 의 파이프라인을 참고해
// 이 프로젝트에 맞게 새로 구현한 모듈. app.js / todo.js 어디서든 쓸 수 있게
// 순수 함수(geometry in → geometry out)로만 만들어져 있다.
//
// 파이프라인 (stlTexturizer 와 같은 순서):
//   1) 꼭짓점 용접 → 인덱스 메시 (watertight 유지가 목적)
//   2) 마스크: "옆면"만 고르기 = 법선이 거의 수평(|nz| 작음) + 바깥 실루엣
//   3) 적응형 세분화(red-green): 마스크 영역의 변만 목표 길이까지 쪼갬 → T-정션 없음
//   4) 변위: 트라이플래너 UV 로 높이맵 샘플 → 수평 법선 방향으로 안쪽으로 파냄
//   5) 논인덱스 + 법선 재계산
//
// 위/아래 면(층 결합면·바닥·천장)은 절대 건드리지 않는다. 마스크 경계에 걸친
// 꼭짓점은 가중치 0 으로 고정해서 결합 턱/홈 치수가 그대로 유지된다.
//
// 변위는 항상 "안쪽으로만"(흰색 = 원래 표면, 검정 = depth 만큼 파임) 넣는다.
// 바깥 치수가 커지지 않으므로 층이 서로 얹히는 케이스에서도 안전.
// ------------------------------------------------------------------
import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import weave1Url from './textures/weave.png?url';
import weave2Url from './textures/weave_02.jpg?url';
import weave3Url from './textures/weave_03.jpg?url';
import wood1Url from './textures/wood.jpg?url';

// 텍스처 이미지 3장은 CNCKitchen/stlTexturizer (AGPL-3.0) 저장소의 displacement map 이다.
// tile/res 는 텍스처를 고를 때 자동으로 들어가는 기본값 — 이미지마다 한 장 안에 무늬가
// 반복되는 횟수가 달라서(Weave1 8회, Weave2 6회, Weave3 12회) 같은 tile 을 쓰면
// Weave3 는 무늬 한 칸이 1mm까지 작아져 삼각형보다 잘아지고 뭉개진다.
// 무늬 한 칸이 대략 1.5~2mm 가 되도록 이미지별로 맞춰 둔다.
export const TEXTURES = {
  weave1: { name: 'Weave 1', url: weave1Url, tile: 12, res: 0.45 },
  weave2: { name: 'Weave 2', url: weave2Url, tile: 12, res: 0.45 },
  weave3: { name: 'Weave 3', url: weave3Url, tile: 22, res: 0.35 },
  // Wood 1 은 흑백 2치 나뭇결 — 한 장에 결이 29줄이라 tile 을 크게 잡아야 결 간격이
  // 노즐(0.4)로 뽑히는 굵기(≈1.2mm)가 된다. 결은 가로로 누워 케이스를 감아 돈다.
  wood1:  { name: 'Wood 1',  url: wood1Url,  tile: 36, res: 0.40 },
};

const MAP_SIZE = 512;   // 높이맵 샘플링 해상도 (stlTexturizer 와 동일)
const _mapCache = new Map();

/** 텍스처 이미지를 0~1 회색조 높이맵(Float32Array)으로 굽는다. 결과는 캐시됨. */
export function loadHeightMap(key) {
  if (_mapCache.has(key)) return _mapCache.get(key);
  const spec = TEXTURES[key];
  if (!spec) return Promise.reject(new Error('unknown texture: ' + key));
  const p = new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => {
      const s = Math.min(MAP_SIZE / img.width, MAP_SIZE / img.height, 1);
      const w = Math.max(1, Math.round(img.width * s));
      const h = Math.max(1, Math.round(img.height * s));
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const ctx = c.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, w, h);
      const px = ctx.getImageData(0, 0, w, h).data;
      const n = w * h;
      const data = new Float32Array(n);
      const hist = new Int32Array(256);
      for (let i = 0; i < n; i++) {
        // Rec.709 휘도
        const v = (0.2126 * px[i * 4] + 0.7152 * px[i * 4 + 1] + 0.0722 * px[i * 4 + 2]) / 255;
        data[i] = v;
        hist[Math.min(255, Math.round(v * 255))]++;
      }
      // 대비 정규화 — 최소/최대가 아니라 2%/98% 지점을 기준으로 잡는다. JPEG 압축 잡티나
      // 하이라이트 몇 픽셀이 범위를 다 잡아먹어서 정작 무늬 대비가 죽는 것을 막는다.
      const pct = (frac) => {
        let acc = 0; const want = n * frac;
        for (let i = 0; i < 256; i++) { acc += hist[i]; if (acc >= want) return i / 255; }
        return 1;
      };
      const lo = pct(0.02), hi = pct(0.98);
      const span = hi - lo;
      if (span > 1e-3)
        for (let i = 0; i < n; i++) data[i] = Math.min(1, Math.max(0, (data[i] - lo) / span));
      res({ w, h, data });
    };
    img.onerror = () => rej(new Error('texture load failed: ' + spec.url));
    img.src = spec.url;
  });
  _mapCache.set(key, p);
  return p;
}

/** 이중선형 보간 + 타일 반복 샘플링 (0~1) */
function sample(map, u, v) {
  const { w, h, data } = map;
  let x = (u - Math.floor(u)) * w - 0.5;
  let y = (1 - (v - Math.floor(v))) * h - 0.5;
  const x0 = Math.floor(x), y0 = Math.floor(y);
  const fx = x - x0, fy = y - y0;
  const xa = ((x0 % w) + w) % w, xb = (xa + 1) % w;
  const ya = ((y0 % h) + h) % h, yb = (ya + 1) % h;
  const s00 = data[ya * w + xa], s10 = data[ya * w + xb];
  const s01 = data[yb * w + xa], s11 = data[yb * w + xb];
  return (s00 * (1 - fx) + s10 * fx) * (1 - fy) + (s01 * (1 - fx) + s11 * fx) * fy;
}

/**
 * 트라이플래너 샘플링 — X/Y 두 평면 투영을 법선 가중치로 섞는다.
 * 옆면만 칠하므로 Z 투영은 필요 없다. 모서리(라운드)에서 이음매 없이 이어진다.
 */
function triplanar(map, x, y, z, nx, ny, tile) {
  const wx = nx * nx, wy = ny * ny;
  const sum = wx + wy;
  if (sum < 1e-9) return 1;
  const sx = sample(map, y / tile, z / tile);   // X 를 향한 면 → (y,z)
  const sy = sample(map, x / tile, z / tile);   // Y 를 향한 면 → (x,z)
  return (sx * wx + sy * wy) / sum;
}

// ── 옆면 마스크 ────────────────────────────────────────────────────
// "바깥 실루엣" 판정: 면 중심에서 바깥 수평 법선 방향으로 XY 평면상 반직선을 쏴서
// 다른 옆면(수직 삼각형의 XY 투영 = 선분)에 맞으면 안쪽 벽(포켓·구멍)으로 본다.
// → 포켓 벽은 서로 마주보므로 반드시 맞고, 바깥 벽은 아무것도 맞지 않는다.
function outerSilhouette(pos, idx, cand, faceN) {
  // 후보 면들의 XY 선분 목록 (반직선 판정 대상)
  const segs = [];
  for (const f of cand) {
    const a = idx[f * 3], b = idx[f * 3 + 1], c = idx[f * 3 + 2];
    const xs = [pos[a * 3], pos[b * 3], pos[c * 3]];
    const ys = [pos[a * 3 + 1], pos[b * 3 + 1], pos[c * 3 + 1]];
    // XY 로 눌렀을 때 가장 긴 두 점을 잇는 선분으로 근사 (수직 삼각형이라 손실이 거의 없음)
    let bi = 0, bj = 1, bd = -1;
    for (let i = 0; i < 3; i++) for (let j = i + 1; j < 3; j++) {
      const d = (xs[i] - xs[j]) ** 2 + (ys[i] - ys[j]) ** 2;
      if (d > bd) { bd = d; bi = i; bj = j; }
    }
    if (bd < 1e-8) { segs.push(null); continue; }
    segs.push([xs[bi], ys[bi], xs[bj], ys[bj]]);
  }

  const out = new Set();
  for (let k = 0; k < cand.length; k++) {
    const f = cand[k];
    const a = idx[f * 3], b = idx[f * 3 + 1], c = idx[f * 3 + 2];
    const ox = (pos[a * 3] + pos[b * 3] + pos[c * 3]) / 3;
    const oy = (pos[a * 3 + 1] + pos[b * 3 + 1] + pos[c * 3 + 1]) / 3;
    let dx = faceN[f * 3], dy = faceN[f * 3 + 1];
    const dl = Math.hypot(dx, dy);
    if (dl < 1e-9) continue;
    dx /= dl; dy /= dl;
    const sx = ox + dx * 0.05, sy = oy + dy * 0.05;   // 자기 자신을 맞지 않게 살짝 띄움
    let blocked = false;
    for (let m = 0; m < segs.length && !blocked; m++) {
      if (m === k || !segs[m]) continue;
      const [x1, y1, x2, y2] = segs[m];
      const ex = x2 - x1, ey = y2 - y1;
      const den = dx * ey - dy * ex;
      if (Math.abs(den) < 1e-12) continue;
      const t = ((x1 - sx) * ey - (y1 - sy) * ex) / den;   // 반직선 파라미터
      const s = ((x1 - sx) * dy - (y1 - sy) * dx) / den;   // 선분 파라미터
      if (t > 0 && s >= 0 && s <= 1) blocked = true;
    }
    if (!blocked) out.add(f);
  }
  return out;
}

// ── red-green 적응 세분화 ──────────────────────────────────────────
// 마스크 면에 닿은 변만 목표 길이 이하가 될 때까지 쪼갠다. 이웃 면도 같이 갈라져야
// T-정션(틈)이 안 생기므로, 쪼개진 변 개수(1·2·3)에 따라 표준 패턴으로 재삼각화한다.
function refine(verts, tris, masked, target, maxTris) {
  const t2 = target * target;
  for (let pass = 0; pass < 8; pass++) {
    const splits = new Map();   // "a_b"(a<b) → 중점 인덱스
    const key = (a, b) => (a < b ? a + '_' + b : b + '_' + a);
    const need = [];
    for (let f = 0; f < tris.length; f++) {
      if (!masked[f]) continue;
      const [a, b, c] = tris[f];
      for (const [p, q] of [[a, b], [b, c], [c, a]]) {
        const dx = verts[p * 3] - verts[q * 3];
        const dy = verts[p * 3 + 1] - verts[q * 3 + 1];
        const dz = verts[p * 3 + 2] - verts[q * 3 + 2];
        if (dx * dx + dy * dy + dz * dz > t2) need.push([p, q]);
      }
    }
    if (!need.length) break;
    // 삼각형 수 폭주 방지 (변 1개당 대략 삼각형 1개 증가)
    if (tris.length + need.length > maxTris) break;

    for (const [p, q] of need) {
      const k = key(p, q);
      if (splits.has(k)) continue;
      const i = verts.length / 3;
      verts.push((verts[p * 3] + verts[q * 3]) / 2,
                 (verts[p * 3 + 1] + verts[q * 3 + 1]) / 2,
                 (verts[p * 3 + 2] + verts[q * 3 + 2]) / 2);
      splits.set(k, i);
    }

    const outT = [], outM = [];
    const push = (a, b, c, m) => { outT.push([a, b, c]); outM.push(m); };
    for (let f = 0; f < tris.length; f++) {
      const [a, b, c] = tris[f];
      const m = masked[f];
      const ab = splits.get(key(a, b));
      const bc = splits.get(key(b, c));
      const ca = splits.get(key(c, a));
      const n = (ab !== undefined) + (bc !== undefined) + (ca !== undefined);
      if (n === 0) { push(a, b, c, m); continue; }
      if (n === 3) {   // red
        push(a, ab, ca, m); push(ab, b, bc, m); push(ca, bc, c, m); push(ab, bc, ca, m);
        continue;
      }
      if (n === 1) {   // green: 1-2 분할
        if (ab !== undefined) { push(a, ab, c, m); push(ab, b, c, m); }
        else if (bc !== undefined) { push(b, bc, a, m); push(bc, c, a, m); }
        else { push(c, ca, b, m); push(ca, a, b, m); }
        continue;
      }
      // n === 2 : 쪼개지지 않은 변의 마주보는 꼭짓점에서 부채꼴로 3분할
      if (ab === undefined) { push(c, ca, bc, m); push(ca, a, b, m); push(ca, b, bc, m); }
      else if (bc === undefined) { push(a, ab, ca, m); push(ab, b, c, m); push(ab, c, ca, m); }
      else { push(b, bc, ab, m); push(bc, c, a, m); push(bc, a, ab, m); }
    }
    tris = outT; masked = outM;
  }
  return { tris, masked };
}

/**
 * 메시 옆면에만 높이맵 텍스처를 새긴다.
 *
 * @param {THREE.BufferGeometry} geo   원본 (논인덱스여도 됨)
 * @param {object} map                 loadHeightMap() 결과
 * @param {object} opt
 *   depth   변위 깊이 mm (안쪽으로 파냄, 기본 0.4)
 *   tile    무늬 한 칸 크기 mm (기본 12)
 *   res     세분화 목표 변 길이 mm (기본 tile/24, 최소 0.25)
 *   angle   "옆면" 허용 기울기 deg — 수평면 기준 이 각도 이내로 서 있어야 함 (기본 20)
 *   skip    (x,y,z) => bool — 면 중심이 여기 걸리면 무늬를 넣지 않는다.
 *           "케이스 외곽선 위에 있는 면만" 같은 판정을 호출부가 넘기는 용도
 *   maxTris 삼각형 상한 (기본 400k)
 * @returns {THREE.BufferGeometry} 새 지오메트리 (watertight 유지)
 */
export function applySideTexture(geo, map, opt = {}) {
  const depth = opt.depth ?? 0.4;
  const tile = Math.max(0.5, opt.tile ?? 12);
  const res = Math.max(0.25, opt.res ?? tile / 24);
  const angle = opt.angle ?? 20;
  const maxTris = opt.maxTris ?? 400000;
  if (depth <= 0 || !map) return geo;

  // 법선/UV 가 붙어 있으면 같은 위치라도 서로 다른 꼭짓점으로 남아 용접이 안 된다
  // (= watertight 이 깨짐). 위치만 남기고 용접한다.
  const clean = geo.clone();
  clean.deleteAttribute('normal');
  clean.deleteAttribute('uv');
  // 용접 허용치는 1e-6 — 1e-5 로 하면 bun_lid 처럼 디테일이 촘촘한 메시에서 서로 다른
  // 꼭짓점이 합쳐져 non-manifold(구멍)가 된다. manifold 출력은 꼭짓점이 정확히 공유되므로
  // 이 값으로도 문제없이 붙는다.
  const welded = BufferGeometryUtils.mergeVertices(clean, 1e-6);
  const pos = welded.attributes.position.array;
  const idx = welded.index.array;
  const fCount = idx.length / 3;

  // 1) 면 법선 + 옆면 후보 (거의 수직인 면)
  const faceN = new Float32Array(fCount * 3);
  const nzMax = Math.sin(angle * Math.PI / 180);
  const cand = [];
  for (let f = 0; f < fCount; f++) {
    const a = idx[f * 3] * 3, b = idx[f * 3 + 1] * 3, c = idx[f * 3 + 2] * 3;
    const ux = pos[b] - pos[a], uy = pos[b + 1] - pos[a + 1], uz = pos[b + 2] - pos[a + 2];
    const vx = pos[c] - pos[a], vy = pos[c + 1] - pos[a + 1], vz = pos[c + 2] - pos[a + 2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz);
    if (l < 1e-12) continue;
    nx /= l; ny /= l; nz /= l;
    faceN[f * 3] = nx; faceN[f * 3 + 1] = ny; faceN[f * 3 + 2] = nz;
    if (Math.abs(nz) <= nzMax) cand.push(f);
  }
  if (!cand.length) return geo;

  // 2) 바깥 실루엣만 남기기 (포켓·구멍 안쪽 벽 제외)
  const outer = outerSilhouette(pos, idx, cand, faceN);
  // 2-1) 호출부가 지정한 제외 구역 빼기
  if (opt.skip) {
    for (const f of [...outer]) {
      const a = idx[f * 3], b = idx[f * 3 + 1], c = idx[f * 3 + 2];
      if (opt.skip((pos[a * 3] + pos[b * 3] + pos[c * 3]) / 3,
                   (pos[a * 3 + 1] + pos[b * 3 + 1] + pos[c * 3 + 1]) / 3,
                   (pos[a * 3 + 2] + pos[b * 3 + 2] + pos[c * 3 + 2]) / 3)) outer.delete(f);
    }
  }
  if (!outer.size) return geo;

  // 3) 세분화
  const verts = Array.from(pos);
  let tris = [];
  let masked = [];
  for (let f = 0; f < fCount; f++) {
    const a = idx[f * 3], b = idx[f * 3 + 1], c = idx[f * 3 + 2];
    if (a === b || b === c || a === c) continue;   // 용접이 만든 퇴화 삼각형 제거
    tris.push([a, b, c]);
    masked.push(outer.has(f));
  }
  ({ tris, masked } = refine(verts, tris, masked, res, maxTris));

  // 4) 꼭짓점 가중치(모든 인접면이 옆면일 때만 1) + 변위 방향(옆면 법선의 수평성분 평균)
  const vn = verts.length / 3;
  const w = new Float32Array(vn).fill(1);
  const dirX = new Float32Array(vn), dirY = new Float32Array(vn);
  const touched = new Uint8Array(vn);
  for (let f = 0; f < tris.length; f++) {
    const [a, b, c] = tris[f];
    if (!masked[f]) { w[a] = 0; w[b] = 0; w[c] = 0; continue; }
    const ax = verts[a * 3], ay = verts[a * 3 + 1], az = verts[a * 3 + 2];
    const ux = verts[b * 3] - ax, uy = verts[b * 3 + 1] - ay, uz = verts[b * 3 + 2] - az;
    const vx = verts[c * 3] - ax, vy = verts[c * 3 + 1] - ay, vz = verts[c * 3 + 2] - az;
    // 면적 가중 법선 (정규화 안 함 = 면적이 가중치)
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz;
    for (const p of [a, b, c]) { dirX[p] += nx; dirY[p] += ny; touched[p] = 1; }
  }

  // 5) 변위
  for (let p = 0; p < vn; p++) {
    if (!w[p] || !touched[p]) continue;
    let dx = dirX[p], dy = dirY[p];
    const l = Math.hypot(dx, dy);
    if (l < 1e-9) continue;
    dx /= l; dy /= l;
    const x = verts[p * 3], y = verts[p * 3 + 1], z = verts[p * 3 + 2];
    const hgt = triplanar(map, x, y, z, dx, dy, tile);
    const d = -(1 - hgt) * depth;   // 흰색 = 원래 표면, 검정 = depth 만큼 안으로
    verts[p * 3] = x + dx * d;
    verts[p * 3 + 1] = y + dy * d;
  }

  // 6) 되돌리기
  const out = new THREE.BufferGeometry();
  const fpos = new Float32Array(tris.length * 9);
  for (let f = 0, o = 0; f < tris.length; f++) {
    for (const p of tris[f]) {
      fpos[o++] = verts[p * 3]; fpos[o++] = verts[p * 3 + 1]; fpos[o++] = verts[p * 3 + 2];
    }
  }
  out.setAttribute('position', new THREE.BufferAttribute(fpos, 3));
  out.computeVertexNormals();
  return out;
}

