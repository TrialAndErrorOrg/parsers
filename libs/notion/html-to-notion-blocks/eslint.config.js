// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/notion/html-to-notion-blocks/**/*.ts',
      'libs/notion/html-to-notion-blocks/**/*.tsx',
      'libs/notion/html-to-notion-blocks/**/*.js',
      'libs/notion/html-to-notion-blocks/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/notion/html-to-notion-blocks/**/*.ts',
      'libs/notion/html-to-notion-blocks/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/notion/html-to-notion-blocks/**/*.js',
      'libs/notion/html-to-notion-blocks/**/*.jsx',
    ],
    rules: {},
  },
]
