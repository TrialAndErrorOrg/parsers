import { Text } from 'texast'
import { Handle, Context, Options, SafeOptions, Parent } from '../types'
import { safe } from '../util/safe'

export const text: Handle = (
  node: Text,
  _: Parent | null | undefined,
  context: Context,
  safeOptions: SafeOptions
) => {
  return safe(context, node.value, safeOptions)
}
