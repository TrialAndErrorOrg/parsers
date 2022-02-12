// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { all } from '../all'
import { J, Node, Root } from '../types'

export function root(j: J, node: Root) {
  //  if (!article) {
  return j(node, 'root', all(j, node))
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { name: 'article' }, all(j, article)),
  // ])
}
