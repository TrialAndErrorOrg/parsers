import { State } from '../state.js'
import { Element } from '../types.js'
import { arg, m } from '@unified-latex/unified-latex-builder'
import { FootnoteReference } from 'mdast'

export function footnoteReference(state: State, node: Element) {
  if (node?.attributes?.type === 'separator') {
    return
  }
  const index = parseInt(node?.attributes?.['w:id'] || '0')

  if (index < 1) {
    return
  }

  const result = {
    type: 'footnoteReference',
    identifier: index.toString(),
    label: index.toString(),
  } as FootnoteReference

  state.patch(node, result)
  return result
}
