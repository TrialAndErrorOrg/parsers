import { loopOverDirs } from './loopOverDirs'
import { remark } from 'remark'
import remarkLicense from 'remark-license'
import remarkToc, { Root } from 'remark-toc'
import { join, resolve } from 'path'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import { SKIP, EXIT } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import { BlockContent, Heading } from 'mdast'
import { heading } from 'mdast-builder'
import remarkParse from 'remark-parse'
import { readFile } from 'fs/promises'

const __dirname = new URL('.', import.meta.url).pathname

const root = resolve(__dirname, '..')
const apps = join(root, 'apps')
const libs = join(root, 'libs')

// const installationInstructions = [
//   heading(2, 'Installation'),

const installationString = (
  name: string,
  dev = false,
) => `This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

\`\`\`bash
pnpm add ${dev ? '-D ' : ''}${name}
# or with yarn
# yarn add ${dev ? '-D ' : ''}${name}
# or with npm
# npm install ${name}${dev ? '--save-dev ' : ''}
\`\`\`
`

const installationInstructions = (name: string, dev = false) =>
  unified().use(remarkParse).parse(installationString(name, dev))

// find the installation heading in the readme
// if it doesn't exist, create it as the second second level heading
// replace all the content between the installation heading and the next second level or higher heading with the instructions

const addInstallationInstructions = (tree: Root, instructions: BlockContent[]) => {
  let installationHeadingIndex = -1
  console.log(instructions)
  visit(tree, (node, index, parent) => {
    if (node.type === 'heading' && node.depth === 2 && toString(node) === 'Install') {
      installationHeadingIndex = index ?? 0
      const nextHeadingIndex = parent?.children?.findIndex((child, idx) => {
        console.log(child, idx)
        return child.type === 'heading' && child.depth <= 2 && idx > index
      }, index)

      console.log(index, nextHeadingIndex)
      parent?.children.splice(index + 1, nextHeadingIndex - index - 1, ...instructions)

      return EXIT
    }
  })

  if (installationHeadingIndex === -1) {
    const heading = {
      type: 'heading',
      depth: 2,
      children: [
        {
          type: 'text',
          value: 'Install',
        },
      ],
    } as Heading

    const nextHeadingIndex = tree.children.findIndex(
      (child) => child.type === 'heading' && child.depth <= 2,
    )

    tree.children.splice(nextHeadingIndex, 0, heading, ...instructions)
  }
}

const proc = (
  readme: string,
  {
    license = 'GPLv3-or-later',
    packageName,
    dev,
  }: {
    license?: string
    packageName?: string
    dev?: boolean
  },
) =>
  remark()
    .use(remarkLicense, {
      license: 'GPLv3-or-later',
    })
    .use(remarkToc)
    .use(
      () => (tree) =>
        addInstallationInstructions(
          tree,
          installationInstructions(packageName, dev)?.children as BlockContent[],
        ),
    )
    .process(readme)

loopOverDirs(
  async (path, dir) => {
    const readmePath = join(path, 'README.md')
    const packagePath = join(path, 'package.json')
    console.log(path)

    const readme = await readFile(readmePath, 'utf-8')
    const packageJSON = JSON.parse(await readFile(packagePath, 'utf-8'))

    const newReadme = await proc(readme, {
      license: packageJSON.license,
      packageName: packageJSON.name,
    })
    console.log(String(newReadme))
  },
  {
    rootDir: root,
    dirs: ['libs/ooxast/ooxast'],
    files: ['package.json', 'README.md'],
  },
)
