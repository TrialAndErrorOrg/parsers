// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/utils/ojs-to-preamble/**/*.ts',
      'libs/utils/ojs-to-preamble/**/*.tsx',
      'libs/utils/ojs-to-preamble/**/*.js',
      'libs/utils/ojs-to-preamble/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/utils/ojs-to-preamble/**/*.ts', 'libs/utils/ojs-to-preamble/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/utils/ojs-to-preamble/**/*.js', 'libs/utils/ojs-to-preamble/**/*.jsx'],
    rules: {},
  },
]
