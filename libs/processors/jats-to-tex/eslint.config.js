// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/processors/jats-to-tex/**/*.ts',
      'libs/processors/jats-to-tex/**/*.tsx',
      'libs/processors/jats-to-tex/**/*.js',
      'libs/processors/jats-to-tex/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/processors/jats-to-tex/**/*.ts', 'libs/processors/jats-to-tex/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/processors/jats-to-tex/**/*.js', 'libs/processors/jats-to-tex/**/*.jsx'],
    rules: {},
  },
]
