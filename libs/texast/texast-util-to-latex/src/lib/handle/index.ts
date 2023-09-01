import { alignmentTab } from './alignment-tab.js'
import { command } from './command.js'
import { commandArg } from './command-arg.js'
import { comment } from './comment.js'
import { displayMath } from './display-math.js'
import { environment } from './environment.js'
import { group } from './group.js'
import { inlineMath } from './inline-math.js'
import { text } from './text.js'
import { document } from './document.js'
import { mathContainer } from './math-container.js'
import { paragraph } from './paragraph.js'
import { mathCharacter } from './math-character.js'
import { linebreak } from './linebreak.js'
import { root } from './root.js'
import { preamble } from './preamble.js'
import { listItem } from './listItem.js'
import { tableRow } from './table-row.js'
import { tableCell } from './table-cell.js'
import { script } from './script.js'

export const handle = {
  alignmentTab,
  command,
  commandArg,
  comment,
  document,
  displayMath,
  mathContainer,
  paragraph,
  mathCharacter,
  linebreak,
  root,
  preamble,
  environment,
  sub: script,
  super: script,
  group,
  text,
  listItem,
  tableRow,
  tableCell,
}
