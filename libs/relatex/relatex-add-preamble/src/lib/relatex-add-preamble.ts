import { Root } from 'texast'
import { VFile } from 'vfile'

import { PreambleCommand, addPreamble } from 'texast-util-add-preamble'
export function relatexAddPreamble(settings: PreambleCommand[]) {
  return (tree: Root, file: VFile) => {
    return addPreamble(tree, settings)
  }
}
