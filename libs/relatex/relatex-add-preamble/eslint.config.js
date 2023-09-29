// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/relatex/relatex-add-preamble/**/*.ts',
      'libs/relatex/relatex-add-preamble/**/*.tsx',
      'libs/relatex/relatex-add-preamble/**/*.js',
      'libs/relatex/relatex-add-preamble/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/relatex/relatex-add-preamble/**/*.ts',
      'libs/relatex/relatex-add-preamble/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/relatex/relatex-add-preamble/**/*.js',
      'libs/relatex/relatex-add-preamble/**/*.jsx',
    ],
    rules: {},
  },
]
