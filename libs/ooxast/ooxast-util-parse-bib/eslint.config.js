// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-parse-bib/**/*.ts',
      'libs/ooxast/ooxast-util-parse-bib/**/*.tsx',
      'libs/ooxast/ooxast-util-parse-bib/**/*.js',
      'libs/ooxast/ooxast-util-parse-bib/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-parse-bib/**/*.ts',
      'libs/ooxast/ooxast-util-parse-bib/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-parse-bib/**/*.js',
      'libs/ooxast/ooxast-util-parse-bib/**/*.jsx',
    ],
    rules: {},
  },
]
