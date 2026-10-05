import { u } from 'unist-builder'
import { x } from 'xastscript'
import { selectAll } from '../index.js'
import { test, expect } from 'vitest'

// Ported from hast-util-select. xast has no classes (class selectors are not supported),
// so the hast `.foo` classes are written as plain `class` attributes here.
test('all together now', () => {
  expect(
    selectAll(
      'dl > dt[class=foo]:nth-of-type(odd)',
      u('root', [
        x('dl', [
          '\n  ',
          x('dt', { class: 'foo' }, 'Alpha'),
          '\n  ',
          x('dd', 'Bravo'),
          '\n  ',
          x('dt', 'Charlie'),
          '\n  ',
          x('dd', 'Delta'),
          '\n  ',
          x('dt', 'Echo'),
          '\n  ',
          x('dd', 'Foxtrot'),
          '\n',
        ]),
      ]),
    ),
  ).toEqual([x('dt', { class: 'foo' }, 'Alpha')])

  expect(
    selectAll(
      '[class=foo] ~ dd:nth-of-type(even)',
      u('root', [
        x('dl', [
          '\n  ',
          x('dt', 'Alpha'),
          '\n  ',
          x('dd', 'Bravo'),
          '\n  ',
          x('dt', { class: 'foo' }, 'Charlie'),
          '\n  ',
          x('dd', 'Delta'),
          '\n  ',
          x('dt', 'Echo'),
          '\n  ',
          x('dd', 'Foxtrot'),
          '\n  ',
          x('dt', 'Golf'),
          '\n  ',
          x('dd', 'Hotel'),
          '\n',
        ]),
      ]),
    ),
  ).toEqual([x('dd', 'Delta'), x('dd', 'Hotel')])

  expect(
    selectAll(
      '[class=foo] + dd:nth-of-type(even)',
      u('root', [
        x('dl', [
          '\n  ',
          x('dt', 'Alpha'),
          '\n  ',
          x('dd', 'Bravo'),
          '\n  ',
          x('dt', { class: 'foo' }, 'Charlie'),
          '\n  ',
          x('dd', 'Delta'),
          '\n  ',
          x('dt', 'Echo'),
          '\n  ',
          x('dd', 'Foxtrot'),
          '\n  ',
          x('dt', 'Golf'),
          '\n  ',
          x('dd', 'Hotel'),
          '\n',
        ]),
      ]),
    ),
  ).toEqual([x('dd', 'Delta')])

  expect(
    selectAll(
      '[class=foo], :nth-of-type(even), [title]',
      u('root', [
        x('dl', [
          x('dt', { title: 'bar' }, 'Alpha'),
          x('dd', 'Bravo'),
          x('dt', { class: 'foo' }, 'Charlie'),
          x('dd', 'Delta'),
          x('dt', 'Echo'),
          x('dd', { class: 'foo', title: 'baz' }, 'Foxtrot'),
          x('dt', 'Golf'),
          x('dd', 'Hotel'),
        ]),
      ]),
    ),
  ).toEqual([
    x('dt', { class: 'foo' }, 'Charlie'),
    x('dd', { class: 'foo', title: 'baz' }, 'Foxtrot'),
    x('dd', 'Delta'),
    x('dt', 'Golf'),
    x('dd', 'Hotel'),
    x('dt', { title: 'bar' }, 'Alpha'),
  ])
})
