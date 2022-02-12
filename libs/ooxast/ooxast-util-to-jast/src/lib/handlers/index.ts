import { all } from '../all'
import { body } from './body'
import { p } from './p'
import { root } from './root'
import { text } from './text'
import { wrapChildren } from '../util/wrap-children'

export const handlers = {
  p,
  body,
  root,
  text: text,
  document: all,
  t: all,
  r: all,
}
