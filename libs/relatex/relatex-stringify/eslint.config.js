import base from '../../../eslint.config.js'

export default [
  ...base,
  {
    files: [
      'libs/relatex/relatex-stringify/**/*.ts',
      'libs/relatex/relatex-stringify/**/*.tsx',
      'libs/relatex/relatex-stringify/**/*.js',
      'libs/relatex/relatex-stringify/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/relatex/relatex-stringify/**/*.ts', 'libs/relatex/relatex-stringify/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/relatex/relatex-stringify/**/*.js', 'libs/relatex/relatex-stringify/**/*.jsx'],
    rules: {},
  },
]
