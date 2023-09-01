import { all } from '../../all.js'
import { H, P, StyleHandle } from '../../types.js'

const headingHandler: StyleHandle = (h: H, node: P, style: string) => {
  const level = Number(style.replace(/Heading(\d+)/, '$1'))
  return h(node, `h${level + 1}`, all(h, node))
}

export const defaultHeadingHandler = [/^Heading\d+$/, headingHandler]
