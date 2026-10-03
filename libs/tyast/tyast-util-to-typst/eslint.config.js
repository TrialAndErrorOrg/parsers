// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/tyast/tyast-util-to-typst/**/*.ts',
      'libs/tyast/tyast-util-to-typst/**/*.tsx',
      'libs/tyast/tyast-util-to-typst/**/*.js',
      'libs/tyast/tyast-util-to-typst/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/tyast/tyast-util-to-typst/**/*.ts', 'libs/tyast/tyast-util-to-typst/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/tyast/tyast-util-to-typst/**/*.js', 'libs/tyast/tyast-util-to-typst/**/*.jsx'],
    rules: {},
  },
]
