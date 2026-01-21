import { defineConfig } from 'vite';
import yaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  base: '/pxl-shop/', // This matches the repository name
  plugins: [yaml()],
});
