// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-to-hast/**/*.ts',
      'libs/ooxast/ooxast-util-to-hast/**/*.tsx',
      'libs/ooxast/ooxast-util-to-hast/**/*.js',
      'libs/ooxast/ooxast-util-to-hast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/ooxast/ooxast-util-to-hast/**/*.ts', 'libs/ooxast/ooxast-util-to-hast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/ooxast/ooxast-util-to-hast/**/*.js', 'libs/ooxast/ooxast-util-to-hast/**/*.jsx'],
    rules: {},
  },
]
