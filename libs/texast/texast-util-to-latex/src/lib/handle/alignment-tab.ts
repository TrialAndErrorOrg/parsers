import { AlignmentTab } from 'texast'
import { BasicHandle, Options } from '../types'

export const alignmentTab: BasicHandle = (
  node: AlignmentTab,
  options: Options = {}
) => {
  return ' & '
}
