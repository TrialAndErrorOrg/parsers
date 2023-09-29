const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})
module.exports = [
  ...compat.extends('../../eslint.config.js'),
  {
    files: [
      'tools/workspace-plugin/**/*.ts',
      'tools/workspace-plugin/**/*.tsx',
      'tools/workspace-plugin/**/*.js',
      'tools/workspace-plugin/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['tools/workspace-plugin/**/*.ts', 'tools/workspace-plugin/**/*.tsx'],
    rules: {},
  },
  {
    files: ['tools/workspace-plugin/**/*.js', 'tools/workspace-plugin/**/*.jsx'],
    rules: {},
  },
  ...compat.config({ parser: 'jsonc-eslint-parser' }).map((config) => ({
    ...config,
    files: ['tools/workspace-plugin/**/*.json'],
    rules: { '@nx/dependency-checks': 'error' },
  })),
  ...compat.config({ parser: 'jsonc-eslint-parser' }).map((config) => ({
    ...config,
    files: ['tools/workspace-plugin/package.json', 'tools/workspace-plugin/generators.json'],
    rules: { '@nx/nx-plugin-checks': 'error' },
  })),
]
