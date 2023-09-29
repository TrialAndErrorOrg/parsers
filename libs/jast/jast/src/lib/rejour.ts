import { Instruction, Doctype, Attributes as XastAttributes } from 'xast'
import { Node as UnistNode, Parent as UnistParent } from 'unist'
import { Element as XastElement } from 'xast'
import { Text, Article, Content, Glossary, P, pMap } from './jats.js'
import { ValuesType } from 'utility-types'
import { names } from './names.js'

export type NoUndefined<T> = Exclude<T, undefined>
export type ArrayValueMaybe<T> = T extends any[] ? ValuesType<NoUndefined<T>> : NoUndefined<T>
export type AllTypes<T extends any[] | ArrayLike<any> | Record<any, any>> = ArrayValueMaybe<
  ValuesType<T>
>

export type RequiredMap<T extends any[] | ArrayLike<any> | Record<any, any>> = AllTypes<T>

export interface Attributes {
  [name: string]: string | null | undefined
}
export interface Root extends UnistParent {
  type: 'root'
  children: Array<Text | Article | Instruction | Doctype | Content>
}
export type TagHavers = Extract<Content, { name: string }>

export interface Parent extends UnistParent {
  children: Content[]
}

export interface Element extends XastElement {
  type: 'element'
  attributes: Attributes
  name: string
  children: Content[]
}

export function isElement(node: UnistNode): node is Element {
  return 'name' in node && 'attributes' in node
}

export function isParagraphContent(node: UnistNode): node is P['children'][number] {
  return node.type === 'text' || (isElement(node) && node.name in pMap)
}

export type NamesMap<T> = T extends { name: string } ? T['name'] : never
export type Names = NamesMap<Content>

export function isValidJATSName(tag: string): tag is Names {
  return tag in names
}

export type { XastElement as Node }
