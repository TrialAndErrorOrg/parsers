import {
  Node as UnistNode,
  Literal as UnistLiteral,
  Parent as UnistParent,
} from 'unist'

export type LtastContent =
  | TopLevelDocumentContent
  | PreambleContent
  | AlignmentContent
  | TabularContent
  | MathContent
  | CommandContent
  | ParagraphContent

export type TopLevelDocumentContent =
  | Environment
  | ParagraphContent
  | MathContainer
  | Command
  | Comment

export type PreambleContent = Command | Comment

export type AlignmentContent = MathEnvironmentAligned | TabularContent

export type TabularContent =
  | AlignmentTab
  | InlineMath
  | Command
  | Linebreak
  | Text

export type MathContent =
  | AlignmentTab
  | MathCharacter
  | MathEnvironmentAligned
  | Script

export type CommandContent = Command | Text

export type ParagraphContent = Text | InlineMath | Command | Comment

export type NeedsEscape = '&'
export interface Root extends Parent {
  type: 'root'
  // children: LtastContent[] //TopLevelDocumentContent[] | (Preamble | DocumentEnvironment)[]
}
export interface Preamble extends Parent {
  type: 'preamble'
  children: PreambleContent[]
}
export interface DocumentEnvironment extends Parent {
  type: 'document'
  children: TopLevelDocumentContent[]
}

// export interface NodeMap<TNode extends UtensilNode = UtensilNode>
//   extends UnistNode {
//   type: Pick<TNode, 'kind'> extends string ? Pick<TNode, 'kind'> : string
//   position?: Position
//   // children?: Pick<TNode, 'content'>
// }

export interface Parent extends UnistParent {
  children: LtastContent[]
}

export interface Group<Children extends LtastContent = LtastContent>
  extends Parent {
  type: 'group'
  children: Children[]
}
export interface Command extends Parent {
  type: 'command'
  name: string
  children: CommandArg[]
}
export interface CommandArg extends Group<CommandContent> {
  optional?: boolean
}

export interface Environment<TNode extends LtastContent = LtastContent>
  extends Parent {
  type: 'environment'
  name: string
  children: Array<CommandArg | TNode>
}
export type MatrixNames =
  | 'array'
  | 'matrix'
  | 'pmatrix'
  | 'vmatrix'
  | 'Vmatrix'
  | 'bmatrix'
  | 'Bmatrix'
export interface MathEnvironment extends Environment<MathContent> {
  type: 'environment'
  name:
    | 'equation'
    | 'equation*'
    | 'align'
    | 'align*'
    | 'math'
    | 'displaymath'
    | 'aligned'
    | MatrixNames
}
export interface MathEnvironmentAligned extends MathEnvironment {
  name: 'aligned'
}
export interface MathContainer extends Parent {
  type: 'mathContainer'
  children: MathContent[]
}
export interface InlineMath extends MathContainer {
  name: 'inlineMath'
  delimiters?: 'dollar' | 'parenthesis'
}
export interface DisplayMath extends MathContainer {
  name: 'displayMath'
  delimiters?: 'dollar' | 'bracket'
}
export interface Script extends Parent {
  type: 'super' | 'sub'
  children: MathContent[]
}

export interface MathCharacter extends UnistLiteral {
  type: 'math'
  value: string
}

export interface AlignmentTab extends UnistLiteral {
  type: 'alignmentTab'
  value: '&'
}

export interface Paragraph extends Parent {
  type: 'paragraph'
  children: ParagraphContent[]
}
export interface SoftBreak extends UnistLiteral {
  type: 'break'
  value: '\\n'
}

export interface Comment extends UnistLiteral {
  type: 'comment'
  value: string
}

export interface Text extends UnistLiteral {
  type: 'text'
  value: 'string'
}

export interface Linebreak extends UnistNode {
  height?: string
}
// export type Nodes = NodeMap<UtensilNodes>
// export interface ParentMap<TNode extends UtensilParent = UtensilParent>
//   extends NodeMap<TNode>,
//     UnistParent {
//   children: []
// }

// export type Parents = Parent<UtensilParents>

// export type Literal<TNode extends UtensilLiteral = UtensilLiteral> =
//   Node<TNode> &
//     UnistLiteral & {
//       value: string
//     }

//export type Literals = Literal<UtensilLiterals>
// TODO: Figure and Tables

export interface Figure extends Environment {
  name: 'figure'
  float?: boolean
}
export interface Table extends Environment {
  name: 'table'
  float?: boolean
}
export interface Tabular extends Environment<TabularContent> {
  name: 'tabular'
  package?: 'plain' | 'tabularx' | 'tabulary' | 'tabu'
}

export { UnistNode as Node, UnistLiteral as Literal }
