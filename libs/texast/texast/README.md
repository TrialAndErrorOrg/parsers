> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# texast

DEPRECATED: Type definitions for `texast` (LaTeX abstract syntax tree), a syntax for abstract syntax trees representing LaTeX documents in the [`unist`](https://github.com/syntax-tree/unist) format.

## Contents

*   [texast](#texast)
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
pnpm add texast
# or with yarn
# yarn add texast
# or with npm
# npm install texast
```

## Use

## API

***

### `isCommandArg()`

#### Signature

```ts
isCommandArg(node: TexastContent | Root): node is CommandArg;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TexastContent`](modules.md#texastcontent) | [`Root`](modules.md#root) |

#### Returns

`node is CommandArg`

Defined in:  [src/lib/texast.ts:124](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L124)

***

### `isKnownNode()`

#### Signature

```ts
isKnownNode(node: Node<Data>): node is TexastContent;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](modules.md#node)<`Data`> |

#### Returns

`node is TexastContent`

Defined in:  [src/lib/texast.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L7)

***

### `isOptionalCommandArg()`

#### Signature

```ts
isOptionalCommandArg(node: TexastContent): node is CommandArgOpt;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TexastContent`](modules.md#texastcontent) |

#### Returns

`node is CommandArgOpt`

Defined in:  [src/lib/texast.ts:129](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L129)

***

### `isParagraphContent()`

#### Signature

```ts
isParagraphContent(content: TexastContent): content is ParagraphContent;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`TexastContent`](modules.md#texastcontent) |

#### Returns

`content is ParagraphContent`

Defined in:  [src/lib/texast.ts:76](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L76)

***

### `AlignmentTab`

Nodes containing a value.

#### Hierarchy

*   [`Literal`](modules.md#literal).**AlignmentTab**

#### Properties

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Literal](modules.md#literal).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Literal](modules.md#literal).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"alignmentTab"`

The variant of a node.

Overrides: [Literal](modules.md#literal).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:186](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L186)

##### `value`

> `"&"`

Overrides: [Literal](modules.md#literal).[value](modules.md#value)

Defined in:  [src/lib/texast.ts:187](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L187)

***

### `Command`

#### Hierarchy

*   [`Parent`](modules.md#parent).**Command**

#### Properties

##### `children`

> [`CommandArg`](modules.md#commandarg)[]

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:117](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L117)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `string`

Defined in:  [src/lib/texast.ts:116](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L116)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"command"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:115](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L115)

***

### `CommandArg`

#### Hierarchy

*   [`Parent`](modules.md#parent).**CommandArg**

#### Properties

##### `children`

> [`CommandContent`](modules.md#commandcontent)[] | [`MathContent`](modules.md#mathcontent)[] | [`ParagraphContent`](modules.md#paragraphcontent)[]

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:122](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L122)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `optional?`

> `boolean`

Defined in:  [src/lib/texast.ts:121](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L121)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"commandArg"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:120](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L120)

***

### `CommandArgOpt`

#### Hierarchy

*   [`CommandArg`](modules.md#commandarg).**CommandArgOpt**

#### Properties

##### `children`

> [`CommandContent`](modules.md#commandcontent)[] | [`MathContent`](modules.md#mathcontent)[] | [`ParagraphContent`](modules.md#paragraphcontent)[]

Inherited from: [CommandArg](modules.md#commandarg).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:122](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L122)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [CommandArg](modules.md#commandarg).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `optional`

> `true`

Overrides: [CommandArg](modules.md#commandarg).[optional](modules.md#optional)

Defined in:  [src/lib/texast.ts:127](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L127)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [CommandArg](modules.md#commandarg).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"commandArg"`

The variant of a node.

Inherited from: [CommandArg](modules.md#commandarg).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:120](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L120)

***

### `Comment`

Nodes containing a value.

#### Hierarchy

*   [`Literal`](modules.md#literal).**Comment**

#### Properties

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Literal](modules.md#literal).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Literal](modules.md#literal).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"comment"`

The variant of a node.

Overrides: [Literal](modules.md#literal).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:200](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L200)

##### `value`

> `string`

Overrides: [Literal](modules.md#literal).[value](modules.md#value)

Defined in:  [src/lib/texast.ts:201](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L201)

***

### `DisplayMath`

#### Hierarchy

*   [`MathContainer`](modules.md#mathcontainer).**DisplayMath**

#### Properties

##### `children`

> [`MathContent`](modules.md#mathcontent)[]

Inherited from: [MathContainer](modules.md#mathcontainer).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:165](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L165)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [MathContainer](modules.md#mathcontainer).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `delimiters?`

> `"$$"` | `"[]"`

Defined in:  [src/lib/texast.ts:173](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L173)

##### `name`

> `"displayMath"`

Overrides: [MathContainer](modules.md#mathcontainer).[name](modules.md#name)

Defined in:  [src/lib/texast.ts:172](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L172)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [MathContainer](modules.md#mathcontainer).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"mathContainer"`

The variant of a node.

Inherited from: [MathContainer](modules.md#mathcontainer).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:163](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L163)

***

### `DocumentEnvironment`

#### Hierarchy

*   [`Parent`](modules.md#parent).**DocumentEnvironment**

#### Properties

##### `children`

> [`TopLevelDocumentContent`](modules.md#topleveldocumentcontent)[]

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:95](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L95)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"document"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:94](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L94)

***

### `Environment`

#### Type parameters

*   `TNode` *extends* [`TexastContent`](modules.md#texastcontent) = [`TexastContent`](modules.md#texastcontent)

#### Hierarchy

*   [`Parent`](modules.md#parent).**Environment**

#### Properties

##### `children`

> (`TNode` | [`CommandArg`](modules.md#commandarg))[]

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:137](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L137)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `string`

Defined in:  [src/lib/texast.ts:136](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L136)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"environment"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:135](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L135)

***

### `Figure`

#### Hierarchy

*   [`Environment`](modules.md#environment).**Figure**

#### Properties

##### `children`

> [`TexastContent`](modules.md#texastcontent)[]

Inherited from: [Environment](modules.md#environment).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:137](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L137)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Environment](modules.md#environment).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `float?`

> `boolean`

Defined in:  [src/lib/texast.ts:233](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L233)

##### `name`

> `"figure"`

Overrides: [Environment](modules.md#environment).[name](modules.md#name)

Defined in:  [src/lib/texast.ts:232](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L232)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Environment](modules.md#environment).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"environment"`

The variant of a node.

Inherited from: [Environment](modules.md#environment).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:135](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L135)

***

### `Group`

#### Type parameters

*   `Child` *extends* [`TexastContent`](modules.md#texastcontent) = [`EnvironmentContent`](modules.md#environmentcontent)

#### Hierarchy

*   [`Parent`](modules.md#parent).**Group**

#### Properties

##### `children`

> `Child`[]

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:112](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L112)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `string`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:111](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L111)

***

### `InlineMath`

#### Hierarchy

*   [`MathContainer`](modules.md#mathcontainer).**InlineMath**

#### Properties

##### `children`

> [`MathContent`](modules.md#mathcontent)[]

Inherited from: [MathContainer](modules.md#mathcontainer).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:165](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L165)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [MathContainer](modules.md#mathcontainer).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `delimiters?`

> `"$"` | `"()"`

Defined in:  [src/lib/texast.ts:169](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L169)

##### `name`

> `"inlineMath"`

Overrides: [MathContainer](modules.md#mathcontainer).[name](modules.md#name)

Defined in:  [src/lib/texast.ts:168](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L168)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [MathContainer](modules.md#mathcontainer).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"mathContainer"`

The variant of a node.

Inherited from: [MathContainer](modules.md#mathcontainer).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:163](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L163)

***

### `Linebreak`

Syntactic units in unist syntax trees are called nodes.

#### Hierarchy

*   [`Node`](modules.md#node).**Linebreak**

#### Properties

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Node](modules.md#node).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `height?`

> `string`

Defined in:  [src/lib/texast.ts:211](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L211)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Node](modules.md#node).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"linebreak"`

The variant of a node.

Overrides: [Node](modules.md#node).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:210](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L210)

***

### `List`

#### Hierarchy

*   [`Environment`](modules.md#environment)<[`ListItem`](modules.md#listitem)>.**List**

#### Properties

##### `children`

> ([`CommandArg`](modules.md#commandarg) | [`ListItem`](modules.md#listitem))[]

Inherited from: [Environment](modules.md#environment).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:137](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L137)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Environment](modules.md#environment).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `"itemize"` | `"enumerate"`

Overrides: [Environment](modules.md#environment).[name](modules.md#name)

Defined in:  [src/lib/texast.ts:254](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L254)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Environment](modules.md#environment).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"environment"`

The variant of a node.

Inherited from: [Environment](modules.md#environment).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:135](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L135)

***

### `ListItem`

#### Hierarchy

*   `Parent`.**ListItem**

#### Properties

##### `children`

> [`ParagraphContent`](modules.md#paragraphcontent)[]

Overrides: UnistParent.children

Defined in:  [src/lib/texast.ts:258](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L258)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistParent.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistParent.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"listItem"`

Overrides: UnistParent.type

Defined in:  [src/lib/texast.ts:257](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L257)

***

### `Literal`

Nodes containing a value.

#### Type parameters

*   `Value` = `unknown`Specific value type of [value](modules.md#value) such as `string` for `Text` node
*   `TData` *extends* `object` = `Data`

#### Hierarchy

*   [`Node`](modules.md#node)<`TData`>.**Literal**

#### Properties

##### `data?`

> `TData`

Information from the ecosystem.

Inherited from: [Node](modules.md#node).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Node](modules.md#node).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `string`

The variant of a node.

Inherited from: [Node](modules.md#node).[type](modules.md#type)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:22

##### `value`

> `Value`

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:113

***

### `MathCharacter`

Nodes containing a value.

#### Hierarchy

*   [`Literal`](modules.md#literal).**MathCharacter**

#### Properties

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Literal](modules.md#literal).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Literal](modules.md#literal).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"mathCharacter"`

The variant of a node.

Overrides: [Literal](modules.md#literal).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:181](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L181)

##### `value`

> `string`

Overrides: [Literal](modules.md#literal).[value](modules.md#value)

Defined in:  [src/lib/texast.ts:182](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L182)

***

### `MathContainer`

#### Hierarchy

*   [`Parent`](modules.md#parent).**MathContainer**

#### Properties

##### `children`

> [`MathContent`](modules.md#mathcontent)[]

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:165](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L165)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name?`

> `string`

Defined in:  [src/lib/texast.ts:164](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L164)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"mathContainer"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:163](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L163)

***

### `MathEnvironment`

#### Hierarchy

*   [`Environment`](modules.md#environment)<[`MathContent`](modules.md#mathcontent)>.**MathEnvironment**

#### Properties

##### `children`

> ([`MathContent`](modules.md#mathcontent) | [`CommandArg`](modules.md#commandarg))[]

Inherited from: [Environment](modules.md#environment).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:137](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L137)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Environment](modules.md#environment).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `"math"` | [`MatrixNames`](modules.md#matrixnames) | `"equation"` | `"equation*"` | `"align"` | `"align*"` | `"displaymath"` | `"aligned"`

Overrides: [Environment](modules.md#environment).[name](modules.md#name)

Defined in:  [src/lib/texast.ts:149](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L149)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Environment](modules.md#environment).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"environment"`

The variant of a node.

Overrides: [Environment](modules.md#environment).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:148](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L148)

***

### `MathEnvironmentAligned`

#### Hierarchy

*   [`MathEnvironment`](modules.md#mathenvironment).**MathEnvironmentAligned**

#### Properties

##### `children`

> ([`MathContent`](modules.md#mathcontent) | [`CommandArg`](modules.md#commandarg))[]

Inherited from: [MathEnvironment](modules.md#mathenvironment).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:137](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L137)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [MathEnvironment](modules.md#mathenvironment).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `"aligned"`

Overrides: [MathEnvironment](modules.md#mathenvironment).[name](modules.md#name)

Defined in:  [src/lib/texast.ts:160](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L160)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [MathEnvironment](modules.md#mathenvironment).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"environment"`

The variant of a node.

Inherited from: [MathEnvironment](modules.md#mathenvironment).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:148](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L148)

***

### `Node`

Syntactic units in unist syntax trees are called nodes.

#### Type parameters

*   `TData` *extends* `object` = `Data`Information from the ecosystem. Useful for more specific [data](modules.md#data).

#### Hierarchy

*   [`Linebreak`](modules.md#linebreak)
*   [`Literal`](modules.md#literal)

#### Properties

##### `data?`

> `TData`

Information from the ecosystem.

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `string`

The variant of a node.

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:22

***

### `Paragraph`

#### Hierarchy

*   [`Parent`](modules.md#parent).**Paragraph**

#### Properties

##### `children`

> [`ParagraphContent`](modules.md#paragraphcontent)[]

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:192](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L192)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"paragraph"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:191](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L191)

***

### `Parent`

#### Hierarchy

*   `Parent`.**Parent**

#### Properties

##### `children`

> [`TexastContent`](modules.md#texastcontent)[]

Overrides: UnistParent.children

Defined in:  [src/lib/texast.ts:106](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L106)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistParent.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistParent.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `string`

The variant of a node.

Inherited from: UnistParent.type

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:22

***

### `Preamble`

#### Hierarchy

*   [`Parent`](modules.md#parent).**Preamble**

#### Properties

##### `children`

> [`PreambleContent`](modules.md#preamblecontent)[]

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:91](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L91)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"preamble"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:90](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L90)

***

### `Root`

#### Hierarchy

*   [`Parent`](modules.md#parent).**Root**

#### Properties

##### `children`

> [`TexastContent`](modules.md#texastcontent)[]

Inherited from: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:106](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L106)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"root"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:86](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L86)

***

### `Script`

#### Hierarchy

*   [`Parent`](modules.md#parent).**Script**

#### Properties

##### `children`

> [`MathContent`](modules.md#mathcontent)[]

Overrides: [Parent](modules.md#parent).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:177](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L177)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Parent](modules.md#parent).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Parent](modules.md#parent).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"super"` | `"sub"`

The variant of a node.

Overrides: [Parent](modules.md#parent).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:176](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L176)

***

### `Softbreak`

Nodes containing a value.

#### Hierarchy

*   [`Literal`](modules.md#literal).**Softbreak**

#### Properties

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Literal](modules.md#literal).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Literal](modules.md#literal).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"break"`

The variant of a node.

Overrides: [Literal](modules.md#literal).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:195](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L195)

##### `value`

> `"\\n"`

Overrides: [Literal](modules.md#literal).[value](modules.md#value)

Defined in:  [src/lib/texast.ts:196](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L196)

***

### `Table`

#### Hierarchy

*   [`Environment`](modules.md#environment).**Table**

#### Properties

##### `children`

> [`TexastContent`](modules.md#texastcontent)[]

Inherited from: [Environment](modules.md#environment).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:137](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L137)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Environment](modules.md#environment).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `float?`

> `boolean`

Defined in:  [src/lib/texast.ts:237](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L237)

##### `name`

> `"table"`

Overrides: [Environment](modules.md#environment).[name](modules.md#name)

Defined in:  [src/lib/texast.ts:236](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L236)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Environment](modules.md#environment).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"environment"`

The variant of a node.

Inherited from: [Environment](modules.md#environment).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:135](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L135)

***

### `TableCell`

#### Hierarchy

*   `Parent`.**TableCell**

#### Properties

##### `children`

> [`ParagraphContent`](modules.md#paragraphcontent)[]

Overrides: UnistParent.children

Defined in:  [src/lib/texast.ts:250](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L250)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistParent.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistParent.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `span?`

> `${number}`

Defined in:  [src/lib/texast.ts:249](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L249)

##### `type`

> `"tableCell"`

Overrides: UnistParent.type

Defined in:  [src/lib/texast.ts:248](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L248)

***

### `TableRow`

#### Hierarchy

*   `Parent`.**TableRow**

#### Properties

##### `children`

> [`TableRowContent`](modules.md#tablerowcontent)[]

Overrides: UnistParent.children

Defined in:  [src/lib/texast.ts:245](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L245)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: UnistParent.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: UnistParent.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"tableRow"`

Overrides: UnistParent.type

Defined in:  [src/lib/texast.ts:244](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L244)

***

### `Tabular`

#### Hierarchy

*   [`Environment`](modules.md#environment)<[`TabularContent`](modules.md#tabularcontent)>.**Tabular**

#### Properties

##### `children`

> ([`TabularContent`](modules.md#tabularcontent) | [`CommandArg`](modules.md#commandarg))[]

Inherited from: [Environment](modules.md#environment).[children](modules.md#children)

Defined in:  [src/lib/texast.ts:137](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L137)

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Environment](modules.md#environment).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `name`

> `"tabular"`

Overrides: [Environment](modules.md#environment).[name](modules.md#name)

Defined in:  [src/lib/texast.ts:240](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L240)

##### `package?`

> `"plain"` | `"tabularx"` | `"tabulary"` | `"tabu"`

Defined in:  [src/lib/texast.ts:241](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L241)

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Environment](modules.md#environment).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"environment"`

The variant of a node.

Inherited from: [Environment](modules.md#environment).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:135](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L135)

***

### `Text`

Nodes containing a value.

#### Hierarchy

*   [`Literal`](modules.md#literal).**Text**

#### Properties

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: [Literal](modules.md#literal).[data](modules.md#data)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: [Literal](modules.md#literal).[position](modules.md#position)

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `type`

> `"text"`

The variant of a node.

Overrides: [Literal](modules.md#literal).[type](modules.md#type)

Defined in:  [src/lib/texast.ts:205](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L205)

##### `value`

> `string`

Overrides: [Literal](modules.md#literal).[value](modules.md#value)

Defined in:  [src/lib/texast.ts:206](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L206)

***

### `AlignmentContent`

> [`MathEnvironmentAligned`](modules.md#mathenvironmentaligned) | [`TabularContent`](modules.md#tabularcontent)

Defined in:  [src/lib/texast.ts:56](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L56)

***

### `CommandContent`

> [`Command`](modules.md#command) | [`Text`](modules.md#text) | [`Comment`](modules.md#comment)

Defined in:  [src/lib/texast.ts:73](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L73)

***

### `EnvironmentContent`

> [`TopLevelDocumentContent`](modules.md#topleveldocumentcontent)

Defined in:  [src/lib/texast.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L71)

***

### `ListContent`

> [`ListItem`](modules.md#listitem)

Defined in:  [src/lib/texast.ts:82](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L82)

***

### `MathContent`

> [`AlignmentTab`](modules.md#alignmenttab) | [`MathCharacter`](modules.md#mathcharacter) | [`Script`](modules.md#script) | [`Command`](modules.md#command)

Defined in:  [src/lib/texast.ts:64](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L64)

***

### `MatrixNames`

> `"array"` | `"matrix"` | `"pmatrix"` | `"vmatrix"` | `"Vmatrix"` | `"bmatrix"` | `"Bmatrix"`

Defined in:  [src/lib/texast.ts:139](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L139)

***

### `NeedsEscape`

> `"&"`

Defined in:  [src/lib/texast.ts:84](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L84)

***

### `ParagraphContent`

> [`Text`](modules.md#text) | [`InlineMath`](modules.md#inlinemath) | [`Command`](modules.md#command) | [`Comment`](modules.md#comment)

Defined in:  [src/lib/texast.ts:75](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L75)

***

### `PreambleContent`

> [`Command`](modules.md#command) | [`Comment`](modules.md#comment)

Defined in:  [src/lib/texast.ts:54](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L54)

***

### `TableRowContent`

> [`TableCell`](modules.md#tablecell) | [`AlignmentTab`](modules.md#alignmenttab)

Defined in:  [src/lib/texast.ts:60](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L60)

***

### `TabularContent`

> [`Linebreak`](modules.md#linebreak) | [`TableRow`](modules.md#tablerow)

Defined in:  [src/lib/texast.ts:58](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L58)

***

### `TexastContent`

> [`TopLevelDocumentContent`](modules.md#topleveldocumentcontent) | [`PreambleContent`](modules.md#preamblecontent) | [`AlignmentContent`](modules.md#alignmentcontent) | [`MathContent`](modules.md#mathcontent) | [`CommandContent`](modules.md#commandcontent) | [`ParagraphContent`](modules.md#paragraphcontent) | [`CommandArg`](modules.md#commandarg) | [`ListContent`](modules.md#listcontent) | [`Text`](modules.md#text) | [`Comment`](modules.md#comment) | [`TabularContent`](modules.md#tabularcontent) | [`TableRowContent`](modules.md#tablerowcontent)

Defined in:  [src/lib/texast.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L32)

***

### `TopLevelDocumentContent`

> [`Environment`](modules.md#environment) | [`Paragraph`](modules.md#paragraph) | [`MathContainer`](modules.md#mathcontainer) | [`Command`](modules.md#command) | [`Comment`](modules.md#comment) | [`TopLevelMathContent`](modules.md#toplevelmathcontent)

Defined in:  [src/lib/texast.ts:46](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L46)

***

### `TopLevelMathContent`

> [`MathContainer`](modules.md#mathcontainer) | [`InlineMath`](modules.md#inlinemath) | [`DisplayMath`](modules.md#displaymath)

Defined in:  [src/lib/texast.ts:62](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/texast/texast/src/lib/texast.ts#L62)

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

[jast-util-to-texast-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast-util-to-texast-texast

[jastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jastscript

[texast-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast-texast

[texast-texast-util-to-latex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast-texast-util-to-latex

[hast]: https://github.com/syntax-tree/hast

[xast]: https://github.com/syntax-tree/xast

[mdast]: https://github.com/syntax-tree/mdast

[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[latex-utensils]: https://github.com/tamuratak/latex-utensils

[latexjs]: https://github.com/latexjs/latexjs
