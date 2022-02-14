import { P, Parent } from 'ooxast'
import { P as JastP } from 'jjast'
import { all } from '../all'
import { J, Text } from '../types'
import { wrapChildren } from '../util/wrap-children'
import { getPStyle } from '../util/get-pstyle'

export function p(j: J, p: P, parent: Parent) {
  const style = getPStyle(p)
  return j(
    p,
    'element',
    {
      name: 'p',

      ...(style ? { style } : {}),
    },
    all(j, p)
  )
}
