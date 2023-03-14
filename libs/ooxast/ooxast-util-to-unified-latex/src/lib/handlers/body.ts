// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { H, Body, Handle, P, UnifiedLatexNode } from '../types.js'
import { all } from '../all.js'
import { getPStyle } from '../util/get-pstyle.js'
import { getListInfo } from '../util/get-listinfo.js'
import { one } from '../one.js'
import { Element } from 'xast-util-to-string/lib'
import { Environment, Macro } from '@unified-latex/unified-latex-types'
import { m, SP } from '@unified-latex/unified-latex-builder'
import { PB } from '../util/PB.js'
import { updateRenderInfo } from '@unified-latex/unified-latex-util-render-info'

const isP = (node: Element): node is P => node.type === 'element' && node.name === 'w:p'

export const body: Handle = (h: H, body: Body) => {
  const processedBody = body.children.reduce((acc, child, index) => {
    if (child.type !== 'element') return acc

    if (!isP(child)) {
      acc.push(...makeOne(h, child, body))
      return acc
    }

    const isListItem = getPStyle(child) === 'ListParagraph'

    if (!isListItem) {
      acc.push(...makeOne(h, child, body))
      return acc
    }

    const { ilvl, numId } = getListInfo(child) ?? {}

    if (ilvl == null || numId == null) {
      acc.push(...makeOne(h, child, body))
      return acc
    }

    const prevChild = body.children[index - 1]

    const isPrevListItem = prevChild && isP(prevChild) && getPStyle(prevChild) === 'ListParagraph'

    const { ilvl: prevIlvl, numId: prevNumId } = (isPrevListItem && getListInfo(prevChild)) || {}

    const listItem = makeItem(h, child)

    // there's no previous list item, we need to create a new environment
    if (!isPrevListItem || prevIlvl == null || prevNumId == null) {
      const env: Environment = {
        type: 'environment',
        env: 'enumerate',
        content: listItem,
        _renderInfo: {
          ilvl,
          numId,
        },
      }

      acc.push(env)
      return acc
    }

    // there is a previous list item, and it's the same level, so we need to add it to the previous environment
    if (isPrevListItem && ilvl === prevIlvl && numId === prevNumId) {
      const mainEnv = acc[acc.length - 1] as Environment

      if (mainEnv.env !== 'enumerate') {
        throw new Error('prevEnv.env !== enumerate')
      }

      const embeddedEnvs = findEmbeddedEnvs(mainEnv)
      const lastEnv = embeddedEnvs[embeddedEnvs.length - 1]

      lastEnv.content.push(...listItem)
      return acc
    }

    // there is a previous list item, and it's a lower level, so we need to add a new environment inside the previous environment
    if (isPrevListItem && ilvl > prevIlvl) {
      const mainEnv = acc[acc.length - 1] as Environment
      const embeddedEnvs = findEmbeddedEnvs(mainEnv)
      const lastEnv = embeddedEnvs[embeddedEnvs.length - 1]
      const env: Environment = {
        type: 'environment',
        env: 'enumerate',
        content: listItem,
        _renderInfo: {
          ilvl,
          numId,
        },
      }
      lastEnv.content.push(env)
      return acc
    }

    // there is a previous list item, and it's a higher level, so we need to close the previous environment and create a new one
    if (isPrevListItem && ilvl < prevIlvl) {
      const mainEnv = acc[acc.length - 1] as Environment
      const embeddedEnvs = findEmbeddedEnvs(mainEnv)
      const toBeEmbeddedEnv = embeddedEnvs[embeddedEnvs.length - (prevIlvl - ilvl) - 1]

      const env: Environment = {
        type: 'environment',
        env: 'enumerate',
        content: listItem,
        _renderInfo: {
          ilvl,
          numId,
        },
      }

      if (!toBeEmbeddedEnv) {
        acc.push(env)
        return acc
      }

      if (toBeEmbeddedEnv._renderInfo?.ilvl !== ilvl) {
        toBeEmbeddedEnv.content.push(env)
        return acc
      }

      const item = makeItem(h, child)

      toBeEmbeddedEnv.content.push(...item)
      return acc
    }

    // if we are immediately starting a new, but different list after a previous list, we need to close the previous list and start a new one
    if (isPrevListItem && ilvl === prevIlvl && numId !== prevNumId) {
      const mainEnv = acc[acc.length - 1] as Environment
      const embeddedEnvs = findEmbeddedEnvs(mainEnv)
      const toBeEmbeddedEnv = embeddedEnvs[embeddedEnvs.length - (prevIlvl - ilvl) - 1]
      const env: Environment = {
        type: 'environment',
        env: 'enumerate',
        content: listItem,
        _renderInfo: {
          ilvl,
          numId,
        },
      }
      if (!toBeEmbeddedEnv) {
        acc.push(env)
        return acc
      }

      if (toBeEmbeddedEnv._renderInfo?.ilvl !== ilvl) {
        toBeEmbeddedEnv.content.push(env)
        return acc
      }

      acc.push(env)
      return acc
    }

    return acc
  }, [] as UnifiedLatexNode[])
  return processedBody
}

function makeItem(h: H, item: P): [typeof PB, Macro, typeof SP, ...UnifiedLatexNode[], typeof PB] {
  const mIte = m('item')
  updateRenderInfo(mIte, {
    hangingIndent: true,
    inParMode: true,
  })

  return [PB, mIte, SP, ...all(h, item), PB]
}

function findEmbeddedEnvs(envs: Environment[] | Environment): Environment[] {
  envs = Array.isArray(envs) ? envs : [envs]

  if (envs.length === 0) return []
  const env = envs[envs.length - 1]
  if (env.content.length === 0) return envs

  const last = env.content[env.content.length - 1]

  if (last.type !== 'environment') return envs

  return findEmbeddedEnvs([...envs, last])
}

function makeOne(h: H, node: Element, body: Body): UnifiedLatexNode[] {
  const res = one(h, node, body)
  if (!res) {
    return []
  }

  if (Array.isArray(res)) {
    return res
  }

  return [res]
}
