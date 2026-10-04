import type { Data, Literal as UnistLiteral, Node, Parent as UnistParent, Position } from 'unist'

/**
 * `typast`: a unist syntax tree for Typst documents.
 *
 * The tree models Typst *markup* (what you write in a `.typ` file outside of
 * code), plus a small set of code-mode nodes for function calls, `set`/`show`
 * rules and values. It is deliberately smaller than Typst's own syntax: it only
 * needs to describe documents we generate, not every program Typst can parse.
 *
 * Anything the tree can't express goes in a {@link Raw} node, which is emitted
 * verbatim.
 */

export type { Data, Node, Position }

export interface Parent extends UnistParent {
  children: Content[]
}

export interface Literal extends UnistLiteral {
  value: string
}

// ---------------------------------------------------------------------------
// Document
// ---------------------------------------------------------------------------

export interface Root extends Parent {
  type: 'root'
}

// ---------------------------------------------------------------------------
// Markup
// ---------------------------------------------------------------------------

/** Plain text. The serializer escapes everything Typst would otherwise interpret. */
export interface Text extends Literal {
  type: 'text'
}

/** A paragraph. Paragraphs are separated by a blank line. */
export interface Paragraph extends Parent {
  type: 'paragraph'
}

/** `= Heading`, `== Heading`, … */
export interface Heading extends Parent {
  type: 'heading'
  /** 1-based, like Typst's own heading level */
  depth: number
  /** Emitted as `<label>` after the heading */
  label?: string
  /** `false` emits `#heading(numbering: none, …)[…]` instead of `=` markup */
  numbered?: boolean
}

/** `*strong*` */
export interface Strong extends Parent {
  type: 'strong'
}

/** `_emphasis_` */
export interface Emphasis extends Parent {
  type: 'emphasis'
}

/** `\` line break */
export interface Linebreak extends Node {
  type: 'linebreak'
}

/** `-` list or `+` enum. Items are separated by newlines; nested lists are indented. */
export interface List extends Parent {
  type: 'list'
  ordered: boolean
  /** first number of an ordered list (emitted as `#enum(start: n, …)` when not 1) */
  start?: number
  /** Typst numbering pattern for ordered lists, e.g. `"a."` */
  numbering?: string
  /** tight lists have no blank line between items */
  tight?: boolean
  children: ListItem[]
}

export interface ListItem extends Parent {
  type: 'listItem'
}

/** `/ Term: description` */
export interface TermItem extends Parent {
  type: 'termItem'
  term: Content[]
}

/** `` `code` `` or ```` ```lang\ncode\n``` ```` */
export interface Raw extends Literal {
  type: 'raw'
  lang?: string
  block?: boolean
}

/**
 * Typst math. `value` is Typst math syntax (not LaTeX), emitted between `$`.
 * `block: true` emits `$ … $` (display), `false` emits `$…$` (inline).
 */
export interface Math extends Literal {
  type: 'math'
  block?: boolean
}

/** `<name>` attaches a label to the preceding element */
export interface Label extends Node {
  type: 'label'
  name: string
}

/** `@target` or `@target[supplement]` */
export interface Ref extends Node {
  type: 'ref'
  target: string
  supplement?: Content[]
}

/** A Typst comment. `block: true` emits `/* … *\/`, otherwise `// …` */
export interface Comment extends Literal {
  type: 'comment'
  block?: boolean
}

/**
 * Escape hatch: emitted verbatim, in whichever mode (markup or code) it sits.
 * Use sparingly — anything common should get a proper node.
 */
export interface Typst extends Literal {
  type: 'typst'
}

// ---------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------

/**
 * A function call. In markup it is emitted with a leading `#`, in code
 * without.
 *
 * `#name(pos, named: value)[body][body2]`
 *
 * Trailing content blocks go in `body` (each entry one `[…]` block), so
 * `#footnote[text]` is `{ name: 'footnote', args: [], body: [[text]] }`.
 */
export interface FunctionCall extends Node {
  type: 'call'
  /** May be a path, e.g. `jote.box` or `table.cell` */
  name: string
  args: Argument[]
  body?: Content[][]
}

export interface Argument extends Node {
  type: 'argument'
  /** Omit for positional arguments */
  name?: string
  value: Value
}

/** `#set name(args)` */
export interface SetRule extends Node {
  type: 'set'
  name: string
  args: Argument[]
}

/**
 * `#show selector: transform`. Both sides are raw Typst code since they can be
 * arbitrary expressions; `selector` is omitted for `#show: transform`.
 */
export interface ShowRule extends Node {
  type: 'show'
  selector?: string
  transform: string | FunctionCall
}

/** `#import "source": a, b` or `#import "source": *` */
export interface Import extends Node {
  type: 'import'
  source: string
  /** `'*'` imports everything; omit to import the module itself */
  items?: string[] | '*'
}

/** `#let name = value` */
export interface Let extends Node {
  type: 'let'
  name: string
  value: Value
}

// ---------------------------------------------------------------------------
// Values (code mode)
// ---------------------------------------------------------------------------

/** `[ … ]` a content block */
export interface ContentBlock extends Parent {
  type: 'contentBlock'
}

/** `"…"` a string, escaped by the serializer */
export interface StringValue extends Literal {
  type: 'string'
}

/**
 * Raw code expression emitted as-is: numbers, lengths, booleans, `none`,
 * `auto`, colors, identifiers, `1fr`, `50%`, `(left + top)`, …
 */
export interface CodeValue extends Literal {
  type: 'code'
}

/** `(a, b, c)` — a single item is emitted as `(a,)` */
export interface ArrayValue extends Node {
  type: 'array'
  items: Value[]
}

/** `(key: value, …)` — empty is emitted as `(:)` */
export interface DictValue extends Node {
  type: 'dict'
  entries: DictEntry[]
}

export interface DictEntry {
  key: string
  value: Value
}

export type Value = ContentBlock | StringValue | CodeValue | ArrayValue | DictValue | FunctionCall

// ---------------------------------------------------------------------------
// Unions
// ---------------------------------------------------------------------------

/** Nodes that may appear between paragraphs (block level). */
export type BlockContent =
  | Paragraph
  | Heading
  | List
  | TermItem
  | Raw
  | Math
  | FunctionCall
  | SetRule
  | ShowRule
  | Import
  | Let
  | Comment
  | Typst

/** Nodes that may appear inside a paragraph (inline level). */
export type PhrasingContent =
  | Text
  | Strong
  | Emphasis
  | Linebreak
  | Raw
  | Math
  | Label
  | Ref
  | FunctionCall
  | Comment
  | Typst

export type Content = BlockContent | PhrasingContent | ListItem

export type typastNode = Root | Content | Argument | Value

/** Map of node type names to nodes, for handler tables and type guards. */
export interface NodeMap {
  root: Root
  text: Text
  paragraph: Paragraph
  heading: Heading
  strong: Strong
  emphasis: Emphasis
  linebreak: Linebreak
  list: List
  listItem: ListItem
  termItem: TermItem
  raw: Raw
  math: Math
  label: Label
  ref: Ref
  comment: Comment
  typst: Typst
  call: FunctionCall
  argument: Argument
  set: SetRule
  show: ShowRule
  import: Import
  let: Let
  contentBlock: ContentBlock
  string: StringValue
  code: CodeValue
  array: ArrayValue
  dict: DictValue
}
