> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# html-to-notion-blocks

[![npm version](https://img.shields.io/npm/v/html-to-notion-blocks.svg)](https://www.npmjs.com/package/html-to-notion-blocks)
[![npm downloads](https://img.shields.io/npm/dm/html-to-notion-blocks.svg)](https://www.npmjs.com/package/html-to-notion-blocks)

Transform HTML to Notion blocks

## Contents

*   [html-to-notion-blocks](#html-to-notion-blocks)
    *   [Contents](#contents)
    *   [What is this?](#what-is-this)
    *   [When should I use this?](#when-should-i-use-this)
    *   [Install](#install)
    *   [Use](#use)
    *   [API](#api)
        *   [`htmlToNotion(html: string, options?: Options): NotionBlock[]`](#htmltonotionhtml-string-options-options-notionblock)
            *   [Parameters](#parameters)
                *   [`html`](#html)
                *   [`options`](#options)
    *   [Security](#security)
    *   [Related](#related)
    *   [License](#license)

## What is this?

A small library that transforms HTML to Notion blocks. It is based on [rehype-to-notion][rehype-to-notion].

## When should I use this?

You want a simple way to convert HTML to Notion blocks. If you want to control the conversion process, you should use [rehype-to-notion][rehype-to-notion] instead.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add html-to-notion-blocks
# or with yarn
# yarn add html-to-notion-blocks
# or with npm
# npm install html-to-notion-blocks
```

## Use

```ts
import { htmlToNotion } from 'html-to-notion-blocks'

const html = '<p>Hello world!</p>'

const notionBlocks = htmlToNotion(html)

console.log(notionBlocks)
// [
//   {
//     object: 'block',
//     type: 'paragraph',
//     paragraph: {
//       text: [
//         {
//           type: 'text',
//           text: {
//             content: 'Hello world!',
//             link: null
//           },
//           annotations: {
//             bold: false,
//             italic: false,
//             strikethrough: false,
//             underline: false,
//             code: false,
//             color: 'default'
//           },
//           plain_text: 'Hello world!',
//           href: null
//         }
//       ]
//     }
//   }
// ]
```

## API

***

### `htmlToNotion()`

#### Signature

```ts
htmlToNotion(html: string, options?: Options): BlockObjectRequest[];
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `html` | `string` |
| `options?` | `Options` |

#### Returns

`BlockObjectRequest`[]

Defined in:  [lib/html-to-notion-blocks.ts:5](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/notion/html-to-notion-blocks/src/lib/html-to-notion-blocks.ts#L5)

## Security

Use of `html-to-notion-blocks` can open you up to a [cross-site scripting (XSS)][xss] attack. If you are processing user input, be sure to use a HTML sanitizer, such as [rehype-sanitize][rehype-sanitize].

## Related

*   [rehype-to-notion][rehype-to-notion]
    — Transform HTML to Notion blocks
*   [rehype-sanitize][rehype-sanitize]
*   [rehype][rehype]
    — HTML processor powered by plugins part of the [unified][unified] collective

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

[rehype-to-notion]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/notion/rehype-to-notion

[html-to-notion-blocks]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/notion/html-to-notion-blocks
