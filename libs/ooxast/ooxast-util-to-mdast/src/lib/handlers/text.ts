import { State } from '../state.js'
import { Handle, Text } from '../types.js'

export const text: Handle = (state: State, node: Text) => {
  const result = { type: 'text', value: node.value } as Text
  state.patch(node, result)
  return result
}
