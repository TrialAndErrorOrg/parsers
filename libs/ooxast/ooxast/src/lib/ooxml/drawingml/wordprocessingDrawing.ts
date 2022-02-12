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
    allowOverlap: string
    behindDoc: string
    distB?: string
    distL?: string
    distR?: string
    distT?: string
    hidden?: string
    layoutInCell: string
    locked: string
    relativeHeight: string
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
    b: string
    l: string
    r: string
    t: string
  }
  children: []
}

export interface GraphicFrame extends UnistNode {
  type: 'element'
  name: 'wp:graphicFrame'
  //attributes: {}
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
    distB?: string
    distL?: string
    distR?: string
    distT?: string
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
    id: string
    seq: string
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
    relativeFrom: RelFromHVal
  }
  children: RequiredMap<PosHMap>[]
}

export interface PosHMap {
  align: AlignHVal
  posOffset: string
}

export interface PosV extends UnistNode {
  type: 'element'
  name: 'wp:posV'
  attributes: {
    relativeFrom: RelFromVVal
  }
  children: RequiredMap<PosVMap>[]
}

export interface PosVMap {
  align: AlignVVal
  posOffset: string
}

export interface TextboxInfo extends UnistNode {
  type: 'element'
  name: 'wp:textboxInfo'
  attributes: {
    id?: string
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
  //attributes: {}
  children: RequiredMap<TxbxContentMap>[]
}

export interface TxbxContentMap {
  altChunk?: w.AltChunk[]
  bookmarkEnd?: w.MarkupRange[]
  bookmarkStart?: w.Bookmark[]
  commentRangeEnd?: w.MarkupRange[]
  commentRangeStart?: w.MarkupRange[]
  customXml?: w.CustomXmlBlock[]
  customXmlDelRangeEnd?: w.Markup[]
  customXmlDelRangeStart?: w.TrackChange[]
  customXmlInsRangeEnd?: w.Markup[]
  customXmlInsRangeStart?: w.TrackChange[]
  customXmlMoveFromRangeEnd?: w.Markup[]
  customXmlMoveFromRangeStart?: w.TrackChange[]
  customXmlMoveToRangeEnd?: w.Markup[]
  customXmlMoveToRangeStart?: w.TrackChange[]
  del?: w.RunTrackChange[]
  ins?: w.RunTrackChange[]
  moveFrom?: w.RunTrackChange[]
  moveFromRangeEnd?: w.MarkupRange[]
  moveFromRangeStart?: w.MoveBookmark[]
  moveTo?: w.RunTrackChange[]
  moveToRangeEnd?: w.MarkupRange[]
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
  //attributes: {}
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
    bwMode?: a.BlackWhiteModeVal
    id: string
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
  //attributes: {}
  children: RequiredMap<WordprocessingContentPartNonVisualMap>[]
}

export interface WordprocessingContentPartNonVisualMap {
  cNvContentPartPr?: a.NonVisualContentPartProperties
  cNvPr?: a.NonVisualDrawingProps
}

export interface WordprocessingGroup extends UnistNode {
  type: 'element'
  name: 'wp:wordprocessingGroup'
  //attributes: {}
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
    normalEastAsianFlow?: string
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
    edited?: string
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
    distB?: string
    distL?: string
    distR?: string
    distT?: string
    wrapText: WrapTextVal
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
    distL?: string
    distR?: string
    wrapText: WrapTextVal
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
    distL?: string
    distR?: string
    wrapText: WrapTextVal
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
    distB?: string
    distT?: string
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
