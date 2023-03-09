import rejourParse from 'rejour-parse'
import { toCSL } from './jast-util-to-csl.js'
import { unified } from 'unified'
import { read } from 'to-vfile'
import { Root } from 'jast-types'

describe('rejourJastUtilToCsl', () => {
  const proc = unified().use(rejourParse)
  it('should work', async () => {
    const tree = proc.parse(await read(new URL('../test/index.jats.xml', import.meta.url))) as Root
    const csl = toCSL(tree)
    console.dir(csl.front, { depth: null })
    expect(csl).toEqual('')
  })
})
