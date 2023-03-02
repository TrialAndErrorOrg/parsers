> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-get-style

Get style from a `w:p` element.

## Contents

- [ooxast-util-get-style](#ooxast-util-get-style)
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
pnpm add ooxast-util-get-style
# or with yarn
# yarn add ooxast-util-get-style
# or with npm
# npm install ooxast-util-get-style
```

## Use

## API

### Module: ooxast-util-get-style

#### Type Aliases

##### RPrAttributes

Ƭ **RPrAttributes**: keyof `RPrMap`

###### Defined in

[src/lib/ooxast-util-get-rstyle.ts:6](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-get-style/src/lib/ooxast-util-get-rstyle.ts#L6)

---

##### RPrJSON

Ƭ **RPrJSON**: [`RPrAttributes`](.modules#rprattributes) extends keyof `RPrMap` ? `Partial`<`Record`<\`w:${RPrAttributes}\`, `RPrMap`\[[`RPrAttributes`](.modules#rprattributes)] | { `w:val?`: `boolean` }>> : `never`

###### Defined in

[src/lib/ooxast-util-get-rstyle.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-get-style/src/lib/ooxast-util-get-rstyle.ts#L7)

#### Functions

##### getPStyle

▸ **getPStyle**(`p`): `string` | `null` | `undefined`

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `p` | `P` |

###### Returns

`string` | `null` | `undefined`

###### Defined in

[src/lib/ooxast-util-get-pstyle.ts:4](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-get-style/src/lib/ooxast-util-get-pstyle.ts#L4)

---

##### getRStyle

▸ **getRStyle**(`r`): [`RPrJSON`](.modules#rprjson)

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `r` | `R` |

###### Returns

[`RPrJSON`](.modules#rprjson)

###### Defined in

[src/lib/ooxast-util-get-rstyle.ts:16](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/ooxast/ooxast-util-get-style/src/lib/ooxast-util-get-rstyle.ts#L16)

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
