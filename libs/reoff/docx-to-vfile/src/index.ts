// import type { ReadStream } from 'fs'
// import { VFile } from 'vfile'
// import { docxToVFile as docxToVFileBrowser, Options } from './lib/docx-to-vfile-unzipit.js'

// /**
//  * Takes a docx file as a Blob, Buffer, ArrayBuffer, ReadStream or string
//  *  and returns a VFile with the contents of the document.xml file as the root, and the contents of the other xml files as data.
//  *
//  * Should work in both Node and the browser, but to be sure it works in the browser, import it like
//  * ```ts
//  * import { docxToVFile } from 'docx-to-vfile/browser'
//  * ```
//  *
//  * @param file The docx file as a File, Blob, Buffer, ArrayBuffer, ReadStream or string
//  * @param options Options
//  * @returns A VFile with the contents of the document.xml file as the root, and the contents of the other xml files as data.
//  */
// export async function docxToVFile(
//   file: ArrayBuffer | File | Blob | Buffer | ReadStream | string,
//   options?: Options,
// ): Promise<VFile> {
//   if (typeof window !== 'undefined') {
//     return await docxToVFileBrowser(file as Blob, options)
//   }

//   const { createReadStream, ReadStream } = await import('fs')
//   const { blob } = await import('stream/consumers')
//   const { Blob: NodeBlob } = await import('buffer')

//   const inp = typeof file === 'string' ? createReadStream(file) : file

//   const input =
//     inp instanceof ReadStream
//       ? await blob(inp)
//       : inp instanceof ArrayBuffer
//       ? new NodeBlob([Buffer.from(inp)])
//       : inp

//   return await docxToVFileBrowser(input as Blob | File, options)
// }

export * from './lib/docx-to-vfile-unzipit.js'
