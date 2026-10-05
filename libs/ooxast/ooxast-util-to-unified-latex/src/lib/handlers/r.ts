import { Color, FldChar, Highlight, R, RPr, Shd, VerticalAlignRun, Parent } from 'ooxast'
import { select } from 'xast-util-select'
import { all } from '../all.js'
import { one } from '../one.js'
import { H, UnifiedLatexNode } from '../types.js'
import { Group, Macro, String as UnifiedLatexString } from '@unified-latex/unified-latex-types'
import { convertElement } from 'xast-util-is-element'
import { m, s, SP } from '@unified-latex/unified-latex-builder'
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
  const segments = runSegments(h, node)

  if (!segments.some(Boolean)) {
    return props ? undefined : s('')
  }

  const formatted = segments.map((segment) => {
    if (!segment) return []
    const text = s(segment)
    if (!props) return [text]

    const formattedText = Object.entries(props).reduce(
      (text, [name, prop]) => {
        if (!prop || !('w:val' in prop) || isOff(prop['w:val'])) {
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
      },
      text as UnifiedLatexNode | UnifiedLatexNode[],
    )

    return Array.isArray(formattedText) ? formattedText : [formattedText]
  })

  if (formatted.length === 1) {
    const [only] = formatted
    return only.length === 1 ? only[0] : only
  }

  // line breaks (`w:br`) inside the run: format each line on its own, `\newline` in between
  return formatted.flatMap((nodes, index) =>
    index === 0 ? nodes : h.inTable ? [s(' '), ...nodes] : [m('newline'), SP, ...nodes],
  )
}

/**
 * The text of a run, split at its line breaks.
 *
 * A run can hold several `w:t`s with `w:br` (line break), `w:cr` and `w:tab` in between
 * (`ooxast-util-remove-rsid` also merges runs that way). Page and column breaks are dropped, a
 * tab becomes a space.
 */
function runSegments(h: H, node: R): string[] {
  const segments = ['']

  for (const child of node.children ?? []) {
    if (child.type === 'element') {
      const name = child.name.replace(/\w+:/, '')
      if (name === 'rPr') continue
      if (name === 'br' || name === 'cr') {
        const type = (child as { attributes?: Record<string, string> }).attributes?.['w:type']
        if (type === 'page' || type === 'column') continue
        segments.push('')
        continue
      }
      if (name === 'tab') {
        segments[segments.length - 1] += ' '
        continue
      }
    }

    const result = one(h, child as any, node as any)
    for (const res of Array.isArray(result) ? result : result ? [result] : []) {
      if (res.type === 'string') {
        segments[segments.length - 1] += res.content
      }
    }
  }

  return segments
}

/**
 * Whether a run property is switched off.
 *
 * Toggle properties (`w:b`, `w:i`, `w:strike`…) are `ST_OnOff`: `<w:b w:val="0"/>`,
 * `"false"` and `"off"` all mean *not bold*. Google Docs exports write `w:val="false"`.
 * `w:u w:val="none"` means no underline.
 */
export function isOff(val: unknown) {
  if (val === undefined || val === null || val === '' || val === false) return true
  return ['0', 'false', 'off', 'none'].includes(String(val).toLowerCase())
}
