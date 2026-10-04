import { arg, args, m } from '@unified-latex/unified-latex-builder'
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
    const color = highlightColors[`${prop['w:val']}`]
    if (!color) {
      return text
    }
    text = m('colorbox', [arg(color), arg(Array.isArray(text) ? text : [text])])
    return text
  },
  color: (h, text, prop, node) => {
    if (!h.xcolor) {
      return text
    }
    const color = `${prop['w:val']}`

    // `w:color/@w:val` is a hex RGB value (or `auto`): xcolor needs the HTML model for it,
    // `\color{FF0000}` is an undefined colour
    if (!/^[0-9a-f]{6}$/i.test(color) || color === '000000') {
      return text
    }
    text = {
      type: 'group',
      content: [
        m('color', args(['HTML', color.toUpperCase()], { braces: '[]{}' })),
        ...(Array.isArray(text) ? text : [text]),
      ],
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

/**
 * `w:highlight/@w:val` (ST_HighlightColor) as xcolor colours. Most of them (`darkBlue`,
 * `lightGray`…) are not xcolor colour names.
 */
const highlightColors: Record<string, string> = {
  yellow: 'yellow',
  green: 'green',
  cyan: 'cyan',
  magenta: 'magenta',
  blue: 'blue',
  red: 'red',
  black: 'black',
  white: 'white',
  darkBlue: 'blue!50!black',
  darkCyan: 'cyan!50!black',
  darkGreen: 'green!50!black',
  darkMagenta: 'magenta!50!black',
  darkRed: 'red!50!black',
  darkYellow: 'yellow!50!black',
  darkGray: 'darkgray',
  lightGray: 'lightgray',
}
