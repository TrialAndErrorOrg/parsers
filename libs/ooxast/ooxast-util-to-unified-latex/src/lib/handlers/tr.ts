import { H, UnifiedLatexNode } from '../types'
import { Row, Tc } from 'ooxast'
import { all } from '../all'
import { PB } from '../util/PB'
import { select } from 'xast-util-select'
import { tc } from './tc'
import { m, s, SP } from '@unified-latex/unified-latex-builder'

export function tr(h: H, tr: Row) {
  const rowcontents =
    tr.children?.filter((node): node is Tc => node.name === 'w:tc') ?? []

  let topBorderCounter = 0

  const row = rowcontents.flatMap((cell, idx) => {
    const borderTop =
      parseInt(select('w\\:top', cell)?.attributes?.['w:sz'] || '0') > 0

    if (borderTop) {
      topBorderCounter++
    }

    return [
      SP,
      ...tc(h, cell),
      SP,
      ...(idx === rowcontents.length - 1 ? [s('\\\\'), PB] : [s('&')]),
    ]
  })

  if (topBorderCounter === rowcontents.length) {
    row.unshift(m('hline'))
  }

  return row
}
