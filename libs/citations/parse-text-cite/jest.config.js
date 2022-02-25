const config = {
  displayName: 'citations-parse-text-cite',
  preset: '../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
    '^.+\\.ne$': 'jest-transform-nearley',
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'ne'],
  coverageDirectory: '../../../../coverage/libs/citations/parse-text-cite',
  extensionsToTreatAsEsm: ['.ts', '.ne'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default config
