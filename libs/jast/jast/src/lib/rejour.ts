import { Instruction, Doctype, Attributes as XastAttributes } from 'xast'
import { Node as UnistNode, Parent as UnistParent } from 'unist'
import { Text, Article, Content, Glossary, P, pMap } from './jats'
import { RequiredKeys, ValuesType } from 'utility-types'
import { names } from './names'

export type NoUndefined<T> = Exclude<T, undefined>
export type ArrayValueMaybe<T> = T extends any[]
  ? ValuesType<NoUndefined<T>>
  : NoUndefined<T>
export type AllTypes<T> = ArrayValueMaybe<ValuesType<T>>

export type RequiredMap<T> = AllTypes<T>

export interface Attributes {
  [name: string]: string | null | undefined | boolean | number
}
export interface Root extends UnistParent {
  type: 'root'
  children: Array<Text | Article | Instruction | Doctype | Content>
}
export type TagHavers = Extract<Content, { name: string }>

export interface Parent extends UnistParent {
  children: Array<Content>
}

export interface Element extends UnistNode {
  type: 'element'
  attributes: Attributes
  name: string
  children?: Content[]
}

export function isElement(node: UnistNode): node is Element {
  return node.hasOwnProperty('name') && node.hasOwnProperty('attributes')
}

export function isParagraphContent(
  node: UnistNode
): node is P['children'][number] {
  return node.type === 'text' || (isElement(node) && node.name in pMap)
}

export type NamesMap<T> = T extends { name: string } ? T['name'] : never
export type Names = NamesMap<Content>

export function isValidJATSName(tag: string): tag is Names {
  return tag in names
}

export type { UnistNode as Node }
// type JATSContent = Extract<document[keyof document], { type: string }>

// /**
//  * Find types which only have string subtypes, i.e. only have attributes or Text subtype
//  */
// type ExtractLiteral<TNode> = TNode extends {}
//   ? Omit<TNode, '_namespace' | 'constructor' | '_exists'> extends {
//       [key: string]: string | undefined
//     }
//     ? TNode
//     : never
//   : never

// /**
//  * Find tags which can have children which are not literals, but also literals
//  */
// type ExtractParents<TNode> = TNode extends { type: string }
//   ? OmitByValue<
//       Omit<TNode, '_namespace' | 'constructor' | '_exists'>,
//       string | undefined
//     > extends { [key: string]: string | any[] | undefined }
//     ? TNode
//     : never
//   : never

// type JATSLiterals = ExtractLiteral<JATSContent>

// /**
//  * Find types which are actual literals,
//  * the others do not necessarily have content
//  */
// type JATSActualLiterals = Extract<JATSLiterals, { contentType?: string }>

// /**
//  * The & type string is mostly to make sure we only
//  * pick object types
//  */
// type JATSParents = ExtractParents<JATSContent>

// /**
//  * The name of the element, default to string otherwise.
//  */
// type Name<TNode extends JATSParents = JATSParents> = Pick<
//   TNode,
//   'type'
// > extends string
//   ? Pick<TNode, 'type'>
//   : string

// type Not<T, U> = T extends U ? never : T
// type ashtb = Not<any, undefined>

// /**
//  *  Find the attributes of an JATS type, i.e. all those attributes which are strings, except for `_namespace`, `contentType` and `type`
//  */
// type PropertiesMap<TNode extends JATSContent> = OmitByValue<
//   Omit<TNode, '_namespace' | 'contentType' | 'type'>,
//   Not<ValuesType<TNode>, string | undefined>
// >

// type aishtnaupirwt = PropertiesMap<document['year']>

// type NotStringAttributeMap<TNode extends JATSContent> = Omit<
//   OmitByValue<TNode, string | undefined>,
//   'constructor' | '_exists'
// > &
//   TNode extends { contentType?: string }
//   ? { contentType: string }
//   : {}
// //& { type: 'element'; name: Name<TNode> }

// type ashitnas = NotStringAttributeMap<document['year']>

// type ChildrenMap<TNode extends JATSParents = JATSParents> = Exclude<
//   ValuesType<TNode>,
//   string | boolean | (new () => any)
// > extends {}
//   ? Exclude<ValuesType<TNode>, string | boolean | undefined | (new () => any)>
//   : never

// type ChildrenMapWithText<TNode extends JATSContent = JATSContent> =
//   Intersection<TNode, { contentType?: string }> extends {}
//     ? ChildrenMap<TNode> | Text
//     : ChildrenMap<TNode>

// type xasht = Intersection<document['year'], { contentType?: string }>
// type ashtasth = ChildrenMapWithText<document['year']>
// type JATSJastMap<TNode extends JATSContent = JATSContent> = TNode extends any
//   ? {
//       type: 'element'
//       name: Pick<TNode, 'type'>
//       attributes: PropertiesMap<TNode>
//       //children: JATSJastMap<
//       //   ChildrenMap<TNode> extends JATSContent ? ChildrenMap<TNode> : {}
//       //  >[]
//       //  Array<
//       //   | Omit<OmitByValue<TNode, string | undefined>, 'constructor' | '_exists'>
//       //   | (Pick<TNode, 'contentType'> extends string | undefined ? Text : never)
//       // >
//       /**
//        * Add Text type as possible child if the Node
//        * has the "contentType?: string" attribute
//        */
//     }
//   : never
// type y<TNode> = { type: TNode }
// type x = JATSJastMap<JATSParents>

// type JATSElements = Exclude<
//   JATSContent,
//   { contentType?: string } | string | boolean
// >

// export type JASTMap<TNode extends JATSContent> = {
//   name: string
//   attributes?: Omit<PickByValue<TNode, string | undefined>, '_namespace'>
//   children?: Omit<
//     OmitByValue<TNode, string | undefined>,
//     'constructor' | '_exists'
//   >
// }

// export type JastContent = JASTMap<JATSContent>
// export type JATSArticleType = document['article']
// type aaaaaaa = JASTMap<JATSArticleType>

// export interface Element extends UnistParent {
//   type: 'element'
//   /**
//    * The element's qualified name.
//    */
//   name: string
//   /**
//    * Information associated with the element.
//    */
//   attributes?: Attributes | undefined
//   children: Array<ElementContent>
// }

// export interface ElementChildMap
//   extends Omit<XastElementChildMap, 'instruction' | 'element' | 'cdata'> {
//   element: Element
// }
// export type ElementContent = ElementChildMap[keyof ElementChildMap]

// export interface Root extends UnistParent {
//   type: 'root'
//   children: Array<RootContent>
// }

// export interface RootChildMap {
//   // cdata: Cdata
//   comment: Comment
//   doctype: Doctype
//   element: Element
//   instruction: Instruction
//   text: Text
// }

// export type RootContent = RootChildMap[keyof RootChildMap]

// export type Content = RootContent | ElementContent
// // export interface RootChildMap extends Omit<XastRootChildMap, 'element'> {
// //   element: Element
// // }

// export { UnistNode as Node }
