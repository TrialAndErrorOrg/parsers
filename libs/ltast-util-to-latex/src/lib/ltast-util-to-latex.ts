import { Root, LtastContent } from 'relatex'
type Node = Root | LtastContent

export interface Options {
  extensions?: any
}
export function toLatex(tree: Node, options?: Options): string {
  return 'ltast-util-to-latex'
}
