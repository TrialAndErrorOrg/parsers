// @ts-check

import base from '../../../eslint.config.js'

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...base,
  {
    files: [
      'libs/utils/readme/**/*.ts',
      'libs/utils/readme/**/*.tsx',
      'libs/utils/readme/**/*.js',
      'libs/utils/readme/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/utils/readme/**/*.ts', 'libs/utils/readme/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/utils/readme/**/*.js', 'libs/utils/readme/**/*.jsx'],
    rules: {},
  },
  ...compat.config({ parser: 'jsonc-eslint-parser' }).map((config) => ({
    ...config,
    files: [
      'libs/utils/readme/package.json',
      'libs/utils/readme/generators.json',
      'libs/utils/readme/executors.json',
    ],
    rules: { '@nx/nx-plugin-checks': 'error' },
  })),
]
