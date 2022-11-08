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
  updateTsConfigsToJs,
} from '@nrwl/devkit'

import { Schema } from './schema'
import { join } from 'path'
import { nxVersion } from '@nrwl/workspace/src/utils/versions'
import { addLint } from '@nrwl/workspace/src/generators/library/library'
import { runTasksInSerial } from '@nrwl/workspace/src/utilities/run-tasks-in-serial'
import { jestProjectGenerator } from '@nrwl/jest'
import { updateTsConfig } from '@nrwl/jest/src/generators/jest-project/lib/update-tsconfig'
import { updateJestConfig } from '@nrwl/jest/src/generators/jest-project/lib/update-jestconfig'
import { updateWorkspace } from '@nrwl/jest/src/generators/jest-project/lib/update-workspace'

export interface NormalizedSchema extends Schema {
  name: string
  prefix: string
  fileName: string
  projectRoot: string
  projectDirectory: string
  parsedTags: string[]
}

const getCaseAwareFileName = (options: {
  pascalCaseFiles: boolean
  fileName: string
}) => {
  const normalized = names(options.fileName)

  return options.pascalCaseFiles ? normalized.className : normalized.fileName
}

const normalizeOptions = (tree: Tree, options: Schema): NormalizedSchema => {
  const { npmScope, libsDir } = getWorkspaceLayout(tree)
  const defaultPrefix = npmScope
  const name = names(options.name).fileName
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name

  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-')
  const fileName = getCaseAwareFileName({
    fileName: options.importPath || projectName,
    pascalCaseFiles: options.pascalCaseFiles || false,
  })
  const projectRoot = joinPathFragments(libsDir, projectDirectory)

  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : []

  const importPath =
    options.importPath || `@${defaultPrefix}/${projectDirectory}`

  return {
    ...options,
    prefix: defaultPrefix, // we could also allow customizing this
    fileName,
    name: projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    importPath,
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
    delete c.paths[options.name]

    //@ts-ignore
    if (c.paths[options.importPath]) {
      throw new Error(
        `You already have a library using the import path "${options.importPath}". Make sure to specify a unique one.`
      )
    }

    //@ts-ignore
    c.paths[options.importPath] = [
      joinPathFragments(
        options.projectRoot,
        './src',
        'index.' + (options.js ? 'js' : 'ts')
      ),
    ]

    return json
  })
}

const updateProject = (tree: Tree, options: NormalizedSchema) => {
  if (!options.publishable && !options.buildable) {
    return
  }

  const project = readProjectConfiguration(tree, options.name)
  const { libsDir } = getWorkspaceLayout(tree)

  project.targets = project.targets || {}
  project.targets.build = {
    executor: `@nrwl/js:${options.compiler}`,
    outputs: ['{options.outputPath}'],
    options: {
      outputPath: `dist/${libsDir}/${options.projectDirectory}`,
      tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
      packageJson: `${options.projectRoot}/package.json`,
      main: `${options.projectRoot}/src/index` + (options.js ? '.js' : '.ts'),
      assets: [`${options.projectRoot}/*.md`],
    },
  }

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
      babelJest: options.babelJest,
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
  const projectConfiguration: ProjectConfiguration = {
    root: options.projectRoot,
    sourceRoot: joinPathFragments(options.projectRoot, 'src'),
    projectType: 'library',
    targets: {},
    tags: options.parsedTags,
  }
  if (options.buildable) {
    const { libsDir } = getWorkspaceLayout(tree)
    addDependenciesToPackageJson(tree, {}, { '@nrwl/js': nxVersion })
    //@ts-ignore
    projectConfiguration.targets.build = {
      executor: `@nrwl/js:${options.compiler}`,
      outputs: ['{options.outputPath}'],
      options: {
        outputPath: `dist/${libsDir}/${options.projectDirectory}`,
        main: `${options.projectRoot}/src/index` + (options.js ? '.js' : '.ts'),
        tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
        assets: [`${options.projectRoot}/*.md`],
      },
    }
  }
  addProjectConfiguration(
    tree,
    options.name,
    projectConfiguration,
    options.standaloneConfig
  )
}

const addJest = async (
  tree: Tree,
  options: NormalizedSchema
): Promise<GeneratorCallback> => {
  return await jestProjectGenerator(tree, {
    project: options.name,
    setupFile: 'none',
    supportTsx: true,
    babelJest: options.babelJest,
    skipSerializers: true,
    testEnvironment: options.testEnvironment,
    skipFormat: true,
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
        `For publishable libs you have to provide a proper "--importPath" which needs to be a valid npm package name (e.g. my-awesome-lib or @myorg/my-lib)`
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
