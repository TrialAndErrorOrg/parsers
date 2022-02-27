import { u } from 'unist-builder'
import { x } from 'xastscript'
import { selectAll } from '../index.js'

test('all together now', (t) => {
  expect(
    selectAll(
      'dl > dt.foo:nth-of-type(odd)',
      u('root', [
        x('dl', [
          '\n  ',
          x('dt.foo', 'Alpha'),
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
      ])
    )
  ).toEqual([x('dt.foo', 'Alpha')])

  expect(
    selectAll(
      '.foo ~ dd:nth-of-type(even)',
      u('root', [
        x('dl', [
          '\n  ',
          x('dt', 'Alpha'),
          '\n  ',
          x('dd', 'Bravo'),
          '\n  ',
          x('dt.foo', 'Charlie'),
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
      ])
    )
  ).toEqual([x('dd', 'Delta'), x('dd', 'Hotel')])

  expect(
    selectAll(
      '.foo + dd:nth-of-type(even)',
      u('root', [
        x('dl', [
          '\n  ',
          x('dt', 'Alpha'),
          '\n  ',
          x('dd', 'Bravo'),
          '\n  ',
          x('dt.foo', 'Charlie'),
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
      ])
    )
  ).toEqual([x('dd', 'Delta')])

  expect(
    selectAll(
      '.foo, :nth-of-type(even), [title]',
      u('root', [
        x('dl', [
          x('dt', { title: 'bar' }, 'Alpha'),
          x('dd', 'Bravo'),
          x('dt.foo', 'Charlie'),
          x('dd', 'Delta'),
          x('dt', 'Echo'),
          x('dd.foo', { title: 'baz' }, 'Foxtrot'),
          x('dt', 'Golf'),
          x('dd', 'Hotel'),
        ]),
      ])
    )
  ).toEqual([
    x('dt.foo', 'Charlie'),
    x('dd.foo', { title: 'baz' }, 'Foxtrot'),
    x('dd', 'Delta'),
    x('dt', 'Golf'),
    x('dd', 'Hotel'),
    x('dt', { title: 'bar' }, 'Alpha'),
  ])
})
