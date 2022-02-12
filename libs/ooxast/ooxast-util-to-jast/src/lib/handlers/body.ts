// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Sec } from 'jjast'
import { P, Parent, Parent } from 'ooxast'
import { P as JastP } from 'jjast'
import { all } from '../all'
import { J, Node, Root, Body } from '../types'
import { wrap } from '../util/wrap'
import { convertElement } from 'xast-util-is-element'
import { getPStyle } from '../util/get-pstyle'
import { wrapSections } from '../util/wrap-section'

const isP = convertElement<P>('w:p')
export function body(j: J, body: Body) {
  return wrapSections(j, body)
}
