import { Body, Handle, P, MdastNode } from '../types.js'
import { getPStyle } from '../util/get-pstyle.js'
import { getListInfo } from '../util/get-listinfo.js'
import { Element } from 'xast'
import { State } from '../state.js'
import { List, ListItem } from 'mdast'

const isP = (node: Element): node is P => node.type === 'element' && node.name === 'w:p'

declare module 'mdast' {
  interface ListItemContentMap {
    list: List
  }

  interface ListData {
    numFmt?: string
    ilvl?: number
    numId?: number
  }
}

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
      const lst = makeList(state, listItem, numId, ilvl) as List

      acc.push(lst)
      return acc
    }

    // there is a previous list item, and it's the same level, so we need to add it to the previous environment
    if (isPrevListItem && ilvl === prevIlvl && numId === prevNumId) {
      const mainList = acc[acc.length - 1] as List

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
      lastList.children[lastList.children.length - 1].children.push(
        makeList(state, listItem, numId, ilvl),
      )
      return acc
    }

    // there is a previous list item, and it's a higher level, so we need to close the previous environment and create a new one
    if (isPrevListItem && ilvl < prevIlvl) {
      const mainList = acc[acc.length - 1] as List
      const embeddedLists = findEmbeddedLists(mainList)
      const toBeEmbeddedList = embeddedLists[embeddedLists.length - (prevIlvl - ilvl) - 1]

      const list = makeList(state, listItem, numId, ilvl)

      if (!toBeEmbeddedList) {
        acc.push(list)
        return acc
      }

      if (toBeEmbeddedList.data?.ilvl !== ilvl) {
        toBeEmbeddedList.children[toBeEmbeddedList.children.length - 1].children.push(list)
        return acc
      }

      const item = makeItem(state, child)

      toBeEmbeddedList.children.push(item)
      return acc
    }

    // if we are immediately starting a new, but different list after a previous list, we need to close the previous list and start a new one
    if (isPrevListItem && ilvl === prevIlvl && numId !== prevNumId) {
      const mainList = acc[acc.length - 1] as List
      const embeddedLists = findEmbeddedLists(mainList)
      const lastList = embeddedLists[embeddedLists.length - 1]
      // const lst = list('ordered', listItem) as List
      lastList.children[lastList.children.length - 1].children.push(
        makeList(state, listItem, numId, ilvl),
      )
      return acc
    }

    return acc
  }, [] as MdastNode[])
  return processedBody
}

function makeItem(state: State, item: P): ListItem {
  const result = state.all(item)
  const mIte = {
    type: 'listItem',
    children: result,
  } as ListItem
  state.patch(item, mIte)
  return mIte
}

const orderedMap = {
  decimal: true,
  lowerLetter: true,
  upperLetter: true,
  lowerRoman: true,
  upperRoman: true,
} as const

function makeList(state: State, item: P, numId: number, ilvl: number): List {
  const result = state.all(item)
  if (!state.listNumbering) {
    const res = {
      type: 'list',
      ordered: true,
      data: {
        numFmt: 'decimal',
        ilvl,
        numId,
      },
      children: [
        {
          type: 'listItem',
          children: result,
        } as ListItem,
      ],
    } as List
    state.patch(item, res)
    return res
  }

  const num = state.listNumbering?.numIds[numId.toString()]
  const { lvlJc, numFmt, lvlText, start } = num[ilvl.toString()]
  const ordered = numFmt in orderedMap

  const lst: List = {
    type: 'list',
    ordered,
    start: start ? parseInt(start, 10) : undefined,
    data: {
      numFmt,
      ilvl,
      numId,
    },
    children: [
      {
        type: 'listItem',
        children: result,
      } as ListItem,
    ],
  }
  state.patch(item, lst)
  return lst
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
