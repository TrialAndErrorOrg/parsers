import { addPreamble } from './texast-util-add-preamble'
import { u } from 'unist-builder'
import { Preamble, Root } from 'texast'

describe('texastTexastUtilAddPreamble', () => {
  const preamb = u('root', [u('preamble', []), u('document', [])]) as any

  it('should work', () => {
    const settings = [
      {
        type: 'usepackage',
        args: ['hyperref'],
      },
    ]
    expect(addPreamble(preamb, settings)).toEqual(
      u('root', [
        u('preamble', [
          u('command', { name: 'usepackage' }, [
            u('commandArg', [{ type: 'text', value: 'hyperref' }]),
          ]),
          { type: 'text', value: '\\n' },
        ]),
        u('document', []),
      ])
    )
  })
})
