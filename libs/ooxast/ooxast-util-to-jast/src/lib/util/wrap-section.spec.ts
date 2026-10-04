import { wrapSec, getHeadingLevel } from './wrap-section.js'

import { test } from './get-pstyle.spec.js'
import { it, expect } from 'vitest'

it('should get heading level', () => {
  expect(getHeadingLevel(test)).toEqual(1)
})

it('should wrapsec', () => {
  //
})
