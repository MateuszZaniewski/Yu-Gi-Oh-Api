import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Yu-Gi-Oh-Api/',
  publicPath: process.env.NODE_ENV === "production" ? "/Yu-Gi-Oh-Api/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  compilerOptions: {
    "allowJs": true
  }
})
