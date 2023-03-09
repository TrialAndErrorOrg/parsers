import { DependentBuildableProjectNode } from '@nrwl/workspace/src/utilities/buildable-libs-utils';
import { readNxJson } from 'nx/src/config/configuration';
import { ProjectGraphProjectNode } from 'nx/src/config/project-graph';
import {
  filterUsingGlobPatterns,
  getTargetInputs,
} from '../../executors/tsc/hasher';

export function getFilteredDependencies(
  projectNode: ProjectGraphProjectNode,
  options: {
    target?: string;
    root?: string;
    dependencies: DependentBuildableProjectNode[];
  }
) {
  console.log({ options, projectNode });
  const { selfInputs, dependencyInputs } = options.target
    ? getTargetInputs(readNxJson(), projectNode, options.target)
    : { selfInputs: [], dependencyInputs: [] };
  console.log({ selfInputs, dependencyInputs });

  const projectFiles = filterUsingGlobPatterns(
    projectNode.data.root,
    projectNode.data.files,
    selfInputs ?? dependencyInputs
  );

  const topLevelDependenciesInFiles = projectFiles.flatMap((fileData) =>
    fileData.dependencies?.map((dep) => dep.target)
  );
  console.log({ topLevelDependenciesInFiles });

  const filteredDependencies = options.dependencies.filter((dep) => {
    console.log({ dep });
    return topLevelDependenciesInFiles.includes(dep.name);
  });

  console.log({ filteredDependencies });

  return filteredDependencies;
}
