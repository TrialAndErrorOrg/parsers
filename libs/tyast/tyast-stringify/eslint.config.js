// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/tyast/tyast-stringify/**/*.ts',
      'libs/tyast/tyast-stringify/**/*.tsx',
      'libs/tyast/tyast-stringify/**/*.js',
      'libs/tyast/tyast-stringify/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/tyast/tyast-stringify/**/*.ts', 'libs/tyast/tyast-stringify/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/tyast/tyast-stringify/**/*.js', 'libs/tyast/tyast-stringify/**/*.jsx'],
    rules: {},
  },
]
