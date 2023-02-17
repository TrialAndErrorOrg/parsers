/*
 read a docx file from the commandline and run docx-to-vfile and reoff-parse on it
 write output to ooxast.json
 then run reoff-rejour on ooxast.json and write output to jast.json
 then run rejour-stringify on jast.json and write output to jast.tex
 then run rejour-relatex on jast.json and write output to texast.json
 then run relatex-stringify on texast.json and write output to texast.tex
 */

import fs from 'fs'

import { VFile } from 'vfile'

import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import reoffRejour from 'reoff-rejour'
import rejourStringify from 'rejour-stringify'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'

import { unified } from 'unified'
import path from 'path'

import { removePosition } from 'unist-util-remove-position'
import { toXml } from 'xast-util-to-xml'

const main = async () => {
  const input = fs.readFileSync(process.argv[2])

  const fullpath = path.resolve(process.argv[2])

  const dirname = process.argv[3]
    ? path.resolve(process.argv[3])
    : path.dirname(fullpath)

  const uint = new Uint8Array(input)
  const vfile = await docxToVFile(uint)

  const proc = unified()
    .use(reoffParse)
    .use(() => (tree, vfile) => {
      fs.writeFileSync(
        path.join(dirname, 'ooxast.json'),
        JSON.stringify(removePosition(tree), null, 2) +
          JSON.stringify(vfile.data, null, 2)
      )
      return tree
    })
    .use(reoffRejour)
    .use(() => (tree) => {
      fs.writeFileSync(
        path.join(dirname, 'jast.json'),
        JSON.stringify(removePosition(tree), null, 2)
      )
      fs.writeFileSync(path.join(dirname, 'jast.xml'), toXml(tree))
      return tree
    })
    .use(rejourStringify)
    .use(() => (tree) => {
      fs.writeFileSync(
        path.join(dirname, 'jast.tex'),
        JSON.stringify(removePosition(tree), null, 2)
      )
      return tree
    })
    .use(relatexStringify)
  // console.log(vfile)
  // console.log(tex2)

  const res = proc.processSync(vfile)
  const tex = String(res)
  fs.writeFileSync(path.join('texast.tex'), tex)
}

main()
// }
//
// export default rejourRelatex
//
// /* Expose. */
// export type { Options } from 'jast-util-to-texast'
// export type { TexastRoot } from 'texast'
// export type { TexastNode } from 'texast-util-to-mdast'
// export type { TexastRoot as TexastRoot } from 'texast'
// export type { TexastNode as TexastNode } from 'texast-util-to-mdast'
// export type { TexastRoot as TexastRoot } from 'texast'
