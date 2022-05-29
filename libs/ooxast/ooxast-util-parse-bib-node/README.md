# ooxast-util-parse-bib

Find and convert raw references to CSL-JSON.

Takes a bibliography array (usually of `w:p`s) and parses it using `anystyle` to CSL.

You need to either: set up an anystyle API on your own (very easy to do, just click the "Deploy to vercel" button below for a version identical to the one used in this repo) or provide the path to the `anystyle` executable.

## Contents

- [ooxast-util-parse-bib](#ooxast-util-parse-bib)
  - [Contents](#contents)
  - [What is this?](#what-is-this)
  - [When should I use this?](#when-should-i-use-this)
  - [Install](#install)
    - [Web API](#web-api)
    - [Locally](#locally)
  - [Use](#use)
    - [Options](#options)
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

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, or 16.0+), install with [yarn](https://classic.yarnpkg.com/en/docs/cli/add)

```sh
yarn add ooxast-util-parse-bib
```

or with [npm](https://docs.npmjs.com/cli/install)

```sh
npm install ooxast-util-parse-bib
```

### Web API

### Locally

You can install anystyle by first installing Ruby and then doing `gem install anystyle`.

## Use

### Options

```ts
parseBib(tree: OoxastTree, options:{
  apiUrl?: string,
  apiParams?: {param:string}[],
  anyStylePath?: string
})
```

If no options are provided it will try to use Anystyle on your path, and probably fail.

## API

You can call it like so. You probably want to first parse a .docx file to an `ooxast`-tree like so:

```ts
import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import { readFile } from 'fs/promises'
import { unified } from 'unified'
import { parseBib } from 'ooxast-util-parse-bib'

async function main() {
  // If in node, get the correct docx uintarray like so
  const docxBuff = await readFile('some/path/to/a/file.docx')
  const docxArr = new Uint8Array(docxBuff)

  // if in the browser, find some way
  // to read and convert a docxfile to uintarray

  const docxVFile = await docxToVFile(docxArr)

  const processor = unified().use(reoffParse)

  const docxTree = processor.parse(docxVFile)

  return parseBib(docxTree, {
    // when using your own web api
    apiUrl: 'https://someapiyousetup.vercel.app/api',
    //apiParams: {...}

    // when using it locally
    // if no options are entered, it will try to use
    // anystyle on your path, and will probably fail
    anyStylePath: '/usr/bin/anystyle',
  })
}
```

## Syntax tree

## Types

## Compatibility

## Security

## Related

## Contribute

## License

GPL-3-0-or-later © Thomas F. K. Jorna

[unified]: https://unifiedjs.com
[unifiedgh]: https://github.com/unifiedjs/unified
[xast-from-xml]: https://github.com/syntax-tree/xast-util-from-xml
[rehype]: https://github.com/rehypejs/rehype
[rejour]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour
[rejour-parse]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-parse
[rejour-stringify]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-stringify
[rejour-move-abstract]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-move-abstract
[rejour-meta]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-meta
[rejour-relatex]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-relatex
[relatex]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex
[ooxast-util-to-jast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex/ooxast-util-to-jast
[jast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/jast
[jast-util-to-texast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/jast-util-to-texast
[jastscript]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/jastscript
[texast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex/texast
[texast-util-to-latex]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex/texast-util-to-latex
[hast]: https://github.com/syntax-tree/hast
[xast]: https://github.com/syntax-tree/xast
[mdast]: https://github.com/syntax-tree/mdast
[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown
[latex-utensils]: https://github.com/tamuratak/latex-utensils
[latexjs]: https://github.com/latexjs/latexjs
[reoff]: https://github.com/journaloftrialanderror/jote/tree/main/libs/reoff
[reoff-parse]: https://github.com/journaloftrialanderror/jote/tree/main/libs/reoff/reoff-parse
[reoff-rejour]: https://github.com/journaloftrialanderror/jote/tree/main/libs/reoff/reoff-rejour
[ooxast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/ooxast/ooxast
[ooxast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/ooxast/ooxast-util-to-jast
