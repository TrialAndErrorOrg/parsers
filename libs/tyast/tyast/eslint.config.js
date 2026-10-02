// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/tyast/tyast/**/*.ts',
      'libs/tyast/tyast/**/*.tsx',
      'libs/tyast/tyast/**/*.js',
      'libs/tyast/tyast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/tyast/tyast/**/*.ts', 'libs/tyast/tyast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/tyast/tyast/**/*.js', 'libs/tyast/tyast/**/*.jsx'],
    rules: {},
  },
]
