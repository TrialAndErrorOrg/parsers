// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/citations/parse-text-cite/**/*.ts',
      'libs/citations/parse-text-cite/**/*.tsx',
      'libs/citations/parse-text-cite/**/*.js',
      'libs/citations/parse-text-cite/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/citations/parse-text-cite/**/*.ts', 'libs/citations/parse-text-cite/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/citations/parse-text-cite/**/*.js', 'libs/citations/parse-text-cite/**/*.jsx'],
    rules: {},
  },
  { ignores: ['libs/citations/parse-text-cite/**/apa.ts'] },
]
