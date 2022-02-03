import { ArticleMeta, Root, Content, Element, Text } from 'jast'

export type MetaProps = Record<keyof ArticleMeta, Element | Text>
export default function rejourMoveAbstract(options: ArticleMeta) {
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
