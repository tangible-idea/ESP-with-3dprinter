import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    fs: {
      // stl_files/ 와 dimsum/ 이 web/ 상위(프로젝트 루트)에 있어서 허용 필요
      allow: ['..'],
    },
  },
});
