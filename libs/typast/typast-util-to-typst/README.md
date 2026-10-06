# typast-util-to-typst

Serialize a [`typast`](../typast) syntax tree (Typst) to Typst source.

## Contents

- [What is this?](#what-is-this)
- [Use](#use)
- [API](#api)
- [Escaping](#escaping)
- [Layout](#layout)
- [Tests](#tests)
- [Related](#related)
- [License](#license)

## What is this?

`toTypst` writes what a typast tree says: paragraph breaks where it has `parbreak`s, spaces and
newlines where it has `space`s, code after a `#` in markup and math. Text is escaped so it renders
literally, whatever characters it contains, and code gets parentheses where operator precedence
needs them.

Parsing Typst with [`typast-util-from-string`](../typast-util-from-string), printing it with this
and parsing again gives the same tree.

## Use

```ts
import { toTypst } from 'typast-util-to-typst'

toTypst({
  type: 'root',
  children: [
    { type: 'heading', depth: 1, children: [{ type: 'text', value: 'Results' }] },
    { type: 'space', value: ' ' },
    { type: 'label', name: 'sec:res' },
    { type: 'parbreak' },
    { type: 'text', value: 'Costs $5 (see ' },
    { type: 'ref', target: 'sec:res' },
    { type: 'text', value: ') — ' },
    { type: 'emph', children: [{ type: 'text', value: 'really' }] },
    { type: 'text', value: '.' },
  ],
})
```

```typst
= Results <sec:res>

Costs \$5 (see @sec:res) — _really_.
```

To build trees with paragraphs and lists as containers, see
[`typast-builder`](../typast-builder).

## API

### `toTypst(tree, options?)`

Serialize `tree` (a `Root`, any node, or a list of markup nodes) to a string. A `Root` ends with a
newline.

###### `options.indent`

One level of indentation in content blocks that start on a line of their own, code blocks,
argument lists and list items (default `'  '`).

###### `options.lineWidth`

Argument lists, arrays and dictionaries longer than this are broken over several lines, one
entry per line with a trailing comma (default `80`).

### Helpers

- `escapeMarkup(text, { atLineStart?, prevChar?, nextChar?, escapeColon? })`: escape text for
  markup
- `escapeString(text)`: a quoted Typst string literal
- `sanitizeLabel(name)` / `isValidLabel(name)`: label names (`<…>` / `@…`); labels and ref
  targets in the tree are sanitized automatically, so converters only need this to compute ids
  that match
- `isIdentifier(name)`: identifiers usable as names (keywords excluded)

## Escaping

The rules follow Typst 0.15's lexer, so only what Typst would read as markup is escaped:

- Always: `\ # $ ` [ ] ~`.
- `*` and `_`, unless inside a word (`snake_case`).
- `<` and `@` before an identifier character (labels and references).
- Comment openers and closers: `//`, `/*` and `*/` (this also stops `https://` turning into an
  auto-link: use a `link` node).
- Shorthands, so text stays literal: `--`, `---`, `-?`, `...` and `-1` (minus sign).
- At the start of a line (also after a leading comment): `=`, `-`, `+`, `/` and `1.` followed by
  whitespace.
- Newlines in text become spaces (use `space` nodes for line breaks in the source); control
  characters are dropped. `:` inside a term.

Node boundaries are handled too:

- `*strong*`/`_emph_` fall back to `#strong[…]`/`#emph[…]` when the delimiter would touch a letter
  or digit, when nested inside the same kind, or around paragraph breaks.
- `#expr` followed by `(`, `[`, `;`, `.field` or an identifier character gets a terminating `;`
  (`#emph[x];(y)`), as does a statement followed by more on its line.
- `@ref` falls back to `#ref(<…>)` when the following text would extend the target.
- A trailing linebreak is written as `#linebreak()`; inline raw with backticks or an empty one as
  `#raw("…")`; raw blocks get a fence longer than any backtick run inside.
- A block comment that starts a line right after a list item, with text behind it on that line,
  gets `#[]` in front: Typst would measure the indentation after the comment and continue the
  item.

## Layout

Layout comes from the tree, with a few rules where Typst needs them:

- Headings, list items and terms start on a line of their own and end it; statements (`#let`,
  `#set`, `#show`, `#import`) end their line or get a `;`.
- A `space` that holds a newline is written as a newline, without its indentation: list items
  indent what continues them by the width of their marker, content blocks that start on a line of
  their own (`[⏎…⏎]`) and code blocks by `indent`.
- Calls write their last `trailing` content blocks after the parentheses (`#figure(img)[…]`);
  without `trailing`, every content block at the end of the arguments.
- Raw blocks are indented as a whole (Typst dedents them); inline raw and verbatim `typst` nodes
  are written as they are.

## Tests

`src/lib/to-typst.spec.ts` covers the node types and runs the real `typst` CLI on a document
(skipped when `typst` is not on `PATH`). The fuzzing of hazardous text in every markup context
lives with the document model in [`typast-builder`](../typast-builder), and the round trip
(parse, print, parse) in [`typast-util-from-string`](../typast-util-from-string).

## Related

- [`typast`](../typast): the syntax tree types
- [`retypst-stringify`](../../retypst/retypst-stringify): unified compiler plugin

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna
