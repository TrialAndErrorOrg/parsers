> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-to-mdast

[![npm version](https://badge.fury.io/js/ooxast-util-to-mdast.svg)](https://badge.fury.io/js/ooxast-util-to-mdast) [![npm downloads](https://img.shields.io/npm/dm/ooxast-util-to-mdast.svg)](https://www.npmjs.com/package/ooxast-util-to-mdast)

Convert `ooxast` syntax tree to `mdast` syntax tree.

## Contents

- [ooxast-util-to-unified-latex](#ooxast-util-to-unified-latex)
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

This package is a utility that takes an [ooxast] (docx) syntax tree as input and turns it into a [mdast] (Markdown) syntax tree.

## When should I use this?

This project is useful if you are working with syntax trees and want to convert docx to Markdown.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add ooxast-util-to-mdast
# or with yarn
# yarn add ooxast-util-to-mdast
# or with npm
# npm install ooxast-util-to-mdast
```

## Use

## API

---

### `toMdast()`

#### Signature

```ts
toMdast(tree: Text | Root | Element, file: VFile, options?: Options): MdastNode;
```

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ | ------ | --------- |
| `tree`     | `Text`                          | `Root` | `Element` |
| `file`     | `VFile`                         |
| `options?` | [`Options`](modules.md#options) |

#### Returns

`MdastNode`

Defined in: [lib/ooxast-util-to-mdast.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/ooxast-util-to-mdast.ts#L28)

#### Signature

```ts
toMdast(tree: Text | Root | Element, options?: Options): MdastNode;
```

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ | ------ | --------- |
| `tree`     | `Text`                          | `Root` | `Element` |
| `options?` | [`Options`](modules.md#options) |

#### Returns

`MdastNode`

Defined in: [lib/ooxast-util-to-mdast.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/ooxast-util-to-mdast.ts#L29)

---

### `Options`

#### Properties

##### `bibliography?`

> `Data`[]

Defined in: [lib/types.ts:56](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L56)

##### `bold?`

> `"**"` | `"__"`

Should bold be rendered with `*` or `_`?

###### Default

'\*\*'

Defined in: [lib/types.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L46)

##### `citationType?`

> `"endnote"` | `"native"` | `"mendeley"` | `"citavi"` | `"zotero"`

What type of citation is used?

###### Default

'zotero'

Defined in: [lib/types.ts:51](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L51)

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

Defined in: [lib/types.ts:53](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L53)

##### `document?`

> `boolean`

Defined in: [lib/types.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L36)

##### `handlers?`

> `object`

Handlers for specific node types

###### Index signature

[`handle`: `string`]: [`Handle`](modules.md#handle)

###### Type declaration

Defined in: [lib/types.ts:35](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L35)

##### `italics?`

> `"*"` | `"_"`

Should italics be rendered with `*` or `_`?

###### Default

'\*'

Defined in: [lib/types.ts:42](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L42)

##### `newLines?`

> `boolean`

Defined in: [lib/types.ts:37](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L37)

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

Defined in: [lib/types.ts:52](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L52)

##### `quotes?`

> `string`[]

Defined in: [lib/types.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L38)

##### `relations?`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in: [lib/types.ts:54](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L54)

##### `title?`

> `string`

Defined in: [lib/types.ts:55](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L55)

---

### `State`

#### Properties

##### `all`

> `All`

Defined in: [lib/state.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L22)

##### `baseFound`

> `boolean`

Defined in: [lib/state.ts:51](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L51)

##### `bibliography`

> `Data`[]

Defined in: [lib/state.ts:83](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L83)

##### `citationNumber`

> `number`

Defined in: [lib/state.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L59)

##### `citations`

> `object`

A bibliography you can add manually

Needs to be in CSL format, which will be converted to BibTeX, or in BibTeX format

###### Index signature

[`key`: `string` | `number`]: `CSL`

###### Type declaration

Defined in: [lib/state.ts:81](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L81)

##### `citeKeys`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in: [lib/state.ts:67](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L67)

##### `collectCitation`

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

Defined in: [lib/state.ts:61](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L61)

##### `deleteNextRun`

> `boolean`

Whether to delete the next w:r element
Mostly used for citations, where sometimes the next w:r element is the citation in plain text again

Defined in: [lib/state.ts:66](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L66)

##### `elementById`

> `Map`<`string`, `Element`>

Defined in: [lib/state.ts:45](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L45)

##### `endnotes`

> `Record`<`string`, `MdastNode`[]>

Defined in: [lib/state.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L71)

##### `footnotes`

> `Record`<`string`, `MdastNode`[]>

Defined in: [lib/state.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L70)

##### `frozenBaseUrl`

> `undefined` | `string`

Defined in: [lib/state.ts:53](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L53)

##### `handlers`

> `Record`<`string`, [`Handle`](modules.md#handle)>

Defined in: [lib/state.ts:47](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L47)

##### `inDisplayMath`

> `boolean`

Defined in: [lib/state.ts:68](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L68)

##### `inMath`

> `boolean`

Defined in: [lib/state.ts:69](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L69)

##### `inTable`

> `boolean`

Defined in: [lib/state.ts:55](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L55)

##### `listNumbering?`

> `ListNumbering`

Defined in: [lib/state.ts:84](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L84)

##### `one`

> `One`

Defined in: [lib/state.ts:20](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L20)

##### `options`

> [`Options`](modules.md#options)

Defined in: [lib/state.ts:43](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L43)

##### `parseCitation`

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

Defined in: [lib/state.ts:60](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L60)

##### `partialCitation`

> `string`

Defined in: [lib/state.ts:62](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L62)

##### `patch`

> `Patch`

Defined in: [lib/state.ts:18](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L18)

##### `qNesting`

> `number`

Defined in: [lib/state.ts:57](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L57)

##### `relations`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in: [lib/state.ts:82](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L82)

##### `resolve`

> `Resolve`

Defined in: [lib/state.ts:41](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L41)

##### `simpleParagraph`

> `boolean`

This makes it so that a paragraph is processed with `all` instead of more custom.
Useful for e.g. footnotes or tables

Defined in: [lib/state.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L75)

##### `toFlow`

> `ToFlow`

Defined in: [lib/state.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L24)

##### `toSpecificContent`

> `Function`

###### Type declaration

_Signature\`_

```ts
<ChildType, ParentType>(nodes: Content[], build: Function): ParentType[];
```

_Type parameters\`_

- `ChildType` _extends_ `MdastNode`
- `ParentType` _extends_ `Object`

_Parameters\`_

| Name    | Type               |
| :------ | :----------------- |
| `nodes` | `Content`[]        |
| `build` | () => `ParentType` |

_Returns\`_

`ParentType`[]

Defined in: [lib/state.ts:33](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/state.ts#L33)

---

### `Handle`

> `Function`

#### Type declaration

##### `Signature`

```ts
(state: State, node: any, parent?: Parent): MdastNode | MdastNode[] | void | undefined;
```

##### `Parameters`

| Name      | Type                        |
| :-------- | :-------------------------- |
| `state`   | [`State`](modules.md#state) |
| `node`    | `any`                       |
| `parent?` | `Parent`                    |

##### `Returns`

`MdastNode` | `MdastNode`[] | `void` | `undefined`

Defined in: [lib/types.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-to-mdast/src/lib/types.ts#L59)

# jote

---

### `all()`

Convert all nodes in tree using j

#### Signature

```ts
state.all(: State, parent: Parent<Node<Data>, Data> | Node): MdastNode[];
```

#### Parameters

| Name     | Type                             | Description                 |     |
| :------- | :------------------------------- | :-------------------------- | --- |
| `h`      | [`H`](modules.md#h)              | ooxast constructor function |     |
| `parent` | `Parent`<`Node`<`Data`>, `Data`> | `Node`                      |     |

#### Returns

[`MdastNode`](modules.md#mdastnode)[]

Defined in: [src/lib/all.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/all.ts#L10)

---

### `one()`

#### Signature

```ts
state.one(: State, node: Node, parent?: Parent<Node<Data>, Data>): MdastNode | MdastNode[] | void;
```

#### Parameters

| Name      | Type                             |
| :-------- | :------------------------------- |
| `h`       | [`H`](modules.md#h)              |
| `node`    | `Node`                           |
| `parent?` | `Parent`<`Node`<`Data`>, `Data`> |

#### Returns

[`MdastNode`](modules.md#mdastnode) | [`MdastNode`](modules.md#mdastnode)[] | `void`

Defined in: [src/lib/one.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/one.ts#L8)

---

### `toMdast()`

#### Signature

```ts
toMdast(tree: Element | Text | Root, options: Options): Root;
```

#### Parameters

| Name      | Type                            |        |        |
| :-------- | :------------------------------ | ------ | ------ |
| `tree`    | `Element`                       | `Text` | `Root` |
| `options` | [`Options`](modules.md#options) |        |        |

#### Returns

`Root`

Defined in: [src/lib/ooxast-util-to-unified-latex.ts:45](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/ooxast-util-to-unified-latex.ts#L45)

---

### `defaultHandlers`

> **`Const`** `Context`[`"handlers"`]

Defined in: [src/lib/handlers/index.ts:20](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/handlers/index.ts#L20)

---

### `Options`

#### Properties

##### `bibliography?`

> `string` | `Data`[]

A bibliography you can add manually

Needs to be in CSL format, which will be converted to BibTeX, or in BibTeX format

Defined in: [src/lib/types.ts:147](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L147)

##### `bibname?`

> `string`

Name of the bibliography file

###### Default

'bibliography.bib'

Defined in: [src/lib/types.ts:48](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L48)

##### `citationType?`

> `"endnote"` | `"mendeley"` | `"word"` | `"citavi"` | `"zotero"`

What type of citation is used?

###### Default

'zotero'

Defined in: [src/lib/types.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L71)

##### `collectCitation?`

> `Function`

###### Type declaration

_Signature\`_

```ts
(citation: any, index: string | number): any;
```

_Parameters\`_

| Name       | Type     |          |
| :--------- | :------- | -------- |
| `citation` | `any`    |          |
| `index`    | `string` | `number` |

_Returns\`_

`any`

Defined in: [src/lib/types.ts:73](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L73)

##### `columnSeparator?`

> `boolean`

Should a column separator be added to tables?
i.e. should `|` be added to the beginning and end of each row?

###### Default

false

Defined in: [src/lib/types.ts:53](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L53)

##### `defaultCol?`

> `string`

What column should be used as the default column?

e.g `l` for left, `r` for right, `c` for center

###### Default

'l'

Defined in: [src/lib/types.ts:128](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L128)

##### `displayMath?`

> `"align"` | `"equation"` | `"equation*"` | `"align*"` | `"$$"` | `"[]"`

What type of display math should be used?

-`$$`: `$$ ... $$`

-`[]`: `[ ... \]`

-`equation` | `equation*` | `align` | `align*`: `\begin{...} ... \end{...}`

###### Default

'equation'

Defined in: [src/lib/types.ts:87](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L87)

##### `document?`

> `boolean`

Defined in: [src/lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L28)

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

Defined in: [src/lib/types.ts:57](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L57)

##### `handlers?`

> `object`

Handlers for specific node types

###### Index signature

[`handle`: `string`]: [`Handle`]\(modules.md#handle\)

###### Type declaration

Defined in: [src/lib/types.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L27)

##### `inlineMath?`

> `"$"` | `"()"`

What type of inline math should be used? -`$`: `$ ... $` -`()` : `\(...\)`

###### Default

'$'

Defined in: [src/lib/types.ts:103](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L103)

##### `italics?`

> `"emph"` | `"textit"`

Should italics be rendered as \textit or \emph?

###### Default

'emph'

Defined in: [src/lib/types.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L44)

##### `newLines?`

> `boolean`

Defined in: [src/lib/types.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L29)

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

Defined in: [src/lib/types.ts:159](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L159)

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

Defined in: [src/lib/types.ts:72](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L72)

##### `preamble?`

> `string` | [`MdastNode`](modules.md#mdastnode)[]

A list of commands and other stuff to add to the preamble

You are responsible for making sure that the commands are valid LaTeX
and that they can be used in the preamble.

You need to directly use the unified-latex types here,
or you can just put it in raw

###### Default

'\title{<whatever title it can find>}'

###### Example

```ts
import { m, args } from '@unified-latex/unified-latex-types'

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

Defined in: [src/lib/types.ts:193](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L193)

##### `quotes?`

> `string`[]

Defined in: [src/lib/types.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L30)

##### `relations?`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in: [src/lib/types.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L75)

##### `strikethrough?`

> `"st"` | `"sout"` | `"s"`

Defined in: [src/lib/types.ts:104](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L104)

##### `tabularx?`

> `boolean` | {
> `width`?: `string`;
> }

Should tabularx be used instead of tabular?

###### Default

false

Defined in: [src/lib/types.ts:133](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L133)

##### `title?`

> `string`

The title of the document

If this is not set, the title will be taken from the heading with the "Title" style.

###### Default

undefined

Defined in: [src/lib/types.ts:120](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L120)

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

Defined in: [src/lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L40)

##### `xcolor?`

> `boolean`

Are you using xcolor?

Disabling this will remove the `xcolor` package from the preamble
and remove color related commands from the output.

###### Default

true

Defined in: [src/lib/types.ts:112](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L112)

---

### `H`

> `HWithProps` & `HWithoutProps` & `Context`

Defined in: [src/lib/types.ts:292](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L292)

---

### `Handle`

> `Function`

#### Type declaration

##### `Signature`

```ts
(state: State, node: any, parent?: Parent): MdastNode | MdastNode[] | void | undefined;
```

##### `Parameters`

| Name      | Type                |
| :-------- | :------------------ |
| `h`       | [`H`](modules.md#h) |
| `node`    | `any`               |
| `parent?` | `Parent`            |

##### `Returns`

[`MdastNode`](modules.md#mdastnode) | [`MdastNode`](modules.md#mdastnode)[] | `void` | `undefined`

Defined in: [src/lib/types.ts:196](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L196)

---

### `MdastNode`

> `Root` | `String` | `Whitespace` | `Parbreak` | `Comment` | `Macro` | `Environment` | `VerbatimEnvironment` | `InlineMath` | `DisplayMath` | `Group` | `Verb`

Defined in: node_modules/.pnpm/@unified-latex+unified-latex-types\@1.3.0/node_modules/@unified-latex/unified-latex-types/libs/ast-types.d.ts:83

## Support

- [x] Paragraphs
- [x] Headings
- [x] Blockquotes
- [x] Lists
  - [x] Ordered and unordered
  - [x] Starting at a number other than 1
  - [ ] Using a different bullet/number character (would require heavy HTML)
- [ ] Math (with [remark-math])
  - [x] LaTeX (you need to convert all the math in the Word Document to `linear` for this to work properly)
  - [ ] OMML
- [ ] Citations (with [remark-cite])
- [x] Tables (with [remark-gfm])
- [x] Images
- [x] Footnotes
- [x] Endnotes
- [ ] Links
  - [x] External hyperlinks
  - [ ] Crossreferences
- [ ] Formatting
  - [x] Strikethrough (with [remark-gfm])
  - [x] Emphasis
  - [x] Strong
  - [x] Superscript
  - [x] Subscript
  - [ ] Underline
  - [ ] Highlight
  - [ ] Color

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
[mdast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/mdast
[unified-latex-util-to-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/unified-latex-util-to-texast
[mdastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/mdastscript
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
[ooxast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ooxast/ooxast-util-to-unified-latex
[ooxast-util-to-unified-latex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ooxast-util-to-unified-latex
[unified-latex]: https://github.com/siefken/unified-latex
