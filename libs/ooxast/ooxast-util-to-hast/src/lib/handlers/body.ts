// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { P } from 'ooxast'
import { H, Node, Root, Body } from '../types'
import { convertElement } from 'xast-util-is-element'
import { wrapSections } from '../util/wrap-section'
import { all } from '../all'

export function body(h: H, body: Body) {
  return h(body, 'body', all(h, body))
}
