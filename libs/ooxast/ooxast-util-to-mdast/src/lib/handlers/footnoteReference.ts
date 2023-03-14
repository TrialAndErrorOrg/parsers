import { State } from '../state.js'
import { Element } from '../types.js'
import { arg, m } from '@unified-latex/unified-latex-builder'

export function footnoteReference(state: State, node: Element) {
  if (node?.attributes?.type === 'separator') {
    return
  }
  const index = parseInt(node?.attributes?.['w:id'] || '0')

  if (index < 1) {
    return
  }

  return m('footnote', arg(state.footnotes[index]))
}
