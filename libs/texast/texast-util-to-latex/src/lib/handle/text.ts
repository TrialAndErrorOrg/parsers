import { Text } from 'texast'
import {
  Handle,
  Context,
  Options,
  SafeOptions,
  Parent,
  BasicHandle,
} from '../types'
import { safe } from '../util/safe'
//@ts-expect-error
import lxescape from 'escape-latex'

type EscapeMapFn = (
  defaultEscapes: { [key: string]: string },
  formattingEscapes: { [key: string]: string }
) => { [key: string]: string }
type Lescape = (
  texString: string,
  options?: {
    preserveFormatting?: boolean
    escapeMapFn?: EscapeMapFn
  }
) => string
const lescape = lxescape as Lescape

export const text: BasicHandle = (node: Text, options: Options = {}) => {
  return lescape(node.value, {
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
