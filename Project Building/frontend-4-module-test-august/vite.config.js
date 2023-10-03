import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
base:"/frontend-4-module-test-august/"
export default defineConfig({
  plugins: [react()],
})
