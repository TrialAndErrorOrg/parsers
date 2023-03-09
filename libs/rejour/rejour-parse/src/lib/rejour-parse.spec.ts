import { unified } from 'unified'
import rejourParse from './rejour-parse.js'
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
          name: 'article',
          attributes: {},
          children: [],
        },
      ],
    })
  })

  it('should not remove whitespace without setting', () => {
    const tree = removePosition(
      proc.parse(`<article>


    </article>`),
      true,
    )
    console.dir(tree, { depth: null })
    expect(tree).toEqual({
      children: [
        {
          children: [{ type: 'text', value: `${'\n\n\n    '}` }],
          attributes: {},
          name: 'article',
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
      true,
    )
    console.dir(tree, { depth: null })
    expect(tree).toEqual({
      children: [
        {
          children: [{ type: 'text', value: `` }],
          attributes: {},
          name: 'article',
          type: 'element',
        },
      ],
      type: 'root',
    })
  })
})
