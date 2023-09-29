// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/jast/jast-util-from-csl/**/*.ts',
      'libs/jast/jast-util-from-csl/**/*.tsx',
      'libs/jast/jast-util-from-csl/**/*.js',
      'libs/jast/jast-util-from-csl/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/jast/jast-util-from-csl/**/*.ts', 'libs/jast/jast-util-from-csl/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/jast/jast-util-from-csl/**/*.js', 'libs/jast/jast-util-from-csl/**/*.jsx'],
    rules: {},
  },
]
