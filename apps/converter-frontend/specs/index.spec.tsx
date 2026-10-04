import React from 'react'
import { render } from '@testing-library/react'

import Index from '../pages/remote.js'
import { describe, it, expect } from 'vitest'

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />)
    expect(baseElement).toBeTruthy()
  })
})
