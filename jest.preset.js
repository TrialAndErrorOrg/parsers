const nxPreset = require('@nrwl/jest/preset').default

module.exports = {
  ...nxPreset,
  // globals: {
  //   'ts-jest': {
  //     tsconfig: '<rootDir>/tsconfig.spec.json',
  //     useESM: true,
  //   },
  // },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest'],
    '^.+\\.ne$': 'jest-transform-nearley',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}
