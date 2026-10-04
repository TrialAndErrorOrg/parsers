# reoff-typast

[`reoff`](../reoff-parse) plugin to go from Word (`ooxast`) to Typst (`typast`), using
[`ooxast-util-to-typast`](../../ooxast/ooxast-util-to-typast). The Typst sibling of
[`reoff-unified-latex`](../reoff-unified-latex).

## Use

```ts
import { unified } from 'unified'
import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import reofftypast from 'reoff-typast'
import typastStringify from 'typast-stringify'

const file = await unified()
  .use(reoffParse)
  .use(reofftypast, { meta: { articleType: 'empirical' } })
  .use(typastStringify)
  .process(await docxToVFile(bytes))

String(file) // main.typ
file.data.typast // images to copy, citations, bibliography.bib contents, template arguments
```

Options are those of `totypast` (see `ooxast-util-to-typast`). Given a unified processor as first
argument, the plugin runs that processor on the typast tree instead (bridge mode).

For a ready-made pipeline (with `reoff-clean`, `reoff-markup-to-style` and the output files) use
[`docx-to-typst`](../../processors/docx-to-typst).

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna
