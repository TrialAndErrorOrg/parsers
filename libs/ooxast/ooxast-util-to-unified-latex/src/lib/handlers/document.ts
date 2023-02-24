import { all } from '../all'
import { H } from '../types'
import { Body, Document } from 'ooxast'
import { select } from 'xast-util-select'
import { notes } from './footnotes'

export function document(h: H, node: Document) {
  h.simpleParagraph = true
  const body = select('w\\:body', node)

  const foots = select('w\\:footnotes', node)
  if (foots) {
    h.footnotes = notes(h, foots)
  }

  const endnotes = select('w\\:endnotes', node)
  if (endnotes) {
    h.endnotes = notes(h, endnotes)
  }

  const styles = select('w\\:styles', node)
  if (styles) {
    h.styles = all(h, styles)
  }

  const relations = select('w\\:relationships', node)

  h.simpleParagraph = false

  return all(h, body as Body)
}
