import rejourParse from 'rejour-parse'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'
import { unified } from 'unified'
import { VFile } from 'vfile'

export const jatsToTex = async (jats: string): Promise<VFile> => {
  const proc = unified().use(rejourParse).use(rejourRelatex).use(relatexStringify)

  // console.log(jats)
  // console.log(proc)
  return proc.process(jats)
}
