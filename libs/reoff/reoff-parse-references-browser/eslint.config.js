// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-parse-references-browser/**/*.ts',
      'libs/reoff/reoff-parse-references-browser/**/*.tsx',
      'libs/reoff/reoff-parse-references-browser/**/*.js',
      'libs/reoff/reoff-parse-references-browser/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/reoff/reoff-parse-references-browser/**/*.ts',
      'libs/reoff/reoff-parse-references-browser/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/reoff/reoff-parse-references-browser/**/*.js',
      'libs/reoff/reoff-parse-references-browser/**/*.jsx',
    ],
    rules: {},
  },
]
