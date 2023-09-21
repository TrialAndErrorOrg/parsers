import { ExecutorContext } from '@nrwl/devkit'
import { PublishableExecutorSchema } from './schema'
import { readFile, writeFile } from 'fs/promises'

function getNonTestDependencies(context: ExecutorContext) {
  const dependencies = context.projectGraph?.nodes[context.projectName!].data.files
  return new Set(
    (dependencies ?? [])
      .filter((dep) => !/.*\.(test|spec).ts/.test(dep.file))
      .filter((dep) => !/(vite.config|jest.config).*/.test(dep.file))
      .flatMap((dep) => dep.dependencies?.map((d) => d.target.replace('npm:', '')))
      .filter(Boolean) as string[],
  )
}

function updatePackageJson(packageJson: any, nonTestDependencies: Set<string>, distDir: string) {
  const dependencies = packageJson.dependencies ?? {}
  const devDependencies = packageJson.devDependencies ?? {}

  const newDependencies = Object.fromEntries(
    Object.entries(dependencies).filter(([dep]) => nonTestDependencies.has(dep)),
  )
  const newDevDependencies = Object.fromEntries(
    Object.entries(devDependencies).filter(([dep]) => nonTestDependencies.has(dep)),
  )

  return {
    ...packageJson,
    dependencies: newDependencies,
    devDependencies: newDevDependencies,
  }
}

// function findMissingDependencies(packageJson: any, nonTestDependencies: Set<string>) {
//   const dependencies = packageJson.dependencies ?? {}

//   const missingDependencies = Array.from(nonTestDependencies).filter((dep) => !dependencies[dep])

//   console.log({
//     missingDependencies,
//   })

//   return [...missingDependencies]
// }

// async function supplementMissingDependencies(
//   packageJson: any,
//   context: ExecutorContext,
//   missingDependencies: string[],
// ) {
//   const rootPackageJson = JSON.parse(await readFile(`${context.root}/package.json`, 'utf-8'))
//   const rootDependencies = rootPackageJson.dependencies ?? {}
//   const rootDevDependencies = rootPackageJson.devDependencies ?? {}

//   const newDependencies = Object.fromEntries(
//     Object.entries(rootDependencies).filter(([dep]) => missingDependencies.includes(dep)),
//   )
//   const newDevDependencies = Object.fromEntries(
//     Object.entries(rootDevDependencies).filter(([dep]) => missingDependencies.includes(dep)),
//   )

//   return {
//     ...packageJson,
//     dependencies: {
//       ...packageJson.dependencies,
//       ...newDependencies,
//     },
//     devDependencies: {
//       ...packageJson.devDependencies,
//       ...newDevDependencies,
//     },
//   }
// }

function removeRequireExports(packageJson: any) {
  const newPackageJson = { ...packageJson }

  delete newPackageJson?.exports?.['.']?.require

  return newPackageJson
}

export default async function runExecutor(
  options: PublishableExecutorSchema,
  context: ExecutorContext,
) {
  const distDir = options.dist

  const packageJson = JSON.parse(await readFile(`${distDir}/package.json`, 'utf-8'))

  const packageJsonWithoutRequireExports = removeRequireExports(packageJson)

  const nonTestDependencies = getNonTestDependencies(context)

  const newPackageJson = updatePackageJson(
    packageJsonWithoutRequireExports,
    nonTestDependencies,
    distDir,
  )

  if (JSON.stringify(newPackageJson) === JSON.stringify(packageJson)) {
    console.log('No changes to package.json')
    return {
      success: true,
    }
  }

  if (options.dryRun) {
    console.log('Dry run, not writing package.json')

    console.log(`// ${distDir}/package.json`)
    console.log(JSON.stringify(newPackageJson, null, 2))

    return {
      success: true,
    }
  }

  await writeFile(`${distDir}/package.json`, JSON.stringify(newPackageJson, null, 2))
  console.log(`Wrote ${distDir}/package.json`)
  return {
    success: true,
  }
}
