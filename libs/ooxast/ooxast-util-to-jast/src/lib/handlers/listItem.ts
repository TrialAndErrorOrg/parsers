import { ListItem } from 'ooxast'
import { all } from 'ooxast-util-to-jast'
import { CommandArg } from 'jast'
import { wrap } from '../util/wrap'
import { J } from '../types'

export function listItem(j: J, item: ListItem) {
  return j(item, 'listItem', all(j, item))
}
