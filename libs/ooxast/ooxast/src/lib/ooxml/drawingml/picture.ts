import * as a from './main.js'
import { RequiredMap } from '../../ooxast.js'

// Source files:
// http://localhost:3000/dml-picture.xsd

import { Node as UnistNode } from 'unist'
export interface Picture extends UnistNode {
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

export interface PictureNonVisual extends UnistNode {
  type: 'element'
  name: 'dpct:pictureNonVisual'
  attributes: Record<string, never>
  children: RequiredMap<PictureNonVisualMap>[]
}

export interface PictureNonVisualMap {
  cNvPicPr: a.NonVisualPictureProperties
  cNvPr: a.NonVisualDrawingProps
}

export interface document extends UnistNode {
  pic: Picture
}
export var document: document
