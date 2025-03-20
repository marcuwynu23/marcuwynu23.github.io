import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  plugins: [tailwindcss()],
  server: {
    port: 5173,
  },
})
