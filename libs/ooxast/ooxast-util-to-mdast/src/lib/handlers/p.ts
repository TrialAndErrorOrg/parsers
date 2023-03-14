import { P } from 'ooxast'
import { State } from '../state.js'
import { Handle } from '../types.js'
import { getPStyle } from '../util/get-pstyle.js'
import { Paragraph } from 'mdast'

export function getHeadingLevel(p: P) {
  const lastNumber = getPStyle(p)?.toLowerCase()?.slice(-1)
  return !lastNumber ? null : parseInt(lastNumber, 10)
}

export const p: Handle = (state: State, p: P) => {
  const children = state.all(p)

  if (children.length > 0) {
    const result = { type: 'paragraph', children } as Paragraph
    state.patch(p, result)
    return result
  }
}
