import { SelectState, XastNode, ElementChild, Direction } from './types.js'
// * @typedef {import('unist-util-visit/complex-types').Visitor<ElementChild>} Visitor

import { direction } from 'direction'
import { isElement } from 'xast-util-is-element'
import { visit, EXIT, SKIP } from 'unist-util-visit'
import { element } from './util.js'
import { Parent } from 'xast'

/**
 * @param {SelectState} state
 * @param {HastNode} node
 * @returns {() => void}
 */
// eslint-disable-next-line complexity
export function enterState(state: SelectState, node: XastNode): () => void {
  const schema = state.schema
  const language = state.language
  const currentDirection = state.direction
  const editableOrEditingHost = state.editableOrEditingHost
  /** @type {Direction|undefined} */
  let dirInferred: Direction | undefined
  /** @type {boolean|undefined} */
  let found: boolean | undefined

  if (element(node) && node.attributes) {
    const lang = node.attributes.xmlLang || node.attributes.lang
    const type = node.attributes.type || 'text'
    const dir = dirAttribute(node)

    if (lang !== undefined && lang !== null) {
      state.language = String(lang)
      found = true
    }

    if (schema && schema.space === 'html') {
      // if (node.attributes.contentEditable === 'true') {
      //   state.editableOrEditingHost = true
      //   found = true
      // }
      // if (isElement(node, 'svg')) {
      //   state.schema = svg
      //   found = true
      // }
      // // See: <https://html.spec.whatwg.org/#the-directionality>.
      // // Explicit `[dir=rtl]`.
      // if (dir === 'rtl') {
      //   dirInferred = dir
      // } else if (
      //   // Explicit `[dir=ltr]`.
      //   dir === 'ltr' ||
      //   // HTML with an invalid or no `[dir]`.
      //   (dir !== 'auto' && isElement(node, 'html')) ||
      //   // `input[type=tel]` with an invalid or no `[dir]`.
      //   (dir !== 'auto' && isElement(node, 'input') && type === 'tel')
      // ) {
      //   dirInferred = 'ltr'
      //   // `[dir=auto]` or `bdi` with an invalid or no `[dir]`.
      // } else if (dir === 'auto' || isElement(node, 'bdi')) {
      //   if (isElement(node, 'textarea')) {
      //     // Check contents of `<textarea>`.
      //     dirInferred = dirBidi(toString(node))
      //   } else if (
      //     isElement(node, 'input') &&
      //     (type === 'email' ||
      //       type === 'search' ||
      //       type === 'tel' ||
      //       type === 'text')
      //   ) {
      //     // Check value of `<input>`.
      //     dirInferred = node.attributes.value
      //       ? dirBidi(node.attributes.value)
      //       : 'ltr'
      //   } else {
      //     // Check text nodes in `node`.
      //     visit(node, inferDirectionality)
      //   }
      // }
      // if (dirInferred) {
      //   state.direction = dirInferred
      //   found = true
      // }
    }
    // Turn off editing mode in non-HTML spaces.
    else if (state.editableOrEditingHost) {
      state.editableOrEditingHost = false
      found = true
    }
  }

  return found ? reset : noop

  function reset() {
    state.schema = schema
    state.language = language
    state.direction = currentDirection
    state.editableOrEditingHost = editableOrEditingHost
  }

  // manually writing this out due to bug with unist-util-visit
  type Action = boolean | 'skip'
  type Index = number
  type ActionTuple = [Action | null | undefined | void, Index | null | undefined]
  /** @type {Visitor} */
  function inferDirectionality(
    child: ElementChild,
    index: number | null,
    parent: Parent | null,
  ): null | undefined | Index | Action | ActionTuple | void | [] {
    if (child.type === 'text') {
      dirInferred = dirBidi(child.value)
      return dirInferred ? EXIT : null
    }

    if (
      child !== node &&
      (isElement(child, ['bdi', 'script', 'style', 'textare']) || dirAttribute(child))
    ) {
      return SKIP
    }
  }
}

/**
 * @param {string} value
 * @returns {Direction|undefined}
 */
function dirBidi(value: string): Direction | undefined {
  const result = direction(value)
  return result === 'neutral' ? undefined : result
}

/**
 * @param {ElementChild} node
 * @returns {Direction|undefined}
 */
function dirAttribute(node: ElementChild): Direction | undefined {
  const value =
    element(node) && node.attributes && typeof node.attributes.dir === 'string'
      ? node.attributes.dir.toLowerCase()
      : undefined

  return value === 'auto' || value === 'ltr' || value === 'rtl' ? value : undefined
}

function noop() {
  //
}
