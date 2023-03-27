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
import { toMdast } from '../lib/ooxast-util-to-mdast.js'
import remarkGfm from 'remark-gfm'
import { citePlugin as remarkCite } from '@benrbray/remark-cite'
import remarkMath from 'remark-math'

import { MdastNode, Options } from '../lib/types.js'
import remarkStringify from 'remark-stringify'
import { Node } from 'unist'

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
    // .use(reoffParseReferences) // { mailto: 'support@trialanderror.org' })
    // .use(reoffCite, { type: citationType || 'zotero', log: false })
    // .use(() => (tree, vfile) => {
    //   writeFileSync(join(path, 'test.ooxast.json'), JSON.stringify(removePosition(tree), null, 2))
    // })
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkCite, {})
    .use(
      () => (tree, vfile) =>
        toMdast(tree, vfile, {
          relations: vfile.data.relations ?? {},
          bibliography: vfile.data.bibliography ?? [],
        }),
    )
    .use(
      () => (tree) =>
        writeFileSync(join(path, 'test.mdast.json'), JSON.stringify(removePosition(tree), null, 2)),
    )
    .use(remarkStringify)

const fixtures = new URL('fixtures', import.meta.url).pathname
const dir = readdirSync(fixtures)

describe('fixtures', () => {
  it.each(dir)(
    'parses correctly for %s',
    async (name: string) => {
      const [docx, latex] = ['index.docx', 'expected.md'].map((ext) => join(fixtures, name, ext))

      const doccc = new Uint8Array(await readFile(docx))
      const docxIn = await docxToVFile(doccc)

      const result = String(
        await fromDocx(join(fixtures, name), name === 'zotero' ? 'zotero' : undefined).process(
          docxIn,
        ),
      )
      await writeFile(join(fixtures, name, 'result.md'), result)

      console.log(latex)
      let expectTex = ''
      try {
        expectTex = await readFile(latex, 'utf8')
      } catch (e) {
        console.log(e)
      }

      expect(result).toEqual(expectTex)
    },
    20000,
  )
})
