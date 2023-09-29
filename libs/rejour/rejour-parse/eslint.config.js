// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/rejour/rejour-parse/**/*.ts',
      'libs/rejour/rejour-parse/**/*.tsx',
      'libs/rejour/rejour-parse/**/*.js',
      'libs/rejour/rejour-parse/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-parse/**/*.ts', 'libs/rejour/rejour-parse/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-parse/**/*.js', 'libs/rejour/rejour-parse/**/*.jsx'],
    rules: {},
  },
]
