import { render } from '@testing-library/react'

import Stack from './stack.js'

describe('Stack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Stack />)
    expect(baseElement).toBeTruthy()
  })
})
