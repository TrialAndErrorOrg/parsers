import reoffParse from 'reoff-parse'
import reoffRejour from 'reoff-rejour'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'
import { docxToVFile } from 'docx-to-vfile'

import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { unified } from 'unified'
import { removePosition } from 'unist-util-remove-position'

//describe('fixtures', () => {
const fromDocx = (path: string) =>
  unified()
    .use(reoffParse)
    //@ts-ignore yayayay
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

  const docxIn = String(await docxToVFile(docx))
  const texOut = String(readFileSync(latex))

  // let config: Options | undefined
  // try {
  //   config = JSON.parse(String(readFileSync(latex)))
  // } catch (e) {
  //   console.error(e)
  // }
  const result = String(fromDocx(join(fixtures, name)).processSync(docxIn))
  writeFileSync(join(fixtures, name, 'result.tex'), result)

  // console.dir(xmlTree, { depth: null })

  test('should match snapshot', () => {
    expect(result).toMatchSnapshot()
  })
  test('should match predefined thing', () => {
    expect(result).toEqual(texOut)
  })
})
