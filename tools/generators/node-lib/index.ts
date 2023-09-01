import {
  addDependenciesToPackageJson,
  addProjectConfiguration,
  convertNxGenerator,
  formatFiles,
  generateFiles,
  GeneratorCallback,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  offsetFromRoot,
  ProjectConfiguration,
  readProjectConfiguration,
  toJS,
  Tree,
  updateJson,
  updateProjectConfiguration,
  TargetConfiguration,
  updateTsConfigsToJs,
} from '@nrwl/devkit'
import { ExecutorOptions } from '@nrwl/js/src/utils/schema'
import { VersionBuilderSchema } from '@jscutlery/semver/src/executors/version/schema'
import { GithubExecutorSchema } from '@jscutlery/semver/src/executors/github/schema'

import { Schema } from './schema.js'
import { join } from 'path'
import { nxVersion } from '@nrwl/workspace/src/utils/versions'
import { addLint } from '@nrwl/workspace/src/generators/library/library'
import { Schema as LintExecutorOptions } from '@nrwl/workspace/src/generators/library/schema'
import { runTasksInSerial } from '@nrwl/workspace/src/utilities/run-tasks-in-serial'
import { jestProjectGenerator } from '@nrwl/jest'
import { VitestExecutorOptions } from '@nrwl/vite/executors'
import { updateTsConfig } from '@nrwl/jest/src/generators/jest-project/lib/update-tsconfig'
import { updateJestConfig } from '@nrwl/jest/src/generators/jest-project/lib/update-jestconfig'
import { JestExecutorOptions } from '@nrwl/jest/src/executors/jest/schema'
import { updateWorkspace } from '@nrwl/jest/src/generators/jest-project/lib/update-workspace'

export interface NormalizedSchema extends Schema {
  name: string
  libsDir: string
  prefix: string
  fileName: string
  projectRoot: string
  projectDirectory: string
  parsedTags: string[]
}

const getCaseAwareFileName = (options: { pascalCaseFiles: boolean; fileName: string }) => {
  const normalized = names(options.fileName)

  return options.pascalCaseFiles ? normalized.className : normalized.fileName
}

const normalizeOptions = (tree: Tree, options: Schema): NormalizedSchema => {
  const { npmScope, libsDir } = getWorkspaceLayout(tree)
  const defaultPrefix = npmScope
  const name = names(options.name).fileName
  const projectDirectory = options.directory ? `${names(options.directory).fileName}/${name}` : name

  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-')
  const fileName = getCaseAwareFileName({
    fileName: options.importPath || projectName,
    pascalCaseFiles: !!options.pascalCaseFiles,
  })
  const projectRoot = joinPathFragments(libsDir, projectDirectory)

  const parsedTags = options.tags ? options.tags.split(',').map((s) => s.trim()) : []

  const importPath = options.importPath || `@${defaultPrefix}/${projectDirectory}`

  return {
    ...options,
    prefix: defaultPrefix, // we could also allow customizing this
    fileName,
    name: projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    importPath,
    libsDir,
  }
}

const createFiles = (tree: Tree, options: NormalizedSchema) => {
  const { className, name, propertyName } = names(options.fileName)

  try {
    generateFiles(tree, join(__dirname, './files/lib'), options.projectRoot, {
      ...options,
      className,
      name,
      propertyName,
      tmpl: '',
      offsetFromRoot: offsetFromRoot(options.projectRoot),
    })
  } catch (e) {
    console.error(e)
    throw new Error(e as string)
  }

  // if (options.unitTestRunner === 'none') {
  //   tree.delete(
  //     join(options.projectRoot, `./src/lib/${options.fileName}.spec.ts`)
  //   );
  // }
  // if (!options.publishable && !options.buildable) {
  //   tree.delete(join(options.projectRoot, 'package.json'));
  // }
  // if (options.js) {
  //   toJS(tree);
  // }
}
const updateRootTsConfig = (host: Tree, options: NormalizedSchema) => {
  updateJson(host, 'tsconfig.base.json', (json) => {
    const c = json.compilerOptions
    c.paths = c.paths || {}
    c.paths[options.name] = undefined

    //@ts-ignore
    if (c.paths[options.importPath]) {
      throw new Error(
        `You already have a library using the import path "${options.importPath}". Make sure to specify a unique one.`,
      )
    }

    //@ts-ignore
    c.paths[options.importPath] = [
      joinPathFragments(options.projectRoot, './src', `index.${options.js ? 'js' : 'ts'}`),
    ]

    return json
  })
}

const updateProject = (tree: Tree, options: NormalizedSchema) => {
  if (!(options.publishable || options.buildable)) {
    return
  }

  const project = readProjectConfiguration(tree, options.name)
  const { libsDir } = getWorkspaceLayout(tree)

  project.targets = project.targets || {}
  const buildOptions: TargetConfiguration<ExecutorOptions> = {
    executor: `better-nx-tsc:tsc`,
    outputs: ['{options.outputPath}'],
    options: {
      rootDir: `${options.projectRoot}/src`,
      outputPath: `dist/${libsDir}/${options.projectDirectory}`,
      tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
      // @ts-expect-error i just want one man
      packageJson: `${options.projectRoot}/package.json`,
      main: `${options.projectRoot}/src/index${options.js ? '.js' : '.ts'}`,
      assets: [`${options.projectRoot}/*.md`],
      updateBuildableProjectDepsInPackageJson: true,
      clean: true,
      buildableProjectDepsInPackageJsonType: 'dependencies',
    },
    dependsOn: [
      {
        projects: 'dependencies',
        target: 'build',
        params: 'forward',
      },
      {
        projects: 'self',
        target: 'lint',
      },
    ],
  }

  project.targets.build = buildOptions

  if (options.rootDir) {
    project.targets.build.options.srcRootForCompilationRoot = options.rootDir
  }

  try {
    updateProjectConfiguration(tree, options.name, project)
    updateTsConfig(tree, {
      ...options,
      project: options.name,
      setupFile: 'none',
      supportTsx: true,
      skipSerializers: true,
      testEnvironment: options.testEnvironment,
      skipFormat: true,
    })
    updateJestConfig(tree, { ...options, project: options.name })
    updateWorkspace(tree, { ...options, project: options.name })
    updateRootTsConfig(tree, { ...options })
  } catch (e) {
    console.error(e)
    throw new Error(e as string)
  }
}

const addProject = (tree: Tree, options: NormalizedSchema) => {
  const projectConfiguration = {
    root: options.projectRoot,
    sourceRoot: joinPathFragments(options.projectRoot, 'src'),
    projectType: 'library',
    targets: {} as NonNullable<ProjectConfiguration['targets']>,
    tags: options.parsedTags,
  } satisfies ProjectConfiguration

  // remove repeating name at the start, like 'ooxast-ooxast' from options.name
  options.name = options.name.replace(/^((\w+)-\2)/, '$2')

  const { libsDir } = getWorkspaceLayout(tree)
  // addDependenciesToPackageJson(tree, {}, { '@nrwl/js': nxVersion })

  const build: TargetConfiguration<ExecutorOptions> = {
    executor: `better-nx-tsc:tsc`,
    outputs: ['{options.outputPath}'],
    options: {
      rootDir: `${options.projectRoot}/src`,
      outputPath: `dist/${libsDir}/${options.projectDirectory}`,
      tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
      // @ts-expect-error i want it there
      packageJson: `${options.projectRoot}/package.json`,
      main: `${options.projectRoot}/src/index${options.js ? '.js' : '.ts'}`,
      assets: [`${options.projectRoot}/*.md`],
      updateBuildableProjectDepsInPackageJson: true,
      clean: true,
      buildableProjectDepsInPackageJsonType: 'dependencies',
    },
    dependsOn: [
      {
        projects: 'dependencies',
        target: 'build',
        params: 'forward',
      },
      {
        projects: 'self',
        target: 'lint',
      },
    ],
  }

  projectConfiguration.targets.build = build

  if (options.publishable) {
    projectConfiguration.targets.build.options = {
      ...projectConfiguration.targets.build.options,
      packageJson: `${options.projectRoot}/package.json`,
    }

    projectConfiguration.targets.npm = {
      executor: 'ngx-deploy-npm:deploy',
      options: {
        access: 'public',
      },
    }

    const version: TargetConfiguration<Partial<VersionBuilderSchema>> = {
      executor: '@jscutlery/semver:version',
      options: {
        trackDeps: true,
        postTargets: [
          `${options.name}:npm`,
          `${options.name}:github`,
          `${options.name}:github-standalone`,
        ],
      },
      dependsOn: [
        {
          target: 'version',
          projects: 'dependencies',
          params: 'forward',
        },
      ],
    }

    projectConfiguration.targets.version = version

    const github: TargetConfiguration<GithubExecutorSchema> = {
      executor: '@jscutlery/semver:github',
      options: {
        tag: '${tag}',
        notes: '${notes}',
        repo: 'TrialAndErrorOrg/docx-to-vfile',
      },
    }

    projectConfiguration.targets.github = github

    const githubStandalone: TargetConfiguration<GithubExecutorSchema> = {
      executor: '@jscutlery/semver:github',
      options: {
        tag: '${tag}',
        notes: '${notes}',
        repo: `TrialAndErrorOrg/${options.name}`,
      },
    }

    projectConfiguration.targets['github-standalone'] = githubStandalone
  }

  const test: TargetConfiguration<VitestExecutorOptions> = {
    executor: '@nrwl/vite:test',
    outputs: ['{workspaceRoot}/coverage/{projectRoot}'],
    options: {
      passWithNoTests: true,
    },
    configurations: {
      ci: {
        ci: true,
        codeCoverage: true,
      },
    },
  }

  projectConfiguration.targets.test = test

  if (options.unitTestRunner === 'jest') {
    const test: TargetConfiguration<JestExecutorOptions> = {
      executor: '@nrwl/jest:jest',
      outputs: ['coverage'],
      options: {
        jestConfig: `${options.projectRoot}/jest.config.js`,
        // @ts-expect-error i want it there
        tsConfig: `${options.projectRoot}/tsconfig.spec.json`,
        passWithNoTests: true,
      },
    }
    projectConfiguration.targets.test = test
  }

  projectConfiguration.targets.readme = {
    executor: 'utils-readme:update-readme',
    options: {
      readme: `${options.projectRoot}/README.md`,
      packageJSON: `${options.projectRoot}/package.json`,
    },
  }

  addProjectConfiguration(tree, options.name, projectConfiguration, true)
}

const addJest = async (tree: Tree, options: NormalizedSchema): Promise<GeneratorCallback> => {
  return await jestProjectGenerator(tree, {
    project: options.name,
    setupFile: 'none',
    supportTsx: true,
    babelJest: options.babelJest,
    skipSerializers: true,
    testEnvironment: options.testEnvironment,
    skipFormat: true,
    compiler: options.compiler,
  })
}

export const workspaceLibraryGenerator = async (tree: Tree, schema: Schema) => {
  const options = normalizeOptions(tree, schema)

  createFiles(tree, options)

  if (!options.skipTsConfig) {
    updateRootTsConfig(tree, options)
  }
  addProject(tree, options)

  const tasks: GeneratorCallback[] = []

  if (options.linter !== 'none') {
    const lintCallback = await addLint(tree, options)
    tasks.push(lintCallback)
  }
  // if (options.unitTestRunner === 'jest') {
  // //  const jestCallback = await addJest(tree, options);
  //   const jestCallback =  generateFiles(tree,new URL('files', import.meta.url,'lib','jest.config.js'),{tmpl:'',...options},)
  //   tasks.push(jestCallback);
  // }

  if (!options.skipFormat) {
    await formatFiles(tree)
  }

  return runTasksInSerial(...tasks)
}

export const libraryGenerator = async (tree: Tree, schema: Schema) => {
  try {
    const options = normalizeOptions(tree, schema)

    if (options.publishable === true && !schema.importPath) {
      throw new Error(
        `For publishable libs you have to provide a proper "--importPath" which needs to be a valid npm package name (e.g. my-awesome-lib or @myorg/my-lib)`,
      )
    }

    const libraryInstall = await workspaceLibraryGenerator(tree, {
      ...schema,
      importPath: options.importPath,
      //testEnvironment: 'node',
      unitTestRunner: 'none',
      skipFormat: true,
      setParserOptionsProject: options.setParserOptionsProject,
    })
    createFiles(tree, options)

    updateProject(tree, options)

    if (!schema.skipFormat) {
      await formatFiles(tree)
    }

    return libraryInstall
  } catch (e) {
    console.error(e)
  }
}

export default libraryGenerator
export const librarySchematic = convertNxGenerator(libraryGenerator)
