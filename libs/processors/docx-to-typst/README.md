# docx-to-typst

Convert a Word manuscript (`.docx`) into Typst for the JOTE `jote-article` template in
`templates/typst/jote-article`. It is the Typst counterpart of the docx → LaTeX converter
(`apps/converter/lib/converters/docx-to-tex.ts`): a first draft for editors to finish by hand.

Pipeline: `docx-to-vfile` → `reoff-parse` → `reoff-clean` → `reoff-markup-to-style` →
[`reoff-typast`](../../reoff/reoff-typast) ([`ooxast-util-to-typast`](../../ooxast/ooxast-util-to-typast))
→ `typast-stringify`. The `reoff-clean` and `reoff-markup-to-style` settings are the ones the LaTeX
route uses (fully bold paragraph → Heading 1, fully italic → Heading 2); both can be changed or
switched off.

## Library

```ts
import { docxToTypst, metaToTemplateArgs } from '@jote/processors/docx-to-typst'

const file = await docxToTypst(bytes, {
  // optional: metadata from the converter form wins over what is read from the manuscript
  meta: metaToTemplateArgs(form),
  templatePath: 'jote-article/lib.typ', // or '@local/jote-article:0.1.0'
})

String(file.value) // main.typ
file.data.files // { 'main.typ': string, 'media/image1.png': Uint8Array, 'bibliography.bib': string, … }
file.data.typast // { media, citations (CSL), bibliography, meta (the template arguments used) }
file.messages // things that could not be converted (unsupported image formats, broken citation fields, …)
```

Options: everything `ooxast-util-to-typast` takes (`meta`, `templatePath`, `inferFrontMatter`,
`headingOffset`, `boxWidth`, `wideFigures`, `keepReferenceList`, `bibliography`, custom
`paragraphHandlers`/`formattingHandlers`, …), plus

- `clean` — `reoff-clean` options, or `false`
- `markupToStyle` — `reoff-markup-to-style` options, or `false`
- `stringify` — options for `typast-util-to-typst`

`metaToTemplateArgs(form)` turns the converter app's metadata form (`MetaForm`, see
`apps/converter/lib/meta-to-preamble.ts`) into template arguments: article type and `header`/
`onecolumn` from the class options, authors with ORCID iDs and numbered affiliations,
correspondence from the first author, running author ("A", "A & B", "A, B, & C", "A et al."),
dates in the class' "July 24, 2026" format, volume/issue/pages. Form values are made plain
text first: the form's LaTeX (`Journal of Trial \& Error`, `--`, `~`) and OJS's HTML abstracts
(tags, entities) are undone, and the form's initial empty author row is ignored. The converter
app (`apps/converter`) uses this for its Typst tab.

## CLI

```sh
npx tsx --tsconfig tsconfig.base.json libs/processors/docx-to-typst/src/cli.ts \
  manuscript.docx out/article [--meta meta.json] [--compile] [--font-path dir]… \
  [--template templates/typst/jote-article] [--copy-template] [--import "@local/jote-article:0.1.0"]
```

Writes `out/article/main.typ`, `out/article/media/*` and (with citation fields)
`out/article/bibliography.bib`, and links the template as `out/article/jote-article` (a copy with
`--copy-template`/`--compile`). `--meta` takes a JSON file with template arguments
(`JoteArticleMeta`) or a converter `MetaForm`. `--compile` runs `typst compile` afterwards:

```sh
npx tsx --tsconfig tsconfig.base.json libs/processors/docx-to-typst/src/cli.ts \
  Manuscript.docx /tmp/kohrt-docx --compile \
  --font-path ~/JOTE/archive/fonts --font-path ~/JOTE/archive/OverpassFonts --font-path ~/JOTE/archive
```

## What you get

On the Kohrt et al. manuscript (an APA-style Google Docs export: title page, author note,
abstract, 3 figures, an 11-column table with merged cells, 5 boxes, 15 footnotes, nested lists,
plain-text references) the output compiles to a 37-page PDF with title, authors + ORCID iDs +
affiliations, correspondence, funding, abstract and keywords in the template's front matter;
Figure 1/2/A1 as captioned (wide) figures, Table 1 on a landscape page with its note, Box 1–5 as
`jote-box`es (Box 5 continued in a second box, as in the published LaTeX version), footnotes,
nested lists and the reference list. The LaTeX route (`apps/converter/lib/converters/docx-to-tex.ts`)
turns the same document into a sequence of `\section`s, and its output does not compile
(unbalanced braces from the title page, `\caption` outside floats).

All 67 .docx files in the repository (the `ooxast-*`, `reoff-*`, `docx-to-tex` and
`book-converter` fixtures) convert and compile without Typst warnings.

Known limits (it's a draft): plain-text citations stay text (only Zotero/Mendeley fields become
`#cite`); where a long box is split is estimated from character counts; Open Sans has no ☐/❍, so
those need a fallback font in the template; layout decisions (wide vs. column figures, box widths,
landscape tables) are heuristics to be adjusted by hand.

## Tests

`npx vitest run --root libs/processors/docx-to-typst` converts every docx fixture of
`ooxast-util-to-unified-latex` and compiles it with the template (when `typst` is on `PATH`), checks
OMML → Typst math compiles, and `metaToTemplateArgs`. Set `KOHRT_DOCX` to run the Kohrt manuscript
test.
