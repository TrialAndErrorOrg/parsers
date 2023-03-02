> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# jast-jast-util-to-texast

Utility to convert a [jast][jast] tree to a [texast][texast] tree.

## Contents

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
pnpm add jast-util-to-texast
# or with yarn
# yarn add jast-util-to-texast
# or with npm
# npm install jast-util-to-texast
```

## Use

## API

### Module: jast-util-to-texast

#### Interfaces

- [Context](.interfaces/jast_util_to_texast.Context.md)
- [Name](.interfaces/jast_util_to_texast.Name.md)
- [Options](.interfaces/jast_util_to_texast.Options.md)
- [Parent](.interfaces/jast_util_to_texast.Parent.md)
- [Root](.interfaces/jast_util_to_texast.Root.md)
- [TexastLiteral](.interfaces/jast_util_to_texast.TexastLiteral.md)
- [TexastParent](.interfaces/jast_util_to_texast.TexastParent.md)
- [TexastRoot](.interfaces/jast_util_to_texast.TexastRoot.md)
- [Text](.interfaces/jast_util_to_texast.Text.md)

#### Type Aliases

##### Attributes

Ƭ **Attributes**: `JastProperties`

###### Defined in

[src/lib/types.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L29)

---

##### Content

Ƭ **Content**: `ValuesType`<`documentMap`>

###### Defined in

[libs/jast/jast/src/lib/jats.ts:13717](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L13717)

---

##### Element

Ƭ **Element**: `Extract`<[`Content`](.modules#content), { `type`: `"element"` }>

###### Defined in

[libs/jast/jast/src/lib/jats.ts:13718](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L13718)

---

##### Handle

Ƭ **Handle**: (`j`: [`J`](.modules#j), `node`: `any`, `parent?`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) | [`TexastContent`](.modules#texastcontent)\[] | `void`

###### Type declaration

▸ (`j`, `node`, `parent?`): [`TexastContent`](.modules#texastcontent) | [`TexastContent`](.modules#texastcontent)\[] | `void`

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `j` | [`J`](.modules#j) |
\| `node` | `any` |
\| `parent?` | [`Parent`](.interfaces/jast_util_to_texast.Parent.md) |

\####### Returns

[`TexastContent`](.modules#texastcontent) | [`TexastContent`](.modules#texastcontent)\[] | `void`

###### Defined in

[src/lib/types.ts:49](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L49)

---

##### J

Ƭ **J**: [`JWithProps`](.modules#jwithprops) & [`JWithoutProps`](.modules#jwithoutprops) & [`Context`](.interfaces/jast_util_to_texast.Context.md)

###### Defined in

[src/lib/types.ts:106](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L106)

---

##### JWithProps

Ƭ **JWithProps**: (`node`: [`Node`](.modules#node), `type`: `string`, `props?`: [`Attributes`](.modules#attributes), `children?`: `string` | [`TexastContent`](.modules#texastcontent)\[]) => [`TexastContent`](.modules#texastcontent)

###### Type declaration

▸ (`node`, `type`, `props?`, `children?`): [`TexastContent`](.modules#texastcontent)

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `node` | [`Node`](.modules#node) |
\| `type` | `string` |
\| `props?` | [`Attributes`](.modules#attributes) |
\| `children?` | `string` | [`TexastContent`](.modules#texastcontent)\[] |

\####### Returns

[`TexastContent`](.modules#texastcontent)

###### Defined in

[src/lib/types.ts:84](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L84)

---

##### JWithPropsSpecific

Ƭ **JWithPropsSpecific**<`TNode`>: (`node`: [`Node`](.modules#node), `type`: `Pick`<`TNode`, `"type"`>, `props?`: [`Attributes`](.modules#attributes), `children?`: `Pick`<`TNode`, `"children"`>) => `TNode`

###### Type parameters

\| Name | Type |
\| :------ | :------ |
\| `TNode` | extends [`TexastContent`](.modules#texastcontent) = [`TexastContent`](.modules#texastcontent) |

###### Type declaration

▸ (`node`, `type`, `props?`, `children?`): `TNode`

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `node` | [`Node`](.modules#node) |
\| `type` | `Pick`<`TNode`, `"type"`> |
\| `props?` | [`Attributes`](.modules#attributes) |
\| `children?` | `Pick`<`TNode`, `"children"`> |

\####### Returns

`TNode`

###### Defined in

[src/lib/types.ts:97](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L97)

---

##### JWithoutProps

Ƭ **JWithoutProps**: (`node`: [`Node`](.modules#node), `type`: `string`, `children?`: `string` | [`TexastContent`](.modules#texastcontent)\[]) => [`TexastContent`](.modules#texastcontent)

###### Type declaration

▸ (`node`, `type`, `children?`): [`TexastContent`](.modules#texastcontent)

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `node` | [`Node`](.modules#node) |
\| `type` | `string` |
\| `children?` | `string` | [`TexastContent`](.modules#texastcontent)\[] |

\####### Returns

[`TexastContent`](.modules#texastcontent)

###### Defined in

[src/lib/types.ts:91](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L91)

---

##### Node

Ƭ **Node**: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)\[`"children"`]\[`number`] | [`Root`](.interfaces/jast_util_to_texast.Root.md)

jast Node

###### Defined in

[src/lib/types.ts:26](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L26)

---

##### Parents

Ƭ **Parents**: `Extract`<`Exclude`<[`Node`](.modules#node), [`Text`](.interfaces/jast_util_to_texast.Text.md) | [`Root`](.interfaces/jast_util_to_texast.Root.md)>, { `children`: `any`\[] }>

###### Defined in

[src/lib/types.ts:122](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L122)

---

##### TexastContent

Ƭ **TexastContent**: `TopLevelDocumentContent` | `PreambleContent` | `AlignmentContent` | `MathContent` | `CommandContent` | [`TexastParagraphContent`](.modules#texastparagraphcontent) | `CommandArg` | `ListContent` | `Text` | `Comment` | `TabularContent` | `TableRowContent`

###### Defined in

[libs/texast/texast/src/lib/texast.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/texast/texast/src/lib/texast.ts#L32)

---

##### TexastParagraphContent

Ƭ **TexastParagraphContent**: `Text` | `InlineMath` | `Command` | `Comment`

###### Defined in

[libs/texast/texast/src/lib/texast.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/texast/texast/src/lib/texast.ts#L75)

#### Variables

##### defaultHandlers

• `Const` **defaultHandlers**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `abbrev` | () => `void` |
\| `abbrevJournaltitle` | () => `void` |
\| `abstract` | () => `void` |
\| `accessDate` | () => `void` |
\| `ack` | () => `void` |
\| `addrLine` | () => `void` |
\| `address` | () => `void` |
\| `aff` | () => `void` |
\| `affAlternatives` | () => `void` |
\| `altText` | () => `void` |
\| `altTitle` | () => `void` |
\| `alternatives` | () => `void` |
\| `annotation` | () => `void` |
\| `anonymous` | () => `void` |
\| `answer` | () => `void` |
\| `answerSet` | () => `void` |
\| `app` | () => `void` |
\| `appGroup` | () => `void` |
\| `array` | () => `void` |
\| `article` | (`j`: [`J`](.modules#j), `node`: [`Root`](.interfaces/jast_util_to_texast.Root.md)) => [`TexastContent`](.modules#texastcontent) |
\| `articleCategories` | () => `void` |
\| `articleId` | () => `void` |
\| `articleMeta` | () => `void` |
\| `articleTitle` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `articleVersion` | () => `void` |
\| `articleVersionalternatives` | () => `void` |
\| `attrib` | () => `void` |
\| `authorComment` | () => `void` |
\| `authorNotes` | () => `void` |
\| `awardDesc` | () => `void` |
\| `awardGroup` | () => `void` |
\| `awardId` | () => `void` |
\| `awardName` | () => `void` |
\| `back` | (`j`: [`J`](.modules#j), `parent`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `bio` | () => `void` |
\| `blockAlternatives` | () => `void` |
\| `body` | (`j`: [`J`](.modules#j), `node`: [`Root`](.interfaces/jast_util_to_texast.Root.md)) => [`TexastContent`](.modules#texastcontent) |
\| `bold` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `boxedText` | () => `void` |
\| `break` | () => `void` |
\| `caption` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `chapterTitle` | () => `void` |
\| `chemStruct` | () => `void` |
\| `chemStructwrap` | () => `void` |
\| `citationAlternatives` | () => `void` |
\| `city` | () => `void` |
\| `code` | () => `void` |
\| `col` | () => `void` |
\| `colgroup` | () => `void` |
\| `collab` | () => `void` |
\| `collabAlternatives` | () => `void` |
\| `command` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `comment` | () => `void` |
\| `compoundKwd` | () => `void` |
\| `compoundKwdpart` | () => `void` |
\| `compoundSubject` | () => `void` |
\| `compoundSubjectpart` | () => `void` |
\| `confAcronym` | () => `void` |
\| `confDate` | () => `void` |
\| `confLoc` | () => `void` |
\| `confName` | () => `void` |
\| `confNum` | () => `void` |
\| `confSponsor` | () => `void` |
\| `confTheme` | () => `void` |
\| `conference` | () => `void` |
\| `contrib` | () => `void` |
\| `contribGroup` | (`j`: [`J`](.modules#j), `node`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `contribId` | () => `void` |
\| `contributedResourcegroup` | () => `void` |
\| `copyrightHolder` | () => `void` |
\| `copyrightStatement` | () => `void` |
\| `copyrightYear` | () => `void` |
\| `corresp` | () => `void` |
\| `count` | () => `void` |
\| `country` | () => `void` |
\| `counts` | () => `void` |
\| `customMeta` | () => `void` |
\| `customMetagroup` | () => `void` |
\| `dataTitle` | () => `void` |
\| `date` | () => `void` |
\| `dateIncitation` | () => `void` |
\| `day` | () => `void` |
\| `def` | () => `void` |
\| `defHead` | () => `void` |
\| `defItem` | () => `void` |
\| `defList` | () => `void` |
\| `degrees` | () => `void` |
\| `disp-quote` | (`j`: [`J`](.modules#j), `node`: `DispQuote`) => `Environment` |
\| `dispFormula` | () => `void` |
\| `dispFormulagroup` | () => `void` |
\| `dispQuote` | () => `void` |
\| `edition` | () => `void` |
\| `elementCitation` | () => `void` |
\| `elocationId` | () => `void` |
\| `email` | () => `void` |
\| `equationCount` | () => `void` |
\| `era` | () => `void` |
\| `etal` | () => `void` |
\| `event` | () => `void` |
\| `eventDesc` | () => `void` |
\| `explanation` | () => `void` |
\| `extLink` | (`j`: [`J`](.modules#j), `node`: `ExtLink`) => { `children`: `CommandArg`\[] ; `name`: `string` = 'href'; `type`: `string` = 'command' } |
\| `extendedBy` | () => `void` |
\| `fax` | () => `void` |
\| `fig` | (`j`: [`J`](.modules#j), `fig`: `Fig`) => { `children`: [`TexastContent`](.modules#texastcontent)\[] ; `name`: `string` = 'figure'; `type`: `string` = 'environment' } |
\| `figCount` | () => `void` |
\| `figGroup` | () => `void` |
\| `fixedCase` | () => `void` |
\| `floatsGroup` | () => `void` |
\| `fn` | (`j`: [`J`](.modules#j), `parent`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `fnGroup` | (`j`: [`J`](.modules#j), `parent`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `fpage` | () => `void` |
\| `front` | (`j`: [`J`](.modules#j), `node`: [`Root`](.interfaces/jast_util_to_texast.Root.md)) => [`TexastContent`](.modules#texastcontent) |
\| `frontStub` | () => `void` |
\| `fundingGroup` | () => `void` |
\| `fundingSource` | () => `void` |
\| `fundingStatement` | () => `void` |
\| `givenNames` | () => `void` |
\| `glossary` | () => `void` |
\| `glyphData` | () => `void` |
\| `glyphRef` | () => `void` |
\| `gov` | () => `void` |
\| `graphic` | (`j`: [`J`](.modules#j), `node`: `Graphic`) => { `children`: (`CommandArg` | { `type`: `string` = 'text'; `value`: `string` = '\n' })\[] ; `name`: `string` = 'includegraphics'; `type`: `string` = 'command' } |
\| `history` | () => `void` |
\| `hr` | () => `void` |
\| `indexTerm` | () => `void` |
\| `indexTermrangeend` | () => `void` |
\| `inlineFormula` | () => `void` |
\| `inlineGraphic` | (`j`: [`J`](.modules#j), `node`: `Graphic`) => { `children`: (`CommandArg` | { `type`: `string` = 'text'; `value`: `string` = '\n' })\[] ; `name`: `string` = 'includegraphics'; `type`: `string` = 'command' } |
\| `inlineMedia` | () => `void` |
\| `inlineSupplementarymaterial` | () => `void` |
\| `institution` | () => `void` |
\| `institutionId` | () => `void` |
\| `institutionWrap` | () => `void` |
\| `instruction` | () => `void` |
\| `isbn` | () => `void` |
\| `issn` | () => `void` |
\| `issnL` | () => `void` |
\| `issue` | () => `void` |
\| `issueId` | () => `void` |
\| `issuePart` | () => `void` |
\| `issueSponsor` | () => `void` |
\| `issueSubtitle` | () => `void` |
\| `issueTitle` | () => `void` |
\| `issueTitlegroup` | (`j`: [`J`](.modules#j), `node`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `italic` | (`j`: [`J`](.modules#j), `node`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent) |
\| `journalId` | () => `void` |
\| `journalMeta` | () => `void` |
\| `journalSubtitle` | () => `void` |
\| `journalTitle` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `journalTitlegroup` | (`j`: [`J`](.modules#j), `node`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `kwd` | () => `void` |
\| `kwdGroup` | () => `void` |
\| `label` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `license` | () => `void` |
\| `licenseP` | () => `void` |
\| `list` | (`j`: [`J`](.modules#j), `list`: `List`) => { `children`: [`TexastContent`](.modules#texastcontent)\[] ; `name`: `string` ; `type`: `string` = 'environment' } |
\| `listItem` | (`j`: [`J`](.modules#j), `item`: `ListItem`) => [`TexastContent`](.modules#texastcontent) |
\| `longDesc` | () => `void` |
\| `lpage` | () => `void` |
\| `media` | () => `void` |
\| `metaName` | () => `void` |
\| `metaValue` | () => `void` |
\| `milestoneEnd` | () => `void` |
\| `milestoneStart` | () => `void` |
\| `mixedCitation` | () => `void` |
\| `monospace` | () => `void` |
\| `month` | () => `void` |
\| `name` | () => `void` |
\| `nameAlternatives` | () => `void` |
\| `namedContent` | () => `void` |
\| `nestedKwd` | () => `void` |
\| `nlmCitation` | () => `void` |
\| `note` | () => `void` |
\| `notes` | () => `void` |
\| `objectId` | () => `void` |
\| `onBehalfof` | () => `void` |
\| `openAccess` | () => `void` |
\| `option` | () => `void` |
\| `overline` | () => `void` |
\| `overlineEnd` | () => `void` |
\| `overlineStart` | () => `void` |
\| `p` | (`j`: [`J`](.modules#j), `p`: `P`) => [`TexastContent`](.modules#texastcontent) |
\| `pageCount` | () => `void` |
\| `pageRange` | () => `void` |
\| `partTitle` | () => `void` |
\| `patent` | () => `void` |
\| `permissions` | () => `void` |
\| `personGroup` | () => `void` |
\| `phone` | () => `void` |
\| `postalCode` | () => `void` |
\| `prefix` | () => `void` |
\| `preformat` | () => `void` |
\| `price` | () => `void` |
\| `principalAwardrecipient` | () => `void` |
\| `principalInvestigator` | () => `void` |
\| `privateChar` | () => `void` |
\| `processingMeta` | () => `void` |
\| `product` | () => `void` |
\| `pubDate` | () => `void` |
\| `pubDatenotavailable` | () => `void` |
\| `pubHistory` | () => `void` |
\| `pubId` | () => `void` |
\| `publisher` | () => `void` |
\| `publisherLoc` | () => `void` |
\| `publisherName` | () => `void` |
\| `question` | () => `void` |
\| `questionPreamble` | () => `void` |
\| `questionWrap` | () => `void` |
\| `questionWrapgroup` | () => `void` |
\| `rb` | () => `void` |
\| `ref` | () => `void` |
\| `refCount` | () => `void` |
\| `refList` | (`j`: [`J`](.modules#j), `list`: `RefList`) => `Environment` | `undefined` |
\| `relatedArticle` | () => `void` |
\| `relatedObject` | () => `void` |
\| `resourceId` | () => `void` |
\| `resourceName` | () => `void` |
\| `resourceWrap` | () => `void` |
\| `response` | () => `void` |
\| `restrictedBy` | () => `void` |
\| `role` | () => `void` |
\| `roman` | () => `void` |
\| `root` | (`j`: [`J`](.modules#j), `node`: [`Root`](.interfaces/jast_util_to_texast.Root.md)) => [`TexastContent`](.modules#texastcontent) |
\| `rp` | () => `void` |
\| `rt` | () => `void` |
\| `ruby` | () => `void` |
\| `sansSerif` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `sc` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `season` | () => `void` |
\| `sec` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `secMeta` | () => `void` |
\| `see` | () => `void` |
\| `seeAlso` | () => `void` |
\| `selfUri` | () => `void` |
\| `series` | () => `void` |
\| `seriesText` | () => `void` |
\| `seriesTitle` | () => `void` |
\| `sig` | () => `void` |
\| `sigBlock` | () => `void` |
\| `size` | () => `void` |
\| `source` | () => `void` |
\| `speaker` | () => `void` |
\| `speech` | () => `void` |
\| `state` | () => `void` |
\| `statement` | () => `void` |
\| `std` | () => `void` |
\| `stdOrganization` | () => `void` |
\| `strike` | () => `void` |
\| `stringConf` | () => `void` |
\| `stringDate` | () => `void` |
\| `stringName` | () => `void` |
\| `styledContent` | () => `void` |
\| `sub` | (`j`: [`J`](.modules#j), `node`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent) |
\| `subArticle` | () => `void` |
\| `subjGroup` | () => `void` |
\| `subject` | () => `void` |
\| `subtitle` | () => `void` |
\| `suffix` | () => `void` |
\| `sup` | (`j`: [`J`](.modules#j), `node`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent) |
\| `supplement` | () => `void` |
\| `supplementaryMaterial` | () => `void` |
\| `supportDescription` | () => `void` |
\| `supportGroup` | () => `void` |
\| `supportSource` | () => `void` |
\| `surname` | () => `void` |
\| `table` | (`j`: [`J`](.modules#j), `table`: `Table`) => { `children`: [`TexastContent`](.modules#texastcontent)\[] = contents; `name`: `string` = 'tabular'; `type`: `string` = 'environment' } |
\| `tableCount` | () => `void` |
\| `tableWrap` | (`j`: [`J`](.modules#j), `node`: `TableWrap`) => [`TexastContent`](.modules#texastcontent) |
\| `tableWrapfoot` | () => `void` |
\| `tableWrapgroup` | () => `void` |
\| `target` | () => `void` |
\| `tbody` | (`j`: [`J`](.modules#j), `parent`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `td` | (`j`: [`J`](.modules#j), `node`: `Td`) => `TableCell` |
\| `term` | () => `void` |
\| `termHead` | () => `void` |
\| `texMath` | () => `void` |
\| `text` | (`j`: [`J`](.modules#j), `node`: [`Text`](.interfaces/jast_util_to_texast.Text.md)) => [`TexastContent`](.modules#texastcontent) |
\| `textualForm` | () => `void` |
\| `tfoot` | () => `void` |
\| `th` | () => `void` |
\| `thead` | () => `void` |
\| `timeStamp` | () => `void` |
\| `title` | (`j`: [`J`](.modules#j), `parent`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `titleGroup` | (`j`: [`J`](.modules#j), `node`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `tr` | (`j`: [`J`](.modules#j), `node`: `Tr`) => [`TexastContent`](.modules#texastcontent) |
\| `transAbstract` | () => `void` |
\| `transSource` | () => `void` |
\| `transSubtitle` | () => `void` |
\| `transTitle` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `transTitlegroup` | (`j`: [`J`](.modules#j), `node`: [`Node`](.modules#node)) => [`TexastContent`](.modules#texastcontent)\[] |
\| `underline` | () => `void` |
\| `underlineEnd` | () => `void` |
\| `underlineStart` | () => `void` |
\| `unstructuredKwdgroup` | () => `void` |
\| `uri` | () => `void` |
\| `verseGroup` | () => `void` |
\| `verseLine` | () => `void` |
\| `version` | () => `void` |
\| `volume` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `volumeId` | () => `void` |
\| `volumeIssuegroup` | () => `void` |
\| `volumeSeries` | (`j`: [`J`](.modules#j), `node`: [`Parents`](.modules#parents), `parent`: [`Parent`](.interfaces/jast_util_to_texast.Parent.md)) => [`TexastContent`](.modules#texastcontent) |
\| `wordCount` | () => `void` |
\| `x` | () => `void` |
\| `xml` | () => `void` |
\| `xref` | (`j`: [`J`](.modules#j), `node`: `Xref`) => [`TexastContent`](.modules#texastcontent) |
\| `year` | () => `void` |

###### Defined in

[src/lib/handlers/index.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/handlers/index.ts#L29)

#### Functions

##### all

▸ **all**(`j`, `parent`): [`TexastContent`](.modules#texastcontent)\[]

Convert all nodes in tree using j

###### Parameters

\| Name | Type | Description |
\| :------ | :------ | :------ |
\| `j` | [`J`](.modules#j) | jast constructor function |
\| `parent` | [`Node`](.modules#node) | |

###### Returns

[`TexastContent`](.modules#texastcontent)\[]

###### Defined in

[src/lib/all.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/all.ts#L10)

---

##### one

▸ **one**(`j`, `node`, `parent`): [`TexastContent`](.modules#texastcontent) | [`TexastContent`](.modules#texastcontent)\[] | `void`

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `j` | [`J`](.modules#j) |
\| `node` | [`Node`](.modules#node) |
\| `parent` | [`Parent`](.interfaces/jast_util_to_texast.Parent.md) |

###### Returns

[`TexastContent`](.modules#texastcontent) | [`TexastContent`](.modules#texastcontent)\[] | `void`

###### Defined in

[src/lib/one.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/one.ts#L7)

---

##### toTexast

▸ **toTexast**(`tree`, `options?`): [`TexastContent`](.modules#texastcontent) | [`TexastRoot`](.interfaces/jast_util_to_texast.TexastRoot.md)

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `tree` | [`TexastContent`](.modules#texastcontent) | [`TexastRoot`](.interfaces/jast_util_to_texast.TexastRoot.md) |
\| `options` | [`Options`](.interfaces/jast_util_to_texast.Options.md) |

###### Returns

[`TexastContent`](.modules#texastcontent) | [`TexastRoot`](.interfaces/jast_util_to_texast.TexastRoot.md)

###### Defined in

[src/lib/jast-util-to-texast.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/jast-util-to-texast.ts#L24)

### Interface: Context

[jast-util-to-texast](.modules).Context

#### Properties

##### baseFound

• **baseFound**: `boolean`

###### Defined in

[src/lib/types.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L59)

---

##### bibname

• **bibname**: `string`

###### Defined in

[src/lib/types.ts:76](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L76)

---

##### booktabs

• **booktabs**: `boolean`

###### Defined in

[src/lib/types.ts:68](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L68)

---

##### checked

• **checked**: `string`

###### Defined in

[src/lib/types.ts:66](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L66)

---

##### citationAnalyzer

• **citationAnalyzer**: (`node`: [`Node`](.modules#node)) => `string`

###### Type declaration

▸ (`node`): `string`

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `node` | [`Node`](.modules#node) |

\####### Returns

`string`

###### Defined in

[src/lib/types.ts:81](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L81)

---

##### columnSeparator

• **columnSeparator**: `boolean`

###### Defined in

[src/lib/types.ts:77](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L77)

---

##### document

• **document**: `undefined` | `boolean`

###### Defined in

[src/lib/types.ts:65](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L65)

---

##### documentClass

• **documentClass**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `name` | `string` |
\| `options?` | `string`\[] |

###### Defined in

[src/lib/types.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L71)

---

##### footnotes

• **footnotes**: `Record`<`string`, [`TexastContent`](.modules#texastcontent)\[]>

###### Defined in

[src/lib/types.ts:78](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L78)

---

##### frozenBaseUrl

• **frozenBaseUrl**: `null` | `string`

###### Defined in

[src/lib/types.ts:60](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L60)

---

##### handlers

• **handlers**: `Object`

###### Index signature

▪ \[handler: `string`]: [`Handle`](.modules#handle)

###### Defined in

[src/lib/types.ts:64](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L64)

---

##### inTable

• **inTable**: `boolean`

###### Defined in

[src/lib/types.ts:62](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L62)

---

##### italics

• **italics**: `string`

###### Defined in

[src/lib/types.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L70)

---

##### nodeById

• `Optional` **nodeById**: `Object`

###### Index signature

▪ \[id: `string`]: [`Element`](.modules#element)

###### Defined in

[src/lib/types.ts:56](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L56)

---

##### numberOfRows

• **numberOfRows**: `number`

###### Defined in

[src/lib/types.ts:80](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L80)

---

##### qNesting

• **qNesting**: `number`

###### Defined in

[src/lib/types.ts:63](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L63)

---

##### quotes

• **quotes**: `string`\[]

###### Defined in

[src/lib/types.ts:69](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L69)

---

##### rowNumber

• **rowNumber**: `number`

###### Defined in

[src/lib/types.ts:79](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L79)

---

##### sectionDepth

• **sectionDepth**: `number`

###### Defined in

[src/lib/types.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L75)

---

##### unchecked

• **unchecked**: `string`

###### Defined in

[src/lib/types.ts:67](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L67)

---

##### wrapText

• **wrapText**: `boolean`

###### Defined in

[src/lib/types.ts:61](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L61)

### Interface: Name

[jast-util-to-texast](.modules).Name

#### Hierarchy

- `Node`

  ↳ **`Name`**

#### Properties

##### attributes

• **attributes**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `id?` | `string` |
\| `nameStyle?` | `NameTypeNameStyle` |
\| `specificUse?` | `string` |

###### Defined in

[libs/jast/jast/src/lib/jats.ts:6790](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L6790)

---

##### children

• **children**: ([`Text`](.interfaces/jast_util_to_texast.Text.md) | `GivenNames` | `Prefix` | `Suffix` | `Surname`)\[]

###### Defined in

[libs/jast/jast/src/lib/jats.ts:6796](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L6796)

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

• **name**: `"name"`

###### Defined in

[libs/jast/jast/src/lib/jats.ts:6789](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L6789)

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

[libs/jast/jast/src/lib/jats.ts:6788](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L6788)

### Interface: Options

[jast-util-to-texast](.modules).Options

#### Properties

##### bibname

• `Optional` **bibname**: `string`

###### Defined in

[src/lib/types.ts:39](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L39)

---

##### booktabs

• `Optional` **booktabs**: `boolean`

###### Defined in

[src/lib/types.ts:41](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L41)

---

##### checked

• `Optional` **checked**: `string`

###### Defined in

[src/lib/types.ts:34](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L34)

---

##### citationAnalyzer

• `Optional` **citationAnalyzer**: (`node`: [`Node`](.modules#node)) => `string`

###### Type declaration

▸ (`node`): `string`

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `node` | [`Node`](.modules#node) |

\####### Returns

`string`

###### Defined in

[src/lib/types.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L46)

---

##### columnSeparator

• `Optional` **columnSeparator**: `boolean`

###### Defined in

[src/lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L40)

---

##### document

• `Optional` **document**: `boolean`

###### Defined in

[src/lib/types.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L32)

---

##### documentClass

• `Optional` **documentClass**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `name` | `string` |
\| `options?` | `string`\[] |

###### Defined in

[src/lib/types.ts:42](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L42)

---

##### handlers

• `Optional` **handlers**: `Object`

###### Index signature

▪ \[handle: `string`]: [`Handle`](.modules#handle)

###### Defined in

[src/lib/types.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L31)

---

##### italics

• `Optional` **italics**: `"emph"` | `"textit"`

###### Defined in

[src/lib/types.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L38)

---

##### newLines

• `Optional` **newLines**: `boolean`

###### Defined in

[src/lib/types.ts:33](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L33)

---

##### quotes

• `Optional` **quotes**: `string`\[]

###### Defined in

[src/lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L36)

---

##### topSection

• `Optional` **topSection**: `number`

###### Defined in

[src/lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L37)

---

##### unchecked

• `Optional` **unchecked**: `string`

###### Defined in

[src/lib/types.ts:35](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-to-texast/src/lib/types.ts#L35)

### Interface: Parent

[jast-util-to-texast](.modules).Parent

#### Hierarchy

- `Parent`

  ↳ **`Parent`**

#### Properties

##### children

• **children**: ([`Text`](.interfaces/jast_util_to_texast.Text.md) | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `Label` | `ObjectId` | `P` | `Sec` | `Title` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `AddrLine` | `City` | `Country` | `Email` | `ExtLink` | `Fax` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Array` | `Code` | `Graphic` | `Media` | `Preformat` | `SupplementaryMaterial` | `Table` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `Attrib` | `LongDesc` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Back` | `Body` | `FloatsGroup` | `Front` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Degrees` | [`Name`](.interfaces/jast_util_to_texast.Name.md) | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Series` | `Size` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tfoot` | `Thead` | `Tr` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X`)\[]

###### Overrides

UnistParent.children

###### Defined in

[libs/jast/jast/src/lib/rejour.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/rejour.ts#L27)

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

UnistParent.data

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

UnistParent.position

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `string`

The variant of a node.

###### Inherited from

UnistParent.type

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:22

### Interface: Root

[jast-util-to-texast](.modules).Root

#### Hierarchy

- `Parent`

  ↳ **`Root`**

#### Properties

##### children

• **children**: ([`Text`](.interfaces/jast_util_to_texast.Text.md) | `Bold` | `FixedCase` | `Italic` | `Monospace` | `NamedContent` | `Overline` | `Roman` | `Ruby` | `SansSerif` | `Sc` | `Strike` | `StyledContent` | `Sub` | `Sup` | `Underline` | `AbbrevJournaltitle` | `Abbrev` | `Def` | `Abstract` | `Label` | `ObjectId` | `P` | `Sec` | `Title` | `AccessDate` | `Ack` | `KwdGroup` | `RefList` | `SubjGroup` | `Address` | `AddrLine` | `City` | `Country` | `Email` | `ExtLink` | `Fax` | `Institution` | `InstitutionWrap` | `Phone` | `PostalCode` | `State` | `Uri` | `Alternatives` | `ChemStruct` | `IndexTerm` | `IndexTermrangeend` | `InlineFormula` | `InlineGraphic` | `InlineMedia` | `MilestoneEnd` | `MilestoneStart` | `PrivateChar` | `AffAlternatives` | `Aff` | `Break` | `Fn` | `InlineSupplementarymaterial` | `RelatedArticle` | `RelatedObject` | `Target` | `Xref` | `Array` | `Code` | `Graphic` | `Media` | `Preformat` | `SupplementaryMaterial` | `Table` | `TexMath` | `TextualForm` | `AltText` | `AltTitle` | `Annotation` | `Anonymous` | `AnswerSet` | `Answer` | `Explanation` | `Subtitle` | `BlockAlternatives` | `BoxedText` | `ChemStructwrap` | `DefList` | `DispFormula` | `DispFormulagroup` | `DispQuote` | `Fig` | `FigGroup` | `FnGroup` | `Glossary` | `List` | `Question` | `QuestionWrap` | `QuestionWrapgroup` | `Speech` | `Statement` | `TableWrap` | `TableWrapgroup` | `VerseGroup` | `AppGroup` | `App` | `Permissions` | `SecMeta` | `Attrib` | `LongDesc` | `Tbody` | `ArticleCategories` | `SeriesText` | `SeriesTitle` | `ArticleId` | `ArticleMeta` | `Isbn` | `ArticleVersion` | `ArticleVersionalternatives` | `AuthorNotes` | `Conference` | `ContribGroup` | `Counts` | `CustomMetagroup` | `ElocationId` | `Fpage` | `FundingGroup` | `History` | `Issue` | `IssueId` | `IssuePart` | `IssueSponsor` | `IssueTitle` | `IssueTitlegroup` | `Lpage` | `PageRange` | `Product` | `PubDate` | `PubDatenotavailable` | `PubHistory` | `SelfUri` | `Supplement` | `SupportGroup` | `TitleGroup` | `TransAbstract` | `Volume` | `VolumeId` | `VolumeIssuegroup` | `VolumeSeries` | `ArticleTitle` | `Article` | `Back` | `Body` | `FloatsGroup` | `Front` | `ProcessingMeta` | `Response` | `SubArticle` | `AuthorComment` | `Corresp` | `AwardDesc` | `AwardGroup` | `AwardId` | `AwardName` | `FundingSource` | `PrincipalAwardrecipient` | `PrincipalInvestigator` | `SupportSource` | `Bio` | `Notes` | `SigBlock` | `Caption` | `ChapterTitle` | `CitationAlternatives` | `ElementCitation` | `MixedCitation` | `NlmCitation` | `Colgroup` | `Col` | `CollabAlternatives` | `Collab` | `OnBehalfof` | `Role` | `Comment` | `CompoundKwdpart` | `CompoundKwd` | `CompoundSubjectpart` | `CompoundSubject` | `ConfAcronym` | `ConfDate` | `ConfLoc` | `ConfName` | `ConfNum` | `ConfSponsor` | `ConfTheme` | `Contrib` | `ContribId` | `Degrees` | [`Name`](.interfaces/jast_util_to_texast.Name.md) | `NameAlternatives` | `StringName` | `ContributedResourcegroup` | `ResourceGroup` | `SupportDescription` | `CopyrightHolder` | `CopyrightStatement` | `CopyrightYear` | `Count` | `EquationCount` | `FigCount` | `PageCount` | `RefCount` | `TableCount` | `WordCount` | `CustomMeta` | `MetaName` | `MetaValue` | `DataTitle` | `DateIncitation` | `Day` | `Era` | `Month` | `Season` | `Year` | `Date` | `DefHead` | `DefItem` | `Term` | `TermHead` | `Edition` | `Etal` | `Gov` | `Issn` | `IssnL` | `PartTitle` | `Patent` | `PersonGroup` | `PubId` | `PublisherLoc` | `PublisherName` | `Series` | `Size` | `Source` | `Std` | `StringDate` | `TransSource` | `TransTitle` | `Version` | `EventDesc` | `Event` | `ExtendedBy` | `FrontStub` | `JournalMeta` | `FundingStatement` | `OpenAccess` | `GivenNames` | `GlyphData` | `GlyphRef` | `Hr` | `See` | `SeeAlso` | `InstitutionId` | `IssueSubtitle` | `TransTitlegroup` | `JournalId` | `JournalTitlegroup` | `Publisher` | `JournalSubtitle` | `JournalTitle` | `Kwd` | `NestedKwd` | `LicenseP` | `Price` | `License` | `ListItem` | `Prefix` | `Suffix` | `Surname` | `TimeStamp` | `Note` | `Option` | `OverlineEnd` | `OverlineStart` | `RestrictedBy` | `QuestionPreamble` | `Rb` | `Ref` | `ResourceName` | `ResourceWrap` | `ResourceId` | `Rp` | `Rt` | `Sig` | `Speaker` | `StdOrganization` | `StringConf` | `Subject` | `Tfoot` | `Thead` | `Tr` | `TableWrapfoot` | `Td` | `Th` | `TransSubtitle` | `UnderlineEnd` | `UnderlineStart` | `UnstructuredKwdgroup` | `VerseLine` | `X` | `Instruction` | `Doctype`)\[]

###### Overrides

UnistParent.children

###### Defined in

[libs/jast/jast/src/lib/rejour.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/rejour.ts#L22)

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

UnistParent.data

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

UnistParent.position

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `"root"`

###### Overrides

UnistParent.type

###### Defined in

[libs/jast/jast/src/lib/rejour.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/rejour.ts#L21)

### Interface: TexastLiteral\<Value, TData>

[jast-util-to-texast](.modules).TexastLiteral

Nodes containing a value.

#### Type parameters

\| Name | Type | Description |
\| :------ | :------ | :------ |
\| `Value` | `unknown` | Specific value type of Literal.value such as `string` for `Text` node |
\| `TData` | extends `object` = `Data` | - |

#### Hierarchy

- `Node`<`TData`>

  ↳ **`TexastLiteral`**

  ↳↳ [`Text`](.interfaces/jast_util_to_texast.Text.md)

#### Properties

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

---

##### value

• **value**: `Value`

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:113

### Interface: TexastParent

[jast-util-to-texast](.modules).TexastParent

#### Hierarchy

- `Parent`

  ↳ **`TexastParent`**

  ↳↳ [`TexastRoot`](.interfaces/jast_util_to_texast.TexastRoot.md)

#### Properties

##### children

• **children**: [`TexastContent`](.modules#texastcontent)\[]

###### Overrides

UnistParent.children

###### Defined in

[libs/texast/texast/src/lib/texast.ts:106](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/texast/texast/src/lib/texast.ts#L106)

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

UnistParent.data

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

UnistParent.position

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `string`

The variant of a node.

###### Inherited from

UnistParent.type

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:22

### Interface: TexastRoot

[jast-util-to-texast](.modules).TexastRoot

#### Hierarchy

- [`TexastParent`](.interfaces/jast_util_to_texast.TexastParent.md)

  ↳ **`TexastRoot`**

#### Properties

##### children

• **children**: [`TexastContent`](.modules#texastcontent)\[]

###### Inherited from

[TexastParent](.interfaces/jast_util_to_texast.TexastParent.md).[children](.interfaces/jast_util_to_texast.TexastParent.md#children)

###### Defined in

[libs/texast/texast/src/lib/texast.ts:106](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/texast/texast/src/lib/texast.ts#L106)

---

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

[TexastParent](.interfaces/jast_util_to_texast.TexastParent.md).[data](.interfaces/jast_util_to_texast.TexastParent.md#data)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

[TexastParent](.interfaces/jast_util_to_texast.TexastParent.md).[position](.interfaces/jast_util_to_texast.TexastParent.md#position)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `"root"`

The variant of a node.

###### Overrides

[TexastParent](.interfaces/jast_util_to_texast.TexastParent.md).[type](.interfaces/jast_util_to_texast.TexastParent.md#type)

###### Defined in

[libs/texast/texast/src/lib/texast.ts:86](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/texast/texast/src/lib/texast.ts#L86)

### Interface: Text

[jast-util-to-texast](.modules).Text

Nodes containing a value.

#### Hierarchy

- [`TexastLiteral`](.interfaces/jast_util_to_texast.TexastLiteral.md)

  ↳ **`Text`**

#### Properties

##### data

• `Optional` **data**: `Data`

Information from the ecosystem.

###### Inherited from

[TexastLiteral](.interfaces/jast_util_to_texast.TexastLiteral.md).[data](.interfaces/jast_util_to_texast.TexastLiteral.md#data)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:27

---

##### position

• `Optional` **position**: `Position`

Location of a node in a source document.
Must not be present if a node is generated.

###### Inherited from

[TexastLiteral](.interfaces/jast_util_to_texast.TexastLiteral.md).[position](.interfaces/jast_util_to_texast.TexastLiteral.md#position)

###### Defined in

node_modules/.pnpm/@types+unist\@2.0.6/node_modules/@types/unist/index.d.ts:33

---

##### type

• **type**: `"text"`

The variant of a node.

###### Overrides

[TexastLiteral](.interfaces/jast_util_to_texast.TexastLiteral.md).[type](.interfaces/jast_util_to_texast.TexastLiteral.md#type)

###### Defined in

[libs/jast/jast/src/lib/jats.ts:43](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L43)

---

##### value

• **value**: `string`

###### Overrides

[TexastLiteral](.interfaces/jast_util_to_texast.TexastLiteral.md).[value](.interfaces/jast_util_to_texast.TexastLiteral.md#value)

###### Defined in

[libs/jast/jast/src/lib/jats.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast/src/lib/jats.ts#L44)

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
[jast-jast-util-to-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast-jast-util-to-texast
[jastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jastscript
[texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast
[texast-util-to-latex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast-util-to-latex
[hast]: https://github.com/syntax-tree/hast
[xast]: https://github.com/syntax-tree/xast
[mdast]: https://github.com/syntax-tree/mdast
[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown
[latex-utensils]: https://github.com/tamuratak/latex-utensils
[latexjs]: https://github.com/latexjs/latexjs
