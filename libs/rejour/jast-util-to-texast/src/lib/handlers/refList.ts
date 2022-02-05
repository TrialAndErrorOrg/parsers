import { all } from 'jast-util-to-texast'
import { J } from '../types'
import { RefList } from 'jjast'

export function refList(j: J, item: RefList) {
  return { type: 'environment', name: 'filecontents', children: all(j, item) }
}
