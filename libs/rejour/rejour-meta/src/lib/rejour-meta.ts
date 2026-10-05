import { ArticleMeta, Root, Content, Element, Text } from 'jast-types'

export type MetaProps = Record<keyof ArticleMeta, Element | Text>
export function rejourMoveAbstract(options: ArticleMeta) {
  return (tree: Root | Content) => {
    // visit(
    //   tree,
    //   (node) => node.name === 'front',
    //   (node) => {
    //     for (const [name, desc] of Object.entries(options)) {
    //       // const type = new ArticleMetaType()
    //       // const kidsOrProps =  instanceof 'string'? prop : kid
    //       // node.children.push({ type: 'element', name })
    //     }
    //   }
    // )
  }
}
