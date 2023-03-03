> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-remove-rsid

Cleans all the rsid tags from an ooxast tree, and merges `w:r` elements if they only differ by rsid values.

Rsid's are Word's way of keeping track of edits, but when you are converting or manipulating the ooxast tree you usually do not want to keep this information around anyway. Rsids end up being incredibly annoying as they split up elements which do not need to be split up for the purposes of creating and manipulating the AST.

## Contents

*   [ooxast-util-remove-rsid](#ooxast-util-remove-rsid)
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
pnpm add ooxast-util-remove-rsid
# or with yarn
# yarn add ooxast-util-remove-rsid
# or with npm
# npm install ooxast-util-remove-rsid
```

## Use

## API

***

### `ooxastUtilRemoveRsid()`

#### Signature

```ts
ooxastUtilRemoveRsid(tree: Root, options?: Options): Root;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | `Root` |
| `options?` | [`Options`](modules.md#options) |

#### Returns

`Root`

Defined in:  [lib/ooxast-util-remove-rsid.ts:16](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-remove-rsid/src/lib/ooxast-util-remove-rsid.ts#L16)

#### Signature

```ts
ooxastUtilRemoveRsid(tree: Node<Data>, options?: Options): Node;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | `Node`<`Data`> |
| `options?` | [`Options`](modules.md#options) |

#### Returns

`Node`

Defined in:  [lib/ooxast-util-remove-rsid.ts:17](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-remove-rsid/src/lib/ooxast-util-remove-rsid.ts#L17)

***

### `Options`

#### Properties

##### `rPrRemoveList?`

> `string`[]

Defined in:  [lib/ooxast-util-remove-rsid.ts:13](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-remove-rsid/src/lib/ooxast-util-remove-rsid.ts#L13)

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
