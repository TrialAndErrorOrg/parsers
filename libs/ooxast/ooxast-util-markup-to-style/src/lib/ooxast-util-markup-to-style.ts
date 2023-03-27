import { P, PPr, R, RPr, RPrMap, Root, StringTag, Style } from 'ooxast'
import { visit, SKIP } from 'unist-util-visit'
import { convertElement, isElement } from 'xast-util-is-element'
import { RPrJSON, getRStyle } from 'ooxast-util-get-style'
import { select, selectAll } from 'xast-util-select'
import { x } from 'xastscript'
import { Element } from 'xast'
import { toString } from 'xast-util-to-string'

export interface Option {
  /**
   * The markup to look for.
   * If no namespace is specified, the default namespace (`w:`) is assumed.
   * You can also specify a matcher function which takes a JSON representation of the RPr element and returns true if the style should be applied.
   *
   * @example 'w:b'
   * @example ['w:b', 'w:i']
   * @example ['m:b']
   *
   * Match text that is bold and italic, and red:
   * @example (rPr) => rPr['w:b'] && rPr['w:i'] && rPr['w:color']?.['w:val'] === 'FF0000'
   */
  markup: keyof RPrJSON | (keyof RPrJSON)[] | ((rPr: RPrJSON) => boolean)
  /**
   * The style to apply if the markup is present.
   *
   * @example 'Heading 1'
   */
  style: string
  /**
   * If true (default), the style is applied if all of the markup elements are present.
   *
   * If false, the style is applied if any of the markup elements are present.
   *
   * _Example_
   * If `['b', 'i']` is specified with `matchAll: true`, the style will only be applied if the text is bold *and* italic.
   *
   * If `['b', 'i']` is specified with `matchAll: false`, the style will be applied if the text is bold *or* italic.
   * @default true
   *
   * Does not apply if `markup` is a function.
   *
   */
  matchAll?: boolean
  /**
   * Whether the entire paragraph should contain the markup, or the markup can be present in any of the runs.
   *
   * @default true
   */
  matchFull?: boolean
  /**
   * If punctuation or whitespace should be ignored when matching.
   *
   * E.g. if `markup: 'w:b'` is specified and only an empty space at the beginning of the paragraph is bold, the style not be applied.
   * Likewise, if `markup: 'w:b'` is specified and only a period at the end of the paragraph is not bold, the style not be applied.
   *
   * @default true
   */
  ignorePunctuation?: boolean
}
;[]

/**
 * @example
 * ```ts
 * const options: Options = [
 * // find all paragraphs that are bold and larger than 24pt and make it a Title
 *  {
 *   markup: (rPr) => rPr['w:b'] && rPr['w:sz'] && rPr['w:sz']['w:val'] > 24,
 *   style: 'Title',
 *  },
 * // find all paragraphs that are strikethrough text and make it a Comment
 *  {
 *   markup: 'w:strike',
 *   style: 'Comment',
 *  },
 * ]
 * ```
 * */
export type Options = Option[]

const isRPr = convertElement<RPr>('w:rPr')
const isR = convertElement<R>('w:r')
const isPStyle = convertElement<StringTag<'pStyle'>>('w:pStyle')
const isPPr = convertElement<PPr>('w:pPr')

export function markupToStyle<I extends Root | P = Root>(
  tree: I,
  options: Options = [
    {
      markup: 'w:b',
      style: 'Heading 1',
    },
  ],
): I {
  // visit all paragraphs
  // check if the conditions set in options are met
  // if so, add the style to the paragraph
  visit(tree as any, (node) => {
    if (!convertElement<P>('w:p')(node)) {
      return SKIP
    }

    let style: string | undefined = undefined

    for (const option of options) {
      if (style) {
        break
      }

      const rs = selectAll('w\\:r', node)
      if (!rs.length) {
        continue
      }

      const shouldStyle =
        option.matchFull === false
          ? rs.some((r) => shouldApplyStyle(r, { ...option, ignorePunctuation: false }))
          : rs.every((r) => shouldApplyStyle(r, option))

      if (!shouldStyle) {
        break
      }

      style = option.style
    }

    if (!style) {
      return SKIP
    }

    const pStyle = select('w\\:pPr > w\\:pStyle', node)

    if (isPStyle(pStyle)) {
      pStyle.attributes['w:val'] = style
      return SKIP
    }

    const pPr = select('w\\:pPr', node)

    if (!isPPr(pPr)) {
      node.children.unshift(x('w:pPr', x('w:pStyle', { 'w:val': style })) as PPr)
      return SKIP
    }

    pPr.children.unshift(x('w:pStyle', { 'w:val': style }) as StringTag<'pStyle'>)

    return SKIP
  })

  return tree
}

function shouldApplyStyle(r: Element, option: Options[number]) {
  if (!isR(r)) {
    return false
  }

  if (option.ignorePunctuation !== false && isPunctuation(r)) {
    return true
  }

  const rPrJson = getRStyle(r)

  if (!rPrJson) {
    return false
  }

  if (typeof option.markup === 'function') {
    const rStyle = getRStyle(r)
    if (!rStyle) {
      return false
    }

    return option.markup(rStyle)
  }

  if (Array.isArray(option.markup)) {
    return option.matchAll === false
      ? option.markup.some((markup) => rPrJson[markup])
      : option.markup.every((markup) => rPrJson[markup])
  }

  return option.markup in rPrJson
}

function isPunctuation(r: R) {
  const text = toString(r)

  if (!text) {
    return true
  }

  return /^[\s,.!+=%^&*(){}[\]#@$~`?'";:|/\\-]*$/.test(text)
}
