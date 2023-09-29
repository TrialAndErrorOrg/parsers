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
      'apps/convert-e2e/**/*.ts',
      'apps/convert-e2e/**/*.tsx',
      'apps/convert-e2e/**/*.js',
      'apps/convert-e2e/**/*.jsx',
    ],
    rules: {},
  },
]
