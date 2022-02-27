// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Tr } from 'jast-types'
import { AlignmentTab, Linebreak } from 'texast'
import { all } from '../all'
import { J, Node } from '../types'

export function tr(j: J, node: Tr) {
  const contentsNoTabs = all(j, node)
  // too many alignment tabs
  const contents = contentsNoTabs
    .filter((node) => node.type === 'tableCell')
    .flatMap((cell) => [
      { type: 'alignmentTab', value: '&' } as AlignmentTab,
      cell,
    ])
    .slice(1)

  contents.push({ type: 'linebreak', value: '\\' } as Linebreak)
  return j(node, 'tableRow', contents)
}
