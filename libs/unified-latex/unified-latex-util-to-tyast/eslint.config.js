// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/unified-latex/unified-latex-util-to-tyast/**/*.ts',
      'libs/unified-latex/unified-latex-util-to-tyast/**/*.tsx',
      'libs/unified-latex/unified-latex-util-to-tyast/**/*.js',
      'libs/unified-latex/unified-latex-util-to-tyast/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/unified-latex/unified-latex-util-to-tyast/**/*.ts', 'libs/unified-latex/unified-latex-util-to-tyast/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/unified-latex/unified-latex-util-to-tyast/**/*.js', 'libs/unified-latex/unified-latex-util-to-tyast/**/*.jsx'],
    rules: {},
  },
]
