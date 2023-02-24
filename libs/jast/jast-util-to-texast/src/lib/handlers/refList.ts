import { J } from '../types'
import { RefList } from 'jast-types'
import { Data as CSL } from 'csl-json'
import { Environment } from 'texast'
import { wrapCommandArg } from '../util/wrap-command-arg'
import { refListToCSL } from 'jast-util-to-csl'
import { cslToBiblatex } from 'csl-to-biblatex'

export function refList(j: J, list: RefList): Environment | undefined {
  // we're parsing it to CSL-JSON first, lot easier to render to bib
  if (list.children.length === 0) {
    return
  }

  const csl: CSL[] = refListToCSL(list)
  const bibtex = cslToBiblatex(csl)
  return {
    type: 'environment',
    name: 'filecontents',
    children: [
      wrapCommandArg(j, [{ type: 'text', value: 'bibliography.bib' }]),
      { type: 'text', value: bibtex },
    ],
  }
}
