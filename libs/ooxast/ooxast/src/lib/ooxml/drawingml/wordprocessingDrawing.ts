import * as Primitive from '../../xml-primitives'
import * as a from './main'
import * as dpct from './picture'
import * as m from '../officeDocument/math'
import * as r from '../officeDocument/relationships'
import * as w from '../wordprocessingml/main'

import { RequiredMap } from '../../ooxast'
// Source files:
// http://localhost:3000/dml-wordprocessingDrawing.xsd

import { Node as UnistNode } from 'unist'
export interface Anchor extends UnistNode {
  type: 'element'
  name: 'wp:anchor'
  attributes: {
    'wp:allowOverlap': string
    'wp:behindDoc': string
    'wp:distB'?: string
    'wp:distL'?: string
    'wp:distR'?: string
    'wp:distT'?: string
    'wp:hidden'?: string
    'wp:layoutInCell': string
    'wp:locked': string
    'wp:relativeHeight': string
    $simplePos: string
  }
  children: RequiredMap<AnchorMap>[]
}

export interface AnchorMap {
  cNvGraphicFramePr?: a.NonVisualGraphicFrameProperties
  docPr: a.NonVisualDrawingProps
  effectExtent?: EffectExtent
  extent: a.PositiveSize2D
  graphic: a.GraphicalObject
  positionH: PosH
  positionV: PosV
  simplePos: a.Point2D
  wrapNone: WrapNone
  wrapSquare: WrapSquare
  wrapThrough: WrapThrough
  wrapTight: WrapTight
  wrapTopAndBottom: WrapTopBottom
}

export interface EffectExtent extends UnistNode {
  type: 'element'
  name: 'wp:effectExtent'
  attributes: {
    'wp:b': string
    'wp:l': string
    'wp:r': string
    'wp:t': string
  }
  children: []
}

export interface GraphicFrame extends UnistNode {
  type: 'element'
  name: 'wp:graphicFrame'
  attributes: Record<string, never>
  children: RequiredMap<GraphicFrameMap>[]
}

export interface GraphicFrameMap {
  cNvFrPr: a.NonVisualGraphicFrameProperties
  cNvPr: a.NonVisualDrawingProps
  extLst?: a.OfficeArtExtensionList
  graphic: a.GraphicalObject
  xfrm: a.Transform2D
}

export interface Inline extends UnistNode {
  type: 'element'
  name: 'wp:inline'
  attributes: {
    'wp:distB'?: string
    'wp:distL'?: string
    'wp:distR'?: string
    'wp:distT'?: string
  }
  children: RequiredMap<InlineMap>[]
}

export interface InlineMap {
  cNvGraphicFramePr?: a.NonVisualGraphicFrameProperties
  docPr: a.NonVisualDrawingProps
  effectExtent?: EffectExtent
  extent: a.PositiveSize2D
  graphic: a.GraphicalObject
}

export interface LinkedTextboxInformation extends UnistNode {
  type: 'element'
  name: 'wp:linkedTextboxInformation'
  attributes: {
    'wp:id': string
    'wp:seq': string
  }
  children: RequiredMap<LinkedTextboxInformationMap>[]
}

export interface LinkedTextboxInformationMap {
  extLst?: a.OfficeArtExtensionList
}

export interface PosH extends UnistNode {
  type: 'element'
  name: 'wp:posH'
  attributes: {
    'wp:relativeFrom': RelFromHVal
  }
  children: RequiredMap<PosHMap>[]
}

export interface SpecificLiteral<val extends string = string> {
  type: 'text'
  value: val
}
export interface PosHMap {
  align: SpecificLiteral<AlignHVal>
  posOffset: SpecificLiteral<string>
}

export interface PosV extends UnistNode {
  type: 'element'
  name: 'wp:posV'
  attributes: {
    'wp:relativeFrom': RelFromVVal
  }
  children: RequiredMap<PosVMap>[]
}

export interface PosVMap {
  align: SpecificLiteral<AlignVVal>
  posOffset: SpecificLiteral<string>
}

export interface TextboxInfo extends UnistNode {
  type: 'element'
  name: 'wp:textboxInfo'
  attributes: {
    'wp:id'?: string
  }
  children: RequiredMap<TextboxInfoMap>[]
}

export interface TextboxInfoMap {
  extLst?: a.OfficeArtExtensionList
  txbxContent: TxbxContent
}

export interface TxbxContent extends UnistNode {
  type: 'element'
  name: 'wp:txbxContent'
  attributes: Record<string, never>
  children: RequiredMap<TxbxContentMap>[]
}

export interface TxbxContentMap {
  altChunk?: w.AltChunk[]
  bookmarkEnd?: w.MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: w.Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: w.MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: w.MarkupRange<'commentRangeStart'>[]
  customXml?: w.CustomXmlBlock[]
  customXmlDelRangeEnd?: w.Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: w.TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: w.Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: w.TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: w.Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: w.TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: w.Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: w.TrackChange<'customXmlMoveToRangeStart'>[]
  del?: w.RunTrackChange<'del'>[]
  ins?: w.RunTrackChange<'ins'>[]
  moveFrom?: w.RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: w.MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: w.MoveBookmark[]
  moveTo?: w.RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: w.MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: w.MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  p?: w.P[]
  permEnd?: w.Perm[]
  permStart?: w.PermStart[]
  proofErr?: w.ProofErr[]
  sdt?: w.SdtBlock[]
  tbl?: w.Tbl[]
}

export interface WordprocessingCanvas extends UnistNode {
  type: 'element'
  name: 'wp:wordprocessingCanvas'
  attributes: Record<string, never>
  children: RequiredMap<WordprocessingCanvasMap>[]
}

export interface WordprocessingCanvasMap {
  bg?: a.BackgroundFormatting
  contentPart?: WordprocessingContentPart[]
  extLst?: a.OfficeArtExtensionList
  graphicFrame?: GraphicFrame[]
  pic?: dpct.Picture[]
  wgp?: WordprocessingGroup[]
  whole?: a.WholeE2oFormatting
  wsp?: WordprocessingShape[]
}

export interface WordprocessingContentPart extends UnistNode {
  type: 'element'
  name: 'wp:wordprocessingContentPart'
  attributes: {
    'wp:bwMode'?: a.BlackWhiteModeVal
    'wp:id': string
  }
  children: RequiredMap<WordprocessingContentPartMap>[]
}

export interface WordprocessingContentPartMap {
  extLst?: a.OfficeArtExtensionList
  nvContentPartPr?: WordprocessingContentPartNonVisual
  xfrm?: a.Transform2D
}

export interface WordprocessingContentPartNonVisual extends UnistNode {
  type: 'element'
  name: 'wp:wordprocessingContentPartNonVisual'
  attributes: Record<string, never>
  children: RequiredMap<WordprocessingContentPartNonVisualMap>[]
}

export interface WordprocessingContentPartNonVisualMap {
  cNvContentPartPr?: a.NonVisualContentPartProperties
  cNvPr?: a.NonVisualDrawingProps
}

export interface WordprocessingGroup extends UnistNode {
  type: 'element'
  name: 'wp:wordprocessingGroup'
  attributes: Record<string, never>
  children: RequiredMap<WordprocessingGroupMap>[]
}

export interface WordprocessingGroupMap {
  cNvGrpSpPr: a.NonVisualGroupDrawingShapeProps
  cNvPr?: a.NonVisualDrawingProps
  contentPart?: WordprocessingContentPart[]
  extLst?: a.OfficeArtExtensionList
  graphicFrame?: GraphicFrame[]
  grpSp?: WordprocessingGroup[]
  grpSpPr: a.GroupShapeProperties
  pic?: dpct.Picture[]
  wsp?: WordprocessingShape[]
}

export interface WordprocessingShape extends UnistNode {
  type: 'element'
  name: 'wp:wordprocessingShape'
  attributes: {
    'wp:normalEastAsianFlow'?: string
  }
  children: RequiredMap<WordprocessingShapeMap>[]
}

export interface WordprocessingShapeMap {
  bodyPr: a.TextBodyProperties
  cNvCnPr: a.NonVisualConnectorProperties
  cNvPr?: a.NonVisualDrawingProps
  cNvSpPr: a.NonVisualDrawingShapeProps
  extLst?: a.OfficeArtExtensionList
  linkedTxbx?: LinkedTextboxInformation
  spPr: a.ShapeProperties
  style?: a.ShapeStyle
  txbx?: TextboxInfo
}

export interface WrapNone extends UnistNode {
  type: 'element'
  name: 'wp:wrapNone'
  children: []
}

export interface WrapPath extends UnistNode {
  type: 'element'
  name: 'wp:wrapPath'
  attributes: {
    'wp:edited'?: string
  }
  children: RequiredMap<WrapPathMap>[]
}

export interface WrapPathMap {
  lineTo: a.Point2D[]
  start: a.Point2D
}

export interface WrapSquare extends UnistNode {
  type: 'element'
  name: 'wp:wrapSquare'
  attributes: {
    'wp:distB'?: string
    'wp:distL'?: string
    'wp:distR'?: string
    'wp:distT'?: string
    'wp:wrapText': WrapTextVal
  }
  children: RequiredMap<WrapSquareMap>[]
}

export interface WrapSquareMap {
  effectExtent?: EffectExtent
}

export interface WrapThrough extends UnistNode {
  type: 'element'
  name: 'wp:wrapThrough'
  attributes: {
    'wp:distL'?: string
    'wp:distR'?: string
    'wp:wrapText': WrapTextVal
  }
  children: RequiredMap<WrapThroughMap>[]
}

export interface WrapThroughMap {
  wrapPolygon: WrapPath
}

export interface WrapTight extends UnistNode {
  type: 'element'
  name: 'wp:wrapTight'
  attributes: {
    'wp:distL'?: string
    'wp:distR'?: string
    'wp:wrapText': WrapTextVal
  }
  children: RequiredMap<WrapTightMap>[]
}

export interface WrapTightMap {
  wrapPolygon: WrapPath
}

export interface WrapTopBottom extends UnistNode {
  type: 'element'
  name: 'wp:wrapTopBottom'
  attributes: {
    'wp:distB'?: string
    'wp:distT'?: string
  }
  children: RequiredMap<WrapTopBottomMap>[]
}

export interface WrapTopBottomMap {
  effectExtent?: EffectExtent
}

export type AlignHVal = 'left' | 'right' | 'center' | 'inside' | 'outside'

export type AlignVVal = 'top' | 'bottom' | 'center' | 'inside' | 'outside'

export type PositionOffsetVal = number

export type RelFromHVal =
  | 'margin'
  | 'page'
  | 'column'
  | 'character'
  | 'leftMargin'
  | 'rightMargin'
  | 'insideMargin'
  | 'outsideMargin'

export type RelFromVVal =
  | 'margin'
  | 'page'
  | 'paragraph'
  | 'line'
  | 'topMargin'
  | 'bottomMargin'
  | 'insideMargin'
  | 'outsideMargin'

export type WrapDistanceVal = number

export type WrapTextVal = 'bothSides' | 'left' | 'right' | 'largest'

export interface document extends UnistNode {
  anchor: Anchor
  inline: Inline
  wgp: WordprocessingGroup
  wpc: WordprocessingCanvas
  wsp: WordprocessingShape
}
export var document: document
