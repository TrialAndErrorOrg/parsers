import type { NodeMap, NodeType, TypastNode } from 'typast'
import { nodeFields } from 'typast'

/** Keep going. */
export const CONTINUE = true
/** Do not walk into this node's children and fields. */
export const SKIP = 'skip'
/** Stop walking. */
export const EXIT = false

export type Action = typeof CONTINUE | typeof SKIP | typeof EXIT | void

/** Where a node sits: its parent, the field it is in (`children`, `args`, `lhs`, …) and index. */
export interface VisitInfo {
  parent: TypastNode | undefined
  /** `children`, or the name of the field (`callee`, `args`, `body`, …) */
  key: string | undefined
  /** index in the field, when it is a list */
  index: number | undefined
  /** all ancestors, root first */
  ancestors: TypastNode[]
}

export type Visitor<T extends TypastNode = TypastNode> = (node: T, info: VisitInfo) => Action

/** A node type, a list of them, or a predicate. */
export type Test = NodeType | NodeType[] | ((node: TypastNode) => boolean)

export interface ChildEntry {
  key: string
  index: number | undefined
  node: TypastNode
}

function isNode(value: unknown): value is TypastNode {
  return (
    !!value && typeof value === 'object' && typeof (value as { type?: unknown }).type === 'string'
  )
}

/** The nodes directly inside `node`, in source order: its fields, then its `children`. */
export function childEntries(node: TypastNode): ChildEntry[] {
  const out: ChildEntry[] = []
  const add = (key: string, value: unknown) => {
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (isNode(item)) out.push({ key, index, node: item })
      })
    } else if (isNode(value)) {
      out.push({ key, index: undefined, node: value })
    }
  }
  const record = node as unknown as Record<string, unknown>
  const fields = nodeFields[node.type as NodeType] ?? []
  // `mathDelimited`: open, children, close
  if (node.type === 'mathDelimited') {
    add('open', record.open)
    add('children', record.children)
    add('close', record.close)
    return out
  }
  for (const field of fields) add(field, record[field])
  add('children', record.children)
  return out
}

/**
 * Walk every node of a typast tree, depth first, in source order: unlike `unist-util-visit`,
 * this also enters code (a call's callee and arguments, the sides of an operation, a set rule's
 * arguments, …).
 */
export function visit(tree: TypastNode, visitor: Visitor): void
export function visit<T extends NodeType>(
  tree: TypastNode,
  test: T | T[],
  visitor: Visitor<NodeMap[T]>,
): void
export function visit(tree: TypastNode, test: Test, visitor: Visitor): void
export function visit(
  tree: TypastNode,
  testOrVisitor: Test | Visitor,
  maybeVisitor?: Visitor,
): void {
  const visitor = (maybeVisitor ?? testOrVisitor) as Visitor
  const test = maybeVisitor ? (testOrVisitor as Test) : undefined
  const matches =
    test === undefined
      ? () => true
      : typeof test === 'function'
        ? test
        : Array.isArray(test)
          ? (node: TypastNode) => test.includes(node.type as NodeType)
          : (node: TypastNode) => node.type === test

  const walk = (node: TypastNode, info: VisitInfo): boolean => {
    if (matches(node)) {
      const action = visitor(node, info)
      if (action === EXIT) return false
      if (action === SKIP) return true
    }
    const ancestors = [...info.ancestors, node]
    for (const entry of childEntries(node)) {
      const ok = walk(entry.node, { parent: node, key: entry.key, index: entry.index, ancestors })
      if (!ok) return false
    }
    return true
  }

  walk(tree, { parent: undefined, key: undefined, index: undefined, ancestors: [] })
}
