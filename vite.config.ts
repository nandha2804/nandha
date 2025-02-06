import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base:'/nandha/',
    plugins: [react()],
    build: {
    chunkSizeWarningLimit: 1600,
  },
})
