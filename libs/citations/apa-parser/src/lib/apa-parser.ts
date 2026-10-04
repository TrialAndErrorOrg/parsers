import { reporter } from 'vfile-reporter'
import { unified } from 'unified'
import retextEnglish from 'retext-english'
// import retextProfanities from 'retext-profanities'
// import retextEmoji from 'retext-emoji'
import { visit } from 'unist-util-visit'
import type { Root, SentenceContent } from 'nlcst'

export function apaParser(input: Root): Root {
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

      const last = acc.at(-1)
      if (last?.type === 'PunctuationNode' && last.value === ')') {
        return acc
      }

      acc.push(child)
      return acc
    }, [] as SentenceContent[])
  })

  return input
}
