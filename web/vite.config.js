import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { defineConfig } from 'vite';

const ROOT = path.resolve(import.meta.dirname, '..');

// dev 전용 저장 경로 — 브라우저에서 만든 STL/GLB를 다운로드 폴더를 거치지 않고
// 프로젝트 안에 바로 떨군다. `POST /__save?name=<파일명>` 의 본문이 그대로 파일이 된다.
// (크롬이 연속 자동 다운로드를 막기 때문에 스크립트로 파일을 뽑을 때 쓴다)
const saveToProject = () => ({
  name: 'save-to-project',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/__save', async (req, res) => {
      const fail = (code, msg) => { res.statusCode = code; res.end(msg); };
      if (req.method !== 'POST') return fail(405, 'POST only');
      const name = new URL(req.url, 'http://x').searchParams.get('name') || '';
      const dest = path.resolve(ROOT, name);
      // 프로젝트 밖으로 새어 나가는 경로는 거부
      if (!name || !dest.startsWith(ROOT + path.sep)) return fail(400, 'bad name');
      const chunks = [];
      for await (const c of req) chunks.push(c);
      await writeFile(dest, Buffer.concat(chunks));
      res.setHeader('content-type', 'text/plain');
      res.end(path.relative(ROOT, dest));
    });
  },
});

export default defineConfig({
  plugins: [saveToProject()],
  server: {
    fs: {
      // stl_files/ 와 dimsum/ 이 web/ 상위(프로젝트 루트)에 있어서 허용 필요
      allow: ['..'],
    },
  },
});
