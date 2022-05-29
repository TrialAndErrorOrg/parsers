import { Data as CSL } from 'csl-json'
export async function callAnystyleCLI(
  refs: string,
  path?: string
): Promise<CSL[]> {
  if (typeof window === 'undefined') {
    const { execa } = await import('execa')
    //@ts-expect error tmp has types, tmp promise does not
    const { file } = await import('tmp-promise')
    const { writeFile } = await import('fs/promises')

    const { path: tempPath, cleanup } = await file()
    await writeFile(tempPath, refs)
    try {
      const { stdout: res } = await execa(path || 'anystyle', [
        '--stdout',
        '-f',
        'csl',
        'parse',
        tempPath,
      ])
      cleanup()
      console.log(typeof res)
      const ress = JSON.parse(res)
      console.log(ress)
      return ress
    } catch (e) {
      cleanup()
      console.error(e)
      throw new Error(e as any)
      //if (err.message) throw new Error(err.message)
      //return []
    }
  }
  return []
}
