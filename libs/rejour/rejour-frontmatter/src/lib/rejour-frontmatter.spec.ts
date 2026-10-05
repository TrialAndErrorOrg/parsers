import rejourParse from 'rejour-parse'
import { unified } from 'unified'
import { read } from 'to-vfile'
import { rejourFrontmatter } from './rejour-frontmatter.js'
import { describe, it, expect } from 'vitest'

describe('rejourFrontmatter', () => {
  const proc = unified().use(rejourParse).use(rejourFrontmatter)
  it('should put the front and back matter as CSL on file.data', async () => {
    const file = await read(new URL('../test/index.jats.xml', import.meta.url))
    await proc.run(proc.parse(file), file)

    expect(file.data.front).toMatchObject({
      title:
        'Classical Conditioning for Pain: The Development of a Customized Single-Case Experimental Design',
      author: [
        { family: 'De', given: 'Tamal Kumar' },
        { family: 'Madden' },
        { family: 'Vlaeyen' },
        { family: 'Onghena' },
      ],
    })
    expect(file.data.back).toHaveLength(50)
    expect(file.data.back).toContainEqual(
      expect.objectContaining({ id: 'bib1', DOI: '10.1038/306686a0' }),
    )
  })
})
