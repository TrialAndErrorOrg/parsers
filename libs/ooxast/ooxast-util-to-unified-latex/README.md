> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-to-unified-latex

Convert `ooxast` syntax tree to `unified-latex` syntax tree.

## Contents

*   [ooxast-util-to-unified-latex](#ooxast-util-to-unified-latex)
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

This package is a utility that takes an [ooxast] (docx) syntax tree as input and turns it into a [unified-latex] (LaTeX) syntax tree.

## When should I use this?

This project is useful when you want to deal with ASTs and turn OOXML into LaTeX.

The reoff plugin [reoff-unified-latex] wraps this utility to also turn markdown to HTML at a higher-level (easier) abstraction.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add ooxast-util-to-unified-latex
# or with yarn
# yarn add ooxast-util-to-unified-latex
# or with npm
# npm install ooxast-util-to-unified-latex
```

## Use

## API

***

### `toUnifiedLatex()`

#### Signature

```ts
toUnifiedLatex(tree: Element | Text | Root, file: VFile, options?: Options): UnifiedLatexRoot;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | `Element` | `Text` | `Root` |
| `file` | `VFile` |
| `options?` | [`Options`](modules.md#options) |

#### Returns

`UnifiedLatexRoot`

Defined in:  [src/lib/ooxast-util-to-unified-latex.ts:54](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/ooxast-util-to-unified-latex.ts#L54)

#### Signature

```ts
toUnifiedLatex(tree: Element | Text | Root, options?: Options): UnifiedLatexRoot;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | `Element` | `Text` | `Root` |
| `options?` | [`Options`](modules.md#options) |

#### Returns

`UnifiedLatexRoot`

Defined in:  [src/lib/ooxast-util-to-unified-latex.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/ooxast-util-to-unified-latex.ts#L59)

***

### `Options`

#### Properties

##### `bibliography?`

> `string` | `Data`[]

A bibliography you can add manually

Needs to be in CSL format, which will be converted to BibTeX, or in BibTeX format

Defined in:  [src/lib/types.ts:146](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L146)

##### `bibname?`

> `string`

Name of the bibliography file

###### Default

'bibliography.bib'

Defined in:  [src/lib/types.ts:47](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L47)

##### `citationType?`

> `"endnote"` | `"mendeley"` | `"word"` | `"citavi"` | `"zotero"`

What type of citation is used?

###### Default

'zotero'

Defined in:  [src/lib/types.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L70)

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

Defined in:  [src/lib/types.ts:72](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L72)

##### `columnSeparator?`

> `boolean`

Should a column separator be added to tables?
i.e. should `|` be added to the beginning and end of each row?

###### Default

false

Defined in:  [src/lib/types.ts:52](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L52)

##### `defaultCol?`

> `string`

What column should be used as the default column?

e.g `l` for left, `r` for right, `c` for center

###### Default

'l'

Defined in:  [src/lib/types.ts:127](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L127)

##### `displayMath?`

> `"align"` | `"equation"` | `"equation*"` | `"align*"` | `"$$"` | `"[]"`

What type of display math should be used?

-`$$`: `$$ ... $$`

-`[]`: `[ ... \]`

-`equation` | `equation*` | `align` | `align*`: `\begin{...} ... \end{...}`

###### Default

'equation'

Defined in:  [src/lib/types.ts:86](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L86)

##### `document?`

> `boolean`

Defined in:  [src/lib/types.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L27)

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

| Member | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the document class  `Default`  'article' |
| `options`? | `string`[] | Options for the document class  `Default`  undefined |

Defined in:  [src/lib/types.ts:56](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L56)

##### `handlers?`

> `object`

Handlers for specific node types

###### Index signature

[`handle`: `string`]: [`Handle`](modules.md#handle)

###### Type declaration

Defined in:  [src/lib/types.ts:26](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L26)

##### `inlineMath?`

> `"$"` | `"()"`

What type of inline math should be used?
-`$`: `$ ... $`
-`()` : `\(...\)`

###### Default

'$'

Defined in:  [src/lib/types.ts:102](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L102)

##### `italics?`

> `"emph"` | `"textit"`

Should italics be rendered as \textit or \emph?

###### Default

'emph'

Defined in:  [src/lib/types.ts:43](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L43)

##### `newLines?`

> `boolean`

Defined in:  [src/lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L28)

##### `packages?`

> (`string` | {
> `name`: `string`;
> `options`: `string`[];
> })[]

A list of packages to add to the preamble

by default, the following packages are added:

*   `xcolor` (if `xcolor` is enabled)
*   `hyperref`
*   `graphicx`
*   `caption`
*   `tabularx` (if `tabularx` is enabled)

Defined in:  [src/lib/types.ts:158](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L158)

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

Defined in:  [src/lib/types.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L71)

##### `preamble?`

> `string` | [`UnifiedLatexNode`](modules.md#unifiedlatexnode)[]

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
     args(
        ['optional1', 'optional2', 'firstArg', 'secondArg'],
       { braces: '[][]{}{}'}
      )
   ),
  ]
}
```

Defined in:  [src/lib/types.ts:192](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L192)

##### `quotes?`

> `string`[]

Defined in:  [src/lib/types.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L29)

##### `relations?`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in:  [src/lib/types.ts:74](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L74)

##### `strikethrough?`

> `"st"` | `"sout"` | `"s"`

Defined in:  [src/lib/types.ts:103](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L103)

##### `tabularx?`

> `boolean` | {
> `width`?: `string`;
> }

Should tabularx be used instead of tabular?

###### Default

false

Defined in:  [src/lib/types.ts:132](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L132)

##### `title?`

> `string`

The title of the document

If this is not set, the title will be taken from the heading with the "Title" style.

###### Default

undefined

Defined in:  [src/lib/types.ts:119](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L119)

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

Defined in:  [src/lib/types.ts:39](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L39)

##### `xcolor?`

> `boolean`

Are you using xcolor?

Disabling this will remove the `xcolor` package from the preamble
and remove color related commands from the output.

###### Default

true

Defined in:  [src/lib/types.ts:111](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L111)

***

### `H`

> `HWithProps` & `HWithoutProps` & `Context`

Defined in:  [src/lib/types.ts:291](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L291)

***

### `Handle`

> `Function`

#### Type declaration

##### `Signature`

```ts
(h: H, node: any, parent?: Parent): UnifiedLatexNode | UnifiedLatexNode[] | void | undefined;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `h` | [`H`](modules.md#h) |
| `node` | `any` |
| `parent?` | `Parent` |

##### `Returns`

[`UnifiedLatexNode`](modules.md#unifiedlatexnode) | [`UnifiedLatexNode`](modules.md#unifiedlatexnode)[] | `void` | `undefined`

Defined in:  [src/lib/types.ts:195](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L195)

***

### `UnifiedLatexNode`

> `Root` | `String` | `Whitespace` | `Parbreak` | `Comment` | `Macro` | `Environment` | `VerbatimEnvironment` | `InlineMath` | `DisplayMath` | `Group` | `Verb`

Defined in:  node\_modules/.pnpm/@unified-latex+unified-latex-types\@1.3.0/node\_modules/@unified-latex/unified-latex-types/libs/ast-types.d.ts:83

# jote

***

### `all()`

Convert all nodes in tree using j

#### Signature

```ts
all(h: H, parent: Parent<Node<Data>, Data> | Node): UnifiedLatexNode[];
```

#### Parameters

| Name     | Type                             | Description                 |   |
| :------- | :------------------------------- | :-------------------------- | - |
| `h`      | [`H`](modules.md#h)              | ooxast constructor function |   |
| `parent` | `Parent`<`Node`<`Data`>, `Data`> | `Node`                      |   |

#### Returns

[`UnifiedLatexNode`](modules.md#unifiedlatexnode)[]

Defined in:  [src/lib/all.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/all.ts#L10)

***

### `one()`

#### Signature

```ts
one(h: H, node: Node, parent?: Parent<Node<Data>, Data>): UnifiedLatexNode | UnifiedLatexNode[] | void;
```

#### Parameters

| Name      | Type                             |
| :-------- | :------------------------------- |
| `h`       | [`H`](modules.md#h)              |
| `node`    | `Node`                           |
| `parent?` | `Parent`<`Node`<`Data`>, `Data`> |

#### Returns

[`UnifiedLatexNode`](modules.md#unifiedlatexnode) | [`UnifiedLatexNode`](modules.md#unifiedlatexnode)[] | `void`

Defined in:  [src/lib/one.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/one.ts#L8)

***

### `toUnifiedLatex()`

#### Signature

```ts
toUnifiedLatex(tree: Element | Text | Root, options: Options): Root;
```

#### Parameters

| Name      | Type                            |        |        |
| :-------- | :------------------------------ | ------ | ------ |
| `tree`    | `Element`                       | `Text` | `Root` |
| `options` | [`Options`](modules.md#options) |        |        |

#### Returns

`Root`

Defined in:  [src/lib/ooxast-util-to-unified-latex.ts:45](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/ooxast-util-to-unified-latex.ts#L45)

***

### `defaultHandlers`

> **`Const`** `Context`[`"handlers"`]

Defined in:  [src/lib/handlers/index.ts:20](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/handlers/index.ts#L20)

***

### `Options`

#### Properties

##### `bibliography?`

> `string` | `Data`[]

A bibliography you can add manually

Needs to be in CSL format, which will be converted to BibTeX, or in BibTeX format

Defined in:  [src/lib/types.ts:147](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L147)

##### `bibname?`

> `string`

Name of the bibliography file

###### Default

'bibliography.bib'

Defined in:  [src/lib/types.ts:48](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L48)

##### `citationType?`

> `"endnote"` | `"mendeley"` | `"word"` | `"citavi"` | `"zotero"`

What type of citation is used?

###### Default

'zotero'

Defined in:  [src/lib/types.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L71)

##### `collectCitation?`

> `Function`

###### Type declaration

*Signature\`*

```ts
(citation: any, index: string | number): any;
```

*Parameters\`*

| Name       | Type     |          |
| :--------- | :------- | -------- |
| `citation` | `any`    |          |
| `index`    | `string` | `number` |

*Returns\`*

`any`

Defined in:  [src/lib/types.ts:73](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L73)

##### `columnSeparator?`

> `boolean`

Should a column separator be added to tables?
i.e. should `|` be added to the beginning and end of each row?

###### Default

false

Defined in:  [src/lib/types.ts:53](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L53)

##### `defaultCol?`

> `string`

What column should be used as the default column?

e.g `l` for left, `r` for right, `c` for center

###### Default

'l'

Defined in:  [src/lib/types.ts:128](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L128)

##### `displayMath?`

> `"align"` | `"equation"` | `"equation*"` | `"align*"` | `"$$"` | `"[]"`

What type of display math should be used?

-`$$`: `$$ ... $$`

-`[]`: `[ ... \]`

-`equation` | `equation*` | `align` | `align*`: `\begin{...} ... \end{...}`

###### Default

'equation'

Defined in:  [src/lib/types.ts:87](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L87)

##### `document?`

> `boolean`

Defined in:  [src/lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L28)

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

| Member     | Type        | Description                                          |
| :--------- | :---------- | :--------------------------------------------------- |
| `name`     | `string`    | Name of the document class  `Default`  'article'     |
| `options`? | `string`[] | Options for the document class  `Default`  undefined |

Defined in:  [src/lib/types.ts:57](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L57)

##### `handlers?`

> `object`

Handlers for specific node types

###### Index signature

[`handle`: `string`]: [`Handle`]\(modules.md#handle\)

###### Type declaration

Defined in:  [src/lib/types.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L27)

##### `inlineMath?`

> `"$"` | `"()"`

What type of inline math should be used?
-`$`: `$ ... $`
-`()` : `\(...\)`

###### Default

'$'

Defined in:  [src/lib/types.ts:103](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L103)

##### `italics?`

> `"emph"` | `"textit"`

Should italics be rendered as \textit or \emph?

###### Default

'emph'

Defined in:  [src/lib/types.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L44)

##### `newLines?`

> `boolean`

Defined in:  [src/lib/types.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L29)

##### `packages?`

> (`string` | {
> `name`: `string`;
> `options`: `string`[];
> })[]

A list of packages to add to the preamble

by default, the following packages are added:

*   `xcolor` (if `xcolor` is enabled)
*   `hyperref`
*   `graphicx`
*   `caption`
*   `tabularx` (if `tabularx` is enabled)

Defined in:  [src/lib/types.ts:159](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L159)

##### `parseCitation?`

> `Function`

###### Type declaration

*Signature\`*

```ts
(citation: any): any;
```

*Parameters\`*

| Name       | Type  |
| :--------- | :---- |
| `citation` | `any` |

*Returns\`*

`any`

Defined in:  [src/lib/types.ts:72](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L72)

##### `preamble?`

> `string` | [`UnifiedLatexNode`](modules.md#unifiedlatexnode)[]

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
     args(
        ['optional1', 'optional2', 'firstArg', 'secondArg'],
       { braces: '[][]{}{}'}
      )
   ),
  ]
}
```

Defined in:  [src/lib/types.ts:193](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L193)

##### `quotes?`

> `string`[]

Defined in:  [src/lib/types.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L30)

##### `relations?`

> `object`

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Defined in:  [src/lib/types.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L75)

##### `strikethrough?`

> `"st"` | `"sout"` | `"s"`

Defined in:  [src/lib/types.ts:104](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L104)

##### `tabularx?`

> `boolean` | {
> `width`?: `string`;
> }

Should tabularx be used instead of tabular?

###### Default

false

Defined in:  [src/lib/types.ts:133](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L133)

##### `title?`

> `string`

The title of the document

If this is not set, the title will be taken from the heading with the "Title" style.

###### Default

undefined

Defined in:  [src/lib/types.ts:120](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L120)

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

Defined in:  [src/lib/types.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L40)

##### `xcolor?`

> `boolean`

Are you using xcolor?

Disabling this will remove the `xcolor` package from the preamble
and remove color related commands from the output.

###### Default

true

Defined in:  [src/lib/types.ts:112](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L112)

***

### `H`

> `HWithProps` & `HWithoutProps` & `Context`

Defined in:  [src/lib/types.ts:292](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L292)

***

### `Handle`

> `Function`

#### Type declaration

##### `Signature`

```ts
(h: H, node: any, parent?: Parent): UnifiedLatexNode | UnifiedLatexNode[] | void | undefined;
```

##### `Parameters`

| Name      | Type                |
| :-------- | :------------------ |
| `h`       | [`H`](modules.md#h) |
| `node`    | `any`               |
| `parent?` | `Parent`            |

##### `Returns`

[`UnifiedLatexNode`](modules.md#unifiedlatexnode) | [`UnifiedLatexNode`](modules.md#unifiedlatexnode)[] | `void` | `undefined`

Defined in:  [src/lib/types.ts:196](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/ooxast/ooxast-util-to-unified-latex/src/lib/types.ts#L196)

***

### `UnifiedLatexNode`

> `Root` | `String` | `Whitespace` | `Parbreak` | `Comment` | `Macro` | `Environment` | `VerbatimEnvironment` | `InlineMath` | `DisplayMath` | `Group` | `Verb`

Defined in:  node\_modules/.pnpm/@unified-latex+unified-latex-types\@1.3.0/node\_modules/@unified-latex/unified-latex-types/libs/ast-types.d.ts:83

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

[unifiedlatex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/unifiedLatex

[unified-latex-util-to-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/unified-latex-util-to-texast

[unifiedlatexscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/unifiedLatexscript

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
