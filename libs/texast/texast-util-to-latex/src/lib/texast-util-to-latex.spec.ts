import { Text, Command, CommandArg, CommandArgOpt, Environment, InlineMath } from 'texast'
import { toLatex } from './texast-util-to-latex.js'
const text: Text = { type: 'text', value: 'hello world!' }

const commandWithNoArgs: Command = {
  type: 'command',
  name: 'includepackage',
  children: [],
}
const optArg: CommandArgOpt = {
  type: 'commandArg',
  optional: true,
  children: [
    {
      type: 'text',
      value: 'style=apa',
    },
  ],
}
const arg: CommandArg = {
  type: 'commandArg',
  children: [{ type: 'text', value: 'biblatex' }],
}

const commandWithOneArgs: Command = {
  ...commandWithNoArgs,
  children: [arg],
}
const commandWith3Args: Command = {
  ...commandWithNoArgs,
  children: [arg, arg, arg],
}
const commandWithArgAndOptArg: Command = {
  ...commandWithNoArgs,
  children: [arg, optArg],
}

describe('unknown', () => {
  it('should ignore unknown nodes', () => {
    const erroring = () => {
      //@ts-expect-error i'm testing errors, of course it won't work
      toLatex({ type: 'fake', children: [{ type: 'text', value: 'fakenode' }] })
    }
    expect(erroring).toThrowError('Unknown type fake, skipping...')
  })
})
describe('text', () => {
  it('should stringify text', () => {
    expect(toLatex(text)).toEqual('hello world!')
  })
})

describe('paragraph', () => {
  it('should stringify paragraph', () => {
    //
  })
})

describe('command', () => {
  it('should render command with no args', () => {
    expect(toLatex(commandWithNoArgs)).toEqual('\\includepackage')
  })
  it('should render command with one argument', () => {
    expect(toLatex(commandWithOneArgs)).toEqual('\\includepackage{biblatex}')
  })
  it('should render command with one argument', () => {
    expect(toLatex(commandWith3Args)).toEqual('\\includepackage{biblatex}{biblatex}{biblatex}')
  })
  it('should render command with one argument', () => {
    expect(toLatex(commandWithArgAndOptArg)).toEqual('\\includepackage[style=apa]{biblatex}')
  })

  it('should render italics', () => {
    //
  })
})
describe('environment', () => {
  const basicEnv: Environment = {
    type: 'environment',
    name: 'basic',
    children: [text],
  }
  const envWithOptArg: Environment = {
    ...basicEnv,
    children: [text, optArg],
  }

  const envWithArg: Environment = {
    ...basicEnv,
    children: [text, arg],
  }
  const envWith2Arg: Environment = {
    ...basicEnv,
    children: [text, arg, arg],
  }
  const envWith2ArgAndOptArg: Environment = {
    ...basicEnv,
    children: [text, arg, arg, optArg],
  }
  it('should stringify basic environment', () => {
    expect(toLatex(basicEnv)).toEqual(
      `\\begin{basic}

      hello world!

  \\end{basic}`,
    )
  })

  it('should stringify environment with optArg', () => {
    expect(toLatex(envWithOptArg)).toEqual(
      `\\begin{basic}[style=apa]

      hello world!

  \\end{basic}`,
    )
  })
  it('should stringify environment with manadatory arg', () => {
    expect(toLatex(envWithArg)).toEqual(
      `\\begin{basic}{biblatex}

      hello world!

  \\end{basic}`,
    )
  })
  it('should stringify both necessary and opt args', () => {
    expect(toLatex(envWith2ArgAndOptArg)).toEqual(
      `\\begin{basic}[style=apa]{biblatex}{biblatex}

      hello world!

  \\end{basic}`,
    )
  })
})

describe('math', () => {
  const inlineMath: InlineMath = {
    type: 'mathContainer',
    name: 'inlineMath',
    children: [
      {
        type: 'mathCharacter',
        value: '8 + 9 = ',
      },
      {
        type: 'command',
        name: 'frac',
        children: [
          {
            type: 'commandArg',
            optional: false,
            children: [
              {
                type: 'mathCharacter',
                value: '8',
              },
            ],
          },
          {
            type: 'commandArg',
            optional: false,
            children: [
              {
                type: 'mathCharacter',
                value: '8',
              },
            ],
          },
        ],
      },
    ],
  }
  it('should parse inlinemath', () => {
    expect(toLatex(inlineMath)).toEqual(` $ 8 + 9 = \\frac{8}{8} $ `)
  })
  it('should change delimiters based on node attributes', () => {
    const inlineMathWithDelimiters = {
      ...inlineMath,
      delimiters: '()',
    }
    expect(toLatex(inlineMathWithDelimiters)).toEqual(` \\( 8 + 9 = \\frac{8}{8} \\) `)
  })
  it('should change delimiters based on global options', () => {
    const inlineMathWithDelimiters = {
      ...inlineMath,
    }
    expect(toLatex(inlineMathWithDelimiters, { inlineMathDelimiters: '()' })).toEqual(
      ` \\( 8 + 9 = \\frac{8}{8} \\) `,
    )
  })
})
