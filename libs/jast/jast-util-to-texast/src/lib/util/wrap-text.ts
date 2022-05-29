import { J } from '../types'

export function wrapText(j: J, value: string): string {
  return j.wrapText ? value : value.replace(/\r?\n|\r/g, ' ')
}
