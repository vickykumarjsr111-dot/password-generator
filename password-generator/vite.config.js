// vite.config.js  (or vite.config.ts)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/password-generator/',      // for GitHub Pages: /<repo-name>/
  build: { outDir: 'docs' } // output build to /docs
})
