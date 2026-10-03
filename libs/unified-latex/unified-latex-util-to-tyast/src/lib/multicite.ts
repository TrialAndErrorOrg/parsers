import type * as Ast from '@unified-latex/unified-latex-types'

/** biblatex multicite commands. */
export const MULTICITE_MACROS = new Set([
  'cites',
  'Cites',
  'parencites',
  'Parencites',
  'textcites',
  'Textcites',
  'autocites',
  'Autocites',
  'footcites',
  'smartcites',
  'Smartcites',
  'supercites',
])

const isString = (node: Ast.Node | undefined, value: string) =>
  node?.type === 'string' && node.content === value

const argument = (openMark: string, closeMark: string, content: Ast.Node[]): Ast.Argument => ({
  type: 'argument',
  openMark,
  closeMark,
  content,
})

/**
 * Read a bracketed group starting at `nodes[start]` (`[` … `]`, or `(` … `)`), returning its
 * content and the index after it.
 */
function readDelimited(
  nodes: Ast.Node[],
  start: number,
  open: string,
  close: string,
): { content: Ast.Node[]; end: number } | undefined {
  if (!isString(nodes[start], open)) return undefined
  let depth = 0
  for (let j = start + 1; j < nodes.length; j++) {
    if (isString(nodes[j], open)) depth++
    else if (isString(nodes[j], close)) {
      if (depth === 0) return { content: nodes.slice(start + 1, j), end: j + 1 }
      depth--
    }
  }
  return undefined
}

/**
 * biblatex's multicite commands (`\parencites(pre)(post)[pre][post]{key}[post]{key}…`) take a
 * variable number of arguments, which a fixed signature cannot describe. Collect them into the
 * macro's `args` as `[prenote] [postnote] {keys}` triples (missing optionals have an empty
 * `openMark`); global pre/postnotes in parentheses are added to the first/last citation.
 * Mutates the tree.
 */
export function groupMultiCites(tree: Ast.Root | Ast.Node[]): void {
  const visitList = (nodes: Ast.Node[]) => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      if (node.type === 'macro' && MULTICITE_MACROS.has(node.content) && !node.args?.length) {
        let j = i + 1
        // global (pre)(post)
        const globals: Ast.Node[][] = []
        while (globals.length < 2) {
          const g = readDelimited(nodes, j, '(', ')')
          if (!g) break
          globals.push(g.content)
          j = g.end
        }
        const triples: Ast.Argument[][] = []
        for (;;) {
          let k = j
          const opts: Ast.Node[][] = []
          while (opts.length < 2) {
            const o = readDelimited(nodes, k, '[', ']')
            if (!o) break
            opts.push(o.content)
            k = o.end
          }
          const keys = nodes[k]
          if (keys?.type !== 'group') break
          triples.push([
            opts.length > 0 ? argument('[', ']', opts[0]) : argument('', '', []),
            opts.length > 1 ? argument('[', ']', opts[1]) : argument('', '', []),
            argument('{', '}', keys.content),
          ])
          j = k + 1
        }
        if (triples.length === 0) continue
        if (globals.length === 1) {
          // a single global note is the postnote
          globals.unshift([])
        }
        if (globals.length === 2) {
          const first = triples[0]
          const last = triples[triples.length - 1]
          if (globals[0].length) {
            // the global prenote goes before the first citation's own prenote
            const own = first[1].openMark ? first[0].content : []
            const post = first[1].openMark ? first[1].content : first[0].content
            first[0] = argument('[', ']', [
              ...globals[0],
              ...(own.length ? [{ type: 'whitespace' } as Ast.Node, ...own] : []),
            ])
            first[1] = argument('[', ']', post)
          }
          if (globals[1].length) {
            const post = last[1].openMark ? last[1].content : last[0].content
            const pre = last[1].openMark ? last[0].content : []
            last[0] = argument('[', ']', pre)
            last[1] = argument('[', ']', [
              ...post,
              ...(post.length
                ? [{ type: 'string', content: ',' } as Ast.Node, { type: 'whitespace' } as Ast.Node]
                : []),
              ...globals[1],
            ])
          }
        }
        node.args = triples.flat()
        nodes.splice(i + 1, j - i - 1)
        continue
      }
      // recurse
      const n = node as { content?: unknown; args?: Ast.Argument[] }
      if (Array.isArray(n.content)) visitList(n.content as Ast.Node[])
      for (const a of n.args ?? []) visitList(a.content)
    }
  }
  visitList(Array.isArray(tree) ? tree : tree.content)
}
