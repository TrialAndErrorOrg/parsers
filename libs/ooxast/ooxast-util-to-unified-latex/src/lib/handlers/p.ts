import { Macro } from '@unified-latex/unified-latex-types'
import { P } from 'ooxast'
import { SP, m, s, arg, env } from '@unified-latex/unified-latex-builder'
import { all } from '../all.js'
import { H, Handle } from '../types.js'
import { getPStyle } from '../util/get-pstyle.js'
import { updateRenderInfo } from '@unified-latex/unified-latex-util-render-info'
import { PB } from '../util/PB.js'
import { toString } from 'xast-util-to-string'
import { selectAll } from 'xast-util-select'
import type { Element } from 'xast'
import { getHeadingLevel, getStyleName } from '../util/style-names.js'

export { getHeadingLevel }

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

export const p: Handle = (h: H, p: P) => {
  if (h.inTable || h.simpleParagraph) {
    return all(h, p)
  }

  const style = getPStyle(p)
  // const res = h(p, 'p', { ...(style ? { style } : {}) }, all(h, p))
  if (!style) {
    return [PB, ...paragraphContent(h, p), PB]
  }

  const styleName = getStyleName(style, h.styleNames).toLowerCase()

  if (styleName.includes('quote')) {
    return env('quote', all(h, p))
  }

  if (styleName === 'title') {
    // the first non-empty Title paragraph is the title (Google Docs exports an empty one too)
    const title = toString(p).trim()
    if (title && !h.title) {
      h.title = title
    }
    return []
  }

  const headingLevel = getHeadingLevel(style, h.styleNames)

  if (!headingLevel) {
    return [PB, ...paragraphContent(h, p), PB]
  }

  const headingMacroName =
    headingList[Math.min(headingLevel + h.sectionDepth, headingList.length - 1)]

  const res = m(headingMacroName, arg(all(h, p), { braces: '{}' }))
  updateRenderInfo(res, { breakAround: true })

  return [PB, res, PB]
}

/**
 * The content of a body paragraph.
 *
 * A picture gets a `figure` environment only if it is on a paragraph of its own (no text). A
 * picture in running text (an ORCID icon next to a name, a symbol) stays an inline
 * `\includegraphics`: a float there would not compile inside `\href`, a heading or a table.
 */
function paragraphContent(h: H, p: P) {
  const hasText = (selectAll('w\\:t', p) as Element[]).some((t) => toString(t).trim() !== '')
  const before = h.blockDrawing
  h.blockDrawing = !hasText
  const content = all(h, p)
  h.blockDrawing = before
  return content
}
