import { render } from '@testing-library/react'

import ExtIcon from './ext-icon.js'

describe('ExtIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExtIcon />)
    expect(baseElement).toBeTruthy()
  })
})
