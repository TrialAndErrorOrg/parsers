import { Math } from 'ooxast'
import { State } from '../state.js'
import { Handle } from '../types.js'
import {} from 'mdast-builder'
import { InlineMath } from 'mdast-util-math'
import { toString } from 'xast-util-to-string'

export const oMath: Handle = (state: State, node: Math.OMath) => {
  const string = toString(node)

  if (state.inDisplayMath) {
    return string
  }

  return { type: 'inlineMath', value: string } as InlineMath
}
