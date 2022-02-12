import { j } from './jastscript'

describe('jastscript', () => {
  it('parses the bare minimum', () => {
    expect(j('p')).toEqual({
      children: [],
      //attributes: {},
      name: 'p',
      type: 'element',
    })
  })
  it('generates root if empty', () => {
    expect(j()).toEqual({ type: 'root', children: [] })
  })
  it('generates root if empty', () => {
    expect(j('article', { something: 'new' })).toEqual({
      type: 'element',
      name: 'article',
      attributes: { something: 'new' },
      children: [],
    })
  })
  it('should add child', () => {
    expect(j('article', { something: 'new' }, j('front'))).toEqual({
      type: 'element',
      name: 'article',
      attributes: { something: 'new' },
      children: [
        { type: 'element', name: 'front', children: [], //attributes: {} },
      ],
    })
  })
})
