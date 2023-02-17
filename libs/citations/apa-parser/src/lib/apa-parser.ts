import { reporter } from 'vfile-reporter'
import { unified } from 'unified'
import retextEnglish from 'retext-english'
// import retextProfanities from 'retext-profanities'
// import retextEmoji from 'retext-emoji'
import { Node } from 'unist'
import { visit } from 'unist-util-visit'
import { Root } from 'nlcst'

export function apaParser(input: Root): Node {
  visit(input, 'SentenceNode', (node) => {
    const children = node.children

    const contentBetweenParens = children.reduce((acc, child) => {
      if (acc.length === 0 && child.type !== 'PunctuationNode') {
        return acc
      }

      if (child.type === 'PunctuationNode' && child.value === '(') {
        acc.push(child)
        return acc
      }

      if (child.type === 'PunctuationNode' && child.value === ')') {
        acc.push(child)
        return acc
      }

      if (acc?.at(-1)?.value === ')') {
        return acc
      }

      acc.push(child)
      return acc
    }, [] as Node[])
  })

  return input
}
