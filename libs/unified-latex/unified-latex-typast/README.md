# unified-latex-typast

[unified](https://unifiedjs.com) plugin that turns a
[unified-latex](https://github.com/siefkenj/unified-latex) tree into a
[`typast`](../../typast/typast) (Typst) tree, using
[`unified-latex-util-to-typast`](../unified-latex-util-to-typast). It is the LaTeX counterpart of
`reoff-typast` (docx → Typst), shaped like `reoff-unified-latex`.

## Use

```ts
import { unified } from 'unified'
import { unifiedLatexFromString } from '@unified-latex/unified-latex-util-parse'
import { macroSignatures, environmentSignatures } from 'unified-latex-util-to-typast'
import unifiedLatexTypast from 'unified-latex-typast'
import { toTypst } from 'typast-util-to-typst'

const processor = unified()
  .use(unifiedLatexFromString, { macros: macroSignatures, environments: environmentSignatures })
  .use(unifiedLatexTypast, { templatePath: 'jote-article/lib.typ' })

const file = new VFile(source)
const tree = await processor.run(processor.parse(file), file)
const typst = toTypst(tree)
```

Add a typast compiler (e.g. `typast-stringify`) to use `processor.process()` directly.

- **mutate mode** — `.use(unifiedLatexTypast, options)`: the following plugins run on the typast tree.
- **bridge mode** — `.use(unifiedLatexTypast, destination, options)`: runs the `destination`
  processor on the typast tree, and the original pipeline continues with the LaTeX tree.

Options are those of [`unified-latex-util-to-typast`](../unified-latex-util-to-typast#options).
Conversion problems are reported as messages on the file.
