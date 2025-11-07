import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/password-generator/',   // repo name
  build: { outDir: 'docs' }       // build to /docs
})
