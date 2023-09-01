export type ThemeTypings = EmptyThemeTypings

export interface EmptyThemeTypings {
  borders: string
  colors: string
  breakpoints: string
  colorSchemes: string
  fonts: string
  fontSizes: string
  fontWeights: string
  layerStyles: string
  letterSpacings: string
  lineHeights: string
  radii: string
  shadows: string
  sizes: string
  space: string
  textStyles: string
  zIndices: string
  components: {
    [componentName: string]: {
      sizes: string
      variants: string
    }
  }
}

// Blatantly stolen from chakra-ui
export type ResponsiveArray<T> = Array<T | null>

export type ResponsiveObject<T> = Partial<Record<ThemeTypings['breakpoints'] | string, T>>

export type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>

export type Length = string | 0 | number

export type Union<T> = T | (string & Record<string, never>)

export type Token<CSSType, ThemeKey = unknown> = ThemeKey extends keyof ThemeTypings
  ? ResponsiveValue<Union<CSSType | ThemeTypings[ThemeKey]>>
  : ResponsiveValue<CSSType>

export interface Publication {
  _href: string
  abstract: Abstract
  accessStatus: number
  authors: Author[]
  authorsString: string
  authorsStringShort: string
  categoryIds: any[]
  citations: string[]
  citationsRaw: string
  copyrightHolder: Abstract
  copyrightYear?: any
  coverImage: CoverImage
  coverage: Abstract
  datePublished?: any
  disciplines: Disciplines
  doiSuffix?: any
  fullTitle: Abstract
  funding?: Funding[]
  galleys: Galley[]
  hideAuthor?: boolean
  id: number
  issueId: number
  keywords: Keywords
  languages: Disciplines
  lastModified: string
  licenseUrl?: string
  locale: string
  pages?: any
  prefix: Abstract
  primaryContactId: number
  'pub-id::doi'?: string
  'pub-id::publisher-id'?: string
  rights: Abstract
  sectionId: number
  seq: number
  source: Abstract
  status: number
  subjects: Disciplines
  submissionId: number
  subtitle: Abstract
  supportingAgencies: Disciplines
  title: Abstract
  type: Abstract
  urlPath?: any
  urlPublished?: string
  version: number
}

interface Keywords {
  en_US: string[]
}

interface Galley {
  doiSuffix?: any
  file: File
  id: number
  isApproved: boolean
  label: string
  locale: string
  'pub-id::doi'?: any
  'pub-id::publisher-id'?: any
  publicationId: number
  seq: number
  submissionFileId: number
  urlPublished: string
  urlRemote: string
}

interface File {
  _href: string
  assocId: number
  assocType: number
  caption?: any
  copyrightOwner?: any
  createdAt: string
  creator: Abstract
  credit?: any
  dateCreated?: string
  dependentFiles: any[]
  description: Abstract
  documentType: string
  doiSuffix?: any
  fileId: number
  fileStage: number
  genreId: number
  id: number
  language?: string
  locale: string
  mimetype: string
  name: Abstract
  path: string
  'pub-id::doi'?: any
  publisher: Abstract
  revisions: Revision[]
  source: Abstract
  sourceSubmissionFileId?: any
  sponsor: Abstract
  subject: Abstract
  submissionId: number
  terms?: any
  updatedAt: string
  uploaderUserId: number
  url: string
  viewable?: any
}

interface Revision {
  documentType: string
  fileId: number
  mimetype: string
  path: string
  url: string
}

interface Funding {
  funderName: string
  funderIdentification: string
  funderAwards: string[]
}

interface Disciplines {
  en_US: any[]
}

interface CoverImage {
  en_US: EnUS
}

interface EnUS {
  dateUploaded: string
  uploadName: string
  altText: string
}

interface Author {
  affiliation: Abstract
  email: string
  familyName: Abstract
  givenName: Abstract
  id: number
  includeInBrowse: boolean
  orcid: string
  orcidAccessDenied?: any
  orcidAccessExpiresOn?: string
  orcidAccessScope?: string
  orcidAccessToken?: string
  orcidEmailToken?: string
  orcidRefreshToken?: string
  orcidSandbox?: any
  orcidWorkPutCode?: any
  preferredPublicName: Abstract
  publicationId: number
  seq: number
  submissionLocale: string
  userGroupId: number
}

interface Abstract {
  en_US: string
}
