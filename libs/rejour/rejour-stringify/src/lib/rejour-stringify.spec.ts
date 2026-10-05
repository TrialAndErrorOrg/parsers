import { unified } from 'unified'
import { Root } from 'jast-types'
import rejourStringify from './rejour-stringify.js'
import { describe, it, expect } from 'vitest'

describe('rejourStringify', () => {
  it('should turn the camel-cased names from rejour-parse back into JATS names', () => {
    const tree = {
      type: 'root',
      children: [
        {
          type: 'element',
          name: 'articleMeta',
          attributes: {},
          children: [
            {
              type: 'element',
              name: 'pubDate',
              attributes: { pubType: 'epub', 'xlink:href': 'x' },
              children: [{ type: 'text', value: '2022' }],
            },
          ],
        },
      ],
    } as unknown as Root
    expect(unified().use(rejourStringify).stringify(tree)).toEqual(
      '<article-meta><pub-date pub-type="epub" xlink:href="x">2022</pub-date></article-meta>',
    )
  })
})
