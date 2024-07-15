import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./static",
    emptyOutDir: true,
    sourcemap: true,
    chunkSizeWarningLimit: 1000
  },
  base: './',
})
