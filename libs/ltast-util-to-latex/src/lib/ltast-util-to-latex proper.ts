import { handle } from './handle'
import { zwitch } from 'zwitch'
import { configure } from './configure'
import { Options, Context, Node, Handle, Join, Unsafe } from './types'

const invalid: Handle = (value: unknown) => {
  throw new Error('Cannot handle value `' + value + '`, expected node')
}
const unknown: Handle = (node: Node) => {
  throw new Error(`Unknown type ${node.type}, skipping...`)
}

export function toLatex(tree: Node, options: Options = {}): string {
  //   const handle = zwitch('type', { invalid,

  //     // @ts-expect-error hush
  //     unknown,
  //     handlers: node })
  //   const result = Array.isArray(node)
  //     ? node.map((node) => toLatex(node, options)).join('')
  //     : handle[node.type](node)
  //   return result
  // }

  /** @type {Context} */
  // @ts-expect-error: we’ll add `handle` later.
  const context: Context = {
    enter,
    stack: [],
    unsafe: [],
    join: [],
    handlers: {},
    options: {},
    indexStack: [],
    math: false,
    align: false,
  }

  configure(context, { handlers: handle })
  configure(context, options)

  // if (context.options.tightDefinitions) {
  //   configure(context, {join: [joinDefinition]})
  // }

  /** @type {Handle} */
  // @ts-expect-error: hush.
  context.handle = zwitch('type', {
    // @ts-expect-error: hush.
    invalid,
    // @ts-expect-error: hush.
    unknown,
    // @ts-expect-error: hush.
    handlers: context.handlers,
  })

  let result = context.handle(tree, null, context, {
    before: '\n',
    after: '\n',
    now: { line: 1, column: 1 },
    lineShift: 0,
  })

  if (
    result &&
    result.charCodeAt(result.length - 1) !== 10 &&
    result.charCodeAt(result.length - 1) !== 13
  ) {
    result += '\n'
  }

  return result

  /** @type {Context['enter']} */
  function enter(name: string) {
    context.stack.push(name)
    return exit

    function exit() {
      context.stack.pop()
    }
  }
}
