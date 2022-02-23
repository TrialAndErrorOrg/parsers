import { Node, P, Root } from 'ooxast'
import { Data as CSL } from 'csl-json'
import { select } from 'xast-util-select'
import { convertElement } from 'xast-util-is-element'
import { getPStyle } from 'ooxast-util-get-style'
import { toString } from 'xast-util-to-string'
import axios from 'axios'
import { execa } from 'execa'
//@ts-expect error tmp has types, tmp promise does not
import { file } from 'tmp-promise'
import { writeFile } from 'fs/promises'
import { consolidate } from 'csl-consolidate'

interface Options {
  apiUrl?: string
  apiParams?: { param: string }
  headers?: { header: string }
  anyStylePath?: string
  mailto?: string
}

export async function parseBib(tree: Node, options: Options) {
  const csl = await bibToCSL(tree, options)
  if (!csl) return
  if (!options.mailto) {
    return
  }

  return await consolidate(csl, { mailto: options.mailto })
}
export async function bibToCSL(tree: Node, options: Options): Promise<CSL[]> {
  const { apiUrl, apiParams, anyStylePath, headers } = options
  const bib = findBib(tree)
  if (!bib?.length) return []
  const refs = bib.join('\n')

  if (apiUrl) {
    const parsedBib = await callAnystyleApi(refs, apiUrl, apiParams, headers)
    return parsedBib
  }

  const parsedBib = await callAnystyleCLI(refs, anyStylePath)
  return parsedBib
}

const isP = convertElement<P>('w:p')

export function findBib(tree: Node): string[] | null {
  const doc = select('w\\:body', tree as Root)
  const stack: string[] = []

  let appendixToggle = false

  if (!doc) return []
  for (let i = 0; i < doc.children.length; i++) {
    const child = doc.children[i]
    if (isP(child) && getPStyle(child)?.toLowerCase()?.includes('heading')) {
      const p = toString(child)
      if (
        ['references', 'bibliography', 'citations'].includes(p.toLowerCase())
      ) {
        appendixToggle = true
        continue
      }
      appendixToggle = false
      continue
    }
    appendixToggle &&
      stack.push(
        toString(child).replace(
          'ADDIN Mendeley Bibliography CSL_BIBLIOGRAPHY',
          ''
        )
      )
  }
  return stack
  // visit(
  //   tree,
  //   (node: Node) =>
  //     isP(node) && getPStyle(node)?.toLowerCase()?.includes('heading'),
  //   (node: P) => {
  //     const ref = ['references', 'bibliography', 'citations'].includes(
  //       toString(node).toLowerCase()
  //     )
  //     if (!ref) return
  //     //console.log(node)
  //     start = node
  //   }
  // )
  // return start.name ? start : null
}

export async function callAnystyleApi(
  refs: string,
  apiUrl: string,
  params?: { [param: string]: string },
  headers?: { [key: string]: string }
): Promise<CSL[]> {
  const response = await axios.post(apiUrl, refs, {
    headers: {
      'Content-type': 'text/plain; charset=utf-8',
      ...headers,
    },
    params,
  })
  return response.data
}

export async function callAnystyleCLI(
  refs: string,
  path?: string
): Promise<CSL[]> {
  const { fd, path: tempPath, cleanup } = await file()
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
