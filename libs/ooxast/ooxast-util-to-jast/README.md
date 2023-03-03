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

### `all()`

Convert all nodes in tree using j

#### Signature

```ts
all(j: J, parent: Node): JastContent[];
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `j` | [`J`](modules.md#j) | ooxast constructor function |
| `parent` | [`Node`](modules.md#node) |  |

#### Returns

[`JastContent`](modules.md#jastcontent)[]

Defined in:  [src/lib/all.ts:11](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/all.ts#L11)

***

### `one()`

#### Signature

```ts
one(j: J, node: Node, parent: Parent<Node<Data>, Data>): JastContent | JastContent[] | void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`J`](modules.md#j) |
| `node` | [`Node`](modules.md#node) |
| `parent` | [`Parent`](modules.md#parent)<`Node`<`Data`>, `Data`> |

#### Returns

[`JastContent`](modules.md#jastcontent) | [`JastContent`](modules.md#jastcontent)[] | `void`

Defined in:  [src/lib/one.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/one.ts#L8)

***

### `toJast()`

#### Signature

```ts
toJast(tree: Element | Text | Root, options: Options = ...): Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | JastP | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X | JastRoot;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | [`Element`](modules.md#element) | [`Text`](modules.md#text) | [`Root`](modules.md#root) |
| `options` | [`Options`](modules.md#options) |

#### Returns

`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](modules.md#jastp) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` | [`JastRoot`](modules.md#jastroot)

Defined in:  [src/lib/ooxast-util-to-jast.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/ooxast-util-to-jast.ts#L32)

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
    footnote: (j: J, node: Element) => undefined | Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | JastP | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X;
    footnotes: (j: J, node: Footnotes) => void;
    instrText: (j: J, citation: T, parent: Parent<Node<Data>, Data>) => any;
    instruction: () => void;
    p: (j: J, p: P, parent: Parent<Node<Data>, Data>) => Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | JastP | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X | (Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | JastP | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X)[];
    r: (j: J, node: R) => any;
    root: (j: J, node: Root) => Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | JastP | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X;
    t: (j: J, parent: Node) => JastContent[];
    tbl: (j: J, tbl: Tbl) => {
        attributes: {};
        children: (Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | JastP | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X)[];
        name: string;
        type: string;
    };
    tc: (j: J, node: Tc) => Td;
    text: (j: J, node: Text) => Text;
    tr: (j: J, tr: Row) => Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | JastP | Label | Title | ObjectId | Sec | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | Email | Fax | AddrLine | City | Country | ExtLink | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Graphic | Table | Array | Code | Media | Preformat | SupplementaryMaterial | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | LongDesc | Attrib | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Body | Front | Back | FloatsGroup | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Name | Degrees | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Series | Size | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tr | Tfoot | Thead | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X;
    xml: () => void;
}
```

#### Type declaration

| Member | Type |
| :------ | :------ |
| `article` | () => `void` |
| `body` | (`j`: [`J`](modules.md#j), `body`: [`Body`](modules.md#body)) => `Sec` | `Body` |
| `doctype` | () => `void` |
| `document` | (`j`: [`J`](modules.md#j), `node`: `Document`) => `Article` |
| `drawing` | (`j`: [`J`](modules.md#j), `node`: `Drawing`) => `Fig` |
| `footnote` | (`j`: [`J`](modules.md#j), `node`: [`Element`](modules.md#element)) => `undefined` | `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](modules.md#jastp) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |
| `footnotes` | (`j`: [`J`](modules.md#j), `node`: `Footnotes`) => `void` |
| `instrText` | (`j`: [`J`](modules.md#j), `citation`: `T`, `parent`: [`Parent`](modules.md#parent)<`Node`<`Data`>, `Data`>) => `any` |
| `instruction` | () => `void` |
| `p` | (`j`: [`J`](modules.md#j), `p`: [`P`](modules.md#p), `parent`: [`Parent`](modules.md#parent)<`Node`<`Data`>, `Data`>) => `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](modules.md#jastp) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` | (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](modules.md#jastp) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)[] |
| `r` | (`j`: [`J`](modules.md#j), `node`: `R`) => `any` |
| `root` | (`j`: [`J`](modules.md#j), `node`: [`Root`](modules.md#root)) => `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](modules.md#jastp) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |
| `t` | (`j`: [`J`](modules.md#j), `parent`: [`Node`](modules.md#node)) => [`JastContent`](modules.md#jastcontent)[] |
| `tbl` | (`j`: [`J`](modules.md#j), `tbl`: `Tbl`) => {     `attributes`: {};     `children`: (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](modules.md#jastp) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)[];     `name`: `string`;     `type`: `string`; } |
| `tc` | (`j`: [`J`](modules.md#j), `node`: `Tc`) => `Td` |
| `text` | (`j`: [`J`](modules.md#j), `node`: [`Text`](modules.md#text)) => [`Text`](modules.md#text) |
| `tr` | (`j`: [`J`](modules.md#j), `tr`: `Row`) => `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](modules.md#jastp) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |
| `xml` | () => `void` |

Defined in:  [src/lib/handlers/index.ts:17](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/handlers/index.ts#L17)

***

### `Body`

#### Hierarchy

*   `Node`.**Body**

#### Properties

##### `attributes`

> `Record`<`string`, `never`>

Defined in:  [libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:151](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L151)

##### `children`

> (`OMath` | `RunTrackChange`<`"del"`> | `RunTrackChange`<`"ins"`> | `MarkupRange`<`"bookmarkEnd"`> | `never` | `MarkupRange`<`"commentRangeEnd"`> | `MarkupRange`<`"commentRangeStart"`> | `Markup`<`"customXmlDelRangeEnd"`> | `TrackChange`<`"customXmlDelRangeStart"`> | `Markup`<`"customXmlInsRangeEnd"`> | `TrackChange`<`"customXmlInsRangeStart"`> | `Markup`<`"customXmlMoveFromRangeEnd"`> | `TrackChange`<`"customXmlMoveFromRangeStart"`> | `Markup`<`"customXmlMoveToRangeEnd"`> | `TrackChange`<`"customXmlMoveToRangeStart"`> | `RunTrackChange`<`"moveFrom"`> | `MarkupRange`<`"moveFromRangeEnd"`> | `never` | `RunTrackChange`<`"moveTo"`> | `MarkupRange`<`"moveToRangeEnd"`> | `OMathPara` | `Perm` | `never` | `ProofErr` | `CustomXmlBlock` | `SdtBlock` | [`P`](modules.md#p) | `AltChunk` | `Tbl` | `SectPr`)[]

Defined in:  [libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:152](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L152)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistNode.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `"w:body"`

Defined in:  [libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:150](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L150)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistNode.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"element"`

Overrides: UnistNode.type

Defined in:  [libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:149](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L149)

***

### `Context`

#### Properties

##### `baseFound`

> `boolean`

Defined in:  [src/lib/types.ts:60](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L60)

##### `bibname`

> `string`

Defined in:  [src/lib/types.ts:76](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L76)

##### `checked`

> `string`

Defined in:  [src/lib/types.ts:67](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L67)

##### `citationNumber`

> `number`

Defined in:  [src/lib/types.ts:78](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L78)

##### `citationType?`

> `"endnote"` | `"native"` | `"mendeley"` | `"citavi"` | `"zotero"`

Defined in:  [src/lib/types.ts:85](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L85)

##### `citeKeys`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in:  [src/lib/types.ts:84](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L84)

##### `collectCitation`

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

Defined in:  [src/lib/types.ts:80](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L80)

##### `columnSeparator`

> `boolean`

Defined in:  [src/lib/types.ts:77](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L77)

##### `deleteNextRun`

> `boolean`

Defined in:  [src/lib/types.ts:82](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L82)

##### `document`

> `undefined` | `boolean`

Defined in:  [src/lib/types.ts:66](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L66)

##### `documentClass`

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

Defined in:  [src/lib/types.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L71)

##### `frozenBaseUrl`

> `null` | `string`

Defined in:  [src/lib/types.ts:61](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L61)

##### `handlers`

> `object`

###### Index signature

[`handler`: `string`]: [`Handle`](modules.md#handle)

###### Type declaration

Defined in:  [src/lib/types.ts:65](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L65)

##### `inTable`

> `boolean`

Defined in:  [src/lib/types.ts:63](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L63)

##### `italics`

> `string`

Defined in:  [src/lib/types.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L70)

##### `lastFormattedCitation?`

> `string`

Sometimes Zotero/Mendeley will add the formatted citation after the structured
citation. This is a flag to indicate that the next run should be deleted.

Defined in:  [src/lib/types.ts:90](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L90)

##### `lastPlainCitation?`

> `string`

Sometimes Zotero/Mendeley will add the plain citation after the structured
citation. This is a flag to indicate that the next run should be deleted.

Defined in:  [src/lib/types.ts:95](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L95)

##### `nodeById?`

> `object`

###### Index signature

[`id`: `string`]: [`Parent`](modules.md#parent)

###### Type declaration

Defined in:  [src/lib/types.ts:57](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L57)

##### `parseCitation`

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

Defined in:  [src/lib/types.ts:79](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L79)

##### `partialCitation`

> `string`

Defined in:  [src/lib/types.ts:81](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L81)

##### `qNesting`

> `number`

Defined in:  [src/lib/types.ts:64](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L64)

##### `quotes`

> `string`[]

Defined in:  [src/lib/types.ts:69](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L69)

##### `relations`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in:  [src/lib/types.ts:83](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L83)

##### `sectionDepth`

> `number`

Defined in:  [src/lib/types.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L75)

##### `unchecked`

> `string`

Defined in:  [src/lib/types.ts:68](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L68)

##### `wrapText`

> `boolean`

Defined in:  [src/lib/types.ts:62](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L62)

***

### `Element`

An XML element.

#### Hierarchy

*   [`Parent`](modules.md#parent).**Element**

#### Properties

##### `attributes?`

> `Attributes`

Information associated with the element.

Defined in:  node\_modules/.pnpm/@types+xast\@1.0.2/node\_modules/@types/xast/index.d.ts:98

##### `children`

> ([`Element`](modules.md#element) | `Instruction` | `Text` | `Comment` | `Cdata`)[]

List representing the children of a node.

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  node\_modules/.pnpm/@types+xast\@1.0.2/node\_modules/@types/xast/index.d.ts:99

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `string`

The element's qualified name.

Defined in:  node\_modules/.pnpm/@types+xast\@1.0.2/node\_modules/@types/xast/index.d.ts:94

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"element"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  node\_modules/.pnpm/@types+xast\@1.0.2/node\_modules/@types/xast/index.d.ts:90

***

### `JastP`

#### Hierarchy

*   `Node`.**JastP**

#### Properties

##### `attributes`

> `object`

```ts
{
    id?: string;
    specificUse?: string;
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `id`? | `string` |
| `specificUse`? | `string` |

Defined in:  [libs/jast/jast/src/lib/jats.ts:7969](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast/src/lib/jats.ts#L7969)

##### `children`

> (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `Abbrev` | `Address` | `Email` | `ExtLink` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `AnswerSet` | `Answer` | `Explanation` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AwardId` | `FundingSource` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `OpenAccess`)[]

Defined in:  [libs/jast/jast/src/lib/jats.ts:7974](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast/src/lib/jats.ts#L7974)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistNode.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `"p"`

Defined in:  [libs/jast/jast/src/lib/jats.ts:7968](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast/src/lib/jats.ts#L7968)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistNode.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"element"`

Overrides: UnistNode.type

Defined in:  [libs/jast/jast/src/lib/jats.ts:7967](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast/src/lib/jats.ts#L7967)

***

### `JastParent`

Nodes containing other nodes.

#### Hierarchy

*   [`Parent`](modules.md#parent).**JastParent**

#### Properties

##### `children`

> (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](modules.md#jastp) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)[]

List representing the children of a node.

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [libs/jast/jast/src/lib/rejour.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast/src/lib/rejour.ts#L27)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `string`

The variant of a node.

Inherited from: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:22

***

### `JastRoot`

Nodes containing other nodes.

#### Hierarchy

*   [`Parent`](modules.md#parent).**JastRoot**

#### Properties

##### `children`

> (`Doctype` | `Instruction` | `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](modules.md#jastp) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)[]

List representing the children of a node.

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [libs/jast/jast/src/lib/rejour.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast/src/lib/rejour.ts#L22)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"root"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [libs/jast/jast/src/lib/rejour.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast/src/lib/rejour.ts#L21)

***

### `Options`

#### Properties

##### `bibname?`

> `string`

Defined in:  [src/lib/types.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L38)

##### `checked?`

> `string`

Defined in:  [src/lib/types.ts:33](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L33)

##### `citationType?`

> `"endnote"` | `"mendeley"` | `"word"` | `"citavi"` | `"zotero"`

Defined in:  [src/lib/types.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L44)

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

Defined in:  [src/lib/types.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L46)

##### `columnSeparator?`

> `boolean`

Defined in:  [src/lib/types.ts:39](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L39)

##### `document?`

> `boolean`

Defined in:  [src/lib/types.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L31)

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

Defined in:  [src/lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L40)

##### `handlers?`

> `object`

###### Index signature

[`handle`: `string`]: [`Handle`](modules.md#handle)

###### Type declaration

Defined in:  [src/lib/types.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L30)

##### `italics?`

> `"emph"` | `"textit"`

Defined in:  [src/lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L37)

##### `newLines?`

> `boolean`

Defined in:  [src/lib/types.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L32)

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

Defined in:  [src/lib/types.ts:45](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L45)

##### `quotes?`

> `string`[]

Defined in:  [src/lib/types.ts:35](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L35)

##### `relations?`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in:  [src/lib/types.ts:47](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L47)

##### `topSection?`

> `number`

Defined in:  [src/lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L36)

##### `unchecked?`

> `string`

Defined in:  [src/lib/types.ts:34](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L34)

***

### `P`

#### Hierarchy

*   `Node`.**P**

#### Properties

##### `attributes`

> `object`

```ts
{
    w:rsidDel: string;
    w:rsidP: string;
    w:rsidR: string;
    w:rsidRDefault: string;
    w:rsidRPr: string;
}
```

###### Type declaration

| Member | Type |
| :------ | :------ |
| `w:rsidDel` | `string` |
| `w:rsidP` | `string` |
| `w:rsidR` | `string` |
| `w:rsidRDefault` | `string` |
| `w:rsidRPr` | `string` |

Defined in:  [libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:2050](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L2050)

##### `children`

> (`OMath` | `RunTrackChange`<`"del"`> | `RunTrackChange`<`"ins"`> | `MarkupRange`<`"bookmarkEnd"`> | `never` | `MarkupRange`<`"commentRangeEnd"`> | `MarkupRange`<`"commentRangeStart"`> | `CustomXmlRun` | `Markup`<`"customXmlDelRangeEnd"`> | `TrackChange`<`"customXmlDelRangeStart"`> | `Markup`<`"customXmlInsRangeEnd"`> | `TrackChange`<`"customXmlInsRangeStart"`> | `Markup`<`"customXmlMoveFromRangeEnd"`> | `TrackChange`<`"customXmlMoveFromRangeStart"`> | `Markup`<`"customXmlMoveToRangeEnd"`> | `TrackChange`<`"customXmlMoveToRangeStart"`> | `SimpleField` | `Hyperlink` | `RunTrackChange`<`"moveFrom"`> | `MarkupRange`<`"moveFromRangeEnd"`> | `never` | `RunTrackChange`<`"moveTo"`> | `MarkupRange`<`"moveToRangeEnd"`> | `OMathPara` | `Perm` | `never` | `ProofErr` | `SdtRun` | `SmartTagRun` | `BdoContentRun` | `R` | `DirContentRun` | `Rel`<`"subDoc"`> | `PPr`)[]

Defined in:  [libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:2057](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L2057)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistNode.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `"w:p"`

Defined in:  [libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:2049](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L2049)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistNode.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"element"`

Overrides: UnistNode.type

Defined in:  [libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:2048](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L2048)

***

### `Parent`

Nodes containing other nodes.

#### Type parameters

*   `ChildNode` *extends* `Node`<`object`> = `Node`Node item of [children](modules.md#children)
*   `TData` *extends* `object` = `NodeData`<`ChildNode`>

#### Hierarchy

*   `Node`<`TData`>.**Parent**

#### Properties

##### `children`

> `ChildNode`[]

List representing the children of a node.

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:104

##### `data?`

> `TData`

Information from the ecosystem.

Inherited from: Node.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: Node.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `string`

The variant of a node.

Inherited from: Node.type

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:22

***

### `Attributes`

> `OoxastProperties`

Defined in:  [src/lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L28)

***

### `Handle`

> `Function`

#### Type declaration

##### `Signature`

```ts
(j: J, node: any, parent?: Parent): JastContent | JastContent[] | void;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `j` | [`J`](modules.md#j) |
| `node` | `any` |
| `parent?` | [`Parent`](modules.md#parent) |

##### `Returns`

[`JastContent`](modules.md#jastcontent) | [`JastContent`](modules.md#jastcontent)[] | `void`

Defined in:  [src/lib/types.ts:50](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L50)

***

### `J`

> [`JWithProps`](modules.md#jwithprops) & [`JWithoutProps`](modules.md#jwithoutprops) & [`Context`](modules.md#context)

Defined in:  [src/lib/types.ts:136](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L136)

***

### `JWithProps`

> `Function`

#### Type declaration

##### `Signature`

```ts
(
  node: Node, 
  type: string, 
  props?: Attributes, 
  children?: string | JastContent[]): JastContent;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node) |
| `type` | `string` |
| `props?` | [`Attributes`](modules.md#attributes) |
| `children?` | `string` | [`JastContent`](modules.md#jastcontent)[] |

##### `Returns`

[`JastContent`](modules.md#jastcontent)

Defined in:  [src/lib/types.ts:98](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L98)

***

### `JWithoutProps`

> `Function`

#### Type declaration

##### `Signature`

```ts
(node: Node, type: string, children?: string | JastContent[]): JastContent;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node) |
| `type` | `string` |
| `children?` | `string` | [`JastContent`](modules.md#jastcontent)[] |

##### `Returns`

[`JastContent`](modules.md#jastcontent)

Defined in:  [src/lib/types.ts:105](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L105)

***

### `JastContent`

> `ValuesType`<`documentMap`>

Defined in:  [libs/jast/jast/src/lib/jats.ts:13717](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast/src/lib/jats.ts#L13717)

***

### `JastParagraphContent`

> [`JastP`](modules.md#jastp)[`"children"`][`number`]

Defined in:  [src/lib/types.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L10)

***

### `Node`

> [`Parent`](modules.md#parent)[`"children"`][`number`] | [`Root`](modules.md#root)

ooxast Node

Defined in:  [src/lib/types.ts:25](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L25)

***

### `Parents`

> `Extract`<`Exclude`<[`Node`](modules.md#node), [`Text`](modules.md#text) | [`Root`](modules.md#root)>, {
> `children`: `any`[];
> }>

Defined in:  [src/lib/types.ts:152](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L152)

***

### `Root`

> `XastRoot` & {
> `children`: (`RequiredMap`<`document`> | `Doctype` | `Instruction` | [`Text`](modules.md#text))[];
> }

Defined in:  [libs/ooxast/ooxast/src/lib/ooxast.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxast.ts#L21)

***

### `Text`

> `UnistLiteral` & {
> `type`: `"text"`;
> `value`: `string`;
> }

Defined in:  [libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:4038](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L4038)

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
