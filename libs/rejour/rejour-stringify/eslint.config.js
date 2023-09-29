// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/rejour/rejour-stringify/**/*.ts',
      'libs/rejour/rejour-stringify/**/*.tsx',
      'libs/rejour/rejour-stringify/**/*.js',
      'libs/rejour/rejour-stringify/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-stringify/**/*.ts', 'libs/rejour/rejour-stringify/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-stringify/**/*.js', 'libs/rejour/rejour-stringify/**/*.jsx'],
    rules: {},
  },
]
