/**
 * Convert a JOTE `main.tex` into a buildable Typst project.
 *
 *   npx tsx --tsconfig tsconfig.base.json libs/processors/tex-to-typst/src/cli.ts \
 *     path/to/main.tex out/dir [--template templates/typst/jote-article] [--copy-template] \
 *     [--import "@local/jote-article:0.1.0"] [--compile] [--font-path dir]…
 *
 * Writes `out/dir/main.typ`, copies `media/` (and every other image the source references)
 * and the `.bib` files, and links the template as `out/dir/jote-article` (Typst only reads
 * files inside the project root, so a symlink pointing outside it is replaced by a copy when
 * compiling).
 */
import { spawnSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, symlinkSync, writeFileSync } from 'node:fs'
import { basename, dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { texToTypst } from './lib/tex-to-typst.js'

const TYPST_IMAGE_EXTENSIONS = ['.pdf', '.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp']

function usage(): never {
  console.error(
    'usage: cli.ts <main.tex> <outdir> [--template <dir>] [--copy-template] [--import <path>] [--compile] [--font-path <dir>]…',
  )
  process.exit(1)
}

function parseArgs(argv: string[]) {
  const positional: string[] = []
  const fontPaths: string[] = []
  let template: string | undefined
  let importPath: string | undefined
  let copyTemplate = false
  let compile = false
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--template') template = argv[++i]
    else if (a === '--import') importPath = argv[++i]
    else if (a === '--copy-template') copyTemplate = true
    else if (a === '--compile') compile = true
    else if (a === '--font-path') fontPaths.push(argv[++i])
    else if (a === '--help' || a === '-h') usage()
    else positional.push(a)
  }
  if (positional.length !== 2) usage()
  return { input: positional[0], out: positional[1], template, importPath, copyTemplate, compile, fontPaths }
}

/** The repo's template directory, found relative to this file. */
function defaultTemplateDir(): string {
  const here = dirname(fileURLToPath(import.meta.url))
  return resolve(here, '../../../../templates/typst/jote-article')
}

/** Resolve an `\includegraphics` path against the source directory: add/replace extensions Typst can't read. */
function imageResolver(srcDir: string, used: Set<string>) {
  return (path: string): string => {
    const ext = extname(path).toLowerCase()
    const candidates: string[] = []
    if (ext && TYPST_IMAGE_EXTENSIONS.includes(ext)) candidates.push(path)
    const stem = ext ? path.slice(0, -ext.length) : path
    for (const e of TYPST_IMAGE_EXTENSIONS) candidates.push(stem + e)
    for (const c of candidates) {
      if (existsSync(join(srcDir, c))) {
        used.add(c)
        return c
      }
    }
    return ext ? path : `${path}.png`
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const input = resolve(args.input)
  const srcDir = dirname(input)
  const out = resolve(args.out)
  mkdirSync(out, { recursive: true })

  const source = readFileSync(input, 'utf8')
  const usedImages = new Set<string>()
  const file = await texToTypst(source, {
    path: input,
    templatePath: args.importPath,
    resolveImage: imageResolver(srcDir, usedImages),
  })

  writeFileSync(join(out, 'main.typ'), String(file.value))

  // media/ wholesale, plus any image referenced from elsewhere
  if (existsSync(join(srcDir, 'media'))) cpSync(join(srcDir, 'media'), join(out, 'media'), { recursive: true })
  for (const img of usedImages) {
    const from = join(srcDir, img)
    const to = join(out, img)
    if (!existsSync(to)) {
      mkdirSync(dirname(to), { recursive: true })
      cpSync(from, to)
    }
  }
  for (const f of readdirSync(srcDir)) {
    if (f.endsWith('.bib')) cpSync(join(srcDir, f), join(out, f))
  }

  const templateDir = resolve(args.template ?? defaultTemplateDir())
  const link = join(out, 'jote-article')
  if (!args.importPath || args.importPath.startsWith('jote-article/')) {
    if (existsSync(link) || isSymlink(link)) rmSync(link, { recursive: true, force: true })
    if (!existsSync(templateDir)) {
      console.warn(`template not found at ${templateDir}; ${relative(process.cwd(), link)} not created`)
    } else if (args.copyTemplate || args.compile) {
      cpSync(templateDir, link, { recursive: true, dereference: true })
    } else {
      symlinkSync(templateDir, link, 'dir')
    }
  }

  for (const message of file.messages) {
    const where = message.line ? `${basename(input)}:${message.line}:${message.column ?? 0}` : basename(input)
    console.warn(`${where}  warning  ${message.reason}`)
  }
  console.log(`wrote ${relative(process.cwd(), join(out, 'main.typ'))} (${file.messages.length} warnings)`)

  if (args.compile) {
    const fontArgs = args.fontPaths.flatMap((p) => ['--font-path', resolve(p)])
    const result = spawnSync('typst', ['compile', '--root', out, ...fontArgs, join(out, 'main.typ'), join(out, 'main.pdf')], {
      stdio: 'inherit',
    })
    process.exit(result.status ?? 1)
  }
}

function isSymlink(path: string): boolean {
  try {
    return statSync(path, { throwIfNoEntry: false }) === undefined && readdirSync(dirname(path)).includes(basename(path))
  } catch {
    return false
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
