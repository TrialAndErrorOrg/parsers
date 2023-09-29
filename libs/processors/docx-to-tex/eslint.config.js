// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/processors/docx-to-tex/**/*.ts',
      'libs/processors/docx-to-tex/**/*.tsx',
      'libs/processors/docx-to-tex/**/*.js',
      'libs/processors/docx-to-tex/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/processors/docx-to-tex/**/*.ts', 'libs/processors/docx-to-tex/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/processors/docx-to-tex/**/*.js', 'libs/processors/docx-to-tex/**/*.jsx'],
    rules: {},
  },
]
