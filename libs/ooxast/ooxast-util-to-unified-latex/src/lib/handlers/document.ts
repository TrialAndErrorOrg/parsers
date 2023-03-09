import { all } from '../all.js'
import { H, Handle } from '../types.js'
import { Body, Document, Endnotes, Footnotes } from 'ooxast'
import { select } from 'xast-util-select'
import { convertElement } from 'xast-util-is-element'

const isFootnotes = convertElement<Footnotes>('w:footnotes')
const isEndnotes = convertElement<Endnotes>('w:endnotes')

export const document: Handle = (h: H, node: Document) => {
  h.simpleParagraph = true
  const body = select('w\\:body', node)

  // TODO: [ooxast-util-to-unified-latex] do something with the styles
  // const styles = select('w\\:styles', node)
  // if (styles) {
  //   h.styles = all(h, styles)
  // }

  const relations = select('w\\:relationships', node)

  h.simpleParagraph = false

  return all(h, body as Body)
}
