// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/unified-latex/unified-latex-stringify/**/*.ts',
      'libs/unified-latex/unified-latex-stringify/**/*.tsx',
      'libs/unified-latex/unified-latex-stringify/**/*.js',
      'libs/unified-latex/unified-latex-stringify/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/unified-latex/unified-latex-stringify/**/*.ts',
      'libs/unified-latex/unified-latex-stringify/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/unified-latex/unified-latex-stringify/**/*.js',
      'libs/unified-latex/unified-latex-stringify/**/*.jsx',
    ],
    rules: {},
  },
]
