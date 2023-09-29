const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})
module.exports = [
  ...compat.extends('../../../eslint.config.js'),
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
