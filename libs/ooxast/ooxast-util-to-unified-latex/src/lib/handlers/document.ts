import { all } from '../all'
import { H, Handle } from '../types'
import { Body, Document, Endnotes, Footnotes } from 'ooxast'
import { select } from 'xast-util-select'
import { notes } from '../util/notes'
import { convertElement } from 'xast-util-is-element'

const isFootnotes = convertElement<Footnotes>('w:footnotes')
const isEndnotes = convertElement<Endnotes>('w:endnotes')

export const document: Handle = (h: H, node: Document) => {
  h.simpleParagraph = true
  const body = select('w\\:body', node)

  const foots = select('w\\:footnotes', node)
  if (foots && isFootnotes(foots)) {
    h.footnotes = notes(h, foots)
  }

  const endnotes = select('w\\:endnotes', node)
  if (endnotes && isEndnotes(endnotes)) {
    h.endnotes = notes(h, endnotes)
  }

  // TODO: [ooxast-util-to-unified-latex] do something with the styles
  // const styles = select('w\\:styles', node)
  // if (styles) {
  //   h.styles = all(h, styles)
  // }

  const relations = select('w\\:relationships', node)

  h.simpleParagraph = false

  return all(h, body as Body)
}
