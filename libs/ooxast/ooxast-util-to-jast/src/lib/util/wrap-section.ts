import { J } from '../types.js'
import { convertElement, isElement } from 'xast-util-is-element'
import { Parent, Element, P, Node, Body } from '../types.js'
import { getPStyle } from './get-pstyle.js'
import { Sec, Body as JastBody } from 'jast-types'

function parseDepth(str: string) {
  return parseInt(str.slice(-1), 10)
}

function wDepth(sec: Sec | JastBody) {
  if (sec.name === 'body') return 0
  return parseInt(sec?.attributes?.id?.replace(/sec.*?-(\d+)/, '$1') || '0')
}

export function wrapSec(
  j: J,
  sectionCounter: number[],
  child: Element | null,
  parent?: Parent,
): Sec | JastBody {
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
  //@ts-expect-error long
  return parentSec
}

const isP = convertElement<P>('w:p')

export function isHeading(elem: Element): elem is P {
  return !!(isP(elem) && getPStyle(elem)?.toLowerCase()?.includes('heading'))
}
export function isJastHeading(elem: Element): boolean {
  return !!elem?.attributes?.style?.toLowerCase()?.includes('heading')
}

export function getHeadingLevel(p: P) {
  const lastNumber = getPStyle(p)?.toLowerCase()?.slice(-1)
  return !lastNumber ? null : parseInt(lastNumber, 10)
}
export function getJastHeadingLevel(p: Element) {
  return parseInt(p?.attributes?.style?.slice(-1) || '0') || 0
}
export function currentWrapperDepth(wrapperStack: any[]) {
  return wrapperStack[wrapperStack.length - 1]?.attributes?.id?.replace('sec-')?.split('-')?.length
}

export function wrapSections(j: J, bodyChildren: Element[]) {
  let sectionCounter: number[] = [1]
  const rootWrapper = wrapSec(j, sectionCounter, null)

  const wrapperStack: any[] = []

  wrapperStack.push(rootWrapper)

  function currentWrapper() {
    return wrapperStack[wrapperStack.length - 1]
  }

  for (let i = 0; i < bodyChildren.length; i++) {
    const elem = bodyChildren[i]

    if (isJastHeading(elem)) {
      const elemDepth = getJastHeadingLevel(elem)

      if (!elemDepth && elemDepth !== 0) {
        currentWrapper().children.push(elem)
        continue
      }

      // Child heading
      if (elemDepth > currentWrapperDepth(wrapperStack)) {
        sectionCounter[elemDepth - 1] = 1
        const childWrapper = wrapSec(j, sectionCounter, elem)

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

      const siblingWrapper = wrapSec(j, sectionCounter, elem)

      currentWrapper().children.push(siblingWrapper)

      wrapperStack.push(siblingWrapper)
      continue
    }
    currentWrapper().children.push(elem)
  }

  return rootWrapper
}
