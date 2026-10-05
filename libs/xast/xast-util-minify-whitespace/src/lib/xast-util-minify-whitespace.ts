/**
 * Port of `rehype-minify-whitespace` 5.0.1 (MIT, © Titus Wormer, see LICENSE) to xast.
 *
 * The algorithm is unchanged. What differs is how elements are classified: the original looks
 * elements up by `tagName` in lists of HTML elements (block-like, content, skippable, `<pre>`-like).
 * xast elements have a `name`, not a `tagName`, so on xast those lists never matched and every
 * element was treated as inline. Here the lists are options, empty by default, which keeps exactly
 * the behaviour the converters were built on while letting callers describe their vocabulary.
 */
import type { Element, Nodes, Parents, Root, RootContent, Text } from 'xast'

export interface Options {
  /**
   * Collapse whitespace runs that contain a line ending to that line ending, instead of to a
   * single space.
   *
   * @default false
   */
  newlines?: boolean | null | undefined
  /**
   * Names of elements that are block-like: whitespace directly inside or around them does not
   * contribute anything and is removed (HTML: `p`, `div`, `li`, ...).
   *
   * @default []
   */
  blocks?: ReadonlyArray<string> | null | undefined
  /**
   * Names of elements that contribute content on their own, so whitespace next to them is kept
   * (HTML: `img`, `input`, ...).
   *
   * @default []
   */
  content?: ReadonlyArray<string> | null | undefined
  /**
   * Names of elements that are skipped when looking ahead for a boundary (HTML: `script`,
   * `template`, ...).
   *
   * @default []
   */
  skippable?: ReadonlyArray<string> | null | undefined
  /**
   * Names of elements whose whitespace is neither collapsed nor trimmed (HTML: `pre`, `script`,
   * ...).
   *
   * @default []
   */
  preserve?: ReadonlyArray<string> | null | undefined
}

type Whitespace = 'normal' | 'pre'

interface Context {
  collapse: (value: string) => string
  whitespace: Whitespace
  before?: boolean | undefined
  after?: boolean | undefined
}

interface Result {
  remove: boolean
  ignore: boolean
  stripAtStart: boolean
}

interface Names {
  blocks: ReadonlySet<string>
  content: ReadonlySet<string>
  skippable: ReadonlySet<string>
  preserve: ReadonlySet<string>
}

/**
 * Minify whitespace in `tree`, in place.
 *
 * @param tree Tree to change.
 * @param options Configuration.
 */
export function minifyWhitespace(tree: Nodes, options?: Options | null | undefined): undefined {
  const settings = options ?? {}
  const names: Names = {
    blocks: new Set(settings.blocks ?? []),
    content: new Set(settings.content ?? []),
    skippable: new Set(settings.skippable ?? []),
    preserve: new Set(settings.preserve ?? []),
  }
  const collapse = collapseFactory(settings.newlines ? replaceNewlines : replaceWhitespace)

  minify(tree, { collapse, whitespace: 'normal' }, names)
}

function minify(node: Nodes, context: Context, names: Names): Result {
  if ('children' in node) {
    const settings: Context = { ...context }

    if (node.type === 'root' || blocklike(node, names)) {
      settings.before = true
      settings.after = true
    }

    settings.whitespace = inferWhitespace(node, context, names)

    return all(node, settings, names)
  }

  // The `pre` whitespace setting is neither collapsed nor trimmed.
  if (node.type === 'text' && context.whitespace === 'normal') {
    return minifyText(node, context)
  }

  return { remove: false, ignore: ignorable(node), stripAtStart: false }
}

function minifyText(node: Text, context: Context): Result {
  const value = context.collapse(node.value)
  const result: Result = { remove: false, ignore: false, stripAtStart: false }
  let start = 0
  let end = value.length

  if (context.before && removable(value.charAt(0))) {
    start++
  }

  if (start !== end && removable(value.charAt(end - 1))) {
    if (context.after) {
      end--
    } else {
      result.stripAtStart = true
    }
  }

  if (start === end) {
    result.remove = true
  } else {
    node.value = value.slice(start, end)
  }

  return result
}

function all(parent: Parents, context: Context, names: Names): Result {
  let before = context.before
  const after = context.after
  const children: Array<RootContent> = parent.children
  let length = children.length
  let index = -1

  while (++index < length) {
    const result = minify(
      children[index],
      { ...context, before, after: collapsableAfter(children, index, names, after) },
      names,
    )

    if (result.remove) {
      children.splice(index, 1)
      index--
      length--
    } else if (!result.ignore) {
      before = result.stripAtStart
    }

    // If this element contributes content somehow, allow whitespace again.
    if (content(children[index], names)) {
      before = false
    }
  }

  return { remove: false, ignore: false, stripAtStart: Boolean(before || after) }
}

function collapsableAfter(
  nodes: ReadonlyArray<RootContent>,
  index: number,
  names: Names,
  after?: boolean | undefined,
): boolean | undefined {
  while (++index < nodes.length) {
    const node = nodes[index]
    let result = inferBoundary(node, names)

    if (result === undefined && 'children' in node && !skippable(node, names)) {
      result = collapsableAfter(node.children, -1, names)
    }

    if (typeof result === 'boolean') {
      return result
    }
  }

  return after
}

/**
 * Infer two types of boundaries:
 *
 * 1. `true`: whitespace around it does not contribute anything
 * 2. `false`: whitespace around it *does* contribute
 *
 * `undefined` if it is unknown.
 */
function inferBoundary(node: RootContent, names: Names): boolean | undefined {
  if (node.type === 'element') {
    if (content(node, names)) {
      return false
    }

    if (blocklike(node, names)) {
      return true
    }

    // Unknown: depends on siblings or children.
    return undefined
  }

  if (node.type === 'text') {
    return whitespace(node.value) ? undefined : false
  }

  return ignorable(node) ? undefined : false
}

function content(node: Nodes | undefined, names: Names): boolean {
  return node?.type === 'element' && names.content.has(node.name)
}

function blocklike(node: Nodes, names: Names): boolean {
  return node.type === 'element' && names.blocks.has(node.name)
}

function skippable(node: Element, names: Names): boolean {
  return names.skippable.has(node.name)
}

/**
 * Doctypes and comments do not contribute to whitespace (instructions and cdata do, as in the
 * original).
 */
function ignorable(node: Nodes): boolean {
  return node.type === 'doctype' || node.type === 'comment'
}

function inferWhitespace(node: Element | Root, context: Context, names: Names): Whitespace {
  return node.type === 'element' && names.preserve.has(node.name) ? 'pre' : context.whitespace
}

/**
 * Inter-element whitespace (as in `hast-util-whitespace`).
 */
function whitespace(value: string): boolean {
  return value.replace(/[ \t\n\f\r]/g, '') === ''
}

function removable(character: string): boolean {
  return character === ' ' || character === '\n'
}

function replaceNewlines(value: string): string {
  const match = /\r?\n|\r/.exec(value)
  return match ? match[0] : ' '
}

function replaceWhitespace(): string {
  return ' '
}

function collapseFactory(replace: (value: string) => string) {
  return function collapse(value: string): string {
    return String(value).replace(/[\t\n\v\f\r ]+/g, replace)
  }
}
