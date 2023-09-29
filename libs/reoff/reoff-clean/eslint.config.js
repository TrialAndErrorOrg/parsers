// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-clean/**/*.ts',
      'libs/reoff/reoff-clean/**/*.tsx',
      'libs/reoff/reoff-clean/**/*.js',
      'libs/reoff/reoff-clean/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-clean/**/*.ts', 'libs/reoff/reoff-clean/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-clean/**/*.js', 'libs/reoff/reoff-clean/**/*.jsx'],
    rules: {},
  },
]
