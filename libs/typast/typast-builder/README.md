# typast-builder

Build [`typast`](../typast) (Typst) trees: constructors for every node, and a document model that
lowers to typast, for converters.

## Contents

- [Constructors](#constructors)
- [Document model](#document-model)
- [License](#license)

## Constructors

```ts
import { blocks, call, content, heading, named, numeric, root, str, text } from 'typast-builder'
import { toTypst } from 'typast-util-to-typst'

toTypst(
  root(
    ...blocks(
      heading(1, text('Results')),
      [text('A figure:')],
      call('figure', [call('image', [str('a.png')]), named('caption', content(text('A cat.')))]),
    ),
  ),
)
// = Results
//
// A figure:
//
// #figure(image("a.png"), caption: [A cat.])
```

- markup: `text`, `space(newline?)`, `parbreak`, `linebreak`, `strong`, `emph`, `raw`, `link`,
  `label`, `ref`, `heading`, `listItem`, `enumItem`, `termItem`, `equation` (a string is kept as
  verbatim math), `comment`, `typst` (verbatim source)
- code: `ident`, `path('table.cell')`, `none`, `auto`, `bool`, `int`, `float`, `numeric`, `str`,
  `content`, `codeBlock`, `array`, `dict` (from named pairs or an object), `named`, `keyed`,
  `spread`, `call(callee, args, ...trailingContent)` (falsy arguments are dropped), `unary`,
  `binary`, `set`, `show`, `moduleImport`, `letBinding`
- `code(source)`: literals, identifiers and dotted paths become nodes, anything else a `typst` node
- `value(js)`: strings, numbers, booleans, `null`, arrays and objects as Typst values
- layout: `blocks(...)` joins blocks with paragraph breaks, `lines(...)` with newlines

## Document model

`typast-builder/doc` is a higher-level model for generating documents, and `lower()` turns it into
typast. Paragraphs and lists are containers there, a heading carries its label, calls are named by
a string and code values may be plain source. `lower` decides the layout: blank lines between
blocks, list markers or `#enum(…)`, where a label goes, a content block's blocks on lines of their
own.

The docx → Typst ([`ooxast-util-to-typast`](../../ooxast/ooxast-util-to-typast)) and LaTeX → Typst
([`unified-latex-util-to-typast`](../../unified-latex/unified-latex-util-to-typast)) converters
build this model; their `toTypast` returns `lower(toDocument(…))`.

```ts
import { lower } from 'typast-builder'
import type { Root } from 'typast-builder/doc'

const doc: Root = {
  type: 'root',
  children: [
    { type: 'heading', depth: 1, label: 'intro', children: [{ type: 'text', value: 'Intro' }] },
    {
      type: 'list',
      ordered: false,
      children: [{ type: 'listItem', children: [{ type: 'text', value: 'a' }] }],
    },
  ],
}

lower(doc) // heading, space, label, parbreak, listItem
```

## License

GPL-3.0-or-later © Thomas F. K. Jorna
