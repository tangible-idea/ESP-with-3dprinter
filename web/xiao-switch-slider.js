// XIAO 1.14" 옆 전원 스위치용 별도 출력 슬라이더.
// 공식 보드 사진 + 로컬 MSK12C02-HB STEP을 기준으로 한 시험 출력 설계.
// 좌표: X=슬라이드 방향, +Y=케이스 밖, Z=PCB 위. 캡은 위로 열린 벽 홈에 내려 끼우고
// 보드의 돌기를 포크에 넣은 뒤 뚜껑을 닫는다. 뚜껑의 막대가 홈 상단을 막아 캡을 가둔다.
export function xiaoSwitchSliderDims(q, P) {
  const clamp = (v, fallback, lo, hi) => {
    const n = Number(v);
    return Math.max(lo, Math.min(hi, Number.isFinite(n) ? n : fallback));
  };
  const fit = clamp(P.wkX114SwFit, 0.25, 0.15, 0.4);
  const travel = clamp(P.wkX114SwTravel, 1.5, 0.8, 2.5);
  const fork = clamp(P.wkX114SwFork, 2.1, 1.6, 3.0);
  const position = clamp(P.wkX114SwPos, 0, 0, 1);
  const b = q.x114, outer = q.D / 2, inner = outer - q.wall;
  // STEP: 돌기 1.6(X) × 1.0(Z), 끝 v=13.65, 중심 w=-2.39.
  // STEP에 있는 한쪽 위치 u=7.9975에서 기본 스트로크 절반을 뺀 중립점.
  const cx = b.cx + 7.25, z = b.faceZ - 2.39;
  const neckW = fork + 1.6, neckH = 2.4;
  return {
    fit, travel, fork, position, cx, z, outer, inner, neckW, neckH,
    x: cx + (position - 0.5) * travel,
    slotW: neckW + travel + 2 * fit,
    slotBottom: z - neckH / 2 - fit,
    stopBottom: z + neckH / 2 + fit,
    // 캡 로컬 Y는 케이스 바깥면이 0. 포크는 보드 가장자리 밖에서 시작한다.
    forkStart: b.y + 12.7 - outer,
    forkEnd: b.y + 13.65 + fit - outer,
    flangeEnd: -q.wall - fit,
    flangeT: 0.8, flangeW: Math.max(6.4, neckW + 1.6), flangeH: 4,
    gripW: 6, gripH: 4, gripD: 1.5,
  };
}

// 캡 로컬: x=돌기 중심, y=케이스 바깥면, z=돌기 중심. 실행 위치와 무관한 동일 출력물.
export function buildXiaoSwitchSlider(c, { boxBrush, add, sub }) {
  const front = c.fit + c.gripD;
  const bridgeStart = Math.min(c.flangeEnd - c.flangeT, c.forkStart);
  let cap = boxBrush(c.neckW, front - bridgeStart - 0.15, c.neckH,
    0, (bridgeStart + front - 0.15) / 2, -c.neckH / 2, 0.15);
  cap = add(cap, boxBrush(c.flangeW, c.flangeT, c.flangeH,
    0, c.flangeEnd - c.flangeT / 2, -c.flangeH / 2, 0.15));
  cap = add(cap, boxBrush(c.gripW, c.gripD, c.gripH,
    0, c.fit + c.gripD / 2, -c.gripH / 2, 0.25));
  // -Y로 열린 포크. 위아래도 열어 PCB·스위치 몸통을 잡지 않게 한다.
  // 보드와 벽 사이가 좁아 걸림 턱·연결부 공간이 부족한 조합은 호출부에서 경고한다.
  const pocketStart = bridgeStart - 0.2;
  cap = sub(cap, boxBrush(c.fork, c.forkEnd - pocketStart, c.flangeH + 0.4,
    0, (pocketStart + c.forkEnd) / 2, -c.flangeH / 2 - 0.2, 0.05));
  // 손가락이 닿는 면의 미끄럼 방지 홈. 돌출 대신 0.3mm 파내 작은 돌기가 부러지지 않는다.
  for (const x of [-1.5, 0, 1.5])
    cap = sub(cap, boxBrush(0.4, 0.5, 2.8, x, front - 0.05, -1.4, 0.05));
  return cap;
}

export function cutXiaoSwitchGuide(tray, q, c, { boxBrush, sub }) {
  // 안팎 걸림 턱은 벽 양쪽에 남고, 가운데 목만 홈에 위에서 내려 끼운다.
  return sub(tray, boxBrush(c.slotW, q.wall + 0.4,
    q.trayTop - c.slotBottom + 0.3, c.cx, (c.inner + c.outer) / 2,
    c.slotBottom, 0.1));
}

export function addXiaoSwitchStop(lid, q, c, toLid, { boxBrush, add }) {
  // 상하 유격도 fit으로 정한다. 목 위를 막고, 분해할 때는 뚜껑과 함께 빠진다.
  return add(lid, boxBrush(c.slotW - 2 * c.fit, q.wall - 2 * c.fit,
    q.trayTop - c.stopBottom + 0.1, c.cx, (c.inner + c.outer) / 2,
    c.stopBottom - toLid, 0.1));
}
