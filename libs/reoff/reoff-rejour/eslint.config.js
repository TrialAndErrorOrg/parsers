// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-rejour/**/*.ts',
      'libs/reoff/reoff-rejour/**/*.tsx',
      'libs/reoff/reoff-rejour/**/*.js',
      'libs/reoff/reoff-rejour/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-rejour/**/*.ts', 'libs/reoff/reoff-rejour/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-rejour/**/*.js', 'libs/reoff/reoff-rejour/**/*.jsx'],
    rules: {},
  },
]
