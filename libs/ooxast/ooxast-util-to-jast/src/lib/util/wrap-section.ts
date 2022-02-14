import { J } from '../types'
import { convertElement, isElement } from 'xast-util-is-element'
import { Parent, Element, P, Node, Body } from '../types'
import { getPStyle } from './get-pstyle'
import { Sec, Body as JastBody } from 'jjast'
import { all } from '../all'
import { one } from '../one'

function parseDepth(str: string) {
  return parseInt(str.slice(-1), 10)
}

function wDepth(sec: Sec | JastBody) {
  if (sec.name === 'body') return 0
  return parseInt(sec?.attributes?.id?.replace(/sec.*?-(\d+)/, '$1') || '0')
}

export function wrapSec(
  j: J,
  depth: number,
  child: Element | null,
  parent?: Parent
): Sec | JastBody {
  const parentSec: Element = {
    type: 'element',
    name: depth === 0 ? 'body' : 'sec',
    attributes: depth === 0 ? {} : { id: `sec-${depth}` },
    //@ts-ignore shush, it's better this way
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
  //@ts-ignore
  return parentSec
}

const isP = convertElement<P>('w:p')

export function isHeading(elem: Element): elem is P {
  return !!(isP(elem) && getPStyle(elem)?.toLowerCase()?.includes('heading'))
}
export function isJastHeading(elem: Element): boolean {
  //@ts-ignore
  return !!elem?.attributes?.style?.toLowerCase()?.includes('heading')
}

export function getHeadingLevel(p: P) {
  const lastNumber = getPStyle(p)?.toLowerCase()?.slice(-1)
  return !lastNumber ? null : parseInt(lastNumber, 10)
}
export function getJastHeadingLevel(p: Element) {
  //@ts-ignore
  return parseInt(p.attributes.style.slice(-1)) || 0
}

export function wrapSections(j: J, bodyChildren: Element[]) {
  const rootWrapper = wrapSec(j, 0, null)
  const wrapperStack: any[] = []
  wrapperStack.push(rootWrapper)

  function currentWrapper() {
    return wrapperStack[wrapperStack.length - 1]
  }

  function currentWrapperDepth() {
    return wDepth(currentWrapper())
  }

  for (let i = 0; i < bodyChildren.length; i++) {
    let elem = bodyChildren[i]
    if (isJastHeading(elem)) {
      const elemDepth = getJastHeadingLevel(elem)
      if (!elemDepth && elemDepth !== 0) {
        currentWrapper().children.push(elem)
        continue
      }
      // Child heading
      if (elemDepth > j.sectionDepth) {
        const childWrapper = wrapSec(j, elemDepth, elem)
        currentWrapper().children.push(childWrapper)
        wrapperStack.push(childWrapper)
        j.sectionDepth++
        continue
      }

      // Delimiting heading, i.e. one that ends the current sec
      while (elemDepth <= j.sectionDepth) {
        wrapperStack.pop()
        j.sectionDepth--
      }
      const siblingWrapper = wrapSec(j, elemDepth, elem)
      currentWrapper().children.push(siblingWrapper)
      wrapperStack.push(siblingWrapper)
    }
    currentWrapper().children.push(elem)
  }

  return rootWrapper
}
