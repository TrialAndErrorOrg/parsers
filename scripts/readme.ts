#!/usr/bin/env node
/**
 * Regenerate the generated parts of a package README:
 * the "Note" admonition, npm badges, `## Install`, `## API` (from typedoc), `## Use` (from
 * `docs/example.ts`, if present), the table of contents and the license section.
 *
 *   pnpm readme libs/reoff/reoff-parse [more dirs...]   # one or more packages
 *   pnpm readme --all                                   # every non-private workspace package in libs/
 *   pnpm readme --all --no-typedoc                      # skip typedoc; leaves `## API` untouched
 *
 * Port of the former Nx executor `utils-readme:update-readme` (libs/utils/readme); output format is
 * unchanged.
 */
import { execFileSync, execSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { join, relative, resolve } from 'node:path'
import type { BlockContent, Code, Heading, Paragraph, Root, RootContent } from 'mdast'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import { EXIT, visit } from 'unist-util-visit'
import { publishablePackages, workspaceRoot } from './workspace-packages.ts'

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

/**
 * Replace everything between the `title` heading and the next heading of the same or higher level
 * with `content`. If the heading doesn't exist, insert it before the first heading of that level.
 */
const spliceBetweenHeadings = ({
  tree,
  content,
  title,
  level = 2,
}: {
  tree: Root
  content: RootContent[] | undefined
  title: string
  level?: number
}) => {
  if (!content) return tree

  let headingIndex = -1
  visit(tree, (node, index, parent) => {
    if (node.type === 'heading' && node.depth === level && toString(node) === title) {
      headingIndex = index ?? 0
      const nextHeadingIndex =
        parent?.children?.findIndex((child, idx) => {
          return child.type === 'heading' && child.depth <= level && idx > (index ?? -1)
        }, index) ?? -1

      if (!Array.isArray(parent?.children) || !content) return EXIT
      parent?.children.splice((index ?? -1) + 1, nextHeadingIndex - (index ?? -1) - 1, ...content)

      return EXIT
    }
  })

  if (headingIndex === -1) {
    const heading = {
      type: 'heading',
      depth: level,
      children: [{ type: 'text', value: title }],
    } as Heading

    const nextHeadingIndex = tree.children.findIndex(
      (child) => child.type === 'heading' && child.depth <= level,
    )

    tree.children.splice(nextHeadingIndex, 0, heading, ...(content as BlockContent[]))
  }
}

/**
 * Rewrite the body of the `License` section to `[<license>](LICENSE) © <author>`.
 *
 * Inlined from `remark-license` 6, which is stuck on unified 10. Like it, this only fills an
 * existing section, keeps the definitions at its end, and links `LICENSE` when the package has one.
 */
const remarkLicense =
  ({ license, name, file }: { license: string; name: string; file?: string }) =>
  (tree: Root) => {
    const { children } = tree
    const start = children.findIndex(
      (node) => node.type === 'heading' && /^licen[cs]e$/i.test(toString(node)),
    )
    if (start === -1) return

    const { depth } = children[start] as Heading
    let end = children.findIndex(
      (node, index) => index > start && node.type === 'heading' && node.depth <= depth,
    )
    if (end === -1) end = children.length
    const isDefinition = (node: RootContent) =>
      node.type === 'definition' || node.type === 'footnoteDefinition'
    while (end > start + 1 && isDefinition(children[end - 1])) end--

    const text = { type: 'text', value: license } as const
    const paragraph: Paragraph = {
      type: 'paragraph',
      children: [
        file ? { type: 'link', title: null, url: file, children: [text] } : text,
        { type: 'text', value: ' © ' },
        { type: 'text', value: name },
      ],
    }
    children.splice(start + 1, end - start - 1, paragraph)
  }

/** `Name <email> (url)` → `Name`, as `parse-author` (used by `remark-license`) reads it. */
const authorName = (author: string | { name?: string } | undefined) =>
  (typeof author === 'string' ? author.replace(/\s*[<(].*$/, '') : author?.name)?.trim()

// `remark-license` took the holder and the `LICENSE` link from the nearest package.json to the
// cwd, which is the workspace root when run as `pnpm readme`.
const licenseHolder =
  authorName(JSON.parse(readFileSync(join(workspaceRoot, 'package.json'), 'utf-8')).author) ?? ''
const licenseFile = existsSync(join(workspaceRoot, 'LICENSE')) ? 'LICENSE' : undefined

/** Run typedoc for one package into `docs/<packageName>/` (git-ignored scratch output). */
const runTypedoc = (packageName: string, projectRoot: string) => {
  try {
    const out = execFileSync(
      join(workspaceRoot, 'node_modules', '.bin', 'typedoc'),
      [
        '--out',
        join('docs', packageName),
        '--entryPoints',
        relative(workspaceRoot, projectRoot),
        '--hideBreadcrumbs',
        '--hideInPageTOC',
        '--baseUrl',
      ],
      { cwd: workspaceRoot, encoding: 'utf8', env: { ...process.env, NODE_OPTIONS: '' } },
    )
    console.log(out)
    return true
  } catch (e) {
    console.warn(`typedoc failed for ${packageName}; leaving "## API" untouched`)
    console.warn((e as { stderr?: string }).stderr ?? e)
    return false
  }
}

const findTypeDocContent = async (packageName: string) => {
  const moduleName = packageName.replace('@', '').replace(/-/g, '_')
  const typeDocModuleFilePath = join(workspaceRoot, 'docs', packageName, 'modules.md')

  try {
    const moduleFileContent = await readFile(typeDocModuleFilePath, 'utf-8')

    const newModuleFileContent = moduleFileContent.replace(/^# .*\n.*$/, '')

    const downshiftedContent = newModuleFileContent
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

    return fromMarkdown(downshiftedContent).children
  } catch (e) {
    console.log(e)
    return []
  }
}

const prependBadges = (readme: string, packageJSON: { name: string; version?: string }) => {
  if (!packageJSON.version || packageJSON.version === '0.0.1') {
    return readme
  }

  const badges = [
    `[![npm version](https://badge.fury.io/js/${packageJSON.name}.svg)](https://badge.fury.io/js/${packageJSON.name})`,
    `[![npm downloads](https://img.shields.io/npm/dm/${packageJSON.name}.svg)](https://www.npmjs.com/package/${packageJSON.name})`,
  ]

  if (badges.every((badge) => readme.includes(badge))) {
    return readme
  }

  // add badges after the first heading
  return readme.replace(/\n# .*\n/, (match) => `${match}${badges.join(' ')}\n`)
}

const addAdmonition = (readme: string) => {
  if (readme.startsWith('>')) {
    return readme
  }
  return `> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

${readme}`
}

/**
 * Build a `## Use` section from `<package>/docs/example.ts`: `//` comment lines become markdown,
 * everything else becomes ts code blocks. If the first line is `// eval <lang>`, the example is
 * run with tsx and its output appended as a `<lang>` code block.
 */
async function createUsage(tree: Root, examplePath: string, heading = 'Use') {
  let example: string
  try {
    example = await readFile(examplePath, 'utf-8')
  } catch {
    return null
  }

  const lines = example.split('\n')
  const firstLine = lines[0]
  const shouldEval = firstLine?.startsWith('// eval')
  const evalLanguage = firstLine?.replace('// eval ', '')
  if (shouldEval) lines.shift()
  const commentRegex = /^\s*\/\//

  const content = lines.reduce((acc, line) => {
    if (commentRegex.test(line)) {
      acc.push(fromMarkdown(line.replace(commentRegex, ''))?.children?.[0] as RootContent)
      return acc
    }

    const last = acc[acc.length - 1]
    if (last?.type === 'code') {
      last.value = `${last.value}\n${line}`
      return acc
    }

    acc.push({ type: 'code', lang: 'ts', value: line } as Code)
    return acc
  }, [] as RootContent[])

  if (!shouldEval) {
    spliceBetweenHeadings({ tree, content, title: heading })
    return tree
  }

  try {
    const evalContent = execSync(`tsx ${examplePath}`, { cwd: workspaceRoot })
    spliceBetweenHeadings({
      tree,
      content: [...content, { type: 'code', value: `${evalContent}`, lang: evalLanguage } as Code],
      title: heading,
    })
    return tree
  } catch (e) {
    console.log(e)
    console.log('Could not run tsx, skipping eval section')
    return null
  }
}

const proc = (
  readme: string,
  {
    license = 'GPLv3-or-later',
    packageName,
    projectRoot,
    api,
    dev,
  }: {
    license?: string
    projectRoot: string
    packageName: string
    api: boolean
    dev?: boolean
  },
) =>
  remark()
    // remark-stringify 11 defaults to `listItemIndent: 'one'`; keep the existing READMEs' style.
    .data('settings', { listItemIndent: 'tab' })
    .use(remarkGfm)
    .use(remarkLicense, { license, name: licenseHolder, file: licenseFile })
    .use(() => async (tree: Root) => {
      spliceBetweenHeadings({
        tree,
        content: installationInstructions(packageName, dev).children,
        title: 'Install',
      })

      if (api) {
        spliceBetweenHeadings({
          tree,
          content: await findTypeDocContent(packageName),
          title: 'API',
        })
      }

      return tree
    })
    .use(
      () => async (tree: Root) =>
        (await createUsage(tree, join(projectRoot, 'docs', 'example.ts'))) ?? tree,
    )
    // remark-toc 9 also matches `## Contents`, which our READMEs use for a hand-written outline;
    // keep 8.x's default so only a `toc` / `table of contents` heading gets regenerated.
    .use(remarkToc, { heading: 'toc|table[ -]of[ -]contents?' })
    .process(readme)

const clean = (readme: string) =>
  readme.replace(/\\\[/g, '[').replace(/\\#/g, '#').replace(/\\\|/g, '|')

export async function updateReadme(projectRoot: string, { typedoc = true } = {}) {
  const readmePath = join(projectRoot, 'README.md')
  const packageJSON = JSON.parse(await readFile(join(projectRoot, 'package.json'), 'utf-8'))

  const api = typedoc && runTypedoc(packageJSON.name, projectRoot)

  const readme = await readFile(readmePath, 'utf-8')
  const newReadme = await proc(readme, {
    license: packageJSON.license,
    packageName: packageJSON.name,
    projectRoot,
    api,
  })

  await writeFile(
    readmePath,
    clean(prependBadges(addAdmonition(newReadme.toString()), packageJSON)),
  )
  console.log(`updated ${relative(workspaceRoot, readmePath)}`)
}

const args = process.argv.slice(2)
const typedoc = !args.includes('--no-typedoc')
const dirs = args.includes('--all')
  ? publishablePackages().map((pkg) => pkg.path)
  : args
      .filter((a) => !a.startsWith('--'))
      .map((dir) => resolve(process.env.INIT_CWD ?? process.cwd(), dir))

if (dirs.length === 0) {
  console.error('usage: pnpm readme <package-dir...> | --all  [--no-typedoc]')
  process.exit(1)
}

for (const dir of dirs) {
  await updateReadme(dir, { typedoc })
}
