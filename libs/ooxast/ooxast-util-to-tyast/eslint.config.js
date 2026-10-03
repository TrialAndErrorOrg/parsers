// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-to-tyast/**/*.ts',
      'libs/ooxast/ooxast-util-to-tyast/**/*.tsx',
      'libs/ooxast/ooxast-util-to-tyast/**/*.js',
      'libs/ooxast/ooxast-util-to-tyast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-to-tyast/**/*.ts',
      'libs/ooxast/ooxast-util-to-tyast/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-to-tyast/**/*.js',
      'libs/ooxast/ooxast-util-to-tyast/**/*.jsx',
    ],
    rules: {},
  },
]
