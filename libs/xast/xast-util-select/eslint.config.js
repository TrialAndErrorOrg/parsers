// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/xast/xast-util-select/**/*.ts',
      'libs/xast/xast-util-select/**/*.tsx',
      'libs/xast/xast-util-select/**/*.js',
      'libs/xast/xast-util-select/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/xast/xast-util-select/**/*.ts', 'libs/xast/xast-util-select/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/xast/xast-util-select/**/*.js', 'libs/xast/xast-util-select/**/*.jsx'],
    rules: {},
  },
]
