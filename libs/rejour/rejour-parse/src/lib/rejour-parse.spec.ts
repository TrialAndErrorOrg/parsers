import { unified } from 'unified'
import rejourParse from './rejour-parse.js'
import { removePosition } from 'unist-util-remove-position'
import { describe, it, expect } from 'vitest'

describe('parser', () => {
  const proc = unified().use(rejourParse)

  it('should parse the tree', () => {
    const tree = proc.parse('<article></article>')
    removePosition(tree, { force: true })
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
    const tree = proc.parse(`<article>


    </article>`)
    removePosition(tree, { force: true })
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
    const tree = proc.parse(`<article>


    </article>`)
    removePosition(tree, { force: true })
    expect(tree).toEqual({
      children: [
        {
          children: [],
          attributes: {},
          name: 'article',
          type: 'element',
        },
      ],
      type: 'root',
    })
  })
})
