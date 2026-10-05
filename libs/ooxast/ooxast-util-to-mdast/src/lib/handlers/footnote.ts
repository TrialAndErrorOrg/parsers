import { State } from '../state.js'
import { Element } from '../types.js'
import { FootnoteDefinition } from 'mdast'

export function footnote(state: State, node: Element) {
  if (node?.attributes?.type === 'separator') {
    return
  }
  const index = parseInt(node?.attributes?.['w:id'] || '0')

  if (index < 1) {
    return
  }

  const result = {
    type: 'footnoteDefinition',
    identifier: index.toString(),
    children: state.all(node),
  } as FootnoteDefinition

  state.patch(node, result)
  return result
}
