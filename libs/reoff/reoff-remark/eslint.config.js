// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-remark/**/*.ts',
      'libs/reoff/reoff-remark/**/*.tsx',
      'libs/reoff/reoff-remark/**/*.js',
      'libs/reoff/reoff-remark/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-remark/**/*.ts', 'libs/reoff/reoff-remark/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-remark/**/*.js', 'libs/reoff/reoff-remark/**/*.jsx'],
    rules: {},
  },
]
