import { H } from '../types.js'

export function wrapText(state: State, value: string): string {
  return state.wrapText ? value : value.replace(/\r?\n|\r/g, ' ')
}
