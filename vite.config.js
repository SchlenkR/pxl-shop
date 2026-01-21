import { defineConfig } from 'vite';
import yaml from '@modyfi/vite-plugin-yaml';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  base: '/pxl-shop/', // This matches the repository name
  plugins: [yaml(), react(), wasm(), topLevelAwait()],
  optimizeDeps: {
    include: ['canvaskit-wasm'],
  },
  resolve: {
    dedupe: ['canvaskit-wasm'],
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
  build: {
    target: 'esnext',
  },
});
