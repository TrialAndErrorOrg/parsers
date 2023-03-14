import { Math } from 'ooxast'
import { State } from '../state.js'
import { Handle } from '../types.js'
import {} from 'mdast-builder'
import { InlineMath } from 'mdast-util-math'
import { toString } from 'xast-util-to-string'
import { Text } from 'mdast'

export const oMath: Handle = (state: State, node: Math.OMath) => {
  const string = toString(node)

  if (state.inDisplayMath) {
    return { type: 'text', value: string } as Text
  }

  return { type: 'inlineMath', value: string } as InlineMath
}
