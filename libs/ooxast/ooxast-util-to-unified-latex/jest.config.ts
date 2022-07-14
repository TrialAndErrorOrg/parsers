/* eslint-disable */
const config = {
  displayName: 'ooxast-util-to-jast',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+.[tj]sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/ooxast-util-to-jast',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(.{1,2}/.*).js$': '$1',
  },
}

export default config
