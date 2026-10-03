# reoff-tyast

[`reoff`](../reoff-parse) plugin to go from Word (`ooxast`) to Typst (`tyast`), using
[`ooxast-util-to-tyast`](../../ooxast/ooxast-util-to-tyast). The Typst sibling of
[`reoff-unified-latex`](../reoff-unified-latex).

## Use

```ts
import { unified } from 'unified'
import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import reoffTyast from 'reoff-tyast'
import tyastStringify from 'tyast-stringify'

const file = await unified()
  .use(reoffParse)
  .use(reoffTyast, { meta: { articleType: 'empirical' } })
  .use(tyastStringify)
  .process(await docxToVFile(bytes))

String(file) // main.typ
file.data.tyast // images to copy, citations, bibliography.bib contents, template arguments
```

Options are those of `toTyast` (see `ooxast-util-to-tyast`). Given a unified processor as first
argument, the plugin runs that processor on the tyast tree instead (bridge mode).

For a ready-made pipeline (with `reoff-clean`, `reoff-markup-to-style` and the output files) use
[`docx-to-typst`](../../processors/docx-to-typst).

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna
