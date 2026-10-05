import { all } from '../all.js'
import { H, Handle } from '../types.js'
import { Body, Document, Endnotes, Footnotes } from 'ooxast'
import { select } from 'xast-util-select'
import { convertElement } from 'xast-util-is-element'

export const document: Handle = (h: H, node: Document) => {
  // TODO: [ooxast-util-to-unified-latex] do something with the styles
  // const styles = select('w\\:styles', node)
  // if (styles) {
  //   h.styles = all(h, styles)
  // }

  return all(h, node)
}
