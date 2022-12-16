# rehype-notion

[![npm version](https://img.shields.io/npm/v/rehype-notion.svg)](https://www.npmjs.com/package/rehype-notion)
[![npm downloads](https://img.shields.io/npm/dm/rehype-notion.svg)](https://www.npmjs.com/package/rehype-notion)

Plugin for `rehype` to turn HTML into Notion blocks

## Contents

- [rehype-notion](#rehype-notion)
  - [Contents](#contents)
  - [What is this?](#what-is-this)
  - [When should I use this?](#when-should-i-use-this)
  - [Install](#install)
  - [Use](#use)
  - [API](#api)
    - [`rehypeNotion(options?: Options): Transformer`](#rehypenotionoptions-options-transformer)
      - [Parameters](#parameters)
        - [`options` (`Options?`) — Options](#options-options--options)
          - [`hastToMdastOptions` (`HastToMdastOptions?`) — Options for `hastToMdast`](#hasttomdastoptions-hasttomdastoptions--options-for-hasttomdast)
          - [`mdastToMarkdownOptions` (`MdastToMarkdownOptions?`) — Options for `mdastToMarkdown`](#mdasttomarkdownoptions-mdasttomarkdownoptions--options-for-mdasttomarkdown)
          - [`markdownToNotionOptions` (`MarkdownToNotionOptions?`) — Options for `markdownToNotion`](#markdowntonotionoptions-markdowntonotionoptions--options-for-markdowntonotion)
  - [Security](#security)
  - [Related](#related)
  - [License](#license)

## What is this?

A compiler plugin for [rehype][rehype] that transforms a `[hast][hast]` syntax tree into Notion blocks.

## When should I use this?

You want to convert HTML to Notion blocks but want control over the conversion process. If you just want to convert HTML to Notion blocks, you should use [html-to-notion-blocks][html-to-notion-blocks] instead.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, or 18.0+).

```sh
pnpm add rehype-notion
# or
# yarn add html-to-notion-blocks
# or
# npm install html-to-notion-blocks
```

## Use

```ts
import { unified } from 'unified'
import { parse } from 'rehype-parse'
import { rehypeNotion } from 'rehype-notion'

const html = `
  <h1>Heading</h1>
  <p>Paragraph</p>
`

const notionBlocks = unified()
  .use(parse)
  .use(rehypeNotion)
  .processSync(html).result

// or with options and async

const vfile = await unified()
  .use(parse)
  .use(rehypeNotion, {
    hastToMdastOptions: {...}
    mdastToMarkdownOptions: {...}
    markdownToNotionOptions: {...}
  })
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

This package exports a default function that can be used as a plugin for [rehype][rehype].

### `rehypeNotion(options?: Options): Transformer`

Transform a hast syntax tree into Notion blocks.

#### Parameters

##### `options` (`Options?`) — Options

```ts
interface Options {
  hastToMdastOptions?: HastToMdastOptions
  mdastToMarkdownOptions?: MdastToMarkdownOptions
  markdownToNotionOptions?: MarkdownToNotionOptions
}
```

###### `hastToMdastOptions` (`HastToMdastOptions?`) — Options for `hastToMdast`

```ts
interface HastToMdastOptions {
  /**
   * Keep line endings when collapsing whitespace.
   * The default collapses to a single space.
   */
  newlines?: boolean | undefined
  /**
   * Value to use for a checked checkbox or radio input.
   */
  checked?: string | undefined
  /**
   * Value to use for an unchecked checkbox or radio input.
   */
  unchecked?: string | undefined
  /**
   * List of quotes to use.
   * Each value can be one or two characters.
   * When two, the first character determines the opening quote and the second
   * the closing quote at that level.
   * When one, both the opening and closing quote are that character.
   * The order in which the preferred quotes appear determines which quotes to
   * use at which level of nesting.
   * So, to prefer `‘’` at the first level of nesting, and `“”` at the second,
   * pass `['‘’', '“”']`.
   * If `<q>`s are nested deeper than the given amount of quotes, the markers
   * wrap around: a third level of nesting when using `['«»', '‹›']` should
   * have double guillemets, a fourth single, a fifth double again, etc.
   */
  quotes?: string[] | undefined
  /**
   * Whether the given tree represents a complete document.
   * Applies when the `tree` is a `root` node.
   * When the tree represents a complete document, then things are wrapped in
   * paragraphs when needed, and otherwise they’re left as-is.
   * The default checks for whether there’s mixed content: some phrasing nodes
   * *and* some non-phrasing nodes.
   */
  document?: boolean | undefined
  /**
   * Object mapping tag names or node types to functions handling the
   * corresponding nodes.
   * See `handlers/` for examples.
   *
   * In a handler, you have access to `h`, which should be used to create mdast
   * nodes from hast nodes.
   * On `h`, there are several fields that may be of interest.
   * Most interesting of them is `h.wrapText`, which is `true` if the mdast
   * content can include newlines, and `false` if not (such as in headings or
   * table cells).
   */
  handlers?: Record<string, Handle> | undefined
}
```

###### `mdastToMarkdownOptions` (`MdastToMarkdownOptions?`) — Options for `mdastToMarkdown`

See `mdast-util-to-markdown` for more information.

```ts
interface MdastToMarkdownOptions = {
  bullet?: '-' | '*' | '+' | undefined
  bulletOther?: '-' | '*' | '+' | undefined
  bulletOrdered?: '.' | ')' | undefined
  bulletOrderedOther?: '.' | ')' | undefined
  closeAtx?: boolean | undefined
  emphasis?: '*' | '_' | undefined
  fence?: '~' | '`' | undefined
  fences?: boolean | undefined
  incrementListMarker?: boolean | undefined
  listItemIndent?: 'tab' | 'one' | 'mixed' | undefined
  quote?: '"' | "'" | undefined
  resourceLink?: boolean | undefined
  rule?: '-' | '*' | '_' | undefined
  ruleRepetition?: number | undefined
  ruleSpaces?: boolean | undefined
  setext?: boolean | undefined
  strong?: '*' | '_' | undefined
  tightDefinitions?: boolean | undefined
  extensions?: Options[] | undefined
  handlers?: Handlers | undefined
  join?: Join[] | undefined
  unsafe?: Unsafe[] | undefined
  tableCellPadding?: boolean | undefined
  tablePipeAlign?: boolean | undefined
  stringLength?: ((value: string) => number) | undefined
}
```

###### `markdownToNotionOptions` (`MarkdownToNotionOptions?`) — Options for `markdownToNotion`

```ts
interface MarkdownToNotionOptions {
  /**
   * Define how to behave when an item exceeds the Notion's request limits.
   * @see https://developers.notion.com/reference/request-limits#limits-for-property-values
   */
  notionLimits?: {
    /**
     * Whether the excess items or characters should be automatically truncated where possible.
     * If set to `false`, the resulting item will not be compliant with Notion's limits.
     * Please note that text will be truncated only if the parser is not able to resolve
     * the issue in any other way.
     */
    truncate?: boolean
    /** The callback for when an item exceeds Notion's limits. */
    onError?: (err: Error) => void
  }
  /** Whether to render invalid images as text */
  strictImageUrls?: boolean
}
```

## Security

Use of `rehypeNotion` can open you up to a [cross-site scripting (XSS)][xss] attack. If you are processing user input, be sure to use a HTML sanitizer, such as [rehype-sanitize][rehype-sanitize].

## Related

- [html-to-notion-blocks][html-to-notion-blocks]
  - Convert HTML to Notion blocks without constructing the procssing pipeline yourself
- [@tryfabric/martian](https://github.com/@tryfabric/martian)
  - Convert Markdown to Notion blocks using a simple API
- [rehype-sanitize][rehype-sanitize]
- [rehype][rehype]
  — HTML processor powered by plugins part of the [unified][unified] collective

## License

GPL-3.0-or-later © Thomas F. K. Jorna

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
