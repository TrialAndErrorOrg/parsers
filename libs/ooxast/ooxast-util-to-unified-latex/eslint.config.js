// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-to-unified-latex/**/*.ts',
      'libs/ooxast/ooxast-util-to-unified-latex/**/*.tsx',
      'libs/ooxast/ooxast-util-to-unified-latex/**/*.js',
      'libs/ooxast/ooxast-util-to-unified-latex/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-to-unified-latex/**/*.ts',
      'libs/ooxast/ooxast-util-to-unified-latex/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-to-unified-latex/**/*.js',
      'libs/ooxast/ooxast-util-to-unified-latex/**/*.jsx',
    ],
    rules: {},
  },
]
