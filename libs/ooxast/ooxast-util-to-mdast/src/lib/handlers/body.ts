// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Body, Handle, P, MdastNode } from '../types.js'
import { getPStyle } from '../util/get-pstyle.js'
import { getListInfo } from '../util/get-listinfo.js'
import { Element } from 'xast-util-to-string/lib'
import { Environment, Macro } from '@unified-latex/unified-latex-types'
import { m, SP } from '@unified-latex/unified-latex-builder'
import { PB } from '../util/PB.js'
import { updateRenderInfo } from '@unified-latex/unified-latex-util-render-info'
import { State } from '../state.js'
import { list, listItem } from 'mdast-builder'
import { List, ListItem } from 'mdast'

const isP = (node: Element): node is P => node.type === 'element' && node.name === 'w:p'

export const body: Handle = (state: State, body: Body) => {
  const processedBody = body.children.reduce((acc, child, index) => {
    if (child.type !== 'element') return acc

    if (!isP(child)) {
      acc.push(...makeOne(state, child, body))
      return acc
    }

    const isListItem = getPStyle(child) === 'ListParagraph'

    if (!isListItem) {
      acc.push(...makeOne(state, child, body))
      return acc
    }

    const { ilvl, numId } = getListInfo(child) ?? {}

    if (ilvl == null || numId == null) {
      acc.push(...makeOne(state, child, body))
      return acc
    }

    const prevChild = body.children[index - 1]

    const isPrevListItem = prevChild && isP(prevChild) && getPStyle(prevChild) === 'ListParagraph'

    const { ilvl: prevIlvl, numId: prevNumId } = (isPrevListItem && getListInfo(prevChild)) || {}

    const listItem = child

    // there's no previous list item, we need to create a new environment
    if (!isPrevListItem || prevIlvl == null || prevNumId == null) {
      const lst = list('ordered', listItem) as List

      acc.push(lst)
      return acc
    }

    // there is a previous list item, and it's the same level, so we need to add it to the previous environment
    if (isPrevListItem && ilvl === prevIlvl && numId === prevNumId) {
      const mainList = acc[acc.length - 1] as List

      if (!mainList.ordered) {
        throw new Error('prevEnv.env !== ordered')
      }

      const embeddedLists = findEmbeddedLists(mainList)
      const lastList = embeddedLists[embeddedLists.length - 1]

      lastList.children.push(makeItem(state, listItem))
      return acc
    }

    // there is a previous list item, and it's a lower level, so we need to add a new environment inside the previous environment
    if (isPrevListItem && ilvl > prevIlvl) {
      const mainList = acc[acc.length - 1] as List
      const embeddedLists = findEmbeddedLists(mainList)
      const lastList = embeddedLists[embeddedLists.length - 1]
      lastList.children?.push(makeItemList(state, listItem))
      return acc
    }

    // there is a previous list item, and it's a higher level, so we need to close the previous environment and create a new one
    if (isPrevListItem && ilvl < prevIlvl) {
      const mainList = acc[acc.length - 1] as List
      const embeddedLists = findEmbeddedLists(mainList)
      const toBeEmbeddedList = embeddedLists[embeddedLists.length - (prevIlvl - ilvl) - 1]

      const list = makeItemList(state, listItem)

      if (!toBeEmbeddedList) {
        acc.push(list)
        return acc
      }

      if (oBeEmbeddedList._renderInfo?.ilvl !== ilvl) {
        toBeEmbeddedList.content.push(env)
        return acc
      }

      const item = makeItem(state, child)

      toBeEmbeddedList.content.push(...item)
      return acc
    }

    // if we are immediately starting a new, but different list after a previous list, we need to close the previous list and start a new one
    if (isPrevListItem && ilvl === prevIlvl && numId !== prevNumId) {
      const mainList = acc[acc.length - 1] as List
      const embeddedLists = findEmbeddedLists(mainList)
      const lastList = embeddedLists[embeddedLists.length - 1]
      // const lst = list('ordered', listItem) as List
      lastList.children.push(makeItemList(state, listItem))
      return acc
    }

    return acc
  }, [] as MdastNode[])
  return processedBody
}

function makeItem(state: State, item: P): ListItem {
  const result = state.all(item)
  const mIte = listItem(result) as ListItem
  state.patch(item, mIte)
  return mIte
}

function makeItemList(state: State, item: P): ListItem {
  const result = state.all(item)
  const lst = list('ordered', listItem(result)) as List
  const mIte = listItem(lst) as ListItem
  state.patch(item, mIte)
  return mIte
}

function findEmbeddedLists(lists: List[] | List): List[] {
  lists = Array.isArray(lists) ? lists : [lists]

  if (lists.length === 0) return []
  const lst = lists[lists.length - 1]
  if (lst.children.length === 0) return lists

  const last = lst.children[lst.children.length - 1]?.children?.[0]

  if (last.type !== 'list') return lists

  return findEmbeddedLists([...lists, last])
}

function makeOne(state: State, node: Element, body: Body): MdastNode[] {
  const res = state.one(node, body)
  if (!res) {
    return []
  }

  if (Array.isArray(res)) {
    return res
  }

  return [res]
}
