import * as THREE from 'three';

// Yeti-cover-style surround: a smaller flat inner shelf opens into a broad,
// rounded outer mouth. The inner face stays outside the original through-hole.
export function smoothUsbRecessGeo({ cy, cz, innerW, outerW, innerH, outerH,
                                     innerSurface, outerSurface }) {
  const arcSteps = 6;
  const depthSteps = 8;
  const perRing = 4 * (arcSteps + 1);
  const positions = [];
  const indices = [];

  for (let step = 0; step <= depthSteps; step++) {
    const t = step / depthSteps;
    // Mostly flat near the shelf, then a smooth, more pronounced outer flare.
    const eased = t ** 4 * (5 - 4 * t);
    const w = innerW + (outerW - innerW) * eased;
    const h = innerH + (outerH - innerH) * eased;
    const r = 1.25 + 0.75 * eased;
    const corners = [
      [w / 2 - r, h / 2 - r], [-w / 2 + r, h / 2 - r],
      [-w / 2 + r, -h / 2 + r], [w / 2 - r, -h / 2 + r],
    ];
    for (let c = 0; c < 4; c++) {
      for (let i = 0; i <= arcSteps; i++) {
        const angle = (c + i / arcSteps) * Math.PI / 2;
        const y = cy + corners[c][0] + r * Math.cos(angle);
        const z = cz + corners[c][1] + r * Math.sin(angle);
        const x = innerSurface(y) * (1 - t) + (outerSurface(y) + 0.6) * t;
        positions.push(x, y, z);
      }
    }
  }

  for (let ring = 0; ring < depthSteps; ring++) {
    for (let i = 0; i < perRing; i++) {
      const next = (i + 1) % perRing;
      const a = ring * perRing + i, b = ring * perRing + next;
      const c = (ring + 1) * perRing + i, d = (ring + 1) * perRing + next;
      indices.push(a, b, d, a, d, c);
    }
  }
  const innerCenter = positions.length / 3;
  positions.push(innerSurface(cy), cy, cz);
  const outerCenter = positions.length / 3;
  positions.push(outerSurface(cy) + 0.6, cy, cz);
  const lastRing = depthSteps * perRing;
  for (let i = 0; i < perRing; i++) {
    const next = (i + 1) % perRing;
    indices.push(innerCenter, next, i,
                 outerCenter, lastRing + i, lastRing + next);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  return geo;
}
