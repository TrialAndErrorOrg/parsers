import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
const { configs } = js
import base from '../../eslint.config.js'

const compat = new FlatCompat({
  baseDirectory: new URL('.', import.meta.url).pathname,
  recommendedConfig: configs.recommended,
})

export default [
  ...base,
  {
    files: [
      'libs/book-converter/**/*.ts',
      'libs/book-converter/**/*.tsx',
      'libs/book-converter/**/*.js',
      'libs/book-converter/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/book-converter/**/*.ts', 'libs/book-converter/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/book-converter/**/*.js', 'libs/book-converter/**/*.jsx'],
    rules: {},
  },
]
