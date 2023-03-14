> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# reoff-remark

[![npm version](https://badge.fury.io/js/reoff-remark.svg)](https://badge.fury.io/js/reoff-remark) [![npm downloads](https://img.shields.io/npm/dm/reoff-remark.svg)](https://www.npmjs.com/package/reoff-remark)

Plugin for `reoff` that takes an `ooxast` tree and turns it into a `remark` tree, allowing for .docx to .tex conversion

## Contents

- [reoff-remark](#reoff-remark)
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
pnpm add reoff-remark
# or with yarn
# yarn add reoff-remark
# or with npm
# npm install reoff-remark
```

## Use

## API

---

### `default()`

Plugin to bridge or mutate to remark

If a destination is given, runs the destination with the new jast
tree (bridge-mode).
Without destination, returns the jast tree: further plugins run on that
tree (mutate-mode).

This is done so that you can use this plugin as either the plugin before the stringify plugin, or the plugin before another mutate plugin

#### Signature

```ts
default(this: Processor<void, Root, void, void>, ...settings: [Processor, Options?]): void | Transformer<Root, Root>;
```

#### Parameters

| Name          | Type                                        |
| :------------ | :------------------------------------------ |
| `this`        | `Processor`<`void`, `Root`, `void`, `void`> |
| `...settings` | [`Processor`, `Options?`]                   |

#### Returns

`void` | `Transformer`<`Root`, `Root`>

Defined in: node_modules/.pnpm/unified\@10.1.2/node_modules/unified/index.d.ts:531

Plugin to bridge or mutate to remark

If a destination is given, runs the destination with the new jast
tree (bridge-mode).
Without destination, returns the jast tree: further plugins run on that
tree (mutate-mode).

This is done so that you can use this plugin as either the plugin before the stringify plugin, or the plugin before another mutate plugin

#### Signature

```ts
default(this: Processor<void, Root, void, void>, ...settings: [Options?] | void[]): void | Transformer<Root, Root>;
```

#### Parameters

| Name          | Type                                        |
| :------------ | :------------------------------------------ | -------- |
| `this`        | `Processor`<`void`, `Root`, `void`, `void`> |
| `...settings` | [`Options?`]                                | `void`[] |

#### Returns

`void` | `Transformer`<`Root`, `Root`>

Defined in: node_modules/.pnpm/unified\@10.1.2/node_modules/unified/index.d.ts:531

---

### `Options`

#### Properties

##### `bibliography?`

> `string` | `Data`[]

A bibliography you can add manually

Needs to be in CSL format, which will be converted to BibTeX, or in BibTeX format

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:145](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L145)

##### `bibname?`

> `string`

Name of the bibliography file

###### Default

'bibliography.bib'

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L46)

##### `citationType?`

> `"endnote"` | `"mendeley"` | `"word"` | `"citavi"` | `"zotero"`

What type of citation is used?

###### Default

'zotero'

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:69](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L69)

##### `collectCitation?`

> `Function`

###### Type declaration

_Signature\`_

```ts
(citation: any, index: string | number): any;
```

_Parameters\`_

| Name       | Type     |
| :--------- | :------- | -------- |
| `citation` | `any`    |
| `index`    | `string` | `number` |

_Returns\`_

`any`

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L71)

##### `columnSeparator?`

> `boolean`

Should a column separator be added to tables?
i.e. should `|` be added to the beginning and end of each row?

###### Default

false

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:51](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L51)

##### `defaultCol?`

> `string`

What column should be used as the default column?

e.g `l` for left, `r` for right, `c` for center

###### Default

'l'

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:126](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L126)

##### `displayMath?`

> `"align"` | `"equation"` | `"equation*"` | `"align*"` | `"$$"` | `"[]"`

What type of display math should be used?

-`$$`: `$$ ... $$`

-`[]`: `[ ... \]`

-`equation` | `equation*` | `align` | `align*`: `\begin{...} ... \end{...}`

###### Default

'equation'

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:85](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L85)

##### `document?`

> `boolean`

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:26](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L26)

##### `documentClass?`

> `object`

```ts
{
    name: string;
    options?: string[];
}
```

Options for the document class

###### Default

###### Type declaration

| Member     | Type       | Description                                        |
| :--------- | :--------- | :------------------------------------------------- |
| `name`     | `string`   | Name of the document class `Default` 'article'     |
| `options`? | `string`[] | Options for the document class `Default` undefined |

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:55](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L55)

##### `handlers?`

> `object`

Handlers for specific node types

###### Index signature

[`handle`: `string`]: `Handle`

###### Type declaration

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:25](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L25)

##### `inlineMath?`

> `"$"` | `"()"`

What type of inline math should be used? -`$`: `$ ... $` -`()` : `\(...\)`

###### Default

'$'

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:101](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L101)

##### `italics?`

> `"emph"` | `"textit"`

Should italics be rendered as \textit or \emph?

###### Default

'emph'

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:42](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L42)

##### `newLines?`

> `boolean`

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L27)

##### `packages?`

> (`string` | {
> `name`: `string`;
> `options`: `string`[];
> })[]

A list of packages to add to the preamble

by default, the following packages are added:

- `xcolor` (if `xcolor` is enabled)
- `hyperref`
- `graphicx`
- `caption`
- `tabularx` (if `tabularx` is enabled)

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:157](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L157)

##### `parseCitation?`

> `Function`

###### Type declaration

_Signature\`_

```ts
(citation: any): any;
```

_Parameters\`_

| Name       | Type  |
| :--------- | :---- |
| `citation` | `any` |

_Returns\`_

`any`

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L70)

##### `preamble?`

> `string` | `Node`[]

A list of commands and other stuff to add to the preamble

You are responsible for making sure that the commands are valid LaTeX
and that they can be used in the preamble.

You need to directly use the remark types here,
or you can just put it in raw

###### Default

'\title{<whatever title it can find>}'

###### Example

```ts
import { m, args } from '@remark/remark-types'

const options = {
  preamble: [
    // \author{Leeroy Jenkins}
    m('author', 'Leeroy Jenkins'),
    // \title{The Adventures of Leeroy Jenkins}
    m('title', 'The Adventures of Leeroy Jenkins'),
    // \somemacrowithoptions[optional1][optional2]{firstArg}{secondArg}
    m(
      'somemacrowithoptions',
      args(['optional1', 'optional2', 'firstArg', 'secondArg'], { braces: '[][]{}{}' }),
    ),
  ],
}
```

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:191](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L191)

##### `quotes?`

> `string`[]

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L28)

##### `relations?`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:73](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L73)

##### `strikethrough?`

> `"st"` | `"sout"` | `"s"`

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:102](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L102)

##### `tabularx?`

> `boolean` | {
> `width`?: `string`;
> }

Should tabularx be used instead of tabular?

###### Default

false

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:131](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L131)

##### `title?`

> `string`

The title of the document

If this is not set, the title will be taken from the heading with the "Title" style.

###### Default

undefined

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:118](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L118)

##### `topSection?`

> `number`

What the top section should be
-1 = part
0 = chapter
1 = section
2 = subsection
3 = subsubsection
4 = paragraph
5 = subparagraph

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L38)

##### `xcolor?`

> `boolean`

Are you using xcolor?

Disabling this will remove the `xcolor` package from the preamble
and remove color related commands from the output.

###### Default

true

Defined in: [libs/ooxast/ooxast-util-to-remark/src/lib/types.ts:110](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-remark/src/lib/types.ts#L110)

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
