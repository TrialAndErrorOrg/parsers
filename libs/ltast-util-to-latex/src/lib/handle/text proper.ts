import { Text } from 'relatex'
import { Handle, Context, Options, SafeOptions, Parent } from '../types.js'
import { safe } from '../util/safe.js'

export const text: Handle = (
  node: Text,
  _: Parent | null | undefined,
  context: Context,
  safeOptions: SafeOptions
) => {
  return safe(context, node.value, safeOptions)
}
