import { render } from '@testing-library/react'

import ConvertedBlockLocal from './converted-block-local.js'

describe('ConvertedBlockLocal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConvertedBlockLocal />)
    expect(baseElement).toBeTruthy()
  })
})
