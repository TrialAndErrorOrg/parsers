import { DependentBuildableProjectNode } from '@nrwl/workspace/src/utilities/buildable-libs-utils'
import { readNxJson } from 'nx/src/config/configuration'
import { ProjectGraphProjectNode } from 'nx/src/config/project-graph'
import { filterUsingGlobPatterns, getTargetInputs } from '../../executors/tsc/hasher'

export function getFilteredDependencies(
  projectNode: ProjectGraphProjectNode,
  options: {
    target?: string
    root?: string
    dependencies: DependentBuildableProjectNode[]
  },
) {
  const { selfInputs, dependencyInputs } = options.target
    ? getTargetInputs(readNxJson(), projectNode, options.target)
    : { selfInputs: [], dependencyInputs: [] }

  const projectFiles = filterUsingGlobPatterns(
    projectNode.data.root,
    projectNode.data.files,
    selfInputs ?? dependencyInputs,
  )

  const topLevelDependenciesInFiles = projectFiles.flatMap((fileData) =>
    fileData.dependencies?.map((dep) => dep.target),
  )

  const filteredDependencies = options.dependencies.filter((dep) => {
    return topLevelDependenciesInFiles.includes(dep.name)
  })

  return filteredDependencies
}
