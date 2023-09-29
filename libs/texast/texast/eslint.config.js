// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/texast/texast/**/*.ts',
      'libs/texast/texast/**/*.tsx',
      'libs/texast/texast/**/*.js',
      'libs/texast/texast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/texast/texast/**/*.ts', 'libs/texast/texast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/texast/texast/**/*.js', 'libs/texast/texast/**/*.jsx'],
    rules: {},
  },
]
