import { R, RPr } from 'ooxast'
import { select } from 'xast-util-select'
import { all } from '../all'
import { x } from 'xastscript'
import { J } from '../types'
import { Italic, Bold, Underline, Strike, Sc } from 'jjast'

export function r(j: J, node: R) {
  if (node?.children?.[1]?.name === 'w:fldChar') return

  if (node?.children?.[1]?.name === 'w:footnoteReference') {
    return x(
      'xref',
      { refType: 'fn' },
      { type: 'text', value: `[${node?.children?.[1]?.attributes?.['w:id']}]` }
    )
  }

  if (node?.children?.[1]?.name === 'w:instrText') {
    j.deleteNextRun = false
    return all(j, node)
  }
  if (j.deleteNextRun) {
    j.deleteNextRun = false
    return
  }

  const props = select('w\\:rPr', node) as RPr
  const mergedText = all(j, node).reduce((acc, curr) => {
    if (curr.type !== 'text') return acc
    acc = acc + curr.value
    return acc
  }, '')

  let text = { type: 'text', value: mergedText } as any
  if (!props) return text

  for (let i = 0; i < props.children.length; i++) {
    const prop = props.children[i]
    switch (prop.name.replace('w:', '')) {
      case 'i':
        text = x('italic', {}, text)
        continue
      case 'b':
        text = x('bold', {}, text)
        continue
      case 'u':
        text = x('underline', {}, text)
        continue
      case 'strike':
      case 'dstrike':
        text = x('strike', {}, text)
        continue
      case 'smallCaps':
        text = x('sc', {}, text)
        continue
      default:
        continue
    }
  }
  return text
}
