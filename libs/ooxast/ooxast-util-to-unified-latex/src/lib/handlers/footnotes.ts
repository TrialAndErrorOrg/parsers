import { Footnotes } from 'ooxast'
import { H } from '../types'
import { all } from '../all'

export function footnotes(h: H, node: Footnotes) {
  j(node, 'fnGroup', all(j, node))
}
