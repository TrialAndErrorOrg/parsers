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
      'libs/plugins/better-nx-tsc/**/*.ts',
      'libs/plugins/better-nx-tsc/**/*.tsx',
      'libs/plugins/better-nx-tsc/**/*.js',
      'libs/plugins/better-nx-tsc/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/plugins/better-nx-tsc/**/*.ts', 'libs/plugins/better-nx-tsc/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/plugins/better-nx-tsc/**/*.js', 'libs/plugins/better-nx-tsc/**/*.jsx'],
    rules: {},
  },
  ...compat.config({ parser: 'jsonc-eslint-parser' }).map((config) => ({
    ...config,
    files: [
      'libs/plugins/better-nx-tsc/package.json',
      'libs/plugins/better-nx-tsc/generators.json',
      'libs/plugins/better-nx-tsc/executors.json',
    ],
    rules: { '@nx/nx-plugin-checks': 'error' },
  })),
]
