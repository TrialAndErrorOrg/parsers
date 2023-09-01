import { all } from '../all.js'
import { body } from './body.js'
import { p } from './p.js'
import { root } from './root.js'
import { text } from './text.js'
import { wrapChildren } from '../util/wrap-children.js'
import { citation } from './citation.js'
import { tbl } from './tbl.js'
import { footnotes } from './footnotes.js'
import { footnote } from './footnote.js'
import { document } from './document.js'
import { r } from './r.js'
import { tr } from './tr.js'
import { drawing } from './drawing.js'

export const handlers = {
  p,
  body,
  root,
  text,
  document,
  footnotes,
  footnote,
  t: all,
  r,
  instrText: citation,
  tbl,
  tr,
  article: ignore,
  xml: ignore,
  instruction: ignore,
  doctype: ignore,
  drawing,
}

function ignore() {}
