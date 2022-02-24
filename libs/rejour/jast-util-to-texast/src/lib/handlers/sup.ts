import { all } from '../all'
import { J, Node } from '../types'

export function sup(j: J, node: Node) {
  return j(node, 'super', all(j, node))
}
