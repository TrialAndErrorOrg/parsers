import { ListItem } from 'jast-types'
import { all } from '../all.js'
import { J } from '../types.js'

export function listItem(j: J, item: ListItem) {
  return j(item, 'listItem', all(j, item))
}
