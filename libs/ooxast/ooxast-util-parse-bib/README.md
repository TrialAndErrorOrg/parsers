> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-parse-bib

Find and convert raw references to CSL-JSON using `anystyle`.

Takes a bibliography array (usually of `w:p`s) and parses it using `anystyle` to CSL.

You need to either: set up an anystyle API on your own (very easy to do, just click the "Deploy to vercel" button below for a version identical to the one used in this repo) or provide the path to the `anystyle` executable.

## Contents

- [ooxast-util-parse-bib](#ooxast-util-parse-bib)
  - [Contents](#contents)
  - [What is this?](#what-is-this)
  - [When should I use this?](#when-should-i-use-this)
  - [Install](#install)
    - [Web API](#web-api)
    - [Locally](#locally)
  - [Use](#use)
    - [Options](#options)
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
pnpm add ooxast-util-parse-bib
# or with yarn
# yarn add ooxast-util-parse-bib
# or with npm
# npm install ooxast-util-parse-bib
```

## Use

### Options

```ts
parseBib(tree: OoxastTree, options:{
  apiUrl?: string,
  apiParams?: {param:string}[],
  anyStylePath?: string
})
```

If no options are provided it will try to use Anystyle on your path, and probably fail.

## API

### Module: ooxast-util-parse-bib

#### Interfaces

- [Options](.interfaces/ooxast_util_parse_bib.Options.md)

#### Functions

##### parseBib

▸ **parseBib**(`tree`, `options`): `Promise`<`undefined` | `Data`\[]>

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `tree` | `Node`<`Data`> |
\| `options` | [`Options`](.interfaces/ooxast_util_parse_bib.Options.md) |

###### Returns

`Promise`<`undefined` | `Data`\[]>

###### Defined in

[src/lib/ooxast-util-parse-bib.ts:13](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-parse-bib/src/lib/ooxast-util-parse-bib.ts#L13)

### Interface: Options

[ooxast-util-parse-bib](.modules).Options

#### Properties

##### anyStylePath

• `Optional` **anyStylePath**: `string`

###### Defined in

[src/lib/ooxast-util-parse-bib.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-parse-bib/src/lib/ooxast-util-parse-bib.ts#L8)

---

##### apiParams

• `Optional` **apiParams**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `param` | `string` |

###### Defined in

[src/lib/ooxast-util-parse-bib.ts:6](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-parse-bib/src/lib/ooxast-util-parse-bib.ts#L6)

---

##### apiUrl

• `Optional` **apiUrl**: `string`

###### Defined in

[src/lib/ooxast-util-parse-bib.ts:5](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-parse-bib/src/lib/ooxast-util-parse-bib.ts#L5)

---

##### headers

• `Optional` **headers**: `Object`

###### Type declaration

\| Name | Type |
\| :------ | :------ |
\| `header` | `string` |

###### Defined in

[src/lib/ooxast-util-parse-bib.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-parse-bib/src/lib/ooxast-util-parse-bib.ts#L7)

---

##### mailto

• `Optional` **mailto**: `string`

###### Defined in

[src/lib/ooxast-util-parse-bib.ts:9](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-parse-bib/src/lib/ooxast-util-parse-bib.ts#L9)

---

##### overrideId

• `Optional` **overrideId**: `boolean`

###### Defined in

[src/lib/ooxast-util-parse-bib.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-parse-bib/src/lib/ooxast-util-parse-bib.ts#L10)

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
