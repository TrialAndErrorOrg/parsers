// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import {
  Article,
  Parent,
  TagHavers,
  Element,
  Content,
  FnGroup,
} from 'jast-types'
import { select } from 'xast-util-select'
import { all } from '../all'
import { J, Node, Root } from '../types'

export function article(j: J, node: Root) {
  const front = select('front', node)
  if (!front) {
    throw new Error(
      `Node ${node.type} requires a "front" child, but none were found.`
    )
  }

  const refList = select('back > refList', node)

  if (refList) {
    front?.children?.push(refList)
  }
  const footnotes = select('fnGroup', node) as FnGroup | null
  if (footnotes) {
    j.footnotes = all(j, footnotes)
  }
  // console.log(j.footnotes)

  const body = select('body', node)
  if (!body) {
    return j(node, 'root', { name: 'article' }, [
      ...all(j, node),
      j(node, 'body'),
    ])
  }

  node.children = [front as Content, body as Content]

  return j(node, 'root', all(j, node))
}
