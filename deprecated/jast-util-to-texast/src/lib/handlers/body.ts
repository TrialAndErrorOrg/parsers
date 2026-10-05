// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers } from 'jast-types'
import { all } from '../all.js'
import { J, Node, Root } from '../types.js'

export function body(j: J, node: Root) {
  return j(node, 'environment', { name: 'document' }, all(j, node))
}
