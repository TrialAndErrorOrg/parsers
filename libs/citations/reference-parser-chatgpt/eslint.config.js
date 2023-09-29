// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/citations/reference-parser-chatgpt/**/*.ts',
      'libs/citations/reference-parser-chatgpt/**/*.tsx',
      'libs/citations/reference-parser-chatgpt/**/*.js',
      'libs/citations/reference-parser-chatgpt/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/citations/reference-parser-chatgpt/**/*.ts',
      'libs/citations/reference-parser-chatgpt/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/citations/reference-parser-chatgpt/**/*.js',
      'libs/citations/reference-parser-chatgpt/**/*.jsx',
    ],
    rules: {},
  },
]
