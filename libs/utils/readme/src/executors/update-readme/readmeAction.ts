import { remark } from 'remark'
import remarkLicense from 'remark-license'
import remarkToc, { Root } from 'remark-toc'
import { join } from 'path'
import { visit } from 'unist-util-visit'
import { EXIT } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import { BlockContent, Heading } from 'mdast'
import remarkParse from 'remark-parse'
import { readFile, writeFile } from 'fs/promises'
import { fromMarkdown } from 'mdast-util-from-markdown'
import remarkGfm from 'remark-gfm'
import { workspaceRoot } from '@nrwl/devkit'

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
  fromMarkdown(installationString(name, dev))

// find the installation heading in the readme
// if it doesn't exist, create it as the second second level heading
// replace all the content between the installation heading and the next second level or higher heading with the instructions

const spliceBetweenHeadings = ({
  tree,
  content,
  title,
  level = 2,
}: {
  tree: Root
  content: BlockContent[]
  title: string
  level?: number
}) => {
  if (!content) return tree

  let installationHeadingIndex = -1
  visit(tree, (node, index, parent) => {
    if (node.type === 'heading' && node.depth === level && toString(node) === title) {
      installationHeadingIndex = index ?? 0
      const nextHeadingIndex =
        parent?.children?.findIndex((child, idx) => {
          return child.type === 'heading' && child.depth <= level && idx > (index ?? -1)
        }, index) ?? -1

      if (!Array.isArray(parent?.children) || !content) return EXIT
      parent?.children.splice((index ?? -1) + 1, nextHeadingIndex - (index ?? -1) - 1, ...content)

      return EXIT
    }
  })

  if (installationHeadingIndex === -1) {
    const heading = {
      type: 'heading',
      depth: level,
      children: [
        {
          type: 'text',
          value: title,
        },
      ],
    } as Heading

    const nextHeadingIndex = tree.children.findIndex(
      (child) => child.type === 'heading' && child.depth <= level,
    )

    tree.children.splice(nextHeadingIndex, 0, heading, ...content)
  }
}

const findTypeDocFilesAndInterfaces = async (
  packageName: string,
  root: string,
  typeDocFolder: string,
) => {
  const typeDocPath = join(root, typeDocFolder)
  const moduleName = packageName.replace('@', '').replace(/-/g, '_')

  const typeDocModuleFilePath = join(typeDocPath, packageName, `modules.md`)

  try {
    const moduleFileContent = await readFile(typeDocModuleFilePath, 'utf-8')

    const newModuleFileContent = moduleFileContent.replace(/^# .*?\n.*$/, '') //+ interfaceFiles.join('\n')

    const downshiftedContent = newModuleFileContent
      // .replace(/((^|\n)#+) /g, '$1## ')
      .replace(new RegExp(`.${moduleName}\\.md`, 'g'), '')
      .replace(new RegExp(`\\[libs/.*?/${packageName}/`, 'g'), '[')
      .replace(/\[Readme\]\(README.md\)\n\n# jote/, '')
      .replace(/## Type aliases/i, '***')
      .replace(/## Interfaces/i, '***')
      .replace(/## Variables/i, '***')
      .replace(/## Functions/i, '***')
      .replace(/## Classes/i, '***')
      .replace(/\n### (.*)/g, '\n### `$1`')
      .replace(/\n##### (.*)/g, '\n##### `$1`')
      .replace(/\n####### (.*)/g, '\n*$1`*')

    return fromMarkdown(downshiftedContent)
  } catch (e) {
    console.log(e)
    return []
  }
}

const prependBadges = (readme: string, packageJSON: any) => {
  if (!packageJSON.version || packageJSON.version === '0.0.1') {
    return readme
  }

  const badges = [
    `[![npm version](https://badge.fury.io/js/${packageJSON.name}.svg)](https://badge.fury.io/js/${packageJSON.name})`,
    `[![npm downloads](https://img.shields.io/npm/dm/${packageJSON.name}.svg)](https://www.npmjs.com/package/${packageJSON.name})`,
  ]

  // check if badges
  const hasBadges = badges.every((badge) => readme.includes(badge))
  // add badges after the first heading if they don't exist

  if (hasBadges) {
    return readme
  }

  return readme.replace(/\n# .*\n/, (match) => {
    return `${match}${badges.join(' ')}
`
  })
}

const addAdmonition = (readme: string) => {
  // if the first child of the root is not a blockquote, add one
  // with a warning admonition

  if (readme.startsWith('>')) {
    return readme
  }
  return `> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

${readme}`
}

const proc = (
  readme: string,
  {
    license = 'GPLv3-or-later',
    packageName,
    dev,
  }: {
    license?: string
    packageName: string
    dev?: boolean
  },
) =>
  remark()
    .use(remarkGfm)
    .use(remarkLicense, {
      license,
    })
    .use(() => async (tree) => {
      spliceBetweenHeadings({
        tree,
        content: installationInstructions(packageName, dev)?.children as BlockContent[],
        title: 'Install',
      })

      spliceBetweenHeadings({
        tree,
        content: (await findTypeDocFilesAndInterfaces(packageName, workspaceRoot, 'docs'))
          ?.children as BlockContent[],
        title: 'API',
      })

      return tree
    })
    .use(remarkToc)
    .process(readme)

function clean(readme: string) {
  return readme.replace(/\\\[/g, '[').replace(/\\#/g, '#').replace(/\\\|/g, '|')
}

export async function readmeAction(readmePath: string, packagePath: string) {
  console.log('readmePath', readmePath)
  const readme = await readFile(readmePath, 'utf-8')

  const packageJSON = JSON.parse(await readFile(packagePath, 'utf-8'))
  console.log(readme)

  const newReadme = await proc(readme, {
    license: packageJSON.license,
    packageName: packageJSON.name,
  })

  const newReadmeString = clean(prependBadges(addAdmonition(newReadme.toString()), packageJSON))
  // console.log(newReadmeString)
  await writeFile(readmePath, newReadmeString, packageJSON)
}
