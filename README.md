# JOTE Parsers

Monorepo for a suite of parsers used in the [Journal of Trial and Error](https://journal.trialanderror.org).

The goal is to automate the process of converting a manuscript from a word processor to a JATS XML file, which can then be used to generate a PDF and HTML version of the manuscript. Ideally this would allow authors to work in Word/Google Docs but still have the benefits of a modern publishing workflow.

The only current implementation is found at [convert.centeroftrialanderror.com](convert.centeroftrialanderror.com) (very shodyy!).

Contains 2 suites of parsers:

- `ooxast`/`reoff`: Tools to parse, convert from, and create OOXML (`.docx`) XML. Contains a parser and converters to JATS (`jast`), Markdown (`mdast`) and LaTeX ([unified-latex](https://github.com/siefkenj/unified-latex)), plus some tools.
- `jats`/`rejour`: Tools to parse, convert from, and create JATS XML. Contains a parser and stringifier, plus some tools.

Additionally, there are a few other tools:

- `citations`: Tools to parse and convert citations, and types for the OJS API.
- `xast`: Utilities for working with [xast][xast] trees.
- `unified-latex`: Utilities for working with [unified-latex](https://github.com/siefkenj/unified-latex) trees.
- `book-converter`: a CLI to turn a `.docx` book into LaTeX.

`apps/converter` is the web converter (Next.js) that uses the parsers to turn `.docx` manuscripts into LaTeX.

See below for more info.

# Development

A pnpm workspace run with [Turborepo](https://turborepo.com). Needs Node 24+ and pnpm 11.

```sh
pnpm install
pnpm build          # turbo run build: every lib to <lib>/dist with tsc (TypeScript 7)
pnpm typecheck      # turbo run typecheck, against workspace sources (no build needed)
pnpm test           # turbo run test (vitest)
pnpm lint           # oxlint
pnpm format         # oxfmt
pnpm dev            # turbo run dev (the converter on http://localhost:3100)
pnpm --filter <package> <script>   # one package, e.g. pnpm --filter reoff-parse test
pnpm gen:lib        # scaffold a new lib (turbo gen)
pnpm readme <dir>   # regenerate a lib README (or --all)
```

## How packages see each other

Each lib's `package.json` declares its own dependencies; workspace deps are `workspace:^`.
Its `exports` carry a custom `@jote/source` condition pointing at `src/index.ts`:

```json
".": { "@jote/source": "./src/index.ts", "types": "./dist/index.d.ts", "default": "./dist/index.js" }
```

`tsconfig.base.json` sets `customConditions: ["@jote/source"]`, so the editor, `typecheck`,
vitest and the converter (webpack `conditionNames`) all resolve workspace packages straight to
source: go-to-definition lands in `src`, and nothing needs building first. Each lib's
`tsconfig.lib.json` turns the condition off, so builds compile against dependencies' `dist`
types (turbo builds dependencies first). Published packages only ship `dist`.

## Releasing

Through GitHub Actions with Changesets and npm trusted publishing (OIDC). Nothing is
published from a local machine. See [docs/releasing.md](docs/releasing.md).

# Packages

Packages marked _private_ are not published.

### other

| Package | Description |
|---|---|
| [`@trialanderror/converter-cli`](libs/book-converter) | convert books |
| [`unified-ast-stringify`](libs/ast-stringify) |  |

### citations

| Package | Description |
|---|---|
| [`crossref-json`](libs/citations/crossref-json) | Defined in:  [index.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/crossref-json/src/index.ts |
| [`crossref-to-csl`](libs/citations/crossref-to-csl) | crossrefToCsl(item: CrossrefJSON): CSL; |
| [`csl-consolidate`](libs/citations/csl-consolidate) | Try to resolve a list of CSL data with crossref metadata |
| [`csl-to-biblatex`](libs/citations/csl-to-biblatex) | Somewhat jank CSL-JSON to biblatex converter |
| [`ojs-api-types`](libs/citations/ojs-types) | Some typescript types for OJS api responses |
| [`parse-text-cite`](libs/citations/parse-text-cite) | Small tool that parses a string of text containing APA style in text citations, e.g. |

### jast

| Package | Description |
|---|---|
| [`jast-types`](libs/jast/jast) | jast (journal article/abstract syntax tree) is a syntax for abstract syntax trees representing JATS XML, specifically the "Green" publishing tag set. |
| [`jast-util-from-csl`](libs/jast/jast-util-from-csl) | cslToFront(data: Data): void; |
| [`jast-util-to-csl`](libs/jast/jast-util-to-csl) | Convert JATS XML bibliography to CSL JSON |

### ooxast

| Package | Description |
|---|---|
| [`ooxast`](libs/ooxast/ooxast) | Type definitions for `ooxast` (Open Office XML abstract syntax tree), a syntax for abstract syntax trees representing Open Office XML documents in the [`unist`](https://github.com/syntax-tree/unist) format. |
| [`ooxast-util-citation-plugin`](libs/ooxast/ooxast-util-citation-plugin) | Small ooxast utility which scans the text to identify the citation plugin used, either Mendely, Zotero, EndNote, Citavi, native word citations or none at all. |
| [`ooxast-util-citations`](libs/ooxast/ooxast-util-citations) | This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). |
| [`ooxast-util-get-style`](libs/ooxast/ooxast-util-get-style) | Get style from a `w:p` or `w:r` element. |
| [`ooxast-util-markup-to-style`](libs/ooxast/ooxast-util-markup-to-style) | Find certain markup in an ooxast tree and turn it into styles. |
| [`ooxast-util-parse-bib`](libs/ooxast/ooxast-util-parse-bib) | Find and convert raw references to CSL-JSON using `anystyle`. |
| [`ooxast-util-properties`](libs/ooxast/ooxast-util-properties) | Return the properties of an `ooxast` node as a JSON object |
| [`ooxast-util-remove-rsid`](libs/ooxast/ooxast-util-remove-rsid) | Cleans all the rsid tags from an ooxast tree, and merges `w:r` elements if they only differ by rsid values. |
| [`ooxast-util-to-hast`](libs/ooxast/ooxast-util-to-hast) _private_ | Convert docx to html (Not working) |
| [`ooxast-util-to-jast`](libs/ooxast/ooxast-util-to-jast) | Util to convert `ooxast` syntax tree to `jast` syntax tree, allowing for `.docx` to `JATS XML` conversion. |
| [`ooxast-util-to-mdast`](libs/ooxast/ooxast-util-to-mdast) | Convert `ooxast` syntax tree to `mdast` syntax tree. |
| [`ooxast-util-to-unified-latex`](libs/ooxast/ooxast-util-to-unified-latex) | Convert `ooxast` syntax tree to `unified-latex` syntax tree. |

### rejour

| Package | Description |
|---|---|
| [`rejour-frontmatter`](libs/rejour/rejour-frontmatter) _private_ | rejourFrontmatter(): Function; |
| [`rejour-meta`](libs/rejour/rejour-meta) _private_ | Doesn't do anything atm |
| [`rejour-move-abstract`](libs/rejour/rejour-move-abstract) _private_ | Really simple plugin for `rejour` that moves the abstract from the `body` to the `front` of a `JATS` document. |
| [`rejour-parse`](libs/rejour/rejour-parse) | Parser for `rejour` that parses the `JATS` document to a `jast` tree. |
| [`rejour-stringify`](libs/rejour/rejour-stringify) | Plugin for `rejour` that stringifies a `jast` syntax tree to a `JATS XML` document. |

### reoff

| Package | Description |
|---|---|
| [`docx-to-vfile`](libs/reoff/docx-to-vfile) | Reads a `.docx` file and stores its components in vfile format to be processed by other tools, like `reoff-parse`. |
| [`reoff-cite`](libs/reoff/reoff-cite) | default(options: Options = ...): Function; |
| [`reoff-clean`](libs/reoff/reoff-clean) | Plugin for [reoff][reoff] to clean the ooxast tree. |
| [`reoff-compile`](libs/reoff/reoff-compile) _private_ | Compile a reoff-compatible VFile or bare ooxast syntax tree to a .docx document |
| [`reoff-infer-headings`](libs/reoff/reoff-infer-headings) | Plugin for `reoff` that turns a single bolded or emphasized line into a heading |
| [`reoff-markup-to-style`](libs/reoff/reoff-markup-to-style) | Plugin for `reoff` that is able to change the styles of paragraphs based on the markup of the underlying text |
| [`reoff-parse`](libs/reoff/reoff-parse) | Plugin for [reoff][reoff] to parse a `.docx` XML file into an `ooxast` AST.  |
| [`reoff-parse-references`](libs/reoff/reoff-parse-references) | default(options: Options = {}): Function; |
| [`reoff-rejour`](libs/reoff/reoff-rejour) | Plugin for `reoff` that transforms an `ooxast` syntax tree into a `jats` syntax tree, i.e.  |
| [`reoff-remark`](libs/reoff/reoff-remark) | Plugin for `reoff` that takes an `ooxast` tree and turns it into a `remark` tree, allowing for .docx to .tex conversion |
| [`reoff-unified-latex`](libs/reoff/reoff-unified-latex) | Plugin for `reoff` that takes an `ooxast` tree and turns it into a `unified-latex` tree, allowing for .docx to .tex conversion |

### unified-latex

| Package | Description |
|---|---|
| [`unified-latex-stringify`](libs/unified-latex/unified-latex-stringify) | Plugin for `unified-latex` that takes an `unified-latex` tree and turns it into LaTeX |

### xast

| Package | Description |
|---|---|
| [`xast-util-has-attribute`](libs/xast/xast-util-has-attribute) | Port of [hast-util-has-property](https://github.com/syntax-tree/hast-util-has-property) for [xast][xast] |
| [`xast-util-is-element`](libs/xast/xast-util-is-element) | Port of [hast-util-is-element](https://github.com/syntax-tree/hast-util-has-property) for [xast][xast] |
| [`xast-util-minify-whitespace`](libs/xast/xast-util-minify-whitespace) | Minify whitespace between xast elements: a port of rehype-minify-whitespace 5 for xast |
| [`xast-util-select`](libs/xast/xast-util-select) | Port of `(hast-util-select)[https://github.com/syntax-tree/hast-util-select]` for use with `xast` nodes. |

Deprecated packages that are still on npm live in [`deprecated/`](deprecated).

<!--

## Projects

### rejour

Parser/stringifier compatible with the [unified][unified] ecosystem for [JATS XML](), an XML format widely used in academic publishing, mostly based on [rehype].

Consists of plugins (prefixed with `rejour`) to be used with the [unified][unifiedgh] parser which use utilities (prefixed with `jast`) which can be used on their own or as building blocks for your own plugins.

#### [jast][jast]

`jast` (journal article/abstract syntax tree) is a syntax for abstract syntax trees representing JATS XML, specifically the "Green" publishing tag set. The `jast` package provides types for this ast.

While it is generated by [xast-util-from-xml][xast-from-xml], the syntax mimics that of [hast][hast] rather than [xast][xast] (`name` instead of `name`, `attributes` instead of `attributes`) in order to make it easier to port rehype plugins to rejour.

#### Plugins

##### [rejour][rejour]

General purpose parser a la [rehype][rehype]

##### [rejour-parse][rejour-parse]

Parser for rejour, uses [xast-util-from-xml][xast-from-xml] to parse JATS XML into [jast][jast] syntax trees.

##### [rejour-stringify][rejour-stringify]

Stringifier.

##### [rejour-move-abstract][rejour-move-abstract]

Plugin tries to locate an "abstract" section in a `jast` tree and moves it to the `article-meta` section of the article.
-->

## License

[GPL-3.0+](LICENSE) © Thomas F. K. Jorna

[unified]: https://unifiedjs.com
[unifiedgh]: https://github.com/unifiedjs/unified
[xast-from-xml]: https://github.com/syntax-tree/xast-util-from-xml
[rehype]: https://github.com/rehypejs/rehype
[rejour]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour
[rejour-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour-parse
[rejour-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour-stringify
[rejour-move-abstract]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour-move-abstract
[rejour-meta]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour-meta
[jast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/jast
[jastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/jastscript
[hast]: https://github.com/syntax-tree/hast
[xast]: https://github.com/syntax-tree/xast
[mdast]: https://github.com/syntax-tree/mdast
