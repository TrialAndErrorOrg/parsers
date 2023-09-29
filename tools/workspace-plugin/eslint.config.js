import base from '../../eslint.config.js'

export default [
  ...base,
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
]
