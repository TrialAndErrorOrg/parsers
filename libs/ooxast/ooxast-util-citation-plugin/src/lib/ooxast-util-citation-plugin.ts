import { visit } from 'unist-util-visit'
import { T } from 'ooxast'
import { Node } from 'unist'
import { convertElement } from 'xast-util-is-element'
import { toString } from 'xast-util-to-string'

const isInstr = convertElement<T>('w:instrText')
export function detectCitePlugin(node: Node) {
  const counter = { citavi: 0, endnote: 0, mendeley: 0, word: 0, zotero: 0 }
  visit(node, isInstr, (node: T) => {
    const text = toString(node)
    if (text.toLowerCase().includes('zotero')) {
      counter.zotero++
      return
    }
    if (text.toLowerCase().includes('mendeley')) {
      counter.mendeley++
      return
    }
    if (text.toLowerCase().includes('endnote')) {
      counter.endnote++
      return
    }
    if (text.includes('CITATION')) {
      counter.word++
      return
    }

    if (
      Buffer.from(text, 'base64').toString().toLowerCase().includes('citavi')
    ) {
      counter.citavi++
      return
    }
  })

  return Object.entries(counter).sort((a, b) => b[1] - a[1])[0][0]
}
