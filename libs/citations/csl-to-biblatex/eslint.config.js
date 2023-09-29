// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/citations/csl-to-biblatex/**/*.ts',
      'libs/citations/csl-to-biblatex/**/*.tsx',
      'libs/citations/csl-to-biblatex/**/*.js',
      'libs/citations/csl-to-biblatex/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/citations/csl-to-biblatex/**/*.ts', 'libs/citations/csl-to-biblatex/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/citations/csl-to-biblatex/**/*.js', 'libs/citations/csl-to-biblatex/**/*.jsx'],
    rules: {},
  },
]
