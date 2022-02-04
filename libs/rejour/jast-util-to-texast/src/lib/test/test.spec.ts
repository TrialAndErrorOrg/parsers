import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import rejourParse from 'rejour-parse'
import { toTexast } from '../jast-util-to-texast'
import relatexStringify from 'relatex-stringify'
import { unified } from 'unified'
import { TexastContent, TexastRoot, Options } from '../types'
import { removePosition } from 'unist-util-remove-position'
import { toLatex } from 'texast-util-to-latex'

//describe('fixtures', () => {
const fromXML = (config: Options = {}) =>
  unified()
    .use(rejourParse)
    //@ts-ignore yayayay
    .use(() => {
      return transformer
      function transformer(tree: TexastRoot | TexastContent) {
        return toTexast(tree, config)
      }
    })
    .use(relatexStringify)

const fixtures = join(__dirname, 'fixtures')
const dir = readdirSync(fixtures)
const arrDir = dir.map((f) => f)
const doubleDir = dir.map((f) => [
  join(fixtures, f, 'index.jats.xml'),
  join(fixtures, f, 'index.tex'),
  join(fixtures, f, 'indexon'),
])

describe.each(dir)('parses correctly for %s', (name: string) => {
  const [jats, latex, json] = ['index.jats.xml', 'index.tex', 'index.json'].map(
    (ext) => join(fixtures, name, ext)
  )

  const jatsIn = String(readFileSync(jats))
  const texOut = String(readFileSync(latex))

  let config: Options | undefined
  try {
    config = JSON.parse(String(readFileSync(latex)))
  } catch (e) {
    console.log(e)
  }
  const proc = fromXML(config)

  const xmlTree = removePosition(proc.parse(jatsIn), true)
  console.dir(xmlTree, { depth: null })
  if (name === 'complete')
    writeFileSync('longtree', JSON.stringify(xmlTree, null, 2))

  const tree = removePosition(proc.runSync(xmlTree), true)
  //console.dir(tree, { depth: null })

  const lx = toLatex(tree as TexastRoot)

  test('should match snapshot', () => {
    expect(lx).toMatchSnapshot()
  })
  test('should match predefined thing', () => {
    expect(lx).toEqual(texOut)
  })
})