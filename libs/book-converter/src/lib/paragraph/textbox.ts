import { arg, env, m, s } from '@unified-latex/unified-latex-builder'

import { P } from 'ooxast'
import { getPStyle } from 'ooxast-util-get-style'
import { ParagraphHandler, all } from 'ooxast-util-to-unified-latex'
import { toString } from 'xast-util-to-string'
import { PB } from '../util/PB.js'

export const textboxhandler: {
  matcher: string
  handler: ParagraphHandler
} = {
  matcher: 'Textbox',
  handler: (h, node, { styleName, previousElement, alreadyProcessedBody, body }) => {
    const prevThree = alreadyProcessedBody.slice(-3)
    const prev = prevThree.find((n) => n.type === 'environment' && n.env === 'bookbox')

    if (prev && prev.type === 'environment' && prev.env === 'bookbox') {
      prev.content.push(PB, m('vspace*', m('baselineskip')), PB, ...all(h, node))
      return
    }
    const captionText =
      previousElement && getPStyle(previousElement as P) === 'Caption'
        ? s(
            '\\raggedright ' +
              toString(previousElement)
                .toLowerCase()
                .replace(/seq tekstbox_\d_- \\\* arabic /, '')
                .replace(/(\d\.) /, '$1 \\\\'),
          )
        : ''

    return captionText
      ? env('bookbox', all(h, node), arg(captionText))
      : env('bookboxnotitle', all(h, node))
  },
}
