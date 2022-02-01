import { isParagraphContent } from 'relatex'
import { LtastContent, LtastParagraphContent } from '../types'
//import { phrasing } from 'mdast-util-phrasing'

export function wrap(nodes: Array<LtastContent>) {
  return runs(nodes, onphrasing)

  function onphrasing(
    nodes: Array<LtastParagraphContent>
  ): LtastContent | Array<LtastContent> {
    const head = nodes[0]

    if (
      nodes.length === 1 &&
      head.type === 'text' &&
      (head.value === ' ' || head.value === '\n')
    ) {
      return []
    }

    return { type: 'paragraph', children: nodes }
  }
}

/**
 * Check if there are non-phrasing mdast nodes returned.
 * This is needed if a fragment is given, which could just be a sentence, and
 * doesn’t need a wrapper paragraph.
 *
 * @param {Array.<LtastContent>} nodes
 * @returns {boolean}
 */
export function wrapNeeded(nodes: Array<LtastContent>): boolean {
  let index = -1
  /** @type {LtastContent} */
  let node: LtastContent

  while (++index < nodes.length) {
    node = nodes[index]

    if (
      !isParagraphContent(node) ||
      ('children' in node && wrapNeeded(node.children))
    ) {
      return true
    }
  }

  return false
}

/**
 * Wrap all runs of mdast phrasing content in `paragraph` nodes.
 *
 * @param {Array.<LtastContent>} nodes
 * @param {(nodes: Array.<LtastParagraphContent>) => LtastContent|Array.<LtastContent>} onphrasing
 * @param {(node: LtastContent) => LtastContent} [onnonphrasing]
 */
function runs(
  nodes: Array<LtastContent>,
  onphrasing: (
    nodes: Array<LtastParagraphContent>
  ) => LtastContent | Array<LtastContent>,
  onnonphrasing?: (node: LtastContent) => LtastContent
) {
  const nonphrasing = onnonphrasing || identity
  /** @type {Array.<LtastContent>} */
  const flattened: Array<LtastContent> = flatten(nodes)
  /** @type {Array.<LtastContent>} */
  let result: Array<LtastContent> = []
  let index = -1
  /** @type {Array.<LtastParagraphContent>|undefined} */
  let queue: Array<LtastParagraphContent> | undefined
  /** @type {LtastContent} */
  let node: LtastContent

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
function flatten(nodes: Array<LtastContent>): Array<LtastContent> {
  /** @type {Array.<LtastContent>} */
  let flattened: Array<LtastContent> = []
  let index = -1
  /** @type {LtastContent} */
  let node: LtastContent

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
 * @param {LtastContent} node
 * @returns {Array.<LtastContent>}
 */
function split(node: LtastContent): Array<LtastContent> {
  // @ts-expect-error Assume parent.
  return runs(node.children, onphrasing, onnonphrasing)

  /**
   * Use `child`, add `parent` as its first child, put the original children
   * into `parent`.
   * If `child` is not a parent, `parent` will not be added.
   *
   * @param {LtastContent} child
   * @returns {LtastContent}
   */
  function onnonphrasing(child: LtastContent): LtastContent {
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
   * @param {Array.<LtastParagraphContent>} nodes
   * @returns {LtastContent}
   */
  function onphrasing(nodes: Array<LtastParagraphContent>): LtastContent {
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
