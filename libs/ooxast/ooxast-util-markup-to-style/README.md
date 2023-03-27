> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# ooxast-util-markup-to-style

Find certain markup in an ooxast tree and turn it into styles.

## Contents

*   [ooxast-util-markup-to-style](#ooxast-util-markup-to-style)
    *   [Contents](#contents)
    *   [What is this?](#what-is-this)
    *   [When should I use this?](#when-should-i-use-this)
    *   [Install](#install)
    *   [Use](#use)
    *   [API](#api)
        *   [`markupToStyle()`](#markuptostyle)
            *   [Signature](#signature)
            *   [Type parameters](#type-parameters)
            *   [Parameters](#parameters)
            *   [Returns](#returns)
        *   [`Option`](#option)
            *   [Properties](#properties)
                *   [`ignorePunctuation?`](#ignorepunctuation)
                    *   [Default](#default)
                *   [`markup`](#markup)
                    *   [Example](#example)
                    *   [Example](#example-1)
                    *   [Example](#example-2)
                    *   [Example](#example-3)
                *   [`matchAll?`](#matchall)
                    *   [Default](#default-1)
                *   [`matchFull?`](#matchfull)
                    *   [Default](#default-2)
                *   [`style`](#style)
                    *   [Example](#example-4)
        *   [`Options`](#options)
    *   [Syntax tree](#syntax-tree)
    *   [Types](#types)
    *   [Compatibility](#compatibility)
    *   [Security](#security)
    *   [Related](#related)
    *   [Contribute](#contribute)
    *   [License](#license)

## What is this?

This is a small utility function that finds certain markup for text (runs) in an `ooxast` syntax tree and turns it into styles that belong to the parent paragraph.

## When should I use this?

If you want to turn certain markup in an `ooxast` syntax tree into styles, e.g. bolded lines into headings, or all red text into a quote,

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add ooxast-util-markup-to-style
# or with yarn
# yarn add ooxast-util-markup-to-style
# or with npm
# npm install ooxast-util-markup-to-style
```

## Use

## API

***

### `markupToStyle()`

#### Signature

```ts
markupToStyle<I>(tree: I, options: Options = ...): I;
```

#### Type parameters

*   `I` *extends* `P` | `Root` = `Root`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tree` | `I` |
| `options` | [`Options`](modules.md#options) |

#### Returns

`I`

Defined in:  [ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts:87](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts#L87)

***

### `Option`

#### Properties

##### `ignorePunctuation?`

> `boolean`

If punctuation or whitespace should be ignored when matching.

E.g. if `markup: 'w:b'` is specified and only an empty space at the beginning of the paragraph is bold, the style not be applied.
Likewise, if `markup: 'w:b'` is specified and only a period at the end of the paragraph is not bold, the style not be applied.

###### Default

true

Defined in:  [ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts:59](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts#L59)

##### `markup`

> `"w:rPrChange"` | `"w:bdr"` | `"w:color"` | `"w:eastAsianLayout"` | `"w:em"` | `"w:fitText"` | `"w:rFonts"` | `"w:highlight"` | `"w:lang"` | `"w:shd"` | `"w:position"` | `"w:spacing"` | `"w:effect"` | `"w:w"` | `"w:u"` | `"w:vertAlign"` | `"w:shadow"` | `"w:sz"` | `"w:snapToGrid"` | `"w:cs"` | `"w:oMath"` | `"w:b"` | `"w:i"` | `"w:rtl"` | `"w:bCs"` | `"w:caps"` | `"w:dstrike"` | `"w:emboss"` | `"w:iCs"` | `"w:imprint"` | `"w:kern"` | `"w:noProof"` | `"w:outline"` | `"w:rStyle"` | `"w:smallCaps"` | `"w:specVanish"` | `"w:strike"` | `"w:szCs"` | `"w:vanish"` | `"w:webHidden"` | (`"w:rPrChange"` | `"w:bdr"` | `"w:color"` | `"w:eastAsianLayout"` | `"w:em"` | `"w:fitText"` | `"w:rFonts"` | `"w:highlight"` | `"w:lang"` | `"w:shd"` | `"w:position"` | `"w:spacing"` | `"w:effect"` | `"w:w"` | `"w:u"` | `"w:vertAlign"` | `"w:shadow"` | `"w:sz"` | `"w:snapToGrid"` | `"w:cs"` | `"w:oMath"` | `"w:b"` | `"w:i"` | `"w:rtl"` | `"w:bCs"` | `"w:caps"` | `"w:dstrike"` | `"w:emboss"` | `"w:iCs"` | `"w:imprint"` | `"w:kern"` | `"w:noProof"` | `"w:outline"` | `"w:rStyle"` | `"w:smallCaps"` | `"w:specVanish"` | `"w:strike"` | `"w:szCs"` | `"w:vanish"` | `"w:webHidden"`)[] | (`rPr`: `Partial`<`Record`<`"w:rPrChange"` | `"w:bdr"` | `"w:color"` | `"w:eastAsianLayout"` | `"w:em"` | `"w:fitText"` | `"w:rFonts"` | `"w:highlight"` | `"w:lang"` | `"w:shd"` | `"w:position"` | `"w:spacing"` | `"w:effect"` | `"w:w"` | `"w:u"` | `"w:vertAlign"` | `"w:shadow"` | `"w:sz"` | `"w:snapToGrid"` | `"w:cs"` | `"w:oMath"` | `"w:b"` | `"w:i"` | `"w:rtl"` | `"w:bCs"` | `"w:caps"` | `"w:dstrike"` | `"w:emboss"` | `"w:iCs"` | `"w:imprint"` | `"w:kern"` | `"w:noProof"` | `"w:outline"` | `"w:rStyle"` | `"w:smallCaps"` | `"w:specVanish"` | `"w:strike"` | `"w:szCs"` | `"w:vanish"` | `"w:webHidden"`, `undefined` | `never` | `Border`[] | `OnOff`<`"oMath"`>[] | `OnOff`<`"b"`>[] | `OnOff`<`"i"`>[] | `TextEffect`[] | `OnOff`<`"cs"`>[] | `Highlight`[] | `OnOff`<`"rtl"`>[] | `HpsMeasure`<`"sz"`>[] | `Color`[] | `TextScale`[] | `Shd`[] | `OnOff`<`"snapToGrid"`>[] | `SignedTwipsMeasure`[] | `OnOff`<`"bCs"`>[] | `OnOff`<`"caps"`>[] | `OnOff`<`"dstrike"`>[] | `EastAsianLayout`[] | `Em`[] | `OnOff`<`"emboss"`>[] | `FitText`[] | `OnOff`<`"iCs"`>[] | `OnOff`<`"imprint"`>[] | `HpsMeasure`<`"kern"`>[] | `Language`[] | `OnOff`<`"noProof"`>[] | `OnOff`<`"outline"`>[] | `SignedHpsMeasure`[] | `Fonts`[] | `StringTag`<`"rStyle"`>[] | `OnOff`<`"shadow"`>[] | `OnOff`<`"smallCaps"`>[] | `OnOff`<`"specVanish"`>[] | `OnOff`<`"strike"`>[] | `HpsMeasure`<`"szCs"`>[] | `Underline`[] | `OnOff`<`"vanish"`>[] | `VerticalAlignRun`[] | `OnOff`<`"webHidden"`>[] | {
> `w:val`?: `boolean`;
> }>>) => `boolean`

The markup to look for.
If no namespace is specified, the default namespace (`w:`) is assumed.
You can also specify a matcher function which takes a JSON representation of the RPr element and returns true if the style should be applied.

###### Example

```ts
'w:b'
```

###### Example

```ts
['w:b', 'w:i']
```

###### Example

```ts
['m:b']

Match text that is bold and italic, and red:
```

###### Example

```ts
(rPr) => rPr['w:b'] && rPr['w:i'] && rPr['w:color']?.['w:val'] === 'FF0000'
```

Defined in:  [ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts:23](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts#L23)

##### `matchAll?`

> `boolean`

If true (default), the style is applied if all of the markup elements are present.

If false, the style is applied if any of the markup elements are present.

*Example*
If `['b', 'i']` is specified with `matchAll: true`, the style will only be applied if the text is bold *and* italic.

If `['b', 'i']` is specified with `matchAll: false`, the style will be applied if the text is bold *or* italic.

###### Default

true

Does not apply if `markup` is a function.

Defined in:  [ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts#L44)

##### `matchFull?`

> `boolean`

Whether the entire paragraph should contain the markup, or the markup can be present in any of the runs.

###### Default

true

Defined in:  [ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts:50](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts#L50)

##### `style`

> `string`

The style to apply if the markup is present.

###### Example

```ts
'Heading 1'
```

Defined in:  [ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts:29](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts#L29)

***

### `Options`

> [`Option`](modules.md#option)[]

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

Defined in:  [ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts:80](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/ooxast/ooxast-util-markup-to-style/src/lib/ooxast-util-markup-to-style.ts#L80)

## Syntax tree

This package uses the [ooxast][ooxast] syntax tree.

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

[ooxast-util-markup-to-style]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ooxast-util-markup-to-style
