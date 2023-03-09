import * as Primitive from './xml-primitives.js'
import type { Literal as UnistLiteral, Node as UnistNode } from 'unist'
import type { RequiredMap } from './rejour.js'
import type { ValuesType } from 'utility-types'
// Source files:
// http://localhost:3001/jats.xsd

export type SimpleTextContentMap = {
  text?: Text

  bold?: Bold[]

  fixedCase?: FixedCase[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}
export type SimpleTextContent = RequiredMap<SimpleTextContentMap>
export interface Text extends UnistLiteral {
  type: 'text'
  value: string
}
export interface AbbrevJournaltitle extends UnistNode {
  type: 'element'
  name: 'abbrevJournaltitle'
  attributes: {
    abbrevType?: string
    id?: string
    specificUse?: string
  }
  children: []
}

export interface Abbrev extends UnistNode {
  type: 'element'
  name: 'abbrev'
  attributes: {
    alt?: string
    hreflang?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AbbrevChildrenMap>[]
}

export interface AbbrevChildrenMap {
  text?: Text

  def?: Def[]
}

export interface Abstract extends UnistNode {
  type: 'element'
  name: 'abstract'
  attributes: {
    abstractType?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AbstractChildrenMap>[]
}

export interface AbstractChildrenMap {
  label?: Label

  objectId?: ObjectId[]

  p?: P[]

  sec?: Sec[]

  title?: Title
}

export interface AccessDate extends UnistNode {
  type: 'element'
  name: 'accessDate'
  attributes: {
    calendar?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }

  children: RequiredMap<AccessDateChildrenMap>[]
}

export interface AccessDateChildrenMap {
  text?: Text
}

export interface Ack extends UnistNode {
  type: 'element'
  name: 'ack'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AckChildrenMap>[]
}

export interface AckChildrenMap {
  text?: Text

  abstract?: Abstract[]

  kwdGroup?: KwdGroup[]

  label?: Label

  objectId?: ObjectId[]

  p?: P[]

  refList?: RefList[]

  sec?: Sec[]
  subjGroup?: SubjGroup[]

  title?: Title
}

export interface Address extends UnistNode {
  type: 'element'
  name: 'address'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AddressChildrenMap>[]
}

export interface AddressChildrenMap {
  text?: Text

  addrLine?: AddrLine[]

  city?: City[]

  country?: Country[]

  email?: Email[]

  extLink?: ExtLink[]

  fax?: Fax[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  phone?: Phone[]

  postalCode?: PostalCode[]

  state?: State[]

  uri?: Uri[]
}

export interface AddrLine extends UnistNode {
  type: 'element'
  name: 'addrLine'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AddrLineChildrenMap>[]
}

export interface AddrLineChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  city?: City[]

  country?: Country[]

  fax?: Fax[]

  fixedCase?: FixedCase[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  phone?: Phone[]

  postalCode?: PostalCode[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  state?: State[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface AffAlternatives extends UnistNode {
  type: 'element'
  name: 'affAlternatives'
  attributes: {
    id?: string
  }

  children: RequiredMap<AffAlternativesChildrenMap>[]
}

export interface AffAlternativesChildrenMap {
  aff: Aff[]
}

export interface Aff extends UnistNode {
  type: 'element'
  name: 'aff'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<AffChildrenMap>[]
}

export interface AffChildrenMap {
  text?: Text

  addrLine?: AddrLine[]

  bold?: Bold[]

  break?: Break[]

  city?: City[]

  country?: Country[]

  email?: Email[]

  extLink?: ExtLink[]

  fax?: Fax[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  italic?: Italic[]

  label?: Label[]

  monospace?: Monospace[]

  overline?: Overline[]

  phone?: Phone[]

  postalCode?: PostalCode[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  state?: State[]

  strike?: Strike[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface Alternatives extends UnistNode {
  type: 'element'
  name: 'alternatives'
  attributes: {
    id?: string
  }

  children: RequiredMap<AlternativesChildrenMap>[]
}

export interface AlternativesChildrenMap {
  array: Array[]

  chemStruct: ChemStruct[]

  code: Code[]

  graphic: Graphic[]

  inlineGraphic: InlineGraphic[]

  inlineMedia: InlineMedia[]

  inlineSupplementarymaterial: InlineSupplementarymaterial[]

  media: Media[]

  objectId?: ObjectId[]

  preformat: Preformat[]

  privateChar: PrivateChar[]

  supplementaryMaterial: SupplementaryMaterial[]

  table: Table[]

  texMath: TexMath[]

  textualForm: TextualForm[]
}

export interface AltText extends UnistNode {
  type: 'element'
  name: 'altText'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AltTextChildrenMap>[]
}

export interface AltTextChildrenMap {
  text?: Text
}

export interface AltTitle extends UnistNode {
  type: 'element'
  name: 'altTitle'
  attributes: {
    altTitletype?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AltTitleChildrenMap>[]
}

export interface AltTitleChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  break?: Break[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface Annotation extends UnistNode {
  type: 'element'
  name: 'annotation'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AnnotationChildrenMap>[]
}

export interface AnnotationChildrenMap {
  text?: Text

  p: P[]
}

export interface Anonymous extends UnistNode {
  type: 'element'
  name: 'anonymous'
  attributes: {
    id?: string
    specificUse?: string
  }
  children: []
}

export interface AnswerSet extends UnistNode {
  type: 'element'
  name: 'answerSet'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AnswerSetChildrenMap>[]
}

export interface AnswerSetChildrenMap {
  text?: Text

  altTitle?: AltTitle[]

  answer: Answer[]

  explanation: Explanation[]

  label?: Label

  objectId?: ObjectId[]

  p: P[]

  subtitle?: Subtitle[]

  title?: Title
}

export interface Answer extends UnistNode {
  type: 'element'
  name: 'answer'
  attributes: {
    id?: string
    pointerToquestion: string
    specificUse?: string
  }

  children: RequiredMap<AnswerChildrenMap>[]
}

export interface AnswerChildrenMap {
  text?: Text

  address: Address[]

  altTitle?: AltTitle[]

  alternatives: Alternatives[]

  answer: Answer[]

  answerSet: AnswerSet[]

  array: Array[]

  blockAlternatives: BlockAlternatives[]

  boxedText: BoxedText[]

  chemStructwrap: ChemStructwrap[]

  code: Code[]

  defList: DefList[]

  dispFormula: DispFormula[]

  dispFormulagroup: DispFormulagroup[]

  dispQuote: DispQuote[]

  explanation?: Explanation[]

  fig: Fig[]

  figGroup: FigGroup[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  graphic: Graphic[]

  label?: Label

  list: List[]

  media: Media[]

  objectId?: ObjectId[]

  p: P[]

  preformat: Preformat[]

  question: Question[]

  questionWrap: QuestionWrap[]

  questionWrapgroup: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle: RelatedArticle[]

  relatedObject: RelatedObject[]

  sec: Sec[]

  speech: Speech[]

  statement: Statement[]

  subtitle?: Subtitle[]

  supplementaryMaterial: SupplementaryMaterial[]

  tableWrap: TableWrap[]

  tableWrapgroup: TableWrapgroup[]

  texMath: TexMath[]

  title?: Title

  verseGroup: VerseGroup[]
}

export interface AppGroup extends UnistNode {
  type: 'element'
  name: 'appGroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AppGroupChildrenMap>[]
}

export interface AppGroupChildrenMap {
  text?: Text

  abstract?: Abstract[]

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  app?: App[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  graphic?: Graphic[]

  kwdGroup?: KwdGroup[]

  label?: Label

  list?: List[]

  media?: Media[]

  objectId?: ObjectId[]

  p?: P[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  speech?: Speech[]

  statement?: Statement[]
  subjGroup?: SubjGroup[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  title?: Title

  verseGroup?: VerseGroup[]
}

export interface App extends UnistNode {
  type: 'element'
  name: 'app'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AppChildrenMap>[]
}

export interface AppChildrenMap {
  text?: Text

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  graphic?: Graphic[]

  label: Label

  list?: List[]

  media?: Media[]

  p?: P[]

  permissions?: Permissions

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  sec?: Sec[]

  secMeta?: SecMeta

  speech?: Speech[]

  statement?: Statement[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  title: Title[]

  verseGroup?: VerseGroup[]
}

export interface Array extends UnistNode {
  type: 'element'
  name: 'array'
  attributes: {
    id?: string
    specificUse?: string
    orientation?: ArrayTypeOrientation
  }

  children: RequiredMap<ArrayChildrenMap>[]
}

export interface ArrayChildrenMap {
  text?: Text
  altText?: AltText[]

  alternatives?: Alternatives[]

  attrib?: Attrib[]

  email?: Email[]

  extLink?: ExtLink[]

  graphic?: Graphic[]

  longDesc?: LongDesc[]

  media?: Media[]

  permissions?: Permissions[]
  tbody: Tbody

  uri?: Uri[]
}

type ArrayTypeOrientation = 'landscape' | 'portrait'

export interface ArticleCategories extends UnistNode {
  type: 'element'
  name: 'articleCategories'
  attributes: {
    id?: string
  }

  children: RequiredMap<ArticleCategoriesChildrenMap>[]
}

export interface ArticleCategoriesChildrenMap {
  seriesText?: SeriesText[]

  seriesTitle?: SeriesTitle[]
  subjGroup?: SubjGroup[]
}

export interface ArticleId extends UnistNode {
  type: 'element'
  name: 'articleId'
  attributes: {
    assigningAuthority?: string
    id?: string
    specificUse?: string
    pubIdType?: ArticleIdTypePubIdtype
  }

  children: RequiredMap<ArticleIdChildrenMap>[]
}

export interface ArticleIdChildrenMap {
  text?: Text
}

type ArticleIdTypePubIdtype =
  | 'accession'
  | 'archive'
  | 'ark'
  | 'art-access-id'
  | 'arxiv'
  | 'coden'
  | 'custom'
  | 'doaj'
  | 'doi'
  | 'handle'
  | 'index'
  | 'isbn'
  | 'manuscript'
  | 'medline'
  | 'mr'
  | 'other'
  | 'pii'
  | 'pmcid'
  | 'pmid'
  | 'publisher-id'
  | 'sici'
  | 'std-designation'
  | 'zbl'

export interface ArticleMeta extends UnistNode {
  type: 'element'
  name: 'articleMeta'
  attributes: {
    id?: string
  }

  children: RequiredMap<ArticleMetaChildrenMap>[]
}

export interface ArticleMetaChildrenMap {
  abstract?: Abstract[]

  aff?: Aff[]

  affAlternatives?: AffAlternatives[]

  articleCategories?: ArticleCategories

  articleId?: ArticleId[]

  articleVersion?: ArticleVersion

  articleVersionalternatives?: ArticleVersionalternatives

  authorNotes?: AuthorNotes

  conference?: Conference[]

  contribGroup?: ContribGroup[]

  counts?: Counts

  customMetagroup?: CustomMetagroup

  elocationId?: ElocationId

  email?: Email[]

  extLink?: ExtLink[]

  fpage?: Fpage

  fundingGroup?: FundingGroup[]

  history?: History

  isbn?: Isbn[]

  issue?: Issue[]

  issueId?: IssueId[]

  issuePart?: IssuePart

  issueSponsor?: IssueSponsor[]

  issueTitle?: IssueTitle[]

  issueTitlegroup?: IssueTitlegroup[]

  kwdGroup?: KwdGroup[]

  lpage?: Lpage

  pageRange?: PageRange

  permissions?: Permissions

  product?: Product[]

  pubDate: PubDate[]

  pubDatenotavailable?: PubDatenotavailable

  pubHistory?: PubHistory

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  selfUri?: SelfUri[]

  supplement?: Supplement

  supplementaryMaterial?: SupplementaryMaterial[]

  supportGroup?: SupportGroup[]

  titleGroup: TitleGroup

  transAbstract?: TransAbstract[]

  uri?: Uri[]

  volume?: Volume[]

  volumeId?: VolumeId[]

  volumeIssuegroup?: VolumeIssuegroup[]

  volumeSeries?: VolumeSeries
}

export interface ArticleTitle extends UnistNode {
  type: 'element'
  name: 'articleTitle'
  attributes: {
    id?: string
  }

  children: RequiredMap<ArticleTitleChildrenMap>[]
}

export interface ArticleTitleChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  break?: Break[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface Article extends UnistNode {
  type: 'element'
  name: 'article'
  attributes: {
    articleType?: string
    id?: string
    specificUse?: string
    dtdVersion?: ArticleTypeDtdVersion
  }

  children: RequiredMap<ArticleChildrenMap>[]
}
export interface ArticleChildrenMap {
  back?: Back

  body?: Body

  floatsGroup?: FloatsGroup

  front: Front

  processingMeta?: ProcessingMeta

  response?: Response[]

  subArticle?: SubArticle[]
}

type ArticleTypeDtdVersion =
  | '0.4'
  | '1.0'
  | '1.1'
  | '1.1d1'
  | '1.1d2'
  | '1.1d3'
  | '1.2'
  | '1.2d1'
  | '1.2d2'
  | '1.3'
  | '1.3d1'
  | '1.3d2'
  | '3.0'

export interface ArticleVersionalternatives extends UnistNode {
  type: 'element'
  name: 'articleVersionalternatives'
  attributes: {
    id?: string
  }

  children: RequiredMap<ArticleVersionalternativesChildrenMap>[]
}

export interface ArticleVersionalternativesChildrenMap {
  articleVersion: ArticleVersion[]
}

export interface ArticleVersion extends UnistNode {
  type: 'element'
  name: 'articleVersion'
  attributes: {
    articleVersiontype?: string
    assigningAuthority?: string
    designator?: string
    hreflang?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<ArticleVersionChildrenMap>[]
}

export interface ArticleVersionChildrenMap {
  text?: Text
}

export interface Attrib extends UnistNode {
  type: 'element'
  name: 'attrib'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AttribChildrenMap>[]
}

export interface AttribChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface AuthorComment extends UnistNode {
  type: 'element'
  name: 'authorComment'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<AuthorCommentChildrenMap>[]
}

export interface AuthorCommentChildrenMap {
  text?: Text

  p: P[]

  title?: Title
}

export interface AuthorNotes extends UnistNode {
  type: 'element'
  name: 'authorNotes'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<AuthorNotesChildrenMap>[]
}

export interface AuthorNotesChildrenMap {
  corresp: Corresp[]

  fn: Fn[]

  label?: Label

  p: P[]

  title?: Title
}

export interface AwardDesc extends UnistNode {
  type: 'element'
  name: 'awardDesc'
  attributes: {
    hreflang?: string
    id?: string
  }
  children: []
}

export interface AwardGroup extends UnistNode {
  type: 'element'
  name: 'awardGroup'
  attributes: {
    awardType?: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<AwardGroupChildrenMap>[]
}

export interface AwardGroupChildrenMap {
  awardDesc?: AwardDesc

  awardId?: AwardId[]

  awardName?: AwardName

  fundingSource?: FundingSource[]

  principalAwardrecipient?: PrincipalAwardrecipient[]

  principalInvestigator?: PrincipalInvestigator[]

  supportSource?: SupportSource[]
}

export interface AwardId extends UnistNode {
  type: 'element'
  name: 'awardId'
  attributes: {
    assigningAuthority?: string
    awardIdtype?: string
    awardType?: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<AwardIdChildrenMap>[]
}

export interface AwardIdChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface AwardName extends UnistNode {
  type: 'element'
  name: 'awardName'
  attributes: {
    hreflang?: string
    id?: string
  }
  children: []
}

export interface Back extends UnistNode {
  type: 'element'
  name: 'back'
  attributes: {
    id?: string
  }

  children: RequiredMap<BackChildrenMap>[]
}

export interface BackChildrenMap {
  ack?: Ack[]

  appGroup?: AppGroup[]

  bio?: Bio[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  label?: Label

  notes?: Notes[]

  refList?: RefList[]

  sec?: Sec[]

  title?: Title[]
}

export interface Bio extends UnistNode {
  type: 'element'
  name: 'bio'
  attributes: {
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<BioChildrenMap>[]
}

export interface BioChildrenMap {
  text?: Text

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  graphic?: Graphic[]

  label?: Label

  list?: List[]

  media?: Media[]

  p?: P[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  sec?: Sec[]

  secMeta?: SecMeta

  speech?: Speech[]

  statement?: Statement[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  title?: Title

  verseGroup?: VerseGroup[]
}

export interface BlockAlternatives extends UnistNode {
  type: 'element'
  name: 'blockAlternatives'
  attributes: {
    id?: string
  }

  children: RequiredMap<BlockAlternativesChildrenMap>[]
}

export interface BlockAlternativesChildrenMap {
  boxedText: BoxedText[]

  fig: Fig[]

  figGroup: FigGroup[]

  objectId?: ObjectId[]

  tableWrap: TableWrap[]

  tableWrapgroup: TableWrapgroup[]
}

export interface Body extends UnistNode {
  type: 'element'
  name: 'body'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<BodyChildrenMap>[]
}

export interface BodyChildrenMap {
  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  graphic?: Graphic[]

  list?: List[]

  media?: Media[]

  p?: P[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  sec?: Sec[]

  sigBlock?: SigBlock

  speech?: Speech[]

  statement?: Statement[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  verseGroup?: VerseGroup[]
}

export interface Bold extends UnistNode {
  type: 'element'
  name: 'bold'
  attributes: {
    id?: string

    toggle?: BoldTypeToggle
    specificUse?: string
  }

  children: RequiredMap<BoldChildrenMap>[]
}

export interface BoldChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type BoldTypeToggle = 'no' | 'yes'

export interface BoxedText extends UnistNode {
  type: 'element'
  name: 'boxedText'
  attributes: {
    id?: string
    specificUse?: string
    orientation?: BoxedTextTypeOrientation
    position?: BoxedTextTypePosition
  }

  children: RequiredMap<BoxedTextChildrenMap>[]
}

export interface BoxedTextChildrenMap {
  text?: Text
  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  attrib?: Attrib[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  caption?: Caption

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  graphic?: Graphic[]

  label?: Label

  list?: List[]

  media?: Media[]

  objectId?: ObjectId[]

  p?: P[]

  permissions?: Permissions[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  sec?: Sec[]

  secMeta?: SecMeta

  speech?: Speech[]

  statement?: Statement[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  verseGroup?: VerseGroup[]
}

type BoxedTextTypeOrientation = 'landscape' | 'portrait'

type BoxedTextTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface Break extends UnistNode {
  type: 'element'
  name: 'break'
  attributes: {
    id?: string
  }
  children: []
}

export interface Caption extends UnistNode {
  type: 'element'
  name: 'caption'
  attributes: {
    id?: string
    specificUse?: string
    style?: string
  }

  children: RequiredMap<CaptionChildrenMap>[]
}

export interface CaptionChildrenMap {
  text?: Text

  p?: P[]

  title?: Title
}

export interface ChapterTitle extends UnistNode {
  type: 'element'
  name: 'chapterTitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ChapterTitleChildrenMap>[]
}

export interface ChapterTitleChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface ChemStruct extends UnistNode {
  type: 'element'
  name: 'chemStruct'
  attributes: {
    hreflang?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ChemStructChildrenMap>[]
}

export interface ChemStructChildrenMap {
  text?: Text

  altText?: AltText[]

  alternatives?: Alternatives[]

  array?: Array[]

  bold?: Bold[]

  break?: Break[]

  code?: Code[]

  defList?: DefList[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  graphic?: Graphic[]

  italic?: Italic[]

  label?: Label[]

  list?: List[]

  longDesc?: LongDesc[]

  media?: Media[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  preformat?: Preformat[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface ChemStructwrap extends UnistNode {
  type: 'element'
  name: 'chemStructwrap'
  attributes: {
    id?: string
    specificUse?: string
    orientation?: ChemStructwrapTypeOrientation
    position?: ChemStructwrapTypePosition
  }

  children: RequiredMap<ChemStructwrapChildrenMap>[]
}

export interface ChemStructwrapChildrenMap {
  text?: Text
  abstract?: Abstract[]

  altText?: AltText[]

  alternatives: Alternatives[]

  attrib?: Attrib[]

  caption?: Caption

  chemStruct: ChemStruct[]

  code: Code[]

  email?: Email[]

  extLink?: ExtLink[]

  graphic: Graphic[]

  kwdGroup?: KwdGroup[]

  label?: Label

  longDesc?: LongDesc[]

  media: Media[]

  objectId?: ObjectId[]

  permissions?: Permissions[]

  preformat: Preformat[]
  subjGroup?: SubjGroup[]

  textualForm: TextualForm[]

  uri?: Uri[]
}

type ChemStructwrapTypeOrientation = 'landscape' | 'portrait'

type ChemStructwrapTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface CitationAlternatives extends UnistNode {
  type: 'element'
  name: 'citationAlternatives'
  attributes: {
    id?: string
  }

  children: RequiredMap<CitationAlternativesChildrenMap>[]
}

export interface CitationAlternativesChildrenMap {
  elementCitation: ElementCitation[]

  mixedCitation: MixedCitation[]

  nlmCitation: NlmCitation[]

  objectId?: ObjectId[]
}

export interface City extends UnistNode {
  type: 'element'
  name: 'city'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<CityChildrenMap>[]
}

export interface CityChildrenMap {
  text?: Text
}

export interface Code extends UnistNode {
  type: 'element'
  name: 'code'
  attributes: {
    codeType?: string
    codeVersion?: string
    platforms?: string
    specificUse?: string
    id?: string
    language?: string
    languageVersion?: string
    executable?: CodeTypeExecutable
    orientation?: CodeTypeOrientation

    position?: CodeTypePosition
  }

  children: RequiredMap<CodeChildrenMap>[]
}

export interface CodeChildrenMap {
  abbrev?: Abbrev[]

  bold?: Bold[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type CodeTypeExecutable = 'no' | 'yes'

type CodeTypeOrientation = 'landscape' | 'portrait'

type CodeTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface Colgroup extends UnistNode {
  type: 'element'
  name: 'colgroup'
  attributes: {
    align?: ColgroupTypeAlign
    char?: string
    charoff?: string
    id?: string
    span?: string
    style?: string
    width?: string
    valign?: ColgroupTypeValign
  }

  children: RequiredMap<ColgroupChildrenMap>[]
}

export interface ColgroupChildrenMap {
  text?: Text
  col?: Col[]
}

type ColgroupTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

type ColgroupTypeValign = 'UnistNodeline' | 'bottom' | 'middle' | 'top'

export interface CollabAlternatives extends UnistNode {
  type: 'element'
  name: 'collabAlternatives'
  attributes: {
    id?: string
  }

  children: RequiredMap<CollabAlternativesChildrenMap>[]
}

export interface CollabAlternativesChildrenMap {
  collab: Collab[]
}

export interface Collab extends UnistNode {
  type: 'element'
  name: 'collab'
  attributes: {
    collabType?: string
    hreflang?: string
    id?: string
    specificUse?: string
    symbol?: string
  }

  children: RequiredMap<CollabChildrenMap>[]
}

export interface CollabChildrenMap {
  abbrev?: Abbrev[]

  addrLine?: AddrLine[]

  address?: Address[]

  aff?: Aff[]

  affAlternatives?: AffAlternatives[]

  alternatives?: Alternatives[]

  authorComment?: AuthorComment[]

  bio?: Bio[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  city?: City[]

  contribGroup?: ContribGroup[]

  country?: Country[]

  email?: Email[]

  extLink?: ExtLink[]

  fax?: Fax[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  onBehalfof?: OnBehalfof[]

  overline?: Overline[]

  phone?: Phone[]

  postalCode?: PostalCode[]

  privateChar?: PrivateChar[]

  role?: Role[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  state?: State[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface Col extends UnistNode {
  type: 'element'
  name: 'col'
  attributes: {
    align?: ColTypeAlign
    char?: string
    charoff?: string
    id?: string
    span?: string
    style?: string
    width?: string
    valign?: ColTypeValign
  }

  children: RequiredMap<ColChildrenMap>[]
}

export interface ColChildrenMap {
  text?: Text
}

type ColTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

type ColTypeValign = 'UnistNodeline' | 'bottom' | 'middle' | 'top'

export interface Comment extends UnistNode {
  type: 'element'
  name: 'comment'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<CommentChildrenMap>[]
}

export interface CommentChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface CompoundKwdpart extends UnistNode {
  type: 'element'
  name: 'compoundKwdpart'
  attributes: {
    id?: string
  }

  children: RequiredMap<CompoundKwdpartChildrenMap>[]
}

export interface CompoundKwdpartChildrenMap {
  text?: Text

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  underline?: Underline[]

  xref?: Xref[]
}

export interface CompoundKwd extends UnistNode {
  type: 'element'
  name: 'compoundKwd'
  attributes: {
    assigningAuthority?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<CompoundKwdChildrenMap>[]
}

export interface CompoundKwdChildrenMap {
  text?: Text

  compoundKwdpart: CompoundKwdpart[]
}

export interface CompoundSubjectpart extends UnistNode {
  type: 'element'
  name: 'compoundSubjectpart'
  attributes: {
    id?: string
  }

  children: RequiredMap<CompoundSubjectpartChildrenMap>[]
}

export interface CompoundSubjectpartChildrenMap {
  text?: Text

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface CompoundSubject extends UnistNode {
  type: 'element'
  name: 'compoundSubject'
  attributes: {
    assigningAuthority?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<CompoundSubjectChildrenMap>[]
}

export interface CompoundSubjectChildrenMap {
  text?: Text

  compoundSubjectpart: CompoundSubjectpart[]
}

export interface ConfAcronym extends UnistNode {
  type: 'element'
  name: 'confAcronym'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ConfAcronymChildrenMap>[]
}

export interface ConfAcronymChildrenMap {
  text?: Text
}

export interface ConfDate extends UnistNode {
  type: 'element'
  name: 'confDate'
  attributes: {
    calendar?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }

  children: RequiredMap<ConfDateChildrenMap>[]
}

export interface ConfDateChildrenMap {
  text?: Text
}

export interface Conference extends UnistNode {
  type: 'element'
  name: 'conference'
  attributes: {
    hreflang?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ConferenceChildrenMap>[]
}

export interface ConferenceChildrenMap {
  text?: Text

  confAcronym: ConfAcronym[]

  confDate: ConfDate

  confLoc?: ConfLoc

  confName: ConfName[]

  confNum?: ConfNum

  confSponsor?: ConfSponsor[]

  confTheme?: ConfTheme
}

export interface ConfLoc extends UnistNode {
  type: 'element'
  name: 'confLoc'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ConfLocChildrenMap>[]
}

export interface ConfLocChildrenMap {
  text?: Text

  addrLine?: AddrLine[]

  city?: City[]

  country?: Country[]

  fax?: Fax[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  phone?: Phone[]

  postalCode?: PostalCode[]

  state?: State[]
}

export interface ConfName extends UnistNode {
  type: 'element'
  name: 'confName'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ConfNameChildrenMap>[]
}

export interface ConfNameChildrenMap {
  text?: Text
}

export interface ConfNum extends UnistNode {
  type: 'element'
  name: 'confNum'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ConfNumChildrenMap>[]
}

export interface ConfNumChildrenMap {
  text?: Text
}

export interface ConfSponsor extends UnistNode {
  type: 'element'
  name: 'confSponsor'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ConfSponsorChildrenMap>[]
}

export interface ConfSponsorChildrenMap {
  text?: Text

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]
}

export interface ConfTheme extends UnistNode {
  type: 'element'
  name: 'confTheme'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ConfThemeChildrenMap>[]
}

export interface ConfThemeChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface ContribGroup extends UnistNode {
  type: 'element'
  name: 'contribGroup'
  attributes: {
    id?: string
    specificUse?: string
    contentType?: string
  }

  children: RequiredMap<ContribGroupChildrenMap>[]
}

export interface ContribGroupChildrenMap {
  address?: Address[]

  aff?: Aff[]

  affAlternatives?: AffAlternatives[]

  authorComment?: AuthorComment[]

  bio?: Bio[]

  contrib: Contrib[]

  email?: Email[]

  extLink?: ExtLink[]

  onBehalfof?: OnBehalfof[]

  role?: Role[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface ContribId extends UnistNode {
  type: 'element'
  name: 'contribId'
  attributes: {
    assigningAuthority?: string
    contribIdtype?: string
    id?: string
    specificUse?: string
    authenticated?: ContribIdTypeAuthenticated
  }

  children: RequiredMap<ContribIdChildrenMap>[]
}

export interface ContribIdChildrenMap {
  text?: Text
}

type ContribIdTypeAuthenticated = 'false' | 'true'

export interface Contrib extends UnistNode {
  type: 'element'
  name: 'contrib'
  attributes: {
    contribType?: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string

    corresp?: ContribTypeCorresp
    deceased?: ContribTypeDeceased
    equalContrib?: ContribTypeEqualContrib
  }

  children: RequiredMap<ContribChildrenMap>[]
}

export interface ContribChildrenMap {
  address?: Address[]

  aff?: Aff[]

  affAlternatives?: AffAlternatives[]

  anonymous?: Anonymous[]

  authorComment?: AuthorComment[]

  bio?: Bio[]

  collab?: Collab[]

  collabAlternatives?: CollabAlternatives[]

  contribId?: ContribId[]

  degrees?: Degrees[]

  email?: Email[]

  extLink?: ExtLink[]

  name?: Name[]

  nameAlternatives?: NameAlternatives[]

  onBehalfof?: OnBehalfof[]

  role?: Role[]

  stringName?: StringName[]

  uri?: Uri[]

  xref?: Xref[]
}

type ContribTypeCorresp = 'no' | 'yes'

type ContribTypeDeceased = 'no' | 'yes'

type ContribTypeEqualContrib = 'no' | 'yes'

export interface ContributedResourcegroup extends UnistNode {
  type: 'element'
  name: 'contributedResourcegroup'
  attributes: {
    id?: string
    resourceType?: string
    specificUse?: string
  }

  children: RequiredMap<ContributedResourcegroupChildrenMap>[]
}

export interface ContributedResourcegroupChildrenMap {
  awardGroup?: AwardGroup[]

  resourceGroup?: ResourceGroup[]

  supportDescription?: SupportDescription[]
}

export interface CopyrightHolder extends UnistNode {
  type: 'element'
  name: 'copyrightHolder'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<CopyrightHolderChildrenMap>[]
}

export interface CopyrightHolderChildrenMap {
  text?: Text

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  sub?: Sub[]

  sup?: Sup[]
}

export interface CopyrightStatement extends UnistNode {
  type: 'element'
  name: 'copyrightStatement'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<CopyrightStatementChildrenMap>[]
}

export interface CopyrightStatementChildrenMap {
  text?: Text

  bold?: Bold[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]

  uri?: Uri[]
}

export interface CopyrightYear extends UnistNode {
  type: 'element'
  name: 'copyrightYear'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<CopyrightYearChildrenMap>[]
}

export interface CopyrightYearChildrenMap {
  text?: Text
}

export interface Corresp extends UnistNode {
  type: 'element'
  name: 'corresp'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<CorrespChildrenMap>[]
}

export interface CorrespChildrenMap {
  text?: Text

  addrLine?: AddrLine[]

  bold?: Bold[]

  city?: City[]

  country?: Country[]

  email?: Email[]

  extLink?: ExtLink[]

  fax?: Fax[]

  fixedCase?: FixedCase[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  italic?: Italic[]

  label?: Label[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  phone?: Phone[]

  postalCode?: PostalCode[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  state?: State[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]

  uri?: Uri[]
}

export interface Country extends UnistNode {
  type: 'element'
  name: 'country'
  attributes: {
    country?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<CountryChildrenMap>[]
}

export interface CountryChildrenMap {
  text?: Text
}

export interface Counts extends UnistNode {
  type: 'element'
  name: 'counts'
  attributes: {
    id?: string
  }

  children: RequiredMap<CountsChildrenMap>[]
}

export interface CountsChildrenMap {
  count?: Count[]

  equationCount?: EquationCount

  figCount?: FigCount

  pageCount?: PageCount

  refCount?: RefCount

  tableCount?: TableCount

  wordCount?: WordCount
}

export interface Count extends UnistNode {
  type: 'element'
  name: 'count'
  attributes: {
    count: string
    countType: string
    id?: string
  }
  children: []
}

export interface CustomMetagroup extends UnistNode {
  type: 'element'
  name: 'customMetagroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<CustomMetagroupChildrenMap>[]
}

export interface CustomMetagroupChildrenMap {
  text?: Text

  customMeta: CustomMeta[]
}

export interface CustomMeta extends UnistNode {
  type: 'element'
  name: 'customMeta'
  attributes: {
    assigningAuthority?: string
    hreflang?: string
    id?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<CustomMetaChildrenMap>[]
}

export interface CustomMetaChildrenMap {
  metaName: MetaName

  metaValue: MetaValue
}

export interface DataTitle extends UnistNode {
  type: 'element'
  name: 'dataTitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<DataTitleChildrenMap>[]
}

export interface DataTitleChildrenMap {
  text?: Text

  bold?: Bold[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]

  uri?: Uri[]
}

export interface DateIncitation extends UnistNode {
  type: 'element'
  name: 'dateIncitation'
  attributes: {
    calendar?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }

  children: RequiredMap<DateIncitationChildrenMap>[]
}

export interface DateIncitationChildrenMap {
  text?: Text

  day?: Day[]

  era?: Era[]

  month?: Month[]

  season?: Season[]

  year?: Year[]
}

export interface Date extends UnistNode {
  type: 'element'
  name: 'date'
  attributes: {
    calendar?: string
    dateType?: string
    id?: string
    iso8601Date?: string
    publicationFormat?: string
    specificUse?: string
  }

  children: RequiredMap<DateChildrenMap>[]
}

export interface DateChildrenMap {
  day?: Day

  era?: Era

  month?: Month

  season?: Season

  year: Year
}

export interface Day extends UnistNode {
  type: 'element'
  name: 'day'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<DayChildrenMap>[]
}

export interface DayChildrenMap {
  text?: Text
}

export interface DefHead extends UnistNode {
  type: 'element'
  name: 'defHead'
  attributes: {
    id?: string
  }

  children: RequiredMap<DefHeadChildrenMap>[]
}

export interface DefHeadChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface DefItem extends UnistNode {
  type: 'element'
  name: 'defItem'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<DefItemChildrenMap>[]
}

export interface DefItemChildrenMap {
  def?: Def[]

  term: Term
}

export interface DefList extends UnistNode {
  type: 'element'
  name: 'defList'
  attributes: {
    continuedFrom?: string
    id?: string
    listContent?: string
    listType?: string
    prefixWord?: string
    specificUse?: string
  }

  children: RequiredMap<DefListChildrenMap>[]
}

export interface DefListChildrenMap {
  defHead?: DefHead

  defItem?: DefItem[]

  defList?: DefList[]

  label?: Label

  termHead?: TermHead

  title?: Title
}

export interface Def extends UnistNode {
  type: 'element'
  name: 'def'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<DefChildrenMap>[]
}

export interface DefChildrenMap {
  p: P[]
}

export interface Degrees extends UnistNode {
  type: 'element'
  name: 'degrees'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<DegreesChildrenMap>[]
}

export interface DegreesChildrenMap {
  text?: Text
}

export interface DispFormulagroup extends UnistNode {
  type: 'element'
  name: 'dispFormulagroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<DispFormulagroupChildrenMap>[]
}

export interface DispFormulagroupChildrenMap {
  text?: Text

  abstract?: Abstract[]

  altText?: AltText[]

  caption?: Caption

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  email?: Email[]

  extLink?: ExtLink[]

  kwdGroup?: KwdGroup[]

  label?: Label

  longDesc?: LongDesc[]

  objectId?: ObjectId[]
  subjGroup?: SubjGroup[]

  uri?: Uri[]
}

export interface DispFormula extends UnistNode {
  type: 'element'
  name: 'dispFormula'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<DispFormulaChildrenMap>[]
}

export interface DispFormulaChildrenMap {
  text?: Text

  abstract?: Abstract[]

  altText?: AltText[]

  alternatives?: Alternatives[]

  array?: Array[]

  bold?: Bold[]

  break?: Break[]

  caption?: Caption[]

  chemStruct?: ChemStruct[]

  code?: Code[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  graphic?: Graphic[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  kwdGroup?: KwdGroup[]

  label?: Label[]

  longDesc?: LongDesc[]

  media?: Media[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  objectId?: ObjectId[]

  overline?: Overline[]

  preformat?: Preformat[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]
  subjGroup?: SubjGroup[]

  sup?: Sup[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]
}

export interface DispQuote extends UnistNode {
  type: 'element'
  name: 'dispQuote'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<DispQuoteChildrenMap>[]
}

export interface DispQuoteChildrenMap {
  text?: Text

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  attrib?: Attrib[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  graphic?: Graphic[]

  label?: Label

  list?: List[]

  media?: Media[]

  p?: P[]

  permissions?: Permissions[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  speech?: Speech[]

  statement?: Statement[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  title?: Title

  verseGroup?: VerseGroup[]
}

export interface Edition extends UnistNode {
  type: 'element'
  name: 'edition'
  attributes: {
    designator?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<EditionChildrenMap>[]
}

export interface EditionChildrenMap {
  text?: Text

  sub?: Sub[]

  sup?: Sup[]
}

export interface ElementCitation extends UnistNode {
  type: 'element'
  name: 'elementCitation'
  attributes: {
    hreflang?: string
    id?: string
    publicationFormat?: string
    publicationType?: string
    publisherType?: string
    specificUse?: string
    useType?: string
  }

  children: RequiredMap<ElementCitationChildrenMap>[]
}

export interface ElementCitationChildrenMap {
  abbrev: Abbrev[]

  alternatives: Alternatives[]

  annotation: Annotation[]

  articleTitle: ArticleTitle[]

  bold: Bold[]

  chapterTitle: ChapterTitle[]

  chemStruct: ChemStruct[]

  collab: Collab[]

  collabAlternatives: CollabAlternatives[]

  comment: Comment[]

  confAcronym: ConfAcronym[]

  confDate: ConfDate[]

  confLoc: ConfLoc[]

  confName: ConfName[]

  confSponsor: ConfSponsor[]

  dataTitle: DataTitle[]

  date: Date[]

  dateIncitation: DateIncitation[]

  day: Day[]

  edition: Edition[]

  elocationId: ElocationId[]

  email: Email[]

  etal: Etal[]

  extLink: ExtLink[]

  fixedCase: FixedCase[]

  fpage: Fpage[]

  gov: Gov[]

  indexTerm: IndexTerm[]

  indexTermrangeend: IndexTermrangeend[]

  inlineFormula: InlineFormula[]

  inlineGraphic: InlineGraphic[]

  inlineMedia: InlineMedia[]

  institution: Institution[]

  institutionWrap: InstitutionWrap[]

  isbn: Isbn[]

  issn: Issn[]

  issnL: IssnL[]

  issue: Issue[]

  issueId: IssueId[]

  issuePart: IssuePart[]

  issueTitle: IssueTitle[]

  italic: Italic[]

  label: Label[]

  lpage: Lpage[]

  milestoneEnd: MilestoneEnd[]

  milestoneStart: MilestoneStart[]

  monospace: Monospace[]

  month: Month[]

  name: Name[]

  nameAlternatives: NameAlternatives[]

  namedContent: NamedContent[]

  objectId: ObjectId[]

  overline: Overline[]

  pageRange: PageRange[]

  partTitle: PartTitle[]

  patent: Patent[]

  personGroup: PersonGroup[]

  privateChar: PrivateChar[]

  pubId: PubId[]

  publisherLoc: PublisherLoc[]

  publisherName: PublisherName[]

  role: Role[]

  roman: Roman[]

  ruby: Ruby[]

  sansSerif: SansSerif[]

  sc: Sc[]

  season: Season[]

  series: Series[]

  size: Size[]

  source: Source[]

  std: Std[]

  strike: Strike[]

  stringDate: StringDate[]

  stringName: StringName[]

  styledContent: StyledContent[]

  sub: Sub[]

  sup: Sup[]

  supplement: Supplement[]

  transSource: TransSource[]

  transTitle: TransTitle[]

  underline: Underline[]

  uri: Uri[]

  version: Version[]

  volume: Volume[]

  volumeId: VolumeId[]

  volumeSeries: VolumeSeries[]

  year: Year[]
}

export interface ElocationId extends UnistNode {
  type: 'element'
  name: 'elocationId'
  attributes: {
    id?: string
    seq?: string
    specificUse?: string
  }

  children: RequiredMap<ElocationIdChildrenMap>[]
}

export interface ElocationIdChildrenMap {
  text?: Text
}

export interface Email extends UnistNode {
  type: 'element'
  name: 'email'
  attributes: {
    hreflang?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<EmailChildrenMap>[]
}

export interface EmailChildrenMap {
  text?: Text
}

export interface EquationCount extends UnistNode {
  type: 'element'
  name: 'equationCount'
  attributes: {
    count: string
    id?: string
  }
  children: []
}

export interface Era extends UnistNode {
  type: 'element'
  name: 'era'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<EraChildrenMap>[]
}

export interface EraChildrenMap {
  text?: Text
}

export interface Etal extends UnistNode {
  type: 'element'
  name: 'etal'
  attributes: {
    id?: string
    specificUse?: string
  }
  children: []
}

export interface EventDesc extends UnistNode {
  type: 'element'
  name: 'eventDesc'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<EventDescChildrenMap>[]
}

export interface EventDescChildrenMap {
  articleId?: ArticleId[]

  articleVersion?: ArticleVersion[]

  articleVersionalternatives?: ArticleVersionalternatives[]

  date?: Date[]

  email?: Email[]

  extLink?: ExtLink[]

  isbn?: Isbn[]

  issn?: Issn[]

  issnL?: IssnL[]

  pubDate?: PubDate[]

  pubDatenotavailable?: PubDatenotavailable[]

  stringDate?: StringDate[]

  uri?: Uri[]
}

export interface Event extends UnistNode {
  type: 'element'
  name: 'event'
  attributes: {
    eventType?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<EventChildrenMap>[]
}

export interface EventChildrenMap {
  articleId?: ArticleId[]

  articleVersion?: ArticleVersion

  articleVersionalternatives?: ArticleVersionalternatives

  date?: Date[]

  eventDesc?: EventDesc

  isbn?: Isbn[]

  issn?: Issn[]

  issnL?: IssnL

  notes?: Notes[]

  permissions?: Permissions

  pubDate?: PubDate[]

  pubDatenotavailable?: PubDatenotavailable

  selfUri?: SelfUri[]
}

export interface Explanation extends UnistNode {
  type: 'element'
  name: 'explanation'
  attributes: {
    id?: string
    pointerToexplained: string
    specificUse?: string
  }

  children: RequiredMap<ExplanationChildrenMap>[]
}

export interface ExplanationChildrenMap {
  text?: Text

  address: Address[]

  altTitle?: AltTitle[]

  alternatives: Alternatives[]

  answer: Answer[]

  answerSet: AnswerSet[]

  array: Array[]

  blockAlternatives: BlockAlternatives[]

  boxedText: BoxedText[]

  chemStructwrap: ChemStructwrap[]

  code: Code[]

  defList: DefList[]

  dispFormula: DispFormula[]

  dispFormulagroup: DispFormulagroup[]

  dispQuote: DispQuote[]

  fig: Fig[]

  figGroup: FigGroup[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  graphic: Graphic[]

  label?: Label

  list: List[]

  media: Media[]

  objectId?: ObjectId[]

  p: P[]

  preformat: Preformat[]

  question: Question[]

  questionWrap: QuestionWrap[]

  questionWrapgroup: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle: RelatedArticle[]

  relatedObject: RelatedObject[]

  sec: Sec[]

  speech: Speech[]

  statement: Statement[]

  subtitle?: Subtitle[]

  supplementaryMaterial: SupplementaryMaterial[]

  tableWrap: TableWrap[]

  tableWrapgroup: TableWrapgroup[]

  texMath: TexMath[]

  title?: Title

  verseGroup: VerseGroup[]
}

export interface ExtendedBy extends UnistNode {
  type: 'element'
  name: 'extendedBy'
  attributes: {
    assigningAuthority?: string
    designator?: string
    hreflang?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: []
}

export interface ExtLink extends UnistNode {
  type: 'element'
  name: 'extLink'
  attributes: {
    assigningAuthority?: string
    extLinktype?: string
    hreflang?: string
    id?: string
    specificUse?: string
    'xlink:href': string
  }

  children: RequiredMap<ExtLinkChildrenMap>[]
}

export interface ExtLinkChildrenMap {
  text?: Text
  content: SimpleTextContent[]
}

export interface Fax extends UnistNode {
  type: 'element'
  name: 'fax'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<FaxChildrenMap>[]
}

export interface FaxChildrenMap {
  text?: Text
}

export interface FigCount extends UnistNode {
  type: 'element'
  name: 'figCount'
  attributes: {
    count: string
    id?: string
  }
  children: []
}

export interface FigGroup extends UnistNode {
  type: 'element'
  name: 'figGroup'
  attributes: {
    id?: string
    specificUse?: string
    orientation?: FigGroupTypeOrientation
    position?: FigGroupTypePosition
  }

  children: RequiredMap<FigGroupChildrenMap>[]
}

export interface FigGroupChildrenMap {
  text?: Text
  abstract?: Abstract[]

  altText?: AltText[]

  alternatives?: Alternatives[]

  blockAlternatives?: BlockAlternatives[]

  caption?: Caption[]

  email?: Email[]

  extLink?: ExtLink[]

  fig?: Fig[]

  graphic?: Graphic[]

  kwdGroup?: KwdGroup[]

  label?: Label[]

  longDesc?: LongDesc[]

  media?: Media[]

  objectId?: ObjectId[]
  subjGroup?: SubjGroup[]

  uri?: Uri[]

  xref?: Xref[]
}

type FigGroupTypeOrientation = 'landscape' | 'portrait'

type FigGroupTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface Fig extends UnistNode {
  type: 'element'
  name: 'fig'
  attributes: {
    figType?: string
    id?: string
    specificUse?: string
    position?: FigTypePosition
    orientation?: FigTypeOrientation
  }

  children: RequiredMap<FigChildrenMap>[]
}

export interface FigChildrenMap {
  abstract?: Abstract[]

  altText?: AltText[]

  alternatives?: Alternatives[]

  array?: Array[]

  attrib?: Attrib[]

  caption?: Caption[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  email?: Email[]

  extLink?: ExtLink[]

  graphic?: Graphic[]

  kwdGroup?: KwdGroup[]

  label?: Label[]

  list?: List[]

  longDesc?: LongDesc[]

  media?: Media[]

  objectId?: ObjectId[]

  p?: P[]

  permissions?: Permissions[]

  preformat?: Preformat[]

  speech?: Speech[]

  statement?: Statement[]
  subjGroup?: SubjGroup[]

  tableWrap?: TableWrap[]

  uri?: Uri[]

  verseGroup?: VerseGroup[]

  xref?: Xref[]
}

type FigTypeOrientation = 'landscape' | 'portrait'

type FigTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface FixedCase extends UnistNode {
  type: 'element'
  name: 'fixedCase'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<FixedCaseChildrenMap>[]
}

export interface FixedCaseChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface FloatsGroup extends UnistNode {
  type: 'element'
  name: 'floatsGroup'
  attributes: {
    id?: string
  }

  children: RequiredMap<FloatsGroupChildrenMap>[]
}

export interface FloatsGroupChildrenMap {
  alternatives?: Alternatives[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  graphic?: Graphic[]

  media?: Media[]

  preformat?: Preformat[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]
}

export interface FnGroup extends UnistNode {
  type: 'element'
  name: 'fnGroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<FnGroupChildrenMap>[]
}

export interface FnGroupChildrenMap {
  text?: Text

  fn: Fn[]

  label?: Label

  title?: Title
}

export interface Fn extends UnistNode {
  type: 'element'
  name: 'fn'
  attributes: {
    id?: string
    specificUse?: string
    symbol?: string
    fnType?: FnTypeFnType
  }

  children: RequiredMap<FnChildrenMap>[]
}

export interface FnChildrenMap {
  customType?: Text
  label?: Label

  p: P[]
}

type FnTypeFnType =
  | 'abbr'
  | 'coi-statement'
  | 'com'
  | 'con'
  | 'conflict'
  | 'corresp'
  | 'current-aff'
  | 'custom'
  | 'deceased'
  | 'edited-by'
  | 'equal'
  | 'financial-disclosure'
  | 'on-leave'
  | 'other'
  | 'participating-researchers'
  | 'present-address'
  | 'presented-at'
  | 'presented-by'
  | 'previously-at'
  | 'study-group-members'
  | 'supplementary-material'
  | 'supported-by'

export interface Fpage extends UnistNode {
  type: 'element'
  name: 'fpage'
  attributes: {
    id?: string
    seq?: string
    specificUse?: string
  }

  children: RequiredMap<FpageChildrenMap>[]
}

export interface FpageChildrenMap {
  text?: Text
}

export interface FrontStub extends UnistNode {
  type: 'element'
  name: 'frontStub'
  attributes: {
    id?: string
  }

  children: RequiredMap<FrontStubChildrenMap>[]
}

export interface FrontStubChildrenMap {
  abstract?: Abstract[]

  aff?: Aff[]

  affAlternatives?: AffAlternatives[]

  articleCategories?: ArticleCategories

  articleId?: ArticleId[]

  articleVersion?: ArticleVersion

  articleVersionalternatives?: ArticleVersionalternatives

  authorNotes?: AuthorNotes

  conference?: Conference[]

  contribGroup?: ContribGroup[]

  counts?: Counts

  customMetagroup?: CustomMetagroup

  elocationId?: ElocationId

  email?: Email[]

  extLink?: ExtLink[]

  fpage?: Fpage

  fundingGroup?: FundingGroup[]

  history?: History

  isbn?: Isbn[]

  issue?: Issue[]

  issueId?: IssueId[]

  issuePart?: IssuePart

  issueSponsor?: IssueSponsor[]

  issueTitle?: IssueTitle[]

  issueTitlegroup?: IssueTitlegroup[]

  kwdGroup?: KwdGroup[]

  lpage?: Lpage

  pageRange?: PageRange

  permissions?: Permissions

  product?: Product[]

  pubDate?: PubDate[]

  pubDatenotavailable?: PubDatenotavailable

  pubHistory?: PubHistory

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  selfUri?: SelfUri[]

  supplement?: Supplement

  supplementaryMaterial?: SupplementaryMaterial[]

  supportGroup?: SupportGroup[]

  titleGroup?: TitleGroup

  transAbstract?: TransAbstract[]

  uri?: Uri[]

  volume?: Volume[]

  volumeId?: VolumeId[]

  volumeIssuegroup?: VolumeIssuegroup[]

  volumeSeries?: VolumeSeries
}

export interface Front extends UnistNode {
  type: 'element'
  name: 'front'
  attributes: {
    id?: string
  }

  children: RequiredMap<FrontChildrenMap>[]
}

export interface FrontChildrenMap {
  articleMeta: ArticleMeta

  journalMeta: JournalMeta

  notes?: Notes
}

export interface FundingGroup extends UnistNode {
  type: 'element'
  name: 'fundingGroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<FundingGroupChildrenMap>[]
}

export interface FundingGroupChildrenMap {
  awardGroup?: AwardGroup[]

  fundingStatement?: FundingStatement[]

  openAccess?: OpenAccess[]
}

export interface FundingSource extends UnistNode {
  type: 'element'
  name: 'fundingSource'
  attributes: {
    country?: string
    hreflang?: string
    id?: string
    rid?: string
    sourceType?: string
    specificUse?: string
  }

  children: RequiredMap<FundingSourceChildrenMap>[]
}

export interface FundingSourceChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface FundingStatement extends UnistNode {
  type: 'element'
  name: 'fundingStatement'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<FundingStatementChildrenMap>[]
}

export interface FundingStatementChildrenMap {
  bold?: Bold[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]

  uri?: Uri[]
}

export interface GivenNames extends UnistNode {
  type: 'element'
  name: 'givenNames'
  attributes: {
    id?: string
    initials?: string
  }
  children: Text[]
}

export interface Glossary extends UnistNode {
  type: 'element'
  name: 'glossary'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<GlossaryChildrenMap>[]
}

export interface GlossaryChildrenMap {
  text?: Text

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  glossary?: Glossary[]

  graphic?: Graphic[]

  label?: Label

  list?: List[]

  media?: Media[]

  objectId?: ObjectId[]

  p?: P[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  speech?: Speech[]

  statement?: Statement[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  title?: Title

  verseGroup?: VerseGroup[]
}

export interface GlyphData extends UnistNode {
  type: 'element'
  name: 'glyphData'
  attributes: {
    fontchar?: string
    fontname?: string
    format?: string
    id?: string
    resolution?: string
    xSize?: string
    ySize?: string
  }
  children: []
}

export interface GlyphRef extends UnistNode {
  type: 'element'
  name: 'glyphRef'
  attributes: {
    glyphData?: string
    id?: string
  }
  children: []
}

export interface Gov extends UnistNode {
  type: 'element'
  name: 'gov'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<GovChildrenMap>[]
}

export interface GovChildrenMap {
  text?: Text

  content: SimpleTextContent[]
}

export interface Graphic extends UnistNode {
  type: 'element'
  name: 'graphic'
  attributes: {
    orientation?: GraphicTypeOrientation
    position?: GraphicTypePosition
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string
    specificUse?: string
    'xlink:href'?: string
  }

  children: RequiredMap<GraphicChildrenMap>[]
}

export interface GraphicChildrenMap {
  text?: Text
  abstract?: Abstract[]

  altText?: AltText[]

  attrib?: Attrib[]

  caption?: Caption[]

  email?: Email[]

  extLink?: ExtLink[]

  kwdGroup?: KwdGroup[]

  label?: Label[]

  longDesc?: LongDesc[]

  objectId?: ObjectId[]

  permissions?: Permissions[]
  subjGroup?: SubjGroup[]

  uri?: Uri[]

  xref?: Xref[]
}

type GraphicTypeOrientation = 'landscape' | 'portrait'

type GraphicTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface History extends UnistNode {
  type: 'element'
  name: 'history'
  attributes: {
    id?: string
  }

  children: RequiredMap<HistoryChildrenMap>[]
}

export interface HistoryChildrenMap {
  date: Date[]
}

export interface Hr extends UnistNode {
  type: 'element'
  name: 'hr'
  attributes: {
    id?: string
  }
  children: []
}

export interface IndexTermrangeend extends UnistNode {
  type: 'element'
  name: 'indexTermrangeend'
  attributes: {
    id?: string
    rid: string
  }
  children: []
}

export interface IndexTerm extends UnistNode {
  type: 'element'
  name: 'indexTerm'
  attributes: {
    id?: string
    indexType?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<IndexTermChildrenMap>[]
}

export interface IndexTermChildrenMap {
  text?: Text

  indexTerm: IndexTerm

  see?: See[]

  seeAlso?: SeeAlso[]

  term: Term
}

export interface InlineFormula extends UnistNode {
  type: 'element'
  name: 'inlineFormula'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<InlineFormulaChildrenMap>[]
}

export interface InlineFormulaChildrenMap {
  text?: Text

  altText?: AltText[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  longDesc?: LongDesc[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  texMath?: TexMath[]

  underline?: Underline[]
}

export interface InlineGraphic extends UnistNode {
  type: 'element'
  name: 'inlineGraphic'
  attributes: {
    UnistNodelineShift?: string
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string
    specificUse?: string
    'xlink:href'?: string
  }

  children: RequiredMap<InlineGraphicChildrenMap>[]
}

export interface InlineGraphicChildrenMap {
  text?: Text

  altText?: AltText[]

  longDesc?: LongDesc[]
}

export interface InlineMedia extends UnistNode {
  type: 'element'
  name: 'inlineMedia'
  attributes: {
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<InlineMediaChildrenMap>[]
}

export interface InlineMediaChildrenMap {
  text?: Text

  altText?: AltText[]

  bold?: Bold[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  italic?: Italic[]

  longDesc?: LongDesc[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]

  uri?: Uri[]
}

export interface InlineSupplementarymaterial extends UnistNode {
  type: 'element'
  name: 'inlineSupplementarymaterial'
  attributes: {
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string
    specificUse?: string
  }

  children: RequiredMap<InlineSupplementarymaterialChildrenMap>[]
}

export interface InlineSupplementarymaterialChildrenMap {
  text?: Text

  altText?: AltText[]

  bold?: Bold[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  italic?: Italic[]

  longDesc?: LongDesc[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]

  uri?: Uri[]
}

export interface InstitutionId extends UnistNode {
  type: 'element'
  name: 'institutionId'
  attributes: {
    assigningAuthority?: string
    id?: string
    institutionIdtype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }

  children: RequiredMap<InstitutionIdChildrenMap>[]
}

export interface InstitutionIdChildrenMap {
  text?: Text
}

export interface Institution extends UnistNode {
  type: 'element'
  name: 'institution'
  attributes: {
    hreflang?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<InstitutionChildrenMap>[]
}

export interface InstitutionChildrenMap {
  text?: Text

  sub?: Sub[]

  sup?: Sup[]
}

export interface InstitutionWrap extends UnistNode {
  type: 'element'
  name: 'institutionWrap'
  attributes: {
    id?: string
  }

  children: RequiredMap<InstitutionWrapChildrenMap>[]
}

export interface InstitutionWrapChildrenMap {
  institution?: Institution[]

  institutionId?: InstitutionId[]
}

export interface Isbn extends UnistNode {
  type: 'element'
  name: 'isbn'
  attributes: {
    assigningAuthority?: string
    id?: string
    publicationFormat?: string
    specificUse?: string
  }

  children: RequiredMap<IsbnChildrenMap>[]
}

export interface IsbnChildrenMap {
  text?: Text
}

export interface IssnL extends UnistNode {
  type: 'element'
  name: 'issnL'
  attributes: {
    assigningAuthority?: string
    id?: string
    specificUse?: string
  }
  children: []
}

export interface Issn extends UnistNode {
  type: 'element'
  name: 'issn'
  attributes: {
    assigningAuthority?: string
    id?: string
    pubType?: string
    publicationFormat?: string
    specificUse?: string
  }

  children: RequiredMap<IssnChildrenMap>[]
}

export interface IssnChildrenMap {
  text?: Text
}

export interface IssueId extends UnistNode {
  type: 'element'
  name: 'issueId'
  attributes: {
    assigningAuthority?: string
    hreflang?: string
    id?: string
    pubIdType?: string
    specificUse?: string
  }

  children: RequiredMap<IssueIdChildrenMap>[]
}

export interface IssueIdChildrenMap {
  text?: Text
}

export interface IssuePart extends UnistNode {
  type: 'element'
  name: 'issuePart'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<IssuePartChildrenMap>[]
}

export interface IssuePartChildrenMap {
  text?: Text
}

export interface IssueSponsor extends UnistNode {
  type: 'element'
  name: 'issueSponsor'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<IssueSponsorChildrenMap>[]
}

export interface IssueSponsorChildrenMap {
  text?: Text
}

export interface IssueSubtitle extends UnistNode {
  type: 'element'
  name: 'issueSubtitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<IssueSubtitleChildrenMap>[]
}

export interface IssueSubtitleChildrenMap {
  text?: Text
}

export interface IssueTitlegroup extends UnistNode {
  type: 'element'
  name: 'issueTitlegroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<IssueTitlegroupChildrenMap>[]
}

export interface IssueTitlegroupChildrenMap {
  text?: Text

  issueSubtitle?: IssueSubtitle[]

  issueTitle: IssueTitle

  transTitlegroup?: TransTitlegroup[]
}

export interface IssueTitle extends UnistNode {
  type: 'element'
  name: 'issueTitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<IssueTitleChildrenMap>[]
}

export interface IssueTitleChildrenMap {
  text?: Text
}

export interface Issue extends UnistNode {
  type: 'element'
  name: 'issue'
  attributes: {
    id?: string
    seq?: string
    specificUse?: string
  }

  children: RequiredMap<IssueChildrenMap>[]
}

export interface IssueChildrenMap {
  text?: Text
}

export interface Italic extends UnistNode {
  type: 'element'
  name: 'italic'
  attributes: {
    id?: string
    specificUse?: string
    toggle?: ItalicTypeToggle
  }

  children: RequiredMap<ItalicChildrenMap>[]
}

export interface ItalicChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type ItalicTypeToggle = 'no' | 'yes'

export interface JournalId extends UnistNode {
  type: 'element'
  name: 'journalId'
  attributes: {
    assigningAuthority?: string
    id?: string
    journalIdtype?: string
    specificUse?: string
  }
  children: []
}

export interface JournalMeta extends UnistNode {
  type: 'element'
  name: 'journalMeta'
  attributes: {
    id?: string
  }

  children: RequiredMap<JournalMetaChildrenMap>[]
}

export interface JournalMetaChildrenMap {
  aff?: Aff[]

  affAlternatives?: AffAlternatives[]

  contribGroup?: ContribGroup[]

  isbn?: Isbn[]

  issn: Issn[]

  issnL?: IssnL

  journalId: JournalId[]

  journalTitlegroup?: JournalTitlegroup[]

  notes?: Notes[]

  publisher?: Publisher

  selfUri?: SelfUri[]
}

export interface JournalSubtitle extends UnistNode {
  type: 'element'
  name: 'journalSubtitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<JournalSubtitleChildrenMap>[]
}

export interface JournalSubtitleChildrenMap {
  text?: Text
}

export interface JournalTitlegroup extends UnistNode {
  type: 'element'
  name: 'journalTitlegroup'
  attributes: {
    id?: string
  }

  children: RequiredMap<JournalTitlegroupChildrenMap>[]
}

export interface JournalTitlegroupChildrenMap {
  text?: Text

  abbrevJournaltitle?: AbbrevJournaltitle[]

  journalSubtitle?: JournalSubtitle[]

  journalTitle?: JournalTitle[]

  transTitlegroup?: TransTitlegroup[]
}

export interface JournalTitle extends UnistNode {
  type: 'element'
  name: 'journalTitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<JournalTitleChildrenMap>[]
}

export interface JournalTitleChildrenMap {
  text?: Text
}

export interface KwdGroup extends UnistNode {
  type: 'element'
  name: 'kwdGroup'
  attributes: {
    assigningAuthority?: string
    id?: string
    kwdGrouptype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }

  children: RequiredMap<KwdGroupChildrenMap>[]
}

export interface KwdGroupChildrenMap {
  compoundKwd: CompoundKwd[]

  kwd: Kwd[]

  label?: Label

  nestedKwd: NestedKwd[]

  title?: Title
}

export interface Kwd extends UnistNode {
  type: 'element'
  name: 'kwd'
  attributes: {
    assigningAuthority?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<KwdChildrenMap>[]
}

export interface KwdChildrenMap {
  text?: Text

  content: SimpleTextContent[]
}

export interface Label extends UnistNode {
  type: 'element'
  name: 'label'
  attributes: {
    alt?: string
    id?: string
  }

  children: RequiredMap<LabelChildrenMap>[]
}

export interface LabelChildrenMap {
  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface LicenseP extends UnistNode {
  type: 'element'
  name: 'licenseP'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<LicensePChildrenMap>[]
}

export interface LicensePChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  awardId?: AwardId[]

  blockAlternatives?: BlockAlternatives[]

  bold?: Bold[]

  boxedText?: BoxedText[]

  chemStruct?: ChemStruct[]

  chemStructwrap?: ChemStructwrap[]

  citationAlternatives?: CitationAlternatives[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  elementCitation?: ElementCitation[]

  email?: Email[]

  explanation?: Explanation[]

  extLink?: ExtLink[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  fundingSource?: FundingSource[]

  graphic?: Graphic[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  list?: List[]

  media?: Media[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  mixedCitation?: MixedCitation[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  nlmCitation?: NlmCitation[]

  openAccess?: OpenAccess[]

  overline?: Overline[]

  preformat?: Preformat[]

  price?: Price[]

  privateChar?: PrivateChar[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  speech?: Speech[]

  statement?: Statement[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  verseGroup?: VerseGroup[]

  xref?: Xref[]
}

export interface License extends UnistNode {
  type: 'element'
  name: 'license'
  attributes: {
    hreflang?: string
    id?: string
    licenseType?: string
    specificUse?: string
  }

  children: RequiredMap<LicenseChildrenMap>[]
}

export interface LicenseChildrenMap {
  licenseP: LicenseP[]
}

export interface ListItem extends UnistNode {
  type: 'element'
  name: 'listItem'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ListItemChildrenMap>[]
}

export interface ListItemChildrenMap {
  defList: DefList[]

  label?: Label

  list: List[]

  p: P[]

  title?: Title
}

export interface List extends UnistNode {
  type: 'element'
  name: 'list'
  attributes: {
    continuedFrom?: string
    id?: string
    listContent?: string
    listType?: string
    prefixWord?: string
    specificUse?: string
  }

  children: RequiredMap<ListChildrenMap>[]
}

export interface ListChildrenMap {
  label?: Label

  listItem: ListItem[]

  objectId?: ObjectId[]

  title?: Title
}

export interface LongDesc extends UnistNode {
  type: 'element'
  name: 'longDesc'
  attributes: {
    hreflang?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<LongDescChildrenMap>[]
}

export interface LongDescChildrenMap {
  text?: Text
}

export interface Lpage extends UnistNode {
  type: 'element'
  name: 'lpage'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<LpageChildrenMap>[]
}

export interface LpageChildrenMap {
  text?: Text
}

export interface Media extends UnistNode {
  type: 'element'
  name: 'media'
  attributes: {
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string
    specificUse?: string

    orientation?: MediaTypeOrientation
    position?: MediaTypePosition
  }

  children: RequiredMap<MediaChildrenMap>[]
}

export interface MediaChildrenMap {
  text?: Text
  abstract?: Abstract[]

  altText?: AltText[]

  attrib?: Attrib[]

  caption?: Caption[]

  email?: Email[]

  extLink?: ExtLink[]

  kwdGroup?: KwdGroup[]

  label?: Label[]

  longDesc?: LongDesc[]

  objectId?: ObjectId[]

  permissions?: Permissions[]
  subjGroup?: SubjGroup[]

  uri?: Uri[]

  xref?: Xref[]
}

type MediaTypeOrientation = 'landscape' | 'portrait'

type MediaTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface MetaName extends UnistNode {
  type: 'element'
  name: 'metaName'
  attributes: {
    id?: string
  }
  children: []
}

export interface MetaValue extends UnistNode {
  type: 'element'
  name: 'metaValue'
  attributes: {
    id?: string
  }

  children: RequiredMap<MetaValueChildrenMap>[]
}

export interface MetaValueChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface MilestoneEnd extends UnistNode {
  type: 'element'
  name: 'milestoneEnd'
  attributes: {
    id?: string
    rationale?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<MilestoneEndChildrenMap>[]
}

export interface MilestoneEndChildrenMap {
  text?: Text
}

export interface MilestoneStart extends UnistNode {
  type: 'element'
  name: 'milestoneStart'
  attributes: {
    id?: string
    rationale?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<MilestoneStartChildrenMap>[]
}

export interface MilestoneStartChildrenMap {
  text?: Text
}

export interface MixedCitation extends UnistNode {
  type: 'element'
  name: 'mixedCitation'
  attributes: {
    hreflang?: string
    id?: string
    publicationFormat?: string
    publicationType?: string
    publisherType?: string
    specificUse?: string
    useType?: string
  }

  children: RequiredMap<MixedCitationChildrenMap>[]
}

export interface MixedCitationChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  annotation?: Annotation[]

  articleTitle?: ArticleTitle[]

  bold?: Bold[]

  chapterTitle?: ChapterTitle[]

  chemStruct?: ChemStruct[]

  collab?: Collab[]

  collabAlternatives?: CollabAlternatives[]

  comment?: Comment[]

  confAcronym?: ConfAcronym[]

  confDate?: ConfDate[]

  confLoc?: ConfLoc[]

  confName?: ConfName[]

  confSponsor?: ConfSponsor[]

  dataTitle?: DataTitle[]

  date?: Date[]

  dateIncitation?: DateIncitation[]

  day?: Day[]

  edition?: Edition[]

  elocationId?: ElocationId[]

  email?: Email[]

  etal?: Etal[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fpage?: Fpage[]

  gov?: Gov[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  isbn?: Isbn[]

  issn?: Issn[]

  issnL?: IssnL[]

  issue?: Issue[]

  issueId?: IssueId[]

  issuePart?: IssuePart[]

  issueTitle?: IssueTitle[]

  italic?: Italic[]

  label?: Label[]

  lpage?: Lpage[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  month?: Month[]

  name?: Name[]

  nameAlternatives?: NameAlternatives[]

  namedContent?: NamedContent[]

  objectId?: ObjectId[]

  overline?: Overline[]

  pageRange?: PageRange[]

  partTitle?: PartTitle[]

  patent?: Patent[]

  personGroup?: PersonGroup[]

  privateChar?: PrivateChar[]

  pubId?: PubId[]

  publisherLoc?: PublisherLoc[]

  publisherName?: PublisherName[]

  role?: Role[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  season?: Season[]

  series?: Series[]

  size?: Size[]

  source?: Source[]

  std?: Std[]

  strike?: Strike[]

  stringDate?: StringDate[]

  stringName?: StringName[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  supplement?: Supplement[]

  transSource?: TransSource[]

  transTitle?: TransTitle[]

  underline?: Underline[]

  uri?: Uri[]

  version?: Version[]

  volume?: Volume[]

  volumeId?: VolumeId[]

  volumeSeries?: VolumeSeries[]

  year?: Year[]
}

export interface Monospace extends UnistNode {
  type: 'element'
  name: 'monospace'
  attributes: {
    id?: string
    specificUse?: string
    toggle?: MonospaceTypeToggle
  }

  children: RequiredMap<MonospaceChildrenMap>[]
}

export interface MonospaceChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type MonospaceTypeToggle = 'no' | 'yes'

export interface Month extends UnistNode {
  type: 'element'
  name: 'month'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<MonthChildrenMap>[]
}

export interface MonthChildrenMap {
  text?: Text
}

export interface NameAlternatives extends UnistNode {
  type: 'element'
  name: 'nameAlternatives'
  attributes: {
    id?: string
  }

  children: RequiredMap<NameAlternativesChildrenMap>[]
}

export interface NameAlternativesChildrenMap {
  name: Name[]

  stringName: StringName[]
}

export interface NamedContent extends UnistNode {
  type: 'element'
  name: 'namedContent'
  attributes: {
    alt?: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<NamedContentChildrenMap>[]
}

export interface NamedContentChildrenMap {
  text?: Text
  abbrev?: Abbrev[]

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  bold?: Bold[]

  boxedText?: BoxedText[]

  chemStruct?: ChemStruct[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  email?: Email[]

  explanation?: Explanation[]

  extLink?: ExtLink[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  graphic?: Graphic[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  list?: List[]

  media?: Media[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  preformat?: Preformat[]

  privateChar?: PrivateChar[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  speech?: Speech[]

  statement?: Statement[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  verseGroup?: VerseGroup[]

  xref?: Xref[]
}

export interface Name extends UnistNode {
  type: 'element'
  name: 'name'
  attributes: {
    id?: string
    specificUse?: string
    nameStyle?: NameTypeNameStyle
  }

  children: RequiredMap<NameChildrenMap>[]
}

export interface NameChildrenMap {
  text?: Text
  givenNames: GivenNames[]

  prefix?: Prefix

  suffix?: Suffix

  surname: Surname
}

type NameTypeNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'

export interface NestedKwd extends UnistNode {
  type: 'element'
  name: 'nestedKwd'
  attributes: {
    assigningAuthority?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<NestedKwdChildrenMap>[]
}

export interface NestedKwdChildrenMap {
  text?: Text

  compoundKwd: CompoundKwd[]

  kwd: Kwd[]

  nestedKwd?: NestedKwd[]
}

export interface NlmCitation extends UnistNode {
  type: 'element'
  name: 'nlmCitation'
  attributes: {
    hreflang?: string
    id?: string
    publicationFormat?: string
    publicationType?: string
    publisherType?: string
    specificUse?: string
  }

  children: RequiredMap<NlmCitationChildrenMap>[]
}

export interface NlmCitationChildrenMap {
  accessDate?: AccessDate

  annotation?: Annotation

  articleTitle?: ArticleTitle[]

  collab?: Collab[]

  comment?: Comment[]

  confDate?: ConfDate

  confLoc?: ConfLoc

  confName?: ConfName

  day?: Day

  edition?: Edition

  fpage?: Fpage[]

  issue?: Issue[]

  lpage?: Lpage[]

  month?: Month

  pageCount?: PageCount

  patent?: Patent

  personGroup?: PersonGroup[]

  pubId?: PubId[]

  publisherLoc?: PublisherLoc

  publisherName?: PublisherName

  season?: Season

  series?: Series

  source?: Source

  supplement?: Supplement[]

  timeStamp?: TimeStamp

  transSource?: TransSource

  transTitle?: TransTitle[]

  volume?: Volume

  year?: Year
}

export interface Notes extends UnistNode {
  type: 'element'
  name: 'notes'
  attributes: {
    id?: string
    notesType?: string
    specificUse?: string
  }

  children: RequiredMap<NotesChildrenMap>[]
}

export interface NotesChildrenMap {
  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  graphic?: Graphic[]

  label?: Label

  list?: List[]

  media?: Media[]

  p?: P[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  sec?: Sec[]

  secMeta?: SecMeta

  speech?: Speech[]

  statement?: Statement[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  title?: Title

  verseGroup?: VerseGroup[]
}

export interface Note extends UnistNode {
  type: 'element'
  name: 'note'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<NoteChildrenMap>[]
}

export interface NoteChildrenMap {
  text?: Text

  label?: Label

  p: P[]

  product: Product[]
}

export interface ObjectId extends UnistNode {
  type: 'element'
  name: 'objectId'
  attributes: {
    assigningAuthority?: string
    id?: string
    pubIdType?: string
    specificUse?: string
  }

  children: RequiredMap<ObjectIdChildrenMap>[]
}

export interface ObjectIdChildrenMap {
  text?: Text
}

export interface OnBehalfof extends UnistNode {
  type: 'element'
  name: 'onBehalfof'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<OnBehalfofChildrenMap>[]
}

export interface OnBehalfofChildrenMap {
  bold?: Bold[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  underline?: Underline[]

  xref?: Xref[]
}

export interface OpenAccess extends UnistNode {
  type: 'element'
  name: 'openAccess'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<OpenAccessChildrenMap>[]
}

export interface OpenAccessChildrenMap {
  p: P[]
}

export interface Option extends UnistNode {
  type: 'element'
  name: 'option'
  attributes: {
    id?: string
    specificUse?: string
    correct?: OptionTypeCorrect
  }

  children: RequiredMap<OptionChildrenMap>[]
}

export interface OptionChildrenMap {
  text?: Text
  address: Address[]

  altTitle?: AltTitle[]

  alternatives: Alternatives[]

  answer: Answer[]

  answerSet: AnswerSet[]

  array: Array[]

  blockAlternatives: BlockAlternatives[]

  boxedText: BoxedText[]

  chemStructwrap: ChemStructwrap[]

  code: Code[]

  defList: DefList[]

  dispFormula: DispFormula[]

  dispFormulagroup: DispFormulagroup[]

  dispQuote: DispQuote[]

  explanation?: Explanation[]

  fig: Fig[]

  figGroup: FigGroup[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  graphic: Graphic[]

  label?: Label

  list: List[]

  media: Media[]

  objectId?: ObjectId[]

  p: P[]

  preformat: Preformat[]

  question: Question[]

  questionWrap: QuestionWrap[]

  questionWrapgroup: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle: RelatedArticle[]

  relatedObject: RelatedObject[]

  sec: Sec[]

  speech: Speech[]

  statement: Statement[]

  subtitle?: Subtitle[]

  supplementaryMaterial: SupplementaryMaterial[]

  tableWrap: TableWrap[]

  tableWrapgroup: TableWrapgroup[]

  texMath: TexMath[]

  title?: Title

  verseGroup: VerseGroup[]
}

type OptionTypeCorrect = 'no' | 'yes'

export interface OverlineEnd extends UnistNode {
  type: 'element'
  name: 'overlineEnd'
  attributes: {
    id?: string
    rid: string
    specificUse?: string
  }
  children: []
}

export interface OverlineStart extends UnistNode {
  type: 'element'
  name: 'overlineStart'
  attributes: {
    id: string
    specificUse?: string
  }
  children: []
}

export interface Overline extends UnistNode {
  type: 'element'
  name: 'overline'
  attributes: {
    id?: string
    specificUse?: string
    toggle?: OverlineTypeToggle
  }

  children: RequiredMap<OverlineChildrenMap>[]
}

export interface OverlineChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type OverlineTypeToggle = 'no' | 'yes'

export interface PageCount extends UnistNode {
  type: 'element'
  name: 'pageCount'
  attributes: {
    count: string
    id?: string
  }
  children: []
}

export interface PageRange extends UnistNode {
  type: 'element'
  name: 'pageRange'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PageRangeChildrenMap>[]
}

export interface PageRangeChildrenMap {
  text?: Text
}

export interface PartTitle extends UnistNode {
  type: 'element'
  name: 'partTitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PartTitleChildrenMap>[]
}

export interface PartTitleChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface Patent extends UnistNode {
  type: 'element'
  name: 'patent'
  attributes: {
    country?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PatentChildrenMap>[]
}

export interface PatentChildrenMap {
  text?: Text
}

export interface Permissions extends UnistNode {
  type: 'element'
  name: 'permissions'
  attributes: {
    id?: string
  }

  children: RequiredMap<PermissionsChildrenMap>[]
}

export interface PermissionsChildrenMap {
  copyrightHolder?: CopyrightHolder[]

  copyrightStatement?: CopyrightStatement[]

  copyrightYear?: CopyrightYear[]

  license?: License[]
}

export interface PersonGroup extends UnistNode {
  type: 'element'
  name: 'personGroup'
  attributes: {
    id?: string
    specificUse?: string
    personGroupType?: PersonGroupTypePersonGrouptype
  }

  children: RequiredMap<PersonGroupChildrenMap>[]
}

export interface PersonGroupChildrenMap {
  customType?: Text[]
  aff?: Aff[]

  affAlternatives?: AffAlternatives[]

  anonymous?: Anonymous[]

  collab?: Collab[]

  collabAlternatives?: CollabAlternatives[]

  etal?: Etal[]

  name?: Name[]

  nameAlternatives?: NameAlternatives[]

  role?: Role[]

  stringName?: StringName[]
}

type PersonGroupTypePersonGrouptype =
  | 'allauthors'
  | 'assignee'
  | 'author'
  | 'compiler'
  | 'curator'
  | 'custom'
  | 'director'
  | 'editor'
  | 'guest-editor'
  | 'illustrator'
  | 'inventor'
  | 'research-assistant'
  | 'transed'
  | 'translator'

export interface Phone extends UnistNode {
  type: 'element'
  name: 'phone'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PhoneChildrenMap>[]
}

export interface PhoneChildrenMap {
  text?: Text
}

export interface PostalCode extends UnistNode {
  type: 'element'
  name: 'postalCode'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PostalCodeChildrenMap>[]
}

export interface PostalCodeChildrenMap {
  text?: Text
}

export interface Prefix extends UnistNode {
  type: 'element'
  name: 'prefix'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PrefixChildrenMap>[]
}

export interface PrefixChildrenMap {
  text?: Text
}

export interface Preformat extends UnistNode {
  type: 'element'
  name: 'preformat'
  attributes: {
    id?: string
    preformatType?: string
    specificUse?: string
    orientation?: PreformatTypeOrientation
    position?: PreformatTypePosition
  }

  children: RequiredMap<PreformatChildrenMap>[]
}

export interface PreformatChildrenMap {
  abbrev?: Abbrev[]

  altText?: AltText[]

  attrib?: Attrib[]

  bold?: Bold[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  italic?: Italic[]

  longDesc?: LongDesc[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  permissions?: Permissions[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]

  uri?: Uri[]
}

type PreformatTypeOrientation = 'landscape' | 'portrait'

type PreformatTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface Price extends UnistNode {
  type: 'element'
  name: 'price'
  attributes: {
    currency?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PriceChildrenMap>[]
}

export interface PriceChildrenMap {
  text?: Text

  bold?: Bold[]

  fixedCase?: FixedCase[]

  italic?: Italic[]

  monospace?: Monospace[]

  overline?: Overline[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  underline?: Underline[]
}

export interface PrincipalAwardrecipient extends UnistNode {
  type: 'element'
  name: 'principalAwardrecipient'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PrincipalAwardrecipientChildrenMap>[]
}

export interface PrincipalAwardrecipientChildrenMap {
  contribId?: ContribId[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  name?: Name[]

  nameAlternatives?: NameAlternatives[]

  stringName?: StringName[]
}

export interface PrincipalInvestigator extends UnistNode {
  type: 'element'
  name: 'principalInvestigator'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PrincipalInvestigatorChildrenMap>[]
}

export interface PrincipalInvestigatorChildrenMap {
  contribId?: ContribId[]

  name?: Name[]

  nameAlternatives?: NameAlternatives[]

  stringName?: StringName[]
}

export interface PrivateChar extends UnistNode {
  type: 'element'
  name: 'privateChar'
  attributes: {
    description?: string
    id?: string
    name?: string
    specificUse?: string
  }

  children: RequiredMap<PrivateCharChildrenMap>[]
}

export interface PrivateCharChildrenMap {
  glyphData: GlyphData

  glyphRef: GlyphRef

  inlineGraphic?: InlineGraphic[]
}

export interface ProcessingMeta extends UnistNode {
  type: 'element'
  name: 'processingMeta'
  attributes: {
    id?: string
    mathRepresentation?: string
    BaseTagSet?: ProcessingMetaTypeUnistNodeTagset
    mathmlVersion?: ProcessingMetaTypeMathmlVersion
    tableModel?: ProcessingMetaTypeTableModel
    tagsetFamily?: ProcessingMetaTypeTagsetFamily
  }

  children: RequiredMap<ProcessingMetaChildrenMap>[]
}

export interface ProcessingMetaChildrenMap {
  customMetagroup?: CustomMetagroup[]

  extendedBy?: ExtendedBy[]

  restrictedBy?: RestrictedBy[]
}

type ProcessingMetaTypeUnistNodeTagset = 'archiving' | 'authoring' | 'publishing'

type ProcessingMetaTypeMathmlVersion = '2.0' | '3.0'

type ProcessingMetaTypeTableModel = 'both' | 'none' | 'oasis' | 'xhtml'

type ProcessingMetaTypeTagsetFamily = 'bits' | 'jats' | 'sts'

export interface Product extends UnistNode {
  type: 'element'
  name: 'product'
  attributes: {
    hreflang?: string
    id?: string
    productType?: string
    specificUse?: string
  }

  children: RequiredMap<ProductChildrenMap>[]
}

export interface ProductChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  annotation?: Annotation[]

  articleTitle?: ArticleTitle[]

  bold?: Bold[]

  break?: Break[]

  chapterTitle?: ChapterTitle[]

  chemStruct?: ChemStruct[]

  collab?: Collab[]

  collabAlternatives?: CollabAlternatives[]

  comment?: Comment[]

  confAcronym?: ConfAcronym[]

  confDate?: ConfDate[]

  confLoc?: ConfLoc[]

  confName?: ConfName[]

  confSponsor?: ConfSponsor[]

  dataTitle?: DataTitle[]

  date?: Date[]

  dateIncitation?: DateIncitation[]

  day?: Day[]

  edition?: Edition[]

  elocationId?: ElocationId[]

  email?: Email[]

  etal?: Etal[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  fpage?: Fpage[]

  gov?: Gov[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  isbn?: Isbn[]

  issn?: Issn[]

  issnL?: IssnL[]

  issue?: Issue[]

  issueId?: IssueId[]

  issuePart?: IssuePart[]

  issueTitle?: IssueTitle[]

  italic?: Italic[]

  lpage?: Lpage[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  month?: Month[]

  name?: Name[]

  nameAlternatives?: NameAlternatives[]

  namedContent?: NamedContent[]

  objectId?: ObjectId[]

  overline?: Overline[]

  pageRange?: PageRange[]

  partTitle?: PartTitle[]

  patent?: Patent[]

  personGroup?: PersonGroup[]

  price?: Price[]

  privateChar?: PrivateChar[]

  pubId?: PubId[]

  publisherLoc?: PublisherLoc[]

  publisherName?: PublisherName[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  role?: Role[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  season?: Season[]

  series?: Series[]

  size?: Size[]

  source?: Source[]

  std?: Std[]

  strike?: Strike[]

  stringDate?: StringDate[]

  stringName?: StringName[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  supplement?: Supplement[]

  target?: Target[]

  transSource?: TransSource[]

  transTitle?: TransTitle[]

  underline?: Underline[]

  uri?: Uri[]

  version?: Version[]

  volume?: Volume[]

  volumeId?: VolumeId[]

  volumeSeries?: VolumeSeries[]

  xref?: Xref[]

  year?: Year[]
}

export interface P extends UnistNode {
  type: 'element'
  name: 'p'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PChildrenMap>[]
}

export interface PChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  awardId?: AwardId[]

  blockAlternatives?: BlockAlternatives[]

  bold?: Bold[]

  boxedText?: BoxedText[]

  chemStruct?: ChemStruct[]

  chemStructwrap?: ChemStructwrap[]

  citationAlternatives?: CitationAlternatives[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  elementCitation?: ElementCitation[]

  email?: Email[]

  explanation?: Explanation[]

  extLink?: ExtLink[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  fundingSource?: FundingSource[]

  graphic?: Graphic[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  list?: List[]

  media?: Media[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  mixedCitation?: MixedCitation[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  nlmCitation?: NlmCitation[]

  openAccess?: OpenAccess[]

  overline?: Overline[]

  preformat?: Preformat[]

  privateChar?: PrivateChar[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  speech?: Speech[]

  statement?: Statement[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  verseGroup?: VerseGroup[]

  xref?: Xref[]
}

export interface PubDatenotavailable extends UnistNode {
  type: 'element'
  name: 'pubDatenotavailable'
  attributes: {
    id?: string
    specificUse?: string
  }
  children: []
}

export interface PubDate extends UnistNode {
  type: 'element'
  name: 'pubDate'
  attributes: {
    assigningAuthority?: string
    calendar?: string
    dateType?: string
    id?: string
    iso8601Date?: string
    pubType?: string
    publicationFormat?: string
  }

  children: RequiredMap<PubDateChildrenMap>[]
}

export interface PubDateChildrenMap {
  day?: Day

  era?: Era

  month?: Month

  season?: Season

  year: Year
}

export interface PubHistory extends UnistNode {
  type: 'element'
  name: 'pubHistory'
  attributes: {
    id?: string
  }

  children: RequiredMap<PubHistoryChildrenMap>[]
}

export interface PubHistoryChildrenMap {
  event: Event[]
}

export interface PubId extends UnistNode {
  type: 'element'
  name: 'pubId'
  attributes: {
    assigningAuthority?: string
    hreflang?: string
    id?: string
    specificUse?: string
    pubIdType?: PubIdTypePubIdtype
  }

  children: RequiredMap<PubIdChildrenMap>[]
}

export interface PubIdChildrenMap {
  customType?: Text
}

type PubIdTypePubIdtype =
  | 'accession'
  | 'archive'
  | 'ark'
  | 'art-access-id'
  | 'arxiv'
  | 'coden'
  | 'custom'
  | 'doaj'
  | 'doi'
  | 'handle'
  | 'index'
  | 'isbn'
  | 'manuscript'
  | 'medline'
  | 'mr'
  | 'other'
  | 'pii'
  | 'pmcid'
  | 'pmid'
  | 'publisher-id'
  | 'sici'
  | 'std-designation'
  | 'zbl'

export interface PublisherLoc extends UnistNode {
  type: 'element'
  name: 'publisherLoc'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PublisherLocChildrenMap>[]
}

export interface PublisherLocChildrenMap {
  addrLine?: AddrLine[]

  city?: City[]

  country?: Country[]

  email?: Email[]

  extLink?: ExtLink[]

  fax?: Fax[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  phone?: Phone[]

  postalCode?: PostalCode[]

  state?: State[]

  uri?: Uri[]
}

export interface PublisherName extends UnistNode {
  type: 'element'
  name: 'publisherName'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<PublisherNameChildrenMap>[]
}

export interface PublisherNameChildrenMap {
  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]
}

export interface Publisher extends UnistNode {
  type: 'element'
  name: 'publisher'
  attributes: {
    id?: string
  }

  children: RequiredMap<PublisherChildrenMap>[]
}

export interface PublisherChildrenMap {
  text?: Text

  publisherLoc?: PublisherLoc[]

  publisherName: PublisherName[]
}

export interface QuestionPreamble extends UnistNode {
  type: 'element'
  name: 'questionPreamble'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<QuestionPreambleChildrenMap>[]
}

export interface QuestionPreambleChildrenMap {
  text?: Text

  address?: Address[]

  altTitle?: AltTitle[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  graphic?: Graphic[]

  label?: Label

  list?: List[]

  media?: Media[]

  objectId?: ObjectId[]

  p?: P[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  sec?: Sec[]

  speech?: Speech[]

  statement?: Statement[]

  subtitle?: Subtitle[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  title?: Title

  verseGroup?: VerseGroup[]
}

export interface Question extends UnistNode {
  type: 'element'
  name: 'question'
  attributes: {
    id?: string
    specificUse?: string
    questionResponsetype?: QuestionTypeQuestionResponsetype
  }

  children: RequiredMap<QuestionChildrenMap>[]
}

export interface QuestionChildrenMap {
  text?: Text
  address: Address[]

  altTitle?: AltTitle[]

  alternatives: Alternatives[]

  answer: Answer[]

  answerSet: AnswerSet[]

  array: Array[]

  blockAlternatives: BlockAlternatives[]

  boxedText: BoxedText[]

  chemStructwrap: ChemStructwrap[]

  code: Code[]

  defList: DefList[]

  dispFormula: DispFormula[]

  dispFormulagroup: DispFormulagroup[]

  dispQuote: DispQuote[]

  explanation: Explanation[]

  fig: Fig[]

  figGroup: FigGroup[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  graphic: Graphic[]

  label?: Label

  list: List[]

  media: Media[]

  objectId?: ObjectId[]

  option?: Option[]

  p: P[]

  preformat: Preformat[]

  question: Question[]

  questionWrap: QuestionWrap[]

  questionWrapgroup: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle: RelatedArticle[]

  relatedObject: RelatedObject[]

  sec: Sec[]

  secMeta?: SecMeta

  speech: Speech[]

  statement: Statement[]

  subtitle?: Subtitle[]

  supplementaryMaterial: SupplementaryMaterial[]

  tableWrap: TableWrap[]

  tableWrapgroup: TableWrapgroup[]

  texMath: TexMath[]

  title?: Title

  verseGroup: VerseGroup[]
}

type QuestionTypeQuestionResponsetype =
  | 'essay'
  | 'fill-in-the-blank'
  | 'multi-select'
  | 'multiple-choice'
  | 'short-answer'
  | 'true-false'

export interface QuestionWrapgroup extends UnistNode {
  type: 'element'
  name: 'questionWrapgroup'
  attributes: {
    audience?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<QuestionWrapgroupChildrenMap>[]
}

export interface QuestionWrapgroupChildrenMap {
  text?: Text

  altTitle?: AltTitle[]

  label?: Label

  objectId?: ObjectId[]

  questionPreamble?: QuestionPreamble

  questionWrap: QuestionWrap[]

  subtitle?: Subtitle[]

  title?: Title
}

export interface QuestionWrap extends UnistNode {
  type: 'element'
  name: 'questionWrap'
  attributes: {
    audience?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<QuestionWrapChildrenMap>[]
}

export interface QuestionWrapChildrenMap {
  text?: Text

  answer?: Answer

  answerSet?: AnswerSet

  explanation?: Explanation[]

  objectId?: ObjectId[]

  question: Question
}

export interface Rb extends UnistNode {
  type: 'element'
  name: 'rb'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<RbChildrenMap>[]
}

export interface RbChildrenMap {
  text?: Text

  bold?: Bold[]

  fixedCase?: FixedCase[]

  italic?: Italic[]

  monospace?: Monospace[]

  overline?: Overline[]

  roman?: Roman[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  underline?: Underline[]
}

export interface RefCount extends UnistNode {
  type: 'element'
  name: 'refCount'
  attributes: {
    count: string
    id?: string
  }
  children: []
}

export interface RefList extends UnistNode {
  type: 'element'
  name: 'refList'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<RefListChildrenMap>[]
}

export interface RefListChildrenMap {
  text?: Text

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  graphic?: Graphic[]

  label?: Label

  list?: List[]

  media?: Media[]

  objectId?: ObjectId[]

  p?: P[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  ref?: Ref[]

  refList?: RefList[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  speech?: Speech[]

  statement?: Statement[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  title?: Title

  verseGroup?: VerseGroup[]
}

export interface Ref extends UnistNode {
  type: 'element'
  name: 'ref'
  attributes: {
    id?: string
    specificUse?: string
    contentType?: string
  }

  children: RequiredMap<RefChildrenMap>[]
}

export interface RefChildrenMap {
  text?: Text

  citationAlternatives: CitationAlternatives[]

  elementCitation: ElementCitation[]

  label?: Label

  mixedCitation: MixedCitation[]

  nlmCitation: NlmCitation[]

  note: Note[]
}

export interface RelatedArticle extends UnistNode {
  type: 'element'
  name: 'relatedArticle'
  attributes: {
    $elocationId?: string
    extLinktype?: string
    hreflang?: string
    id?: string
    $issue?: string
    $journalId?: string
    journalIdtype?: string
    page?: string
    relatedArticletype: string
    specificUse?: string
    vol?: string
  }

  children: RequiredMap<RelatedArticleChildrenMap>[]
}

export interface RelatedArticleChildrenMap {
  annotation?: Annotation[]

  articleTitle?: ArticleTitle[]

  bold?: Bold[]

  chapterTitle?: ChapterTitle[]

  collab?: Collab[]

  collabAlternatives?: CollabAlternatives[]

  comment?: Comment[]

  confAcronym?: ConfAcronym[]

  confDate?: ConfDate[]

  confLoc?: ConfLoc[]

  confName?: ConfName[]

  confSponsor?: ConfSponsor[]

  dataTitle?: DataTitle[]

  date?: Date[]

  dateIncitation?: DateIncitation[]

  day?: Day[]

  edition?: Edition[]

  elocationId?: ElocationId[]

  email?: Email[]

  etal?: Etal[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fpage?: Fpage[]

  gov?: Gov[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  isbn?: Isbn[]

  issn?: Issn[]

  issnL?: IssnL[]

  issue?: Issue[]

  issueId?: IssueId[]

  issuePart?: IssuePart[]

  issueTitle?: IssueTitle[]

  italic?: Italic[]

  journalId?: JournalId[]

  lpage?: Lpage[]

  monospace?: Monospace[]

  month?: Month[]

  name?: Name[]

  nameAlternatives?: NameAlternatives[]

  namedContent?: NamedContent[]

  objectId?: ObjectId[]

  overline?: Overline[]

  pageRange?: PageRange[]

  partTitle?: PartTitle[]

  patent?: Patent[]

  personGroup?: PersonGroup[]

  pubId?: PubId[]

  publisherLoc?: PublisherLoc[]

  publisherName?: PublisherName[]

  role?: Role[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  season?: Season[]

  series?: Series[]

  size?: Size[]

  source?: Source[]

  std?: Std[]

  strike?: Strike[]

  stringDate?: StringDate[]

  stringName?: StringName[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  supplement?: Supplement[]

  transSource?: TransSource[]

  transTitle?: TransTitle[]

  underline?: Underline[]

  uri?: Uri[]

  version?: Version[]

  volume?: Volume[]

  volumeId?: VolumeId[]

  volumeSeries?: VolumeSeries[]

  year?: Year[]
}

export interface RelatedObject extends UnistNode {
  type: 'element'
  name: 'relatedObject'
  attributes: {
    documentId?: string
    documentIdtype?: string
    documentType?: string
    extLinktype?: string
    hreflang?: string
    id?: string
    linkType?: string
    objectIdtype?: string
    objectType?: string
    sourceId?: string
    sourceIdtype?: string
    sourceType?: string
    specificUse?: string
    $objectId?: string
  }
  children: RequiredMap<RelatedObjectChildrenMap>[]
}
export interface RelatedObjectChildrenMap {
  text?: Text
  annotation?: Annotation[]

  articleTitle?: ArticleTitle[]

  bold?: Bold[]

  chapterTitle?: ChapterTitle[]

  collab?: Collab[]

  collabAlternatives?: CollabAlternatives[]

  comment?: Comment[]

  confAcronym?: ConfAcronym[]

  confDate?: ConfDate[]

  confLoc?: ConfLoc[]

  confName?: ConfName[]

  confSponsor?: ConfSponsor[]

  dataTitle?: DataTitle[]

  date?: Date[]

  dateIncitation?: DateIncitation[]

  day?: Day[]

  edition?: Edition[]

  elocationId?: ElocationId[]

  email?: Email[]

  etal?: Etal[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fpage?: Fpage[]

  gov?: Gov[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  isbn?: Isbn[]

  issn?: Issn[]

  issnL?: IssnL[]

  issue?: Issue[]

  issueId?: IssueId[]

  issuePart?: IssuePart[]

  issueTitle?: IssueTitle[]

  italic?: Italic[]

  lpage?: Lpage[]

  monospace?: Monospace[]

  month?: Month[]

  name?: Name[]

  nameAlternatives?: NameAlternatives[]

  namedContent?: NamedContent[]

  objectId?: ObjectId[]

  overline?: Overline[]

  pageRange?: PageRange[]

  partTitle?: PartTitle[]

  patent?: Patent[]

  personGroup?: PersonGroup[]

  pubId?: PubId[]

  publisherLoc?: PublisherLoc[]

  publisherName?: PublisherName[]

  role?: Role[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  season?: Season[]

  series?: Series[]

  size?: Size[]

  source?: Source[]

  std?: Std[]

  strike?: Strike[]

  stringDate?: StringDate[]

  stringName?: StringName[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  supplement?: Supplement[]

  transSource?: TransSource[]

  transTitle?: TransTitle[]

  underline?: Underline[]

  uri?: Uri[]

  version?: Version[]

  volume?: Volume[]

  volumeId?: VolumeId[]

  volumeSeries?: VolumeSeries[]

  year?: Year[]
}

export interface ResourceGroup extends UnistNode {
  type: 'element'
  name: 'resourceGroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ResourceGroupChildrenMap>[]
}

export interface ResourceGroupChildrenMap {
  resourceName: ResourceName[]

  resourceWrap: ResourceWrap[]
}

export interface ResourceId extends UnistNode {
  type: 'element'
  name: 'resourceId'
  attributes: {
    assigningAuthority?: string
    id?: string
    resourceIdtype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }

  children: RequiredMap<ResourceIdChildrenMap>[]
}

export interface ResourceIdChildrenMap {
  text?: Text
}

export interface ResourceName extends UnistNode {
  type: 'element'
  name: 'resourceName'
  attributes: {
    hreflang?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<ResourceNameChildrenMap>[]
}

export interface ResourceNameChildrenMap {
  text?: Text

  bold?: Bold[]

  fixedCase?: FixedCase[]

  italic?: Italic[]

  monospace?: Monospace[]

  overline?: Overline[]

  roman?: Roman[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface ResourceWrap extends UnistNode {
  type: 'element'
  name: 'resourceWrap'
  attributes: {
    id?: string
  }

  children: RequiredMap<ResourceWrapChildrenMap>[]
}

export interface ResourceWrapChildrenMap {
  resourceId?: ResourceId[]

  resourceName: ResourceName
}

export interface Response extends UnistNode {
  type: 'element'
  name: 'response'
  attributes: {
    id?: string
    responseType?: string
    specificUse?: string
  }

  children: RequiredMap<ResponseChildrenMap>[]
}

export interface ResponseChildrenMap {
  back?: Back

  body?: Body

  floatsGroup?: FloatsGroup

  front: Front

  frontStub: FrontStub

  processingMeta?: ProcessingMeta
}

export interface RestrictedBy extends UnistNode {
  type: 'element'
  name: 'restrictedBy'
  attributes: {
    assigningAuthority?: string
    designator?: string
    hreflang?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
  children: []
}

export interface Role extends UnistNode {
  type: 'element'
  name: 'role'
  attributes: {
    assigningAuthority?: string
    degreeContribution?: string
    id?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<RoleChildrenMap>[]
}

export interface RoleChildrenMap {
  text?: Text

  content: SimpleTextContent[]
}

export interface Roman extends UnistNode {
  type: 'element'
  name: 'roman'
  attributes: {
    id?: string
    specificUse?: string
    toggle?: RomanTypeToggle
  }

  children: RequiredMap<RomanChildrenMap>[]
}

export interface RomanChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type RomanTypeToggle = 'no' | 'yes'

export interface Rp extends UnistNode {
  type: 'element'
  name: 'rp'
  attributes: {
    id?: string
  }
  children: []
}

export interface Rt extends UnistNode {
  type: 'element'
  name: 'rt'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<RtChildrenMap>[]
}

export interface RtChildrenMap {
  text?: Text
}

export interface Ruby extends UnistNode {
  type: 'element'
  name: 'ruby'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<RubyChildrenMap>[]
}

export interface RubyChildrenMap {
  text?: Text

  rb: Rb

  rt: Rt
}

export interface SansSerif extends UnistNode {
  type: 'element'
  name: 'sansSerif'
  attributes: {
    id?: string
    specificUse?: string
    toggle?: SansSerifTypeToggle
  }

  children: RequiredMap<SansSerifChildrenMap>[]
}

export interface SansSerifChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type SansSerifTypeToggle = 'no' | 'yes'

export interface Sc extends UnistNode {
  type: 'element'
  name: 'sc'
  attributes: {
    id?: string
    specificUse?: string
    toggle?: ScTypeToggle
  }

  children: RequiredMap<ScChildrenMap>[]
}

export interface ScChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type ScTypeToggle = 'no' | 'yes'

export interface Season extends UnistNode {
  type: 'element'
  name: 'season'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SeasonChildrenMap>[]
}

export interface SeasonChildrenMap {
  text?: Text
}

export interface SecMeta extends UnistNode {
  type: 'element'
  name: 'secMeta'
  attributes: {
    id?: string
  }

  children: RequiredMap<SecMetaChildrenMap>[]
}

export interface SecMetaChildrenMap {
  abstract?: Abstract[]

  contribGroup?: ContribGroup[]

  kwdGroup?: KwdGroup[]

  objectId?: ObjectId[]

  permissions?: Permissions
  subjGroup?: SubjGroup[]
}

export interface Sec extends UnistNode {
  type: 'element'
  name: 'sec'
  attributes: {
    id?: string
    secType?: string
    specificUse?: string
  }

  children: RequiredMap<SecChildrenMap>[]
}

export interface SecChildrenMap {
  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  boxedText?: BoxedText[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  explanation?: Explanation[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  fnGroup?: FnGroup[]

  glossary?: Glossary[]

  graphic?: Graphic[]

  label: Label

  list?: List[]

  media?: Media[]

  p?: P[]

  preformat?: Preformat[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  refList?: RefList[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  sec?: Sec[]

  secMeta?: SecMeta

  speech?: Speech[]

  statement?: Statement[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  texMath?: TexMath[]

  title: Title[]

  verseGroup?: VerseGroup[]
}

export interface SeeAlso extends UnistNode {
  type: 'element'
  name: 'seeAlso'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<SeeAlsoChildrenMap>[]
}

export interface SeeAlsoChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  array?: Array[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  code?: Code[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  graphic?: Graphic[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  media?: Media[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  preformat?: Preformat[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface See extends UnistNode {
  type: 'element'
  name: 'see'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<SeeChildrenMap>[]
}

export interface SeeChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  array?: Array[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  code?: Code[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  graphic?: Graphic[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  media?: Media[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  preformat?: Preformat[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface SelfUri extends UnistNode {
  type: 'element'
  name: 'selfUri'
  attributes: {
    assigningAuthority?: string
    hreflang?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SelfUriChildrenMap>[]
}

export interface SelfUriChildrenMap {
  text?: Text
}

export interface SeriesText extends UnistNode {
  type: 'element'
  name: 'seriesText'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SeriesTextChildrenMap>[]
}

export interface SeriesTextChildrenMap {
  text?: Text

  content: SimpleTextContent[]
}

export interface SeriesTitle extends UnistNode {
  type: 'element'
  name: 'seriesTitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SeriesTitleChildrenMap>[]
}

export interface SeriesTitleChildrenMap {
  text?: Text

  content: SimpleTextContent[]
}

export interface Series extends UnistNode {
  type: 'element'
  name: 'series'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SeriesChildrenMap>[]
}

export interface SeriesChildrenMap {
  text?: Text

  content: SimpleTextContent[]
}

export interface SigBlock extends UnistNode {
  type: 'element'
  name: 'sigBlock'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<SigBlockChildrenMap>[]
}

export interface SigBlockChildrenMap {
  text?: Text

  alternatives?: Alternatives[]

  bold?: Bold[]

  break?: Break[]

  fixedCase?: FixedCase[]

  graphic?: Graphic[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  media?: Media[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  sig?: Sig[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface Sig extends UnistNode {
  type: 'element'
  name: 'sig'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<SigChildrenMap>[]
}

export interface SigChildrenMap {
  text?: Text

  bold?: Bold[]

  break?: Break[]

  fixedCase?: FixedCase[]

  graphic?: Graphic[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  media?: Media[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface Size extends UnistNode {
  type: 'element'
  name: 'size'
  attributes: {
    id?: string
    specificUse?: string
    units: string
  }
  children: []
}

export interface Source extends UnistNode {
  type: 'element'
  name: 'source'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SourceChildrenMap>[]
}

export interface SourceChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface Speaker extends UnistNode {
  type: 'element'
  name: 'speaker'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SpeakerChildrenMap>[]
}

export interface SpeakerChildrenMap {
  text?: Text

  degrees?: Degrees[]

  fn?: Fn[]

  givenNames?: GivenNames[]

  prefix?: Prefix[]

  suffix?: Suffix[]

  surname?: Surname[]

  target?: Target[]

  xref?: Xref[]
}

export interface Speech extends UnistNode {
  type: 'element'
  name: 'speech'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SpeechChildrenMap>[]
}

export interface SpeechChildrenMap {
  text?: Text

  objectId?: ObjectId[]

  p: P[]

  speaker: Speaker
}

export interface Statement extends UnistNode {
  type: 'element'
  name: 'statement'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<StatementChildrenMap>[]
}

export interface StatementChildrenMap {
  text?: Text

  abstract?: Abstract[]

  attrib?: Attrib[]

  kwdGroup?: KwdGroup[]

  label?: Label

  p: P[]

  permissions?: Permissions[]

  statement: Statement[]
  subjGroup?: SubjGroup[]

  title?: Title
}

export interface State extends UnistNode {
  type: 'element'
  name: 'state'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<StateChildrenMap>[]
}

export interface StateChildrenMap {
  text?: Text
}

export interface StdOrganization extends UnistNode {
  type: 'element'
  name: 'stdOrganization'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<StdOrganizationChildrenMap>[]
}

export interface StdOrganizationChildrenMap {
  text?: Text

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  sub?: Sub[]

  sup?: Sup[]
}

export interface Std extends UnistNode {
  type: 'element'
  name: 'std'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<StdChildrenMap>[]
}

export interface StdChildrenMap {
  text?: Text

  bold?: Bold[]

  day?: Day[]

  fixedCase?: FixedCase[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  month?: Month[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  pubId?: PubId[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  source?: Source[]

  stdOrganization?: StdOrganization[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]

  year?: Year[]
}

export interface Strike extends UnistNode {
  type: 'element'
  name: 'strike'
  attributes: {
    id?: string
    specificUse?: string
    toggle?: StrikeTypeToggle
  }

  children: RequiredMap<StrikeChildrenMap>[]
}

export interface StrikeChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type StrikeTypeToggle = 'no' | 'yes'

export interface StringConf extends UnistNode {
  type: 'element'
  name: 'stringConf'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<StringConfChildrenMap>[]
}

export interface StringConfChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  confAcronym?: ConfAcronym[]

  confDate?: ConfDate[]

  confLoc?: ConfLoc[]

  confName?: ConfName[]

  confNum?: ConfNum[]

  confSponsor?: ConfSponsor[]

  confTheme?: ConfTheme[]

  fixedCase?: FixedCase[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  stringConf?: StringConf[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface StringDate extends UnistNode {
  type: 'element'
  name: 'stringDate'
  attributes: {
    calendar?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }

  children: RequiredMap<StringDateChildrenMap>[]
}

export interface StringDateChildrenMap {
  text?: Text

  day?: Day[]

  era?: Era[]

  month?: Month[]

  season?: Season[]

  year?: Year[]
}

export interface StringName extends UnistNode {
  type: 'element'
  name: 'stringName'
  text?: Text
  attributes: {
    id?: string
    nameStyle?: StringNameTypeNameStyle
    specificUse?: string
  }

  children: RequiredMap<StringNameChildrenMap>[]
}

export interface StringNameChildrenMap {
  degrees?: Degrees[]

  givenNames?: GivenNames[]

  prefix?: Prefix[]

  suffix?: Suffix[]

  surname?: Surname[]
}

type StringNameTypeNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'

export interface StyledContent extends UnistNode {
  type: 'element'
  name: 'styledContent'
  attributes: {
    alt?: string
    id?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
    toggle?: StyledtextToggle
  }

  children: RequiredMap<StyledContentChildrenMap>[]
}

export interface StyledContentChildrenMap {
  abbrev?: Abbrev[]

  address?: Address[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  blockAlternatives?: BlockAlternatives[]

  bold?: Bold[]

  boxedText?: BoxedText[]

  chemStruct?: ChemStruct[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  email?: Email[]

  explanation?: Explanation[]

  extLink?: ExtLink[]

  fig?: Fig[]

  figGroup?: FigGroup[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  graphic?: Graphic[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  list?: List[]

  media?: Media[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  preformat?: Preformat[]

  privateChar?: PrivateChar[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  speech?: Speech[]

  statement?: Statement[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  supplementaryMaterial?: SupplementaryMaterial[]

  tableWrap?: TableWrap[]

  tableWrapgroup?: TableWrapgroup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  verseGroup?: VerseGroup[]

  xref?: Xref[]
}

type StyledtextToggle = 'no' | 'yes'

export interface SubArticle extends UnistNode {
  type: 'element'
  name: 'subArticle'
  attributes: {
    articleType?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SubArticleChildrenMap>[]
}

export interface SubArticleChildrenMap {
  back?: Back

  body?: Body

  floatsGroup?: FloatsGroup

  front: Front

  frontStub: FrontStub

  processingMeta?: ProcessingMeta

  response?: Response[]

  subArticle?: SubArticle[]
}

export interface Subject extends UnistNode {
  type: 'element'
  name: 'subject'
  attributes: {
    assigningAuthority?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<SubjectChildrenMap>[]
}

export interface SubjectChildrenMap {
  text?: Text

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface SubjGroup extends UnistNode {
  type: 'element'
  name: 'subjGroup'
  attributes: {
    assigningAuthority?: string
    id?: string
    specificUse?: string
    subjGrouptype?: string
    vocab?: string
    vocabIdentifier?: string
  }

  children: RequiredMap<SubjGroupChildrenMap>[]
}

export interface SubjGroupChildrenMap {
  compoundSubject: CompoundSubject[]
  subjGroup?: SubjGroup[]

  subject: Subject[]
}

export interface Subtitle extends UnistNode {
  type: 'element'
  name: 'subtitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SubtitleChildrenMap>[]
}

export interface SubtitleChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  break?: Break[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface Sub extends UnistNode {
  type: 'element'
  name: 'sub'
  attributes: {
    arrange?: SubTypeArrange
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SubChildrenMap>[]
}

export interface SubChildrenMap {
  text?: Text
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type SubTypeArrange = 'stack' | 'stagger'

export interface Suffix extends UnistNode {
  type: 'element'
  name: 'suffix'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SuffixChildrenMap>[]
}

export interface SuffixChildrenMap {
  text?: Text
}

export interface SupplementaryMaterial extends UnistNode {
  type: 'element'
  name: 'supplementaryMaterial'
  attributes: {
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string
    specificUse?: string
    orientation?: SupplementaryMaterialTypeOrientation
    position?: SupplementaryMaterialTypePosition
  }

  children: RequiredMap<SupplementaryMaterialChildrenMap>[]
}

export interface SupplementaryMaterialChildrenMap {
  abstract?: Abstract[]
  text?: Text

  altText?: AltText[]

  alternatives?: Alternatives[]

  array?: Array[]

  attrib?: Attrib[]

  caption?: Caption[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  email?: Email[]

  extLink?: ExtLink[]

  graphic?: Graphic[]

  kwdGroup?: KwdGroup[]

  label?: Label[]

  list?: List[]

  longDesc?: LongDesc[]

  media?: Media[]

  objectId?: ObjectId[]

  p?: P[]

  permissions?: Permissions[]

  preformat?: Preformat[]

  speech?: Speech[]

  statement?: Statement[]
  subjGroup?: SubjGroup[]

  tableWrap?: TableWrap[]

  uri?: Uri[]

  verseGroup?: VerseGroup[]

  xref?: Xref[]
}

type SupplementaryMaterialTypeOrientation = 'landscape' | 'portrait'

type SupplementaryMaterialTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface Supplement extends UnistNode {
  type: 'element'
  name: 'supplement'
  attributes: {
    id?: string
    specificUse?: string
    supplementType?: string
  }

  children: RequiredMap<SupplementChildrenMap>[]
}

export interface SupplementChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  contribGroup?: ContribGroup[]

  fixedCase?: FixedCase[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  title?: Title[]

  underline?: Underline[]
}

export interface SupportDescription extends UnistNode {
  type: 'element'
  name: 'supportDescription'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
  }

  children: RequiredMap<SupportDescriptionChildrenMap>[]
}

export interface SupportDescriptionChildrenMap {
  p: P[]
}

export interface SupportGroup extends UnistNode {
  type: 'element'
  name: 'supportGroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SupportGroupChildrenMap>[]
}

export interface SupportGroupChildrenMap {
  contributedResourcegroup?: ContributedResourcegroup[]

  fundingGroup?: FundingGroup[]
}

export interface SupportSource extends UnistNode {
  type: 'element'
  name: 'supportSource'
  attributes: {
    country?: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
    supportType?: string
  }

  children: RequiredMap<SupportSourceChildrenMap>[]
}

export interface SupportSourceChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  institution?: Institution[]

  institutionWrap?: InstitutionWrap[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  underline?: Underline[]
}

export interface Sup extends UnistNode {
  type: 'element'
  name: 'sup'
  attributes: {
    arrange?: SupTypeArrange
    id?: string
    specificUse?: string
  }

  children: RequiredMap<SupChildrenMap>[]
}

export interface SupChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type SupTypeArrange = 'stack' | 'stagger'
export interface Surname extends UnistNode {
  type: 'element'
  name: 'surname'
  attributes: {
    id?: string
    initials?: string
  }
  children: Text[]
}

export interface TableCount extends UnistNode {
  type: 'element'
  name: 'tableCount'
  attributes: {
    count: string
    id?: string
  }
  children: []
}

export interface Table extends UnistNode {
  type: 'element'
  name: 'table'
  text?: Text
  attributes: {
    border?: string
    cellpadding?: string
    cellspacing?: string
    id?: string
    specificUse?: string
    style?: string
    summary?: string
    width?: string
    frame?: TableTypeFrame
    rules?: TableTypeRules
  }

  children: RequiredMap<TableChildrenMap>[]
}

export interface TableChildrenMap {
  col?: Col[]
  colgroup?: Colgroup[]
  tbody: Tbody[]
  tfoot?: Tfoot
  thead?: Thead
  tr: Tr[]
}

type TableTypeFrame =
  | 'above'
  | 'below'
  | 'border'
  | 'box'
  | 'hsides'
  | 'lhs'
  | 'rhs'
  | 'void'
  | 'vsides'

type TableTypeRules = 'all' | 'cols' | 'groups' | 'none' | 'rows'

export interface TableWrapfoot extends UnistNode {
  type: 'element'
  name: 'tableWrapfoot'
  attributes: {
    id?: string
  }

  children: RequiredMap<TableWrapfootChildrenMap>[]
}

export interface TableWrapfootChildrenMap {
  attrib: Attrib[]

  fn: Fn[]

  fnGroup: FnGroup[]

  p: P[]

  permissions: Permissions[]

  title?: Title
}

export interface TableWrapgroup extends UnistNode {
  type: 'element'
  name: 'tableWrapgroup'
  attributes: {
    id?: string
    specificUse?: string
    orientation?: TableWrapgroupTypeOrientation
    position?: TableWrapgroupTypePosition
  }

  children: RequiredMap<TableWrapgroupChildrenMap>[]
}

export interface TableWrapgroupChildrenMap {
  text?: Text
  abstract?: Abstract[]

  altText?: AltText[]

  caption?: Caption[]

  email?: Email[]

  extLink?: ExtLink[]

  kwdGroup?: KwdGroup[]

  label?: Label[]

  longDesc?: LongDesc[]

  objectId?: ObjectId[]
  subjGroup?: SubjGroup[]

  tableWrap: TableWrap[]

  uri?: Uri[]

  xref: Xref[]
}

type TableWrapgroupTypeOrientation = 'landscape' | 'portrait'

type TableWrapgroupTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface TableWrap extends UnistNode {
  type: 'element'
  name: 'tableWrap'
  attributes: {
    id?: string
    specificUse?: string
    orientation?: TableWrapTypeOrientation
    position?: TableWrapTypePosition
  }

  children: RequiredMap<TableWrapChildrenMap>[]
}

export interface TableWrapChildrenMap {
  text?: Text
  abstract?: Abstract[]

  altText?: AltText[]

  alternatives?: Alternatives[]

  attrib?: Attrib[]

  caption?: Caption[]

  chemStructwrap?: ChemStructwrap[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispQuote?: DispQuote[]

  email?: Email[]

  extLink?: ExtLink[]

  graphic?: Graphic[]

  kwdGroup?: KwdGroup[]

  label?: Label[]

  list?: List[]

  longDesc?: LongDesc[]

  media?: Media[]

  objectId?: ObjectId[]

  permissions?: Permissions[]

  preformat?: Preformat[]

  speech?: Speech[]

  statement?: Statement[]
  subjGroup?: SubjGroup[]

  table?: Table[]

  tableWrapfoot?: TableWrapfoot[]

  uri?: Uri[]

  verseGroup?: VerseGroup[]

  xref?: Xref[]
}

type TableWrapTypeOrientation = 'landscape' | 'portrait'

type TableWrapTypePosition = 'anchor' | 'background' | 'float' | 'margin'

export interface Target extends UnistNode {
  type: 'element'
  name: 'target'
  attributes: {
    id: string
    specificUse?: string
    targetType?: string
  }

  children: RequiredMap<TargetChildrenMap>[]
}

export interface TargetChildrenMap {
  content: SimpleTextContent[]
}

export interface Tbody extends UnistNode {
  type: 'element'
  name: 'tbody'
  attributes: {
    char?: string
    align?: TbodyTypeAlign
    charoff?: string
    id?: string
    valign?: TbodyTypeValign
    style?: string
  }

  children: RequiredMap<TbodyChildrenMap>[]
}

export interface TbodyChildrenMap {
  text?: Text
  tr: Tr[]
}

type TbodyTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

type TbodyTypeValign = 'UnistNodeline' | 'bottom' | 'middle' | 'top'

export interface Td extends UnistNode {
  type: 'element'
  name: 'td'
  attributes: {
    abbr?: string
    axis?: string
    char?: string
    charoff?: string
    colspan?: string
    headers?: string
    id?: string
    rowspan?: string
    style?: string
    align?: TdTypeAlign
    scope?: TdTypeScope

    valign?: TdTypeValign
  }

  children: RequiredMap<TdChildrenMap>[]
}

export interface TdChildrenMap {
  text?: Text
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  bold?: Bold[]

  break?: Break[]

  chemStruct?: ChemStruct[]

  citationAlternatives?: CitationAlternatives[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  elementCitation?: ElementCitation[]

  email?: Email[]

  explanation?: Explanation[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  graphic?: Graphic[]

  hr?: Hr[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  list?: List[]

  media?: Media[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  mixedCitation?: MixedCitation[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  nlmCitation?: NlmCitation[]

  overline?: Overline[]

  p?: P[]

  preformat?: Preformat[]

  privateChar?: PrivateChar[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  speech?: Speech[]

  statement?: Statement[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  verseGroup?: VerseGroup[]

  xref?: Xref[]
}

type TdTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

type TdTypeScope = 'col' | 'colgroup' | 'row' | 'rowgroup'

type TdTypeValign = 'UnistNodeline' | 'bottom' | 'middle' | 'top'

export interface TermHead extends UnistNode {
  type: 'element'
  name: 'termHead'
  attributes: {
    id?: string
  }

  children: RequiredMap<TermHeadChildrenMap>[]
}

export interface TermHeadChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface Term extends UnistNode {
  type: 'element'
  name: 'term'
  attributes: {
    id?: string
    rid?: string
    specificUse?: string
    termStatus?: string
    termType?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }

  children: RequiredMap<TermChildrenMap>[]
}

export interface TermChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  array?: Array[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  code?: Code[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  graphic?: Graphic[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  media?: Media[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  preformat?: Preformat[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface TexMath extends UnistNode {
  type: 'element'
  name: 'texMath'
  attributes: {
    id?: string
    specificUse?: string
    version?: string
    notation?: TexMathTypeNotation
  }

  children: RequiredMap<TexMathChildrenMap>[]
}

export interface TexMathChildrenMap {
  text?: Text
}

type TexMathTypeNotation = 'LaTeX' | 'TEX' | 'TeX' | 'tex'

export interface TextualForm extends UnistNode {
  type: 'element'
  name: 'textualForm'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<TextualFormChildrenMap>[]
}

export interface TextualFormChildrenMap {
  bold?: Bold[]

  fixedCase?: FixedCase[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  texMath?: TexMath[]

  underline?: Underline[]
}

export interface Tfoot extends UnistNode {
  type: 'element'
  name: 'tfoot'
  align?: TfootTypeAlign
  attributes: {
    char?: string
    charoff?: string
    id?: string
    style?: string
    valign?: TfootTypeValign
  }

  children: RequiredMap<TfootChildrenMap>[]
}

export interface TfootChildrenMap {
  text?: Text
  tr: Tr[]
}

type TfootTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

type TfootTypeValign = 'UnistNodeline' | 'bottom' | 'middle' | 'top'

export interface Thead extends UnistNode {
  type: 'element'
  name: 'thead'
  attributes: {
    align?: TheadTypeAlign
    valign?: TheadTypeValign
    char?: string
    charoff?: string
    id?: string
    style?: string
  }

  children: RequiredMap<TheadChildrenMap>[]
}

export interface TheadChildrenMap {
  text?: Text
  tr: Tr[]
}

type TheadTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

type TheadTypeValign = 'UnistNodeline' | 'bottom' | 'middle' | 'top'

export interface Th extends UnistNode {
  type: 'element'
  name: 'th'
  attributes: {
    abbr?: string
    axis?: string
    char?: string
    charoff?: string
    colspan?: string
    headers?: string
    id?: string
    rowspan?: string
    style?: string

    align?: ThTypeAlign
    scope?: ThTypeScope

    valign?: ThTypeValign
  }

  children: RequiredMap<ThChildrenMap>[]
}

export interface ThChildrenMap {
  text?: Text
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  answer?: Answer[]

  answerSet?: AnswerSet[]

  array?: Array[]

  bold?: Bold[]

  break?: Break[]

  chemStruct?: ChemStruct[]

  citationAlternatives?: CitationAlternatives[]

  code?: Code[]

  defList?: DefList[]

  dispFormula?: DispFormula[]

  dispFormulagroup?: DispFormulagroup[]

  dispQuote?: DispQuote[]

  elementCitation?: ElementCitation[]

  email?: Email[]

  explanation?: Explanation[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  graphic?: Graphic[]

  hr?: Hr[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  list?: List[]

  media?: Media[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  mixedCitation?: MixedCitation[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  nlmCitation?: NlmCitation[]

  overline?: Overline[]

  p?: P[]

  preformat?: Preformat[]

  privateChar?: PrivateChar[]

  question?: Question[]

  questionWrap?: QuestionWrap[]

  questionWrapgroup?: QuestionWrapgroup[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  speech?: Speech[]

  statement?: Statement[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  verseGroup?: VerseGroup[]

  xref?: Xref[]
}

type ThTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

type ThTypeScope = 'col' | 'colgroup' | 'row' | 'rowgroup'

type ThTypeValign = 'UnistNodeline' | 'bottom' | 'middle' | 'top'

export interface TimeStamp extends UnistNode {
  type: 'element'
  name: 'timeStamp'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<TimeStampChildrenMap>[]
}

export interface TimeStampChildrenMap {
  text?: Text
}

export interface TitleGroup extends UnistNode {
  type: 'element'
  name: 'titleGroup'
  attributes: {
    id?: string
  }

  children: RequiredMap<TitleGroupChildrenMap>[]
}

export interface TitleGroupChildrenMap {
  altTitle?: AltTitle[]

  articleTitle: ArticleTitle

  fnGroup?: FnGroup

  subtitle?: Subtitle[]

  transTitlegroup?: TransTitlegroup[]
}

export interface Title extends UnistNode {
  type: 'element'
  name: 'title'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<TitleChildrenMap>[]
}

export interface TitleChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  break?: Break[]

  chemStruct?: ChemStruct[]

  citationAlternatives?: CitationAlternatives[]

  elementCitation?: ElementCitation[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  mixedCitation?: MixedCitation[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  nlmCitation?: NlmCitation[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface TransAbstract extends UnistNode {
  type: 'element'
  name: 'transAbstract'
  attributes: {
    abstractType?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<TransAbstractChildrenMap>[]
}

export interface TransAbstractChildrenMap {
  label?: Label

  objectId?: ObjectId[]

  p?: P[]

  sec?: Sec[]

  title?: Title
}

export interface TransSource extends UnistNode {
  type: 'element'
  name: 'transSource'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<TransSourceChildrenMap>[]
}

export interface TransSourceChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface TransSubtitle extends UnistNode {
  type: 'element'
  name: 'transSubtitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<TransSubtitleChildrenMap>[]
}

export interface TransSubtitleChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  break?: Break[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface TransTitlegroup extends UnistNode {
  type: 'element'
  name: 'transTitlegroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<TransTitlegroupChildrenMap>[]
}

export interface TransTitlegroupChildrenMap {
  text?: Text

  transSubtitle?: TransSubtitle[]

  transTitle: TransTitle
}

export interface TransTitle extends UnistNode {
  type: 'element'
  name: 'transTitle'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<TransTitleChildrenMap>[]
}

export interface TransTitleChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  break?: Break[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

export interface Tr extends UnistNode {
  type: 'element'
  name: 'tr'
  attributes: {
    align?: TrTypeAlign
    valign?: TrTypeValign
    char?: string
    charoff?: string
    id?: string
    style?: string
  }

  children: RequiredMap<TrChildrenMap>[]
}

export interface TrChildrenMap {
  text?: Text
  td: Td[]
  th: Th[]
}

type TrTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'

type TrTypeValign = 'UnistNodeline' | 'bottom' | 'middle' | 'top'

export interface UnderlineEnd extends UnistNode {
  type: 'element'
  name: 'underlineEnd'
  attributes: {
    id?: string
    rid: string
    specificUse?: string
  }
  children: []
}

export interface UnderlineStart extends UnistNode {
  type: 'element'
  name: 'underlineStart'
  attributes: {
    id: string
    specificUse?: string
  }
  children: []
}

export interface Underline extends UnistNode {
  type: 'element'
  name: 'underline'
  attributes: {
    id?: string
    specificUse?: string
    underlineStyle?: string

    toggle?: UnderlineTypeToggle
  }

  children: RequiredMap<UnderlineChildrenMap>[]
}

export interface UnderlineChildrenMap {
  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  email?: Email[]

  extLink?: ExtLink[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  inlineSupplementarymaterial?: InlineSupplementarymaterial[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  relatedArticle?: RelatedArticle[]

  relatedObject?: RelatedObject[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  texMath?: TexMath[]

  underline?: Underline[]

  uri?: Uri[]

  xref?: Xref[]
}

type UnderlineTypeToggle = 'no' | 'yes'

export interface UnstructuredKwdgroup extends UnistNode {
  type: 'element'
  name: 'unstructuredKwdgroup'
  attributes: {
    assigningAuthority?: string
    id?: string
    kwdGrouptype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
  children: []
}

export interface Uri extends UnistNode {
  type: 'element'
  name: 'uri'
  attributes: {
    assigningAuthority?: string
    hreflang?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<UriChildrenMap>[]
}

export interface UriChildrenMap {
  text?: Text
}

export interface VerseGroup extends UnistNode {
  type: 'element'
  name: 'verseGroup'
  attributes: {
    id?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
  }

  children: RequiredMap<VerseGroupChildrenMap>[]
}

export interface VerseGroupChildrenMap {
  text?: Text

  attrib?: Attrib[]

  label?: Label

  permissions?: Permissions[]

  subtitle?: Subtitle

  title?: Title

  verseGroup: VerseGroup[]

  verseLine: VerseLine[]
}

export interface VerseLine extends UnistNode {
  type: 'element'
  name: 'verseLine'
  attributes: {
    id?: string
    indentLevel?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
  }

  children: RequiredMap<VerseLineChildrenMap>[]
}

export interface VerseLineChildrenMap {
  text?: Text

  abbrev?: Abbrev[]

  alternatives?: Alternatives[]

  bold?: Bold[]

  chemStruct?: ChemStruct[]

  fixedCase?: FixedCase[]

  fn?: Fn[]

  indexTerm?: IndexTerm[]

  indexTermrangeend?: IndexTermrangeend[]

  inlineFormula?: InlineFormula[]

  inlineGraphic?: InlineGraphic[]

  inlineMedia?: InlineMedia[]

  italic?: Italic[]

  milestoneEnd?: MilestoneEnd[]

  milestoneStart?: MilestoneStart[]

  monospace?: Monospace[]

  namedContent?: NamedContent[]

  overline?: Overline[]

  privateChar?: PrivateChar[]

  roman?: Roman[]

  ruby?: Ruby[]

  sansSerif?: SansSerif[]

  sc?: Sc[]

  strike?: Strike[]

  styledContent?: StyledContent[]

  sub?: Sub[]

  sup?: Sup[]

  target?: Target[]

  underline?: Underline[]

  xref?: Xref[]
}

export interface Version extends UnistNode {
  type: 'element'
  name: 'version'
  attributes: {
    designator?: string
    id?: string
    specificUse?: string
  }

  children: RequiredMap<VersionChildrenMap>[]
}

export interface VersionChildrenMap {
  text?: Text

  sub?: Sub[]

  sup?: Sup[]
}

export interface VolumeId extends UnistNode {
  type: 'element'
  name: 'volumeId'
  attributes: {
    assigningAuthority?: string
    hreflang?: string
    id?: string
    pubIdType?: string
    specificUse?: string
  }

  children: RequiredMap<VolumeIdChildrenMap>[]
}

export interface VolumeIdChildrenMap {
  text?: Text
}

export interface VolumeIssuegroup extends UnistNode {
  type: 'element'
  name: 'volumeIssuegroup'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<VolumeIssuegroupChildrenMap>[]
}

export interface VolumeIssuegroupChildrenMap {
  text?: Text

  issue?: Issue[]

  issueId?: IssueId[]

  issuePart?: IssuePart

  issueSponsor?: IssueSponsor[]

  issueTitle?: IssueTitle[]

  issueTitlegroup?: IssueTitlegroup[]

  volume?: Volume[]

  volumeId?: VolumeId[]

  volumeSeries?: VolumeSeries
}

export interface VolumeSeries extends UnistNode {
  type: 'element'
  name: 'volumeSeries'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<VolumeSeriesChildrenMap>[]
}

export interface VolumeSeriesChildrenMap {
  text?: Text
}

export interface Volume extends UnistNode {
  type: 'element'
  name: 'volume'
  attributes: {
    id?: string
    seq?: string
    specificUse?: string
  }

  children: RequiredMap<VolumeChildrenMap>[]
}

export interface VolumeChildrenMap {
  text?: Text
}

export interface WordCount extends UnistNode {
  type: 'element'
  name: 'wordCount'
  attributes: {
    count: string
    id?: string
  }
  children: []
}

export interface Xref extends UnistNode {
  type: 'element'
  name: 'xref'
  attributes: {
    alt?: string
    id?: string
    rid?: string
    specificUse?: string
    refType?: XrefTypeRefType
    customType?: string
  }

  children: RequiredMap<XrefChildrenMap>[]
}

export interface XrefChildrenMap {
  //customType?: Text
  content: SimpleTextContent[]
}

type XrefTypeRefType =
  | 'aff'
  | 'app'
  | 'author-notes'
  | 'award'
  | 'bibr'
  | 'bio'
  | 'boxed-text'
  | 'chem'
  | 'collab'
  | 'contrib'
  | 'corresp'
  | 'custom'
  | 'disp-formula'
  | 'fig'
  | 'fn'
  | 'kwd'
  | 'list'
  | 'other'
  | 'plate'
  | 'scheme'
  | 'sec'
  | 'statement'
  | 'supplementary-material'
  | 'table'
  | 'table-fn'

export interface X extends UnistNode {
  type: 'element'
  name: 'x'
  attributes: {
    id?: string
    specificUse?: string
  }

  children: RequiredMap<XChildrenMap>[]
}

export interface XChildrenMap {
  text?: Text
}

export interface Year extends UnistNode {
  type: 'element'
  name: 'year'
  attributes: {
    calendar?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }

  children: RequiredMap<YearChildrenMap>[]
}

export interface YearChildrenMap {
  text?: Text
}

export type documentMap = {
  // type: 'element'
  // name: 'document'
  abbrev: Abbrev

  abbrevJournaltitle: AbbrevJournaltitle

  abstract: Abstract

  accessDate: AccessDate

  ack: Ack

  addrLine: AddrLine

  address: Address

  aff: Aff

  affAlternatives: AffAlternatives

  altText: AltText

  altTitle: AltTitle

  alternatives: Alternatives

  annotation: Annotation

  anonymous: Anonymous

  answer: Answer

  answerSet: AnswerSet

  app: App

  appGroup: AppGroup

  array: Array

  article: Article

  articleCategories: ArticleCategories

  articleId: ArticleId

  articleMeta: ArticleMeta

  articleTitle: ArticleTitle

  articleVersion: ArticleVersion

  articleVersionalternatives: ArticleVersionalternatives

  attrib: Attrib

  authorComment: AuthorComment

  authorNotes: AuthorNotes

  awardDesc: AwardDesc

  awardGroup: AwardGroup

  awardId: AwardId

  awardName: AwardName

  back: Back

  bio: Bio

  blockAlternatives: BlockAlternatives

  body: Body

  bold: Bold

  boxedText: BoxedText

  break: Break

  caption: Caption

  chapterTitle: ChapterTitle

  chemStruct: ChemStruct

  chemStructwrap: ChemStructwrap

  citationAlternatives: CitationAlternatives

  city: City

  code: Code
  col: Col
  colgroup: Colgroup

  collab: Collab

  collabAlternatives: CollabAlternatives

  comment: Comment

  compoundKwd: CompoundKwd

  compoundKwdpart: CompoundKwdpart

  compoundSubject: CompoundSubject

  compoundSubjectpart: CompoundSubjectpart

  confAcronym: ConfAcronym

  confDate: ConfDate

  confLoc: ConfLoc

  confName: ConfName

  confNum: ConfNum

  confSponsor: ConfSponsor

  confTheme: ConfTheme

  conference: Conference

  contrib: Contrib

  contribGroup: ContribGroup

  contribId: ContribId

  contributedResourcegroup: ContributedResourcegroup

  copyrightHolder: CopyrightHolder

  copyrightStatement: CopyrightStatement

  copyrightYear: CopyrightYear

  corresp: Corresp

  count: Count

  country: Country

  counts: Counts

  customMeta: CustomMeta

  customMetagroup: CustomMetagroup

  dataTitle: DataTitle

  date: Date

  dateIncitation: DateIncitation

  day: Day

  def: Def

  defHead: DefHead

  defItem: DefItem

  defList: DefList

  degrees: Degrees

  dispFormula: DispFormula

  dispFormulagroup: DispFormulagroup

  dispQuote: DispQuote

  edition: Edition

  elementCitation: ElementCitation

  elocationId: ElocationId

  email: Email

  equationCount: EquationCount

  era: Era

  etal: Etal

  event: Event

  eventDesc: EventDesc

  explanation: Explanation

  extLink: ExtLink

  extendedBy: ExtendedBy

  fax: Fax

  fig: Fig

  figCount: FigCount

  figGroup: FigGroup

  fixedCase: FixedCase

  floatsGroup: FloatsGroup

  fn: Fn

  fnGroup: FnGroup

  fpage: Fpage

  front: Front

  frontStub: FrontStub

  fundingGroup: FundingGroup

  fundingSource: FundingSource

  fundingStatement: FundingStatement

  givenNames: GivenNames

  glossary: Glossary

  glyphData: GlyphData

  glyphRef: GlyphRef

  gov: Gov

  graphic: Graphic

  history: History

  hr: Hr

  indexTerm: IndexTerm

  indexTermrangeend: IndexTermrangeend

  inlineFormula: InlineFormula

  inlineGraphic: InlineGraphic

  inlineMedia: InlineMedia

  inlineSupplementarymaterial: InlineSupplementarymaterial

  institution: Institution

  institutionId: InstitutionId

  institutionWrap: InstitutionWrap

  isbn: Isbn

  issn: Issn

  issnL: IssnL

  issue: Issue

  issueId: IssueId

  issuePart: IssuePart

  issueSponsor: IssueSponsor

  issueSubtitle: IssueSubtitle

  issueTitle: IssueTitle

  issueTitlegroup: IssueTitlegroup

  italic: Italic

  journalId: JournalId

  journalMeta: JournalMeta

  journalSubtitle: JournalSubtitle

  journalTitle: JournalTitle

  journalTitlegroup: JournalTitlegroup

  kwd: Kwd

  kwdGroup: KwdGroup

  label: Label

  license: License

  licenseP: LicenseP

  list: List

  listItem: ListItem

  longDesc: LongDesc

  lpage: Lpage

  media: Media

  metaName: MetaName

  metaValue: MetaValue

  milestoneEnd: MilestoneEnd

  milestoneStart: MilestoneStart

  mixedCitation: MixedCitation

  monospace: Monospace

  month: Month

  name: Name

  nameAlternatives: NameAlternatives

  namedContent: NamedContent

  nestedKwd: NestedKwd

  nlmCitation: NlmCitation

  note: Note

  notes: Notes

  objectId: ObjectId

  onBehalfof: OnBehalfof

  openAccess: OpenAccess

  option: Option

  overline: Overline

  overlineEnd: OverlineEnd

  overlineStart: OverlineStart

  p: P

  pageCount: PageCount

  pageRange: PageRange

  partTitle: PartTitle

  patent: Patent

  permissions: Permissions

  personGroup: PersonGroup

  phone: Phone

  postalCode: PostalCode

  prefix: Prefix

  preformat: Preformat

  price: Price

  principalAwardrecipient: PrincipalAwardrecipient

  principalInvestigator: PrincipalInvestigator

  privateChar: PrivateChar

  processingMeta: ProcessingMeta

  product: Product

  pubDate: PubDate

  pubDatenotavailable: PubDatenotavailable

  pubHistory: PubHistory

  pubId: PubId

  publisher: Publisher

  publisherLoc: PublisherLoc

  publisherName: PublisherName

  question: Question

  questionPreamble: QuestionPreamble

  questionWrap: QuestionWrap

  questionWrapgroup: QuestionWrapgroup

  rb: Rb

  ref: Ref

  refCount: RefCount

  refList: RefList

  relatedArticle: RelatedArticle

  relatedObject: RelatedObject

  resourceGroup: ResourceGroup

  resourceId: ResourceId

  resourceName: ResourceName

  resourceWrap: ResourceWrap

  response: Response

  restrictedBy: RestrictedBy

  role: Role

  roman: Roman

  rp: Rp

  rt: Rt

  ruby: Ruby

  sansSerif: SansSerif

  sc: Sc

  season: Season

  sec: Sec

  secMeta: SecMeta

  see: See

  seeAlso: SeeAlso

  selfUri: SelfUri

  series: Series

  seriesText: SeriesText

  seriesTitle: SeriesTitle

  sig: Sig

  sigBlock: SigBlock

  size: Size

  source: Source

  speaker: Speaker

  speech: Speech

  state: State

  statement: Statement

  std: Std

  stdOrganization: StdOrganization

  strike: Strike

  stringConf: StringConf

  stringDate: StringDate

  stringName: StringName

  styledContent: StyledContent

  sub: Sub

  subArticle: SubArticle
  subjGroup: SubjGroup

  subject: Subject

  subtitle: Subtitle

  suffix: Suffix

  sup: Sup

  supplement: Supplement

  supplementaryMaterial: SupplementaryMaterial

  supportDescription: SupportDescription

  supportGroup: SupportGroup

  supportSource: SupportSource

  surname: Surname

  table: Table

  tableCount: TableCount

  tableWrap: TableWrap

  tableWrapfoot: TableWrapfoot

  tableWrapgroup: TableWrapgroup

  target: Target
  tbody: Tbody
  td: Td

  term: Term

  termHead: TermHead

  texMath: TexMath

  textualForm: TextualForm
  tfoot: Tfoot
  th: Th
  thead: Thead

  timeStamp: TimeStamp

  title: Title

  titleGroup: TitleGroup
  tr: Tr

  transAbstract: TransAbstract

  transSource: TransSource

  transSubtitle: TransSubtitle

  transTitle: TransTitle

  transTitlegroup: TransTitlegroup

  underline: Underline

  underlineEnd: UnderlineEnd

  underlineStart: UnderlineStart

  unstructuredKwdgroup: UnstructuredKwdgroup

  uri: Uri

  verseGroup: VerseGroup

  verseLine: VerseLine

  version: Version

  volume: Volume

  volumeId: VolumeId

  volumeIssuegroup: VolumeIssuegroup

  volumeSeries: VolumeSeries

  wordCount: WordCount

  x: X

  xref: Xref

  year: Year
  text: Text
}

// eslint-disable-next-line
export var docMap: documentMap
export type Content = ValuesType<documentMap>
export type ElementContent = Extract<Content, { type: 'element' }>
// eslint-disable-next-line
export var pMap: PChildrenMap
