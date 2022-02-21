import { visit } from '@jote/utils'
import { P, T } from 'ooxast'
import { parseTextCite, parser } from 'parse-text-cite'
import { Node } from 'unist'
import { convertElement } from 'xast-util-is-element'
import { selectAll } from 'xast-util-select'

const isT = convertElement<T>('w:t')
const isP = convertElement<P>('w:p')

export function findCitations(tree: Node) {
  const citations: any[] = []
  let references = false
  visit(tree, isP, (p: P) => {
    const wts = selectAll('w\\:t', p)
    if (wts.length === 0) return
    const wt = wts.reduce((acc: string[], node: Node, index) => {
      if (references) return acc
      if (!(isT(node) && node.children[0].value)) {
        return acc
      }
      const val = node.children[0].value
      if (index === 0) {
        acc.push(val)
        return acc
      }
      if (val.includes('References')) {
        references = true
        return acc
      }
      if (!val.match(/[()]/g)) {
        acc[acc.length - 1] += val
        return acc
      }
      if (
        // eslint-disable-next-line
        acc[acc.length - 1].match(/.*?\([^)]*$/gu) &&
        // eslint-disable-next-line
        val.match(/[^(]*\).*$/gu)
      ) {
        acc[acc.length - 1] += val
        return acc
      }

      if (val.match(/^ *\(\d\d\d\d.*?\)/)) {
        acc[acc.length - 1] += val
        return acc
      }
      acc.push(val)
      return acc
    }, [])

    console.dir(wt, { depth: null })
    const parsed = wt.flatMap((text) => {
      try {
        return parseTextCite(text)
      } catch (e) {
        console.error(e)
        return text
      }
    })
    p.children = parsed
  })
  console.dir(tree, { depth: null })
  return tree
}
