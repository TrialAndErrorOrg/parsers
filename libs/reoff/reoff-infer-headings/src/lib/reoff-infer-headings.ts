import reoffInferHeadings, { Options } from 'reoff-markup-to-style'

export { Options }
/**
 * `reoff` plugin for inferring headings from the markup of the underlying text.
 *
 * By default, this plugin will infer the following styles:
 *
 * - `w:b` -> `Heading 1`
 * - `w:i` -> `Heading 2`
 *
 * This plugin is just a simple wrapper around `reoff-markup-to-style` with the default options set.
 */
export default reoffInferHeadings
