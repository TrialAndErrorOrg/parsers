import { one } from './one'
import { H, HastContent, Node, Parent, Handle, HastParent } from './types'

/**
 * Convert all nodes in tree using h
 * @param h ooxast constructor function
 * @param parent
 * @returns
 */

export function all(
  //<T extends HastContent = HastContent>
  h: H,
  parent: Node
): // Array<T extends HastParent ? T['children'][number] : HastContent>
HastContent[] {
  // @ts-expect-error Assume `parent` is a parent.
  const nodes: Array<Node> = parent.children || []
  const values: Array<HastContent> = []
  let index = -1
  const length = nodes.length
  // const child = nodes[index + 1]

  // Trim initial and final  `<br>`s.
  // They’re not semantic per HTML, and they can’t be made in markdown things
  // like paragraphs or headings.
  // while (child && child.type === 'element' && child.name === 'br') {
  //   index++
  //   child = nodes[index + 1]
  // }

  // child = nodes[length - 1]

  // while (
  //   length - 1 > index &&
  //   child &&
  //   child.type === 'element' &&
  //   child.name === 'br'
  // ) {
  //   length--
  //   child = nodes[length - 1]
  // }

  while (++index < length) {
    // @ts-expect-error assume `parent` is a parent.
    const result = one(h, nodes[index], parent)

    if (Array.isArray(result)) {
      values.push(...result)
    } else if (result) {
      values.push(result)
    }
  }

  return values
}
