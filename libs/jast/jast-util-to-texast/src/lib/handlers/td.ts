// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Td } from 'jast-types'
import { TableCell } from 'texast'
import { all } from '../all'
import { J, Node } from '../types'

export function td(j: J, node: Td) {
  const { colspan, style, valign } = node.attributes
  return j(node, 'tableCell', { span: colspan }, all(j, node)) as TableCell
}
