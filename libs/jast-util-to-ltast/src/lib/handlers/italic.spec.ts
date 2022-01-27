import { astStringify } from 'ast-stringify'
import { rejourParse } from 'rejour-parse'
import { unified } from 'unified'
import { toLtast } from '../jast-util-to-ltast'

const italic = `<p><italic>Hello World.</italic></p>`
describe('italic', () => {
  const proc = unified().use(rejourParse).use(astStringify).processSync(italic)
  const ast = JSON.parse(String(proc))
  it('should parse italic', () => {
    expect(toLtast(ast)).toEqual(italic)
  })
})
