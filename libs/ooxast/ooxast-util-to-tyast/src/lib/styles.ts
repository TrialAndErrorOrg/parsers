import type { Element, Root } from 'xast'
import { fromXml } from 'xast-util-from-xml'
import { attr, child, find, findAll, kids } from './util.js'

export interface StyleInfo {
  id: string
  /** The human readable name (`heading 1`, `Title`, `Quote`), falls back to the id */
  name: string
  basedOn?: string
  /** 0-based outline level (`w:outlineLvl`), inherited from `basedOn` */
  outlineLevel?: number
  /** paragraph-level bold/italic from the style's run properties */
  bold?: boolean
  italic?: boolean
}

export type StyleMap = Map<string, StyleInfo>

/** Parse `word/styles.xml` (string or tree) into a map from style id to {@link StyleInfo}. */
export function parseStyles(styles: string | Root | undefined): StyleMap {
  const map: StyleMap = new Map()
  if (!styles) return map
  let tree: Root
  try {
    tree = typeof styles === 'string' ? fromXml(styles) : styles
  } catch {
    return map
  }

  for (const style of findAll(tree, 'w:style')) {
    const id = attr(style, 'w:styleId')
    if (!id) continue
    const name = attr(child(style, 'w:name'), 'w:val') ?? id
    const basedOn = attr(child(style, 'w:basedOn'), 'w:val')
    const outline = attr(find(child(style, 'w:pPr'), 'w:outlineLvl'), 'w:val')
    const rPr = child(style, 'w:rPr')
    map.set(id, {
      id,
      name,
      basedOn,
      outlineLevel: outline !== undefined ? parseInt(outline, 10) : undefined,
      bold: rPr ? !!child(rPr, 'w:b') : undefined,
      italic: rPr ? !!child(rPr, 'w:i') : undefined,
    })
  }

  // inherit outline levels
  for (const info of map.values()) {
    let current: StyleInfo | undefined = info
    const seen = new Set<string>()
    while (current && info.outlineLevel === undefined && current.basedOn && !seen.has(current.id)) {
      seen.add(current.id)
      current = map.get(current.basedOn)
      if (current?.outlineLevel !== undefined && /heading/i.test(info.name)) {
        info.outlineLevel = current.outlineLevel
      }
    }
  }
  return map
}

export type StyleRole =
  | 'heading'
  | 'title'
  | 'subtitle'
  | 'quote'
  | 'caption'
  | 'bibliography'
  | 'list'
  | 'normal'

export interface ResolvedStyle {
  id?: string
  name: string
  role: StyleRole
  /** 1-based heading level for `role: 'heading'` */
  level?: number
}

const lower = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim()

/**
 * Work out what a paragraph style means. Style ids are matched against `styles.xml` names
 * first (ids like `normal1` must not be mistaken for headings), and then against the id itself
 * (`reoff-markup-to-style` writes names such as `Heading 1` straight into `w:pStyle`).
 */
export function resolveStyle(styleId: string | undefined | null, styles: StyleMap): ResolvedStyle {
  if (!styleId) return { name: '', role: 'normal' }
  const info = styles.get(styleId)
  const candidates = info ? [info.name, styleId] : [styleId]

  for (const raw of candidates) {
    const name = lower(raw)
    const heading = name.match(/^(?:heading|berschrift|überschrift|titre|kop|rubrik)\s*(\d)$/)
    if (heading) return { id: styleId, name: raw, role: 'heading', level: parseInt(heading[1], 10) }
    if (name === 'heading') return { id: styleId, name: raw, role: 'heading', level: 1 }
    if (name === 'title' || name === 'titel') return { id: styleId, name: raw, role: 'title' }
    if (name === 'subtitle' || name === 'untertitel')
      return { id: styleId, name: raw, role: 'subtitle' }
    if (/quot|zitat|citation$/.test(name)) return { id: styleId, name: raw, role: 'quote' }
    if (/^(?:caption|beschriftung|légende)/.test(name))
      return { id: styleId, name: raw, role: 'caption' }
    if (/bibliograph|literaturverzeichnis|^references?$/.test(name)) {
      return { id: styleId, name: raw, role: 'bibliography' }
    }
  }

  if (info?.outlineLevel !== undefined && info.outlineLevel < 9) {
    return { id: styleId, name: info.name, role: 'heading', level: info.outlineLevel + 1 }
  }

  if (/list/i.test(info?.name ?? styleId))
    return { id: styleId, name: info?.name ?? styleId, role: 'list' }
  return { id: styleId, name: info?.name ?? styleId, role: 'normal' }
}

/** The `w:pStyle` of a paragraph. */
export function pStyleId(p: Element): string | undefined {
  return attr(child(child(p, 'w:pPr'), 'w:pStyle'), 'w:val')
}

export function pAlign(p: Element): string | undefined {
  return attr(child(child(p, 'w:pPr'), 'w:jc'), 'w:val')
}

export { kids }
