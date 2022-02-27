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

export interface NormalizedSchema extends Schema {
  name: string
  prefix: string
  fileName: string
  projectRoot: string
  projectDirectory: string
  parsedTags: string[]
}

export async function workspaceLibraryGenerator(tree: Tree, schema: Schema) {
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
  //   const jestCallback =  generateFiles(tree,join(__dirname, 'files','lib','jest.config.js'),{tmpl:'',...options},)
  //   tasks.push(jestCallback);
  // }

  if (!options.skipFormat) {
    await formatFiles(tree)
  }

  return runTasksInSerial(...tasks)
}

export async function libraryGenerator(tree: Tree, schema: Schema) {
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

function normalizeOptions(tree: Tree, options: Schema): NormalizedSchema {
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

function getCaseAwareFileName(options: {
  pascalCaseFiles: boolean
  fileName: string
}) {
  const normalized = names(options.fileName)

  return options.pascalCaseFiles ? normalized.className : normalized.fileName
}

function createFiles(tree: Tree, options: NormalizedSchema) {
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

function updateProject(tree: Tree, options: NormalizedSchema) {
  if (!options.publishable && !options.buildable) {
    return
  }

  const project = readProjectConfiguration(tree, options.name)
  const { libsDir } = getWorkspaceLayout(tree)

  project.targets = project.targets || {}
  project.targets.build = {
    executor: '@nrwl/node:package',
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
  } catch (e) {
    console.error(e)
    throw new Error(e as string)
  }
}

function updateRootTsConfig(host: Tree, options: NormalizedSchema) {
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

function addProject(tree: Tree, options: NormalizedSchema) {
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
      executor: '@nrwl/js:tsc',
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

async function addJest(
  tree: Tree,
  options: NormalizedSchema
): Promise<GeneratorCallback> {
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
