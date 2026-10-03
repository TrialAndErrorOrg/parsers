import type * as Ast from '@unified-latex/unified-latex-types'
import type { Content } from 'tyast'
import type { State } from './state.js'

export type HandlerResult = Content | Content[] | undefined | null | void

export type MacroHandler = (node: Ast.Macro, state: State) => HandlerResult
export type EnvironmentHandler = (node: Ast.Environment, state: State) => HandlerResult

export interface Options {
  /**
   * Where `main.typ` imports the template from.
   * @default 'jote-article/lib.typ'
   */
  templatePath?: string
  /**
   * Emit the `#import` and `#show: jote-article.with(…)` header. Defaults to `true` when the
   * input has a `\documentclass` or a `document` environment, `false` for fragments.
   */
  document?: boolean
  /**
   * CSL style passed to `bibliography(…)`.
   * @default 'apa'
   */
  bibliographyStyle?: string
  /**
   * Turn the path in `\includegraphics{path}` into the path Typst should load. Use it to add
   * missing extensions or rebase paths. Default: keep the path, add `.png` if it has no extension.
   */
  resolveImage?: (path: string) => string
  /** Extra/overriding macro handlers, keyed by macro name (without backslash). */
  macros?: Record<string, MacroHandler>
  /** Extra/overriding environment handlers, keyed by environment name. */
  environments?: Record<string, EnvironmentHandler>
}

export type LabelKind = 'heading' | 'figure' | 'table' | 'equation' | 'subfigure' | 'other'
