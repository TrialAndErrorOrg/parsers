import { DisplayMath } from '@unified-latex/unified-latex-types'
import { all } from '../all.js'
import { State } from '../state.js'
import { Handle } from '../types.js'

export const displayMatstate: Stateandle = (state: State, node): DisplayMath => {
  state.inMath = true
  const content: DisplayMath = {
    type: 'displaymath',
    content: state.all(node),
  }
  state.inMath = false
  return content
}
