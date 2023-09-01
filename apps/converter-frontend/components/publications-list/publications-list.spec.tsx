import { render } from '@testing-library/react'

import PublicationsList from './publications-list.js'

describe('PublicationsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicationsList />)
    expect(baseElement).toBeTruthy()
  })
})
