import { State } from '../state.js'
import { Handle } from '../types.js'
import { Body, Document, Endnotes, Footnotes } from 'ooxast'
import { select } from 'xast-util-select'
import { convertElement } from 'xast-util-is-element'

const isFootnotes = convertElement<Footnotes>('w:footnotes')
const isEndnotes = convertElement<Endnotes>('w:endnotes')

export const document: Handle = (state: State, node: Document) => {
  state.simpleParagraph = true
  const body = select('w\\:body', node)

  // TODO: [ooxast-util-to-unified-latex] do something with the styles
  // const styles = select('w\\:styles', node)
  // if (styles) {
  //   state.styles = state.all( styles)
  // }

  const relations = select('w\\:relationships', node)

  state.simpleParagraph = false

  return state.all(body as Body)
}
