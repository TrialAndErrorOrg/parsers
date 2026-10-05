---
'ooxast-util-to-unified-latex': minor
'ooxast-util-markup-to-style': minor
'reoff-markup-to-style': minor
'reoff-unified-latex': minor
---

**Changed output:** real manuscripts (Google Docs exports included) now convert to LaTeX that compiles.

- Only `heading N` styles are headings (by style name, so localised ids like `Kop1` work); before, any style ending in a digit was one, so Google Docs' `normal1` turned every paragraph into a `\section`.
- `w:val="false"` / `"off"` on bold, italic etc. means off. Markup-to-style never restyles a paragraph that already has a heading, Title or Subtitle style, and has a new per-rule `onlyIfNoHeadings` option.
- Tracked deletions are dropped, line breaks become `\newline`, text in table cells and literal braces are escaped, colours use `\color[HTML]{…}`.
- Numbered headings are no longer one-item lists; the title is kept when a custom preamble is passed.
- Only a paragraph holding nothing but a picture becomes a figure; other pictures are inline `\includegraphics`.
- Tables: the column count comes from `w:tblGrid`, tabularx tables get `X` columns, nested tables work, paragraphs in a cell are separated.
- Citation keys of organisations as authors no longer contain spaces.
