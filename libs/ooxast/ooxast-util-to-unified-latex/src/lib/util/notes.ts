import { Endnotes, Footnotes, FtnEdn } from 'ooxast'
import { all } from '../all.js'
import { H, UnifiedLatexNode } from '../types.js'
import { selectAll } from 'xast-util-select'
import { Root } from 'xast'

export const notes = (h: H, node: Root) => {
  const children = selectAll('w\\:footnote, w\\:endnote', node)

  if (!children) {
    return {} as Record<string, UnifiedLatexNode[]>
  }
  // const children = node.children.filter<FtnEdn>(
  //   (child): child is FtnEdn =>
  //     ('name' in child && child.name === 'w:footnote') || child.name === 'w:endnote',
  // )

  const notes = children.reduce((acc, child, idx) => {
    acc[child.attributes?.['w:id'] ?? idx.toString()] = all(h, child) ?? []
    return acc
  }, {} as Record<string, UnifiedLatexNode[]>)

  return notes
}
