import reoffParse from 'reoff-parse'
import { docxToVFile } from 'docx-to-vfile'
import { readdirSync, writeFileSync as fsWriteFileSync } from 'fs'
import { readFile, writeFile as fsWriteFile } from 'fs/promises'
import { join } from 'path'
import { type Plugin, unified } from 'unified'
import { removePosition } from 'unist-util-remove-position'
import { reoffClean } from 'reoff-clean'
import reoffCite from 'reoff-cite'
import reoffParseReferences from 'reoff-parse-references'
import { toMdast } from '../lib/ooxast-util-to-mdast.js'
import remarkGfm from 'remark-gfm'
import { citePlugin as remarkCite, type CitePluginOptions } from '@benrbray/remark-cite'
import remarkMath from 'remark-math'

import { MdastNode, Options } from '../lib/types.js'
import remarkStringify from 'remark-stringify'
import { Node } from 'unist'
import type { Root } from 'ooxast'
import type { Data as CSL } from 'csl-json'
import { describe, it, expect } from 'vitest'

// Debug output is only written when WRITE_TEST_OUTPUT is set, so test runs never modify tracked files.
const writeFileSync = (...args: Parameters<typeof fsWriteFileSync>) => {
  if (process.env.WRITE_TEST_OUTPUT) fsWriteFileSync(...args)
}
const writeFile = async (...args: Parameters<typeof fsWriteFile>) => {
  if (process.env.WRITE_TEST_OUTPUT) await fsWriteFile(...args)
}

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
    // Typed for a bare remark processor (`this: Processor<void, void, void, void>`).
    .use(remarkCite as unknown as Plugin<[Partial<CitePluginOptions>?]>, {})
    .use(
      () => (tree, vfile) =>
        toMdast(tree as Root, vfile, {
          bibliography: (vfile.data.bibliography as CSL[] | undefined) ?? [],
        }),
    )
    .use(() => (tree) => {
      removePosition(tree, { force: true })
      writeFileSync(join(path, 'test.mdast.json'), JSON.stringify(tree, null, 2))
    })
    // remark-stringify 11 defaults to `listItemIndent: 'one'`; keep the 10.x indentation.
    .use(remarkStringify, { listItemIndent: 'tab' })

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
