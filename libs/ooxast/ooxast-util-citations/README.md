> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-visit-citations

_[ooxast][ooxast]_ util to visit in text office citations.

## Contents

- [ooxast-util-visit-citations](#ooxast-util-visit-citations)
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
pnpm add ooxast-util-citations
# or with yarn
# yarn add ooxast-util-citations
# or with npm
# npm install ooxast-util-citations
```

## Use

## API

### Module: ooxast-util-citations

#### Interfaces

- [Citation](.interfaces/ooxast_util_citations.Citation.md)
- [CitationItem](.interfaces/ooxast_util_citations.CitationItem.md)
- [Mendeley](.interfaces/ooxast_util_citations.Mendeley.md)
- [MendeleyCitation](.interfaces/ooxast_util_citations.MendeleyCitation.md)
- [MendeleyCitationItem](.interfaces/ooxast_util_citations.MendeleyCitationItem.md)
- [MendeleyProperties](.interfaces/ooxast_util_citations.MendeleyProperties.md)
- [Options](.interfaces/ooxast_util_citations.Options.md)
- [Properties](.interfaces/ooxast_util_citations.Properties.md)
- [ZoteroCitation](.interfaces/ooxast_util_citations.ZoteroCitation.md)
- [ZoteroProperties](.interfaces/ooxast_util_citations.ZoteroProperties.md)

#### Type Aliases

##### CiteOutput

Ƭ **CiteOutput**: (`string` | [`Citation`](.interfaces/ooxast_util_citations.Citation.md))\[]

###### Defined in

[src/lib/types.ts:3](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L3)

#### Variables

##### citationTypesWithSuffixedForm

• `Const` **citationTypesWithSuffixedForm**: `string`\[]

###### Defined in

[src/lib/ooxast-util-citations.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L21)

#### Functions

##### constructCitation

▸ **constructCitation**(`curr`, `type`, `index`, `bibliography?`): `Object`

Construct a citation for Mendeley or Zotero.

###### Parameters

\| Name | Type | Description |
\| :------ | :------ | :------ |
\| `curr` | [`Citation`](.interfaces/ooxast_util_citations.Citation.md) | The citation to construct |
\| `type` | `string` | The type of citation to construct |
\| `index` | `number` | The index of the citation |
\| `bibliography?` | `Data`\[] | The bibliography to use |

###### Returns

`Object`

The constructed citation and instruction

\| Name | Type |
\| :------ | :------ |
\| `citation` | [`MendeleyCitation`](.interfaces/ooxast_util_citations.MendeleyCitation.md) | [`ZoteroCitation`](.interfaces/ooxast_util_citations.ZoteroCitation.md) |
\| `instr` | `string` |

###### Defined in

[src/lib/ooxast-util-citations.ts:197](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L197)

---

##### findCitations

▸ **findCitations**(`tree`, `vfile?`, `options?`): `Root`

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `tree` | `Node`<`Data`> |
\| `vfile?` | `VFile` |
\| `options?` | [`Options`](.interfaces/ooxast_util_citations.Options.md) |

###### Returns

`Root`

###### Defined in

[src/lib/ooxast-util-citations.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L28)

### Interface: Citation

[ooxast-util-citations](.modules).Citation

#### Properties

##### citationId

• **citationId**: `string`

###### Defined in

[src/lib/types.ts:6](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L6)

---

##### citationItems

• **citationItems**: [`CitationItem`](.interfaces/ooxast_util_citations.CitationItem.md)\[]

###### Defined in

[src/lib/types.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L7)

---

##### originalText

• `Optional` **originalText**: `string`

###### Defined in

[src/lib/types.ts:9](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L9)

---

##### properties

• **properties**: [`Properties`](.interfaces/ooxast_util_citations.Properties.md)

###### Defined in

[src/lib/types.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L8)

### Interface: CitationItem

[ooxast-util-citations](.modules).CitationItem

#### Properties

##### id

• **id**: `string`

###### Defined in

[src/lib/types.ts:18](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L18)

---

##### infix

• `Optional` **infix**: `string`

###### Defined in

[src/lib/types.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L22)

---

##### itemData

• **itemData**: `Data`

###### Defined in

[src/lib/types.ts:19](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L19)

---

##### label

• `Optional` **label**: `string`

###### Defined in

[src/lib/types.ts:23](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L23)

---

##### locator

• `Optional` **locator**: `string`

###### Defined in

[src/lib/types.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L24)

---

##### prefix

• `Optional` **prefix**: `string`

###### Defined in

[src/lib/types.ts:20](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L20)

---

##### suffix

• `Optional` **suffix**: `string`

###### Defined in

[src/lib/types.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L21)

### Interface: Mendeley

[ooxast-util-citations](.modules).Mendeley

#### Properties

##### formattedCitation

• **formattedCitation**: `string`

###### Defined in

[src/lib/types.ts:52](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L52)

---

##### plainTextFormattedCitation

• **plainTextFormattedCitation**: `string`

###### Defined in

[src/lib/types.ts:53](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L53)

---

##### previouslyFormattedCitation

• **previouslyFormattedCitation**: `string`

###### Defined in

[src/lib/types.ts:54](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L54)

### Interface: MendeleyCitation

[ooxast-util-citations](.modules).MendeleyCitation

#### Properties

##### citationId

• **citationId**: `string`

###### Defined in

[src/lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L40)

---

##### citationItems

• **citationItems**: [`MendeleyCitationItem`](.interfaces/ooxast_util_citations.MendeleyCitationItem.md)\[]

###### Defined in

[src/lib/types.ts:41](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L41)

---

##### mendeley

• **mendeley**: [`Mendeley`](.interfaces/ooxast_util_citations.Mendeley.md)

###### Defined in

[src/lib/types.ts:42](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L42)

---

##### properties

• **properties**: [`MendeleyProperties`](.interfaces/ooxast_util_citations.MendeleyProperties.md)

###### Defined in

[src/lib/types.ts:43](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L43)

---

##### schema

• **schema**: `string`

###### Defined in

[src/lib/types.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L44)

### Interface: MendeleyCitationItem

[ooxast-util-citations](.modules).MendeleyCitationItem

#### Properties

##### id

• **id**: `string`

###### Defined in

[src/lib/types.ts:58](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L58)

---

##### itemData

• **itemData**: `Data`

###### Defined in

[src/lib/types.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L59)

---

##### uris

• **uris**: `string`\[]

###### Defined in

[src/lib/types.ts:60](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L60)

### Interface: MendeleyProperties

[ooxast-util-citations](.modules).MendeleyProperties

#### Properties

##### noteIndex

• **noteIndex**: `number`

###### Defined in

[src/lib/types.ts:48](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L48)

### Interface: Options

[ooxast-util-citations](.modules).Options

#### Properties

##### bibliography

• `Optional` **bibliography**: `Data`\[]

###### Defined in

[src/lib/ooxast-util-citations.ts:23](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L23)

---

##### log

• `Optional` **log**: `boolean`

###### Defined in

[src/lib/ooxast-util-citations.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L24)

---

##### type

• `Optional` **type**: `"endnote"` | `"citavi"` | `"mendeley"` | `"word"` | `"zotero"`

###### Defined in

[src/lib/ooxast-util-citations.ts:25](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L25)

### Interface: Properties

[ooxast-util-citations](.modules).Properties

#### Properties

##### mode

• `Optional` **mode**: `string`

###### Defined in

[src/lib/types.ts:14](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L14)

---

##### noteIndex

• **noteIndex**: `number`

###### Defined in

[src/lib/types.ts:13](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L13)

### Interface: ZoteroCitation

[ooxast-util-citations](.modules).ZoteroCitation

#### Properties

##### citationID

• **citationID**: `string`

###### Defined in

[src/lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L28)

---

##### citationItems

• **citationItems**: [`MendeleyCitationItem`](.interfaces/ooxast_util_citations.MendeleyCitationItem.md)\[]

###### Defined in

[src/lib/types.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L29)

---

##### properties

• **properties**: [`ZoteroProperties`](.interfaces/ooxast_util_citations.ZoteroProperties.md)

###### Defined in

[src/lib/types.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L30)

---

##### schema

• **schema**: `string`

###### Defined in

[src/lib/types.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L31)

### Interface: ZoteroProperties

[ooxast-util-citations](.modules).ZoteroProperties

#### Properties

##### formattedCitation

• **formattedCitation**: `string`

###### Defined in

[src/lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L36)

---

##### noteIndex

• **noteIndex**: `number`

###### Defined in

[src/lib/types.ts:35](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L35)

---

##### plainCitation

• **plainCitation**: `string`

###### Defined in

[src/lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L37)

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
[ooxast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/ooxast
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
