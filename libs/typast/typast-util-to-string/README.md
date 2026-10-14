# typast-util-to-string

Get the text content of a [`typast`](../typast) (Typst) tree, like `mdast-util-to-string` for
mdast, but reaching into calls: footnotes, captions passed as arguments, table cells, a template's
title.

## Use

```ts
import { fromTypst } from 'typast-util-from-string'
import { toString } from 'typast-util-to-string'

toString(fromTypst('A#footnote[note]. #figure(image("a.png"), caption: [A _cat_.])[Body]'))
// 'Anote. A cat.Body'
```

## API

### `toString(node, options?)`

Text, escapes and shorthands as the characters they stand for, spaces as `' '`, a linebreak as
`'\n'`, a paragraph break as `'\n\n'`, smart quotes as `"`/`'`, raw text and link URLs as they are,
a reference as its supplement. Everything in content blocks counts, wherever they are. Code itself
(names, numbers, `#set` rules), comments, labels and verbatim `typst` nodes add nothing. Like
`mdast-util-to-string`, nothing is added between blocks that are not separated in the tree.

- `options.includeMath` (default `true`): equations as text close to their source (`x_1^2`, `a/b`)
- `options.includeStrings` (default `false`): string literals in code (`#text("hi")`, but also
  `#image("a.png")`)

## License

GPL-3.0-or-later © Thomas F. K. Jorna
