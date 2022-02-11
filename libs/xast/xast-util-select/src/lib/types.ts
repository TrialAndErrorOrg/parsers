import { Node as Node } from 'unist'
import { Parent as Parent } from 'unist'
import { Root as Root } from 'xast'
import { Element as Element } from 'xast'
import { Attributes as Attribute } from 'xast'
export type XastParent = Element | Root
import { Element as XXastParent } from 'xast'
export type XastNode = XXastParent['children'][number] | Root

export type ElementChild = Element['children'][number]
export type AttributeValue = Attribute[string]
import { Selector as Selector } from 'css-selector-parser'
import { Selectors as Selectors } from 'css-selector-parser'
import { RuleSet as RuleSet } from 'css-selector-parser'
import { Rule as Rule } from 'css-selector-parser'
import { RulePseudo as RulePseudo } from 'css-selector-parser'
import { AttrValueType as AttrValueType } from 'css-selector-parser'
import { html } from 'property-information'

export type {
  Element,
  AttrValueType,
  Selector,
  Selectors,
  RuleSet,
  Rule,
  RulePseudo,
  Parent,
  Node,
}
/**
 *  Fix for types.
 */
export type Query = Selector | Rule | RulePseudo
export interface RuleAttr {
  name: string
  operator?: string
  valueType?: AttrValueType
  value?: string
}

/**
 * More specific type for registered selector pseudos.
 */
export interface RulePseudoSelector {
  name: string
  valueType: 'selector'
  value: Selector
}
/**
 * Overwrite to compile nth-checks once.
 */
export interface RulePseudoNth {
  name: string
  valueType: 'function'
  value: (index: number) => boolean
}

export type Space = 'html' | 'svg'
export type Direction = 'auto' | 'ltr' | 'rtl'
export type Schema = typeof html
export type Info = Schema['property'][string]

export interface SelectState {
  scopeElements?: Array<Element>
  iterator?: SelectIterator
  one?: boolean
  shallow?: boolean
  index?: boolean
  found?: boolean
  space?: Space
  schema?: Schema
  language?: string
  direction?: Direction
  editableOrEditingHost?: boolean
  typeIndex?: number
  elementIndex?: number
  typeCount?: number
  elementCount?: number
}

export type SelectIterator = (
  query: Rule,
  node: XastNode,
  index: number,
  parent: XastParent | null,
  state: SelectState
) => void

export type Handler = (
  query: Rule,
  node: XastNode,
  index: number | null,
  parent: Parent | null,
  state: SelectState
) => void

export {}
