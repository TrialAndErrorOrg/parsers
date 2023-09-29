// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/jast/jast/**/*.ts',
      'libs/jast/jast/**/*.tsx',
      'libs/jast/jast/**/*.js',
      'libs/jast/jast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/jast/jast/**/*.ts', 'libs/jast/jast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/jast/jast/**/*.js', 'libs/jast/jast/**/*.jsx'],
    rules: {},
  },
]
