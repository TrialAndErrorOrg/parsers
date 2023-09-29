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
  ...compat.config({ parser: 'jsonc-eslint-parser' }).map((config) => ({
    ...config,
    files: ['libs/utils/better-check-dependencies/**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        { ignoredFiles: ['{projectRoot}/vite.config.{js,ts,mjs,mts}'] },
      ],
    },
  })),
]
