# unified-latex-tyast

[unified](https://unifiedjs.com) plugin that turns a
[unified-latex](https://github.com/siefkenj/unified-latex) tree into a
[`tyast`](../../tyast/tyast) (Typst) tree, using
[`unified-latex-util-to-tyast`](../unified-latex-util-to-tyast). It is the LaTeX counterpart of
`reoff-tyast` (docx → Typst), shaped like `reoff-unified-latex`.

## Use

```ts
import { unified } from 'unified'
import { unifiedLatexFromString } from '@unified-latex/unified-latex-util-parse'
import { macroSignatures, environmentSignatures } from 'unified-latex-util-to-tyast'
import unifiedLatexTyast from 'unified-latex-tyast'
import { toTypst } from 'tyast-util-to-typst'

const processor = unified()
  .use(unifiedLatexFromString, { macros: macroSignatures, environments: environmentSignatures })
  .use(unifiedLatexTyast, { templatePath: 'jote-article/lib.typ' })

const file = new VFile(source)
const tree = await processor.run(processor.parse(file), file)
const typst = toTypst(tree)
```

Add a tyast compiler (e.g. `tyast-stringify`) to use `processor.process()` directly.

- **mutate mode** — `.use(unifiedLatexTyast, options)`: the following plugins run on the tyast tree.
- **bridge mode** — `.use(unifiedLatexTyast, destination, options)`: runs the `destination`
  processor on the tyast tree, and the original pipeline continues with the LaTeX tree.

Options are those of [`unified-latex-util-to-tyast`](../unified-latex-util-to-tyast#options).
Conversion problems are reported as messages on the file.
