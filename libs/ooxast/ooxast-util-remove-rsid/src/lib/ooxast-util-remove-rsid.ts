import { visit, remove } from 'misc'
import { Text, Root, Node, P, R } from 'ooxast'
import { convertElement, isElement } from 'xast-util-is-element'
import { select } from 'xast-util-select'
import { select as unistSelect } from 'unist-util-select'
import { getRStyle } from 'ooxast-util-get-style'

// Check to see if node is a paragraph, because we want to merge elements in a paragraph
const isP = convertElement<P>('w:p')
const isR = convertElement<R>('w:r')

export interface Options {
  rPrRemoveList?: string[]
}

export function ooxastUtilRemoveRsid(tree: Root, options?: Options): Root
export function ooxastUtilRemoveRsid(tree: Node, options?: Options): Node
export function ooxastUtilRemoveRsid(tree: Root | Node, options?: Options): Root | Node {
  visit(tree, isP, (node: P) => {
    // Clean rsid props from P
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      'w:rsidR': _rr,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      'w:rsidRPr': _rpr,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      'w:rsidRDefault': rd,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

      if (!isR(lastEl)) {
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

      const pr = getRStyle(el)
      const lastRPr = getRStyle(lastEl)
      //null case
      if (!lastRPr && !pr) {
        lastEl = merge(lastEl, el)
        continue
      }

      if (JSON.stringify(lastRPr) !== JSON.stringify(pr)) {
        runs.push(el)
        continue
      }

      // // one of them has props while the other doesn't, don't merge
      // // TODO: remove unnecssary properties first, that way this will equal more often
      // if ((!lastRPr && pr) || (lastRPr && !pr)) {
      //   runs.push(el)
      //   continue
      // }

      // they both have properties but they differ, e.g. one is italic, the other bold. Should not merge
      // string check otherwise === don't work

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

  remove(
    r,
    (element: R['children'][number]) => isElement(element) && options.includes(element.name),
  )
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { 'w:rsidRPr': rp, 'w:rsidR': r, ...rest } = node.attributes
  node.attributes = rest as any
  return node
}
