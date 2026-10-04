import { readFileSync } from 'node:fs'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'
import { describe, expect, it } from 'vitest'
import type { Root } from 'xast'
import { fromXml } from 'xast-util-from-xml'
import { toXml as serialize } from 'xast-util-to-xml'
import { x } from 'xastscript'
import { minifyWhitespace, type Options } from '../index.js'

const toXml = (tree: Root) => serialize(tree, { closeEmptyElements: true, tightClose: true })

const minify = (xml: string, options?: Options) => {
  const tree = fromXml(xml)
  minifyWhitespace(tree, options)
  return toXml(tree)
}

/** What `rehype-minify-whitespace` 5.0.1, which the converters used until now, does to xast. */
const original = (tree: Root, newlines = false) => {
  // Typed for hast, but it ran on xast.
  ;(rehypeMinifyWhitespace as (options: { newlines: boolean }) => (tree: unknown) => void)({
    newlines,
  })(tree)
  return tree
}

const docx =
  '<w:document><w:body>\n  <w:p>\n    <w:r>\n      <w:t xml:space="preserve">  Some   text  </w:t>\n    </w:r>\n    <w:r><w:t>and\n more.</w:t></w:r>\n  </w:p>\n  <w:p><w:r><w:t> </w:t></w:r></w:p>\n</w:body></w:document>'

describe('minifyWhitespace', () => {
  it('collapses and trims whitespace in an xast tree', () => {
    expect(minify(docx)).toBe(
      '<w:document><w:body><w:p><w:r><w:t xml:space="preserve">Some text </w:t></w:r><w:r><w:t>and more.</w:t></w:r></w:p><w:p><w:r><w:t/></w:r></w:p></w:body></w:document>',
    )
  })

  it('works on trees built with xastscript', () => {
    const tree = x(null, [x('p', ['  a  ', x('b', [' b ']), '\n\n c '])])
    minifyWhitespace(tree)
    expect(toXml(tree)).toBe('<p>a <b>b </b>c</p>')
  })

  it('collapses runs with a line ending to that line ending with `newlines`', () => {
    expect(minify('<p>a \n\n b  c</p>', { newlines: true })).toBe('<p>a\nb c</p>')
  })

  it('removes whitespace around `blocks`', () => {
    expect(minify('<sec> <p> a </p> <p> b </p> </sec>')).toBe('<sec><p>a </p><p>b</p></sec>')
    expect(minify('<sec> <p> a </p> <p> b </p> </sec>', { blocks: ['p'] })).toBe(
      '<sec><p>a</p><p>b</p></sec>',
    )
  })

  it('keeps whitespace next to `content` elements', () => {
    expect(minify('<p><graphic/> a</p>')).toBe('<p><graphic/>a</p>')
    expect(minify('<p><graphic/> a</p>', { content: ['graphic'] })).toBe('<p><graphic/> a</p>')
  })

  it('leaves `preserve` elements alone', () => {
    expect(minify('<p> a <code>  b \n c  </code> d </p>', { preserve: ['code'] })).toBe(
      '<p>a <code>  b \n c  </code> d</p>',
    )
  })

  it('looks past `skippable` elements for a boundary', () => {
    expect(minify('<p>a <x> </x><y>b</y></p>')).toBe('<p>a <x/><y>b</y></p>')
    expect(minify('<p>a <x> </x><br/></p>', { blocks: ['br'], skippable: ['x'] })).toBe(
      '<p>a<x/><br/></p>',
    )
  })

  describe('matches rehype-minify-whitespace 5.0.1 on xast', () => {
    const fixtures = {
      'a docx document.xml': new URL(
        '../../../../reoff/docx-to-vfile/src/fixtures/test.xml',
        import.meta.url,
      ),
      'a JATS article': new URL(
        '../../../../jast/jast-util-to-texast/src/lib/test/fixtures/complete/index.jats.xml',
        import.meta.url,
      ),
    }

    for (const [name, url] of Object.entries(fixtures)) {
      for (const newlines of [false, true]) {
        it(`for ${name}${newlines ? ' with `newlines`' : ''}`, () => {
          const xml = readFileSync(url, 'utf8')
          const tree = fromXml(xml)
          minifyWhitespace(tree, { newlines })

          expect(toXml(tree)).toBe(toXml(original(fromXml(xml), newlines)))
        })
      }
    }

    it('for the inline examples', () => {
      expect(minify(docx)).toBe(toXml(original(fromXml(docx))))
    })
  })
})
