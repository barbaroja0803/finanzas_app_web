import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/finanzasapp/' : '/',
  server: {
    port: 5173
  }
}));
