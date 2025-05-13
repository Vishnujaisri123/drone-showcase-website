import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/3D-E-commerce-website",
  build: {
    chunkSizeWarningLimit: 1500, // Silences big chunk warnings
  },
});
