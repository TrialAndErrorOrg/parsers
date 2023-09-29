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
      'apps/converter-frontend/**/*.ts',
      'apps/converter-frontend/**/*.tsx',
      'apps/converter-frontend/**/*.js',
      'apps/converter-frontend/**/*.jsx',
    ],
    rules: {
      '@next/next/no-html-link-for-pages': ['error', 'apps/converter-frontend/pages'],
      'import/extensions': 0,
      'react/display-name': 0,
    },
  },
  {
    files: ['apps/converter-frontend/**/*.ts', 'apps/converter-frontend/**/*.tsx'],
    rules: {},
  },
  {
    files: ['apps/converter-frontend/**/*.js', 'apps/converter-frontend/**/*.jsx'],
    rules: {},
  },
]
