// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-properties/**/*.ts',
      'libs/ooxast/ooxast-util-properties/**/*.tsx',
      'libs/ooxast/ooxast-util-properties/**/*.js',
      'libs/ooxast/ooxast-util-properties/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-properties/**/*.ts',
      'libs/ooxast/ooxast-util-properties/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-properties/**/*.js',
      'libs/ooxast/ooxast-util-properties/**/*.jsx',
    ],
    rules: {},
  },
]
