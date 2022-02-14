import { ValuesType } from 'utility-types'
import {
  Root as XastRoot,
  Element as XastElement,
  Parent,
  Literal as XastLiteral,
  Attributes as XastAttributes,
  Node as XastNode,
  Instruction,
  Doctype,
} from 'xast'
export type {
  Parent,
  XastNode as Node,
  Instruction,
  XastLiteral as Literal,
  XastAttributes as Attributes,
}
import { document, Text } from './ooxml/wordprocessingml/main'

export type Root = XastRoot & {
  children: (RequiredMap<document> | Doctype | Instruction | Text)[]
}
export interface TagLiteral extends XastElement {
  children: []
}
/*
export type TableContent = TblContent | TrContent | TcContent
export type ParagraphContent = PContent | RContent | Text
export type Content =
  | TableContent
  | ParagraphContent
  | TopLevelDocumentContent
  | BodyContent
  | FootnoteContent
  | FootnotesContent
// export interface Parent extends Omit<XastParent, 'children'> {
//   children: (XastElement['children'][number] | TagLiteral)[]
// }
*/

/*
export type FootnotesContent = Footnotes['children'][number]
export interface Footnotes extends Parent {
  name: 'w:footnotes'
  attributes: {}
  children: Footnote[]
}
export type FootnoteContent = Footnote['children'][number]
export interface Footnote extends Parent {
  name: 'w:footnote'
  attributes: {}
  children: (P | Sdt)[]
}
export type SdtContents = Sdt['children'][number]
export interface Sdt extends Parent {
  name: 'w:sdt'
  attributes: {}
  children: (SdtPr | SdtEndPr | SdtContent)[]
}
export interface SdtPr extends Parent {
  name: 'w:sdtPr'
}
export interface SdtEndPr extends Parent {
  name: 'w:sdtEndPr'
}
export interface SdtContent extends Parent {
  name: 'w:sdtContent'
}
export type TopLevelDocumentContent = Document['children'][number]
export interface Document extends Parent {
  name: 'w:document'
  attributes: {}
  children: (Body | Background | Footnotes)[]
}
export interface Background extends Parent {
  name: 'w:background'
}
export type BodyContent = Body['children'][number]
export interface Body extends Parent {
  name: 'w:body'
  attributes: {}
  children: (P | SectPr | Tbl)[]
}

///**
// * Stores information about page size and such.
//
export interface SectPr extends Parent {
  name: 'w:sectPr'
}

export interface Text extends XastLiteral {
  type: 'text'
  value: string
}
export type PContent = P['children'][number]
export interface P extends Parent {
  name: 'w:p'
  attributes: {}
  children: [PPr, R]
}

export type RContent = R['children'][number]
export interface R extends Parent {
  name: 'w:r'
  attributes: {}
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
  children: []
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
export interface Drawing extends Parent {
  name: 'w:drawing'
}

export interface T extends Parent {
  name: 'w:t'
  attributes: {
    'xml:space'?: 'preserve'
  }
  children: [Text]
}
/**
 * Run properties

export interface RPr extends Parent {
  name: 'w:rPr'
}
/**
 * Paragraph properties

export interface PPr extends Parent {
  name: 'w:rPr'
}

export type TblContent = Tbl['children'][number]
export interface Tbl extends Parent {
  name: 'w:tbl'
  attributes: {}
  children: (TblPr | TblGrid | Tr)[]
}
export interface TblPr extends Parent {
  name: 'w:tblPr'
}
export type TblGridContent = GridCol
export interface TblGrid extends Parent {
  name: 'w:tblGrid'
  attributes: {}
  children: GridCol[]
}
export interface GridCol extends TagLiteral {
  name: 'w:gridCol'
  attributes: { 'w:w': string }
}
export type TrContent = Tr['children'][number]
export interface Tr extends Parent {
  name: 'w:tr'
  attributes: {}
  children: (TrPr | Tc)[]
}
export interface TrPr extends Parent {
  name: 'w:trPr'
}
export type TcContent = Tc['children'][number]
export interface Tc extends Parent {
  name: 'w:tc'
  attributes: {}
  children: (P | Tbl | TcPr)[]
}
export interface TcPr extends Parent {
  name: 'w:tcPr'
}

export type {
  XastParent as Parent,
  XastAttributes as Attributes,
  XastNode as Node,
}

*/
export type NoUndefined<T> = Exclude<T, undefined>
export type ArrayValueMaybe<T> = T extends any[]
  ? ValuesType<NoUndefined<T>>
  : NoUndefined<T>
export type AllTypes<T> = ArrayValueMaybe<ValuesType<T>>

export type RequiredMap<T> = AllTypes<T>
