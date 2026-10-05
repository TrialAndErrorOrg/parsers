---
'jast-types': minor
'jast-util-from-csl': minor
'jast-util-to-csl': minor
'ooxast': minor
'ooxast-util-properties': minor
'ooxast-util-to-jast': minor
'ooxast-util-to-mdast': minor
'rejour-parse': minor
'rejour-stringify': minor
'reoff-rejour': minor
'reoff-remark': minor
'reoff-unified-latex': minor
---

**Breaking:** move to the unified 11 ecosystem (unified 11, unist 3, xast 2, mdast 4, hast 3, vfile 6). The exported types now come from these versions, so use this release together with other unified 11 packages.

- `jast-types` declares its own `Data` and `RootData` (unist 3's `Data` has no index signature anymore); augment `Data` to add fields.
- `ooxast` element types are assignable to xast 2 elements: elements without attributes or children now have `attributes: Record<string, never>` / `children: []`, and text-only drawingml children (`a:t`, …) are `StringElement`s instead of bare strings.
- `reoff-unified-latex` is typed like `reoff-rejour`, with both bridge overloads, so `.use(reoffUnifiedLatex, options)` typechecks.
