import reoffParse from 'reoff-parse'
import { docxToVFile } from 'docx-to-vfile'
import { readdirSync, writeFileSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
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

const unifiedLatexStringify = function relatexStringify(options?: Options | void) {
  const compiler: CompilerFunction<Node, string> = (tree) => {
    // Assume options.
    const settings = this.data('settings') as Options

    return toString(tree as Ast)
  }

  Object.assign(this, { Compiler: compiler })
} as Plugin<[Options] | void[], Root, string>

// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
//describe('fixtures', () => {
const fromDocx = (
  path: string,
  citationType?: 'mendeley' | 'word' | 'citavi' | 'zotero' | 'endnote',
) =>
  unified()
    .data('hey', 'ho')
    .use(reoffParse)
    .use(reoffClean, {
      rPrRemoveList: [
        'w:lang',
        'w:shd',
        'w:szCs',
        'w:sz',
        'w:kern',
        'w:rFonts',
        'w:noProof',
        'w:color',
      ],
    })
    .use(reoffParseReferences) // { mailto: 'support@trialanderror.org' })
    .use(reoffCite, { type: citationType || 'zotero', log: false })
    .use(() => (tree, vfile) => {
      writeFileSync(join(path, 'test.ooxast.json'), JSON.stringify(removePosition(tree), null, 2))
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
        writeFileSync(join(path, 'test.tex.json'), JSON.stringify(removePosition(tree), null, 2)),
    )
    .use(unifiedLatexStringify)

const fixtures = new URL('fixtures', import.meta.url).pathname
const dir = readdirSync(fixtures)

it.each(dir)(
  'parses correctly for %s',
  async (name: string) => {
    const [docx, latex] = ['index.docx', 'expected.tex'].map((ext) => join(fixtures, name, ext))

    const doccc = await readFile(docx)

    const docxIn = await docxToVFile(doccc)

    const result = String(
      await fromDocx(join(fixtures, name), name === 'zotero' ? 'zotero' : undefined).process(
        docxIn,
      ),
    )
    await writeFile(join(fixtures, name, 'result.tex'), result)

    let expectTex = ''
    try {
      expectTex = await readFile(latex, 'utf8')
    } catch (e) {
      console.log(e)
    }

    expect(result).toEqual(expectTex)
  },
  30000,
)
