# typast-util-to-typst

Serialize a [`typast`](../typast) syntax tree (Typst) to Typst source.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Use](#use)
- [API](#api)
- [Escaping](#escaping)
- [Layout](#layout)
- [Tests](#tests)
- [Related](#related)
- [License](#license)

## What is this?

This package is a utility that takes a `typast` tree and turns it into a `.typ` file. Text is
escaped so that it renders literally, whatever characters it contains, and calls, `set`/`show`
rules and values are written in code mode (`#` in markup, none in code).

## When should I use this?

When you build a `typast` tree yourself (e.g. in a docx → Typst or LaTeX → Typst converter) and
need the Typst source. The unified plugin [`typast-stringify`](../typast-stringify) wraps this
utility.

## Use

```ts
import { toTypst } from 'typast-util-to-typst'

toTypst({
  type: 'root',
  children: [
    { type: 'heading', depth: 1, children: [{ type: 'text', value: 'Results' }], label: 'sec:res' },
    {
      type: 'paragraph',
      children: [
        { type: 'text', value: 'Costs $5 (see ' },
        { type: 'ref', target: 'sec:res' },
        { type: 'text', value: ') — ' },
        { type: 'emphasis', children: [{ type: 'text', value: 'really' }] },
        { type: 'text', value: '.' },
      ],
    },
  ],
})
```

```typst
= Results <sec:res>

Costs \$5 (see @sec:res) — _really_.
```

## API

### `toTypst(tree, options?)`

Serialize `tree` (a `Root`, any node, a value, or an array of content nodes) to a string.
A `Root` ends with a newline.

###### `options.indent`

One level of indentation inside multi-line content blocks and argument lists
(default `'  '`).

###### `options.lineWidth`

Argument lists, arrays and dictionaries longer than this are broken over several lines, one
entry per line with a trailing comma (default `80`).

### Helpers

- `escapeMarkup(text, { atLineStart?, prevChar?, nextChar?, escapeColon? })` — escape text for
  markup
- `escapeString(text)` — a quoted Typst string literal
- `sanitizeLabel(name)` / `isValidLabel(name)` — label names (`<…>` / `@…`); labels and ref
  targets in the tree are sanitized automatically, so converters only need this to compute ids
  that match
- `isIdentifier(name)` — identifiers usable as dictionary keys (keywords excluded)

## Escaping

Rules follow Typst 0.15's lexer:

- Always escaped: `\ # $ * _ ` @ < [ ] ~`.
- Comment openers and closers: `//`, `/*` and `*/` (this also stops `https://` turning into an
  auto-link: write a `link` call for links).
- Shorthands, so text stays literal: `--`, `---`, `-?`, `...` and `-1` (minus sign) are escaped.
  Use the Unicode characters (–, —, …, −) if you want them.
- At the start of a line (paragraph start, after a linebreak, at the start of a content block or
  list item): `=`, `-`, `+`, `/` and `1.`-style enum markers.
- Newlines in text become spaces (a newline would end headings or start a block marker);
  control characters are dropped.
- `:` inside a term list's term.

Node boundaries are handled too:

- `*strong*`/`_emph_` fall back to `#strong[…]`/`#emph[…]` when the delimiter would touch a
  letter or digit (`foo#emph[bar]baz`), when nested inside the same kind, or around content with
  linebreaks.
- `#expr` followed by `(`, `[`, `;` or `.field` gets a terminating `;` (`#emph[x];(y)`).
- `@ref` falls back to `#ref(<…>)` when the following text would extend the target (`@fig` + `s`,
  or a target ending with `.`).
- A trailing linebreak is written as `#linebreak()`; inline raw with backticks or newlines as
  `#raw("…")`; raw blocks get a fence longer than any backtick run inside.

## Layout

Paragraphs are one line each, separated by blank lines; statements (`#import`, `#set`, `#show`,
`#let`) and term items sit on consecutive lines. A `label` node after a block is attached to it
(`#figure(…) <fig:1>`). Lists are indented by the width of their marker, multi-paragraph items
get blank lines, and content blocks with block content are written as

```typst
#jote-box(title: [Box 1])[
  First paragraph.

  - a
  - b
]
```

Inline content blocks stay on one line (`#footnote[…]`).

## Tests

`src/lib/typst.spec.ts` runs the real `typst` CLI (skipped when it is not on `PATH`): every
output is evaluated with `typst eval` and flattened by `src/test/dump.typ` into a string that
shows text and structure, which must match what the tree describes. Besides hand-written cases
it fuzzes random inline and block trees full of hazardous text; run longer with
`typast_FUZZ=5000 typast_SEED=7 npx vitest run --root libs/typast/typast-util-to-typst`.

## Related

- [`typast`](../typast) — the syntax tree types
- [`typast-stringify`](../typast-stringify) — unified compiler plugin

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna
