> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# reoff-infer-headings

Plugin for `reoff` that turns a single bolded or emphasized line into a heading

## Contents

*   [reoff-infer-headings](#reoff-infer-headings)
    *   [Contents](#contents)
    *   [What is this?](#what-is-this)
    *   [When should I use this?](#when-should-i-use-this)
    *   [Install](#install)
    *   [Use](#use)
    *   [API](#api)
    *   [Syntax tree](#syntax-tree)
    *   [Compatibility](#compatibility)
    *   [Security](#security)
    *   [Related](#related)
    *   [Contribute](#contribute)
    *   [License](#license)

## What is this?

This is a plugin for [reoff][reoff] that turns a single bolded or emphasized line into a heading.
Often times people do not use headings in their documents, but instead use bolded or emphasized lines to indicate a heading.
This plugin turns those lines into headings.

You can configure the styles and elements that are used for headings.

This plugin is a focused subset of [reoff-markup-to-style](https://github.com/TrialAndErrorOrg/reoff-markup-to-style) that only handles headings.

## When should I use this?

If you want to turn bolded or emphasized lines in a `docx` file into headings.

If you want to turn different kinds of markup into arbitrary styles, use [reoff-markup-to-style](https://github.com/TrialAndErrorOrg/reoff-markup-to-style).

If you want more fine-grained control over when and where markup is turned into styles and are handling the `[ooxast][ooxast]` syntax tree yourself, use [ooxast-util-markup-to-style](https://github.com/TrialAndErrorOrg/ooxast-util-markup-to-style).

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add reoff-infer-headings
# or with yarn
# yarn add reoff-infer-headings
# or with npm
# npm install reoff-infer-headings
```

## Use

```ts
```

## API

***

### `default()`

`reoff` plugin for inferring paragraph styles from the markup of the underlying text.

By default, this plugin will infer the following styles:

*   `w:b` -> `Heading 1`
*   `w:i` -> `Heading 2`

This plugin can be configured to infer other styles as well.

#### Example

```ts
const options: Options = [
// find all paragraphs that are bold and larger than 24pt and make it a Title
 {
  markup: (rPr) => rPr['w:b'] && rPr['w:sz'] && rPr['w:sz']['w:val'] > 24,
  style: 'Title',
 },
// find all paragraphs that are strikethrough text and make it a Comment
 {
  markup: 'w:strike',
  style: 'Comment',
 },
]
```

#### Signature

```ts
default(options: Options = ...): ReturnType<Plugin<[Options?] | void[], Root, Root>>;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`Options`](modules.md#options) | Plugin options. |

#### Returns

`ReturnType`<`Plugin`<[`Options?`] | `void`[], `Root`, `Root`>>

A reoff plugin.

Defined in:  reoff/reoff-markup-to-style/src/lib/reoff-markup-to-style.ts:35

***

### `Options`

> `Option`[]

#### Example

```ts
const options: Options = [
// find all paragraphs that are bold and larger than 24pt and make it a Title
 {
  markup: (rPr) => rPr['w:b'] && rPr['w:sz'] && rPr['w:sz']['w:val'] > 24,
  style: 'Title',
 },
// find all paragraphs that are strikethrough text and make it a Comment
 {
  markup: 'w:strike',
  style: 'Comment',
 },
]
```

Defined in:  [ooxast/ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts:80](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts#L80)

## Syntax tree

This plugin uses the [ooxast][ooxast] syntax tree.

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

[reoff-infer-headings]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff-infer-headings
