import * as s from './sharedTypes'
import { Text } from '../wordprocessingml/main'
import { RequiredMap } from '../../ooxast'
import { Node as UnistNode } from 'unist'

// Source files:
// http://localhost:3000/shared-bibliography.xsd

export interface Author extends UnistNode {
  type: 'element'
  name: `b:Author`
  attributes: Record<string, never>
  children: RequiredMap<AuthorMap>
}

export interface AuthorMap {
  Artist?: Name<'Artist'>
  Author?: NameOrCorporate<'Author'>
  BookAuthor?: Name<'BookAuthor'>
  Compiler?: Name<'Compiler'>
  Composer?: Name<'Composer'>
  Conductor?: Name<'Conductor'>
  Counsel?: Name<'Counsel'>
  Director?: Name<'Director'>
  Editor?: Name<'Editor'>
  Interviewee?: Name<'Interviewee'>
  Interviewer?: Name<'Interviewer'>
  Inventor?: Name<'Inventor'>
  Performer?: NameOrCorporate<'Performer'>
  ProducerName?: Name<'ProducerName'>
  Translator?: Name<'Translator'>
  Writer?: Name<'Writer'>
}

export interface NameList extends UnistNode {
  type: 'element'
  name: 'b:NameList'
  attributes: Record<string, never>
  children: RequiredMap<NameListMap>
}

export interface NameListMap {
  Person: Person[]
}

export interface NameOrCorporate<name extends string = 'NameOrCorporate'>
  extends UnistNode {
  type: 'element'
  name: `b:${name}`
  attributes: Record<string, never>
  children: RequiredMap<NameOrCorporateMap>
}

export interface NameOrCorporateMap {
  Corporate?: MetaData<'Corporate'>
  NameList?: NameList
}

export interface Name<name extends string = 'Name'> extends UnistNode {
  type: 'element'
  name: `b:${name}`
  attributes: Record<string, never>
  children: RequiredMap<NameMap>
}

export interface NameMap {
  NameList: NameList
}

export interface Person extends UnistNode {
  type: 'element'
  name: 'b:Person'
  attributes: Record<string, never>
  children: RequiredMap<PersonMap>
}

export interface PersonMap {
  First?: MetaData<'First'>
  Last?: MetaData<'Last'>
  Middle?: MetaData<'Middle'>
}

export interface Sources extends UnistNode {
  type: 'element'
  name: 'b:Sources'
  attributes: {
    SelectedStyle: string
    StyleName: string
    URI: string
  }
  children: RequiredMap<SourcesMap>
}

export interface SourcesMap {
  Source?: Source[]
}
export interface Source extends UnistNode {
  type: 'element'
  name: 'b:Source'
  attributes: {
    SelectedStyle: string
    StyleName: string
    URI: string
  }
  children: RequiredMap<SourceMap>
}

export interface MetaData<tag extends string = 'SourceType'> extends UnistNode {
  type: 'element'
  name: `b:${tag}`
  attributes: Record<string, never>
  children: [Text]
}
export interface SourceType extends UnistNode {
  type: 'element'
  name: 'b:SourceType'
  attributes: Record<string, never>
  children: [{ type: 'text'; value: SourceVal }]
}

export interface SourceMap {
  AbbreviatedCaseNumber?: MetaData<'AbbreviatedCaseNumber'>
  AlbumTitle?: MetaData<'AlbumTitle'>
  Author?: Author
  BookTitle?: MetaData<'BookTitle'>
  Broadcaster?: MetaData<'Broadcaster'>
  BroadcastTitle?: MetaData<'BroadcastTitle'>
  CaseNumber?: MetaData<'CaseNumber'>
  ChapterNumber?: MetaData<'ChapterNumber'>
  City?: MetaData<'City'>
  Comments?: MetaData<'Comments'>
  ConferenceName?: MetaData<'ConferenceName'>
  CountryRegion?: MetaData<'CountryRegion'>
  Court?: MetaData<'Court'>
  Day?: MetaData<'Day'>
  DayAccessed?: MetaData<'DayAccessed'>
  Department?: MetaData<'Department'>
  Distributor?: MetaData<'Distributor'>
  Edition?: MetaData<'Edition'>
  Guid?: MetaData<'Guid'>
  Institution?: MetaData<'Institution'>
  InternetSiteTitle?: MetaData<'InternetSiteTitle'>
  Issue?: MetaData<'Issue'>
  JournalName?: MetaData<'JournalName'>
  LCID?: MetaData<'LCID'>
  Medium?: MetaData<'Medium'>
  Month?: MetaData<'Month'>
  MonthAccessed?: MetaData<'MonthAccessed'>
  NumberVolumes?: MetaData<'NumberVolumes'>
  Pages?: MetaData<'Pages'>
  PatentNumber?: MetaData<'PatentNumber'>
  PeriodicalTitle?: MetaData<'PeriodicalTitle'>
  ProductionCompany?: MetaData<'ProductionCompany'>
  PublicationTitle?: MetaData<'PublicationTitle'>
  Publisher?: MetaData<'Publisher'>
  RecordingNumber?: MetaData<'RecordingNumber'>
  RefOrder?: MetaData<'RefOrder'>
  Reporter?: MetaData<'Reporter'>
  ShortTitle?: MetaData<'ShortTitle'>
  Source?: SourceType[]
  StandardNumber?: MetaData<'StandardNumber'>
  StateProvince?: MetaData<'StateProvince'>
  Station?: MetaData<'Station'>
  Tag?: MetaData<'Tag'>
  Theater?: MetaData<'Theater'>
  Thesis?: MetaData<'Thesis'>
  Title?: MetaData<'Title'>
  Type?: MetaData<'Type'>
  URL?: MetaData<'URL'>
  Version?: MetaData<'Version'>
  Volume?: MetaData<'Volume'>
  Year?: MetaData<'Year'>
  YearAccessed?: MetaData<'YearAccessed'>
}

export type SourceVal =
  | 'ArticleInAPeriodical'
  | 'Book'
  | 'BookSection'
  | 'JournalArticle'
  | 'ConferenceProceedings'
  | 'Report'
  | 'SoundRecording'
  | 'Performance'
  | 'Art'
  | 'DocumentFromInternetSite'
  | 'InternetSite'
  | 'Film'
  | 'Interview'
  | 'Patent'
  | 'ElectronicSource'
  | 'Case'
  | 'Misc'

export interface document extends UnistNode {
  Sources: Sources
}
//eslint-disable-next-line
export var document: document
