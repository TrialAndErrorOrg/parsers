import { P } from 'ooxast'
import { P as JastP } from 'jjast'
import { all } from '../all'
import { J, Text } from '../types'
import { wrapChildren } from '../util/wrap-children'

export function p(j: J, p: P) {
  return {
    type: 'element',
    name: 'p',
    attributes: { ...p.attributes },
    children: all(j, p),
  }
}
