// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Tr } from 'jjast'
import { AlignmentTab, Linebreak } from 'texast'
import { all } from '../all'
import { J, Node } from '../types'

export function tr(j: J, node: Tr) {
  const contentsNoTabs = all(j, node)
  const contents = contentsNoTabs.flatMap((cell) => [
    cell,
    { type: 'alignmentTab', value: '&' } as AlignmentTab,
  ])

  contents.push({ type: 'linebreak', value: '\\' } as Linebreak)
  return j(node, 'tableRow', contents)
}
