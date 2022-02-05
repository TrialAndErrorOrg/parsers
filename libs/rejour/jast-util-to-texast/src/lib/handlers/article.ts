// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers } from 'jjast'
import { all } from '../all'
import { J, Node, Root } from '../types'

export function article(j: J, node: Root) {
  const kids = node.children as TagHavers[]
  const front = kids.find((child) => child?.tagName === 'front')
  if (!front) {
    throw new Error(
      `Node ${node.type} requires a "front" child, but none were found.`
    )
  }
  const body = kids.find((child) => child?.tagName === 'body')
  if (!body) {
    return j(node, 'root', { tagName: 'article' }, [
      ...all(j, node),
      j(node, 'body'),
    ])
  }
  // const back = kids.find((child) => child?.tagName === 'back')

  return j(node, 'root', all(j, node))
}
