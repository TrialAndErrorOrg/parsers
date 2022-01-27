import {
  Position,
  Node as UnistNode,
  Literal as UnistLiteral,
  Parent as UnistParent,
} from 'unist'

import type {
  LatexAst as UtensilRoot,
  Node as UtensilNodes,
} from 'latex-utensils/out/types/src/latex/latex_parser_types'

export interface Root extends UnistParent {
  type: 'root'
  children: Array<Nodes>
}

export interface Text extends Literal {
  type: 'text'
}

export interface UtensilBaseNode {
  kind: string
  [key: string]: any
  location?: Position
}

export interface UtensilParent extends UtensilBaseNode {
  content: UtensilNodes[]
}

export interface UtensilLiteral extends UtensilBaseNode {
  content: string
}

export type UtensilParents = Extract<UtensilNodes, UtensilParent>
export type UtensilLiterals = Exclude<UtensilNodes, UtensilParents>

export interface Node<TNode extends UtensilBaseNode = UtensilBaseNode>
  extends UnistNode<TNode> {
  type: Pick<TNode, 'kind'> extends string ? Pick<TNode, 'kind'> : string
  position?: Position
}

export type Nodes = Node<UtensilNodes>

export type Parent<TNode extends UtensilParent> = Node<TNode> &
  UnistParent & {
    children: Nodes[]
  }

export type Parents = Parent<UtensilParents>

export type Literal<TNode extends UtensilLiteral = UtensilLiteral> =
  Node<TNode> &
    UnistLiteral & {
      value: string
    }

//export type Literals = Literal<UtensilLiterals>
