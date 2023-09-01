import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import rejourParse from 'rejour-parse'
import { toTexast } from '../jast-util-to-texast.js'
import relatexStringify from 'relatex-stringify'
import { unified } from 'unified'
import { TexastContent, Options, TexastRoot } from '../types.js'
import { removePosition } from 'unist-util-remove-position'
import { toLatex } from 'texast-util-to-latex'

//describe('fixtures', () => {
const fromXML = (config: Options = {}) =>
  unified()
    .use(rejourParse)
    //@ts-expect-error yayayay
    .use(() => {
      return transformer
      function transformer(tree: TexastRoot | TexastContent) {
        return toTexast(tree, config)
      }
    })
    .use(relatexStringify)

const fixtures = new URL('fixtures', import.meta.url)
const dir = readdirSync(fixtures)
const arrDir = dir.map((f) => f)
const doubleDir = dir.map((f) => [
  join(fixtures.pathname, f, 'index.jats.xml'),
  join(fixtures.pathname, f, 'index.tex'),
  join(fixtures.pathname, f, 'indexon'),
])

describe.each(dir)('parses correctly for %s', (name: string) => {
  const [jats, latex, json] = ['index.jats.xml', 'index.tex', 'index.json'].map((ext) =>
    join(fixtures.pathname, name, ext),
  )

  const jatsIn = String(readFileSync(jats))
  const texOut = String(readFileSync(latex))

  let config: Options | undefined
  try {
    config = JSON.parse(String(readFileSync(latex)))
  } catch (e) {
    console.error(e)
  }
  const proc = fromXML(config)

  const xmlTree = removePosition(proc.parse(jatsIn), true)
  // console.dir(xmlTree, { depth: null })

  let tree: TexastRoot = { type: 'root', children: [] }
  try {
    tree = removePosition(proc.runSync(xmlTree), true)
  } catch (e) {
    console.error('woops')
    console.error(e)
  }
  //console.dir(tree, { depth: null })

  let lx = ''
  try {
    lx = toLatex(tree as TexastRoot)
  } catch (e) {
    console.log(e)
  }

  if (name === 'complete') {
    writeFileSync(
      join('libs', 'rejour', 'jast-util-to-texast', 'jasttree'),
      JSON.stringify(xmlTree, null, 2),
    )
    writeFileSync(
      join('libs', 'rejour', 'jast-util-to-texast', 'texasttree'),
      JSON.stringify(tree, null, 2),
    )
    writeFileSync(
      join(
        'libs',
        'rejour',
        'jast-util-to-texast',
        'src',
        'lib',
        'test',
        'fixtures',
        'complete',
        'test.tex',
      ),
      lx,
    )
  }
  test('should match snapshot', () => {
    expect(lx).toMatchSnapshot()
  })
  test('should match predefined thing', () => {
    expect(lx).toEqual(texOut)
  })
})
