import type { Element, Root } from 'xast'
import { fromXml } from 'xast-util-from-xml'
import { attr, child, findAll, kids } from './util.js'

export interface LevelInfo {
  numFmt: string
  lvlText: string
  start: number
  /** left indent in twips from the level's `w:pPr/w:ind` */
  indent?: number
}

/** numId → ilvl → level */
export type Numbering = Map<string, Map<number, LevelInfo>>

/** Parse `word/numbering.xml` into a lookup from `numId`/`ilvl` to the level definition. */
export function parseNumbering(numbering: string | Root | undefined): Numbering | undefined {
  if (!numbering) return undefined
  let tree: Root
  try {
    tree = typeof numbering === 'string' ? fromXml(numbering) : numbering
  } catch {
    return undefined
  }

  const abstracts = new Map<string, Map<number, LevelInfo>>()
  for (const abs of findAll(tree, 'w:abstractNum')) {
    const id = attr(abs, 'w:abstractNumId')
    if (!id) continue
    abstracts.set(id, parseLevels(abs))
  }

  const result: Numbering = new Map()
  for (const num of findAll(tree, 'w:num')) {
    const numId = attr(num, 'w:numId')
    const absId = attr(child(num, 'w:abstractNumId'), 'w:val')
    if (!numId || !absId) continue
    const levels = new Map(abstracts.get(absId) ?? [])
    // w:lvlOverride
    for (const override of kids(num).filter((k) => k.name === 'w:lvlOverride')) {
      const ilvl = parseInt(attr(override, 'w:ilvl') ?? '0', 10)
      const lvl = child(override, 'w:lvl')
      const startOverride = attr(child(override, 'w:startOverride'), 'w:val')
      const base = levels.get(ilvl)
      if (lvl) {
        const parsed = parseLevel(lvl)
        levels.set(ilvl, { ...base, ...parsed })
      } else if (startOverride && base) {
        levels.set(ilvl, { ...base, start: parseInt(startOverride, 10) })
      }
    }
    result.set(numId, levels)
  }
  return result
}

function parseLevels(abs: Element): Map<number, LevelInfo> {
  const levels = new Map<number, LevelInfo>()
  for (const lvl of kids(abs).filter((k) => k.name === 'w:lvl')) {
    const ilvl = parseInt(attr(lvl, 'w:ilvl') ?? '0', 10)
    levels.set(ilvl, parseLevel(lvl))
  }
  return levels
}

function parseLevel(lvl: Element): LevelInfo {
  const indent =
    attr(child(child(lvl, 'w:pPr'), 'w:ind'), 'w:left') ??
    attr(child(child(lvl, 'w:pPr'), 'w:ind'), 'w:start')
  return {
    numFmt: attr(child(lvl, 'w:numFmt'), 'w:val') ?? 'decimal',
    lvlText: attr(child(lvl, 'w:lvlText'), 'w:val') ?? '',
    start: parseInt(attr(child(lvl, 'w:start'), 'w:val') ?? '1', 10),
    indent: indent !== undefined ? parseInt(indent, 10) : undefined,
  }
}

export interface ListInfo {
  numId: string
  ilvl: number
  level?: LevelInfo
  /** effective left indent (twips), used to nest lists the way they look */
  indent: number
  ordered: boolean
  /** Typst numbering pattern for ordered lists */
  pattern?: string
}

const ORDERED: Record<string, string> = {
  decimal: '1',
  decimalZero: '1',
  lowerLetter: 'a',
  upperLetter: 'A',
  lowerRoman: 'i',
  upperRoman: 'I',
}

/** Find the list properties of a paragraph, or undefined if it isn't a list item. */
export function listInfo(p: Element, numbering: Numbering | undefined): ListInfo | undefined {
  const pPr = child(p, 'w:pPr')
  const numPr = child(pPr, 'w:numPr')
  if (!numPr) return undefined
  const numId = attr(child(numPr, 'w:numId'), 'w:val')
  // numId 0 means "no numbering"
  if (!numId || numId === '0') return undefined
  const ilvl = parseInt(attr(child(numPr, 'w:ilvl'), 'w:val') ?? '0', 10)
  const level = numbering?.get(numId)?.get(ilvl)
  if (level?.numFmt === 'none' && !level.lvlText) {
    // numbering without a marker: not really a list
    return undefined
  }

  const ownIndent = attr(child(pPr, 'w:ind'), 'w:left') ?? attr(child(pPr, 'w:ind'), 'w:start')
  const indent =
    ownIndent !== undefined ? parseInt(ownIndent, 10) : level?.indent ?? (ilvl + 1) * 720

  const ordered = !!level && level.numFmt in ORDERED
  let pattern: string | undefined
  if (ordered && level) {
    // "%1." → "1.", "(%1)" → "(1)", "%1.%2." → "1." (Typst numbers each level separately)
    const own = new RegExp(`%${ilvl + 1}`)
    const text = level.lvlText.match(own) ? level.lvlText : `%${ilvl + 1}.`
    const m = text.match(new RegExp(`([^%\\d]*)%${ilvl + 1}([^%]*)$`))
    const prefix = m?.[1] ?? ''
    const suffix = m?.[2] ?? '.'
    pattern = `${prefix.replace(/[^()[\].\-:]/g, '')}${ORDERED[level.numFmt]}${suffix.replace(
      /[^()[\].\-:]/g,
      '',
    )}`
  }
  return { numId, ilvl, level, indent, ordered, pattern }
}
