import { all } from '../all'
import { body } from './body'
import { p } from './p'
import { root } from './root'
import { text } from './text'
import { citation } from './citation'
import { tbl } from './tbl'
import { footnote } from './footnote'
import { document } from './document'
import { r } from './r'
import { tr } from './tr'
import { drawing } from './drawing'
import { Context } from '../types'
import { displayMath } from './displayMath'
import { oMathPara } from './oMathPara'
import { tc } from './tc'
import { footnoteReference } from './footnoteReference'
import { oMath } from './oMath'

export const handlers: Context['handlers'] = {
  p,
  body,
  root,
  text,
  document,
  footnotes: all,
  footnote,
  t: all,
  oMathPara: oMathPara,
  oMath,
  r,
  instrText: citation,
  tbl,
  tr,
  tc,
  article: ignore,
  xml: ignore,
  instruction: ignore,
  doctype: ignore,
  drawing,
  footnoteReference,
  endNoteReference: footnoteReference,
}

function ignore() {
  //
}
