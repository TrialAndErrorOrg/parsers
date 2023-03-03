> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# texast-util-to-latex

Convert a `texast` syntax tree to LaTeX.

## Contents

*   [texast-util-to-latex](#texast-util-to-latex)
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
pnpm add texast-util-to-latex
# or with yarn
# yarn add texast-util-to-latex
# or with npm
# npm install texast-util-to-latex
```

## Use

## API

***

### `default()`

#### Signature

```ts
default(node: Node, options: Options = {}): string;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node) |
| `options` | [`Options`](modules.md#options) |

#### Returns

`string`

Defined in:  [lib/texast-util-to-latex.ts:41](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/texast-util-to-latex.ts#L41)

***

### `toLatex()`

#### Signature

```ts
toLatex(node: Node | Node[], options: Options = {}): string;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node) | [`Node`](modules.md#node)[] |
| `options` | [`Options`](modules.md#options) |

#### Returns

`string`

Defined in:  [lib/texast-util-to-latex.ts:34](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/texast-util-to-latex.ts#L34)

***

### `Context`

#### Properties

##### `align`

> `boolean`

Defined in:  [lib/types.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L30)

##### `enter`

> [`Enter`](modules.md#enter)

Defined in:  [lib/types.ts:23](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L23)

##### `handle`

> [`Handle`](modules.md#handle)

Defined in:  [lib/types.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L27)

##### `handlers`

> [`Handlers`](modules.md#handlers)

Defined in:  [lib/types.ts:28](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L28)

##### `indexStack`

> `number`[]

Defined in:  [lib/types.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L22)

##### `join`

> [`Join`](modules.md#join)[]

Defined in:  [lib/types.ts:26](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L26)

##### `math`

> `boolean`

Defined in:  [lib/types.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L29)

##### `options`

> [`Options`](modules.md#options)

Defined in:  [lib/types.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L24)

##### `stack`

> `string`[]

Defined in:  [lib/types.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L21)

##### `unsafe`

> [`Unsafe`](modules.md#unsafe)[]

Defined in:  [lib/types.ts:25](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L25)

***

### `Options`

#### Properties

##### `displayMathDelimiters?`

> `"$$"` | `"[]"`

Defined in:  [lib/types.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L71)

##### `emph?`

> `"textit"` | `"emph"`

Defined in:  [lib/types.ts:69](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L69)

##### `extensions?`

> [`Options`](modules.md#options)[]

Defined in:  [lib/types.ts:73](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L73)

##### `handlers?`

> [`Handlers`](modules.md#handlers)

Defined in:  [lib/types.ts:72](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L72)

##### `inlineMathDelimiters?`

> `"$"` | `"()"`

Defined in:  [lib/types.ts:70](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L70)

##### `join?`

> [`Join`](modules.md#join)[]

Defined in:  [lib/types.ts:74](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L74)

##### `parbreak?`

> `"par"` | `"newline"`

Defined in:  [lib/types.ts:68](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L68)

##### `unsafe?`

> [`Unsafe`](modules.md#unsafe)[]

Defined in:  [lib/types.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L75)

##### `wrapDocument?`

> `boolean`

Defined in:  [lib/types.ts:67](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L67)

***

### `SafeFields`

#### Properties

##### `after`

> `string`

Defined in:  [lib/types.ts:13](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L13)

##### `before`

> `string`

Defined in:  [lib/types.ts:12](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L12)

***

### `TrackFields`

#### Properties

##### `lineShift`

> `number`

Defined in:  [lib/types.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L8)

##### `now`

> `Point`

Defined in:  [lib/types.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L7)

***

### `Unsafe`

#### Properties

##### `\_compiled?`

> `RegExp`

Defined in:  [lib/types.ts:64](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L64)

##### `after?`

> `string`

Defined in:  [lib/types.ts:61](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L61)

##### `atBreak?`

> `boolean`

Defined in:  [lib/types.ts:63](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L63)

##### `before?`

> `string`

Defined in:  [lib/types.ts:62](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L62)

##### `character`

> `string`

Defined in:  [lib/types.ts:58](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L58)

##### `inConstruct?`

> `string` | `string`[]

Defined in:  [lib/types.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L59)

##### `notInConstruct?`

> `string` | `string`[]

Defined in:  [lib/types.ts:60](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L60)

***

### `BasicContext`

> `object`

```ts
{
    align: boolean;
    math: boolean;
    options: Options;
}
```

#### Type declaration

| Member | Type |
| :------ | :------ |
| `align` | `boolean` |
| `math` | `boolean` |
| `options` | [`Options`](modules.md#options) |

Defined in:  [lib/types.ts:33](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L33)

***

### `BasicHandle`

> `Function`

#### Type declaration

##### `Signature`

```ts
(node: any, options?: Options): string;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `node` | `any` |
| `options?` | [`Options`](modules.md#options) |

##### `Returns`

`string`

Defined in:  [lib/types.ts:39](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L39)

***

### `Enter`

> `Function`

#### Type declaration

##### `Signature`

```ts
(type: string): Exit;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `type` | `string` |

##### `Returns`

[`Exit`](modules.md#exit)

Defined in:  [lib/types.ts:18](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L18)

***

### `Exit`

> `Function`

#### Type declaration

##### `Signature`

```ts
(): void;
```

##### `Returns`

`void`

Defined in:  [lib/types.ts:19](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L19)

***

### `Handle`

> `Function`

#### Type declaration

##### `Signature`

```ts
(
  node: any, 
  parent: Parent | null | undefined, 
  context: Context, 
  safeOptions: SafeOptions): string;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `node` | `any` |
| `parent` | [`Parent`](modules.md#parent) | `null` | `undefined` |
| `context` | [`Context`](modules.md#context) |
| `safeOptions` | [`SafeOptions`](modules.md#safeoptions) |

##### `Returns`

`string`

Defined in:  [lib/types.ts:41](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L41)

***

### `Handlers`

> `Record`<`string`, [`Handle`](modules.md#handle)>

Defined in:  [lib/types.ts:48](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L48)

***

### `Join`

> `Function`

#### Type declaration

##### `Signature`

```ts
(
  left: Node, 
  right: Node, 
  parent: Parent, 
  context: Context): boolean | null | void | number;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `left` | [`Node`](modules.md#node) |
| `right` | [`Node`](modules.md#node) |
| `parent` | [`Parent`](modules.md#parent) |
| `context` | [`Context`](modules.md#context) |

##### `Returns`

`boolean` | `null` | `void` | `number`

Defined in:  [lib/types.ts:50](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L50)

***

### `Node`

> `Root` | `Content`

Defined in:  [lib/types.ts:3](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L3)

***

### `Parent`

> `Extract`<[`Node`](modules.md#node), `UnistParent`>

Defined in:  [lib/types.ts:4](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L4)

***

### `SafeOptions`

> [`TrackFields`](modules.md#trackfields) | [`SafeFields`](modules.md#safefields)

Defined in:  [lib/types.ts:16](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/texast/texast-util-to-latex/src/lib/types.ts#L16)

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

[relatex-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/relatex-stringify

[jast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast

[jast-util-to-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast-util-to-texast

[jastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jastscript

[texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast

[texast-texast-util-to-latex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast-texast-util-to-latex

[hast]: https://github.com/syntax-tree/hast

[xast]: https://github.com/syntax-tree/xast

[mdast]: https://github.com/syntax-tree/mdast

[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[latex-utensils]: https://github.com/tamuratak/latex-utensils

[latexjs]: https://github.com/latexjs/latexjs
