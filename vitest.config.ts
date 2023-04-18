import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom'
  },
  plugins: [
    [require('@vitejs/plugin-vue')()]
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
})
