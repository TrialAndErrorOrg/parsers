import rejourParse from 'rejour-parse'
import { toCSL } from './jast-util-to-csl.js'
import { unified } from 'unified'
import { read } from 'to-vfile'
import { Root } from 'jast-types'
import { describe, it, expect } from 'vitest'

describe('rejourJastUtilToCsl', () => {
  const proc = unified().use(rejourParse)
  it('should convert the front and back matter of an article', async () => {
    const tree = proc.parse(await read(new URL('../test/index.jats.xml', import.meta.url))) as Root
    const csl = toCSL(tree)

    expect(csl.front).toMatchObject({
      title:
        'Classical Conditioning for Pain: The Development of a Customized Single-Case Experimental Design',
      // JATS has <day><month><year>, CSL date parts are always [year, month, day]
      custom: { received: { 'date-parts': [['2021', '03', '08']], literal: '2021-03-08' } },
    })
    expect(csl.front?.author?.map((author) => author.family)).toEqual([
      'De',
      'Madden',
      'Vlaeyen',
      'Onghena',
    ])
    expect(csl.front?.author?.[0]).toMatchObject({
      given: 'Tamal Kumar',
      email: 'tamalkumar.de@kuleuven.be',
    })

    expect(csl.back).toHaveLength(50)
    expect(csl.back?.[0]).toMatchObject({
      id: 'bib1',
      type: 'article-journal',
      title: 'Evidence for a central component of post-injury pain hypersensitivity',
      author: [{ family: 'Woolf', given: 'Clifford J' }],
      issued: { 'date-parts': [['1983', '12']] },
      issue: '5944',
      page: '686-688',
      volume: '306',
      DOI: '10.1038/306686a0',
      source: 'Nature',
    })
  })
})
