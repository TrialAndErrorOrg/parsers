import { x } from 'xastscript'
import { toJast } from '../ooxast-util-to-jast'

it('should work', () => {
  const doc = x('w:document', {}, [
    x('w:p', {}, []),
    x('w:p', {}, [
      x('w:pPr', {}, [x('w:pStyle', { val: 'Heading1' })]),
      x('w:r', {}, [
        x('w:rPr', {}, []),
        x('w:t', {}, [{ type: 'text', value: 'hey' }]),
      ]),
    ]),
  ])
  expect(toJast(doc)).toEqual(
    x('sec', {}, [x('title', {}, [{ type: 'text', value: 'hey' }])])
  )
})
