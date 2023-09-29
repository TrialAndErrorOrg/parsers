// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-to-mdast/**/*.ts',
      'libs/ooxast/ooxast-util-to-mdast/**/*.tsx',
      'libs/ooxast/ooxast-util-to-mdast/**/*.js',
      'libs/ooxast/ooxast-util-to-mdast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-to-mdast/**/*.ts',
      'libs/ooxast/ooxast-util-to-mdast/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-to-mdast/**/*.js',
      'libs/ooxast/ooxast-util-to-mdast/**/*.jsx',
    ],
    rules: {},
  },
]
