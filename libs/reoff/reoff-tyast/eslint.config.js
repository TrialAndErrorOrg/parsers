// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-tyast/**/*.ts',
      'libs/reoff/reoff-tyast/**/*.tsx',
      'libs/reoff/reoff-tyast/**/*.js',
      'libs/reoff/reoff-tyast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-tyast/**/*.ts', 'libs/reoff/reoff-tyast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-tyast/**/*.js', 'libs/reoff/reoff-tyast/**/*.jsx'],
    rules: {},
  },
]
