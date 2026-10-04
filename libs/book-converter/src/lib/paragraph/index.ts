import { all, defaultParagraphHandlers } from 'ooxast-util-to-unified-latex'
import type { H } from 'ooxast-util-to-unified-latex'
import type { P } from 'ooxast'
import { textboxhandler } from './textbox.js'
import { arg, args, env, m, s } from '@unified-latex/unified-latex-builder'
import { toString } from 'xast-util-to-string'
import { PB } from '../util/PB.js'

type ParagraphHandler = (typeof defaultParagraphHandlers)[number]

/** "Figure 1: ", "Tabel 2.3: ": the class numbers captions itself */
const captionLabel = /(?:figure|afbeelding|table|tabel) \d+(?:\.\d+)?: /gi

/**
 * The book paragraph handlers, plus one per `paragraphStyleHandlers` entry of the config: the
 * paragraph style `style` becomes `output`, with `$1` replaced by the paragraph's text.
 */
export const makeParagraphHandlers = (
  matchers: { style: string; output: string }[] = [],
): ParagraphHandler[] => [
  ...defaultParagraphHandlers,
  textboxhandler,
  {
    matcher: 'Caption',
    handler: (h, node, { previousElement, alreadyProcessedBody }) => {
      const prevThree = alreadyProcessedBody.slice(-3)
      const prev = prevThree.find((n) => n.type === 'environment' && n.env === 'figure')

      if (prev && prev.type === 'environment' && prev.env === 'figure') {
        // filter out the old caption from the figure
        prev.content = prev.content.filter((c) => !(c.type === 'macro' && c.content === 'caption'))
        const caption = all(h, node).map((n) =>
          n.type === 'string' ? { ...n, content: n.content.replace(captionLabel, '') } : n,
        )
        prev.content.push(PB, m('caption', arg(caption)))
        return
      }

      return
    },
  },
  {
    matcher: 'Heading1Star',
    handler: (h, node) => {
      return [
        m('addcontentsline', args(['toc', 'chapter', toString(node)], { braces: '{}{}{}' })),
        PB,
        m('chapter*', toString(node)),
        PB,
        m('nochapterinheader'),
        PB,
      ]
    },
  },
  {
    // matched against the style id, which is `Heading1` for the "heading 1" style
    matcher: 'Heading1',
    handler: (h, node) => {
      return [PB, m('chapter', arg(all(h, node))), PB]
    },
  },
  {
    matcher: 'Quote',
    handler: (h, node, { alreadyProcessedBody }) => {
      const prev = alreadyProcessedBody[alreadyProcessedBody.length - 1]

      if (prev && prev.type === 'environment' && prev.env === 'quote') {
        prev.content.push(PB, ...all(h, node))
        return
      }

      // prettier-ignore
      // eslint-disable-next-line no-useless-escape
      return env('quote', [m('\itshape'), PB, ...all(h, node)])
    },
  },
  {
    matcher: 'References',
    handler: (h, node, { alreadyProcessedBody }) => {
      const prev = alreadyProcessedBody[alreadyProcessedBody.length - 1]

      if (prev && prev.type === 'environment' && prev.env === 'references') {
        prev.content.push(PB, ...all(h, node), PB)
        return
      }

      return env('references', [PB, ...all(h, node)])
    },
  },
  {
    matcher: 'vspaceplus',
    handler: (h, node) => {
      return [PB, m('vspace*', '\\baselineskip'), PB]
    },
  },
  {
    matcher: 'noindent',
    handler: (h, node) => {
      return [m('noindent'), s(' '), ...all(h, node)]
    },
  },
  {
    matcher: 'RemoveOneLineFromPage',
    handler: (h, node) => {
      return [m('enlargethispage', arg('-\\baselineskip')), m('checkandfixthelayout')]
    },
  },
  {
    matcher: 'AddOneLineToPage',
    handler: (h, node) => {
      return [m('enlargethispage', arg('\\baselineskip')), m('checkandfixthelayout')]
    },
  },
  {
    matcher: 'NewPage',
    handler: (h, node) => {
      return [m('clearpage')]
    },
  },
  ...matchers.map(({ style, output }): ParagraphHandler => {
    const [before, after = ''] = output.split('$1')
    const withText = output.includes('$1')

    return {
      matcher: style,
      handler: (h: H, node: P) => [s(before), ...(withText ? all(h, node) : []), s(after)],
    }
  }),
]

/** The book paragraph handlers without config-defined ones */
export const paragraphHandlers = makeParagraphHandlers()
