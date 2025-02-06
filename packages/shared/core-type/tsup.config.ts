import { defineConfig } from 'tsup'

/**
 * See also: https://www.shew.dev/monorepos/packaging/internal#make-a---object-object---configuration-file
 */
export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  minify: false,
  sourcemap: true,
  splitting: true,
  treeshake: true,
  outDir: 'dist',
  format: ['esm'],
  ...options,
}))
