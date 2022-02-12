import { J } from '../types'
import { convertElement } from 'xast-util-is-element'
import { Parent, Element, P, Node, Body } from '../types'
import { getPStyle } from './get-pstyle'
import { Sec, Body as JastBody } from 'jjast'
import { all } from '../all'

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
  children: Node[],
  parent: Parent
): Sec | JastBody {
  const parentSec: Sec | JastBody = {
    type: 'element',
    name: depth === 0 ? 'body' : 'sec',
    attributes: depth === 0 ? {} : { id: `sec-${depth}` },
    //@ts-ignore shush, it's better this way
    children,
  }
  return depth === 0
    ? (j(parent, 'body', all(j, parentSec)) as JastBody)
    : (j(parent, 'sec', all(j, parentSec)) as Sec)
}

const isP = convertElement<P>('w:p')

export function isHeading(elem: Node): elem is P {
  return !!(isP(elem) && getPStyle(elem)?.toLowerCase()?.includes('heading'))
}

export function getHeadingLevel(p: P) {
  const lastNumber = getPStyle(p)?.toLowerCase()?.slice(-1)
  return !lastNumber ? null : parseInt(lastNumber, 10)
}

export function wrapSections(j: J, body: Body) {
  const rootChildren = body.children

  const rootWrapper = wrapSec(j, 0, [], body)
  const wrapperStack: any[] = []
  wrapperStack.push(rootWrapper)

  function currentWrapper() {
    return wrapperStack[wrapperStack.length - 1]
  }

  function currentWrapperDepth() {
    return wDepth(currentWrapper())
  }

  for (const elem of rootChildren) {
    if (isHeading(elem)) {
      const elemDepth = getHeadingLevel(elem)
      if (!elemDepth) {
        currentWrapper().children.push(elem)
        return
      }
      // Child heading
      if (elemDepth > j.sectionDepth) {
        const childWrapper = wrapSec(j, elemDepth, [elem], body)
        currentWrapper().children.push(childWrapper)
        wrapperStack.push(childWrapper)
        j.sectionDepth++
        return
      }

      // Delimiting heading, i.e. one that ends the current sec
      while (elemDepth <= j.sectionDepth) {
        wrapperStack.pop()
        j.sectionDepth--
      }
      const siblingWrapper = wrapSec(j, elemDepth, [elem], body)
      currentWrapper().children.push(siblingWrapper)
      wrapperStack.push(siblingWrapper)
    }
  }

  return rootWrapper
}
