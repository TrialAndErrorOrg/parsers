const { FlatCompat } = require('@eslint/eslintrc')
const globals = require('globals')
const js = require('@eslint/js')
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})
module.exports = [
  ...compat.extends(
    '../../eslint.config.js',
    'plugin:@nx/react-typescript',
    'next',
    'next/core-web-vitals',
  ),
  { languageOptions: { globals: { ...globals.jest } } },
  {
    files: [
      'apps/react-pdf/**/*.ts',
      'apps/react-pdf/**/*.tsx',
      'apps/react-pdf/**/*.js',
      'apps/react-pdf/**/*.jsx',
    ],
    rules: { '@next/next/no-html-link-for-pages': ['error', 'apps/react-pdf/pages'] },
  },
  {
    files: ['apps/react-pdf/**/*.ts', 'apps/react-pdf/**/*.tsx'],
    rules: {},
  },
  {
    files: ['apps/react-pdf/**/*.js', 'apps/react-pdf/**/*.jsx'],
    rules: {},
  },
]
