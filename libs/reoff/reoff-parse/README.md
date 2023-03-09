> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# reoff-parse

[![npm version](https://badge.fury.io/js/reoff-parse.svg)](https://badge.fury.io/js/reoff-parse) [![npm downloads](https://img.shields.io/npm/dm/reoff-parse.svg)](https://www.npmjs.com/package/reoff-parse)

Plugin for [reoff][reoff] to parse a `.docx` XML file into an `ooxast` AST. Ideally use `docx-to-vfile` to get to a parseable state.

## Contents

*   [reoff-parse](#reoff-parse)
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
pnpm add reoff-parse
# or with yarn
# yarn add reoff-parse
# or with npm
# npm install reoff-parse
```

## Use

## API

***

### `default()`

#### Signature

```ts
default(options: Settings = {}): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Settings`](modules.md#settings) |

#### Returns

`void`

Defined in:  [src/lib/reoff-parse.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/reoff-parse/src/lib/reoff-parse.ts#L59)

***

### `Parsed`

The parsed content of .xml files in the .docx file

#### Indexable

[`key`: `XMLOrRelsString`]: `Root` | `undefined`

***

### `RootWithSource`

#### Hierarchy

*   `Root`.**RootWithSource**

#### Properties

##### `children`

> (`Cdata` | `Comment` | `Doctype` | `Element` | `Instruction` | `Text`)[]

Inherited from: Root.children

Defined in:  node\_modules/.pnpm/@types+xast\@1.0.2/node\_modules/@types/xast/index.d.ts:58

##### `data?`

> `Data`

Information from the ecosystem.

Inherited from: Root.data

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:27

##### `position?`

> `Position`

Location of a node in a source document.
Must not be present if a node is generated.

Inherited from: Root.position

Defined in:  node\_modules/.pnpm/@types+unist\@2.0.6/node\_modules/@types/unist/index.d.ts:33

##### `source?`

> `string`

The key of the file in the VFile's `data` attribute.
Used to identify the file in the VFile and where to put it when stringifying.

Defined in:  [src/lib/reoff-parse.ts:99](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/reoff-parse/src/lib/reoff-parse.ts#L99)

##### `type`

> `"root"`

Inherited from: Root.type

Defined in:  node\_modules/.pnpm/@types+xast\@1.0.2/node\_modules/@types/xast/index.d.ts:57

***

### `Settings`

#### Properties

##### `fragment?`

> `boolean`

Defined in:  [src/lib/reoff-parse.ts:11](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/reoff-parse/src/lib/reoff-parse.ts#L11)

##### `include?`

> `string`[] | `RegExp`[] | `"all"` | (`key`: `string`) => `boolean` | `"allXML"`

Which files on the `data` attribute of the VFile to parse and turn into `ooxast` trees.

*   `allXML` parses and appends all files that end with `.xml`.
*   `all` parses and appends all files that end with `.xml` or `.rels`.
*   if a string array is passed, it parses and appends all files that match the strings in the array.
*   if a regexp array is passed, it parses and appends all files that match the regexps in the array.
*   if a function is passed, it parses and appends all files that match the function.

###### Default

['word/footnotes.xml', 'word/endnotes.xml', 'customXml/item1.xml', 'word/glossary/document.xml']

Use of 'all' or 'allXML' is discouraged, as it will greatly increase the size of the VFile and generally be slower.
You can always manually parse the files you need later. For example, if you want to find out what fonts are used in the document, you can do something like this:

```ts
import { docxToVFile } from 'docx-to-vfile'
import { fromXml } from 'xast-util-from-xml'
import { unified } from 'unified'
import { reoffParse } from 'reoff-parse'

const file = await docxToVFile(docx)

const processor = unified()
 .use(reoffParse)
 .use(() => (tree, vfile) => {
   const fontTable = fromXml(vfile.data['word/fontTable.xml'])
   // do something with the fontTable

   return tree
 })
```

Defined in:  [src/lib/reoff-parse.ts:56](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/reoff-parse/src/lib/reoff-parse.ts#L56)

##### `leaveRaw?`

> `boolean`

Whether to leave the raw XML on the data attribute of the VFile.
The raw XML is not needed in most cases, but can be useful for debugging.

By default, all XML files that match the include option are parsed and added to the `data.parsed` attribute of the VFile.
All XML are then removed from the VFile.

###### Default

false

Defined in:  [src/lib/reoff-parse.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/reoff-parse/src/lib/reoff-parse.ts#L22)

##### `removeWhiteSpace?`

> `boolean`

Defined in:  [src/lib/reoff-parse.ts:10](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/reoff-parse/src/lib/reoff-parse.ts#L10)

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
