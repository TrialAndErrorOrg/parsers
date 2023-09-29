// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-compile/**/*.ts',
      'libs/reoff/reoff-compile/**/*.tsx',
      'libs/reoff/reoff-compile/**/*.js',
      'libs/reoff/reoff-compile/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-compile/**/*.ts', 'libs/reoff/reoff-compile/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-compile/**/*.js', 'libs/reoff/reoff-compile/**/*.jsx'],
    rules: {},
  },
]
