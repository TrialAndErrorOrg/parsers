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

//describe('fixtures', () => {
const fromDocx = (path: string) =>
  unified()
    .data('hey', 'ho')
    .use(reoffParse)
    .use(reoffClean, {
      rPrRemoveList: [
        'w:lang',
        'w:shd',
        'w:szCs',
        'w:kern',
        'w:rFonts',
        'w:noProof',
      ],
    })
    .use(() => (tree, vfile) => {
      vfile.data.bibliography = parseBib(tree, {})
    })
    .use(() => (tree, vfile) => {
      const newtree = findCitations(tree, {
        bibliography: vfile.data.bibliography as CSL[],
        type: 'mendeley',
      })
      writeFileSync(
        join(path, 'test.ooxast.json'),
        JSON.stringify(newtree, null, 2)
      )
      return newtree
    })
    .use(reoffRejour)
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

const fixtures = join(__dirname, 'fixtures')
const dir = readdirSync(fixtures)

it.each(dir)('parses correctly for %s', async (name: string) => {
  const [docx, latex, jats, json] = [
    'index.docx',
    'index.tex',
    'index.jats.xml',
    'index.json',
  ].map((ext) => join(fixtures, name, ext))

  const doccc = new Uint8Array(await readFile(docx))
  const docxIn = await docxToVFile(doccc)
  const texOut = String(await readFile(latex))

  // let config: Options | undefined
  // try {
  //   config = JSON.parse(String(readFileSync(latex)))
  // } catch (e) {
  //   console.error(e)
  // }
  const result = String(await fromDocx(join(fixtures, name)).process(docxIn))
  await writeFile(join(fixtures, name, 'result.tex'), result)

  const j = await readFile(join(fixtures, name, 'test.jats.json'), {
    encoding: 'utf8',
  })
  if (name === 'image') {
    expect(select('fig', JSON.parse(j))).toBeTruthy()
  }
  // console.dir(xmlTree, { depth: null })

  // it('should match snapshot', () => {
  //   //expect(result).toMatchSnapshot()
  // })
  //it('should match predefined thing', () => {
  expect(result).toEqual(texOut)
  // })
})
