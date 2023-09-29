// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/docx-to-vfile/**/*.ts',
      'libs/reoff/docx-to-vfile/**/*.tsx',
      'libs/reoff/docx-to-vfile/**/*.js',
      'libs/reoff/docx-to-vfile/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/docx-to-vfile/**/*.ts', 'libs/reoff/docx-to-vfile/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/docx-to-vfile/**/*.js', 'libs/reoff/docx-to-vfile/**/*.jsx'],
    rules: {},
  },
]
