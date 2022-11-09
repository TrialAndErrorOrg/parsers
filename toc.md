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
