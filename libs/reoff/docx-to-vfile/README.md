> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# docx-to-vfile

[![npm version](https://badge.fury.io/js/docx-to-vfile.svg)](https://badge.fury.io/js/docx-to-vfile) [![npm downloads](https://img.shields.io/npm/dm/docx-to-vfile.svg)](https://www.npmjs.com/package/docx-to-vfile)

Reads a `.docx` file and stores its components in vfile format to be processed by other tools, like [`reoff-parse`](https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff/reoff-parse).

Currently extremely dumb and just stores it all in memory, no streams for you.
File reading does happen in streams.

Based on [docxtract](https://github.com/sorleone/doxtract/)

## Contents

- [docx-to-vfile](#docx-to-vfile)
  - [Contents](#contents)
  - [What is this?](#what-is-this)
  - [When should I use this?](#when-should-i-use-this)
  - [Install](#install)
  - [Use](#use)
    - [In Node](#in-node)
    - [In the browser](#in-the-browser)
    - [Output](#output)
  - [API](#api)
    - [`docxToVFile()`](#docxtovfile)
      - [Signature](#signature)
      - [Parameters](#parameters)
      - [Returns](#returns)
    - [`DocxData`](#docxdata)
      - [Hierarchy](#hierarchy)
      - [Indexable](#indexable)
      - [Properties](#properties)
        - [`media`](#media)
          - [Index signature](#index-signature)
          - [Type declaration](#type-declaration)
        - [`relations`](#relations)
          - [Index signature](#index-signature-1)
          - [Type declaration](#type-declaration-1)
    - [`DocxVFile`](#docxvfile)
      - [Hierarchy](#hierarchy-1)
      - [Properties](#properties-1)
        - [`cwd`](#cwd)
        - [`data`](#data)
        - [`history`](#history)
        - [`map`](#map)
        - [`messages`](#messages)
        - [`result`](#result)
        - [`stored`](#stored)
        - [`value`](#value)
      - [Accessors](#accessors)
        - [`basename`](#basename)
          - [Signature](#signature-1)
          - [Returns](#returns-1)
          - [Signature](#signature-2)
          - [Parameters](#parameters-1)
          - [Returns](#returns-2)
        - [`dirname`](#dirname)
          - [Signature](#signature-3)
          - [Returns](#returns-3)
          - [Signature](#signature-4)
          - [Parameters](#parameters-2)
          - [Returns](#returns-4)
        - [`extname`](#extname)
          - [Signature](#signature-5)
          - [Returns](#returns-5)
          - [Signature](#signature-6)
          - [Parameters](#parameters-3)
          - [Returns](#returns-6)
        - [`path`](#path)
          - [Signature](#signature-7)
          - [Returns](#returns-7)
          - [Signature](#signature-8)
          - [Parameters](#parameters-4)
          - [Returns](#returns-8)
        - [`stem`](#stem)
          - [Signature](#signature-9)
          - [Returns](#returns-9)
          - [Signature](#signature-10)
          - [Parameters](#parameters-5)
          - [Returns](#returns-10)
      - [Methods](#methods)
        - [`fail()`](#fail)
          - [Throws](#throws)
          - [Signature](#signature-11)
          - [Parameters](#parameters-6)
          - [Returns](#returns-11)
        - [`info()`](#info)
          - [Signature](#signature-12)
          - [Parameters](#parameters-7)
          - [Returns](#returns-12)
        - [`message()`](#message)
          - [Signature](#signature-13)
          - [Parameters](#parameters-8)
          - [Returns](#returns-13)
        - [`toString()`](#tostring)
          - [Signature](#signature-14)
          - [Parameters](#parameters-9)
          - [Returns](#returns-14)
    - [`Options`](#options)
      - [Properties](#properties-2)
        - [`include?`](#include)
          - [Default](#default)
        - [`withoutMedia?`](#withoutmedia)
          - [Default](#default-1)
    - [`XMLOrRelsString`](#xmlorrelsstring)
  - [Compatibility](#compatibility)
  - [Security](#security)
  - [Related](#related)
  - [Contribute](#contribute)
  - [License](#license)

## What is this?

This package reads a `.docx` file and stores its components in vfile format to be processed by other tools, like [`reoff-parse`][reoff-parse]. This is the first step in a pipeline to convert a `.docx` file to many other formats using the `unified` ecosystem.

A `.docx` document is just a zip file with a bunch of XML and other files (such as images) in it. This package unzips the `.docx` file, reads the XML files and images and stores them in a `VFile` object, which is a virtual file format that can be used by other tools in the `unified` ecosystem.

## When should I use this?

Probably only exclusively to read a `docx` file to feed into `reoff-parse` or something similar, or if you want to access the raw data of a `docx` file for some reason.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add docx-to-vfile
# or with yarn
# yarn add docx-to-vfile
# or with npm
# npm install docx-to-vfile
```

## Use

### In Node

```ts
import { docxToVFile } from 'docx-to-vfile'
```

Pass a path to a `.docx` file

```ts
const file = await docxToVFile('path/to/file.docx')
```

Pass a `Blob`

```ts
const blob = await fetch('https://path/to/file.docx').then((res) => res.blob())
const file = await docxToVFile(blob)
```

Pass a `Buffer`

```ts
import { readFile } from 'fs/promises'
const buffer = await readFile('path/to/file.docx')
const file = await docxToVFile(buffer)
```

Pass a `ReadStream`

```ts
import { createReadStream } from 'fs'

const file = await docxToVFile(createReadStream('path/to/file.docx'))
```

### In the browser

```ts
import { docxToVFile } from 'docx-to-vfile/browser'
```

Pass a `File`

```html
<input type="file" />
```

```ts
document.querySelector('input[type="file"]')?.addEventListener('change', async (e) => {
  const file = await docxToVFile(e.target.files[0])
})
```

### Output

Using the default settings, the main value of the VFile will be the content of the main document, and the data will contain the content of the other files in the .docx archive. Media files will be stored in the media property.

```ts
const output = {
  data: {
    'word/footnotes.xml': '<?xml version ...',
    '_rels/rels': '<?xml version ...',
    // ...
    relations: {
      rId9: 'footnotes.xml',
      rId8: 'endnotes.xml',
      // ...
    },
    media: {
      media/image1.png: //<Blob>,
    },
  },
  value: //'[the content of word/document.xml, the main document]',
  // other vfile stuff
  messages: [],
  history: [],
  cwd: './',
}

String(output) === output.value // true
```

## API

---

### `docxToVFile()`

Takes a docx file as an ArrayBuffer and returns a VFile with the contents of the document.xml file as the root, and the contents of the other xml files as data.

#### Signature

```ts
docxToVFile(file: ArrayBuffer, userOptions: Options = {}): Promise<VFile>;
```

#### Parameters

| Name          | Type                            | Description                     |
| :------------ | :------------------------------ | :------------------------------ |
| `file`        | `ArrayBuffer`                   | The docx file as an ArrayBuffer |
| `userOptions` | [`Options`](modules.md#options) | -                               |

#### Returns

`Promise`<`VFile`>

A VFile with the contents of the document.xml file as the root, and the contents of the other xml files as data.

Defined in: [src/lib/docx-to-vfile-unzipit.ts:90](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L90)

---

### `DocxData`

The data attribute of a VFile
Is set to the DataMap interface in the vfile module

#### Hierarchy

- `Data`.**DocxData**

#### Indexable

[`key`: [`XMLOrRelsString`](modules.md#xmlorrelsstring)]: `string` | `undefined`

#### Properties

##### `media`

> `object`

The media files in the .docx file

###### Index signature

[`key`: `string`]: `ArrayBuffer`

###### Type declaration

Overrides: Data.media

Defined in: [src/lib/docx-to-vfile-unzipit.ts:45](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L45)

##### `relations`

> `object`

The relations between the .xml files in the .docx file

###### Index signature

[`key`: `string`]: `string`

###### Type declaration

Overrides: Data.relations

Defined in: [src/lib/docx-to-vfile-unzipit.ts:49](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L49)

---

### `DocxVFile`

Extends VFile with a custom data attribute

This information should be on the VFile interface, this is just used in contexts where you only want to know the type of the data attribute,
e.g. when writing a library that does something with the output of `docxToVFile`.

#### Hierarchy

- `VFile`.**DocxVFile**

#### Properties

##### `cwd`

> `string`

Base of `path` (default: `process.cwd()` or `'/'` in browsers).

Inherited from: VFile.cwd

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:53

##### `data`

> [`DocxData`](modules.md#docxdata)

Overrides: VFile.data

Defined in: [src/lib/docx-to-vfile-unzipit.ts:80](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L80)

##### `history`

> `string`[]

List of filepaths the file moved between.

The first is the original path and the last is the current path.

Inherited from: VFile.history

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:47

##### `map`

> `undefined` | `null` | `Map`

Source map.

This type is equivalent to the `RawSourceMap` type from the `source-map`
module.

Inherited from: VFile.map

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:85

##### `messages`

> `VFileMessage`[]

List of messages associated with the file.

Inherited from: VFile.messages

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:39

##### `result`

> `unknown`

Custom, non-string, compiled, representation.

This is used by unified to store non-string results.
One example is when turning markdown into React nodes.

Inherited from: VFile.result

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:76

##### `stored`

> `boolean`

Whether a file was saved to disk.

This is used by vfile reporters.

Inherited from: VFile.stored

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:67

##### `value`

> `Value`

Raw value.

Inherited from: VFile.value

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:59

#### Accessors

##### `basename`

Get the basename (including extname) (example: `'index.min.js'`).

###### Signature

```ts
basename(): undefined | string;
```

###### Returns

`undefined` | `string`

Inherited from: VFile.basename

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:123

Set basename (including extname) (`'index.min.js'`).

Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
on windows).
Cannot be nullified (use `file.path = file.dirname` instead).

###### Signature

```ts
basename(arg: undefined | string): void;
```

###### Parameters

| Name  | Type        |
| :---- | :---------- | -------- |
| `arg` | `undefined` | `string` |

###### Returns

`void`

Inherited from: VFile.basename

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:119

Inherited from: VFile.basename

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:119 node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:123

##### `dirname`

Get the parent path (example: `'~'`).

###### Signature

```ts
dirname(): undefined | string;
```

###### Returns

`undefined` | `string`

Inherited from: VFile.dirname

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:111

Set the parent path (example: `'~'`).

Cannot be set if there’s no `path` yet.

###### Signature

```ts
dirname(arg: undefined | string): void;
```

###### Parameters

| Name  | Type        |
| :---- | :---------- | -------- |
| `arg` | `undefined` | `string` |

###### Returns

`void`

Inherited from: VFile.dirname

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:107

Inherited from: VFile.dirname

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:107 node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:111

##### `extname`

Get the extname (including dot) (example: `'.js'`).

###### Signature

```ts
extname(): undefined | string;
```

###### Returns

`undefined` | `string`

Inherited from: VFile.extname

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:135

Set the extname (including dot) (example: `'.js'`).

Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
on windows).
Cannot be set if there’s no `path` yet.

###### Signature

```ts
extname(arg: undefined | string): void;
```

###### Parameters

| Name  | Type        |
| :---- | :---------- | -------- |
| `arg` | `undefined` | `string` |

###### Returns

`void`

Inherited from: VFile.extname

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:131

Inherited from: VFile.extname

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:131 node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:135

##### `path`

Get the full path (example: `'~/index.min.js'`).

###### Signature

```ts
path(): string;
```

###### Returns

`string`

Inherited from: VFile.path

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:101

Set the full path (example: `'~/index.min.js'`).

Cannot be nullified.
You can set a file URL (a `URL` object with a `file:` protocol) which will
be turned into a path with `url.fileURLToPath`.

###### Signature

```ts
path(arg: string): void;
```

###### Parameters

| Name  | Type     |
| :---- | :------- |
| `arg` | `string` |

###### Returns

`void`

Inherited from: VFile.path

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:95

Inherited from: VFile.path

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:95 node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:101

##### `stem`

Get the stem (basename w/o extname) (example: `'index.min'`).

###### Signature

```ts
stem(): undefined | string;
```

###### Returns

`undefined` | `string`

Inherited from: VFile.stem

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:147

Set the stem (basename w/o extname) (example: `'index.min'`).

Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
on windows).
Cannot be nullified (use `file.path = file.dirname` instead).

###### Signature

```ts
stem(arg: undefined | string): void;
```

###### Parameters

| Name  | Type        |
| :---- | :---------- | -------- |
| `arg` | `undefined` | `string` |

###### Returns

`void`

Inherited from: VFile.stem

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:143

Inherited from: VFile.stem

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:143 node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:147

#### Methods

##### `fail()`

Create a fatal error associated with the file.

Its `fatal` is set to `true` and `file` is set to the current file path.
Its added to `file.messages`.

> 👉 **Note**: a fatal error means that a file is no longer processable.

###### Throws

Message.

###### Signature

```ts
fail(reason: string | VFileMessage | Error, place?: null | Node<Data> | NodeLike | Position | Point, origin?: null | string): never;
```

###### Parameters

| Name      | Type     | Description    |
| :-------- | :------- | :------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------- | ----------------------------------------- |
| `reason`  | `string` | `VFileMessage` | `Error`                                                                                      | Reason for message, uses the stack and message of the error if given. |
| `place?`  | `null`   | `Node`<`Data`> | `NodeLike`                                                                                   | `Position`                                                            | `Point` | Place in file where the message occurred. |
| `origin?` | `null`   | `string`       | Place in code where the message originates (example: `'my-package:my-rule'` or `'my-rule'`). |

###### Returns

`never`

Message.

Inherited from: VFile.fail

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:220

##### `info()`

Create an info message associated with the file.

Its `fatal` is set to `null` and `file` is set to the current file path.
Its added to `file.messages`.

###### Signature

```ts
info(reason: string | VFileMessage | Error, place?: null | Node<Data> | NodeLike | Position | Point, origin?: null | string): VFileMessage;
```

###### Parameters

| Name      | Type     | Description    |
| :-------- | :------- | :------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------- | ----------------------------------------- |
| `reason`  | `string` | `VFileMessage` | `Error`                                                                                      | Reason for message, uses the stack and message of the error if given. |
| `place?`  | `null`   | `Node`<`Data`> | `NodeLike`                                                                                   | `Position`                                                            | `Point` | Place in file where the message occurred. |
| `origin?` | `null`   | `string`       | Place in code where the message originates (example: `'my-package:my-rule'` or `'my-rule'`). |

###### Returns

`VFileMessage`

Message.

Inherited from: VFile.info

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:195

##### `message()`

Create a warning message associated with the file.

Its `fatal` is set to `false` and `file` is set to the current file path.
Its added to `file.messages`.

###### Signature

```ts
message(reason: string | VFileMessage | Error, place?: null | Node<Data> | NodeLike | Position | Point, origin?: null | string): VFileMessage;
```

###### Parameters

| Name      | Type     | Description    |
| :-------- | :------- | :------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------- | ----------------------------------------- |
| `reason`  | `string` | `VFileMessage` | `Error`                                                                                      | Reason for message, uses the stack and message of the error if given. |
| `place?`  | `null`   | `Node`<`Data`> | `NodeLike`                                                                                   | `Position`                                                            | `Point` | Place in file where the message occurred. |
| `origin?` | `null`   | `string`       | Place in code where the message originates (example: `'my-package:my-rule'` or `'my-rule'`). |

###### Returns

`VFileMessage`

Message.

Inherited from: VFile.message

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:174

##### `toString()`

Serialize the file.

###### Signature

```ts
toString(encoding?: null | BufferEncoding): string;
```

###### Parameters

| Name        | Type   | Description      |
| :---------- | :----- | :--------------- | ------------------------------------------------------------------------------------- |
| `encoding?` | `null` | `BufferEncoding` | Character encoding to understand `value` as when it’s a `Buffer` (default: `'utf8'`). |

###### Returns

`string`

Serialized file.

Inherited from: VFile.toString

Defined in: node_modules/.pnpm/vfile\@5.3.7/node_modules/vfile/lib/index.d.ts:157

---

### `Options`

#### Properties

##### `include?`

> `string`[] | `RegExp`[] | (`key`: `string`) => `boolean` | `"all"` | `"allWithDocumentXML"`

Include only the specified files on the `data` attribute of the VFile.
This may be useful if you want to only do something with a subset of the files in the docx file, and don't intend to use 'reoff-stringify' to turn the VFile back into a docx file.

- If an array of strings or regexps is passed, only files that match one of the values will be included.
- If a function is passed, it will be called for each file and should return true to include the file.
- If the value is 'all', almost all files will be included, except for 'word/document.xml', as that already is the root of the VFile.
- If the value is 'allWithDocumentXML', all files will be included, including `word/document.xml`, even though that is already the root of the VFile. Useful if you really want to mimic the original docx file.

You should keep it at the default value if you intend to use 'reoff-stringify' to turn the VFile back into a docx file.

###### Default

'all'

Defined in: [src/lib/docx-to-vfile-unzipit.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L30)

##### `withoutMedia?`

> `boolean`

Whether or not to include media in the VFile.

By default, images are included on the `data.media` attribute of the VFile as an object of ArrayBuffers, which are accessible both client and serverside.

###### Default

false

Defined in: [src/lib/docx-to-vfile-unzipit.ts:16](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L16)

---

### `XMLOrRelsString`

> `${string}.xml` | `${string}.rels`

Defined in: [src/lib/docx-to-vfile-unzipit.ts:71](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L71)

## Compatibility

## Security

`docx-to-vfile` currently does not read macros, so it is not vulnerable to potential security issues with macros.

It does not however do any other security checks, so it is possible that maliciously crafted docx files could cause problems when e.g. parsed with `rehype`.

## Related

- [`reoff-parse`][reoff-parse] — Parse the output of `docx-to-vfile` into a `VFile` with an `ooxast` tree.

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
