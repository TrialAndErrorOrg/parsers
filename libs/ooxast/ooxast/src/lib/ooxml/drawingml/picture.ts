import * as a from './main.js'
import { RequiredMap } from '../../ooxast.js'

// Source files:
// http://localhost:3000/dml-picture.xsd

import { Element } from 'xast'
export interface Picture extends Element {
  type: 'element'
  name: 'dpct:picture'
  attributes: Record<string, never>
  children: RequiredMap<PictureMap>[]
}

export interface PictureMap {
  blipFill: a.BlipFillProperties
  nvPicPr: PictureNonVisual
  spPr: a.ShapeProperties
}

export interface PictureNonVisual extends Element {
  type: 'element'
  name: 'dpct:pictureNonVisual'
  attributes: Record<string, never>
  children: RequiredMap<PictureNonVisualMap>[]
}

export interface PictureNonVisualMap {
  cNvPicPr: a.NonVisualPictureProperties
  cNvPr: a.NonVisualDrawingProps
}

export interface document extends Element {
  pic: Picture
}
export var document: document
