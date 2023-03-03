> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

***

### `all()`

#### Signature

```ts
all(node: Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | Label | ObjectId | P | Sec | Title | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | AddrLine | City | Country | Email | ExtLink | Fax | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Array | Code | Graphic | Media | Preformat | SupplementaryMaterial | Table | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | Attrib | LongDesc | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Back | Body | FloatsGroup | Front | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Degrees | Name | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Series | Size | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tfoot | Thead | Tr | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X): any[];
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `Label` | `ObjectId` | `P` | `Sec` | `Title` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `AddrLine` | `City` | `Country` | `Email` | `ExtLink` | `Fax` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Array` | `Code` | `Graphic` | `Media` | `Preformat` | `SupplementaryMaterial` | `Table` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `Attrib` | `LongDesc` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Back` | `Body` | `FloatsGroup` | `Front` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Degrees` | `Name` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Series` | `Size` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tfoot` | `Thead` | `Tr` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |

#### Returns

`any`[]

Defined in:  [lib/jast-util-to-csl.ts:250](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast-util-to-csl/src/lib/jast-util-to-csl.ts#L250)

***

### `one()`

#### Signature

```ts
one(node: Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | Label | ObjectId | P | Sec | Title | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | AddrLine | City | Country | Email | ExtLink | Fax | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Array | Code | Graphic | Media | Preformat | SupplementaryMaterial | Table | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | Attrib | LongDesc | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Back | Body | FloatsGroup | Front | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Degrees | Name | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Series | Size | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tfoot | Thead | Tr | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X): any;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `Label` | `ObjectId` | `P` | `Sec` | `Title` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `AddrLine` | `City` | `Country` | `Email` | `ExtLink` | `Fax` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Array` | `Code` | `Graphic` | `Media` | `Preformat` | `SupplementaryMaterial` | `Table` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `Attrib` | `LongDesc` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Back` | `Body` | `FloatsGroup` | `Front` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Degrees` | `Name` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Series` | `Size` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tfoot` | `Thead` | `Tr` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |

#### Returns

`any`

Defined in:  [lib/jast-util-to-csl.ts:264](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast-util-to-csl/src/lib/jast-util-to-csl.ts#L264)

***

### `refListToCSL()`

#### Signature

```ts
refListToCSL(list: RefList): CSL[];
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `RefList` |

#### Returns

`CSL`[]

Defined in:  [lib/jast-util-to-csl.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast-util-to-csl/src/lib/jast-util-to-csl.ts#L28)

***

### `refToCSL()`

#### Signature

```ts
refToCSL(citation: ElementCitation, id: string): CSL;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `citation` | `ElementCitation` |
| `id` | `string` |

#### Returns

`CSL`

Defined in:  [lib/jast-util-to-csl.ts:42](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast-util-to-csl/src/lib/jast-util-to-csl.ts#L42)

***

### `toCSL()`

Parses either Root, Front, or Back jast-element and returns CSL JSON

#### Signature

```ts
toCSL<T>(root: T): CSLConditional<T>;
```

#### Type parameters

*   `T` *extends* `Back` | `Front` | `Root`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `T` |

#### Returns

`CSLConditional`<`T`>

Defined in:  [lib/jast-util-to-csl.ts:219](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast-util-to-csl/src/lib/jast-util-to-csl.ts#L219)

***

### `toCSLBack()`

#### Signature

```ts
toCSLBack(node: Back): CSL[] | undefined;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Back` |

#### Returns

`CSL`[] | `undefined`

Defined in:  [lib/jast-util-to-csl.ts:197](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast-util-to-csl/src/lib/jast-util-to-csl.ts#L197)

***

### `toCSLFront()`

#### Signature

```ts
toCSLFront(node: Front): CSL | undefined;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Front` |

#### Returns

`CSL` | `undefined`

Defined in:  [lib/jast-util-to-csl.ts:189](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/jast/jast-util-to-csl/src/lib/jast-util-to-csl.ts#L189)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add jast-util-to-csl
# or with yarn
# yarn add jast-util-to-csl
# or with npm
# npm install jast-util-to-csl
```

# jast-util-to-csl

Convert a `jast` citation syntax tree to list of `csl` objects.
