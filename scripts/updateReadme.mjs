import { read } from 'to-vfile'
import { remark } from 'remark'
import remarkLicense from 'remark-license'
import remarkUsage from 'remark-usage'
import remarkToc from 'remark-toc'
import { program } from 'commander'
import { writeFile } from 'fs/promises'
import { join } from 'path'

program.argument('<location>', 'markdown file to parse')

program.parse()

const arg = program.args

if (!arg) {
  throw new Error(`Add an arg`)
}
main()

async function main() {
  const file = await remark()
    .use(remarkLicense)
    // .use(remarkUsage, { example: join(arg[0], 'example.mjs'), heading: 'Use' })
    .use(remarkToc, { heading: 'Contents' })
    .process(await read(arg[0]))

  await writeFile(arg[0], String(file))
}
