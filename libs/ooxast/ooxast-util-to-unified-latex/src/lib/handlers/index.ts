import { all } from '../all.js'
import { body } from './body.js'
import { p } from './p.js'
import { root } from './root.js'
import { text } from './text.js'
import { citation } from './citation.js'
import { tbl } from './tbl.js'
import { footnote } from './footnote.js'
import { document } from './document.js'
import { r } from './r.js'
import { tr } from './tr.js'
import { drawing } from './drawing.js'
import { Context } from '../types.js'
import { displayMath } from './displayMath.js'
import { oMathPara } from './oMathPara.js'
import { tc } from './tc.js'
import { footnoteReference } from './footnoteReference.js'
import { oMath } from './oMath.js'

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
