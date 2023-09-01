import { createLockFile } from 'nx/src/lock-file/lock-file'
import { createPackageJson } from './create-package-json'
import {
  ExecutorContext,
  getOutputsForTargetAndConfiguration,
  joinPathFragments,
  normalizePath,
  ProjectGraphProjectNode,
  readJsonFile,
  workspaceRoot,
  writeJsonFile,
} from '@nrwl/devkit'
import { DependentBuildableProjectNode } from '@nrwl/workspace/src/utilities/buildable-libs-utils'
import { basename, dirname, join, parse, relative } from 'path'
import { getLockFileName } from 'nx/src/lock-file/lock-file'
import { writeFileSync } from 'fs-extra'
import { isNpmProject } from 'nx/src/project-graph/operators'
import { fileExists } from 'nx/src/utils/fileutils'
import type { PackageJson } from './package-json'
import { existsSync } from 'fs'
import { getFilteredDependencies } from './get-filtered-dependencies'

function getMainFileDirRelativeToProjectRoot(main: string, projectRoot: string): string {
  const mainFileDir = dirname(main)
  const relativeDir = normalizePath(relative(projectRoot, mainFileDir))
  return relativeDir === '' ? `./` : `./${relativeDir}/`
}

export type SupportedFormat = 'cjs' | 'esm'

export interface UpdatePackageJsonOption {
  projectRoot: string
  main: string
  format?: SupportedFormat[]
  outputPath: string
  outputFileName?: string
  outputFileExtensionForCjs?: `.${string}`
  skipTypings?: boolean
  generateExportsField?: boolean
  excludeLibsInPackageJson?: boolean
  updateBuildableProjectDepsInPackageJson?: boolean
  buildableProjectDepsInPackageJsonType?: 'dependencies' | 'peerDependencies'
  generateLockfile?: boolean
}

export function updatePackageJson(
  options: UpdatePackageJsonOption,
  context: ExecutorContext,
  target: ProjectGraphProjectNode,
  dependencies: DependentBuildableProjectNode[],
): void {
  let packageJson: PackageJson

  if (options.updateBuildableProjectDepsInPackageJson) {
    packageJson = createPackageJson(context.projectName, context.projectGraph, {
      target: context.targetName,
      root: context.root,
      // By default we remove devDependencies since this is a production build.
      isProduction: true,
    })

    const projectNode = context.projectGraph.nodes[context.projectName]

    dependencies = getFilteredDependencies(projectNode, {
      target: context.targetName,
      root: context.root,
      dependencies,
    })

    if (options.excludeLibsInPackageJson) {
      dependencies = dependencies.filter((dep) => dep.node.type !== 'lib')
    }

    addMissingDependencies(
      packageJson,
      context,
      dependencies,
      options.buildableProjectDepsInPackageJsonType,
    )
  } else {
    const pathToPackageJson = join(context.root, options.projectRoot, 'package.json')
    packageJson = fileExists(pathToPackageJson)
      ? readJsonFile(pathToPackageJson)
      : { name: context.projectName, version: '0.0.1' }
  }

  // update package specific settings
  packageJson = getUpdatedPackageJsonContent(packageJson, options)

  // fix things like "@fabric": "martian@4" to "@fabric/martian": "^4"
  const { dependencies: maybeWrongDeps } = packageJson

  const fixedDeps = Object.entries(maybeWrongDeps ?? {}).reduce((acc, [key, value]) => {
    if (key.startsWith('@') && !key.includes('/')) {
      const [pkg, version] = value.split('@')
      acc[`${key}/${pkg}`] = `^${version}`
      return acc
    }

    acc[key] = value
    return acc
  }, {} as Record<string, string>)

  packageJson.dependencies = fixedDeps

  // save files
  writeJsonFile(`${options.outputPath}/package.json`, packageJson)

  if (options.generateLockfile) {
    const lockFile = createLockFile(packageJson)
    writeFileSync(`${options.outputPath}/${getLockFileName()}`, lockFile, {
      encoding: 'utf-8',
    })
  }
}

function addMissingDependencies(
  packageJson: PackageJson,
  { projectName, targetName, configurationName, root }: ExecutorContext,
  dependencies: DependentBuildableProjectNode[],
  propType: 'dependencies' | 'peerDependencies' = 'dependencies',
) {
  const workspacePackageJson = readJsonFile(joinPathFragments(workspaceRoot, 'package.json'))
  dependencies.forEach((entry) => {
    if (isNpmProject(entry.node)) {
      const { packageName, version } = entry.node.data
      if (
        packageJson.dependencies?.[packageName] ||
        packageJson.devDependencies?.[packageName] ||
        packageJson.peerDependencies?.[packageName]
      ) {
        return
      }
      if (workspacePackageJson.devDependencies?.[packageName]) {
        return
      }

      packageJson[propType] ??= {}
      packageJson[propType][packageName] = version
    } else {
      const packageName = entry.name
      if (
        !packageJson.dependencies?.[packageName] &&
        !packageJson.peerDependencies?.[packageName]
      ) {
        const outputs = getOutputsForTargetAndConfiguration(
          {
            overrides: {},
            target: {
              project: projectName,
              target: targetName,
              configuration: configurationName,
            },
          },
          entry.node,
        )

        const depPackageJsonPath = join(root, outputs[0], 'package.json')

        if (existsSync(depPackageJsonPath)) {
          const version = readJsonFile(depPackageJsonPath).version

          packageJson[propType] ??= {}
          packageJson[propType][packageName] = version
        }
      }
    }
  })
}

export function getUpdatedPackageJsonContent(
  packageJson: PackageJson,
  options: UpdatePackageJsonOption,
): PackageJson {
  // Default is CJS unless esm is explicitly passed.
  const hasCjsFormat = !options.format || options.format?.includes('cjs')
  const hasEsmFormat = options.format?.includes('esm')

  const mainFile = basename(options.main).replace(/\.[tj]s$/, '')
  const relativeMainFileDir = getMainFileDirRelativeToProjectRoot(options.main, options.projectRoot)
  const typingsFile = `${relativeMainFileDir}${mainFile}.d.ts`

  const exports =
    typeof packageJson.exports === 'string'
      ? packageJson.exports
      : {
          '.': {},
          ...packageJson.exports,
        }

  const mainJsFile = options.outputFileName ?? `${relativeMainFileDir}${mainFile}.js`

  if (hasEsmFormat) {
    // Unofficial field for backwards compat.
    packageJson.module ??= mainJsFile

    if (!hasCjsFormat) {
      packageJson.type = 'module'
      packageJson.main ??= mainJsFile
    }

    if (typeof exports !== 'string') {
      if (typeof exports['.'] !== 'string') {
        if (hasCjsFormat) {
          exports['.']['import'] ??= mainJsFile
        }
      } else if (!hasCjsFormat) {
        exports['.'] ??= mainJsFile
      }
    }
  }

  // CJS output may have .cjs or .js file extensions.
  // Bundlers like rollup and esbuild supports .cjs for CJS and .js for ESM.
  // Bundlers/Compilers like webpack, tsc, swc do not have different file extensions.
  if (hasCjsFormat) {
    const { dir, name } = parse(mainJsFile)
    const cjsMain = `${dir ? dir : '.'}/${name}${options.outputFileExtensionForCjs ?? '.js'}`
    packageJson.main ??= cjsMain
    if (typeof exports !== 'string') {
      if (typeof exports['.'] !== 'string') {
        if (!hasEsmFormat) {
          // TODO: [better-nx-tsc]{ figure out a more elgegant solution for package.json exports than just removing the require field
          // exports['.']['require'] ??= cjsMain
        }
      } else if (!hasEsmFormat) {
        exports['.'] ??= cjsMain
      }
    }
  }

  if (options.generateExportsField) {
    packageJson.exports = exports
  }

  if (!options.skipTypings) {
    packageJson.types = packageJson.types ?? typingsFile
  }

  return packageJson
}
