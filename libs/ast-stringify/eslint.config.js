const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})
module.exports = [
  ...compat.extends('../../eslint.config.js'),
  {
    files: [
      'libs/ast-stringify/**/*.ts',
      'libs/ast-stringify/**/*.tsx',
      'libs/ast-stringify/**/*.js',
      'libs/ast-stringify/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/ast-stringify/**/*.ts', 'libs/ast-stringify/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/ast-stringify/**/*.js', 'libs/ast-stringify/**/*.jsx'],
    rules: {},
  },
]
