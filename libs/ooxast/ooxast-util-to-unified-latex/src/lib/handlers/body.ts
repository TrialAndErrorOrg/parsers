// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { getPStyle } from 'ooxast-util-get-style'
import { H, Body, Handle, P, UnifiedLatexNode } from '../types.js'
import { Element } from 'xast'
import { one } from '../one.js'
// import { getPStyle } from '../util/get-pstyle.js'

const isP = (node: Element): node is P => node.type === 'element' && node.name === 'w:p'

export const body: Handle = (h: H, body: Body) => {
  const processedBody = body.children.reduce((acc, child, index) => {
    if (child.type !== 'element') return acc

    if (!isP(child)) {
      const res = one(h, child, body)
      res && acc.push(...(Array.isArray(res) ? res : [res]))
      return acc
    }

    const style = getPStyle(child)

    let matched = false

    let res: UnifiedLatexNode | Array<UnifiedLatexNode> | void | null = null

    for (const { handler, matcher } of h.paragraphHandlers) {
      if (matched) {
        break
      }

      const handle = (func: typeof handler) => {
        matched = true
        return func(h, child, {
          styleName: style === null ? undefined : style,
          previousElement: body.children[index - 1] as Element,
          alreadyProcessedBody: acc,
          body,
        })
      }

      if (typeof matcher === 'string' && style === matcher) {
        res = handle(handler)
        continue
      }

      if (Array.isArray(matcher) && style && matcher.includes(style)) {
        res = handle(handler)
        continue
      }

      if (typeof matcher === 'function' && matcher(child, style === null ? undefined : style)) {
        res = handle(handler)
      }
    }

    if (!matched) {
      const res = one(h, child, body)
      res && acc.push(...(Array.isArray(res) ? res : [res]))
      return acc
    }

    if (!res) {
      return acc
    }

    acc.push(...(Array.isArray(res) ? res : [res]))

    return acc
  }, [] as UnifiedLatexNode[])
  return processedBody
}
