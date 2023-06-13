import rehypeRemark from 'rehype-remark'
import type { Processor, Plugin, CompilerFunction } from 'unified'
import { markdownToBlocks } from '@tryfabric/martian'
import type { AppendBlockChildrenParameters } from '@notionhq/client/build/src/api-endpoints'
import type { Root, Content } from 'hast'
import { gfmToMarkdown, type Options as GfmToMarkdownOptions } from 'mdast-util-gfm'
import {
  toMarkdown,
  type Options as MdastToMarkdownOptionsWithoutGFM,
} from 'mdast-util-to-markdown'
import { toMdast, Options as HastToMdastOptions } from 'hast-util-to-mdast'

export type Block = AppendBlockChildrenParameters['children'][number]

type Node = Root | Content
export type MarkdownToNotionOptions = Exclude<Parameters<typeof markdownToBlocks>[1], void>

export type MdastToMarkdownOptions = MdastToMarkdownOptionsWithoutGFM & GfmToMarkdownOptions

export interface Options {
  hastToMdastOptions?: HastToMdastOptions
  mdastToMarkdownOptions?: MdastToMarkdownOptions
  markdownToNotionOptions?: MarkdownToNotionOptions
}

const rehypeToNotion: Plugin<[Options] | [void] | [], Node, Block[]> & ThisType<Processor> =
  function (options) {
    // /** @type {import('unified').CompilerFunction<Node, string>} */
    const compiler: CompilerFunction<Node, Block[]> = (tree) => {
      // Assume options.
      const settings = this.data('settings') as Options
      const mdast = toMdast(tree, {
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

    Object.assign(this, { Compiler: compiler })
  }

export default rehypeToNotion
