import { Footnotes } from 'ooxast'
import { H } from '../types.js'
import { all } from '../all.js'

export function footnotes(h: H, node: Footnotes) {
  h(node, 'fnGroup', all(h, node))
}
