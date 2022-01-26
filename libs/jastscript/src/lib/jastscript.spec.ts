import { j } from './jastscript'

describe('jastscript', () => {
  it('parses the bare minimum', () => {
    expect(j('p')).toEqual({
      children: [],
      properties: {},
      tagName: 'p',
      type: 'element',
    })
  })
  it('generates root if empty', () => {
    expect(j()).toEqual({ type: 'root', children: [] })
  })
  it('generates root if empty', () => {
    expect(j('article', { something: 'new' })).toEqual({
      type: 'element',
      tagName: 'article',
      properties: { something: 'new' },
      children: [],
    })
  })
  it('should add child', () => {
    expect(j('article', { something: 'new' }, j('front'))).toEqual({
      type: 'element',
      tagName: 'article',
      properties: { something: 'new' },
      children: [
        { type: 'element', tagName: 'front', children: [], properties: {} },
      ],
    })
  })
})
