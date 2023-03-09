> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-visit-citations

[![npm version](https://badge.fury.io/js/ooxast-util-citations.svg)](https://badge.fury.io/js/ooxast-util-citations) [![npm downloads](https://img.shields.io/npm/dm/ooxast-util-citations.svg)](https://www.npmjs.com/package/ooxast-util-citations)

*[ooxast][ooxast]* util to visit in text office citations.

## Contents

*   [ooxast-util-visit-citations](#ooxast-util-visit-citations)
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
pnpm add ooxast-util-citations
# or with yarn
# yarn add ooxast-util-citations
# or with npm
# npm install ooxast-util-citations
```

## Use

## API

***

### `constructCitation()`

Construct a citation for Mendeley or Zotero.

#### Signature

```ts
constructCitation(
  curr: Citation, 
  type: string, 
  index: number, 
  bibliography?: Data[]): object;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `curr` | [`Citation`](modules.md#citation) | The citation to construct |
| `type` | `string` | The type of citation to construct |
| `index` | `number` | The index of the citation |
| `bibliography?` | `Data`[] | The bibliography to use |

#### Returns

`object`

The constructed citation and instruction

| Member | Type |
| :------ | :------ |
| `citation` | [`MendeleyCitation`](modules.md#mendeleycitation) | [`ZoteroCitation`](modules.md#zoterocitation) |
| `instr` | `string` |

Defined in:  [lib/ooxast-util-citations.ts:197](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L197)

***

### `findCitations()`

#### Signature

```ts
findCitations(tree: Node<Data>, vfile?: VFile, options?: Options): Root;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | `Node`<`Data`> |
| `vfile?` | `VFile` |
| `options?` | [`Options`](modules.md#options) |

#### Returns

`Root`

Defined in:  [lib/ooxast-util-citations.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L28)

***

### `citationTypesWithSuffixedForm`

> **`Const`** `string`[]

Defined in:  [lib/ooxast-util-citations.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L21)

***

### `Citation`

#### Properties

##### `citationId`

> `string`

Defined in:  [lib/types.ts:6](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L6)

##### `citationItems`

> [`CitationItem`](modules.md#citationitem)[]

Defined in:  [lib/types.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L7)

##### `originalText?`

> `string`

Defined in:  [lib/types.ts:9](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L9)

##### `properties`

> [`Properties`](modules.md#properties)

Defined in:  [lib/types.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L8)

***

### `CitationItem`

#### Properties

##### `id`

> `string`

Defined in:  [lib/types.ts:18](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L18)

##### `infix?`

> `string`

Defined in:  [lib/types.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L22)

##### `itemData`

> `Data`

Defined in:  [lib/types.ts:19](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L19)

##### `label?`

> `string`

Defined in:  [lib/types.ts:23](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L23)

##### `locator?`

> `string`

Defined in:  [lib/types.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L24)

##### `prefix?`

> `string`

Defined in:  [lib/types.ts:20](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L20)

##### `suffix?`

> `string`

Defined in:  [lib/types.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L21)

***

### `Mendeley`

#### Properties

##### `formattedCitation`

> `string`

Defined in:  [lib/types.ts:52](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L52)

##### `plainTextFormattedCitation`

> `string`

Defined in:  [lib/types.ts:53](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L53)

##### `previouslyFormattedCitation`

> `string`

Defined in:  [lib/types.ts:54](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L54)

***

### `MendeleyCitation`

#### Properties

##### `citationId`

> `string`

Defined in:  [lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L40)

##### `citationItems`

> [`MendeleyCitationItem`](modules.md#mendeleycitationitem)[]

Defined in:  [lib/types.ts:41](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L41)

##### `mendeley`

> [`Mendeley`](modules.md#mendeley)

Defined in:  [lib/types.ts:42](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L42)

##### `properties`

> [`MendeleyProperties`](modules.md#mendeleyproperties)

Defined in:  [lib/types.ts:43](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L43)

##### `schema`

> `string`

Defined in:  [lib/types.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L44)

***

### `MendeleyCitationItem`

#### Properties

##### `id`

> `string`

Defined in:  [lib/types.ts:58](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L58)

##### `itemData`

> `Data`

Defined in:  [lib/types.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L59)

##### `uris`

> `string`[]

Defined in:  [lib/types.ts:60](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L60)

***

### `MendeleyProperties`

#### Properties

##### `noteIndex`

> `number`

Defined in:  [lib/types.ts:48](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L48)

***

### `Options`

#### Properties

##### `bibliography?`

> `Data`[]

Defined in:  [lib/ooxast-util-citations.ts:23](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L23)

##### `log?`

> `boolean`

Defined in:  [lib/ooxast-util-citations.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L24)

##### `type?`

> `"endnote"` | `"citavi"` | `"mendeley"` | `"word"` | `"zotero"`

Defined in:  [lib/ooxast-util-citations.ts:25](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/ooxast-util-citations.ts#L25)

***

### `Properties`

#### Properties

##### `mode?`

> `string`

Defined in:  [lib/types.ts:14](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L14)

##### `noteIndex`

> `number`

Defined in:  [lib/types.ts:13](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L13)

***

### `ZoteroCitation`

#### Properties

##### `citationID`

> `string`

Defined in:  [lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L28)

##### `citationItems`

> [`MendeleyCitationItem`](modules.md#mendeleycitationitem)[]

Defined in:  [lib/types.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L29)

##### `properties`

> [`ZoteroProperties`](modules.md#zoteroproperties)

Defined in:  [lib/types.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L30)

##### `schema`

> `string`

Defined in:  [lib/types.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L31)

***

### `ZoteroProperties`

#### Properties

##### `formattedCitation`

> `string`

Defined in:  [lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L36)

##### `noteIndex`

> `number`

Defined in:  [lib/types.ts:35](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L35)

##### `plainCitation`

> `string`

Defined in:  [lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L37)

***

### `CiteOutput`

> (`string` | [`Citation`](modules.md#citation))[]

Defined in:  [lib/types.ts:3](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-citations/src/lib/types.ts#L3)

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
