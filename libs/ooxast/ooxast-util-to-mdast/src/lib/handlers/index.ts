import { body } from './body.js'
import { p } from './p.js'
import { root } from './root.js'
import { text } from './text.js'
import { citation } from './citation.js'
import { tbl } from './tbl.js'
import { footnote } from './footnote.js'
import { r } from './r.js'
import { tr } from './tr.js'
import { drawing } from './drawing.js'
import { Context, Parent } from '../types.js'
import { displayMath } from './displayMath.js'
import { oMathPara } from './oMathPara.js'
import { tc } from './tc.js'
import { footnoteReference } from './footnoteReference.js'
import { oMath } from './oMath.js'
import { State } from '../state.js'

export const handlers: Context['handlers'] = {
  p,
  body,
  root,
  text,
  document: all,
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

/**
 * @param {State} state
 *   State.
 * @param {Parent} node
 *   Parent to transform.
 */
function all(state: State, node: Parent) {
  return state.all(node)
}
