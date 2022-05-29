import { visit } from 'unist-util-visit'
import { Text, Root, Node, P, R } from 'ooxast'
import { convertElement, isElement } from 'xast-util-is-element'
import { select } from 'xast-util-select'
import { removePosition } from 'unist-util-remove-position'
import { select as unistSelect } from 'unist-util-select'
import { remove } from 'unist-util-remove'

// Check to see if node is a paragraph, because we want to merge elements in a paragraph
const isP = convertElement<P>('w:p')
const isR = convertElement<R>('w:r')

export interface Options {
  rPrRemoveList?: string[]
}

export function ooxastUtilRemoveRsid(tree: Root, options?: Options): Root
export function ooxastUtilRemoveRsid(tree: Node, options?: Options): Node
export function ooxastUtilRemoveRsid(
  tree: Root | Node,
  options?: Options
): Root | Node {
  visit(tree, isP, (node: P) => {
    // Clean rsid props from P
    const {
      'w:rsidR': rr,
      'w:rsidRPr': rpr,
      'w:rsidRDefault': rd,
      'w:rsidP': rp,
      ...rest
    } = node.attributes

    node.attributes = rest as any

    const kids = node.children
    const runs: typeof kids = []

    for (const kid of kids) {
      let lastEl = runs[runs.length - 1]

      if (!isR(kid)) {
        runs.push(kid)
        continue
      }
      let el = removeRsid(kid)

      el = maybeRemoveRunProperties(el, options?.rPrRemoveList)

      if (lastEl?.name !== 'w:r') {
        runs.push(el)
        continue
      }

      const lastT = select('w\\:t', lastEl)
      const t = select('w\\:t', el)
      // If either one of them don't have text, don't merge them ya dummy
      if (!lastT || !t) {
        runs.push(el)
        continue
      }

      const pr = select('w\\:rPr', el)
      const lastRPr = select('w\\:rPr', lastEl)
      //null case
      if (!lastRPr && !pr) {
        lastEl = merge(lastEl, el)
        continue
      }

      // one of them has props while the other doesn't, don't merge
      // TODO: remove unnecssary properties first, that way this will equal more often
      if ((!lastRPr && pr) || (lastRPr && !pr)) {
        runs.push(el)
        continue
      }

      // they both have properties but they differ, e.g. one is italic, the other bold. Should not merge
      // string check otherwise === don't work
      if (
        JSON.stringify(removePosition(lastRPr!, true)) !==
        JSON.stringify(removePosition(pr!, true))
      ) {
        runs.push(el)
        continue
      }

      lastEl = merge(lastEl, el)
    }

    node.children = runs
  })
  return tree
}

function maybeRemoveRunProperties(r: R, options: string[] | undefined): R {
  if (!options) {
    return r
  }

  remove(r, (element) => isElement(element) && options.includes(element.name))
  return r
}

/**
 * Merge two runs into an old one by concatenating the text properties.
 * If they don't have text, don't merge them.
 */
function merge(prev: R, curr: R): R {
  const lastText = unistSelect('text', prev) as Text
  const text = unistSelect('text', curr) as Text

  if (!lastText) {
    return curr
  }

  if (!text) {
    return prev
  }

  lastText.value += text.value
  return prev
}

function removeRsid(node: R): R {
  const { 'w:rsidRPr': rp, 'w:rsidR': r, ...rest } = node.attributes
  node.attributes = rest as any
  return node
}
