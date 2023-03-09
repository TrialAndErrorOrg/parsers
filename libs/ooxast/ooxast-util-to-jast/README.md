> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-to-jast

Util to convert `ooxast` syntax tree to `jast` syntax tree, allowing for `.docx` to `JATS XML` conversion.

## Contents

*   [ooxast-util-to-jast](#ooxast-util-to-jast)
    *   [Contents](#contents)
    *   [What is this?](#what-is-this)
    *   [When should I use this?](#when-should-i-use-this)
    *   [Install](#install)
    *   [Use](#use)
    *   [API](#api)
    *   [Syntax tree](#syntax-tree)
    *   [Types](#types)
    *   [Compatibility](#compatibility)
    *   [Security](#security)
    *   [Related](#related)
    *   [Contribute](#contribute)
    *   [License](#license)

## What is this?

## When should I use this?

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add ooxast-util-to-jast
# or with yarn
# yarn add ooxast-util-to-jast
# or with npm
# npm install ooxast-util-to-jast
```

## Use

## API

***

### `toJast()`

#### Signature

```ts
toJast(tree: Element | Text | Root, file: VFile, userOptions?: Options): JastRoot;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | `Element` | `Text` | `Root` |
| `file` | `VFile` |
| `userOptions?` | [`Options`](modules.md#options) |

#### Returns

`JastRoot`

Defined in:  [lib/ooxast-util-to-jast.ts:50](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/ooxast-util-to-jast.ts#L50)

#### Signature

```ts
toJast(tree: Element | Text | Root, userOptions?: Options): JastRoot;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | `Element` | `Text` | `Root` |
| `userOptions?` | [`Options`](modules.md#options) |

#### Returns

`JastRoot`

Defined in:  [lib/ooxast-util-to-jast.ts:51](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/ooxast-util-to-jast.ts#L51)

***

### `defaultHandlers`

> **`Const`** `object`

```ts
{
    article: () => void;
    body: (j: J, body: Body) => Sec | Body;
    doctype: () => void;
    document: (j: J, node: Document) => Article;
    drawing: (j: J, node: Drawing) => Fig;
    footnote: (j: J, node: Element) => undefined | Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | P | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X;
    footnotes: (j: J, node: Footnotes) => void;
    instrText: (j: J, citation: T, parent: Parent<Node<Data>, Data>) => any;
    instruction: () => void;
    p: (j: J, p: P, parent: Parent<Node<Data>, Data>) => Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | P | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X | (Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | P | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X)[];
    r: (j: J, node: R) => any;
    root: (j: J, node: Root) => Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | P | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X;
    t: (j: J, parent: Node) => JastContent[];
    tbl: (j: J, tbl: Tbl) => {
        attributes: {};
        children: (Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | P | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X)[];
        name: string;
        type: string;
    };
    tc: (j: J, node: Tc) => Td;
    text: (j: J, node: Text) => Text;
    tr: (j: J, tr: Row) => Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | P | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X;
    xml: () => void;
}
```

#### Type declaration

| Member | Type |
| :------ | :------ |
| `article` | () => `void` |
| `body` | (`j`: `J`, `body`: `Body`) => `Sec` | `Body` |
| `doctype` | () => `void` |
| `document` | (`j`: `J`, `node`: `Document`) => `Article` |
| `drawing` | (`j`: `J`, `node`: `Drawing`) => `Fig` |
| `footnote` | (`j`: `J`, `node`: `Element`) => `undefined` | `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `P` | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |
| `footnotes` | (`j`: `J`, `node`: `Footnotes`) => `void` |
| `instrText` | (`j`: `J`, `citation`: `T`, `parent`: `Parent`<`Node`<`Data`>, `Data`>) => `any` |
| `instruction` | () => `void` |
| `p` | (`j`: `J`, `p`: `P`, `parent`: `Parent`<`Node`<`Data`>, `Data`>) => `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `P` | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` | (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `P` | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)[] |
| `r` | (`j`: `J`, `node`: `R`) => `any` |
| `root` | (`j`: `J`, `node`: `Root`) => `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `P` | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |
| `t` | (`j`: `J`, `parent`: `Node`) => `JastContent`[] |
| `tbl` | (`j`: `J`, `tbl`: `Tbl`) => {     `attributes`: {};     `children`: (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `P` | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)[];     `name`: `string`;     `type`: `string`; } |
| `tc` | (`j`: `J`, `node`: `Tc`) => `Td` |
| `text` | (`j`: `J`, `node`: `Text`) => `Text` |
| `tr` | (`j`: `J`, `tr`: `Row`) => `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `P` | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |
| `xml` | () => `void` |

Defined in:  [lib/handlers/index.ts:17](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/handlers/index.ts#L17)

***

### `Options`

#### Properties

##### `bibname?`

> `string`

Defined in:  [lib/types.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L38)

##### `checked?`

> `string`

Defined in:  [lib/types.ts:33](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L33)

##### `citationType?`

> `"endnote"` | `"mendeley"` | `"word"` | `"citavi"` | `"zotero"`

Defined in:  [lib/types.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L44)

##### `collectCitation?`

> `Function`

###### Type declaration

*Signature\`*

```ts
(citation: any, index: string | number): any;
```

*Parameters\`*

| Name | Type |
| :------ | :------ |
| `citation` | `any` |
| `index` | `string` | `number` |

*Returns\`*

`any`

Defined in:  [lib/types.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L46)

##### `columnSeparator?`

> `boolean`

Defined in:  [lib/types.ts:39](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L39)

##### `document?`

> `boolean`

Defined in:  [lib/types.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L31)

##### `documentClass?`

> `object`

```ts
{
    name: string;
    options?: string[];
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `name` | `string` |
| `options`? | `string`[] |

Defined in:  [lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L40)

##### `handlers?`

> `object`

###### Index signature

[`handle`: `string`]: `Handle`

###### Type declaration

Defined in:  [lib/types.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L30)

##### `italics?`

> `"emph"` | `"textit"`

Defined in:  [lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L37)

##### `newLines?`

> `boolean`

Defined in:  [lib/types.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L32)

##### `parseCitation?`

> `Function`

###### Type declaration

*Signature\`*

```ts
(citation: any): any;
```

*Parameters\`*

| Name | Type |
| :------ | :------ |
| `citation` | `any` |

*Returns\`*

`any`

Defined in:  [lib/types.ts:45](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L45)

##### `quotes?`

> `string`[]

Defined in:  [lib/types.ts:35](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L35)

##### `relations?`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in:  [lib/types.ts:47](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L47)

##### `topSection?`

> `number`

Defined in:  [lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L36)

##### `unchecked?`

> `string`

Defined in:  [lib/types.ts:34](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L34)

## Syntax tree

## Types

## Compatibility

## Security

## Related

## Contribute

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna

[unified]: https://unifiedjs.com

[unifiedgh]: https://github.com/unifiedjs/unified

[xast-from-xml]: https://github.com/syntax-tree/xast-util-from-xml

[rehype]: https://github.com/rehypejs/rehype

[rejour]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour

[rejour-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-parse

[rejour-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-stringify

[rejour-move-abstract]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-move-abstract

[rejour-meta]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-meta

[rejour-relatex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-relatex

[relatex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex

[ooxast-util-to-jast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/ooxast-util-to-jast

[jast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast

[jast-util-to-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast-util-to-texast

[jastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jastscript

[texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast

[texast-util-to-latex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast-util-to-latex

[hast]: https://github.com/syntax-tree/hast

[xast]: https://github.com/syntax-tree/xast

[mdast]: https://github.com/syntax-tree/mdast

[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[latex-utensils]: https://github.com/tamuratak/latex-utensils

[latexjs]: https://github.com/latexjs/latexjs

[reoff]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff

[reoff-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff/reoff-parse

[reoff-rejour]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff/reoff-rejour

[ooxast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ooxast/ooxast

[ooxast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ooxast/ooxast-util-to-jast
