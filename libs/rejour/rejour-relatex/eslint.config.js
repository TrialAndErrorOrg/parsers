// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/rejour/rejour-relatex/**/*.ts',
      'libs/rejour/rejour-relatex/**/*.tsx',
      'libs/rejour/rejour-relatex/**/*.js',
      'libs/rejour/rejour-relatex/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-relatex/**/*.ts', 'libs/rejour/rejour-relatex/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-relatex/**/*.js', 'libs/rejour/rejour-relatex/**/*.jsx'],
    rules: {},
  },
]
