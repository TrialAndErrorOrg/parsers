// Source files:
//

import { Node as UnistNode } from 'unist'
export interface _any extends UnistNode {
  content: any
}

export interface _boolean extends UnistNode {
  content: boolean
}

export interface _Date extends UnistNode {
  content: Date
}

export interface _number extends UnistNode {
  content: number
}

export interface document extends UnistNode {}
export var document: document
