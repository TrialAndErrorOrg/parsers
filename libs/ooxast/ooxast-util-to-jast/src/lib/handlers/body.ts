// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { P } from 'ooxast'
import { J, Node, Root, Body } from '../types'
import { convertElement } from 'xast-util-is-element'
import { wrapSections } from '../util/wrap-section'

export function body(j: J, body: Body) {
  return wrapSections(j, body)
}
