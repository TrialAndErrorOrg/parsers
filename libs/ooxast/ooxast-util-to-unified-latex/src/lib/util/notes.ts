import { Endnotes, Footnotes, FtnEdn } from 'ooxast'
import { all } from '../all'
import { H, UnifiedLatexNode } from '../types'

export const notes = (h: H, node: Footnotes | Endnotes) => {
  const children = node.children.filter<FtnEdn>(
    (child): child is FtnEdn =>
      ('name' in child && child.name === 'w:footnote') || child.name === 'w:endnote',
  )

  const notes = children.reduce((acc, child, idx) => {
    acc[child.attributes?.['w:id'] ?? idx.toString()] = all(h, child) ?? []
    return acc
  }, {} as Record<string, UnifiedLatexNode[]>)

  return notes
}
