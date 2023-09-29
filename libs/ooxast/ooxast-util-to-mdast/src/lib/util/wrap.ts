import { Root, Content, Delete, Link, Paragraph, BlockContent, PhrasingContent } from 'mdast'

type Node = Root | Content
type Parent = Extract<Node, import('unist').Parent>

import extend from 'extend'
import { phrasing as mdastPhrasing } from 'mdast-util-phrasing'
import { whitespace } from 'hast-util-whitespace'

/**
 * Check if there are phrasing mdast nodes.
 *
 * This is needed if a fragment is given, which could just be a sentence, and
 * doesn’t need a wrapper paragraph.
 *
 * @param {Array<Node>} nodes
 * @returns {boolean}
 */
export function wrapNeeded(nodes: Array<Node>): boolean {
  let index = -1

  while (++index < nodes.length) {
    const node = nodes[index]

    if (!phrasing(node) || ('children' in node && wrapNeeded(node.children))) {
      return true
    }
  }

  return false
}

/**
 * Wrap runs of phrasing content into paragraphs, leaving the non-phrasing
 * content as-is.
 *
 * @param {Array<Content>} nodes
 *   Content.
 * @returns {Array<BlockContent>}
 *   Content where phrasing is wrapped in paragraphs.
 */
export function wrap(nodes: Array<Content>): Array<BlockContent> {
  return runs(nodes, onphrasing, (d) => d)

  /**
   * @param {Array<PhrasingContent>} nodes
   * @returns {Array<Paragraph>}
   */
  function onphrasing(nodes: Array<PhrasingContent>): Array<Paragraph> {
    return nodes.every((d) => whitespace(d as any)) ? [] : [{ type: 'paragraph', children: nodes }]
  }
}

/**
 * @param {Delete | Link} node
 * @returns {Array<BlockContent>}
 */
function split(node: Delete | Link): Array<BlockContent> {
  return runs(node.children, onphrasing, onnonphrasing)

  /**
   * Use `parent`, put the phrasing run inside it.
   *
   * @param {Array<PhrasingContent>} nodes
   * @returns {Array<BlockContent>}
   */
  function onphrasing(nodes: Array<PhrasingContent>): Array<BlockContent> {
    const newParent = cloneWithoutChildren(node)
    newParent.children = nodes
    // @ts-expect-error Assume fine.
    return [newParent]
  }

  /**
   * Use `child`, add `parent` as its first child, put the original children
   * into `parent`.
   * If `child` is not a parent, `parent` will not be added.
   *
   * @param {BlockContent} child
   * @returns {BlockContent}
   */
  function onnonphrasing(child: BlockContent): BlockContent {
    if ('children' in child && 'children' in node) {
      const newParent = cloneWithoutChildren(node)
      const newChild = cloneWithoutChildren(child)
      // @ts-expect-error Assume fine.
      newParent.children = child.children
      // @ts-expect-error Assume fine.
      newChild.children.push(newParent)
      return newChild
    }

    return { ...child }
  }
}

/**
 * Wrap all runs of mdast phrasing content in `paragraph` nodes.
 *
 * @param {Array<Content>} nodes
 *   List of input nodes.
 * @param {(nodes: Array<PhrasingContent>) => Array<BlockContent>} onphrasing
 *   Turn phrasing content into block content.
 * @param {(node: BlockContent) => BlockContent} onnonphrasing
 *   Map block content (defaults to keeping them as-is).
 * @returns {Array<BlockContent>}
 */
function runs(
  nodes: Array<Content>,
  onphrasing: (nodes: Array<PhrasingContent>) => Array<BlockContent>,
  onnonphrasing: (node: BlockContent) => BlockContent,
): Array<BlockContent> {
  const flattened = flatten(nodes)
  /** @type {Array<BlockContent>} */
  const result: Array<BlockContent> = []
  /** @type {Array<PhrasingContent>} */
  let queue: Array<PhrasingContent> = []
  let index = -1

  while (++index < flattened.length) {
    const node = flattened[index]

    if (phrasing(node)) {
      queue.push(node)
    } else {
      if (queue.length > 0) {
        result.push(...onphrasing(queue))
        queue = []
      }

      // @ts-expect-error Assume non-phrasing.
      result.push(onnonphrasing(node))
    }
  }

  if (queue.length > 0) {
    result.push(...onphrasing(queue))
    queue = []
  }

  return result
}

/**
 * Flatten a list of nodes.
 *
 * @param {Array<Content>} nodes
 *   List of nodes, will unravel `delete` and `link`.
 * @returns {Array<Content>}
 *   Unraveled nodes.
 */
function flatten(nodes: Array<Content>): Array<Content> {
  /** @type {Array<Content>} */
  const flattened: Array<Content> = []
  let index = -1

  while (++index < nodes.length) {
    const node = nodes[index]

    // Straddling: some elements are *weird*.
    // Namely: `map`, `ins`, `del`, and `a`, as they are hybrid elements.
    // See: <https://html.spec.whatwg.org/#paragraphs>.
    // Paragraphs are the weirdest of them all.
    // See the straddling fixture for more info!
    // `ins` is ignored in mdast, so we don’t need to worry about that.
    // `map` maps to its content, so we don’t need to worry about that either.
    // `del` maps to `delete` and `a` to `link`, so we do handle those.
    // What we’ll do is split `node` over each of its children.
    if ((node.type === 'delete' || node.type === 'link') && wrapNeeded(node.children)) {
      flattened.push(...split(node))
    } else {
      flattened.push(node)
    }
  }

  return flattened
}

/**
 * Check if an mdast node is phrasing.
 *
 * Also supports checking embedded hast fields.
 *
 * @param {Node} node
 *   mdast node to check.
 * @returns {node is PhrasingContent}
 *   Whether `node` is phrasing content (includes nodes with `hName` fields
 *   set to phrasing hast element names).
 */
function phrasing(node: Node): node is PhrasingContent {
  return mdastPhrasing(node)
}

/**
 * @template {Parent} ParentType
 *   Parent type.
 * @param {ParentType} node
 *   Node to clone.
 * @returns {ParentType}
 *   Cloned node, without children.
 */
function cloneWithoutChildren<ParentType extends Parent>(node: ParentType): ParentType {
  return extend(true, {}, { ...node, children: [] })
}
