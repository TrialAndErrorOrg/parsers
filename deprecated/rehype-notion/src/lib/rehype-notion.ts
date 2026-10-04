import type { Plugin } from 'unified'
import { markdownToBlocks } from '@tryfabric/martian'
import type { Nodes } from 'hast'
import { gfmToMarkdown, type Options as GfmToMarkdownOptions } from 'mdast-util-gfm'
import {
  toMarkdown,
  type Options as MdastToMarkdownOptionsWithoutGFM,
} from 'mdast-util-to-markdown'
import { toMdast, Options as HastToMdastOptions } from 'hast-util-to-mdast'

/** A Notion block as produced by `@tryfabric/martian`. */
export type Block = ReturnType<typeof markdownToBlocks>[number]

declare module 'unified' {
  interface CompileResultMap {
    /** The Notion blocks `rehype-notion` compiles to. */
    Blocks: Block[]
  }
}
export type MarkdownToNotionOptions = Exclude<Parameters<typeof markdownToBlocks>[1], void>

export type MdastToMarkdownOptions = MdastToMarkdownOptionsWithoutGFM & GfmToMarkdownOptions

export interface Options {
  hastToMdastOptions?: HastToMdastOptions
  mdastToMarkdownOptions?: MdastToMarkdownOptions
  markdownToNotionOptions?: MarkdownToNotionOptions
}

const rehypeToNotion: Plugin<[(Options | null | undefined)?], Nodes, Block[]> = function (options) {
  this.compiler = (tree) => {
    // `this` is an untyped `Processor`, so `tree` is a plain unist `Node` here.
    const mdast = toMdast(tree as Nodes, {
      ...options?.hastToMdastOptions,
    })
    const markdown = toMarkdown(mdast, {
      ...options?.mdastToMarkdownOptions,
      extensions: [
        ...(options?.mdastToMarkdownOptions?.extensions ?? []),
        gfmToMarkdown(options?.mdastToMarkdownOptions),
      ],
    })

    return markdownToBlocks(markdown, Object.assign({}, options?.markdownToNotionOptions))
  }
}

export default rehypeToNotion
