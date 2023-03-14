> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# rehype-notion

[![npm version](https://badge.fury.io/js/rehype-notion.svg)](https://badge.fury.io/js/rehype-notion) [![npm downloads](https://img.shields.io/npm/dm/rehype-notion.svg)](https://www.npmjs.com/package/rehype-notion)

[![npm version](https://img.shields.io/npm/v/rehype-notion.svg)](https://www.npmjs.com/package/rehype-notion)
[![npm downloads](https://img.shields.io/npm/dm/rehype-notion.svg)](https://www.npmjs.com/package/rehype-notion)

Plugin for `rehype` to turn HTML into Notion blocks

## Contents

*   [rehype-notion](#rehype-notion)
    *   [Contents](#contents)
    *   [What is this?](#what-is-this)
    *   [When should I use this?](#when-should-i-use-this)
    *   [Install](#install)
    *   [Use](#use)
    *   [API](#api)
        *   [`default()`](#default)
            *   [Signature](#signature)
            *   [Parameters](#parameters)
            *   [Returns](#returns)
        *   [`Options`](#options)
            *   [Properties](#properties)
                *   [`hastToMdastOptions?`](#hasttomdastoptions)
                *   [`markdownToNotionOptions?`](#markdowntonotionoptions)
                *   [`mdastToMarkdownOptions?`](#mdasttomarkdownoptions)
        *   [`Block`](#block)
    *   [Security](#security)
    *   [Related](#related)
    *   [License](#license)

## What is this?

A compiler plugin for [rehype][rehype] that transforms a `[hast][hast]` syntax tree into Notion blocks.

## When should I use this?

You want to convert HTML to Notion blocks but want control over the conversion process. If you just want to convert HTML to Notion blocks, you should use [html-to-notion-blocks][html-to-notion-blocks] instead.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add rehype-notion
# or with yarn
# yarn add rehype-notion
# or with npm
# npm install rehype-notion
```

## Use

```ts
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeNotion from 'rehype-notion'

const html = `
  <h1>Heading</h1>
  <p>Paragraph</p>
`

const notionBlocks = unified().use(rehypeParse).use(rehypeNotion).processSync(html).result

// or with options and async

const vfile = await unified()
  .use(parse)
  .use(
    rehypeNotion,
    //  {
    //    hastToMdastOptions: {...}
    //    mdastToMarkdownOptions: {...}
    //    markdownToNotionOptions: {...}
    //  }
  )
  .process(html).result

const notionBlocks = vfile.result

console.log(notionBlocks)
// [
//   {
//     object: 'block',
//     type: 'heading_1',
//     heading_1: {
//       rich_text: [
//         {
//           annotations: {
//             bold: false,
//             italic: false,
//             strikethrough: false,
//             underline: false,
//             code: false,
//             color: 'default'
//           },
//           text: {
//             content: 'Heading',
//             link: null
//           }
//           type: 'text',
//         }
//       ]
//     }
//   },
//   {
//     object: 'block',
//     type: 'paragraph',
//     paragraph: {
//       rich_text: [
//         {
//           annotations: {
//             bold: false,
//             italic: false,
//             strikethrough: false,
//             underline: false,
//             code: false,
//             color: 'default'
//           },
//           text: {
//             content: 'Paragraph',
//             link: null
//           }
//           type: 'text'
//         }
//       ]
//     }
//   }
// ]
```

## API

***

### `default()`

A plugin is a function.
It configures the processor and in turn can receive options.
Plugins can configure processors by interacting with parsers and compilers
(at `this.Parser` or `this.Compiler`) or by specifying how the syntax tree
is handled (by returning a `Transformer`).

#### Signature

```ts
default(this: Processor<void, Root, Root, BlockObjectRequest[]> | Processor<void, Comment, Comment, BlockObjectRequest[]> | Processor<void, DocType, DocType, BlockObjectRequest[]> | Processor<void, Element, Element, BlockObjectRequest[]> | Processor<void, Text, Text, BlockObjectRequest[]>, ...settings: [Options] | [void] | []): void;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Processor`<`void`, `Root`, `Root`, `BlockObjectRequest`[]> | `Processor`<`void`, `Comment`, `Comment`, `BlockObjectRequest`[]> | `Processor`<`void`, `DocType`, `DocType`, `BlockObjectRequest`[]> | `Processor`<`void`, `Element`, `Element`, `BlockObjectRequest`[]> | `Processor`<`void`, `Text`, `Text`, `BlockObjectRequest`[]> | - |
| `...settings` | [[`Options`](modules.md#options)] | [`void`] | [] | Configuration for plugin.   Plugins typically receive one options object, but could receive other and   more values.   Users can also pass a boolean instead of settings: `true` (to turn   a plugin on) or `false` (to turn a plugin off).   When a plugin is turned off, it won’t be called.    When creating your own plugins, please accept only a single object!   It allows plugins to be reconfigured and it helps users to know that every   plugin accepts one options object. |

#### Returns

`void`

Plugins can return a `Transformer` to specify how the syntax tree is
handled.

Defined in:  node\_modules/.pnpm/unified\@10.1.2/node\_modules/unified/index.d.ts:531

***

### `Options`

#### Properties

##### `hastToMdastOptions?`

> `Options`

Defined in:  [src/lib/rehype-notion.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/notion/rehype-notion/src/lib/rehype-notion.ts#L29)

##### `markdownToNotionOptions?`

> `BlocksOptions`

Defined in:  [src/lib/rehype-notion.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/notion/rehype-notion/src/lib/rehype-notion.ts#L31)

##### `mdastToMarkdownOptions?`

> `MdastToMarkdownOptions`

Defined in:  [src/lib/rehype-notion.ts:30](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/notion/rehype-notion/src/lib/rehype-notion.ts#L30)

***

### `Block`

> `AppendBlockChildrenParameters`[`"children"`][`number`]

Defined in:  [src/lib/rehype-notion.ts:13](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/notion/rehype-notion/src/lib/rehype-notion.ts#L13)

## Security

Use of `rehypeNotion` can open you up to a [cross-site scripting (XSS)][xss] attack. If you are processing user input, be sure to use a HTML sanitizer, such as [rehype-sanitize][rehype-sanitize].

## Related

*   [html-to-notion-blocks][html-to-notion-blocks]
    *   Convert HTML to Notion blocks without constructing the procssing pipeline yourself
*   [@tryfabric/martian](https://github.com/@tryfabric/martian)
    *   Convert Markdown to Notion blocks using a simple API
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

[rehype-notion]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/notion/rehype-notion

[html-to-notion-blocks]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/notion/html-to-notion-blocks

[rehype-sanitize]: https://github.com/rehypejs/rehype-sanitize
