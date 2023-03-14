import { P } from 'ooxast'
import { State } from '../state.js'
import { Handle } from '../types.js'
import { getPStyle } from '../util/get-pstyle.js'
import { Blockquote, Heading, Paragraph } from 'mdast'
import { blockquote, heading, paragraph } from 'mdast-builder'
import { toString } from 'xast-util-to-string'

export function getHeadingLevel(p: P) {
  const lastNumber = getPStyle(p)?.toLowerCase()?.slice(-1)
  return !lastNumber ? null : parseInt(lastNumber, 10)
}

export const p: Handle = (state: State, p: P) => {
  const children = state.all(p)

  if (!children.length) {
    return
  }

  const style = getPStyle(p)

  if (!style) {
    const result = paragraph(children) as Paragraph
    state.patch(p, result)
    return result
  }

  if (style.toLowerCase().includes('quote')) {
    const result = blockquote(state.all(p)) as Blockquote
    state.patch(p, result)
    return result
  }

  if (style.toLowerCase() === 'title') {
    state.options.title = toString(p)
    return
  }

  const headingLevel = getHeadingLevel(p)

  if (headingLevel) {
    const result = heading(headingLevel, children) as Heading
    state.patch(p, result)
    return result
  }

  const result = { type: 'paragraph', children } as Paragraph
  state.patch(p, result)
  return result
}
