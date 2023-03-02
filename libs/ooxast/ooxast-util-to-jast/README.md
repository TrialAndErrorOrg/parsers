> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-to-jast

Util to convert `ooxast` syntax tree to `jast` syntax tree, allowing for `.docx` to `JATS XML` conversion.

## Contents

- [ooxast-util-to-jast](#ooxast-util-to-jast)
  - [Contents](#contents)
  - [What is this?](#what-is-this)
  - [When should I use this?](#when-should-i-use-this)
  - [Install](#install)
  - [Use](#use)
  - [API](#api)
  - [Syntax tree](#syntax-tree)
  - [Types](#types)
  - [Compatibility](#compatibility)
  - [Security](#security)
  - [Related](#related)
  - [Contribute](#contribute)
  - [License](#license)

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

### Module: ooxast-util-to-jast

#### Interfaces

- [Body](.interfaces/ooxast_util_to_jast.Body.md)
- [Context](.interfaces/ooxast_util_to_jast.Context.md)
- [Element](.interfaces/ooxast_util_to_jast.Element.md)
- [JastP](.interfaces/ooxast_util_to_jast.JastP.md)
- [JastParent](.interfaces/ooxast_util_to_jast.JastParent.md)
- [JastRoot](.interfaces/ooxast_util_to_jast.JastRoot.md)
- [Options](.interfaces/ooxast_util_to_jast.Options.md)
- [P](.interfaces/ooxast_util_to_jast.P.md)
- [Parent](.interfaces/ooxast_util_to_jast.Parent.md)

#### Type Aliases

##### Attributes

Ƭ **Attributes**: `OoxastProperties`

###### Defined in

[src/lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L28)

---

##### Handle

Ƭ **Handle**: (`j`: [`J`](.modules#j), `node`: `any`, `parent?`: [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md)) => [`JastContent`](.modules#jastcontent) | [`JastContent`](.modules#jastcontent)\[] | `void`

###### Type declaration

▸ (`j`, `node`, `parent?`): [`JastContent`](.modules#jastcontent) | [`JastContent`](.modules#jastcontent)\[] | `void`

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `j` | [`J`](.modules#j) |
\| `node` | `any` |
\| `parent?` | [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md) |

\####### Returns

[`JastContent`](.modules#jastcontent) | [`JastContent`](.modules#jastcontent)\[] | `void`

###### Defined in

[src/lib/types.ts:50](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L50)

---

##### J

Ƭ **J**: [`JWithProps`](.modules#jwithprops) & [`JWithoutProps`](.modules#jwithoutprops) & [`Context`](.interfaces/ooxast_util_to_jast.Context.md)

###### Defined in

[src/lib/types.ts:136](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L136)

---

##### JWithProps

Ƭ **JWithProps**: (`node`: [`Node`](.modules#node), `type`: `string`, `props?`: [`Attributes`](.modules#attributes), `children?`: `string` | [`JastContent`](.modules#jastcontent)\[]) => [`JastContent`](.modules#jastcontent)

###### Type declaration

▸ (`node`, `type`, `props?`, `children?`): [`JastContent`](.modules#jastcontent)

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `node` | [`Node`](.modules#node) |
\| `type` | `string` |
\| `props?` | [`Attributes`](.modules#attributes) |
\| `children?` | `string` | [`JastContent`](.modules#jastcontent)\[] |

\####### Returns

[`JastContent`](.modules#jastcontent)

###### Defined in

[src/lib/types.ts:98](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L98)

---

##### JWithoutProps

Ƭ **JWithoutProps**: (`node`: [`Node`](.modules#node), `type`: `string`, `children?`: `string` | [`JastContent`](.modules#jastcontent)\[]) => [`JastContent`](.modules#jastcontent)

###### Type declaration

▸ (`node`, `type`, `children?`): [`JastContent`](.modules#jastcontent)

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `node` | [`Node`](.modules#node) |
\| `type` | `string` |
\| `children?` | `string` | [`JastContent`](.modules#jastcontent)\[] |

\####### Returns

[`JastContent`](.modules#jastcontent)

###### Defined in

[src/lib/types.ts:105](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L105)

---

##### JastContent

Ƭ **JastContent**: `ValuesType`<`documentMap`>

###### Defined in

[libs/jast/jast/src/lib/jats.ts:13717](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L13717)

---

##### JastParagraphContent

Ƭ **JastParagraphContent**: [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md)\[`"children"`]\[`number`]

###### Defined in

[src/lib/types.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L10)

---

##### Node

Ƭ **Node**: [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md)\[`"children"`]\[`number`] | [`Root`](.modules#root)

ooxast Node

###### Defined in

[src/lib/types.ts:25](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L25)

---

##### Parents

Ƭ **Parents**: `Extract`<`Exclude`<[`Node`](.modules#node), [`Text`](.modules#text) | [`Root`](.modules#root)>, { `children`: `any`\[] }>

###### Defined in

[src/lib/types.ts:152](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L152)

---

##### Root

Ƭ **Root**: `XastRoot` & { `children`: (`RequiredMap`<`document`> | `Doctype` | `Instruction` | [`Text`](.modules#text))\[] }

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxast.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxast.ts#L21)

---

##### Text

Ƭ **Text**: `UnistLiteral` & { `type`: `"text"` ; `value`: `string` }

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:4038](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L4038)

#### Variables

##### defaultHandlers

• `Const` **defaultHandlers**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `article` | () => `void` |
\| `body` | (`j`: [`J`](.modules#j), `body`: [`Body`](.interfaces/ooxast_util_to_jast.Body.md)) => `Sec` | `Body` |
\| `doctype` | () => `void` |
\| `document` | (`j`: [`J`](.modules#j), `node`: `Document`) => `Article` |
\| `drawing` | (`j`: [`J`](.modules#j), `node`: `Drawing`) => `Fig` |
\| `footnote` | (`j`: [`J`](.modules#j), `node`: [`Element`](.interfaces/ooxast_util_to_jast.Element.md)) => `undefined` | `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |
\| `footnotes` | (`j`: [`J`](.modules#j), `node`: `Footnotes`) => `void` |
\| `instrText` | (`j`: [`J`](.modules#j), `citation`: `T`, `parent`: [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md)<`Node`<`Data`>, `Data`>) => `any` |
\| `instruction` | () => `void` |
\| `p` | (`j`: [`J`](.modules#j), `p`: [`P`](.interfaces/ooxast_util_to_jast.P.md), `parent`: [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md)<`Node`<`Data`>, `Data`>) => `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` | (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)\[] |
\| `r` | (`j`: [`J`](.modules#j), `node`: `R`) => `any` |
\| `root` | (`j`: [`J`](.modules#j), `node`: [`Root`](.modules#root)) => `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |
\| `t` | (`j`: [`J`](.modules#j), `parent`: [`Node`](.modules#node)) => [`JastContent`](.modules#jastcontent)\[] |
\| `tbl` | (`j`: [`J`](.modules#j), `tbl`: `Tbl`) => { `attributes`: {} = {}; `children`: (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)\[] ; `name`: `string` = 'tableWrap'; `type`: `string` = 'element' } |
\| `tc` | (`j`: [`J`](.modules#j), `node`: `Tc`) => `Td` |
\| `text` | (`j`: [`J`](.modules#j), `node`: [`Text`](.modules#text)) => [`Text`](.modules#text) |
\| `tr` | (`j`: [`J`](.modules#j), `tr`: `Row`) => `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` |
\| `xml` | () => `void` |

###### Defined in

[src/lib/handlers/index.ts:17](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/handlers/index.ts#L17)

#### Functions

##### all

▸ **all**(`j`, `parent`): [`JastContent`](.modules#jastcontent)\[]

Convert all nodes in tree using j

###### Parameters

\| Name | Type | Description |
\| :------ | :------ | :------ |
\| `j` | [`J`](.modules#j) | ooxast constructor function |
\| `parent` | [`Node`](.modules#node) | |

###### Returns

[`JastContent`](.modules#jastcontent)\[]

###### Defined in

[src/lib/all.ts:11](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/all.ts#L11)

---

##### one

▸ **one**(`j`, `node`, `parent`): [`JastContent`](.modules#jastcontent) | [`JastContent`](.modules#jastcontent)\[] | `void`

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `j` | [`J`](.modules#j) |
\| `node` | [`Node`](.modules#node) |
\| `parent` | [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md)<`Node`<`Data`>, `Data`> |

###### Returns

[`JastContent`](.modules#jastcontent) | [`JastContent`](.modules#jastcontent)\[] | `void`

###### Defined in

[src/lib/one.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/one.ts#L8)

---

##### toJast

▸ **toJast**(`tree`, `options?`): `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` | [`JastRoot`](.interfaces/ooxast_util_to_jast.JastRoot.md)

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `tree` | [`Element`](.interfaces/ooxast_util_to_jast.Element.md) | [`Text`](.modules#text) | [`Root`](.modules#root) |
\| `options` | [`Options`](.interfaces/ooxast_util_to_jast.Options.md) |

###### Returns

`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` | [`JastRoot`](.interfaces/ooxast_util_to_jast.JastRoot.md)

###### Defined in

[src/lib/ooxast-util-to-jast.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/ooxast-util-to-jast.ts#L32)

### Interface: Body

[ooxast-util-to-jast](.modules).Body

#### Hierarchy

- `Node`

  ↳ **`Body`**

#### Properties

##### attributes

• **attributes**: `Record`<`string`, `never`>

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:151](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L151)

---

##### children

• **children**: (`OMath` | `RunTrackChange`<`"del"`> | `RunTrackChange`<`"ins"`> | `MarkupRange`<`"bookmarkEnd"`> | `never` | `MarkupRange`<`"commentRangeEnd"`> | `MarkupRange`<`"commentRangeStart"`> | `Markup`<`"customXmlDelRangeEnd"`> | `TrackChange`<`"customXmlDelRangeStart"`> | `Markup`<`"customXmlInsRangeEnd"`> | `TrackChange`<`"customXmlInsRangeStart"`> | `Markup`<`"customXmlMoveFromRangeEnd"`> | `TrackChange`<`"customXmlMoveFromRangeStart"`> | `Markup`<`"customXmlMoveToRangeEnd"`> | `TrackChange`<`"customXmlMoveToRangeStart"`> | `RunTrackChange`<`"moveFrom"`> | `MarkupRange`<`"moveFromRangeEnd"`> | `never` | `RunTrackChange`<`"moveTo"`> | `MarkupRange`<`"moveToRangeEnd"`> | `OMathPara` | `Perm` | `never` | `ProofErr` | `CustomXmlBlock` | `SdtBlock` | [`P`](.interfaces/ooxast_util_to_jast.P.md) | `AltChunk` | `Tbl` | `SectPr`)\[]

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:152](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L152)

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

UnistNode.data

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### name

• **name**: `"w:body"`

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:150](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L150)

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

UnistNode.position

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `"element"`

###### Overrides

UnistNode.type

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:149](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L149)

### Interface: Context

[ooxast-util-to-jast](.modules).Context

#### Properties

##### baseFound

• **baseFound**: `boolean`

###### Defined in

[src/lib/types.ts:60](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L60)

---

##### bibname

• **bibname**: `string`

###### Defined in

[src/lib/types.ts:76](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L76)

---

##### checked

• **checked**: `string`

###### Defined in

[src/lib/types.ts:67](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L67)

---

##### citationNumber

• **citationNumber**: `number`

###### Defined in

[src/lib/types.ts:78](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L78)

---

##### citationType

• `Optional` **citationType**: `"endnote"` | `"native"` | `"mendeley"` | `"citavi"` | `"zotero"`

###### Defined in

[src/lib/types.ts:85](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L85)

---

##### citeKeys

• **citeKeys**: `Object`

###### Index signature

▪ \[key: `string`]: `string`

###### Defined in

[src/lib/types.ts:84](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L84)

---

##### collectCitation

• **collectCitation**: (`citation`: `any`, `index`: `string` | `number`) => `any`

###### Type declaration

▸ (`citation`, `index`): `any`

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `citation` | `any` |
\| `index` | `string` | `number` |

\####### Returns

`any`

###### Defined in

[src/lib/types.ts:80](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L80)

---

##### columnSeparator

• **columnSeparator**: `boolean`

###### Defined in

[src/lib/types.ts:77](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L77)

---

##### deleteNextRun

• **deleteNextRun**: `boolean`

###### Defined in

[src/lib/types.ts:82](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L82)

---

##### document

• **document**: `undefined` | `boolean`

###### Defined in

[src/lib/types.ts:66](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L66)

---

##### documentClass

• **documentClass**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `name` | `string` |
\| `options?` | `string`\[] |

###### Defined in

[src/lib/types.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L71)

---

##### frozenBaseUrl

• **frozenBaseUrl**: `null` | `string`

###### Defined in

[src/lib/types.ts:61](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L61)

---

##### handlers

• **handlers**: `Object`

###### Index signature

▪ \[handler: `string`]: [`Handle`](.modules#handle)

###### Defined in

[src/lib/types.ts:65](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L65)

---

##### inTable

• **inTable**: `boolean`

###### Defined in

[src/lib/types.ts:63](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L63)

---

##### italics

• **italics**: `string`

###### Defined in

[src/lib/types.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L70)

---

##### lastFormattedCitation

• `Optional` **lastFormattedCitation**: `string`

Sometimes Zotero/Mendeley will add the formatted citation after the structured
citation. This is a flag to indicate that the next run should be deleted.

###### Defined in

[src/lib/types.ts:90](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L90)

---

##### lastPlainCitation

• `Optional` **lastPlainCitation**: `string`

Sometimes Zotero/Mendeley will add the plain citation after the structured
citation. This is a flag to indicate that the next run should be deleted.

###### Defined in

[src/lib/types.ts:95](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L95)

---

##### nodeById

• `Optional` **nodeById**: `Object`

###### Index signature

▪ \[id: `string`]: [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md)

###### Defined in

[src/lib/types.ts:57](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L57)

---

##### parseCitation

• **parseCitation**: (`citation`: `any`) => `any`

###### Type declaration

▸ (`citation`): `any`

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `citation` | `any` |

\####### Returns

`any`

###### Defined in

[src/lib/types.ts:79](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L79)

---

##### partialCitation

• **partialCitation**: `string`

###### Defined in

[src/lib/types.ts:81](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L81)

---

##### qNesting

• **qNesting**: `number`

###### Defined in

[src/lib/types.ts:64](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L64)

---

##### quotes

• **quotes**: `string`\[]

###### Defined in

[src/lib/types.ts:69](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L69)

---

##### relations

• **relations**: `Object`

###### Index signature

▪ \[key: `string`]: `string`

###### Defined in

[src/lib/types.ts:83](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L83)

---

##### sectionDepth

• **sectionDepth**: `number`

###### Defined in

[src/lib/types.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L75)

---

##### unchecked

• **unchecked**: `string`

###### Defined in

[src/lib/types.ts:68](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L68)

---

##### wrapText

• **wrapText**: `boolean`

###### Defined in

[src/lib/types.ts:62](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L62)

### Interface: Element

[ooxast-util-to-jast](.modules).Element

An XML element.

#### Hierarchy

- [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md)

  ↳ **`Element`**

#### Properties

##### attributes

• `Optional` **attributes**: `Attributes`

Information associated with the element.

###### Defined in

node_modules/.pnpm/@types+xast\@1.0.2/node_modules/@types/xast/index.d.ts:98

---

##### children

• **children**: ([`Element`](.interfaces/ooxast_util_to_jast.Element.md) | `Instruction` | `Text` | `Comment` | `Cdata`)\[]

List representing the children of a node.

###### Overrides

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[children](.interfaces/ooxast_util_to_jast.Parent.md#children)

###### Defined in

node_modules/.pnpm/@types+xast\@1.0.2/node_modules/@types/xast/index.d.ts:99

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[data](.interfaces/ooxast_util_to_jast.Parent.md#data)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### name

• **name**: `string`

The element's qualified name.

###### Defined in

node_modules/.pnpm/@types+xast\@1.0.2/node_modules/@types/xast/index.d.ts:94

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[position](.interfaces/ooxast_util_to_jast.Parent.md#position)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `"element"`

The variant of a node.

###### Overrides

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[type](.interfaces/ooxast_util_to_jast.Parent.md#type)

###### Defined in

node_modules/.pnpm/@types+xast\@1.0.2/node_modules/@types/xast/index.d.ts:90

### Interface: JastP

[ooxast-util-to-jast](.modules).JastP

#### Hierarchy

- `Node`

  ↳ **`JastP`**

#### Properties

##### attributes

• **attributes**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `id?` | `string` |
\| `specificUse?` | `string` |

###### Defined in

[libs/jast/jast/src/lib/jats.ts:7969](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L7969)

---

##### children

• **children**: (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `Abbrev` | `Address` | `Email` | `ExtLink` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `AnswerSet` | `Answer` | `Explanation` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AwardId` | `FundingSource` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `OpenAccess`)\[]

###### Defined in

[libs/jast/jast/src/lib/jats.ts:7974](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L7974)

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

UnistNode.data

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### name

• **name**: `"p"`

###### Defined in

[libs/jast/jast/src/lib/jats.ts:7968](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L7968)

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

UnistNode.position

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `"element"`

###### Overrides

UnistNode.type

###### Defined in

[libs/jast/jast/src/lib/jats.ts:7967](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L7967)

### Interface: JastParent

[ooxast-util-to-jast](.modules).JastParent

Nodes containing other nodes.

#### Hierarchy

- [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md)

  ↳ **`JastParent`**

#### Properties

##### children

• **children**: (`Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)\[]

List representing the children of a node.

###### Overrides

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[children](.interfaces/ooxast_util_to_jast.Parent.md#children)

###### Defined in

[libs/jast/jast/src/lib/rejour.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/rejour.ts#L27)

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[data](.interfaces/ooxast_util_to_jast.Parent.md#data)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[position](.interfaces/ooxast_util_to_jast.Parent.md#position)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `string`

The variant of a node.

###### Inherited from

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[type](.interfaces/ooxast_util_to_jast.Parent.md#type)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:22

### Interface: JastRoot

[ooxast-util-to-jast](.modules).JastRoot

Nodes containing other nodes.

#### Hierarchy

- [`Parent`](.interfaces/ooxast_util_to_jast.Parent.md)

  ↳ **`JastRoot`**

#### Properties

##### children

• **children**: (`Doctype` | `Instruction` | `Text` | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | [`JastP`](.interfaces/ooxast_util_to_jast.JastP.md) | `Label` | `Title` | `ObjectId` | `Sec` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `Email` | `Fax` | `AddrLine` | `City` | `Country` | `ExtLink` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Graphic` | `Table` | `Array` | `Code` | `Media` | `Preformat` | `SupplementaryMaterial` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `LongDesc` | `Attrib` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Body` | `Front` | `Back` | `FloatsGroup` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Name` | `Degrees` | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Series` | `Size` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tr` | `Tfoot` | `Thead` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)\[]

List representing the children of a node.

###### Overrides

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[children](.interfaces/ooxast_util_to_jast.Parent.md#children)

###### Defined in

[libs/jast/jast/src/lib/rejour.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/rejour.ts#L22)

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[data](.interfaces/ooxast_util_to_jast.Parent.md#data)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[position](.interfaces/ooxast_util_to_jast.Parent.md#position)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `"root"`

The variant of a node.

###### Overrides

[Parent](.interfaces/ooxast_util_to_jast.Parent.md).[type](.interfaces/ooxast_util_to_jast.Parent.md#type)

###### Defined in

[libs/jast/jast/src/lib/rejour.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/rejour.ts#L21)

### Interface: Options

[ooxast-util-to-jast](.modules).Options

#### Properties

##### bibname

• `Optional` **bibname**: `string`

###### Defined in

[src/lib/types.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L38)

---

##### checked

• `Optional` **checked**: `string`

###### Defined in

[src/lib/types.ts:33](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L33)

---

##### citationType

• `Optional` **citationType**: `"endnote"` | `"mendeley"` | `"word"` | `"citavi"` | `"zotero"`

###### Defined in

[src/lib/types.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L44)

---

##### collectCitation

• `Optional` **collectCitation**: (`citation`: `any`, `index`: `string` | `number`) => `any`

###### Type declaration

▸ (`citation`, `index`): `any`

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `citation` | `any` |
\| `index` | `string` | `number` |

\####### Returns

`any`

###### Defined in

[src/lib/types.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L46)

---

##### columnSeparator

• `Optional` **columnSeparator**: `boolean`

###### Defined in

[src/lib/types.ts:39](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L39)

---

##### document

• `Optional` **document**: `boolean`

###### Defined in

[src/lib/types.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L31)

---

##### documentClass

• `Optional` **documentClass**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `name` | `string` |
\| `options?` | `string`\[] |

###### Defined in

[src/lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L40)

---

##### handlers

• `Optional` **handlers**: `Object`

###### Index signature

▪ \[handle: `string`]: [`Handle`](.modules#handle)

###### Defined in

[src/lib/types.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L30)

---

##### italics

• `Optional` **italics**: `"emph"` | `"textit"`

###### Defined in

[src/lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L37)

---

##### newLines

• `Optional` **newLines**: `boolean`

###### Defined in

[src/lib/types.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L32)

---

##### parseCitation

• `Optional` **parseCitation**: (`citation`: `any`) => `any`

###### Type declaration

▸ (`citation`): `any`

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `citation` | `any` |

\####### Returns

`any`

###### Defined in

[src/lib/types.ts:45](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L45)

---

##### quotes

• `Optional` **quotes**: `string`\[]

###### Defined in

[src/lib/types.ts:35](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L35)

---

##### relations

• `Optional` **relations**: `Object`

###### Index signature

▪ \[key: `string`]: `string`

###### Defined in

[src/lib/types.ts:47](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L47)

---

##### topSection

• `Optional` **topSection**: `number`

###### Defined in

[src/lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L36)

---

##### unchecked

• `Optional` **unchecked**: `string`

###### Defined in

[src/lib/types.ts:34](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-to-jast/src/lib/types.ts#L34)

### Interface: P

[ooxast-util-to-jast](.modules).P

#### Hierarchy

- `Node`

  ↳ **`P`**

#### Properties

##### attributes

• **attributes**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `w:rsidDel` | `string` |
\| `w:rsidP` | `string` |
\| `w:rsidR` | `string` |
\| `w:rsidRDefault` | `string` |
\| `w:rsidRPr` | `string` |

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:2050](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L2050)

---

##### children

• **children**: (`OMath` | `RunTrackChange`<`"del"`> | `RunTrackChange`<`"ins"`> | `MarkupRange`<`"bookmarkEnd"`> | `never` | `MarkupRange`<`"commentRangeEnd"`> | `MarkupRange`<`"commentRangeStart"`> | `CustomXmlRun` | `Markup`<`"customXmlDelRangeEnd"`> | `TrackChange`<`"customXmlDelRangeStart"`> | `Markup`<`"customXmlInsRangeEnd"`> | `TrackChange`<`"customXmlInsRangeStart"`> | `Markup`<`"customXmlMoveFromRangeEnd"`> | `TrackChange`<`"customXmlMoveFromRangeStart"`> | `Markup`<`"customXmlMoveToRangeEnd"`> | `TrackChange`<`"customXmlMoveToRangeStart"`> | `SimpleField` | `Hyperlink` | `RunTrackChange`<`"moveFrom"`> | `MarkupRange`<`"moveFromRangeEnd"`> | `never` | `RunTrackChange`<`"moveTo"`> | `MarkupRange`<`"moveToRangeEnd"`> | `OMathPara` | `Perm` | `never` | `ProofErr` | `SdtRun` | `SmartTagRun` | `BdoContentRun` | `R` | `DirContentRun` | `Rel`<`"subDoc"`> | `PPr`)\[]

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:2057](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L2057)

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

UnistNode.data

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### name

• **name**: `"w:p"`

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:2049](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L2049)

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

UnistNode.position

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `"element"`

###### Overrides

UnistNode.type

###### Defined in

[libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts:2048](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast/src/lib/ooxml/wordprocessingml/main.ts#L2048)

### Interface: Parent\<ChildNode, TData>

[ooxast-util-to-jast](.modules).Parent

Nodes containing other nodes.

#### Type parameters

\| Name | Type | Description |
\| :------ | :------ | :------ |
\| `ChildNode` | extends `Node`<`object`> = `Node` | Node item of [children](.interfaces/ooxast_util_to_jast.Parent.md#children) |
\| `TData` | extends `object` = `NodeData`<`ChildNode`> | - |

#### Hierarchy

- `Node`<`TData`>

  ↳ **`Parent`**

  ↳↳ [`Element`](.interfaces/ooxast_util_to_jast.Element.md)

  ↳↳ [`JastParent`](.interfaces/ooxast_util_to_jast.JastParent.md)

  ↳↳ [`JastRoot`](.interfaces/ooxast_util_to_jast.JastRoot.md)

#### Properties

##### children

• **children**: `ChildNode`\[]

List representing the children of a node.

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:104

---

##### data

• `Optional` **data**: `TData`

Information from the ecosystem.

###### Inherited from

Node.data

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

Node.position

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `string`

The variant of a node.

###### Inherited from

Node.type

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:22

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
