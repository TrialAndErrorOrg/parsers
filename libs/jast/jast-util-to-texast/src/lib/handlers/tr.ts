// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Tr } from 'jast-types'
import { AlignmentTab, Command, Linebreak, Text } from 'texast'
import { all } from '../all'
import { J, Node } from '../types'

export function tr(j: J, node: Tr) {
  j.rowNumber += 1
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
  if (
    node.children.every(
      (child) =>
        child.type === 'element' &&
        child.name === 'td' &&
        child.attributes.style?.includes('border-bottom')
    )
  ) {
    const commandName = j.booktabs
      ? j.rowNumber === j.numberOfRows
        ? 'bottomrule'
        : 'midrule'
      : 'hline'
    contents.push(
      ...[
        { type: 'text', value: ' ' } as Text,
        {
          type: 'command',
          name: commandName,
          children: [],
        } as Command,
      ]
    )
  }

  if (
    j.rowNumber === 1 &&
    node.children.every(
      (child) =>
        child.type === 'element' &&
        child.name === 'td' &&
        child.attributes.style?.includes('border-top')
    )
  ) {
    const commandName = j.booktabs ? 'toprule' : 'hline'
    contents.unshift({
      type: 'command',
      name: commandName,
      children: [],
    } as Command)
  }

  return j(node, 'tableRow', contents)
}
