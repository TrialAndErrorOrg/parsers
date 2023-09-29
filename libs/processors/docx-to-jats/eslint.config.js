// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/processors/docx-to-jats/**/*.ts',
      'libs/processors/docx-to-jats/**/*.tsx',
      'libs/processors/docx-to-jats/**/*.js',
      'libs/processors/docx-to-jats/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/processors/docx-to-jats/**/*.ts', 'libs/processors/docx-to-jats/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/processors/docx-to-jats/**/*.js', 'libs/processors/docx-to-jats/**/*.jsx'],
    rules: {},
  },
]
