# JOTE Parsers

Monorepo for a suite of parsers used in the [Journal of Trial and Error](https://journal.trialanderror.org).

The goal is to automate the process of converting a manuscript from a word processor to a JATS XML file, which can then be used to generate a PDF and HTML version of the manuscript. Ideally this would allow authors to work in Word/Google Docs but still have the benefits of a modern publishing workflow.

The only current implementation is found at [convert.centeroftrialanderror.com](convert.centeroftrialanderror.com) (very shodyy!).

Currently has 3 suites of parsers:

- `ooxast`/`reoff`: Tools to parse, convert from, and create OOXML (`.docx`) XML. Currently only contains a parser and a converter to `jats`, plus some tools.
- `jats`/`rejour`: Tools to parse, convert from, and create JATS XML. Currently contains a parser, stringifier, and a converter to `texast`, plus some tools.
- `texast`/`relatex`: Tools to parse, convert from, and create LaTeX (DEPRECATED, use [unified-latex](https://github.com/unified-latex) instead). Only contains a way to generate LaTex from `texast` ASTs.

Additionally, there are a few other tools:

- `citations-`: Tools to parse and convert citations.
- `ojs-`: Things to operate on the OJS api
- `utils-`: Various utilities

Finally, there are the processors, which are basically convenient wrappers around the parsers.

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

### other

| Package | Version | Description |
|---|---|---|
| [`ast-stringify`](libs/ast-stringify) | 0.0.1 |  |
| [`@trialanderror/converter-cli`](libs/book-converter) | 0.2.0 | convert books |

### citations

| Package | Version | Description |
|---|---|---|
| [`apa-parser`](libs/citations/apa-parser) | 0.0.1 | This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). |
| [`crossref-json`](libs/citations/crossref-json) | 0.2.2 | Defined in:  [index.ts:38](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/citations/crossref-json/src/index.ts |
| [`crossref-to-csl`](libs/citations/crossref-to-csl) | 0.3.0 | crossrefToCsl(item: CrossrefJSON): CSL; |
| [`csl-consolidate`](libs/citations/csl-consolidate) | 0.3.0 | Try to resolve a list of CSL data with crossref metadata |
| [`csl-to-biblatex`](libs/citations/csl-to-biblatex) | 0.3.1 | Somewhat jank CSL-JSON to biblatex converter |
| [`ojs-api`](libs/citations/ojs-types) | 0.0.1 | Some typescript types for OJS api responses |
| [`parse-text-cite`](libs/citations/parse-text-cite) | 0.3.1 | Small tool that parses a string of text containing APA style in text citations, e.g. |
| [`reference-parser-chatgpt`](libs/citations/reference-parser-chatgpt) | 0.0.1 | Turn a reference list into CSL, biblatex, or any other reference format using ChatGPT. |

### jast

| Package | Version | Description |
|---|---|---|
| [`jast-types`](libs/jast/jast) | 0.1.2 | jast (journal article/abstract syntax tree) is a syntax for abstract syntax trees representing JATS XML, specifically the "Green" publishing tag set. |
| [`jast-util-from-csl`](libs/jast/jast-util-from-csl) | 0.1.1 | cslToFront(data: Data): void; |
| [`jast-util-to-csl`](libs/jast/jast-util-to-csl) | 0.1.2 | Convert JATS XML bibliography to CSL JSON |
| [`jast-util-to-texast`](libs/jast/jast-util-to-texast) | 0.1.0 | Utility to convert a [jast][jast] tree to a [texast][texast] tree. |

### notion

| Package | Version | Description |
|---|---|---|
| [`html-to-notion-blocks`](libs/notion/html-to-notion-blocks) | 0.1.1 | Transform HTML to Notion blocks |
| [`rehype-notion`](libs/notion/rehype-notion) | 0.1.3 | Plugin for `rehype` to turn HTML into Notion blocks |

### ojs

| Package | Version | Description |
|---|---|---|
| [`ojs-client`](libs/ojs/ojs-client) | 0.0.1 | new default(«destructured»: object = {}): default; |
| [`ojs-relatex`](libs/ojs/ojs-relatex) | 0.0.1 | Convert ojs data to relatex |

### ooxast

| Package | Version | Description |
|---|---|---|
| [`ooxast`](libs/ooxast/ooxast) | 0.3.0 | Type definitions for `ooxast` (Open Office XML abstract syntax tree), a syntax for abstract syntax trees representing Open Office XML documents in the [`unist`](https://github.com/syntax-tree/unist) format. |
| [`ooxast-util-citation-plugin`](libs/ooxast/ooxast-util-citation-plugin) | 0.3.0 | Small ooxast utility which scans the text to identify the citation plugin used, either Mendely, Zotero, EndNote, Citavi, native word citations or none at all. |
| [`ooxast-util-citations`](libs/ooxast/ooxast-util-citations) | 0.4.0 | This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). |
| [`ooxast-util-get-style`](libs/ooxast/ooxast-util-get-style) | 0.4.0 | Get style from a `w:p` or `w:r` element. |
| [`ooxast-util-markup-to-style`](libs/ooxast/ooxast-util-markup-to-style) | 0.4.0 | Find certain markup in an ooxast tree and turn it into styles. |
| [`ooxast-util-parse-bib`](libs/ooxast/ooxast-util-parse-bib) | 0.3.0 | Find and convert raw references to CSL-JSON using `anystyle`. |
| [`ooxast-util-parse-bib-browser`](libs/ooxast/ooxast-util-parse-bib-browser) | 0.0.1 | Find and convert raw references to CSL-JSON. |
| [`ooxast-util-parse-bib-node`](libs/ooxast/ooxast-util-parse-bib-node) | 0.0.1 | Find and convert raw references to CSL-JSON. |
| [`ooxast-util-properties`](libs/ooxast/ooxast-util-properties) | 0.1.1 | Return the properties of an `ooxast` node as a JSON object |
| [`ooxast-util-remove-rsid`](libs/ooxast/ooxast-util-remove-rsid) | 0.4.0 | Cleans all the rsid tags from an ooxast tree, and merges `w:r` elements if they only differ by rsid values. |
| [`ooxast-util-to-hast`](libs/ooxast/ooxast-util-to-hast) | 0.0.1 | Convert docx to html (Not working) |
| [`ooxast-util-to-jast`](libs/ooxast/ooxast-util-to-jast) | 0.1.0 | Util to convert `ooxast` syntax tree to `jast` syntax tree, allowing for `.docx` to `JATS XML` conversion. |
| [`ooxast-util-to-mdast`](libs/ooxast/ooxast-util-to-mdast) | 0.2.0 | Convert `ooxast` syntax tree to `mdast` syntax tree. |
| [`ooxast-util-to-unified-latex`](libs/ooxast/ooxast-util-to-unified-latex) | 0.5.0 | Convert `ooxast` syntax tree to `unified-latex` syntax tree. |

### processors

| Package | Version | Description |
|---|---|---|
| [`docx-to-jats`](libs/processors/docx-to-jats) | private | processorsDocxToJats(): string; |
| [`docx-to-tex`](libs/processors/docx-to-tex) | private | DOCX to TeX converter |
| [`processors-jats-to-tex`](libs/processors/jats-to-tex) | private | jatsToTex(jats: string): Promise<VFile>; |
| [`jote-docx-tex`](libs/processors/jote-docx-tex) | private | docxToTex(input: Uint8Array, options: object = {}): Promise<VFile>; |

### rejour

| Package | Version | Description |
|---|---|---|
| [`rejour-frontmatter`](libs/rejour/rejour-frontmatter) | 0.0.1 | rejourFrontmatter(): Function; |
| [`rejour-meta`](libs/rejour/rejour-meta) | 0.0.1 | Doesn't do anything atm |
| [`rejour-move-abstract`](libs/rejour/rejour-move-abstract) | 0.0.1 | Really simple plugin for `rejour` that moves the abstract from the `body` to the `front` of a `JATS` document. |
| [`rejour-parse`](libs/rejour/rejour-parse) | 0.1.1 | Parser for `rejour` that parses the `JATS` document to a `jast` tree. |
| [`rejour-relatex`](libs/rejour/rejour-relatex) | 0.0.1 | Plugin for `rejour` that transforms a `jast` syntax tree into a `texast` syntax tree, allowing for conversion between JATS XML and LaTeX. |
| [`rejour-stringify`](libs/rejour/rejour-stringify) | 0.1.0 | Plugin for `rejour` that stringifies a `jast` syntax tree to a `JATS XML` document. |

### relatex

| Package | Version | Description |
|---|---|---|
| [`relatex-add-preamble`](libs/relatex/relatex-add-preamble) | 0.0.1 | Plugin for `relatex` that adds a preamble to a `texast` syntax tree. |
| [`relatex-stringify`](libs/relatex/relatex-stringify) | 0.0.1 | Plugin for `relatex` that stringifies a `texast` syntax tree to a LaTeX file. |

### reoff

| Package | Version | Description |
|---|---|---|
| [`docx-to-vfile`](libs/reoff/docx-to-vfile) | 0.10.0 | Reads a `.docx` file and stores its components in vfile format to be processed by other tools, like `reoff-parse`. |
| [`reoff-cite`](libs/reoff/reoff-cite) | 0.4.0 | default(options: Options = ...): Function; |
| [`reoff-clean`](libs/reoff/reoff-clean) | 0.3.0 | Plugin for [reoff][reoff] to clean the ooxast tree. |
| [`reoff-compile`](libs/reoff/reoff-compile) | 0.0.1 | Compile a reoff-compatible VFile or bare ooxast syntax tree to a .docx document |
| [`reoff-infer-headings`](libs/reoff/reoff-infer-headings) | 0.0.1 | Plugin for `reoff` that turns a single bolded or emphasized line into a heading |
| [`reoff-markup-to-style`](libs/reoff/reoff-markup-to-style) | 0.2.0 | Plugin for `reoff` that is able to change the styles of paragraphs based on the markup of the underlying text |
| [`reoff-parse`](libs/reoff/reoff-parse) | 0.5.0 | Plugin for [reoff][reoff] to parse a `.docx` XML file into an `ooxast` AST.  |
| [`reoff-parse-references`](libs/reoff/reoff-parse-references) | 0.3.0 | default(options: Options = {}): Function; |
| [`reoff-parse-references-browser`](libs/reoff/reoff-parse-references-browser) | 0.0.1 | default(options: Options): Function; |
| [`reoff-rejour`](libs/reoff/reoff-rejour) | 0.1.0 | Plugin for `reoff` that transforms an `ooxast` syntax tree into a `jats` syntax tree, i.e.  |
| [`reoff-remark`](libs/reoff/reoff-remark) | 0.2.0 | Plugin for `reoff` that takes an `ooxast` tree and turns it into a `remark` tree, allowing for .docx to .tex conversion |
| [`reoff-unified-latex`](libs/reoff/reoff-unified-latex) | 0.3.0 | Plugin for `reoff` that takes an `ooxast` tree and turns it into a `unified-latex` tree, allowing for .docx to .tex conversion |

### texast

| Package | Version | Description |
|---|---|---|
| [`texast`](libs/texast/texast) | 0.0.1 | DEPRECATED: Type definitions for `texast` (LaTeX abstract syntax tree), a syntax for abstract syntax trees representing LaTeX documents in the [`unist`](https://github.com/syntax-tree/unist) format. |
| [`texast-util-add-preamble`](libs/texast/texast-util-add-preamble) | 0.0.1 | Add a preamble to a texast syntax tree. |
| [`texast-util-to-latex`](libs/texast/texast-util-to-latex) | 0.0.1 | Convert a `texast` syntax tree to LaTeX. |

### unified-latex

| Package | Version | Description |
|---|---|---|
| [`unified-latex-stringify`](libs/unified-latex/unified-latex-stringify) | 0.2.1 | Plugin for `unified-latex` that takes an `unified-latex` tree and turns it into LaTeX |

### utils

| Package | Version | Description |
|---|---|---|
| [`ojs-to-preamble`](libs/utils/ojs-to-preamble) | private |  |

### xast

| Package | Version | Description |
|---|---|---|
| [`xast-util-has-attribute`](libs/xast/xast-util-has-attribute) | 0.3.0 | Port of [hast-util-has-property](https://github.com/syntax-tree/hast-util-has-property) for [xast][xast] |
| [`xast-util-is-element`](libs/xast/xast-util-is-element) | 0.3.1 | Port of [hast-util-is-element](https://github.com/syntax-tree/hast-util-has-property) for [xast][xast] |
| [`xast-util-select`](libs/xast/xast-util-select) | 0.3.0 | Port of `(hast-util-select)[https://github.com/syntax-tree/hast-util-select]` for use with `xast` nodes. |

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

##### [rejour-relatex][rejour-relatex]

Translates a `jast` syntax tree into a `texast` syntax tree to be used by [relatex][relatex].

#### Utilities

##### [jast-util-to-texast][jast-util-to-texast]

Transforms jast to texast.

### relatex

Parser/stringifier compatible with the [unified][unified] ecosystem for [LaTeX](), mostly based on [latex-utensils][latex-utensils].

Consists of plugins (prefixed with `relatex`) to be used with the [unified][unifiedgh] parser which use utilities (prefixed with `texast`) which can be used on their own or as building blocks for your own plugins.

At the moment the goal of relatex is mostly to be able to `generate` decent latex documents using the unified ecosystem rather than parse or accurately represent LaTeX documents.

#### [texast][texast]

`texast` (TeX abstract syntax tree) is a syntax for abstract syntax trees representing LaTeX. The `texast` package provides types for this ast.

It is mostly based on the ast used by [latex-utensils][latex-utensils] and [LaTeX.js][latexjs], but changed in order to be compatible with the unified ecosystem.

`texast` is not meant to be a perfect representation of all LaTeX documents.

#### Plugins

##### [relatex][relatex]

Nothing yet

##### [relatex-stringify][relatex-stringify]

Stringifier.

#### Utilities

##### [texast-util-to-latex][texast-util-to-latex]

Utility for stringifying `texast` syntax trees, mostly based off of [mdast-util-to-markdown][mdast-markdown]
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
[rejour-relatex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour-relatex
[relatex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex
[relatex-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex-stringify
[jast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/jast
[jast-util-to-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/jast-util-to-texast
[jastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/jastscript
[texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/texast
[texast-util-to-latex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/texast-util-to-latex
[hast]: https://github.com/syntax-tree/hast
[xast]: https://github.com/syntax-tree/xast
[mdast]: https://github.com/syntax-tree/mdast
[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown
[latex-utensils]: https://github.com/tamuratak/latex-utensils
[latexjs]: https://github.com/latexjs/latexjs
