import { render } from '@testing-library/react'

import Conversion from './conversion'

describe('Conversion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Conversion />)
    expect(baseElement).toBeTruthy()
  })
})
