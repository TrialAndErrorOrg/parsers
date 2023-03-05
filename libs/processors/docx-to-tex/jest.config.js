// @ts-check
/* eslint-disable */

const config = {
  displayName: 'docx-to-latex',
  preset: '../../../jest.preset.js',
  // preset: 'ts-jest/presets/default-esm', // or other ESM presets

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  // transform: {},
  testEnvironment: 'node',
  transform: {
    '^.+.[tj]sx?$': ['@swc/jest', { swcrc: false }],
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/docx-to-latex',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(.{1,2}/.*).js$': '$1',
  },
  // pathsToModuleNameMapper(compilerOptions.paths, {
  //   prefix: '<rootDir>/../../../',
  // }),
}

export default config
