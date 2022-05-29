import reoffParseReferences from 'reoff-parse-references-browser'
import { rejourStringify } from 'rejour-stringify'
import reoffCite from 'reoff-cite'
import { reoffClean } from 'reoff-clean'
import reoffParse from 'reoff-parse'
import reoffRejour from 'reoff-rejour'
import { VFile } from 'vfile'
import { unified } from 'unified'
import { docxToVFile } from 'docx-to-vfile'

export async function docxToJatsConverter(
  input: ArrayBuffer,
  options: {
    citationType?: 'mendeley' | 'native' | 'citavi' | 'zotero' | 'endnote'
    url?: string
    mailto?: string
  } = {}
): Promise<VFile> {
  const { citationType: type, url: apiUrl, mailto } = options

  //console.log(process.env.NODE_ENV)

  const uint = new Uint8Array(input)
  const vfile = await docxToVFile(uint)

  const proc = unified()
    .use(reoffParse)
    .use(reoffClean, {
      rPrRemoveList: [
        'w:lang',
        'w:shd',
        'w:szCs',
        'w:kern',
        'w:rFonts',
        'w:noProof',
      ],
    })
    .use(reoffParseReferences, {
      apiUrl:
        process.env.NODE_ENV === 'production'
          ? apiUrl || '/api/style'
          : 'http://localhost:8000/api/style',
      mailto,
    })
    // @ts-expect-error tbh idk what it's talking about
    .use(reoffCite, { type: type || 'mendeley' })
    .use(reoffRejour)
    .use(rejourStringify)

  return await proc.process(vfile)
}
