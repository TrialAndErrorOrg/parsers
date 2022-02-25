import { ListItem } from 'jast-types'
import { all } from 'jast-util-to-texast'
import { CommandArg } from 'texast'
import { wrap } from '../util/wrap'
import { J } from '../types'

export function listItem(j: J, item: ListItem) {
  return j(item, 'listItem', all(j, item))
}
