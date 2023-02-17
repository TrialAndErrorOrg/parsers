import { DispQuote, Graphic, List } from 'jast-types'
import { Environment } from 'texast'
import { all } from '../all'
import { J } from '../types'
import { wrapCommandArg } from '../util/wrap-command-arg'

export function dispQuote(j: J, node: DispQuote): Environment {
  return {
    type: 'environment',
    name: 'quote',
    children: all(j, node),
  }
}
