// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/citations/ojs-types/**/*.ts',
      'libs/citations/ojs-types/**/*.tsx',
      'libs/citations/ojs-types/**/*.js',
      'libs/citations/ojs-types/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/citations/ojs-types/**/*.ts', 'libs/citations/ojs-types/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/citations/ojs-types/**/*.js', 'libs/citations/ojs-types/**/*.jsx'],
    rules: {},
  },
]
