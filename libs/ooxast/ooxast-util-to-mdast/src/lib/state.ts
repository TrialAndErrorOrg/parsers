import { Data as CSL } from 'csl-json'
import {
  Element,
  Options,
  Handle,
  Node,
  MdastFlowContent,
  Parent,
  MdastNode,
  MdastParent,
  MdastContent,
  ListNumbering,
} from './types.js'

/*   Info passed around about the current state.*/
export interface State {
  /*   Copy a node’s positional info. */
  patch: Patch
  /*   Transform a hast node to mdast. */
  one: One
  /*   Transform the children of a hast parent to mdast. */
  all: All
  /*   Transform a list of mdast nodes to flow. */
  toFlow: ToFlow
  /*   Turn arbitrary content into a list of a particular node type.
   *
   *   This is useful for example for lists, which must have list items as
   *   content.
   *   in this example, when non-items are found, they will be queued, and
   *   inserted into an adjacent item.
   *   When no actual items exist, one will be made with `build`.
   * */
  toSpecificContent: <
    ChildType extends MdastNode,
    ParentType extends MdastParent & { children: Array<ChildType> },
  >(
    nodes: Array<MdastContent>,
    build: () => ParentType,
  ) => Array<ParentType>
  /*   Resolve a URL relative to a base. */
  resolve: Resolve
  /*   User configuration. */
  options: Options
  /*   Elements by their `id`. */
  elementById: Map<string, Element>
  /*   Applied element handlers. */
  handlers: Record<string, Handle>
  /*   Applied node handlers. */
  //   nodeHandlers: Record<string, NodeHandle>
  /*   Whether a `<base>` element was seen. */
  baseFound: boolean
  /*   `href` of `<base>`, if any. */
  frozenBaseUrl: string | undefined
  /*   Whether we’re in a table. */
  inTable: boolean
  /* Non-negative finite integer representing how deep we’re in `<q>`s.*/
  qNesting: number

  citationNumber: number
  parseCitation: (citation: any) => any
  collectCitation: (citation: any, index: number | string) => any
  partialCitation: string
  /**  Whether to delete the next w:r element
   *  Mostly used for citations, where sometimes the next w:r element is the citation in plain text again
   * */
  deleteNextRun: boolean
  citeKeys: { [key: string]: string }
  inDisplayMath: boolean
  inMath: boolean
  footnotes: Record<string, MdastNode[]>
  endnotes: Record<string, MdastNode[]>
  /** This makes it so that a paragraph is processed with `all` instead of more custom.
   * Useful for e.g. footnotes or tables
   * */
  simpleParagraph: boolean
  /**
   * A bibliography you can add manually
   *
   * Needs to be in CSL format, which will be converted to BibTeX, or in BibTeX format
   */
  citations: { [key: string | number]: CSL }
  relations: { [key: string]: string }
  bibliography: CSL[]
  listNumbering?: ListNumbering
}

/**
 *   Copy a node’s positional info.
 * @param {Node} from
 *   hast node to copy from.
 * @param {MdastNode} to
 *   mdast node to copy into.
 * @returns {void}
 *   Nothing.
 */
type Patch = (from: Node, to: MdastNode) => void

/**
 *   Transform the children of a hast parent to mdast.
 * @param {Parent} parent
 *   Parent.
 * @returns {Array<MdastContent>}
 *   mdast children.
 */
type All = (parent: Parent) => Array<MdastContent>

/** @callback ToFlow
 *   Transform a list of mdast nodes to flow.
 * @param {Array<MdastContent>} nodes
 *   mdast nodes.
 * @returns {Array<MdastFlowContent>}
 *   mdast flow children.
 */
type ToFlow = (nodes: Array<MdastContent>) => Array<MdastFlowContent>

/** @callback One
 *  Transform a hast node to mdast.
 * @param {Node} node
 *   Expected hast node.
 * @param {Parent | undefined} parent
 *   Parent of `node`.
 * @returns {MdastNode | Array<MdastNode> | void}
 *   mdast result.
 */
type One = ((node: Node, parent?: Parent) => MdastNode | Array<MdastNode> | void) & ThisType<State>

/*   Resolve a URL relative to a base. */
type Resolve = (
  /*   Possible URL value.*/
  url: string | null | undefined,
) => /*   URL, resolved to a `base` element, if any.*/
string

import { position } from 'unist-util-position'
import { handlers } from './handlers/index.js'
// import { MdastNode, Node, Parent } from './types.js'
import { wrap } from './util/wrap.js'
import { isElement } from 'xast-util-is-element'

const own = {}.hasOwnProperty

/**
 * Create a state.
 *
 * @param {Options} options
 *   User configuration.
 * @returns {State}
 *   State.
 */
export function createState(options: Options): State {
  const state: State = {
    patch,
    resolve,
    all,
    one,
    toFlow,
    toSpecificContent,
    options,
    relations: options.relations ?? {},
    bibliography: options.bibliography ?? [],
    elementById: new Map(),
    // nodeHandlers: { ...nodeHandlers, ...options.nodeHandlers },
    handlers: { ...handlers, ...options.handlers },
    baseFound: false,
    inTable: false,
    frozenBaseUrl: undefined,
    qNesting: 0,
    citationNumber: 0,
    parseCitation: options.parseCitation || parseCitation,
    citations: {},
    collectCitation:
      options.collectCitation ||
      ((citation: any, index: number | string) => {
        state.citations[index] = citation
      }),
    partialCitation: '',
    deleteNextRun: false,
    citeKeys: {},
    inDisplayMath: false,
    inMath: false,
    footnotes: {},
    endnotes: {},
    simpleParagraph: false,
  }

  return state
}

/**
 * Copy a node’s positional info.
 *
 * @param {Node} origin
 *   hast node to copy from.
 * @param {MdastNode} node
 *   mdast node to copy into.
 * @returns {void}
 *   Nothing.
 */
function patch(origin: Node, node: MdastNode): void {
  if (origin.position) node.position = position(origin)
}

/**
 * Transform a hast node to mdast.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {Node} node
 *   hast node to transform.
 * @param {Parent | undefined} parent
 *   Parent of `node`.
 * @returns {MdastNode | Array<MdastNode> | void}
 *   mdast result.
 */
function one(this: State, node: Node, parent?: Parent): MdastNode | Array<MdastNode> | void {
  let fn: Handle | undefined
  if (isElement(node)) {
    if (own.call(this.handlers, node.name.replace(/\w+:/, ''))) {
      fn = this.handlers[node.name.replace(/\w+:/, '')]
    }
  } else if (own.call(this.handlers, node.type)) {
    fn = this.handlers[node.type]
  }

  if (typeof fn === 'function') {
    return fn(this, node, parent)
  }

  // Unknown literal.
  if ('value' in node && typeof node.value === 'string') {
    /** @type {MdastContent} */
    const result: MdastContent = { type: 'text', value: node.value }
    this.patch(node, result)
    return result
  }

  // Unknown parent.
  if ('children' in node) {
    return this.all(node)
  }
}

/**
 * Transform the children of an ooxast parent to mdast.
 *
 * You might want to combine this with `toFlow` or `toSpecificContent`.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {Parent} parent
 *   Parent.
 * @returns {Array<MdastContent>}
 *   mdast children.
 */
function all(parent: Parent): Array<MdastContent> {
  const children = parent.children || []
  /** @type {Array<MdastContent>} */
  const results: Array<MdastContent> = []
  let index = -1

  while (++index < children.length) {
    const child = children[index]
    const result = this.one(child, parent)

    if (Array.isArray(result)) {
      results.push(...result)
    } else if (result) {
      results.push(result)
    }
  }

  let start = 0
  let end = results.length

  while (start < end && results[start].type === 'break') {
    start++
  }

  while (end > start && results[end - 1].type === 'break') {
    end--
  }

  return start === 0 && end === results.length ? results : results.slice(start, end)
}

/**
 * Transform a list of mdast nodes to flow.
 *
 * @this {State}
 *   Info passed around about the current state.
 * @param {Array<MdastContent>} nodes
 *   Parent.
 * @returns {Array<MdastFlowContent>}
 *   mdast flow children.
 */
function toFlow(nodes: Array<MdastContent>): Array<MdastFlowContent> {
  return wrap(nodes)
}

/**
 * Turn arbitrary content into a particular node type.
 *
 * This is useful for example for lists, which must have list items as content.
 * in this example, when non-items are found, they will be queued, and
 * inserted into an adjacent item.
 * When no actual items exist, one will be made with `build`.
 *
 * @template {MdastNode} ChildType
 *   Node type of children.
 * @template {MdastParent & {'children': Array<ChildType>}} ParentType
 *   Node type of parent.
 * @param {Array<MdastContent>} nodes
 *   Nodes, which are either `ParentType`, or will be wrapped in one.
 * @param {() => ParentType} build
 *   Build a parent if needed (must have empty `children`).
 * @returns {Array<ParentType>}
 *   List of parents.
 */
function toSpecificContent<
  ChildType extends MdastNode,
  ParentType extends MdastParent & { children: Array<ChildType> },
>(nodes: Array<MdastContent>, build: () => ParentType): Array<ParentType> {
  const reference = build()
  /** @type {Array<ParentType>} */
  const results: Array<ParentType> = []
  /** @type {Array<ChildType>} */
  let queue: Array<ChildType> = []
  let index = -1

  while (++index < nodes.length) {
    const node = nodes[index]

    if (expectedParent(node)) {
      if (queue.length > 0) {
        node.children.unshift(...queue)
        queue = []
      }

      results.push(node)
    } else {
      // @ts-expect-error: assume `node` can be a child of `ParentType`.
      // If we start checking nodes, we’d run into problems with unknown nodes,
      // which we do want to support.
      queue.push(node)
    }
  }

  if (queue.length > 0) {
    let node = results[results.length - 1]

    if (!node) {
      node = build()
      results.push(node)
    }

    node.children.push(...queue)
    queue = []
  }

  return results

  /**
   * @param {MdastNode} node
   * @returns {node is ParentType}
   */
  function expectedParent(node: MdastNode): node is ParentType {
    return node.type === reference.type
  }
}

/**
 * @this {State}
 *   Info passed around about the current state.
 * @param {string | null | undefined} url
 *   Possible URL value.
 * @returns {string}
 *   URL, resolved to a `base` element, if any.
 */
function resolve(url: string | null | undefined): string {
  const base = this.frozenBaseUrl

  if (url === null || url === undefined) {
    return ''
  }

  if (base) {
    return String(new URL(url, base))
  }

  return url
}

function parseCitation(citation: any) {
  //
}
