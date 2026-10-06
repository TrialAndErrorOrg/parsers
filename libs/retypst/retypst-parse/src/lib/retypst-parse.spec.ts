import { describe, expect, it } from 'vitest'
import { unified } from 'unified'
import { VFile } from 'vfile'
import retypstParse from './retypst-parse.js'

describe('retypstParse', () => {
  it('parses Typst into typast', () => {
    const tree = unified().use(retypstParse, { positions: false }).parse('= Hi')
    expect(tree).toEqual({
      type: 'root',
      children: [{ type: 'heading', depth: 1, children: [{ type: 'text', value: 'Hi' }] }],
    })
  })

  it('reports syntax errors on the file', () => {
    const file = new VFile('#f(')
    unified().use(retypstParse).parse(file)
    expect(file.messages.map((m) => [m.reason, m.line, m.column])).toEqual([
      ['unclosed delimiter', 1, 3],
    ])
  })
})
