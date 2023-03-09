import { x } from 'xastscript'
import { toJast } from '../ooxast-util-to-jast.js'
import fs from 'fs'

it('should work', () => {
  const doc = x('w:document', {}, [
    x('w:body', {}, [
      x('w:p', {}, [
        x('w:pPr', {}, [x('w:pStyle', { 'w:val': 'Heading1' })]),
        x('w:r', {}, [x('w:rPr', {}, []), x('w:t', {}, [{ type: 'text', value: 'hey' }])]),
      ]),
      x('w:p', {}, []),
    ]),
  ])
  expect(toJast(doc)).toEqual(
    x('body', x('sec', {}, [x('title', {}, [{ type: 'text', value: 'hey' }])])),
  )
})

it('lets try', () => {
  const ooxloc = new URL('../../../../../reoff/reoff-parse/src/test/ooxasttree', import.meta.url)
  const x = fs.readFileSync(ooxloc, { encoding: 'utf-8' })
  const tree = JSON.parse(x)

  //expect(toJast(tree)).toMatchSnapshot()
})
