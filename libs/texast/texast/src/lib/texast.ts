import {
  Node as UnistNode,
  Literal as UnistLiteral,
  Parent as UnistParent,
} from 'unist'

export function isKnownNode(node: UnistNode): node is TexastContent {
  return [
    'root',
    'document',
    'preamble',
    'sub',
    'super',
    'environment',
    'paragraph',
    'comment',
    'command',
    'commandArg',
    'mathContainer',
    'mathCharacter',
    'alignmentTab',
    'tableRow',
    'tableCell',
    'linebreak',
    'math',
    'break',
    'listItem',
    'text',
  ].includes(node.type)
}

export type TexastContent =
  | TopLevelDocumentContent
  | PreambleContent
  | AlignmentContent
  | MathContent
  | CommandContent
  | ParagraphContent
  | CommandArg
  | ListContent
  | Text
  | Comment
  | TabularContent
  | TableRowContent

export type TopLevelDocumentContent =
  | Environment
  | Paragraph
  | MathContainer
  | Command
  | Comment
  | TopLevelMathContent

export type PreambleContent = Command | Comment

export type AlignmentContent = MathEnvironmentAligned | TabularContent

export type TabularContent = Linebreak | TableRow

export type TableRowContent = TableCell | AlignmentTab

export type TopLevelMathContent = MathContainer | InlineMath | DisplayMath

export type MathContent =
  | AlignmentTab
  | MathCharacter
  //| MathEnvironmentAligned
  | Script
  | Command

export type EnvironmentContent = TopLevelDocumentContent

export type CommandContent = Command | Text | Comment

export type ParagraphContent = Text | InlineMath | Command | Comment
export function isParagraphContent(
  content: TexastContent
): content is ParagraphContent {
  return ['text', 'inlineMath', 'command', 'comment'].includes(content.type)
}

export type ListContent = ListItem

export type NeedsEscape = '&'
export interface Root extends Parent {
  type: 'root'
  // children:TexastContent[] //TopLevelDocumentContent[] | (Preamble | DocumentEnvironment)[]
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
  children: TexastContent[]
}

export interface Group<Child extends TexastContent = EnvironmentContent>
  extends Parent {
  type: Pick<Child, 'type'> extends string ? Pick<Child, 'type'> : string
  children: Child[]
}
export interface Command extends Parent {
  type: 'command'
  name: string
  children: CommandArg[]
}
export interface CommandArg extends Parent {
  type: 'commandArg'
  optional?: boolean
  children: CommandContent[] | MathContent[] | ParagraphContent[]
}
export const isCommandArg = (node: Root | TexastContent): node is CommandArg =>
  node.type === 'commandArg'
export interface CommandArgOpt extends CommandArg {
  optional: true
}
export const isOptionalCommandArg = (
  node: TexastContent
): node is CommandArgOpt => isCommandArg(node) && !!node.optional

export interface Environment<TNode extends TexastContent = TexastContent>
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
  name?: string
  children: MathContent[]
}
export interface InlineMath extends MathContainer {
  name: 'inlineMath'
  delimiters?: '$' | '()'
}
export interface DisplayMath extends MathContainer {
  name: 'displayMath'
  delimiters?: '$$' | '[]'
}
export interface Script extends Parent {
  type: 'super' | 'sub'
  children: MathContent[]
}

export interface MathCharacter extends UnistLiteral {
  type: 'mathCharacter'
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
export interface Softbreak extends UnistLiteral {
  type: 'break'
  value: '\\n'
}

export interface Comment extends UnistLiteral {
  type: 'comment'
  value: string
}

export interface Text extends UnistLiteral {
  type: 'text'
  value: string
}

export interface Linebreak extends UnistNode {
  type: 'linebreak'
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
export interface TableRow extends UnistParent {
  type: 'tableRow'
  children: TableRowContent[]
}
export interface TableCell extends UnistParent {
  type: 'tableCell'
  span?: `${number}`
  children: ParagraphContent[]
}

export interface List extends Environment<ListItem> {
  name: 'itemize' | 'enumerate'
}
export interface ListItem extends UnistParent {
  type: 'listItem'
  children: ParagraphContent[]
}

export type { UnistNode as Node, UnistLiteral as Literal }
