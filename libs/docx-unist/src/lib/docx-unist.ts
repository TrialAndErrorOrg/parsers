//@ts-ignore
import { docxUtilToDocast } from '@jote/docx-util-to-docast'

export async function docxUnist(docx: Buffer): Promise<string> {
  const syntaxTree = docxRaw.render((type: any, props: any, children: any) =>
    docxUtilToDocast(type, props, children)
  )
  return syntaxTree
}
