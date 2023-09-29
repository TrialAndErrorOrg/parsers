import base from '../../../eslint.config.js'

export default [
  ...base,
  {
    files: [
      'libs/xast/xast-util-is-element/**/*.ts',
      'libs/xast/xast-util-is-element/**/*.tsx',
      'libs/xast/xast-util-is-element/**/*.js',
      'libs/xast/xast-util-is-element/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/xast/xast-util-is-element/**/*.ts', 'libs/xast/xast-util-is-element/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/xast/xast-util-is-element/**/*.js', 'libs/xast/xast-util-is-element/**/*.jsx'],
    rules: {},
  },
]
