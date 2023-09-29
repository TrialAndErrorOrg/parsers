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
      'libs/hybrid-builder/**/*.ts',
      'libs/hybrid-builder/**/*.tsx',
      'libs/hybrid-builder/**/*.js',
      'libs/hybrid-builder/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/hybrid-builder/**/*.ts', 'libs/hybrid-builder/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/hybrid-builder/**/*.js', 'libs/hybrid-builder/**/*.jsx'],
    rules: {},
  },
  ...compat.config({ parser: 'jsonc-eslint-parser' }).map((config) => ({
    ...config,
    files: [
      'libs/hybrid-builder/package.json',
      'libs/hybrid-builder/generators.json',
      'libs/hybrid-builder/executors.json',
    ],
    rules: { '@nx/nx-plugin-checks': 'error' },
  })),
]
