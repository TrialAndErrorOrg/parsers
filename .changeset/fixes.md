---
'jast-util-to-csl': patch
'ooxast-util-citations': patch
'ooxast-util-remove-rsid': patch
'ooxast-util-to-jast': patch
'ooxast-util-to-mdast': patch
'rejour-parse': patch
'rejour-stringify': patch
'reoff-rejour': patch
---

Bug fixes:

- `jast-util-to-csl`: CSL `date-parts` ordered year, month, day.
- `ooxast-util-citations`: native Word citations inside content controls (`w:sdt`) are reparsed
- `ooxast-util-remove-rsid`: merging keeps content.
- `ooxast-util-to-jast`: only `heading N` styles are headings; sections are numbered from `sec-1`; footnotes and relations are read from the VFile; citation xrefs get the field code's position.
- `ooxast-util-to-mdast`: links and images are kept (relations are read per part), and underline/sub/sup text renders instead of `[object Object]`.
- `rejour-parse` actually use `removeWhiteSpace` option.
- `rejour-stringify` writes kebab-case JATS names again (it wrote the camelCased names from `rejour-parse`).
- `reoff-rejour` passes the VFile and its document relations to `ooxast-util-to-jast`.
