import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import spaFallback from "vite-plugin-spa-fallback";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
})
