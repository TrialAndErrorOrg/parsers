// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/unified-latex/unified-latex-tyast/**/*.ts',
      'libs/unified-latex/unified-latex-tyast/**/*.tsx',
      'libs/unified-latex/unified-latex-tyast/**/*.js',
      'libs/unified-latex/unified-latex-tyast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/unified-latex/unified-latex-tyast/**/*.ts', 'libs/unified-latex/unified-latex-tyast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/unified-latex/unified-latex-tyast/**/*.js', 'libs/unified-latex/unified-latex-tyast/**/*.jsx'],
    rules: {},
  },
]
