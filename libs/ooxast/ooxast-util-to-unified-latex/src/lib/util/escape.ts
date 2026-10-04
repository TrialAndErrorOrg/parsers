//@ts-expect-error escape-latex is not typed correctly
import lxescape from 'escape-latex'
import { Text } from '../types.js'

type EscapeMapFn = (
  defaultEscapes: { [key: string]: string },
  formattingEscapes: { [key: string]: string },
) => { [key: string]: string }
type Lescape = (
  texString: string,
  options?: {
    preserveFormatting?: boolean
    escapeMapFn?: EscapeMapFn
  },
) => string
const lescape = lxescape as Lescape

/**
 * Escape text for LaTeX.
 *
 * Braces are kept as they are unless `escapeBraces` is set: this is also used on the generated
 * .bib file, where braces are syntax. Text from the document should escape them.
 */
export function escapeLatex(text: string, { escapeBraces = false } = {}) {
  return lescape(text, {
    escapeMapFn: (defaultEscapes, formattingEscapes) => {
      if (!escapeBraces) {
        defaultEscapes['{'] = '{'
        defaultEscapes['}'] = '}'
      }
      defaultEscapes['−'] = '-'
      defaultEscapes['’'] = "'"
      defaultEscapes['–'] = '--'
      defaultEscapes['‐'] = '-'

      return Object.assign({}, defaultEscapes, formattingEscapes)
    },
  })
}
