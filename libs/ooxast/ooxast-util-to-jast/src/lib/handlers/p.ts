import { P, Parent } from 'ooxast'
import { all } from '../all.js'
import { J } from '../types.js'
import { getPStyle } from '../util/get-pstyle.js'

export function p(j: J, p: P, parent: Parent) {
  if (j.inTable) return all(j, p)
  const style = getPStyle(p)

  if (style?.toLowerCase() === 'quote') {
    return j(p, 'disp-qoute', all(j, p))
  }

  return j(p, 'p', { ...(style ? { style } : {}) }, all(j, p))
}
