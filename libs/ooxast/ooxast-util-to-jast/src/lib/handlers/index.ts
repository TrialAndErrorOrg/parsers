import { all } from '../all'
import { body } from './body'
import { p } from './p'
import { root } from './root'
import { text } from './text'
import { wrapChildren } from '../util/wrap-children'
import { citation } from './citation'
import { tbl } from './tbl'
import { footnotes } from './footnotes'
import { footnote } from './footnote'
import { document } from './document'
import { r } from './r'
import { tr } from './tr'

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
}

function ignore() {}
