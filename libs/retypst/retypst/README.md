# retypst

[unified](https://github.com/unifiedjs/unified) processor for [Typst](https://typst.app): parse
Typst into a [`typast`](../../typast/typast) tree, run plugins on it, serialize it back. What
`rehype` is for HTML.

## Use

```ts
import { retypst } from 'retypst'
import { visit } from 'typast-util-visit'

const file = await retypst()
  .use(() => (tree) => {
    visit(tree, 'heading', (node) => {
      node.depth += 1
    })
  })
  .process('= Title\n\nSome *text*.')

String(file) // '== Title\n\nSome *text*.\n'
```

## The retypst ecosystem

| Package                                                                             | What                                                 |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [`retypst-parse`](../retypst-parse)                                                 | parser plugin: Typst → typast                        |
| [`retypst-stringify`](../retypst-stringify)                                         | compiler plugin: typast → Typst                      |
| [`typast`](../../typast/typast)                                                     | the syntax tree                                      |
| [`typast-util-from-string`](../../typast/typast-util-from-string)                   | Typst → typast (Typst's own parser)                  |
| [`typast-util-to-typst`](../../typast/typast-util-to-typst)                         | typast → Typst                                       |
| [`typast-util-visit`](../../typast/typast-util-visit)                               | walk every node, code included                       |
| [`typast-builder`](../../typast/typast-builder)                                     | build trees; document model for converters           |
| [`reoff-typast`](../../reoff/reoff-typast)                                          | bridge: Word (`ooxast`) → typast                     |
| [`unified-latex-typast`](../../unified-latex/unified-latex-typast)                  | bridge: LaTeX (unified-latex) → typast               |

## License

GPL-3.0-or-later © Thomas F. K. Jorna
