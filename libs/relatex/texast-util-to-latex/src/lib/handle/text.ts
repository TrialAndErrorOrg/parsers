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

export const text: BasicHandle = (node: Text, options: Options = {}) => {
  return node.value.replace(/([%&$^_])/g, '\\$1')
}
