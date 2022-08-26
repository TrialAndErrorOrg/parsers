import reoffParse from 'reoff-parse'
import reoffRejour from 'reoff-rejour'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'
import { docxToVFile } from 'docx-to-vfile'
import { Data as CSL } from 'CSL-JSON'

import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { unified } from 'unified'
import { removePosition } from 'unist-util-remove-position'
import { select } from 'xast-util-select'
import { parseBib } from 'ooxast-util-parse-bib'
import { reoffClean } from 'reoff-clean'
import { findCitations } from 'ooxast-util-citations'
import reoffCite from 'reoff-cite'
import reoffParseReferences from 'reoff-parse-references'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//describe('fixtures', () => {
const fromDocx = (
  path: string,
  citationType?: 'mendeley' | 'word' | 'citavi' | 'zotero' | 'endnote'
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
    .use(
      reoffParseReferences // { mailto: 'support@centeroftrialanderror.com' }
    )
    .use(reoffCite, { type: citationType || 'mendeley' })
    .use(() => (tree, vfile) => {
      console.log(vfile.data.bibliography)
      writeFileSync(
        join(path, 'test.ooxast.json'),
        JSON.stringify(removePosition(tree), null, 2)
      )
    })
    .use(reoffRejour, { citationType: citationType || 'mendeley' || '' })
    .use(
      () => (tree) =>
        writeFileSync(
          join(path, 'test.jats.json'),
          JSON.stringify(removePosition(tree), null, 2)
        )
    )
    .use(rejourRelatex)
    .use(
      () => (tree) =>
        writeFileSync(
          join(path, 'test.tex.json'),
          JSON.stringify(removePosition(tree), null, 2)
        )
    )
    .use(relatexStringify)

const fixtures = new URL('fixtures', import.meta.url).pathname
const dir = readdirSync(fixtures)

it.each(dir)('parses correctly for %s', async (name: string) => {
  const [docx, latex, jats, json] = ['index.docx'].map((ext) =>
    join(fixtures, name, ext)
  )

  const doccc = new Uint8Array(await readFile(docx))
  const docxIn = await docxToVFile(doccc)

  const result = String(
    await fromDocx(
      join(fixtures, name),
      name === 'zotero' ? 'zotero' : undefined
    ).process(docxIn)
  )
  await writeFile(join(fixtures, name, 'result.tex'), result)

  const j = await readFile(join(fixtures, name, 'test.jats.json'), {
    encoding: 'utf8',
  })
  if (name === 'image') {
    expect(select('fig', JSON.parse(j))).toBeTruthy()
  }

  expect(result).toMatchSnapshot()
})
