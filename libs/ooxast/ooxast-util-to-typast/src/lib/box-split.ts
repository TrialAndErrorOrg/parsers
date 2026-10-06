/**
 * Typst floats cannot break across pages, so a "Box N" that is taller than a page would run
 * off the bottom. Like the hand-typeset LaTeX articles (which continue a long box in a second,
 * untitled box), split the box content into page-sized pieces.
 *
 * Heights are estimated in lines of the box's `\small` text from character counts; this is a
 * deliberately rough model that errs on the side of splitting early.
 */
import type { Argument, BlockContent, Content, FunctionCall, List, Value } from 'typast-builder/doc'

/** Box width → characters per line of `\small` Open Sans */
const CHARS_PER_LINE = { column: 48, wide: 70, full: 112 } as const
/** Lines of box text that fit on a page, after the box title and padding */
const LINES_PER_PAGE = 38

export type BoxWidth = keyof typeof CHARS_PER_LINE

/** Split the blocks of a box into chunks that each fit on a page. */
export function splitBoxBody(body: BlockContent[], width: BoxWidth): BlockContent[][] {
  const cpl = CHARS_PER_LINE[width]
  const chunks: BlockContent[][] = [[]]
  let used = 0
  const queue = [...body]
  while (queue.length) {
    const block = queue.shift()!
    const lines = estimate(block, cpl)
    const current = chunks[chunks.length - 1]
    if (used + lines <= LINES_PER_PAGE || (current.length === 0 && block.type !== 'list')) {
      current.push(block)
      used += lines
      continue
    }
    if (block.type === 'list' && block.children.length > 1) {
      const [head, tail] = splitList(block, LINES_PER_PAGE - used, cpl, current.length === 0)
      if (head) current.push(head)
      if (tail) {
        if (current.length) chunks.push([])
        used = 0
        queue.unshift(tail)
      } else {
        used += head ? estimate(head, cpl) : 0
      }
      continue
    }
    chunks.push([block])
    used = lines
  }
  return chunks.filter((c) => c.length)
}

/** Split a list by its top-level items so the head fits in `room` lines. */
function splitList(
  list: List,
  room: number,
  cpl: number,
  /** take at least one item (the chunk is empty, so waiting does not help) */
  force: boolean,
): [List | undefined, List | undefined] {
  let used = 0
  let n = 0
  for (const item of list.children) {
    const lines = estimateChildren(item.children as Content[], cpl - 4)
    if (used + lines > room && !(force && n === 0)) break
    used += lines
    n++
  }
  if (n === 0) return [undefined, list]
  if (n === list.children.length) return [list, undefined]
  const head: List = { ...list, children: list.children.slice(0, n) }
  const tail: List = { ...list, children: list.children.slice(n) }
  if (list.ordered) tail.start = (list.start ?? 1) + n
  return [head, tail]
}

function estimate(node: Content, cpl: number): number {
  switch (node.type) {
    case 'paragraph':
    case 'heading':
      return lines(textLength(node), cpl) + 0.5
    case 'list':
      return node.children.reduce(
        (a, item) => a + estimateChildren(item.children as Content[], cpl - 4),
        0.5,
      )
    case 'math':
      return node.block ? 2.5 : 1
    case 'call':
      return estimateCall(node, cpl)
    default:
      return lines(textLength(node), cpl)
  }
}

/** Inline content counts as one paragraph, blocks are summed */
function estimateChildren(children: Content[], cpl: number): number {
  let total = 0
  let inline = 0
  for (const c of children) {
    if (c.type === 'list' || c.type === 'paragraph' || c.type === 'heading') {
      if (inline) total += lines(inline, cpl)
      inline = 0
      // paragraphs in list items have no extra spacing in tight lists
      total += c.type === 'list' ? estimate(c, cpl) : lines(textLength(c), cpl)
    } else {
      inline += textLength(c)
    }
  }
  if (inline) total += lines(inline, cpl)
  return Math.max(total, 1)
}

function estimateCall(call: FunctionCall, cpl: number): number {
  if (call.name === 'table') {
    const columns = columnCount(call.args)
    const cells = call.args.flatMap((a) => cellsOf(a))
    let total = 1
    for (let i = 0; i < cells.length; i += columns) {
      const row = cells.slice(i, i + columns)
      total += 0.4 + Math.max(...row.map((c) => lines(c, Math.max(8, cpl / columns - 2))))
    }
    return total
  }
  if (call.name === 'figure' || call.name === 'image') return 15
  return lines(textLength(call), cpl) + 0.5
}

function columnCount(args: Argument[]): number {
  const value = args.find((a) => a.name === 'columns')?.value
  if (value?.type === 'array') return value.items.length || 1
  if (value?.type === 'code' && /^\d+$/.test(value.value)) return parseInt(value.value, 10)
  return 1
}

/** Text lengths of the cells among a table's arguments */
function cellsOf(arg: Argument): number[] {
  if (arg.name) return []
  const value = arg.value
  if (value.type === 'contentBlock') return [textLength(value)]
  if (value.type === 'call') {
    if (value.name === 'table.cell') return [textLength(value)]
    if (value.name === 'table.header' || value.name === 'table.footer') {
      return value.args.flatMap((a) => cellsOf(a))
    }
  }
  return []
}

function lines(chars: number, cpl: number): number {
  return Math.max(1, Math.ceil(chars / cpl))
}

function textLength(node: Content | Value): number {
  let n = 0
  JSON.stringify(node, (key, value) => {
    if (value && typeof value === 'object' && value.type === 'text') n += value.value.length
    return value
  })
  return n
}
