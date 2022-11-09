/**
 *  Generates a TOC for the whole repo, which list the directories and projects in the repo, links
 *  to the README.md files, and the descriptions of the projects taken from the package.json files.
 */

import { readdirSync, readFileSync, writeFileSync, lstatSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { join, relative, resolve } from 'path'
import { parse } from 'yaml'
import { tryCatchPromise } from '../libs/utils/misc/src'
// import { generateTOC } from './generateTOC';

const __dirname = new URL('.', import.meta.url).pathname

const root = resolve(__dirname, '..')
const apps = join(root, 'apps')
const libs = join(root, 'libs')

const appsDirs = readdirSync(apps).filter(
  (dir) => dir && lstatSync(join(apps, dir))?.isDirectory()
)
const libsDirs = readdirSync(libs).filter(
  (dir) => dir && lstatSync(join(libs, dir))?.isDirectory()
)

const makeTOC = async (root: string, mainDir: string[], prefix: string) =>
  await Promise.all(
    mainDir.map(async (dir) => {
      const dirPath = join(root, dir)
      // const readmePath = join(dirPath, 'README.md')
      // const readme = readFileSync(readmePath, 'utf8');

      const relativePath = join(prefix, dir)
      const readmePath = join(dirPath, 'README.md')
      const [readme, readmeError] = await tryCatchPromise(
        readFile(readmePath, 'utf8')
      )
      const firstNonHeader = readme?.match(/(?<= # )\w.+/)?.[0]

      // check if decription is in package.json
      // if not, use the first non-header line of the readme
      // and if that doesn't exist, use the directory name
      // update the package.json file with the description if
      // the package.json file doesn't have a description or if it's different from the readme
      // and the readme description exists

      const readmeDescription = firstNonHeader
      const packagePath = join(dirPath, 'package.json')
      const [packageJSON, packageJSONError] = await tryCatchPromise(
        readFile(packagePath, 'utf8')
      )

      const packageDescription = packageJSONError
        ? ''
        : JSON.parse(packageJSON).description

      if (packageJSONError && readmeDescription) {
        // write the package.json file with the description
        // and the dir as the name
        const newPackageJSON = {
          name: dir,
          description: readmeDescription,
        }

        await writeFile(packagePath, JSON.stringify(newPackageJSON, null, 2))
      }

      const description = packageDescription || readmeDescription

      if (packageDescription !== readmeDescription) {
        packageJSON.description = description
        writeFileSync(packagePath, JSON.stringify(packageJSON, null, 2))
      }

      try {
        const packagePath = join(dirPath, 'package.json')
        const packageJSON = JSON.parse(await readFile(packagePath, 'utf8'))
        const description = packageJSON.description
        return `- [${dir}](${relativePath}): ${description}`
      } catch (error) {
        console.error(error)

        return `- [${dir}](${relativePath})`
      }
    })
  )

const appToc = await makeTOC(apps, appsDirs, 'apps')

const libToc = await Promise.all(
  libsDirs.map(async (dir) => {
    const liblibDirs = readdirSync(join(libs, dir)).filter((dirr) =>
      lstatSync(join(libs, dir, dirr)).isDirectory()
    )
    const libToc = await makeTOC(join(libs, dir), liblibDirs, `libs/${dir}`)

    return `- [${dir}](${join('libs', dir)}): \n   ${libToc.join('\n   ')}`
  })
)

const toc = `# Table of Contents

- [Apps](${apps}):
  ${appToc.join('\n  ')}

- [Libs](${libs}):
  ${libToc.join('\n  ')}

`

console.log(toc)
