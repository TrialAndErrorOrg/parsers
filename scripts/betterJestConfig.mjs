import { program } from 'commander'
import { writeFile } from 'fs/promises'
import { join } from 'path'

program.argument('<location>', 'markdown file to parse')

program.parse()

const arg = program.args

if (!arg) {
  throw new Error(`Add an arg`)
}

const jestTemplate = (name) => `const config = {
  displayName: '${name}',
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
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/${name}',
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default config`

const name = arg[0].replace(/(.*?\/)*/g, '')

async function main() {
  await writeFile(join(arg[0], 'jest.config.js'), jestTemplate(name))
}

main()
