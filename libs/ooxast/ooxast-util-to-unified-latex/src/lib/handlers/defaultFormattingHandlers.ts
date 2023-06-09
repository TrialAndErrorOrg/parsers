import { m } from '@unified-latex/unified-latex-builder'
import type { FormattingHandlers } from '../types.js'
import type { Group } from '@unified-latex/unified-latex-types'

export const defaultFormattingHandlers: FormattingHandlers = {
  i: (h, text, prop, node) => {
    text = m(h.italics, text)
    return text
  },
  b: (h, text, prop, node) => {
    text = m(h.inMath ? 'mathbf' : 'textbf', text)
    return text
  },
  u: (h, text, prop, node) => {
    text = m('underline', text)
    return text
  },
  strike: (h, text, prop, node) => {
    text = m(h.strikethrough, text)
    return text
  },
  dstrike: (h, text, prop, node) => {
    text = m(h.strikethrough, text)
    return text
  },
  vertAlign: (h, text, prop, node) => {
    //if (!isVert(prop)) continue
    if (prop['w:val'] === 'superscript') {
      text = m('textsuperscript', text)
      return text
    }
    if (prop['w:val'] === 'subscript') {
      text = m('textsubscript', text)
      return text
    }
    return text
  },
  smallCaps: (h, text, prop, node) => {
    text = m('textsc', text)
    return text
  },
  highlight: (h, text, prop, node) => {
    if (!h.xcolor) {
      return text
    }
    text = m('colorbox', [`${prop['w:val']}`, ...(Array.isArray(text) ? text : [text])])
    return text
  },
  color: (h, text, prop, node) => {
    if (!h.xcolor) {
      return text
    }
    const color = prop['w:val']

    if (color === 'auto' || color === '000000') {
      return text
    }
    text = {
      type: 'group',
      content: [m('color', `${color}`), [...(Array.isArray(text) ? text : [text])]],
    } as Group
    return text
  },
  bdr: (h, text, prop, node) => {
    if (h.inMath) {
      return text
    }
    text = m('fbox', text)
    return text
  },
  shd: (h, text, prop, node) => {
    if (!h.xcolor) {
      return text
    }
    if (h.inMath || !('w:fill' in prop)) {
      return text
    }

    const shdColor = prop['w:fill']

    if (!shdColor || shdColor === 'auto' || shdColor === '000000') {
      return text
    }

    text = m('colorbox', ['gray', ...(Array.isArray(text) ? text : [text])])
    return text
  },
}
