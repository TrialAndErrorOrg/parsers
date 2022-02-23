import { Footnotes } from 'ooxast'
import { J } from '../types'
import { all } from '../all'

export function footnotes(j: J, node: Footnotes) {
  j(node, 'fnGroup', all(j, node))
}
