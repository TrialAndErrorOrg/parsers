import { P, Parent } from 'ooxast'
import { P as JastP } from 'jast-types'
import { all } from '../all'
import { J, Text } from '../types'
import { wrapChildren } from '../util/wrap-children'
import { getPStyle } from '../util/get-pstyle'

export function p(j: J, p: P, parent: Parent) {
  if (j.inTable) return all(j, p)
  const style = getPStyle(p)

  if (style?.toLowerCase() === 'quote') {
    return j(p, 'disp-qoute', all(j, p))
  }

  return j(p, 'p', { ...(style ? { style } : {}) }, all(j, p))
}
