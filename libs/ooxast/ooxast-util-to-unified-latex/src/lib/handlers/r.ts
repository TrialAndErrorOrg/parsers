import { FldChar, R, RPr, VerticalAlignRun } from 'ooxast'
import { select } from 'xast-util-select'
import { all } from '../all'
import { x } from 'xastscript'
import { H } from '../types'
import { String as UnifiedLatexString } from '@unified-latex/unified-latex-types'
import { convertElement } from 'xast-util-is-element'

//const isVert = convertElement<VerticalAlignRun>('w:vertAlign')

export function r(h: H, node: R) {
  const instrText = select('w\\:instrText', node)
  if (instrText) {
    h.deleteNextRun = true
    return all(h, node)
  }

  const fldChar = select('w\\:fldChar', node)
  const isFldChar = convertElement<FldChar>('w:fldChar')
  if (isFldChar(fldChar)) {
    if (fldChar.attributes?.['w:fldCharType'] === 'end') {
      h.deleteNextRun = false
      return
    }
    return
  }

  const footnoteReference = select('w\\:footnoteReference', node)
  if (footnoteReference) {
    return x(
      'xref',
      { refType: 'fn' },
      { type: 'text', value: `[${footnoteReference.attributes?.['w:id']}]` }
    )
  }

  const drawing = select('w\\:drawing', node)
  if (drawing) {
    return all(h, node)
  }

  if (h.deleteNextRun) {
    h.deleteNextRun = false
    return
  }

  const props = select('w\\:rPr', node) as RPr
  const mergedText = all(h, node).reduce((acc, curr) => {
    if (curr.type !== 'text') return acc
    acc = acc + curr.value
    return acc
  }, '')

  let text = { type: 'string', content: mergedText } as UnifiedLatexString
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
      case 'vertAlign':
        //if (!isVert(prop)) continue
        // @ts-expect-error aaaa
        if (prop.attributes['w:val'] === 'superscript') {
          text = x('sup', {}, text)
          continue
        }
        // @ts-expect-error aaaa
        if (prop.attributes['w:val'] === 'subscript') {
          text = x('sub', {}, text)
          continue
        }
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
