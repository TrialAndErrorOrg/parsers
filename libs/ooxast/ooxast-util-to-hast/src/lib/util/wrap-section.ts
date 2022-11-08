import { H } from '../types'
import { convertElement, isElement } from 'xast-util-is-element'
import { Parent, Element, P, Node, Body } from '../types'
import { getPStyle } from './get-pstyle'
import { Sec, Body as HastBody } from 'hast-types'
import { all } from '../all'
import { one } from '../one'

function parseDepth(str: string) {
  return parseInt(str.slice(-1), 10)
}

function wDepth(sec: Sec | HastBody) {
  if (sec.name === 'body') return 0
  return parseInt(sec?.attributes?.id?.replace(/sec.*?-(\d+)/, '$1') || '0')
}

export function wrapSec(
  h: H,
  sectionCounter: number[],
  child: Element | null,
  parent?: Parent
): Sec | HastBody {
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

export function isHeading(elem: Element): elem is P {
  return !!(isP(elem) && getPStyle(elem)?.toLowerCase()?.includes('heading'))
}
export function isHastHeading(elem: Element): boolean {
  return !!elem?.attributes?.style?.toLowerCase()?.includes('heading')
}

export function getHeadingLevel(p: P) {
  const lastNumber = getPStyle(p)?.toLowerCase()?.slice(-1)
  return !lastNumber ? null : parseInt(lastNumber, 10)
}
export function getHastHeadingLevel(p: Element) {
  return parseInt(p?.attributes?.style?.slice(-1) || '0') || 0
}
export function currentWrapperDepth(wrapperStack: any[]) {
  return wrapperStack[wrapperStack.length - 1]?.attributes?.id
    ?.replace('sec-')
    ?.split('-')?.length
}

export function wrapSections(h: H, bodyChildren: Element[]) {
  let sectionCounter: number[] = [1]
  const rootWrapper = wrapSec(h, sectionCounter, null)

  const wrapperStack: any[] = []

  wrapperStack.push(rootWrapper)

  function currentWrapper() {
    return wrapperStack[wrapperStack.length - 1]
  }

  for (let i = 0; i < bodyChildren.length; i++) {
    const elem = bodyChildren[i]

    if (isHastHeading(elem)) {
      const elemDepth = getHastHeadingLevel(elem)

      if (!elemDepth && elemDepth !== 0) {
        currentWrapper().children.push(elem)
        continue
      }

      // Child heading
      if (elemDepth > currentWrapperDepth(wrapperStack)) {
        sectionCounter[elemDepth - 1] = 1
        const childWrapper = wrapSec(h, sectionCounter, elem)

        currentWrapper().children.push(childWrapper)

        wrapperStack.push(childWrapper)

        h.sectionDepth++

        continue
      }
      // Delimiting heading, i.e. one that ends the current sec
      while (elemDepth <= currentWrapperDepth(wrapperStack)) {
        wrapperStack.pop()
        h.sectionDepth--
      }
      sectionCounter = sectionCounter.slice(0, elemDepth)
      sectionCounter[elemDepth - 1]++

      const siblingWrapper = wrapSec(h, sectionCounter, elem)

      currentWrapper().children.push(siblingWrapper)

      wrapperStack.push(siblingWrapper)
      continue
    }
    currentWrapper().children.push(elem)
  }

  return rootWrapper
}
