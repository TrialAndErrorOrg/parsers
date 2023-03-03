import { UpdateReadmeExecutorSchema } from './schema'
import { ExecutorContext, readProjectConfiguration, workspaceRoot } from '@nrwl/devkit'
import { readmeAction } from './readmeAction'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'
import { readFile } from 'fs/promises'

const execa = promisify(exec)

const getProjectRoot = (context: ExecutorContext) => {
  if (!context.projectName) return context.cwd
  const projectRoot = context.workspace.projects[context.projectName].root
  return projectRoot
}

export default async function runExecutor(
  options: UpdateReadmeExecutorSchema,
  context: ExecutorContext,
) {
  // await readmeAction(context.cwd, context.projectName)
  console.log(getProjectRoot(context))
  const projectRoot = getProjectRoot(context)
  const readmePath = options.readme ?? path.join(projectRoot, 'README.md')
  console.log(readmePath)
  const packagePath = options.packageJSON ?? path.join(projectRoot, 'package.json')
  console.log(packagePath)

  const packageName = JSON.parse(await readFile(packagePath, 'utf-8')).name
  console.log(packageName)

  // execute typedoc in the project root
  const { stdout, stderr } = await execa(
    `NODE_OPTIONS='' ${path.join(
      workspaceRoot,
      'node_modules',
      '.bin',
      'typedoc',
    )} --out ${path.join(
      'docs',
      packageName,
    )} --entryPoints ${projectRoot} --hideBreadcrumbs --hideInPageTOC --baseUrl`,
    {
      cwd: workspaceRoot,
    },
  )
  console.log(stdout)
  console.log(stderr)

  await readmeAction(readmePath, packagePath)

  return {
    success: true,
  }
}
