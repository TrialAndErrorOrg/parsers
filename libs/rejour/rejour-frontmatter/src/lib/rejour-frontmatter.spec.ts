import rejourParse from 'rejour-parse'
import { toCSL } from 'jast-util-to-csl'
import { unified } from 'unified'
import { read } from 'to-vfile'
import { Root } from 'jjast'
import { rejourFrontmatter } from './rejour-frontmatter'

describe('rejourJastUtilToCsl', () => {
  const proc = unified()
    .use(rejourParse)
    .use(rejourFrontmatter)
    .use(() => (tree, file) => // console.log(file.data))
  it('should work', async () => {
    const tree = proc.parse(
      await read(__dirname + '/../test/index.jats.xml')
    ) as Root
    const ran = proc.runSync(tree)
    const csl = toCSL(tree)
    console.dir(csl.front, { depth: null })
    expect(csl).toEqual('')
  })
})
