import { render } from '@testing-library/react'

import AppShellLayout from './app-shell-layout.js'

describe('AppShellLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppShellLayout />)
    expect(baseElement).toBeTruthy()
  })
})
