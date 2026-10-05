import { J } from '../types.js'
import { convertElement } from 'xast-util-is-element'
import { Element, P } from '../types.js'
import { getPStyle } from './get-pstyle.js'
import { getHeadingLevel as getStyleHeadingLevel, StyleNames } from './style-names.js'

/**
 * A jast `sec` (with `child` as its `title`), or the `body` if there is no child.
 */
export function wrapSec(sectionCounter: number[], child: Element | null): Element {
  const parentSec: Element = {
    type: 'element',
    name: child ? 'sec' : 'body',
    attributes: child ? { id: `sec-${sectionCounter.join('-')}` } : {},
    children: child
      ? [
          {
            type: 'element',
            name: 'title',
            attributes: child.attributes,
            children: child.children || [],
          },
        ]
      : [],
  }
  return parentSec
}

const isP = convertElement<P>('w:p')

export function isHeading(elem: Element, styleNames: StyleNames = {}): elem is P {
  return isP(elem) && getHeadingLevel(elem, styleNames) !== null
}

/**
 * The heading level of an ooxast paragraph, or `null` if its style is not a heading.
 * Only `heading N` styles count (by name from `styles.xml`, or by id), not every style
 * that happens to end in a digit (`normal1`, `TOC1`).
 */
export function getHeadingLevel(p: P, styleNames: StyleNames = {}) {
  return getStyleHeadingLevel(getPStyle(p), styleNames)
}

/**
 * The heading level of a converted jast `p`, from the paragraph style it carries.
 */
export function getJastHeadingLevel(elem: Element, styleNames: StyleNames = {}) {
  if (elem?.name !== 'p') return null
  const style = elem.attributes?.style
  return getStyleHeadingLevel(typeof style === 'string' ? style : null, styleNames)
}

/**
 * Nesting depth of the innermost open wrapper: 0 for `body`, 1 for `sec-1`, 2 for `sec-1-2`…
 */
export function currentWrapperDepth(wrapperStack: Element[]) {
  const id = wrapperStack[wrapperStack.length - 1]?.attributes?.id
  if (!id) return 0
  return id.replace('sec-', '').split('-').length
}

export function wrapSections(j: J, bodyChildren: Element[]) {
  let sectionCounter: number[] = [1]
  const rootWrapper = wrapSec(sectionCounter, null)

  const wrapperStack: Element[] = []

  wrapperStack.push(rootWrapper)

  function currentWrapper() {
    return wrapperStack[wrapperStack.length - 1]
  }

  for (let i = 0; i < bodyChildren.length; i++) {
    const elem = bodyChildren[i]
    const elemDepth = getJastHeadingLevel(elem, j.styleNames)

    if (elemDepth) {
      // Child heading
      if (elemDepth > currentWrapperDepth(wrapperStack)) {
        sectionCounter[elemDepth - 1] = 1
        const childWrapper = wrapSec(sectionCounter, elem)

        currentWrapper().children.push(childWrapper)

        wrapperStack.push(childWrapper)

        j.sectionDepth++

        continue
      }
      // Delimiting heading, i.e. one that ends the current sec
      while (elemDepth <= currentWrapperDepth(wrapperStack)) {
        wrapperStack.pop()
        j.sectionDepth--
      }
      sectionCounter = sectionCounter.slice(0, elemDepth)
      sectionCounter[elemDepth - 1]++

      const siblingWrapper = wrapSec(sectionCounter, elem)

      currentWrapper().children.push(siblingWrapper)

      wrapperStack.push(siblingWrapper)
      j.sectionDepth++
      continue
    }
    currentWrapper().children.push(elem)
  }

  return rootWrapper
}
