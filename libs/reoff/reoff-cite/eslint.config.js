// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-cite/**/*.ts',
      'libs/reoff/reoff-cite/**/*.tsx',
      'libs/reoff/reoff-cite/**/*.js',
      'libs/reoff/reoff-cite/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-cite/**/*.ts', 'libs/reoff/reoff-cite/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-cite/**/*.js', 'libs/reoff/reoff-cite/**/*.jsx'],
    rules: {},
  },
]
