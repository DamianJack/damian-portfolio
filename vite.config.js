import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/damian-portfolio/", // repo name here — switch to "/" once a custom domain is registered and its DNS is live
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
