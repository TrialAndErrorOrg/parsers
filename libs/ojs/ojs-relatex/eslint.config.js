// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/ojs/ojs-relatex/**/*.ts',
      'libs/ojs/ojs-relatex/**/*.tsx',
      'libs/ojs/ojs-relatex/**/*.js',
      'libs/ojs/ojs-relatex/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/ojs/ojs-relatex/**/*.ts', 'libs/ojs/ojs-relatex/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/ojs/ojs-relatex/**/*.js', 'libs/ojs/ojs-relatex/**/*.jsx'],
    rules: {},
  },
]
