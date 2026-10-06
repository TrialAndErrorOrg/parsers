# ooxast-util-to-typast

Convert an [`ooxast`](../ooxast) tree (a parsed Word `word/document.xml`) to a
[`typast`](../../typast/typast) tree (Typst) for the JOTE `jote-article` template.

The Typst sibling of [`ooxast-util-to-unified-latex`](../ooxast-util-to-unified-latex). Serialize
the result with [`typast-util-to-typst`](../../typast/typast-util-to-typst), or use the unified
plugin [`reoff-typast`](../../reoff/reoff-typast) and the processor
[`docx-to-typst`](../../processors/docx-to-typst).

## Use

```ts
import { docxToVFile } from 'docx-to-vfile'
import { unified } from 'unified'
import reoffParse from 'reoff-parse'
import { toTypast } from 'ooxast-util-to-typast'
import { toTypst } from 'typast-util-to-typst'

const vfile = await docxToVFile(bytes)
const tree = unified().use(reoffParse).parse(vfile)
const typ = toTypst(toTypast(tree, vfile, { meta: { articleType: 'meta', doi: '10.36850/…' } }))
vfile.data.typast // { media: [{ source: 'word/media/image1.png', path: 'media/image1.png' }], citations, bibliography, meta }
```

Pass the `VFile` so the converter can see footnotes/endnotes (`data.parsed`), relations
(hyperlinks, images), `word/styles.xml` and `word/numbering.xml`. Without a file, `styles`,
`numbering` and `relations` can be passed as options.

## What it does

| Word | Typst |
| --- | --- |
| Heading 1–6 (by style *name* from `styles.xml`, or a `Heading N` id written by `reoff-markup-to-style`, or `w:outlineLvl`) | `=` … `======`, manual numbers like `2.1` stripped, full-heading bold removed |
| Bold, italic, underline, strike, super/subscript, small caps, all caps, character styles `Strong`/`Emphasis` | `*…*`, `_…_`, `#underline`, `#strike`, `#super`, `#sub`, `#smallcaps`, `#upper` (runs with equal formatting are merged) |
| Numbered/bulleted paragraphs (`numbering.xml`) | `+`/`-` lists, nested by indentation, numbering pattern (`"a."`, `"(i)"`) and continued numbering (`start`) |
| Quote styles | `#quote(block: true)[…]` |
| Footnotes, endnotes | `#footnote[…]` (paragraphs of a multi-paragraph note are joined with line breaks, since the template sets a note as one paragraph) |
| Hyperlinks (`w:hyperlink`, `HYPERLINK` fields) | `#link("…")[…]` |
| Zotero/Mendeley citation fields (`ADDIN … CSL_CITATION {…}`) | `#cite(<Smith2020>)`, narrative → `form: "prose"`, locators → `supplement: [p. 4]`, suppress-author → `form: "year"`; items collected as CSL and written as BibLaTeX (`file.data.typast.bibliography`, referenced as `bibliography: bibliography("bibliography.bib")`) |
| Zotero/Mendeley bibliography fields, a plain "References" list when citations were found | dropped (the template prints the bibliography) |
| A plain "References" list without citation fields | kept, with a hanging indent |
| Images (`w:drawing`, VML) | `image("media/…")`; alone in a paragraph: a centred image, side by side if in the same paragraph. An image whose file is missing from the docx is skipped with a warning; formats Typst cannot read (TIFF, BMP, WMF, …) become a framed placeholder naming the file, which is still written to `media/` |
| "Figure N" (+ title paragraph) + images (+ "Note." paragraph), or images + "Figure N: caption" | `#figure(…, caption: […]) <fig:N>` (`#wide-figure` for wide images, scaled to fit a page; non-sequential numbers like `A1` keep their number) |
| "Table N" + title + table (+ note) | `#figure(table(…), caption: […]) <tab:N>` (`#wide-figure` from 5 columns, a `#landscape` page from 9) |
| Tables | `#table` with column widths from the grid, `table.header`, booktabs rules, `colspan` (`gridSpan`) and `rowspan` (`vMerge`), cell alignment; Google Docs' "box with a nested table" export is split back up |
| "Box N" + single-cell table, or any single-cell table | `#jote-box(title: [Box N])[…]` (`width: "full"` for long boxes or boxes with a table). Boxes cannot break across pages, so a box estimated to be taller than a page is continued in untitled `#jote-box`es (lists are split between items, numbering continues), like the hand-typeset LaTeX articles do |
| OMML equations | Typst math, converted structurally (fractions, scripts, n-ary operators, delimiters, radicals, accents, matrices, equation arrays, …); LaTeX typed in Word's linear format goes through `tex2typst` |

### Front matter

With `inferFrontMatter` (default) the start of the document is read like an APA title page:
title (Title style, or the first bold/centred/heading paragraph), the author line
(`Ann Author¹, Bob Builder²`, superscripts as Unicode or formatting), affiliations (`¹ Uni…`),
an "Author Note" section (ORCID iDs → authors' `orcid`, "Correspondence concerning…" →
`correspondence`, funding statements → `funding`, the rest → an "Acknowledgments" section before
the references), "Abstract", "Keywords: …" and "Running head: …". Recognised paragraphs move into
`#show: jote-article.with(…)`; everything else stays in the body. Values in `options.meta` always
win.

## API

### `toTypast(tree, file?, options?)`

Returns a typast `Root`. With `document: false` only the body is returned (no `#import`/`#show`).

Options (all optional):

- `meta` (`JoteArticleMeta`) — template arguments (`articleType`, `title`, `authors`,
  `affiliations`, `runningAuthor`, `correspondence`, `journal`, `year`, `doi`, `dates`, `abstract`,
  `keywords`, `issue`, `header`, `specialIssue`, `funding`, `contributions`, `rgaInfo`, `review`,
  `bibliography`, `oneColumn`), camelCase for the template's kebab-case names
- `templatePath` — import path of the template (default `'jote-article/lib.typ'`)
- `document` — emit the `#import`/`#show` preamble (default `true`)
- `inferFrontMatter` — see above (default `true`)
- `headingOffset` — added to heading levels (default `0`)
- `mediaDir` — image directory (default `'media'`)
- `bibliographyFile` (default `'bibliography.bib'`), `bibliography` (extra CSL items)
- `boxWidth` — `'auto' | 'column' | 'wide' | 'full'` (default `'auto'`)
- `wideFigures` — `'auto' | 'always' | 'never'` (default `'auto'`)
- `keepReferenceList` — keep a plain-text reference list when there are no citation fields
  (default `true`)
- `linkMentions` — link running-text mentions of captioned figures and tables ("Figure 1",
  "Tables 2 and A1") to their `<fig:N>`/`<tab:N>` labels with `#link`, keeping the text as
  written (default `true`)
- `paragraphHandlers` — `[{ matcher, handler }]`: `matcher` is a style name/id, a list of them,
  or `(p, style) => boolean`; `handler(state, p, { style, text, content, where })` returns block
  content (or `undefined` to fall through)
- `formattingHandlers` — per run property (`b`, `i`, `highlight`, …):
  `(content, property, state) => content`; `null` disables one
- `styles`, `numbering`, `relations` — when not using a `VFile`

### Other exports

`ommlToTypst(oMath)`, `templateShowRule(meta)`, `mergeMeta(a, b)`, `runningAuthorFor(names)`,
`parseAuthors(content)`, `parseAffiliations(content)`, `toBiblatex(csl)`, `parseStyles(xml)`,
`resolveStyle(id, styles)`, `defaultFormattingHandlers`, `normalizeInline`, `unwrapFull`.

## Tests

`npx vitest run --root libs/ooxast/ooxast-util-to-typast` (unit tests on small documents). The
processor `docx-to-typst` compiles the docx fixtures with Typst.

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna
