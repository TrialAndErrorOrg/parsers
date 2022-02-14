import { all } from '../all'
import { J, Node, Root } from '../types'
import { x } from 'xastscript'
import { Article, Front, Body, Back } from 'jjast'
import { Document } from 'ooxast'

export function document(j: J, node: Document): Article {
  return x('article', [
    x('front') as Front,
    x('body', {}, all(j, node)) as Body,
    x('back') as Back,
  ]) as Article
}
