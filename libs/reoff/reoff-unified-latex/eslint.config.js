// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/reoff/reoff-unified-latex/**/*.ts',
      'libs/reoff/reoff-unified-latex/**/*.tsx',
      'libs/reoff/reoff-unified-latex/**/*.js',
      'libs/reoff/reoff-unified-latex/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-unified-latex/**/*.ts', 'libs/reoff/reoff-unified-latex/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/reoff/reoff-unified-latex/**/*.js', 'libs/reoff/reoff-unified-latex/**/*.jsx'],
    rules: {},
  },
]
