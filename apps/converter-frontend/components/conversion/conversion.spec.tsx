import { render } from '@testing-library/react'

import Conversion from './conversion.js'

describe('Conversion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Conversion />)
    expect(baseElement).toBeTruthy()
  })
})
