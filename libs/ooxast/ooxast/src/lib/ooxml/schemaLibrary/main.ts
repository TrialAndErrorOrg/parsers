import * as Primitive from '../../xml-primitives'

import { RequiredMap } from '../../ooxast'
// Source files:
// http://localhost:3000/shared-customXmlSchemaProperties.xsd

import { Node as UnistNode } from 'unist'
export interface Schema extends UnistNode {
  type: 'element'
  name: 'Schema'
  attributes: {
    manifestLocation: string
    schemaLanguage: string
    schemaLocation: string
    uri: string
  }
  children: []
}

export interface SchemaLibrary extends UnistNode {
  type: 'element'
  name: 'SchemaLibrary'
  attributes: Record<string, never>
  children: RequiredMap<SchemaLibraryMap>[]
}

export interface SchemaLibraryMap {
  schema?: Schema[]
}

export interface document extends UnistNode {
  schemaLibrary: SchemaLibrary
}
export var document: document
