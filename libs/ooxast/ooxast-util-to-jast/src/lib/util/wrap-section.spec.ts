import { wrapSec, getHeadingLevel } from './wrap-section'

import { test } from './get-pstyle.spec'

it('should get heading level', () => {
  expect(getHeadingLevel(test)).toEqual(1)
})

it('should wrapsec', () => {})
