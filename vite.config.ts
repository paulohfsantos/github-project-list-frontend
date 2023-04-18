// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = {...process.env, ...loadEnv(mode, process.cwd())};

  const config = {
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      vuetify({ autoImport: true }),
    ],
    define: {
      'process.env': {
        NODE_ENV: process.env.NODE_ENV,
        API_LOCAL: process.env.VITE_API_LOCAL,
        VITEST: process.env.VITE_VITEST,
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
    server: {
      port: 3000,
    },
  }

  return defineConfig(config)
}
