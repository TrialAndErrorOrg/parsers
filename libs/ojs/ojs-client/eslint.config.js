// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ojs/ojs-client/**/*.ts',
      'libs/ojs/ojs-client/**/*.tsx',
      'libs/ojs/ojs-client/**/*.js',
      'libs/ojs/ojs-client/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/ojs/ojs-client/**/*.ts', 'libs/ojs/ojs-client/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/ojs/ojs-client/**/*.js', 'libs/ojs/ojs-client/**/*.jsx'],
    rules: {},
  },
]
