> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# xast-util-select

[![npm version](https://badge.fury.io/js/xast-util-select.svg)](https://badge.fury.io/js/xast-util-select) [![npm downloads](https://img.shields.io/npm/dm/xast-util-select.svg)](https://www.npmjs.com/package/xast-util-select)

Port of `(hast-util-select)[https://github.com/syntax-tree/hast-util-select]` for use with `xast` nodes.

## Contents

*   [xast-util-select](#xast-util-select)
    *   [Contents](#contents)
    *   [What is this?](#what-is-this)
        *   [Caveats](#caveats)
    *   [When should I use this?](#when-should-i-use-this)
    *   [Install](#install)
    *   [Use](#use)
    *   [API](#api)
    *   [Compatibility](#compatibility)
    *   [Related](#related)
    *   [Contribute](#contribute)
    *   [License](#license)

## What is this?

A tool which allows you to select items from `xast` trees using CSS-like queries.

This is a very naive port, so there's still a lot of HTML-specific logic included that could be removed to improve the size and efficiency of the program.

### Caveats

One thing to watch out for is that it's much more common to find `<namespace:tagname/>` style tags in XML. Make sure you escape the colon

```ts
const node = select('namespace\\:tagname', tree)
```

This is also something that could be improved in the future as pseudo-class selectors are not really necessary in generic XML, but I want to keep the API as similar to `hast-util-select` as possible for the time being.

## When should I use this?

You are doing something low level with `xast` trees.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add xast-util-select
# or with yarn
# yarn add xast-util-select
# or with npm
# npm install xast-util-select
```

## Use

## API

***

### `matches()`

#### Signature

```ts
matches(selector: string, node?: XastNode, space?: Space): boolean;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `node?` | `XastNode` |
| `space?` | `Space` |

#### Returns

`boolean`

Defined in:  [index.ts:6](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/xast/xast-util-select/src/index.ts#L6)

***

### `select()`

#### Signature

```ts
select(selector: string, node?: XastNode, space?: Space): Element | null;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `node?` | `XastNode` |
| `space?` | `Space` |

#### Returns

`Element` | `null`

Defined in:  [index.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/xast/xast-util-select/src/index.ts#L10)

***

### `selectAll()`

#### Signature

```ts
selectAll(selector: string, node?: XastNode, space?: Space): Element[];
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `node?` | `XastNode` |
| `space?` | `Space` |

#### Returns

`Element`[]

Defined in:  [index.ts:14](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/xast/xast-util-select/src/index.ts#L14)

## Compatibility

## Related

## Contribute

## License

[MIT](LICENSE) © Thomas F. K. Jorna

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

[reoff-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/reoff-parse

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
