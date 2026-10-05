import { isParagraphContent } from 'jast-types'
import { JastContent, JastP, JastParagraphContent } from '../types.js'
//import { phrasing } from 'mdast-util-phrasing'

export function wrap(nodes: Array<JastContent>) {
  return runs(nodes, onphrasing)

  function onphrasing(nodes: Array<JastParagraphContent>): JastContent | Array<JastContent> {
    const head = nodes[0]

    if (nodes.length === 1 && head.type === 'text' && (head.value === ' ' || head.value === '\n')) {
      return []
    }

    return {
      type: 'element',
      name: 'p',
      attributes: {},
      children: nodes,
    } as JastP
  }
}

/**
 * Check if there are non-phrasing jast nodes returned.
 * This is needed if a fragment is given, which could just be a sentence, and
 * doesn’t need a wrapper paragraph.
 *
 * @param {Array.JastContent>} nodes
 * @returns {boolean}
 */
export function wrapNeeded(nodes: Array<JastContent>): boolean {
  let index = -1
  /** @type JastContent} */
  let node: JastContent

  while (++index < nodes.length) {
    node = nodes[index]

    if (!isParagraphContent(node) || ('children' in node && wrapNeeded(node.children))) {
      return true
    }
  }

  return false
}

/**
 * Wrap all runs of jast phrasing content in `paragraph` nodes.
 */
function runs(
  nodes: Array<JastContent>,
  onphrasing: (nodes: Array<JastParagraphContent>) => JastContent | Array<JastContent>,
  onnonphrasing?: (node: JastContent) => JastContent,
) {
  const nonphrasing = onnonphrasing || identity
  const flattened: Array<JastContent> = flatten(nodes)
  let result: Array<JastContent> = []
  let index = -1
  let queue: Array<JastParagraphContent> | undefined
  let node: JastContent

  while (++index < flattened.length) {
    node = flattened[index]

    if (isParagraphContent(node)) {
      if (!queue) queue = []
      queue.push(node)
    } else {
      if (queue) {
        result = result.concat(onphrasing(queue))
        queue = undefined
      }

      result = result.concat(nonphrasing(node))
    }
  }

  if (queue) {
    result = result.concat(onphrasing(queue))
  }

  return result
}

/**
 * Flatten a list of nodes.
 */
function flatten(nodes: Array<JastContent>): Array<JastContent> {
  /** @type {Array.JastContent>} */
  const flattened: Array<JastContent> = []
  let index = -1
  /** @type JastContent} */
  let node: JastContent

  while (++index < nodes.length) {
    node = nodes[index]

    // Straddling: some elements are *weird*.
    // Namely: `map`, `ins`, `del`, and `a`, as they are hybrid elements.
    // See: <https://html.spec.whatwg.org/#paragraphs>.
    // Paragraphs are the weirdest of them all.
    // See the straddling fixture for more info!
    // `ins` is ignored in mdast, so we don’t need to worry about that.
    // `map` maps to its content, so we don’t need to worry about that either.
    // `del` maps to `delete` and `a` to `link`, so we do handle those.
    // What we’ll do is split `node` over each of its children.
    flattened.push(node)
  }

  return flattened
}

/**
 * @param JastContent} node
 * @returns {Array.JastContent>}
 */
function split(node: JastContent): Array<JastContent> {
  // @ts-expect-error Assume parent.
  return runs(node.children, onphrasing, onnonphrasing)

  /**
   * Use `child`, add `parent` as its first child, put the original children
   * into `parent`.
   * If `child` is not a parent, `parent` will not be added.
   *
   * @param JastContent} child
   * @returns JastContent}
   */
  function onnonphrasing(child: JastContent): JastContent {
    if ('children' in child && 'children' in node) {
      const { children, ...rest } = node
      return {
        ...child,
        // @ts-expect-error: assume matching parent & child.
        children: [{ ...rest, children: child.children }],
      }
    }

    return { ...child }
  }

  /**
   * Use `parent`, put the phrasing run inside it.
   *
   * @param {Array.JastParagraphContent>} nodes
   * @returns JastContent}
   */
  function onphrasing(nodes: Array<JastParagraphContent>): JastContent {
    // @ts-expect-error: assume parent.
    const { children, ...rest } = node
    // @ts-expect-error: assume matching parent & child.
    return { ...rest, children: nodes }
  }
}

/**
 * @template {unknown} T
 * @param {T} n
 * @returns {T}
 */
function identity<T>(n: T): T {
  return n
}
