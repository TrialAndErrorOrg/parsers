> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# rejour-meta

Doesn't do anything atm

## Contents

*   [rejour-meta](#rejour-meta)
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
pnpm add rejour-meta
# or with yarn
# yarn add rejour-meta
# or with npm
# npm install rejour-meta
```

## Use

## API

***

### `rejourMoveAbstract()`

#### Signature

```ts
rejourMoveAbstract(options: ArticleMeta): Function;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ArticleMeta` |

#### Returns

`Function`

##### `Signature`

```ts
(tree: Text | Bold | FixedCase | Italic | Monospace | NamedContent | Overline | Roman | Ruby | SansSerif | Sc | Strike | StyledContent | Sub | Sup | Underline | AbbrevJournaltitle | Abbrev | Def | Abstract | Label | ObjectId | P | Sec | Title | AccessDate | Ack | KwdGroup | RefList | SubjGroup | Address | AddrLine | City | Country | Email | ExtLink | Fax | Institution | InstitutionWrap | Phone | PostalCode | State | Uri | Alternatives | ChemStruct | IndexTerm | IndexTermrangeend | InlineFormula | InlineGraphic | InlineMedia | MilestoneEnd | MilestoneStart | PrivateChar | AffAlternatives | Aff | Break | Fn | InlineSupplementarymaterial | RelatedArticle | RelatedObject | Target | Xref | Array | Code | Graphic | Media | Preformat | SupplementaryMaterial | Table | TexMath | TextualForm | AltText | AltTitle | Annotation | Anonymous | AnswerSet | Answer | Explanation | Subtitle | BlockAlternatives | BoxedText | ChemStructwrap | DefList | DispFormula | DispFormulagroup | DispQuote | Fig | FigGroup | FnGroup | Glossary | List | Question | QuestionWrap | QuestionWrapgroup | Speech | Statement | TableWrap | TableWrapgroup | VerseGroup | AppGroup | App | Permissions | SecMeta | Attrib | LongDesc | Tbody | ArticleCategories | SeriesText | SeriesTitle | ArticleId | ArticleMeta | Isbn | ArticleVersion | ArticleVersionalternatives | AuthorNotes | Conference | ContribGroup | Counts | CustomMetagroup | ElocationId | Fpage | FundingGroup | History | Issue | IssueId | IssuePart | IssueSponsor | IssueTitle | IssueTitlegroup | Lpage | PageRange | Product | PubDate | PubDatenotavailable | PubHistory | SelfUri | Supplement | SupportGroup | TitleGroup | TransAbstract | Volume | VolumeId | VolumeIssuegroup | VolumeSeries | ArticleTitle | Article | Back | Body | FloatsGroup | Front | ProcessingMeta | Response | SubArticle | AuthorComment | Corresp | AwardDesc | AwardGroup | AwardId | AwardName | FundingSource | PrincipalAwardrecipient | PrincipalInvestigator | SupportSource | Bio | Notes | SigBlock | Caption | ChapterTitle | CitationAlternatives | ElementCitation | MixedCitation | NlmCitation | Colgroup | Col | CollabAlternatives | Collab | OnBehalfof | Role | Comment | CompoundKwdpart | CompoundKwd | CompoundSubjectpart | CompoundSubject | ConfAcronym | ConfDate | ConfLoc | ConfName | ConfNum | ConfSponsor | ConfTheme | Contrib | ContribId | Degrees | Name | NameAlternatives | StringName | ContributedResourcegroup | ResourceGroup | SupportDescription | CopyrightHolder | CopyrightStatement | CopyrightYear | Count | EquationCount | FigCount | PageCount | RefCount | TableCount | WordCount | CustomMeta | MetaName | MetaValue | DataTitle | DateIncitation | Day | Era | Month | Season | Year | Date | DefHead | DefItem | Term | TermHead | Edition | Etal | Gov | Issn | IssnL | PartTitle | Patent | PersonGroup | PubId | PublisherLoc | PublisherName | Series | Size | Source | Std | StringDate | TransSource | TransTitle | Version | EventDesc | Event | ExtendedBy | FrontStub | JournalMeta | FundingStatement | OpenAccess | GivenNames | GlyphData | GlyphRef | Hr | See | SeeAlso | InstitutionId | IssueSubtitle | TransTitlegroup | JournalId | JournalTitlegroup | Publisher | JournalSubtitle | JournalTitle | Kwd | NestedKwd | LicenseP | Price | License | ListItem | Prefix | Suffix | Surname | TimeStamp | Note | Option | OverlineEnd | OverlineStart | RestrictedBy | QuestionPreamble | Rb | Ref | ResourceName | ResourceWrap | ResourceId | Rp | Rt | Sig | Speaker | StdOrganization | StringConf | Subject | Tfoot | Thead | Tr | TableWrapfoot | Td | Th | TransSubtitle | UnderlineEnd | UnderlineStart | UnstructuredKwdgroup | VerseLine | X | Root): void;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `tree` | `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `Label` | `ObjectId` | `P` | `Sec` | `Title` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `AddrLine` | `City` | `Country` | `Email` | `ExtLink` | `Fax` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Array` | `Code` | `Graphic` | `Media` | `Preformat` | `SupplementaryMaterial` | `Table` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `Attrib` | `LongDesc` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Back` | `Body` | `FloatsGroup` | `Front` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Degrees` | `Name` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Series` | `Size` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tfoot` | `Thead` | `Tr` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` | `Root` |

##### `Returns`

`void`

Defined in:  [lib/rejour-meta.ts:4](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/rejour/rejour-meta/src/lib/rejour-meta.ts#L4)

***

### `MetaProps`

> `Record`\<keyof `ArticleMeta`, `Element` | `Text`>

Defined in:  [lib/rejour-meta.ts:3](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/rejour/rejour-meta/src/lib/rejour-meta.ts#L3)

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

[relatex-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/relatex-stringify

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
