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
  { rules: { '@next/next/no-html-link-for-pages': 'off' } },
  {
    files: [
      'apps/convert/**/*.ts',
      'apps/convert/**/*.tsx',
      'apps/convert/**/*.js',
      'apps/convert/**/*.jsx',
    ],
    rules: { '@next/next/no-html-link-for-pages': ['error', 'apps/convert/pages'] },
  },
  {
    files: ['apps/convert/**/*.ts', 'apps/convert/**/*.tsx'],
    rules: {},
  },
  {
    files: ['apps/convert/**/*.js', 'apps/convert/**/*.jsx'],
    rules: {},
  },
  { ignores: ['apps/convert/.next/**/*'] },
]
