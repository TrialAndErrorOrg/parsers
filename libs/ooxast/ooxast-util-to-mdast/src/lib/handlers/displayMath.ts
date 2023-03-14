import { State } from '../state.js'
import { Handle } from '../types.js'
import { Math } from 'mdast-util-math'
import { Math as OoxastMath } from 'ooxast'
import { toString } from 'mdast-util-to-string'

export const displayMath: Handle = (state: State, node: OoxastMath.OMathPara): Math => {
  state.inMath = true
  const content: Math = {
    type: 'math',
    meta: 'latex',
    value: toString(state.all(node)?.[0]),
  }
  state.patch(node, content)

  state.inMath = false
  return content
}
