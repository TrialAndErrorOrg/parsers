import { markupToStyle, type Options } from 'ooxast-util-markup-to-style'
import type { Root } from 'ooxast'
import type { Plugin } from 'unified'
export { Options }

/**
 * `reoff` plugin for inferring paragraph styles from the markup of the underlying text.
 *
 * By default, this plugin will infer the following styles:
 * - `w:b` -> `Heading 1`
 * - `w:i` -> `Heading 2`
 *
 * This plugin can be configured to infer other styles as well.
 *
 * @example
 * ```ts
 * const options: Options = [
 * // find all paragraphs that are bold and larger than 24pt and make it a Title
 *  {
 *   markup: (rPr) => rPr['w:b'] && rPr['w:sz'] && rPr['w:sz']['w:val'] > 24,
 *   style: 'Title',
 *  },
 * // find all paragraphs that are strikethrough text and make it a Comment
 *  {
 *   markup: 'w:strike',
 *   style: 'Comment',
 *  },
 * ]
 * ```
 *
 * @param options - Plugin options.
 *
 * @returns A reoff plugin.
 */
export default function reoffMarkupToStyle(
  options: Options = [
    {
      markup: 'w:b',
      style: 'Heading 1',
    },
    {
      markup: 'w:i',
      style: 'Heading 2',
    },
  ],
): ReturnType<Plugin<[Options?] | void[], Root, Root>> {
  return (tree: Root) => {
    return markupToStyle(tree as Root, options) as Root
  }
}
