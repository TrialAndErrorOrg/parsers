import { visit } from 'misc'
import { is } from 'unist-util-is'
import { Front, isElement, Root } from 'jast-types'
import { VFile } from 'vfile'
import { Node } from 'unist'
import { toCSL } from 'jast-util-to-csl'

export function rejourFrontmatter() {
  return (tree: Root, file: VFile) => {
    Object.assign(file.data, toCSL(tree))
  }
}
