/**
 * Tiny tyast builders, so handlers read like the Typst they produce.
 */
import type {
  Argument,
  ArrayValue,
  CodeValue,
  Content,
  ContentBlock,
  DictValue,
  FunctionCall,
  Label,
  Math,
  Paragraph,
  StringValue,
  Text,
  Typst,
  Value,
} from 'tyast'

export const text = (value: string): Text => ({ type: 'text', value })

export const str = (value: string): StringValue => ({ type: 'string', value })

export const code = (value: string): CodeValue => ({ type: 'code', value })

export const content = (children: Content[]): ContentBlock => ({ type: 'contentBlock', children })

export const arr = (items: Value[]): ArrayValue => ({ type: 'array', items })

/** `undefined` entries are left out, `null` ones become `none`. */
export const dict = (entries: Record<string, Value | undefined | null>): DictValue => ({
  type: 'dict',
  entries: Object.entries(entries)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => ({ key, value: value ?? code('none') })),
})

export const arg = (value: Value, name?: string): Argument =>
  name ? { type: 'argument', name, value } : { type: 'argument', value }

/**
 * `call('figure', [arg(x)], [[body]])`. Named args whose value is `undefined` are skipped,
 * which keeps handler code free of conditionals.
 */
export const call = (
  name: string,
  args: (Argument | undefined | null | false)[] = [],
  body?: Content[][],
): FunctionCall => {
  const node: FunctionCall = {
    type: 'call',
    name,
    args: args.filter((a): a is Argument => !!a),
  }
  if (body) node.body = body
  return node
}

export const named = (name: string, value: Value | undefined | null): Argument | undefined =>
  value === undefined || value === null ? undefined : arg(value, name)

export const label = (name: string): Label => ({ type: 'label', name })

export const math = (value: string, block = false): Math => ({ type: 'math', value, block })

export const paragraph = (children: Content[]): Paragraph => ({ type: 'paragraph', children })

export const raw = (value: string): Typst => ({ type: 'typst', value })

/**
 * `\noindent`: an invisible marker that paragraph grouping turns into a paragraph without a
 * first-line indent.
 */
export const noindentMarker = (): Typst => ({ type: 'typst', value: '', data: { noindent: true } })

export const isNoindentMarker = (node: Content): boolean =>
  node.type === 'typst' && !!(node as { data?: { noindent?: boolean } }).data?.noindent

/** Mark a node as block-level for paragraph grouping. */
export function asBlock<T extends Content>(node: T): T {
  ;(node as { data?: Record<string, unknown> }).data = {
    ...((node as { data?: Record<string, unknown> }).data ?? {}),
    block: true,
  }
  return node
}

export function isBlockNode(node: Content): boolean {
  switch (node.type) {
    case 'paragraph':
    case 'heading':
    case 'list':
    case 'termItem':
    case 'set':
    case 'show':
    case 'import':
    case 'let':
      return true
    case 'math':
      return !!node.block
    case 'raw':
      return !!node.block
    default:
      return !!(node as { data?: { block?: boolean } }).data?.block
  }
}
