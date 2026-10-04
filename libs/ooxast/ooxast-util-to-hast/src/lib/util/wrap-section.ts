import { convertElement } from 'xast-util-is-element'
import { Element, P } from '../types.js'
import { getPStyle } from './get-pstyle.js'
import { getHeadingLevel as getStyleHeadingLevel, StyleNames } from './style-names.js'

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
