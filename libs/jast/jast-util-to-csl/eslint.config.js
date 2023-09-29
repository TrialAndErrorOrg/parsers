// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/jast/jast-util-to-csl/**/*.ts',
      'libs/jast/jast-util-to-csl/**/*.tsx',
      'libs/jast/jast-util-to-csl/**/*.js',
      'libs/jast/jast-util-to-csl/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/jast/jast-util-to-csl/**/*.ts', 'libs/jast/jast-util-to-csl/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/jast/jast-util-to-csl/**/*.js', 'libs/jast/jast-util-to-csl/**/*.jsx'],
    rules: {},
  },
]
