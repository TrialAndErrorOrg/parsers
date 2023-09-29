// @ts-check

import base from '../../../eslint.config.js'

export default [
  ...base,
  {
    files: [
      'libs/plugins/better-nx-tsc/**/*.ts',
      'libs/plugins/better-nx-tsc/**/*.tsx',
      'libs/plugins/better-nx-tsc/**/*.js',
      'libs/plugins/better-nx-tsc/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/plugins/better-nx-tsc/**/*.ts', 'libs/plugins/better-nx-tsc/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/plugins/better-nx-tsc/**/*.js', 'libs/plugins/better-nx-tsc/**/*.jsx'],
    rules: {},
  },
]
