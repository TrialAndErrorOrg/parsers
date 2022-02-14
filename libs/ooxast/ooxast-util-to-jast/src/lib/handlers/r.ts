import { R, RPr } from 'ooxast'
import { select } from 'xast-util-select'
import { all } from '../all'
import { x } from 'xastscript'
import { J } from '../types'
import { Italic, Bold, Underline, Strike, Sc } from 'jjast'

export function r(j: J, node: R) {
  if (!node?.children?.[1] || node?.children?.[1]?.name === 'w:fldChar') return
  if (node?.children?.[1]?.name === 'w:instrText') {
    j.deleteNextRun = false
  }
  if (j.deleteNextRun) {
    j.deleteNextRun = false
    return
  }

  const props = select('w\\:rPr', node) as RPr
  let text = j(node, 'text', all(j, node))
  if (!props) return text

  for (let i = 0; i < props.children.length; i++) {
    const prop = props.children[i]
    switch (prop.name.replace('w:', '')) {
      case 'i':
        text = x('italic', {}, text) as Italic
        continue
      case 'b':
        text = x('bold', {}, text) as Bold
        continue
      case 'u':
        text = x('underline', {}, text) as Underline
        continue
      case 'strike':
      case 'dstrike':
        text = x('strike', {}, text) as Strike
        continue
      case 'smallCaps':
        text = x('sc', {}, text) as Sc
        continue
      default:
        continue
    }
  }
  return text
}
