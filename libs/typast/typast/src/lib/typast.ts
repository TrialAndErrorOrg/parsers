import type { Data, Literal as UnistLiteral, Node as UnistNode, Position } from 'unist'

/**
 * `typast`: a unist syntax tree for Typst.
 *
 * The tree mirrors the typed syntax tree of Typst's own parser (`typst_syntax::ast`, the
 * `typst-syntax` crate): node types are Typst's AST node names in camelCase (`Emph` →
 * `emph`, `FuncCall` → `funcCall`), and fields are named after its accessors (`callee`,
 * `args`, `lhs`, `rhs`, `body`, …). Like Typst's tree, there are no paragraph or list nodes:
 * paragraphs are separated by {@link Parbreak} nodes and list items are consecutive siblings.
 *
 * Sequences of markup or math are a node's `children`, so `unist-util-visit` walks the
 * document's text. Code sub-expressions (a call's callee and arguments, the sides of a binary
 * operation, …) are named fields; `typast-util-visit` walks those too.
 *
 * Three nodes are not in Typst's AST: {@link Comment} (Typst's comments are trivia),
 * {@link ErrorNode} (source the parser could not make sense of, kept verbatim) and
 * {@link Typst} (verbatim source, for generated trees; the parser never produces it).
 */

export type { Data, Position }

export interface Node extends UnistNode {}

export interface Literal extends UnistLiteral {
  value: string
}

export interface Parent<Child extends Node = MarkupContent> extends Node {
  children: Child[]
}

// ---------------------------------------------------------------------------
// Document
// ---------------------------------------------------------------------------

/** A parsed document (Typst's `Markup` at the top level). */
export interface Root extends Parent<MarkupContent> {
  type: 'root'
}

// ---------------------------------------------------------------------------
// Markup
// ---------------------------------------------------------------------------

/** Plain text without markup. The serializer escapes anything Typst would interpret. */
export interface Text extends Literal {
  type: 'text'
}

/**
 * Whitespace in markup or math. In markup it holds at most one newline; more is a
 * {@link Parbreak}.
 */
export interface Space extends Literal {
  type: 'space'
}

/** A forced line break: `\`. */
export interface Linebreak extends Node {
  type: 'linebreak'
}

/** A paragraph break: one or more blank lines. */
export interface Parbreak extends Node {
  type: 'parbreak'
}

/** An escape sequence: `\#`, `\u{1F5FA}`. `value` is the escaped character. */
export interface Escape extends Literal {
  type: 'escape'
}

/**
 * A shorthand for a Unicode codepoint: `~` (non-breaking space), `--`, `---`, `...`, `-?`.
 * `value` is the character it stands for.
 */
export interface Shorthand extends Literal {
  type: 'shorthand'
}

/** A smart quote: `'` or `"`. */
export interface SmartQuote extends Node {
  type: 'smartQuote'
  double: boolean
}

/** Strong content: `*Strong*`. */
export interface Strong extends Parent<MarkupContent> {
  type: 'strong'
}

/** Emphasized content: `_Emphasized_`. */
export interface Emph extends Parent<MarkupContent> {
  type: 'emph'
}

/** Raw text: `` `code` `` or a fenced block. `value` is the dedented text, lines joined by `\n`. */
export interface Raw extends Literal {
  type: 'raw'
  lang?: string
  /** Displayed as a separate block (three or more backticks with a newline or language) */
  block: boolean
}

/** A bare hyperlink: `https://typst.org`. */
export interface Link extends Node {
  type: 'link'
  url: string
}

/** A label: `<intro>`. It attaches to the preceding element. */
export interface Label extends Node {
  type: 'label'
  name: string
}

/** A reference: `@target`, `@target[supplement]`. */
export interface Ref extends Node {
  type: 'ref'
  target: string
  supplement?: ContentBlock
}

/** A section heading: `= Introduction`. */
export interface Heading extends Parent<MarkupContent> {
  type: 'heading'
  /** Number of equals signs, 1-based */
  depth: number
}

/** An item in a bullet list: `- …`. */
export interface ListItem extends Parent<MarkupContent> {
  type: 'listItem'
}

/** An item in a numbered list: `+ …` or `1. …`. */
export interface EnumItem extends Parent<MarkupContent> {
  type: 'enumItem'
  /** The explicit number, if any: `23.` */
  number?: number
}

/** An item in a term list: `/ Term: Description`. `children` is the description. */
export interface TermItem extends Parent<MarkupContent> {
  type: 'termItem'
  term: MarkupContent[]
}

/** An equation: `$x$` (inline) or `$ x^2 $` (block). */
export interface Equation extends Parent<MathContent> {
  type: 'equation'
  block: boolean
}

/** A comment: `// …` or `/* … *\/`. `value` is the text between the delimiters. */
export interface Comment extends Literal {
  type: 'comment'
  block: boolean
}

/** Source the parser could not make sense of, kept verbatim, with the parser's message. */
export interface ErrorNode extends Literal {
  type: 'error'
  message: string
}

/**
 * Verbatim Typst source, emitted as-is wherever it sits (markup, math or code). For generated
 * trees: anything common should get a proper node. The parser never produces it.
 */
export interface Typst extends Literal {
  type: 'typst'
}

// ---------------------------------------------------------------------------
// Math
// ---------------------------------------------------------------------------

/** A group of math: an equation's body, a fraction's parenthesized numerator, … */
export interface Math extends Parent<MathContent> {
  type: 'math'
  /** Written in parentheses that Typst drops: the numerator of `(a + b)/2` */
  deparenthesized?: boolean
}

/** A lone text fragment in math: `x`, `25`, `3.1415`, `=`, `[`. */
export interface MathText extends Literal {
  type: 'mathText'
}

/** An identifier in math: `pi`. */
export interface MathIdent extends Node {
  type: 'mathIdent'
  name: string
}

/** A field access in math: `arrow.r.long`. */
export interface MathFieldAccess extends Node {
  type: 'mathFieldAccess'
  target: MathIdent | MathFieldAccess
  field: string
}

/** A shorthand in math: `<=`, `->`. `value` is the character it stands for. */
export interface MathShorthand extends Literal {
  type: 'mathShorthand'
}

/** An alignment point: `&`. */
export interface MathAlignPoint extends Node {
  type: 'mathAlignPoint'
}

/** A function call in math: `mat(delim: "[", a, b; c, d)`. */
export interface MathCall extends Node {
  type: 'mathCall'
  callee: MathIdent | MathFieldAccess
  args: MathArg[]
}

/** An argument in a math call. `semicolon` marks one followed by `;` (a new row). */
export type MathArg = Arg & { semicolon?: boolean }

/** Matched delimiters: `[x + y]`, `(a)`. */
export interface MathDelimited extends Parent<MathContent> {
  type: 'mathDelimited'
  open: MathContent
  close: MathContent
}

/** A base with attachments: `a_1^2`, `x'`. */
export interface MathAttach extends Node {
  type: 'mathAttach'
  base: MathContent
  bottom?: MathContent
  top?: MathContent
  /** number of primes attached to the base */
  primes?: number
}

/** Grouped primes: `'''`. */
export interface MathPrimes extends Node {
  type: 'mathPrimes'
  count: number
}

/** A fraction: `x/2`. */
export interface MathFrac extends Node {
  type: 'mathFrac'
  num: MathContent
  denom: MathContent
}

/** A root: `√x`, `∛x`, `∜x`. */
export interface MathRoot extends Node {
  type: 'mathRoot'
  index?: 3 | 4
  radicand: MathContent
}

// ---------------------------------------------------------------------------
// Code: literals
// ---------------------------------------------------------------------------

/** An identifier: `left`. */
export interface Ident extends Node {
  type: 'ident'
  name: string
}

/** `none` */
export interface None extends Node {
  type: 'none'
}

/** `auto` */
export interface Auto extends Node {
  type: 'auto'
}

/** `true`, `false` */
export interface Bool extends Node {
  type: 'bool'
  value: boolean
}

/** An integer: `120`. */
export interface Int extends Node {
  type: 'int'
  value: number
}

/** A floating-point number: `1.2`, `10e-4`. */
export interface Float extends Node {
  type: 'float'
  value: number
}

export type Unit = 'pt' | 'mm' | 'cm' | 'in' | 'rad' | 'deg' | 'em' | 'fr' | '%'

/** A number with a unit: `12pt`, `3cm`, `2em`, `90deg`, `1fr`, `50%`. */
export interface Numeric extends Node {
  type: 'numeric'
  value: number
  unit: Unit
}

/** A string: `"…"`. `value` has its escape sequences resolved. */
export interface Str extends Literal {
  type: 'str'
}

// ---------------------------------------------------------------------------
// Code: blocks and collections
// ---------------------------------------------------------------------------

/** A code block: `{ let x = 1; x + 2 }`. */
export interface CodeBlock extends Parent<CodeContent> {
  type: 'codeBlock'
}

/** A content block: `[*Hi* there!]`. */
export interface ContentBlock extends Parent<MarkupContent> {
  type: 'contentBlock'
}

/** A parenthesized expression or pattern: `(1 + 2)`. */
export interface Parenthesized extends Node {
  type: 'parenthesized'
  expr: Expr | Pattern
}

/** An array: `(1, "hi", 12cm)`. */
export interface ArrayExpr extends Node {
  type: 'array'
  items: (Expr | Spread)[]
}

/** A dictionary: `(thickness: 3pt, dash: "solid")`; empty: `(:)`. */
export interface Dict extends Node {
  type: 'dict'
  items: (Named | Keyed | Spread)[]
}

/** A named pair: `thickness: 3pt` (in dictionaries, arguments, parameters and patterns). */
export interface Named extends Node {
  type: 'named'
  name: string
  expr: Expr | Pattern
}

/** A keyed pair: `"spacy key": true`. */
export interface Keyed extends Node {
  type: 'keyed'
  key: Expr
  expr: Expr
}

/**
 * A spread: `..things` in arrays, dictionaries and arguments (`expr`), or a sink `..rest` /
 * `..` in parameters and destructuring (`sink`).
 */
export interface Spread extends Node {
  type: 'spread'
  expr?: Expr
  sink?: string
}

// ---------------------------------------------------------------------------
// Code: operations
// ---------------------------------------------------------------------------

export type UnOp = '+' | '-' | 'not'

export type BinOp =
  | '+'
  | '-'
  | '*'
  | '/'
  | 'and'
  | 'or'
  | '=='
  | '!='
  | '<'
  | '<='
  | '>'
  | '>='
  | '='
  | 'in'
  | 'not in'
  | '+='
  | '-='
  | '*='
  | '/='

/** A unary operation: `-x`. */
export interface Unary extends Node {
  type: 'unary'
  op: UnOp
  expr: Expr
}

/** A binary operation: `a + b`. */
export interface Binary extends Node {
  type: 'binary'
  op: BinOp
  lhs: Expr
  rhs: Expr
}

/** A field access: `properties.age`. */
export interface FieldAccess extends Node {
  type: 'fieldAccess'
  target: Expr
  field: string
}

/** A function argument: positional, named (`draw: false`) or spread (`..things`). */
export type Arg = Expr | Named | Spread

/**
 * A function or method call: `f(x, y)`, `footnote[text]`. Trailing content blocks are
 * positional arguments, like in Typst.
 */
export interface FuncCall extends Node {
  type: 'funcCall'
  callee: Expr
  args: Arg[]
  /**
   * How many of the last arguments (content blocks) are written after the parentheses:
   * `figure(img)[x]` has 1, `table([a], [b])` 0. Without it, the serializer writes every
   * content block at the end of the arguments that way.
   */
  trailing?: number
}

/** A parameter: positional (a pattern), named with a default (`draw: false`) or a sink (`..args`). */
export type Param = Pattern | Named | Spread

/** A closure: `(x, y) => z`. `name` is set for `let f(x) = y`. */
export interface Closure extends Node {
  type: 'closure'
  name?: string
  params: Param[]
  body: Expr
}

// ---------------------------------------------------------------------------
// Code: patterns
// ---------------------------------------------------------------------------

/** The placeholder pattern: `_`. */
export interface Underscore extends Node {
  type: 'underscore'
}

/** A destructuring pattern: `(x, _, ..y)`, `(a: b)`. */
export interface Destructuring extends Node {
  type: 'destructuring'
  items: (Pattern | Named | Spread)[]
}

export type Pattern = Expr | Underscore | Parenthesized | Destructuring

// ---------------------------------------------------------------------------
// Code: statements and control flow
// ---------------------------------------------------------------------------

/**
 * A let binding: `let x = 1`, `let (a, b) = pair`. A function binding (`let f(x) = y`) has
 * the name as an {@link Ident} pattern and a {@link Closure} with the same `name` as `init`.
 */
export interface LetBinding extends Node {
  type: 'letBinding'
  pattern: Pattern
  init?: Expr
}

/** A destructuring assignment: `(x, y) = (1, 2)`. */
export interface DestructAssignment extends Node {
  type: 'destructAssignment'
  pattern: Pattern
  value: Expr
}

/** A set rule: `set text(size: 10pt)`, `set text(red) if x`. */
export interface SetRule extends Node {
  type: 'setRule'
  target: Expr
  args: Arg[]
  condition?: Expr
}

/** A show rule: `show heading: it => emph(it.body)`, `show: template`. */
export interface ShowRule extends Node {
  type: 'showRule'
  selector?: Expr
  transform: Expr
}

/** A contextual expression: `context text.lang`. */
export interface Contextual extends Node {
  type: 'contextual'
  body: Expr
}

/** `if x { y } else { z }` */
export interface Conditional extends Node {
  type: 'conditional'
  condition: Expr
  ifBody: Expr
  elseBody?: Expr
}

/** `while x { y }` */
export interface WhileLoop extends Node {
  type: 'whileLoop'
  condition: Expr
  body: Expr
}

/** `for x in y { z }` */
export interface ForLoop extends Node {
  type: 'forLoop'
  pattern: Pattern
  iterable: Expr
  body: Expr
}

/** An imported item: `a`, `a.b.c`, `a as b`. `path` is the dotted path, `newName` the rename. */
export interface ImportItem extends Node {
  type: 'importItem'
  path: string[]
  newName?: string
}

/** `import "utils.typ": a, b`, `import "@preview/x:1.0.0": *`, `import "a.typ" as b`. */
export interface ModuleImport extends Node {
  type: 'moduleImport'
  source: Expr
  newName?: string
  /** `'*'` for a wildcard; omitted for a bare import */
  imports?: '*' | ImportItem[]
}

/** `include "chapter1.typ"` */
export interface ModuleInclude extends Node {
  type: 'moduleInclude'
  source: Expr
}

/** `break` */
export interface LoopBreak extends Node {
  type: 'loopBreak'
}

/** `continue` */
export interface LoopContinue extends Node {
  type: 'loopContinue'
}

/** `return`, `return x + 1` */
export interface FuncReturn extends Node {
  type: 'funcReturn'
  body?: Expr
}

// ---------------------------------------------------------------------------
// Unions
// ---------------------------------------------------------------------------

/** Literals and atoms of code. */
export type CodeLiteral = None | Auto | Bool | Int | Float | Numeric | Str

/** Code expressions: anything that can follow `#` in markup, plus operators and statements. */
export type CodeExpr =
  | Ident
  | CodeLiteral
  | CodeBlock
  | ContentBlock
  | Parenthesized
  | ArrayExpr
  | Dict
  | Unary
  | Binary
  | FieldAccess
  | FuncCall
  | Closure
  | LetBinding
  | DestructAssignment
  | SetRule
  | ShowRule
  | Contextual
  | Conditional
  | WhileLoop
  | ForLoop
  | ModuleImport
  | ModuleInclude
  | LoopBreak
  | LoopContinue
  | FuncReturn

/** Markup-only nodes. */
export type MarkupNode =
  | Text
  | Space
  | Linebreak
  | Parbreak
  | Escape
  | Shorthand
  | SmartQuote
  | Strong
  | Emph
  | Raw
  | Link
  | Label
  | Ref
  | Heading
  | ListItem
  | EnumItem
  | TermItem
  | Equation

/** Math-only nodes. */
export type MathNode =
  | Math
  | MathText
  | MathIdent
  | MathFieldAccess
  | MathShorthand
  | MathAlignPoint
  | MathCall
  | MathDelimited
  | MathAttach
  | MathPrimes
  | MathFrac
  | MathRoot

/** Any expression (Typst's `Expr`). */
export type Expr = MarkupNode | MathNode | CodeExpr | Typst

/** What a markup sequence (the root, strong, heading, content block, …) holds. */
export type MarkupContent = MarkupNode | CodeExpr | Comment | ErrorNode | Typst

/** What an equation or math group holds. Code in math (`#f(x)`, `"text"`) is a `CodeExpr`. */
export type MathContent =
  | MathNode
  | Text
  | Space
  | Linebreak
  | Escape
  | Equation
  | CodeExpr
  | Comment
  | ErrorNode
  | Typst

/** What a code block holds. */
export type CodeContent = Expr | Comment | ErrorNode

/** Every typast node. */
export type TypastNode =
  | Root
  | Expr
  | Named
  | Keyed
  | Spread
  | Underscore
  | Destructuring
  | ImportItem
  | Comment
  | ErrorNode

/** Map of node type names to nodes, for handler tables and type guards. */
export interface NodeMap {
  root: Root
  text: Text
  space: Space
  linebreak: Linebreak
  parbreak: Parbreak
  escape: Escape
  shorthand: Shorthand
  smartQuote: SmartQuote
  strong: Strong
  emph: Emph
  raw: Raw
  link: Link
  label: Label
  ref: Ref
  heading: Heading
  listItem: ListItem
  enumItem: EnumItem
  termItem: TermItem
  equation: Equation
  comment: Comment
  error: ErrorNode
  typst: Typst
  math: Math
  mathText: MathText
  mathIdent: MathIdent
  mathFieldAccess: MathFieldAccess
  mathShorthand: MathShorthand
  mathAlignPoint: MathAlignPoint
  mathCall: MathCall
  mathDelimited: MathDelimited
  mathAttach: MathAttach
  mathPrimes: MathPrimes
  mathFrac: MathFrac
  mathRoot: MathRoot
  ident: Ident
  none: None
  auto: Auto
  bool: Bool
  int: Int
  float: Float
  numeric: Numeric
  str: Str
  codeBlock: CodeBlock
  contentBlock: ContentBlock
  parenthesized: Parenthesized
  array: ArrayExpr
  dict: Dict
  named: Named
  keyed: Keyed
  spread: Spread
  unary: Unary
  binary: Binary
  fieldAccess: FieldAccess
  funcCall: FuncCall
  closure: Closure
  underscore: Underscore
  destructuring: Destructuring
  letBinding: LetBinding
  destructAssignment: DestructAssignment
  setRule: SetRule
  showRule: ShowRule
  contextual: Contextual
  conditional: Conditional
  whileLoop: WhileLoop
  forLoop: ForLoop
  importItem: ImportItem
  moduleImport: ModuleImport
  moduleInclude: ModuleInclude
  loopBreak: LoopBreak
  loopContinue: LoopContinue
  funcReturn: FuncReturn
}

export type NodeType = keyof NodeMap

/** Code expression node types: in markup they are written after a `#`. */
export const codeTypes: ReadonlySet<string> = new Set<CodeExpr['type']>([
  'ident',
  'none',
  'auto',
  'bool',
  'int',
  'float',
  'numeric',
  'str',
  'codeBlock',
  'contentBlock',
  'parenthesized',
  'array',
  'dict',
  'unary',
  'binary',
  'fieldAccess',
  'funcCall',
  'closure',
  'letBinding',
  'destructAssignment',
  'setRule',
  'showRule',
  'contextual',
  'conditional',
  'whileLoop',
  'forLoop',
  'moduleImport',
  'moduleInclude',
  'loopBreak',
  'loopContinue',
  'funcReturn',
])

/** Statements: in markup they end at the end of the line (or a `;`). */
export const statementTypes: ReadonlySet<string> = new Set<CodeExpr['type']>([
  'letBinding',
  'setRule',
  'showRule',
  'moduleImport',
  'moduleInclude',
  'loopBreak',
  'loopContinue',
  'funcReturn',
])

/**
 * The fields of each node type that hold nodes, besides `children`, in source order. Used to
 * walk every node of a tree (`typast-util-visit`).
 */
export const nodeFields: { readonly [T in NodeType]?: readonly string[] } = {
  ref: ['supplement'],
  termItem: ['term'],
  mathFieldAccess: ['target'],
  mathCall: ['callee', 'args'],
  mathDelimited: ['open', 'close'],
  mathAttach: ['base', 'bottom', 'top'],
  mathFrac: ['num', 'denom'],
  mathRoot: ['radicand'],
  parenthesized: ['expr'],
  array: ['items'],
  dict: ['items'],
  named: ['expr'],
  keyed: ['key', 'expr'],
  spread: ['expr'],
  unary: ['expr'],
  binary: ['lhs', 'rhs'],
  fieldAccess: ['target'],
  funcCall: ['callee', 'args'],
  closure: ['params', 'body'],
  destructuring: ['items'],
  letBinding: ['pattern', 'init'],
  destructAssignment: ['pattern', 'value'],
  setRule: ['target', 'args', 'condition'],
  showRule: ['selector', 'transform'],
  contextual: ['body'],
  conditional: ['condition', 'ifBody', 'elseBody'],
  whileLoop: ['condition', 'body'],
  forLoop: ['pattern', 'iterable', 'body'],
  moduleImport: ['source', 'imports'],
  moduleInclude: ['source'],
  funcReturn: ['body'],
}
