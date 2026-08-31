import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/", // custom domain serves from the root
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
