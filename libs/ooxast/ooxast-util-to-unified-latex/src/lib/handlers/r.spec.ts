import { describe, expect, it } from 'vitest'

import { arg, m, s } from '@unified-latex/unified-latex-builder'
import { R } from 'ooxast'
// import { r } from './r.js'
import { toUnifiedLatex } from '../ooxast-util-to-unified-latex.js'
import { toString } from '@unified-latex/unified-latex-util-to-string'

const makeR = (text: string, styles: string[]) =>
  ({
    type: 'element',
    name: 'w:r',
    attributes: {},
    children: [
      {
        type: 'element',
        name: 'w:rPr',
        attributes: {},
        children: styles.map((style) => ({
          type: 'element',
          name: `w:${style}`,
          attributes: {},
          children: [],
        })),
      },
      {
        type: 'element',
        name: 'w:t',
        attributes: {},
        children: [
          {
            type: 'text',
            value: text,
          },
        ],
      },
    ],
  } as R)

describe('r', () => {
  it('should return textbf for w:b', () => {
    const rNode = makeR('Bold', ['b'])
    const result = toUnifiedLatex(rNode, { document: false })
    expect(result.content).toEqual([m('textbf', 'Bold')])
  })

  it('should return emph for w:i by default', () => {
    const rNode = makeR('Italic', ['i'])
    const result = toUnifiedLatex(rNode, { document: false })
    expect(result.content).toEqual([m('emph', 'Italic')])
  })

  it('should return textit for w:i if the option is set', () => {
    const rNode = makeR('Italic', ['i'])
    const result = toUnifiedLatex(rNode, { italics: 'textit', document: false })
    expect(result.content).toEqual([m('textit', 'Italic')])
  })

  it('should return \\textbf{\\emph} for w:i and w:b', () => {
    const rNode = makeR('Bold Italic', ['i', 'b'])
    const result = toUnifiedLatex(rNode, { document: false })
    expect(result.content).toEqual([m('textbf', m('emph', 'Bold Italic'))])
  })

  it('should return \\emph{\\textbf} for w:b and w:i', () => {
    const rNode = makeR('Italic Bold', ['b', 'i'])
    const result = toUnifiedLatex(rNode, { document: false })
    expect(result.content).toEqual([m('emph', m('textbf', 'Italic Bold'))])
  })

  it('should return \\uline for w:u', () => {
    const rNode = makeR('Underline', ['u'])
    const result = toUnifiedLatex(rNode, { document: false })
    expect(result.content).toEqual([m('underline', 'Underline')])
  })

  it('should return \\sout for w:strike', () => {
    const rNode = makeR('Strike', ['strike'])
    const result = toUnifiedLatex(rNode, { document: false })
    expect(result.content).toEqual([m('sout', 'Strike')])
  })

  it('should return \\textsubscript for w:vertAlign with w:val="subscript"', () => {
    const rNode = makeR('Subscript', ['vertAlign'])
    rNode.children[0].children[0].attributes = { 'w:val': 'subscript' }
    const result = toUnifiedLatex(rNode, { document: false })
    expect(result.content).toEqual([m('textsubscript', 'Subscript')])
  })

  it('should return \\textsuperscript for w:vertAlign with w:val="superscript"', () => {
    const rNode = makeR('Superscript', ['vertAlign'])
    rNode.children[0].children[0].attributes = { 'w:val': 'superscript' }
    const result = toUnifiedLatex(rNode, { document: false })
    expect(result.content).toEqual([m('textsuperscript', 'Superscript')])
  })

  it('should return {\\color[HTML]{FF0000}Red} for w:color with w:val="FF0000"', () => {
    const rNode = makeR('Red', ['color'])
    rNode.children[0].children[0].attributes = { 'w:val': 'FF0000' }
    const result = toUnifiedLatex(rNode, { document: false })
    expect(toString(result)).toEqual('{\\color[HTML]{FF0000}Red}')
  })

  it('should not colour text for w:color with w:val="auto"', () => {
    const rNode = makeR('Auto', ['color'])
    rNode.children[0].children[0].attributes = { 'w:val': 'auto' }
    const result = toUnifiedLatex(rNode, { document: false })
    expect(toString(result)).toEqual('Auto')
  })

  it('should return \\colorbox{gray}{Red} for w:shd with a w:fill', () => {
    const rNode = makeR('Red', ['shd'])
    rNode.children[0].children[0].attributes = { 'w:fill': 'FF0000' }
    const result = toUnifiedLatex(rNode, { document: false })
    expect(toString(result)).toEqual('\\colorbox{gray}{Red}')
  })

  it('should ignore toggles that are switched off (w:val="false", "0", "off")', () => {
    for (const val of ['false', '0', 'off']) {
      const rNode = makeR('Plain', ['b'])
      rNode.children[0].children[0].attributes = { 'w:val': val }
      const result = toUnifiedLatex(rNode, { document: false })
      expect(toString(result)).toEqual('Plain')
    }
  })

  it('should return \\fbox{border} for w:bdr and w:sz not 0', () => {
    const rNode = makeR('Border', ['bdr'])
    rNode.children[0].children[0].attributes = { 'w:sz': '1' }
    const result = toUnifiedLatex(rNode, { document: false })
    expect(result.content).toEqual([m('fbox', 'Border')])
  })
})
