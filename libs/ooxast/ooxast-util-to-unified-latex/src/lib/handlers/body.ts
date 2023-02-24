// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { H, Body, Handle } from '../types'
import { all } from '../all'

export const body: Handle = (h: H, body: Body) => {
  const bod = all(h, body)

  return bod
}
