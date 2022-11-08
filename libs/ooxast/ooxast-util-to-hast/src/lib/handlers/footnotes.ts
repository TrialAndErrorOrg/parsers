import { Footnotes } from 'ooxast'
import { H } from '../types'
import { all } from '../all'

export function footnotes(h: H, node: Footnotes) {
  h(node, 'fnGroup', all(h, node))
}
