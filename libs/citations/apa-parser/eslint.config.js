// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/citations/apa-parser/**/*.ts',
      'libs/citations/apa-parser/**/*.tsx',
      'libs/citations/apa-parser/**/*.js',
      'libs/citations/apa-parser/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/citations/apa-parser/**/*.ts', 'libs/citations/apa-parser/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/citations/apa-parser/**/*.js', 'libs/citations/apa-parser/**/*.jsx'],
    rules: {},
  },
]
