import * as Primitive from '../../xml-primitives'

import { RequiredMap } from '../../ooxast'
// Source files:
// http://localhost:3000/shared-customXmlSchemaProperties.xsd

interface BaseType {
  _exists: boolean
  _namespace: string
}
export interface Schema extends BaseType {
  type: 'element'
  name: 'Schema'
  attributes: {
    manifestLocation: string
    schemaLanguage: string
    schemaLocation: string
    uri: string
  }
}

export interface SchemaLibrary extends BaseType {
  type: 'element'
  name: 'SchemaLibrary'

  children: RequiredMap<SchemaLibraryMap>
}

export interface SchemaLibraryMap {
  schema?: Schema[]
}

export interface document extends BaseType {
  schemaLibrary: SchemaLibrary
}
export var document: document
