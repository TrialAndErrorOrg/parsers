import { s } from '@unified-latex/unified-latex-builder'
import type { Element } from 'xast'
import { all } from '../all.js'
import { H, Handle } from '../types.js'

/** `m:eqArr`: one `m:e` per line of an equation array, separated by `\\` */
export const eqArr: Handle = (h: H, node: Element) =>
  node.children
    .filter((child): child is Element => child.type === 'element' && child.name === 'm:e')
    .flatMap((row, idx) => [...(idx ? [s('\\\\')] : []), ...all(h, row)])
