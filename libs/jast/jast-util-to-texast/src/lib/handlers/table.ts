// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Table, isElement, Element, Tr, Col } from 'jast-types'
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
    (node: Node) => isElement(node) && ['col', 'tr'].includes(node.name),
    (node: Col | Tr) => {
      if (node.name === 'col') {
        hasCols = true
        columns.push('c')
        return
      }

      if (hasCols) return
      let tempCols: string[] = []

      node?.children?.forEach((child) => {
        isElement(child) && child.name === 'td' && tempCols.push('c')
      })
      // Just make the table as wide as it needs to be, overfull tables
      // error out while  underfull ones are fine
      if (tempCols.length > columns.length) columns = tempCols
      tempCols = []
      return
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
