// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/texast/texast-util-to-latex/**/*.ts',
      'libs/texast/texast-util-to-latex/**/*.tsx',
      'libs/texast/texast-util-to-latex/**/*.js',
      'libs/texast/texast-util-to-latex/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/texast/texast-util-to-latex/**/*.ts',
      'libs/texast/texast-util-to-latex/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/texast/texast-util-to-latex/**/*.js',
      'libs/texast/texast-util-to-latex/**/*.jsx',
    ],
    rules: {},
  },
]
