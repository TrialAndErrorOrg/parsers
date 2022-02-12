import * as Primitive from '../../xml-primitives'

import { RequiredMap } from '../../ooxast'
// Source files:
// http://localhost:3000/shared-relationshipReference.xsd

interface BaseType {
  _exists: boolean
  _namespace: string
}
export type RelationshipIdVal = string

export interface document extends BaseType {}
export var document: document
