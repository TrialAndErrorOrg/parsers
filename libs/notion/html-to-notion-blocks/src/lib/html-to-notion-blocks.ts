import rehypeNotion, { Block, Options } from 'rehype-notion'
import rehypeParse from 'rehype-parse'
import { unified } from 'unified'

export const htmlToNotion = (html: string, options?: Options): Block[] => {
  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeNotion, options)

  const { result } = processor.processSync(html)

  return result
}
