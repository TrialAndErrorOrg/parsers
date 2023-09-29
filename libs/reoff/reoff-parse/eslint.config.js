// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-parse/**/*.ts',
      'libs/reoff/reoff-parse/**/*.tsx',
      'libs/reoff/reoff-parse/**/*.js',
      'libs/reoff/reoff-parse/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-parse/**/*.ts', 'libs/reoff/reoff-parse/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-parse/**/*.js', 'libs/reoff/reoff-parse/**/*.jsx'],
    rules: {},
  },
  {
    ignores: ['libs/reoff/reoff-parse/docs/**/*'],
  },
]
