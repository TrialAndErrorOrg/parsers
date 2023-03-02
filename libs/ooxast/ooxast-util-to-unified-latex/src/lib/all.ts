import { one } from './one'
import { H, UnifiedLatexNode, Node, Parent, Handle } from './types'

/**
 * Convert all nodes in tree using j
 * @param h ooxast constructor function
 * @param parent
 * @returns
 */
export function all(h: H, parent: Node | Parent): UnifiedLatexNode[] {
  const nodes: Array<Node> = 'children' in parent ? parent.children || [] : []
  const values: Array<UnifiedLatexNode> = []
  let index = -1
  const length = nodes.length
  while (++index < length) {
    const result = 'children' in parent ? one(h, nodes[index], parent) : one(h, nodes[index])

    if (Array.isArray(result)) {
      values.push(...result)
    } else if (result) {
      values.push(result)
    }
  }

  return values
}
