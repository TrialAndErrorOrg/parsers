> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# reoff-remark

[![npm version](https://badge.fury.io/js/reoff-remark.svg)](https://badge.fury.io/js/reoff-remark) [![npm downloads](https://img.shields.io/npm/dm/reoff-remark.svg)](https://www.npmjs.com/package/reoff-remark)

Plugin for `reoff` that takes an `ooxast` tree and turns it into a `remark` tree, allowing for .docx to .tex conversion

## Contents

*   [reoff-remark](#reoff-remark)
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
pnpm add reoff-remark
# or with yarn
# yarn add reoff-remark
# or with npm
# npm install reoff-remark
```

## Use

## API

***

### `default()`

Plugin to bridge or mutate to remark

If a destination is given, runs the destination with the new mdast
tree (bridge-mode).
Without destination, returns the jast tree: further plugins run on that
tree (mutate-mode).

This is done so that you can use this plugin as either the plugin before the stringify plugin, or the plugin before another mutate plugin

#### Signature

```ts
default(this: Processor<void, Root, void, void>, ...settings: [Processor, Options?]): void | Transformer<Root, Root>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Processor`<`void`, `Root`, `void`, `void`> |
| `...settings` | [`Processor`, `Options?`] |

#### Returns

`void` | `Transformer`<`Root`, `Root`>

Defined in:  node\_modules/.pnpm/unified\@10.1.2/node\_modules/unified/index.d.ts:531

Plugin to bridge or mutate to remark

If a destination is given, runs the destination with the new mdast
tree (bridge-mode).
Without destination, returns the jast tree: further plugins run on that
tree (mutate-mode).

This is done so that you can use this plugin as either the plugin before the stringify plugin, or the plugin before another mutate plugin

#### Signature

```ts
default(this: Processor<void, Root, void, void>, ...settings: [Options?] | void[]): void | Transformer<Root, Root>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Processor`<`void`, `Root`, `void`, `void`> |
| `...settings` | [`Options?`] | `void`[] |

#### Returns

`void` | `Transformer`<`Root`, `Root`>

Defined in:  node\_modules/.pnpm/unified\@10.1.2/node\_modules/unified/index.d.ts:531

***

### `Options`

#### Properties

##### `bibliography?`

> `Data`[]

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:56](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L56)

##### `bold?`

> `"**"` | `"__"`

Should bold be rendered with `*` or `_`?

###### Default

'\*\*'

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L46)

##### `citationType?`

> `"endnote"` | `"native"` | `"mendeley"` | `"citavi"` | `"zotero"`

What type of citation is used?

###### Default

'zotero'

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:51](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L51)

##### `collectCitation?`

> `Function`

###### Type declaration

*Signature\`*

```ts
(citation: any, index: string | number): any;
```

*Parameters\`*

| Name | Type |
| :------ | :------ |
| `citation` | `any` |
| `index` | `string` | `number` |

*Returns\`*

`any`

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:53](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L53)

##### `document?`

> `boolean`

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L36)

##### `handlers?`

> `object`

Handlers for specific node types

###### Index signature

[`handle`: `string`]: `Handle`

###### Type declaration

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:35](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L35)

##### `italics?`

> `"*"` | `"_"`

Should italics be rendered with `*` or `_`?

###### Default

'\*'

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:42](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L42)

##### `newLines?`

> `boolean`

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L37)

##### `parseCitation?`

> `Function`

###### Type declaration

*Signature\`*

```ts
(citation: any): any;
```

*Parameters\`*

| Name | Type |
| :------ | :------ |
| `citation` | `any` |

*Returns\`*

`any`

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:52](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L52)

##### `quotes?`

> `string`[]

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L38)

##### `relations?`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:54](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L54)

##### `title?`

> `string`

Defined in:  [libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts:55](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L55)

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

[relatex-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/relatex-parse

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

[reoff-remark]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff-remark
