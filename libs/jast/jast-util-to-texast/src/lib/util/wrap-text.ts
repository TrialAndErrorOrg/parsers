import { J } from '../types.js'

export function wrapText(j: J, value: string): string {
  return j.wrapText ? value : value.replace(/\r?\n|\r/g, ' ')
}
