import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project Pages are served at https://<user>.github.io/<repo>/
  base: '/wst-creations/',
})