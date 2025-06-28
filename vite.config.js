import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base:
    import.meta.env && import.meta.env.MODE === 'production'
      ? '/lithegreat.github.io/' // 替换为你的仓库名
      : '/',
})
