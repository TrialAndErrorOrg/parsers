import { visit } from '@jote/utils'
import { is } from 'unist-util-is'
import { Front, isElement, Root } from 'jjast'
import { VFile } from 'vfile'
import { Node } from 'unist'

export default function rejourFrontmatter() {
  return (tree: Root, file: VFile) => {
    visit(
      tree,
      (node: Node) => isElement(node) && node.name === 'front',
      (node: Front) => {
        const children = node.children

        children.forEach((child, index) => {
          if (
            is(children[index - 1], 'SentenceNode') &&
            is(child, 'WhiteSpaceNode') &&
            is(children[index + 1], 'SentenceNode')
          ) {
            console.log(child)
          }
        })
      }
    )
  }
}
