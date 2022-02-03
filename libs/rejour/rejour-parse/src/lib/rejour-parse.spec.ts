import { unified } from 'unified'
import rejourParse from './rejour-parse'
import { removePosition } from 'unist-util-remove-position'

describe('parser', () => {
  const proc = unified().use(rejourParse)

  it('should parse the tree', () => {
    const tree = removePosition(proc.parse('<article></article>'), true)
    expect(tree).toEqual({
      type: 'root',
      children: [
        {
          type: 'element',
          tagName: 'article',
          properties: {},
          children: [],
        },
      ],
    })
  })

  it('should not remove whitespace without setting', () => {
    const tree = removePosition(
      proc.parse(`<article>


    </article>`),
      true
    )
    console.dir(tree, { depth: null })
    expect(tree).toEqual({
      children: [
        {
          children: [{ type: 'text', value: `${'\n\n\n    '}` }],
          properties: {},
          tagName: 'article',
          type: 'element',
        },
      ],
      type: 'root',
    })
  })
  it('should remove whitespace *with* setting', () => {
    const proc = unified().use(rejourParse, { removeWhiteSpace: true })
    const tree = removePosition(
      proc.parse(`<article>


    </article>`),
      true
    )
    console.dir(tree, { depth: null })
    expect(tree).toEqual({
      children: [
        {
          children: [{ type: 'text', value: `` }],
          properties: {},
          tagName: 'article',
          type: 'element',
        },
      ],
      type: 'root',
    })
  })
})
