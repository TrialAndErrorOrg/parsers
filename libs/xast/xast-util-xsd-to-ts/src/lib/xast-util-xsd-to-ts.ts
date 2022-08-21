import { unified } from 'unified'
import { fromXml } from 'xast-util-from-xml'
import fs from 'fs'
import { visit } from 'unist-util-visit'
import { selectAll, select } from 'xast-util-select'
import {
  selectAll as selectAllUnist,
  select as selectUnist,
} from 'unist-util-select'

import { toString } from 'xast-util-to-string'
import { convert } from 'unist-util-is'
import { Element } from 'xast'

import { basename, dirname, join } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const xml = fs.readFileSync(
  new URL('../fixtures/schemas/crossref5.3.1.xsd', import.meta.url),
  'utf8'
)

const xast = fromXml(xml)

console.log(xast)

const isElement = convert<Element>('element')

let things = []

const getSimpleContentData = (node: Element) => {}

const getComplexContentData = (node: Element) => {}

const getSequenceData = (node: Element) => {}

const getAllData = (node: Element) => {}

const getChoiceData = (node: Element) => {}

const getComplexTypeData = (node: Element) => {
  return { type: 'complex', element: node }
}

const getSimpleTypeData = (node: Element) => {
  const restriction = select('xsd\\:restriction', node)
  const restrictions = Object.fromEntries(
    selectAllUnist('element', restriction).map((el: Element) => [
      el.name.replace(/xsd?:/, ''),
      el?.attributes?.value,
    ])
  )
  return {
    type: 'simple',
    restrictions: { base: restriction?.attributes?.base, ...restrictions },
    element: node,
  }
}

visit(
  xast,
  (el): el is Element => isElement(el) && el.name === 'xsd:element',
  (element) => {
    const name = element?.attributes?.name
    if (!name) return

    const doc = select('xsd\\:documentation', element)
    const documentation = doc ? toString(doc) : ''

    const children = element.children.filter(
      (node) => node.type === 'element' && node.name !== 'xsd:annotation'
    )

    let dat
    const complexType = select('xsd\\:complexType', element)
    if (complexType) {
      dat = getComplexTypeData(complexType)
    } else {
      const simpleType = select('xsd\\:simpleType', element)
      dat = simpleType ? getSimpleTypeData(simpleType) : {}
    }

    const data = { name, documentation, dat }
    things.push(data)
  }
)

console.dir(things, { depth: null })
