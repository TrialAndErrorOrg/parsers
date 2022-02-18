import * as Primitive from '../../xml-primitives'
import * as m from '../officeDocument/math'
import * as r from '../officeDocument/relationships'
import * as s from '../officeDocument/sharedTypes'
import * as sl from '../schemaLibrary/main'
import * as wp from '../drawingml/wordprocessingDrawing'
import { Literal as UnistLiteral, Node as UnistNode } from 'unist'
import { Element } from 'xast'
import { RequiredMap } from '../../ooxast'

// Source files:
// http://localhost:3000/wml.xsd

export interface AbstractNum extends UnistNode {
  type: 'element'
  name: 'w:abstractNum'
  attributes: {
    'w:abstractNumId': string
  }
  children: RequiredMap<AbstractNumMap>[]
}

export interface AbstractNumMap {
  lvl?: Lvl[]
  multiLevelType?: MultiLevelType
  name?: StringTag<'name'>
  nsid?: LongHexNumber
  numStyleLink?: StringTag<'numStyleLink'>
  styleLink?: StringTag<'styleLink'>
  tmpl?: LongHexNumber
}

export interface AltChunk extends UnistNode {
  type: 'element'
  name: 'w:altChunk'
  attributes: {
    'w:id'?: string
  }
  children: RequiredMap<AltChunkMap>[]
}

export interface AltChunkMap {
  altChunkPr?: AltChunkPr
}

export interface AltChunkPr extends UnistNode {
  type: 'element'
  name: 'w:altChunkPr'
  attributes: Record<string, never>
  children: RequiredMap<AltChunkPrMap>[]
}

export interface AltChunkPrMap {
  matchSrc?: OnOff<'matchSrc'>
}

export interface Attr extends UnistNode {
  type: 'element'
  name: 'w:attr'
  attributes: {
    'w:name': string
    'w:uri': string
    'w:val': string
  }
  children: []
}

export interface AutoCaption extends UnistNode {
  type: 'element'
  name: 'w:autoCaption'
  attributes: {
    'w:caption': string
    'w:name': string
  }
  children: []
}

export interface AutoCaptions extends UnistNode {
  type: 'element'
  name: 'w:autoCaptions'
  attributes: Record<string, never>
  children: RequiredMap<AutoCaptionsMap>[]
}

export interface AutoCaptionsMap {
  autoCaption: AutoCaption[]
}

export interface Background extends UnistNode {
  type: 'element'
  name: 'w:background'
  attributes: {
    'w:color'?: string
    'w:themeColor'?: ThemeColorVal
    'w:themeShade'?: string
    'w:themeTint'?: string
  }
  children: RequiredMap<BackgroundMap>[]
}

export interface BackgroundMap {
  drawing?: Drawing
}

export interface Base64Binary extends UnistNode {
  type: 'element'
  name: 'w:base64Binary'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface BdoContentRun extends UnistNode {
  type: 'element'
  name: 'w:bdoContentRun'
  attributes: {
    'w:val'?: DirectionVal
  }
  children: RequiredMap<BdoContentRunMap>[]
}

export interface Y<T extends Element = BdoContentRun> {}
export interface L<T extends Element = m.OMath> {}
export interface BdoContentRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel<'subDoc'>[]
}

export interface Body extends UnistNode {
  type: 'element'
  name: 'w:body'
  attributes: Record<string, never>
  children: RequiredMap<BodyMap>[]
}

export interface BodyMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  p?: P[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtBlock[]
  sectPr?: SectPr
  tbl?: Tbl[]
}

export type Bookmark<tag extends string = 'bookmark'> = BookmarkRange & {
  type: 'element'
  name: `w:${tag}`
  attributes: {
    'w:name': string
  }
  children: []
}

export type BookmarkRange<tag extends string = 'bookmarkRange'> =
  MarkupRange & {
    type: 'element'
    name: `w:${tag}`
    attributes: {
      'w:colFirst'?: string
      'w:colLast'?: string
    }
    children: []
  }

export interface Border extends UnistNode {
  type: 'element'
  name: 'w:border'
  attributes: {
    'w:color'?: string
    'w:frame'?: string
    'w:shadow'?: string
    'w:space'?: string
    'w:sz'?: string
    'w:themeColor'?: ThemeColorVal
    'w:themeShade'?: string
    'w:themeTint'?: string
    'w:val': BorderVal
  }
  children: []
}

export type BottomPageBorder = PageBorder & {
  type: 'element'
  name: 'w:bottomPageBorder'
  attributes: {
    'w:bottomLeft'?: string
    'w:bottomRight'?: string
  }
  children: []
}

export interface Br extends UnistNode {
  type: 'element'
  name: 'w:br'
  attributes: {
    'w:clear'?: BrClearVal
    'w:type'?: BrTypeVal
  }
  children: []
}

export interface CalendarType extends UnistNode {
  type: 'element'
  name: 'w:calendarType'
  attributes: {
    'w:val': s.CalendarTypeVal
  }
  children: []
}

export interface Caption extends UnistNode {
  type: 'element'
  name: 'w:caption'
  attributes: {
    'w:chapNum'?: string
    'w:heading'?: string
    'w:name': string
    'w:noLabel'?: string
    'w:numFmt'?: NumberFormatVal
    'w:pos'?: CaptionPosVal
    'w:sep'?: ChapterSepVal
  }
  children: []
}

export interface Captions extends UnistNode {
  type: 'element'
  name: 'w:captions'
  attributes: Record<string, never>
  children: RequiredMap<CaptionsMap>[]
}

export interface CaptionsMap {
  autoCaptions?: AutoCaptions
  caption: Caption[]
}

export type CellMergeTrackChange = TrackChange & {
  type: 'element'
  name: 'w:cellMergeTrackChange'
  attributes: {
    'w:vMerge'?: AnnotationVMergeVal
    'w:vMergeOrig'?: AnnotationVMergeVal
  }
  children: []
}

export interface CharacterSpacing extends UnistNode {
  type: 'element'
  name: 'w:characterSpacing'
  attributes: {
    'w:val': CharacterSpacingVal
  }
  children: []
}

export interface Charset extends UnistNode {
  type: 'element'
  name: 'w:charset'
  attributes: {
    'w:characterSet'?: string
  }
  children: []
}

export interface Cnf extends UnistNode {
  type: 'element'
  name: 'w:cnf'
  attributes: {
    'w:evenHBand': string
    'w:evenVBand': string
    'w:firstColumn': string
    'w:firstRow': string
    'w:firstRowFirstColumn': string
    'w:firstRowLastColumn': string
    'w:lastColumn': string
    'w:lastRow': string
    'w:lastRowFirstColumn': string
    'w:lastRowLastColumn': string
    'w:oddHBand': string
    'w:oddVBand': string
  }
  children: []
}

export interface Color extends UnistNode {
  type: 'element'
  name: 'w:color'
  attributes: {
    'w:themeColor'?: ThemeColorVal
    'w:themeShade'?: string
    'w:themeTint'?: string
    'w:val': string
  }
  children: []
}

export interface ColorSchemeMapping extends UnistNode {
  type: 'element'
  name: 'w:colorSchemeMapping'
  attributes: {
    'w:accent1': WmlColorSchemeIndexVal
    'w:accent2': WmlColorSchemeIndexVal
    'w:accent3': WmlColorSchemeIndexVal
    'w:accent4': WmlColorSchemeIndexVal
    'w:accent5': WmlColorSchemeIndexVal
    'w:accent6': WmlColorSchemeIndexVal
    'w:bg1': WmlColorSchemeIndexVal
    'w:bg2': WmlColorSchemeIndexVal
    'w:followedHyperlink': WmlColorSchemeIndexVal
    'w:hyperlink': WmlColorSchemeIndexVal
    'w:t1': WmlColorSchemeIndexVal
    'w:t2': WmlColorSchemeIndexVal
  }
  children: []
}

export interface Column extends UnistNode {
  type: 'element'
  name: 'w:column'
  attributes: {
    'w:space'?: string
    'w:w'?: string
  }
  children: []
}

export interface Columns extends UnistNode {
  type: 'element'
  name: 'w:columns'
  attributes: {
    'w:equalWidth'?: string
    'w:num'?: string
    'w:sep'?: string
    'w:space'?: string
  }
  children: RequiredMap<ColumnsMap>[]
}

export interface ColumnsMap {
  col?: Column[]
}

export type Comment = TrackChange & {
  type: 'element'
  name: 'w:comment'
  attributes: {
    'w:initials'?: string
  }
  children: RequiredMap<CommentMap>[]
}

export interface CommentMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  p?: P[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtBlock[]
  tbl?: Tbl[]
}

export interface Comments extends UnistNode {
  type: 'element'
  name: 'w:comments'
  attributes: Record<string, never>
  children: RequiredMap<CommentsMap>[]
}

export interface CommentsMap {
  comment?: Comment[]
}

export interface Compat extends UnistNode {
  type: 'element'
  name: 'w:compat'
  attributes: Record<string, never>
  children: RequiredMap<CompatMap>[]
}

export interface CompatMap {
  adjustLineHeightInTable?: OnOff<'adjustLineHeightInTable'>
  applyBreakingRules?: OnOff<'applyBreakingRules'>
  balanceSingleByteDoubleByteWidth?: OnOff<'balanceSingleByteDoubleByteWidth'>
  compatSetting?: CompatSetting[]
  doNotExpandShiftReturn?: OnOff<'doNotExpandShiftReturn'>
  doNotLeaveBackslashAlone?: OnOff<'doNotLeaveBackslashAlone'>
  spaceForUL?: OnOff<'spaceForUL'>
  ulTrailSpace?: OnOff<'ulTrailSpace'>
}

export interface CompatSetting extends UnistNode {
  type: 'element'
  name: 'w:compatSetting'
  attributes: {
    'w:name': string
    'w:uri': string
    'w:val': string
  }
  children: []
}

export interface Control extends UnistNode {
  type: 'element'
  name: 'w:control'
  attributes: {
    'w:id'?: string
    'w:name'?: string
    'w:shapeid'?: string
  }
  children: []
}

export interface CustomXmlBlock extends UnistNode {
  type: 'element'
  name: 'w:customXmlBlock'
  attributes: {
    'w:element': string
    'w:uri': string
  }
  children: RequiredMap<CustomXmlBlockMap>[]
}

export interface CustomXmlBlockMap {
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  customXmlPr?: CustomXmlPr
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  p?: P[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtBlock[]
  tbl?: Tbl[]
}

export interface CustomXmlCell extends UnistNode {
  type: 'element'
  name: 'w:customXmlCell'
  attributes: {
    'w:element': string
    'w:uri': string
  }
  children: RequiredMap<CustomXmlCellMap>[]
}

export interface CustomXmlCellMap {
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlCell[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  customXmlPr?: CustomXmlPr
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtCell[]
  tc?: Tc[]
}

export interface CustomXmlPr extends UnistNode {
  type: 'element'
  name: 'w:customXmlPr'
  attributes: Record<string, never>
  children: RequiredMap<CustomXmlPrMap>[]
}

export interface CustomXmlPrMap {
  attr?: Attr[]
  placeholder?: StringTag<'placeholder'>
}

export interface CustomXmlRow extends UnistNode {
  type: 'element'
  name: 'w:customXmlRow'
  attributes: {
    'w:element': string
    'w:uri': string
  }
  children: RequiredMap<CustomXmlRowMap>[]
}

export interface CustomXmlRowMap {
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRow[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  customXmlPr?: CustomXmlPr
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtRow[]
  tr?: Row[]
}

export interface CustomXmlRun extends UnistNode {
  type: 'element'
  name: 'w:customXmlRun'
  attributes: {
    'w:element': string
    'w:uri': string
  }
  children: RequiredMap<CustomXmlRunMap>[]
}

export interface CustomXmlRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  customXmlPr?: CustomXmlPr
  del?: RunTrackChange<'del'>[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel<'subDoc'>[]
}

export interface DataBinding extends UnistNode {
  type: 'element'
  name: 'w:dataBinding'
  attributes: {
    'w:prefixMappings': string
    'w:storeItemID': string
    'w:xpath': string
  }
  children: []
}

export interface DecimalNumber extends UnistNode {
  type: 'element'
  name: 'w:decimalNumber'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface DecimalNumberOrPrecent extends UnistNode {
  type: 'element'
  name: 'w:decimalNumberOrPrecent'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface DirContentRun extends UnistNode {
  type: 'element'
  name: 'w:dirContentRun'
  attributes: {
    'w:val'?: DirectionVal
  }
  children: RequiredMap<DirContentRunMap>[]
}

export interface DirContentRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel<'subDoc'>[]
}

export interface Div extends UnistNode {
  type: 'element'
  name: 'w:div'
  attributes: {
    'w:id': string
  }
  children: RequiredMap<DivMap>[]
}

export interface DivMap {
  blockQuote?: OnOff<'blockQuote'>
  bodyDiv?: OnOff<'bodyDiv'>
  divBdr?: DivBdr
  divsChild?: Divs[]
  marBottom: SignedTwipsMeasure
  marLeft: SignedTwipsMeasure
  marRight: SignedTwipsMeasure
  marTop: SignedTwipsMeasure
}

export interface DivBdr extends UnistNode {
  type: 'element'
  name: 'w:divBdr'
  attributes: Record<string, never>
  children: RequiredMap<DivBdrMap>[]
}

export interface DivBdrMap {
  bottom?: Border
  left?: Border
  right?: Border
  top?: Border
}

export interface Divs extends UnistNode {
  type: 'element'
  name: 'w:divs'
  attributes: Record<string, never>
  children: RequiredMap<DivsMap>[]
}

export interface DivsMap {
  div: Div[]
}

export interface DocDefaults extends UnistNode {
  type: 'element'
  name: 'w:docDefaults'
  attributes: Record<string, never>
  children: RequiredMap<DocDefaultsMap>[]
}

export interface DocDefaultsMap {
  pPrDefault?: PPrDefault
  rPrDefault?: RPrDefault
}

export interface DocGrid extends UnistNode {
  type: 'element'
  name: 'w:docGrid'
  attributes: {
    'w:charSpace'?: string
    'w:linePitch': string
    'w:type': DocGridVal
  }
  children: []
}

export interface DocPart extends UnistNode {
  type: 'element'
  name: 'w:docPart'
  attributes: Record<string, never>
  children: RequiredMap<DocPartMap>[]
}

export interface DocPartMap {
  docPartBody?: Body
  docPartPr?: DocPartPr
}

export interface DocPartBehavior extends UnistNode {
  type: 'element'
  name: 'w:docPartBehavior'
  attributes: {
    'w:val': DocPartBehaviorVal
  }
  children: []
}

export interface DocPartBehaviors extends UnistNode {
  type: 'element'
  name: 'w:docPartBehaviors'
  attributes: Record<string, never>
  children: RequiredMap<DocPartBehaviorsMap>[]
}

export interface DocPartBehaviorsMap {
  behavior: DocPartBehavior[]
}

export interface DocPartCategory extends UnistNode {
  type: 'element'
  name: 'w:docPartCategory'
  attributes: Record<string, never>
  children: RequiredMap<DocPartCategoryMap>[]
}

export interface DocPartCategoryMap {
  gallery: DocPartGallery
  name: StringTag<'name'>
}

export interface DocPartGallery extends UnistNode {
  type: 'element'
  name: 'w:docPartGallery'
  attributes: {
    'w:val': DocPartGalleryVal
  }
  children: []
}

export interface DocPartName extends UnistNode {
  type: 'element'
  name: 'w:docPartName'
  attributes: {
    'w:decorated'?: string
    'w:val': string
  }
  children: []
}

export interface DocPartPr extends UnistNode {
  type: 'element'
  name: 'w:docPartPr'
}

export interface DocParts extends UnistNode {
  type: 'element'
  name: 'w:docParts'
  attributes: Record<string, never>
  children: RequiredMap<DocPartsMap>[]
}

export interface DocPartsMap {
  docPart: DocPart[]
}

export interface DocPartType extends UnistNode {
  type: 'element'
  name: 'w:docPartType'
  attributes: {
    'w:val': DocPartTypeVal
  }
  children: []
}

export interface DocPartTypes extends UnistNode {
  type: 'element'
  name: 'w:docPartTypes'
  attributes: {
    'w:all'?: string
  }
  children: RequiredMap<DocPartTypesMap>[]
}

export interface DocPartTypesMap {
  type: DocPartType[]
}

export interface DocProtect extends UnistNode {
  type: 'element'
  name: 'w:docProtect'
  attributes: {
    'w:algorithmName'?: string
    'w:edit'?: DocProtectVal
    'w:enforcement': string
    'w:formatting'?: string
    'w:hashValue'?: string
    'w:saltValue'?: string
    'w:spinCount'?: string
  }
  children: []
}

export interface DocRsids extends UnistNode {
  type: 'element'
  name: 'w:docRsids'
  attributes: Record<string, never>
  children: RequiredMap<DocRsidsMap>[]
}

export interface DocRsidsMap {
  rsid?: LongHexNumber[]
  rsidRoot?: LongHexNumber
}

export interface DocType extends UnistNode {
  type: 'element'
  name: 'w:docType'
  attributes: {
    'w:val': string
  }
}

export interface Document extends DocumentBase {
  type: 'element'
  name: 'w:document'
  attributes: {
    'w:conformance': s.ConformanceClassVal
  }
  children: RequiredMap<DocumentMap>[]
}

export interface DocumentMap {
  body?: Body
  background?: Background
}

export interface DocumentBase extends UnistNode {
  type: 'element'
  name: 'w:documentBase' | 'w:document'
  attributes: Record<string, never>
  children: RequiredMap<DocumentBaseMap>[]
}

export interface DocumentBaseMap {
  background?: Background
  body?: Body
}

export interface DocVar extends UnistNode {
  type: 'element'
  name: 'w:docVar'
  attributes: {
    'w:name': string
    'w:val': string
  }
  children: []
}

export interface DocVars extends UnistNode {
  type: 'element'
  name: 'w:docVars'
  attributes: Record<string, never>
  children: RequiredMap<DocVarsMap>[]
}

export interface DocVarsMap {
  docVar?: DocVar[]
}

export interface Drawing extends UnistNode {
  type: 'element'
  name: 'w:drawing'
  attributes: Record<string, never>
  children: RequiredMap<DrawingMap>[]
}

export interface DrawingMap {
  anchor?: wp.Anchor[]
  inline?: wp.Inline[]
}

export interface EastAsianLayout extends UnistNode {
  type: 'element'
  name: 'w:eastAsianLayout'
  attributes: {
    'w:combine'?: string
    'w:combineBrackets'?: CombineBracketsVal
    'w:id'?: string
    'w:vert'?: string
    'w:vertCompress'?: string
  }
  children: []
}

export type EdnDocProps = EdnProps & {
  type: 'element'
  name: 'w:ednDocProps'
  attributes: Record<string, never>
  children: RequiredMap<EdnDocPropsMap>[]
}

export interface EdnDocPropsMap {
  endnote?: FtnEdnSepRef[]
}

export interface EdnPos extends UnistNode {
  type: 'element'
  name: 'w:ednPos'
  attributes: {
    'w:val': EdnPosVal
  }
  children: []
}

export interface EdnProps extends UnistNode {
  type: 'element'
  name: 'w:ednProps'
  attributes: Record<string, never>
  children: RequiredMap<EdnPropsMap>[]
}

export interface EdnPropsMap {
  numFmt?: NumFmt
  numRestart?: NumRestart
  numStart?: DecimalNumber
  pos?: EdnPos
}

export interface Em extends UnistNode {
  type: 'element'
  name: 'w:em'
  attributes: {
    'w:val': EmVal
  }
  children: []
}

export interface Empty<tag extends string = 'empty'> extends UnistNode {
  type: 'element'
  name: `w:${tag}`
  children: []
}

export interface Endnotes extends UnistNode {
  type: 'element'
  name: 'w:endnotes'
  attributes: Record<string, never>
  children: RequiredMap<EndnotesMap>[]
}

export interface EndnotesMap {
  endnote?: FtnEdn[]
}

export interface FFCheckBox extends UnistNode {
  type: 'element'
  name: 'w:fFCheckBox'
  attributes: Record<string, never>
  children: RequiredMap<FFCheckBoxMap>[]
}

export interface FFCheckBoxMap {
  checked?: OnOff<'checked'>
  default?: OnOff<'default'>
  size: HpsMeasure<'size'>
  sizeAuto: OnOff<'sizeAuto'>
}

export interface FFData extends UnistNode {
  type: 'element'
  name: 'w:fFData'
  attributes: Record<string, never>
  children: RequiredMap<FFDataMap>[]
}

export interface FFDataMap {
  calcOnExit: OnOff<'calcOnExit'>[]
  checkBox: FFCheckBox[]
  ddList: FFDDList[]
  enabled: OnOff<'enabled'>[]
  entryMacro?: MacroName[]
  exitMacro?: MacroName[]
  helpText?: FFHelpText[]
  label?: DecimalNumber[]
  name: FFName[]
  statusText?: FFStatusText[]
  tabIndex?: UnsignedDecimalNumber[]
  textInput: FFTextInput[]
}

export interface FFDDList extends UnistNode {
  type: 'element'
  name: 'w:fFDDList'
  attributes: Record<string, never>
  children: RequiredMap<FFDDListMap>[]
}

export interface FFDDListMap {
  default?: DecimalNumber
  listEntry?: StringTag<'listEntry'>[]
  result?: DecimalNumber
}

export interface FFHelpText extends UnistNode {
  type: 'element'
  name: 'w:fFHelpText'
  attributes: {
    'w:type': InfoTextTypeVal
    'w:val': string
  }
  children: []
}

export interface FFName extends UnistNode {
  type: 'element'
  name: 'w:fFName'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface FFStatusText extends UnistNode {
  type: 'element'
  name: 'w:fFStatusText'
  attributes: {
    'w:type': InfoTextTypeVal
    'w:val': string
  }
  children: []
}

export interface FFTextInput extends UnistNode {
  type: 'element'
  name: 'w:fFTextInput'
  attributes: Record<string, never>
  children: RequiredMap<FFTextInputMap>[]
}

export interface FFTextInputMap {
  default?: StringTag<'default'>
  format?: StringTag<'format'>
  maxLength?: DecimalNumber
  type?: FFTextType
}

export interface FFTextType extends UnistNode {
  type: 'element'
  name: 'w:fFTextType'
  attributes: {
    'w:val': FFTextTypeVal
  }
  children: []
}

export interface FitText extends UnistNode {
  type: 'element'
  name: 'w:fitText'
  attributes: {
    'w:id'?: string
    'w:val': string
  }
  children: []
}

export interface FldChar extends UnistNode {
  type: 'element'
  name: 'w:fldChar'
  attributes: {
    'w:dirty': string
    'w:fldCharType': FldCharTypeVal
    'w:fldLock': string
  }
  children: RequiredMap<FldCharMap>[]
}

export interface FldCharMap {
  ffData?: FFData
}

export interface Font extends UnistNode {
  type: 'element'
  name: 'w:font'
  attributes: {
    'w:name': string
  }
  children: RequiredMap<FontMap>[]
}

export interface FontMap {
  altName?: StringTag<'altName'>
  charset?: Charset
  embedBold?: FontRel
  embedBoldItalic?: FontRel
  embedItalic?: FontRel
  embedRegular?: FontRel
  family?: FontFamily
  notTrueType?: OnOff<'notTrueType'>
  panose1?: Panose
  pitch?: Pitch
  sig?: FontSig
}

export interface FontFamily extends UnistNode {
  type: 'element'
  name: 'w:fontFamily'
  attributes: {
    'w:val': FontFamilyVal
  }
}

export type FontRel = Rel & {
  type: 'element'
  name: 'w:fontRel'
  attributes: {
    'w:fontKey': string
    'w:subsetted': string
  }
  children: []
}

export interface Fonts extends UnistNode {
  type: 'element'
  name: 'w:fonts'
  attributes: {
    'w:ascii': string
    'w:asciiTheme': ThemeVal
    'w:cs': string
    'w:cstheme': ThemeVal
    'w:eastAsia': string
    'w:eastAsiaTheme': ThemeVal
    'w:hAnsi': string
    'w:hAnsiTheme': ThemeVal
    'w:hint': HintVal
  }
  children: []
}

export interface FontSig extends UnistNode {
  type: 'element'
  name: 'w:fontSig'
  attributes: {
    'w:csb0': string
    'w:csb1': string
    'w:usb0': string
    'w:usb1': string
    'w:usb2': string
    'w:usb3': string
  }
  children: []
}

export interface FontsList extends UnistNode {
  type: 'element'
  name: 'w:fontsList'
  attributes: Record<string, never>
  children: RequiredMap<FontsListMap>[]
}

export interface FontsListMap {
  font?: Font[]
}

export interface Footnotes extends UnistNode {
  type: 'element'
  name: 'w:footnotes'
  attributes: Record<string, never>
  children: RequiredMap<FootnotesMap>[]
}

export interface FootnotesMap {
  footnote?: FtnEdn[]
}

export interface Frame extends UnistNode {
  type: 'element'
  name: 'w:frame'
  attributes: Record<string, never>
  children: RequiredMap<FrameMap>[]
}

export interface FrameMap {
  linkedToFile?: OnOff<'linkedToFile'>
  longDesc?: Rel<'longDesc'>
  marH?: PixelsMeasure
  marW?: PixelsMeasure
  name?: StringTag<'name'>
  noResizeAllowed?: OnOff<'noResizeAllowed'>
  scrollbar?: FrameScrollbar
  sourceFileName?: Rel<'sourceFileName'>
  sz?: StringTag<'sz'>
  title?: StringTag<'title'>
}

export interface FrameLayout extends UnistNode {
  type: 'element'
  name: 'w:frameLayout'
  attributes: {
    'w:val': FrameLayoutVal
  }
  children: []
}

export interface FramePr extends UnistNode {
  type: 'element'
  name: 'w:framePr'
  attributes: {
    'w:anchorLock'?: string
    'w:dropCap'?: DropCapVal
    'w:h'?: string
    'w:hAnchor'?: HAnchorVal
    'w:hRule'?: HeightRuleVal
    'w:hSpace'?: string
    'w:lines'?: string
    'w:vAnchor'?: VAnchorVal
    'w:vSpace'?: string
    'w:w'?: string
    'w:wrap'?: WrapVal
    'w:x'?: string
    'w:xAlign'?: s.XAlignVal
    'w:y'?: string
    'w:yAlign'?: s.YAlignVal
  }
  children: []
}

export interface FrameScrollbar extends UnistNode {
  type: 'element'
  name: 'w:frameScrollbar'
  attributes: {
    'w:val': FrameScrollbarVal
  }
  children: []
}

export interface Frameset extends UnistNode {
  type: 'element'
  name: 'w:frameset'
  attributes: Record<string, never>
  children: RequiredMap<FramesetMap>[]
}

export interface FramesetMap {
  frame?: Frame[]
  frameLayout?: FrameLayout
  frameset?: Frameset[]
  framesetSplitbar?: FramesetSplitbar
  sz?: StringTag<'sz'>
  title?: StringTag<'title'>
}

export interface FramesetSplitbar extends UnistNode {
  type: 'element'
  name: 'w:framesetSplitbar'
  attributes: Record<string, never>
  children: RequiredMap<FramesetSplitbarMap>[]
}

export interface FramesetSplitbarMap {
  color?: Color
  flatBorders?: OnOff<'flatBorders'>
  noBorder?: OnOff<'noBorder'>
  w?: TwipsMeasure
}

export type FtnDocProps = FtnProps & {
  type: 'element'
  name: 'w:ftnDocProps'
  attributes: Record<string, never>
  children: RequiredMap<FtnDocPropsMap>[]
}

export interface FtnDocPropsMap {
  footnote?: FtnEdnSepRef[]
}

export interface FtnEdn extends UnistNode {
  type: 'element'
  name: 'w:ftnEdn'
  attributes: {
    'w:id': string
    'w:type'?: FtnEdnVal
  }
  children: RequiredMap<FtnEdnMap>[]
}

export interface FtnEdnMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  p?: P[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtBlock[]
  tbl?: Tbl[]
}

export interface FtnEdnRef<tag extends string = 'ftnEdnRef'> extends UnistNode {
  type: 'element'
  name: `w:${tag}`
  attributes: {
    'w:customMarkFollows'?: string
    'w:id': string
  }
  children: []
}

export interface FtnEdnSepRef extends UnistNode {
  type: 'element'
  name: 'w:ftnEdnSepRef'
  attributes: {
    'w:id': string
  }
  children: []
}

export interface FtnPos extends UnistNode {
  type: 'element'
  name: 'w:ftnPos'
  attributes: {
    'w:val': FtnPosVal
  }
  children: []
}

export interface FtnProps extends UnistNode {
  type: 'element'
  name: 'w:ftnProps'
  attributes: Record<string, never>
  children: RequiredMap<FtnPropsMap>[]
}

export interface FtnPropsMap {
  numFmt?: NumFmt
  numRestart?: NumRestart
  numStart?: DecimalNumber
  pos?: FtnPos
}

export type GlossaryDocument = DocumentBase & {
  type: 'element'
  name: 'w:glossaryDocument'
  attributes: Record<string, never>
  children: RequiredMap<GlossaryDocumentMap>[]
}

export interface GlossaryDocumentMap {
  docParts?: DocParts
}

export interface Guid extends UnistNode {
  type: 'element'
  name: 'w:guid'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface HdrFtr extends UnistNode {
  type: 'element'
  name: 'w:hdrFtr'
  attributes: Record<string, never>
  children: RequiredMap<HdrFtrMap>[]
}

export interface HdrFtrMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  p?: P[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtBlock[]
  tbl?: Tbl[]
}

export type HdrFtrRef = Rel & {
  type: 'element'
  name: 'w:hdrFtrRef'
  attributes: {
    'w:type': HdrFtrVal
  }
  children: []
}

export interface Headers extends UnistNode {
  type: 'element'
  name: 'w:headers'
  attributes: Record<string, never>
  children: RequiredMap<HeadersMap>[]
}

export interface HeadersMap {
  header?: StringTag<'header'>[]
}

export interface Height extends UnistNode {
  type: 'element'
  name: 'w:height'
  attributes: {
    'w:hRule': HeightRuleVal
    'w:val': string
  }
  children: []
}

export interface Highlight extends UnistNode {
  type: 'element'
  name: 'w:highlight'
  attributes: {
    'w:val': HighlightColorVal
  }
  children: []
}

export interface HpsMeasure<tag extends string = 'hpsMeasure'>
  extends UnistNode {
  type: 'element'
  name: `w:${tag}`
  attributes: {
    'w:val': string
  }
  children: []
}

export interface Hyperlink extends UnistNode {
  type: 'element'
  name: 'w:hyperlink'
  attributes: {
    'w:anchor'?: string
    'w:docLocation'?: string
    'w:history'?: string
    'w:id': string
    'w:tgtFrame'?: string
    'w:tooltip'?: string
  }
  children: RequiredMap<HyperlinkMap>[]
}

export interface HyperlinkMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel<'subDoc'>[]
}

export interface Ind extends UnistNode {
  type: 'element'
  name: 'w:ind'
  attributes: {
    'w:end'?: string
    'w:endChars'?: string
    'w:firstLine'?: string
    'w:firstLineChars'?: string
    'w:hanging'?: string
    'w:hangingChars'?: string
    'w:start'?: string
    'w:startChars'?: string
  }
  children: []
}

export interface Jc extends UnistNode {
  type: 'element'
  name: 'w:jc'
  attributes: {
    'w:val': JcVal
  }
  children: []
}

export interface JcTable extends UnistNode {
  type: 'element'
  name: 'w:jcTable'
  attributes: {
    'w:val': JcTableVal
  }
  children: []
}

export interface Kinsoku extends UnistNode {
  type: 'element'
  name: 'w:kinsoku'
  attributes: {
    'w:lang': string
    'w:val': string
  }
  children: []
}

export interface Lang extends UnistNode {
  type: 'element'
  name: 'w:lang'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface Language extends UnistNode {
  type: 'element'
  name: 'w:language'
  attributes: {
    'w:bidi'?: string
    'w:eastAsia'?: string
    'w:val'?: string
  }
  children: []
}

export interface LatentStyles extends UnistNode {
  type: 'element'
  name: 'w:latentStyles'
  attributes: {
    'w:count': string
    'w:defLockedState': string
    'w:defQFormat': string
    'w:defSemiHidden': string
    'w:defUIPriority': string
    'w:defUnhideWhenUsed': string
  }
  children: RequiredMap<LatentStylesMap>[]
}

export interface LatentStylesMap {
  lsdException?: LsdException[]
}

export interface LevelSuffix extends UnistNode {
  type: 'element'
  name: 'w:levelSuffix'
  attributes: {
    'w:val': LevelSuffixVal
  }
  children: []
}

export interface LevelText extends UnistNode {
  type: 'element'
  name: 'w:levelText'
  attributes: {
    'w:null'?: string
    'w:val'?: string
  }
  children: []
}

export interface LineNumber extends UnistNode {
  type: 'element'
  name: 'w:lineNumber'
  attributes: {
    'w:countBy'?: string
    'w:distance'?: string
    'w:restart'?: LineNumberRestartVal
    'w:start'?: string
  }
  children: []
}

export interface Lock extends UnistNode {
  type: 'element'
  name: 'w:lock'
  attributes: {
    'w:val': LockVal
  }
  children: []
}

export interface LongHexNumber extends UnistNode {
  type: 'element'
  name: 'w:longHexNumber'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface LsdException extends UnistNode {
  type: 'element'
  name: 'w:lsdException'
  attributes: {
    'w:locked': string
    'w:name': string
    'w:qFormat': string
    'w:semiHidden': string
    'w:uiPriority': string
    'w:unhideWhenUsed': string
  }
  children: []
}

export interface Lvl extends UnistNode {
  type: 'element'
  name: 'w:lvl'
  attributes: {
    'w:ilvl': string
    'w:tentative'?: string
    'w:tplc'?: string
  }
  children: RequiredMap<LvlMap>[]
}

export interface LvlMap {
  isLgl?: OnOff<'isLgl'>
  lvlJc?: Jc
  lvlPicBulletId?: DecimalNumber
  lvlRestart?: DecimalNumber
  lvlText?: LevelText
  numFmt?: NumFmt
  pPr?: PPrGeneral
  pStyle?: StringTag<'pStyle'>
  rPr?: RPr
  start?: DecimalNumber
  suff?: LevelSuffix
}

export interface MacroName extends UnistNode {
  type: 'element'
  name: 'w:macroName'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface MailMerge extends UnistNode {
  type: 'element'
  name: 'w:mailMerge'
  attributes: Record<string, never>
  children: RequiredMap<MailMergeMap>[]
}

export interface MailMergeMap {
  activeRecord?: DecimalNumber
  addressFieldName?: StringTag<'addressFieldName'>
  checkErrors?: DecimalNumber
  connectString?: StringTag<'connectString'>
  dataSource?: Rel<'dataSource'>
  dataType: MailMergeDataType
  destination?: MailMergeDest
  doNotSuppressBlankLines?: OnOff<'doNotSuppressBlankLines'>
  headerSource?: Rel<'headerSource'>
  linkToQuery?: OnOff<'linkToQuery'>
  mailAsAttachment?: OnOff<'mailAsAttachment'>
  mailSubject?: StringTag<'mailSubject'>
  mainDocumentType: MailMergeDocType
  odso?: Odso
  query?: StringTag<'query'>
  viewMergedData?: OnOff<'viewMergedData'>
}

export interface MailMergeDataType extends UnistNode {
  type: 'element'
  name: 'w:mailMergeDataType'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface MailMergeDest extends UnistNode {
  type: 'element'
  name: 'w:mailMergeDest'
  attributes: {
    'w:val': MailMergeDestVal
  }
  children: []
}

export interface MailMergeDocType extends UnistNode {
  type: 'element'
  name: 'w:mailMergeDocType'
  attributes: {
    'w:val': MailMergeDocTypeVal
  }
  children: []
}

export interface MailMergeOdsoFMDFieldType extends UnistNode {
  type: 'element'
  name: 'w:mailMergeOdsoFMDFieldType'
  attributes: {
    'w:val': MailMergeOdsoFMDFieldTypeVal
  }
  children: []
}

export interface MailMergeSourceType extends UnistNode {
  type: 'element'
  name: 'w:mailMergeSourceType'
  attributes: {
    'w:val': MailMergeSourceTypeVal
  }
  children: []
}

export interface Markup<tag extends string = 'markup'> extends UnistNode {
  type: 'element'
  name: `w:${tag}`
  attributes: {
    'w:id': string
  }
  children: any[]
}

export interface MarkupRange<tag extends string = 'markupRange'>
  extends Markup<tag> {
  name: `w:${tag}`
  attributes: {
    'w:id': string
    'w:displacedByCustomXml'?: DisplacedByCustomXmlVal
  }
  children: any[]
}

export type MathCtrlDel = TrackChange & {
  type: 'element'
  name: 'w:mathCtrlDel'
  attributes: Record<string, never>
  children: RequiredMap<MathCtrlDelMap>[]
}

export interface MathCtrlDelMap {
  rPr?: RPr
}

export type MathCtrlIns = TrackChange & {
  type: 'element'
  name: 'w:mathCtrlIns'
  attributes: Record<string, never>
  children: RequiredMap<MathCtrlInsMap>[]
}

export interface MathCtrlInsMap {
  del?: RPrChange
  rPr?: RPr
}

export type MoveBookmark = Bookmark & {
  type: 'element'
  name: 'w:moveBookmark'
  attributes: {
    'w:author': string
    'w:date': string
  }
  children: []
}

export interface MultiLevelType extends UnistNode {
  type: 'element'
  name: 'w:multiLevelType'
  attributes: {
    'w:val': MultiLevelTypeVal
  }
  children: []
}

export interface Num extends UnistNode {
  type: 'element'
  name: 'w:num'
  attributes: {
    'w:numId': string
  }
  children: RequiredMap<NumMap>[]
}

export interface NumMap {
  abstractNumId: DecimalNumber
  lvlOverride?: NumLvl[]
}

export interface Numbering extends UnistNode {
  type: 'element'
  name: 'w:numbering'
  attributes: Record<string, never>
  children: RequiredMap<NumberingMap>[]
}

export interface NumberingMap {
  abstractNum?: AbstractNum[]
  num?: Num[]
  numIdMacAtCleanup?: DecimalNumber
  numPicBullet?: NumPicBullet[]
}

export interface NumFmt extends UnistNode {
  type: 'element'
  name: 'w:numFmt'
  attributes: {
    'w:format'?: string
    'w:val': NumberFormatVal
  }
  children: []
}

export interface NumLvl extends UnistNode {
  type: 'element'
  name: 'w:numLvl'
  attributes: {
    'w:ilvl': string
  }
  children: RequiredMap<NumLvlMap>[]
}

export interface NumLvlMap {
  lvl?: Lvl
  startOverride?: DecimalNumber
}

export interface NumPicBullet extends UnistNode {
  type: 'element'
  name: 'w:numPicBullet'
  attributes: {
    'w:numPicBulletId': string
  }
  children: RequiredMap<NumPicBulletMap>[]
}

export interface NumPicBulletMap {
  drawing: Drawing
}

export interface NumPr extends UnistNode {
  type: 'element'
  name: 'w:numPr'
  attributes: Record<string, never>
  children: RequiredMap<NumPrMap>[]
}

export interface NumPrMap {
  ilvl?: DecimalNumber
  ins?: TrackChange<'ins'>
  numId?: DecimalNumber
}

export interface NumRestart extends UnistNode {
  type: 'element'
  name: 'w:numRestart'
  attributes: {
    'w:val': RestartNumberVal
  }
  children: []
}

export interface Object extends UnistNode {
  type: 'element'
  name: 'w:object'
  attributes: {
    'w:dxaOrig'?: string
    'w:dyaOrig'?: string
  }
  children: RequiredMap<ObjectMap>[]
}

export interface ObjectMap {
  control?: Control
  drawing?: Drawing
  movie?: Rel<'movie'>
  objectEmbed?: ObjectEmbed
  objectLink?: ObjectLink
}

export interface ObjectEmbed extends UnistNode {
  type: 'element'
  name: 'w:objectEmbed'
  attributes: {
    'w:drawAspect'?: ObjectDrawAspectVal
    'w:fieldCodes'?: string
    'w:id': string
    'w:progId'?: string
    'w:shapeId'?: string
  }
  children: []
}

export type ObjectLink = ObjectEmbed & {
  type: 'element'
  name: 'w:objectLink'
  attributes: {
    'w:lockedField'?: string
    'w:updateMode': ObjectUpdateModeVal
  }
  children: []
}

export interface Odso extends UnistNode {
  type: 'element'
  name: 'w:odso'
  attributes: Record<string, never>
  children: RequiredMap<OdsoMap>[]
}

export interface OdsoMap {
  colDelim?: DecimalNumber
  fHdr?: OnOff<'fHdr'>
  fieldMapData?: OdsoFieldMapData[]
  recipientData?: Rel<'recipientData'>[]
  src?: Rel<'src'>
  table?: StringTag<'table'>
  type?: MailMergeSourceType
  udl?: StringTag<'udl'>
}

export interface OdsoFieldMapData extends UnistNode {
  type: 'element'
  name: 'w:odsoFieldMapData'
  attributes: Record<string, never>
  children: RequiredMap<OdsoFieldMapDataMap>[]
}

export interface OdsoFieldMapDataMap {
  column?: DecimalNumber
  dynamicAddress?: OnOff<'dynamicAddress'>
  lid?: Lang
  mappedName?: StringTag<'mappedName'>
  name?: StringTag<'name'>
  type?: MailMergeOdsoFMDFieldType
}

export interface OnOff<tag extends string = 'onOff'> extends UnistNode {
  type: 'element'
  name: `w:${tag}`
  attributes: {
    'w:val': string
  }
  children: []
}

export type OptimizeForBrowser = OnOff & {
  type: 'element'
  name: 'w:optimizeForBrowser'
  attributes: {
    'w:target'?: string
  }
  children: []
}

export interface P extends UnistNode {
  type: 'element'
  name: 'w:p'
  attributes: {
    'w:rsidDel': string
    'w:rsidP': string
    'w:rsidR': string
    'w:rsidRDefault': string
    'w:rsidRPr': string
  }
  children: RequiredMap<PMap>[]
}

export interface PMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  pPr?: PPr
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel<'subDoc'>[]
}

export type PageBorder = Border & {
  type: 'element'
  name: 'w:pageBorder'
  attributes: {
    'w:id'?: string
  }
  children: []
}

export interface PageBorders extends UnistNode {
  type: 'element'
  name: 'w:pageBorders'
  attributes: {
    'w:display'?: PageBorderDisplayVal
    'w:offsetFrom'?: PageBorderOffsetVal
    'w:zOrder'?: PageBorderZOrderVal
  }
  children: RequiredMap<PageBordersMap>[]
}

export interface PageBordersMap {
  bottom?: BottomPageBorder
  left?: PageBorder
  right?: PageBorder
  top?: TopPageBorder
}

export interface PageMar extends UnistNode {
  type: 'element'
  name: 'w:pageMar'
  attributes: {
    'w:bottom': string
    'w:footer': string
    'w:gutter': string
    'w:header': string
    'w:left': string
    'w:right': string
    'w:top': string
  }
  children: []
}

export interface PageNumber extends UnistNode {
  type: 'element'
  name: 'w:pageNumber'
  attributes: {
    'w:chapSep'?: ChapterSepVal
    'w:chapStyle'?: string
    'w:fmt'?: NumberFormatVal
    'w:start'?: string
  }
  children: []
}

export interface PageSz extends UnistNode {
  type: 'element'
  name: 'w:pageSz'
  attributes: {
    'w:code'?: string
    'w:h': string
    'w:orient'?: PageOrientationVal
    'w:w': string
  }
  children: []
}

export interface Panose extends UnistNode {
  type: 'element'
  name: 'w:panose'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface PaperSource extends UnistNode {
  type: 'element'
  name: 'w:paperSource'
  attributes: {
    'w:first': string
    'w:other': string
  }
  children: []
}

export interface ParaRPr extends UnistNode {
  type: 'element'
  name: 'w:paraRPr'
  attributes: Record<string, never>
  children: RequiredMap<ParaRPrMap>[]
}

export interface ParaRPrMap {
  b?: OnOff<'b'>[]
  bCs?: OnOff<'bCs'>[]
  bdr?: Border[]
  caps?: OnOff<'caps'>[]
  color?: Color[]
  cs?: OnOff<'cs'>[]
  del?: TrackChange<'del'>
  dstrike?: OnOff<'dstrike'>[]
  eastAsianLayout?: EastAsianLayout[]
  effect?: TextEffect[]
  em?: Em[]
  emboss?: OnOff<'emboss'>[]
  fitText?: FitText[]
  highlight?: Highlight[]
  i?: OnOff<'i'>[]
  iCs?: OnOff<'iCs'>[]
  imprint?: OnOff<'imprint'>[]
  ins?: TrackChange<'ins'>
  kern?: HpsMeasure<'kern'>[]
  lang?: Language[]
  moveFrom?: TrackChange<'moveFrom'>
  moveTo?: TrackChange<'moveTo'>
  noProof?: OnOff<'noProof'>[]
  oMath?: OnOff<'oMath'>[]
  outline?: OnOff<'outline'>[]
  position?: SignedHpsMeasure[]
  rFonts?: Fonts[]
  rPrChange?: ParaRPrChange
  rStyle?: StringTag<'rStyle'>[]
  rtl?: OnOff<'rtl'>[]
  shadow?: OnOff<'shadow'>[]
  shd?: Shd[]
  smallCaps?: OnOff<'smallCaps'>[]
  snapToGrid?: OnOff<'snapToGrid'>[]
  spacing?: SignedTwipsMeasure[]
  specVanish?: OnOff<'specVanish'>[]
  strike?: OnOff<'strike'>[]
  sz?: HpsMeasure<'sz'>[]
  szCs?: HpsMeasure<'szCs'>[]
  u?: Underline[]
  vanish?: OnOff<'vanish'>[]
  vertAlign?: VerticalAlignRun[]
  w?: TextScale[]
  webHidden?: OnOff<'webHidden'>[]
}

export type ParaRPrChange = TrackChange & {
  type: 'element'
  name: 'w:paraRPrChange'
  attributes: Record<string, never>
  children: RequiredMap<ParaRPrChangeMap>[]
}

export interface ParaRPrChangeMap {
  rPr: ParaRPrOriginal
}

export interface ParaRPrOriginal extends UnistNode {
  type: 'element'
  name: 'w:paraRPrOriginal'
  attributes: Record<string, never>
  children: RequiredMap<ParaRPrOriginalMap>[]
}

export interface ParaRPrOriginalMap {
  b?: OnOff<'b'>[]
  bCs?: OnOff<'bCs'>[]
  bdr?: Border[]
  caps?: OnOff<'caps'>[]
  color?: Color[]
  cs?: OnOff<'cs'>[]
  del?: TrackChange<'del'>
  dstrike?: OnOff<'dstrike'>[]
  eastAsianLayout?: EastAsianLayout[]
  effect?: TextEffect[]
  em?: Em[]
  emboss?: OnOff<'emboss'>[]
  fitText?: FitText[]
  highlight?: Highlight[]
  i?: OnOff<'i'>[]
  iCs?: OnOff<'iCs'>[]
  imprint?: OnOff<'imprint'>[]
  ins?: TrackChange<'ins'>
  kern?: HpsMeasure<'kern'>[]
  lang?: Language[]
  moveFrom?: TrackChange<'moveFrom'>
  moveTo?: TrackChange<'moveTo'>
  noProof?: OnOff<'noProof'>[]
  oMath?: OnOff<'oMath'>[]
  outline?: OnOff<'outline'>[]
  position?: SignedHpsMeasure[]
  rFonts?: Fonts[]
  rStyle?: StringTag<'rStyle'>[]
  rtl?: OnOff<'rtl'>[]
  shadow?: OnOff<'shadow'>[]
  shd?: Shd[]
  smallCaps?: OnOff<'smallCaps'>[]
  snapToGrid?: OnOff<'snapToGrid'>[]
  spacing?: SignedTwipsMeasure[]
  specVanish?: OnOff<'specVanish'>[]
  strike?: OnOff<'strike'>[]
  sz?: HpsMeasure<'sz'>[]
  szCs?: HpsMeasure<'szCs'>[]
  u?: Underline[]
  vanish?: OnOff<'vanish'>[]
  vertAlign?: VerticalAlignRun[]
  w?: TextScale[]
  webHidden?: OnOff<'webHidden'>[]
}

export interface PBdr extends UnistNode {
  type: 'element'
  name: 'w:pBdr'
  attributes: Record<string, never>
  children: RequiredMap<PBdrMap>[]
}

export interface PBdrMap {
  bar?: Border
  between?: Border
  bottom?: Border
  left?: Border
  right?: Border
  top?: Border
}

export interface Perm extends UnistNode {
  type: 'element'
  name: 'w:perm'
  attributes: {
    'w:displacedByCustomXml'?: DisplacedByCustomXmlVal
    'w:id': string
  }
  children: []
}

export type PermStart = Perm & {
  type: 'element'
  name: 'w:permStart'
  attributes: {
    'w:colFirst'?: string
    'w:colLast'?: string
    'w:ed'?: string
    'w:edGrp'?: EdGrpVal
  }
  children: []
}

export interface Pitch extends UnistNode {
  type: 'element'
  name: 'w:pitch'
  attributes: {
    'w:val': PitchVal
  }
  children: []
}

export interface PixelsMeasure extends UnistNode {
  type: 'element'
  name: 'w:pixelsMeasure'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface Placeholder extends UnistNode {
  type: 'element'
  name: 'w:placeholder'
  attributes: Record<string, never>
  children: RequiredMap<PlaceholderMap>[]
}

export interface PlaceholderMap {
  docPart: StringTag<'docPart'>
}

export type PPr = PPrBase & {
  type: 'element'
  name: 'w:pPr'
  attributes: Record<string, never>
  children: RequiredMap<PPrMap>[]
}

export interface PPrMap {
  pPrChange?: PPrChange
  rPr?: ParaRPr
  sectPr?: SectPr
}

export interface PPrBase extends UnistNode {
  type: 'element'
  name: 'w:pPrBase'
  attributes: Record<string, never>
  children: RequiredMap<PPrBaseMap>[]
}

export interface PPrBaseMap {
  adjustRightInd?: OnOff<'adjustRightInd'>
  autoSpaceDE?: OnOff<'autoSpaceDE'>
  autoSpaceDN?: OnOff<'autoSpaceDN'>
  bidi?: OnOff<'bidi'>
  cnfStyle?: Cnf
  contextualSpacing?: OnOff<'contextualSpacing'>
  divId?: DecimalNumber
  framePr?: FramePr
  ind?: Ind
  jc?: Jc
  keepLines?: OnOff<'keepLines'>
  keepNext?: OnOff<'keepNext'>
  kinsoku?: OnOff<'kinsoku'>
  mirrorIndents?: OnOff<'mirrorIndents'>
  numPr?: NumPr
  outlineLvl?: DecimalNumber
  overflowPunct?: OnOff<'overflowPunct'>
  pageBreakBefore?: OnOff<'pageBreakBefore'>
  pBdr?: PBdr
  pStyle?: StringTag<'pStyle'>
  shd?: Shd
  snapToGrid?: OnOff<'snapToGrid'>
  spacing?: Spacing
  suppressAutoHyphens?: OnOff<'suppressAutoHyphens'>
  suppressLineNumbers?: OnOff<'suppressLineNumbers'>
  suppressOverlap?: OnOff<'suppressOverlap'>
  tabs?: Tabs
  textAlignment?: TextAlignment
  textboxTightWrap?: TextboxTightWrap
  textDirection?: TextDirection
  topLinePunct?: OnOff<'topLinePunct'>
  widowControl?: OnOff<'widowControl'>
  wordWrap?: OnOff<'wordWrap'>
}

export type PPrChange = TrackChange & {
  type: 'element'
  name: 'w:pPrChange'
  attributes: Record<string, never>
  children: RequiredMap<PPrChangeMap>[]
}

export interface PPrChangeMap {
  pPr: PPrBase
}

export interface PPrDefault extends UnistNode {
  type: 'element'
  name: 'w:pPrDefault'
  attributes: Record<string, never>
  children: RequiredMap<PPrDefaultMap>[]
}

export interface PPrDefaultMap {
  pPr?: PPrGeneral
}

export type PPrGeneral = PPrBase & {
  type: 'element'
  name: 'w:pPrGeneral'
  attributes: Record<string, never>
  children: RequiredMap<PPrGeneralMap>[]
}

export interface PPrGeneralMap {
  pPrChange?: PPrChange
}

export interface Proof extends UnistNode {
  type: 'element'
  name: 'w:proof'
  attributes: {
    'w:grammar'?: ProofVal
    'w:spelling'?: ProofVal
  }
  children: []
}

export interface ProofErr extends UnistNode {
  type: 'element'
  name: 'w:proofErr'
  attributes: {
    'w:type': ProofErrVal
  }
  children: []
}

export interface PTab extends UnistNode {
  type: 'element'
  name: 'w:pTab'
  attributes: {
    'w:alignment': PTabAlignmentVal
    'w:leader': PTabLeaderVal
    'w:relativeTo': PTabRelativeToVal
  }
  children: []
}

export interface R extends UnistNode {
  type: 'element'
  name: 'w:r'
  attributes: {
    'w:rsidDel': string
    'w:rsidR': string
    'w:rsidRPr': string
  }
  children: RequiredMap<RMap>[]
}

export interface RMap {
  annotationRef?: Empty<'annotationRef'>[]
  br?: Br[]
  commentReference?: Markup<'commentReference'>[]
  contentPart?: Rel<'contentPart'>[]
  continuationSeparator?: Empty<'continuationSeparator'>[]
  cr?: Empty<'cr'>[]
  dayLong?: Empty<'dayLong'>[]
  dayShort?: Empty<'dayShort'>[]
  delInstrText?: T[]
  delText?: T[]
  drawing?: Drawing[]
  endnoteRef?: Empty<'endnoteRef'>[]
  endnoteReference?: FtnEdnRef<'endnoteReference'>[]
  fldChar?: FldChar[]
  footnoteRef?: Empty<'footnoteRef'>[]
  footnoteReference?: FtnEdnRef<'footnoteReference'>[]
  instrText?: T[]
  lastRenderedPageBreak?: Empty<'lastRenderedPageBreak'>[]
  monthLong?: Empty<'monthLong'>[]
  monthShort?: Empty<'monthShort'>[]
  noBreakHyphen?: Empty<'noBreakHyphen'>[]
  object?: Object[]
  pgNum?: Empty<'pgNum'>[]
  ptab?: PTab[]
  rPr?: RPr
  ruby?: Ruby[]
  separator?: Empty<'separator'>[]
  softHyphen?: Empty<'softHyphen'>[]
  sym?: Sym[]
  t?: T[]
  tab?: Empty<'tab'>[]
  yearLong?: Empty<'yearLong'>[]
  yearShort?: Empty<'yearShort'>[]
}

export interface ReadingModeInkLockDown extends UnistNode {
  type: 'element'
  name: 'w:readingModeInkLockDown'
  attributes: {
    'w:actualPg': string
    'w:fontSz': string
    'w:h': string
    'w:w': string
  }
  children: []
}

export interface RecipientData extends UnistNode {
  type: 'element'
  name: 'w:recipientData'
  attributes: Record<string, never>
  children: RequiredMap<RecipientDataMap>[]
}

export interface RecipientDataMap {
  active?: OnOff<'active'>
  column: DecimalNumber
  uniqueTag: Base64Binary
}

export interface Recipients extends UnistNode {
  type: 'element'
  name: 'w:recipients'
  attributes: Record<string, never>
  children: RequiredMap<RecipientsMap>[]
}

export interface RecipientsMap {
  recipientData: RecipientData[]
}

export interface Rel<tag extends string = 'rel'> extends UnistNode {
  type: 'element'
  name: `w:${tag}`
  attributes: {
    'w:id': string
  }
  children: []
}

export interface Row extends UnistNode {
  type: 'element'
  name: 'w:row'
  attributes: {
    'w:rsidDel': string
    'w:rsidR': string
    'w:rsidRPr': string
    'w:rsidTr': string
  }
  children: RequiredMap<RowMap>[]
}

export interface RowMap {
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlCell[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtCell[]
  tblPrEx?: TblPrEx
  tc?: Tc[]
  trPr?: TrPr
}

export interface RPr extends UnistNode {
  type: 'element'
  name: 'w:rPr'
  attributes: Record<string, never>
  children: RequiredMap<RPrMap>[]
}

export interface RPrMap {
  b?: OnOff<'b'>[]
  bCs?: OnOff<'bCs'>[]
  bdr?: Border[]
  caps?: OnOff<'caps'>[]
  color?: Color[]
  cs?: OnOff<'cs'>[]
  dstrike?: OnOff<'dstrike'>[]
  eastAsianLayout?: EastAsianLayout[]
  effect?: TextEffect[]
  em?: Em[]
  emboss?: OnOff<'emboss'>[]
  fitText?: FitText[]
  highlight?: Highlight[]
  i?: OnOff<'i'>[]
  iCs?: OnOff<'iCs'>[]
  imprint?: OnOff<'imprint'>[]
  kern?: HpsMeasure<'kern'>[]
  lang?: Language[]
  noProof?: OnOff<'noProof'>[]
  oMath?: OnOff<'oMath'>[]
  outline?: OnOff<'outline'>[]
  position?: SignedHpsMeasure[]
  rFonts?: Fonts[]
  rPrChange?: RPrChange
  rStyle?: StringTag<'rStyle'>[]
  rtl?: OnOff<'rtl'>[]
  shadow?: OnOff<'shadow'>[]
  shd?: Shd[]
  smallCaps?: OnOff<'smallCaps'>[]
  snapToGrid?: OnOff<'snapToGrid'>[]
  spacing?: SignedTwipsMeasure[]
  specVanish?: OnOff<'specVanish'>[]
  strike?: OnOff<'strike'>[]
  sz?: HpsMeasure<'sz'>[]
  szCs?: HpsMeasure<'szCs'>[]
  u?: Underline[]
  vanish?: OnOff<'vanish'>[]
  vertAlign?: VerticalAlignRun[]
  w?: TextScale[]
  webHidden?: OnOff<'webHidden'>[]
}

export type RPrChange = TrackChange & {
  type: 'element'
  name: 'w:rPrChange'
  attributes: Record<string, never>
  children: RequiredMap<RPrChangeMap>[]
}

export interface RPrChangeMap {
  rPr: RPrOriginal
}

export interface RPrDefault extends UnistNode {
  type: 'element'
  name: 'w:rPrDefault'
  attributes: Record<string, never>
  children: RequiredMap<RPrDefaultMap>[]
}

export interface RPrDefaultMap {
  rPr?: RPr
}

export interface RPrOriginal extends UnistNode {
  type: 'element'
  name: 'w:rPrOriginal'
  attributes: Record<string, never>
  children: RequiredMap<RPrOriginalMap>[]
}

export interface RPrOriginalMap {
  b?: OnOff<'b'>[]
  bCs?: OnOff<'bCs'>[]
  bdr?: Border[]
  caps?: OnOff<'caps'>[]
  color?: Color[]
  cs?: OnOff<'cs'>[]
  dstrike?: OnOff<'dstrike'>[]
  eastAsianLayout?: EastAsianLayout[]
  effect?: TextEffect[]
  em?: Em[]
  emboss?: OnOff<'emboss'>[]
  fitText?: FitText[]
  highlight?: Highlight[]
  i?: OnOff<'i'>[]
  iCs?: OnOff<'iCs'>[]
  imprint?: OnOff<'imprint'>[]
  kern?: HpsMeasure<'kern'>[]
  lang?: Language[]
  noProof?: OnOff<'noProof'>[]
  oMath?: OnOff<'oMath'>[]
  outline?: OnOff<'outline'>[]
  position?: SignedHpsMeasure[]
  rFonts?: Fonts[]
  rStyle?: StringTag<'rStyle'>[]
  rtl?: OnOff<'rtl'>[]
  shadow?: OnOff<'shadow'>[]
  shd?: Shd[]
  smallCaps?: OnOff<'smallCaps'>[]
  snapToGrid?: OnOff<'snapToGrid'>[]
  spacing?: SignedTwipsMeasure[]
  specVanish?: OnOff<'specVanish'>[]
  strike?: OnOff<'strike'>[]
  sz?: HpsMeasure<'sz'>[]
  szCs?: HpsMeasure<'szCs'>[]
  u?: Underline[]
  vanish?: OnOff<'vanish'>[]
  vertAlign?: VerticalAlignRun[]
  w?: TextScale[]
  webHidden?: OnOff<'webHidden'>[]
}

export interface Ruby extends UnistNode {
  type: 'element'
  name: 'w:ruby'
  attributes: Record<string, never>
  children: RequiredMap<RubyMap>[]
}

export interface RubyMap {
  rt: RubyContent
  rubyBase: RubyContent
  rubyPr: RubyPr
}

export interface RubyAlign extends UnistNode {
  type: 'element'
  name: 'w:rubyAlign'
  attributes: {
    'w:val': RubyAlignVal
  }
  children: []
}

export interface RubyContent extends UnistNode {
  type: 'element'
  name: 'w:rubyContent'
  attributes: Record<string, never>
  children: RequiredMap<RubyContentMap>[]
}

export interface RubyContentMap {
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
}

export interface RubyPr extends UnistNode {
  type: 'element'
  name: 'w:rubyPr'
  attributes: Record<string, never>
  children: RequiredMap<RubyPrMap>[]
}

export interface RubyPrMap {
  dirty?: OnOff<'dirty'>
  hps: HpsMeasure<'hps'>
  hpsBaseText: HpsMeasure<'hpsBaseText'>
  hpsRaise: HpsMeasure<'hpsRaise'>
  lid: Lang
  rubyAlign: RubyAlign
}

export interface RunTrackChange<tag extends string = 'runTrackChange'>
  extends TrackChange<tag> {
  type: 'element'
  name: `w:${tag}`
  attributes: {
    'w:id': string
    'w:author': string
    'w:date'?: string
  }
  children: RequiredMap<RunTrackChangeMap>[]
}

export interface RunTrackChangeMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  // dir?: DirContentRun[]
  // ins?: RunTrackChange<'ins'>[]
  // moveFrom?: RunTrackChange<'moveFrom'>[]
  // moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  // moveFromRangeStart?: MoveBookmark[]
  // moveTo?: RunTrackChange<'moveTo'>[]
  // moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  // moveToRangeStart?: MoveBookmark[]
  // oMath?: m.OMath[]
  // oMathPara?: m.OMathPara[]
  // permEnd?: Perm[]
  // permStart?: PermStart[]
  // proofErr?: ProofErr[]
  // r?: R[]
  // sdt?: SdtRun[]
  // smartTag?: SmartTagRun[]
  // acc?: m.Acc[]
  // bar?: m.Bar[]
  // borderBox?: m.BorderBox[]
  // box?: m.Box[]
  // d?: m.D[]
  // eqArr?: m.EqArr[]
  // f?: m.F[]
  // func?: m.Func[]
  // groupChr?: m.GroupChr[]
  // limLow?: m.LimLow[]
  // limUpp?: m.LimUpp[]
  // m?: m.M[]
  // nary?: m.Nary[]
  // phant?: m.Phant[]
  // mr?: m.R[]
  // rad?: m.Rad[]
  // sPre?: m.SPre[]
  // sSub?: m.SSub[]
  // sSubSup?: m.SSubSup[]
  // sSup?: m.SSup[]
}

export interface SaveThroughXslt extends UnistNode {
  type: 'element'
  name: 'w:saveThroughXslt'
  attributes: {
    'w:id'?: string
    'w:solutionID'?: string
  }
  children: []
}

export interface SdtBlock extends UnistNode {
  type: 'element'
  name: 'w:sdtBlock'
  attributes: Record<string, never>
  children: RequiredMap<SdtBlockMap>[]
}

export interface SdtBlockMap {
  sdtContent?: SdtContentBlock
  sdtEndPr?: SdtEndPr
  sdtPr?: SdtPr
}

export interface SdtCell extends UnistNode {
  type: 'element'
  name: 'w:sdtCell'
  attributes: Record<string, never>
  children: RequiredMap<SdtCellMap>[]
}

export interface SdtCellMap {
  sdtContent?: SdtContentCell
  sdtEndPr?: SdtEndPr
  sdtPr?: SdtPr
}

export interface SdtComboBox extends UnistNode {
  type: 'element'
  name: 'w:sdtComboBox'
  attributes: {
    'w:lastValue'?: string
  }
  children: RequiredMap<SdtComboBoxMap>[]
}

export interface SdtComboBoxMap {
  listItem?: SdtListItem[]
}

export interface SdtContentBlock extends UnistNode {
  type: 'element'
  name: 'w:sdtContentBlock'
  attributes: Record<string, never>
  children: RequiredMap<SdtContentBlockMap>[]
}

export interface SdtContentBlockMap {
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  p?: P[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtBlock[]
  tbl?: Tbl[]
}

export interface SdtContentCell extends UnistNode {
  type: 'element'
  name: 'w:sdtContentCell'
  attributes: Record<string, never>
  children: RequiredMap<SdtContentCellMap>[]
}

export interface SdtContentCellMap {
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlCell[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtCell[]
  tc?: Tc[]
}

export interface SdtContentRow extends UnistNode {
  type: 'element'
  name: 'w:sdtContentRow'
  attributes: Record<string, never>
  children: RequiredMap<SdtContentRowMap>[]
}

export interface SdtContentRowMap {
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRow[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtRow[]
  tr?: Row[]
}

export interface SdtContentRun extends UnistNode {
  type: 'element'
  name: 'w:sdtContentRun'
  attributes: Record<string, never>
  children: RequiredMap<SdtContentRunMap>[]
}

export interface SdtContentRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel<'subDoc'>[]
}

export interface SdtDate extends UnistNode {
  type: 'element'
  name: 'w:sdtDate'
  attributes: {
    'w:fullDate'?: string
  }
  children: RequiredMap<SdtDateMap>[]
}

export interface SdtDateMap {
  calendar?: CalendarType
  dateFormat?: StringTag<'dateFormat'>
  lid?: Lang
  storeMappedDataAs?: SdtDateMappingType
}

export interface SdtDateMappingType extends UnistNode {
  type: 'element'
  name: 'w:sdtDateMappingType'
  attributes: {
    'w:val': SdtDateMappingTypeVal
  }
  children: []
}

export interface SdtDocPart extends UnistNode {
  type: 'element'
  name: 'w:sdtDocPart'
  attributes: Record<string, never>
  children: RequiredMap<SdtDocPartMap>[]
}

export interface SdtDocPartMap {
  docPartCategory?: StringTag<'docPartCategory'>
  docPartGallery?: StringTag<'docPartGallery'>
  docPartUnique?: OnOff<'docPartUnique'>
}

export interface SdtDropDownList extends UnistNode {
  type: 'element'
  name: 'w:sdtDropDownList'
  attributes: {
    'w:lastValue'?: string
  }
  children: RequiredMap<SdtDropDownListMap>[]
}

export interface SdtDropDownListMap {
  listItem?: SdtListItem[]
}

export interface SdtEndPr extends UnistNode {
  type: 'element'
  name: 'w:sdtEndPr'
  attributes: Record<string, never>
  children: RequiredMap<SdtEndPrMap>[]
}

export interface SdtEndPrMap {
  rPr?: RPr[]
}

export interface SdtListItem extends UnistNode {
  type: 'element'
  name: 'w:sdtListItem'
  attributes: {
    'w:displayText': string
    'w:value': string
  }
  children: []
}

export interface SdtPr extends UnistNode {
  type: 'element'
  name: 'w:sdtPr'
  attributes: Record<string, never>
  children: RequiredMap<SdtPrMap>[]
}

export interface SdtPrMap {
  alias?: StringTag<'alias'>
  bibliography?: Empty<'bibliography'>
  citation?: Empty<'citation'>
  comboBox?: SdtComboBox
  dataBinding?: DataBinding
  date?: SdtDate
  docPartList?: SdtDocPart
  docPartObj?: SdtDocPart
  dropDownList?: SdtDropDownList
  equation?: Empty<'equation'>
  group?: Empty<'group'>
  id?: DecimalNumber
  label?: DecimalNumber
  lock?: Lock
  picture?: Empty<'picture'>
  placeholder?: Placeholder
  richText?: Empty<'richText'>
  rPr?: RPr
  showingPlcHdr?: OnOff<'showingPlcHdr'>
  tabIndex?: UnsignedDecimalNumber
  tag?: StringTag<'tag'>
  temporary?: OnOff<'temporary'>
  text?: SdtText
}

export interface SdtRow extends UnistNode {
  type: 'element'
  name: 'w:sdtRow'
  attributes: Record<string, never>
  children: RequiredMap<SdtRowMap>[]
}

export interface SdtRowMap {
  sdtContent?: SdtContentRow
  sdtEndPr?: SdtEndPr
  sdtPr?: SdtPr
}

export interface SdtRun extends UnistNode {
  type: 'element'
  name: 'w:sdtRun'
  attributes: Record<string, never>
  children: RequiredMap<SdtRunMap>[]
}

export interface SdtRunMap {
  sdtContent?: SdtContentRun
  sdtEndPr?: SdtEndPr
  sdtPr?: SdtPr
}

export interface SdtText extends UnistNode {
  type: 'element'
  name: 'w:sdtText'
  attributes: {
    'w:multiLine': string
  }
  children: []
}

export interface SectPr extends UnistNode {
  type: 'element'
  name: 'w:sectPr'
  attributes: {
    'w:rsidDel': string
    'w:rsidR': string
    'w:rsidRPr': string
    'w:rsidSect': string
  }
  children: RequiredMap<SectPrMap>[]
}

export interface SectPrMap {
  bidi?: OnOff<'bidi'>
  cols?: Columns
  docGrid?: DocGrid
  endnotePr?: EdnProps
  footerReference?: HdrFtrRef[]
  footnotePr?: FtnProps
  formProt?: OnOff<'formProt'>
  headerReference?: HdrFtrRef[]
  lnNumType?: LineNumber
  noEndnote?: OnOff<'noEndnote'>
  paperSrc?: PaperSource
  pgBorders?: PageBorders
  pgMar?: PageMar
  pgNumType?: PageNumber
  pgSz?: PageSz
  printerSettings?: Rel<'printerSettings'>
  rtlGutter?: OnOff<'rtlGutter'>
  sectPrChange?: SectPrChange
  textDirection?: TextDirection
  titlePg?: OnOff<'titlePg'>
  type?: SectType
  vAlign?: VerticalJc
}

export interface SectPrBase extends UnistNode {
  type: 'element'
  name: 'w:sectPrBase'
  attributes: {
    'w:rsidDel': string
    'w:rsidR': string
    'w:rsidRPr': string
    'w:rsidSect': string
  }
  children: RequiredMap<SectPrBaseMap>[]
}

export interface SectPrBaseMap {
  bidi?: OnOff<'bidi'>
  cols?: Columns
  docGrid?: DocGrid
  endnotePr?: EdnProps
  footnotePr?: FtnProps
  formProt?: OnOff<'formProt'>
  lnNumType?: LineNumber
  noEndnote?: OnOff<'noEndnote'>
  paperSrc?: PaperSource
  pgBorders?: PageBorders
  pgMar?: PageMar
  pgNumType?: PageNumber
  pgSz?: PageSz
  printerSettings?: Rel<'printerSettings'>
  rtlGutter?: OnOff<'rtlGutter'>
  textDirection?: TextDirection
  titlePg?: OnOff<'titlePg'>
  type?: SectType
  vAlign?: VerticalJc
}

export type SectPrChange = TrackChange & {
  type: 'element'
  name: 'w:sectPrChange'
  attributes: Record<string, never>
  children: RequiredMap<SectPrChangeMap>[]
}

export interface SectPrChangeMap {
  sectPr?: SectPrBase
}

export interface SectType extends UnistNode {
  type: 'element'
  name: 'w:sectType'
  attributes: {
    'w:val': SectionMarkVal
  }
  children: []
}

export interface Settings extends UnistNode {
  type: 'element'
  name: 'w:settings'
  attributes: Record<string, never>
  children: RequiredMap<SettingsMap>[]
}

export interface SettingsMap {
  activeWritingStyle?: WritingStyle[]
  alignBordersAndEdges?: OnOff<'alignBordersAndEdges'>
  alwaysMergeEmptyNamespace?: OnOff<'alwaysMergeEmptyNamespace'>
  alwaysShowPlaceholderText?: OnOff<'alwaysShowPlaceholderText'>
  attachedSchema?: StringTag<'attachedSchema'>[]
  attachedTemplate?: Rel<'attachedTemplate'>
  autoFormatOverride?: OnOff<'autoFormatOverride'>
  autoHyphenation?: OnOff<'autoHyphenation'>
  bookFoldPrinting?: OnOff<'bookFoldPrinting'>
  bookFoldPrintingSheets?: DecimalNumber
  bookFoldRevPrinting?: OnOff<'bookFoldRevPrinting'>
  bordersDoNotSurroundFooter?: OnOff<'bordersDoNotSurroundFooter'>
  bordersDoNotSurroundHeader?: OnOff<'bordersDoNotSurroundHeader'>
  captions?: Captions
  characterSpacingControl?: CharacterSpacing
  clickAndTypeStyle?: StringTag<'clickAndTypeStyle'>
  clrSchemeMapping?: ColorSchemeMapping
  compat?: Compat
  consecutiveHyphenLimit?: DecimalNumber
  decimalSymbol?: StringTag<'decimalSymbol'>
  defaultTableStyle?: StringTag<'defaultTableStyle'>
  defaultTabStop?: TwipsMeasure
  displayBackgroundShape?: OnOff<'displayBackgroundShape'>
  displayHorizontalDrawingGridEvery?: DecimalNumber
  displayVerticalDrawingGridEvery?: DecimalNumber
  documentProtection?: DocProtect
  documentType?: DocType
  docVars?: DocVars
  doNotAutoCompressPictures?: OnOff<'doNotAutoCompressPictures'>
  doNotDemarcateInvalidXml?: OnOff<'doNotDemarcateInvalidXml'>
  doNotDisplayPageBoundaries?: OnOff<'doNotDisplayPageBoundaries'>
  doNotEmbedSmartTags?: OnOff<'doNotEmbedSmartTags'>
  doNotHyphenateCaps?: OnOff<'doNotHyphenateCaps'>
  doNotIncludeSubdocsInStats?: OnOff<'doNotIncludeSubdocsInStats'>
  doNotShadeFormData?: OnOff<'doNotShadeFormData'>
  doNotTrackFormatting?: OnOff<'doNotTrackFormatting'>
  doNotTrackMoves?: OnOff<'doNotTrackMoves'>
  doNotUseMarginsForDrawingGridOrigin?: OnOff<'doNotUseMarginsForDrawingGridOrigin'>
  doNotValidateAgainstSchema?: OnOff<'doNotValidateAgainstSchema'>
  drawingGridHorizontalOrigin?: TwipsMeasure
  drawingGridHorizontalSpacing?: TwipsMeasure
  drawingGridVerticalOrigin?: TwipsMeasure
  drawingGridVerticalSpacing?: TwipsMeasure
  embedSystemFonts?: OnOff<'embedSystemFonts'>
  embedTrueTypeFonts?: OnOff<'embedTrueTypeFonts'>
  endnotePr?: EdnDocProps
  evenAndOddHeaders?: OnOff<'evenAndOddHeaders'>
  footnotePr?: FtnDocProps
  forceUpgrade?: Empty<'forceUpgrade'>
  formsDesign?: OnOff<'formsDesign'>
  gutterAtTop?: OnOff<'gutterAtTop'>
  hideGrammaticalErrors?: OnOff<'hideGrammaticalErrors'>
  hideSpellingErrors?: OnOff<'hideSpellingErrors'>
  hyphenationZone?: TwipsMeasure
  ignoreMixedContent?: OnOff<'ignoreMixedContent'>
  linkStyles?: OnOff<'linkStyles'>
  listSeparator?: StringTag<'listSeparator'>
  mailMerge?: MailMerge
  mathPr?: m.MathPr
  mirrorMargins?: OnOff<'mirrorMargins'>
  noLineBreaksAfter?: Kinsoku
  noLineBreaksBefore?: Kinsoku
  noPunctuationKerning?: OnOff<'noPunctuationKerning'>
  printFormsData?: OnOff<'printFormsData'>
  printFractionalCharacterWidth?: OnOff<'printFractionalCharacterWidth'>
  printPostScriptOverText?: OnOff<'printPostScriptOverText'>
  printTwoOnOne?: OnOff<'printTwoOnOne'>
  proofState?: Proof
  readModeInkLockDown?: ReadingModeInkLockDown
  removeDateAndTime?: OnOff<'removeDateAndTime'>
  removePersonalInformation?: OnOff<'removePersonalInformation'>
  revisionView?: TrackChangesView
  rsids?: DocRsids
  saveFormsData?: OnOff<'saveFormsData'>
  saveInvalidXml?: OnOff<'saveInvalidXml'>
  savePreviewPicture?: OnOff<'savePreviewPicture'>
  saveSubsetFonts?: OnOff<'saveSubsetFonts'>
  saveThroughXslt?: SaveThroughXslt
  saveXmlDataOnly?: OnOff<'saveXmlDataOnly'>
  schemaLibrary?: sl.SchemaLibrary
  showEnvelope?: OnOff<'showEnvelope'>
  showXMLTags?: OnOff<'showXMLTags'>
  smartTagType?: SmartTagType[]
  strictFirstAndLastChars?: OnOff<'strictFirstAndLastChars'>
  styleLockQFSet?: OnOff<'styleLockQFSet'>
  styleLockTheme?: OnOff<'styleLockTheme'>
  stylePaneFormatFilter?: StylePaneFilter
  stylePaneSortMethod?: StyleSort
  summaryLength?: DecimalNumberOrPrecent
  themeFontLang?: Language
  trackRevisions?: OnOff<'trackRevisions'>
  updateFields?: OnOff<'updateFields'>
  useXSLTWhenSaving?: OnOff<'useXSLTWhenSaving'>
  view?: View
  writeProtection?: WriteProtection
  zoom?: Zoom
}

export interface Shd extends UnistNode {
  type: 'element'
  name: 'w:shd'
  attributes: {
    'w:color'?: string
    'w:fill'?: string
    'w:themeColor'?: ThemeColorVal
    'w:themeFill'?: ThemeColorVal
    'w:themeFillShade'?: string
    'w:themeFillTint'?: string
    'w:themeShade'?: string
    'w:themeTint'?: string
    'w:val': ShdVal
  }
  children: []
}

export interface SignedHpsMeasure extends UnistNode {
  type: 'element'
  name: 'w:signedHpsMeasure'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface SignedTwipsMeasure extends UnistNode {
  type: 'element'
  name: 'w:signedTwipsMeasure'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface SimpleField extends UnistNode {
  type: 'element'
  name: 'w:simpleField'
  attributes: {
    'w:dirty': string
    'w:fldLock': string
    'w:instr': string
  }
  children: RequiredMap<SimpleFieldMap>[]
}

export interface SimpleFieldMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel<'subDoc'>[]
}

export interface SmartTagPr extends UnistNode {
  type: 'element'
  name: 'w:smartTagPr'
  attributes: Record<string, never>
  children: RequiredMap<SmartTagPrMap>[]
}

export interface SmartTagPrMap {
  attr?: Attr[]
}

export interface SmartTagRun extends UnistNode {
  type: 'element'
  name: 'w:smartTagRun'
  attributes: {
    'w:element': string
    'w:uri': string
  }
  children: RequiredMap<SmartTagRunMap>[]
}

export interface SmartTagRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  smartTagPr?: SmartTagPr
  subDoc?: Rel<'subDoc'>[]
}

export interface SmartTagType extends UnistNode {
  type: 'element'
  name: 'w:smartTagType'
  attributes: {
    'w:name': string
    'w:namespaceuri': string
    'w:url': string
  }
  children: []
}

export interface Spacing extends UnistNode {
  type: 'element'
  name: 'w:spacing'
  attributes: {
    'w:after'?: string
    'w:afterAutospacing'?: string
    'w:afterLines'?: string
    'w:before'?: string
    'w:beforeAutospacing'?: string
    'w:beforeLines'?: string
    'w:line'?: string
    'w:lineRule'?: LineSpacingRuleVal
  }
  children: []
}

export interface StringTag<tag extends string = 'string'> extends UnistNode {
  type: 'element'
  name: `w:${tag}`
  attributes: {
    'w:val': string
  }
  children: []
}

export interface Style extends UnistNode {
  type: 'element'
  name: 'w:style'
  attributes: {
    'w:customStyle'?: string
    'w:default'?: string
    'w:styleId'?: string
    'w:type'?: StyleTypeVal
  }
  children: RequiredMap<StyleMap>[]
}

export interface StyleMap {
  aliases?: StringTag<'aliases'>
  autoRedefine?: OnOff<'autoRedefine'>
  basedOn?: StringTag<'basedOn'>
  hidden?: OnOff<'hidden'>
  link?: StringTag<'link'>
  locked?: OnOff<'locked'>
  name?: StringTag<'name'>
  next?: StringTag<'next'>
  personal?: OnOff<'personal'>
  personalCompose?: OnOff<'personalCompose'>
  personalReply?: OnOff<'personalReply'>
  pPr?: PPrGeneral
  qFormat?: OnOff<'qFormat'>
  rPr?: RPr
  rsid?: LongHexNumber
  semiHidden?: OnOff<'semiHidden'>
  tblPr?: TblPrBase
  tblStylePr?: TblStylePr[]
  tcPr?: TcPr
  trPr?: TrPr
  uiPriority?: DecimalNumber
  unhideWhenUsed?: OnOff<'unhideWhenUsed'>
}

export interface StylePaneFilter extends UnistNode {
  type: 'element'
  name: 'w:stylePaneFilter'
  attributes: {
    'w:allStyles': string
    'w:alternateStyleNames': string
    'w:clearFormatting': string
    'w:customStyles': string
    'w:directFormattingOnNumbering': string
    'w:directFormattingOnParagraphs': string
    'w:directFormattingOnRuns': string
    'w:directFormattingOnTables': string
    'w:headingStyles': string
    'w:latentStyles': string
    'w:numberingStyles': string
    'w:stylesInUse': string
    'w:tableStyles': string
    'w:top3HeadingStyles': string
    'w:visibleStyles': string
  }
  children: []
}

export interface Styles extends UnistNode {
  type: 'element'
  name: 'w:styles'
  attributes: Record<string, never>
  children: RequiredMap<StylesMap>[]
}

export interface StylesMap {
  docDefaults?: DocDefaults
  latentStyles?: LatentStyles
  style?: Style[]
}

export interface StyleSort extends UnistNode {
  type: 'element'
  name: 'w:styleSort'
  attributes: {
    'w:val': StyleSortVal
  }
  children: []
}

export interface Sym extends UnistNode {
  type: 'element'
  name: 'w:sym'
  attributes: {
    'w:char': string
    'w:font': string
  }
  children: []
}

export interface Tabs extends UnistNode {
  type: 'element'
  name: 'w:tabs'
  attributes: Record<string, never>
  children: RequiredMap<TabsMap>[]
}

export interface TabsMap {
  tab: TabStop[]
}

export interface TabStop extends UnistNode {
  type: 'element'
  name: 'w:tabStop'
  attributes: {
    'w:leader'?: TabTlcVal
    'w:pos': string
    'w:val': TabJcVal
  }
  children: []
}

export interface TargetScreenSz extends UnistNode {
  type: 'element'
  name: 'w:targetScreenSz'
  attributes: {
    'w:val': TargetScreenSzVal
  }
  children: []
}

export interface Tbl extends UnistNode {
  type: 'element'
  name: 'w:tbl'
  attributes: Record<string, never>
  children: RequiredMap<TblMap>[]
}

export interface TblMap {
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlRow[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtRow[]
  tblGrid: TblGrid
  tblPr: TblPr
  tr?: Row[]
}

export interface TblBorders extends UnistNode {
  type: 'element'
  name: 'w:tblBorders'
  attributes: Record<string, never>
  children: RequiredMap<TblBordersMap>[]
}

export interface TblBordersMap {
  bottom?: Border
  end?: Border
  insideH?: Border
  insideV?: Border
  start?: Border
  top?: Border
}

export interface TblCellMar extends UnistNode {
  type: 'element'
  name: 'w:tblCellMar'
  attributes: Record<string, never>
  children: RequiredMap<TblCellMarMap>[]
}

export interface TblCellMarMap {
  bottom?: TblWidth
  end?: TblWidth
  start?: TblWidth
  top?: TblWidth
}

export type TblGrid = TblGridBase & {
  type: 'element'
  name: 'w:tblGrid'
  attributes: Record<string, never>
  children: RequiredMap<TblGridMap>[]
}

export interface TblGridMap {
  tblGridChange?: TblGridChange
}

export interface TblGridBase extends UnistNode {
  type: 'element'
  name: 'w:tblGridBase'
  attributes: Record<string, never>
  children: RequiredMap<TblGridBaseMap>[]
}

export interface TblGridBaseMap {
  gridCol?: TblGridCol[]
}

export type TblGridChange = Markup & {
  type: 'element'
  name: 'w:tblGridChange'
  attributes: Record<string, never>
  children: RequiredMap<TblGridChangeMap>[]
}

export interface TblGridChangeMap {
  tblGrid: TblGridBase
}

export interface TblGridCol extends UnistNode {
  type: 'element'
  name: 'w:tblGridCol'
  attributes: {
    'w:w': string
  }
  children: []
}

export interface TblLayoutType extends UnistNode {
  type: 'element'
  name: 'w:tblLayoutType'
  attributes: {
    'w:type': TblLayoutTypeVal
  }
  children: []
}

export interface TblLook extends UnistNode {
  type: 'element'
  name: 'w:tblLook'
  attributes: {
    'w:firstColumn': string
    'w:firstRow': string
    'w:lastColumn': string
    'w:lastRow': string
    'w:noHBand': string
    'w:noVBand': string
  }
  children: []
}

export interface TblOverlap extends UnistNode {
  type: 'element'
  name: 'w:tblOverlap'
  attributes: {
    'w:val': TblOverlapVal
  }
  children: []
}

export interface TblPPr extends UnistNode {
  type: 'element'
  name: 'w:tblPPr'
  attributes: {
    'w:bottomFromText': string
    'w:horzAnchor': HAnchorVal
    'w:leftFromText': string
    'w:rightFromText': string
    'w:tblpX': string
    'w:tblpXSpec': s.XAlignVal
    'w:tblpY': string
    'w:tblpYSpec': s.YAlignVal
    'w:topFromText': string
    'w:vertAnchor': VAnchorVal
  }
}

export type TblPr = TblPrBase & {
  type: 'element'
  name: 'w:tblPr'
  attributes: Record<string, never>
  children: RequiredMap<TblPrMap>[]
}

export interface TblPrMap {
  tblPrChange?: TblPrChange
}

export interface TblPrBase extends UnistNode {
  type: 'element'
  name: 'w:tblPrBase'
  attributes: Record<string, never>
  children: RequiredMap<TblPrBaseMap>[]
}

export interface TblPrBaseMap {
  bidiVisual?: OnOff<'bidiVisual'>
  jc?: JcTable
  shd?: Shd
  tblBorders?: TblBorders
  tblCaption?: StringTag<'tblCaption'>
  tblCellMar?: TblCellMar
  tblCellSpacing?: TblWidth
  tblDescription?: StringTag<'tblDescription'>
  tblInd?: TblWidth
  tblLayout?: TblLayoutType
  tblLook?: TblLook
  tblOverlap?: TblOverlap
  tblpPr?: TblPPr
  tblStyle?: StringTag<'tblStyle'>
  tblStyleColBandSize?: DecimalNumber
  tblStyleRowBandSize?: DecimalNumber
  tblW?: TblWidth
}

export type TblPrChange = TrackChange & {
  type: 'element'
  name: 'w:tblPrChange'
  attributes: Record<string, never>
  children: RequiredMap<TblPrChangeMap>[]
}

export interface TblPrChangeMap {
  tblPr: TblPrBase
}

export type TblPrEx = TblPrExBase & {
  type: 'element'
  name: 'w:tblPrEx'
  attributes: Record<string, never>
  children: RequiredMap<TblPrExMap>[]
}

export interface TblPrExMap {
  tblPrExChange?: TblPrExChange
}

export interface TblPrExBase extends UnistNode {
  type: 'element'
  name: 'w:tblPrExBase'
  attributes: Record<string, never>
  children: RequiredMap<TblPrExBaseMap>[]
}

export interface TblPrExBaseMap {
  jc?: JcTable
  shd?: Shd
  tblBorders?: TblBorders
  tblCellMar?: TblCellMar
  tblCellSpacing?: TblWidth
  tblInd?: TblWidth
  tblLayout?: TblLayoutType
  tblLook?: TblLook
  tblW?: TblWidth
}

export type TblPrExChange = TrackChange & {
  type: 'element'
  name: 'w:tblPrExChange'
  attributes: Record<string, never>
  children: RequiredMap<TblPrExChangeMap>[]
}

export interface TblPrExChangeMap {
  tblPrEx: TblPrExBase
}

export interface TblStylePr extends UnistNode {
  type: 'element'
  name: 'w:tblStylePr'
  attributes: {
    'w:type': TblStyleOverrideTypeVal
  }
  children: RequiredMap<TblStylePrMap>[]
}

export interface TblStylePrMap {
  pPr?: PPrGeneral
  rPr?: RPr
  tblPr?: TblPrBase
  tcPr?: TcPr
  trPr?: TrPr
}

export interface TblWidth extends UnistNode {
  type: 'element'
  name: 'w:tblWidth'
  attributes: {
    'w:type': TblWidthVal
    'w:w': string
  }
  children: []
}

export interface Tc extends UnistNode {
  type: 'element'
  name: 'w:tc'
  attributes: {
    'w:id'?: string
  }
  children: RequiredMap<TcMap>[]
}

export interface TcMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange<'bookmarkEnd'>[]
  bookmarkStart?: Bookmark<'bookmarkStart'>[]
  commentRangeEnd?: MarkupRange<'commentRangeEnd'>[]
  commentRangeStart?: MarkupRange<'commentRangeStart'>[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup<'customXmlDelRangeEnd'>[]
  customXmlDelRangeStart?: TrackChange<'customXmlDelRangeStart'>[]
  customXmlInsRangeEnd?: Markup<'customXmlInsRangeEnd'>[]
  customXmlInsRangeStart?: TrackChange<'customXmlInsRangeStart'>[]
  customXmlMoveFromRangeEnd?: Markup<'customXmlMoveFromRangeEnd'>[]
  customXmlMoveFromRangeStart?: TrackChange<'customXmlMoveFromRangeStart'>[]
  customXmlMoveToRangeEnd?: Markup<'customXmlMoveToRangeEnd'>[]
  customXmlMoveToRangeStart?: TrackChange<'customXmlMoveToRangeStart'>[]
  del?: RunTrackChange<'del'>[]
  ins?: RunTrackChange<'ins'>[]
  moveFrom?: RunTrackChange<'moveFrom'>[]
  moveFromRangeEnd?: MarkupRange<'moveFromRangeEnd'>[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange<'moveTo'>[]
  moveToRangeEnd?: MarkupRange<'moveToRangeEnd'>[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  p?: P[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtBlock[]
  tbl?: Tbl[]
  tcPr?: TcPr
}

export interface TcBorders extends UnistNode {
  type: 'element'
  name: 'w:tcBorders'
  attributes: Record<string, never>
  children: RequiredMap<TcBordersMap>[]
}

export interface TcBordersMap {
  bottom?: Border
  end?: Border
  insideH?: Border
  insideV?: Border
  start?: Border
  tl2br?: Border
  top?: Border
  tr2bl?: Border
}

export interface TcMar extends UnistNode {
  type: 'element'
  name: 'w:tcMar'
  attributes: Record<string, never>
  children: RequiredMap<TcMarMap>[]
}

export interface TcMarMap {
  bottom?: TblWidth
  end?: TblWidth
  start?: TblWidth
  top?: TblWidth
}

export type TcPr = TcPrInner & {
  type: 'element'
  name: 'w:tcPr'
  attributes: Record<string, never>
  children: RequiredMap<TcPrMap>[]
}

export interface TcPrMap {
  tcPrChange?: TcPrChange
}

export interface TcPrBase extends UnistNode {
  type: 'element'
  name: 'w:tcPrBase'
  attributes: Record<string, never>
  children: RequiredMap<TcPrBaseMap>[]
}

export interface TcPrBaseMap {
  cnfStyle?: Cnf
  gridSpan?: DecimalNumber
  headers?: Headers
  hideMark?: OnOff<'hideMark'>
  noWrap?: OnOff<'noWrap'>
  shd?: Shd
  tcBorders?: TcBorders
  tcFitText?: OnOff<'tcFitText'>
  tcMar?: TcMar
  tcW?: TblWidth
  textDirection?: TextDirection
  vAlign?: VerticalJc
  vMerge?: VMerge
}

export type TcPrChange = TrackChange & {
  type: 'element'
  name: 'w:tcPrChange'
  attributes: Record<string, never>
  children: RequiredMap<TcPrChangeMap>[]
}

export interface TcPrChangeMap {
  tcPr: TcPrInner
}

export type TcPrInner = TcPrBase & {
  type: 'element'
  name: 'w:tcPrInner'
  attributes: Record<string, never>
  children: RequiredMap<TcPrInnerMap>[]
}

export interface TcPrInnerMap {
  cellDel?: TrackChange<'cellDel'>
  cellIns?: TrackChange<'cellIns'>
  cellMerge?: CellMergeTrackChange
}

export interface T extends UnistNode {
  type: 'element'
  name: 'w:text' | 'w:instrText' | 'w:delInstrText' | 'w:delText'
  attributes: {
    'xml:space'?: 'preserve' | 'default'
  }
  children: Text[]
}
export type Text = UnistLiteral & {
  type: 'text'
  value: string
}

export interface TextAlignment extends UnistNode {
  type: 'element'
  name: 'w:textAlignment'
  attributes: {
    'w:val': TextAlignmentVal
  }
  children: []
}

export interface TextboxTightWrap extends UnistNode {
  type: 'element'
  name: 'w:textboxTightWrap'
  attributes: {
    'w:val': TextboxTightWrapVal
  }
  children: []
}

export interface TextDirection extends UnistNode {
  type: 'element'
  name: 'w:textDirection'
  attributes: {
    'w:val': TextDirectionVal
  }
  children: []
}

export interface TextEffect extends UnistNode {
  type: 'element'
  name: 'w:textEffect'
  attributes: {
    'w:val': TextEffectVal
  }
  children: []
}

export interface TextScale extends UnistNode {
  type: 'element'
  name: 'w:textScale'
  attributes: {
    'w:val': string
  }
  children: []
}

export type TopPageBorder = PageBorder & {
  type: 'element'
  name: 'w:topPageBorder'
  attributes: {
    'w:topLeft'?: string
    'w:topRight'?: string
  }
}

export interface TrackChange<tag extends string = 'trackChange'>
  extends Markup<tag> {
  type: 'element'
  name: `w:${tag}`
  attributes: {
    'w:id': string
    'w:author': string
    'w:date'?: string
  }
  children: any[]
}

export type TrackChangeRange = TrackChange & {
  type: 'element'
  name: 'w:trackChangeRange'
  attributes: {
    'w:displacedByCustomXml'?: DisplacedByCustomXmlVal
  }
  children: []
}

export interface TrackChangesView extends UnistNode {
  type: 'element'
  name: 'w:trackChangesView'
  attributes: {
    'w:comments'?: string
    'w:formatting'?: string
    'w:inkAnnotations'?: string
    'w:insDel'?: string
    'w:markup'?: string
  }
  children: []
}

export type TrPr = TrPrBase & {
  type: 'element'
  name: 'w:trPr'
  attributes: Record<string, never>
  children: RequiredMap<TrPrMap>[]
}

export interface TrPrMap {
  del?: TrackChange<'del'>
  ins?: TrackChange<'ins'>
  trPrChange?: TrPrChange
}

export interface TrPrBase extends UnistNode {
  type: 'element'
  name: 'w:trPrBase'
  attributes: Record<string, never>
  children: RequiredMap<TrPrBaseMap>[]
}

export interface TrPrBaseMap {
  cantSplit?: OnOff<'cantSplit'>[]
  cnfStyle?: Cnf[]
  divId?: DecimalNumber[]
  gridAfter?: DecimalNumber[]
  gridBefore?: DecimalNumber[]
  hidden?: OnOff<'hidden'>[]
  jc?: JcTable[]
  tblCellSpacing?: TblWidth[]
  tblHeader?: OnOff<'tblHeader'>[]
  trHeight?: Height[]
  wAfter?: TblWidth[]
  wBefore?: TblWidth[]
}

export type TrPrChange = TrackChange & {
  type: 'element'
  name: 'w:trPrChange'
  attributes: Record<string, never>
  children: RequiredMap<TrPrChangeMap>[]
}

export interface TrPrChangeMap {
  trPr: TrPrBase
}

export interface TwipsMeasure extends UnistNode {
  type: 'element'
  name: 'w:twipsMeasure'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface Underline extends UnistNode {
  type: 'element'
  name: 'w:underline'
  attributes: {
    'w:color'?: string
    'w:themeColor'?: ThemeColorVal
    'w:themeShade'?: string
    'w:themeTint'?: string
    'w:val'?: UnderlineVal
  }
  children: []
}

export interface UnsignedDecimalNumber extends UnistNode {
  type: 'element'
  name: 'w:unsignedDecimalNumber'
  attributes: {
    'w:val': string
  }
  children: []
}

export interface VerticalAlignRun extends UnistNode {
  type: 'element'
  name: 'w:verticalAlignRun'
  attributes: {
    'w:val': s.VerticalAlignRunVal
  }
  children: []
}

export interface VerticalJc extends UnistNode {
  type: 'element'
  name: 'w:verticalJc'
  attributes: {
    'w:val': VerticalJcVal
  }
  children: []
}

export interface View extends UnistNode {
  type: 'element'
  name: 'w:view'
  attributes: {
    'w:val': ViewVal
  }
  children: []
}

export interface VMerge extends UnistNode {
  type: 'element'
  name: 'w:vMerge'
  attributes: {
    'w:val': MergeVal
  }
  children: []
}

export interface WebSettings extends UnistNode {
  type: 'element'
  name: 'w:webSettings'
  attributes: Record<string, never>
  children: RequiredMap<WebSettingsMap>[]
}

export interface WebSettingsMap {
  allowPNG?: OnOff<'allowPNG'>
  divs?: Divs
  doNotOrganizeInFolder?: OnOff<'doNotOrganizeInFolder'>
  doNotRelyOnCSS?: OnOff<'doNotRelyOnCSS'>
  doNotSaveAsSingleFile?: OnOff<'doNotSaveAsSingleFile'>
  doNotUseLongFileNames?: OnOff<'doNotUseLongFileNames'>
  encoding?: StringTag<'encoding'>
  frameset?: Frameset
  optimizeForBrowser?: OptimizeForBrowser
  pixelsPerInch?: DecimalNumber
  saveSmartTagsAsXml?: OnOff<'saveSmartTagsAsXml'>
  targetScreenSz?: TargetScreenSz
}

export interface WriteProtection extends UnistNode {
  type: 'element'
  name: 'w:writeProtection'
  attributes: {
    'w:algorithmName'?: string
    'w:hashValue'?: string
    'w:recommended'?: string
    'w:saltValue'?: string
    'w:spinCount'?: string
  }
  children: []
}

export interface WritingStyle extends UnistNode {
  type: 'element'
  name: 'w:writingStyle'
  attributes: {
    'w:appName': string
    'w:checkStyle': string
    'w:dllVersion': string
    'w:lang': string
    'w:nlCheck'?: string
    'w:vendorID': string
  }
  children: []
}

export interface Zoom extends UnistNode {
  type: 'element'
  name: 'w:zoom'
  attributes: {
    'w:percent': string
    'w:val'?: ZoomVal
  }
  children: []
}

export type AnnotationVMergeVal = 'cont' | 'rest'

export type BorderVal =
  | 'nil'
  | 'none'
  | 'single'
  | 'thick'
  | 'double'
  | 'dotted'
  | 'dashed'
  | 'dotDash'
  | 'dotDotDash'
  | 'triple'
  | 'thinThickSmallGap'
  | 'thickThinSmallGap'
  | 'thinThickThinSmallGap'
  | 'thinThickMediumGap'
  | 'thickThinMediumGap'
  | 'thinThickThinMediumGap'
  | 'thinThickLargeGap'
  | 'thickThinLargeGap'
  | 'thinThickThinLargeGap'
  | 'wave'
  | 'doubleWave'
  | 'dashSmallGap'
  | 'dashDotStroked'
  | 'threeDEmboss'
  | 'threeDEngrave'
  | 'outset'
  | 'inset'
  | 'apples'
  | 'archedScallops'
  | 'babyPacifier'
  | 'babyRattle'
  | 'balloons3Colors'
  | 'balloonsHotAir'
  | 'basicBlackDashes'
  | 'basicBlackDots'
  | 'basicBlackSquares'
  | 'basicThinLines'
  | 'basicWhiteDashes'
  | 'basicWhiteDots'
  | 'basicWhiteSquares'
  | 'basicWideInline'
  | 'basicWideMidline'
  | 'basicWideOutline'
  | 'bats'
  | 'birds'
  | 'birdsFlight'
  | 'cabins'
  | 'cakeSlice'
  | 'candyCorn'
  | 'celticKnotwork'
  | 'certificateBanner'
  | 'chainLink'
  | 'champagneBottle'
  | 'checkedBarBlack'
  | 'checkedBarColor'
  | 'checkered'
  | 'christmasTree'
  | 'circlesLines'
  | 'circlesRectangles'
  | 'classicalWave'
  | 'clocks'
  | 'compass'
  | 'confetti'
  | 'confettiGrays'
  | 'confettiOutline'
  | 'confettiStreamers'
  | 'confettiWhite'
  | 'cornerTriangles'
  | 'couponCutoutDashes'
  | 'couponCutoutDots'
  | 'crazyMaze'
  | 'creaturesButterfly'
  | 'creaturesFish'
  | 'creaturesInsects'
  | 'creaturesLadyBug'
  | 'crossStitch'
  | 'cup'
  | 'decoArch'
  | 'decoArchColor'
  | 'decoBlocks'
  | 'diamondsGray'
  | 'doubleD'
  | 'doubleDiamonds'
  | 'earth1'
  | 'earth2'
  | 'earth3'
  | 'eclipsingSquares1'
  | 'eclipsingSquares2'
  | 'eggsBlack'
  | 'fans'
  | 'film'
  | 'firecrackers'
  | 'flowersBlockPrint'
  | 'flowersDaisies'
  | 'flowersModern1'
  | 'flowersModern2'
  | 'flowersPansy'
  | 'flowersRedRose'
  | 'flowersRoses'
  | 'flowersTeacup'
  | 'flowersTiny'
  | 'gems'
  | 'gingerbreadMan'
  | 'gradient'
  | 'handmade1'
  | 'handmade2'
  | 'heartBalloon'
  | 'heartGray'
  | 'hearts'
  | 'heebieJeebies'
  | 'holly'
  | 'houseFunky'
  | 'hypnotic'
  | 'iceCreamCones'
  | 'lightBulb'
  | 'lightning1'
  | 'lightning2'
  | 'mapPins'
  | 'mapleLeaf'
  | 'mapleMuffins'
  | 'marquee'
  | 'marqueeToothed'
  | 'moons'
  | 'mosaic'
  | 'musicNotes'
  | 'northwest'
  | 'ovals'
  | 'packages'
  | 'palmsBlack'
  | 'palmsColor'
  | 'paperClips'
  | 'papyrus'
  | 'partyFavor'
  | 'partyGlass'
  | 'pencils'
  | 'people'
  | 'peopleWaving'
  | 'peopleHats'
  | 'poinsettias'
  | 'postageStamp'
  | 'pumpkin1'
  | 'pushPinNote2'
  | 'pushPinNote1'
  | 'pyramids'
  | 'pyramidsAbove'
  | 'quadrants'
  | 'rings'
  | 'safari'
  | 'sawtooth'
  | 'sawtoothGray'
  | 'scaredCat'
  | 'seattle'
  | 'shadowedSquares'
  | 'sharksTeeth'
  | 'shorebirdTracks'
  | 'skyrocket'
  | 'snowflakeFancy'
  | 'snowflakes'
  | 'sombrero'
  | 'southwest'
  | 'stars'
  | 'starsTop'
  | 'stars3d'
  | 'starsBlack'
  | 'starsShadowed'
  | 'sun'
  | 'swirligig'
  | 'tornPaper'
  | 'tornPaperBlack'
  | 'trees'
  | 'triangleParty'
  | 'triangles'
  | 'triangle1'
  | 'triangle2'
  | 'triangleCircle1'
  | 'triangleCircle2'
  | 'shapes1'
  | 'shapes2'
  | 'twistedLines1'
  | 'twistedLines2'
  | 'vine'
  | 'waveline'
  | 'weavingAngles'
  | 'weavingBraid'
  | 'weavingRibbon'
  | 'weavingStrips'
  | 'whiteFlowers'
  | 'woodwork'
  | 'xIllusions'
  | 'zanyTriangles'
  | 'zigZag'
  | 'zigZagStitch'
  | 'custom'

export type BrClearVal = 'none' | 'left' | 'right' | 'all'

export type BrTypeVal = 'page' | 'column' | 'textWrapping'

export type CaptionPosVal = 'above' | 'below' | 'left' | 'right'

export type ChapterSepVal = 'hyphen' | 'period' | 'colon' | 'emDash' | 'enDash'

export type CharacterSpacingVal =
  | 'doNotCompress'
  | 'compressPunctuation'
  | 'compressPunctuationAndJapaneseKana'

export type CombineBracketsVal = 'none' | 'round' | 'square' | 'angle' | 'curly'

export type DateTimeVal = Date

export type DecimalNumberVal = number

export type DecimalNumberOrPercentVal = string

export type DirectionVal = 'ltr' | 'rtl'

export type DisplacedByCustomXmlVal = 'next' | 'prev'

export type DocGridVal = 'default' | 'lines' | 'linesAndChars' | 'snapToChars'

export type DocPartBehaviorVal = 'content' | 'p' | 'pg'

export type DocPartGalleryVal =
  | 'placeholder'
  | 'any'
  | 'default'
  | 'docParts'
  | 'coverPg'
  | 'eq'
  | 'ftrs'
  | 'hdrs'
  | 'pgNum'
  | 'tbls'
  | 'watermarks'
  | 'autoTxt'
  | 'txtBox'
  | 'pgNumT'
  | 'pgNumB'
  | 'pgNumMargins'
  | 'tblOfContents'
  | 'bib'
  | 'custQuickParts'
  | 'custCoverPg'
  | 'custEq'
  | 'custFtrs'
  | 'custHdrs'
  | 'custPgNum'
  | 'custTbls'
  | 'custWatermarks'
  | 'custAutoTxt'
  | 'custTxtBox'
  | 'custPgNumT'
  | 'custPgNumB'
  | 'custPgNumMargins'
  | 'custTblOfContents'
  | 'custBib'
  | 'custom1'
  | 'custom2'
  | 'custom3'
  | 'custom4'
  | 'custom5'

export type DocPartTypeVal =
  | 'none'
  | 'normal'
  | 'autoExp'
  | 'toolbar'
  | 'speller'
  | 'formFld'
  | 'bbPlcHdr'

export type DocProtectVal =
  | 'none'
  | 'readOnly'
  | 'comments'
  | 'trackedChanges'
  | 'forms'

export type DocTypeVal = string

export type DropCapVal = 'none' | 'drop' | 'margin'

export type EdGrpVal =
  | 'none'
  | 'everyone'
  | 'administrators'
  | 'contributors'
  | 'editors'
  | 'owners'
  | 'current'

export type EdnPosVal = 'sectEnd' | 'docEnd'

export type EighthPointMeasureVal = number

export type EmVal = 'none' | 'dot' | 'comma' | 'circle' | 'underDot'

export type FFHelpTextValVal = string

export type FFNameVal = string

export type FFStatusTextValVal = string

export type FFTextTypeVal =
  | 'regular'
  | 'number'
  | 'date'
  | 'currentTime'
  | 'currentDate'
  | 'calculated'

export type FldCharTypeVal = 'begin' | 'separate' | 'end'

export type FontFamilyVal =
  | 'decorative'
  | 'modern'
  | 'roman'
  | 'script'
  | 'swiss'
  | 'auto'

export type FrameLayoutVal = 'rows' | 'cols' | 'none'

export type FrameScrollbarVal = 'on' | 'off' | 'auto'

export type FtnEdnVal =
  | 'normal'
  | 'separator'
  | 'continuationSeparator'
  | 'continuationNotice'

export type FtnPosVal = 'pageBottom' | 'beneathText' | 'sectEnd' | 'docEnd'

export type HAnchorVal = 'text' | 'margin' | 'page'

export type HdrFtrVal = 'even' | 'default' | 'first'

export type HeightRuleVal = 'auto' | 'exact' | 'atLeast'

export type HexColorVal = string

export type HexColorAutoVal = 'auto'

export type HighlightColorVal =
  | 'black'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'magenta'
  | 'red'
  | 'yellow'
  | 'white'
  | 'darkBlue'
  | 'darkCyan'
  | 'darkGreen'
  | 'darkMagenta'
  | 'darkRed'
  | 'darkYellow'
  | 'darkGray'
  | 'lightGray'
  | 'none'

export type HintVal = 'default' | 'eastAsia'

export type HpsMeasureVal = string

export type InfoTextTypeVal = 'text' | 'autoText'

export type JcVal =
  | 'start'
  | 'center'
  | 'end'
  | 'both'
  | 'mediumKashida'
  | 'distribute'
  | 'numTab'
  | 'highKashida'
  | 'lowKashida'
  | 'thaiDistribute'

export type JcTableVal = 'center' | 'end' | 'start'

export type LevelSuffixVal = 'tab' | 'space' | 'nothing'

export type LineNumberRestartVal = 'newPage' | 'newSection' | 'continuous'

export type LineSpacingRuleVal = 'auto' | 'exact' | 'atLeast'

export type LockVal =
  | 'sdtLocked'
  | 'contentLocked'
  | 'unlocked'
  | 'sdtContentLocked'

export type LongHexNumberVal = string

export type MacroNameVal = string

export type MailMergeDataTypeVal = string

export type MailMergeDestVal = 'newDocument' | 'printer' | 'email' | 'fax'

export type MailMergeDocTypeVal =
  | 'catalog'
  | 'envelopes'
  | 'mailingLabels'
  | 'formLetters'
  | 'email'
  | 'fax'

export type MailMergeOdsoFMDFieldTypeVal = 'null' | 'dbColumn'

export type MailMergeSourceTypeVal =
  | 'database'
  | 'addressBook'
  | 'document1'
  | 'document2'
  | 'text'
  | 'email'
  | 'native'
  | 'legacy'
  | 'master'

export type MeasurementOrPercentVal = string

export type MergeVal = 'continue' | 'restart'

export type MultiLevelTypeVal =
  | 'singleLevel'
  | 'multilevel'
  | 'hybridMultilevel'

export type NumberFormatVal =
  | 'decimal'
  | 'upperRoman'
  | 'lowerRoman'
  | 'upperLetter'
  | 'lowerLetter'
  | 'ordinal'
  | 'cardinalText'
  | 'ordinalText'
  | 'hex'
  | 'chicago'
  | 'ideographDigital'
  | 'japaneseCounting'
  | 'aiueo'
  | 'iroha'
  | 'decimalFullWidth'
  | 'decimalHalfWidth'
  | 'japaneseLegal'
  | 'japaneseDigitalTenThousand'
  | 'decimalEnclosedCircle'
  | 'decimalFullWidth2'
  | 'aiueoFullWidth'
  | 'irohaFullWidth'
  | 'decimalZero'
  | 'bullet'
  | 'ganada'
  | 'chosung'
  | 'decimalEnclosedFullstop'
  | 'decimalEnclosedParen'
  | 'decimalEnclosedCircleChinese'
  | 'ideographEnclosedCircle'
  | 'ideographTraditional'
  | 'ideographZodiac'
  | 'ideographZodiacTraditional'
  | 'taiwaneseCounting'
  | 'ideographLegalTraditional'
  | 'taiwaneseCountingThousand'
  | 'taiwaneseDigital'
  | 'chineseCounting'
  | 'chineseLegalSimplified'
  | 'chineseCountingThousand'
  | 'koreanDigital'
  | 'koreanCounting'
  | 'koreanLegal'
  | 'koreanDigital2'
  | 'vietnameseCounting'
  | 'russianLower'
  | 'russianUpper'
  | 'none'
  | 'numberInDash'
  | 'hebrew1'
  | 'hebrew2'
  | 'arabicAlpha'
  | 'arabicAbjad'
  | 'hindiVowels'
  | 'hindiConsonants'
  | 'hindiNumbers'
  | 'hindiCounting'
  | 'thaiLetters'
  | 'thaiNumbers'
  | 'thaiCounting'
  | 'bahtText'
  | 'dollarText'
  | 'custom'

export type ObjectDrawAspectVal = 'content' | 'icon'

export type ObjectUpdateModeVal = 'always' | 'onCall'

export type PageBorderDisplayVal = 'allPages' | 'firstPage' | 'notFirstPage'

export type PageBorderOffsetVal = 'page' | 'text'

export type PageBorderZOrderVal = 'front' | 'back'

export type PageOrientationVal = 'portrait' | 'landscape'

export type PitchVal = 'fixed' | 'variable' | 'default'

export type PixelsMeasureVal = number

export type PointMeasureVal = number

export type ProofVal = 'clean' | 'dirty'

export type ProofErrVal = 'spellStart' | 'spellEnd' | 'gramStart' | 'gramEnd'

export type PTabAlignmentVal = 'left' | 'center' | 'right'

export type PTabLeaderVal =
  | 'none'
  | 'dot'
  | 'hyphen'
  | 'underscore'
  | 'middleDot'

export type PTabRelativeToVal = 'margin' | 'indent'

export type RestartNumberVal = 'continuous' | 'eachSect' | 'eachPage'

export type RubyAlignVal =
  | 'center'
  | 'distributeLetter'
  | 'distributeSpace'
  | 'left'
  | 'right'
  | 'rightVertical'

export type SdtDateMappingTypeVal = 'text' | 'date' | 'dateTime'

export type SectionMarkVal =
  | 'nextPage'
  | 'nextColumn'
  | 'continuous'
  | 'evenPage'
  | 'oddPage'

export type ShdVal =
  | 'nil'
  | 'clear'
  | 'solid'
  | 'horzStripe'
  | 'vertStripe'
  | 'reverseDiagStripe'
  | 'diagStripe'
  | 'horzCross'
  | 'diagCross'
  | 'thinHorzStripe'
  | 'thinVertStripe'
  | 'thinReverseDiagStripe'
  | 'thinDiagStripe'
  | 'thinHorzCross'
  | 'thinDiagCross'
  | 'pct5'
  | 'pct10'
  | 'pct12'
  | 'pct15'
  | 'pct20'
  | 'pct25'
  | 'pct30'
  | 'pct35'
  | 'pct37'
  | 'pct40'
  | 'pct45'
  | 'pct50'
  | 'pct55'
  | 'pct60'
  | 'pct62'
  | 'pct65'
  | 'pct70'
  | 'pct75'
  | 'pct80'
  | 'pct85'
  | 'pct87'
  | 'pct90'
  | 'pct95'

export type ShortHexNumberVal = string

export type SignedHpsMeasureVal = string

export type SignedTwipsMeasureVal = string

export type StyleSortVal =
  | 'name'
  | 'priority'
  | 'default'
  | 'font'
  | 'basedOn'
  | 'type'

export type StyleTypeVal = 'paragraph' | 'character' | 'table' | 'numbering'

export type TabJcVal =
  | 'clear'
  | 'start'
  | 'center'
  | 'end'
  | 'decimal'
  | 'bar'
  | 'num'

export type TabTlcVal =
  | 'none'
  | 'dot'
  | 'hyphen'
  | 'underscore'
  | 'heavy'
  | 'middleDot'

export type TargetScreenSzVal =
  | '544x376'
  | '640x480'
  | '720x512'
  | '800x600'
  | '1024x768'
  | '1152x882'
  | '1152x900'
  | '1280x1024'
  | '1600x1200'
  | '1800x1440'
  | '1920x1200'

export type TblLayoutTypeVal = 'fixed' | 'autofit'

export type TblOverlapVal = 'never' | 'overlap'

export type TblStyleOverrideTypeVal =
  | 'wholeTable'
  | 'firstRow'
  | 'lastRow'
  | 'firstCol'
  | 'lastCol'
  | 'band1Vert'
  | 'band2Vert'
  | 'band1Horz'
  | 'band2Horz'
  | 'neCell'
  | 'nwCell'
  | 'seCell'
  | 'swCell'

export type TblWidthVal = 'nil' | 'pct' | 'dxa' | 'auto'

export type TextAlignmentVal = 'top' | 'center' | 'baseline' | 'bottom' | 'auto'

export type TextboxTightWrapVal =
  | 'none'
  | 'allLines'
  | 'firstAndLastLine'
  | 'firstLineOnly'
  | 'lastLineOnly'

export type TextDirectionVal = 'tb' | 'rl' | 'lr' | 'tbV' | 'rlV' | 'lrV'

export type TextEffectVal =
  | 'blinkBackground'
  | 'lights'
  | 'antsBlack'
  | 'antsRed'
  | 'shimmer'
  | 'sparkle'
  | 'none'

export type TextScaleVal = string

export type TextScalePercentVal = string

export type ThemeVal =
  | 'majorEastAsia'
  | 'majorBidi'
  | 'majorAscii'
  | 'majorHAnsi'
  | 'minorEastAsia'
  | 'minorBidi'
  | 'minorAscii'
  | 'minorHAnsi'

export type ThemeColorVal =
  | 'dark1'
  | 'light1'
  | 'dark2'
  | 'light2'
  | 'accent1'
  | 'accent2'
  | 'accent3'
  | 'accent4'
  | 'accent5'
  | 'accent6'
  | 'hyperlink'
  | 'followedHyperlink'
  | 'none'
  | 'background1'
  | 'text1'
  | 'background2'
  | 'text2'

export type UcharHexNumberVal = string

export type UnderlineVal =
  | 'single'
  | 'words'
  | 'double'
  | 'thick'
  | 'dotted'
  | 'dottedHeavy'
  | 'dash'
  | 'dashedHeavy'
  | 'dashLong'
  | 'dashLongHeavy'
  | 'dotDash'
  | 'dashDotHeavy'
  | 'dotDotDash'
  | 'dashDotDotHeavy'
  | 'wave'
  | 'wavyHeavy'
  | 'wavyDouble'
  | 'none'

export type VAnchorVal = 'text' | 'margin' | 'page'

export type VerticalJcVal = 'top' | 'center' | 'both' | 'bottom'

export type ViewVal =
  | 'none'
  | 'print'
  | 'outline'
  | 'masterPages'
  | 'normal'
  | 'web'

export type WmlColorSchemeIndexVal =
  | 'dark1'
  | 'light1'
  | 'dark2'
  | 'light2'
  | 'accent1'
  | 'accent2'
  | 'accent3'
  | 'accent4'
  | 'accent5'
  | 'accent6'
  | 'hyperlink'
  | 'followedHyperlink'

export type WrapVal =
  | 'auto'
  | 'notBeside'
  | 'around'
  | 'tight'
  | 'through'
  | 'none'

export type ZoomVal = 'none' | 'fullPage' | 'bestFit' | 'textFit'

export interface document extends UnistNode {
  comments: Comments
  document: Document
  endnotes: Endnotes
  fonts: FontsList
  footnotes: Footnotes
  ftr: HdrFtr
  glossaryDocument: GlossaryDocument
  hdr: HdrFtr
  numbering: Numbering
  recipients: Recipients
  settings: Settings
  styles: Styles
  webSettings: WebSettings
}
export var document: document
