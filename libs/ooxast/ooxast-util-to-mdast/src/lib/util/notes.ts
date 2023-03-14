import { MdastNode } from '../types.js'
import { selectAll } from 'xast-util-select'
import { Root } from 'xast'
import { State } from '../state.js'

export const notes = (state: State, node: Root) => {
  const children = selectAll('w\\:footnote, w\\:endnote', node)

  if (!children) {
    return {} as Record<string, MdastNode[]>
  }

  const notes = children.reduce((acc, child, idx) => {
    acc[child.attributes?.['w:id'] ?? idx.toString()] = state.all(child) ?? []
    return acc
  }, {} as Record<string, MdastNode[]>)

  return notes
}
