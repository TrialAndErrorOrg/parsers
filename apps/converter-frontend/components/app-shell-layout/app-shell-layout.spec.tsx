import { render } from '@testing-library/react'

import AppShellLayout from './app-shell-layout'

describe('AppShellLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppShellLayout />)
    expect(baseElement).toBeTruthy()
  })
})
