// @ts-check
import nxPreset from '@nrwl/jest/preset/index.js'
import { pathsToModuleNameMapper } from 'ts-jest'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// get dirname for esmodules

import { readFileSync } from 'fs'
import { join } from 'path'
const tsconfig = JSON.parse(
  readFileSync(join(__dirname, 'tsconfig.base.json'), 'utf8')
)

const {
  compilerOptions: { paths },
} = tsconfig

export default {
  ...nxPreset,
  globals: {
    __basedir: __dirname,
  },

  transform: {
    '^.+\\.ne$': 'jest-transform-nearley',
    '^.+\\.[jt]sx?$': ['@swc/jest'], // swcConfig],
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: pathsToModuleNameMapper(paths, {
    prefix: `${__dirname}/`,
  }),
}
