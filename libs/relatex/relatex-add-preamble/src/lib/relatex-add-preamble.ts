import { Root } from 'texast'
import { VFile } from 'vfile'
import { Plugin } from 'unified'
import { PreambleCommand, addPreamble } from 'texast-util-add-preamble'

export default function relatexAddPreamble(
  settings: PreambleCommand[]
): ReturnType<Plugin<[PreambleCommand[]] | void[], Root, Root>> {
  return (tree: Root, file: VFile) => {
    return addPreamble(tree, settings)
  }
}
