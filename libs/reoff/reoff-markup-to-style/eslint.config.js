// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-markup-to-style/**/*.ts',
      'libs/reoff/reoff-markup-to-style/**/*.tsx',
      'libs/reoff/reoff-markup-to-style/**/*.js',
      'libs/reoff/reoff-markup-to-style/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/reoff/reoff-markup-to-style/**/*.ts',
      'libs/reoff/reoff-markup-to-style/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/reoff/reoff-markup-to-style/**/*.js',
      'libs/reoff/reoff-markup-to-style/**/*.jsx',
    ],
    rules: {},
  },
]
