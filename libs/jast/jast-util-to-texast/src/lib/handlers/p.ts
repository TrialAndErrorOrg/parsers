import { isElement, P, Xref } from 'jast-types'
import { all } from '../all'
import { J, Text } from '../types'

export function p(j: J, p: P) {
  return j(p, 'paragraph', all(j, p))
  //combineCitations(p)))
}

const combineCitations = (p: P): P => {
  let stack: (Xref | Text)[] = []
  p.children = p.children.reduce((acc: typeof p.children, node, index) => {
    if (
      !(
        (isElement(node) &&
          node.name === 'xref' &&
          node.attributes.refType === 'bibr') ||
        (stack.length > 0 &&
          node.type === 'text' &&
          node.value.replace(/[ ,]+/g, '') === '')
      )
    ) {
      stack.length > 1 ? acc.push(...combineStack(stack)) : acc.push(...stack)
      stack = []
      acc.push(node)
      return acc
    }

    stack.push(node)
    return acc
  }, [])
  return p
}

const combineStack = (nodes: (Text | Xref)[]): (Xref | Text)[] => {
  // we want to keep all the last textelements
  let lastXref = 0
  nodes.forEach((node, index) => {
    if (node.type === 'text') return
    lastXref = index + 1
  })

  const [rawCitations, stragglers] = [
    nodes.slice(0, lastXref),
    nodes.slice(lastXref, -1),
  ]

  const combinedCitation: Xref = {
    type: 'element',
    name: 'xref',
    attributes: { refType: 'bibr' },
    children: rawCitations.flatMap((cite) => {
      if (cite.type === 'text') return [cite]
      return cite.children
    }),
  }

  return [combinedCitation, ...stragglers]
}
