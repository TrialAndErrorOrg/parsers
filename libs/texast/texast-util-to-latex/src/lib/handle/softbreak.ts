import { Softbreak } from 'texast'
import { BasicHandle, Options } from '../types.js'

export const softbreak: BasicHandle = (node: Softbreak, options: Options = {}) => {
  return `\n`
}
