// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-parse-bib-browser/**/*.ts',
      'libs/ooxast/ooxast-util-parse-bib-browser/**/*.tsx',
      'libs/ooxast/ooxast-util-parse-bib-browser/**/*.js',
      'libs/ooxast/ooxast-util-parse-bib-browser/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-parse-bib-browser/**/*.ts',
      'libs/ooxast/ooxast-util-parse-bib-browser/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-parse-bib-browser/**/*.js',
      'libs/ooxast/ooxast-util-parse-bib-browser/**/*.jsx',
    ],
    rules: {},
  },
]
