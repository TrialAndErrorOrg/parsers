// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-get-style/**/*.ts',
      'libs/ooxast/ooxast-util-get-style/**/*.tsx',
      'libs/ooxast/ooxast-util-get-style/**/*.js',
      'libs/ooxast/ooxast-util-get-style/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-get-style/**/*.ts',
      'libs/ooxast/ooxast-util-get-style/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-get-style/**/*.js',
      'libs/ooxast/ooxast-util-get-style/**/*.jsx',
    ],
    rules: {},
  },
]
