// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Tr } from 'jjast'
import { all } from '../all'
import { J, Node } from '../types'

export function tr(j: J, node: Tr) {
  return j(node, 'tableRow', all(j, node))
}
