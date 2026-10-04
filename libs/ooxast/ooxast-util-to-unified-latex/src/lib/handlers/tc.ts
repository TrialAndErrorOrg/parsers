import { arg, m, s, SP } from '@unified-latex/unified-latex-builder'
import { Tc } from 'ooxast'
import type { Element } from 'xast'
import { one } from '../one.js'
import { H, Handle, UnifiedLatexNode } from '../types.js'
import { gridSpan } from './tbl.js'

export const tc: Handle = (h: H, node: Tc): UnifiedLatexNode[] => {
  const children = cellContent(h, node)

  // Cell shading (`w:shd/@w:fill`) is not converted: it needs `\cellcolor` (colortbl). Turning
  // it into `\color{<fill>}` (as this used to) is not valid xcolor syntax and would set the text
  // in the background colour.

  const span = gridSpan(node as unknown as Element)

  if (span > 1) {
    return [
      m('multicolumn', [
        arg(`${span}`),
        // tabularx: an X column as wide as the columns it spans
        arg(
          h.tabularx?.width
            ? `>{\\hsize=\\dimexpr${span}\\hsize+${2 * (span - 1)}\\tabcolsep\\relax}X`
            : h.defaultCol,
        ),
        arg(children),
      ]),
    ]
  }

  return children
}

/**
 * The paragraphs (and nested tables) of a cell, separated by a line break where the column
 * allows one (tabularx's `X`), by a space otherwise. Without a separator they ran together.
 */
function cellContent(h: H, node: Tc): UnifiedLatexNode[] {
  const blocks = ((node.children ?? []) as Element[])
    .filter((child) => child.type === 'element' && child.name !== 'w:tcPr')
    .map((child) => {
      const res = one(h, child as any, node as any)
      return Array.isArray(res) ? res : res ? [res] : []
    })
    .filter((block) => block.length > 0)

  const separator = h.tabularx?.width ? [m('newline'), SP] : [s(' ')]
  return blocks.flatMap((block, index) => (index === 0 ? block : [...separator, ...block]))
}
