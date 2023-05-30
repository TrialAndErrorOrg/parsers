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

export function escapeLatex(text: string) {
  return lescape(text, {
    escapeMapFn: (defaultEscapes, formattingEscapes) => {
      defaultEscapes['{'] = '{'
      defaultEscapes['}'] = '}'
      defaultEscapes['−'] = '-'
      defaultEscapes['’'] = "'"
      defaultEscapes['–'] = '--'
      defaultEscapes['‐'] = '-'

      return Object.assign({}, defaultEscapes, formattingEscapes)
    },
  })
}
