import { Data as CSL } from 'csl-json'

export type CiteOutput = (string | Citation)[]

export interface Citation {
  citationId: string
  citationItems: CitationItem[]
  properties: Properties
  originalText?: string
}

export interface Properties {
  noteIndex: number
  mode?: string
}

export interface CitationItem {
  id: string
  itemData: CSL
  prefix?: string
  suffix?: string
  infix?: string
  label?: string
  locator?: string
}

export interface ZoteroCitation {
  citationID: string
  citationItems: MendeleyCitationItem[]
  properties: ZoteroProperties
  schema: string
}

export interface ZoteroProperties {
  noteIndex: number
  formattedCitation: string
  plainCitation: string
}
export interface MendeleyCitation {
  citationId: string
  citationItems: MendeleyCitationItem[]
  mendeley: Mendeley
  properties: MendeleyProperties
  schema: string
}

export interface MendeleyProperties {
  noteIndex: number
}

export interface Mendeley {
  formattedCitation: string
  plainTextFormattedCitation: string
  previouslyFormattedCitation: string
}

export interface MendeleyCitationItem {
  id: string
  itemData: CSL
  uris: string[]
}

interface CitaviCitation {
  $id: string
  Entries: CitaviEntry[]
  FormattedText: FormattedText
  Tag: string
  Text: string
  WAIVersion: string
}

interface FormattedText {
  $id: string
  Count: number
  TextUnits: CitaviTextUnit[]
}

interface CitaviTextUnit {
  $id: string
  FontStyle: CitaviFontStyle
  ReadingOrder: number
  Text: string
}

interface CitaviFontStyle {
  $id: string
  Neutral: boolean
}

interface CitaviEntry {
  $id: string
  Id: string
  RangeStart?: number
  RangeLength: number
  ReferenceId: string
  Reference: CitaviReference
  UseNumberingTypeOfParentDocument: boolean
}

interface CitaviReference {
  $id: string
  AbstractComplexity: number
  AbstractSourceTextFormat: number
  Authors: CitaviAuthor[]
  CitationKeyUpdateType: number
  Collaborators: any[]
  Doi?: string
  Editors: CitaviEditor[]
  EvaluationComplexity: number
  EvaluationSourceTextFormat: number
  Groups: any[]
  HasLabel1: boolean
  HasLabel2: boolean
  Keywords: any[]
  Locations: Location[]
  Number?: string
  Organizations: any[]
  OthersInvolved: any[]
  PageRange?: string
  PageRangeNumber?: number
  PageRangeNumberingType?: string
  PageRangeNumeralSystem?: string
  Periodical?: CitaviPeriodical
  Publishers: any[]
  Quotations: any[]
  ReferenceType: string
  ShortTitle: string
  ShortTitleUpdateType: number
  SourceOfBibliographicInformation?: string
  StaticIds: string[]
  TableOfContentsComplexity: number
  TableOfContentsSourceTextFormat: number
  Tasks: any[]
  Title: string
  Translators: any[]
  Volume?: string
  Year: string
  YearResolved: string
  CreatedBy: string
  CreatedOn: string
  ModifiedBy: string
  Id: string
  ModifiedOn: string
  Project: CitaviProject2
  OnlineAddress?: string
  Subtitle?: string
}

interface CitaviPeriodical {
  $id: string
  Eissn: string
  Issn: string
  Name: string
  Pagination: number
  Protected: boolean
  CreatedBy: string
  CreatedOn: string
  ModifiedBy: string
  Id: string
  ModifiedOn: string
  Project: CitaviProject2
}

interface Location {
  $id: string
  Address: CitaviAddress
  Annotations: any[]
  LocationType: number
  MirrorsReferencePropertyId: number
  CreatedBy: string
  CreatedOn: string
  ModifiedBy: string
  Id: string
  ModifiedOn: string
  Project: CitaviProject2
}

interface CitaviAddress {
  $id: string
  LinkedResourceStatus: number
  OriginalString: string
  LinkedResourceType: number
  UriString: string
  Properties: CitaviProperties
}

interface CitaviProperties {
  $id: string
}

interface CitaviEditor {
  $id: string
  LastName: string
  Protected: boolean
  Sex: number
  CreatedBy: string
  CreatedOn: string
  ModifiedBy: string
  Id: string
  ModifiedOn: string
  Project: CitaviProject2
}

interface CitaviProject2 {
  $ref: string
}

interface CitaviAuthor {
  $id: string
  FirstName: string
  LastName: string
  Protected: boolean
  Sex: number
  CreatedBy: string
  CreatedOn: string
  ModifiedBy: string
  Id: string
  ModifiedOn: string
  Project: CitaviProject
  MiddleName?: string
}

interface CitaviProject {
  $id?: string
  $ref?: string
}
