import { all } from '../all'
import { J } from '../types'
import { Tc } from 'ooxast'
import { Td } from 'jast-types'
import { getPr } from 'ooxast-util-properties'

export function tc(j: J, node: Tc): Td {
  const properties = getPr(node)
  return j(node, 'td', all(j, node))
}
