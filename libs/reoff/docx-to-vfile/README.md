> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# docx-to-vfile

[![npm version](https://badge.fury.io/js/docx-to-vfile.svg)](https://badge.fury.io/js/docx-to-vfile) [![npm downloads](https://img.shields.io/npm/dm/docx-to-vfile.svg)](https://www.npmjs.com/package/docx-to-vfile)

Reads a `.docx` file and stores its components in vfile format to be processed by other tools, like [`reoff-parse`](https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff/reoff-parse).

Currently extremely dumb and just stores it all in memory, no streams for you.
File reading does happen in streams.

Based on [docxtract](https://github.com/sorleone/doxtract/)

## Contents

*   [docx-to-vfile](#docx-to-vfile)
    *   [Contents](#contents)
    *   [What is this?](#what-is-this)
    *   [When should I use this?](#when-should-i-use-this)
    *   [Install](#install)
    *   [Use](#use)
        *   [In Node](#in-node)
        *   [In the browser](#in-the-browser)
        *   [Output](#output)
    *   [API](#api)
        *   [`docxToVFile()`](#docxtovfile)
            *   [Signature](#signature)
            *   [Parameters](#parameters)
            *   [Returns](#returns)
        *   [`DocxData`](#docxdata)
            *   [Hierarchy](#hierarchy)
            *   [Indexable](#indexable)
            *   [Properties](#properties)
                *   [`media`](#media)
                    *   [Index signature](#index-signature)
                    *   [Type declaration](#type-declaration)
                *   [`relations`](#relations)
                    *   [Index signature](#index-signature-1)
                    *   [Type declaration](#type-declaration-1)
        *   [`DocxVFile`](#docxvfile)
            *   [Hierarchy](#hierarchy-1)
            *   [Properties](#properties-1)
                *   [`cwd`](#cwd)
                *   [`data`](#data)
                *   [`history`](#history)
                *   [`map`](#map)
                *   [`messages`](#messages)
                *   [`result`](#result)
                *   [`stored`](#stored)
                *   [`value`](#value)
            *   [Accessors](#accessors)
                *   [`basename`](#basename)
                    *   [Signature](#signature-1)
                    *   [Returns](#returns-1)
                    *   [Signature](#signature-2)
                    *   [Parameters](#parameters-1)
                    *   [Returns](#returns-2)
                *   [`dirname`](#dirname)
                    *   [Signature](#signature-3)
                    *   [Returns](#returns-3)
                    *   [Signature](#signature-4)
                    *   [Parameters](#parameters-2)
                    *   [Returns](#returns-4)
                *   [`extname`](#extname)
                    *   [Signature](#signature-5)
                    *   [Returns](#returns-5)
                    *   [Signature](#signature-6)
                    *   [Parameters](#parameters-3)
                    *   [Returns](#returns-6)
                *   [`path`](#path)
                    *   [Signature](#signature-7)
                    *   [Returns](#returns-7)
                    *   [Signature](#signature-8)
                    *   [Parameters](#parameters-4)
                    *   [Returns](#returns-8)
                *   [`stem`](#stem)
                    *   [Signature](#signature-9)
                    *   [Returns](#returns-9)
                    *   [Signature](#signature-10)
                    *   [Parameters](#parameters-5)
                    *   [Returns](#returns-10)
            *   [Methods](#methods)
                *   [`fail()`](#fail)
                    *   [Throws](#throws)
                    *   [Signature](#signature-11)
                    *   [Parameters](#parameters-6)
                    *   [Returns](#returns-11)
                *   [`info()`](#info)
                    *   [Signature](#signature-12)
                    *   [Parameters](#parameters-7)
                    *   [Returns](#returns-12)
                *   [`message()`](#message)
                    *   [Signature](#signature-13)
                    *   [Parameters](#parameters-8)
                    *   [Returns](#returns-13)
                *   [`toString()`](#tostring)
                    *   [Signature](#signature-14)
                    *   [Parameters](#parameters-9)
                    *   [Returns](#returns-14)
        *   [`Options`](#options)
            *   [Properties](#properties-2)
                *   [`include?`](#include)
                    *   [Default](#default)
                *   [`withoutMedia?`](#withoutmedia)
                    *   [Default](#default-1)
        *   [`XMLOrRelsString`](#xmlorrelsstring)
    *   [Compatibility](#compatibility)
    *   [Security](#security)
    *   [Related](#related)
    *   [Contribute](#contribute)
    *   [License](#license)

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

***

### `docxToVFile()`

Takes a docx file as a Blob or File and returns a VFile with the contents of the document.xml file as the root, and the contents of the other xml files as data.

#### Signature

```ts
docxToVFile(file: string | Blob | ArrayBuffer | File | Buffer, userOptions?: Options): Promise<VFile>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | `Blob` | `ArrayBuffer` | `File` | `Buffer` | The docx file as a Blob or File |
| `userOptions?` | [`Options`](modules.md#options) | - |

#### Returns

`Promise`<`VFile`>

A VFile with the contents of the document.xml file as the root, and the contents of the other xml files as data.

Defined in:  [lib/docx-to-vfile-unzipit.ts:91](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L91)

***

### `DocxVFileData`

The data attribute of the VFile will contain the following:

#### Indexable

[`key`: [`XMLOrRelsString`](modules.md#xmlorrelsstring)]: `string` | `undefined`

#### Properties

##### `media`

> `object`

The media files in the .docx file
Possibly undefined only to be compatible with the VFile interface

###### Since

0.5.0 - Added media, removed images

###### Index signature

[`key`: `string`]: `Blob`

###### Type declaration

Defined in:  [lib/docx-to-vfile-unzipit.ts:53](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L53)

##### `parsed?`

> `object`

The parsed .xml files in the .docx file

Usually added by `reoff-parse`

###### Index signature

[`key`: [`XMLOrRelsString`](modules.md#xmlorrelsstring)]: `Root` | `undefined`

###### Type declaration

Defined in:  [lib/docx-to-vfile-unzipit.ts:72](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L72)

##### `relations?`

> `object`

```ts
{
    document: {
    };
    endnotes?: {
    };
    footnotes?: {
    };
}
```

The relations between the .xml files in the .docx file
Possibly undefined only to be compatible with the VFile interface

###### Since

0.7.0 - Added relations.footnotes and relations.endnotes. `relations.document` is now an alias for `relations`. This now gets added by `reoff-parse`.

###### Type declaration

| Member | Type |
| :------ | :------ |
| `document` | {  } |
| `endnotes`? | {  } |
| `footnotes`? | {  } |

Defined in:  [lib/docx-to-vfile-unzipit.ts:61](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L61)

***

### `Options`

#### Hierarchy

*   [`OptionsWithFetchConfig`](modules.md#optionswithfetchconfig)

#### Properties

##### `include?`

> `string`[] | `RegExp`[] | (`key`: `string`) => `boolean` | `"all"` | `"allWithDocumentXML"`

Include only the specified files on the `data` attribute of the VFile.
This may be useful if you want to only do something with a subset of the files in the docx file, and don't intend to use 'reoff-stringify' to turn the VFile back into a docx file.

*   If an array of strings or regexps is passed, only files that match one of the values will be included.
*   If a function is passed, it will be called for each file and should return true to include the file.
*   If the value is 'all', almost all files will be included, except for 'word/document.xml', as that already is the root of the VFile.
*   If the value is 'allWithDocumentXML', all files will be included, including `word/document.xml`, even though that is already the root of the VFile. Useful if you really want to mimic the original docx file.

You should keep it at the default value if you intend to use 'reoff-stringify' to turn the VFile back into a docx file.

###### Default

'all'

Defined in:  [lib/docx-to-vfile-unzipit.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L29)

##### `withoutMedia?`

> `boolean`

Whether or not to include media in the VFile.

By default, images are included on the `data.media` attribute of the VFile as an object of Blobs, which are accessible both client and serverside.

###### Default

false

Defined in:  [lib/docx-to-vfile-unzipit.ts:15](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L15)

***

### `OptionsWithFetchConfig`

#### Hierarchy

*   [`Options`](modules.md#options).**OptionsWithFetchConfig**

#### Properties

##### `fetchConfig?`

> `RequestInit`

The config to pass to fetch, for e.g. authorization headers.

Defined in:  [lib/docx-to-vfile-unzipit.ts:36](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L36)

##### `include?`

> `string`[] | `RegExp`[] | (`key`: `string`) => `boolean` | `"all"` | `"allWithDocumentXML"`

Include only the specified files on the `data` attribute of the VFile.
This may be useful if you want to only do something with a subset of the files in the docx file, and don't intend to use 'reoff-stringify' to turn the VFile back into a docx file.

*   If an array of strings or regexps is passed, only files that match one of the values will be included.
*   If a function is passed, it will be called for each file and should return true to include the file.
*   If the value is 'all', almost all files will be included, except for 'word/document.xml', as that already is the root of the VFile.
*   If the value is 'allWithDocumentXML', all files will be included, including `word/document.xml`, even though that is already the root of the VFile. Useful if you really want to mimic the original docx file.

You should keep it at the default value if you intend to use 'reoff-stringify' to turn the VFile back into a docx file.

###### Default

'all'

Inherited from: [Options](modules.md#options).[include](modules.md#include)

Defined in:  [lib/docx-to-vfile-unzipit.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L29)

##### `withoutMedia?`

> `boolean`

Whether or not to include media in the VFile.

By default, images are included on the `data.media` attribute of the VFile as an object of Blobs, which are accessible both client and serverside.

###### Default

false

Inherited from: [Options](modules.md#options).[withoutMedia](modules.md#withoutmedia)

Defined in:  [lib/docx-to-vfile-unzipit.ts:15](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L15)

***

### `XMLOrRelsString`

> `${string}.xml` | `${string}.rels`

Defined in:  [lib/docx-to-vfile-unzipit.ts:82](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/docx-to-vfile/src/lib/docx-to-vfile-unzipit.ts#L82)

## Compatibility

## Security

`docx-to-vfile` currently does not read macros, so it is not vulnerable to potential security issues with macros.

It does not however do any other security checks, so it is possible that maliciously crafted docx files could cause problems when e.g. parsed with `rehype`.

## Related

*   [`reoff-parse`][reoff-parse] — Parse the output of `docx-to-vfile` into a `VFile` with an `ooxast` tree.

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
