/**
 * Running-text mentions of captioned figures and tables ("see Figure 1", "Tables 2 and 3")
 * become links to the `<fig:N>`/`<tab:N>` labels, like `\ref` links in the LaTeX articles.
 * The text itself is kept as written (Word documents number by hand).
 */
import type { Content, FunctionCall, PhrasingContent, Text, Value } from 'typast-builder/doc'
import { slug } from './util.js'

const MENTION =
  // `\s` includes the no-break space Word puts in "Figure 1"
  /\b(Figures?|Figs?\.|Tables?)((?:(?:\s*,\s*|\s+(?:and|&)\s+|\s+)[A-Z]?\d+[a-z]?\b)+)/g
const NUMBER = /[A-Z]?\d+[a-z]?\b/g

/** Calls whose content must not get links: links can't nest, captions name their own figure */
const SKIP_CALLS = new Set(['link', 'figure', 'wide-figure', 'cite', 'ref', 'raw', 'image'])

/** Labels that occur exactly once in the tree (a duplicate label cannot be linked to) */
export function uniqueLabels(nodes: Content[]): Set<string> {
  const counts = new Map<string, number>()
  JSON.stringify(nodes, (key, value) => {
    if (value && typeof value === 'object' && value.type === 'label') {
      counts.set(value.name, (counts.get(value.name) ?? 0) + 1)
    }
    return value
  })
  return new Set([...counts].filter(([, n]) => n === 1).map(([name]) => name))
}

export function linkMentions<T extends Content>(nodes: T[], labels: Set<string>): T[] {
  if (![...labels].some((l) => l.startsWith('fig:') || l.startsWith('tab:'))) return nodes
  return walk(nodes, labels)
}

function walk<T extends Content>(nodes: T[], labels: Set<string>): T[] {
  return nodes.flatMap((node) => visit(node, labels) as T[])
}

function visit(node: Content, labels: Set<string>): Content[] {
  if (node.type === 'text') return splitText(node, labels)
  if (node.type === 'call') {
    if (SKIP_CALLS.has(node.name)) return [node]
    return [
      {
        ...node,
        args: node.args.map((a) => ({ ...a, value: visitValue(a.value, labels) })),
        body: node.body?.map((b) => walk(b, labels)),
      },
    ]
  }
  if ('children' in node && Array.isArray(node.children)) {
    return [{ ...node, children: walk(node.children as Content[], labels) } as Content]
  }
  return [node]
}

function visitValue(value: Value, labels: Set<string>): Value {
  if (value.type === 'contentBlock') return { ...value, children: walk(value.children, labels) }
  if (value.type === 'call') return visit(value, labels)[0] as FunctionCall
  if (value.type === 'array')
    return { ...value, items: value.items.map((v) => visitValue(v, labels)) }
  return value
}

function splitText(node: Text, labels: Set<string>): PhrasingContent[] {
  const out: PhrasingContent[] = []
  let last = 0
  for (const m of node.value.matchAll(MENTION)) {
    const kind = m[1].startsWith('T') ? 'tab' : 'fig'
    const numbers = [...m[2].matchAll(NUMBER)]
    const targets = numbers.map((n) => labelFor(kind, n[0], labels))
    if (!targets.some(Boolean)) continue
    const start = m.index ?? 0
    if (start > last) out.push({ type: 'text', value: node.value.slice(last, start) })
    if (numbers.length === 1 && targets[0]) {
      // "Figure 1" as one link, like \autoref
      out.push(linkTo(targets[0], m[0]))
    } else {
      // "Figures 2 and A1": link each number
      out.push({ type: 'text', value: m[1] })
      let pos = 0
      for (const [i, n] of numbers.entries()) {
        const at = n.index ?? 0
        if (at > pos) out.push({ type: 'text', value: m[2].slice(pos, at) })
        const target = targets[i]
        out.push(target ? linkTo(target, n[0]) : { type: 'text', value: n[0] })
        pos = at + n[0].length
      }
      if (pos < m[2].length) out.push({ type: 'text', value: m[2].slice(pos) })
    }
    last = start + m[0].length
  }
  if (!out.length) return [node]
  if (last < node.value.length) out.push({ type: 'text', value: node.value.slice(last) })
  return out
}

function labelFor(kind: 'fig' | 'tab', number: string, labels: Set<string>): string | undefined {
  const name = slug(`${kind}:${number}`)
  return labels.has(name) ? name : undefined
}

function linkTo(label: string, text: string): FunctionCall {
  return {
    type: 'call',
    name: 'link',
    args: [{ type: 'argument', value: { type: 'code', value: `<${label}>` } }],
    body: [[{ type: 'text', value: text }]],
  }
}
