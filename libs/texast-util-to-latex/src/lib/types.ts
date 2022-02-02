import { Parent as UnistParent, Point } from 'unist'
import { Root, TexastContent as Content } from 'relatex'
export type Node = Root | Content
export type Parent = Extract<Node, UnistParent>

export interface TrackFields {
  now: Point
  lineShift: number
}

export interface SafeFields {
  before: string
  after: string
}

export type SafeOptions = TrackFields | SafeFields

export type Enter = (type: string) => Exit
export type Exit = () => void
export interface Context {
  stack: Array<string>
  indexStack: Array<number>
  enter: Enter
  options: Options
  unsafe: Array<Unsafe>
  join: Array<Join>
  handle: Handle
  handlers: Handlers
  math: boolean
  align: boolean
}

export type BasicContext = {
  options: Options
  math: boolean
  align: boolean
}

export type BasicHandle = (node: any, options?: Options) => string

export type Handle = (
  node: any,
  parent: Parent | null | undefined,
  context: Context,
  safeOptions: SafeOptions
) => string

export type Handlers = Record<string, Handle>

export type Join = (
  left: Node,
  right: Node,
  parent: Parent,
  context: Context
) => boolean | null | void | number

export interface Unsafe {
  character: string
  inConstruct?: string | Array<string>
  notInConstruct?: string | Array<string>
  after?: string
  before?: string
  atBreak?: boolean
  _compiled?: RegExp
}
export interface Options {
  wrapDocument?: boolean
  parbreak?: 'par' | 'newline'
  emph?: 'textit' | 'emph'
  inlineMathDelimiters?: '()' | '$'
  displayMathDelimiters?: '[]' | '$$'
  handlers?: Handlers
  extensions?: Array<Options>
  join?: Array<Join>
  unsafe?: Array<Unsafe>
}

/**
 * @typedef Options
 * @property {'-'|'*'|'+'} [bullet]
 * @property {'-'|'*'|'+'} [bulletOther]
 * @property {'.'|')'} [bulletOrdered]
 * @property {'.'|')'} [bulletOrderedOther]
 * @property {boolean} [closeAtx]
 * @property {'_'|'*'} [emphasis]
 * @property {'~'|'`'} [fence]
 * @property {boolean} [fences]
 * @property {boolean} [incrementListMarker]
 * @property {'tab'|'one'|'mixed'} [listItemIndent]
 * @property {'"'|"'"} [quote]
 * @property {boolean} [resourceLink]
 * @property {'-'|'_'|'*'} [rule]
 * @property {number} [ruleRepetition]
 * @property {boolean} [ruleSpaces]
 * @property {boolean} [setext]
 * @property {'_'|'*'} [strong]
 * @property {boolean} [tightDefinitions]
 * @property {Array<Options>} [extensions]
 * @property {Handlers} [handlers]
 * @property {Array<Join>} [join]
 * @property {Array<Unsafe>} [unsafe]
 */

export {}
