import { Macro } from '@unified-latex/unified-latex-types'
import { P } from 'ooxast'
import { SP, m, s, arg } from '@unified-latex/unified-latex-builder'
import { all } from '../all'
import { H, Handle } from '../types'
import { getPStyle } from '../util/get-pstyle'
import { updateRenderInfo } from '@unified-latex/unified-latex-util-render-info'
import { PB } from '../util/PB'

const headingList = [
  'part',
  'chapter',
  'section',
  'subsection',
  'subsubsection',
  'paragraph',
  'subparagraph',
  'textbf',
]

export function getHeadingLevel(p: P) {
  const lastNumber = getPStyle(p)?.toLowerCase()?.slice(-1)
  return !lastNumber ? null : parseInt(lastNumber, 10)
}

export const p: Handle = (h: H, p: P) => {
  if (h.inTable) {
    return all(h, p)
  }
  const style = getPStyle(p)
  // const res = h(p, 'p', { ...(style ? { style } : {}) }, all(h, p))
  if (!style) return [PB, ...all(h, p), PB]

  const headingLevel = getHeadingLevel(p)

  if (!headingLevel) return [PB, ...all(h, p), PB]

  const headingMacroName =
    headingList[Math.min(headingLevel + h.sectionDepth, headingList.length - 1)]

  const res = m(headingMacroName, arg(all(h, p), { braces: '{}' }))
  updateRenderInfo(res, { breakAround: true })

  return [PB, res, PB]
}
