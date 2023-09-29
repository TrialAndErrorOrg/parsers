// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-remove-rsid/**/*.ts',
      'libs/ooxast/ooxast-util-remove-rsid/**/*.tsx',
      'libs/ooxast/ooxast-util-remove-rsid/**/*.js',
      'libs/ooxast/ooxast-util-remove-rsid/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-remove-rsid/**/*.ts',
      'libs/ooxast/ooxast-util-remove-rsid/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-remove-rsid/**/*.js',
      'libs/ooxast/ooxast-util-remove-rsid/**/*.jsx',
    ],
    rules: {},
  },
]
