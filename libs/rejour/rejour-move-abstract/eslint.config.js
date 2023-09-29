// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/rejour/rejour-move-abstract/**/*.ts',
      'libs/rejour/rejour-move-abstract/**/*.tsx',
      'libs/rejour/rejour-move-abstract/**/*.js',
      'libs/rejour/rejour-move-abstract/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/rejour/rejour-move-abstract/**/*.ts',
      'libs/rejour/rejour-move-abstract/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/rejour/rejour-move-abstract/**/*.js',
      'libs/rejour/rejour-move-abstract/**/*.jsx',
    ],
    rules: {},
  },
]
