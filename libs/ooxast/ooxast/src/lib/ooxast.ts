import {
  Root as XastRoot,
  Element as XastElement,
  Parent as XastParent,
  Literal as XastLiteral,
  Attributes as XastAttributes,
  Node as XastNode,
} from 'xast'

export interface TagLiteral extends XastElement {
  children: []
}

export interface Element extends Omit<XastElement, 'children'> {
  children: (XastElement['children'][number] | TagLiteral)[]
}

export interface Text extends XastLiteral {
  type: 'text'
  value: string
}
export interface P extends Element {
  name: 'w:p'
  children: [PPr, R]
}
export interface R extends Element {
  name: 'w:r'
  children: (
    | RPr
    | T
    | Br
    | Cr
    | Drawing
    | NoBreakHyphen
    | SoftHyphen
    | Sym
    | Tab
  )[]
}
export interface Br extends TagLiteral {
  name: 'w:br'
}
export interface Cr extends TagLiteral {
  name: 'w:cr'
}
export interface Sym extends TagLiteral {
  name: 'w:sym'
  attributes: { char: string; font: string }
}

export interface Tab extends TagLiteral {
  name: 'w:tab'
}
export interface NoBreakHyphen extends TagLiteral {
  name: 'w:noBreakHyphen'
}

export interface SoftHyphen extends TagLiteral {
  name: 'w:softHyphen'
}
export interface Drawing extends Element {
  name: 'w:drawing'
}

export interface T extends Element {
  name: 'w:t'
  attributes: {
    'xml:space'?: 'preserve'
  }
  children: [Text]
}
/**
 * Run properties
 */
export interface RPr extends Element {
  name: 'w:rPr'
}
/**
 * Paragraph properties
 */
export interface PPr extends Element {
  name: 'w:rPr'
}

export interface Tbl extends Element {
  name: 'w:tbl'
  children: (TblPr | TblGrid | Tr)[]
}
export interface TblPr extends Element {
  name: 'w:tblPr'
}
export interface TblGrid extends Element {
  name: 'w:tblGrid'
  children: GridCol[]
}
export interface GridCol extends TagLiteral {
  name: 'w:gridCol'
  attributes: { 'w:w': string }
}
export interface Tr extends Element {
  name: 'w:tr'
  children: (TrPr | Tc)[]
}
export interface TrPr extends Element {
  name: 'w:trPr'
}
export interface Tc extends Element {
  name: 'w:tc'
  children: (P | Tbl | TcPr)[]
}
export interface TcPr extends Element {
  name: 'w:tcPr'
}

export type {
  XastRoot as Root,
  XastParent as Parent,
  XastAttributes as Attributes,
  XastNode as Node,
}
