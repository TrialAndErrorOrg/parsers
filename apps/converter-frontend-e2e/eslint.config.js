const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})
module.exports = [
  ...compat.extends('../../eslint.config.js', 'plugin:cypress/recommended'),
  {
    files: [
      'apps/converter-frontend-e2e/**/*.ts',
      'apps/converter-frontend-e2e/**/*.tsx',
      'apps/converter-frontend-e2e/**/*.js',
      'apps/converter-frontend-e2e/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['apps/converter-frontend-e2e/src/plugins/index.js'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-undef': 'off',
    },
  },
]
