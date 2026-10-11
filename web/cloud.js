// 구글 드라이브 동기화 — 서버 없이 사용자 본인 드라이브의 숨김 앱 폴더(appDataFolder)에
// 디자인별 설정 JSON 한 개(designs.json)를 저장/복원한다. 구글 로그인(GIS 토큰 클라이언트)으로 drive.appdata 권한만 받는다.
// 클라이언트 ID는 빌드 시 VITE_GOOGLE_CLIENT_ID (web/.env.local) 로 넣는다.

export const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
const SCOPE = 'https://www.googleapis.com/auth/drive.appdata';
const FILE_NAME = 'designs.json';
const API = 'https://www.googleapis.com/drive/v3';
const UPLOAD = 'https://www.googleapis.com/upload/drive/v3';

let gisPromise = null;
let tokenClient = null;
let token = null;          // { value, exp }
let pending = null;        // 진행 중인 토큰 요청의 resolve/reject

function loadGis() {
  if (window.google?.accounts?.oauth2) return Promise.resolve();
  gisPromise ||= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.onload = resolve;
    s.onerror = () => { gisPromise = null; reject(new Error('Google sign-in script failed to load')); };
    document.head.appendChild(s);
  });
  return gisPromise;
}

// 버튼 클릭 안에서 불러야 팝업이 막히지 않는다. 토큰이 살아 있으면 그대로 쓴다.
async function getToken() {
  if (token && Date.now() < token.exp) return token.value;
  if (!CLIENT_ID) throw new Error('VITE_GOOGLE_CLIENT_ID is not set');
  await loadGis();
  tokenClient ||= google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPE,
    callback: res => {
      const p = pending; pending = null;
      if (res.error) return p?.reject(new Error(res.error_description || res.error));
      token = { value: res.access_token, exp: Date.now() + (Number(res.expires_in) - 60) * 1000 };
      try { localStorage.setItem('dimsum-cloud', '1'); } catch (e) { /* 무시 */ }
      p?.resolve(token.value);
    },
    error_callback: err => {
      const p = pending; pending = null;
      p?.reject(new Error(err?.message || err?.type || 'sign-in cancelled'));
    },
  });
  return new Promise((resolve, reject) => {
    pending = { resolve, reject };
    // 한 번 동의한 사용자는 동의 화면 없이 바로 토큰이 나온다
    let wasSigned = false;
    try { wasSigned = localStorage.getItem('dimsum-cloud') === '1'; } catch (e) { /* 무시 */ }
    tokenClient.requestAccessToken({ prompt: wasSigned ? '' : 'consent' });
  });
}

async function api(url, opts = {}) {
  const res = await fetch(url, {
    ...opts,
    headers: { Authorization: `Bearer ${await getToken()}`, ...(opts.headers || {}) },
  });
  if (res.status === 401) token = null;   // 만료 — 다음 클릭에서 다시 받는다
  if (!res.ok) throw new Error(`Drive ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res;
}

async function findFile() {
  const q = encodeURIComponent(`name='${FILE_NAME}' and trashed=false`);
  const res = await api(`${API}/files?spaces=appDataFolder&q=${q}&fields=files(id,modifiedTime)&orderBy=modifiedTime desc`);
  return (await res.json()).files?.[0] || null;
}

export async function saveToDrive(obj) {
  const body = JSON.stringify(obj, null, 2);
  const existing = await findFile();
  if (existing) {
    await api(`${UPLOAD}/files/${existing.id}?uploadType=media`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body,
    });
    return;
  }
  const boundary = 'dimsum' + Math.random().toString(36).slice(2);
  const meta = { name: FILE_NAME, parents: ['appDataFolder'], mimeType: 'application/json' };
  const multipart = `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(meta)}\r\n`
    + `--${boundary}\r\nContent-Type: application/json\r\n\r\n${body}\r\n--${boundary}--`;
  await api(`${UPLOAD}/files?uploadType=multipart`, {
    method: 'POST', headers: { 'Content-Type': `multipart/related; boundary=${boundary}` }, body: multipart,
  });
}

// 저장본이 없으면 null
export async function loadFromDrive() {
  const f = await findFile();
  if (!f) return null;
  const res = await api(`${API}/files/${f.id}?alt=media`);
  return { data: await res.json(), modified: new Date(f.modifiedTime) };
}

export function signOut() {
  if (token && window.google?.accounts?.oauth2) google.accounts.oauth2.revoke(token.value, () => {});
  token = null;
  try { localStorage.removeItem('dimsum-cloud'); } catch (e) { /* 무시 */ }
}

export const isSignedIn = () => !!token && Date.now() < token.exp;
export const signIn = () => getToken();
// 예전에 로그인했던 브라우저인지 (다시 연결 버튼 표시용 — 토큰은 팝업이 있어야 받을 수 있다)
export function wasSignedIn() {
  try { return localStorage.getItem('dimsum-cloud') === '1'; } catch (e) { return false; }
}
// 로그인한 계정 이메일 (실패해도 동기화에는 지장 없음)
export async function getEmail() {
  try {
    const res = await api(`${API}/about?fields=user(emailAddress)`);
    return (await res.json()).user?.emailAddress || '';
  } catch (e) { return ''; }
}
