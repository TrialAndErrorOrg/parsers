import { Color, FldChar, Highlight, R, RPr, Shd, VerticalAlignRun, Parent } from 'ooxast'
import { select } from 'xast-util-select'
import { all } from '../all.js'
import { H, UnifiedLatexNode } from '../types.js'
import { Group, Macro, String as UnifiedLatexString } from '@unified-latex/unified-latex-types'
import { convertElement } from 'xast-util-is-element'
import { m, s } from '@unified-latex/unified-latex-builder'
import { citation } from './citation.js'

//const isVert = convertElement<VerticalAlignRun>('w:vertAlign')

export function r(h: H, node: R, parent?: Parent) {
  const instrText = select('w\\:instrText', node)
  if (instrText) {
    // is citation
    console.log({ instrText, parent })
    h.deleteNextRun = true
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

  const props = select('w\\:rPr', node) as RPr
  const mergedText = all(h, node).reduce((acc, curr) => {
    if (curr.type !== 'string') return acc
    acc = acc + curr.content
    return acc
  }, '')

  const text = s(mergedText)
  if (!props) return text

  if (!mergedText) return

  const formattedText = props.children.reduce((text, prop) => {
    switch (prop.name.replace(/\w+:/, '')) {
      case 'i':
        text = m(h.italics, text)
        return text
      case 'b':
        text = m(h.inMath ? 'mathbf' : 'textbf', text)
        return text
      case 'u':
        text = m('underline', text)
        return text
      case 'strike':
      case 'dstrike':
        text = m(h.strikethrough, text)
        return text
      case 'vertAlign':
        //if (!isVert(prop)) continue
        // @ts-expect-error aaaa
        if (prop.attributes['w:val'] === 'superscript') {
          text = m('textsuperscript', text)
          return text
        }
        // @ts-expect-error aaaa
        if (prop.attributes['w:val'] === 'subscript') {
          text = m('textsubscript', text)
          return text
        }
        return text
      case 'smallCaps':
        text = m('textsc', text)
        return text
      case 'highlight': {
        if (!h.xcolor) {
          return text
        }
        text = m('colorbox', [
          (prop as Highlight).attributes['w:val'],
          ...(Array.isArray(text) ? text : [text]),
        ])
        return text
      }
      case 'color': {
        if (!h.xcolor) {
          return text
        }
        const color = (prop as Color).attributes['w:val']

        if (color === 'auto' || color === '000000') {
          return text
        }
        text = {
          type: 'group',
          content: [m('color', color), [...(Array.isArray(text) ? text : [text])]],
        } as Group
        return text
      }
      case 'bdr': {
        if (h.inMath) {
          return text
        }
        text = m('fbox', text)
        return text
      }
      case 'shd': {
        if (h.inMath) {
          return text
        }

        const shdColor = (prop as Shd).attributes['w:fill']

        if (!shdColor || shdColor === 'auto' || shdColor === '000000') {
          return text
        }

        text = m('colorbox', ['gray', ...(Array.isArray(text) ? text : [text])])
        return text
      }
      default:
        return text
    }
  }, text as UnifiedLatexNode | UnifiedLatexNode[])
  return formattedText
}
