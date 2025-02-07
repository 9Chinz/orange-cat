import { strictConfig } from '@tools/eslint-config/base-strict'

/** @type {import("eslint").Linter.Config} */
export default [
  ...strictConfig,
  {
    ignores: ['dist/**', 'vite.config.ts']
  }
]
