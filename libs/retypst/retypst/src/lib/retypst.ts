import retypstParse from 'retypst-parse'
import retypstStringify from 'retypst-stringify'
import { unified } from 'unified'

/**
 * A unified processor that parses Typst into a `typast` tree, runs plugins on it and serializes
 * it back: `retypst().use(plugin).process(source)`.
 */
export const retypst = unified().use(retypstParse).use(retypstStringify).freeze()
