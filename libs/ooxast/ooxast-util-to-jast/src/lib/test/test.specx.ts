import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import reoffParse from 'reoff-parse'
import { toJast } from '../ooxast-util-to-jast'
import relatexStringify from 'relatex-stringify'
import { unified } from 'unified'
import { JastContent, Options, JastRoot } from '../types'
import { removePosition } from 'unist-util-remove-position'

//describe('fixtures', () => {
const fromXML = (config: Options = {}) =>
  unified()
    .use(reoffParse)
    //@ts-ignore yayayay
    .use(() => {
      return transformer
      function transformer(tree: JastRoot | JastContent) {
        return toJast(tree, config)
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
    console.error(e)
  }
  const proc = fromXML(config)

  const xmlTree = removePosition(proc.parse(jatsIn), true)
  // console.dir(xmlTree, { depth: null })

  let tree: JastRoot = { type: 'root', children: [] }
  try {
    //@ts-ignore
    tree = removePosition(proc.runSync(xmlTree), true)
  } catch (e) {
    console.error('woops')
    console.error(e)
  }
  //console.dir(tree, { depth: null })
  if (name === 'complete') {
    writeFileSync(
      join('libs', 'ooxast', 'ooxast-util-to-jast', 'ooxasttree'),
      JSON.stringify(xmlTree, null, 2)
    )
    writeFileSync(
      join('libs', 'ooxast', 'ooxast-util-to-jast', 'jasttree'),
      JSON.stringify(tree, null, 2)
    )
  }

  let lx = ''
  try {
    lx = toLatex(tree as JastRoot)
  } catch (e) {
    console.log(e)
  }

  if (name === 'complete') {
    writeFileSync(
      join('libs', 'ooxast', 'ooxast-util-to-jast', 'ooxasttree'),
      JSON.stringify(xmlTree, null, 2)
    )
    writeFileSync(
      join('libs', 'ooxast', 'ooxast-util-to-jast', 'jasttree'),
      JSON.stringify(tree, null, 2)
    )
    writeFileSync(
      join(
        'libs',
        'ooxast',
        'ooxast-util-to-jast',
        'src',
        'lib',
        'test',
        'fixtures',
        'complete',
        'test.tex'
      ),
      lx
    )
  }
  test('should match snapshot', () => {
    expect(lx).toMatchSnapshot()
  })
  test('should match predefined thing', () => {
    expect(lx).toEqual(texOut)
  })
})
