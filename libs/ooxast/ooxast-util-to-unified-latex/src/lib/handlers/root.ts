// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { all } from '../all'
import { H, Node, Root } from '../types'

export function root(h: H, node: Root) {
  //  if (!article) {

  const content = all(h, node)
  return h(node, 'root', content)
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { name: 'article' }, all(j, article)),
  // ])
}
