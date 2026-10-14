/** Tiny builders for the document model, for tests. */
import type {
  Argument,
  Content,
  ContentBlock,
  Emphasis,
  FunctionCall,
  Heading,
  Label,
  Linebreak,
  List,
  ListItem,
  Math,
  Paragraph,
  Raw,
  Ref,
  Root,
  Strong,
  TermItem,
  Text,
  Value,
  DocNode,
} from '../lib/doc.js'
import { toTypst as print } from 'typast-util-to-typst'
import { lower, lowerValue } from '../lib/lower.js'

export const root = (...children: Content[]): Root => ({ type: 'root', children })
export const t = (value: string): Text => ({ type: 'text', value })
export const p = (...children: Content[]): Paragraph => ({ type: 'paragraph', children })
export const strong = (...children: Content[]): Strong => ({ type: 'strong', children })
export const emph = (...children: Content[]): Emphasis => ({ type: 'emphasis', children })
export const br = (): Linebreak => ({ type: 'linebreak' })
export const h = (depth: number, children: Content[], label?: string): Heading => ({
  type: 'heading',
  depth,
  children,
  ...(label ? { label } : {}),
})
export const li = (...children: Content[]): ListItem => ({ type: 'listItem', children })
export const ul = (...children: ListItem[]): List => ({ type: 'list', ordered: false, children })
export const ol = (props: Partial<List>, ...children: ListItem[]): List => ({
  type: 'list',
  ordered: true,
  ...props,
  children,
})
export const term = (termChildren: Content[], ...children: Content[]): TermItem => ({
  type: 'termItem',
  term: termChildren,
  children,
})
export const raw = (value: string, props: Partial<Raw> = {}): Raw => ({
  type: 'raw',
  value,
  ...props,
})
export const math = (value: string, block = false): Math => ({ type: 'math', value, block })
export const label = (name: string): Label => ({ type: 'label', name })
export const ref = (target: string, supplement?: Content[]): Ref => ({
  type: 'ref',
  target,
  ...(supplement ? { supplement } : {}),
})

export const str = (value: string): Value => ({ type: 'string', value })
export const code = (value: string): Value => ({ type: 'code', value })
export const content = (...children: Content[]): ContentBlock => ({
  type: 'contentBlock',
  children,
})
export const a = (value: Value, name?: string): Argument =>
  name === undefined ? { type: 'argument', value } : { type: 'argument', name, value }
export const call = (name: string, args: Argument[] = [], ...body: Content[][]): FunctionCall => ({
  type: 'call',
  name,
  args,
  ...(body.length ? { body } : {}),
})

/**
 * Lower a document node (or nodes) and print it, the way the old `toTypst` took the document
 * model directly.
 */
export function toTypst(tree: DocNode | Content[], options?: Parameters<typeof print>[1]): string {
  if (Array.isArray(tree)) return print(lower(tree), options)
  switch (tree.type) {
    case 'root':
      return print(lower(tree as Root), options)
    case 'string':
    case 'code':
    case 'array':
    case 'dict':
    case 'contentBlock':
      return print(lowerValue(tree as Value), options)
    case 'argument': {
      const arg = tree as Argument
      const value = print(lowerValue(arg.value), options)
      return arg.name ? `${arg.name}: ${value}` : value
    }
    default:
      return print(lower([tree as Content]), options)
  }
}
