import { getHeadingLevel } from './wrap-section.js'
import { getStyleNames } from './style-names.js'
import { x } from 'xastscript'
import { P } from 'ooxast'
import { test } from './get-pstyle.spec.js'
import { it, expect } from 'vitest'

const pWithStyle = (style: string) =>
  x('w:p', [x('w:pPr', [x('w:pStyle', { 'w:val': style })])]) as unknown as P

it('should get heading level', () => {
  expect(getHeadingLevel(test)).toEqual(1)
})

it('only treats `heading N` styles as headings', () => {
  expect(getHeadingLevel(pWithStyle('Heading2'))).toEqual(2)
  expect(getHeadingLevel(pWithStyle('heading 3'))).toEqual(3)
  // Google Docs and Word export plenty of non-heading styles that end in a digit
  expect(getHeadingLevel(pWithStyle('normal1'))).toBeNull()
  expect(getHeadingLevel(pWithStyle('TOC1'))).toBeNull()
  expect(getHeadingLevel(pWithStyle('Literaturverzeichnis1'))).toBeNull()
})

it('recognises localised heading ids by their style name', () => {
  const styles = x(null, [
    x('w:styles', [
      x('w:style', { 'w:styleId': 'Kop1' }, [x('w:name', { 'w:val': 'heading 1' })]),
      x('w:style', { 'w:styleId': 'normal1' }, [x('w:name', { 'w:val': 'Normal' })]),
    ]),
  ])
  const styleNames = getStyleNames(styles)
  expect(getHeadingLevel(pWithStyle('Kop1'), styleNames)).toEqual(1)
  expect(getHeadingLevel(pWithStyle('normal1'), styleNames)).toBeNull()
})
