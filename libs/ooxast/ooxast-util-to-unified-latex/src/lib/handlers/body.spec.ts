import { x } from 'xastscript'
import { toUnifiedLatex } from '../ooxast-util-to-unified-latex'
import fs from 'fs'
import { removePosition } from 'unist-util-remove-position'

it('should work', () => {
  const doc = x('w:document', {}, [
    x('w:body', {}, [
      x('w:p', {}, [
        x('w:pPr', {}, [x('w:pStyle', { 'w:val': 'Heading1' })]),
        x('w:r', {}, [
          x('w:rPr', {}, []),
          x('w:t', {}, [{ type: 'text', value: 'hey' }]),
        ]),
      ]),
      x('w:p', {}, []),
    ]),
  ])
  expect(toUnifiedLatex(doc)).toEqual(
    x('body', x('sec', {}, [x('title', {}, [{ type: 'text', value: 'hey' }])]))
  )
})

it('lets try', () => {
  const ooxloc =
    __dirname + '/../../../../../reoff/reoff-parse/src/test/ooxasttree'
  const x = fs.readFileSync(ooxloc, { encoding: 'utf-8' })
  const tree = JSON.parse(x)

  //expect(toUnifiedLatex(tree)).toMatchSnapshot()
})
