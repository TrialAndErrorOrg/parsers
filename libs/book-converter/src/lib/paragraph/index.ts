import { all, defaultParagraphHandlers } from 'ooxast-util-to-unified-latex'
import { textboxhandler } from './textbox.js'
import { arg, args, env, m, s } from '@unified-latex/unified-latex-builder'
import { PB } from 'libs/ooxast/ooxast-util-to-unified-latex/src/lib/util/PB'
import { toString } from 'xast-util-to-string'

export const paragraphHandlers: (typeof defaultParagraphHandlers)[number][] = [
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
        prev.content.push(PB, m('caption', arg(all(h, node))))
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
    matcher: 'Heading 1',
    handler: (h, node) => {
      return [m('chapter', all(h, node))]
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
]
