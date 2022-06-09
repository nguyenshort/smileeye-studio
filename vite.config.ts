import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// @ts-ignore
import GrapHQLGenerator from './src/plugins/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@store': path.resolve(__dirname, './src/store'),
      '#types': path.resolve(__dirname, './src/types'),
      '#schema': path.resolve(__dirname, './__generated__'),
      '#apollo': path.resolve(__dirname, './src/apollo'),
      '#notify': path.resolve(__dirname, './src/apollo/notify'),
      '#smileeye': path.resolve(__dirname, './src/apollo/smileeye'),
      '@plugins': path.resolve(__dirname, './src/plugins'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@composables': path.resolve(__dirname, './src/composables')
    }
  },
  preview: {
    port: 3111
  },
  // Tự động sinh ra interface khi thay đổi query
  // Graphql của nam đang bị lỗi query cần fix
  // npx apollo client:download-schema --endpoint=https://v2-be.smileeye.edu.vn/graphql schema.graphqls
  // Lỗi
  plugins: [vue(), GrapHQLGenerator()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
