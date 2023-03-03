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
const tsconfig = JSON.parse(readFileSync(join(__dirname, 'tsconfig.base.json'), 'utf8'))

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
  /* TODO: Update to latest Jest snapshotFormat
   * By default Nx has kept the older style of Jest Snapshot formats
   * to prevent breaking of any existing tests with snapshots.
   * It's recommend you update to the latest format.
   * You can do this by removing snapshotFormat property
   * and running tests with --update-snapshot flag.
   * Example: "nx affected --targets=test --update-snapshot"
   * More info: https://jestjs.io/docs/upgrading-to-jest29#snapshot-format
   */
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
}
