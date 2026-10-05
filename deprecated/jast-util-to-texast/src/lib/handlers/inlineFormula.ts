// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { all } from '../all.js'
import { J, Node } from '../types.js'

export function inlineFormula(j: J, node: Node) {
  return j(node, 'inlineMath', all(j, node))
}
