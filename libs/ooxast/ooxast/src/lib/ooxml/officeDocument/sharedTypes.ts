import * as Primitive from '../../xml-primitives'

import { RequiredMap } from '../../ooxast'

// Source files:
// http://localhost:3000/shared-commonSimpleTypes.xsd

import { Node as UnistNode } from 'unist'
export type CalendarTypeVal =
  | 'gregorian'
  | 'gregorianUs'
  | 'gregorianMeFrench'
  | 'gregorianArabic'
  | 'hijri'
  | 'hebrew'
  | 'taiwan'
  | 'japan'
  | 'thai'
  | 'korea'
  | 'saka'
  | 'gregorianXlitEnglish'
  | 'gregorianXlitFrench'
  | 'none'

export type ConformanceClassVal = 'strict' | 'transitional'

export type FixedPercentageVal = string

export type GuidVal = string

export type HexColorRGBVal = string

export type LangVal = string

export type OnOffVal = string

export type PanoseVal = string

export type PercentageVal = string

export type PositiveFixedPercentageVal = string

export type PositivePercentageVal = string

export type PositiveUniversalMeasureVal = string

export type StringVal = string

export type TwipsMeasureVal = string

export type UniversalMeasureVal = string

export type UnsignedDecimalNumberVal = number

export type VerticalAlignRunVal = 'baseline' | 'superscript' | 'subscript'

export type XAlignVal = 'left' | 'center' | 'right' | 'inside' | 'outside'

export type XmlNameVal = string

export type XstringVal = string

export type YAlignVal =
  | 'inline'
  | 'top'
  | 'center'
  | 'bottom'
  | 'inside'
  | 'outside'

export interface document extends UnistNode {}
export var document: document
