// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers, Element, Content } from 'ooxast'
import { all } from '../all'
import { J, Node, Root } from '../types'

export function article(j: J, node: Root) {
  const kids = node.children as Element[]
  const front = kids.find((child) => child?.name === 'front')
  if (!front) {
    throw new Error(
      `Node ${node.type} requires a "front" child, but none were found.`
    )
  }

  const back = kids.find((child) => child?.name === 'back')
  if (back) {
    front?.children?.push(...(back?.children || []))
  }

  const body = kids.find((child) => child?.name === 'body')
  if (!body) {
    return j(node, 'root', { name: 'article' }, [
      ...all(j, node),
      j(node, 'body'),
    ])
  }

  node.children = [front as Content, body as Content]

  return j(node, 'root', all(j, node))
}
