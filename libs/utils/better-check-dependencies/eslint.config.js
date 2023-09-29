import base from '../../../eslint.config.js'

export default [
  ...base,
  {
    files: [
      'libs/utils/better-check-dependencies/**/*.ts',
      'libs/utils/better-check-dependencies/**/*.tsx',
      'libs/utils/better-check-dependencies/**/*.js',
      'libs/utils/better-check-dependencies/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/utils/better-check-dependencies/**/*.ts',
      'libs/utils/better-check-dependencies/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/utils/better-check-dependencies/**/*.js',
      'libs/utils/better-check-dependencies/**/*.jsx',
    ],
    rules: {},
  },
]
