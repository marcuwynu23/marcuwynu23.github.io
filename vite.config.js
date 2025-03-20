import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  root: '.',
  build: {
    outDir: './docs',
    emptyOutDir: true,
  },
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: 'javascript', dest: '' }, // Copies the `javascript/` folder to `dist/`
        { src: 'assets', dest: '' }, // Copies the `assets/` folder to `dist/`
      ],
    }),
  ],
  server: {
    port: 5173,
  },
})
