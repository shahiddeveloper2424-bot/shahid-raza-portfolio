import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Keep the bundle lean: this is a content site, no heavy libraries.
    chunkSizeWarningLimit: 600,
  },
})
