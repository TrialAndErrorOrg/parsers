import * as Primitive from '../../xml-primitives'
import * as m from '../officeDocument/math'
import * as r from '../officeDocument/relationships'
import * as s from '../officeDocument/sharedTypes'
import * as sl from '../schemaLibrary/main'
import * as wp from '../drawingml/wordprocessingDrawing'
import { Literal as UnistLiteral } from 'unist'
import { RequiredMap } from '../../ooxast'

// Source files:
// http://localhost:3000/wml.xsd

interface BaseType {
  _exists: boolean
  _namespace: string
}
export interface AbstractNum extends BaseType {
  type: 'element'
  name: 'w:abstractNum'
  attributes: {
    abstractNumId: number
  }
  children: RequiredMap<AbstractNumMap>[]
}

export interface AbstractNumMap {
  lvl?: Lvl[]
  multiLevelType?: MultiLevelType
  name?: String
  nsid?: LongHexNumber
  numStyleLink?: String
  styleLink?: String
  tmpl?: LongHexNumber
}

export interface AltChunk extends BaseType {
  type: 'element'
  name: 'w:altChunk'
  attributes: {
    id?: string
  }
  children: RequiredMap<AltChunkMap>[]
}

export interface AltChunkMap {
  altChunkPr?: AltChunkPr
}

export interface AltChunkPr extends BaseType {
  type: 'element'
  name: 'w:altChunkPr'

  children: RequiredMap<AltChunkPrMap>[]
}

export interface AltChunkPrMap {
  matchSrc?: OnOff
}

export interface Attr extends BaseType {
  type: 'element'
  name: 'w:attr'
  attributes: {
    name: string
    uri: string
    val: string
  }
}

export interface AutoCaption extends BaseType {
  type: 'element'
  name: 'w:autoCaption'
  attributes: {
    caption: string
    name: string
  }
}

export interface AutoCaptions extends BaseType {
  type: 'element'
  name: 'w:autoCaptions'

  children: RequiredMap<AutoCaptionsMap>[]
}

export interface AutoCaptionsMap {
  autoCaption: AutoCaption[]
}

export interface Background extends BaseType {
  type: 'element'
  name: 'w:background'
  attributes: {
    color?: string
    themeColor?: ThemeColorVal
    themeShade?: string
    themeTint?: string
  }
  children: RequiredMap<BackgroundMap>[]
}

export interface BackgroundMap {
  drawing?: Drawing
}

export interface Base64Binary extends BaseType {
  type: 'element'
  name: 'w:base64Binary'
  attributes: {
    val: string
  }
}

export interface BdoContentRun extends BaseType {
  type: 'element'
  name: 'w:bdoContentRun'
  attributes: {
    val?: DirectionVal
  }
  children: RequiredMap<BdoContentRunMap>[]
}

export interface BdoContentRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel[]
}

export interface Body extends BaseType {
  type: 'element'
  name: 'w:body'

  children: RequiredMap<BodyMap>[]
}

export interface BodyMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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

export type Bookmark = BookmarkRange & {
  type: 'element'
  name: 'w:bookmark' | string
  attributes: {
    name: string
  }
}

export type BookmarkRange = MarkupRange & {
  type: 'element'
  name: 'w:bookmarkRange'
  attributes: {
    colFirst?: number
    colLast?: number
  }
}

export interface Border extends BaseType {
  type: 'element'
  name: 'w:border'
  attributes: {
    color?: string
    frame?: string
    shadow?: string
    space?: number
    sz?: number
    themeColor?: ThemeColorVal
    themeShade?: string
    themeTint?: string
    val: BorderVal
  }
}

export type BottomPageBorder = PageBorder & {
  type: 'element'
  name: 'w:bottomPageBorder'
  attributes: {
    bottomLeft?: string
    bottomRight?: string
  }
}

export interface Br extends BaseType {
  type: 'element'
  name: 'w:br'
  attributes: {
    clear?: BrClearVal
    type?: BrTypeVal
  }
}

export interface CalendarType extends BaseType {
  type: 'element'
  name: 'w:calendarType'
  attributes: {
    val: s.CalendarTypeVal
  }
}

export interface Caption extends BaseType {
  type: 'element'
  name: 'w:caption'
  attributes: {
    chapNum?: string
    heading?: number
    name: string
    noLabel?: string
    numFmt?: NumberFormatVal
    pos?: CaptionPosVal
    sep?: ChapterSepVal
  }
}

export interface Captions extends BaseType {
  type: 'element'
  name: 'w:captions'

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
    vMerge?: AnnotationVMergeVal
    vMergeOrig?: AnnotationVMergeVal
  }
}

export interface CharacterSpacing extends BaseType {
  type: 'element'
  name: 'w:characterSpacing'
  attributes: {
    val: CharacterSpacingVal
  }
}

export interface Charset extends BaseType {
  type: 'element'
  name: 'w:charset'
  attributes: {
    characterSet?: string
  }
}

export interface Cnf extends BaseType {
  type: 'element'
  name: 'w:cnf'
  attributes: {
    evenHBand: string
    evenVBand: string
    firstColumn: string
    firstRow: string
    firstRowFirstColumn: string
    firstRowLastColumn: string
    lastColumn: string
    lastRow: string
    lastRowFirstColumn: string
    lastRowLastColumn: string
    oddHBand: string
    oddVBand: string
  }
}

export interface Color extends BaseType {
  type: 'element'
  name: 'w:color'
  attributes: {
    themeColor?: ThemeColorVal
    themeShade?: string
    themeTint?: string
    val: string
  }
}

export interface ColorSchemeMapping extends BaseType {
  type: 'element'
  name: 'w:colorSchemeMapping'
  attributes: {
    accent1: WmlColorSchemeIndexVal
    accent2: WmlColorSchemeIndexVal
    accent3: WmlColorSchemeIndexVal
    accent4: WmlColorSchemeIndexVal
    accent5: WmlColorSchemeIndexVal
    accent6: WmlColorSchemeIndexVal
    bg1: WmlColorSchemeIndexVal
    bg2: WmlColorSchemeIndexVal
    followedHyperlink: WmlColorSchemeIndexVal
    hyperlink: WmlColorSchemeIndexVal
    t1: WmlColorSchemeIndexVal
    t2: WmlColorSchemeIndexVal
  }
}

export interface Column extends BaseType {
  type: 'element'
  name: 'w:column'
  attributes: {
    space?: string
    w?: string
  }
}

export interface Columns extends BaseType {
  type: 'element'
  name: 'w:columns'
  attributes: {
    equalWidth?: string
    num?: number
    sep?: string
    space?: string
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
    initials?: string
  }
  children: RequiredMap<CommentMap>[]
}

export interface CommentMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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

export interface Comments extends BaseType {
  type: 'element'
  name: 'w:comments'

  children: RequiredMap<CommentsMap>[]
}

export interface CommentsMap {
  comment?: Comment[]
}

export interface Compat extends BaseType {
  type: 'element'
  name: 'w:compat'

  children: RequiredMap<CompatMap>[]
}

export interface CompatMap {
  adjustLineHeightInTable?: OnOff
  applyBreakingRules?: OnOff
  balanceSingleByteDoubleByteWidth?: OnOff
  compatSetting?: CompatSetting[]
  doNotExpandShiftReturn?: OnOff
  doNotLeaveBackslashAlone?: OnOff
  spaceForUL?: OnOff
  ulTrailSpace?: OnOff
}

export interface CompatSetting extends BaseType {
  type: 'element'
  name: 'w:compatSetting'
  attributes: {
    name: string
    uri: string
    val: string
  }
}

export interface Control extends BaseType {
  type: 'element'
  name: 'w:control'
  attributes: {
    id?: string
    name?: string
    shapeid?: string
  }
}

export interface CustomXmlBlock extends BaseType {
  type: 'element'
  name: 'w:customXmlBlock'
  attributes: {
    element: string
    uri: string
  }
  children: RequiredMap<CustomXmlBlockMap>[]
}

export interface CustomXmlBlockMap {
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  customXmlPr?: CustomXmlPr
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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

export interface CustomXmlCell extends BaseType {
  type: 'element'
  name: 'w:customXmlCell'
  attributes: {
    element: string
    uri: string
  }
  children: RequiredMap<CustomXmlCellMap>[]
}

export interface CustomXmlCellMap {
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlCell[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  customXmlPr?: CustomXmlPr
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtCell[]
  tc?: Tc[]
}

export interface CustomXmlPr extends BaseType {
  type: 'element'
  name: 'w:customXmlPr'

  children: RequiredMap<CustomXmlPrMap>[]
}

export interface CustomXmlPrMap {
  attr?: Attr[]
  placeholder?: String
}

export interface CustomXmlRow extends BaseType {
  type: 'element'
  name: 'w:customXmlRow'
  attributes: {
    element: string
    uri: string
  }
  children: RequiredMap<CustomXmlRowMap>[]
}

export interface CustomXmlRowMap {
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRow[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  customXmlPr?: CustomXmlPr
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtRow[]
  tr?: Row[]
}

export interface CustomXmlRun extends BaseType {
  type: 'element'
  name: 'w:customXmlRun'
  attributes: {
    element: string
    uri: string
  }
  children: RequiredMap<CustomXmlRunMap>[]
}

export interface CustomXmlRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  customXmlPr?: CustomXmlPr
  del?: RunTrackChange[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel[]
}

export interface DataBinding extends BaseType {
  type: 'element'
  name: 'w:dataBinding'
  attributes: {
    prefixMappings: string
    storeItemID: string
    xpath: string
  }
}

export interface DecimalNumber extends BaseType {
  type: 'element'
  name: 'w:decimalNumber'
  attributes: {
    val: number
  }
}

export interface DecimalNumberOrPrecent extends BaseType {
  type: 'element'
  name: 'w:decimalNumberOrPrecent'
  attributes: {
    val: string
  }
}

export interface DirContentRun extends BaseType {
  type: 'element'
  name: 'w:dirContentRun'
  attributes: {
    val?: DirectionVal
  }
  children: RequiredMap<DirContentRunMap>[]
}

export interface DirContentRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel[]
}

export interface Div extends BaseType {
  type: 'element'
  name: 'w:div'
  attributes: {
    id: number
  }
  children: RequiredMap<DivMap>[]
}

export interface DivMap {
  blockQuote?: OnOff
  bodyDiv?: OnOff
  divBdr?: DivBdr
  divsChild?: Divs[]
  marBottom: SignedTwipsMeasure
  marLeft: SignedTwipsMeasure
  marRight: SignedTwipsMeasure
  marTop: SignedTwipsMeasure
}

export interface DivBdr extends BaseType {
  type: 'element'
  name: 'w:divBdr'

  children: RequiredMap<DivBdrMap>[]
}

export interface DivBdrMap {
  bottom?: Border
  left?: Border
  right?: Border
  top?: Border
}

export interface Divs extends BaseType {
  type: 'element'
  name: 'w:divs'

  children: RequiredMap<DivsMap>[]
}

export interface DivsMap {
  div: Div[]
}

export interface DocDefaults extends BaseType {
  type: 'element'
  name: 'w:docDefaults'

  children: RequiredMap<DocDefaultsMap>[]
}

export interface DocDefaultsMap {
  pPrDefault?: PPrDefault
  rPrDefault?: RPrDefault
}

export interface DocGrid extends BaseType {
  type: 'element'
  name: 'w:docGrid'
  attributes: {
    charSpace?: number
    linePitch: number
    type: DocGridVal
  }
}

export interface DocPart extends BaseType {
  type: 'element'
  name: 'w:docPart'

  children: RequiredMap<DocPartMap>[]
}

export interface DocPartMap {
  docPartBody?: Body
  docPartPr?: DocPartPr
}

export interface DocPartBehavior extends BaseType {
  type: 'element'
  name: 'w:docPartBehavior'
  attributes: {
    val: DocPartBehaviorVal
  }
}

export interface DocPartBehaviors extends BaseType {
  type: 'element'
  name: 'w:docPartBehaviors'

  children: RequiredMap<DocPartBehaviorsMap>[]
}

export interface DocPartBehaviorsMap {
  behavior: DocPartBehavior[]
}

export interface DocPartCategory extends BaseType {
  type: 'element'
  name: 'w:docPartCategory'

  children: RequiredMap<DocPartCategoryMap>[]
}

export interface DocPartCategoryMap {
  gallery: DocPartGallery
  name: String
}

export interface DocPartGallery extends BaseType {
  type: 'element'
  name: 'w:docPartGallery'
  attributes: {
    val: DocPartGalleryVal
  }
}

export interface DocPartName extends BaseType {
  type: 'element'
  name: 'w:docPartName'
  attributes: {
    decorated?: string
    val: string
  }
}

export interface DocPartPr extends BaseType {
  type: 'element'
  name: 'w:docPartPr'
}

export interface DocParts extends BaseType {
  type: 'element'
  name: 'w:docParts'

  children: RequiredMap<DocPartsMap>[]
}

export interface DocPartsMap {
  docPart: DocPart[]
}

export interface DocPartType extends BaseType {
  type: 'element'
  name: 'w:docPartType'
  attributes: {
    val: DocPartTypeVal
  }
}

export interface DocPartTypes extends BaseType {
  type: 'element'
  name: 'w:docPartTypes'
  attributes: {
    all?: string
  }
  children: RequiredMap<DocPartTypesMap>[]
}

export interface DocPartTypesMap {
  type: DocPartType[]
}

export interface DocProtect extends BaseType {
  type: 'element'
  name: 'w:docProtect'
  attributes: {
    algorithmName?: string
    edit?: DocProtectVal
    enforcement: string
    formatting?: string
    hashValue?: string
    saltValue?: string
    spinCount?: number
  }
}

export interface DocRsids extends BaseType {
  type: 'element'
  name: 'w:docRsids'

  children: RequiredMap<DocRsidsMap>[]
}

export interface DocRsidsMap {
  rsid?: LongHexNumber[]
  rsidRoot?: LongHexNumber
}

export interface DocType extends BaseType {
  type: 'element'
  name: 'w:docType'
  attributes: {
    val: string
  }
}

export type Document = DocumentBase & {
  type: 'element'
  name: 'w:document'
  attributes: {
    conformance: s.ConformanceClassVal
  }
  children: RequiredMap<DocumentMap>[]
}

export interface DocumentMap {
  body?: Body
}

export interface DocumentBase extends BaseType {
  type: 'element'
  name: 'w:documentBase'

  children: RequiredMap<DocumentBaseMap>[]
}

export interface DocumentBaseMap {
  background?: Background
}

export interface DocVar extends BaseType {
  type: 'element'
  name: 'w:docVar'
  attributes: {
    name: string
    val: string
  }
}

export interface DocVars extends BaseType {
  type: 'element'
  name: 'w:docVars'

  children: RequiredMap<DocVarsMap>[]
}

export interface DocVarsMap {
  docVar?: DocVar[]
}

export interface Drawing extends BaseType {
  type: 'element'
  name: 'w:drawing'

  children: RequiredMap<DrawingMap>[]
}

export interface DrawingMap {
  anchor?: wp.Anchor[]
  inline?: wp.Inline[]
}

export interface EastAsianLayout extends BaseType {
  type: 'element'
  name: 'w:eastAsianLayout'
  attributes: {
    combine?: string
    combineBrackets?: CombineBracketsVal
    id?: number
    vert?: string
    vertCompress?: string
  }
}

export type EdnDocProps = EdnProps & {
  type: 'element'
  name: 'w:ednDocProps'

  children: RequiredMap<EdnDocPropsMap>[]
}

export interface EdnDocPropsMap {
  endnote?: FtnEdnSepRef[]
}

export interface EdnPos extends BaseType {
  type: 'element'
  name: 'w:ednPos'
  attributes: {
    val: EdnPosVal
  }
}

export interface EdnProps extends BaseType {
  type: 'element'
  name: 'w:ednProps'

  children: RequiredMap<EdnPropsMap>[]
}

export interface EdnPropsMap {
  numFmt?: NumFmt
  numRestart?: NumRestart
  numStart?: DecimalNumber
  pos?: EdnPos
}

export interface Em extends BaseType {
  type: 'element'
  name: 'w:em'
  attributes: {
    val: EmVal
  }
}

export interface Empty extends BaseType {
  type: 'element'
  name: 'w:empty'
}

export interface Endnotes extends BaseType {
  type: 'element'
  name: 'w:endnotes'

  children: RequiredMap<EndnotesMap>[]
}

export interface EndnotesMap {
  endnote?: FtnEdn[]
}

export interface FFCheckBox extends BaseType {
  type: 'element'
  name: 'w:fFCheckBox'

  children: RequiredMap<FFCheckBoxMap>[]
}

export interface FFCheckBoxMap {
  checked?: OnOff
  default?: OnOff
  size: HpsMeasure
  sizeAuto: OnOff
}

export interface FFData extends BaseType {
  type: 'element'
  name: 'w:fFData'

  children: RequiredMap<FFDataMap>[]
}

export interface FFDataMap {
  calcOnExit: OnOff[]
  checkBox: FFCheckBox[]
  ddList: FFDDList[]
  enabled: OnOff[]
  entryMacro?: MacroName[]
  exitMacro?: MacroName[]
  helpText?: FFHelpText[]
  label?: DecimalNumber[]
  name: FFName[]
  statusText?: FFStatusText[]
  tabIndex?: UnsignedDecimalNumber[]
  textInput: FFTextInput[]
}

export interface FFDDList extends BaseType {
  type: 'element'
  name: 'w:fFDDList'

  children: RequiredMap<FFDDListMap>[]
}

export interface FFDDListMap {
  default?: DecimalNumber
  listEntry?: String[]
  result?: DecimalNumber
}

export interface FFHelpText extends BaseType {
  type: 'element'
  name: 'w:fFHelpText'
  attributes: {
    type: InfoTextTypeVal
    val: string
  }
}

export interface FFName extends BaseType {
  type: 'element'
  name: 'w:fFName'
  attributes: {
    val: string
  }
}

export interface FFStatusText extends BaseType {
  type: 'element'
  name: 'w:fFStatusText'
  attributes: {
    type: InfoTextTypeVal
    val: string
  }
}

export interface FFTextInput extends BaseType {
  type: 'element'
  name: 'w:fFTextInput'

  children: RequiredMap<FFTextInputMap>[]
}

export interface FFTextInputMap {
  default?: String
  format?: String
  maxLength?: DecimalNumber
  type?: FFTextType
}

export interface FFTextType extends BaseType {
  type: 'element'
  name: 'w:fFTextType'
  attributes: {
    val: FFTextTypeVal
  }
}

export interface FitText extends BaseType {
  type: 'element'
  name: 'w:fitText'
  attributes: {
    id?: number
    val: string
  }
}

export interface FldChar extends BaseType {
  type: 'element'
  name: 'w:fldChar'
  attributes: {
    dirty: string
    fldCharType: FldCharTypeVal
    fldLock: string
  }
  children: RequiredMap<FldCharMap>[]
}

export interface FldCharMap {
  ffData?: FFData
}

export interface Font extends BaseType {
  type: 'element'
  name: 'w:font'
  attributes: {
    name: string
  }
  children: RequiredMap<FontMap>[]
}

export interface FontMap {
  altName?: String
  charset?: Charset
  embedBold?: FontRel
  embedBoldItalic?: FontRel
  embedItalic?: FontRel
  embedRegular?: FontRel
  family?: FontFamily
  notTrueType?: OnOff
  panose1?: Panose
  pitch?: Pitch
  sig?: FontSig
}

export interface FontFamily extends BaseType {
  type: 'element'
  name: 'w:fontFamily'
  attributes: {
    val: FontFamilyVal
  }
}

export type FontRel = Rel & {
  type: 'element'
  name: 'w:fontRel'
  attributes: {
    fontKey: string
    subsetted: string
  }
}

export interface Fonts extends BaseType {
  type: 'element'
  name: 'w:fonts'
  attributes: {
    ascii: string
    asciiTheme: ThemeVal
    cs: string
    cstheme: ThemeVal
    eastAsia: string
    eastAsiaTheme: ThemeVal
    hAnsi: string
    hAnsiTheme: ThemeVal
    hint: HintVal
  }
}

export interface FontSig extends BaseType {
  type: 'element'
  name: 'w:fontSig'
  attributes: {
    csb0: string
    csb1: string
    usb0: string
    usb1: string
    usb2: string
    usb3: string
  }
}

export interface FontsList extends BaseType {
  type: 'element'
  name: 'w:fontsList'

  children: RequiredMap<FontsListMap>[]
}

export interface FontsListMap {
  font?: Font[]
}

export interface Footnotes extends BaseType {
  type: 'element'
  name: 'w:footnotes'

  children: RequiredMap<FootnotesMap>[]
}

export interface FootnotesMap {
  footnote?: FtnEdn[]
}

export interface Frame extends BaseType {
  type: 'element'
  name: 'w:frame'

  children: RequiredMap<FrameMap>[]
}

export interface FrameMap {
  linkedToFile?: OnOff
  longDesc?: Rel
  marH?: PixelsMeasure
  marW?: PixelsMeasure
  name?: String
  noResizeAllowed?: OnOff
  scrollbar?: FrameScrollbar
  sourceFileName?: Rel
  sz?: String
  title?: String
}

export interface FrameLayout extends BaseType {
  type: 'element'
  name: 'w:frameLayout'
  attributes: {
    val: FrameLayoutVal
  }
}

export interface FramePr extends BaseType {
  type: 'element'
  name: 'w:framePr'
  attributes: {
    anchorLock?: string
    dropCap?: DropCapVal
    h?: string
    hAnchor?: HAnchorVal
    hRule?: HeightRuleVal
    hSpace?: string
    lines?: number
    vAnchor?: VAnchorVal
    vSpace?: string
    w?: string
    wrap?: WrapVal
    x?: string
    xAlign?: s.XAlignVal
    y?: string
    yAlign?: s.YAlignVal
  }
}

export interface FrameScrollbar extends BaseType {
  type: 'element'
  name: 'w:frameScrollbar'
  attributes: {
    val: FrameScrollbarVal
  }
}

export interface Frameset extends BaseType {
  type: 'element'
  name: 'w:frameset'

  children: RequiredMap<FramesetMap>[]
}

export interface FramesetMap {
  frame?: Frame[]
  frameLayout?: FrameLayout
  frameset?: Frameset[]
  framesetSplitbar?: FramesetSplitbar
  sz?: String
  title?: String
}

export interface FramesetSplitbar extends BaseType {
  type: 'element'
  name: 'w:framesetSplitbar'

  children: RequiredMap<FramesetSplitbarMap>[]
}

export interface FramesetSplitbarMap {
  color?: Color
  flatBorders?: OnOff
  noBorder?: OnOff
  w?: TwipsMeasure
}

export type FtnDocProps = FtnProps & {
  type: 'element'
  name: 'w:ftnDocProps'

  children: RequiredMap<FtnDocPropsMap>[]
}

export interface FtnDocPropsMap {
  footnote?: FtnEdnSepRef[]
}

export interface FtnEdn extends BaseType {
  type: 'element'
  name: 'w:ftnEdn'
  attributes: {
    id: number
    type?: FtnEdnVal
  }
  children: RequiredMap<FtnEdnMap>[]
}

export interface FtnEdnMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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

export interface FtnEdnRef extends BaseType {
  type: 'element'
  name: 'w:ftnEdnRef'
  attributes: {
    customMarkFollows?: string
    id: number
  }
}

export interface FtnEdnSepRef extends BaseType {
  type: 'element'
  name: 'w:ftnEdnSepRef'
  attributes: {
    id: number
  }
}

export interface FtnPos extends BaseType {
  type: 'element'
  name: 'w:ftnPos'
  attributes: {
    val: FtnPosVal
  }
}

export interface FtnProps extends BaseType {
  type: 'element'
  name: 'w:ftnProps'

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

  children: RequiredMap<GlossaryDocumentMap>[]
}

export interface GlossaryDocumentMap {
  docParts?: DocParts
}

export interface Guid extends BaseType {
  type: 'element'
  name: 'w:guid'
  attributes: {
    val: string
  }
}

export interface HdrFtr extends BaseType {
  type: 'element'
  name: 'w:hdrFtr'

  children: RequiredMap<HdrFtrMap>[]
}

export interface HdrFtrMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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
    type: HdrFtrVal
  }
}

export interface Headers extends BaseType {
  type: 'element'
  name: 'w:headers'

  children: RequiredMap<HeadersMap>[]
}

export interface HeadersMap {
  header?: String[]
}

export interface Height extends BaseType {
  type: 'element'
  name: 'w:height'
  attributes: {
    hRule: HeightRuleVal
    val: string
  }
}

export interface Highlight extends BaseType {
  type: 'element'
  name: 'w:highlight'
  attributes: {
    val: HighlightColorVal
  }
}

export interface HpsMeasure extends BaseType {
  type: 'element'
  name: 'w:hpsMeasure'
  attributes: {
    val: string
  }
}

export interface Hyperlink extends BaseType {
  type: 'element'
  name: 'w:hyperlink'
  attributes: {
    anchor?: string
    docLocation?: string
    history?: string
    id: string
    tgtFrame?: string
    tooltip?: string
  }
  children: RequiredMap<HyperlinkMap>[]
}

export interface HyperlinkMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel[]
}

export interface Ind extends BaseType {
  type: 'element'
  name: 'w:ind'
  attributes: {
    end?: string
    endChars?: number
    firstLine?: string
    firstLineChars?: number
    hanging?: string
    hangingChars?: number
    start?: string
    startChars?: number
  }
}

export interface Jc extends BaseType {
  type: 'element'
  name: 'w:jc'
  attributes: {
    val: JcVal
  }
}

export interface JcTable extends BaseType {
  type: 'element'
  name: 'w:jcTable'
  attributes: {
    val: JcTableVal
  }
}

export interface Kinsoku extends BaseType {
  type: 'element'
  name: 'w:kinsoku'
  attributes: {
    lang: string
    val: string
  }
}

export interface Lang extends BaseType {
  type: 'element'
  name: 'w:lang'
  attributes: {
    val: string
  }
}

export interface Language extends BaseType {
  type: 'element'
  name: 'w:language'
  attributes: {
    bidi?: string
    eastAsia?: string
    val?: string
  }
}

export interface LatentStyles extends BaseType {
  type: 'element'
  name: 'w:latentStyles'
  attributes: {
    count: number
    defLockedState: string
    defQFormat: string
    defSemiHidden: string
    defUIPriority: number
    defUnhideWhenUsed: string
  }
  children: RequiredMap<LatentStylesMap>[]
}

export interface LatentStylesMap {
  lsdException?: LsdException[]
}

export interface LevelSuffix extends BaseType {
  type: 'element'
  name: 'w:levelSuffix'
  attributes: {
    val: LevelSuffixVal
  }
}

export interface LevelText extends BaseType {
  type: 'element'
  name: 'w:levelText'
  attributes: {
    null?: string
    val?: string
  }
}

export interface LineNumber extends BaseType {
  type: 'element'
  name: 'w:lineNumber'
  attributes: {
    countBy?: number
    distance?: string
    restart?: LineNumberRestartVal
    start?: number
  }
}

export interface Lock extends BaseType {
  type: 'element'
  name: 'w:lock'
  attributes: {
    val: LockVal
  }
}

export interface LongHexNumber extends BaseType {
  type: 'element'
  name: 'w:longHexNumber'
  attributes: {
    val: string
  }
}

export interface LsdException extends BaseType {
  type: 'element'
  name: 'w:lsdException'
  attributes: {
    locked: string
    name: string
    qFormat: string
    semiHidden: string
    uiPriority: number
    unhideWhenUsed: string
  }
}

export interface Lvl extends BaseType {
  type: 'element'
  name: 'w:lvl'
  attributes: {
    ilvl: number
    tentative?: string
    tplc?: string
  }
  children: RequiredMap<LvlMap>[]
}

export interface LvlMap {
  isLgl?: OnOff
  lvlJc?: Jc
  lvlPicBulletId?: DecimalNumber
  lvlRestart?: DecimalNumber
  lvlText?: LevelText
  numFmt?: NumFmt
  pPr?: PPrGeneral
  pStyle?: String
  rPr?: RPr
  start?: DecimalNumber
  suff?: LevelSuffix
}

export interface MacroName extends BaseType {
  type: 'element'
  name: 'w:macroName'
  attributes: {
    val: string
  }
}

export interface MailMerge extends BaseType {
  type: 'element'
  name: 'w:mailMerge'

  children: RequiredMap<MailMergeMap>[]
}

export interface MailMergeMap {
  activeRecord?: DecimalNumber
  addressFieldName?: String
  checkErrors?: DecimalNumber
  connectString?: String
  dataSource?: Rel
  dataType: MailMergeDataType
  destination?: MailMergeDest
  doNotSuppressBlankLines?: OnOff
  headerSource?: Rel
  linkToQuery?: OnOff
  mailAsAttachment?: OnOff
  mailSubject?: String
  mainDocumentType: MailMergeDocType
  odso?: Odso
  query?: String
  viewMergedData?: OnOff
}

export interface MailMergeDataType extends BaseType {
  type: 'element'
  name: 'w:mailMergeDataType'
  attributes: {
    val: string
  }
}

export interface MailMergeDest extends BaseType {
  type: 'element'
  name: 'w:mailMergeDest'
  attributes: {
    val: MailMergeDestVal
  }
}

export interface MailMergeDocType extends BaseType {
  type: 'element'
  name: 'w:mailMergeDocType'
  attributes: {
    val: MailMergeDocTypeVal
  }
}

export interface MailMergeOdsoFMDFieldType extends BaseType {
  type: 'element'
  name: 'w:mailMergeOdsoFMDFieldType'
  attributes: {
    val: MailMergeOdsoFMDFieldTypeVal
  }
}

export interface MailMergeSourceType extends BaseType {
  type: 'element'
  name: 'w:mailMergeSourceType'
  attributes: {
    val: MailMergeSourceTypeVal
  }
}

export interface Markup extends BaseType {
  type: 'element'
  name: 'w:markup' | string
  attributes: {
    id: number
  }
}

export type MarkupRange = Markup & {
  name: 'w:markupRange' | string
  attributes: {
    id: number
    displacedByCustomXml?: DisplacedByCustomXmlVal
  }
}

export type MathCtrlDel = TrackChange & {
  type: 'element'
  name: 'w:mathCtrlDel'
  children: RequiredMap<MathCtrlDelMap>[]
}

export interface MathCtrlDelMap {
  rPr?: RPr
}

export type MathCtrlIns = TrackChange & {
  type: 'element'
  name: 'w:mathCtrlIns'

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
    author: string
    date: Date
  }
}

export interface MultiLevelType extends BaseType {
  type: 'element'
  name: 'w:multiLevelType'
  attributes: {
    val: MultiLevelTypeVal
  }
}

export interface Num extends BaseType {
  type: 'element'
  name: 'w:num'
  attributes: {
    numId: number
  }
  children: RequiredMap<NumMap>[]
}

export interface NumMap {
  abstractNumId: DecimalNumber
  lvlOverride?: NumLvl[]
}

export interface Numbering extends BaseType {
  type: 'element'
  name: 'w:numbering'

  children: RequiredMap<NumberingMap>[]
}

export interface NumberingMap {
  abstractNum?: AbstractNum[]
  num?: Num[]
  numIdMacAtCleanup?: DecimalNumber
  numPicBullet?: NumPicBullet[]
}

export interface NumFmt extends BaseType {
  type: 'element'
  name: 'w:numFmt'
  attributes: {
    format?: string
    val: NumberFormatVal
  }
}

export interface NumLvl extends BaseType {
  type: 'element'
  name: 'w:numLvl'
  attributes: {
    ilvl: number
  }
  children: RequiredMap<NumLvlMap>[]
}

export interface NumLvlMap {
  lvl?: Lvl
  startOverride?: DecimalNumber
}

export interface NumPicBullet extends BaseType {
  type: 'element'
  name: 'w:numPicBullet'
  attributes: {
    numPicBulletId: number
  }
  children: RequiredMap<NumPicBulletMap>[]
}

export interface NumPicBulletMap {
  drawing: Drawing
}

export interface NumPr extends BaseType {
  type: 'element'
  name: 'w:numPr'

  children: RequiredMap<NumPrMap>[]
}

export interface NumPrMap {
  ilvl?: DecimalNumber
  ins?: TrackChange
  numId?: DecimalNumber
}

export interface NumRestart extends BaseType {
  type: 'element'
  name: 'w:numRestart'
  attributes: {
    val: RestartNumberVal
  }
}

export interface Object extends BaseType {
  type: 'element'
  name: 'w:object'
  attributes: {
    dxaOrig?: string
    dyaOrig?: string
  }
  children: RequiredMap<ObjectMap>[]
}

export interface ObjectMap {
  control?: Control
  drawing?: Drawing
  movie?: Rel
  objectEmbed?: ObjectEmbed
  objectLink?: ObjectLink
}

export interface ObjectEmbed extends BaseType {
  type: 'element'
  name: 'w:objectEmbed'
  attributes: {
    drawAspect?: ObjectDrawAspectVal
    fieldCodes?: string
    id: string
    progId?: string
    shapeId?: string
  }
}

export type ObjectLink = ObjectEmbed & {
  type: 'element'
  name: 'w:objectLink'
  attributes: {
    lockedField?: string
    updateMode: ObjectUpdateModeVal
  }
}

export interface Odso extends BaseType {
  type: 'element'
  name: 'w:odso'

  children: RequiredMap<OdsoMap>[]
}

export interface OdsoMap {
  colDelim?: DecimalNumber
  fHdr?: OnOff
  fieldMapData?: OdsoFieldMapData[]
  recipientData?: Rel[]
  src?: Rel
  table?: String
  type?: MailMergeSourceType
  udl?: String
}

export interface OdsoFieldMapData extends BaseType {
  type: 'element'
  name: 'w:odsoFieldMapData'

  children: RequiredMap<OdsoFieldMapDataMap>[]
}

export interface OdsoFieldMapDataMap {
  column?: DecimalNumber
  dynamicAddress?: OnOff
  lid?: Lang
  mappedName?: String
  name?: String
  type?: MailMergeOdsoFMDFieldType
}

export interface OnOff extends BaseType {
  type: 'element'
  name: 'w:onOff'
  attributes: {
    val: string
  }
}

export type OptimizeForBrowser = OnOff & {
  type: 'element'
  name: 'w:optimizeForBrowser'
  attributes: {
    target?: string
  }
}

export interface P extends BaseType {
  type: 'element'
  name: 'w:p'
  attributes: {
    rsidDel: string
    rsidP: string
    rsidR: string
    rsidRDefault: string
    rsidRPr: string
  }
  children: RequiredMap<PMap>[]
}

export interface PMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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
  subDoc?: Rel[]
}

export type PageBorder = Border & {
  type: 'element'
  name: 'w:pageBorder'
  attributes: {
    id?: string
  }
}

export interface PageBorders extends BaseType {
  type: 'element'
  name: 'w:pageBorders'
  attributes: {
    display?: PageBorderDisplayVal
    offsetFrom?: PageBorderOffsetVal
    zOrder?: PageBorderZOrderVal
  }
  children: RequiredMap<PageBordersMap>[]
}

export interface PageBordersMap {
  bottom?: BottomPageBorder
  left?: PageBorder
  right?: PageBorder
  top?: TopPageBorder
}

export interface PageMar extends BaseType {
  type: 'element'
  name: 'w:pageMar'
  attributes: {
    bottom: string
    footer: string
    gutter: string
    header: string
    left: string
    right: string
    top: string
  }
}

export interface PageNumber extends BaseType {
  type: 'element'
  name: 'w:pageNumber'
  attributes: {
    chapSep?: ChapterSepVal
    chapStyle?: number
    fmt?: NumberFormatVal
    start?: number
  }
}

export interface PageSz extends BaseType {
  type: 'element'
  name: 'w:pageSz'
  attributes: {
    code?: number
    h: string
    orient?: PageOrientationVal
    w: string
  }
}

export interface Panose extends BaseType {
  type: 'element'
  name: 'w:panose'
  attributes: {
    val: string
  }
}

export interface PaperSource extends BaseType {
  type: 'element'
  name: 'w:paperSource'
  attributes: {
    first: number
    other: number
  }
}

export interface ParaRPr extends BaseType {
  type: 'element'
  name: 'w:paraRPr'

  children: RequiredMap<ParaRPrMap>[]
}

export interface ParaRPrMap {
  b?: OnOff[]
  bCs?: OnOff[]
  bdr?: Border[]
  caps?: OnOff[]
  color?: Color[]
  cs?: OnOff[]
  del?: TrackChange
  dstrike?: OnOff[]
  eastAsianLayout?: EastAsianLayout[]
  effect?: TextEffect[]
  em?: Em[]
  emboss?: OnOff[]
  fitText?: FitText[]
  highlight?: Highlight[]
  i?: OnOff[]
  iCs?: OnOff[]
  imprint?: OnOff[]
  ins?: TrackChange
  kern?: HpsMeasure[]
  lang?: Language[]
  moveFrom?: TrackChange
  moveTo?: TrackChange
  noProof?: OnOff[]
  oMath?: OnOff[]
  outline?: OnOff[]
  position?: SignedHpsMeasure[]
  rFonts?: Fonts[]
  rPrChange?: ParaRPrChange
  rStyle?: String[]
  rtl?: OnOff[]
  shadow?: OnOff[]
  shd?: Shd[]
  smallCaps?: OnOff[]
  snapToGrid?: OnOff[]
  spacing?: SignedTwipsMeasure[]
  specVanish?: OnOff[]
  strike?: OnOff[]
  sz?: HpsMeasure[]
  szCs?: HpsMeasure[]
  u?: Underline[]
  vanish?: OnOff[]
  vertAlign?: VerticalAlignRun[]
  w?: TextScale[]
  webHidden?: OnOff[]
}

export type ParaRPrChange = TrackChange & {
  type: 'element'
  name: 'w:paraRPrChange'

  children: RequiredMap<ParaRPrChangeMap>[]
}

export interface ParaRPrChangeMap {
  rPr: ParaRPrOriginal
}

export interface ParaRPrOriginal extends BaseType {
  type: 'element'
  name: 'w:paraRPrOriginal'

  children: RequiredMap<ParaRPrOriginalMap>[]
}

export interface ParaRPrOriginalMap {
  b?: OnOff[]
  bCs?: OnOff[]
  bdr?: Border[]
  caps?: OnOff[]
  color?: Color[]
  cs?: OnOff[]
  del?: TrackChange
  dstrike?: OnOff[]
  eastAsianLayout?: EastAsianLayout[]
  effect?: TextEffect[]
  em?: Em[]
  emboss?: OnOff[]
  fitText?: FitText[]
  highlight?: Highlight[]
  i?: OnOff[]
  iCs?: OnOff[]
  imprint?: OnOff[]
  ins?: TrackChange
  kern?: HpsMeasure[]
  lang?: Language[]
  moveFrom?: TrackChange
  moveTo?: TrackChange
  noProof?: OnOff[]
  oMath?: OnOff[]
  outline?: OnOff[]
  position?: SignedHpsMeasure[]
  rFonts?: Fonts[]
  rStyle?: String[]
  rtl?: OnOff[]
  shadow?: OnOff[]
  shd?: Shd[]
  smallCaps?: OnOff[]
  snapToGrid?: OnOff[]
  spacing?: SignedTwipsMeasure[]
  specVanish?: OnOff[]
  strike?: OnOff[]
  sz?: HpsMeasure[]
  szCs?: HpsMeasure[]
  u?: Underline[]
  vanish?: OnOff[]
  vertAlign?: VerticalAlignRun[]
  w?: TextScale[]
  webHidden?: OnOff[]
}

export interface PBdr extends BaseType {
  type: 'element'
  name: 'w:pBdr'

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

export interface Perm extends BaseType {
  type: 'element'
  name: 'w:perm'
  attributes: {
    displacedByCustomXml?: DisplacedByCustomXmlVal
    id: string
  }
}

export type PermStart = Perm & {
  type: 'element'
  name: 'w:permStart'
  attributes: {
    colFirst?: number
    colLast?: number
    ed?: string
    edGrp?: EdGrpVal
  }
}

export interface Pitch extends BaseType {
  type: 'element'
  name: 'w:pitch'
  attributes: {
    val: PitchVal
  }
}

export interface PixelsMeasure extends BaseType {
  type: 'element'
  name: 'w:pixelsMeasure'
  attributes: {
    val: number
  }
}

export interface Placeholder extends BaseType {
  type: 'element'
  name: 'w:placeholder'

  children: RequiredMap<PlaceholderMap>[]
}

export interface PlaceholderMap {
  docPart: String
}

export type PPr = PPrBase & {
  type: 'element'
  name: 'w:pPr'

  children: RequiredMap<PPrMap>[]
}

export interface PPrMap {
  pPrChange?: PPrChange
  rPr?: ParaRPr
  sectPr?: SectPr
}

export interface PPrBase extends BaseType {
  type: 'element'
  name: 'w:pPrBase'

  children: RequiredMap<PPrBaseMap>[]
}

export interface PPrBaseMap {
  adjustRightInd?: OnOff
  autoSpaceDE?: OnOff
  autoSpaceDN?: OnOff
  bidi?: OnOff
  cnfStyle?: Cnf
  contextualSpacing?: OnOff
  divId?: DecimalNumber
  framePr?: FramePr
  ind?: Ind
  jc?: Jc
  keepLines?: OnOff
  keepNext?: OnOff
  kinsoku?: OnOff
  mirrorIndents?: OnOff
  numPr?: NumPr
  outlineLvl?: DecimalNumber
  overflowPunct?: OnOff
  pageBreakBefore?: OnOff
  pBdr?: PBdr
  pStyle?: String
  shd?: Shd
  snapToGrid?: OnOff
  spacing?: Spacing
  suppressAutoHyphens?: OnOff
  suppressLineNumbers?: OnOff
  suppressOverlap?: OnOff
  tabs?: Tabs
  textAlignment?: TextAlignment
  textboxTightWrap?: TextboxTightWrap
  textDirection?: TextDirection
  topLinePunct?: OnOff
  widowControl?: OnOff
  wordWrap?: OnOff
}

export type PPrChange = TrackChange & {
  type: 'element'
  name: 'w:pPrChange'

  children: RequiredMap<PPrChangeMap>[]
}

export interface PPrChangeMap {
  pPr: PPrBase
}

export interface PPrDefault extends BaseType {
  type: 'element'
  name: 'w:pPrDefault'

  children: RequiredMap<PPrDefaultMap>[]
}

export interface PPrDefaultMap {
  pPr?: PPrGeneral
}

export type PPrGeneral = PPrBase & {
  type: 'element'
  name: 'w:pPrGeneral'

  children: RequiredMap<PPrGeneralMap>[]
}

export interface PPrGeneralMap {
  pPrChange?: PPrChange
}

export interface Proof extends BaseType {
  type: 'element'
  name: 'w:proof'
  attributes: {
    grammar?: ProofVal
    spelling?: ProofVal
  }
}

export interface ProofErr extends BaseType {
  type: 'element'
  name: 'w:proofErr'
  attributes: {
    type: ProofErrVal
  }
}

export interface PTab extends BaseType {
  type: 'element'
  name: 'w:pTab'
  attributes: {
    alignment: PTabAlignmentVal
    leader: PTabLeaderVal
    relativeTo: PTabRelativeToVal
  }
}

export interface R extends BaseType {
  type: 'element'
  name: 'w:r'
  attributes: {
    rsidDel: string
    rsidR: string
    rsidRPr: string
  }
  children: RequiredMap<RMap>[]
}

export interface RMap {
  annotationRef?: Empty[]
  br?: Br[]
  commentReference?: Markup[]
  contentPart?: Rel[]
  continuationSeparator?: Empty[]
  cr?: Empty[]
  dayLong?: Empty[]
  dayShort?: Empty[]
  delInstrText?: T[]
  delText?: T[]
  drawing?: Drawing[]
  endnoteRef?: Empty[]
  endnoteReference?: FtnEdnRef[]
  fldChar?: FldChar[]
  footnoteRef?: Empty[]
  footnoteReference?: FtnEdnRef[]
  instrText?: T[]
  lastRenderedPageBreak?: Empty[]
  monthLong?: Empty[]
  monthShort?: Empty[]
  noBreakHyphen?: Empty[]
  object?: Object[]
  pgNum?: Empty[]
  ptab?: PTab[]
  rPr?: RPr
  ruby?: Ruby[]
  separator?: Empty[]
  softHyphen?: Empty[]
  sym?: Sym[]
  t?: T[]
  tab?: Empty[]
  yearLong?: Empty[]
  yearShort?: Empty[]
}

export interface ReadingModeInkLockDown extends BaseType {
  type: 'element'
  name: 'w:readingModeInkLockDown'
  attributes: {
    actualPg: string
    fontSz: string
    h: number
    w: number
  }
}

export interface RecipientData extends BaseType {
  type: 'element'
  name: 'w:recipientData'

  children: RequiredMap<RecipientDataMap>[]
}

export interface RecipientDataMap {
  active?: OnOff
  column: DecimalNumber
  uniqueTag: Base64Binary
}

export interface Recipients extends BaseType {
  type: 'element'
  name: 'w:recipients'

  children: RequiredMap<RecipientsMap>[]
}

export interface RecipientsMap {
  recipientData: RecipientData[]
}

export interface Rel extends BaseType {
  type: 'element'
  name: 'w:rel'
  attributes: {
    id: string
  }
}

export interface Row extends BaseType {
  type: 'element'
  name: 'w:row'
  attributes: {
    rsidDel: string
    rsidR: string
    rsidRPr: string
    rsidTr: string
  }
  children: RequiredMap<RowMap>[]
}

export interface RowMap {
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlCell[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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

export interface RPr extends BaseType {
  type: 'element'
  name: 'w:rPr'

  children: RequiredMap<RPrMap>[]
}

export interface RPrMap {
  b?: OnOff[]
  bCs?: OnOff[]
  bdr?: Border[]
  caps?: OnOff[]
  color?: Color[]
  cs?: OnOff[]
  dstrike?: OnOff[]
  eastAsianLayout?: EastAsianLayout[]
  effect?: TextEffect[]
  em?: Em[]
  emboss?: OnOff[]
  fitText?: FitText[]
  highlight?: Highlight[]
  i?: OnOff[]
  iCs?: OnOff[]
  imprint?: OnOff[]
  kern?: HpsMeasure[]
  lang?: Language[]
  noProof?: OnOff[]
  oMath?: OnOff[]
  outline?: OnOff[]
  position?: SignedHpsMeasure[]
  rFonts?: Fonts[]
  rPrChange?: RPrChange
  rStyle?: String[]
  rtl?: OnOff[]
  shadow?: OnOff[]
  shd?: Shd[]
  smallCaps?: OnOff[]
  snapToGrid?: OnOff[]
  spacing?: SignedTwipsMeasure[]
  specVanish?: OnOff[]
  strike?: OnOff[]
  sz?: HpsMeasure[]
  szCs?: HpsMeasure[]
  u?: Underline[]
  vanish?: OnOff[]
  vertAlign?: VerticalAlignRun[]
  w?: TextScale[]
  webHidden?: OnOff[]
}

export type RPrChange = TrackChange & {
  type: 'element'
  name: 'w:rPrChange'

  children: RequiredMap<RPrChangeMap>[]
}

export interface RPrChangeMap {
  rPr: RPrOriginal
}

export interface RPrDefault extends BaseType {
  type: 'element'
  name: 'w:rPrDefault'

  children: RequiredMap<RPrDefaultMap>[]
}

export interface RPrDefaultMap {
  rPr?: RPr
}

export interface RPrOriginal extends BaseType {
  type: 'element'
  name: 'w:rPrOriginal'

  children: RequiredMap<RPrOriginalMap>[]
}

export interface RPrOriginalMap {
  b?: OnOff[]
  bCs?: OnOff[]
  bdr?: Border[]
  caps?: OnOff[]
  color?: Color[]
  cs?: OnOff[]
  dstrike?: OnOff[]
  eastAsianLayout?: EastAsianLayout[]
  effect?: TextEffect[]
  em?: Em[]
  emboss?: OnOff[]
  fitText?: FitText[]
  highlight?: Highlight[]
  i?: OnOff[]
  iCs?: OnOff[]
  imprint?: OnOff[]
  kern?: HpsMeasure[]
  lang?: Language[]
  noProof?: OnOff[]
  oMath?: OnOff[]
  outline?: OnOff[]
  position?: SignedHpsMeasure[]
  rFonts?: Fonts[]
  rStyle?: String[]
  rtl?: OnOff[]
  shadow?: OnOff[]
  shd?: Shd[]
  smallCaps?: OnOff[]
  snapToGrid?: OnOff[]
  spacing?: SignedTwipsMeasure[]
  specVanish?: OnOff[]
  strike?: OnOff[]
  sz?: HpsMeasure[]
  szCs?: HpsMeasure[]
  u?: Underline[]
  vanish?: OnOff[]
  vertAlign?: VerticalAlignRun[]
  w?: TextScale[]
  webHidden?: OnOff[]
}

export interface Ruby extends BaseType {
  type: 'element'
  name: 'w:ruby'

  children: RequiredMap<RubyMap>[]
}

export interface RubyMap {
  rt: RubyContent
  rubyBase: RubyContent
  rubyPr: RubyPr
}

export interface RubyAlign extends BaseType {
  type: 'element'
  name: 'w:rubyAlign'
  attributes: {
    val: RubyAlignVal
  }
}

export interface RubyContent extends BaseType {
  type: 'element'
  name: 'w:rubyContent'

  children: RequiredMap<RubyContentMap>[]
}

export interface RubyContentMap {
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
}

export interface RubyPr extends BaseType {
  type: 'element'
  name: 'w:rubyPr'

  children: RequiredMap<RubyPrMap>[]
}

export interface RubyPrMap {
  dirty?: OnOff
  hps: HpsMeasure
  hpsBaseText: HpsMeasure
  hpsRaise: HpsMeasure
  lid: Lang
  rubyAlign: RubyAlign
}

export type RunTrackChange = TrackChange & {
  type: 'element'
  name: 'w:runTrackChange'

  children: RequiredMap<RunTrackChangeMap>[]
}

export interface RunTrackChangeMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  dir?: DirContentRun[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  acc?: m.Acc[]
  bar?: m.Bar[]
  borderBox?: m.BorderBox[]
  box?: m.Box[]
  d?: m.D[]
  eqArr?: m.EqArr[]
  f?: m.F[]
  func?: m.Func[]
  groupChr?: m.GroupChr[]
  limLow?: m.LimLow[]
  limUpp?: m.LimUpp[]
  m?: m.M[]
  nary?: m.Nary[]
  phant?: m.Phant[]
  mr?: m.R[]
  rad?: m.Rad[]
  sPre?: m.SPre[]
  sSub?: m.SSub[]
  sSubSup?: m.SSubSup[]
  sSup?: m.SSup[]
}

export interface SaveThroughXslt extends BaseType {
  type: 'element'
  name: 'w:saveThroughXslt'
  attributes: {
    id?: string
    solutionID?: string
  }
}

export interface SdtBlock extends BaseType {
  type: 'element'
  name: 'w:sdtBlock'

  children: RequiredMap<SdtBlockMap>[]
}

export interface SdtBlockMap {
  sdtContent?: SdtContentBlock
  sdtEndPr?: SdtEndPr
  sdtPr?: SdtPr
}

export interface SdtCell extends BaseType {
  type: 'element'
  name: 'w:sdtCell'

  children: RequiredMap<SdtCellMap>[]
}

export interface SdtCellMap {
  sdtContent?: SdtContentCell
  sdtEndPr?: SdtEndPr
  sdtPr?: SdtPr
}

export interface SdtComboBox extends BaseType {
  type: 'element'
  name: 'w:sdtComboBox'
  attributes: {
    lastValue?: string
  }
  children: RequiredMap<SdtComboBoxMap>[]
}

export interface SdtComboBoxMap {
  listItem?: SdtListItem[]
}

export interface SdtContentBlock extends BaseType {
  type: 'element'
  name: 'w:sdtContentBlock'

  children: RequiredMap<SdtContentBlockMap>[]
}

export interface SdtContentBlockMap {
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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

export interface SdtContentCell extends BaseType {
  type: 'element'
  name: 'w:sdtContentCell'

  children: RequiredMap<SdtContentCellMap>[]
}

export interface SdtContentCellMap {
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlCell[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtCell[]
  tc?: Tc[]
}

export interface SdtContentRow extends BaseType {
  type: 'element'
  name: 'w:sdtContentRow'

  children: RequiredMap<SdtContentRowMap>[]
}

export interface SdtContentRowMap {
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRow[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  sdt?: SdtRow[]
  tr?: Row[]
}

export interface SdtContentRun extends BaseType {
  type: 'element'
  name: 'w:sdtContentRun'

  children: RequiredMap<SdtContentRunMap>[]
}

export interface SdtContentRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel[]
}

export interface SdtDate extends BaseType {
  type: 'element'
  name: 'w:sdtDate'
  attributes: {
    fullDate?: Date
  }
  children: RequiredMap<SdtDateMap>[]
}

export interface SdtDateMap {
  calendar?: CalendarType
  dateFormat?: String
  lid?: Lang
  storeMappedDataAs?: SdtDateMappingType
}

export interface SdtDateMappingType extends BaseType {
  type: 'element'
  name: 'w:sdtDateMappingType'
  attributes: {
    val: SdtDateMappingTypeVal
  }
}

export interface SdtDocPart extends BaseType {
  type: 'element'
  name: 'w:sdtDocPart'

  children: RequiredMap<SdtDocPartMap>[]
}

export interface SdtDocPartMap {
  docPartCategory?: String
  docPartGallery?: String
  docPartUnique?: OnOff
}

export interface SdtDropDownList extends BaseType {
  type: 'element'
  name: 'w:sdtDropDownList'
  attributes: {
    lastValue?: string
  }
  children: RequiredMap<SdtDropDownListMap>[]
}

export interface SdtDropDownListMap {
  listItem?: SdtListItem[]
}

export interface SdtEndPr extends BaseType {
  type: 'element'
  name: 'w:sdtEndPr'

  children: RequiredMap<SdtEndPrMap>[]
}

export interface SdtEndPrMap {
  rPr?: RPr[]
}

export interface SdtListItem extends BaseType {
  type: 'element'
  name: 'w:sdtListItem'
  attributes: {
    displayText: string
    value: string
  }
}

export interface SdtPr extends BaseType {
  type: 'element'
  name: 'w:sdtPr'

  children: RequiredMap<SdtPrMap>[]
}

export interface SdtPrMap {
  alias?: String
  bibliography?: Empty
  citation?: Empty
  comboBox?: SdtComboBox
  dataBinding?: DataBinding
  date?: SdtDate
  docPartList?: SdtDocPart
  docPartObj?: SdtDocPart
  dropDownList?: SdtDropDownList
  equation?: Empty
  group?: Empty
  id?: DecimalNumber
  label?: DecimalNumber
  lock?: Lock
  picture?: Empty
  placeholder?: Placeholder
  richText?: Empty
  rPr?: RPr
  showingPlcHdr?: OnOff
  tabIndex?: UnsignedDecimalNumber
  tag?: String
  temporary?: OnOff
  text?: SdtText
}

export interface SdtRow extends BaseType {
  type: 'element'
  name: 'w:sdtRow'

  children: RequiredMap<SdtRowMap>[]
}

export interface SdtRowMap {
  sdtContent?: SdtContentRow
  sdtEndPr?: SdtEndPr
  sdtPr?: SdtPr
}

export interface SdtRun extends BaseType {
  type: 'element'
  name: 'w:sdtRun'

  children: RequiredMap<SdtRunMap>[]
}

export interface SdtRunMap {
  sdtContent?: SdtContentRun
  sdtEndPr?: SdtEndPr
  sdtPr?: SdtPr
}

export interface SdtText extends BaseType {
  type: 'element'
  name: 'w:sdtText'
  attributes: {
    multiLine: string
  }
}

export interface SectPr extends BaseType {
  type: 'element'
  name: 'w:sectPr'
  attributes: {
    rsidDel: string
    rsidR: string
    rsidRPr: string
    rsidSect: string
  }
  children: RequiredMap<SectPrMap>[]
}

export interface SectPrMap {
  bidi?: OnOff
  cols?: Columns
  docGrid?: DocGrid
  endnotePr?: EdnProps
  footerReference?: HdrFtrRef[]
  footnotePr?: FtnProps
  formProt?: OnOff
  headerReference?: HdrFtrRef[]
  lnNumType?: LineNumber
  noEndnote?: OnOff
  paperSrc?: PaperSource
  pgBorders?: PageBorders
  pgMar?: PageMar
  pgNumType?: PageNumber
  pgSz?: PageSz
  printerSettings?: Rel
  rtlGutter?: OnOff
  sectPrChange?: SectPrChange
  textDirection?: TextDirection
  titlePg?: OnOff
  type?: SectType
  vAlign?: VerticalJc
}

export interface SectPrBase extends BaseType {
  type: 'element'
  name: 'w:sectPrBase'
  attributes: {
    rsidDel: string
    rsidR: string
    rsidRPr: string
    rsidSect: string
  }
  children: RequiredMap<SectPrBaseMap>[]
}

export interface SectPrBaseMap {
  bidi?: OnOff
  cols?: Columns
  docGrid?: DocGrid
  endnotePr?: EdnProps
  footnotePr?: FtnProps
  formProt?: OnOff
  lnNumType?: LineNumber
  noEndnote?: OnOff
  paperSrc?: PaperSource
  pgBorders?: PageBorders
  pgMar?: PageMar
  pgNumType?: PageNumber
  pgSz?: PageSz
  printerSettings?: Rel
  rtlGutter?: OnOff
  textDirection?: TextDirection
  titlePg?: OnOff
  type?: SectType
  vAlign?: VerticalJc
}

export type SectPrChange = TrackChange & {
  type: 'element'
  name: 'w:sectPrChange'

  children: RequiredMap<SectPrChangeMap>[]
}

export interface SectPrChangeMap {
  sectPr?: SectPrBase
}

export interface SectType extends BaseType {
  type: 'element'
  name: 'w:sectType'
  attributes: {
    val: SectionMarkVal
  }
}

export interface Settings extends BaseType {
  type: 'element'
  name: 'w:settings'

  children: RequiredMap<SettingsMap>[]
}

export interface SettingsMap {
  activeWritingStyle?: WritingStyle[]
  alignBordersAndEdges?: OnOff
  alwaysMergeEmptyNamespace?: OnOff
  alwaysShowPlaceholderText?: OnOff
  attachedSchema?: String[]
  attachedTemplate?: Rel
  autoFormatOverride?: OnOff
  autoHyphenation?: OnOff
  bookFoldPrinting?: OnOff
  bookFoldPrintingSheets?: DecimalNumber
  bookFoldRevPrinting?: OnOff
  bordersDoNotSurroundFooter?: OnOff
  bordersDoNotSurroundHeader?: OnOff
  captions?: Captions
  characterSpacingControl?: CharacterSpacing
  clickAndTypeStyle?: String
  clrSchemeMapping?: ColorSchemeMapping
  compat?: Compat
  consecutiveHyphenLimit?: DecimalNumber
  decimalSymbol?: String
  defaultTableStyle?: String
  defaultTabStop?: TwipsMeasure
  displayBackgroundShape?: OnOff
  displayHorizontalDrawingGridEvery?: DecimalNumber
  displayVerticalDrawingGridEvery?: DecimalNumber
  documentProtection?: DocProtect
  documentType?: DocType
  docVars?: DocVars
  doNotAutoCompressPictures?: OnOff
  doNotDemarcateInvalidXml?: OnOff
  doNotDisplayPageBoundaries?: OnOff
  doNotEmbedSmartTags?: OnOff
  doNotHyphenateCaps?: OnOff
  doNotIncludeSubdocsInStats?: OnOff
  doNotShadeFormData?: OnOff
  doNotTrackFormatting?: OnOff
  doNotTrackMoves?: OnOff
  doNotUseMarginsForDrawingGridOrigin?: OnOff
  doNotValidateAgainstSchema?: OnOff
  drawingGridHorizontalOrigin?: TwipsMeasure
  drawingGridHorizontalSpacing?: TwipsMeasure
  drawingGridVerticalOrigin?: TwipsMeasure
  drawingGridVerticalSpacing?: TwipsMeasure
  embedSystemFonts?: OnOff
  embedTrueTypeFonts?: OnOff
  endnotePr?: EdnDocProps
  evenAndOddHeaders?: OnOff
  footnotePr?: FtnDocProps
  forceUpgrade?: Empty
  formsDesign?: OnOff
  gutterAtTop?: OnOff
  hideGrammaticalErrors?: OnOff
  hideSpellingErrors?: OnOff
  hyphenationZone?: TwipsMeasure
  ignoreMixedContent?: OnOff
  linkStyles?: OnOff
  listSeparator?: String
  mailMerge?: MailMerge
  mathPr?: m.MathPr
  mirrorMargins?: OnOff
  noLineBreaksAfter?: Kinsoku
  noLineBreaksBefore?: Kinsoku
  noPunctuationKerning?: OnOff
  printFormsData?: OnOff
  printFractionalCharacterWidth?: OnOff
  printPostScriptOverText?: OnOff
  printTwoOnOne?: OnOff
  proofState?: Proof
  readModeInkLockDown?: ReadingModeInkLockDown
  removeDateAndTime?: OnOff
  removePersonalInformation?: OnOff
  revisionView?: TrackChangesView
  rsids?: DocRsids
  saveFormsData?: OnOff
  saveInvalidXml?: OnOff
  savePreviewPicture?: OnOff
  saveSubsetFonts?: OnOff
  saveThroughXslt?: SaveThroughXslt
  saveXmlDataOnly?: OnOff
  schemaLibrary?: sl.SchemaLibrary
  showEnvelope?: OnOff
  showXMLTags?: OnOff
  smartTagType?: SmartTagType[]
  strictFirstAndLastChars?: OnOff
  styleLockQFSet?: OnOff
  styleLockTheme?: OnOff
  stylePaneFormatFilter?: StylePaneFilter
  stylePaneSortMethod?: StyleSort
  summaryLength?: DecimalNumberOrPrecent
  themeFontLang?: Language
  trackRevisions?: OnOff
  updateFields?: OnOff
  useXSLTWhenSaving?: OnOff
  view?: View
  writeProtection?: WriteProtection
  zoom?: Zoom
}

export interface Shd extends BaseType {
  type: 'element'
  name: 'w:shd'
  attributes: {
    color?: string
    fill?: string
    themeColor?: ThemeColorVal
    themeFill?: ThemeColorVal
    themeFillShade?: string
    themeFillTint?: string
    themeShade?: string
    themeTint?: string
    val: ShdVal
  }
}

export interface SignedHpsMeasure extends BaseType {
  type: 'element'
  name: 'w:signedHpsMeasure'
  attributes: {
    val: string
  }
}

export interface SignedTwipsMeasure extends BaseType {
  type: 'element'
  name: 'w:signedTwipsMeasure'
  attributes: {
    val: string
  }
}

export interface SimpleField extends BaseType {
  type: 'element'
  name: 'w:simpleField'
  attributes: {
    dirty: string
    fldLock: string
    instr: string
  }
  children: RequiredMap<SimpleFieldMap>[]
}

export interface SimpleFieldMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
  moveToRangeStart?: MoveBookmark[]
  oMath?: m.OMath[]
  oMathPara?: m.OMathPara[]
  permEnd?: Perm[]
  permStart?: PermStart[]
  proofErr?: ProofErr[]
  r?: R[]
  sdt?: SdtRun[]
  smartTag?: SmartTagRun[]
  subDoc?: Rel[]
}

export interface SmartTagPr extends BaseType {
  type: 'element'
  name: 'w:smartTagPr'

  children: RequiredMap<SmartTagPrMap>[]
}

export interface SmartTagPrMap {
  attr?: Attr[]
}

export interface SmartTagRun extends BaseType {
  type: 'element'
  name: 'w:smartTagRun'
  attributes: {
    element: string
    uri: string
  }
  children: RequiredMap<SmartTagRunMap>[]
}

export interface SmartTagRunMap {
  bdo?: BdoContentRun[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRun[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  dir?: DirContentRun[]
  fldSimple?: SimpleField[]
  hyperlink?: Hyperlink[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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
  subDoc?: Rel[]
}

export interface SmartTagType extends BaseType {
  type: 'element'
  name: 'w:smartTagType'
  attributes: {
    name: string
    namespaceuri: string
    url: string
  }
}

export interface Spacing extends BaseType {
  type: 'element'
  name: 'w:spacing'
  attributes: {
    after?: string
    afterAutospacing?: string
    afterLines?: number
    before?: string
    beforeAutospacing?: string
    beforeLines?: number
    line?: string
    lineRule?: LineSpacingRuleVal
  }
}

export interface String extends BaseType {
  type: 'element'
  name: 'w:string'
  attributes: {
    val: string
  }
}

export interface Style extends BaseType {
  type: 'element'
  name: 'w:style'
  attributes: {
    customStyle?: string
    default?: string
    styleId?: string
    type?: StyleTypeVal
  }
  children: RequiredMap<StyleMap>[]
}

export interface StyleMap {
  aliases?: String
  autoRedefine?: OnOff
  basedOn?: String
  hidden?: OnOff
  link?: String
  locked?: OnOff
  name?: String
  next?: String
  personal?: OnOff
  personalCompose?: OnOff
  personalReply?: OnOff
  pPr?: PPrGeneral
  qFormat?: OnOff
  rPr?: RPr
  rsid?: LongHexNumber
  semiHidden?: OnOff
  tblPr?: TblPrBase
  tblStylePr?: TblStylePr[]
  tcPr?: TcPr
  trPr?: TrPr
  uiPriority?: DecimalNumber
  unhideWhenUsed?: OnOff
}

export interface StylePaneFilter extends BaseType {
  type: 'element'
  name: 'w:stylePaneFilter'
  attributes: {
    allStyles: string
    alternateStyleNames: string
    clearFormatting: string
    customStyles: string
    directFormattingOnNumbering: string
    directFormattingOnParagraphs: string
    directFormattingOnRuns: string
    directFormattingOnTables: string
    headingStyles: string
    latentStyles: string
    numberingStyles: string
    stylesInUse: string
    tableStyles: string
    top3HeadingStyles: string
    visibleStyles: string
  }
}

export interface Styles extends BaseType {
  type: 'element'
  name: 'w:styles'

  children: RequiredMap<StylesMap>[]
}

export interface StylesMap {
  docDefaults?: DocDefaults
  latentStyles?: LatentStyles
  style?: Style[]
}

export interface StyleSort extends BaseType {
  type: 'element'
  name: 'w:styleSort'
  attributes: {
    val: StyleSortVal
  }
}

export interface Sym extends BaseType {
  type: 'element'
  name: 'w:sym'
  attributes: {
    char: string
    font: string
  }
}

export interface Tabs extends BaseType {
  type: 'element'
  name: 'w:tabs'

  children: RequiredMap<TabsMap>[]
}

export interface TabsMap {
  tab: TabStop[]
}

export interface TabStop extends BaseType {
  type: 'element'
  name: 'w:tabStop'
  attributes: {
    leader?: TabTlcVal
    pos: string
    val: TabJcVal
  }
}

export interface TargetScreenSz extends BaseType {
  type: 'element'
  name: 'w:targetScreenSz'
  attributes: {
    val: TargetScreenSzVal
  }
}

export interface Tbl extends BaseType {
  type: 'element'
  name: 'w:tbl'

  children: RequiredMap<TblMap>[]
}

export interface TblMap {
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlRow[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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

export interface TblBorders extends BaseType {
  type: 'element'
  name: 'w:tblBorders'

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

export interface TblCellMar extends BaseType {
  type: 'element'
  name: 'w:tblCellMar'

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

  children: RequiredMap<TblGridMap>[]
}

export interface TblGridMap {
  tblGridChange?: TblGridChange
}

export interface TblGridBase extends BaseType {
  type: 'element'
  name: 'w:tblGridBase'

  children: RequiredMap<TblGridBaseMap>[]
}

export interface TblGridBaseMap {
  gridCol?: TblGridCol[]
}

export type TblGridChange = Markup & {
  type: 'element'
  name: 'w:tblGridChange'

  children: RequiredMap<TblGridChangeMap>[]
}

export interface TblGridChangeMap {
  tblGrid: TblGridBase
}

export interface TblGridCol extends BaseType {
  type: 'element'
  name: 'w:tblGridCol'
  attributes: {
    w: string
  }
}

export interface TblLayoutType extends BaseType {
  type: 'element'
  name: 'w:tblLayoutType'
  attributes: {
    type: TblLayoutTypeVal
  }
}

export interface TblLook extends BaseType {
  type: 'element'
  name: 'w:tblLook'
  attributes: {
    firstColumn: string
    firstRow: string
    lastColumn: string
    lastRow: string
    noHBand: string
    noVBand: string
  }
}

export interface TblOverlap extends BaseType {
  type: 'element'
  name: 'w:tblOverlap'
  attributes: {
    val: TblOverlapVal
  }
}

export interface TblPPr extends BaseType {
  type: 'element'
  name: 'w:tblPPr'
  attributes: {
    bottomFromText: string
    horzAnchor: HAnchorVal
    leftFromText: string
    rightFromText: string
    tblpX: string
    tblpXSpec: s.XAlignVal
    tblpY: string
    tblpYSpec: s.YAlignVal
    topFromText: string
    vertAnchor: VAnchorVal
  }
}

export type TblPr = TblPrBase & {
  type: 'element'
  name: 'w:tblPr'

  children: RequiredMap<TblPrMap>[]
}

export interface TblPrMap {
  tblPrChange?: TblPrChange
}

export interface TblPrBase extends BaseType {
  type: 'element'
  name: 'w:tblPrBase'

  children: RequiredMap<TblPrBaseMap>[]
}

export interface TblPrBaseMap {
  bidiVisual?: OnOff
  jc?: JcTable
  shd?: Shd
  tblBorders?: TblBorders
  tblCaption?: String
  tblCellMar?: TblCellMar
  tblCellSpacing?: TblWidth
  tblDescription?: String
  tblInd?: TblWidth
  tblLayout?: TblLayoutType
  tblLook?: TblLook
  tblOverlap?: TblOverlap
  tblpPr?: TblPPr
  tblStyle?: String
  tblStyleColBandSize?: DecimalNumber
  tblStyleRowBandSize?: DecimalNumber
  tblW?: TblWidth
}

export type TblPrChange = TrackChange & {
  type: 'element'
  name: 'w:tblPrChange'

  children: RequiredMap<TblPrChangeMap>[]
}

export interface TblPrChangeMap {
  tblPr: TblPrBase
}

export type TblPrEx = TblPrExBase & {
  type: 'element'
  name: 'w:tblPrEx'

  children: RequiredMap<TblPrExMap>[]
}

export interface TblPrExMap {
  tblPrExChange?: TblPrExChange
}

export interface TblPrExBase extends BaseType {
  type: 'element'
  name: 'w:tblPrExBase'

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

  children: RequiredMap<TblPrExChangeMap>[]
}

export interface TblPrExChangeMap {
  tblPrEx: TblPrExBase
}

export interface TblStylePr extends BaseType {
  type: 'element'
  name: 'w:tblStylePr'
  attributes: {
    type: TblStyleOverrideTypeVal
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

export interface TblWidth extends BaseType {
  type: 'element'
  name: 'w:tblWidth'
  attributes: {
    type: TblWidthVal
    w: string
  }
}

export interface Tc extends BaseType {
  type: 'element'
  name: 'w:tc'
  attributes: {
    id?: string
  }
  children: RequiredMap<TcMap>[]
}

export interface TcMap {
  altChunk?: AltChunk[]
  bookmarkEnd?: MarkupRange[]
  bookmarkStart?: Bookmark[]
  commentRangeEnd?: MarkupRange[]
  commentRangeStart?: MarkupRange[]
  customXml?: CustomXmlBlock[]
  customXmlDelRangeEnd?: Markup[]
  customXmlDelRangeStart?: TrackChange[]
  customXmlInsRangeEnd?: Markup[]
  customXmlInsRangeStart?: TrackChange[]
  customXmlMoveFromRangeEnd?: Markup[]
  customXmlMoveFromRangeStart?: TrackChange[]
  customXmlMoveToRangeEnd?: Markup[]
  customXmlMoveToRangeStart?: TrackChange[]
  del?: RunTrackChange[]
  ins?: RunTrackChange[]
  moveFrom?: RunTrackChange[]
  moveFromRangeEnd?: MarkupRange[]
  moveFromRangeStart?: MoveBookmark[]
  moveTo?: RunTrackChange[]
  moveToRangeEnd?: MarkupRange[]
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

export interface TcBorders extends BaseType {
  type: 'element'
  name: 'w:tcBorders'

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

export interface TcMar extends BaseType {
  type: 'element'
  name: 'w:tcMar'

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

  children: RequiredMap<TcPrMap>[]
}

export interface TcPrMap {
  tcPrChange?: TcPrChange
}

export interface TcPrBase extends BaseType {
  type: 'element'
  name: 'w:tcPrBase'

  children: RequiredMap<TcPrBaseMap>[]
}

export interface TcPrBaseMap {
  cnfStyle?: Cnf
  gridSpan?: DecimalNumber
  headers?: Headers
  hideMark?: OnOff
  noWrap?: OnOff
  shd?: Shd
  tcBorders?: TcBorders
  tcFitText?: OnOff
  tcMar?: TcMar
  tcW?: TblWidth
  textDirection?: TextDirection
  vAlign?: VerticalJc
  vMerge?: VMerge
}

export type TcPrChange = TrackChange & {
  type: 'element'
  name: 'w:tcPrChange'

  children: RequiredMap<TcPrChangeMap>[]
}

export interface TcPrChangeMap {
  tcPr: TcPrInner
}

export type TcPrInner = TcPrBase & {
  type: 'element'
  name: 'w:tcPrInner'

  children: RequiredMap<TcPrInnerMap>[]
}

export interface TcPrInnerMap {
  cellDel?: TrackChange
  cellIns?: TrackChange
  cellMerge?: CellMergeTrackChange
}

export interface T extends BaseType {
  type: 'element'
  name: 'w:text'
  attributes: {
    'xml:space': 'preserve' | 'default'
  }
  children: Text[]
}
export type Text = UnistLiteral & {
  type: 'text'
  value: string
}

export interface TextAlignment extends BaseType {
  type: 'element'
  name: 'w:textAlignment'
  attributes: {
    val: TextAlignmentVal
  }
}

export interface TextboxTightWrap extends BaseType {
  type: 'element'
  name: 'w:textboxTightWrap'
  attributes: {
    val: TextboxTightWrapVal
  }
}

export interface TextDirection extends BaseType {
  type: 'element'
  name: 'w:textDirection'
  attributes: {
    val: TextDirectionVal
  }
}

export interface TextEffect extends BaseType {
  type: 'element'
  name: 'w:textEffect'
  attributes: {
    val: TextEffectVal
  }
}

export interface TextScale extends BaseType {
  type: 'element'
  name: 'w:textScale'
  attributes: {
    val: string
  }
}

export type TopPageBorder = PageBorder & {
  type: 'element'
  name: 'w:topPageBorder'
  attributes: {
    topLeft?: string
    topRight?: string
  }
}

export type TrackChange = Markup & {
  type: 'element'
  name: 'w:trackChange' | string
  attributes: {
    id: number
    author: string
    date?: Date
  }
}

export type TrackChangeRange = TrackChange & {
  type: 'element'
  name: 'w:trackChangeRange'
  attributes: {
    displacedByCustomXml?: DisplacedByCustomXmlVal
  }
}

export interface TrackChangesView extends BaseType {
  type: 'element'
  name: 'w:trackChangesView'
  attributes: {
    comments?: string
    formatting?: string
    inkAnnotations?: string
    insDel?: string
    markup?: string
  }
}

export type TrPr = TrPrBase & {
  type: 'element'
  name: 'w:trPr'

  children: RequiredMap<TrPrMap>[]
}

export interface TrPrMap {
  del?: TrackChange
  ins?: TrackChange
  trPrChange?: TrPrChange
}

export interface TrPrBase extends BaseType {
  type: 'element'
  name: 'w:trPrBase'

  children: RequiredMap<TrPrBaseMap>[]
}

export interface TrPrBaseMap {
  cantSplit?: OnOff[]
  cnfStyle?: Cnf[]
  divId?: DecimalNumber[]
  gridAfter?: DecimalNumber[]
  gridBefore?: DecimalNumber[]
  hidden?: OnOff[]
  jc?: JcTable[]
  tblCellSpacing?: TblWidth[]
  tblHeader?: OnOff[]
  trHeight?: Height[]
  wAfter?: TblWidth[]
  wBefore?: TblWidth[]
}

export type TrPrChange = TrackChange & {
  type: 'element'
  name: 'w:trPrChange'

  children: RequiredMap<TrPrChangeMap>[]
}

export interface TrPrChangeMap {
  trPr: TrPrBase
}

export interface TwipsMeasure extends BaseType {
  type: 'element'
  name: 'w:twipsMeasure'
  attributes: {
    val: string
  }
}

export interface Underline extends BaseType {
  type: 'element'
  name: 'w:underline'
  attributes: {
    color?: string
    themeColor?: ThemeColorVal
    themeShade?: string
    themeTint?: string
    val?: UnderlineVal
  }
}

export interface UnsignedDecimalNumber extends BaseType {
  type: 'element'
  name: 'w:unsignedDecimalNumber'
  attributes: {
    val: number
  }
}

export interface VerticalAlignRun extends BaseType {
  type: 'element'
  name: 'w:verticalAlignRun'
  attributes: {
    val: s.VerticalAlignRunVal
  }
}

export interface VerticalJc extends BaseType {
  type: 'element'
  name: 'w:verticalJc'
  attributes: {
    val: VerticalJcVal
  }
}

export interface View extends BaseType {
  type: 'element'
  name: 'w:view'
  attributes: {
    val: ViewVal
  }
}

export interface VMerge extends BaseType {
  type: 'element'
  name: 'w:vMerge'
  attributes: {
    val: MergeVal
  }
}

export interface WebSettings extends BaseType {
  type: 'element'
  name: 'w:webSettings'

  children: RequiredMap<WebSettingsMap>[]
}

export interface WebSettingsMap {
  allowPNG?: OnOff
  divs?: Divs
  doNotOrganizeInFolder?: OnOff
  doNotRelyOnCSS?: OnOff
  doNotSaveAsSingleFile?: OnOff
  doNotUseLongFileNames?: OnOff
  encoding?: String
  frameset?: Frameset
  optimizeForBrowser?: OptimizeForBrowser
  pixelsPerInch?: DecimalNumber
  saveSmartTagsAsXml?: OnOff
  targetScreenSz?: TargetScreenSz
}

export interface WriteProtection extends BaseType {
  type: 'element'
  name: 'w:writeProtection'
  attributes: {
    algorithmName?: string
    hashValue?: string
    recommended?: string
    saltValue?: string
    spinCount?: number
  }
}

export interface WritingStyle extends BaseType {
  type: 'element'
  name: 'w:writingStyle'
  attributes: {
    appName: string
    checkStyle: string
    dllVersion: string
    lang: string
    nlCheck?: string
    vendorID: string
  }
}

export interface Zoom extends BaseType {
  type: 'element'
  name: 'w:zoom'
  attributes: {
    percent: string
    val?: ZoomVal
  }
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

export interface document extends BaseType {
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
