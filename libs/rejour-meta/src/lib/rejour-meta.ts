import { document, Root, Content } from 'rejour'
import { visit } from 'unist-util-visit'

export default function rejourMoveAbstract(
  options: Pick<document, 'articleMeta'>
) {
  return (tree: Root | Content) => {
    // visit(
    //   tree,
    //   (node) => node.tagName === 'front',
    //   (node) => {
    //     for (const [tagName, desc] of Object.entries(options)) {
    //       // const type = new ArticleMetaType()
    //       // const kidsOrProps =  instanceof 'string'? prop : kid
    //       // node.children.push({ type: 'element', tagName })
    //     }
    //   }
    // )
  }
}
