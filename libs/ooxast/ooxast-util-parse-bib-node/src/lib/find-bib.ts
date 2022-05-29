import { Data as CSL } from 'csl-json'
import { Node, P, Root } from 'ooxast'
import { getPStyle } from 'ooxast-util-get-style'
import { convertElement } from 'xast-util-is-element'
import { select } from 'xast-util-select'
import { toString } from 'xast-util-to-string'

const isP = convertElement<P>('w:p')

export function findBib(tree: Node): string[] | null {
  const doc = select('w\\:body', tree as Root)
  const stack: string[] = []

  let appendixToggle = false

  if (!doc) return []
  for (let i = 0; i < doc.children.length; i++) {
    const child = doc.children[i]
    if (isP(child) && getPStyle(child)?.toLowerCase()?.includes('heading')) {
      const p = toString(child)
      if (
        ['references', 'bibliography', 'citations'].includes(
          p.toLowerCase().trim()
        )
      ) {
        appendixToggle = true
        continue
      }
      appendixToggle = false
      continue
    }
    appendixToggle &&
      stack.push(
        toString(child).replace(
          'ADDIN Mendeley Bibliography CSL_BIBLIOGRAPHY',
          ''
        )
      )
  }
  return stack
  // visit(
  //   tree,
  //   (node: Node) =>
  //     isP(node) && getPStyle(node)?.toLowerCase()?.includes('heading'),
  //   (node: P) => {
  //     const ref = ['references', 'bibliography', 'citations'].includes(
  //       toString(node).toLowerCase()
  //     )
  //     if (!ref) return
  //     //console.log(node)
  //     start = node
  //   }
  // )
  // return start.name ? start : null
}
