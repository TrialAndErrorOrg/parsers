import { Element } from 'xast'
import { BdoContentRun, P } from './main'

interface X extends Element {
  children: P[]
}

const x = (y: Element) => console.log(y)
const r: BdoContentRun = {
  type: 'element',
  name: 'w:bdoContentRun',
  attributes: {},
  children: [],
}

x(r)
