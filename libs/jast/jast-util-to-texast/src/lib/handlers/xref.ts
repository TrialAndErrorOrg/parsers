// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Xref, Text } from 'jast-types'
import { CommandArg } from 'texast'
import { J } from '../types.js'
import { wrapCommandArg } from '../util/wrap-command-arg.js'

export function xref(j: J, node: Xref) {
  //  if (!article) {
  const refTypeMap = {
    bibr: 'cite',
    aff: 'ref',
    app: 'ref',
    bio: 'bio',
    default: 'ref',
    'author-notes': 'author-notes',
    award: 'award',
    'boxed-text': 'boxed-text',
    chem: 'chem',
    collab: 'collab',
    contrib: 'contrib',
    corresp: 'corresp',
    custom: 'custom',
    'disp-formula': 'eqref',
    fig: 'ref',
    fn: 'footnote',
    kwd: 'kwd',
    list: 'list',
    other: 'other',
    plate: 'plate',
    scheme: 'scheme',
    sec: 'ref',
    statement: 'statement',
    'supplementary-material': 'supplementary-material',
    table: 'ref',
    'table-fn': 'ref-fn',
  }

  // TODO: [rejour-rehype/citations] make citation parsing less hardcoded
  // Maybe add a new type to texast: citation.

  // biblatex adds p./pp. to a numeric postnote itself.
  const labelToText: { [key: string]: string } = {
    page: '',
    appendix: 'App.',
  }

  // TODO: [rejour-rehype/citations] make checks for the kind of citations used.
  switch (node.attributes.refType) {
    case 'bibr': {
      const customType = node.attributes.customType

      // TODO: [rejour-relatex] make latex cite command setting more modular and customizable
      let command
      let pre
      let post
      if (customType) {
        const customData: Record<string, string | undefined> = JSON.parse(customType)
        const { prefix, infix, label, locator, mode, suffix, plainCitation, formattedCitation } =
          customData

        const pref = (mode ? infix : prefix) || ''

        const labelText = label && label !== 'none' ? (labelToText[label] ?? label) : ''
        const suff = `${labelText && locator ? `${labelText} ` : ''}${locator || ''}`

        const isParenthetical = plainCitation?.startsWith('(') && plainCitation?.endsWith(')')

        command = isParenthetical ? 'parencite' : 'textcite'

        if (pref) pre = pref
        if (suff) post = suff
      }

      const optCommandArgs = createOptCiteArgs(pre, post)
      return j(node, 'command', { name: command || j.citationAnalyzer(node) || 'autocite' }, [
        ...optCommandArgs,
        {
          type: 'commandArg',
          children: [
            {
              type: 'text',
              value:
                node.attributes.rid ||
                node.children
                  .map((node) => {
                    //@ts-expect-error it is text, it has value
                    const n = node?.value?.replace(/[[\], ]/g, '')
                    return n ? `bib${n}` : undefined
                  })
                  .filter((n) => !!n)
                  .join(','),
            },
          ],
        },
      ])
    }
    case 'fig': {
      return j(node, 'command', { name: 'autocite' }, [
        {
          type: 'commandArg',
          children: [
            {
              type: 'text',
              //@ts-expect-error It is text, it has value
              value: 'bib' + node.children[0]?.value?.replace(/[[\]]/g, ''),
            },
          ],
        },
      ])
    }
    case 'fn': {
      // `fnGroup` keys footnotes by their id (which the xref points to with `rid`), or by their
      // index when they have none; the xref text is the 1-based footnote number.
      const number = parseInt(
        (node.children?.[0] as Text | undefined)?.value?.replace(/[[\]]/g, '') ?? '',
      )
      const fnContent =
        (node.attributes.rid ? j.footnotes[node.attributes.rid] : undefined) ??
        (Number.isNaN(number) ? undefined : j.footnotes[(number - 1).toString()]) ??
        []
      return j(node, 'command', { name: 'footnote' }, [
        {
          type: 'commandArg',
          // TODO: [rejour-relatex]: texastcontenttype is not always assignable as a child of commandArg
          // @ts-expect-error texastcontenttype is not always assignable as a child of commandArg
          children: fnContent,
        },
      ])
    }
    default:
      return j(
        node,
        'command',
        { name: refTypeMap[node.attributes.refType || 'default'] || 'ref' },
        [wrapCommandArg(j, node.children)],
      )
  }
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { name: 'article' }, all(j, article)),
  // ])
}

/**
 * biblatex: `\cite[postnote]{key}` with one optional argument, `\cite[prenote][postnote]{key}`
 * with two.
 */
function createOptCiteArgs(pre?: string, post?: string): CommandArg[] {
  const optArg = (value: string) =>
    ({
      type: 'commandArg',
      optional: true,
      children: [{ type: 'text', value } as Text],
    }) as CommandArg

  if (!pre && !post) return []
  if (!pre) return [optArg(post || '')]
  return [optArg(pre), optArg(post || '')]
}
