// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers } from 'ooxast'
import { all } from '../all'
import { J, Node, Root } from '../types'

export function body(j: J, node: Root) {
  return j(node, 'environment', { name: 'document' }, all(j, node))
}
