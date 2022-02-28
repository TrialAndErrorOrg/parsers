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
