/* eslint-disable */
export default {
  displayName: 'processors-jote-docx-tex',
  preset: '../../../jest.preset.js',
  // globals: {
  //   'ts-jest': {
  //     tsconfig: '<rootDir>/tsconfig.spec.json',
  //   },
  // },
  testEnvironment: 'node',
  // transform: {
  //   '^.+\\.[tj]sx?$': ['@swc/jest', { swcrc: false }],
  // },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/processors/jote-docx-tex',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}
