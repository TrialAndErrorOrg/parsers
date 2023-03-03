> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# xast-util-is-element

Port of [hast-util-is-element](https://github.com/syntax-tree/hast-util-has-property) for [xast][xast]

## Contents

*   [xast-util-is-element](#xast-util-is-element)
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
pnpm add xast-util-is-element
# or with yarn
# yarn add xast-util-is-element
# or with npm
# npm install xast-util-is-element
```

## Use

## API

***

### `convertElement()`

#### Signature

```ts
convertElement<T>(test: T["name"] | TestFunctionPredicate<T>): AssertPredicate<T>;
```

#### Type parameters

*   `T` *extends* `Element`<`T`>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | `T`[`"name"`] | [`TestFunctionPredicate`](modules.md#testfunctionpredicate)<`T`> |

#### Returns

[`AssertPredicate`](modules.md#assertpredicate)<`T`>

Defined in:  [lib/xast-util-is-element.ts:174](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L174)

#### Signature

```ts
convertElement(test?: Test): AssertAnything;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `test?` | [`Test`](modules.md#test) |

#### Returns

[`AssertAnything`](modules.md#assertanything)

Defined in:  [lib/xast-util-is-element.ts:177](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L177)

***

### `isElement()`

#### Signature

```ts
isElement(): false;
```

#### Returns

`false`

Defined in:  [lib/xast-util-is-element.ts:123](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L123)

#### Signature

```ts
isElement<T>(
  node: unknown, 
  test?: PredicateTest<T>, 
  index?: number, 
  parent?: Parent<Node<Data>, Data>, 
  context?: unknown): node is T;
```

#### Type parameters

*   `T` *extends* `Element`<`T`> = `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `unknown` |
| `test?` | [`PredicateTest`](modules.md#predicatetest)<`T`> |
| `index?` | `number` |
| `parent?` | `Parent`<`Node`<`Data`>, `Data`> |
| `context?` | `unknown` |

#### Returns

`node is T`

Defined in:  [lib/xast-util-is-element.ts:124](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L124)

#### Signature

```ts
isElement(
  node: unknown, 
  test: Test, 
  index?: number, 
  parent?: Parent<Node<Data>, Data>, 
  context?: unknown): boolean;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `unknown` |
| `test` | [`Test`](modules.md#test) |
| `index?` | `number` |
| `parent?` | `Parent`<`Node`<`Data`>, `Data`> |
| `context?` | `unknown` |

#### Returns

`boolean`

Defined in:  [lib/xast-util-is-element.ts:131](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L131)

***

### `AssertAnything`

> `Function`

#### Type declaration

Check if a node is an element and passes a certain node test

##### `Signature`

```ts
(node?: unknown, index?: number | null, parent?: Parent | null): boolean;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `node?` | `unknown` |
| `index?` | `number` | `null` |
| `parent?` | `Parent` | `null` |

##### `Returns`

`boolean`

Defined in:  [lib/xast-util-is-element.ts:40](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L40)

***

### `AssertPredicate`

> <`Y`> `Function`

#### Type parameters

*   `Y` *extends* `Element`

#### Type declaration

Check if a node is an element and passes a certain node test

##### `Signature`

```ts
(node?: unknown, index?: number | null, parent?: Parent | null): node is Y;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `node?` | `unknown` |
| `index?` | `number` | `null` |
| `parent?` | `Parent` | `null` |

##### `Returns`

`node is Y`

Defined in:  [lib/xast-util-is-element.ts:50](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L50)

***

### `Name`

> `string`

Defined in:  [lib/xast-util-is-element.ts:4](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L4)

***

### `PredicateTest`

> <`T`> `null` | `undefined` | `T`[`"name"`] | [`TestFunctionPredicate`](modules.md#testfunctionpredicate)<`T`> | (`T`[`"name"`] | [`TestFunctionPredicate`](modules.md#testfunctionpredicate)<`T`>)[]

#### Type parameters

*   `T` *extends* `Element`

Defined in:  [lib/xast-util-is-element.ts:12](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L12)

***

### `Test`

> `null` | `undefined` | [`Name`](modules.md#name) | [`TestFunctionAnything`](modules.md#testfunctionanything) | ([`Name`](modules.md#name) | [`TestFunctionAnything`](modules.md#testfunctionanything))[]

Defined in:  [lib/xast-util-is-element.ts:5](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L5)

***

### `TestFunctionAnything`

> `Function`

#### Type declaration

Check if an element passes a test

##### `Signature`

```ts
(element: Element, index?: number | null, parent?: Parent | null): boolean | void;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `element` | `Element` |
| `index?` | `number` | `null` |
| `parent?` | `Parent` | `null` |

##### `Returns`

`boolean` | `void`

Defined in:  [lib/xast-util-is-element.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L22)

***

### `TestFunctionPredicate`

> <`X`> `Function`

#### Type parameters

*   `X` *extends* `Element`

#### Type declaration

Check if an element passes a certain node test

##### `Signature`

```ts
(element: Element, index?: number | null, parent?: Parent | null): element is X;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `element` | `Element` |
| `index?` | `number` | `null` |
| `parent?` | `Parent` | `null` |

##### `Returns`

`element is X`

Defined in:  [lib/xast-util-is-element.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/xast/xast-util-is-element/src/lib/xast-util-is-element.ts#L31)

## Syntax tree

## Types

## Compatibility

## Security

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
