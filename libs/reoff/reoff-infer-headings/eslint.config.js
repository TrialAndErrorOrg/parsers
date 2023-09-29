// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-infer-headings/**/*.ts',
      'libs/reoff/reoff-infer-headings/**/*.tsx',
      'libs/reoff/reoff-infer-headings/**/*.js',
      'libs/reoff/reoff-infer-headings/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-infer-headings/**/*.ts', 'libs/reoff/reoff-infer-headings/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-infer-headings/**/*.js', 'libs/reoff/reoff-infer-headings/**/*.jsx'],
    rules: {},
  },
]
