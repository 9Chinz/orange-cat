import tseslint from "typescript-eslint";
import { config as baseConfig } from "./base.js";
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'

/**
 * ESLint configuration for strict mode.
 * @type {import("eslint").Linter.Config}
 * @see eslint typescript rules at https://eslint.org/docs/latest/rules/
 * @see teypscript-eslint rules at https://typescript-eslint.io/rules/
 * @see stylistic rules at https://eslint.style/packages/js?
 */
export const strictConfig = [
  ...baseConfig,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs
    },
    languageOptions: {
      ...tseslint.configs.recommended.languageOptions,
      parser: parserTs
    },
    rules: {
      "no-undef": "error",
      "no-console": "warn",
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/quotes': ['error', 'single'],
      '@stylistic/ts/semi': ['error', 'never'],
      '@stylistic/ts/block-spacing': ['error', 'always'],
      '@stylistic/js/eol-last': ["error", "always"]
    }
  }
]
