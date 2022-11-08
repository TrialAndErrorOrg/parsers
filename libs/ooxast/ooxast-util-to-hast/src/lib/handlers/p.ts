import { P, Parent } from 'ooxast'
import { all } from '../all'
import { H, Text } from '../types'
import { getPStyle } from '../util/get-pstyle'

export function p(h: H, p: P, parent: Parent) {
  if (h.inTable) return all(h, p)
  const style = getPStyle(p)

  if (!style) return all(h, p)

  const pHandlers = h.pHandlers || {}
  for (const handle of pHandlers) {
    const { matcher, handler } = handle

    if (typeof matcher === 'string' && style?.toLowerCase().includes(matcher)) {
      return handler(h, p, parent, style)
    }
    if (matcher instanceof RegExp && matcher.test(style)) {
      return handler(h, p, parent, style)
    }
  }

  if (style === 'Title') {
    return h(p, 'h1', all(h, p))
  }

  return h(p, 'p', { ...(style ? { style } : {}) }, all(h, p))
}
