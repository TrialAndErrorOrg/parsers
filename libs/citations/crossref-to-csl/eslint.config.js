// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/citations/crossref-to-csl/**/*.ts',
      'libs/citations/crossref-to-csl/**/*.tsx',
      'libs/citations/crossref-to-csl/**/*.js',
      'libs/citations/crossref-to-csl/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/citations/crossref-to-csl/**/*.ts', 'libs/citations/crossref-to-csl/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/citations/crossref-to-csl/**/*.js', 'libs/citations/crossref-to-csl/**/*.jsx'],
    rules: {},
  },
]
