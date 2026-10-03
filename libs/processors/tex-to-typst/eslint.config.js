// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/processors/tex-to-typst/**/*.ts',
      'libs/processors/tex-to-typst/**/*.tsx',
      'libs/processors/tex-to-typst/**/*.js',
      'libs/processors/tex-to-typst/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/processors/tex-to-typst/**/*.ts', 'libs/processors/tex-to-typst/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/processors/tex-to-typst/**/*.js', 'libs/processors/tex-to-typst/**/*.jsx'],
    rules: {},
  },
]
