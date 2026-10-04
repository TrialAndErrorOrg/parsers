import type { Root as MdastRoot } from 'mdast'
import type { Root } from 'ooxast'
import { unified } from 'unified'
import { describe, it, expect } from 'vitest'
import reoffMdast from './reoff-remark.js'

const docx = (): Root =>
  ({
    type: 'root',
    children: [
      {
        type: 'element',
        name: 'w:document',
        attributes: {},
        children: [
          {
            type: 'element',
            name: 'w:body',
            attributes: {},
            children: [
              {
                type: 'element',
                name: 'w:p',
                attributes: {},
                children: [
                  {
                    type: 'element',
                    name: 'w:r',
                    attributes: {},
                    children: [
                      {
                        type: 'element',
                        name: 'w:t',
                        attributes: {},
                        children: [{ type: 'text', value: 'Hello' }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }) as Root

const expected = {
  type: 'root',
  children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Hello' }] }],
}

describe('reoffMdast', () => {
  it('turns the ooxast tree into mdast (mutate-mode)', async () => {
    const mdast: MdastRoot = await unified().use(reoffMdast).run(docx())
    expect(mdast).toMatchObject(expected)
  })

  it('runs the destination on the mdast tree (bridge-mode)', async () => {
    let seen: MdastRoot | undefined
    const destination = unified().use(() => (tree: MdastRoot) => {
      seen = tree
    })
    const tree = docx()

    expect(await unified().use(reoffMdast, destination).run(tree)).toBe(tree)
    expect(seen).toMatchObject(expected)
  })
})
