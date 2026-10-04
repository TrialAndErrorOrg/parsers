import reoffParse from 'reoff-parse'
import { docxToVFile } from 'docx-to-vfile'
import { mkdirSync, readdirSync, writeFileSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { tmpdir } from 'os'
import { spawnSync } from 'child_process'
import { join } from 'path'
import { Plugin, CompilerFunction, unified } from 'unified'
import { removePosition } from 'unist-util-remove-position'
import { reoffClean } from 'reoff-clean'
import reoffCite from 'reoff-cite'
import reoffParseReferences from 'reoff-parse-references'
import { toUnifiedLatex } from '../lib/ooxast-util-to-unified-latex.js'
import { toString } from '@unified-latex/unified-latex-util-to-string'

import { Options } from '../lib/types.js'
import { Node } from 'unist'
import { Ast, Root } from '@unified-latex/unified-latex-types'
import { describe, it, expect } from 'vitest'
import { blob } from 'stream/consumers'
import unifiedLatexStringify from 'unified-latex-stringify'
// import reoffMarkupToStyle from 'reoff-markup-to-style'

/**
 * The fixture tests only compare the output with `expected.tex`; they never write to the
 * (tracked) fixture directories on their own.
 *
 * - `UPDATE_FIXTURES=1` overwrites `expected.tex` with the current output. Review the diff
 *   before committing it.
 * - `DEBUG_FIXTURES=1` (or a directory path) dumps `result.tex` and the intermediate ooxast and
 *   unified-latex trees for every fixture to that directory (default: the system temp dir).
 */
const updateFixtures = !!process.env.UPDATE_FIXTURES
const debugDir = process.env.DEBUG_FIXTURES
  ? process.env.DEBUG_FIXTURES === '1' || process.env.DEBUG_FIXTURES === 'true'
    ? join(tmpdir(), 'ooxast-util-to-unified-latex-fixtures')
    : process.env.DEBUG_FIXTURES
  : undefined

const dump = (dir: string | undefined, file: string, content: () => string) => {
  if (!dir) return
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, file), content())
}

const unifieddLatexStringify = function relatexStringify(options?: Options | void) {
  const compiler: CompilerFunction<Node, string> = (tree) => {
    // Assume options.
    const settings = this.data('settings') as Options

    return toString(tree as Ast)
  }

  Object.assign(this, { Compiler: compiler })
} as Plugin<[Options] | void[], Root, string>

const fromDocx = (
  path: string | undefined,
  citationType?: 'mendeley' | 'word' | 'citavi' | 'zotero' | 'endnote',
) =>
  unified()
    .data('hey', 'ho')
    .use(reoffParse)
    .use(reoffClean, {
      rPrRemoveList: ['w:lang', 'w:shd', 'w:szCs', 'w:sz', 'w:kern', 'w:rFonts', 'w:noProof'],
    })
    //  .use(reoffMarkupToStyle)
    .use(reoffParseReferences) // { mailto: 'support@trialanderror.org' })
    .use(reoffCite, { type: citationType || 'zotero', log: false })
    .use(() => (tree, vfile) => {
      dump(path, 'test.ooxast.json', () => JSON.stringify(removePosition(tree), null, 2))
    })
    .use(
      () => (tree, vfile) =>
        toUnifiedLatex(tree, vfile, {
          relations: vfile.data.relations ?? {},
          bibliography: vfile.data.bibliography ?? [],
        }) as Root,
    )
    .use(
      () => (tree) =>
        dump(path, 'test.tex.json', () => JSON.stringify(removePosition(tree), null, 2)),
    )
    .use(unifiedLatexStringify)

const fixtures = new URL('fixtures', import.meta.url).pathname
const dir = readdirSync(fixtures)

/**
 * Fixtures with a plain-text bibliography: `reoff-parse-references` parses it with the anystyle
 * CLI (`gem install anystyle-cli`), so they can only run where that is installed.
 */
const needsAnystyle = ['zotero-2']
const hasAnystyle = spawnSync('anystyle', ['--version']).status === 0

for (const name of needsAnystyle.filter(() => !hasAnystyle)) {
  it.skip(`parses correctly for ${name} (needs the anystyle CLI)`, () => {})
}

it.each(dir.filter((name) => hasAnystyle || !needsAnystyle.includes(name)))(
  'parses correctly for %s',
  async (name: string) => {
    const [docx, latex] = ['index.docx', 'expected.tex'].map((ext) => join(fixtures, name, ext))

    const doccc = await readFile(docx)

    const docxIn = await docxToVFile(doccc)

    const debugPath = debugDir ? join(debugDir, name) : undefined
    const result = String(
      await fromDocx(debugPath, name === 'zotero' ? 'zotero' : undefined).process(docxIn),
    )
    dump(debugPath, 'result.tex', () => result)

    if (updateFixtures) {
      await writeFile(latex, result)
      return
    }

    const expectTex = await readFile(latex, 'utf8')

    expect(result).toEqual(expectTex)
  },
  30000,
)
