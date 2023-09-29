// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ooxast/ooxast/**/*.ts',
      'libs/ooxast/ooxast/**/*.tsx',
      'libs/ooxast/ooxast/**/*.js',
      'libs/ooxast/ooxast/**/*.jsx',
    ],
    rules: {
      'no-var': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
    },
  },
  {
    files: ['libs/ooxast/ooxast/**/*.ts', 'libs/ooxast/ooxast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/ooxast/ooxast/**/*.js', 'libs/ooxast/ooxast/**/*.jsx'],
    rules: {},
  },
]
