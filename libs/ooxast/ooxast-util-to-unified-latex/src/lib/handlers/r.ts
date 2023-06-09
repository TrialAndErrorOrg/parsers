import { Color, FldChar, Highlight, R, RPr, Shd, VerticalAlignRun, Parent } from 'ooxast'
import { select } from 'xast-util-select'
import { all } from '../all.js'
import { H, UnifiedLatexNode } from '../types.js'
import { Group, Macro, String as UnifiedLatexString } from '@unified-latex/unified-latex-types'
import { convertElement } from 'xast-util-is-element'
import { m, s } from '@unified-latex/unified-latex-builder'
import { citation } from './citation.js'
import { getRStyle } from 'ooxast-util-get-style'

//const isVert = convertElement<VerticalAlignRun>('w:vertAlign')

export function r(h: H, node: R, parent?: Parent) {
  const instrText = select('w\\:instrText', node)
  if (instrText) {
    // is citation
    return citation(h, instrText, parent)
  }

  const fldChar = select('w\\:fldChar', node)
  const isFldChar = convertElement<FldChar>('w:fldChar')
  if (isFldChar(fldChar)) {
    if (fldChar.attributes?.['w:fldCharType'] === 'end') {
      h.deleteNextRun = false
      return
    }
    return
  }

  const dontProc = select('w\\:footnoteReference, w\\:endnoteReference, w\\:drawing', node)

  if (dontProc) {
    const content = all(h, node)
    return content
  }

  // const drawing = select('w\\:drawing', node)
  // if (drawing) {
  //   return all(h, node)
  // }

  if (h.deleteNextRun) {
    h.deleteNextRun = false
    return
  }

  const props = getRStyle(node)
  const mergedText = all(h, node).reduce((acc, curr) => {
    if (curr.type !== 'string') return acc
    acc = acc + curr.content
    return acc
  }, '')

  const text = s(mergedText)
  if (!props) return text

  if (!mergedText) return

  const formattedText = Object.entries(props).reduce((text, [name, prop]) => {
    if (!prop || !('w:val' in prop) || !prop['w:val'] || prop['w:val'] === '0') {
      return text
    }

    const tagName = name.replace(/\w+:/, '') as keyof typeof h.formattingHandlers
    const handler = h.formattingHandlers[tagName]
    if (handler) {
      text = handler(
        h,
        text,
        // @ts-expect-error TODO: Fix types for formattingHanlder
        prop,
        node,
      )
    }
    return text
  }, text as UnifiedLatexNode | UnifiedLatexNode[])
  return formattedText
}
