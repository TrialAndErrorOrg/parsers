import { Color, FldChar, Highlight, R, RPr, Shd, VerticalAlignRun } from 'ooxast'
import { select } from 'xast-util-select'
import { State } from '../state.js'
import { convertElement } from 'xast-util-is-element'
import { toString } from 'xast-util-to-string'
import { strong, emphasis, strike, html } from 'mdast-builder'
import { Emphasis, HTML, Strong, Text } from 'mdast'
import { Delete } from 'mdast'
import { Handle } from '../types.js'

//const isVert = convertElement<VerticalAlignRun>('w:vertAlign')

export const r: Handle = (state: State, node: R) => {
  const instrText = select('w\\:instrText', node)
  if (instrText) {
    state.deleteNextRun = true
    return state.all(node)
  }

  const fldChar = select('w\\:fldChar', node)
  const isFldChar = convertElement<FldChar>('w:fldChar')
  if (isFldChar(fldChar)) {
    if (fldChar.attributes?.['w:fldCharType'] === 'end') {
      state.deleteNextRun = false
      return
    }
    return
  }

  const dontProc = select('w\\:footnoteReference, w\\:endnoteReference, w\\:drawing', node)

  if (dontProc) {
    const content = state.all(node)
    return content
  }

  if (state.deleteNextRun) {
    state.deleteNextRun = false
    return
  }

  const props = select('w\\:rPr', node) as RPr

  const text = { type: 'text', value: toString(node) } as Text
  if (!text) return

  if (!props) return text

  const formattedText = props.children.reduce((text, prop) => {
    switch (prop.name.replace(/\w+:/, '')) {
      case 'i':
        text = emphasis(text) as Emphasis
        return text
      case 'b':
        text = strong(text) as Strong
        return text
      case 'u':
        text = html(`<u>${text}</u>`) as HTML
        return text
      case 'strike':
      case 'dstrike':
        text = strike(text) as Delete
        return text
      case 'vertAlign':
        //if (!isVert(prop)) continue
        // @ts-expect-error aaaa
        if (prop.attributes['w:val'] === 'superscript') {
          text = html(`<sup>${text}</sup>`) as HTML
          return text
        }
        // @ts-expect-error aaaa
        if (prop.attributes['w:val'] === 'subscript') {
          text = html(`<sub>${text}</sub>`) as HTML
          return text
        }
        return text
      // case 'smallCaps':
      //   text = m('textsc', text)
      //   return text
      // case 'highlight': {
      //   if (!state.xcolor) {
      //     return text
      //   }
      //   text = m('colorbox', [
      //     (prop as Highlight).attributes['w:val'],
      //     ...(Array.isArray(text) ? text : [text]),
      //   ])
      //   return text
      // }
      // case 'color': {
      //   if (!state.xcolor) {
      //     return text
      //   }
      //   const color = (prop as Color).attributes['w:val']

      //   if (color === 'auto' || color === '000000') {
      //     return text
      //   }
      //   text = {
      //     type: 'group',
      //     content: [m('color', [...(Array.isArray(text) ? text : [text])])],
      //   } as Group
      //   return text
      // }
      // case 'bdr': {
      //   if (state.inMath) {
      //     return text
      //   }
      //   text = m('fbox', text)
      //   return text
      // }
      // case 'shd': {
      //   if (state.inMath) {
      //     return text
      //   }

      //   const shdColor = (prop as Shd).attributes['w:fill']

      //   if (!shdColor || shdColor === 'auto' || shdColor === '000000') {
      //     return text
      //   }

      //   text = m('colorbox', ['gray', ...(Array.isArray(text) ? text : [text])])
      //   return text
      // }
      default:
        return text
    }
  }, text as HTML | Emphasis | Strong | Delete | Text)
  return formattedText
}
