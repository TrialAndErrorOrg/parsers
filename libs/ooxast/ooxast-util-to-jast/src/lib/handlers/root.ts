// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { all } from '../all'
import { J, Node, Root } from '../types'

export function root(j: J, node: Root) {
  //  if (!article) {
  const children: any[] = [
    {
      type: 'instruction',
      name: 'xml',
      value: 'version="1.0" encoding="utf-8"',
    },
    {
      type: 'doctype',
      name: 'article',
      public:
        '-//NLM//DTD JATS (Z39.96) Journal Publishing DTD v1.2 20190208//EN',
      system:
        'https://jats.nlm.nih.gov/publishing/1.2/JATS-journalpublishing1.dtd',
    },
  ]

  const content = all(j, node)
  content.unshift(...children)
  return j(node, 'root', content)
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { name: 'article' }, all(j, article)),
  // ])
}
