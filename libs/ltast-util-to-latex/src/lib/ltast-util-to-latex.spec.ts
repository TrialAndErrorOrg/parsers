import { Command, Environment } from 'relatex'
import { toLatex } from './ltast-util-to-latex'
const text = { type: 'text', value: 'hello world!' }

describe('text', () => {
  it('should stringify text', () => {
    expect(toLatex(text)).toEqual('hello world!')
  })
})

describe('command', () => {
  const commandWithNoArgs: Command = {
    type: 'command',
    name: 'newline',
    children: [],
  }
  it('should render command with no args', () => {
    expect(toLatex(commandWithNoArgs)).toEqual('\\newline')
  })
})
describe('environment', () => {
  const basicEnv: Environment = {
    type: 'environment',
    name: 'basic',
    children: [text],
  }
  it('should stringify basic environment', () => {
    expect(toLatex(basicEnv)).toEqual(
      `\\begin{basic}

      hello world!

  \\end{basic}`
    )
  })
})
