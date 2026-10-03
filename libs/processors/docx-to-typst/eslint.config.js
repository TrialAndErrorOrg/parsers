// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/processors/docx-to-typst/**/*.ts',
      'libs/processors/docx-to-typst/**/*.tsx',
      'libs/processors/docx-to-typst/**/*.js',
      'libs/processors/docx-to-typst/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/processors/docx-to-typst/**/*.ts', 'libs/processors/docx-to-typst/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/processors/docx-to-typst/**/*.js', 'libs/processors/docx-to-typst/**/*.jsx'],
    rules: {},
  },
]
