import { render } from '@testing-library/react'

import AddLatexPreamble from './add-latex-preamble.js'

describe('AddLatexPreamble', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddLatexPreamble />)
    expect(baseElement).toBeTruthy()
  })
})
