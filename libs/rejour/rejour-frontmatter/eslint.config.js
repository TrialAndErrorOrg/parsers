// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/rejour/rejour-frontmatter/**/*.ts',
      'libs/rejour/rejour-frontmatter/**/*.tsx',
      'libs/rejour/rejour-frontmatter/**/*.js',
      'libs/rejour/rejour-frontmatter/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-frontmatter/**/*.ts', 'libs/rejour/rejour-frontmatter/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/rejour/rejour-frontmatter/**/*.js', 'libs/rejour/rejour-frontmatter/**/*.jsx'],
    rules: {},
  },
]
