// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { all } from '../all.js'
import { H, Root } from '../types.js'

export function root(h: H, node: Root) {
  const content = all(h, node)
  return h(node, 'root', content)
}
