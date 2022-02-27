// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Fig, isElement } from 'jast-types'
import { all } from '../all'
import { J } from '../types'

// try to turn of typechecking for visit as it it bugged
// https://github.com/syntax-tree/unist-util-visit/issues/33

const relativeOrderFigure = (element: Fig['children'][number]) => {
  if (!isElement(element)) return 4
  switch (element.name) {
    case 'graphic':
      return 1
    case 'caption':
      return 2
    case 'label':
      return 3
    default:
      return 4
  }
}
export function fig(j: J, fig: Fig) {
  // console.log(fig.children)
  fig.children.sort((a, b) => relativeOrderFigure(a) - relativeOrderFigure(b))
  // console.log(fig.children)

  return { type: 'environment', name: 'figure', children: all(j, fig) }
}
