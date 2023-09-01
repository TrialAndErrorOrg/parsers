import { all } from '../../all.js'
import { H, P, StyleHandle } from '../../types.js'

const headingHandler: StyleHandle = (h: H, node: P) => {
  return h(node, `h1`, all(h, node))
}

export const defaultHeadingHandler = [/^Title$/, headingHandler]
