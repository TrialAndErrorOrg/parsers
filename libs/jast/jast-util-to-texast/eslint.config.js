// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/jast/jast-util-to-texast/**/*.ts',
      'libs/jast/jast-util-to-texast/**/*.tsx',
      'libs/jast/jast-util-to-texast/**/*.js',
      'libs/jast/jast-util-to-texast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/jast/jast-util-to-texast/**/*.ts', 'libs/jast/jast-util-to-texast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/jast/jast-util-to-texast/**/*.js', 'libs/jast/jast-util-to-texast/**/*.jsx'],
    rules: {},
  },
]
