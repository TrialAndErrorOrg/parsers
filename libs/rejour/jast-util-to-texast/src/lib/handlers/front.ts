// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em.js

import { Article, Parent, TagHavers } from 'jast'
import { all } from '../all.js'
import { J, Node, Root } from '../types.js'

export function front(j: J, node: Root) {
  // const back = kids.find((child) => child?.tagName === 'back')
  return j(node, 'preamble', all(j, node))
}
