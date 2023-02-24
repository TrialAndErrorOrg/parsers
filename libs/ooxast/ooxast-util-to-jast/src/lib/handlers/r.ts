import { FldChar, R, RPr, Text, VerticalAlignRun } from 'ooxast'
import { select } from 'xast-util-select'
import { all } from '../all'
import { x } from 'xastscript'
import { J } from '../types'
import { Italic, Bold, Underline, Strike, Sc, Element } from 'jast-types'
import { convertElement } from 'xast-util-is-element'

//const isVert = convertElement<VerticalAlignRun>('w:vertAlign')

export function r(j: J, node: R) {
  const instrText = select('w\\:instrText', node)
  if (instrText) {
    return all(j, node)
  }

  const fldChar = select('w\\:fldChar', node)
  const isFldChar = convertElement<FldChar>('w:fldChar')
  if (isFldChar(fldChar)) {
    if (fldChar.attributes?.['w:fldCharType'] === 'end') {
      j.deleteNextRun = false
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
    return all(j, node)
  }

  const props = select('w\\:rPr', node) as RPr
  let mergedText = all(j, node).reduce((acc, curr) => {
    if (curr.type !== 'text') return acc
    acc = acc + curr.value
    return acc
  }, '')

  if (j.deleteNextRun) {
    j.deleteNextRun = false
    // Sometimes the "deleteNextRun" gets triggered by a `fldCharType: end`. In that case, we don't want to delete the text, but just the ).
    if (!/\)[.,]/.test(mergedText)) {
      return
    }
    mergedText = mergedText.replace(/\)/, '')
  }
  // Sometimes Mendely and Zotero will add the formatted citation after the structured
  // citation. This is a flag to indicate that the next run should be deleted.
  if (j.lastFormattedCitation || j.lastPlainCitation) {
    // check if this run looks "citey", which we just define as having a year looking string in it,
    // which looks like a string of 4 digits or like B.C.E. or A.D.
    if (
      /\d{4}|\d+ ?([Bb]\.? ?[Cc]\.? ?[Ee]\.?|[Aa]\.? ?[Dd]\.?)/.test(mergedText)
    ) {
      return
    }
    j.lastFormattedCitation = undefined
    j.lastPlainCitation = undefined
  }

  let text = { type: 'text', value: mergedText } as any
  if (!props) return text

  for (let i = 0; i < props.children.length; i++) {
    const prop = props.children[i]
    switch (prop.name.replace(/\w+:/, '')) {
      case 'i': {
        text = x('italic', {}, text)
        continue
      }
      case 'b': {
        text = x('bold', {}, text)
        continue
      }
      case 'u': {
        text = x('underline', {}, text)
        continue
      }
      case 'strike':
      case 'dstrike': {
        text = x('strike', {}, text)
        continue
      }
      case 'vertAlign': {
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
      }
      case 'smallCaps': {
        text = x('sc', {}, text)
        continue
      }
      default:
        continue
    }
  }
  return text
}
