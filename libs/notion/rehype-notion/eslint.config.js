// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/notion/rehype-notion/**/*.ts',
      'libs/notion/rehype-notion/**/*.tsx',
      'libs/notion/rehype-notion/**/*.js',
      'libs/notion/rehype-notion/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/notion/rehype-notion/**/*.ts', 'libs/notion/rehype-notion/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/notion/rehype-notion/**/*.js', 'libs/notion/rehype-notion/**/*.jsx'],
    rules: {},
  },
]
