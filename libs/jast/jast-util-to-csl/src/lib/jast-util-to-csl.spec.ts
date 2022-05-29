import rejourParse from 'rejour-parse'
import { toCSL } from './jast-util-to-csl'
import { unified } from 'unified'
import { read } from 'to-vfile'
import { Root } from 'jast-types'

describe('rejourJastUtilToCsl', () => {
  const proc = unified().use(rejourParse)
  it('should work', async () => {
    const tree = proc.parse(
      await read(__dirname + '/../test/index.jats.xml')
    ) as Root
    const csl = toCSL(tree)
    console.dir(csl.front, { depth: null })
    expect(csl).toEqual('')
  })
})
