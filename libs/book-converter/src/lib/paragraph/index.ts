import { H, all, defaultParagraphHandlers } from 'ooxast-util-to-unified-latex'
import { textboxhandler } from './textbox.js'
import { arg, args, env, m, s } from '@unified-latex/unified-latex-builder'
import { toString } from 'xast-util-to-string'
import { PB } from '../util/PB.js'
import { P } from 'ooxast'

export const makeParagraphHandlers = (
  matchers: { style: string; output: string }[],
): (typeof defaultParagraphHandlers)[number][] => [
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
        prev.content.push(
          PB,
          m(
            'caption',
            arg(
              all(h, node).map((n) => {
                if (n.type !== 'string') {
                  return n
                }

                const result = {
                  ...n,
                  content: n.content.replace(
                    /(?:figure|afbeelding|table|tabel) \d+(?:\.\d+)?: /gi,
                    '',
                  ),
                }

                return result
              }),
            ),
          ),
        )
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
    matcher: 'Heading1',
    handler: (h, node) => {
      return [
        PB,
        m(
          'chapter',
          all(h, node).map((n) => {
            if (n.type !== 'string') {
              return n
            }

            const result = { ...n, content: n.content.replace(/(?:chapter|hoofdstuk) \d+: /gi, '') }

            return result
          }),
        ),
        PB,
      ]
    },
  },
  {
    matcher: 'Heading2',
    handler: (h, node) => {
      return [
        PB,
        m(
          'section',
          all(h, node).map((n) => {
            if (n.type !== 'string') {
              return n
            }

            const result = { ...n, content: n.content.replace(/^\d+\.\d+\s?/g, '') }

            return result
          }),
        ),
        PB,
      ]
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
  ...matchers.map(({ style: matcher, output: replacer }) => {
    const [before, after] = replacer.split('$1')

    const shouldHaveText = /\$1/.test(replacer)

    return {
      matcher,
      handler: (h: H, node: P) => [s(before), ...(shouldHaveText ? all(h, node) : []), s(after)],
    }
  }),
]
