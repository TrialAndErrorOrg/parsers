import { BuildExecutorSchema } from './schema.js'
import fs from 'fs'
import { swcExecutor, normalizeOptions } from '@nrwl/js/src/executors/swc/swc.impl'
import { ExecutorContext } from '@nrwl/devkit'
import { Config as SWCrc } from '@swc/core'

function getSwcOptions(
  options: BuildExecutorSchema,
  contextRoot: string,
  sourceRoot?: string,
  projectRoot?: string,
) {
  return {
    ...normalizeOptions(options, contextRoot, sourceRoot, projectRoot),
    output: options.outputPath,
  }
}

// convert an swcrc config file which outputs esm to one which outputs cjs
function convertESMSWCrctoCJS(
  swcOptions: ReturnType<typeof getSwcOptions>,
  context: ExecutorContext,
): SWCrc {
  const swcrc =
    swcOptions.swcrc || `${context.workspace.projects[context.projectName as string].root}/.swcrc`

  const swcrcConfig = JSON.parse(fs.readFileSync(swcrc, 'utf8')) as SWCrc

  swcrcConfig.jsc.transform.module = {
    type: 'commonjs',
    strict: true,
    strictMode: true,
    lazy: false,
    noInterop: false,
  }
}

export default async function runExecutor(options: BuildExecutorSchema, context: ExecutorContext) {
  const swcrc =
    options.swcrc || `${context.workspace.projects[context.projectName as string].root}/.swcrc`

  const { sourceRoot, root } = context.workspace.projects[context.projectName as string]

  const swcOptions = getSwcOptions(options, context.root, sourceRoot, root)

  await swcExecutor(swcOptions, context)

  console.log('Executor ran for Build', options)
  return {
    success: true,
  }
}
