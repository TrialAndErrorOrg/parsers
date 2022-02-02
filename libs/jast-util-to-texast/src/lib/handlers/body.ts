// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em.js

import { Article, Parent, TagHavers } from 'rejour'
import { all } from '../all.js'
import { J, Node, Root } from '../types.js'

export function body(j: J, node: Root) {
  return j(node, 'environment', { name: 'document' }, all(j, node))
}
