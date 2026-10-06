/**
 * Convert a .docx manuscript into a buildable Typst project for the JOTE template.
 *
 *   npx tsx --conditions=@jote/source libs/processors/docx-to-typst/src/cli.ts \
 *     path/to/manuscript.docx out/dir [--meta meta.json] [--template templates/typst/jote-article] \
 *     [--copy-template] [--import "@local/jote-article:0.1.0"] [--compile] [--font-path dir]…
 *
 * Writes `out/dir/main.typ`, the images to `out/dir/media/`, `out/dir/bibliography.bib` when the
 * document has Zotero/Mendeley citations, and links the template as `out/dir/jote-article`
 * (copied instead when compiling, since Typst only reads files inside the project root).
 *
 * `--meta` takes a JSON file with template arguments (`JoteArticleMeta`, camelCase keys), or
 * the converter app's metadata form (`MetaForm`, detected by its `documentclassopt`/`jyear`
 * keys).
 */
import { spawnSync } from 'node:child_process'
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { JoteArticleMeta } from 'ooxast-util-to-typast'
import { docxToTypst } from './lib/docx-to-typst.js'
import { metaToTemplateArgs, type MetaForm } from './lib/meta-to-template-args.js'

function usage(): never {
  console.error(
    'usage: cli.ts <input.docx> <outdir> [--meta <json>] [--template <dir>] [--copy-template] [--import <path>] [--compile] [--font-path <dir>]…',
  )
  process.exit(1)
}

function parseArgs(argv: string[]) {
  const positional: string[] = []
  const fontPaths: string[] = []
  let template: string | undefined
  let importPath: string | undefined
  let metaPath: string | undefined
  let copyTemplate = false
  let compile = false
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--template') template = argv[++i]
    else if (a === '--import') importPath = argv[++i]
    else if (a === '--meta') metaPath = argv[++i]
    else if (a === '--copy-template') copyTemplate = true
    else if (a === '--compile') compile = true
    else if (a === '--font-path') fontPaths.push(argv[++i])
    else if (a === '--help' || a === '-h') usage()
    else positional.push(a)
  }
  if (positional.length !== 2) usage()
  return {
    input: positional[0],
    out: positional[1],
    template,
    importPath,
    metaPath,
    copyTemplate,
    compile,
    fontPaths,
  }
}

function defaultTemplateDir(): string {
  const here = dirname(fileURLToPath(import.meta.url))
  return resolve(here, '../../../../templates/typst/jote-article')
}

function readMeta(path: string | undefined): JoteArticleMeta | undefined {
  if (!path) return undefined
  const json = JSON.parse(readFileSync(path, 'utf8'))
  if ('documentclassopt' in json || 'jyear' in json || 'paperreceived' in json)
    return metaToTemplateArgs(json as MetaForm)
  return json as JoteArticleMeta
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const input = resolve(args.input)
  const out = resolve(args.out)
  mkdirSync(out, { recursive: true })

  const file = await docxToTypst(readFileSync(input), {
    templatePath: args.importPath,
    meta: readMeta(args.metaPath),
  })

  for (const [path, content] of Object.entries(
    file.data.files ?? { 'main.typ': String(file.value) },
  )) {
    const target = join(out, path)
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, content)
  }

  const templateDir = resolve(args.template ?? defaultTemplateDir())
  const link = join(out, 'jote-article')
  if (!args.importPath || args.importPath.startsWith('jote-article/')) {
    if (exists(link)) rmSync(link, { recursive: true, force: true })
    if (!existsSync(templateDir)) {
      console.warn(
        `template not found at ${templateDir}; ${relative(process.cwd(), link)} not created`,
      )
    } else if (args.copyTemplate || args.compile) {
      cpSync(templateDir, link, { recursive: true, dereference: true })
    } else {
      symlinkSync(templateDir, link, 'dir')
    }
  }

  for (const message of file.messages) {
    console.warn(`${basename(input)}  warning  ${message.reason}`)
  }
  const media = file.data.typast?.media.length ?? 0
  const cites = file.data.typast?.citations.length ?? 0
  console.log(
    `wrote ${relative(
      process.cwd(),
      join(out, 'main.typ'),
    )} (${media} images, ${cites} references, ${file.messages.length} warnings)`,
  )

  if (args.compile) {
    const fontArgs = args.fontPaths.flatMap((p) => ['--font-path', resolve(p)])
    const result = spawnSync(
      'typst',
      ['compile', '--root', out, ...fontArgs, join(out, 'main.typ'), join(out, 'main.pdf')],
      {
        stdio: 'inherit',
      },
    )
    process.exit(result.status ?? 1)
  }
}

function exists(path: string): boolean {
  try {
    lstatSync(path)
    return true
  } catch {
    return false
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
