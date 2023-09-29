// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/citations/crossref-json/**/*.ts',
      'libs/citations/crossref-json/**/*.tsx',
      'libs/citations/crossref-json/**/*.js',
      'libs/citations/crossref-json/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/citations/crossref-json/**/*.ts', 'libs/citations/crossref-json/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/citations/crossref-json/**/*.js', 'libs/citations/crossref-json/**/*.jsx'],
    rules: {},
  },
]
