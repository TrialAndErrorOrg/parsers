import { DispQuote, Graphic, List } from 'jast-types'
import { Environment } from 'texast'
import { all } from '../all.js'
import { J } from '../types.js'
import { wrapCommandArg } from '../util/wrap-command-arg.js'

export function dispQuote(j: J, node: DispQuote): Environment {
  return {
    type: 'environment',
    name: 'quote',
    children: all(j, node),
  }
}
