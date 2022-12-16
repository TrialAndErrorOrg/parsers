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

There is also an `app` directory, which contains a few apps that use the parsers, atm a really crappy frontend for converting from `.docx`.

See below for more info.

# Dependency Graph

[View an interactive dependency graph here](https://trialanderrororg.github.io/parsers/https://trialanderrororg.github.io/parsers/)
![Graph of this monorepo](./graph.png 'Graph of this monorepo')

# Overview

## [Apps](/Volumes/SSD/Projects/jote-monorepo/apps):

#### [`converter-frontend`](apps/converter-frontend)

#### [`converter-frontend-e2e`](apps/converter-frontend-e2e)

#### [`jote`](apps/jote)

#### [`react-pdf`](apps/react-pdf)

#### [`react-pdf-e2e`](apps/react-pdf-e2e)

## [Libs](/Volumes/SSD/Projects/jote-monorepo/libs):

### [ast-stringify](libs/ast-stringify)

#### [`src`](libs/ast-stringify/src)

### [citations](libs/citations)

#### [`crossref-json`](libs/citations/crossref-json/README.md)

Typings for the [Crossref JSON API](https://api.crossref.org/swagger.json)

#### [`crossref-to-csl`](libs/citations/crossref-to-csl/README.md)

Tiny utitity to convert an Crossref API resonponse JSON item to CSL.

#### [`csl-consolidate`](libs/citations/csl-consolidate/README.md)

Small utility script which checks a list of CSL references against the Crossref doi.

#### [`ojs-types`](libs/citations/ojs-types/README.md)

Some typescript types for OJS api responses

#### [`parse-text-cite`](libs/citations/parse-text-cite/README.md)

Small tool that parses a string of text containing APA style in text citations, e.g. Jones (2020), and returns a rudimentary AST with the thing parsed.

### [jast](libs/jast)

#### [`jast`](libs/jast/jast/README.md)

Type definitions for `jast` (journal article/abstract syntax tree), a syntax for abstract syntax trees representing JATS XML, specifically the "Green" publishing tag set.

#### [`jast-util-from-csl`](libs/jast/jast-util-from-csl/README.md)

Transform a CSL list or object to a [jast][jast] node.

#### [`jast-util-to-csl`](libs/jast/jast-util-to-csl/README.md)

Convert a `jast` citation syntax tree to list of `csl` objects.

#### [`jast-util-to-texast`](libs/jast/jast-util-to-texast/README.md)

Utility to convert a [jast][jast] tree to a [texast][texast] tree.

### [notion](libs/notion)

#### [`html-to-notion-blocks`](libs/notion/html-to-notion-blocks/README.md)

Transform HTML to Notion blocks

#### [`rehype-notion`](libs/notion/rehype-notion/README.md)

Plugin for `rehype` to turn HTML into Notion blocks


### [ojs](libs/ojs)

#### [`ojs-client`](libs/ojs/ojs-client/README.md)

Small Node HTTP client for communicating with your OJS's REST API

#### [`ojs-relatex`](libs/ojs/ojs-relatex/README.md)

Convert ojs data to relatex

### [ooxast](libs/ooxast)

#### [`ooxast`](libs/ooxast/ooxast/README.md)

Type definitions for `ooxast` (Open Office XML abstract syntax tree), a syntax for abstract syntax trees representing Open Office XML documents in the [`unist`](https://github.com/syntax-tree/unist) format.

#### [`ooxast-util-citation-plugin`](libs/ooxast/ooxast-util-citation-plugin/README.md)

Small ooxast utility which scans the text to identify the citation plugin used, either Mendely, Zotero, EndNote, Citavi, native word citations or none at all. It is used to feed into other things.

#### [`ooxast-util-citations`](libs/ooxast/ooxast-util-citations/README.md)

_[ooxast][ooxast]_ util to visit in text office citations.

#### [`ooxast-util-get-style`](libs/ooxast/ooxast-util-get-style/README.md)

Get style from a `w:p` element.

#### [`ooxast-util-parse-bib`](libs/ooxast/ooxast-util-parse-bib/README.md)

Find and convert raw references to CSL-JSON using `anystyle`.

#### [`ooxast-util-parse-bib-browser`](libs/ooxast/ooxast-util-parse-bib-browser/README.md)

Find and convert raw references to CSL-JSON.

#### [`ooxast-util-parse-bib-node`](libs/ooxast/ooxast-util-parse-bib-node/README.md)

Find and convert raw references to CSL-JSON.

#### [`ooxast-util-remove-rsid`](libs/ooxast/ooxast-util-remove-rsid/README.md)

Cleans all the rsid tags from an ooxast tree, and merges `w:r` elements if they only differ by rsid values.

#### [`ooxast-util-to-hast`](libs/ooxast/ooxast-util-to-hast/README.md)

Convert docx to html (Not working)

#### [`ooxast-util-to-jast`](libs/ooxast/ooxast-util-to-jast/README.md)

Util to convert `ooxast` syntax tree to `jast` syntax tree, allowing for `.docx` to `JATS XML` conversion.

#### [`ooxast-util-to-unified-latex`](libs/ooxast/ooxast-util-to-unified-latex/README.md)

Convert `ooxast` syntax tree to `unified-latex` syntax tree.

### [processors](libs/processors)

#### [`docx-to-jats`](libs/processors/docx-to-jats/README.md)

DOCX to JATS XML converter

#### [`docx-to-tex`](libs/processors/docx-to-tex/README.md)

DOCX to TeX converter

#### [`jats-to-tex`](libs/processors/jats-to-tex/README.md)

JATS XML to TeX converter

#### [`jote-docx-tex`](libs/processors/jote-docx-tex/README.md)

Can't really remember what this is lmao

### [rejour](libs/rejour)

#### [`rejour-frontmatter`](libs/rejour/rejour-frontmatter/README.md)

Plugin for `rejour` that parses the frontmatter of a `JATS` document and adds it to the processing VFile as a list of `csl` citations.

#### [`rejour-meta`](libs/rejour/rejour-meta/README.md)

Doesn't do anything atm

#### [`rejour-move-abstract`](libs/rejour/rejour-move-abstract/README.md)

Really simple plugin for `rejour` that moves the abstract from the `body` to the `front` of a `JATS` document.

#### [`rejour-parse`](libs/rejour/rejour-parse/README.md)

Parser for `rejour` that parses the `JATS` document to a `jast` tree.

#### [`rejour-relatex`](libs/rejour/rejour-relatex/README.md)

Plugin for `rejour` that transforms a `jast` syntax tree into a `texast` syntax tree, allowing for conversion between JATS XML and LaTeX.

#### [`rejour-stringify`](libs/rejour/rejour-stringify/README.md)

Plugin for `rejour` that stringifies a `jast` syntax tree to a `JATS XML` document.

### [relatex](libs/relatex)

#### [`relatex-add-preamble`](libs/relatex/relatex-add-preamble/README.md)

Plugin for `relatex` that adds a preamble to a `texast` syntax tree.

#### [`relatex-stringify`](libs/relatex/relatex-stringify/README.md)

Plugin for `relatex` that stringifies a `texast` syntax tree to a LaTeX file.

### [reoff](libs/reoff)

#### [`docx-to-vfile`](libs/reoff/docx-to-vfile/README.md)

Reads a `.docx` file and stores its components in vfile format to be processed by other tools, like [`reoff-parse`](https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff/reoff-parse).

#### [`reoff-cite`](libs/reoff/reoff-cite/README.md)

Plugin for `reoff` that parses citations in the form of `@cite{key}` and `@cite[page]{key}` using `ooxast-util-parse-bib` and `ooxast-util-parse-text-cite`.

#### [`reoff-clean`](libs/reoff/reoff-clean/README.md)

Plugin for [reoff][reoff] to clean the ooxast tree.

#### [`reoff-parse`](libs/reoff/reoff-parse/README.md)

Plugin for [reoff][reoff] to parse a `.docx` XML file into an `ooxast` AST. Ideally use `docx-to-vfile` to get to a parseable state.

#### [`reoff-parse-references`](libs/reoff/reoff-parse-references/README.md)

Plugin for `reoff` which tries to find a bibliography in the document and parse it using `ooxast-util-parse-bib`.

#### [`reoff-parse-references-browser`](libs/reoff/reoff-parse-references-browser/README.md)

Plugin for `reoff` which tries to find a bibliography in the document and parse it using `ooxast-util-parse-bib`.

#### [`reoff-rejour`](libs/reoff/reoff-rejour/README.md)

Plugin for `reoff` that transforms an `ooxast` syntax tree into a `jats` syntax tree, i.e. converting `.docx` to `JATS XML`.

### [texast](libs/texast)

#### [`texast`](libs/texast/texast/README.md)

DEPRECATED: Type definitions for `texast` (LaTeX abstract syntax tree), a syntax for abstract syntax trees representing LaTeX documents in the [`unist`](https://github.com/syntax-tree/unist) format.

#### [`texast-util-add-preamble`](libs/texast/texast-util-add-preamble/README.md)

Add a preamble to a texast syntax tree.

#### [`texast-util-to-latex`](libs/texast/texast-util-to-latex/README.md)

Convert a `texast` syntax tree to LaTeX.

### [utils](libs/utils)

#### [`misc`](libs/utils/misc/README.md)

Miscellaneous utilities.

#### [`ojs-to-preamble`](libs/utils/ojs-to-preamble/README.md)

Utility (extremely shoddy) to convert Open Journal Systems (OJS) metadata to a texast preamble.

### [xast](libs/xast)

#### [`xast-util-has-attribute`](libs/xast/xast-util-has-attribute/README.md)

Port of [hast-util-has-property](https://github.com/syntax-tree/hast-util-has-property) for [xast][xast]

#### [`xast-util-is-element`](libs/xast/xast-util-is-element/README.md)

Port of [hast-util-is-element](https://github.com/syntax-tree/hast-util-has-property) for [xast][xast]

#### [`xast-util-select`](libs/xast/xast-util-select/README.md)

Port of `(hast-util-select)[https://github.com/syntax-tree/hast-util-select]` for use with `xast` nodes.

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
