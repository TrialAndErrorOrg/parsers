const config = {
  displayName: 'ooxast',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  testEnvironment: 'node',
  transform: {
    //eslint-disable-next-line
    '^.+\.[tj]sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/ooxast',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    //eslint-disable-next-line 
    '^(\.{1,2}/.*)\.js$': '$1',
  },
}

export default config