// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-citations/**/*.ts',
      'libs/ooxast/ooxast-util-citations/**/*.tsx',
      'libs/ooxast/ooxast-util-citations/**/*.js',
      'libs/ooxast/ooxast-util-citations/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-citations/**/*.ts',
      'libs/ooxast/ooxast-util-citations/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-citations/**/*.js',
      'libs/ooxast/ooxast-util-citations/**/*.jsx',
    ],
    rules: {},
  },
]
