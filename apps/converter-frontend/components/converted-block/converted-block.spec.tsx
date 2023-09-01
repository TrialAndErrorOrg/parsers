import { render } from '@testing-library/react'

import ConvertedBlock from './converted-block.js'

describe('ConvertedBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConvertedBlock />)
    expect(baseElement).toBeTruthy()
  })
})
