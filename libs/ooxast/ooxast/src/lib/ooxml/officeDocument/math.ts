import * as Primitive from '../../xml-primitives'
import * as s from './sharedTypes'
import * as w from '../wordprocessingml/main'
import { RequiredMap } from '../../ooxast'

// Source files:
// http://localhost:3000/shared-math.xsd

interface BaseType {
  _exists: boolean
  _namespace: string
}
export interface Acc extends BaseType {
  type: 'element'
  name: 'm:acc'

  children: RequiredMap<AccMap>
}

export interface AccMap {
  accPr?: AccPr
  e: OMathArg
}

export interface AccPr extends BaseType {
  type: 'element'
  name: 'm:accPr'

  children: RequiredMap<AccPrMap>
}

export interface AccPrMap {
  chr?: Char
  ctrlPr?: CtrlPr
}

export interface Bar extends BaseType {
  type: 'element'
  name: 'm:bar'

  children: RequiredMap<BarMap>
}

export interface BarMap {
  barPr?: BarPr
  e: OMathArg
}

export interface BarPr extends BaseType {
  type: 'element'
  name: 'm:barPr'

  children: RequiredMap<BarPrMap>
}

export interface BarPrMap {
  ctrlPr?: CtrlPr
  pos?: TopBot
}

export interface BorderBox extends BaseType {
  type: 'element'
  name: 'm:borderBox'

  children: RequiredMap<BorderBoxMap>
}

export interface BorderBoxMap {
  borderBoxPr?: BorderBoxPr
  e: OMathArg
}

export interface BorderBoxPr extends BaseType {
  type: 'element'
  name: 'm:borderBoxPr'

  children: RequiredMap<BorderBoxPrMap>
}

export interface BorderBoxPrMap {
  ctrlPr?: CtrlPr
  hideBot?: OnOff
  hideLeft?: OnOff
  hideRight?: OnOff
  hideTop?: OnOff
  strikeBLTR?: OnOff
  strikeH?: OnOff
  strikeTLBR?: OnOff
  strikeV?: OnOff
}

export interface Box extends BaseType {
  type: 'element'
  name: 'm:box'

  children: RequiredMap<BoxMap>
}

export interface BoxMap {
  boxPr?: BoxPr
  e: OMathArg
}

export interface BoxPr extends BaseType {
  type: 'element'
  name: 'm:boxPr'

  children: RequiredMap<BoxPrMap>
}

export interface BoxPrMap {
  aln?: OnOff
  brk?: ManualBreak
  ctrlPr?: CtrlPr
  diff?: OnOff
  noBreak?: OnOff
  opEmu?: OnOff
}

export interface BreakBin extends BaseType {
  type: 'element'
  name: 'm:breakBin'
  attributes: {
    val: BreakBinVal
  }
}

export interface BreakBinSub extends BaseType {
  type: 'element'
  name: 'm:breakBinSub'
  attributes: {
    val: BreakBinSubVal
  }
}

export interface Char extends BaseType {
  type: 'element'
  name: 'm:char'
  attributes: {
    val: string
  }
}

export interface CtrlPr extends BaseType {
  type: 'element'
  name: 'm:ctrlPr'

  children: RequiredMap<CtrlPrMap>
}

export interface CtrlPrMap {
  del?: w.MathCtrlDel
  ins?: w.MathCtrlIns
  rPr?: w.RPr
}

export interface D extends BaseType {
  type: 'element'
  name: 'm:d'

  children: RequiredMap<DMap>
}

export interface DMap {
  dPr?: DPr
  e: OMathArg[]
}

export interface DPr extends BaseType {
  type: 'element'
  name: 'm:dPr'

  children: RequiredMap<DPrMap>
}

export interface DPrMap {
  begChr?: Char
  ctrlPr?: CtrlPr
  endChr?: Char
  grow?: OnOff
  sepChr?: Char
  shp?: Shp
}

export interface EqArr extends BaseType {
  type: 'element'
  name: 'm:eqArr'

  children: RequiredMap<EqArrMap>
}

export interface EqArrMap {
  e: OMathArg[]
  eqArrPr?: EqArrPr
}

export interface EqArrPr extends BaseType {
  type: 'element'
  name: 'm:eqArrPr'

  children: RequiredMap<EqArrPrMap>
}

export interface EqArrPrMap {
  baseJc?: YAlign
  ctrlPr?: CtrlPr
  maxDist?: OnOff
  objDist?: OnOff
  rSp?: UnSignedInteger
  rSpRule?: SpacingRule
}

export interface F extends BaseType {
  type: 'element'
  name: 'm:f'

  children: RequiredMap<FMap>
}

export interface FMap {
  den: OMathArg
  fPr?: FPr
  num: OMathArg
}

export interface FPr extends BaseType {
  type: 'element'
  name: 'm:fPr'

  children: RequiredMap<FPrMap>
}

export interface FPrMap {
  ctrlPr?: CtrlPr
  type?: FType
}

export interface FType extends BaseType {
  type: 'element'
  name: 'm:fType'
  attributes: {
    val: FTypeVal
  }
}

export interface Func extends BaseType {
  type: 'element'
  name: 'm:func'

  children: RequiredMap<FuncMap>
}

export interface FuncMap {
  e: OMathArg
  fName: OMathArg
  funcPr?: FuncPr
}

export interface FuncPr extends BaseType {
  type: 'element'
  name: 'm:funcPr'

  children: RequiredMap<FuncPrMap>
}

export interface FuncPrMap {
  ctrlPr?: CtrlPr
}

export interface GroupChr extends BaseType {
  type: 'element'
  name: 'm:groupChr'

  children: RequiredMap<GroupChrMap>
}

export interface GroupChrMap {
  e: OMathArg
  groupChrPr?: GroupChrPr
}

export interface GroupChrPr extends BaseType {
  type: 'element'
  name: 'm:groupChrPr'

  children: RequiredMap<GroupChrPrMap>
}

export interface GroupChrPrMap {
  chr?: Char
  ctrlPr?: CtrlPr
  pos?: TopBot
  vertJc?: TopBot
}

export interface Integer2 extends BaseType {
  type: 'element'
  name: 'm:integer2'
  attributes: {
    val: number
  }
}

export interface Integer255 extends BaseType {
  type: 'element'
  name: 'm:integer255'
  $1
  children: []
}

export interface LimLoc extends BaseType {
  type: 'element'
  name: 'm:limLoc'
  attributes: {
    val: LimLocVal
  }
}

export interface LimLow extends BaseType {
  type: 'element'
  name: 'm:limLow'

  children: RequiredMap<LimLowMap>
}

export interface LimLowMap {
  e: OMathArg
  lim: OMathArg
  limLowPr?: LimLowPr
}

export interface LimLowPr extends BaseType {
  type: 'element'
  name: 'm:limLowPr'

  children: RequiredMap<LimLowPrMap>
}

export interface LimLowPrMap {
  ctrlPr?: CtrlPr
}

export interface LimUpp extends BaseType {
  type: 'element'
  name: 'm:limUpp'

  children: RequiredMap<LimUppMap>
}

export interface LimUppMap {
  e: OMathArg
  lim: OMathArg
  limUppPr?: LimUppPr
}

export interface LimUppPr extends BaseType {
  type: 'element'
  name: 'm:limUppPr'

  children: RequiredMap<LimUppPrMap>
}

export interface LimUppPrMap {
  ctrlPr?: CtrlPr
}

export interface M extends BaseType {
  type: 'element'
  name: 'm:m'

  children: RequiredMap<MMap>
}

export interface MMap {
  mPr?: MPr
  mr: MR[]
}

export interface ManualBreak extends BaseType {
  type: 'element'
  name: 'm:manualBreak'
  attributes: {
    alnAt: number
  }
}

export interface MathPr extends BaseType {
  type: 'element'
  name: 'm:mathPr'

  children: RequiredMap<MathPrMap>
}

export interface MathPrMap {
  brkBin?: BreakBin
  brkBinSub?: BreakBinSub
  defJc?: OMathJc
  dispDef?: OnOff
  interSp?: TwipsMeasure
  intLim?: LimLoc
  intraSp?: TwipsMeasure
  lMargin?: TwipsMeasure
  mathFont?: String
  naryLim?: LimLoc
  postSp?: TwipsMeasure
  preSp?: TwipsMeasure
  rMargin?: TwipsMeasure
  smallFrac?: OnOff
  wrapIndent?: TwipsMeasure
  wrapRight?: OnOff
}

export interface MC extends BaseType {
  type: 'element'
  name: 'm:mC'

  children: RequiredMap<MCMap>
}

export interface MCMap {
  mcPr?: MCPr
}

export interface MCPr extends BaseType {
  type: 'element'
  name: 'm:mCPr'

  children: RequiredMap<MCPrMap>
}

export interface MCPrMap {
  count?: Integer255
  mcJc?: XAlign
}

export interface MCS extends BaseType {
  type: 'element'
  name: 'm:mCS'

  children: RequiredMap<MCSMap>
}

export interface MCSMap {
  mc: MC[]
}

export interface MPr extends BaseType {
  type: 'element'
  name: 'm:mPr'

  children: RequiredMap<MPrMap>
}

export interface MPrMap {
  baseJc?: YAlign
  cGp?: UnSignedInteger
  cGpRule?: SpacingRule
  cSp?: UnSignedInteger
  ctrlPr?: CtrlPr
  mcs?: MCS
  plcHide?: OnOff
  rSp?: UnSignedInteger
  rSpRule?: SpacingRule
}

export interface MR extends BaseType {
  type: 'element'
  name: 'm:mR'

  children: RequiredMap<MRMap>
}

export interface MRMap {
  e: OMathArg[]
}

export interface Nary extends BaseType {
  type: 'element'
  name: 'm:nary'

  children: RequiredMap<NaryMap>
}

export interface NaryMap {
  e: OMathArg
  naryPr?: NaryPr
  sub: OMathArg
  sup: OMathArg
}

export interface NaryPr extends BaseType {
  type: 'element'
  name: 'm:naryPr'

  children: RequiredMap<NaryPrMap>
}

export interface NaryPrMap {
  chr?: Char
  ctrlPr?: CtrlPr
  grow?: OnOff
  limLoc?: LimLoc
  subHide?: OnOff
  supHide?: OnOff
}

export interface OMath extends BaseType {
  type: 'element'
  name: 'm:oMath'

  children: RequiredMap<OMathMap>
}

export interface OMathMap {
  bookmarkEnd?: w.MarkupRange[]
  bookmarkStart?: w.Bookmark[]
  commentRangeEnd?: w.MarkupRange[]
  commentRangeStart?: w.MarkupRange[]
  customXml?: w.CustomXmlRun[]
  customXmlDelRangeEnd?: w.Markup[]
  customXmlDelRangeStart?: w.TrackChange[]
  customXmlInsRangeEnd?: w.Markup[]
  customXmlInsRangeStart?: w.TrackChange[]
  customXmlMoveFromRangeEnd?: w.Markup[]
  customXmlMoveFromRangeStart?: w.TrackChange[]
  customXmlMoveToRangeEnd?: w.Markup[]
  customXmlMoveToRangeStart?: w.TrackChange[]
  del?: w.RunTrackChange[]
  fldSimple?: w.SimpleField[]
  hyperlink?: w.Hyperlink[]
  ins?: w.RunTrackChange[]
  moveFrom?: w.RunTrackChange[]
  moveFromRangeEnd?: w.MarkupRange[]
  moveFromRangeStart?: w.MoveBookmark[]
  moveTo?: w.RunTrackChange[]
  moveToRangeEnd?: w.MarkupRange[]
  moveToRangeStart?: w.MoveBookmark[]
  oMath?: OMath[]
  oMathPara?: OMathPara[]
  permEnd?: w.Perm[]
  permStart?: w.PermStart[]
  proofErr?: w.ProofErr[]
  sdt?: w.SdtRun[]
  smartTag?: w.SmartTagRun[]
  acc?: Acc[]
  bar?: Bar[]
  borderBox?: BorderBox[]
  box?: Box[]
  d?: D[]
  eqArr?: EqArr[]
  f?: F[]
  func?: Func[]
  groupChr?: GroupChr[]
  limLow?: LimLow[]
  limUpp?: LimUpp[]
  m?: M[]
  nary?: Nary[]
  phant?: Phant[]
  r?: R[]
  rad?: Rad[]
  sPre?: SPre[]
  sSub?: SSub[]
  sSubSup?: SSubSup[]
  sSup?: SSup[]
}

export interface OMathArg extends BaseType {
  type: 'element'
  name: 'm:oMathArg'

  children: RequiredMap<OMathArgMap>
}

export interface OMathArgMap {
  bookmarkEnd?: w.MarkupRange[]
  bookmarkStart?: w.Bookmark[]
  commentRangeEnd?: w.MarkupRange[]
  commentRangeStart?: w.MarkupRange[]
  customXml?: w.CustomXmlRun[]
  customXmlDelRangeEnd?: w.Markup[]
  customXmlDelRangeStart?: w.TrackChange[]
  customXmlInsRangeEnd?: w.Markup[]
  customXmlInsRangeStart?: w.TrackChange[]
  customXmlMoveFromRangeEnd?: w.Markup[]
  customXmlMoveFromRangeStart?: w.TrackChange[]
  customXmlMoveToRangeEnd?: w.Markup[]
  customXmlMoveToRangeStart?: w.TrackChange[]
  del?: w.RunTrackChange[]
  fldSimple?: w.SimpleField[]
  hyperlink?: w.Hyperlink[]
  ins?: w.RunTrackChange[]
  moveFrom?: w.RunTrackChange[]
  moveFromRangeEnd?: w.MarkupRange[]
  moveFromRangeStart?: w.MoveBookmark[]
  moveTo?: w.RunTrackChange[]
  moveToRangeEnd?: w.MarkupRange[]
  moveToRangeStart?: w.MoveBookmark[]
  oMath?: OMath[]
  oMathPara?: OMathPara[]
  permEnd?: w.Perm[]
  permStart?: w.PermStart[]
  proofErr?: w.ProofErr[]
  sdt?: w.SdtRun[]
  smartTag?: w.SmartTagRun[]
  acc?: Acc[]
  argPr?: OMathArgPr
  bar?: Bar[]
  borderBox?: BorderBox[]
  box?: Box[]
  ctrlPr?: CtrlPr
  d?: D[]
  eqArr?: EqArr[]
  f?: F[]
  func?: Func[]
  groupChr?: GroupChr[]
  limLow?: LimLow[]
  limUpp?: LimUpp[]
  m?: M[]
  nary?: Nary[]
  phant?: Phant[]
  r?: R[]
  rad?: Rad[]
  sPre?: SPre[]
  sSub?: SSub[]
  sSubSup?: SSubSup[]
  sSup?: SSup[]
}

export interface OMathArgPr extends BaseType {
  type: 'element'
  name: 'm:oMathArgPr'

  children: RequiredMap<OMathArgPrMap>
}

export interface OMathArgPrMap {
  argSz?: Integer2
}

export interface OMathJc extends BaseType {
  type: 'element'
  name: 'm:oMathJc'
  attributes: {
    val: JcVal
  }
}

export interface OMathPara extends BaseType {
  type: 'element'
  name: 'm:oMathPara'

  children: RequiredMap<OMathParaMap>
}

export interface OMathParaMap {
  oMath: OMath[]
  oMathParaPr?: OMathParaPr
}

export interface OMathParaPr extends BaseType {
  type: 'element'
  name: 'm:oMathParaPr'

  children: RequiredMap<OMathParaPrMap>
}

export interface OMathParaPrMap {
  jc?: OMathJc
}

export interface OnOff extends BaseType {
  type: 'element'
  name: 'm:onOff'
  attributes: {
    val: string
  }
}

export interface Phant extends BaseType {
  type: 'element'
  name: 'm:phant'

  children: RequiredMap<PhantMap>
}

export interface PhantMap {
  e: OMathArg
  phantPr?: PhantPr
}

export interface PhantPr extends BaseType {
  type: 'element'
  name: 'm:phantPr'

  children: RequiredMap<PhantPrMap>
}

export interface PhantPrMap {
  ctrlPr?: CtrlPr
  show?: OnOff
  transp?: OnOff
  zeroAsc?: OnOff
  zeroDesc?: OnOff
  zeroWid?: OnOff
}

export interface R extends BaseType {
  type: 'element'
  name: 'm:r'

  children: RequiredMap<RMap>
}

export interface RMap {
  annotationRef?: w.Empty[]
  br?: w.Br[]
  commentReference?: w.Markup[]
  contentPart?: w.Rel[]
  continuationSeparator?: w.Empty[]
  cr?: w.Empty[]
  dayLong?: w.Empty[]
  dayShort?: w.Empty[]
  delInstrText?: w.Text[]
  delText?: w.Text[]
  drawing?: w.Drawing[]
  endnoteRef?: w.Empty[]
  endnoteReference?: w.FtnEdnRef[]
  fldChar?: w.FldChar[]
  footnoteRef?: w.Empty[]
  footnoteReference?: w.FtnEdnRef[]
  instrText?: w.Text[]
  lastRenderedPageBreak?: w.Empty[]
  monthLong?: w.Empty[]
  monthShort?: w.Empty[]
  noBreakHyphen?: w.Empty[]
  object?: w.Object[]
  pgNum?: w.Empty[]
  ptab?: w.PTab[]
  wrPr?: w.RPr
  ruby?: w.Ruby[]
  separator?: w.Empty[]
  softHyphen?: w.Empty[]
  sym?: w.Sym[]
  tw?: w.Text[]
  tab?: w.Empty[]
  yearLong?: w.Empty[]
  yearShort?: w.Empty[]
  rPr?: RPR
  t?: Text[]
}

export interface Rad extends BaseType {
  type: 'element'
  name: 'm:rad'

  children: RequiredMap<RadMap>
}

export interface RadMap {
  deg: OMathArg
  e: OMathArg
  radPr?: RadPr
}

export interface RadPr extends BaseType {
  type: 'element'
  name: 'm:radPr'

  children: RequiredMap<RadPrMap>
}

export interface RadPrMap {
  ctrlPr?: CtrlPr
  degHide?: OnOff
}

export interface RPR extends BaseType {
  type: 'element'
  name: 'm:rPR'

  children: RequiredMap<RPRMap>
}

export interface RPRMap {
  aln?: OnOff
  brk?: ManualBreak
  lit?: OnOff
  nor?: OnOff
  scr?: Script
  sty?: Style
}

export interface Script extends BaseType {
  type: 'element'
  name: 'm:script'
  attributes: {
    val: ScriptVal
  }
}

export interface Shp extends BaseType {
  type: 'element'
  name: 'm:shp'
  attributes: {
    val: ShpVal
  }
}

export interface SpacingRule extends BaseType {
  type: 'element'
  name: 'm:spacingRule'
  attributes: {
    val: number
  }
}

export interface SPre extends BaseType {
  type: 'element'
  name: 'm:sPre'

  children: RequiredMap<SPreMap>
}

export interface SPreMap {
  e: OMathArg
  sPrePr?: SPrePr
  sub: OMathArg
  sup: OMathArg
}

export interface SPrePr extends BaseType {
  type: 'element'
  name: 'm:sPrePr'

  children: RequiredMap<SPrePrMap>
}

export interface SPrePrMap {
  ctrlPr?: CtrlPr
}

export interface SSub extends BaseType {
  type: 'element'
  name: 'm:sSub'

  children: RequiredMap<SSubMap>
}

export interface SSubMap {
  e: OMathArg
  sSubPr?: SSubPr
  sub: OMathArg
}

export interface SSubPr extends BaseType {
  type: 'element'
  name: 'm:sSubPr'

  children: RequiredMap<SSubPrMap>
}

export interface SSubPrMap {
  ctrlPr?: CtrlPr
}

export interface SSubSup extends BaseType {
  type: 'element'
  name: 'm:sSubSup'

  children: RequiredMap<SSubSupMap>
}

export interface SSubSupMap {
  e: OMathArg
  sSubSupPr?: SSubSupPr
  sub: OMathArg
  sup: OMathArg
}

export interface SSubSupPr extends BaseType {
  type: 'element'
  name: 'm:sSubSupPr'
  children: RequiredMap<SSubSupPrMap>
}

export interface SSubSupPrMap {
  alnScr?: OnOff
  ctrlPr?: CtrlPr
}

export interface SSup extends BaseType {
  type: 'element'
  name: 'm:sSup'
  children: RequiredMap<SSupMap>
}

export interface SSupMap {
  e: OMathArg
  sSupPr?: SSupPr
  sup: OMathArg
}

export interface SSupPr extends BaseType {
  type: 'element'
  name: 'm:sSupPr'
  children: RequiredMap<SSupPrMap>
}

export interface SSupPrMap {
  ctrlPr?: CtrlPr
}

export interface String extends BaseType {
  type: 'element'
  name: 'm:string'
  attributes: {
    val: string
  }
}

export interface Style extends BaseType {
  type: 'element'
  name: 'm:style'
  attributes: {
    val: StyleVal
  }
}

export interface T extends BaseType {
  type: 'element'
  name: 'm:t'
  attributes: {}
  children: Text[]
}

export interface TopBot extends BaseType {
  type: 'element'
  name: 'm:topBot'
  attributes: {
    val: TopBotVal
  }
}

export interface TwipsMeasure extends BaseType {
  type: 'element'
  name: 'm:twipsMeasure'
  attributes: {
    val: string
  }
}

export interface UnSignedInteger extends BaseType {
  type: 'element'
  name: 'm:unSignedInteger'
  attributes: {
    val: number
  }
}

export interface XAlign extends BaseType {
  type: 'element'
  name: 'm:xAlign'
  attributes: {
    val: s.XAlignVal
  }
}

export interface YAlign extends BaseType {
  type: 'element'
  name: 'm:yAlign'
  attributes: {
    val: s.YAlignVal
  }
}

export type BreakBinVal = 'before' | 'after' | 'repeat'

export type BreakBinSubVal = '--' | '-+' | '+-'

export type CharVal = string

export type FTypeVal = 'bar' | 'skw' | 'lin' | 'noBar'

export type Integer2Val = number

export type Integer255Val = number

export type JcVal = 'left' | 'right' | 'center' | 'centerGroup'

export type LimLocVal = 'undOvr' | 'subSup'

export type ScriptVal =
  | 'roman'
  | 'script'
  | 'fraktur'
  | 'double-struck'
  | 'sans-serif'
  | 'monospace'

export type ShpVal = 'centered' | 'match'

export type SpacingRuleVal = number

export type StyleVal = 'p' | 'b' | 'i' | 'bi'

export type TopBotVal = 'top' | 'bot'

export type UnSignedIntegerVal = number

export interface document extends BaseType {
  mathPr: MathPr
  oMath: OMath
  oMathPara: OMathPara
}
export var document: document
