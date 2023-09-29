// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-markup-to-style/**/*.ts',
      'libs/ooxast/ooxast-util-markup-to-style/**/*.tsx',
      'libs/ooxast/ooxast-util-markup-to-style/**/*.js',
      'libs/ooxast/ooxast-util-markup-to-style/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-markup-to-style/**/*.ts',
      'libs/ooxast/ooxast-util-markup-to-style/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-markup-to-style/**/*.js',
      'libs/ooxast/ooxast-util-markup-to-style/**/*.jsx',
    ],
    rules: {},
  },
]
