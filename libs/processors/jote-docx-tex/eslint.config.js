// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/processors/jote-docx-tex/**/*.ts',
      'libs/processors/jote-docx-tex/**/*.tsx',
      'libs/processors/jote-docx-tex/**/*.js',
      'libs/processors/jote-docx-tex/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/processors/jote-docx-tex/**/*.ts', 'libs/processors/jote-docx-tex/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/processors/jote-docx-tex/**/*.js', 'libs/processors/jote-docx-tex/**/*.jsx'],
    rules: {},
  },
]
