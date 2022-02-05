// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Table, isElement, Element } from 'jjast'
import { all } from '../all'
import { J, Node } from '../types'
import { visit as origVisit } from 'unist-util-visit'
import { CommandArg } from 'texast'

// try to turn of typechecking for visit as it it bugged
// https://github.com/syntax-tree/unist-util-visit/issues/33
const visit = origVisit as any
export function table(j: J, table: Table) {
  let columns: string[] = []
  let hasCols = false
  // tables can be def'd in terms of cols or rows
  // TODO: [jast-util-to-texast] Store information about column alignment in tabular
  visit(
    table,
    (node: Node) => isElement(node) && ['col', 'tr'].includes(node.tagName),
    (node: Element) => {
      if (node.tagName === 'col') {
        hasCols = true
        columns.push('c')
        return
      }

      if (hasCols) return
      node?.children?.forEach((child) => {
        columns.push('c')
      })
      hasCols = true
    }
  )

  const colAlignment = columns.join(` ${j.columnSeparator ? '|' : ''} `)
  const colAlignArg: CommandArg = {
    type: 'commandArg',
    children: [{ type: 'text', value: colAlignment }],
  }

  const contents = all(j, table)
  contents.unshift(colAlignArg)

  return { type: 'environment', name: 'tabular', children: contents }
}
