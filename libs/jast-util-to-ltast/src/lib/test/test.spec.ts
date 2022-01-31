import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import rejourParse from 'rejour-parse'
import { toLtast } from '../jast-util-to-ltast'
import relatexStringify from 'relatex-stringify'
import { unified } from 'unified'
import { LtastContent, LtastRoot, Options } from '../types'
import { removePosition } from 'unist-util-remove-position'
import { toLatex } from 'ltast-util-to-latex'

describe('fixtures', () => {
  const fromXML = (config: Options = {}) =>
    unified()
      .use(rejourParse)
      //@ts-expect-error yayayay
      .use(() => {
        return transformer
        function transformer(tree: LtastRoot | LtastContent) {
          return toLtast(tree, config)
        }
      })
      .use(relatexStringify)

  const fixtures = join(__dirname, 'fixtures')
  const dir = readdirSync(fixtures)
  console.log(dir)
  const doubleDir = dir.map((f) => [
    join(fixtures, f, 'index.xml'),
    join(fixtures, f, 'index.tex'),
    join(fixtures, f, 'index.json'),
  ])

  console.log(doubleDir)

  test.each(doubleDir)(
    'parses correctly for %i',
    (jats: string, latex: string) => {
      const jatsIn = String(readFileSync(jats))
      const texOut = String(readFileSync(latex))
      let config: Options | undefined
      try {
        config = JSON.parse(String(readFileSync(latex)))
      } catch (e) {
        console.log(e)
      }
      const proc = fromXML(config)

      const tree = removePosition(proc.runSync(proc.parse(jatsIn)), true)
      const lx = toLatex(tree)

      expect(lx).toEqual(texOut)
      expect(lx).toMatchSnapshot()
    }
  )
})
