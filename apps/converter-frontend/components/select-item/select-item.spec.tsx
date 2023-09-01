import { render } from '@testing-library/react'

import SelectItem from './select-item.js'

describe('SelectItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectItem />)
    expect(baseElement).toBeTruthy()
  })
})
