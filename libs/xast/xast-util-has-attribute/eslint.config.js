import base from '../../../eslint.config.js'
export default [
  ...base,
  {
    files: [
      'libs/xast/xast-util-has-attribute/**/*.ts',
      'libs/xast/xast-util-has-attribute/**/*.tsx',
      'libs/xast/xast-util-has-attribute/**/*.js',
      'libs/xast/xast-util-has-attribute/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/xast/xast-util-has-attribute/**/*.ts',
      'libs/xast/xast-util-has-attribute/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'libs/xast/xast-util-has-attribute/**/*.js',
      'libs/xast/xast-util-has-attribute/**/*.jsx',
    ],
    rules: {},
  },
]
