import { State } from '../state.js'
import { Element } from '../types.js'
import { all } from '../all.js'

export function footnote(state: State, node: Element) {
  if (node?.attributes?.type === 'separator') {
    return
  }
  const index = parseInt(node?.attributes?.['w:id'] || '0')

  if (index < 1) {
    return
  }

  state.endnotes[index] = state.all(node) ?? []
  return
}
