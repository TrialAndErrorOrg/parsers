import { Text } from 'texast'
import {
  Handle,
  Context,
  Options,
  SafeOptions,
  Parent,
  BasicHandle,
} from '../types.js'
import { safe } from '../util/safe.js'

export const text: BasicHandle = (node: Text, options: Options = {}) => {
  return node.value
}
