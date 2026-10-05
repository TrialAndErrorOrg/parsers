import { P, Parent } from 'ooxast'
import { all } from '../all.js'
import { H } from '../types.js'
import { getPStyle } from '../util/get-pstyle.js'
import { getHeadingLevel } from '../util/style-names.js'

export function p(h: H, p: P, parent: Parent) {
  if (h.inTable) return all(h, p)
  const style = getPStyle(p)

  if (!style) return h(p, 'p', all(h, p))

  for (const { matcher, handler } of h.pHandlers) {
    if (typeof matcher === 'string' && style.toLowerCase().includes(matcher)) {
      return handler(h, p, parent, style)
    }
    if (matcher instanceof RegExp && matcher.test(style)) {
      return handler(h, p, parent, style)
    }
  }

  if (style === 'Title') {
    return h(p, 'h1', all(h, p))
  }

  // `Title` is the `h1`, so `heading 1` is an `h2`
  const headingLevel = getHeadingLevel(style, h.styleNames)
  if (headingLevel) {
    return h(p, `h${Math.min(headingLevel + 1, 6)}`, all(h, p))
  }

  return h(p, 'p', { style }, all(h, p))
}
