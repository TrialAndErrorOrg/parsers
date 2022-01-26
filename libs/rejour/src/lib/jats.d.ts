import * as Primitive from './xml-primitives'

// Source files:
// http://localhost:3001/jats.xsd

interface BaseType {
  _exists: boolean
  _namespace: string
}
interface _AbbrevJournaltitleType extends BaseType {
  abbrevType?: string
  id?: string
  specificUse?: string
}
interface AbbrevJournaltitleType extends _AbbrevJournaltitleType {
  constructor: { new (): AbbrevJournaltitleType }
}

interface _AbbrevType extends BaseType {
  alt?: string
  contentType?: string
  hreflang?: string
  id?: string
  specificUse?: string
  /** Definition List: Definition */
  def?: DefType[]
}
interface AbbrevType extends _AbbrevType {
  constructor: { new (): AbbrevType }
}

interface _AbstractType extends BaseType {
  abstractType?: string
  id?: string
  specificUse?: string
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Section */
  sec?: SecType[]
  /** Title */
  title?: TitleType
}
interface AbstractType extends _AbstractType {
  constructor: { new (): AbstractType }
}

interface _AccessDateType extends BaseType {
  calendar?: string
  contentType?: string
  id?: string
  iso8601Date?: string
  specificUse?: string
}
interface AccessDateType extends _AccessDateType {
  constructor: { new (): AccessDateType }
}

interface _AckType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Section */
  sec?: SecType[]
  subjGroup?: SubjGroupType[]
  /** Title */
  title?: TitleType
}
interface AckType extends _AckType {
  constructor: { new (): AckType }
}

interface _AddressType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Address Line */
  addrLine?: AddrLineType[]
  /** City: in an Address */
  city?: CityType[]
  /** Country: in an Address */
  country?: CountryType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fax Number: in an Address */
  fax?: FaxType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Phone Number: in an Address */
  phone?: PhoneType[]
  /** Postal Code: in an Address */
  postalCode?: PostalCodeType[]
  /** State or Province: in an Address */
  state?: StateType[]
  /** Uri */
  uri?: UriType[]
}
interface AddressType extends _AddressType {
  constructor: { new (): AddressType }
}

interface _AddrLineType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** City: in an Address */
  city?: CityType[]
  /** Country: in an Address */
  country?: CountryType[]
  /** Fax Number: in an Address */
  fax?: FaxType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Phone Number: in an Address */
  phone?: PhoneType[]
  /** Postal Code: in an Address */
  postalCode?: PostalCodeType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** State or Province: in an Address */
  state?: StateType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface AddrLineType extends _AddrLineType {
  constructor: { new (): AddrLineType }
}

interface _AffAlternativesType extends BaseType {
  id?: string
  /** Affiliation */
  aff: AffType[]
}
interface AffAlternativesType extends _AffAlternativesType {
  constructor: { new (): AffAlternativesType }
}

interface _AffType extends BaseType {
  contentType?: string
  id?: string
  rid?: string
  specificUse?: string
  /** Address Line */
  addrLine?: AddrLineType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** City: in an Address */
  city?: CityType[]
  /** Country: in an Address */
  country?: CountryType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fax Number: in an Address */
  fax?: FaxType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Italic */
  italic?: ItalicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Overline */
  overline?: OverlineType[]
  /** Phone Number: in an Address */
  phone?: PhoneType[]
  /** Postal Code: in an Address */
  postalCode?: PostalCodeType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** State or Province: in an Address */
  state?: StateType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface AffType extends _AffType {
  constructor: { new (): AffType }
}

interface _AlternativesType extends BaseType {
  id?: string
  /** Array (Simple Tabular Array) */
  array: ArrayType[]
  /** Chemical Structure (Display) */
  chemStruct: ChemStructType[]
  /** Code Text */
  code: CodeType[]
  /** Graphic */
  graphic: GraphicType[]
  /** Inline Graphic */
  inlineGraphic: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial: InlineSupplementarymaterialType[]
  /** Media Object */
  media: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Preformatted Text */
  preformat: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar: PrivateCharType[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterialType[]
  /** Table: Table Element .............................. */
  table: TableType[]
  /** Tex Math Equation */
  texMath: TexMathType[]
  /** Textual Form */
  textualForm: TextualFormType[]
}
interface AlternativesType extends _AlternativesType {
  constructor: { new (): AlternativesType }
}

interface _AltTextType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface AltTextType extends _AltTextType {
  constructor: { new (): AltTextType }
}

interface _AltTitleType extends BaseType {
  altTitletype?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface AltTitleType extends _AltTitleType {
  constructor: { new (): AltTitleType }
}

interface _AnnotationType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Paragraph */
  p: PType[]
}
interface AnnotationType extends _AnnotationType {
  constructor: { new (): AnnotationType }
}

interface _AnonymousType extends BaseType {
  id?: string
  specificUse?: string
}
interface AnonymousType extends _AnonymousType {
  constructor: { new (): AnonymousType }
}

interface _AnswerSetType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Alternate Title */
  altTitle?: AltTitleType[]
  /** Answer Elements */
  answer: AnswerType[]
  /** Explanation */
  explanation: ExplanationType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p: PType[]
  /** Article Subtitle */
  subtitle?: SubtitleType[]
  /** Title */
  title?: TitleType
}
interface AnswerSetType extends _AnswerSetType {
  constructor: { new (): AnswerSetType }
}

interface _AnswerType extends BaseType {
  contentType?: string
  id?: string
  pointerToquestion: string
  specificUse?: string
  /** Address/Contact Information */
  address: AddressType[]
  /** Alternate Title */
  altTitle?: AltTitleType[]
  /** Alternatives For Processing */
  alternatives: AlternativesType[]
  /** Answer Elements */
  answer: AnswerType[]
  /** Answer Set */
  answerSet: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternativesType[]
  /** Boxed Text */
  boxedText: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrapType[]
  /** Code Text */
  code: CodeType[]
  /** Definition List */
  defList: DefListType[]
  /** Formula, Display */
  dispFormula: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig: FigType[]
  /** Figure Group */
  figGroup: FigGroupType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list: ListType[]
  /** Media Object */
  media: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p: PType[]
  /** Preformatted Text */
  preformat: PreformatType[]
  /** Question */
  question: QuestionType[]
  /** Question Wrap */
  questionWrap: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle: RelatedArticleType[]
  /** Related Object Information */
  relatedObject: RelatedObjectType[]
  /** Section */
  sec: SecType[]
  /** Speech */
  speech: SpeechType[]
  /** Statement, Formal */
  statement: StatementType[]
  /** Article Subtitle */
  subtitle?: SubtitleType[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup: VerseGroupType[]
}
interface AnswerType extends _AnswerType {
  constructor: { new (): AnswerType }
}

interface _AppGroupType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Appendix */
  app?: AppType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  subjGroup?: SubjGroupType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface AppGroupType extends _AppGroupType {
  constructor: { new (): AppGroupType }
}

interface _AppType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Paragraph */
  p?: PType[]
  /** Permissions */
  permissions?: PermissionsType
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Section */
  sec?: SecType[]
  /** Section Metadata */
  secMeta?: SecMetaType
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Title */
  title: TitleType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface AppType extends _AppType {
  constructor: { new (): AppType }
}

interface _ArrayType extends BaseType {
  contentType?: string
  id?: string
  orientation?: ArrayTypeOrientationType
  specificUse?: string
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Media Object */
  media?: MediaType[]
  /** Permissions */
  permissions?: PermissionsType[]
  tbody: TbodyType
  /** Uri */
  uri?: UriType[]
}
interface ArrayType extends _ArrayType {
  constructor: { new (): ArrayType }
}

type ArrayTypeOrientationType = 'landscape' | 'portrait'
interface _ArrayTypeOrientationType extends Primitive._string {
  content: ArrayTypeOrientationType
}

interface _ArticleCategoriesType extends BaseType {
  id?: string
  /** Series Text: Header Text to Describe */
  seriesText?: SeriesTextType[]
  /** Series Title */
  seriesTitle?: SeriesTitleType[]
  subjGroup?: SubjGroupType[]
}
interface ArticleCategoriesType extends _ArticleCategoriesType {
  constructor: { new (): ArticleCategoriesType }
}

interface _ArticleIdType extends BaseType {
  assigningAuthority?: string
  customType?: string
  id?: string
  pubIdtype?: ArticleIdTypePubIdtypeType
  specificUse?: string
}
interface ArticleIdType extends _ArticleIdType {
  constructor: { new (): ArticleIdType }
}

type ArticleIdTypePubIdtypeType =
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
interface _ArticleIdTypePubIdtypeType extends Primitive._string {
  content: ArticleIdTypePubIdtypeType
}

interface _ArticleMetaType extends BaseType {
  id?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Affiliation */
  aff?: AffType[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternativesType[]
  /** Article Grouping Data */
  articleCategories?: ArticleCategoriesType
  /** Article Identifier */
  articleId?: ArticleIdType[]
  /** Article Version */
  articleVersion?: ArticleVersionType
  /** Article Version Alternatives */
  articleVersionalternatives?: ArticleVersionalternativesType
  /** Author Note Group */
  authorNotes?: AuthorNotesType
  /** Conference Information */
  conference?: ConferenceType[]
  /** Contributor Group */
  contribGroup?: ContribGroupType[]
  /** Counts */
  counts?: CountsType
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroupType
  /** Electronic Location Identifier */
  elocationId?: ElocationIdType
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** First Page */
  fpage?: FpageType
  /** Funding Group */
  fundingGroup?: FundingGroupType[]
  /** History: Document History */
  history?: HistoryType
  /** Isbn */
  isbn?: IsbnType[]
  /** Issue Number */
  issue?: IssueType[]
  /** Issue Identifier */
  issueId?: IssueIdType[]
  /** Issue Part */
  issuePart?: IssuePartType
  /** Issue Title */
  issueSponsor?: IssueSponsorType[]
  /** Issue Title */
  issueTitle?: IssueTitleType[]
  /** Issue Title Group */
  issueTitlegroup?: IssueTitlegroupType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Last Page */
  lpage?: LpageType
  /** Page Ranges */
  pageRange?: PageRangeType
  /** Permissions */
  permissions?: PermissionsType
  /** Product Information */
  product?: ProductType[]
  /** Publication Date */
  pubDate: PubDateType[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailableType
  /** Publication History */
  pubHistory?: PubHistoryType
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Uri For This Same Article Online */
  selfUri?: SelfUriType[]
  /** Supplement */
  supplement?: SupplementType
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Support Group */
  supportGroup?: SupportGroupType[]
  /** Title Group */
  titleGroup: TitleGroupType
  /** Translated Abstract */
  transAbstract?: TransAbstractType[]
  /** Uri */
  uri?: UriType[]
  /** Volume Number */
  volume?: VolumeType[]
  /** Volume Identifier */
  volumeId?: VolumeIdType[]
  /** Translated Title Group */
  volumeIssuegroup?: VolumeIssuegroupType[]
  /** Volume Series */
  volumeSeries?: VolumeSeriesType
}
interface ArticleMetaType extends _ArticleMetaType {
  constructor: { new (): ArticleMetaType }
}

interface _ArticleTitleType extends BaseType {
  id?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface ArticleTitleType extends _ArticleTitleType {
  constructor: { new (): ArticleTitleType }
}

interface _ArticleType extends BaseType {
  articleType?: string
  dtdVersion?: ArticleTypeDtdVersionType
  id?: string
  specificUse?: string
  /** Back Matter */
  back?: BackType
  /** Body of the Article */
  body?: BodyType
  /** Floats Group */
  floatsGroup?: FloatsGroupType
  /** Front Matter */
  front: FrontType
  /** Processing Metadata Model */
  processingMeta?: ProcessingMetaType
  /** Response */
  response?: ResponseType[]
  /** Sub-Article */
  subArticle?: SubArticleType[]
}
interface ArticleType extends _ArticleType {
  constructor: { new (): ArticleType }
}

type ArticleTypeDtdVersionType =
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
interface _ArticleTypeDtdVersionType extends Primitive._string {
  content: ArticleTypeDtdVersionType
}

interface _ArticleVersionalternativesType extends BaseType {
  id?: string
  /** Article Version */
  articleVersion: ArticleVersionType[]
}
interface ArticleVersionalternativesType
  extends _ArticleVersionalternativesType {
  constructor: { new (): ArticleVersionalternativesType }
}

interface _ArticleVersionType extends BaseType {
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
interface ArticleVersionType extends _ArticleVersionType {
  constructor: { new (): ArticleVersionType }
}

interface _AttribType extends BaseType {
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface AttribType extends _AttribType {
  constructor: { new (): AttribType }
}

interface _AuthorCommentType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Paragraph */
  p: PType[]
  /** Title */
  title?: TitleType
}
interface AuthorCommentType extends _AuthorCommentType {
  constructor: { new (): AuthorCommentType }
}

interface _AuthorNotesType extends BaseType {
  id?: string
  rid?: string
  specificUse?: string
  /** Correspondence Information */
  corresp: CorrespType[]
  /** Footnote */
  fn: FnType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Paragraph */
  p: PType[]
  /** Title */
  title?: TitleType
}
interface AuthorNotesType extends _AuthorNotesType {
  constructor: { new (): AuthorNotesType }
}

interface _AwardDescType extends BaseType {
  hreflang?: string
  id?: string
}
interface AwardDescType extends _AwardDescType {
  constructor: { new (): AwardDescType }
}

interface _AwardGroupType extends BaseType {
  awardType?: string
  hreflang?: string
  id?: string
  rid?: string
  specificUse?: string
  /** Award Description */
  awardDesc?: AwardDescType
  /** Award Identifier */
  awardId?: AwardIdType[]
  /** Award Name */
  awardName?: AwardNameType
  /** Funding Source */
  fundingSource?: FundingSourceType[]
  /** Principal Award Recipient */
  principalAwardrecipient?: PrincipalAwardrecipientType[]
  /** Principal Investigator Recipient */
  principalInvestigator?: PrincipalInvestigatorType[]
  /** Support Source */
  supportSource?: SupportSourceType[]
}
interface AwardGroupType extends _AwardGroupType {
  constructor: { new (): AwardGroupType }
}

interface _AwardIdType extends BaseType {
  assigningAuthority?: string
  awardIdtype?: string
  awardType?: string
  hreflang?: string
  id?: string
  rid?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface AwardIdType extends _AwardIdType {
  constructor: { new (): AwardIdType }
}

interface _AwardNameType extends BaseType {
  hreflang?: string
  id?: string
}
interface AwardNameType extends _AwardNameType {
  constructor: { new (): AwardNameType }
}

interface _BackType extends BaseType {
  id?: string
  /** Acknowledgments */
  ack?: AckType[]
  /** Appendix Group */
  appGroup?: AppGroupType[]
  /** Biography */
  bio?: BioType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Notes */
  notes?: NotesType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Section */
  sec?: SecType[]
  /** Title */
  title?: TitleType[]
}
interface BackType extends _BackType {
  constructor: { new (): BackType }
}

interface _BioType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  rid?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Section */
  sec?: SecType[]
  /** Section Metadata */
  secMeta?: SecMetaType
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface BioType extends _BioType {
  constructor: { new (): BioType }
}

interface _BlockAlternativesType extends BaseType {
  id?: string
  /** Boxed Text */
  boxedText: BoxedTextType[]
  /** Figure */
  fig: FigType[]
  /** Figure Group */
  figGroup: FigGroupType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Table Wrapper */
  tableWrap: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroupType[]
}
interface BlockAlternativesType extends _BlockAlternativesType {
  constructor: { new (): BlockAlternativesType }
}

interface _BodyType extends BaseType {
  id?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Section */
  sec?: SecType[]
  /** Signature Block */
  sigBlock?: SigBlockType
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface BodyType extends _BodyType {
  constructor: { new (): BodyType }
}

interface _BoldType extends BaseType {
  id?: string
  specificUse?: string
  toggle?: BoldTypeToggleType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface BoldType extends _BoldType {
  constructor: { new (): BoldType }
}

type BoldTypeToggleType = 'no' | 'yes'
interface _BoldTypeToggleType extends Primitive._string {
  content: BoldTypeToggleType
}

interface _BoxedTextType extends BaseType {
  contentType?: string
  id?: string
  orientation?: BoxedTextTypeOrientationType
  position?: BoxedTextTypePositionType
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Permissions */
  permissions?: PermissionsType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Section */
  sec?: SecType[]
  /** Section Metadata */
  secMeta?: SecMetaType
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface BoxedTextType extends _BoxedTextType {
  constructor: { new (): BoxedTextType }
}

type BoxedTextTypeOrientationType = 'landscape' | 'portrait'
interface _BoxedTextTypeOrientationType extends Primitive._string {
  content: BoxedTextTypeOrientationType
}

type BoxedTextTypePositionType = 'anchor' | 'background' | 'float' | 'margin'
interface _BoxedTextTypePositionType extends Primitive._string {
  content: BoxedTextTypePositionType
}

interface _BreakType extends BaseType {
  id?: string
}
interface BreakType extends _BreakType {
  constructor: { new (): BreakType }
}

interface _CaptionType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  style?: string
  /** Paragraph */
  p?: PType[]
  /** Title */
  title?: TitleType
}
interface CaptionType extends _CaptionType {
  constructor: { new (): CaptionType }
}

interface _ChapterTitleType extends BaseType {
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface ChapterTitleType extends _ChapterTitleType {
  constructor: { new (): ChapterTitleType }
}

interface _ChemStructType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  specificUse?: string
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Italic */
  italic?: ItalicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** List */
  list?: ListType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Media Object */
  media?: MediaType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface ChemStructType extends _ChemStructType {
  constructor: { new (): ChemStructType }
}

interface _ChemStructwrapType extends BaseType {
  contentType?: string
  id?: string
  orientation?: ChemStructwrapTypeOrientationType
  position?: ChemStructwrapTypePositionType
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Alternatives For Processing */
  alternatives: AlternativesType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType
  /** Chemical Structure (Display) */
  chemStruct: ChemStructType[]
  /** Code Text */
  code: CodeType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Graphic */
  graphic: GraphicType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Long Description */
  longDesc?: LongDescType[]
  /** Media Object */
  media: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Permissions */
  permissions?: PermissionsType[]
  /** Preformatted Text */
  preformat: PreformatType[]
  subjGroup?: SubjGroupType[]
  /** Textual Form */
  textualForm: TextualFormType[]
  /** Uri */
  uri?: UriType[]
}
interface ChemStructwrapType extends _ChemStructwrapType {
  constructor: { new (): ChemStructwrapType }
}

type ChemStructwrapTypeOrientationType = 'landscape' | 'portrait'
interface _ChemStructwrapTypeOrientationType extends Primitive._string {
  content: ChemStructwrapTypeOrientationType
}

type ChemStructwrapTypePositionType =
  | 'anchor'
  | 'background'
  | 'float'
  | 'margin'
interface _ChemStructwrapTypePositionType extends Primitive._string {
  content: ChemStructwrapTypePositionType
}

interface _CitationAlternativesType extends BaseType {
  id?: string
  /** Element Citation */
  elementCitation: ElementCitationType[]
  /** Mixed Citation */
  mixedCitation: MixedCitationType[]
  /** Nlm Citation Model */
  nlmCitation: NlmCitationType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
}
interface CitationAlternativesType extends _CitationAlternativesType {
  constructor: { new (): CitationAlternativesType }
}

interface _CityType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface CityType extends _CityType {
  constructor: { new (): CityType }
}

interface _CodeType extends BaseType {
  codeType?: string
  codeVersion?: string
  executable?: CodeTypeExecutableType
  id?: string
  language?: string
  languageVersion?: string
  orientation?: CodeTypeOrientationType
  platforms?: string
  position?: CodeTypePositionType
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Bold */
  bold?: BoldType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface CodeType extends _CodeType {
  constructor: { new (): CodeType }
}

type CodeTypeExecutableType = 'no' | 'yes'
interface _CodeTypeExecutableType extends Primitive._string {
  content: CodeTypeExecutableType
}

type CodeTypeOrientationType = 'landscape' | 'portrait'
interface _CodeTypeOrientationType extends Primitive._string {
  content: CodeTypeOrientationType
}

type CodeTypePositionType = 'anchor' | 'background' | 'float' | 'margin'
interface _CodeTypePositionType extends Primitive._string {
  content: CodeTypePositionType
}

interface _ColgroupType extends BaseType {
  align?: ColgroupTypeAlignType
  char?: string
  charoff?: string
  contentType?: string
  id?: string
  span?: string
  style?: string
  valign?: ColgroupTypeValignType
  width?: string
  col?: ColType[]
}
interface ColgroupType extends _ColgroupType {
  constructor: { new (): ColgroupType }
}

type ColgroupTypeAlignType = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _ColgroupTypeAlignType extends Primitive._string {
  content: ColgroupTypeAlignType
}

type ColgroupTypeValignType = 'baseline' | 'bottom' | 'middle' | 'top'
interface _ColgroupTypeValignType extends Primitive._string {
  content: ColgroupTypeValignType
}

interface _CollabAlternativesType extends BaseType {
  id?: string
  /** Collaborative (Group) Author */
  collab: CollabType[]
}
interface CollabAlternativesType extends _CollabAlternativesType {
  constructor: { new (): CollabAlternativesType }
}

interface _CollabType extends BaseType {
  collabType?: string
  hreflang?: string
  id?: string
  specificUse?: string
  symbol?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Address Line */
  addrLine?: AddrLineType[]
  /** Address/Contact Information */
  address?: AddressType[]
  /** Affiliation */
  aff?: AffType[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternativesType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Author Comment */
  authorComment?: AuthorCommentType[]
  /** Biography */
  bio?: BioType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** City: in an Address */
  city?: CityType[]
  /** Contributor Group */
  contribGroup?: ContribGroupType[]
  /** Country: in an Address */
  country?: CountryType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fax Number: in an Address */
  fax?: FaxType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** On Behalf of */
  onBehalfof?: OnBehalfofType[]
  /** Overline */
  overline?: OverlineType[]
  /** Phone Number: in an Address */
  phone?: PhoneType[]
  /** Postal Code: in an Address */
  postalCode?: PostalCodeType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Role or Function Title of Contributor */
  role?: RoleType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** State or Province: in an Address */
  state?: StateType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface CollabType extends _CollabType {
  constructor: { new (): CollabType }
}

interface _ColType extends BaseType {
  align?: ColTypeAlignType
  char?: string
  charoff?: string
  contentType?: string
  id?: string
  span?: string
  style?: string
  valign?: ColTypeValignType
  width?: string
}
interface ColType extends _ColType {
  constructor: { new (): ColType }
}

type ColTypeAlignType = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _ColTypeAlignType extends Primitive._string {
  content: ColTypeAlignType
}

type ColTypeValignType = 'baseline' | 'bottom' | 'middle' | 'top'
interface _ColTypeValignType extends Primitive._string {
  content: ColTypeValignType
}

interface _CommentType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface CommentType extends _CommentType {
  constructor: { new (): CommentType }
}

interface _CompoundKwdpartType extends BaseType {
  contentType?: string
  id?: string
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Underline */
  underline?: UnderlineType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface CompoundKwdpartType extends _CompoundKwdpartType {
  constructor: { new (): CompoundKwdpartType }
}

interface _CompoundKwdType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Compound Keyword Part */
  compoundKwdpart: CompoundKwdpartType[]
}
interface CompoundKwdType extends _CompoundKwdType {
  constructor: { new (): CompoundKwdType }
}

interface _CompoundSubjectpartType extends BaseType {
  contentType?: string
  id?: string
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface CompoundSubjectpartType extends _CompoundSubjectpartType {
  constructor: { new (): CompoundSubjectpartType }
}

interface _CompoundSubjectType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Compound Subject Part Name */
  compoundSubjectpart: CompoundSubjectpartType[]
}
interface CompoundSubjectType extends _CompoundSubjectType {
  constructor: { new (): CompoundSubjectType }
}

interface _ConfAcronymType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface ConfAcronymType extends _ConfAcronymType {
  constructor: { new (): ConfAcronymType }
}

interface _ConfDateType extends BaseType {
  calendar?: string
  contentType?: string
  id?: string
  iso8601Date?: string
  specificUse?: string
}
interface ConfDateType extends _ConfDateType {
  constructor: { new (): ConfDateType }
}

interface _ConferenceType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  specificUse?: string
  /** Conference Acronym */
  confAcronym: ConfAcronymType[]
  /** Conference Date */
  confDate: ConfDateType
  /** Conference Location */
  confLoc?: ConfLocType
  /** Conference Name */
  confName: ConfNameType[]
  /** Conference Number */
  confNum?: ConfNumType
  /** Conference Sponsor */
  confSponsor?: ConfSponsorType[]
  /** Conference Theme */
  confTheme?: ConfThemeType
}
interface ConferenceType extends _ConferenceType {
  constructor: { new (): ConferenceType }
}

interface _ConfLocType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Address Line */
  addrLine?: AddrLineType[]
  /** City: in an Address */
  city?: CityType[]
  /** Country: in an Address */
  country?: CountryType[]
  /** Fax Number: in an Address */
  fax?: FaxType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Phone Number: in an Address */
  phone?: PhoneType[]
  /** Postal Code: in an Address */
  postalCode?: PostalCodeType[]
  /** State or Province: in an Address */
  state?: StateType[]
}
interface ConfLocType extends _ConfLocType {
  constructor: { new (): ConfLocType }
}

interface _ConfNameType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface ConfNameType extends _ConfNameType {
  constructor: { new (): ConfNameType }
}

interface _ConfNumType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface ConfNumType extends _ConfNumType {
  constructor: { new (): ConfNumType }
}

interface _ConfSponsorType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
}
interface ConfSponsorType extends _ConfSponsorType {
  constructor: { new (): ConfSponsorType }
}

interface _ConfThemeType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface ConfThemeType extends _ConfThemeType {
  constructor: { new (): ConfThemeType }
}

interface _ContribGroupType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Affiliation */
  aff?: AffType[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternativesType[]
  /** Author Comment */
  authorComment?: AuthorCommentType[]
  /** Biography */
  bio?: BioType[]
  /** Contributor */
  contrib: ContribType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** On Behalf of */
  onBehalfof?: OnBehalfofType[]
  /** Role or Function Title of Contributor */
  role?: RoleType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface ContribGroupType extends _ContribGroupType {
  constructor: { new (): ContribGroupType }
}

interface _ContribIdType extends BaseType {
  assigningAuthority?: string
  authenticated?: ContribIdTypeAuthenticatedType
  contentType?: string
  contribIdtype?: string
  id?: string
  specificUse?: string
}
interface ContribIdType extends _ContribIdType {
  constructor: { new (): ContribIdType }
}

type ContribIdTypeAuthenticatedType = 'false' | 'true'
interface _ContribIdTypeAuthenticatedType extends Primitive._string {
  content: ContribIdTypeAuthenticatedType
}

interface _ContribType extends BaseType {
  contribType?: string
  corresp?: ContribTypeCorrespType
  deceased?: ContribTypeDeceasedType
  equalContrib?: ContribTypeEqualContribType
  hreflang?: string
  id?: string
  rid?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Affiliation */
  aff?: AffType[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternativesType[]
  /** Anonymous */
  anonymous?: AnonymousType[]
  /** Author Comment */
  authorComment?: AuthorCommentType[]
  /** Biography */
  bio?: BioType[]
  /** Collaborative (Group) Author */
  collab?: CollabType[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternativesType[]
  /** Contributor Identifier */
  contribId?: ContribIdType[]
  /** Degree(s) */
  degrees?: DegreesType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Name of Person (Structured) */
  name?: NameType[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternativesType[]
  /** On Behalf of */
  onBehalfof?: OnBehalfofType[]
  /** Role or Function Title of Contributor */
  role?: RoleType[]
  /** Name of Person (Unstructured) */
  stringName?: StringNameType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface ContribType extends _ContribType {
  constructor: { new (): ContribType }
}

type ContribTypeCorrespType = 'no' | 'yes'
interface _ContribTypeCorrespType extends Primitive._string {
  content: ContribTypeCorrespType
}

type ContribTypeDeceasedType = 'no' | 'yes'
interface _ContribTypeDeceasedType extends Primitive._string {
  content: ContribTypeDeceasedType
}

type ContribTypeEqualContribType = 'no' | 'yes'
interface _ContribTypeEqualContribType extends Primitive._string {
  content: ContribTypeEqualContribType
}

interface _ContributedResourcegroupType extends BaseType {
  id?: string
  resourceType?: string
  specificUse?: string
  /** Award Group */
  awardGroup?: AwardGroupType[]
  /** Resource Group */
  resourceGroup?: ResourceGroupType[]
  /** Support Description */
  supportDescription?: SupportDescriptionType[]
}
interface ContributedResourcegroupType extends _ContributedResourcegroupType {
  constructor: { new (): ContributedResourcegroupType }
}

interface _CopyrightHolderType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
}
interface CopyrightHolderType extends _CopyrightHolderType {
  constructor: { new (): CopyrightHolderType }
}

interface _CopyrightStatementType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
}
interface CopyrightStatementType extends _CopyrightStatementType {
  constructor: { new (): CopyrightStatementType }
}

interface _CopyrightYearType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface CopyrightYearType extends _CopyrightYearType {
  constructor: { new (): CopyrightYearType }
}

interface _CorrespType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Address Line */
  addrLine?: AddrLineType[]
  /** Bold */
  bold?: BoldType[]
  /** City: in an Address */
  city?: CityType[]
  /** Country: in an Address */
  country?: CountryType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fax Number: in an Address */
  fax?: FaxType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Italic */
  italic?: ItalicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Phone Number: in an Address */
  phone?: PhoneType[]
  /** Postal Code: in an Address */
  postalCode?: PostalCodeType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** State or Province: in an Address */
  state?: StateType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
}
interface CorrespType extends _CorrespType {
  constructor: { new (): CorrespType }
}

interface _CountryType extends BaseType {
  contentType?: string
  country?: string
  id?: string
  specificUse?: string
}
interface CountryType extends _CountryType {
  constructor: { new (): CountryType }
}

interface _CountsType extends BaseType {
  id?: string
  /** Count */
  count?: CountType[]
  /** Equation Count */
  equationCount?: EquationCountType
  /** Figure Count */
  figCount?: FigCountType
  /** Page Count */
  pageCount?: PageCountType
  /** Reference Count */
  refCount?: RefCountType
  /** Table Count */
  tableCount?: TableCountType
  /** Word Count */
  wordCount?: WordCountType
}
interface CountsType extends _CountsType {
  constructor: { new (): CountsType }
}

interface _CountType extends BaseType {
  count: string
  countType: string
  id?: string
}
interface CountType extends _CountType {
  constructor: { new (): CountType }
}

interface _CustomMetagroupType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Custom Metadata */
  customMeta: CustomMetaType[]
}
interface CustomMetagroupType extends _CustomMetagroupType {
  constructor: { new (): CustomMetagroupType }
}

interface _CustomMetaType extends BaseType {
  assigningAuthority?: string
  hreflang?: string
  id?: string
  specificUse?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Metadata Data Name For Custom Metadata */
  metaName: MetaNameType
  /** Metadata Data Value For Custom Metadata */
  metaValue: MetaValueType
}
interface CustomMetaType extends _CustomMetaType {
  constructor: { new (): CustomMetaType }
}

interface _DataTitleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
}
interface DataTitleType extends _DataTitleType {
  constructor: { new (): DataTitleType }
}

interface _DateIncitationType extends BaseType {
  calendar?: string
  contentType?: string
  id?: string
  iso8601Date?: string
  specificUse?: string
  /** Day */
  day?: DayType[]
  /** Era */
  era?: EraType[]
  /** Month */
  month?: MonthType[]
  /** Season */
  season?: SeasonType[]
  /** Year */
  year?: YearType[]
}
interface DateIncitationType extends _DateIncitationType {
  constructor: { new (): DateIncitationType }
}

interface _DateType extends BaseType {
  calendar?: string
  dateType?: string
  id?: string
  iso8601Date?: string
  publicationFormat?: string
  specificUse?: string
  /** Day */
  day?: DayType
  /** Era */
  era?: EraType
  /** Month */
  month?: MonthType
  /** Season */
  season?: SeasonType
  /** Year */
  year: YearType
}
interface DateType extends _DateType {
  constructor: { new (): DateType }
}

interface _DayType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface DayType extends _DayType {
  constructor: { new (): DayType }
}

interface _DefHeadType extends BaseType {
  id?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface DefHeadType extends _DefHeadType {
  constructor: { new (): DefHeadType }
}

interface _DefItemType extends BaseType {
  id?: string
  specificUse?: string
  /** Definition List: Definition */
  def?: DefType[]
  /** Definition List: Term */
  term: TermType
}
interface DefItemType extends _DefItemType {
  constructor: { new (): DefItemType }
}

interface _DefListType extends BaseType {
  continuedFrom?: string
  id?: string
  listContent?: string
  listType?: string
  prefixWord?: string
  specificUse?: string
  /** Definition List: Definition Head */
  defHead?: DefHeadType
  /** Definition List: Definition Item */
  defItem?: DefItemType[]
  /** Definition List */
  defList?: DefListType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Definition List: Term Head */
  termHead?: TermHeadType
  /** Title */
  title?: TitleType
}
interface DefListType extends _DefListType {
  constructor: { new (): DefListType }
}

interface _DefType extends BaseType {
  id?: string
  rid?: string
  specificUse?: string
  /** Paragraph */
  p: PType[]
}
interface DefType extends _DefType {
  constructor: { new (): DefType }
}

interface _DegreesType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface DegreesType extends _DegreesType {
  constructor: { new (): DegreesType }
}

interface _DispFormulagroupType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Long Description */
  longDesc?: LongDescType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  subjGroup?: SubjGroupType[]
  /** Uri */
  uri?: UriType[]
}
interface DispFormulagroupType extends _DispFormulagroupType {
  constructor: { new (): DispFormulagroupType }
}

interface _DispFormulaType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Code Text */
  code?: CodeType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Media Object */
  media?: MediaType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Overline */
  overline?: OverlineType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  subjGroup?: SubjGroupType[]
  /** Superscript */
  sup?: SupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
}
interface DispFormulaType extends _DispFormulaType {
  constructor: { new (): DispFormulaType }
}

interface _DispQuoteType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Paragraph */
  p?: PType[]
  /** Permissions */
  permissions?: PermissionsType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface DispQuoteType extends _DispQuoteType {
  constructor: { new (): DispQuoteType }
}

interface _EditionType extends BaseType {
  contentType?: string
  designator?: string
  id?: string
  specificUse?: string
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
}
interface EditionType extends _EditionType {
  constructor: { new (): EditionType }
}

interface _ElementCitationType extends BaseType {
  hreflang?: string
  id?: string
  publicationFormat?: string
  publicationType?: string
  publisherType?: string
  specificUse?: string
  useType?: string
  /** Abbreviation or Acronym */
  abbrev: AbbrevType[]
  /** Alternatives For Processing */
  alternatives: AlternativesType[]
  /** Annotation in a Citation */
  annotation: AnnotationType[]
  /** Article Title */
  articleTitle: ArticleTitleType[]
  /** Bold */
  bold: BoldType[]
  /** Chapter Title in a Citation */
  chapterTitle: ChapterTitleType[]
  /** Chemical Structure (Display) */
  chemStruct: ChemStructType[]
  /** Collaborative (Group) Author */
  collab: CollabType[]
  /** Collaboration Alternatives */
  collabAlternatives: CollabAlternativesType[]
  /** Comment in a Citation */
  comment: CommentType[]
  /** Conference Acronym */
  confAcronym: ConfAcronymType[]
  /** Conference Date */
  confDate: ConfDateType[]
  /** Conference Location */
  confLoc: ConfLocType[]
  /** Conference Name */
  confName: ConfNameType[]
  /** Conference Sponsor */
  confSponsor: ConfSponsorType[]
  /** Data Title in a Citation */
  dataTitle: DataTitleType[]
  /** Date */
  date: DateType[]
  /** Date Inside Citation */
  dateIncitation: DateIncitationType[]
  /** Day */
  day: DayType[]
  /** Edition Statement, Cited */
  edition: EditionType[]
  /** Electronic Location Identifier */
  elocationId: ElocationIdType[]
  /** Email Address */
  email: EmailType[]
  /** Et Al */
  etal: EtalType[]
  /** External Link */
  extLink: ExtLinkType[]
  /** Fixed Case */
  fixedCase: FixedCaseType[]
  /** First Page */
  fpage: FpageType[]
  /** Government Report, Cited */
  gov: GovType[]
  /** Index Term */
  indexTerm: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia: InlineMediaType[]
  /** Institution Name: in an Address */
  institution: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap: InstitutionWrapType[]
  /** Isbn */
  isbn: IsbnType[]
  /** Issn */
  issn: IssnType[]
  /** Issn Linking */
  issnL: IssnLType[]
  /** Issue Number */
  issue: IssueType[]
  /** Issue Identifier */
  issueId: IssueIdType[]
  /** Issue Part */
  issuePart: IssuePartType[]
  /** Issue Title */
  issueTitle: IssueTitleType[]
  /** Italic */
  italic: ItalicType[]
  /** Label of a Figure, Reference, Etc. */
  label: LabelType[]
  /** Last Page */
  lpage: LpageType[]
  /** Milestone End */
  milestoneEnd: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace: MonospaceType[]
  /** Month */
  month: MonthType[]
  /** Name of Person (Structured) */
  name: NameType[]
  /** Name Alternatives */
  nameAlternatives: NameAlternativesType[]
  /** Named Special (Subject) Content */
  namedContent: NamedContentType[]
  /** Object Identifier */
  objectId: ObjectIdType[]
  /** Overline */
  overline: OverlineType[]
  /** Page Ranges */
  pageRange: PageRangeType[]
  /** Part Title in a Citation */
  partTitle: PartTitleType[]
  /** Patent Number, Cited */
  patent: PatentType[]
  /** Person Group For a Cited Publication */
  personGroup: PersonGroupType[]
  /** Private Character (Custom or Unicode) */
  privateChar: PrivateCharType[]
  /** Publication Identifier For a Cited Publication */
  pubId: PubIdType[]
  /** Publisher's Location */
  publisherLoc: PublisherLocType[]
  /** Publisher's Name */
  publisherName: PublisherNameType[]
  /** Role or Function Title of Contributor */
  role: RoleType[]
  /** Roman */
  roman: RomanType[]
  /** Ruby Wrapper */
  ruby: RubyType[]
  /** Sans Serif */
  sansSerif: SansSerifType[]
  /** Small Caps */
  sc: ScType[]
  /** Season */
  season: SeasonType[]
  /** Series */
  series: SeriesType[]
  /** Size */
  size: SizeType[]
  /** Source */
  source: SourceType[]
  /** Standard, Cited */
  std: StdType[]
  /** Strike Through */
  strike: StrikeType[]
  /** Date As a String */
  stringDate: StringDateType[]
  /** Name of Person (Unstructured) */
  stringName: StringNameType[]
  /** Styled Special (Subject) Content */
  styledContent: StyledContentType[]
  /** Subscript */
  sub: SubType[]
  /** Superscript */
  sup: SupType[]
  /** Supplement */
  supplement: SupplementType[]
  /** Translated Source */
  transSource: TransSourceType[]
  /** Translated Title */
  transTitle: TransTitleType[]
  /** Underline */
  underline: UnderlineType[]
  /** Uri */
  uri: UriType[]
  /** Version Statement, Cited */
  version: VersionType[]
  /** Volume Number */
  volume: VolumeType[]
  /** Volume Identifier */
  volumeId: VolumeIdType[]
  /** Volume Series */
  volumeSeries: VolumeSeriesType[]
  /** Year */
  year: YearType[]
}
interface ElementCitationType extends _ElementCitationType {
  constructor: { new (): ElementCitationType }
}

interface _ElocationIdType extends BaseType {
  contentType?: string
  id?: string
  seq?: string
  specificUse?: string
}
interface ElocationIdType extends _ElocationIdType {
  constructor: { new (): ElocationIdType }
}

interface _EmailType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  specificUse?: string
}
interface EmailType extends _EmailType {
  constructor: { new (): EmailType }
}

interface _EquationCountType extends BaseType {
  count: string
  id?: string
}
interface EquationCountType extends _EquationCountType {
  constructor: { new (): EquationCountType }
}

interface _EraType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface EraType extends _EraType {
  constructor: { new (): EraType }
}

interface _EtalType extends BaseType {
  id?: string
  specificUse?: string
}
interface EtalType extends _EtalType {
  constructor: { new (): EtalType }
}

interface _EventDescType extends BaseType {
  id?: string
  specificUse?: string
  /** Article Identifier */
  articleId?: ArticleIdType[]
  /** Article Version */
  articleVersion?: ArticleVersionType[]
  /** Article Version Alternatives */
  articleVersionalternatives?: ArticleVersionalternativesType[]
  /** Date */
  date?: DateType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Isbn */
  isbn?: IsbnType[]
  /** Issn */
  issn?: IssnType[]
  /** Issn Linking */
  issnL?: IssnLType[]
  /** Publication Date */
  pubDate?: PubDateType[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailableType[]
  /** Date As a String */
  stringDate?: StringDateType[]
  /** Uri */
  uri?: UriType[]
}
interface EventDescType extends _EventDescType {
  constructor: { new (): EventDescType }
}

interface _EventType extends BaseType {
  eventType?: string
  id?: string
  specificUse?: string
  /** Article Identifier */
  articleId?: ArticleIdType[]
  /** Article Version */
  articleVersion?: ArticleVersionType
  /** Article Version Alternatives */
  articleVersionalternatives?: ArticleVersionalternativesType
  /** Date */
  date?: DateType[]
  /** Event Description */
  eventDesc?: EventDescType
  /** Isbn */
  isbn?: IsbnType[]
  /** Issn */
  issn?: IssnType[]
  /** Issn Linking */
  issnL?: IssnLType
  /** Notes */
  notes?: NotesType[]
  /** Permissions */
  permissions?: PermissionsType
  /** Publication Date */
  pubDate?: PubDateType[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailableType
  /** Uri For This Same Article Online */
  selfUri?: SelfUriType[]
}
interface EventType extends _EventType {
  constructor: { new (): EventType }
}

interface _ExplanationType extends BaseType {
  contentType?: string
  id?: string
  pointerToexplained: string
  specificUse?: string
  /** Address/Contact Information */
  address: AddressType[]
  /** Alternate Title */
  altTitle?: AltTitleType[]
  /** Alternatives For Processing */
  alternatives: AlternativesType[]
  /** Answer Elements */
  answer: AnswerType[]
  /** Answer Set */
  answerSet: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternativesType[]
  /** Boxed Text */
  boxedText: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrapType[]
  /** Code Text */
  code: CodeType[]
  /** Definition List */
  defList: DefListType[]
  /** Formula, Display */
  dispFormula: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote: DispQuoteType[]
  /** Figure */
  fig: FigType[]
  /** Figure Group */
  figGroup: FigGroupType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list: ListType[]
  /** Media Object */
  media: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p: PType[]
  /** Preformatted Text */
  preformat: PreformatType[]
  /** Question */
  question: QuestionType[]
  /** Question Wrap */
  questionWrap: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle: RelatedArticleType[]
  /** Related Object Information */
  relatedObject: RelatedObjectType[]
  /** Section */
  sec: SecType[]
  /** Speech */
  speech: SpeechType[]
  /** Statement, Formal */
  statement: StatementType[]
  /** Article Subtitle */
  subtitle?: SubtitleType[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup: VerseGroupType[]
}
interface ExplanationType extends _ExplanationType {
  constructor: { new (): ExplanationType }
}

interface _ExtendedByType extends BaseType {
  assigningAuthority?: string
  designator?: string
  hreflang?: string
  id?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
}
interface ExtendedByType extends _ExtendedByType {
  constructor: { new (): ExtendedByType }
}

interface _ExtLinkType extends BaseType {
  assigningAuthority?: string
  extLinktype?: string
  hreflang?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface ExtLinkType extends _ExtLinkType {
  constructor: { new (): ExtLinkType }
}

interface _FaxType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface FaxType extends _FaxType {
  constructor: { new (): FaxType }
}

interface _FigCountType extends BaseType {
  count: string
  id?: string
}
interface FigCountType extends _FigCountType {
  constructor: { new (): FigCountType }
}

interface _FigGroupType extends BaseType {
  contentType?: string
  id?: string
  orientation?: FigGroupTypeOrientationType
  position?: FigGroupTypePositionType
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Figure */
  fig?: FigType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Media Object */
  media?: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  subjGroup?: SubjGroupType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface FigGroupType extends _FigGroupType {
  constructor: { new (): FigGroupType }
}

type FigGroupTypeOrientationType = 'landscape' | 'portrait'
interface _FigGroupTypeOrientationType extends Primitive._string {
  content: FigGroupTypeOrientationType
}

type FigGroupTypePositionType = 'anchor' | 'background' | 'float' | 'margin'
interface _FigGroupTypePositionType extends Primitive._string {
  content: FigGroupTypePositionType
}

interface _FigType extends BaseType {
  figType?: string
  id?: string
  orientation?: FigTypeOrientationType
  position?: FigTypePositionType
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** List */
  list?: ListType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Media Object */
  media?: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Permissions */
  permissions?: PermissionsType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  subjGroup?: SubjGroupType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Uri */
  uri?: UriType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface FigType extends _FigType {
  constructor: { new (): FigType }
}

type FigTypeOrientationType = 'landscape' | 'portrait'
interface _FigTypeOrientationType extends Primitive._string {
  content: FigTypeOrientationType
}

type FigTypePositionType = 'anchor' | 'background' | 'float' | 'margin'
interface _FigTypePositionType extends Primitive._string {
  content: FigTypePositionType
}

interface _FixedCaseType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface FixedCaseType extends _FixedCaseType {
  constructor: { new (): FixedCaseType }
}

interface _FloatsGroupType extends BaseType {
  id?: string
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Media Object */
  media?: MediaType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
}
interface FloatsGroupType extends _FloatsGroupType {
  constructor: { new (): FloatsGroupType }
}

interface _FnGroupType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Footnote */
  fn: FnType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Title */
  title?: TitleType
}
interface FnGroupType extends _FnGroupType {
  constructor: { new (): FnGroupType }
}

interface _FnType extends BaseType {
  customType?: string
  fnType?: FnTypeFnTypeType
  id?: string
  specificUse?: string
  symbol?: string
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Paragraph */
  p: PType[]
}
interface FnType extends _FnType {
  constructor: { new (): FnType }
}

type FnTypeFnTypeType =
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
interface _FnTypeFnTypeType extends Primitive._string {
  content: FnTypeFnTypeType
}

interface _FpageType extends BaseType {
  contentType?: string
  id?: string
  seq?: string
  specificUse?: string
}
interface FpageType extends _FpageType {
  constructor: { new (): FpageType }
}

interface _FrontStubType extends BaseType {
  id?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Affiliation */
  aff?: AffType[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternativesType[]
  /** Article Grouping Data */
  articleCategories?: ArticleCategoriesType
  /** Article Identifier */
  articleId?: ArticleIdType[]
  /** Article Version */
  articleVersion?: ArticleVersionType
  /** Article Version Alternatives */
  articleVersionalternatives?: ArticleVersionalternativesType
  /** Author Note Group */
  authorNotes?: AuthorNotesType
  /** Conference Information */
  conference?: ConferenceType[]
  /** Contributor Group */
  contribGroup?: ContribGroupType[]
  /** Counts */
  counts?: CountsType
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroupType
  /** Electronic Location Identifier */
  elocationId?: ElocationIdType
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** First Page */
  fpage?: FpageType
  /** Funding Group */
  fundingGroup?: FundingGroupType[]
  /** History: Document History */
  history?: HistoryType
  /** Isbn */
  isbn?: IsbnType[]
  /** Issue Number */
  issue?: IssueType[]
  /** Issue Identifier */
  issueId?: IssueIdType[]
  /** Issue Part */
  issuePart?: IssuePartType
  /** Issue Title */
  issueSponsor?: IssueSponsorType[]
  /** Issue Title */
  issueTitle?: IssueTitleType[]
  /** Issue Title Group */
  issueTitlegroup?: IssueTitlegroupType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Last Page */
  lpage?: LpageType
  /** Page Ranges */
  pageRange?: PageRangeType
  /** Permissions */
  permissions?: PermissionsType
  /** Product Information */
  product?: ProductType[]
  /** Publication Date */
  pubDate?: PubDateType[]
  /** Date Not Available Flag */
  pubDatenotavailable?: PubDatenotavailableType
  /** Publication History */
  pubHistory?: PubHistoryType
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Uri For This Same Article Online */
  selfUri?: SelfUriType[]
  /** Supplement */
  supplement?: SupplementType
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Support Group */
  supportGroup?: SupportGroupType[]
  /** Title Group */
  titleGroup?: TitleGroupType
  /** Translated Abstract */
  transAbstract?: TransAbstractType[]
  /** Uri */
  uri?: UriType[]
  /** Volume Number */
  volume?: VolumeType[]
  /** Volume Identifier */
  volumeId?: VolumeIdType[]
  /** Translated Title Group */
  volumeIssuegroup?: VolumeIssuegroupType[]
  /** Volume Series */
  volumeSeries?: VolumeSeriesType
}
interface FrontStubType extends _FrontStubType {
  constructor: { new (): FrontStubType }
}

interface _FrontType extends BaseType {
  id?: string
  /** Article Metadata */
  articleMeta: ArticleMetaType
  /** Journal Metadata */
  journalMeta: JournalMetaType
  /** Notes */
  notes?: NotesType
}
interface FrontType extends _FrontType {
  constructor: { new (): FrontType }
}

interface _FundingGroupType extends BaseType {
  id?: string
  specificUse?: string
  /** Award Group */
  awardGroup?: AwardGroupType[]
  /** Funding Statement */
  fundingStatement?: FundingStatementType[]
  /** Open Access */
  openAccess?: OpenAccessType[]
}
interface FundingGroupType extends _FundingGroupType {
  constructor: { new (): FundingGroupType }
}

interface _FundingSourceType extends BaseType {
  country?: string
  hreflang?: string
  id?: string
  rid?: string
  sourceType?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface FundingSourceType extends _FundingSourceType {
  constructor: { new (): FundingSourceType }
}

interface _FundingStatementType extends BaseType {
  id?: string
  rid?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
}
interface FundingStatementType extends _FundingStatementType {
  constructor: { new (): FundingStatementType }
}

interface _GivenNamesType extends BaseType {
  id?: string
  initials?: string
}
interface GivenNamesType extends _GivenNamesType {
  constructor: { new (): GivenNamesType }
}

interface _GlossaryType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface GlossaryType extends _GlossaryType {
  constructor: { new (): GlossaryType }
}

interface _GlyphDataType extends BaseType {
  fontchar?: string
  fontname?: string
  format?: string
  id?: string
  resolution?: string
  xSize?: string
  ySize?: string
}
interface GlyphDataType extends _GlyphDataType {
  constructor: { new (): GlyphDataType }
}

interface _GlyphRefType extends BaseType {
  glyphData?: string
  id?: string
}
interface GlyphRefType extends _GlyphRefType {
  constructor: { new (): GlyphRefType }
}

interface _GovType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface GovType extends _GovType {
  constructor: { new (): GovType }
}

interface _GraphicType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  mimeSubtype?: string
  mimetype?: string
  orientation?: GraphicTypeOrientationType
  position?: GraphicTypePositionType
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Permissions */
  permissions?: PermissionsType[]
  subjGroup?: SubjGroupType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface GraphicType extends _GraphicType {
  constructor: { new (): GraphicType }
}

type GraphicTypeOrientationType = 'landscape' | 'portrait'
interface _GraphicTypeOrientationType extends Primitive._string {
  content: GraphicTypeOrientationType
}

type GraphicTypePositionType = 'anchor' | 'background' | 'float' | 'margin'
interface _GraphicTypePositionType extends Primitive._string {
  content: GraphicTypePositionType
}

interface _HistoryType extends BaseType {
  id?: string
  /** Date */
  date: DateType[]
}
interface HistoryType extends _HistoryType {
  constructor: { new (): HistoryType }
}

interface _HrType extends BaseType {
  id?: string
}
interface HrType extends _HrType {
  constructor: { new (): HrType }
}

interface _IndexTermrangeendType extends BaseType {
  id?: string
  rid: string
}
interface IndexTermrangeendType extends _IndexTermrangeendType {
  constructor: { new (): IndexTermrangeendType }
}

interface _IndexTermType extends BaseType {
  contentType?: string
  id?: string
  indexType?: string
  specificUse?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Index Term */
  indexTerm: IndexTermType
  /** See */
  see?: SeeType[]
  /** See-Also Term */
  seeAlso?: SeeAlsoType[]
  /** Definition List: Term */
  term: TermType
}
interface IndexTermType extends _IndexTermType {
  constructor: { new (): IndexTermType }
}

interface _InlineFormulaType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface InlineFormulaType extends _InlineFormulaType {
  constructor: { new (): InlineFormulaType }
}

interface _InlineGraphicType extends BaseType {
  baselineShift?: string
  contentType?: string
  hreflang?: string
  id?: string
  mimeSubtype?: string
  mimetype?: string
  specificUse?: string
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Long Description */
  longDesc?: LongDescType[]
}
interface InlineGraphicType extends _InlineGraphicType {
  constructor: { new (): InlineGraphicType }
}

interface _InlineMediaType extends BaseType {
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
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Bold */
  bold?: BoldType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
}
interface InlineMediaType extends _InlineMediaType {
  constructor: { new (): InlineMediaType }
}

interface _InlineSupplementarymaterialType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  mimeSubtype?: string
  mimetype?: string
  specificUse?: string
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Bold */
  bold?: BoldType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
}
interface InlineSupplementarymaterialType
  extends _InlineSupplementarymaterialType {
  constructor: { new (): InlineSupplementarymaterialType }
}

interface _InstitutionIdType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  institutionIdtype?: string
  specificUse?: string
  vocab?: string
  vocabIdentifier?: string
}
interface InstitutionIdType extends _InstitutionIdType {
  constructor: { new (): InstitutionIdType }
}

interface _InstitutionType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  specificUse?: string
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
}
interface InstitutionType extends _InstitutionType {
  constructor: { new (): InstitutionType }
}

interface _InstitutionWrapType extends BaseType {
  id?: string
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Identifier */
  institutionId?: InstitutionIdType[]
}
interface InstitutionWrapType extends _InstitutionWrapType {
  constructor: { new (): InstitutionWrapType }
}

interface _IsbnType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  publicationFormat?: string
  specificUse?: string
}
interface IsbnType extends _IsbnType {
  constructor: { new (): IsbnType }
}

interface _IssnLType extends BaseType {
  assigningAuthority?: string
  id?: string
  specificUse?: string
}
interface IssnLType extends _IssnLType {
  constructor: { new (): IssnLType }
}

interface _IssnType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  pubType?: string
  publicationFormat?: string
  specificUse?: string
}
interface IssnType extends _IssnType {
  constructor: { new (): IssnType }
}

interface _IssueIdType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  hreflang?: string
  id?: string
  pubIdtype?: string
  specificUse?: string
}
interface IssueIdType extends _IssueIdType {
  constructor: { new (): IssueIdType }
}

interface _IssuePartType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface IssuePartType extends _IssuePartType {
  constructor: { new (): IssuePartType }
}

interface _IssueSponsorType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface IssueSponsorType extends _IssueSponsorType {
  constructor: { new (): IssueSponsorType }
}

interface _IssueSubtitleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface IssueSubtitleType extends _IssueSubtitleType {
  constructor: { new (): IssueSubtitleType }
}

interface _IssueTitlegroupType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Issue Subtitle */
  issueSubtitle?: IssueSubtitleType[]
  /** Issue Title */
  issueTitle: IssueTitleType
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroupType[]
}
interface IssueTitlegroupType extends _IssueTitlegroupType {
  constructor: { new (): IssueTitlegroupType }
}

interface _IssueTitleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface IssueTitleType extends _IssueTitleType {
  constructor: { new (): IssueTitleType }
}

interface _IssueType extends BaseType {
  contentType?: string
  id?: string
  seq?: string
  specificUse?: string
}
interface IssueType extends _IssueType {
  constructor: { new (): IssueType }
}

interface _ItalicType extends BaseType {
  id?: string
  specificUse?: string
  toggle?: ItalicTypeToggleType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface ItalicType extends _ItalicType {
  constructor: { new (): ItalicType }
}

type ItalicTypeToggleType = 'no' | 'yes'
interface _ItalicTypeToggleType extends Primitive._string {
  content: ItalicTypeToggleType
}

interface _JournalIdType extends BaseType {
  assigningAuthority?: string
  id?: string
  journalIdtype?: string
  specificUse?: string
}
interface JournalIdType extends _JournalIdType {
  constructor: { new (): JournalIdType }
}

interface _JournalMetaType extends BaseType {
  id?: string
  /** Affiliation */
  aff?: AffType[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternativesType[]
  /** Contributor Group */
  contribGroup?: ContribGroupType[]
  /** Isbn */
  isbn?: IsbnType[]
  /** Issn */
  issn: IssnType[]
  /** Issn Linking */
  issnL?: IssnLType
  /** Journal Identifier */
  journalId: JournalIdType[]
  /** Journal Title Group */
  journalTitlegroup?: JournalTitlegroupType[]
  /** Notes */
  notes?: NotesType[]
  /** Publisher */
  publisher?: PublisherType
  /** Uri For This Same Article Online */
  selfUri?: SelfUriType[]
}
interface JournalMetaType extends _JournalMetaType {
  constructor: { new (): JournalMetaType }
}

interface _JournalSubtitleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface JournalSubtitleType extends _JournalSubtitleType {
  constructor: { new (): JournalSubtitleType }
}

interface _JournalTitlegroupType extends BaseType {
  contentType?: string
  id?: string
  /** Abbreviated Journal Title */
  abbrevJournaltitle?: AbbrevJournaltitleType[]
  /** Journal Subtitle */
  journalSubtitle?: JournalSubtitleType[]
  /** Journal Title (Full) */
  journalTitle?: JournalTitleType[]
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroupType[]
}
interface JournalTitlegroupType extends _JournalTitlegroupType {
  constructor: { new (): JournalTitlegroupType }
}

interface _JournalTitleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface JournalTitleType extends _JournalTitleType {
  constructor: { new (): JournalTitleType }
}

interface _KwdGroupType extends BaseType {
  assigningAuthority?: string
  id?: string
  kwdGrouptype?: string
  specificUse?: string
  vocab?: string
  vocabIdentifier?: string
  /** Compound Keyword */
  compoundKwd: CompoundKwdType[]
  /** Keyword */
  kwd: KwdType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Nested Keyword */
  nestedKwd: NestedKwdType[]
  /** Title */
  title?: TitleType
}
interface KwdGroupType extends _KwdGroupType {
  constructor: { new (): KwdGroupType }
}

interface _KwdType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface KwdType extends _KwdType {
  constructor: { new (): KwdType }
}

interface _LabelType extends BaseType {
  alt?: string
  id?: string
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface LabelType extends _LabelType {
  constructor: { new (): LabelType }
}

interface _LicensePType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Award Identifier */
  awardId?: AwardIdType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternativesType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Element Citation */
  elementCitation?: ElementCitationType[]
  /** Email Address */
  email?: EmailType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Funding Source */
  fundingSource?: FundingSourceType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Mixed Citation */
  mixedCitation?: MixedCitationType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitationType[]
  /** Open Access */
  openAccess?: OpenAccessType[]
  /** Overline */
  overline?: OverlineType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Price */
  price?: PriceType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface LicensePType extends _LicensePType {
  constructor: { new (): LicensePType }
}

interface _LicenseType extends BaseType {
  hreflang?: string
  id?: string
  licenseType?: string
  specificUse?: string
  /** License Paragraph */
  licenseP: LicensePType[]
}
interface LicenseType extends _LicenseType {
  constructor: { new (): LicenseType }
}

interface _ListItemType extends BaseType {
  id?: string
  specificUse?: string
  /** Definition List */
  defList: DefListType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list: ListType[]
  /** Paragraph */
  p: PType[]
  /** Title */
  title?: TitleType
}
interface ListItemType extends _ListItemType {
  constructor: { new (): ListItemType }
}

interface _ListType extends BaseType {
  continuedFrom?: string
  id?: string
  listContent?: string
  listType?: string
  prefixWord?: string
  specificUse?: string
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List Item */
  listItem: ListItemType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Title */
  title?: TitleType
}
interface ListType extends _ListType {
  constructor: { new (): ListType }
}

interface _LongDescType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  specificUse?: string
}
interface LongDescType extends _LongDescType {
  constructor: { new (): LongDescType }
}

interface _LpageType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface LpageType extends _LpageType {
  constructor: { new (): LpageType }
}

interface _MediaType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  mimeSubtype?: string
  mimetype?: string
  orientation?: MediaTypeOrientationType
  position?: MediaTypePositionType
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Permissions */
  permissions?: PermissionsType[]
  subjGroup?: SubjGroupType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface MediaType extends _MediaType {
  constructor: { new (): MediaType }
}

type MediaTypeOrientationType = 'landscape' | 'portrait'
interface _MediaTypeOrientationType extends Primitive._string {
  content: MediaTypeOrientationType
}

type MediaTypePositionType = 'anchor' | 'background' | 'float' | 'margin'
interface _MediaTypePositionType extends Primitive._string {
  content: MediaTypePositionType
}

interface _MetaNameType extends BaseType {
  id?: string
}
interface MetaNameType extends _MetaNameType {
  constructor: { new (): MetaNameType }
}

interface _MetaValueType extends BaseType {
  id?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface MetaValueType extends _MetaValueType {
  constructor: { new (): MetaValueType }
}

interface _MilestoneEndType extends BaseType {
  contentType?: string
  id?: string
  rationale?: string
  rid?: string
  specificUse?: string
}
interface MilestoneEndType extends _MilestoneEndType {
  constructor: { new (): MilestoneEndType }
}

interface _MilestoneStartType extends BaseType {
  contentType?: string
  id?: string
  rationale?: string
  rid?: string
  specificUse?: string
}
interface MilestoneStartType extends _MilestoneStartType {
  constructor: { new (): MilestoneStartType }
}

interface _MixedCitationType extends BaseType {
  hreflang?: string
  id?: string
  publicationFormat?: string
  publicationType?: string
  publisherType?: string
  specificUse?: string
  useType?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Annotation in a Citation */
  annotation?: AnnotationType[]
  /** Article Title */
  articleTitle?: ArticleTitleType[]
  /** Bold */
  bold?: BoldType[]
  /** Chapter Title in a Citation */
  chapterTitle?: ChapterTitleType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Collaborative (Group) Author */
  collab?: CollabType[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternativesType[]
  /** Comment in a Citation */
  comment?: CommentType[]
  /** Conference Acronym */
  confAcronym?: ConfAcronymType[]
  /** Conference Date */
  confDate?: ConfDateType[]
  /** Conference Location */
  confLoc?: ConfLocType[]
  /** Conference Name */
  confName?: ConfNameType[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsorType[]
  /** Data Title in a Citation */
  dataTitle?: DataTitleType[]
  /** Date */
  date?: DateType[]
  /** Date Inside Citation */
  dateIncitation?: DateIncitationType[]
  /** Day */
  day?: DayType[]
  /** Edition Statement, Cited */
  edition?: EditionType[]
  /** Electronic Location Identifier */
  elocationId?: ElocationIdType[]
  /** Email Address */
  email?: EmailType[]
  /** Et Al */
  etal?: EtalType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** First Page */
  fpage?: FpageType[]
  /** Government Report, Cited */
  gov?: GovType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Isbn */
  isbn?: IsbnType[]
  /** Issn */
  issn?: IssnType[]
  /** Issn Linking */
  issnL?: IssnLType[]
  /** Issue Number */
  issue?: IssueType[]
  /** Issue Identifier */
  issueId?: IssueIdType[]
  /** Issue Part */
  issuePart?: IssuePartType[]
  /** Issue Title */
  issueTitle?: IssueTitleType[]
  /** Italic */
  italic?: ItalicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** Last Page */
  lpage?: LpageType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Month */
  month?: MonthType[]
  /** Name of Person (Structured) */
  name?: NameType[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternativesType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Overline */
  overline?: OverlineType[]
  /** Page Ranges */
  pageRange?: PageRangeType[]
  /** Part Title in a Citation */
  partTitle?: PartTitleType[]
  /** Patent Number, Cited */
  patent?: PatentType[]
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroupType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubIdType[]
  /** Publisher's Location */
  publisherLoc?: PublisherLocType[]
  /** Publisher's Name */
  publisherName?: PublisherNameType[]
  /** Role or Function Title of Contributor */
  role?: RoleType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Season */
  season?: SeasonType[]
  /** Series */
  series?: SeriesType[]
  /** Size */
  size?: SizeType[]
  /** Source */
  source?: SourceType[]
  /** Standard, Cited */
  std?: StdType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Date As a String */
  stringDate?: StringDateType[]
  /** Name of Person (Unstructured) */
  stringName?: StringNameType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Supplement */
  supplement?: SupplementType[]
  /** Translated Source */
  transSource?: TransSourceType[]
  /** Translated Title */
  transTitle?: TransTitleType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Version Statement, Cited */
  version?: VersionType[]
  /** Volume Number */
  volume?: VolumeType[]
  /** Volume Identifier */
  volumeId?: VolumeIdType[]
  /** Volume Series */
  volumeSeries?: VolumeSeriesType[]
  /** Year */
  year?: YearType[]
}
interface MixedCitationType extends _MixedCitationType {
  constructor: { new (): MixedCitationType }
}

interface _MonospaceType extends BaseType {
  id?: string
  specificUse?: string
  toggle?: MonospaceTypeToggleType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface MonospaceType extends _MonospaceType {
  constructor: { new (): MonospaceType }
}

type MonospaceTypeToggleType = 'no' | 'yes'
interface _MonospaceTypeToggleType extends Primitive._string {
  content: MonospaceTypeToggleType
}

interface _MonthType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface MonthType extends _MonthType {
  constructor: { new (): MonthType }
}

interface _NameAlternativesType extends BaseType {
  id?: string
  /** Name of Person (Structured) */
  name: NameType[]
  /** Name of Person (Unstructured) */
  stringName: StringNameType[]
}
interface NameAlternativesType extends _NameAlternativesType {
  constructor: { new (): NameAlternativesType }
}

interface _NamedContentType extends BaseType {
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
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Email Address */
  email?: EmailType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface NamedContentType extends _NamedContentType {
  constructor: { new (): NamedContentType }
}

interface _NameType extends BaseType {
  contentType?: string
  id?: string
  nameStyle?: NameTypeNameStyleType
  specificUse?: string
  /** Given (First) Names */
  givenNames: GivenNamesType[]
  /** Prefix */
  prefix?: PrefixType
  /** Suffix */
  suffix?: SuffixType
  /** Surname */
  surname: SurnameType
}
interface NameType extends _NameType {
  constructor: { new (): NameType }
}

type NameTypeNameStyleType = 'eastern' | 'given-only' | 'islensk' | 'western'
interface _NameTypeNameStyleType extends Primitive._string {
  content: NameTypeNameStyleType
}

interface _NestedKwdType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Compound Keyword */
  compoundKwd: CompoundKwdType[]
  /** Keyword */
  kwd: KwdType[]
  /** Nested Keyword */
  nestedKwd?: NestedKwdType[]
}
interface NestedKwdType extends _NestedKwdType {
  constructor: { new (): NestedKwdType }
}

interface _NlmCitationType extends BaseType {
  hreflang?: string
  id?: string
  publicationFormat?: string
  publicationType?: string
  publisherType?: string
  specificUse?: string
  /** Access Date For Cited Work */
  accessDate?: AccessDateType
  /** Annotation in a Citation */
  annotation?: AnnotationType
  /** Article Title */
  articleTitle?: ArticleTitleType[]
  /** Collaborative (Group) Author */
  collab?: CollabType[]
  /** Comment in a Citation */
  comment?: CommentType[]
  /** Conference Date */
  confDate?: ConfDateType
  /** Conference Location */
  confLoc?: ConfLocType
  /** Conference Name */
  confName?: ConfNameType
  /** Day */
  day?: DayType
  /** Edition Statement, Cited */
  edition?: EditionType
  /** First Page */
  fpage?: FpageType[]
  /** Issue Number */
  issue?: IssueType[]
  /** Last Page */
  lpage?: LpageType[]
  /** Month */
  month?: MonthType
  /** Page Count */
  pageCount?: PageCountType
  /** Patent Number, Cited */
  patent?: PatentType
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroupType[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubIdType[]
  /** Publisher's Location */
  publisherLoc?: PublisherLocType
  /** Publisher's Name */
  publisherName?: PublisherNameType
  /** Season */
  season?: SeasonType
  /** Series */
  series?: SeriesType
  /** Source */
  source?: SourceType
  /** Supplement */
  supplement?: SupplementType[]
  /** Time Stamp For Cited Work */
  timeStamp?: TimeStampType
  /** Translated Source */
  transSource?: TransSourceType
  /** Translated Title */
  transTitle?: TransTitleType[]
  /** Volume Number */
  volume?: VolumeType
  /** Year */
  year?: YearType
}
interface NlmCitationType extends _NlmCitationType {
  constructor: { new (): NlmCitationType }
}

interface _NotesType extends BaseType {
  id?: string
  notesType?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Section */
  sec?: SecType[]
  /** Section Metadata */
  secMeta?: SecMetaType
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface NotesType extends _NotesType {
  constructor: { new (): NotesType }
}

interface _NoteType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Paragraph */
  p: PType[]
  /** Product Information */
  product: ProductType[]
}
interface NoteType extends _NoteType {
  constructor: { new (): NoteType }
}

interface _ObjectIdType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  pubIdtype?: string
  specificUse?: string
}
interface ObjectIdType extends _ObjectIdType {
  constructor: { new (): ObjectIdType }
}

interface _OnBehalfofType extends BaseType {
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Underline */
  underline?: UnderlineType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface OnBehalfofType extends _OnBehalfofType {
  constructor: { new (): OnBehalfofType }
}

interface _OpenAccessType extends BaseType {
  id?: string
  specificUse?: string
  /** Paragraph */
  p: PType[]
}
interface OpenAccessType extends _OpenAccessType {
  constructor: { new (): OpenAccessType }
}

interface _OptionType extends BaseType {
  contentType?: string
  correct?: OptionTypeCorrectType
  id?: string
  specificUse?: string
  /** Address/Contact Information */
  address: AddressType[]
  /** Alternate Title */
  altTitle?: AltTitleType[]
  /** Alternatives For Processing */
  alternatives: AlternativesType[]
  /** Answer Elements */
  answer: AnswerType[]
  /** Answer Set */
  answerSet: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternativesType[]
  /** Boxed Text */
  boxedText: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrapType[]
  /** Code Text */
  code: CodeType[]
  /** Definition List */
  defList: DefListType[]
  /** Formula, Display */
  dispFormula: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig: FigType[]
  /** Figure Group */
  figGroup: FigGroupType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list: ListType[]
  /** Media Object */
  media: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p: PType[]
  /** Preformatted Text */
  preformat: PreformatType[]
  /** Question */
  question: QuestionType[]
  /** Question Wrap */
  questionWrap: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle: RelatedArticleType[]
  /** Related Object Information */
  relatedObject: RelatedObjectType[]
  /** Section */
  sec: SecType[]
  /** Speech */
  speech: SpeechType[]
  /** Statement, Formal */
  statement: StatementType[]
  /** Article Subtitle */
  subtitle?: SubtitleType[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup: VerseGroupType[]
}
interface OptionType extends _OptionType {
  constructor: { new (): OptionType }
}

type OptionTypeCorrectType = 'no' | 'yes'
interface _OptionTypeCorrectType extends Primitive._string {
  content: OptionTypeCorrectType
}

interface _OverlineEndType extends BaseType {
  id?: string
  rid: string
  specificUse?: string
}
interface OverlineEndType extends _OverlineEndType {
  constructor: { new (): OverlineEndType }
}

interface _OverlineStartType extends BaseType {
  id: string
  specificUse?: string
}
interface OverlineStartType extends _OverlineStartType {
  constructor: { new (): OverlineStartType }
}

interface _OverlineType extends BaseType {
  id?: string
  specificUse?: string
  toggle?: OverlineTypeToggleType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface OverlineType extends _OverlineType {
  constructor: { new (): OverlineType }
}

type OverlineTypeToggleType = 'no' | 'yes'
interface _OverlineTypeToggleType extends Primitive._string {
  content: OverlineTypeToggleType
}

interface _PageCountType extends BaseType {
  count: string
  id?: string
}
interface PageCountType extends _PageCountType {
  constructor: { new (): PageCountType }
}

interface _PageRangeType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface PageRangeType extends _PageRangeType {
  constructor: { new (): PageRangeType }
}

interface _PartTitleType extends BaseType {
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface PartTitleType extends _PartTitleType {
  constructor: { new (): PartTitleType }
}

interface _PatentType extends BaseType {
  contentType?: string
  country?: string
  id?: string
  specificUse?: string
}
interface PatentType extends _PatentType {
  constructor: { new (): PatentType }
}

interface _PermissionsType extends BaseType {
  id?: string
  /** Copyright Holder */
  copyrightHolder?: CopyrightHolderType[]
  /** Copyright Statement */
  copyrightStatement?: CopyrightStatementType[]
  /** Copyright Year */
  copyrightYear?: CopyrightYearType[]
  /** License Information */
  license?: LicenseType[]
}
interface PermissionsType extends _PermissionsType {
  constructor: { new (): PermissionsType }
}

interface _PersonGroupType extends BaseType {
  customType?: string
  id?: string
  personGrouptype?: PersonGroupTypePersonGrouptypeType
  specificUse?: string
  /** Affiliation */
  aff?: AffType[]
  /** Affiliation Alternatives */
  affAlternatives?: AffAlternativesType[]
  /** Anonymous */
  anonymous?: AnonymousType[]
  /** Collaborative (Group) Author */
  collab?: CollabType[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternativesType[]
  /** Et Al */
  etal?: EtalType[]
  /** Name of Person (Structured) */
  name?: NameType[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternativesType[]
  /** Role or Function Title of Contributor */
  role?: RoleType[]
  /** Name of Person (Unstructured) */
  stringName?: StringNameType[]
}
interface PersonGroupType extends _PersonGroupType {
  constructor: { new (): PersonGroupType }
}

type PersonGroupTypePersonGrouptypeType =
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
interface _PersonGroupTypePersonGrouptypeType extends Primitive._string {
  content: PersonGroupTypePersonGrouptypeType
}

interface _PhoneType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface PhoneType extends _PhoneType {
  constructor: { new (): PhoneType }
}

interface _PostalCodeType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface PostalCodeType extends _PostalCodeType {
  constructor: { new (): PostalCodeType }
}

interface _PrefixType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface PrefixType extends _PrefixType {
  constructor: { new (): PrefixType }
}

interface _PreformatType extends BaseType {
  id?: string
  orientation?: PreformatTypeOrientationType
  position?: PreformatTypePositionType
  preformatType?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Bold */
  bold?: BoldType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Italic */
  italic?: ItalicType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Permissions */
  permissions?: PermissionsType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
}
interface PreformatType extends _PreformatType {
  constructor: { new (): PreformatType }
}

type PreformatTypeOrientationType = 'landscape' | 'portrait'
interface _PreformatTypeOrientationType extends Primitive._string {
  content: PreformatTypeOrientationType
}

type PreformatTypePositionType = 'anchor' | 'background' | 'float' | 'margin'
interface _PreformatTypePositionType extends Primitive._string {
  content: PreformatTypePositionType
}

interface _PriceType extends BaseType {
  contentType?: string
  currency?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface PriceType extends _PriceType {
  constructor: { new (): PriceType }
}

interface _PrincipalAwardrecipientType extends BaseType {
  id?: string
  specificUse?: string
  /** Contributor Identifier */
  contribId?: ContribIdType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Name of Person (Structured) */
  name?: NameType[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternativesType[]
  /** Name of Person (Unstructured) */
  stringName?: StringNameType[]
}
interface PrincipalAwardrecipientType extends _PrincipalAwardrecipientType {
  constructor: { new (): PrincipalAwardrecipientType }
}

interface _PrincipalInvestigatorType extends BaseType {
  id?: string
  specificUse?: string
  /** Contributor Identifier */
  contribId?: ContribIdType[]
  /** Name of Person (Structured) */
  name?: NameType[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternativesType[]
  /** Name of Person (Unstructured) */
  stringName?: StringNameType[]
}
interface PrincipalInvestigatorType extends _PrincipalInvestigatorType {
  constructor: { new (): PrincipalInvestigatorType }
}

interface _PrivateCharType extends BaseType {
  description?: string
  id?: string
  name?: string
  specificUse?: string
  /** Glyph Data For a Private Character */
  glyphData: GlyphDataType
  /** Glyph Reference For a Private Character */
  glyphRef: GlyphRefType
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
}
interface PrivateCharType extends _PrivateCharType {
  constructor: { new (): PrivateCharType }
}

interface _ProcessingMetaType extends BaseType {
  baseTagset?: ProcessingMetaTypeBaseTagsetType
  id?: string
  mathRepresentation?: string
  mathmlVersion?: ProcessingMetaTypeMathmlVersionType
  tableModel?: ProcessingMetaTypeTableModelType
  tagsetFamily?: ProcessingMetaTypeTagsetFamilyType
  /** Custom Metadata Group */
  customMetagroup?: CustomMetagroupType[]
  /** Extended-by Model */
  extendedBy?: ExtendedByType[]
  /** Restricted-by Model */
  restrictedBy?: RestrictedByType[]
}
interface ProcessingMetaType extends _ProcessingMetaType {
  constructor: { new (): ProcessingMetaType }
}

type ProcessingMetaTypeBaseTagsetType = 'archiving' | 'authoring' | 'publishing'
interface _ProcessingMetaTypeBaseTagsetType extends Primitive._string {
  content: ProcessingMetaTypeBaseTagsetType
}

type ProcessingMetaTypeMathmlVersionType = '2.0' | '3.0'
interface _ProcessingMetaTypeMathmlVersionType extends Primitive._string {
  content: ProcessingMetaTypeMathmlVersionType
}

type ProcessingMetaTypeTableModelType = 'both' | 'none' | 'oasis' | 'xhtml'
interface _ProcessingMetaTypeTableModelType extends Primitive._string {
  content: ProcessingMetaTypeTableModelType
}

type ProcessingMetaTypeTagsetFamilyType = 'bits' | 'jats' | 'sts'
interface _ProcessingMetaTypeTagsetFamilyType extends Primitive._string {
  content: ProcessingMetaTypeTagsetFamilyType
}

interface _ProductType extends BaseType {
  hreflang?: string
  id?: string
  productType?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Annotation in a Citation */
  annotation?: AnnotationType[]
  /** Article Title */
  articleTitle?: ArticleTitleType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Chapter Title in a Citation */
  chapterTitle?: ChapterTitleType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Collaborative (Group) Author */
  collab?: CollabType[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternativesType[]
  /** Comment in a Citation */
  comment?: CommentType[]
  /** Conference Acronym */
  confAcronym?: ConfAcronymType[]
  /** Conference Date */
  confDate?: ConfDateType[]
  /** Conference Location */
  confLoc?: ConfLocType[]
  /** Conference Name */
  confName?: ConfNameType[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsorType[]
  /** Data Title in a Citation */
  dataTitle?: DataTitleType[]
  /** Date */
  date?: DateType[]
  /** Date Inside Citation */
  dateIncitation?: DateIncitationType[]
  /** Day */
  day?: DayType[]
  /** Edition Statement, Cited */
  edition?: EditionType[]
  /** Electronic Location Identifier */
  elocationId?: ElocationIdType[]
  /** Email Address */
  email?: EmailType[]
  /** Et Al */
  etal?: EtalType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** First Page */
  fpage?: FpageType[]
  /** Government Report, Cited */
  gov?: GovType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Isbn */
  isbn?: IsbnType[]
  /** Issn */
  issn?: IssnType[]
  /** Issn Linking */
  issnL?: IssnLType[]
  /** Issue Number */
  issue?: IssueType[]
  /** Issue Identifier */
  issueId?: IssueIdType[]
  /** Issue Part */
  issuePart?: IssuePartType[]
  /** Issue Title */
  issueTitle?: IssueTitleType[]
  /** Italic */
  italic?: ItalicType[]
  /** Last Page */
  lpage?: LpageType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Month */
  month?: MonthType[]
  /** Name of Person (Structured) */
  name?: NameType[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternativesType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Overline */
  overline?: OverlineType[]
  /** Page Ranges */
  pageRange?: PageRangeType[]
  /** Part Title in a Citation */
  partTitle?: PartTitleType[]
  /** Patent Number, Cited */
  patent?: PatentType[]
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroupType[]
  /** Price */
  price?: PriceType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubIdType[]
  /** Publisher's Location */
  publisherLoc?: PublisherLocType[]
  /** Publisher's Name */
  publisherName?: PublisherNameType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Role or Function Title of Contributor */
  role?: RoleType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Season */
  season?: SeasonType[]
  /** Series */
  series?: SeriesType[]
  /** Size */
  size?: SizeType[]
  /** Source */
  source?: SourceType[]
  /** Standard, Cited */
  std?: StdType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Date As a String */
  stringDate?: StringDateType[]
  /** Name of Person (Unstructured) */
  stringName?: StringNameType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Supplement */
  supplement?: SupplementType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Translated Source */
  transSource?: TransSourceType[]
  /** Translated Title */
  transTitle?: TransTitleType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Version Statement, Cited */
  version?: VersionType[]
  /** Volume Number */
  volume?: VolumeType[]
  /** Volume Identifier */
  volumeId?: VolumeIdType[]
  /** Volume Series */
  volumeSeries?: VolumeSeriesType[]
  /** X(cross) Reference */
  xref?: XrefType[]
  /** Year */
  year?: YearType[]
}
interface ProductType extends _ProductType {
  constructor: { new (): ProductType }
}

interface _PType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Award Identifier */
  awardId?: AwardIdType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternativesType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Element Citation */
  elementCitation?: ElementCitationType[]
  /** Email Address */
  email?: EmailType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Funding Source */
  fundingSource?: FundingSourceType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Mixed Citation */
  mixedCitation?: MixedCitationType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitationType[]
  /** Open Access */
  openAccess?: OpenAccessType[]
  /** Overline */
  overline?: OverlineType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface PType extends _PType {
  constructor: { new (): PType }
}

interface _PubDatenotavailableType extends BaseType {
  id?: string
  specificUse?: string
}
interface PubDatenotavailableType extends _PubDatenotavailableType {
  constructor: { new (): PubDatenotavailableType }
}

interface _PubDateType extends BaseType {
  assigningAuthority?: string
  calendar?: string
  dateType?: string
  id?: string
  iso8601Date?: string
  pubType?: string
  publicationFormat?: string
  /** Day */
  day?: DayType
  /** Era */
  era?: EraType
  /** Month */
  month?: MonthType
  /** Season */
  season?: SeasonType
  /** Year */
  year: YearType
}
interface PubDateType extends _PubDateType {
  constructor: { new (): PubDateType }
}

interface _PubHistoryType extends BaseType {
  id?: string
  /** Event in Publishing History */
  event: EventType[]
}
interface PubHistoryType extends _PubHistoryType {
  constructor: { new (): PubHistoryType }
}

interface _PubIdType extends BaseType {
  assigningAuthority?: string
  customType?: string
  hreflang?: string
  id?: string
  pubIdtype?: PubIdTypePubIdtypeType
  specificUse?: string
}
interface PubIdType extends _PubIdType {
  constructor: { new (): PubIdType }
}

type PubIdTypePubIdtypeType =
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
interface _PubIdTypePubIdtypeType extends Primitive._string {
  content: PubIdTypePubIdtypeType
}

interface _PublisherLocType extends BaseType {
  id?: string
  specificUse?: string
  /** Address Line */
  addrLine?: AddrLineType[]
  /** City: in an Address */
  city?: CityType[]
  /** Country: in an Address */
  country?: CountryType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fax Number: in an Address */
  fax?: FaxType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Phone Number: in an Address */
  phone?: PhoneType[]
  /** Postal Code: in an Address */
  postalCode?: PostalCodeType[]
  /** State or Province: in an Address */
  state?: StateType[]
  /** Uri */
  uri?: UriType[]
}
interface PublisherLocType extends _PublisherLocType {
  constructor: { new (): PublisherLocType }
}

interface _PublisherNameType extends BaseType {
  id?: string
  specificUse?: string
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
}
interface PublisherNameType extends _PublisherNameType {
  constructor: { new (): PublisherNameType }
}

interface _PublisherType extends BaseType {
  contentType?: string
  id?: string
  /** Publisher's Location */
  publisherLoc?: PublisherLocType[]
  /** Publisher's Name */
  publisherName: PublisherNameType[]
}
interface PublisherType extends _PublisherType {
  constructor: { new (): PublisherType }
}

interface _QuestionPreambleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternate Title */
  altTitle?: AltTitleType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Section */
  sec?: SecType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Article Subtitle */
  subtitle?: SubtitleType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface QuestionPreambleType extends _QuestionPreambleType {
  constructor: { new (): QuestionPreambleType }
}

interface _QuestionType extends BaseType {
  contentType?: string
  id?: string
  questionResponsetype?: QuestionTypeQuestionResponsetypeType
  specificUse?: string
  /** Address/Contact Information */
  address: AddressType[]
  /** Alternate Title */
  altTitle?: AltTitleType[]
  /** Alternatives For Processing */
  alternatives: AlternativesType[]
  /** Answer Elements */
  answer: AnswerType[]
  /** Answer Set */
  answerSet: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternativesType[]
  /** Boxed Text */
  boxedText: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrapType[]
  /** Code Text */
  code: CodeType[]
  /** Definition List */
  defList: DefListType[]
  /** Formula, Display */
  dispFormula: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote: DispQuoteType[]
  /** Explanation */
  explanation: ExplanationType[]
  /** Figure */
  fig: FigType[]
  /** Figure Group */
  figGroup: FigGroupType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list: ListType[]
  /** Media Object */
  media: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Option Elements */
  option?: OptionType[]
  /** Paragraph */
  p: PType[]
  /** Preformatted Text */
  preformat: PreformatType[]
  /** Question */
  question: QuestionType[]
  /** Question Wrap */
  questionWrap: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle: RelatedArticleType[]
  /** Related Object Information */
  relatedObject: RelatedObjectType[]
  /** Section */
  sec: SecType[]
  /** Section Metadata */
  secMeta?: SecMetaType
  /** Speech */
  speech: SpeechType[]
  /** Statement, Formal */
  statement: StatementType[]
  /** Article Subtitle */
  subtitle?: SubtitleType[]
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup: VerseGroupType[]
}
interface QuestionType extends _QuestionType {
  constructor: { new (): QuestionType }
}

type QuestionTypeQuestionResponsetypeType =
  | 'essay'
  | 'fill-in-the-blank'
  | 'multi-select'
  | 'multiple-choice'
  | 'short-answer'
  | 'true-false'
interface _QuestionTypeQuestionResponsetypeType extends Primitive._string {
  content: QuestionTypeQuestionResponsetypeType
}

interface _QuestionWrapgroupType extends BaseType {
  audience?: string
  contentType?: string
  id?: string
  specificUse?: string
  /** Alternate Title */
  altTitle?: AltTitleType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Question Preamble */
  questionPreamble?: QuestionPreambleType
  /** Question Wrap */
  questionWrap: QuestionWrapType[]
  /** Article Subtitle */
  subtitle?: SubtitleType[]
  /** Title */
  title?: TitleType
}
interface QuestionWrapgroupType extends _QuestionWrapgroupType {
  constructor: { new (): QuestionWrapgroupType }
}

interface _QuestionWrapType extends BaseType {
  audience?: string
  contentType?: string
  id?: string
  specificUse?: string
  /** Answer Elements */
  answer?: AnswerType
  /** Answer Set */
  answerSet?: AnswerSetType
  /** Explanation */
  explanation?: ExplanationType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Question */
  question: QuestionType
}
interface QuestionWrapType extends _QuestionWrapType {
  constructor: { new (): QuestionWrapType }
}

interface _RbType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface RbType extends _RbType {
  constructor: { new (): RbType }
}

interface _RefCountType extends BaseType {
  count: string
  id?: string
}
interface RefCountType extends _RefCountType {
  constructor: { new (): RefCountType }
}

interface _RefListType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Reference Item */
  ref?: RefType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface RefListType extends _RefListType {
  constructor: { new (): RefListType }
}

interface _RefType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Citation Alternatives */
  citationAlternatives: CitationAlternativesType[]
  /** Element Citation */
  elementCitation: ElementCitationType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Mixed Citation */
  mixedCitation: MixedCitationType[]
  /** Nlm Citation Model */
  nlmCitation: NlmCitationType[]
  /** Note in a Reference List */
  note: NoteType[]
}
interface RefType extends _RefType {
  constructor: { new (): RefType }
}

interface _RelatedArticleType extends BaseType {
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
  /** Annotation in a Citation */
  annotation?: AnnotationType[]
  /** Article Title */
  articleTitle?: ArticleTitleType[]
  /** Bold */
  bold?: BoldType[]
  /** Chapter Title in a Citation */
  chapterTitle?: ChapterTitleType[]
  /** Collaborative (Group) Author */
  collab?: CollabType[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternativesType[]
  /** Comment in a Citation */
  comment?: CommentType[]
  /** Conference Acronym */
  confAcronym?: ConfAcronymType[]
  /** Conference Date */
  confDate?: ConfDateType[]
  /** Conference Location */
  confLoc?: ConfLocType[]
  /** Conference Name */
  confName?: ConfNameType[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsorType[]
  /** Data Title in a Citation */
  dataTitle?: DataTitleType[]
  /** Date */
  date?: DateType[]
  /** Date Inside Citation */
  dateIncitation?: DateIncitationType[]
  /** Day */
  day?: DayType[]
  /** Edition Statement, Cited */
  edition?: EditionType[]
  /** Electronic Location Identifier */
  elocationId?: ElocationIdType[]
  /** Email Address */
  email?: EmailType[]
  /** Et Al */
  etal?: EtalType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** First Page */
  fpage?: FpageType[]
  /** Government Report, Cited */
  gov?: GovType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Isbn */
  isbn?: IsbnType[]
  /** Issn */
  issn?: IssnType[]
  /** Issn Linking */
  issnL?: IssnLType[]
  /** Issue Number */
  issue?: IssueType[]
  /** Issue Identifier */
  issueId?: IssueIdType[]
  /** Issue Part */
  issuePart?: IssuePartType[]
  /** Issue Title */
  issueTitle?: IssueTitleType[]
  /** Italic */
  italic?: ItalicType[]
  /** Journal Identifier */
  journalId?: JournalIdType[]
  /** Last Page */
  lpage?: LpageType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Month */
  month?: MonthType[]
  /** Name of Person (Structured) */
  name?: NameType[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternativesType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Overline */
  overline?: OverlineType[]
  /** Page Ranges */
  pageRange?: PageRangeType[]
  /** Part Title in a Citation */
  partTitle?: PartTitleType[]
  /** Patent Number, Cited */
  patent?: PatentType[]
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroupType[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubIdType[]
  /** Publisher's Location */
  publisherLoc?: PublisherLocType[]
  /** Publisher's Name */
  publisherName?: PublisherNameType[]
  /** Role or Function Title of Contributor */
  role?: RoleType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Season */
  season?: SeasonType[]
  /** Series */
  series?: SeriesType[]
  /** Size */
  size?: SizeType[]
  /** Source */
  source?: SourceType[]
  /** Standard, Cited */
  std?: StdType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Date As a String */
  stringDate?: StringDateType[]
  /** Name of Person (Unstructured) */
  stringName?: StringNameType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Supplement */
  supplement?: SupplementType[]
  /** Translated Source */
  transSource?: TransSourceType[]
  /** Translated Title */
  transTitle?: TransTitleType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Version Statement, Cited */
  version?: VersionType[]
  /** Volume Number */
  volume?: VolumeType[]
  /** Volume Identifier */
  volumeId?: VolumeIdType[]
  /** Volume Series */
  volumeSeries?: VolumeSeriesType[]
  /** Year */
  year?: YearType[]
}
interface RelatedArticleType extends _RelatedArticleType {
  constructor: { new (): RelatedArticleType }
}

interface _RelatedObjectType extends BaseType {
  contentType?: string
  documentId?: string
  documentIdtype?: string
  documentType?: string
  extLinktype?: string
  hreflang?: string
  id?: string
  linkType?: string
  $objectId?: string
  objectIdtype?: string
  objectType?: string
  sourceId?: string
  sourceIdtype?: string
  sourceType?: string
  specificUse?: string
  /** Annotation in a Citation */
  annotation?: AnnotationType[]
  /** Article Title */
  articleTitle?: ArticleTitleType[]
  /** Bold */
  bold?: BoldType[]
  /** Chapter Title in a Citation */
  chapterTitle?: ChapterTitleType[]
  /** Collaborative (Group) Author */
  collab?: CollabType[]
  /** Collaboration Alternatives */
  collabAlternatives?: CollabAlternativesType[]
  /** Comment in a Citation */
  comment?: CommentType[]
  /** Conference Acronym */
  confAcronym?: ConfAcronymType[]
  /** Conference Date */
  confDate?: ConfDateType[]
  /** Conference Location */
  confLoc?: ConfLocType[]
  /** Conference Name */
  confName?: ConfNameType[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsorType[]
  /** Data Title in a Citation */
  dataTitle?: DataTitleType[]
  /** Date */
  date?: DateType[]
  /** Date Inside Citation */
  dateIncitation?: DateIncitationType[]
  /** Day */
  day?: DayType[]
  /** Edition Statement, Cited */
  edition?: EditionType[]
  /** Electronic Location Identifier */
  elocationId?: ElocationIdType[]
  /** Email Address */
  email?: EmailType[]
  /** Et Al */
  etal?: EtalType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** First Page */
  fpage?: FpageType[]
  /** Government Report, Cited */
  gov?: GovType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Isbn */
  isbn?: IsbnType[]
  /** Issn */
  issn?: IssnType[]
  /** Issn Linking */
  issnL?: IssnLType[]
  /** Issue Number */
  issue?: IssueType[]
  /** Issue Identifier */
  issueId?: IssueIdType[]
  /** Issue Part */
  issuePart?: IssuePartType[]
  /** Issue Title */
  issueTitle?: IssueTitleType[]
  /** Italic */
  italic?: ItalicType[]
  /** Last Page */
  lpage?: LpageType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Month */
  month?: MonthType[]
  /** Name of Person (Structured) */
  name?: NameType[]
  /** Name Alternatives */
  nameAlternatives?: NameAlternativesType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Overline */
  overline?: OverlineType[]
  /** Page Ranges */
  pageRange?: PageRangeType[]
  /** Part Title in a Citation */
  partTitle?: PartTitleType[]
  /** Patent Number, Cited */
  patent?: PatentType[]
  /** Person Group For a Cited Publication */
  personGroup?: PersonGroupType[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubIdType[]
  /** Publisher's Location */
  publisherLoc?: PublisherLocType[]
  /** Publisher's Name */
  publisherName?: PublisherNameType[]
  /** Role or Function Title of Contributor */
  role?: RoleType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Season */
  season?: SeasonType[]
  /** Series */
  series?: SeriesType[]
  /** Size */
  size?: SizeType[]
  /** Source */
  source?: SourceType[]
  /** Standard, Cited */
  std?: StdType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Date As a String */
  stringDate?: StringDateType[]
  /** Name of Person (Unstructured) */
  stringName?: StringNameType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Supplement */
  supplement?: SupplementType[]
  /** Translated Source */
  transSource?: TransSourceType[]
  /** Translated Title */
  transTitle?: TransTitleType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Version Statement, Cited */
  version?: VersionType[]
  /** Volume Number */
  volume?: VolumeType[]
  /** Volume Identifier */
  volumeId?: VolumeIdType[]
  /** Volume Series */
  volumeSeries?: VolumeSeriesType[]
  /** Year */
  year?: YearType[]
}
interface RelatedObjectType extends _RelatedObjectType {
  constructor: { new (): RelatedObjectType }
}

interface _ResourceGroupType extends BaseType {
  id?: string
  specificUse?: string
  /** Resource Name */
  resourceName: ResourceNameType[]
  /** Resource Wrap */
  resourceWrap: ResourceWrapType[]
}
interface ResourceGroupType extends _ResourceGroupType {
  constructor: { new (): ResourceGroupType }
}

interface _ResourceIdType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  resourceIdtype?: string
  specificUse?: string
  vocab?: string
  vocabIdentifier?: string
}
interface ResourceIdType extends _ResourceIdType {
  constructor: { new (): ResourceIdType }
}

interface _ResourceNameType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface ResourceNameType extends _ResourceNameType {
  constructor: { new (): ResourceNameType }
}

interface _ResourceWrapType extends BaseType {
  id?: string
  /** Resource Identifier */
  resourceId?: ResourceIdType[]
  /** Resource Name */
  resourceName: ResourceNameType
}
interface ResourceWrapType extends _ResourceWrapType {
  constructor: { new (): ResourceWrapType }
}

interface _ResponseType extends BaseType {
  id?: string
  responseType?: string
  specificUse?: string
  /** Back Matter */
  back?: BackType
  /** Body of the Article */
  body?: BodyType
  /** Floats Group */
  floatsGroup?: FloatsGroupType
  /** Front Matter */
  front: FrontType
  /** Stub Front Metadata */
  frontStub: FrontStubType
  /** Processing Metadata Model */
  processingMeta?: ProcessingMetaType
}
interface ResponseType extends _ResponseType {
  constructor: { new (): ResponseType }
}

interface _RestrictedByType extends BaseType {
  assigningAuthority?: string
  designator?: string
  hreflang?: string
  id?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
}
interface RestrictedByType extends _RestrictedByType {
  constructor: { new (): RestrictedByType }
}

interface _RoleType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  degreeContribution?: string
  id?: string
  specificUse?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface RoleType extends _RoleType {
  constructor: { new (): RoleType }
}

interface _RomanType extends BaseType {
  id?: string
  specificUse?: string
  toggle?: RomanTypeToggleType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface RomanType extends _RomanType {
  constructor: { new (): RomanType }
}

type RomanTypeToggleType = 'no' | 'yes'
interface _RomanTypeToggleType extends Primitive._string {
  content: RomanTypeToggleType
}

interface _RpType extends BaseType {
  id?: string
}
interface RpType extends _RpType {
  constructor: { new (): RpType }
}

interface _RtType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface RtType extends _RtType {
  constructor: { new (): RtType }
}

interface _RubyType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Ruby Base */
  rb: RbType
  /** Ruby Textual Annotation */
  rt: RtType
}
interface RubyType extends _RubyType {
  constructor: { new (): RubyType }
}

interface _SansSerifType extends BaseType {
  id?: string
  specificUse?: string
  toggle?: SansSerifTypeToggleType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface SansSerifType extends _SansSerifType {
  constructor: { new (): SansSerifType }
}

type SansSerifTypeToggleType = 'no' | 'yes'
interface _SansSerifTypeToggleType extends Primitive._string {
  content: SansSerifTypeToggleType
}

interface _ScType extends BaseType {
  id?: string
  specificUse?: string
  toggle?: ScTypeToggleType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface ScType extends _ScType {
  constructor: { new (): ScType }
}

type ScTypeToggleType = 'no' | 'yes'
interface _ScTypeToggleType extends Primitive._string {
  content: ScTypeToggleType
}

interface _SeasonType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface SeasonType extends _SeasonType {
  constructor: { new (): SeasonType }
}

interface _SecMetaType extends BaseType {
  id?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Contributor Group */
  contribGroup?: ContribGroupType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Permissions */
  permissions?: PermissionsType
  subjGroup?: SubjGroupType[]
}
interface SecMetaType extends _SecMetaType {
  constructor: { new (): SecMetaType }
}

interface _SecType extends BaseType {
  id?: string
  secType?: string
  specificUse?: string
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Footnote Group */
  fnGroup?: FnGroupType[]
  /** Glossary Elements */
  glossary?: GlossaryType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Label of a Figure, Reference, Etc. */
  label: LabelType
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Reference List (Bibliographic Reference List) */
  refList?: RefListType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Section */
  sec?: SecType[]
  /** Section Metadata */
  secMeta?: SecMetaType
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Title */
  title: TitleType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
}
interface SecType extends _SecType {
  constructor: { new (): SecType }
}

interface _SeeAlsoType extends BaseType {
  contentType?: string
  id?: string
  rid?: string
  specificUse?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Code Text */
  code?: CodeType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Media Object */
  media?: MediaType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface SeeAlsoType extends _SeeAlsoType {
  constructor: { new (): SeeAlsoType }
}

interface _SeeType extends BaseType {
  contentType?: string
  id?: string
  rid?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Code Text */
  code?: CodeType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Media Object */
  media?: MediaType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface SeeType extends _SeeType {
  constructor: { new (): SeeType }
}

interface _SelfUriType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  hreflang?: string
  id?: string
  specificUse?: string
}
interface SelfUriType extends _SelfUriType {
  constructor: { new (): SelfUriType }
}

interface _SeriesTextType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface SeriesTextType extends _SeriesTextType {
  constructor: { new (): SeriesTextType }
}

interface _SeriesTitleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface SeriesTitleType extends _SeriesTitleType {
  constructor: { new (): SeriesTitleType }
}

interface _SeriesType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface SeriesType extends _SeriesType {
  constructor: { new (): SeriesType }
}

interface _SigBlockType extends BaseType {
  contentType?: string
  id?: string
  rid?: string
  specificUse?: string
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Media Object */
  media?: MediaType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Signature */
  sig?: SigType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface SigBlockType extends _SigBlockType {
  constructor: { new (): SigBlockType }
}

interface _SigType extends BaseType {
  contentType?: string
  id?: string
  rid?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Media Object */
  media?: MediaType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface SigType extends _SigType {
  constructor: { new (): SigType }
}

interface _SizeType extends BaseType {
  id?: string
  specificUse?: string
  units: string
}
interface SizeType extends _SizeType {
  constructor: { new (): SizeType }
}

interface _SourceType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface SourceType extends _SourceType {
  constructor: { new (): SourceType }
}

interface _SpeakerType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Degree(s) */
  degrees?: DegreesType[]
  /** Footnote */
  fn?: FnType[]
  /** Given (First) Names */
  givenNames?: GivenNamesType[]
  /** Prefix */
  prefix?: PrefixType[]
  /** Suffix */
  suffix?: SuffixType[]
  /** Surname */
  surname?: SurnameType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface SpeakerType extends _SpeakerType {
  constructor: { new (): SpeakerType }
}

interface _SpeechType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p: PType[]
  /** Speaker */
  speaker: SpeakerType
}
interface SpeechType extends _SpeechType {
  constructor: { new (): SpeechType }
}

interface _StatementType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Paragraph */
  p: PType[]
  /** Permissions */
  permissions?: PermissionsType[]
  /** Statement, Formal */
  statement: StatementType[]
  subjGroup?: SubjGroupType[]
  /** Title */
  title?: TitleType
}
interface StatementType extends _StatementType {
  constructor: { new (): StatementType }
}

interface _StateType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface StateType extends _StateType {
  constructor: { new (): StateType }
}

interface _StdOrganizationType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
}
interface StdOrganizationType extends _StdOrganizationType {
  constructor: { new (): StdOrganizationType }
}

interface _StdType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Day */
  day?: DayType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Month */
  month?: MonthType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Publication Identifier For a Cited Publication */
  pubId?: PubIdType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Source */
  source?: SourceType[]
  /** Standards Organization */
  stdOrganization?: StdOrganizationType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Year */
  year?: YearType[]
}
interface StdType extends _StdType {
  constructor: { new (): StdType }
}

interface _StrikeType extends BaseType {
  id?: string
  specificUse?: string
  toggle?: StrikeTypeToggleType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface StrikeType extends _StrikeType {
  constructor: { new (): StrikeType }
}

type StrikeTypeToggleType = 'no' | 'yes'
interface _StrikeTypeToggleType extends Primitive._string {
  content: StrikeTypeToggleType
}

interface _StringConfType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Conference Acronym */
  confAcronym?: ConfAcronymType[]
  /** Conference Date */
  confDate?: ConfDateType[]
  /** Conference Location */
  confLoc?: ConfLocType[]
  /** Conference Name */
  confName?: ConfNameType[]
  /** Conference Number */
  confNum?: ConfNumType[]
  /** Conference Sponsor */
  confSponsor?: ConfSponsorType[]
  /** Conference Theme */
  confTheme?: ConfThemeType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** String Conference Name */
  stringConf?: StringConfType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface StringConfType extends _StringConfType {
  constructor: { new (): StringConfType }
}

interface _StringDateType extends BaseType {
  calendar?: string
  contentType?: string
  id?: string
  iso8601Date?: string
  specificUse?: string
  /** Day */
  day?: DayType[]
  /** Era */
  era?: EraType[]
  /** Month */
  month?: MonthType[]
  /** Season */
  season?: SeasonType[]
  /** Year */
  year?: YearType[]
}
interface StringDateType extends _StringDateType {
  constructor: { new (): StringDateType }
}

interface _StringNameType extends BaseType {
  contentType?: string
  id?: string
  nameStyle?: StringNameTypeNameStyleType
  specificUse?: string
  /** Degree(s) */
  degrees?: DegreesType[]
  /** Given (First) Names */
  givenNames?: GivenNamesType[]
  /** Prefix */
  prefix?: PrefixType[]
  /** Suffix */
  suffix?: SuffixType[]
  /** Surname */
  surname?: SurnameType[]
}
interface StringNameType extends _StringNameType {
  constructor: { new (): StringNameType }
}

type StringNameTypeNameStyleType =
  | 'eastern'
  | 'given-only'
  | 'islensk'
  | 'western'
interface _StringNameTypeNameStyleType extends Primitive._string {
  content: StringNameTypeNameStyleType
}

interface _StyledContentType extends BaseType {
  alt?: string
  id?: string
  specificUse?: string
  style?: string
  styleDetail?: string
  styleType?: string
  toggle?: StyledContentTypeToggleType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Address/Contact Information */
  address?: AddressType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Block-Level Alternatives For Processing */
  blockAlternatives?: BlockAlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Boxed Text */
  boxedText?: BoxedTextType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Email Address */
  email?: EmailType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Figure */
  fig?: FigType[]
  /** Figure Group */
  figGroup?: FigGroupType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Supplementary Material */
  supplementaryMaterial?: SupplementaryMaterialType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Table Wrapper Group */
  tableWrapgroup?: TableWrapgroupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface StyledContentType extends _StyledContentType {
  constructor: { new (): StyledContentType }
}

type StyledContentTypeToggleType = 'no' | 'yes'
interface _StyledContentTypeToggleType extends Primitive._string {
  content: StyledContentTypeToggleType
}

interface _SubArticleType extends BaseType {
  articleType?: string
  id?: string
  specificUse?: string
  /** Back Matter */
  back?: BackType
  /** Body of the Article */
  body?: BodyType
  /** Floats Group */
  floatsGroup?: FloatsGroupType
  /** Front Matter */
  front: FrontType
  /** Stub Front Metadata */
  frontStub: FrontStubType
  /** Processing Metadata Model */
  processingMeta?: ProcessingMetaType
  /** Response */
  response?: ResponseType[]
  /** Sub-Article */
  subArticle?: SubArticleType[]
}
interface SubArticleType extends _SubArticleType {
  constructor: { new (): SubArticleType }
}

interface _SubjectType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  id?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface SubjectType extends _SubjectType {
  constructor: { new (): SubjectType }
}

interface _SubjGroupType extends BaseType {
  assigningAuthority?: string
  id?: string
  specificUse?: string
  subjGrouptype?: string
  vocab?: string
  vocabIdentifier?: string
  /** Compound Subject Name */
  compoundSubject: CompoundSubjectType[]
  subjGroup?: SubjGroupType[]
  /** Subject Name */
  subject: SubjectType[]
}
interface SubjGroupType extends _SubjGroupType {
  constructor: { new (): SubjGroupType }
}

interface _SubtitleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface SubtitleType extends _SubtitleType {
  constructor: { new (): SubtitleType }
}

interface _SubType extends BaseType {
  arrange?: SubTypeArrangeType
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface SubType extends _SubType {
  constructor: { new (): SubType }
}

type SubTypeArrangeType = 'stack' | 'stagger'
interface _SubTypeArrangeType extends Primitive._string {
  content: SubTypeArrangeType
}

interface _SuffixType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface SuffixType extends _SuffixType {
  constructor: { new (): SuffixType }
}

interface _SupplementaryMaterialType extends BaseType {
  contentType?: string
  hreflang?: string
  id?: string
  mimeSubtype?: string
  mimetype?: string
  orientation?: SupplementaryMaterialTypeOrientationType
  position?: SupplementaryMaterialTypePositionType
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** List */
  list?: ListType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Media Object */
  media?: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Permissions */
  permissions?: PermissionsType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  subjGroup?: SubjGroupType[]
  /** Table Wrapper */
  tableWrap?: TableWrapType[]
  /** Uri */
  uri?: UriType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface SupplementaryMaterialType extends _SupplementaryMaterialType {
  constructor: { new (): SupplementaryMaterialType }
}

type SupplementaryMaterialTypeOrientationType = 'landscape' | 'portrait'
interface _SupplementaryMaterialTypeOrientationType extends Primitive._string {
  content: SupplementaryMaterialTypeOrientationType
}

type SupplementaryMaterialTypePositionType =
  | 'anchor'
  | 'background'
  | 'float'
  | 'margin'
interface _SupplementaryMaterialTypePositionType extends Primitive._string {
  content: SupplementaryMaterialTypePositionType
}

interface _SupplementType extends BaseType {
  id?: string
  specificUse?: string
  supplementType?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Contributor Group */
  contribGroup?: ContribGroupType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Title */
  title?: TitleType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface SupplementType extends _SupplementType {
  constructor: { new (): SupplementType }
}

interface _SupportDescriptionType extends BaseType {
  id?: string
  rid?: string
  specificUse?: string
  /** Paragraph */
  p: PType[]
}
interface SupportDescriptionType extends _SupportDescriptionType {
  constructor: { new (): SupportDescriptionType }
}

interface _SupportGroupType extends BaseType {
  id?: string
  specificUse?: string
  /** Contributed Resource Group */
  contributedResourcegroup?: ContributedResourcegroupType[]
  /** Funding Group */
  fundingGroup?: FundingGroupType[]
}
interface SupportGroupType extends _SupportGroupType {
  constructor: { new (): SupportGroupType }
}

interface _SupportSourceType extends BaseType {
  country?: string
  hreflang?: string
  id?: string
  rid?: string
  specificUse?: string
  supportType?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Institution Name: in an Address */
  institution?: InstitutionType[]
  /** Institution Wrapper */
  institutionWrap?: InstitutionWrapType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface SupportSourceType extends _SupportSourceType {
  constructor: { new (): SupportSourceType }
}

interface _SupType extends BaseType {
  arrange?: SupTypeArrangeType
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface SupType extends _SupType {
  constructor: { new (): SupType }
}

type SupTypeArrangeType = 'stack' | 'stagger'
interface _SupTypeArrangeType extends Primitive._string {
  content: SupTypeArrangeType
}

interface _SurnameType extends BaseType {
  id?: string
  initials?: string
}
interface SurnameType extends _SurnameType {
  constructor: { new (): SurnameType }
}

interface _TableCountType extends BaseType {
  count: string
  id?: string
}
interface TableCountType extends _TableCountType {
  constructor: { new (): TableCountType }
}

interface _TableType extends BaseType {
  border?: string
  cellpadding?: string
  cellspacing?: string
  contentType?: string
  frame?: TableTypeFrameType
  id?: string
  rules?: TableTypeRulesType
  specificUse?: string
  style?: string
  summary?: string
  width?: string
  col?: ColType[]
  colgroup?: ColgroupType[]
  tbody: TbodyType[]
  tfoot?: TfootType
  thead?: TheadType
  tr: TrType[]
}
interface TableType extends _TableType {
  constructor: { new (): TableType }
}

type TableTypeFrameType =
  | 'above'
  | 'below'
  | 'border'
  | 'box'
  | 'hsides'
  | 'lhs'
  | 'rhs'
  | 'void'
  | 'vsides'
interface _TableTypeFrameType extends Primitive._string {
  content: TableTypeFrameType
}

type TableTypeRulesType = 'all' | 'cols' | 'groups' | 'none' | 'rows'
interface _TableTypeRulesType extends Primitive._string {
  content: TableTypeRulesType
}

interface _TableWrapfootType extends BaseType {
  id?: string
  /** Attribution */
  attrib: AttribType[]
  /** Footnote */
  fn: FnType[]
  /** Footnote Group */
  fnGroup: FnGroupType[]
  /** Paragraph */
  p: PType[]
  /** Permissions */
  permissions: PermissionsType[]
  /** Title */
  title?: TitleType
}
interface TableWrapfootType extends _TableWrapfootType {
  constructor: { new (): TableWrapfootType }
}

interface _TableWrapgroupType extends BaseType {
  contentType?: string
  id?: string
  orientation?: TableWrapgroupTypeOrientationType
  position?: TableWrapgroupTypePositionType
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  subjGroup?: SubjGroupType[]
  /** Table Wrapper */
  tableWrap: TableWrapType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref: XrefType[]
}
interface TableWrapgroupType extends _TableWrapgroupType {
  constructor: { new (): TableWrapgroupType }
}

type TableWrapgroupTypeOrientationType = 'landscape' | 'portrait'
interface _TableWrapgroupTypeOrientationType extends Primitive._string {
  content: TableWrapgroupTypeOrientationType
}

type TableWrapgroupTypePositionType =
  | 'anchor'
  | 'background'
  | 'float'
  | 'margin'
interface _TableWrapgroupTypePositionType extends Primitive._string {
  content: TableWrapgroupTypePositionType
}

interface _TableWrapType extends BaseType {
  contentType?: string
  id?: string
  orientation?: TableWrapTypeOrientationType
  position?: TableWrapTypePositionType
  specificUse?: string
  /** Abstract */
  abstract?: AbstractType[]
  /** Alternate Title Text For a Figure, Etc. */
  altText?: AltTextType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Attribution */
  attrib?: AttribType[]
  /** Caption of a Figure, Table, Etc. */
  caption?: CaptionType[]
  /** Chemical Structure Wrapper */
  chemStructwrap?: ChemStructwrapType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Keyword Group */
  kwdGroup?: KwdGroupType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType[]
  /** List */
  list?: ListType[]
  /** Long Description */
  longDesc?: LongDescType[]
  /** Media Object */
  media?: MediaType[]
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Permissions */
  permissions?: PermissionsType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  subjGroup?: SubjGroupType[]
  /** Table: Table Element .............................. */
  table?: TableType[]
  /** Table Wrap Footer */
  tableWrapfoot?: TableWrapfootType[]
  /** Uri */
  uri?: UriType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface TableWrapType extends _TableWrapType {
  constructor: { new (): TableWrapType }
}

type TableWrapTypeOrientationType = 'landscape' | 'portrait'
interface _TableWrapTypeOrientationType extends Primitive._string {
  content: TableWrapTypeOrientationType
}

type TableWrapTypePositionType = 'anchor' | 'background' | 'float' | 'margin'
interface _TableWrapTypePositionType extends Primitive._string {
  content: TableWrapTypePositionType
}

interface _TargetType extends BaseType {
  id: string
  specificUse?: string
  targetType?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface TargetType extends _TargetType {
  constructor: { new (): TargetType }
}

interface _TbodyType extends BaseType {
  align?: TbodyTypeAlignType
  char?: string
  charoff?: string
  contentType?: string
  id?: string
  style?: string
  valign?: TbodyTypeValignType
  tr: TrType[]
}
interface TbodyType extends _TbodyType {
  constructor: { new (): TbodyType }
}

type TbodyTypeAlignType = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TbodyTypeAlignType extends Primitive._string {
  content: TbodyTypeAlignType
}

type TbodyTypeValignType = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TbodyTypeValignType extends Primitive._string {
  content: TbodyTypeValignType
}

interface _TdType extends BaseType {
  abbr?: string
  align?: TdTypeAlignType
  axis?: string
  char?: string
  charoff?: string
  colspan?: string
  contentType?: string
  headers?: string
  id?: string
  rowspan?: string
  scope?: TdTypeScopeType
  style?: string
  valign?: TdTypeValignType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternativesType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Element Citation */
  elementCitation?: ElementCitationType[]
  /** Email Address */
  email?: EmailType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Horizontal Rule */
  hr?: HrType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Mixed Citation */
  mixedCitation?: MixedCitationType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitationType[]
  /** Overline */
  overline?: OverlineType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface TdType extends _TdType {
  constructor: { new (): TdType }
}

type TdTypeAlignType = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TdTypeAlignType extends Primitive._string {
  content: TdTypeAlignType
}

type TdTypeScopeType = 'col' | 'colgroup' | 'row' | 'rowgroup'
interface _TdTypeScopeType extends Primitive._string {
  content: TdTypeScopeType
}

type TdTypeValignType = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TdTypeValignType extends Primitive._string {
  content: TdTypeValignType
}

interface _TermHeadType extends BaseType {
  id?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface TermHeadType extends _TermHeadType {
  constructor: { new (): TermHeadType }
}

interface _TermType extends BaseType {
  id?: string
  rid?: string
  specificUse?: string
  termStatus?: string
  termType?: string
  vocab?: string
  vocabIdentifier?: string
  vocabTerm?: string
  vocabTermidentifier?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Code Text */
  code?: CodeType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Media Object */
  media?: MediaType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface TermType extends _TermType {
  constructor: { new (): TermType }
}

interface _TexMathType extends BaseType {
  contentType?: string
  id?: string
  notation?: TexMathTypeNotationType
  specificUse?: string
  version?: string
}
interface TexMathType extends _TexMathType {
  constructor: { new (): TexMathType }
}

type TexMathTypeNotationType = 'LaTeX' | 'TEX' | 'TeX' | 'tex'
interface _TexMathTypeNotationType extends Primitive._string {
  content: TexMathTypeNotationType
}

interface _TextualFormType extends BaseType {
  id?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface TextualFormType extends _TextualFormType {
  constructor: { new (): TextualFormType }
}

interface _TfootType extends BaseType {
  align?: TfootTypeAlignType
  char?: string
  charoff?: string
  contentType?: string
  id?: string
  style?: string
  valign?: TfootTypeValignType
  tr: TrType[]
}
interface TfootType extends _TfootType {
  constructor: { new (): TfootType }
}

type TfootTypeAlignType = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TfootTypeAlignType extends Primitive._string {
  content: TfootTypeAlignType
}

type TfootTypeValignType = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TfootTypeValignType extends Primitive._string {
  content: TfootTypeValignType
}

interface _TheadType extends BaseType {
  align?: TheadTypeAlignType
  char?: string
  charoff?: string
  contentType?: string
  id?: string
  style?: string
  valign?: TheadTypeValignType
  tr: TrType[]
}
interface TheadType extends _TheadType {
  constructor: { new (): TheadType }
}

type TheadTypeAlignType = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TheadTypeAlignType extends Primitive._string {
  content: TheadTypeAlignType
}

type TheadTypeValignType = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TheadTypeValignType extends Primitive._string {
  content: TheadTypeValignType
}

interface _ThType extends BaseType {
  abbr?: string
  align?: ThTypeAlignType
  axis?: string
  char?: string
  charoff?: string
  colspan?: string
  contentType?: string
  headers?: string
  id?: string
  rowspan?: string
  scope?: ThTypeScopeType
  style?: string
  valign?: ThTypeValignType
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Answer Elements */
  answer?: AnswerType[]
  /** Answer Set */
  answerSet?: AnswerSetType[]
  /** Array (Simple Tabular Array) */
  array?: ArrayType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternativesType[]
  /** Code Text */
  code?: CodeType[]
  /** Definition List */
  defList?: DefListType[]
  /** Formula, Display */
  dispFormula?: DispFormulaType[]
  /** Formula, Display Group */
  dispFormulagroup?: DispFormulagroupType[]
  /** Quote, Displayed */
  dispQuote?: DispQuoteType[]
  /** Element Citation */
  elementCitation?: ElementCitationType[]
  /** Email Address */
  email?: EmailType[]
  /** Explanation */
  explanation?: ExplanationType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Graphic */
  graphic?: GraphicType[]
  /** Horizontal Rule */
  hr?: HrType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** List */
  list?: ListType[]
  /** Media Object */
  media?: MediaType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Mixed Citation */
  mixedCitation?: MixedCitationType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitationType[]
  /** Overline */
  overline?: OverlineType[]
  /** Paragraph */
  p?: PType[]
  /** Preformatted Text */
  preformat?: PreformatType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Question */
  question?: QuestionType[]
  /** Question Wrap */
  questionWrap?: QuestionWrapType[]
  /** Question Wrap Group */
  questionWrapgroup?: QuestionWrapgroupType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Speech */
  speech?: SpeechType[]
  /** Statement, Formal */
  statement?: StatementType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** Verse Form For Poetry */
  verseGroup?: VerseGroupType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface ThType extends _ThType {
  constructor: { new (): ThType }
}

type ThTypeAlignType = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _ThTypeAlignType extends Primitive._string {
  content: ThTypeAlignType
}

type ThTypeScopeType = 'col' | 'colgroup' | 'row' | 'rowgroup'
interface _ThTypeScopeType extends Primitive._string {
  content: ThTypeScopeType
}

type ThTypeValignType = 'baseline' | 'bottom' | 'middle' | 'top'
interface _ThTypeValignType extends Primitive._string {
  content: ThTypeValignType
}

interface _TimeStampType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface TimeStampType extends _TimeStampType {
  constructor: { new (): TimeStampType }
}

interface _TitleGroupType extends BaseType {
  id?: string
  /** Alternate Title */
  altTitle?: AltTitleType[]
  /** Article Title */
  articleTitle: ArticleTitleType
  /** Footnote Group */
  fnGroup?: FnGroupType
  /** Article Subtitle */
  subtitle?: SubtitleType[]
  /** Translated Title Group */
  transTitlegroup?: TransTitlegroupType[]
}
interface TitleGroupType extends _TitleGroupType {
  constructor: { new (): TitleGroupType }
}

interface _TitleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Citation Alternatives */
  citationAlternatives?: CitationAlternativesType[]
  /** Element Citation */
  elementCitation?: ElementCitationType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Mixed Citation */
  mixedCitation?: MixedCitationType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Nlm Citation Model */
  nlmCitation?: NlmCitationType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface TitleType extends _TitleType {
  constructor: { new (): TitleType }
}

interface _TransAbstractType extends BaseType {
  abstractType?: string
  id?: string
  specificUse?: string
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Object Identifier */
  objectId?: ObjectIdType[]
  /** Paragraph */
  p?: PType[]
  /** Section */
  sec?: SecType[]
  /** Title */
  title?: TitleType
}
interface TransAbstractType extends _TransAbstractType {
  constructor: { new (): TransAbstractType }
}

interface _TransSourceType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface TransSourceType extends _TransSourceType {
  constructor: { new (): TransSourceType }
}

interface _TransSubtitleType extends BaseType {
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface TransSubtitleType extends _TransSubtitleType {
  constructor: { new (): TransSubtitleType }
}

interface _TransTitlegroupType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Translated Subtitle */
  transSubtitle?: TransSubtitleType[]
  /** Translated Title */
  transTitle: TransTitleType
}
interface TransTitlegroupType extends _TransTitlegroupType {
  constructor: { new (): TransTitlegroupType }
}

interface _TransTitleType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Line Break */
  break?: BreakType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface TransTitleType extends _TransTitleType {
  constructor: { new (): TransTitleType }
}

interface _TrType extends BaseType {
  align?: TrTypeAlignType
  char?: string
  charoff?: string
  contentType?: string
  id?: string
  style?: string
  valign?: TrTypeValignType
  td: TdType[]
  th: ThType[]
}
interface TrType extends _TrType {
  constructor: { new (): TrType }
}

type TrTypeAlignType = 'center' | 'char' | 'justify' | 'left' | 'right'
interface _TrTypeAlignType extends Primitive._string {
  content: TrTypeAlignType
}

type TrTypeValignType = 'baseline' | 'bottom' | 'middle' | 'top'
interface _TrTypeValignType extends Primitive._string {
  content: TrTypeValignType
}

interface _UnderlineEndType extends BaseType {
  id?: string
  rid: string
  specificUse?: string
}
interface UnderlineEndType extends _UnderlineEndType {
  constructor: { new (): UnderlineEndType }
}

interface _UnderlineStartType extends BaseType {
  id: string
  specificUse?: string
}
interface UnderlineStartType extends _UnderlineStartType {
  constructor: { new (): UnderlineStartType }
}

interface _UnderlineType extends BaseType {
  id?: string
  specificUse?: string
  toggle?: UnderlineTypeToggleType
  underlineStyle?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Email Address */
  email?: EmailType[]
  /** External Link */
  extLink?: ExtLinkType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Inline Supplementary Material */
  inlineSupplementarymaterial?: InlineSupplementarymaterialType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Related Article Information */
  relatedArticle?: RelatedArticleType[]
  /** Related Object Information */
  relatedObject?: RelatedObjectType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Tex Math Equation */
  texMath?: TexMathType[]
  /** Underline */
  underline?: UnderlineType[]
  /** Uri */
  uri?: UriType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface UnderlineType extends _UnderlineType {
  constructor: { new (): UnderlineType }
}

type UnderlineTypeToggleType = 'no' | 'yes'
interface _UnderlineTypeToggleType extends Primitive._string {
  content: UnderlineTypeToggleType
}

interface _UnstructuredKwdgroupType extends BaseType {
  assigningAuthority?: string
  id?: string
  kwdGrouptype?: string
  specificUse?: string
  vocab?: string
  vocabIdentifier?: string
}
interface UnstructuredKwdgroupType extends _UnstructuredKwdgroupType {
  constructor: { new (): UnstructuredKwdgroupType }
}

interface _UriType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  hreflang?: string
  id?: string
  specificUse?: string
}
interface UriType extends _UriType {
  constructor: { new (): UriType }
}

interface _VerseGroupType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  style?: string
  styleDetail?: string
  styleType?: string
  /** Attribution */
  attrib?: AttribType[]
  /** Label of a Figure, Reference, Etc. */
  label?: LabelType
  /** Permissions */
  permissions?: PermissionsType[]
  /** Article Subtitle */
  subtitle?: SubtitleType
  /** Title */
  title?: TitleType
  /** Verse Form For Poetry */
  verseGroup: VerseGroupType[]
  /** Line of a Verse */
  verseLine: VerseLineType[]
}
interface VerseGroupType extends _VerseGroupType {
  constructor: { new (): VerseGroupType }
}

interface _VerseLineType extends BaseType {
  contentType?: string
  id?: string
  indentLevel?: string
  specificUse?: string
  style?: string
  styleDetail?: string
  styleType?: string
  /** Abbreviation or Acronym */
  abbrev?: AbbrevType[]
  /** Alternatives For Processing */
  alternatives?: AlternativesType[]
  /** Bold */
  bold?: BoldType[]
  /** Chemical Structure (Display) */
  chemStruct?: ChemStructType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Footnote */
  fn?: FnType[]
  /** Index Term */
  indexTerm?: IndexTermType[]
  /** Index Term Range End */
  indexTermrangeend?: IndexTermrangeendType[]
  /** Formula, Inline */
  inlineFormula?: InlineFormulaType[]
  /** Inline Graphic */
  inlineGraphic?: InlineGraphicType[]
  /** Inline Media Object */
  inlineMedia?: InlineMediaType[]
  /** Italic */
  italic?: ItalicType[]
  /** Milestone End */
  milestoneEnd?: MilestoneEndType[]
  /** Milestone Start */
  milestoneStart?: MilestoneStartType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Private Character (Custom or Unicode) */
  privateChar?: PrivateCharType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Target of an Internal Link */
  target?: TargetType[]
  /** Underline */
  underline?: UnderlineType[]
  /** X(cross) Reference */
  xref?: XrefType[]
}
interface VerseLineType extends _VerseLineType {
  constructor: { new (): VerseLineType }
}

interface _VersionType extends BaseType {
  contentType?: string
  designator?: string
  id?: string
  specificUse?: string
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
}
interface VersionType extends _VersionType {
  constructor: { new (): VersionType }
}

interface _VolumeIdType extends BaseType {
  assigningAuthority?: string
  contentType?: string
  hreflang?: string
  id?: string
  pubIdtype?: string
  specificUse?: string
}
interface VolumeIdType extends _VolumeIdType {
  constructor: { new (): VolumeIdType }
}

interface _VolumeIssuegroupType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
  /** Issue Number */
  issue?: IssueType[]
  /** Issue Identifier */
  issueId?: IssueIdType[]
  /** Issue Part */
  issuePart?: IssuePartType
  /** Issue Title */
  issueSponsor?: IssueSponsorType[]
  /** Issue Title */
  issueTitle?: IssueTitleType[]
  /** Issue Title Group */
  issueTitlegroup?: IssueTitlegroupType[]
  /** Volume Number */
  volume?: VolumeType[]
  /** Volume Identifier */
  volumeId?: VolumeIdType[]
  /** Volume Series */
  volumeSeries?: VolumeSeriesType
}
interface VolumeIssuegroupType extends _VolumeIssuegroupType {
  constructor: { new (): VolumeIssuegroupType }
}

interface _VolumeSeriesType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface VolumeSeriesType extends _VolumeSeriesType {
  constructor: { new (): VolumeSeriesType }
}

interface _VolumeType extends BaseType {
  contentType?: string
  id?: string
  seq?: string
  specificUse?: string
}
interface VolumeType extends _VolumeType {
  constructor: { new (): VolumeType }
}

interface _WordCountType extends BaseType {
  count: string
  id?: string
}
interface WordCountType extends _WordCountType {
  constructor: { new (): WordCountType }
}

interface _XrefType extends BaseType {
  alt?: string
  customType?: string
  id?: string
  refType?: XrefTypeRefTypeType
  rid?: string
  specificUse?: string
  /** Bold */
  bold?: BoldType[]
  /** Fixed Case */
  fixedCase?: FixedCaseType[]
  /** Italic */
  italic?: ItalicType[]
  /** Monospace Text (Typewriter Text) */
  monospace?: MonospaceType[]
  /** Named Special (Subject) Content */
  namedContent?: NamedContentType[]
  /** Overline */
  overline?: OverlineType[]
  /** Roman */
  roman?: RomanType[]
  /** Ruby Wrapper */
  ruby?: RubyType[]
  /** Sans Serif */
  sansSerif?: SansSerifType[]
  /** Small Caps */
  sc?: ScType[]
  /** Strike Through */
  strike?: StrikeType[]
  /** Styled Special (Subject) Content */
  styledContent?: StyledContentType[]
  /** Subscript */
  sub?: SubType[]
  /** Superscript */
  sup?: SupType[]
  /** Underline */
  underline?: UnderlineType[]
}
interface XrefType extends _XrefType {
  constructor: { new (): XrefType }
}

type XrefTypeRefTypeType =
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
interface _XrefTypeRefTypeType extends Primitive._string {
  content: XrefTypeRefTypeType
}

interface _XType extends BaseType {
  contentType?: string
  id?: string
  specificUse?: string
}
interface XType extends _XType {
  constructor: { new (): XType }
}

interface _YearType extends BaseType {
  calendar?: string
  contentType?: string
  id?: string
  iso8601Date?: string
  specificUse?: string
}
interface YearType extends _YearType {
  constructor: { new (): YearType }
}

export interface document extends BaseType {
  /** Abbreviation or Acronym */
  abbrev: AbbrevType
  /** Abbreviated Journal Title */
  abbrevJournaltitle: AbbrevJournaltitleType
  /** Abstract */
  abstract: AbstractType
  /** Access Date For Cited Work */
  accessDate: AccessDateType
  /** Acknowledgments */
  ack: AckType
  /** Address Line */
  addrLine: AddrLineType
  /** Address/Contact Information */
  address: AddressType
  /** Affiliation */
  aff: AffType
  /** Affiliation Alternatives */
  affAlternatives: AffAlternativesType
  /** Alternate Title Text For a Figure, Etc. */
  altText: AltTextType
  /** Alternate Title */
  altTitle: AltTitleType
  /** Alternatives For Processing */
  alternatives: AlternativesType
  /** Annotation in a Citation */
  annotation: AnnotationType
  /** Anonymous */
  anonymous: AnonymousType
  /** Answer Elements */
  answer: AnswerType
  /** Answer Set */
  answerSet: AnswerSetType
  /** Appendix */
  app: AppType
  /** Appendix Group */
  appGroup: AppGroupType
  /** Array (Simple Tabular Array) */
  array: ArrayType
  /** Article */
  article: ArticleType
  /** Article Grouping Data */
  articleCategories: ArticleCategoriesType
  /** Article Identifier */
  articleId: ArticleIdType
  /** Article Metadata */
  articleMeta: ArticleMetaType
  /** Article Title */
  articleTitle: ArticleTitleType
  /** Article Version */
  articleVersion: ArticleVersionType
  /** Article Version Alternatives */
  articleVersionalternatives: ArticleVersionalternativesType
  /** Attribution */
  attrib: AttribType
  /** Author Comment */
  authorComment: AuthorCommentType
  /** Author Note Group */
  authorNotes: AuthorNotesType
  /** Award Description */
  awardDesc: AwardDescType
  /** Award Group */
  awardGroup: AwardGroupType
  /** Award Identifier */
  awardId: AwardIdType
  /** Award Name */
  awardName: AwardNameType
  /** Back Matter */
  back: BackType
  /** Biography */
  bio: BioType
  /** Block-Level Alternatives For Processing */
  blockAlternatives: BlockAlternativesType
  /** Body of the Article */
  body: BodyType
  /** Bold */
  bold: BoldType
  /** Boxed Text */
  boxedText: BoxedTextType
  /** Line Break */
  break: BreakType
  /** Caption of a Figure, Table, Etc. */
  caption: CaptionType
  /** Chapter Title in a Citation */
  chapterTitle: ChapterTitleType
  /** Chemical Structure (Display) */
  chemStruct: ChemStructType
  /** Chemical Structure Wrapper */
  chemStructwrap: ChemStructwrapType
  /** Citation Alternatives */
  citationAlternatives: CitationAlternativesType
  /** City: in an Address */
  city: CityType
  /** Code Text */
  code: CodeType
  col: ColType
  colgroup: ColgroupType
  /** Collaborative (Group) Author */
  collab: CollabType
  /** Collaboration Alternatives */
  collabAlternatives: CollabAlternativesType
  /** Comment in a Citation */
  comment: CommentType
  /** Compound Keyword */
  compoundKwd: CompoundKwdType
  /** Compound Keyword Part */
  compoundKwdpart: CompoundKwdpartType
  /** Compound Subject Name */
  compoundSubject: CompoundSubjectType
  /** Compound Subject Part Name */
  compoundSubjectpart: CompoundSubjectpartType
  /** Conference Acronym */
  confAcronym: ConfAcronymType
  /** Conference Date */
  confDate: ConfDateType
  /** Conference Location */
  confLoc: ConfLocType
  /** Conference Name */
  confName: ConfNameType
  /** Conference Number */
  confNum: ConfNumType
  /** Conference Sponsor */
  confSponsor: ConfSponsorType
  /** Conference Theme */
  confTheme: ConfThemeType
  /** Conference Information */
  conference: ConferenceType
  /** Contributor */
  contrib: ContribType
  /** Contributor Group */
  contribGroup: ContribGroupType
  /** Contributor Identifier */
  contribId: ContribIdType
  /** Contributed Resource Group */
  contributedResourcegroup: ContributedResourcegroupType
  /** Copyright Holder */
  copyrightHolder: CopyrightHolderType
  /** Copyright Statement */
  copyrightStatement: CopyrightStatementType
  /** Copyright Year */
  copyrightYear: CopyrightYearType
  /** Correspondence Information */
  corresp: CorrespType
  /** Count */
  count: CountType
  /** Country: in an Address */
  country: CountryType
  /** Counts */
  counts: CountsType
  /** Custom Metadata */
  customMeta: CustomMetaType
  /** Custom Metadata Group */
  customMetagroup: CustomMetagroupType
  /** Data Title in a Citation */
  dataTitle: DataTitleType
  /** Date */
  date: DateType
  /** Date Inside Citation */
  dateIncitation: DateIncitationType
  /** Day */
  day: DayType
  /** Definition List: Definition */
  def: DefType
  /** Definition List: Definition Head */
  defHead: DefHeadType
  /** Definition List: Definition Item */
  defItem: DefItemType
  /** Definition List */
  defList: DefListType
  /** Degree(s) */
  degrees: DegreesType
  /** Formula, Display */
  dispFormula: DispFormulaType
  /** Formula, Display Group */
  dispFormulagroup: DispFormulagroupType
  /** Quote, Displayed */
  dispQuote: DispQuoteType
  /** Edition Statement, Cited */
  edition: EditionType
  /** Element Citation */
  elementCitation: ElementCitationType
  /** Electronic Location Identifier */
  elocationId: ElocationIdType
  /** Email Address */
  email: EmailType
  /** Equation Count */
  equationCount: EquationCountType
  /** Era */
  era: EraType
  /** Et Al */
  etal: EtalType
  /** Event in Publishing History */
  event: EventType
  /** Event Description */
  eventDesc: EventDescType
  /** Explanation */
  explanation: ExplanationType
  /** External Link */
  extLink: ExtLinkType
  /** Extended-by Model */
  extendedBy: ExtendedByType
  /** Fax Number: in an Address */
  fax: FaxType
  /** Figure */
  fig: FigType
  /** Figure Count */
  figCount: FigCountType
  /** Figure Group */
  figGroup: FigGroupType
  /** Fixed Case */
  fixedCase: FixedCaseType
  /** Floats Group */
  floatsGroup: FloatsGroupType
  /** Footnote */
  fn: FnType
  /** Footnote Group */
  fnGroup: FnGroupType
  /** First Page */
  fpage: FpageType
  /** Front Matter */
  front: FrontType
  /** Stub Front Metadata */
  frontStub: FrontStubType
  /** Funding Group */
  fundingGroup: FundingGroupType
  /** Funding Source */
  fundingSource: FundingSourceType
  /** Funding Statement */
  fundingStatement: FundingStatementType
  /** Given (First) Names */
  givenNames: GivenNamesType
  /** Glossary Elements */
  glossary: GlossaryType
  /** Glyph Data For a Private Character */
  glyphData: GlyphDataType
  /** Glyph Reference For a Private Character */
  glyphRef: GlyphRefType
  /** Government Report, Cited */
  gov: GovType
  /** Graphic */
  graphic: GraphicType
  /** History: Document History */
  history: HistoryType
  /** Horizontal Rule */
  hr: HrType
  /** Index Term */
  indexTerm: IndexTermType
  /** Index Term Range End */
  indexTermrangeend: IndexTermrangeendType
  /** Formula, Inline */
  inlineFormula: InlineFormulaType
  /** Inline Graphic */
  inlineGraphic: InlineGraphicType
  /** Inline Media Object */
  inlineMedia: InlineMediaType
  /** Inline Supplementary Material */
  inlineSupplementarymaterial: InlineSupplementarymaterialType
  /** Institution Name: in an Address */
  institution: InstitutionType
  /** Institution Identifier */
  institutionId: InstitutionIdType
  /** Institution Wrapper */
  institutionWrap: InstitutionWrapType
  /** Isbn */
  isbn: IsbnType
  /** Issn */
  issn: IssnType
  /** Issn Linking */
  issnL: IssnLType
  /** Issue Number */
  issue: IssueType
  /** Issue Identifier */
  issueId: IssueIdType
  /** Issue Part */
  issuePart: IssuePartType
  /** Issue Title */
  issueSponsor: IssueSponsorType
  /** Issue Subtitle */
  issueSubtitle: IssueSubtitleType
  /** Issue Title */
  issueTitle: IssueTitleType
  /** Issue Title Group */
  issueTitlegroup: IssueTitlegroupType
  /** Italic */
  italic: ItalicType
  /** Journal Identifier */
  journalId: JournalIdType
  /** Journal Metadata */
  journalMeta: JournalMetaType
  /** Journal Subtitle */
  journalSubtitle: JournalSubtitleType
  /** Journal Title (Full) */
  journalTitle: JournalTitleType
  /** Journal Title Group */
  journalTitlegroup: JournalTitlegroupType
  /** Keyword */
  kwd: KwdType
  /** Keyword Group */
  kwdGroup: KwdGroupType
  /** Label of a Figure, Reference, Etc. */
  label: LabelType
  /** License Information */
  license: LicenseType
  /** License Paragraph */
  licenseP: LicensePType
  /** List */
  list: ListType
  /** List Item */
  listItem: ListItemType
  /** Long Description */
  longDesc: LongDescType
  /** Last Page */
  lpage: LpageType
  /** Media Object */
  media: MediaType
  /** Metadata Data Name For Custom Metadata */
  metaName: MetaNameType
  /** Metadata Data Value For Custom Metadata */
  metaValue: MetaValueType
  /** Milestone End */
  milestoneEnd: MilestoneEndType
  /** Milestone Start */
  milestoneStart: MilestoneStartType
  /** Mixed Citation */
  mixedCitation: MixedCitationType
  /** Monospace Text (Typewriter Text) */
  monospace: MonospaceType
  /** Month */
  month: MonthType
  /** Name of Person (Structured) */
  name: NameType
  /** Name Alternatives */
  nameAlternatives: NameAlternativesType
  /** Named Special (Subject) Content */
  namedContent: NamedContentType
  /** Nested Keyword */
  nestedKwd: NestedKwdType
  /** Nlm Citation Model */
  nlmCitation: NlmCitationType
  /** Note in a Reference List */
  note: NoteType
  /** Notes */
  notes: NotesType
  /** Object Identifier */
  objectId: ObjectIdType
  /** On Behalf of */
  onBehalfof: OnBehalfofType
  /** Open Access */
  openAccess: OpenAccessType
  /** Option Elements */
  option: OptionType
  /** Overline */
  overline: OverlineType
  /** Overline End */
  overlineEnd: OverlineEndType
  /** Overline Start */
  overlineStart: OverlineStartType
  /** Paragraph */
  p: PType
  /** Page Count */
  pageCount: PageCountType
  /** Page Ranges */
  pageRange: PageRangeType
  /** Part Title in a Citation */
  partTitle: PartTitleType
  /** Patent Number, Cited */
  patent: PatentType
  /** Permissions */
  permissions: PermissionsType
  /** Person Group For a Cited Publication */
  personGroup: PersonGroupType
  /** Phone Number: in an Address */
  phone: PhoneType
  /** Postal Code: in an Address */
  postalCode: PostalCodeType
  /** Prefix */
  prefix: PrefixType
  /** Preformatted Text */
  preformat: PreformatType
  /** Price */
  price: PriceType
  /** Principal Award Recipient */
  principalAwardrecipient: PrincipalAwardrecipientType
  /** Principal Investigator Recipient */
  principalInvestigator: PrincipalInvestigatorType
  /** Private Character (Custom or Unicode) */
  privateChar: PrivateCharType
  /** Processing Metadata Model */
  processingMeta: ProcessingMetaType
  /** Product Information */
  product: ProductType
  /** Publication Date */
  pubDate: PubDateType
  /** Date Not Available Flag */
  pubDatenotavailable: PubDatenotavailableType
  /** Publication History */
  pubHistory: PubHistoryType
  /** Publication Identifier For a Cited Publication */
  pubId: PubIdType
  /** Publisher */
  publisher: PublisherType
  /** Publisher's Location */
  publisherLoc: PublisherLocType
  /** Publisher's Name */
  publisherName: PublisherNameType
  /** Question */
  question: QuestionType
  /** Question Preamble */
  questionPreamble: QuestionPreambleType
  /** Question Wrap */
  questionWrap: QuestionWrapType
  /** Question Wrap Group */
  questionWrapgroup: QuestionWrapgroupType
  /** Ruby Base */
  rb: RbType
  /** Reference Item */
  ref: RefType
  /** Reference Count */
  refCount: RefCountType
  /** Reference List (Bibliographic Reference List) */
  refList: RefListType
  /** Related Article Information */
  relatedArticle: RelatedArticleType
  /** Related Object Information */
  relatedObject: RelatedObjectType
  /** Resource Group */
  resourceGroup: ResourceGroupType
  /** Resource Identifier */
  resourceId: ResourceIdType
  /** Resource Name */
  resourceName: ResourceNameType
  /** Resource Wrap */
  resourceWrap: ResourceWrapType
  /** Response */
  response: ResponseType
  /** Restricted-by Model */
  restrictedBy: RestrictedByType
  /** Role or Function Title of Contributor */
  role: RoleType
  /** Roman */
  roman: RomanType
  /** Ruby Parenthesis */
  rp: RpType
  /** Ruby Textual Annotation */
  rt: RtType
  /** Ruby Wrapper */
  ruby: RubyType
  /** Sans Serif */
  sansSerif: SansSerifType
  /** Small Caps */
  sc: ScType
  /** Season */
  season: SeasonType
  /** Section */
  sec: SecType
  /** Section Metadata */
  secMeta: SecMetaType
  /** See */
  see: SeeType
  /** See-Also Term */
  seeAlso: SeeAlsoType
  /** Uri For This Same Article Online */
  selfUri: SelfUriType
  /** Series */
  series: SeriesType
  /** Series Text: Header Text to Describe */
  seriesText: SeriesTextType
  /** Series Title */
  seriesTitle: SeriesTitleType
  /** Signature */
  sig: SigType
  /** Signature Block */
  sigBlock: SigBlockType
  /** Size */
  size: SizeType
  /** Source */
  source: SourceType
  /** Speaker */
  speaker: SpeakerType
  /** Speech */
  speech: SpeechType
  /** State or Province: in an Address */
  state: StateType
  /** Statement, Formal */
  statement: StatementType
  /** Standard, Cited */
  std: StdType
  /** Standards Organization */
  stdOrganization: StdOrganizationType
  /** Strike Through */
  strike: StrikeType
  /** String Conference Name */
  stringConf: StringConfType
  /** Date As a String */
  stringDate: StringDateType
  /** Name of Person (Unstructured) */
  stringName: StringNameType
  /** Styled Special (Subject) Content */
  styledContent: StyledContentType
  /** Subscript */
  sub: SubType
  /** Sub-Article */
  subArticle: SubArticleType
  subjGroup: SubjGroupType
  /** Subject Name */
  subject: SubjectType
  /** Article Subtitle */
  subtitle: SubtitleType
  /** Suffix */
  suffix: SuffixType
  /** Superscript */
  sup: SupType
  /** Supplement */
  supplement: SupplementType
  /** Supplementary Material */
  supplementaryMaterial: SupplementaryMaterialType
  /** Support Description */
  supportDescription: SupportDescriptionType
  /** Support Group */
  supportGroup: SupportGroupType
  /** Support Source */
  supportSource: SupportSourceType
  /** Surname */
  surname: SurnameType
  /** Table: Table Element .............................. */
  table: TableType
  /** Table Count */
  tableCount: TableCountType
  /** Table Wrapper */
  tableWrap: TableWrapType
  /** Table Wrap Footer */
  tableWrapfoot: TableWrapfootType
  /** Table Wrapper Group */
  tableWrapgroup: TableWrapgroupType
  /** Target of an Internal Link */
  target: TargetType
  tbody: TbodyType
  td: TdType
  /** Definition List: Term */
  term: TermType
  /** Definition List: Term Head */
  termHead: TermHeadType
  /** Tex Math Equation */
  texMath: TexMathType
  /** Textual Form */
  textualForm: TextualFormType
  tfoot: TfootType
  th: ThType
  thead: TheadType
  /** Time Stamp For Cited Work */
  timeStamp: TimeStampType
  /** Title */
  title: TitleType
  /** Title Group */
  titleGroup: TitleGroupType
  tr: TrType
  /** Translated Abstract */
  transAbstract: TransAbstractType
  /** Translated Source */
  transSource: TransSourceType
  /** Translated Subtitle */
  transSubtitle: TransSubtitleType
  /** Translated Title */
  transTitle: TransTitleType
  /** Translated Title Group */
  transTitlegroup: TransTitlegroupType
  /** Underline */
  underline: UnderlineType
  /** Underline End */
  underlineEnd: UnderlineEndType
  /** Underline Start */
  underlineStart: UnderlineStartType
  /** Unstructured Keyword Group */
  unstructuredKwdgroup: UnstructuredKwdgroupType
  /** Uri */
  uri: UriType
  /** Verse Form For Poetry */
  verseGroup: VerseGroupType
  /** Line of a Verse */
  verseLine: VerseLineType
  /** Version Statement, Cited */
  version: VersionType
  /** Volume Number */
  volume: VolumeType
  /** Volume Identifier */
  volumeId: VolumeIdType
  /** Translated Title Group */
  volumeIssuegroup: VolumeIssuegroupType
  /** Volume Series */
  volumeSeries: VolumeSeriesType
  /** Word Count */
  wordCount: WordCountType
  /** X - Generated Text and Punctuation */
  x: XType
  /** X(cross) Reference */
  xref: XrefType
  /** Year */
  year: YearType
}
export var document: document
