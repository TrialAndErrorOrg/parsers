import { ArticleMetaType, Root } from '@jote/rejour'
import { visit } from 'unist-util-visit'

export default function rejourMoveAbstract(options: ArticleMetaType) {
  return (tree: Root) => {
    visit(
      tree,
      (node) => node.tagName === 'front',
      (node) => {
        for (const [tagName, desc] of Object.entries(options)) {
          // const type = new ArticleMetaType()
          // const kidsOrProps =  instanceof 'string'? prop : kid
          // node.children.push({ type: 'element', tagName })
        }
      }
    )
  }
}
