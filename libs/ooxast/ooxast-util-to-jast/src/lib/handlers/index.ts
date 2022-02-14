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

export const handlers = {
  p,
  body,
  root,
  text: text,
  document,
  footnotes,
  footnote,
  t: all,
  r: all,
  instrText: citation,
  tbl,
}
