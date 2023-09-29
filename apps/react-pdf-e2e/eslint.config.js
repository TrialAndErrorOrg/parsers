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
      'apps/react-pdf-e2e/**/*.ts',
      'apps/react-pdf-e2e/**/*.tsx',
      'apps/react-pdf-e2e/**/*.js',
      'apps/react-pdf-e2e/**/*.jsx',
    ],
    rules: {},
  },
]
