// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-parse-references/**/*.ts',
      'libs/reoff/reoff-parse-references/**/*.tsx',
      'libs/reoff/reoff-parse-references/**/*.js',
      'libs/reoff/reoff-parse-references/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/reoff/reoff-parse-references/**/*.ts',
      'libs/reoff/reoff-parse-references/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/reoff/reoff-parse-references/**/*.js',
      'libs/reoff/reoff-parse-references/**/*.jsx',
    ],
    rules: {},
  },
]
