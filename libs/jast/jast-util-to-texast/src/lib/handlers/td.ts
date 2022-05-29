// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Td } from 'jast-types'
import { all } from '../all'
import { J, Node } from '../types'

export function td(j: J, node: Td) {
  return j(node, 'tableCell', all(j, node))
}
