import { visit } from '@jote/utils'
import { T } from 'ooxast'
import { parseTextCite, parser } from 'parse-text-cite'
import { Node } from 'unist'
import { convertElement } from 'xast-util-is-element'
import { selectAll } from 'xast-util-select'

const isT = convertElement<T>('w:t')
export function findCitations(tree: Node) {
  const citations: any[] = []
  const wts = selectAll('w\\:t', tree as any)
  console.log(wts)
  const wt = wts
    .flatMap((node) => isT(node) && node.children[0].value)
    .join(' ')
    .split('. ')

  let parsed: any
  try {
    for (const wet of wt) {
      parser.feed(wet)
      parsed = parser.results
    }
  } catch (e) {
    console.error(e)
    return
  }
  console.log(wt)
  console.log(parsed)
  return citations
}
