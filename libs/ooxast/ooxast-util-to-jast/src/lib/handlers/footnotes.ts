import { Footnotes } from 'ooxast'
import { J } from '../types.js'
import { all } from '../all.js'

// The `fnGroup` wrapper is added by the `document` handler.
export function footnotes(j: J, node: Footnotes) {
  return all(j, node)
}
