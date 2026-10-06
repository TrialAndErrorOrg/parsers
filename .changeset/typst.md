---
'typast': minor
'typast-util-to-typst': minor
'typast-util-from-string': minor
'typast-util-visit': minor
'typast-builder': minor
'typast-syntax-node': minor
'typast-syntax-wasm': minor
'retypst': minor
'retypst-parse': minor
'retypst-stringify': minor
'ooxast-util-to-typast': minor
'reoff-typast': minor
'unified-latex-util-to-typast': minor
'unified-latex-typast': minor
'ooxast-util-remove-rsid': patch
---

Typst support: `typast`, a unist syntax tree that mirrors Typst's own (`typst-syntax`), parsed with
Typst's parser (`typast-util-from-string`, native through napi-rs in Node.js, WebAssembly in the
browser) and serialized with `typast-util-to-typst`; the `retypst` unified processor and plugins;
`typast-util-visit` and `typast-builder`; docx → Typst (`ooxast-util-to-typast`, `reoff-typast`)
and LaTeX → Typst (`unified-latex-util-to-typast`, `unified-latex-typast`) converters for the JOTE
article template. `ooxast-util-remove-rsid` no longer drops the content after a line break when it
merges runs.
