import * as a from './main'
import { RequiredMap } from '../../ooxast'

// Source files:
// http://localhost:3000/dml-picture.xsd

interface BaseType {
  _exists: boolean
  _namespace: string
}
export interface Picture extends BaseType {
  type: 'element'
  name: 'dpct:picture'
  attributes: {}
  children: RequiredMap<PictureMap>
}

export interface PictureMap {
  blipFill: a.BlipFillProperties
  nvPicPr: PictureNonVisual
  spPr: a.ShapeProperties
}

export interface PictureNonVisual extends BaseType {
  type: 'element'
  name: 'dpct:pictureNonVisual'
  attributes: {}
  children: RequiredMap<PictureNonVisualMap>
}

export interface PictureNonVisualMap {
  cNvPicPr: a.NonVisualPictureProperties
  cNvPr: a.NonVisualDrawingProps
}

export interface document extends BaseType {
  pic: Picture
}
export var document: document
