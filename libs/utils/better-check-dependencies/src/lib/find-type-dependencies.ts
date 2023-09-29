import fs from 'fs'
import { type ProjectGraph, type ProjectGraphProjectNode, type ProjectFileMap } from '@nx/devkit'
import path from 'path'
import { PackageJson } from 'nx/src/utils/package-json'
/**
 * Finds all npm dependencies and their expected versions for a given project.
 */
export function findTypeDependencies(
  workspaceRoot: string,
  sourceProject: ProjectGraphProjectNode,
  projectGraph: ProjectGraph,
  projectFileMap: ProjectFileMap,
  rootPackageJson: PackageJson,
  options?: {
    includeTransitiveDependencies?: boolean
    ignoredFiles?: string[]
  },
): Record<string, string> {
  // read all .ts files from the project
  // for each file, find all imports

  const files = projectFileMap[sourceProject.name] || []

  const deps = files
    .filter((file) => file.file.endsWith('.ts'))
    .flatMap((file) => {
      const text = fs.readFileSync(path.join(workspaceRoot, file.file), 'utf-8')

      const matches = text.matchAll(/from\s+['"](.*)['"]/g)

      const deps = Array.from(matches).map((match) => match[1])

      // check if there is an @types/ package in the root package.json
      // if there is, use that version

      const typeDeps = deps.reduce((acc, dep) => {
        const typeDep = rootPackageJson.dependencies![`@types/${dep}`]
        if (!typeDep) {
          return acc
        }

        const plainVersion = typeDep.replace(/[\^~]/, '')

        acc.push([`@types/${dep}`, plainVersion])
        return acc
      }, [] as string[][])

      return typeDeps
    })

  const setThing = new Set(deps)

  const result = Object.fromEntries(Array.from(setThing))
  return result
}
