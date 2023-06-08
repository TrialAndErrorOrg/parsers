import type { Environment, Macro } from '@unified-latex/unified-latex-types'
import type { H, P, UnifiedLatexNode, ParagraphHandler, ParagraphMatcher } from '../../types.js'
import { PB } from '../../util/PB.js'
import { getListInfo } from '../../util/get-listinfo.js'
import { SP, m } from '@unified-latex/unified-latex-builder'
import { updateRenderInfo } from '@unified-latex/unified-latex-util-render-info'
import { all } from '../../all.js'
import { one } from '../../one.js'
import type { Element, Parent } from 'xast'

const enumerateMap = {
  decimal: true,
  lowerRoman: true,
  upperRoman: true,
  lowerLetter: true,
  upperLetter: true,
} as const

function makeItem(h: H, item: P): [typeof PB, Macro, typeof SP, ...UnifiedLatexNode[], typeof PB] {
  const mIte = m('item')
  updateRenderInfo(mIte, {
    hangingIndent: true,
    inParMode: true,
  })

  return [PB, mIte, SP, ...all(h, item), PB]
}

function makeEnv(h: H, item: P, numId: number, ilvl: number): Environment {
  if (!h.listNumbering) {
    return {
      type: 'environment',
      env: 'enumerate',
      content: makeItem(h, item),
      _renderInfo: {
        ilvl,
        numId,
      },
    }
  }

  const { numFmt, lvlText, lvlJc, start } =
    h.listNumbering?.numIds?.[numId.toString()]?.[ilvl?.toString()] ?? {}

  const enumerate = numFmt in enumerateMap ? 'enumerate' : 'itemize'

  const env: Environment = {
    type: 'environment',
    env: enumerate,
    content: makeItem(h, item),
    _renderInfo: {
      ilvl,
      numId,
      numFmt,
      lvlText,
      lvlJc,
      start,
    },
  }

  return env
}

function findEmbeddedEnvs(envs: Environment[] | Environment): Environment[] {
  envs = Array.isArray(envs) ? envs : [envs]

  if (envs.length === 0) {
    return []
  }
  const env = envs[envs.length - 1]
  if (!env?.content?.length) {
    return envs
  }

  const last = env.content[env.content.length - 1]

  if (last.type !== 'environment') {
    return envs
  }

  return findEmbeddedEnvs([...envs, last])
}

function makeOne(h: H, node: Element, parent?: Parent): UnifiedLatexNode[] {
  const res = one(h, node, parent)
  if (!res) {
    return []
  }

  if (Array.isArray(res)) {
    return res
  }

  return [res]
}

export const listMatcher: ParagraphMatcher = (paragraph, style) => {
  const { ilvl, numId } = getListInfo(paragraph) ?? {}

  if (ilvl == null || numId == null) {
    return false
  }

  return true
}

const isP = (node: Element): node is P => node.type === 'element' && node.name === 'w:p'

export const listStyleHandler: ParagraphHandler = (
  h,
  paragraph,
  { styleName, previousElement, alreadyProcessedBody, body },
) => {
  const { ilvl, numId } = getListInfo(paragraph) ?? {}
  if (ilvl == null || numId == null) {
    return makeOne(h, paragraph, body)
  }

  const { ilvl: prevIlvl, numId: prevNumId } =
    (previousElement && isP(previousElement) && getListInfo(previousElement)) || {}

  const isPrevListItem = prevIlvl != null && prevNumId != null

  const listItem = makeItem(h, paragraph)

  // there's no previous list item, we need to create a new environment
  if (!isPrevListItem || prevIlvl == null || prevNumId == null) {
    const env = makeEnv(h, paragraph, numId, ilvl)

    return env
  }

  const previouslyProcessedElement = alreadyProcessedBody[alreadyProcessedBody.length - 1]

  // there is a previous list item, and it's the same level, so we need to add it to the previous environment
  if (isPrevListItem && ilvl === prevIlvl && numId === prevNumId) {
    const mainEnv = previouslyProcessedElement as Environment

    if (!['enumerate', 'itemize'].includes(mainEnv.env)) {
      throw new Error('prevEnv.env !== enumerate')
    }

    const embeddedEnvs = findEmbeddedEnvs(mainEnv)
    const lastEnv = embeddedEnvs[embeddedEnvs.length - 1]

    lastEnv.content.push(...listItem)
    return
  }

  // there is a previous list item, and it's a lower level, so we need to add a new environment inside the previous environment
  if (isPrevListItem && ilvl > prevIlvl) {
    const mainEnv = previouslyProcessedElement as Environment
    const embeddedEnvs = findEmbeddedEnvs(mainEnv)
    const lastEnv = embeddedEnvs[embeddedEnvs.length - 1]
    const env = makeEnv(h, paragraph, numId, ilvl)

    lastEnv.content.push(env)
    return
  }

  // there is a previous list item, and it's a higher level, so we need to close the previous environment and create a new one
  if (isPrevListItem && ilvl < prevIlvl) {
    const mainEnv = previouslyProcessedElement as Environment
    const embeddedEnvs = findEmbeddedEnvs(mainEnv)
    const toBeEmbeddedEnv = embeddedEnvs[embeddedEnvs.length - (prevIlvl - ilvl) - 1]

    const env = makeEnv(h, paragraph, numId, ilvl)

    if (!toBeEmbeddedEnv) {
      return env
    }

    if (toBeEmbeddedEnv._renderInfo?.ilvl !== ilvl) {
      toBeEmbeddedEnv.content.push(env)
      return
    }

    const item = makeItem(h, paragraph)

    toBeEmbeddedEnv.content.push(...item)
    return
  }

  // if we are immediately starting a new, but different list after a previous list, we need to close the previous list and start a new one
  if (isPrevListItem && ilvl === prevIlvl && numId !== prevNumId) {
    const mainEnv = previouslyProcessedElement as Environment
    const embeddedEnvs = findEmbeddedEnvs(mainEnv)
    const toBeEmbeddedEnv = embeddedEnvs[embeddedEnvs.length - (prevIlvl - ilvl) - 1]
    const env = makeEnv(h, paragraph, numId, ilvl)

    if (!toBeEmbeddedEnv) {
      return env
    }

    if (toBeEmbeddedEnv._renderInfo?.ilvl !== ilvl) {
      toBeEmbeddedEnv.content.push(env)

      return
    }

    return env
  }
}
