// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast-util-parse-bib-node/**/*.ts',
      'libs/ooxast/ooxast-util-parse-bib-node/**/*.tsx',
      'libs/ooxast/ooxast-util-parse-bib-node/**/*.js',
      'libs/ooxast/ooxast-util-parse-bib-node/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-parse-bib-node/**/*.ts',
      'libs/ooxast/ooxast-util-parse-bib-node/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/ooxast/ooxast-util-parse-bib-node/**/*.js',
      'libs/ooxast/ooxast-util-parse-bib-node/**/*.jsx',
    ],
    rules: {},
  },
]
