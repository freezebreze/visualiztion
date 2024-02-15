import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': './src'
    }
  },
  server: {
    hmr: true
  },
  build: {
    outDir: 'docs',
  },
  base: '/visualiztion'
})
