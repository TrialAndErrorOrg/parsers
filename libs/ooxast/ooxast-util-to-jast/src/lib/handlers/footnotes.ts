import { Footnotes } from 'ooxast'
import { J } from '../types.js'
import { all } from '../all.js'

export function footnotes(j: J, node: Footnotes) {
  j(node, 'fnGroup', all(j, node))
}
