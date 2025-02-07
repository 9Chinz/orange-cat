import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'


export default defineConfig({
  // server: {
  //   watch: {
  //     ignored: []
  //   }
  // },
  plugins: [
    tsconfigPaths(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', ],
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    }
  },
})
