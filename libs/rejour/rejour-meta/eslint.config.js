// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/rejour/rejour-meta/**/*.ts',
      'libs/rejour/rejour-meta/**/*.tsx',
      'libs/rejour/rejour-meta/**/*.js',
      'libs/rejour/rejour-meta/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-meta/**/*.ts', 'libs/rejour/rejour-meta/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-meta/**/*.js', 'libs/rejour/rejour-meta/**/*.jsx'],
    rules: {},
  },
]
