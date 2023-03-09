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
import { document, Text } from './ooxml/wordprocessingml/main.js'

export type Root = XastRoot & {
  /**
   * The name of the source file for this document.
   *
   * This is used for stringifying the document.
   *
   * @example 'word/document.xml'
   */
  source?: string
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
  attributes: Record<string,never>
  children: Footnote[]
}
export type FootnoteContent = Footnote['children'][number]
export interface Footnote extends Parent {
  name: 'w:footnote'
  attributes: Record<string,never>
  children: (P | Sdt)[]
}
export type SdtContents = Sdt['children'][number]
export interface Sdt extends Parent {
  name: 'w:sdt'
  attributes: Record<string,never>
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
  attributes: Record<string,never>
  children: (Body | Background | Footnotes)[]
}
export interface Background extends Parent {
  name: 'w:background'
}
export type BodyContent = Body['children'][number]
export interface Body extends Parent {
  name: 'w:body'
  attributes: Record<string,never>
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
  attributes: Record<string,never>
  children: [PPr, R]
}

export type RContent = R['children'][number]
export interface R extends Parent {
  name: 'w:r'
  attributes: Record<string,never>
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
  attributes: Record<string,never>
  children: (TblPr | TblGrid | Tr)[]
}
export interface TblPr extends Parent {
  name: 'w:tblPr'
}
export type TblGridContent = GridCol
export interface TblGrid extends Parent {
  name: 'w:tblGrid'
  attributes: Record<string,never>
  children: GridCol[]
}
export interface GridCol extends TagLiteral {
  name: 'w:gridCol'
  attributes: { 'w:w': string }
}
export type TrContent = Tr['children'][number]
export interface Tr extends Parent {
  name: 'w:tr'
  attributes: Record<string,never>
  children: (TrPr | Tc)[]
}
export interface TrPr extends Parent {
  name: 'w:trPr'
}
export type TcContent = Tc['children'][number]
export interface Tc extends Parent {
  name: 'w:tc'
  attributes: Record<string,never>
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
export type ArrayValueMaybe<T extends any[] | ArrayLike<any> | Record<any, any>> = T extends any[]
  ? ValuesType<NoUndefined<T>>
  : NoUndefined<T>
export type AllTypes<T extends any[] | ArrayLike<any> | Record<any, any>> = ArrayValueMaybe<
  ValuesType<T>
>

export type RequiredMap<T extends any[] | ArrayLike<any> | Record<any, any>> = AllTypes<T>
