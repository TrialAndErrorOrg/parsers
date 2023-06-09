import { arg, env, m } from '@unified-latex/unified-latex-builder'
import { PB } from 'libs/ooxast/ooxast-util-to-unified-latex/src/lib/util/PB'
import { P } from 'ooxast'
import { getPStyle } from 'ooxast-util-get-style'
import { ParagraphHandler, all, one } from 'ooxast-util-to-unified-latex'

export const textboxhandler: {
  matcher: string
  handler: ParagraphHandler
} = {
  matcher: 'Textbox',
  handler: (h, node, { styleName, previousElement, alreadyProcessedBody, body }) => {
    const prev = alreadyProcessedBody[alreadyProcessedBody.length - 1]

    if (prev && prev.type === 'environment' && prev.env === 'bookbox') {
      prev.content.push(PB, m('vspace*', m('baselineskip')), PB, ...all(h, node))
      return
    }
    const captionText =
      previousElement && getPStyle(previousElement as P) === 'Caption'
        ? all(h, previousElement)
        : ''

    return captionText
      ? env('bookbox', all(h, node), arg(captionText))
      : env('bookboxnotitle', all(h, node))
  },
}
