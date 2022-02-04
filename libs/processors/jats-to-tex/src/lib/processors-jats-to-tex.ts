import rejourParse from 'rejour-parse'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'
import { unified } from 'unified'

export const jatsToTex = async (jats: string) => {
  const proc = unified()
    .use(rejourParse)
    .use(rejourRelatex)
    .use(relatexStringify)

  console.log(jats)
  console.log(proc)
  return String(await proc.process(jats))
}
