export interface CrossrefResponse {
  status: string
  'message-type': string
  'message-version': string
  message: Message
}

export interface Message {
  'items-per-page': number
  query: Query
  'total-results': number
  'next-cursor': string
  items: CrossrefJSON[]
}

export interface CrossrefJSON {
  institution: Institution
  indexed: Indexed
  posted: Posted
  'publisher-location': string
  'update-to': Updateto[]
  'standards-body': Standardsbody[]
  'edition-number': string
  'group-title': string[]
  'reference-count': number
  publisher: string
  issue: string
  'isbn-type': Isbntype[]
  license: License[]
  funder: Funder[]
  'content-domain': Contentdomain
  chair: Chair[]
  'short-container-title': string
  accepted: Posted
  'content-updated': Posted
  'published-print': Posted
  abstract: string
  DOI: string
  type: string
  created: Indexed
  approved: Posted
  page: string
  'update-policy': string
  source: string
  'is-referenced-by-count': number
  title: string[]
  prefix: string
  volume: string
  'clinical-trial-number': Clinicaltrialnumber[]
  author: Chair[]
  member: string
  'content-created': Posted
  'published-online': Posted
  reference: Reference
  'container-title': string[]
  review: Review
  'original-title': string[]
  language: string
  link: Link[]
  deposited: Indexed
  score: number
  degree: string
  subtitle: string[]
  translator: Chair[]
  'free-to-read': Freetoread
  editor: Chair[]
  'component-number': string
  'short-title': string[]
  issued: Posted
  ISBN: string[]
  'references-count': number
  'part-number': string
  'journal-issue': Journalissue
  'alternative-id': string[]
  URL: string
  archive: string[]
  relation: Relation
  ISSN: string[]
  'issn-type': Isbntype[]
  subject: string[]
  'published-other': Posted
  published: Posted
  assertion: Assertion[]
  subtype: string
  'article-number': string
}

interface Assertion {
  group: Group
  explanation: Explanation
  name: string
  value: string
  URL: string
  order: number
}

interface Explanation {
  URL: string
}

interface Group {
  name: string
  label: string
}

interface Relation {
  additionalProp1: AdditionalProp1
  additionalProp2: AdditionalProp1
  additionalProp3: AdditionalProp1
}

interface AdditionalProp1 {
  'id-type': string
  id: string
  'asserted-by': string
}

interface Journalissue {
  issue: string
}

interface Freetoread {
  'start-date': Posted
  'end-date': Posted
}

interface Link {
  URL: string
  'content-type': string
  'content-version': string
  'intended-application': string
}

interface Review {
  type: string
  'running-number': string
  'revision-round': string
  stage: string
  'competing-interest-statement': string
  recommendation: string
  language: string
}

interface Reference {
  issn: string
  'standards-body': string
  issue: string
  key: string
  'series-title': string
  'isbn-type': string
  'doi-asserted-by': string
  'first-page': string
  isbn: string
  doi: string
  component: string
  'article-title': string
  'volume-title': string
  volume: string
  author: string
  'standard-designator': string
  year: string
  unstructured: string
  edition: string
  'journal-title': string
  'issn-type': string
}

interface Clinicaltrialnumber {
  'clinical-trial-number': string
  registry: string
  type: string
}

interface Chair {
  ORCID: string
  suffix: string
  given: string
  family: string
  affiliation: Affiliation[]
  name: string
  'authenticated-orcid': boolean
  prefix: string
  sequence: string
}

interface Affiliation {
  name: string
}

interface Contentdomain {
  domain: string[]
  'crossmark-restriction': boolean
}

interface Funder {
  name: string
  DOI: string
  'doi-asserted-by': string
  award: string[]
}

interface License {
  URL: string
  start: Indexed
  'delay-in-days': number
  'content-version': string
}

interface Isbntype {
  type: string
  value: string[]
}

interface Standardsbody {
  name: string
  acronym: string[]
}

interface Updateto {
  label: string
  DOI: string
  type: string
  updated: Indexed
}

interface Posted {
  'date-parts': number[][]
}

interface Indexed {
  'date-parts': number[][]
  'date-time': string
  timestamp: number
}

interface Institution {
  name: string
  place: string[]
  department: string[]
  acronym: string[]
}

interface Query {
  'start-index': number
  'search-terms': string
}
