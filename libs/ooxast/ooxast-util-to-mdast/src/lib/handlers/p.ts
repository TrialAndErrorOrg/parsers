import { P } from 'ooxast'
import { State } from '../state.js'
import { Handle } from '../types.js'
import { getPStyle } from '../util/get-pstyle.js'
import type { BlockContent, Blockquote, Heading, Paragraph, PhrasingContent } from 'mdast'
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
    const result: Paragraph = { type: 'paragraph', children: children as PhrasingContent[] }
    state.patch(p, result)
    return result
  }

  if (style.toLowerCase().includes('quote')) {
    const result: Blockquote = { type: 'blockquote', children: state.all(p) as BlockContent[] }
    state.patch(p, result)
    return result
  }

  if (style.toLowerCase() === 'title') {
    state.options.title = toString(p)
    return
  }

  const headingLevel = getHeadingLevel(p)

  if (headingLevel) {
    const result: Heading = {
      type: 'heading',
      depth: headingLevel as Heading['depth'],
      children: children as PhrasingContent[],
    }
    state.patch(p, result)
    return result
  }

  const result = { type: 'paragraph', children } as Paragraph
  state.patch(p, result)
  return result
}
