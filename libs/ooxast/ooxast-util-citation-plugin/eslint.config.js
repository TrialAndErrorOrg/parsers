// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-citation-plugin/**/*.ts',
      'libs/ooxast/ooxast-util-citation-plugin/**/*.tsx',
      'libs/ooxast/ooxast-util-citation-plugin/**/*.js',
      'libs/ooxast/ooxast-util-citation-plugin/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-citation-plugin/**/*.ts',
      'libs/ooxast/ooxast-util-citation-plugin/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-citation-plugin/**/*.js',
      'libs/ooxast/ooxast-util-citation-plugin/**/*.jsx',
    ],
    rules: {},
  },
]
