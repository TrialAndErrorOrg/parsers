import {
  Position,
  Node as UnistNode,
  Literal as UnistLiteral,
  Parent as UnistParent,
} from 'unist'
import type { Node as UtensilNodes } from 'latex-utensils/out/types/src/latex/latex_parser_types'

interface Text extends Literal {
  type: 'text'
}

interface UtensilBaseNode {
  kind: string
  [key: string]: any
  location?: Position
}

interface UtensilParent extends UtensilBaseNode {
  content: UtensilNodes[]
}

interface UtensilLiteral extends UtensilBaseNode {
  content: string
}

type UtensilParents = Extract<UtensilNodes, UtensilParent>
type UtensilLiterals = Exclude<UtensilNodes, UtensilParents>

interface Node<TNode extends UtensilBaseNode = UtensilBaseNode>
  extends UnistNode<TNode> {
  type: Pick<TNode, 'kind'> extends string ? Pick<TNode, 'kind'> : string
  position?: Position
}

type Nodes = Node<UtensilNodes>

type Parent<TNode extends UtensilParent> = Node<TNode> &
  UnistParent & {
    children: Nodes[]
  }

type Parents = Parent<UtensilParents>

type Literal<TNode extends UtensilLiteral> = Node<TNode> &
  UnistLiteral & {
    content: string
  }

type Literals = Literal<UtensilLiterals>
