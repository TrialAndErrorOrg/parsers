// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/texast/texast-util-add-preamble/**/*.ts',
      'libs/texast/texast-util-add-preamble/**/*.tsx',
      'libs/texast/texast-util-add-preamble/**/*.js',
      'libs/texast/texast-util-add-preamble/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/texast/texast-util-add-preamble/**/*.ts',
      'libs/texast/texast-util-add-preamble/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/texast/texast-util-add-preamble/**/*.js',
      'libs/texast/texast-util-add-preamble/**/*.jsx',
    ],
    rules: {},
  },
]
