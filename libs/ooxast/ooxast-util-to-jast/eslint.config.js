// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-to-jast/**/*.ts',
      'libs/ooxast/ooxast-util-to-jast/**/*.tsx',
      'libs/ooxast/ooxast-util-to-jast/**/*.js',
      'libs/ooxast/ooxast-util-to-jast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/ooxast/ooxast-util-to-jast/**/*.ts', 'libs/ooxast/ooxast-util-to-jast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/ooxast/ooxast-util-to-jast/**/*.js', 'libs/ooxast/ooxast-util-to-jast/**/*.jsx'],
    rules: {},
  },
]
