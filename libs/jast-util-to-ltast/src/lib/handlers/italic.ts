// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em.js

import { all } from '../all.js'
import { J, Node } from '../types.js'

export function em(j: J, node: Node) {
  return j(node, 'emphasis', all(j, node))
}
