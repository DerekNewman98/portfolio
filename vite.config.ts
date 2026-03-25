import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoBase = '/portfolio/';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? repoBase : '/',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
}));
