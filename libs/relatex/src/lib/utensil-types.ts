import type {
  LatexAst as UtensilRoot,
  Node as UtensilNodesWithMisspelledInlienMath,
  InlienMath,
  Command,
  AmsMathTextCommand as AmsMathTextCommandWithoutName,
  MathEnvAligned,
  MathEnv,
  Environment,
  AlignmentTab,
  Space,
  Linebreak,
  Parbreak,
  Softbreak,
} from 'latex-utensils/out/types/src/latex/latex_parser_types'
import { Position } from 'unist'

// More extensivelf type the Utensil nodes
type InlineMath = InlienMath
export type UtensilNodes =
  | Exclude<UtensilNodesWithMisspelledInlienMath, InlienMath>
  | InlineMath

export type AmsMathTextCommand = AmsMathTextCommandWithoutName & {
  name: 'text'
}

export interface UtensilNode {
  kind: string
  [key: string]: any
  location?: Position
}

export interface UtensilParent extends UtensilNode {
  content: UtensilNodes[]
}

export interface UtensilLiteral extends UtensilNode {
  content: string
}

export interface UtensilCommandNode extends UtensilNode {
  name: string
  arg?: UtensilNodes
  args?: UtensilNodes
  nargs?: UtensilNodes
}

export type UtensilParents = Extract<UtensilNodes, UtensilParent>
export type UtensilLiterals =
  | Extract<UtensilNodes, UtensilLiteral>
  | Space
  | AlignmentTab
export type UtensilCommands = Extract<UtensilNodes, UtensilCommandNode>
export type UtensilBreaks = Softbreak | Linebreak | Parbreak

export type UtensilArgArrHavers = Extract<UtensilNodes, { args: UtensilNode[] }>
export type UtensilArgHavers = Extract<UtensilNodes, { arg: UtensilNode }>
export type UtensilNArgHavers = Extract<UtensilNodes, { nargs: any }>

export type UtensilEnvs = Environment | MathEnv | MathEnvAligned
