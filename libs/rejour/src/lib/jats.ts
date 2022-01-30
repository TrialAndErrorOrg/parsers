import * as Primitive from './xml-primitives'
// Source files:
// http://localhost:3001/jats.xsd

interface Base {
  type: string

  _exists: boolean
  _namespace: string
}
interface AbbrevJournaltitle extends Base {
  type: 'abbrevJournaltitle'
  properties: {
    abbrevType?: string
    id?: string
    specificUse?: string
  }
}

interface Abbrev extends Base {
  type: 'abbrev'
  properties: {
    alt?: string
    contentType?: string
    hreflang?: string
    id?: string
    specificUse?: string
  } /** Definition List: Definition */
  def?: Def[]
}

interface Abstract extends Base {
  type: 'abstract'
  properties: {
    abstractType?: string
    id?: string
    specificUse?: string
  } /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Section */
  sec?: Sec[]
  /** Title */
  title?: Title
}

interface AccessDate extends Base {
  type: 'accessDate'
  properties: {
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }
}

interface Ack extends Base {
  type: 'ack'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abstract */
  abstract?: Abstract[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Section */
  sec?: Sec[]
  subjGroup?: SubjGroup[]
  /** Title */
  title?: Title
}

interface Address extends Base {
  type: 'address'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Address Line */
  addrLine?: AddrLine[]
  /** City: in an Address */
  city?: City[]
  /** Country: in an Address */
  country?: Country[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fax Number: in an Address */
  fax?: Fax[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Phone Number: in an Address */
  phone?: Phone[]
  /** Postal Code: in an Address */
  postalCode?: PostalCode[]
  /** State or Province: in an Address */
  state?: State[]
  /** Uri */
  uri?: Uri[]
}

interface AddrLine extends Base {
  type: 'addrLine'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** City: in an Address */
  city?: City[]
  /** Country: in an Address */
  country?: Country[]
  /** Fax Number: in an Address */
  fax?: Fax[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Phone Number: in an Address */
  phone?: Phone[]
  /** Postal Code: in an Address */
  postalCode?: PostalCode[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** State or Province: in an Address */
  state?: State[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface AffAlternatives extends Base {
  type: 'affAlternatives'
  properties: {
    id?: string
  } /** Affiliation */
  aff: Aff[]
}

interface Aff extends Base {
  type: 'aff'
  properties: {
    contentType?: string
    id?: string
    rid?: string
    specificUse?: string
  } /** Address Line */
  addrLine?: AddrLine[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** City: in an Address */
  city?: City[]
  /** Country: in an Address */
  country?: Country[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fax Number: in an Address */
  fax?: Fax[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Italic */
  italic?: Italic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Overline */
  overline?: Overline[]
  /** Phone Number: in an Address */
  phone?: Phone[]
  /** Postal Code: in an Address */
  postalCode?: PostalCode[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** State or Province: in an Address */
  state?: State[]
  /** Strike Through */
  strike?: Strike[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Alternatives extends Base {
  type: 'alternatives'
  properties: {
    id?: string
  } /** Array (Simple Tabular Array) */
  array: Array[]
  /** Chemical Structure (Display) */
  chemStruct: ChemStruct[]
  /** Code Text */
  code: Code[]
  /** Graphic */
  graphic: Graphic[]
  /** Inline Graphic */
  inlineGraphic: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial: InlineSupplementarymaterial[]
  /** Media Object */
  media: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Preformatted Text */
  preformat: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar: PrivateChar[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterial[]
  /** Table: Table Element .............................. */
  table: Table[]
  /** Tex Math Equation */
  texMath: TexMath[]
  /** Textual Form */
  textualForm: TextualForm[]
}

interface AltText extends Base {
  type: 'altText'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface AltTitle extends Base {
  type: 'altTitle'
  properties: {
    altTitletype?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Annotation extends Base {
  type: 'annotation'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Paragraph */
  p: P[]
}

interface Anonymous extends Base {
  type: 'anonymous'
  properties: {
    id?: string
    specificUse?: string
  }
}

interface AnswerSet extends Base {
  type: 'answerSet'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Alternate Title */
  altTitle?: AltTitle[]
  /** Answer Elements */
  answer: Answer[]
  /** Explanation */
  explanation: Explanation[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p: P[]
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Title */
  title?: Title
}

interface Answer extends Base {
  type: 'answer'
  properties: {
    contentType?: string
    id?: string
    pointerToquestion: string
    specificUse?: string
  } /** Address/Contact Information */
  address: Address[]
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Alternatives For Processing */
  alternatives: Alternatives[]
  /** Answer Elements */
  answer: Answer[]
  /** Answer Set */
  answerSet: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternatives[]
  /** Boxed Text */
  boxedText: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrap[]
  /** Code Text */
  code: Code[]
  /** Definition List */
  defList: DefList[]
  /** Formula, Display */
  dispFormula: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig: Fig[]
  /** Figure Group */
  figGroup: FigGroup[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list: List[]
  /** Media Object */
  media: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p: P[]
  /** Preformatted Text */
  preformat: Preformat[]
  /** Question */
  question: Question[]
  /** Question Wrap */
  questionWrap: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle: RelatedArticle[]
  /** Related Object Information */
  relatedObject: RelatedObject[]
  /** Section */
  sec: Sec[]
  /** Speech */
  speech: Speech[]
  /** Statement, Formal */
  statement: Statement[]
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroup[]
  /** Tex Math Equation */
  texMath: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup: VerseGroup[]
}

interface AppGroup extends Base {
  type: 'appGroup'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abstract */
  abstract?: Abstract[]
  /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Appendix */
  app?: App[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Graphic */
  graphic?: Graphic[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  subjGroup?: SubjGroup[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface App extends Base {
  type: 'app'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic?: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Paragraph */
  p?: P[]
  /** Permissions */
  permissions?: Permissions
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Section */
  sec?: Sec[]
  /** Section Metadata */
  secMeta?: SecMeta
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Title */
  title: Title[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface Array extends Base {
  type: 'array'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
  }
  orientation?: ArrayTypeOrientation
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Attribution */
  attrib?: Attrib[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Graphic */
  graphic?: Graphic[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Media Object */
  media?: Media[]
  /** Permissions */
  permissions?: Permissions[]
  tbody: Tbody
  /** Uri */
  uri?: Uri[]
}

type ArrayTypeOrientation = 'landscape' | 'portrait'
interface _ArrayTypeOrientation extends Primitive._string {
  content: ArrayTypeOrientation
}

interface ArticleCategories extends Base {
  type: 'articleCategories'
  properties: {
    id?: string
  } /** Series Text: Header Text to Describe */
  seriesText?: SeriesText[]
  /** Series Title */
  seriesTitle?: SeriesTitle[]
  subjGroup?: SubjGroup[]
}

interface ArticleId extends Base {
  type: 'articleId'
  properties: {
    assigningAuthority?: string
    customType?: string
    id?: string

    specificUse?: string
  }
  pubIdtype?: ArticleIdTypePubIdtype
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
interface _ArticleIdTypePubIdtype extends Primitive._string {
  content: ArticleIdTypePubIdtype
}

interface ArticleMeta extends Base {
  type: 'articleMeta'
  properties: {
    id?: string
  } /** Abstract */
  abstract?: Abstract[]
  /** Affiliation */
  aff?: Aff[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternatives[]
  /** Article Grouping Data */
  articleCategories?: ArticleCategories
  /** Article Identifier */
  articleId?: ArticleId[]
  /** Article Version */
  articleVersion?: ArticleVersion
  /** Article Version Alternatives */
  articleVersionalternatives?: ArticleVersionalternatives
  /** Author Note Group */
  authorNotes?: AuthorNotes
  /** Conference Information */
  conference?: Conference[]
  /** Contributor Group */
  contribGroup?: ContribGroup[]
  /** Counts */
  counts?: Counts
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroup
  /** Electronic Location Identifier */
  elocationId?: ElocationId
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** First Page */
  fpage?: Fpage
  /** Funding Group */
  fundingGroup?: FundingGroup[]
  /** History: Document History */
  history?: History
  /** Isbn */
  isbn?: Isbn[]
  /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart
  /** Issue Title */
  issueSponsor?: IssueSponsor[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Issue Title Group */
  issueTitlegroup?: IssueTitlegroup[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Last Page */
  lpage?: Lpage
  /** Page Ranges */
  pageRange?: PageRange
  /** Permissions */
  permissions?: Permissions
  /** Product Information */
  product?: Product[]
  /** Publication Date */
  pubDate: PubDate[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailable
  /** Publication History */
  pubHistory?: PubHistory
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Uri For This Same Article Online */
  selfUri?: SelfUri[]
  /** Supplement */
  supplement?: Supplement
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Support Group */
  supportGroup?: SupportGroup[]
  /** Title Group */
  titleGroup: TitleGroup
  /** Translated Abstract */
  transAbstract?: TransAbstract[]
  /** Uri */
  uri?: Uri[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Translated Title Group */
  volumeIssuegroup?: VolumeIssuegroup[]
  /** Volume Series */
  volumeSeries?: VolumeSeries
}

interface ArticleTitle extends Base {
  type: 'articleTitle'
  properties: {
    id?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Article extends Base {
  type: 'article'
  properties: {
    articleType?: string

    id?: string
    specificUse?: string
  }
  dtdVersion?: ArticleTypeDtdVersion /** Back Matter */
  back?: Back
  /** Body of the Article */
  body?: Body
  /** Floats Group */
  floatsGroup?: FloatsGroup
  /** Front Matter */
  front: Front
  /** Processing Metadata Model */
  processingMeta?: ProcessingMeta
  /** Response */
  response?: Response[]
  /** Sub-Article */
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
interface _ArticleTypeDtdVersion extends Primitive._string {
  content: ArticleTypeDtdVersion
}

interface ArticleVersionalternatives extends Base {
  type: 'articleVersionalternatives'
  properties: {
    id?: string
  } /** Article Version */
  articleVersion: ArticleVersion[]
}

interface ArticleVersion extends Base {
  type: 'articleVersion'
  properties: {
    articleVersiontype?: string
    assigningAuthority?: string
    contentType?: string
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
}

interface Attrib extends Base {
  type: 'attrib'
  properties: {
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface AuthorComment extends Base {
  type: 'authorComment'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Paragraph */
  p: P[]
  /** Title */
  title?: Title
}

interface AuthorNotes extends Base {
  type: 'authorNotes'
  properties: {
    id?: string
    rid?: string
    specificUse?: string
  } /** Correspondence Information */
  corresp: Corresp[]
  /** Footnote */
  fn: Fn[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Paragraph */
  p: P[]
  /** Title */
  title?: Title
}

interface AwardDesc extends Base {
  type: 'awardDesc'
  properties: {
    hreflang?: string
    id?: string
  }
}

interface AwardGroup extends Base {
  type: 'awardGroup'
  properties: {
    awardType?: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
  } /** Award Description */
  awardDesc?: AwardDesc
  /** Award Identifier */
  awardId?: AwardId[]
  /** Award Name */
  awardName?: AwardName
  /** Funding Source */
  fundingSource?: FundingSource[]
  /** Principal Award Recipient */
  principalAwardrecipient?: PrincipalAwardrecipient[]
  /** Principal Investigator Recipient */
  principalInvestigator?: PrincipalInvestigator[]
  /** Support Source */
  supportSource?: SupportSource[]
}

interface AwardId extends Base {
  type: 'awardId'
  properties: {
    assigningAuthority?: string
    awardIdtype?: string
    awardType?: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface AwardName extends Base {
  type: 'awardName'
  properties: {
    hreflang?: string
    id?: string
  }
}

interface Back extends Base {
  type: 'back'
  properties: {
    id?: string
  } /** Acknowledgments */
  ack?: Ack[]
  /** Appendix Group */
  appGroup?: AppGroup[]
  /** Biography */
  bio?: Bio[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Notes */
  notes?: Notes[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Section */
  sec?: Sec[]
  /** Title */
  title?: Title[]
}

interface Bio extends Base {
  type: 'bio'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic?: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Section */
  sec?: Sec[]
  /** Section Metadata */
  secMeta?: SecMeta
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface BlockAlternatives extends Base {
  type: 'blockAlternatives'
  properties: {
    id?: string
  } /** Boxed Text */
  boxedText: BoxedText[]
  /** Figure */
  fig: Fig[]
  /** Figure Group */
  figGroup: FigGroup[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Table Wrapper */
  tableWrap: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroup[]
}

interface Body extends Base {
  type: 'body'
  properties: {
    id?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Graphic */
  graphic?: Graphic[]
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Section */
  sec?: Sec[]
  /** Signature Block */
  sigBlock?: SigBlock
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface Bold extends Base {
  type: 'bold'
  properties: {
    id?: string
    specificUse?: string
  }
  toggle?: BoldTypeToggle
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type BoldTypeToggle = 'no' | 'yes'
interface _BoldTypeToggle extends Primitive._string {
  content: BoldTypeToggle
}

interface BoxedText extends Base {
  type: 'boxedText'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
  }
  orientation?: BoxedTextTypeOrientation
  position?: BoxedTextTypePosition

  /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Attribution */
  attrib?: Attrib[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic?: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Permissions */
  permissions?: Permissions[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Section */
  sec?: Sec[]
  /** Section Metadata */
  secMeta?: SecMeta
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

type BoxedTextTypeOrientation = 'landscape' | 'portrait'
interface _BoxedTextTypeOrientation extends Primitive._string {
  content: BoxedTextTypeOrientation
}

type BoxedTextTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _BoxedTextTypePosition extends Primitive._string {
  content: BoxedTextTypePosition
}

interface Break extends Base {
  type: 'break'
  properties: {
    id?: string
  }
}

interface Caption extends Base {
  type: 'caption'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
    style?: string
  } /** Paragraph */
  p?: P[]
  /** Title */
  title?: Title
}

interface ChapterTitle extends Base {
  type: 'chapterTitle'
  properties: {
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface ChemStruct extends Base {
  type: 'chemStruct'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    specificUse?: string
  } /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Graphic */
  graphic?: Graphic[]
  /** Italic */
  italic?: Italic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** List */
  list?: List[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Media Object */
  media?: Media[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface ChemStructwrap extends Base {
  type: 'chemStructwrap'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
  }
  orientation?: ChemStructwrapTypeOrientation
  position?: ChemStructwrapTypePosition
  /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Alternatives For Processing */
  alternatives: Alternatives[]
  /** Attribution */
  attrib?: Attrib[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption
  /** Chemical Structure (Display) */
  chemStruct: ChemStruct[]
  /** Code Text */
  code: Code[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Graphic */
  graphic: Graphic[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Long Description */
  longDesc?: LongDesc[]
  /** Media Object */
  media: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Permissions */
  permissions?: Permissions[]
  /** Preformatted Text */
  preformat: Preformat[]
  subjGroup?: SubjGroup[]
  /** Textual Form */
  textualForm: TextualForm[]
  /** Uri */
  uri?: Uri[]
}

type ChemStructwrapTypeOrientation = 'landscape' | 'portrait'
interface _ChemStructwrapTypeOrientation extends Primitive._string {
  content: ChemStructwrapTypeOrientation
}

type ChemStructwrapTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _ChemStructwrapTypePosition extends Primitive._string {
  content: ChemStructwrapTypePosition
}

interface CitationAlternatives extends Base {
  type: 'citationAlternatives'
  properties: {
    id?: string
  } /** Element Citation */
  elementCitation: ElementCitation[]
  /** Mixed Citation */
  mixedCitation: MixedCitation[]
  /** Nlm Citation Model */
  nlmCitation: NlmCitation[]
  /** Object Identifier */
  objectId?: ObjectId[]
}

interface City extends Base {
  type: 'city'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Code extends Base {
  type: 'code'
  properties: {
    codeType?: string
    codeVersion?: string
    platforms?: string

    specificUse?: string

    id?: string
    language?: string
    languageVersion?: string
  }
  executable?: CodeTypeExecutable
  orientation?: CodeTypeOrientation

  position?: CodeTypePosition /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Bold */
  bold?: Bold[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type CodeTypeExecutable = 'no' | 'yes'
interface _CodeTypeExecutable extends Primitive._string {
  content: CodeTypeExecutable
}

type CodeTypeOrientation = 'landscape' | 'portrait'
interface _CodeTypeOrientation extends Primitive._string {
  content: CodeTypeOrientation
}

type CodeTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _CodeTypePosition extends Primitive._string {
  content: CodeTypePosition
}

interface Colgroup extends Base {
  type: 'colgroup'
  align?: ColgroupTypeAlign
  properties: {
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    span?: string
    style?: string

    width?: string
  }
  valign?: ColgroupTypeValign
  col?: Col[]
}

type ColgroupTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _ColgroupTypeAlign extends Primitive._string {
  content: ColgroupTypeAlign
}

type ColgroupTypeValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _ColgroupTypeValign extends Primitive._string {
  content: ColgroupTypeValign
}

interface CollabAlternatives extends Base {
  type: 'collabAlternatives'
  properties: {
    id?: string
  } /** Collaborative (Group) Author */
  collab: Collab[]
}

interface Collab extends Base {
  type: 'collab'
  properties: {
    collabType?: string
    hreflang?: string
    id?: string
    specificUse?: string
    symbol?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Address Line */
  addrLine?: AddrLine[]
  /** Address/Contact Information */
  address?: Address[]
  /** Affiliation */
  aff?: Aff[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternatives[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Author Comment */
  authorComment?: AuthorComment[]
  /** Biography */
  bio?: Bio[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** City: in an Address */
  city?: City[]
  /** Contributor Group */
  contribGroup?: ContribGroup[]
  /** Country: in an Address */
  country?: Country[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fax Number: in an Address */
  fax?: Fax[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** On Behalf of */
  onBehalfof?: OnBehalfof[]
  /** Overline */
  overline?: Overline[]
  /** Phone Number: in an Address */
  phone?: Phone[]
  /** Postal Code: in an Address */
  postalCode?: PostalCode[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Role or Function Title of Contributor */
  role?: Role[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** State or Province: in an Address */
  state?: State[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Col extends Base {
  type: 'col'
  align?: ColTypeAlign
  properties: {
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    span?: string
    style?: string

    width?: string
  }
  valign?: ColTypeValign
}

type ColTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _ColTypeAlign extends Primitive._string {
  content: ColTypeAlign
}

type ColTypeValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _ColTypeValign extends Primitive._string {
  content: ColTypeValign
}

interface Comment extends Base {
  type: 'comment'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface CompoundKwdpart extends Base {
  type: 'compoundKwdpart'
  properties: {
    contentType?: string
    id?: string
  } /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Underline */
  underline?: Underline[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface CompoundKwd extends Base {
  type: 'compoundKwd'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Compound Keyword Part */
  compoundKwdpart: CompoundKwdpart[]
}

interface CompoundSubjectpart extends Base {
  type: 'compoundSubjectpart'
  properties: {
    contentType?: string
    id?: string
  } /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface CompoundSubject extends Base {
  type: 'compoundSubject'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Compound Subject Part Name */
  compoundSubjectpart: CompoundSubjectpart[]
}

interface ConfAcronym extends Base {
  type: 'confAcronym'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface ConfDate extends Base {
  type: 'confDate'
  properties: {
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }
}

interface Conference extends Base {
  type: 'conference'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    specificUse?: string
  } /** Conference Acronym */
  confAcronym: ConfAcronym[]
  /** Conference Date */
  confDate: ConfDate
  /** Conference Location */
  confLoc?: ConfLoc
  /** Conference Name */
  confName: ConfName[]
  /** Conference Number */
  confNum?: ConfNum
  /** Conference Sponsor */
  confSponsor?: ConfSponsor[]
  /** Conference Theme */
  confTheme?: ConfTheme
}

interface ConfLoc extends Base {
  type: 'confLoc'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Address Line */
  addrLine?: AddrLine[]
  /** City: in an Address */
  city?: City[]
  /** Country: in an Address */
  country?: Country[]
  /** Fax Number: in an Address */
  fax?: Fax[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Phone Number: in an Address */
  phone?: Phone[]
  /** Postal Code: in an Address */
  postalCode?: PostalCode[]
  /** State or Province: in an Address */
  state?: State[]
}

interface ConfName extends Base {
  type: 'confName'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface ConfNum extends Base {
  type: 'confNum'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface ConfSponsor extends Base {
  type: 'confSponsor'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
}

interface ConfTheme extends Base {
  type: 'confTheme'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface ContribGroup extends Base {
  type: 'contribGroup'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Affiliation */
  aff?: Aff[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternatives[]
  /** Author Comment */
  authorComment?: AuthorComment[]
  /** Biography */
  bio?: Bio[]
  /** Contributor */
  contrib: Contrib[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** On Behalf of */
  onBehalfof?: OnBehalfof[]
  /** Role or Function Title of Contributor */
  role?: Role[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface ContribId extends Base {
  type: 'contribId'
  properties: {
    assigningAuthority?: string

    contentType?: string
    contribIdtype?: string
    id?: string
    specificUse?: string
  }
  authenticated?: ContribIdTypeAuthenticated
}

type ContribIdTypeAuthenticated = 'false' | 'true'
interface _ContribIdTypeAuthenticated extends Primitive._string {
  content: ContribIdTypeAuthenticated
}

interface Contrib extends Base {
  type: 'contrib'
  properties: {
    contribType?: string

    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
  }
  corresp?: ContribTypeCorresp
  deceased?: ContribTypeDeceased
  equalContrib?: ContribTypeEqualContrib
  /** Address/Contact Information */
  address?: Address[]
  /** Affiliation */
  aff?: Aff[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternatives[]
  /** Anonymous */
  anonymous?: Anonymous[]
  /** Author Comment */
  authorComment?: AuthorComment[]
  /** Biography */
  bio?: Bio[]
  /** Collaborative (Group) Author */
  collab?: Collab[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternatives[]
  /** Contributor Identifier */
  contribId?: ContribId[]
  /** Degree(s) */
  degrees?: Degrees[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Name of Person (Structured) */
  name?: Name[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternatives[]
  /** On Behalf of */
  onBehalfof?: OnBehalfof[]
  /** Role or Function Title of Contributor */
  role?: Role[]
  /** Name of Person (Unstructured) */
  stringName?: StringName[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type ContribTypeCorresp = 'no' | 'yes'
interface _ContribTypeCorresp extends Primitive._string {
  content: ContribTypeCorresp
}

type ContribTypeDeceased = 'no' | 'yes'
interface _ContribTypeDeceased extends Primitive._string {
  content: ContribTypeDeceased
}

type ContribTypeEqualContrib = 'no' | 'yes'
interface _ContribTypeEqualContrib extends Primitive._string {
  content: ContribTypeEqualContrib
}

interface ContributedResourcegroup extends Base {
  type: 'contributedResourcegroup'
  properties: {
    id?: string
    resourceType?: string
    specificUse?: string
  } /** Award Group */
  awardGroup?: AwardGroup[]
  /** Resource Group */
  resourceGroup?: ResourceGroup[]
  /** Support Description */
  supportDescription?: SupportDescription[]
}

interface CopyrightHolder extends Base {
  type: 'copyrightHolder'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
}

interface CopyrightStatement extends Base {
  type: 'copyrightStatement'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
}

interface CopyrightYear extends Base {
  type: 'copyrightYear'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Corresp extends Base {
  type: 'corresp'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Address Line */
  addrLine?: AddrLine[]
  /** Bold */
  bold?: Bold[]
  /** City: in an Address */
  city?: City[]
  /** Country: in an Address */
  country?: Country[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fax Number: in an Address */
  fax?: Fax[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Italic */
  italic?: Italic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Phone Number: in an Address */
  phone?: Phone[]
  /** Postal Code: in an Address */
  postalCode?: PostalCode[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** State or Province: in an Address */
  state?: State[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
}

interface Country extends Base {
  type: 'country'
  properties: {
    contentType?: string
    country?: string
    id?: string
    specificUse?: string
  }
}

interface Counts extends Base {
  type: 'counts'
  properties: {
    id?: string
  } /** Count */
  count?: Count[]
  /** Equation Count */
  equationCount?: EquationCount
  /** Figure Count */
  figCount?: FigCount
  /** Page Count */
  pageCount?: PageCount
  /** Reference Count */
  refCount?: RefCount
  /** Table Count */
  tableCount?: TableCount
  /** Word Count */
  wordCount?: WordCount
}

interface Count extends Base {
  type: 'count'
  properties: {
    count: string
    countType: string
    id?: string
  }
}

interface CustomMetagroup extends Base {
  type: 'customMetagroup'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Custom Metadata */
  customMeta: CustomMeta[]
}

interface CustomMeta extends Base {
  type: 'customMeta'
  properties: {
    assigningAuthority?: string
    hreflang?: string
    id?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Metadata Data Name For Custom Metadata */
  metaName: MetaName
  /** Metadata Data Value For Custom Metadata */
  metaValue: MetaValue
}

interface DataTitle extends Base {
  type: 'dataTitle'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
}

interface DateIncitation extends Base {
  type: 'dateIncitation'
  properties: {
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  } /** Day */
  day?: Day[]
  /** Era */
  era?: Era[]
  /** Month */
  month?: Month[]
  /** Season */
  season?: Season[]
  /** Year */
  year?: Year[]
}

interface Date extends Base {
  type: 'date'
  properties: {
    calendar?: string
    dateType?: string
    id?: string
    iso8601Date?: string
    publicationFormat?: string
    specificUse?: string
  } /** Day */
  day?: Day
  /** Era */
  era?: Era
  /** Month */
  month?: Month
  /** Season */
  season?: Season
  /** Year */
  year: Year
}

interface Day extends Base {
  type: 'day'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface DefHead extends Base {
  type: 'defHead'
  properties: {
    id?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface DefItem extends Base {
  type: 'defItem'
  properties: {
    id?: string
    specificUse?: string
  } /** Definition List: Definition */
  def?: Def[]
  /** Definition List: Term */
  term: Term
}

interface DefList extends Base {
  type: 'defList'
  properties: {
    continuedFrom?: string
    id?: string
    listContent?: string
    listType?: string
    prefixWord?: string
    specificUse?: string
  } /** Definition List: Definition Head */
  defHead?: DefHead
  /** Definition List: Definition Item */
  defItem?: DefItem[]
  /** Definition List */
  defList?: DefList[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Definition List: Term Head */
  termHead?: TermHead
  /** Title */
  title?: Title
}

interface Def extends Base {
  type: 'def'
  properties: {
    id?: string
    rid?: string
    specificUse?: string
  } /** Paragraph */
  p: P[]
}

interface Degrees extends Base {
  type: 'degrees'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface DispFormulagroup extends Base {
  type: 'dispFormulagroup'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Long Description */
  longDesc?: LongDesc[]
  /** Object Identifier */
  objectId?: ObjectId[]
  subjGroup?: SubjGroup[]
  /** Uri */
  uri?: Uri[]
}

interface DispFormula extends Base {
  type: 'dispFormula'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Code Text */
  code?: Code[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Graphic */
  graphic?: Graphic[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Media Object */
  media?: Media[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Overline */
  overline?: Overline[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  subjGroup?: SubjGroup[]
  /** Superscript */
  sup?: Sup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
}

interface DispQuote extends Base {
  type: 'dispQuote'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Attribution */
  attrib?: Attrib[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Graphic */
  graphic?: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Paragraph */
  p?: P[]
  /** Permissions */
  permissions?: Permissions[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface Edition extends Base {
  type: 'edition'
  properties: {
    contentType?: string
    designator?: string
    id?: string
    specificUse?: string
  } /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
}

interface ElementCitation extends Base {
  type: 'elementCitation'
  properties: {
    hreflang?: string
    id?: string
    publicationFormat?: string
    publicationType?: string
    publisherType?: string
    specificUse?: string
    useType?: string
  } /** Abbreviation or Acronym */
  abbrev: Abbrev[]
  /** Alternatives For Processing */
  alternatives: Alternatives[]
  /** Annotation in a Citation */
  annotation: Annotation[]
  /** Article Title */
  articleTitle: ArticleTitle[]
  /** Bold */
  bold: Bold[]
  /** Chapter Title in a Citation */
  chapterTitle: ChapterTitle[]
  /** Chemical Structure (Display) */
  chemStruct: ChemStruct[]
  /** Collaborative (Group) Author */
  collab: Collab[]
  /** Collaboration Alternatives */
  collabAlternatives: CollabAlternatives[]
  /** Comment in a Citation */
  comment: Comment[]
  /** Conference Acronym */
  confAcronym: ConfAcronym[]
  /** Conference Date */
  confDate: ConfDate[]
  /** Conference Location */
  confLoc: ConfLoc[]
  /** Conference Name */
  confName: ConfName[]
  /** Conference Sponsor */
  confSponsor: ConfSponsor[]
  /** Data Title in a Citation */
  dataTitle: DataTitle[]
  /** Date */
  date: Date[]
  /** Date Inside Citation */
  dateIncitation: DateIncitation[]
  /** Day */
  day: Day[]
  /** Edition Statement, Cited */
  edition: Edition[]
  /** Electronic Location Identifier */
  elocationId: ElocationId[]
  /** Email Address */
  email: Email[]
  /** Et Al */
  etal: Etal[]
  /** External Link */
  extLink: ExtLink[]
  /** Fixed Case */
  fixedCase: FixedCase[]
  /** First Page */
  fpage: Fpage[]
  /** Government Report, Cited */
  gov: Gov[]
  /** Index Term */
  indexTerm: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia: InlineMedia[]
  /** Institution Name: in an Address */
  institution: Institution[]
  /** Institution Wrapper */
  institutionWrap: InstitutionWrap[]
  /** Isbn */
  isbn: Isbn[]
  /** Issn */
  issn: Issn[]
  /** Issn Linking */
  issnL: IssnL[]
  /** Issue Number */
  issue: Issue[]
  /** Issue Identifier */
  issueId: IssueId[]
  /** Issue Part */
  issuePart: IssuePart[]
  /** Issue Title */
  issueTitle: IssueTitle[]
  /** Italic */
  italic: Italic[]
  /** Label of a Figure, Reference, Etc. */
  label: Label[]
  /** Last Page */
  lpage: Lpage[]
  /** Milestone End */
  milestoneEnd: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace: Monospace[]
  /** Month */
  month: Month[]
  /** Name of Person (Structured) */
  name: Name[]
  /** Name Alternatives */
  nameAlternatives: NameAlternatives[]
  /** Named Special (Subject) Content */
  namedContent: NamedContent[]
  /** Object Identifier */
  objectId: ObjectId[]
  /** Overline */
  overline: Overline[]
  /** Page Ranges */
  pageRange: PageRange[]
  /** Part Title in a Citation */
  partTitle: PartTitle[]
  /** Patent Number, Cited */
  patent: Patent[]
  /** Person Group For a Cited Publication */
  personGroup: PersonGroup[]
  /** Private Character (Custom or Unicode) */
  privateChar: PrivateChar[]
  /** Publication Identifier For a Cited Publication */
  pubId: PubId[]
  /** Publisher's Location */
  publisherLoc: PublisherLoc[]
  /** Publisher's Name */
  publisherName: PublisherName[]
  /** Role or Function Title of Contributor */
  role: Role[]
  /** Roman */
  roman: Roman[]
  /** Ruby Wrapper */
  ruby: Ruby[]
  /** Sans Serif */
  sansSerif: SansSerif[]
  /** Small Caps */
  sc: Sc[]
  /** Season */
  season: Season[]
  /** Series */
  series: Series[]
  /** Size */
  size: Size[]
  /** Source */
  source: Source[]
  /** Standard, Cited */
  std: Std[]
  /** Strike Through */
  strike: Strike[]
  /** Date As a String */
  stringDate: StringDate[]
  /** Name of Person (Unstructured) */
  stringName: StringName[]
  /** Styled Special (Subject) Content */
  styledContent: StyledContent[]
  /** Subscript */
  sub: Sub[]
  /** Superscript */
  sup: Sup[]
  /** Supplement */
  supplement: Supplement[]
  /** Translated Source */
  transSource: TransSource[]
  /** Translated Title */
  transTitle: TransTitle[]
  /** Underline */
  underline: Underline[]
  /** Uri */
  uri: Uri[]
  /** Version Statement, Cited */
  version: Version[]
  /** Volume Number */
  volume: Volume[]
  /** Volume Identifier */
  volumeId: VolumeId[]
  /** Volume Series */
  volumeSeries: VolumeSeries[]
  /** Year */
  year: Year[]
}

interface ElocationId extends Base {
  type: 'elocationId'
  properties: {
    contentType?: string
    id?: string
    seq?: string
    specificUse?: string
  }
}

interface Email extends Base {
  type: 'email'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    specificUse?: string
  }
}

interface EquationCount extends Base {
  type: 'equationCount'
  properties: {
    count: string
    id?: string
  }
}

interface Era extends Base {
  type: 'era'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Etal extends Base {
  type: 'etal'
  properties: {
    id?: string
    specificUse?: string
  }
}

interface EventDesc extends Base {
  type: 'eventDesc'
  properties: {
    id?: string
    specificUse?: string
  } /** Article Identifier */
  articleId?: ArticleId[]
  /** Article Version */
  articleVersion?: ArticleVersion[]
  /** Article Version Alternatives */
  articleVersionalternatives?: ArticleVersionalternatives[]
  /** Date */
  date?: Date[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  issn?: Issn[]
  /** Issn Linking */
  issnL?: IssnL[]
  /** Publication Date */
  pubDate?: PubDate[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailable[]
  /** Date As a String */
  stringDate?: StringDate[]
  /** Uri */
  uri?: Uri[]
}

interface Event extends Base {
  type: 'event'
  properties: {
    eventType?: string
    id?: string
    specificUse?: string
  } /** Article Identifier */
  articleId?: ArticleId[]
  /** Article Version */
  articleVersion?: ArticleVersion
  /** Article Version Alternatives */
  articleVersionalternatives?: ArticleVersionalternatives
  /** Date */
  date?: Date[]
  /** Event Description */
  eventDesc?: EventDesc
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  issn?: Issn[]
  /** Issn Linking */
  issnL?: IssnL
  /** Notes */
  notes?: Notes[]
  /** Permissions */
  permissions?: Permissions
  /** Publication Date */
  pubDate?: PubDate[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailable
  /** Uri For This Same Article Online */
  selfUri?: SelfUri[]
}

interface Explanation extends Base {
  type: 'explanation'
  properties: {
    contentType?: string
    id?: string
    pointerToexplained: string
    specificUse?: string
  } /** Address/Contact Information */
  address: Address[]
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Alternatives For Processing */
  alternatives: Alternatives[]
  /** Answer Elements */
  answer: Answer[]
  /** Answer Set */
  answerSet: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternatives[]
  /** Boxed Text */
  boxedText: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrap[]
  /** Code Text */
  code: Code[]
  /** Definition List */
  defList: DefList[]
  /** Formula, Display */
  dispFormula: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote: DispQuote[]
  /** Figure */
  fig: Fig[]
  /** Figure Group */
  figGroup: FigGroup[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list: List[]
  /** Media Object */
  media: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p: P[]
  /** Preformatted Text */
  preformat: Preformat[]
  /** Question */
  question: Question[]
  /** Question Wrap */
  questionWrap: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle: RelatedArticle[]
  /** Related Object Information */
  relatedObject: RelatedObject[]
  /** Section */
  sec: Sec[]
  /** Speech */
  speech: Speech[]
  /** Statement, Formal */
  statement: Statement[]
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroup[]
  /** Tex Math Equation */
  texMath: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup: VerseGroup[]
}

interface ExtendedBy extends Base {
  type: 'extendedBy'
  properties: {
    assigningAuthority?: string
    designator?: string
    hreflang?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
}

interface ExtLink extends Base {
  type: 'extLink'
  properties: {
    assigningAuthority?: string
    extLinktype?: string
    hreflang?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface Fax extends Base {
  type: 'fax'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface FigCount extends Base {
  type: 'figCount'
  properties: {
    count: string
    id?: string
  }
}

interface FigGroup extends Base {
  type: 'figGroup'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
  }
  orientation?: FigGroupTypeOrientation
  position?: FigGroupTypePosition
  /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Figure */
  fig?: Fig[]
  /** Graphic */
  graphic?: Graphic[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Media Object */
  media?: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  subjGroup?: SubjGroup[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type FigGroupTypeOrientation = 'landscape' | 'portrait'
interface _FigGroupTypeOrientation extends Primitive._string {
  content: FigGroupTypeOrientation
}

type FigGroupTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _FigGroupTypePosition extends Primitive._string {
  content: FigGroupTypePosition
}

interface Fig extends Base {
  type: 'fig'
  properties: {
    figType?: string
    id?: string

    specificUse?: string
  }
  orientation?: FigTypeOrientation
  position?: FigTypePosition
  /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Attribution */
  attrib?: Attrib[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Graphic */
  graphic?: Graphic[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** List */
  list?: List[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Media Object */
  media?: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Permissions */
  permissions?: Permissions[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  subjGroup?: SubjGroup[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Uri */
  uri?: Uri[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type FigTypeOrientation = 'landscape' | 'portrait'
interface _FigTypeOrientation extends Primitive._string {
  content: FigTypeOrientation
}

type FigTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _FigTypePosition extends Primitive._string {
  content: FigTypePosition
}

interface FixedCase extends Base {
  type: 'fixedCase'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface FloatsGroup extends Base {
  type: 'floatsGroup'
  properties: {
    id?: string
  } /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Graphic */
  graphic?: Graphic[]
  /** Media Object */
  media?: Media[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
}

interface FnGroup extends Base {
  type: 'fnGroup'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Footnote */
  fn: Fn[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Title */
  title?: Title
}

interface Fn extends Base {
  type: 'fn'
  properties: {
    customType?: string

    id?: string
    specificUse?: string
    symbol?: string
  }
  fnType?: FnTypeFnType /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Paragraph */
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
interface _FnTypeFnType extends Primitive._string {
  content: FnTypeFnType
}

interface Fpage extends Base {
  type: 'fpage'
  properties: {
    contentType?: string
    id?: string
    seq?: string
    specificUse?: string
  }
}

interface FrontStub extends Base {
  type: 'frontStub'
  properties: {
    id?: string
  } /** Abstract */
  abstract?: Abstract[]
  /** Affiliation */
  aff?: Aff[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternatives[]
  /** Article Grouping Data */
  articleCategories?: ArticleCategories
  /** Article Identifier */
  articleId?: ArticleId[]
  /** Article Version */
  articleVersion?: ArticleVersion
  /** Article Version Alternatives */
  articleVersionalternatives?: ArticleVersionalternatives
  /** Author Note Group */
  authorNotes?: AuthorNotes
  /** Conference Information */
  conference?: Conference[]
  /** Contributor Group */
  contribGroup?: ContribGroup[]
  /** Counts */
  counts?: Counts
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroup
  /** Electronic Location Identifier */
  elocationId?: ElocationId
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** First Page */
  fpage?: Fpage
  /** Funding Group */
  fundingGroup?: FundingGroup[]
  /** History: Document History */
  history?: History
  /** Isbn */
  isbn?: Isbn[]
  /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart
  /** Issue Title */
  issueSponsor?: IssueSponsor[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Issue Title Group */
  issueTitlegroup?: IssueTitlegroup[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Last Page */
  lpage?: Lpage
  /** Page Ranges */
  pageRange?: PageRange
  /** Permissions */
  permissions?: Permissions
  /** Product Information */
  product?: Product[]
  /** Publication Date */
  pubDate?: PubDate[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailable
  /** Publication History */
  pubHistory?: PubHistory
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Uri For This Same Article Online */
  selfUri?: SelfUri[]
  /** Supplement */
  supplement?: Supplement
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Support Group */
  supportGroup?: SupportGroup[]
  /** Title Group */
  titleGroup?: TitleGroup
  /** Translated Abstract */
  transAbstract?: TransAbstract[]
  /** Uri */
  uri?: Uri[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Translated Title Group */
  volumeIssuegroup?: VolumeIssuegroup[]
  /** Volume Series */
  volumeSeries?: VolumeSeries
}

interface Front extends Base {
  type: 'front'
  properties: {
    id?: string
  } /** Article Metadata */
  articleMeta: ArticleMeta
  /** Journal Metadata */
  journalMeta: JournalMeta
  /** Notes */
  notes?: Notes
}

interface FundingGroup extends Base {
  type: 'fundingGroup'
  properties: {
    id?: string
    specificUse?: string
  } /** Award Group */
  awardGroup?: AwardGroup[]
  /** Funding Statement */
  fundingStatement?: FundingStatement[]
  /** Open Access */
  openAccess?: OpenAccess[]
}

interface FundingSource extends Base {
  type: 'fundingSource'
  properties: {
    country?: string
    hreflang?: string
    id?: string
    rid?: string
    sourceType?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface FundingStatement extends Base {
  type: 'fundingStatement'
  properties: {
    id?: string
    rid?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
}

interface GivenNames extends Base {
  type: 'givenNames'
  properties: {
    id?: string
    initials?: string
  }
}

interface Glossary extends Base {
  type: 'glossary'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic?: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface GlyphData extends Base {
  type: 'glyphData'
  properties: {
    fontchar?: string
    fontname?: string
    format?: string
    id?: string
    resolution?: string
    xSize?: string
    ySize?: string
  }
}

interface GlyphRef extends Base {
  type: 'glyphRef'
  properties: {
    glyphData?: string
    id?: string
  }
}

interface Gov extends Base {
  type: 'gov'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface Graphic extends Base {
  type: 'graphic'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string

    specificUse?: string
  }
  orientation?: GraphicTypeOrientation
  position?: GraphicTypePosition
  /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Attribution */
  attrib?: Attrib[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Permissions */
  permissions?: Permissions[]
  subjGroup?: SubjGroup[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type GraphicTypeOrientation = 'landscape' | 'portrait'
interface _GraphicTypeOrientation extends Primitive._string {
  content: GraphicTypeOrientation
}

type GraphicTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _GraphicTypePosition extends Primitive._string {
  content: GraphicTypePosition
}

interface History extends Base {
  type: 'history'
  properties: {
    id?: string
  } /** Date */
  date: Date[]
}

interface Hr extends Base {
  type: 'hr'
  properties: {
    id?: string
  }
}

interface IndexTermrangeend extends Base {
  type: 'indexTermrangeend'
  properties: {
    id?: string
    rid: string
  }
}

interface IndexTerm extends Base {
  type: 'indexTerm'
  properties: {
    contentType?: string
    id?: string
    indexType?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Index Term */
  indexTerm: IndexTerm
  /** See */
  see?: See[]
  /** See-Also Term */
  seeAlso?: SeeAlso[]
  /** Definition List: Term */
  term: Term
}

interface InlineFormula extends Base {
  type: 'inlineFormula'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
}

interface InlineGraphic extends Base {
  type: 'inlineGraphic'
  properties: {
    baselineShift?: string
    contentType?: string
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string
    specificUse?: string
  } /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Long Description */
  longDesc?: LongDesc[]
}

interface InlineMedia extends Base {
  type: 'inlineMedia'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Bold */
  bold?: Bold[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
}

interface InlineSupplementarymaterial extends Base {
  type: 'inlineSupplementarymaterial'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string
    specificUse?: string
  } /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Bold */
  bold?: Bold[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
}

interface InstitutionId extends Base {
  type: 'institutionId'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    institutionIdtype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
}

interface Institution extends Base {
  type: 'institution'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    specificUse?: string
  } /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
}

interface InstitutionWrap extends Base {
  type: 'institutionWrap'
  properties: {
    id?: string
  } /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Identifier */
  institutionId?: InstitutionId[]
}

interface Isbn extends Base {
  type: 'isbn'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    publicationFormat?: string
    specificUse?: string
  }
}

interface IssnL extends Base {
  type: 'issnL'
  properties: {
    assigningAuthority?: string
    id?: string
    specificUse?: string
  }
}

interface Issn extends Base {
  type: 'issn'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    pubType?: string
    publicationFormat?: string
    specificUse?: string
  }
}

interface IssueId extends Base {
  type: 'issueId'
  properties: {
    assigningAuthority?: string
    contentType?: string
    hreflang?: string
    id?: string
    pubIdtype?: string
    specificUse?: string
  }
}

interface IssuePart extends Base {
  type: 'issuePart'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface IssueSponsor extends Base {
  type: 'issueSponsor'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface IssueSubtitle extends Base {
  type: 'issueSubtitle'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface IssueTitlegroup extends Base {
  type: 'issueTitlegroup'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Issue Subtitle */
  issueSubtitle?: IssueSubtitle[]
  /** Issue Title */
  issueTitle: IssueTitle
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroup[]
}

interface IssueTitle extends Base {
  type: 'issueTitle'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Issue extends Base {
  type: 'issue'
  properties: {
    contentType?: string
    id?: string
    seq?: string
    specificUse?: string
  }
}

interface Italic extends Base {
  type: 'italic'
  properties: {
    id?: string
    specificUse?: string
  }
  toggle?: ItalicTypeToggle
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type ItalicTypeToggle = 'no' | 'yes'
interface _ItalicTypeToggle extends Primitive._string {
  content: ItalicTypeToggle
}

interface JournalId extends Base {
  type: 'journalId'
  properties: {
    assigningAuthority?: string
    id?: string
    journalIdtype?: string
    specificUse?: string
  }
}

interface JournalMeta extends Base {
  type: 'journalMeta'
  properties: {
    id?: string
  } /** Affiliation */
  aff?: Aff[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternatives[]
  /** Contributor Group */
  contribGroup?: ContribGroup[]
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  issn: Issn[]
  /** Issn Linking */
  issnL?: IssnL
  /** Journal Identifier */
  journalId: JournalId[]
  /** Journal Title Group */
  journalTitlegroup?: JournalTitlegroup[]
  /** Notes */
  notes?: Notes[]
  /** Publisher */
  publisher?: Publisher
  /** Uri For This Same Article Online */
  selfUri?: SelfUri[]
}

interface JournalSubtitle extends Base {
  type: 'journalSubtitle'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface JournalTitlegroup extends Base {
  type: 'journalTitlegroup'
  properties: {
    contentType?: string
    id?: string
  } /** Abbreviated Journal Title */
  abbrevJournaltitle?: AbbrevJournaltitle[]
  /** Journal Subtitle */
  journalSubtitle?: JournalSubtitle[]
  /** Journal Title (Full) */
  journalTitle?: JournalTitle[]
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroup[]
}

interface JournalTitle extends Base {
  type: 'journalTitle'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface KwdGroup extends Base {
  type: 'kwdGroup'
  properties: {
    assigningAuthority?: string
    id?: string
    kwdGrouptype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  } /** Compound Keyword */
  compoundKwd: CompoundKwd[]
  /** Keyword */
  kwd: Kwd[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Nested Keyword */
  nestedKwd: NestedKwd[]
  /** Title */
  title?: Title
}

interface Kwd extends Base {
  type: 'kwd'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface Label extends Base {
  type: 'label'
  properties: {
    alt?: string
    id?: string
  } /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface LicenseP extends Base {
  type: 'licenseP'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Award Identifier */
  awardId?: AwardId[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Bold */
  bold?: Bold[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternatives[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Element Citation */
  elementCitation?: ElementCitation[]
  /** Email Address */
  email?: Email[]
  /** Explanation */
  explanation?: Explanation[]
  /** External Link */
  extLink?: ExtLink[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Funding Source */
  fundingSource?: FundingSource[]
  /** Graphic */
  graphic?: Graphic[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Mixed Citation */
  mixedCitation?: MixedCitation[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitation[]
  /** Open Access */
  openAccess?: OpenAccess[]
  /** Overline */
  overline?: Overline[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Price */
  price?: Price[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface License extends Base {
  type: 'license'
  properties: {
    hreflang?: string
    id?: string
    licenseType?: string
    specificUse?: string
  } /** License Paragraph */
  licenseP: LicenseP[]
}

interface ListItem extends Base {
  type: 'listItem'
  properties: {
    id?: string
    specificUse?: string
  } /** Definition List */
  defList: DefList[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list: List[]
  /** Paragraph */
  p: P[]
  /** Title */
  title?: Title
}

interface List extends Base {
  type: 'list'
  properties: {
    continuedFrom?: string
    id?: string
    listContent?: string
    listType?: string
    prefixWord?: string
    specificUse?: string
  } /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List Item */
  listItem: ListItem[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Title */
  title?: Title
}

interface LongDesc extends Base {
  type: 'longDesc'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    specificUse?: string
  }
}

interface Lpage extends Base {
  type: 'lpage'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Media extends Base {
  type: 'media'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string

    specificUse?: string
  }
  orientation?: MediaTypeOrientation
  position?: MediaTypePosition
  /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Attribution */
  attrib?: Attrib[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Permissions */
  permissions?: Permissions[]
  subjGroup?: SubjGroup[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type MediaTypeOrientation = 'landscape' | 'portrait'
interface _MediaTypeOrientation extends Primitive._string {
  content: MediaTypeOrientation
}

type MediaTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _MediaTypePosition extends Primitive._string {
  content: MediaTypePosition
}

interface MetaName extends Base {
  type: 'metaName'
  properties: {
    id?: string
  }
}

interface MetaValue extends Base {
  type: 'metaValue'
  properties: {
    id?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface MilestoneEnd extends Base {
  type: 'milestoneEnd'
  properties: {
    contentType?: string
    id?: string
    rationale?: string
    rid?: string
    specificUse?: string
  }
}

interface MilestoneStart extends Base {
  type: 'milestoneStart'
  properties: {
    contentType?: string
    id?: string
    rationale?: string
    rid?: string
    specificUse?: string
  }
}

interface MixedCitation extends Base {
  type: 'mixedCitation'
  properties: {
    hreflang?: string
    id?: string
    publicationFormat?: string
    publicationType?: string
    publisherType?: string
    specificUse?: string
    useType?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Annotation in a Citation */
  annotation?: Annotation[]
  /** Article Title */
  articleTitle?: ArticleTitle[]
  /** Bold */
  bold?: Bold[]
  /** Chapter Title in a Citation */
  chapterTitle?: ChapterTitle[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Collaborative (Group) Author */
  collab?: Collab[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternatives[]
  /** Comment in a Citation */
  comment?: Comment[]
  /** Conference Acronym */
  confAcronym?: ConfAcronym[]
  /** Conference Date */
  confDate?: ConfDate[]
  /** Conference Location */
  confLoc?: ConfLoc[]
  /** Conference Name */
  confName?: ConfName[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsor[]
  /** Data Title in a Citation */
  dataTitle?: DataTitle[]
  /** Date */
  date?: Date[]
  /** Date Inside Citation */
  dateIncitation?: DateIncitation[]
  /** Day */
  day?: Day[]
  /** Edition Statement, Cited */
  edition?: Edition[]
  /** Electronic Location Identifier */
  elocationId?: ElocationId[]
  /** Email Address */
  email?: Email[]
  /** Et Al */
  etal?: Etal[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** First Page */
  fpage?: Fpage[]
  /** Government Report, Cited */
  gov?: Gov[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  issn?: Issn[]
  /** Issn Linking */
  issnL?: IssnL[]
  /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Italic */
  italic?: Italic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** Last Page */
  lpage?: Lpage[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Month */
  month?: Month[]
  /** Name of Person (Structured) */
  name?: Name[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternatives[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Overline */
  overline?: Overline[]
  /** Page Ranges */
  pageRange?: PageRange[]
  /** Part Title in a Citation */
  partTitle?: PartTitle[]
  /** Patent Number, Cited */
  patent?: Patent[]
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroup[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubId[]
  /** Publisher's Location */
  publisherLoc?: PublisherLoc[]
  /** Publisher's Name */
  publisherName?: PublisherName[]
  /** Role or Function Title of Contributor */
  role?: Role[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Season */
  season?: Season[]
  /** Series */
  series?: Series[]
  /** Size */
  size?: Size[]
  /** Source */
  source?: Source[]
  /** Standard, Cited */
  std?: Std[]
  /** Strike Through */
  strike?: Strike[]
  /** Date As a String */
  stringDate?: StringDate[]
  /** Name of Person (Unstructured) */
  stringName?: StringName[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Supplement */
  supplement?: Supplement[]
  /** Translated Source */
  transSource?: TransSource[]
  /** Translated Title */
  transTitle?: TransTitle[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Version Statement, Cited */
  version?: Version[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Volume Series */
  volumeSeries?: VolumeSeries[]
  /** Year */
  year?: Year[]
}

interface Monospace extends Base {
  type: 'monospace'
  properties: {
    id?: string
    specificUse?: string
  }
  toggle?: MonospaceTypeToggle
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type MonospaceTypeToggle = 'no' | 'yes'
interface _MonospaceTypeToggle extends Primitive._string {
  content: MonospaceTypeToggle
}

interface Month extends Base {
  type: 'month'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface NameAlternatives extends Base {
  type: 'nameAlternatives'
  properties: {
    id?: string
  } /** Name of Person (Structured) */
  name: Name[]
  /** Name of Person (Unstructured) */
  stringName: StringName[]
}

interface NamedContent extends Base {
  type: 'namedContent'
  properties: {
    alt?: string
    contentType: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Bold */
  bold?: Bold[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Email Address */
  email?: Email[]
  /** Explanation */
  explanation?: Explanation[]
  /** External Link */
  extLink?: ExtLink[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Graphic */
  graphic?: Graphic[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Name extends Base {
  type: 'name'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
  }
  nameStyle?: NameTypeNameStyle /** Given (First) Names */
  givenNames: GivenNames[]
  /** Prefix */
  prefix?: Prefix
  /** Suffix */
  suffix?: Suffix
  /** Surname */
  surname: Surname
}

type NameTypeNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'
interface _NameTypeNameStyle extends Primitive._string {
  content: NameTypeNameStyle
}

interface NestedKwd extends Base {
  type: 'nestedKwd'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Compound Keyword */
  compoundKwd: CompoundKwd[]
  /** Keyword */
  kwd: Kwd[]
  /** Nested Keyword */
  nestedKwd?: NestedKwd[]
}

interface NlmCitation extends Base {
  type: 'nlmCitation'
  properties: {
    hreflang?: string
    id?: string
    publicationFormat?: string
    publicationType?: string
    publisherType?: string
    specificUse?: string
  } /** Access Date For Cited Work */
  accessDate?: AccessDate
  /** Annotation in a Citation */
  annotation?: Annotation
  /** Article Title */
  articleTitle?: ArticleTitle[]
  /** Collaborative (Group) Author */
  collab?: Collab[]
  /** Comment in a Citation */
  comment?: Comment[]
  /** Conference Date */
  confDate?: ConfDate
  /** Conference Location */
  confLoc?: ConfLoc
  /** Conference Name */
  confName?: ConfName
  /** Day */
  day?: Day
  /** Edition Statement, Cited */
  edition?: Edition
  /** First Page */
  fpage?: Fpage[]
  /** Issue Number */
  issue?: Issue[]
  /** Last Page */
  lpage?: Lpage[]
  /** Month */
  month?: Month
  /** Page Count */
  pageCount?: PageCount
  /** Patent Number, Cited */
  patent?: Patent
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroup[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubId[]
  /** Publisher's Location */
  publisherLoc?: PublisherLoc
  /** Publisher's Name */
  publisherName?: PublisherName
  /** Season */
  season?: Season
  /** Series */
  series?: Series
  /** Source */
  source?: Source
  /** Supplement */
  supplement?: Supplement[]
  /** Time Stamp For Cited Work */
  timeStamp?: TimeStamp
  /** Translated Source */
  transSource?: TransSource
  /** Translated Title */
  transTitle?: TransTitle[]
  /** Volume Number */
  volume?: Volume
  /** Year */
  year?: Year
}

interface Notes extends Base {
  type: 'notes'
  properties: {
    id?: string
    notesType?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic?: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Section */
  sec?: Sec[]
  /** Section Metadata */
  secMeta?: SecMeta
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface Note extends Base {
  type: 'note'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Paragraph */
  p: P[]
  /** Product Information */
  product: Product[]
}

interface ObjectId extends Base {
  type: 'objectId'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    pubIdtype?: string
    specificUse?: string
  }
}

interface OnBehalfof extends Base {
  type: 'onBehalfof'
  properties: {
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Underline */
  underline?: Underline[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface OpenAccess extends Base {
  type: 'openAccess'
  properties: {
    id?: string
    specificUse?: string
  } /** Paragraph */
  p: P[]
}

interface Option extends Base {
  type: 'option'
  properties: {
    contentType?: string

    id?: string
    specificUse?: string
  }
  correct?: OptionTypeCorrect /** Address/Contact Information */
  address: Address[]
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Alternatives For Processing */
  alternatives: Alternatives[]
  /** Answer Elements */
  answer: Answer[]
  /** Answer Set */
  answerSet: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternatives[]
  /** Boxed Text */
  boxedText: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrap[]
  /** Code Text */
  code: Code[]
  /** Definition List */
  defList: DefList[]
  /** Formula, Display */
  dispFormula: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig: Fig[]
  /** Figure Group */
  figGroup: FigGroup[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list: List[]
  /** Media Object */
  media: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p: P[]
  /** Preformatted Text */
  preformat: Preformat[]
  /** Question */
  question: Question[]
  /** Question Wrap */
  questionWrap: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle: RelatedArticle[]
  /** Related Object Information */
  relatedObject: RelatedObject[]
  /** Section */
  sec: Sec[]
  /** Speech */
  speech: Speech[]
  /** Statement, Formal */
  statement: Statement[]
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroup[]
  /** Tex Math Equation */
  texMath: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup: VerseGroup[]
}

type OptionTypeCorrect = 'no' | 'yes'
interface _OptionTypeCorrect extends Primitive._string {
  content: OptionTypeCorrect
}

interface OverlineEnd extends Base {
  type: 'overlineEnd'
  properties: {
    id?: string
    rid: string
    specificUse?: string
  }
}

interface OverlineStart extends Base {
  type: 'overlineStart'
  properties: {
    id: string
    specificUse?: string
  }
}

interface Overline extends Base {
  type: 'overline'
  properties: {
    id?: string
    specificUse?: string
  }
  toggle?: OverlineTypeToggle
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type OverlineTypeToggle = 'no' | 'yes'
interface _OverlineTypeToggle extends Primitive._string {
  content: OverlineTypeToggle
}

interface PageCount extends Base {
  type: 'pageCount'
  properties: {
    count: string
    id?: string
  }
}

interface PageRange extends Base {
  type: 'pageRange'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface PartTitle extends Base {
  type: 'partTitle'
  properties: {
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Patent extends Base {
  type: 'patent'
  properties: {
    contentType?: string
    country?: string
    id?: string
    specificUse?: string
  }
}

interface Permissions extends Base {
  type: 'permissions'
  properties: {
    id?: string
  } /** Copyright Holder */
  copyrightHolder?: CopyrightHolder[]
  /** Copyright Statement */
  copyrightStatement?: CopyrightStatement[]
  /** Copyright Year */
  copyrightYear?: CopyrightYear[]
  /** License Information */
  license?: License[]
}

interface PersonGroup extends Base {
  type: 'personGroup'
  properties: {
    customType?: string
    id?: string

    specificUse?: string
  }
  personGrouptype?: PersonGroupTypePersonGrouptype /** Affiliation */
  aff?: Aff[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternatives[]
  /** Anonymous */
  anonymous?: Anonymous[]
  /** Collaborative (Group) Author */
  collab?: Collab[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternatives[]
  /** Et Al */
  etal?: Etal[]
  /** Name of Person (Structured) */
  name?: Name[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternatives[]
  /** Role or Function Title of Contributor */
  role?: Role[]
  /** Name of Person (Unstructured) */
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
interface _PersonGroupTypePersonGrouptype extends Primitive._string {
  content: PersonGroupTypePersonGrouptype
}

interface Phone extends Base {
  type: 'phone'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface PostalCode extends Base {
  type: 'postalCode'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Prefix extends Base {
  type: 'prefix'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Preformat extends Base {
  type: 'preformat'
  properties: {
    id?: string

    preformatType?: string
    specificUse?: string
  }
  orientation?: PreformatTypeOrientation
  position?: PreformatTypePosition
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Attribution */
  attrib?: Attrib[]
  /** Bold */
  bold?: Bold[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Italic */
  italic?: Italic[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Permissions */
  permissions?: Permissions[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
}

type PreformatTypeOrientation = 'landscape' | 'portrait'
interface _PreformatTypeOrientation extends Primitive._string {
  content: PreformatTypeOrientation
}

type PreformatTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _PreformatTypePosition extends Primitive._string {
  content: PreformatTypePosition
}

interface Price extends Base {
  type: 'price'
  properties: {
    contentType?: string
    currency?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Underline */
  underline?: Underline[]
}

interface PrincipalAwardrecipient extends Base {
  type: 'principalAwardrecipient'
  properties: {
    id?: string
    specificUse?: string
  } /** Contributor Identifier */
  contribId?: ContribId[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Name of Person (Structured) */
  name?: Name[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternatives[]
  /** Name of Person (Unstructured) */
  stringName?: StringName[]
}

interface PrincipalInvestigator extends Base {
  type: 'principalInvestigator'
  properties: {
    id?: string
    specificUse?: string
  } /** Contributor Identifier */
  contribId?: ContribId[]
  /** Name of Person (Structured) */
  name?: Name[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternatives[]
  /** Name of Person (Unstructured) */
  stringName?: StringName[]
}

interface PrivateChar extends Base {
  type: 'privateChar'
  properties: {
    description?: string
    id?: string
    name?: string
    specificUse?: string
  } /** Glyph Data For a Private Character */
  glyphData: GlyphData
  /** Glyph Reference For a Private Character */
  glyphRef: GlyphRef
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
}

interface ProcessingMeta extends Base {
  type: 'processingMeta'
  baseTagset?: ProcessingMetaTypeBaseTagset
  properties: {
    id?: string
    mathRepresentation?: string
  }
  mathmlVersion?: ProcessingMetaTypeMathmlVersion
  tableModel?: ProcessingMetaTypeTableModel
  tagsetFamily?: ProcessingMetaTypeTagsetFamily
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroup[]
  /** Extended-by Model */
  extendedBy?: ExtendedBy[]
  /** Restricted-by Model */
  restrictedBy?: RestrictedBy[]
}

type ProcessingMetaTypeBaseTagset = 'archiving' | 'authoring' | 'publishing'
interface _ProcessingMetaTypeBaseTagset extends Primitive._string {
  content: ProcessingMetaTypeBaseTagset
}

type ProcessingMetaTypeMathmlVersion = '2.0' | '3.0'
interface _ProcessingMetaTypeMathmlVersion extends Primitive._string {
  content: ProcessingMetaTypeMathmlVersion
}

type ProcessingMetaTypeTableModel = 'both' | 'none' | 'oasis' | 'xhtml'
interface _ProcessingMetaTypeTableModel extends Primitive._string {
  content: ProcessingMetaTypeTableModel
}

type ProcessingMetaTypeTagsetFamily = 'bits' | 'jats' | 'sts'
interface _ProcessingMetaTypeTagsetFamily extends Primitive._string {
  content: ProcessingMetaTypeTagsetFamily
}

interface Product extends Base {
  type: 'product'
  properties: {
    hreflang?: string
    id?: string
    productType?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Annotation in a Citation */
  annotation?: Annotation[]
  /** Article Title */
  articleTitle?: ArticleTitle[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Chapter Title in a Citation */
  chapterTitle?: ChapterTitle[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Collaborative (Group) Author */
  collab?: Collab[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternatives[]
  /** Comment in a Citation */
  comment?: Comment[]
  /** Conference Acronym */
  confAcronym?: ConfAcronym[]
  /** Conference Date */
  confDate?: ConfDate[]
  /** Conference Location */
  confLoc?: ConfLoc[]
  /** Conference Name */
  confName?: ConfName[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsor[]
  /** Data Title in a Citation */
  dataTitle?: DataTitle[]
  /** Date */
  date?: Date[]
  /** Date Inside Citation */
  dateIncitation?: DateIncitation[]
  /** Day */
  day?: Day[]
  /** Edition Statement, Cited */
  edition?: Edition[]
  /** Electronic Location Identifier */
  elocationId?: ElocationId[]
  /** Email Address */
  email?: Email[]
  /** Et Al */
  etal?: Etal[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** First Page */
  fpage?: Fpage[]
  /** Government Report, Cited */
  gov?: Gov[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  issn?: Issn[]
  /** Issn Linking */
  issnL?: IssnL[]
  /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Italic */
  italic?: Italic[]
  /** Last Page */
  lpage?: Lpage[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Month */
  month?: Month[]
  /** Name of Person (Structured) */
  name?: Name[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternatives[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Overline */
  overline?: Overline[]
  /** Page Ranges */
  pageRange?: PageRange[]
  /** Part Title in a Citation */
  partTitle?: PartTitle[]
  /** Patent Number, Cited */
  patent?: Patent[]
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroup[]
  /** Price */
  price?: Price[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubId[]
  /** Publisher's Location */
  publisherLoc?: PublisherLoc[]
  /** Publisher's Name */
  publisherName?: PublisherName[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Role or Function Title of Contributor */
  role?: Role[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Season */
  season?: Season[]
  /** Series */
  series?: Series[]
  /** Size */
  size?: Size[]
  /** Source */
  source?: Source[]
  /** Standard, Cited */
  std?: Std[]
  /** Strike Through */
  strike?: Strike[]
  /** Date As a String */
  stringDate?: StringDate[]
  /** Name of Person (Unstructured) */
  stringName?: StringName[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Supplement */
  supplement?: Supplement[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Translated Source */
  transSource?: TransSource[]
  /** Translated Title */
  transTitle?: TransTitle[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Version Statement, Cited */
  version?: Version[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Volume Series */
  volumeSeries?: VolumeSeries[]
  /** X(cross) Reference */
  xref?: Xref[]
  /** Year */
  year?: Year[]
}

interface P extends Base {
  type: 'p'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Award Identifier */
  awardId?: AwardId[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Bold */
  bold?: Bold[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternatives[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Element Citation */
  elementCitation?: ElementCitation[]
  /** Email Address */
  email?: Email[]
  /** Explanation */
  explanation?: Explanation[]
  /** External Link */
  extLink?: ExtLink[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Funding Source */
  fundingSource?: FundingSource[]
  /** Graphic */
  graphic?: Graphic[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Mixed Citation */
  mixedCitation?: MixedCitation[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitation[]
  /** Open Access */
  openAccess?: OpenAccess[]
  /** Overline */
  overline?: Overline[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface PubDatenotavailable extends Base {
  type: 'pubDatenotavailable'
  properties: {
    id?: string
    specificUse?: string
  }
}

interface PubDate extends Base {
  type: 'pubDate'
  properties: {
    assigningAuthority?: string
    calendar?: string
    dateType?: string
    id?: string
    iso8601Date?: string
    pubType?: string
    publicationFormat?: string
  } /** Day */
  day?: Day
  /** Era */
  era?: Era
  /** Month */
  month?: Month
  /** Season */
  season?: Season
  /** Year */
  year: Year
}

interface PubHistory extends Base {
  type: 'pubHistory'
  properties: {
    id?: string
  } /** Event in Publishing History */
  event: Event[]
}

interface PubId extends Base {
  type: 'pubId'
  properties: {
    assigningAuthority?: string
    customType?: string
    hreflang?: string
    id?: string

    specificUse?: string
  }
  pubIdtype?: PubIdTypePubIdtype
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
interface _PubIdTypePubIdtype extends Primitive._string {
  content: PubIdTypePubIdtype
}

interface PublisherLoc extends Base {
  type: 'publisherLoc'
  properties: {
    id?: string
    specificUse?: string
  } /** Address Line */
  addrLine?: AddrLine[]
  /** City: in an Address */
  city?: City[]
  /** Country: in an Address */
  country?: Country[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fax Number: in an Address */
  fax?: Fax[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Phone Number: in an Address */
  phone?: Phone[]
  /** Postal Code: in an Address */
  postalCode?: PostalCode[]
  /** State or Province: in an Address */
  state?: State[]
  /** Uri */
  uri?: Uri[]
}

interface PublisherName extends Base {
  type: 'publisherName'
  properties: {
    id?: string
    specificUse?: string
  } /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
}

interface Publisher extends Base {
  type: 'publisher'
  properties: {
    contentType?: string
    id?: string
  } /** Publisher's Location */
  publisherLoc?: PublisherLoc[]
  /** Publisher's Name */
  publisherName: PublisherName[]
}

interface QuestionPreamble extends Base {
  type: 'questionPreamble'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Graphic */
  graphic?: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Section */
  sec?: Sec[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface Question extends Base {
  type: 'question'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
  }
  questionResponsetype?: QuestionTypeQuestionResponsetype /** Address/Contact Information */
  address: Address[]
  /** Alternate Title */
  altTitle?: AltTitle[]
  /** Alternatives For Processing */
  alternatives: Alternatives[]
  /** Answer Elements */
  answer: Answer[]
  /** Answer Set */
  answerSet: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternatives[]
  /** Boxed Text */
  boxedText: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrap[]
  /** Code Text */
  code: Code[]
  /** Definition List */
  defList: DefList[]
  /** Formula, Display */
  dispFormula: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote: DispQuote[]
  /** Explanation */
  explanation: Explanation[]
  /** Figure */
  fig: Fig[]
  /** Figure Group */
  figGroup: FigGroup[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list: List[]
  /** Media Object */
  media: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Option Elements */
  option?: Option[]
  /** Paragraph */
  p: P[]
  /** Preformatted Text */
  preformat: Preformat[]
  /** Question */
  question: Question[]
  /** Question Wrap */
  questionWrap: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle: RelatedArticle[]
  /** Related Object Information */
  relatedObject: RelatedObject[]
  /** Section */
  sec: Sec[]
  /** Section Metadata */
  secMeta?: SecMeta
  /** Speech */
  speech: Speech[]
  /** Statement, Formal */
  statement: Statement[]
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroup[]
  /** Tex Math Equation */
  texMath: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup: VerseGroup[]
}

type QuestionTypeQuestionResponsetype =
  | 'essay'
  | 'fill-in-the-blank'
  | 'multi-select'
  | 'multiple-choice'
  | 'short-answer'
  | 'true-false'
interface _QuestionTypeQuestionResponsetype extends Primitive._string {
  content: QuestionTypeQuestionResponsetype
}

interface QuestionWrapgroup extends Base {
  type: 'questionWrapgroup'
  properties: {
    audience?: string
    contentType?: string
    id?: string
    specificUse?: string
  } /** Alternate Title */
  altTitle?: AltTitle[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Question Preamble */
  questionPreamble?: QuestionPreamble
  /** Question Wrap */
  questionWrap: QuestionWrap[]
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Title */
  title?: Title
}

interface QuestionWrap extends Base {
  type: 'questionWrap'
  properties: {
    audience?: string
    contentType?: string
    id?: string
    specificUse?: string
  } /** Answer Elements */
  answer?: Answer
  /** Answer Set */
  answerSet?: AnswerSet
  /** Explanation */
  explanation?: Explanation[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Question */
  question: Question
}

interface Rb extends Base {
  type: 'rb'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Underline */
  underline?: Underline[]
}

interface RefCount extends Base {
  type: 'refCount'
  properties: {
    count: string
    id?: string
  }
}

interface RefList extends Base {
  type: 'refList'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Graphic */
  graphic?: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Reference Item */
  ref?: Ref[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface Ref extends Base {
  type: 'ref'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Citation Alternatives */
  citationAlternatives: CitationAlternatives[]
  /** Element Citation */
  elementCitation: ElementCitation[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Mixed Citation */
  mixedCitation: MixedCitation[]
  /** Nlm Citation Model */
  nlmCitation: NlmCitation[]
  /** Note in a Reference List */
  note: Note[]
}

interface RelatedArticle extends Base {
  type: 'relatedArticle'
  $elocationId?: string
  properties: {
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
  } /** Annotation in a Citation */
  annotation?: Annotation[]
  /** Article Title */
  articleTitle?: ArticleTitle[]
  /** Bold */
  bold?: Bold[]
  /** Chapter Title in a Citation */
  chapterTitle?: ChapterTitle[]
  /** Collaborative (Group) Author */
  collab?: Collab[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternatives[]
  /** Comment in a Citation */
  comment?: Comment[]
  /** Conference Acronym */
  confAcronym?: ConfAcronym[]
  /** Conference Date */
  confDate?: ConfDate[]
  /** Conference Location */
  confLoc?: ConfLoc[]
  /** Conference Name */
  confName?: ConfName[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsor[]
  /** Data Title in a Citation */
  dataTitle?: DataTitle[]
  /** Date */
  date?: Date[]
  /** Date Inside Citation */
  dateIncitation?: DateIncitation[]
  /** Day */
  day?: Day[]
  /** Edition Statement, Cited */
  edition?: Edition[]
  /** Electronic Location Identifier */
  elocationId?: ElocationId[]
  /** Email Address */
  email?: Email[]
  /** Et Al */
  etal?: Etal[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** First Page */
  fpage?: Fpage[]
  /** Government Report, Cited */
  gov?: Gov[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  issn?: Issn[]
  /** Issn Linking */
  issnL?: IssnL[]
  /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Italic */
  italic?: Italic[]
  /** Journal Identifier */
  journalId?: JournalId[]
  /** Last Page */
  lpage?: Lpage[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Month */
  month?: Month[]
  /** Name of Person (Structured) */
  name?: Name[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternatives[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Overline */
  overline?: Overline[]
  /** Page Ranges */
  pageRange?: PageRange[]
  /** Part Title in a Citation */
  partTitle?: PartTitle[]
  /** Patent Number, Cited */
  patent?: Patent[]
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroup[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubId[]
  /** Publisher's Location */
  publisherLoc?: PublisherLoc[]
  /** Publisher's Name */
  publisherName?: PublisherName[]
  /** Role or Function Title of Contributor */
  role?: Role[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Season */
  season?: Season[]
  /** Series */
  series?: Series[]
  /** Size */
  size?: Size[]
  /** Source */
  source?: Source[]
  /** Standard, Cited */
  std?: Std[]
  /** Strike Through */
  strike?: Strike[]
  /** Date As a String */
  stringDate?: StringDate[]
  /** Name of Person (Unstructured) */
  stringName?: StringName[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Supplement */
  supplement?: Supplement[]
  /** Translated Source */
  transSource?: TransSource[]
  /** Translated Title */
  transTitle?: TransTitle[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Version Statement, Cited */
  version?: Version[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Volume Series */
  volumeSeries?: VolumeSeries[]
  /** Year */
  year?: Year[]
}

interface RelatedObject extends Base {
  type: 'relatedObject'
  properties: {
    contentType?: string
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
  }
  $objectId?: string /** Annotation in a Citation */
  annotation?: Annotation[]
  /** Article Title */
  articleTitle?: ArticleTitle[]
  /** Bold */
  bold?: Bold[]
  /** Chapter Title in a Citation */
  chapterTitle?: ChapterTitle[]
  /** Collaborative (Group) Author */
  collab?: Collab[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternatives[]
  /** Comment in a Citation */
  comment?: Comment[]
  /** Conference Acronym */
  confAcronym?: ConfAcronym[]
  /** Conference Date */
  confDate?: ConfDate[]
  /** Conference Location */
  confLoc?: ConfLoc[]
  /** Conference Name */
  confName?: ConfName[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsor[]
  /** Data Title in a Citation */
  dataTitle?: DataTitle[]
  /** Date */
  date?: Date[]
  /** Date Inside Citation */
  dateIncitation?: DateIncitation[]
  /** Day */
  day?: Day[]
  /** Edition Statement, Cited */
  edition?: Edition[]
  /** Electronic Location Identifier */
  elocationId?: ElocationId[]
  /** Email Address */
  email?: Email[]
  /** Et Al */
  etal?: Etal[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** First Page */
  fpage?: Fpage[]
  /** Government Report, Cited */
  gov?: Gov[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Isbn */
  isbn?: Isbn[]
  /** Issn */
  issn?: Issn[]
  /** Issn Linking */
  issnL?: IssnL[]
  /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Italic */
  italic?: Italic[]
  /** Last Page */
  lpage?: Lpage[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Month */
  month?: Month[]
  /** Name of Person (Structured) */
  name?: Name[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternatives[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Overline */
  overline?: Overline[]
  /** Page Ranges */
  pageRange?: PageRange[]
  /** Part Title in a Citation */
  partTitle?: PartTitle[]
  /** Patent Number, Cited */
  patent?: Patent[]
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroup[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubId[]
  /** Publisher's Location */
  publisherLoc?: PublisherLoc[]
  /** Publisher's Name */
  publisherName?: PublisherName[]
  /** Role or Function Title of Contributor */
  role?: Role[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Season */
  season?: Season[]
  /** Series */
  series?: Series[]
  /** Size */
  size?: Size[]
  /** Source */
  source?: Source[]
  /** Standard, Cited */
  std?: Std[]
  /** Strike Through */
  strike?: Strike[]
  /** Date As a String */
  stringDate?: StringDate[]
  /** Name of Person (Unstructured) */
  stringName?: StringName[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Supplement */
  supplement?: Supplement[]
  /** Translated Source */
  transSource?: TransSource[]
  /** Translated Title */
  transTitle?: TransTitle[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Version Statement, Cited */
  version?: Version[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Volume Series */
  volumeSeries?: VolumeSeries[]
  /** Year */
  year?: Year[]
}

interface ResourceGroup extends Base {
  type: 'resourceGroup'
  properties: {
    id?: string
    specificUse?: string
  } /** Resource Name */
  resourceName: ResourceName[]
  /** Resource Wrap */
  resourceWrap: ResourceWrap[]
}

interface ResourceId extends Base {
  type: 'resourceId'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    resourceIdtype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
}

interface ResourceName extends Base {
  type: 'resourceName'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface ResourceWrap extends Base {
  type: 'resourceWrap'
  properties: {
    id?: string
  } /** Resource Identifier */
  resourceId?: ResourceId[]
  /** Resource Name */
  resourceName: ResourceName
}

interface Response extends Base {
  type: 'response'
  properties: {
    id?: string
    responseType?: string
    specificUse?: string
  } /** Back Matter */
  back?: Back
  /** Body of the Article */
  body?: Body
  /** Floats Group */
  floatsGroup?: FloatsGroup
  /** Front Matter */
  front: Front
  /** Stub Front Metadata */
  frontStub: FrontStub
  /** Processing Metadata Model */
  processingMeta?: ProcessingMeta
}

interface RestrictedBy extends Base {
  type: 'restrictedBy'
  properties: {
    assigningAuthority?: string
    designator?: string
    hreflang?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  }
}

interface Role extends Base {
  type: 'role'
  properties: {
    assigningAuthority?: string
    contentType?: string
    degreeContribution?: string
    id?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface Roman extends Base {
  type: 'roman'
  properties: {
    id?: string
    specificUse?: string
  }
  toggle?: RomanTypeToggle
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type RomanTypeToggle = 'no' | 'yes'
interface _RomanTypeToggle extends Primitive._string {
  content: RomanTypeToggle
}

interface Rp extends Base {
  type: 'rp'
  properties: {
    id?: string
  }
}

interface Rt extends Base {
  type: 'rt'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Ruby extends Base {
  type: 'ruby'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Ruby Base */
  rb: Rb
  /** Ruby Textual Annotation */
  rt: Rt
}

interface SansSerif extends Base {
  type: 'sansSerif'
  properties: {
    id?: string
    specificUse?: string
  }
  toggle?: SansSerifTypeToggle
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type SansSerifTypeToggle = 'no' | 'yes'
interface _SansSerifTypeToggle extends Primitive._string {
  content: SansSerifTypeToggle
}

interface Sc extends Base {
  type: 'sc'
  properties: {
    id?: string
    specificUse?: string
  }
  toggle?: ScTypeToggle
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type ScTypeToggle = 'no' | 'yes'
interface _ScTypeToggle extends Primitive._string {
  content: ScTypeToggle
}

interface Season extends Base {
  type: 'season'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface SecMeta extends Base {
  type: 'secMeta'
  properties: {
    id?: string
  } /** Abstract */
  abstract?: Abstract[]
  /** Contributor Group */
  contribGroup?: ContribGroup[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Permissions */
  permissions?: Permissions
  subjGroup?: SubjGroup[]
}

interface Sec extends Base {
  type: 'sec'
  properties: {
    id?: string
    secType?: string
    specificUse?: string
  } /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Explanation */
  explanation?: Explanation[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Footnote Group */
  fnGroup?: FnGroup[]
  /** Glossary Elements */
  glossary?: Glossary[]
  /** Graphic */
  graphic?: Graphic[]
  /** Label of a Figure, Reference, Etc. */
  label: Label
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefList[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Section */
  sec?: Sec[]
  /** Section Metadata */
  secMeta?: SecMeta
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Title */
  title: Title[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
}

interface SeeAlso extends Base {
  type: 'seeAlso'
  properties: {
    contentType?: string
    id?: string
    rid?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Code Text */
  code?: Code[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Graphic */
  graphic?: Graphic[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Media Object */
  media?: Media[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface See extends Base {
  type: 'see'
  properties: {
    contentType?: string
    id?: string
    rid?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Code Text */
  code?: Code[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Graphic */
  graphic?: Graphic[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Media Object */
  media?: Media[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface SelfUri extends Base {
  type: 'selfUri'
  properties: {
    assigningAuthority?: string
    contentType?: string
    hreflang?: string
    id?: string
    specificUse?: string
  }
}

interface SeriesText extends Base {
  type: 'seriesText'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface SeriesTitle extends Base {
  type: 'seriesTitle'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface Series extends Base {
  type: 'series'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface SigBlock extends Base {
  type: 'sigBlock'
  properties: {
    contentType?: string
    id?: string
    rid?: string
    specificUse?: string
  } /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Graphic */
  graphic?: Graphic[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Media Object */
  media?: Media[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Signature */
  sig?: Sig[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface Sig extends Base {
  type: 'sig'
  properties: {
    contentType?: string
    id?: string
    rid?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Graphic */
  graphic?: Graphic[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Media Object */
  media?: Media[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface Size extends Base {
  type: 'size'
  properties: {
    id?: string
    specificUse?: string
    units: string
  }
}

interface Source extends Base {
  type: 'source'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Speaker extends Base {
  type: 'speaker'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Degree(s) */
  degrees?: Degrees[]
  /** Footnote */
  fn?: Fn[]
  /** Given (First) Names */
  givenNames?: GivenNames[]
  /** Prefix */
  prefix?: Prefix[]
  /** Suffix */
  suffix?: Suffix[]
  /** Surname */
  surname?: Surname[]
  /** Target of an Internal Link */
  target?: Target[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Speech extends Base {
  type: 'speech'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p: P[]
  /** Speaker */
  speaker: Speaker
}

interface Statement extends Base {
  type: 'statement'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abstract */
  abstract?: Abstract[]
  /** Attribution */
  attrib?: Attrib[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Paragraph */
  p: P[]
  /** Permissions */
  permissions?: Permissions[]
  /** Statement, Formal */
  statement: Statement[]
  subjGroup?: SubjGroup[]
  /** Title */
  title?: Title
}

interface State extends Base {
  type: 'state'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface StdOrganization extends Base {
  type: 'stdOrganization'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
}

interface Std extends Base {
  type: 'std'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Day */
  day?: Day[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Month */
  month?: Month[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubId[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Source */
  source?: Source[]
  /** Standards Organization */
  stdOrganization?: StdOrganization[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
  /** Year */
  year?: Year[]
}

interface Strike extends Base {
  type: 'strike'
  properties: {
    id?: string
    specificUse?: string
  }
  toggle?: StrikeTypeToggle
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type StrikeTypeToggle = 'no' | 'yes'
interface _StrikeTypeToggle extends Primitive._string {
  content: StrikeTypeToggle
}

interface StringConf extends Base {
  type: 'stringConf'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Conference Acronym */
  confAcronym?: ConfAcronym[]
  /** Conference Date */
  confDate?: ConfDate[]
  /** Conference Location */
  confLoc?: ConfLoc[]
  /** Conference Name */
  confName?: ConfName[]
  /** Conference Number */
  confNum?: ConfNum[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsor[]
  /** Conference Theme */
  confTheme?: ConfTheme[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** String Conference Name */
  stringConf?: StringConf[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface StringDate extends Base {
  type: 'stringDate'
  properties: {
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  } /** Day */
  day?: Day[]
  /** Era */
  era?: Era[]
  /** Month */
  month?: Month[]
  /** Season */
  season?: Season[]
  /** Year */
  year?: Year[]
}

interface StringName extends Base {
  type: 'stringName'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
  }
  nameStyle?: StringNameTypeNameStyle /** Degree(s) */
  degrees?: Degrees[]
  /** Given (First) Names */
  givenNames?: GivenNames[]
  /** Prefix */
  prefix?: Prefix[]
  /** Suffix */
  suffix?: Suffix[]
  /** Surname */
  surname?: Surname[]
}

type StringNameTypeNameStyle = 'eastern' | 'given-only' | 'islensk' | 'western'
interface _StringNameTypeNameStyle extends Primitive._string {
  content: StringNameTypeNameStyle
}

interface StyledContent extends Base {
  type: 'styledContent'
  properties: {
    alt?: string
    id?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
  }
  toggle?: StyledContentTypeToggle
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Address/Contact Information */
  address?: Address[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternatives[]
  /** Bold */
  bold?: Bold[]
  /** Boxed Text */
  boxedText?: BoxedText[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Email Address */
  email?: Email[]
  /** Explanation */
  explanation?: Explanation[]
  /** External Link */
  extLink?: ExtLink[]
  /** Figure */
  fig?: Fig[]
  /** Figure Group */
  figGroup?: FigGroup[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Graphic */
  graphic?: Graphic[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterial[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type StyledContentTypeToggle = 'no' | 'yes'
interface _StyledContentTypeToggle extends Primitive._string {
  content: StyledContentTypeToggle
}

interface SubArticle extends Base {
  type: 'subArticle'
  properties: {
    articleType?: string
    id?: string
    specificUse?: string
  } /** Back Matter */
  back?: Back
  /** Body of the Article */
  body?: Body
  /** Floats Group */
  floatsGroup?: FloatsGroup
  /** Front Matter */
  front: Front
  /** Stub Front Metadata */
  frontStub: FrontStub
  /** Processing Metadata Model */
  processingMeta?: ProcessingMeta
  /** Response */
  response?: Response[]
  /** Sub-Article */
  subArticle?: SubArticle[]
}

interface Subject extends Base {
  type: 'subject'
  properties: {
    assigningAuthority?: string
    contentType?: string
    id?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface SubjGroup extends Base {
  type: 'subjGroup'
  properties: {
    assigningAuthority?: string
    id?: string
    specificUse?: string
    subjGrouptype?: string
    vocab?: string
    vocabIdentifier?: string
  } /** Compound Subject Name */
  compoundSubject: CompoundSubject[]
  subjGroup?: SubjGroup[]
  /** Subject Name */
  subject: Subject[]
}

interface Subtitle extends Base {
  type: 'subtitle'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Sub extends Base {
  type: 'sub'
  arrange?: SubTypeArrange
  properties: {
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type SubTypeArrange = 'stack' | 'stagger'
interface _SubTypeArrange extends Primitive._string {
  content: SubTypeArrange
}

interface Suffix extends Base {
  type: 'suffix'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface SupplementaryMaterial extends Base {
  type: 'supplementaryMaterial'
  properties: {
    contentType?: string
    hreflang?: string
    id?: string
    mimeSubtype?: string
    mimetype?: string

    specificUse?: string
  }
  orientation?: SupplementaryMaterialTypeOrientation
  position?: SupplementaryMaterialTypePosition
  /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Attribution */
  attrib?: Attrib[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Graphic */
  graphic?: Graphic[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** List */
  list?: List[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Media Object */
  media?: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Permissions */
  permissions?: Permissions[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  subjGroup?: SubjGroup[]
  /** Table Wrapper */
  tableWrap?: TableWrap[]
  /** Uri */
  uri?: Uri[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type SupplementaryMaterialTypeOrientation = 'landscape' | 'portrait'
interface _SupplementaryMaterialTypeOrientation extends Primitive._string {
  content: SupplementaryMaterialTypeOrientation
}

type SupplementaryMaterialTypePosition =
  | 'anchor'
  | 'background'
  | 'float'
  | 'margin'
interface _SupplementaryMaterialTypePosition extends Primitive._string {
  content: SupplementaryMaterialTypePosition
}

interface Supplement extends Base {
  type: 'supplement'
  properties: {
    id?: string
    specificUse?: string
    supplementType?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Contributor Group */
  contribGroup?: ContribGroup[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Title */
  title?: Title[]
  /** Underline */
  underline?: Underline[]
}

interface SupportDescription extends Base {
  type: 'supportDescription'
  properties: {
    id?: string
    rid?: string
    specificUse?: string
  } /** Paragraph */
  p: P[]
}

interface SupportGroup extends Base {
  type: 'supportGroup'
  properties: {
    id?: string
    specificUse?: string
  } /** Contributed Resource Group */
  contributedResourcegroup?: ContributedResourcegroup[]
  /** Funding Group */
  fundingGroup?: FundingGroup[]
}

interface SupportSource extends Base {
  type: 'supportSource'
  properties: {
    country?: string
    hreflang?: string
    id?: string
    rid?: string
    specificUse?: string
    supportType?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Institution Name: in an Address */
  institution?: Institution[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrap[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface Sup extends Base {
  type: 'sup'
  arrange?: SupTypeArrange
  properties: {
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type SupTypeArrange = 'stack' | 'stagger'
interface _SupTypeArrange extends Primitive._string {
  content: SupTypeArrange
}

interface Surname extends Base {
  type: 'surname'
  properties: {
    id?: string
    initials?: string
  }
}

interface TableCount extends Base {
  type: 'tableCount'
  properties: {
    count: string
    id?: string
  }
}

interface Table extends Base {
  type: 'table'
  properties: {
    border?: string
    cellpadding?: string
    cellspacing?: string
    contentType?: string

    id?: string

    specificUse?: string
    style?: string
    summary?: string
    width?: string
  }
  frame?: TableTypeFrame
  rules?: TableTypeRules

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
interface _TableTypeFrame extends Primitive._string {
  content: TableTypeFrame
}

type TableTypeRules = 'all' | 'cols' | 'groups' | 'none' | 'rows'
interface _TableTypeRules extends Primitive._string {
  content: TableTypeRules
}

interface TableWrapfoot extends Base {
  type: 'tableWrapfoot'
  properties: {
    id?: string
  } /** Attribution */
  attrib: Attrib[]
  /** Footnote */
  fn: Fn[]
  /** Footnote Group */
  fnGroup: FnGroup[]
  /** Paragraph */
  p: P[]
  /** Permissions */
  permissions: Permissions[]
  /** Title */
  title?: Title
}

interface TableWrapgroup extends Base {
  type: 'tableWrapgroup'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
  }
  orientation?: TableWrapgroupTypeOrientation
  position?: TableWrapgroupTypePosition
  /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Object Identifier */
  objectId?: ObjectId[]
  subjGroup?: SubjGroup[]
  /** Table Wrapper */
  tableWrap: TableWrap[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref: Xref[]
}

type TableWrapgroupTypeOrientation = 'landscape' | 'portrait'
interface _TableWrapgroupTypeOrientation extends Primitive._string {
  content: TableWrapgroupTypeOrientation
}

type TableWrapgroupTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _TableWrapgroupTypePosition extends Primitive._string {
  content: TableWrapgroupTypePosition
}

interface TableWrap extends Base {
  type: 'tableWrap'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
  }
  orientation?: TableWrapTypeOrientation
  position?: TableWrapTypePosition
  /** Abstract */
  abstract?: Abstract[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltText[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Attribution */
  attrib?: Attrib[]
  /** Caption of a Figure, Table, Etc. */
  caption?: Caption[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrap[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Graphic */
  graphic?: Graphic[]
  /** Keyword Group */
  kwdGroup?: KwdGroup[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label[]
  /** List */
  list?: List[]
  /** Long Description */
  longDesc?: LongDesc[]
  /** Media Object */
  media?: Media[]
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Permissions */
  permissions?: Permissions[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  subjGroup?: SubjGroup[]
  /** Table: Table Element .............................. */
  table?: Table[]
  /** Table Wrap Footer */
  tableWrapfoot?: TableWrapfoot[]
  /** Uri */
  uri?: Uri[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type TableWrapTypeOrientation = 'landscape' | 'portrait'
interface _TableWrapTypeOrientation extends Primitive._string {
  content: TableWrapTypeOrientation
}

type TableWrapTypePosition = 'anchor' | 'background' | 'float' | 'margin'
interface _TableWrapTypePosition extends Primitive._string {
  content: TableWrapTypePosition
}

interface Target extends Base {
  type: 'target'
  properties: {
    id: string
    specificUse?: string
    targetType?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
}

interface Tbody extends Base {
  type: 'tbody'
  align?: TbodyTypeAlign
  properties: {
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
  }
  valign?: TbodyTypeValign
  tr: Tr[]
}

type TbodyTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TbodyTypeAlign extends Primitive._string {
  content: TbodyTypeAlign
}

type TbodyTypeValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TbodyTypeValign extends Primitive._string {
  content: TbodyTypeValign
}

interface Td extends Base {
  type: 'td'
  properties: {
    abbr?: string

    axis?: string
    char?: string
    charoff?: string
    colspan?: string
    contentType?: string
    headers?: string
    id?: string
    rowspan?: string

    style?: string
  }
  align?: TdTypeAlign
  scope?: TdTypeScope

  valign?: TdTypeValign
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternatives[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Element Citation */
  elementCitation?: ElementCitation[]
  /** Email Address */
  email?: Email[]
  /** Explanation */
  explanation?: Explanation[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Graphic */
  graphic?: Graphic[]
  /** Horizontal Rule */
  hr?: Hr[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Mixed Citation */
  mixedCitation?: MixedCitation[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitation[]
  /** Overline */
  overline?: Overline[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type TdTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TdTypeAlign extends Primitive._string {
  content: TdTypeAlign
}

type TdTypeScope = 'col' | 'colgroup' | 'row' | 'rowgroup'
interface _TdTypeScope extends Primitive._string {
  content: TdTypeScope
}

type TdTypeValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TdTypeValign extends Primitive._string {
  content: TdTypeValign
}

interface TermHead extends Base {
  type: 'termHead'
  properties: {
    id?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Term extends Base {
  type: 'term'
  properties: {
    id?: string
    rid?: string
    specificUse?: string
    termStatus?: string
    termType?: string
    vocab?: string
    vocabIdentifier?: string
    vocabTerm?: string
    vocabTermidentifier?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Code Text */
  code?: Code[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Graphic */
  graphic?: Graphic[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Media Object */
  media?: Media[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface TexMath extends Base {
  type: 'texMath'
  properties: {
    contentType?: string
    id?: string

    specificUse?: string
    version?: string
  }
  notation?: TexMathTypeNotation
}

type TexMathTypeNotation = 'LaTeX' | 'TEX' | 'TeX' | 'tex'
interface _TexMathTypeNotation extends Primitive._string {
  content: TexMathTypeNotation
}

interface TextualForm extends Base {
  type: 'textualForm'
  properties: {
    id?: string
    specificUse?: string
  } /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
}

interface Tfoot extends Base {
  type: 'tfoot'
  align?: TfootTypeAlign
  properties: {
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
  }
  valign?: TfootTypeValign
  tr: Tr[]
}

type TfootTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TfootTypeAlign extends Primitive._string {
  content: TfootTypeAlign
}

type TfootTypeValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TfootTypeValign extends Primitive._string {
  content: TfootTypeValign
}

interface Thead extends Base {
  type: 'thead'
  align?: TheadTypeAlign
  properties: {
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
  }
  valign?: TheadTypeValign
  tr: Tr[]
}

type TheadTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TheadTypeAlign extends Primitive._string {
  content: TheadTypeAlign
}

type TheadTypeValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TheadTypeValign extends Primitive._string {
  content: TheadTypeValign
}

interface Th extends Base {
  type: 'th'
  properties: {
    abbr?: string

    axis?: string
    char?: string
    charoff?: string
    colspan?: string
    contentType?: string
    headers?: string
    id?: string
    rowspan?: string

    style?: string
  }
  align?: ThTypeAlign
  scope?: ThTypeScope

  valign?: ThTypeValign
  /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Answer Elements */
  answer?: Answer[]
  /** Answer Set */
  answerSet?: AnswerSet[]
  /** Array (Simple Tabular Array) */
  array?: Array[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternatives[]
  /** Code Text */
  code?: Code[]
  /** Definition List */
  defList?: DefList[]
  /** Formula, Display */
  dispFormula?: DispFormula[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroup[]
  /** Quote, Displayed */
  dispQuote?: DispQuote[]
  /** Element Citation */
  elementCitation?: ElementCitation[]
  /** Email Address */
  email?: Email[]
  /** Explanation */
  explanation?: Explanation[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Graphic */
  graphic?: Graphic[]
  /** Horizontal Rule */
  hr?: Hr[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** List */
  list?: List[]
  /** Media Object */
  media?: Media[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Mixed Citation */
  mixedCitation?: MixedCitation[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitation[]
  /** Overline */
  overline?: Overline[]
  /** Paragraph */
  p?: P[]
  /** Preformatted Text */
  preformat?: Preformat[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Question */
  question?: Question[]
  /** Question Wrap */
  questionWrap?: QuestionWrap[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroup[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Speech */
  speech?: Speech[]
  /** Statement, Formal */
  statement?: Statement[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroup[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type ThTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _ThTypeAlign extends Primitive._string {
  content: ThTypeAlign
}

type ThTypeScope = 'col' | 'colgroup' | 'row' | 'rowgroup'
interface _ThTypeScope extends Primitive._string {
  content: ThTypeScope
}

type ThTypeValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _ThTypeValign extends Primitive._string {
  content: ThTypeValign
}

interface TimeStamp extends Base {
  type: 'timeStamp'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface TitleGroup extends Base {
  type: 'titleGroup'
  properties: {
    id?: string
  } /** Alternate Title */
  altTitle?: AltTitle[]
  /** Article Title */
  articleTitle: ArticleTitle
  /** Footnote Group */
  fnGroup?: FnGroup
  /** Article Subtitle */
  subtitle?: Subtitle[]
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroup[]
}

interface Title extends Base {
  type: 'title'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternatives[]
  /** Element Citation */
  elementCitation?: ElementCitation[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Mixed Citation */
  mixedCitation?: MixedCitation[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitation[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface TransAbstract extends Base {
  type: 'transAbstract'
  properties: {
    abstractType?: string
    id?: string
    specificUse?: string
  } /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Object Identifier */
  objectId?: ObjectId[]
  /** Paragraph */
  p?: P[]
  /** Section */
  sec?: Sec[]
  /** Title */
  title?: Title
}

interface TransSource extends Base {
  type: 'transSource'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface TransSubtitle extends Base {
  type: 'transSubtitle'
  properties: {
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface TransTitlegroup extends Base {
  type: 'transTitlegroup'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Translated Subtitle */
  transSubtitle?: TransSubtitle[]
  /** Translated Title */
  transTitle: TransTitle
}

interface TransTitle extends Base {
  type: 'transTitle'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Line Break */
  break?: Break[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Tr extends Base {
  type: 'tr'
  align?: TrTypeAlign
  properties: {
    char?: string
    charoff?: string
    contentType?: string
    id?: string
    style?: string
  }
  valign?: TrTypeValign
  td: Td[]
  th: Th[]
}

type TrTypeAlign = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TrTypeAlign extends Primitive._string {
  content: TrTypeAlign
}

type TrTypeValign = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TrTypeValign extends Primitive._string {
  content: TrTypeValign
}

interface UnderlineEnd extends Base {
  type: 'underlineEnd'
  properties: {
    id?: string
    rid: string
    specificUse?: string
  }
}

interface UnderlineStart extends Base {
  type: 'underlineStart'
  properties: {
    id: string
    specificUse?: string
  }
}

interface Underline extends Base {
  type: 'underline'
  properties: {
    id?: string
    specificUse?: string

    underlineStyle?: string
  }
  toggle?: UnderlineTypeToggle /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Email Address */
  email?: Email[]
  /** External Link */
  extLink?: ExtLink[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterial[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Related Article Information */
  relatedArticle?: RelatedArticle[]
  /** Related Object Information */
  relatedObject?: RelatedObject[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Tex Math Equation */
  texMath?: TexMath[]
  /** Underline */
  underline?: Underline[]
  /** Uri */
  uri?: Uri[]
  /** X(cross) Reference */
  xref?: Xref[]
}

type UnderlineTypeToggle = 'no' | 'yes'
interface _UnderlineTypeToggle extends Primitive._string {
  content: UnderlineTypeToggle
}

interface UnstructuredKwdgroup extends Base {
  type: 'unstructuredKwdgroup'
  properties: {
    assigningAuthority?: string
    id?: string
    kwdGrouptype?: string
    specificUse?: string
    vocab?: string
    vocabIdentifier?: string
  }
}

interface Uri extends Base {
  type: 'uri'
  properties: {
    assigningAuthority?: string
    contentType?: string
    hreflang?: string
    id?: string
    specificUse?: string
  }
}

interface VerseGroup extends Base {
  type: 'verseGroup'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
  } /** Attribution */
  attrib?: Attrib[]
  /** Label of a Figure, Reference, Etc. */
  label?: Label
  /** Permissions */
  permissions?: Permissions[]
  /** Article Subtitle */
  subtitle?: Subtitle
  /** Title */
  title?: Title
  /** Verse Form For Poetry */
  verseGroup: VerseGroup[]
  /** Line of a Verse */
  verseLine: VerseLine[]
}

interface VerseLine extends Base {
  type: 'verseLine'
  properties: {
    contentType?: string
    id?: string
    indentLevel?: string
    specificUse?: string
    style?: string
    styleDetail?: string
    styleType?: string
  } /** Abbreviation or Acronym */
  abbrev?: Abbrev[]
  /** Alternatives For Processing */
  alternatives?: Alternatives[]
  /** Bold */
  bold?: Bold[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStruct[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Footnote */
  fn?: Fn[]
  /** Index Term */
  indexTerm?: IndexTerm[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeend[]
  /** Formula, Inline */
  inlineFormula?: InlineFormula[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphic[]
  /** Inline Media Object */
  inlineMedia?: InlineMedia[]
  /** Italic */
  italic?: Italic[]
  /** Milestone End */
  milestoneEnd?: MilestoneEnd[]
  /** Milestone Start */
  milestoneStart?: MilestoneStart[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateChar[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Target of an Internal Link */
  target?: Target[]
  /** Underline */
  underline?: Underline[]
  /** X(cross) Reference */
  xref?: Xref[]
}

interface Version extends Base {
  type: 'version'
  properties: {
    contentType?: string
    designator?: string
    id?: string
    specificUse?: string
  } /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
}

interface VolumeId extends Base {
  type: 'volumeId'
  properties: {
    assigningAuthority?: string
    contentType?: string
    hreflang?: string
    id?: string
    pubIdtype?: string
    specificUse?: string
  }
}

interface VolumeIssuegroup extends Base {
  type: 'volumeIssuegroup'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  } /** Issue Number */
  issue?: Issue[]
  /** Issue Identifier */
  issueId?: IssueId[]
  /** Issue Part */
  issuePart?: IssuePart
  /** Issue Title */
  issueSponsor?: IssueSponsor[]
  /** Issue Title */
  issueTitle?: IssueTitle[]
  /** Issue Title Group */
  issueTitlegroup?: IssueTitlegroup[]
  /** Volume Number */
  volume?: Volume[]
  /** Volume Identifier */
  volumeId?: VolumeId[]
  /** Volume Series */
  volumeSeries?: VolumeSeries
}

interface VolumeSeries extends Base {
  type: 'volumeSeries'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Volume extends Base {
  type: 'volume'
  properties: {
    contentType?: string
    id?: string
    seq?: string
    specificUse?: string
  }
}

interface WordCount extends Base {
  type: 'wordCount'
  properties: {
    count: string
    id?: string
  }
}

interface Xref extends Base {
  type: 'xref'
  properties: {
    alt?: string
    customType?: string
    id?: string

    rid?: string
    specificUse?: string
  }
  refType?: XrefTypeRefType /** Bold */
  bold?: Bold[]
  /** Fixed Case */
  fixedCase?: FixedCase[]
  /** Italic */
  italic?: Italic[]
  /** Monospace Text (Typewriter Text) */
  monospace?: Monospace[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContent[]
  /** Overline */
  overline?: Overline[]
  /** Roman */
  roman?: Roman[]
  /** Ruby Wrapper */
  ruby?: Ruby[]
  /** Sans Serif */
  sansSerif?: SansSerif[]
  /** Small Caps */
  sc?: Sc[]
  /** Strike Through */
  strike?: Strike[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContent[]
  /** Subscript */
  sub?: Sub[]
  /** Superscript */
  sup?: Sup[]
  /** Underline */
  underline?: Underline[]
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
interface _XrefTypeRefType extends Primitive._string {
  content: XrefTypeRefType
}

interface X extends Base {
  type: 'x'
  properties: {
    contentType?: string
    id?: string
    specificUse?: string
  }
}

interface Year extends Base {
  type: 'year'
  properties: {
    calendar?: string
    contentType?: string
    id?: string
    iso8601Date?: string
    specificUse?: string
  }
}

export interface document extends Base {
  type: 'document'
  /** Abbreviation or Acronym */
  abbrev: Abbrev
  /** Abbreviated Journal Title */
  abbrevJournaltitle: AbbrevJournaltitle
  /** Abstract */
  abstract: Abstract
  /** Access Date For Cited Work */
  accessDate: AccessDate
  /** Acknowledgments */
  ack: Ack
  /** Address Line */
  addrLine: AddrLine
  /** Address/Contact Information */
  address: Address
  /** Affiliation */
  aff: Aff
  /** Affiliation Alternatives */
  affAlternatives: AffAlternatives
  /** Alternate Title Text For a Figure, Etc. */
  altText: AltText
  /** Alternate Title */
  altTitle: AltTitle
  /** Alternatives For Processing */
  alternatives: Alternatives
  /** Annotation in a Citation */
  annotation: Annotation
  /** Anonymous */
  anonymous: Anonymous
  /** Answer Elements */
  answer: Answer
  /** Answer Set */
  answerSet: AnswerSet
  /** Appendix */
  app: App
  /** Appendix Group */
  appGroup: AppGroup
  /** Array (Simple Tabular Array) */
  array: Array
  /** Article */
  article: Article
  /** Article Grouping Data */
  articleCategories: ArticleCategories
  /** Article Identifier */
  articleId: ArticleId
  /** Article Metadata */
  articleMeta: ArticleMeta
  /** Article Title */
  articleTitle: ArticleTitle
  /** Article Version */
  articleVersion: ArticleVersion
  /** Article Version Alternatives */
  articleVersionalternatives: ArticleVersionalternatives
  /** Attribution */
  attrib: Attrib
  /** Author Comment */
  authorComment: AuthorComment
  /** Author Note Group */
  authorNotes: AuthorNotes
  /** Award Description */
  awardDesc: AwardDesc
  /** Award Group */
  awardGroup: AwardGroup
  /** Award Identifier */
  awardId: AwardId
  /** Award Name */
  awardName: AwardName
  /** Back Matter */
  back: Back
  /** Biography */
  bio: Bio
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternatives
  /** Body of the Article */
  body: Body
  /** Bold */
  bold: Bold
  /** Boxed Text */
  boxedText: BoxedText
  /** Line Break */
  break: Break
  /** Caption of a Figure, Table, Etc. */
  caption: Caption
  /** Chapter Title in a Citation */
  chapterTitle: ChapterTitle
  /** Chemical Structure (Display) */
  chemStruct: ChemStruct
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrap
  /** Citation Alternatives */
  citationAlternatives: CitationAlternatives
  /** City: in an Address */
  city: City
  /** Code Text */
  code: Code
  col: Col
  colgroup: Colgroup
  /** Collaborative (Group) Author */
  collab: Collab
  /** Collaboration Alternatives */
  collabAlternatives: CollabAlternatives
  /** Comment in a Citation */
  comment: Comment
  /** Compound Keyword */
  compoundKwd: CompoundKwd
  /** Compound Keyword Part */
  compoundKwdpart: CompoundKwdpart
  /** Compound Subject Name */
  compoundSubject: CompoundSubject
  /** Compound Subject Part Name */
  compoundSubjectpart: CompoundSubjectpart
  /** Conference Acronym */
  confAcronym: ConfAcronym
  /** Conference Date */
  confDate: ConfDate
  /** Conference Location */
  confLoc: ConfLoc
  /** Conference Name */
  confName: ConfName
  /** Conference Number */
  confNum: ConfNum
  /** Conference Sponsor */
  confSponsor: ConfSponsor
  /** Conference Theme */
  confTheme: ConfTheme
  /** Conference Information */
  conference: Conference
  /** Contributor */
  contrib: Contrib
  /** Contributor Group */
  contribGroup: ContribGroup
  /** Contributor Identifier */
  contribId: ContribId
  /** Contributed Resource Group */
  contributedResourcegroup: ContributedResourcegroup
  /** Copyright Holder */
  copyrightHolder: CopyrightHolder
  /** Copyright Statement */
  copyrightStatement: CopyrightStatement
  /** Copyright Year */
  copyrightYear: CopyrightYear
  /** Correspondence Information */
  corresp: Corresp
  /** Count */
  count: Count
  /** Country: in an Address */
  country: Country
  /** Counts */
  counts: Counts
  /** Custom Metadata */
  customMeta: CustomMeta
  /** Custom Metadata Group */
  customMetagroup: CustomMetagroup
  /** Data Title in a Citation */
  dataTitle: DataTitle
  /** Date */
  date: Date
  /** Date Inside Citation */
  dateIncitation: DateIncitation
  /** Day */
  day: Day
  /** Definition List: Definition */
  def: Def
  /** Definition List: Definition Head */
  defHead: DefHead
  /** Definition List: Definition Item */
  defItem: DefItem
  /** Definition List */
  defList: DefList
  /** Degree(s) */
  degrees: Degrees
  /** Formula, Display */
  dispFormula: DispFormula
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroup
  /** Quote, Displayed */
  dispQuote: DispQuote
  /** Edition Statement, Cited */
  edition: Edition
  /** Element Citation */
  elementCitation: ElementCitation
  /** Electronic Location Identifier */
  elocationId: ElocationId
  /** Email Address */
  email: Email
  /** Equation Count */
  equationCount: EquationCount
  /** Era */
  era: Era
  /** Et Al */
  etal: Etal
  /** Event in Publishing History */
  event: Event
  /** Event Description */
  eventDesc: EventDesc
  /** Explanation */
  explanation: Explanation
  /** External Link */
  extLink: ExtLink
  /** Extended-by Model */
  extendedBy: ExtendedBy
  /** Fax Number: in an Address */
  fax: Fax
  /** Figure */
  fig: Fig
  /** Figure Count */
  figCount: FigCount
  /** Figure Group */
  figGroup: FigGroup
  /** Fixed Case */
  fixedCase: FixedCase
  /** Floats Group */
  floatsGroup: FloatsGroup
  /** Footnote */
  fn: Fn
  /** Footnote Group */
  fnGroup: FnGroup
  /** First Page */
  fpage: Fpage
  /** Front Matter */
  front: Front
  /** Stub Front Metadata */
  frontStub: FrontStub
  /** Funding Group */
  fundingGroup: FundingGroup
  /** Funding Source */
  fundingSource: FundingSource
  /** Funding Statement */
  fundingStatement: FundingStatement
  /** Given (First) Names */
  givenNames: GivenNames
  /** Glossary Elements */
  glossary: Glossary
  /** Glyph Data For a Private Character */
  glyphData: GlyphData
  /** Glyph Reference For a Private Character */
  glyphRef: GlyphRef
  /** Government Report, Cited */
  gov: Gov
  /** Graphic */
  graphic: Graphic
  /** History: Document History */
  history: History
  /** Horizontal Rule */
  hr: Hr
  /** Index Term */
  indexTerm: IndexTerm
  /** Index Term Range End */
  indexTermrangeend: IndexTermrangeend
  /** Formula, Inline */
  inlineFormula: InlineFormula
  /** Inline Graphic */
  inlineGraphic: InlineGraphic
  /** Inline Media Object */
  inlineMedia: InlineMedia
  /** Inline Supplementary Material */
  inlineSupplementarymaterial: InlineSupplementarymaterial
  /** Institution Name: in an Address */
  institution: Institution
  /** Institution Identifier */
  institutionId: InstitutionId
  /** Institution Wrapper */
  institutionWrap: InstitutionWrap
  /** Isbn */
  isbn: Isbn
  /** Issn */
  issn: Issn
  /** Issn Linking */
  issnL: IssnL
  /** Issue Number */
  issue: Issue
  /** Issue Identifier */
  issueId: IssueId
  /** Issue Part */
  issuePart: IssuePart
  /** Issue Title */
  issueSponsor: IssueSponsor
  /** Issue Subtitle */
  issueSubtitle: IssueSubtitle
  /** Issue Title */
  issueTitle: IssueTitle
  /** Issue Title Group */
  issueTitlegroup: IssueTitlegroup
  /** Italic */
  italic: Italic
  /** Journal Identifier */
  journalId: JournalId
  /** Journal Metadata */
  journalMeta: JournalMeta
  /** Journal Subtitle */
  journalSubtitle: JournalSubtitle
  /** Journal Title (Full) */
  journalTitle: JournalTitle
  /** Journal Title Group */
  journalTitlegroup: JournalTitlegroup
  /** Keyword */
  kwd: Kwd
  /** Keyword Group */
  kwdGroup: KwdGroup
  /** Label of a Figure, Reference, Etc. */
  label: Label
  /** License Information */
  license: License
  /** License Paragraph */
  licenseP: LicenseP
  /** List */
  list: List
  /** List Item */
  listItem: ListItem
  /** Long Description */
  longDesc: LongDesc
  /** Last Page */
  lpage: Lpage
  /** Media Object */
  media: Media
  /** Metadata Data Name For Custom Metadata */
  metaName: MetaName
  /** Metadata Data Value For Custom Metadata */
  metaValue: MetaValue
  /** Milestone End */
  milestoneEnd: MilestoneEnd
  /** Milestone Start */
  milestoneStart: MilestoneStart
  /** Mixed Citation */
  mixedCitation: MixedCitation
  /** Monospace Text (Typewriter Text) */
  monospace: Monospace
  /** Month */
  month: Month
  /** Name of Person (Structured) */
  name: Name
  /** Name Alternatives */
  nameAlternatives: NameAlternatives
  /** Named Special (Subject) Content */
  namedContent: NamedContent
  /** Nested Keyword */
  nestedKwd: NestedKwd
  /** Nlm Citation Model */
  nlmCitation: NlmCitation
  /** Note in a Reference List */
  note: Note
  /** Notes */
  notes: Notes
  /** Object Identifier */
  objectId: ObjectId
  /** On Behalf of */
  onBehalfof: OnBehalfof
  /** Open Access */
  openAccess: OpenAccess
  /** Option Elements */
  option: Option
  /** Overline */
  overline: Overline
  /** Overline End */
  overlineEnd: OverlineEnd
  /** Overline Start */
  overlineStart: OverlineStart
  /** Paragraph */
  p: P
  /** Page Count */
  pageCount: PageCount
  /** Page Ranges */
  pageRange: PageRange
  /** Part Title in a Citation */
  partTitle: PartTitle
  /** Patent Number, Cited */
  patent: Patent
  /** Permissions */
  permissions: Permissions
  /** Person Group For a Cited Publication */
  personGroup: PersonGroup
  /** Phone Number: in an Address */
  phone: Phone
  /** Postal Code: in an Address */
  postalCode: PostalCode
  /** Prefix */
  prefix: Prefix
  /** Preformatted Text */
  preformat: Preformat
  /** Price */
  price: Price
  /** Principal Award Recipient */
  principalAwardrecipient: PrincipalAwardrecipient
  /** Principal Investigator Recipient */
  principalInvestigator: PrincipalInvestigator
  /** Private Character (Custom or Unicode) */
  privateChar: PrivateChar
  /** Processing Metadata Model */
  processingMeta: ProcessingMeta
  /** Product Information */
  product: Product
  /** Publication Date */
  pubDate: PubDate
  /** Date Not Available Flag */
  pubDatenotavailable: PubDatenotavailable
  /** Publication History */
  pubHistory: PubHistory
  /** Publication Identifier For a Cited Publication */
  pubId: PubId
  /** Publisher */
  publisher: Publisher
  /** Publisher's Location */
  publisherLoc: PublisherLoc
  /** Publisher's Name */
  publisherName: PublisherName
  /** Question */
  question: Question
  /** Question Preamble */
  questionPreamble: QuestionPreamble
  /** Question Wrap */
  questionWrap: QuestionWrap
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroup
  /** Ruby Base */
  rb: Rb
  /** Reference Item */
  ref: Ref
  /** Reference Count */
  refCount: RefCount
  /** Reference List (Bibliographic Reference List) */
  refList: RefList
  /** Related Article Information */
  relatedArticle: RelatedArticle
  /** Related Object Information */
  relatedObject: RelatedObject
  /** Resource Group */
  resourceGroup: ResourceGroup
  /** Resource Identifier */
  resourceId: ResourceId
  /** Resource Name */
  resourceName: ResourceName
  /** Resource Wrap */
  resourceWrap: ResourceWrap
  /** Response */
  response: Response
  /** Restricted-by Model */
  restrictedBy: RestrictedBy
  /** Role or Function Title of Contributor */
  role: Role
  /** Roman */
  roman: Roman
  /** Ruby Parenthesis */
  rp: Rp
  /** Ruby Textual Annotation */
  rt: Rt
  /** Ruby Wrapper */
  ruby: Ruby
  /** Sans Serif */
  sansSerif: SansSerif
  /** Small Caps */
  sc: Sc
  /** Season */
  season: Season
  /** Section */
  sec: Sec
  /** Section Metadata */
  secMeta: SecMeta
  /** See */
  see: See
  /** See-Also Term */
  seeAlso: SeeAlso
  /** Uri For This Same Article Online */
  selfUri: SelfUri
  /** Series */
  series: Series
  /** Series Text: Header Text to Describe */
  seriesText: SeriesText
  /** Series Title */
  seriesTitle: SeriesTitle
  /** Signature */
  sig: Sig
  /** Signature Block */
  sigBlock: SigBlock
  /** Size */
  size: Size
  /** Source */
  source: Source
  /** Speaker */
  speaker: Speaker
  /** Speech */
  speech: Speech
  /** State or Province: in an Address */
  state: State
  /** Statement, Formal */
  statement: Statement
  /** Standard, Cited */
  std: Std
  /** Standards Organization */
  stdOrganization: StdOrganization
  /** Strike Through */
  strike: Strike
  /** String Conference Name */
  stringConf: StringConf
  /** Date As a String */
  stringDate: StringDate
  /** Name of Person (Unstructured) */
  stringName: StringName
  /** Styled Special (Subject) Content */
  styledContent: StyledContent
  /** Subscript */
  sub: Sub
  /** Sub-Article */
  subArticle: SubArticle
  subjGroup: SubjGroup
  /** Subject Name */
  subject: Subject
  /** Article Subtitle */
  subtitle: Subtitle
  /** Suffix */
  suffix: Suffix
  /** Superscript */
  sup: Sup
  /** Supplement */
  supplement: Supplement
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterial
  /** Support Description */
  supportDescription: SupportDescription
  /** Support Group */
  supportGroup: SupportGroup
  /** Support Source */
  supportSource: SupportSource
  /** Surname */
  surname: Surname
  /** Table: Table Element .............................. */
  table: Table
  /** Table Count */
  tableCount: TableCount
  /** Table Wrapper */
  tableWrap: TableWrap
  /** Table Wrap Footer */
  tableWrapfoot: TableWrapfoot
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroup
  /** Target of an Internal Link */
  target: Target
  tbody: Tbody
  td: Td
  /** Definition List: Term */
  term: Term
  /** Definition List: Term Head */
  termHead: TermHead
  /** Tex Math Equation */
  texMath: TexMath
  /** Textual Form */
  textualForm: TextualForm
  tfoot: Tfoot
  th: Th
  thead: Thead
  /** Time Stamp For Cited Work */
  timeStamp: TimeStamp
  /** Title */
  title: Title
  /** Title Group */
  titleGroup: TitleGroup
  tr: Tr
  /** Translated Abstract */
  transAbstract: TransAbstract
  /** Translated Source */
  transSource: TransSource
  /** Translated Subtitle */
  transSubtitle: TransSubtitle
  /** Translated Title */
  transTitle: TransTitle
  /** Translated Title Group */
  transTitlegroup: TransTitlegroup
  /** Underline */
  underline: Underline
  /** Underline End */
  underlineEnd: UnderlineEnd
  /** Underline Start */
  underlineStart: UnderlineStart
  /** Unstructured Keyword Group */
  unstructuredKwdgroup: UnstructuredKwdgroup
  /** Uri */
  uri: Uri
  /** Verse Form For Poetry */
  verseGroup: VerseGroup
  /** Line of a Verse */
  verseLine: VerseLine
  /** Version Statement, Cited */
  version: Version
  /** Volume Number */
  volume: Volume
  /** Volume Identifier */
  volumeId: VolumeId
  /** Translated Title Group */
  volumeIssuegroup: VolumeIssuegroup
  /** Volume Series */
  volumeSeries: VolumeSeries
  /** Word Count */
  wordCount: WordCount
  /** X - Generated Text and Punctuation */
  x: X
  /** X(cross) Reference */
  xref: Xref
  /** Year */
  year: Year
}

export var document: document
