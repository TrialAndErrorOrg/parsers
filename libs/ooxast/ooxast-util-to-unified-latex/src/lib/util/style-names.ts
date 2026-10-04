import type { Root as XastRoot, Element } from 'xast'
import { fromXml } from 'xast-util-from-xml'
import { selectAll, select } from 'xast-util-select'

/**
 * Map of paragraph style ids (`w:pStyle/@w:val`) to their style names (`w:name/@w:val`),
 * read from `word/styles.xml`.
 *
 * Style ids are not meaningful by themselves: Word localises them (`Kop1`, `berschrift1`),
 * and Google Docs exports invent ones like `normal1` or `Literaturverzeichnis1`. The style
 * *name* of a built-in heading is always `heading N`, whatever the language.
 */
export type StyleNames = Record<string, string>

export function getStyleNames(styles: string | XastRoot | undefined | null): StyleNames {
  if (!styles) return {}

  let tree: XastRoot
  try {
    tree = typeof styles === 'string' ? fromXml(styles) : styles
  } catch {
    return {}
  }

  const names: StyleNames = {}
  for (const style of selectAll('w\\:style', tree) as Element[]) {
    const id = style.attributes?.['w:styleId']
    const name = select('w\\:name', style)?.attributes?.['w:val']
    if (id && name) {
      names[id] = name
    }
  }
  return names
}

const headingRegex = /^heading\s*([1-9])$/i

/**
 * The heading level of a paragraph style, or `null` if the style is not a heading.
 *
 * A style is a heading if its name (looked up in `styleNames`), or its id, is `heading N`
 * (`Heading1`, `Heading 1`, `heading 1`) or just `heading`.
 *
 * Any other style is not a heading, even if it ends in a digit (`normal1`, `TOC1`,
 * `Literaturverzeichnis1`, `ListParagraph2`).
 */
export function getHeadingLevel(style: string, styleNames: StyleNames = {}): number | null {
  for (const candidate of [styleNames[style], style]) {
    if (!candidate) continue
    const normalized = candidate.trim()
    if (/^heading$/i.test(normalized)) {
      return 1
    }
    const match = normalized.match(headingRegex)
    if (match) {
      return parseInt(match[1], 10)
    }
  }
  return null
}

/**
 * The name of a paragraph style, falling back to its id if `styles.xml` does not define it.
 */
export function getStyleName(style: string, styleNames: StyleNames = {}) {
  return styleNames[style] ?? style
}
