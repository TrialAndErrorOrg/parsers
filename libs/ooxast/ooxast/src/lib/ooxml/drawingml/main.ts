import * as Primitive from '../../xml-primitives.js'
import * as r from '../officeDocument/relationships.js'
import * as s from '../officeDocument/sharedTypes.js'
import { RequiredMap } from '../../ooxast.js'

// Source files:
// http://localhost:3000/dml-main.xsd

import { Node as UnistNode } from 'unist'
export interface AdjPoint2D extends UnistNode {
  type: 'element'
  name: 'a:adjPoint2D'
  attributes: {
    'a:x': string
    'a:y': string
  }
  children: []
}

export interface AdjustHandleList extends UnistNode {
  type: 'element'
  name: 'a:adjustHandleList'
  attributes: Record<string, never>
  children: RequiredMap<AdjustHandleListMap>[]
}

export interface AdjustHandleListMap {
  ahPolar?: PolarAdjustHandle[]
  ahXY?: XYAdjustHandle[]
}

export interface AlphaBiLevelEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaBiLevelEffect'
  attributes: {
    'a:thresh': string
  }
  children: []
}

export interface AlphaCeilingEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaCeilingEffect'
}

export interface AlphaFloorEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaFloorEffect'
}

export interface AlphaInverseEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaInverseEffect'
  attributes: Record<string, never>
  children: RequiredMap<AlphaInverseEffectMap>[]
}

export interface AlphaInverseEffectMap {
  hslClr?: HslColor
  prstClr?: PresetColor
  schemeClr?: SchemeColor
  scrgbClr?: ScRgbColor
  srgbClr?: SRgbColor
  sysClr?: SystemColor
}

export interface AlphaModulateEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaModulateEffect'
  attributes: Record<string, never>
  children: RequiredMap<AlphaModulateEffectMap>[]
}

export interface AlphaModulateEffectMap {
  cont: EffectContainer
}

export interface AlphaModulateFixedEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaModulateFixedEffect'
  attributes: {
    'a:amt'?: string
  }
  children: []
}

export interface AlphaOutsetEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaOutsetEffect'
  attributes: {
    'a:rad'?: string
  }
  children: []
}

export interface AlphaReplaceEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaReplaceEffect'
  attributes: {
    'a:a': string
  }
  children: []
}

export interface Angle extends UnistNode {
  type: 'element'
  name: 'a:angle'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface AnimationChartBuildProperties extends UnistNode {
  type: 'element'
  name: 'a:animationChartBuildProperties'
  attributes: {
    'a:animBg'?: string
    'a:bld'?: string
  }
  children: []
}

export interface AnimationChartElement extends UnistNode {
  type: 'element'
  name: 'a:animationChartElement'
  attributes: {
    'a:bldStep': ChartBuildStepVal
    'a:categoryIdx'?: string
    'a:seriesIdx'?: string
  }
  children: []
}

export interface AnimationDgmBuildProperties extends UnistNode {
  type: 'element'
  name: 'a:animationDgmBuildProperties'
  attributes: {
    'a:bld'?: string
    'a:rev'?: string
  }
  children: []
}

export interface AnimationDgmElement extends UnistNode {
  type: 'element'
  name: 'a:animationDgmElement'
  attributes: {
    'a:bldStep'?: DgmBuildStepVal
    'a:id'?: string
  }
  children: []
}

export interface AnimationElementChoice extends UnistNode {
  type: 'element'
  name: 'a:animationElementChoice'
  attributes: Record<string, never>
  children: RequiredMap<AnimationElementChoiceMap>[]
}

export interface AnimationElementChoiceMap {
  chart: AnimationChartElement
  dgm: AnimationDgmElement
}

export interface AnimationGraphicalObjectBuildProperties extends UnistNode {
  type: 'element'
  name: 'a:animationGraphicalObjectBuildProperties'
  attributes: Record<string, never>
  children: RequiredMap<AnimationGraphicalObjectBuildPropertiesMap>[]
}

export interface AnimationGraphicalObjectBuildPropertiesMap {
  bldChart: AnimationChartBuildProperties
  bldDgm: AnimationDgmBuildProperties
}

export interface AudioCD extends UnistNode {
  type: 'element'
  name: 'a:audioCD'
  attributes: Record<string, never>
  children: RequiredMap<AudioCDMap>[]
}

export interface AudioCDMap {
  end: AudioCDTime
  extLst?: OfficeArtExtensionList
  st: AudioCDTime
}

export interface AudioCDTime extends UnistNode {
  type: 'element'
  name: 'a:audioCDTime'
  attributes: {
    'a:time'?: string
    'a:track': string
  }
  children: []
}

export interface AudioFile extends UnistNode {
  type: 'element'
  name: 'a:audioFile'
  attributes: {
    'a:contentType'?: string
    'a:link': string
  }
  children: RequiredMap<AudioFileMap>[]
}

export interface AudioFileMap {
  extLst?: OfficeArtExtensionList
}

export interface Backdrop extends UnistNode {
  type: 'element'
  name: 'a:backdrop'
  attributes: Record<string, never>
  children: RequiredMap<BackdropMap>[]
}

export interface BackdropMap {
  anchor: Point3D
  extLst?: OfficeArtExtensionList
  norm: Vector3D
  up: Vector3D
}

export interface BackgroundFillStyleList extends UnistNode {
  type: 'element'
  name: 'a:backgroundFillStyleList'
  attributes: Record<string, never>
  children: RequiredMap<BackgroundFillStyleListMap>[]
}

export interface BackgroundFillStyleListMap {
  blipFill: BlipFillProperties[]
  gradFill: GradientFillProperties[]
  grpFill: GroupFillProperties[]
  noFill: NoFillProperties[]
  pattFill: PatternFillProperties[]
  solidFill: SolidColorFillProperties[]
}

export interface BackgroundFormatting extends UnistNode {
  type: 'element'
  name: 'a:backgroundFormatting'
  attributes: Record<string, never>
  children: RequiredMap<BackgroundFormattingMap>[]
}

export interface BackgroundFormattingMap {
  blipFill?: BlipFillProperties
  effectDag?: EffectContainer
  effectLst?: EffectList
  gradFill?: GradientFillProperties
  grpFill?: GroupFillProperties
  noFill?: NoFillProperties
  pattFill?: PatternFillProperties
  solidFill?: SolidColorFillProperties
}

export interface BaseStyles extends UnistNode {
  type: 'element'
  name: 'a:baseStyles'
  attributes: Record<string, never>
  children: RequiredMap<BaseStylesMap>[]
}

export interface BaseStylesMap {
  clrScheme: ColorScheme
  extLst?: OfficeArtExtensionList
  fmtScheme: StyleMatrix
  fontScheme: FontScheme
}

export interface BaseStylesOverride extends UnistNode {
  type: 'element'
  name: 'a:baseStylesOverride'
  attributes: Record<string, never>
  children: RequiredMap<BaseStylesOverrideMap>[]
}

export interface BaseStylesOverrideMap {
  clrScheme?: ColorScheme
  fmtScheme?: StyleMatrix
  fontScheme?: FontScheme
}

export interface Bevel extends UnistNode {
  type: 'element'
  name: 'a:bevel'
  attributes: {
    'a:h'?: string
    'a:prst'?: BevelPresetTypeVal
    'a:w'?: string
  }
  children: []
}

export interface BiLevelEffect extends UnistNode {
  type: 'element'
  name: 'a:biLevelEffect'
  attributes: {
    'a:thresh': string
  }
  children: []
}

export interface BlendEffect extends UnistNode {
  type: 'element'
  name: 'a:blendEffect'
  attributes: {
    'a:blend': BlendModeVal
  }
  children: RequiredMap<BlendEffectMap>[]
}

export interface BlendEffectMap {
  cont: EffectContainer
}

export interface Blip extends UnistNode {
  type: 'element'
  name: 'a:blip'
  attributes: {
    'a:cstate'?: BlipCompressionVal
    'a:embed'?: string
    'a:link'?: string
  }
  children: RequiredMap<BlipMap>[]
}

export interface BlipMap {
  alphaBiLevel?: AlphaBiLevelEffect[]
  alphaCeiling?: AlphaCeilingEffect[]
  alphaFloor?: AlphaFloorEffect[]
  alphaInv?: AlphaInverseEffect[]
  alphaMod?: AlphaModulateEffect[]
  alphaModFix?: AlphaModulateFixedEffect[]
  alphaRepl?: AlphaReplaceEffect[]
  biLevel?: BiLevelEffect[]
  blur?: BlurEffect[]
  clrChange?: ColorChangeEffect[]
  clrRepl?: ColorReplaceEffect[]
  duotone?: DuotoneEffect[]
  extLst?: OfficeArtExtensionList
  fillOverlay?: FillOverlayEffect[]
  grayscl?: GrayscaleEffect[]
  hsl?: HSLEffect[]
  lum?: LuminanceEffect[]
  tint?: TintEffect[]
}

export interface BlipFillProperties extends UnistNode {
  type: 'element'
  name: 'a:blipFillProperties'
  attributes: {
    'a:dpi'?: string
    'a:rotWithShape'?: string
  }
  children: RequiredMap<BlipFillPropertiesMap>[]
}

export interface BlipFillPropertiesMap {
  blip?: Blip
  srcRect?: RelativeRect
  stretch?: StretchInfoProperties
  tile?: TileInfoProperties
}

export interface BlurEffect extends UnistNode {
  type: 'element'
  name: 'a:blurEffect'
  attributes: {
    'a:grow'?: string
    'a:rad'?: string
  }
  children: []
}

export interface Boolean extends UnistNode {
  type: 'element'
  name: 'a:boolean'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface Camera extends UnistNode {
  type: 'element'
  name: 'a:camera'
  attributes: {
    'a:fov'?: string
    'a:prst': PresetCameraTypeVal
    'a:zoom'?: string
  }
  children: RequiredMap<CameraMap>[]
}

export interface CameraMap {
  rot?: SphereCoords
}

export interface Cell3D extends UnistNode {
  type: 'element'
  name: 'a:cell3D'
  attributes: {
    'a:prstMaterial'?: PresetMaterialTypeVal
  }
  children: RequiredMap<Cell3DMap>[]
}

export interface Cell3DMap {
  bevel: Bevel
  extLst?: OfficeArtExtensionList
  lightRig?: LightRig
}

export interface ClipboardStyleSheet extends UnistNode {
  type: 'element'
  name: 'a:clipboardStyleSheet'
  attributes: Record<string, never>
  children: RequiredMap<ClipboardStyleSheetMap>[]
}

export interface ClipboardStyleSheetMap {
  clrMap: ColorMapping
  themeElements: BaseStyles
}

export interface Color extends UnistNode {
  type: 'element'
  name: 'a:color'
  attributes: Record<string, never>
  children: RequiredMap<ColorMap>[]
}

export interface ColorMap {
  hslClr: HslColor
  prstClr: PresetColor
  schemeClr: SchemeColor
  scrgbClr: ScRgbColor
  srgbClr: SRgbColor
  sysClr: SystemColor
}

export interface ColorChangeEffect extends UnistNode {
  type: 'element'
  name: 'a:colorChangeEffect'
  attributes: {
    'a:useA'?: string
  }
  children: RequiredMap<ColorChangeEffectMap>[]
}

export interface ColorChangeEffectMap {
  clrFrom: Color
  clrTo: Color
}

export interface ColorMapping extends UnistNode {
  type: 'element'
  name: 'a:colorMapping'
  attributes: {
    'a:accent1': ColorSchemeIndexVal
    'a:accent2': ColorSchemeIndexVal
    'a:accent3': ColorSchemeIndexVal
    'a:accent4': ColorSchemeIndexVal
    'a:accent5': ColorSchemeIndexVal
    'a:accent6': ColorSchemeIndexVal
    'a:bg1': ColorSchemeIndexVal
    'a:bg2': ColorSchemeIndexVal
    'a:folHlink': ColorSchemeIndexVal
    'a:hlink': ColorSchemeIndexVal
    'a:tx1': ColorSchemeIndexVal
    'a:tx2': ColorSchemeIndexVal
  }
  children: RequiredMap<ColorMappingMap>[]
}

export interface ColorMappingMap {
  extLst?: OfficeArtExtensionList
}

export interface ColorMappingOverride extends UnistNode {
  type: 'element'
  name: 'a:colorMappingOverride'
  attributes: Record<string, never>
  children: RequiredMap<ColorMappingOverrideMap>[]
}

export interface ColorMappingOverrideMap {
  masterClrMapping: EmptyElement
  overrideClrMapping: ColorMapping
}

export interface ColorMRU extends UnistNode {
  type: 'element'
  name: 'a:colorMRU'
  attributes: Record<string, never>
  children: RequiredMap<ColorMRUMap>[]
}

export interface ColorMRUMap {
  hslClr?: HslColor[]
  prstClr?: PresetColor[]
  schemeClr?: SchemeColor[]
  scrgbClr?: ScRgbColor[]
  srgbClr?: SRgbColor[]
  sysClr?: SystemColor[]
}

export interface ColorReplaceEffect extends UnistNode {
  type: 'element'
  name: 'a:colorReplaceEffect'
  attributes: Record<string, never>
  children: RequiredMap<ColorReplaceEffectMap>[]
}

export interface ColorReplaceEffectMap {
  hslClr: HslColor
  prstClr: PresetColor
  schemeClr: SchemeColor
  scrgbClr: ScRgbColor
  srgbClr: SRgbColor
  sysClr: SystemColor
}

export interface ColorScheme extends UnistNode {
  type: 'element'
  name: 'a:colorScheme'
  attributes: {
    'a:name': string
  }
  children: RequiredMap<ColorSchemeMap>[]
}

export interface ColorSchemeMap {
  accent1: Color
  accent2: Color
  accent3: Color
  accent4: Color
  accent5: Color
  accent6: Color
  dk1: Color
  dk2: Color
  extLst?: OfficeArtExtensionList
  folHlink: Color
  hlink: Color
  lt1: Color
  lt2: Color
}

export interface ColorSchemeAndMapping extends UnistNode {
  type: 'element'
  name: 'a:colorSchemeAndMapping'
  attributes: Record<string, never>
  children: RequiredMap<ColorSchemeAndMappingMap>[]
}

export interface ColorSchemeAndMappingMap {
  clrMap?: ColorMapping
  clrScheme: ColorScheme
}

export interface ColorSchemeList extends UnistNode {
  type: 'element'
  name: 'a:colorSchemeList'
  attributes: Record<string, never>
  children: RequiredMap<ColorSchemeListMap>[]
}

export interface ColorSchemeListMap {
  extraClrScheme?: ColorSchemeAndMapping[]
}

export interface ComplementTransform extends UnistNode {
  type: 'element'
  name: 'a:complementTransform'
}

export interface Connection extends UnistNode {
  type: 'element'
  name: 'a:connection'
  attributes: {
    'a:id': string
    'a:idx': string
  }
  children: []
}

export interface ConnectionSite extends UnistNode {
  type: 'element'
  name: 'a:connectionSite'
  attributes: {
    'a:ang': string
  }
  children: RequiredMap<ConnectionSiteMap>[]
}

export interface ConnectionSiteMap {
  pos: AdjPoint2D
}

export interface ConnectionSiteList extends UnistNode {
  type: 'element'
  name: 'a:connectionSiteList'
  attributes: Record<string, never>
  children: RequiredMap<ConnectionSiteListMap>[]
}

export interface ConnectionSiteListMap {
  cxn?: ConnectionSite[]
}

export interface ConnectorLocking extends UnistNode {
  type: 'element'
  name: 'a:connectorLocking'
  attributes: {
    'a:noAdjustHandles'?: string
    'a:noChangeArrowheads'?: string
    'a:noChangeAspect'?: string
    'a:noChangeShapeType'?: string
    'a:noEditPoints'?: string
    'a:noGrp'?: string
    'a:noMove'?: string
    'a:noResize'?: string
    'a:noRot'?: string
    'a:noSelect'?: string
  }
  children: RequiredMap<ConnectorLockingMap>[]
}

export interface ConnectorLockingMap {
  extLst?: OfficeArtExtensionList
}

export interface ContentPartLocking extends UnistNode {
  type: 'element'
  name: 'a:contentPartLocking'
  attributes: {
    'a:noAdjustHandles'?: string
    'a:noChangeArrowheads'?: string
    'a:noChangeAspect'?: string
    'a:noChangeShapeType'?: string
    'a:noEditPoints'?: string
    'a:noGrp'?: string
    'a:noMove'?: string
    'a:noResize'?: string
    'a:noRot'?: string
    'a:noSelect'?: string
  }
  children: RequiredMap<ContentPartLockingMap>[]
}

export interface ContentPartLockingMap {
  extLst?: OfficeArtExtensionList
}

export interface CustomColor extends UnistNode {
  type: 'element'
  name: 'a:customColor'
  attributes: {
    'a:name'?: string
  }
  children: RequiredMap<CustomColorMap>[]
}

export interface CustomColorMap {
  hslClr: HslColor
  prstClr: PresetColor
  schemeClr: SchemeColor
  scrgbClr: ScRgbColor
  srgbClr: SRgbColor
  sysClr: SystemColor
}

export interface CustomColorList extends UnistNode {
  type: 'element'
  name: 'a:customColorList'
  attributes: Record<string, never>
  children: RequiredMap<CustomColorListMap>[]
}

export interface CustomColorListMap {
  custClr?: CustomColor[]
}

export interface CustomGeometry2D extends UnistNode {
  type: 'element'
  name: 'a:customGeometry2D'
  attributes: Record<string, never>
  children: RequiredMap<CustomGeometry2DMap>[]
}

export interface CustomGeometry2DMap {
  ahLst?: AdjustHandleList
  avLst?: GeomGuideList
  cxnLst?: ConnectionSiteList
  gdLst?: GeomGuideList
  pathLst: Path2DList
  rect?: GeomRect
}

export interface DashStop extends UnistNode {
  type: 'element'
  name: 'a:dashStop'
  attributes: {
    'a:d': string
    'a:sp': string
  }
  children: []
}

export interface DashStopList extends UnistNode {
  type: 'element'
  name: 'a:dashStopList'
  attributes: Record<string, never>
  children: RequiredMap<DashStopListMap>[]
}

export interface DashStopListMap {
  ds?: DashStop[]
}

export interface DefaultShapeDefinition extends UnistNode {
  type: 'element'
  name: 'a:defaultShapeDefinition'
  attributes: Record<string, never>
  children: RequiredMap<DefaultShapeDefinitionMap>[]
}

export interface DefaultShapeDefinitionMap {
  bodyPr: TextBodyProperties
  extLst?: OfficeArtExtensionList
  lstStyle: TextListStyle
  spPr: ShapeProperties
  style?: ShapeStyle
}

export interface DuotoneEffect extends UnistNode {
  type: 'element'
  name: 'a:duotoneEffect'
  attributes: Record<string, never>
  children: RequiredMap<DuotoneEffectMap>[]
}

export interface DuotoneEffectMap {
  hslClr: HslColor[]
  prstClr: PresetColor[]
  schemeClr: SchemeColor[]
  scrgbClr: ScRgbColor[]
  srgbClr: SRgbColor[]
  sysClr: SystemColor[]
}

export interface EffectContainer extends UnistNode {
  type: 'element'
  name: 'a:effectContainer'
  attributes: {
    'a:name'?: string
    'a:type'?: EffectContainerTypeVal
  }
  children: RequiredMap<EffectContainerMap>[]
}

export interface EffectContainerMap {
  alphaBiLevel?: AlphaBiLevelEffect[]
  alphaCeiling?: AlphaCeilingEffect[]
  alphaFloor?: AlphaFloorEffect[]
  alphaInv?: AlphaInverseEffect[]
  alphaMod?: AlphaModulateEffect[]
  alphaModFix?: AlphaModulateFixedEffect[]
  alphaOutset?: AlphaOutsetEffect[]
  alphaRepl?: AlphaReplaceEffect[]
  biLevel?: BiLevelEffect[]
  blend?: BlendEffect[]
  blur?: BlurEffect[]
  clrChange?: ColorChangeEffect[]
  clrRepl?: ColorReplaceEffect[]
  cont?: EffectContainer[]
  duotone?: DuotoneEffect[]
  effect?: EffectReference[]
  fill?: FillEffect[]
  fillOverlay?: FillOverlayEffect[]
  glow?: GlowEffect[]
  grayscl?: GrayscaleEffect[]
  hsl?: HSLEffect[]
  innerShdw?: InnerShadowEffect[]
  lum?: LuminanceEffect[]
  outerShdw?: OuterShadowEffect[]
  prstShdw?: PresetShadowEffect[]
  reflection?: ReflectionEffect[]
  relOff?: RelativeOffsetEffect[]
  softEdge?: SoftEdgesEffect[]
  tint?: TintEffect[]
  xfrm?: TransformEffect[]
}

export interface EffectList extends UnistNode {
  type: 'element'
  name: 'a:effectList'
  attributes: Record<string, never>
  children: RequiredMap<EffectListMap>[]
}

export interface EffectListMap {
  blur?: BlurEffect
  fillOverlay?: FillOverlayEffect
  glow?: GlowEffect
  innerShdw?: InnerShadowEffect
  outerShdw?: OuterShadowEffect
  prstShdw?: PresetShadowEffect
  reflection?: ReflectionEffect
  softEdge?: SoftEdgesEffect
}

export interface EffectProperties extends UnistNode {
  type: 'element'
  name: 'a:effectProperties'
  attributes: Record<string, never>
  children: RequiredMap<EffectPropertiesMap>[]
}

export interface EffectPropertiesMap {
  effectDag: EffectContainer
  effectLst: EffectList
}

export interface EffectReference extends UnistNode {
  type: 'element'
  name: 'a:effectReference'
  attributes: {
    'a:ref': string
  }
  children: []
}

export interface EffectStyleItem extends UnistNode {
  type: 'element'
  name: 'a:effectStyleItem'
  attributes: Record<string, never>
  children: RequiredMap<EffectStyleItemMap>[]
}

export interface EffectStyleItemMap {
  effectDag: EffectContainer
  effectLst: EffectList
  scene3d?: Scene3D
  sp3d?: Shape3D
}

export interface EffectStyleList extends UnistNode {
  type: 'element'
  name: 'a:effectStyleList'
  attributes: Record<string, never>
  children: RequiredMap<EffectStyleListMap>[]
}

export interface EffectStyleListMap {
  effectStyle: EffectStyleItem[]
}

export interface EmbeddedWAVAudioFile extends UnistNode {
  type: 'element'
  name: 'a:embeddedWAVAudioFile'
  attributes: {
    'a:embed': string
    'a:name'?: string
  }
  children: []
}

export interface EmptyElement extends UnistNode {
  type: 'element'
  name: 'a:emptyElement'
}

export interface FillEffect extends UnistNode {
  type: 'element'
  name: 'a:fillEffect'
  attributes: Record<string, never>
  children: RequiredMap<FillEffectMap>[]
}

export interface FillEffectMap {
  blipFill: BlipFillProperties
  gradFill: GradientFillProperties
  grpFill: GroupFillProperties
  noFill: NoFillProperties
  pattFill: PatternFillProperties
  solidFill: SolidColorFillProperties
}

export interface FillOverlayEffect extends UnistNode {
  type: 'element'
  name: 'a:fillOverlayEffect'
  attributes: {
    'a:blend': BlendModeVal
  }
  children: RequiredMap<FillOverlayEffectMap>[]
}

export interface FillOverlayEffectMap {
  blipFill: BlipFillProperties
  gradFill: GradientFillProperties
  grpFill: GroupFillProperties
  noFill: NoFillProperties
  pattFill: PatternFillProperties
  solidFill: SolidColorFillProperties
}

export interface FillProperties extends UnistNode {
  type: 'element'
  name: 'a:fillProperties'
  attributes: Record<string, never>
  children: RequiredMap<FillPropertiesMap>[]
}

export interface FillPropertiesMap {
  blipFill: BlipFillProperties
  gradFill: GradientFillProperties
  grpFill: GroupFillProperties
  noFill: NoFillProperties
  pattFill: PatternFillProperties
  solidFill: SolidColorFillProperties
}

export interface FillStyleList extends UnistNode {
  type: 'element'
  name: 'a:fillStyleList'
  attributes: Record<string, never>
  children: RequiredMap<FillStyleListMap>[]
}

export interface FillStyleListMap {
  blipFill: BlipFillProperties[]
  gradFill: GradientFillProperties[]
  grpFill: GroupFillProperties[]
  noFill: NoFillProperties[]
  pattFill: PatternFillProperties[]
  solidFill: SolidColorFillProperties[]
}

export interface FixedPercentage extends UnistNode {
  type: 'element'
  name: 'a:fixedPercentage'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface FlatText extends UnistNode {
  type: 'element'
  name: 'a:flatText'
  attributes: {
    'a:z'?: string
  }
  children: []
}

export interface FontCollection extends UnistNode {
  type: 'element'
  name: 'a:fontCollection'
  attributes: Record<string, never>
  children: RequiredMap<FontCollectionMap>[]
}

export interface FontCollectionMap {
  cs: TextFont
  ea: TextFont
  extLst?: OfficeArtExtensionList
  font?: SupplementalFont[]
  latin: TextFont
}

export interface FontReference extends UnistNode {
  type: 'element'
  name: 'a:fontReference'
  attributes: {
    'a:idx': FontCollectionIndexVal
  }
  children: RequiredMap<FontReferenceMap>[]
}

export interface FontReferenceMap {
  hslClr?: HslColor
  prstClr?: PresetColor
  schemeClr?: SchemeColor
  scrgbClr?: ScRgbColor
  srgbClr?: SRgbColor
  sysClr?: SystemColor
}

export interface FontScheme extends UnistNode {
  type: 'element'
  name: 'a:fontScheme'
  attributes: {
    'a:name': string
  }
  children: RequiredMap<FontSchemeMap>[]
}

export interface FontSchemeMap {
  extLst?: OfficeArtExtensionList
  majorFont: FontCollection
  minorFont: FontCollection
}

export interface GammaTransform extends UnistNode {
  type: 'element'
  name: 'a:gammaTransform'
}

export interface GeomGuide extends UnistNode {
  type: 'element'
  name: 'a:geomGuide'
  attributes: {
    'a:fmla': string
    'a:name': string
  }
  children: []
}

export interface GeomGuideList extends UnistNode {
  type: 'element'
  name: 'a:geomGuideList'
  attributes: Record<string, never>
  children: RequiredMap<GeomGuideListMap>[]
}

export interface GeomGuideListMap {
  gd?: GeomGuide[]
}

export interface GeomRect extends UnistNode {
  type: 'element'
  name: 'a:geomRect'
  attributes: {
    'a:b': string
    'a:l': string
    'a:r': string
    'a:t': string
  }
  children: []
}

export interface GlowEffect extends UnistNode {
  type: 'element'
  name: 'a:glowEffect'
  attributes: {
    'a:rad'?: string
  }
  children: RequiredMap<GlowEffectMap>[]
}

export interface GlowEffectMap {
  hslClr: HslColor
  prstClr: PresetColor
  schemeClr: SchemeColor
  scrgbClr: ScRgbColor
  srgbClr: SRgbColor
  sysClr: SystemColor
}

export interface GradientFillProperties extends UnistNode {
  type: 'element'
  name: 'a:gradientFillProperties'
  attributes: {
    'a:flip'?: TileFlipModeVal
    'a:rotWithShape'?: string
  }
  children: RequiredMap<GradientFillPropertiesMap>[]
}

export interface GradientFillPropertiesMap {
  gsLst?: GradientStopList
  lin?: LinearShadeProperties
  path?: PathShadeProperties
  tileRect?: RelativeRect
}

export interface GradientStop extends UnistNode {
  type: 'element'
  name: 'a:gradientStop'
  attributes: {
    'a:pos': string
  }
  children: RequiredMap<GradientStopMap>[]
}

export interface GradientStopMap {
  hslClr: HslColor
  prstClr: PresetColor
  schemeClr: SchemeColor
  scrgbClr: ScRgbColor
  srgbClr: SRgbColor
  sysClr: SystemColor
}

export interface GradientStopList extends UnistNode {
  type: 'element'
  name: 'a:gradientStopList'
  attributes: Record<string, never>
  children: RequiredMap<GradientStopListMap>[]
}

export interface GradientStopListMap {
  gs: GradientStop[]
}

export interface GraphicalObject extends UnistNode {
  type: 'element'
  name: 'a:graphicalObject'
  attributes: Record<string, never>
  children: RequiredMap<GraphicalObjectMap>[]
}

export interface GraphicalObjectMap {
  graphicData: GraphicalObjectData
}

export interface GraphicalObjectData extends UnistNode {
  type: 'element'
  name: 'a:graphicalObjectData'
  attributes: {
    'a:uri': string
  }
  children: []
}

export interface GraphicalObjectFrameLocking extends UnistNode {
  type: 'element'
  name: 'a:graphicalObjectFrameLocking'
  attributes: {
    'a:noChangeAspect'?: string
    'a:noDrilldown'?: string
    'a:noGrp'?: string
    'a:noMove'?: string
    'a:noResize'?: string
    'a:noSelect'?: string
  }
  children: RequiredMap<GraphicalObjectFrameLockingMap>[]
}

export interface GraphicalObjectFrameLockingMap {
  extLst?: OfficeArtExtensionList
}

export interface GrayscaleEffect extends UnistNode {
  type: 'element'
  name: 'a:grayscaleEffect'
}

export interface GrayscaleTransform extends UnistNode {
  type: 'element'
  name: 'a:grayscaleTransform'
}

export interface GroupFillProperties extends UnistNode {
  type: 'element'
  name: 'a:groupFillProperties'
}

export interface GroupLocking extends UnistNode {
  type: 'element'
  name: 'a:groupLocking'
  attributes: {
    'a:noChangeAspect'?: string
    'a:noGrp'?: string
    'a:noMove'?: string
    'a:noResize'?: string
    'a:noRot'?: string
    'a:noSelect'?: string
    'a:noUngrp'?: string
  }
  children: RequiredMap<GroupLockingMap>[]
}

export interface GroupLockingMap {
  extLst?: OfficeArtExtensionList
}

export interface GroupShapeProperties extends UnistNode {
  type: 'element'
  name: 'a:groupShapeProperties'
  attributes: {
    'a:bwMode'?: BlackWhiteModeVal
  }
  children: RequiredMap<GroupShapePropertiesMap>[]
}

export interface GroupShapePropertiesMap {
  blipFill?: BlipFillProperties
  effectDag?: EffectContainer
  effectLst?: EffectList
  extLst?: OfficeArtExtensionList
  gradFill?: GradientFillProperties
  grpFill?: GroupFillProperties
  noFill?: NoFillProperties
  pattFill?: PatternFillProperties
  scene3d?: Scene3D
  solidFill?: SolidColorFillProperties
  xfrm?: GroupTransform2D
}

export interface GroupTransform2D extends UnistNode {
  type: 'element'
  name: 'a:groupTransform2D'
  attributes: {
    'a:flipH'?: string
    'a:flipV'?: string
    'a:rot'?: string
  }
  children: RequiredMap<GroupTransform2DMap>[]
}

export interface GroupTransform2DMap {
  chExt?: PositiveSize2D
  chOff?: Point2D
  ext?: PositiveSize2D
  off?: Point2D
}

export interface GvmlConnector extends UnistNode {
  type: 'element'
  name: 'a:gvmlConnector'
  attributes: Record<string, never>
  children: RequiredMap<GvmlConnectorMap>[]
}

export interface GvmlConnectorMap {
  extLst?: OfficeArtExtensionList
  nvCxnSpPr: GvmlConnectorNonVisual
  spPr: ShapeProperties
  style?: ShapeStyle
}

export interface GvmlConnectorNonVisual extends UnistNode {
  type: 'element'
  name: 'a:gvmlConnectorNonVisual'
  attributes: Record<string, never>
  children: RequiredMap<GvmlConnectorNonVisualMap>[]
}

export interface GvmlConnectorNonVisualMap {
  cNvCxnSpPr: NonVisualConnectorProperties
  cNvPr: NonVisualDrawingProps
}

export interface GvmlGraphicalObjectFrame extends UnistNode {
  type: 'element'
  name: 'a:gvmlGraphicalObjectFrame'
  attributes: Record<string, never>
  children: RequiredMap<GvmlGraphicalObjectFrameMap>[]
}

export interface GvmlGraphicalObjectFrameMap {
  extLst?: OfficeArtExtensionList
  graphic: GraphicalObject
  nvGraphicFramePr: GvmlGraphicFrameNonVisual
  xfrm: Transform2D
}

export interface GvmlGraphicFrameNonVisual extends UnistNode {
  type: 'element'
  name: 'a:gvmlGraphicFrameNonVisual'
  attributes: Record<string, never>
  children: RequiredMap<GvmlGraphicFrameNonVisualMap>[]
}

export interface GvmlGraphicFrameNonVisualMap {
  cNvGraphicFramePr: NonVisualGraphicFrameProperties
  cNvPr: NonVisualDrawingProps
}

export interface GvmlGroupShape extends UnistNode {
  type: 'element'
  name: 'a:gvmlGroupShape'
  attributes: Record<string, never>
  children: RequiredMap<GvmlGroupShapeMap>[]
}

export interface GvmlGroupShapeMap {
  cxnSp?: GvmlConnector[]
  extLst?: OfficeArtExtensionList
  graphicFrame?: GvmlGraphicalObjectFrame[]
  grpSp?: GvmlGroupShape[]
  grpSpPr: GroupShapeProperties
  nvGrpSpPr: GvmlGroupShapeNonVisual
  pic?: GvmlPicture[]
  sp?: GvmlShape[]
  txSp?: GvmlTextShape[]
}

export interface GvmlGroupShapeNonVisual extends UnistNode {
  type: 'element'
  name: 'a:gvmlGroupShapeNonVisual'
  attributes: Record<string, never>
  children: RequiredMap<GvmlGroupShapeNonVisualMap>[]
}

export interface GvmlGroupShapeNonVisualMap {
  cNvGrpSpPr: NonVisualGroupDrawingShapeProps
  cNvPr: NonVisualDrawingProps
}

export interface GvmlPicture extends UnistNode {
  type: 'element'
  name: 'a:gvmlPicture'
  attributes: Record<string, never>
  children: RequiredMap<GvmlPictureMap>[]
}

export interface GvmlPictureMap {
  blipFill: BlipFillProperties
  extLst?: OfficeArtExtensionList
  nvPicPr: GvmlPictureNonVisual
  spPr: ShapeProperties
  style?: ShapeStyle
}

export interface GvmlPictureNonVisual extends UnistNode {
  type: 'element'
  name: 'a:gvmlPictureNonVisual'
  attributes: Record<string, never>
  children: RequiredMap<GvmlPictureNonVisualMap>[]
}

export interface GvmlPictureNonVisualMap {
  cNvPicPr: NonVisualPictureProperties
  cNvPr: NonVisualDrawingProps
}

export interface GvmlShape extends UnistNode {
  type: 'element'
  name: 'a:gvmlShape'
  attributes: Record<string, never>
  children: RequiredMap<GvmlShapeMap>[]
}

export interface GvmlShapeMap {
  extLst?: OfficeArtExtensionList
  nvSpPr: GvmlShapeNonVisual
  spPr: ShapeProperties
  style?: ShapeStyle
  txSp?: GvmlTextShape
}

export interface GvmlShapeNonVisual extends UnistNode {
  type: 'element'
  name: 'a:gvmlShapeNonVisual'
  attributes: Record<string, never>
  children: RequiredMap<GvmlShapeNonVisualMap>[]
}

export interface GvmlShapeNonVisualMap {
  cNvPr: NonVisualDrawingProps
  cNvSpPr: NonVisualDrawingShapeProps
}

export interface GvmlTextShape extends UnistNode {
  type: 'element'
  name: 'a:gvmlTextShape'
  attributes: Record<string, never>
  children: RequiredMap<GvmlTextShapeMap>[]
}

export interface GvmlTextShapeMap {
  extLst?: OfficeArtExtensionList
  txBody: TextBody
  useSpRect: GvmlUseShapeRectangle
  xfrm: Transform2D
}

export interface GvmlUseShapeRectangle extends UnistNode {
  type: 'element'
  name: 'a:gvmlUseShapeRectangle'
}

export interface Headers extends UnistNode {
  type: 'element'
  name: 'a:headers'
  attributes: Record<string, never>
  children: RequiredMap<HeadersMap>[]
}

export interface HeadersMap {
  header?: string[]
}

export interface HslColor extends UnistNode {
  type: 'element'
  name: 'a:hslColor'
  attributes: {
    $hue: string
    $lum: string
    $sat: string
  }
  children: RequiredMap<HslColorMap>[]
}

export interface HslColorMap {
  alpha?: PositiveFixedPercentage[]
  alphaMod?: PositivePercentage[]
  alphaOff?: FixedPercentage[]
  blue?: Percentage[]
  blueMod?: Percentage[]
  blueOff?: Percentage[]
  comp?: ComplementTransform[]
  gamma?: GammaTransform[]
  gray?: GrayscaleTransform[]
  green?: Percentage[]
  greenMod?: Percentage[]
  greenOff?: Percentage[]
  hue?: PositiveFixedAngle[]
  hueMod?: PositivePercentage[]
  hueOff?: Angle[]
  inv?: InverseTransform[]
  invGamma?: InverseGammaTransform[]
  lum?: Percentage[]
  lumMod?: Percentage[]
  lumOff?: Percentage[]
  red?: Percentage[]
  redMod?: Percentage[]
  redOff?: Percentage[]
  sat?: Percentage[]
  satMod?: Percentage[]
  satOff?: Percentage[]
  shade?: PositiveFixedPercentage[]
  tint?: PositiveFixedPercentage[]
}

export interface HSLEffect extends UnistNode {
  type: 'element'
  name: 'a:hSLEffect'
  attributes: {
    'a:hue'?: string
    'a:lum'?: string
    'a:sat'?: string
  }
  children: []
}

export interface Hyperlink extends UnistNode {
  type: 'element'
  name: 'a:hyperlink'
  attributes: {
    'a:action'?: string
    'a:endSnd'?: string
    'a:highlightClick'?: string
    'a:history'?: string
    'a:id'?: string
    'a:invalidUrl'?: string
    'a:tgtFrame'?: string
    'a:tooltip'?: string
  }
  children: RequiredMap<HyperlinkMap>[]
}

export interface HyperlinkMap {
  extLst?: OfficeArtExtensionList
  snd?: EmbeddedWAVAudioFile
}

export interface InnerShadowEffect extends UnistNode {
  type: 'element'
  name: 'a:innerShadowEffect'
  attributes: {
    'a:blurRad'?: string
    'a:dir'?: string
    'a:dist'?: string
  }
  children: RequiredMap<InnerShadowEffectMap>[]
}

export interface InnerShadowEffectMap {
  hslClr: HslColor
  prstClr: PresetColor
  schemeClr: SchemeColor
  scrgbClr: ScRgbColor
  srgbClr: SRgbColor
  sysClr: SystemColor
}

export interface InverseGammaTransform extends UnistNode {
  type: 'element'
  name: 'a:inverseGammaTransform'
}

export interface InverseTransform extends UnistNode {
  type: 'element'
  name: 'a:inverseTransform'
}

export interface LightRig extends UnistNode {
  type: 'element'
  name: 'a:lightRig'
  attributes: {
    'a:dir': LightRigDirectionVal
    'a:rig': LightRigTypeVal
  }
  children: RequiredMap<LightRigMap>[]
}

export interface LightRigMap {
  rot?: SphereCoords
}

export interface LinearShadeProperties extends UnistNode {
  type: 'element'
  name: 'a:linearShadeProperties'
  attributes: {
    'a:ang'?: string
    'a:scaled'?: string
  }
  children: []
}

export interface LineEndProperties extends UnistNode {
  type: 'element'
  name: 'a:lineEndProperties'
  attributes: {
    'a:len'?: LineEndLengthVal
    'a:type'?: LineEndTypeVal
    'a:w'?: LineEndWidthVal
  }
  children: []
}

export interface LineJoinBevel extends UnistNode {
  type: 'element'
  name: 'a:lineJoinBevel'
}

export interface LineJoinMiterProperties extends UnistNode {
  type: 'element'
  name: 'a:lineJoinMiterProperties'
  attributes: {
    'a:lim'?: string
  }
  children: []
}

export interface LineJoinRound extends UnistNode {
  type: 'element'
  name: 'a:lineJoinRound'
}

export interface LineProperties extends UnistNode {
  type: 'element'
  name: 'a:lineProperties'
  attributes: {
    'a:algn'?: PenAlignmentVal
    'a:cap'?: LineCapVal
    'a:cmpd'?: CompoundLineVal
    'a:w'?: string
  }
  children: RequiredMap<LinePropertiesMap>[]
}

export interface LinePropertiesMap {
  bevel?: LineJoinBevel
  custDash?: DashStopList
  extLst?: OfficeArtExtensionList
  gradFill?: GradientFillProperties
  headEnd?: LineEndProperties
  miter?: LineJoinMiterProperties
  noFill?: NoFillProperties
  pattFill?: PatternFillProperties
  prstDash?: PresetLineDashProperties
  round?: LineJoinRound
  solidFill?: SolidColorFillProperties
  tailEnd?: LineEndProperties
}

export interface LineStyleList extends UnistNode {
  type: 'element'
  name: 'a:lineStyleList'
  attributes: Record<string, never>
  children: RequiredMap<LineStyleListMap>[]
}

export interface LineStyleListMap {
  ln: LineProperties[]
}

export interface LuminanceEffect extends UnistNode {
  type: 'element'
  name: 'a:luminanceEffect'
  attributes: {
    'a:bright'?: string
    'a:contrast'?: string
  }
  children: []
}

export interface NoFillProperties extends UnistNode {
  type: 'element'
  name: 'a:noFillProperties'
}

export interface NonVisualConnectorProperties extends UnistNode {
  type: 'element'
  name: 'a:nonVisualConnectorProperties'
  attributes: Record<string, never>
  children: RequiredMap<NonVisualConnectorPropertiesMap>[]
}

export interface NonVisualConnectorPropertiesMap {
  cxnSpLocks?: ConnectorLocking
  endCxn?: Connection
  extLst?: OfficeArtExtensionList
  stCxn?: Connection
}

export interface NonVisualContentPartProperties extends UnistNode {
  type: 'element'
  name: 'a:nonVisualContentPartProperties'
  attributes: {
    'a:isComment'?: string
  }
  children: RequiredMap<NonVisualContentPartPropertiesMap>[]
}

export interface NonVisualContentPartPropertiesMap {
  cpLocks?: ContentPartLocking
  extLst?: OfficeArtExtensionList
}

export interface NonVisualDrawingProps extends UnistNode {
  type: 'element'
  name: 'a:nonVisualDrawingProps'
  attributes: {
    'a:descr'?: string
    'a:hidden'?: string
    'a:id': string
    'a:name': string
    'a:title'?: string
  }
  children: RequiredMap<NonVisualDrawingPropsMap>[]
}

export interface NonVisualDrawingPropsMap {
  extLst?: OfficeArtExtensionList
  hlinkClick?: Hyperlink
  hlinkHover?: Hyperlink
}

export interface NonVisualDrawingShapeProps extends UnistNode {
  type: 'element'
  name: 'a:nonVisualDrawingShapeProps'
  attributes: {
    'a:txBox'?: string
  }
  children: RequiredMap<NonVisualDrawingShapePropsMap>[]
}

export interface NonVisualDrawingShapePropsMap {
  extLst?: OfficeArtExtensionList
  spLocks?: ShapeLocking
}

export interface NonVisualGraphicFrameProperties extends UnistNode {
  type: 'element'
  name: 'a:nonVisualGraphicFrameProperties'
  attributes: Record<string, never>
  children: RequiredMap<NonVisualGraphicFramePropertiesMap>[]
}

export interface NonVisualGraphicFramePropertiesMap {
  extLst?: OfficeArtExtensionList
  graphicFrameLocks?: GraphicalObjectFrameLocking
}

export interface NonVisualGroupDrawingShapeProps extends UnistNode {
  type: 'element'
  name: 'a:nonVisualGroupDrawingShapeProps'
  attributes: Record<string, never>
  children: RequiredMap<NonVisualGroupDrawingShapePropsMap>[]
}

export interface NonVisualGroupDrawingShapePropsMap {
  extLst?: OfficeArtExtensionList
  grpSpLocks?: GroupLocking
}

export interface NonVisualPictureProperties extends UnistNode {
  type: 'element'
  name: 'a:nonVisualPictureProperties'
  attributes: {
    'a:preferRelativeResize'?: string
  }
  children: RequiredMap<NonVisualPicturePropertiesMap>[]
}

export interface NonVisualPicturePropertiesMap {
  extLst?: OfficeArtExtensionList
  picLocks?: PictureLocking
}

export interface ObjectStyleDefaults extends UnistNode {
  type: 'element'
  name: 'a:objectStyleDefaults'
  attributes: Record<string, never>
  children: RequiredMap<ObjectStyleDefaultsMap>[]
}

export interface ObjectStyleDefaultsMap {
  extLst?: OfficeArtExtensionList
  lnDef?: DefaultShapeDefinition
  spDef?: DefaultShapeDefinition
  txDef?: DefaultShapeDefinition
}

export interface OfficeArtExtension extends UnistNode {
  type: 'element'
  name: 'a:officeArtExtension'
  attributes: {
    'a:uri': string
  }
  children: []
}

export interface OfficeArtExtensionList extends UnistNode {
  type: 'element'
  name: 'a:officeArtExtensionList'
  attributes: Record<string, never>
  children: RequiredMap<OfficeArtExtensionListMap>[]
}

export interface OfficeArtExtensionListMap {
  ext?: OfficeArtExtension[]
}

export interface OfficeStyleSheet extends UnistNode {
  type: 'element'
  name: 'a:officeStyleSheet'
  attributes: {
    'a:name'?: string
  }
  children: RequiredMap<OfficeStyleSheetMap>[]
}

export interface OfficeStyleSheetMap {
  custClrLst?: CustomColorList
  extLst?: OfficeArtExtensionList
  extraClrSchemeLst?: ColorSchemeList
  objectDefaults?: ObjectStyleDefaults
  themeElements: BaseStyles
}

export interface OuterShadowEffect extends UnistNode {
  type: 'element'
  name: 'a:outerShadowEffect'
  attributes: {
    'a:algn'?: RectAlignmentVal
    'a:blurRad'?: string
    'a:dir'?: string
    'a:dist'?: string
    'a:kx'?: string
    'a:ky'?: string
    'a:rotWithShape'?: string
    'a:sx'?: string
    'a:sy'?: string
  }
  children: RequiredMap<OuterShadowEffectMap>[]
}

export interface OuterShadowEffectMap {
  hslClr: HslColor
  prstClr: PresetColor
  schemeClr: SchemeColor
  scrgbClr: ScRgbColor
  srgbClr: SRgbColor
  sysClr: SystemColor
}

export interface Path2D extends UnistNode {
  type: 'element'
  name: 'a:path2D'
  attributes: {
    'a:extrusionOk'?: string
    'a:fill'?: PathFillModeVal
    'a:h'?: string
    'a:stroke'?: string
    'a:w'?: string
  }
  children: RequiredMap<Path2DMap>[]
}

export interface Path2DMap {
  arcTo?: Path2DArcTo[]
  close?: Path2DClose[]
  cubicBezTo?: Path2DCubicBezierTo[]
  lnTo?: Path2DLineTo[]
  moveTo?: Path2DMoveTo[]
  quadBezTo?: Path2DQuadBezierTo[]
}

export interface Path2DArcTo extends UnistNode {
  type: 'element'
  name: 'a:path2DArcTo'
  attributes: {
    'a:hR': string
    'a:stAng': string
    'a:swAng': string
    'a:wR': string
  }
  children: []
}

export interface Path2DClose extends UnistNode {
  type: 'element'
  name: 'a:path2DClose'
}

export interface Path2DCubicBezierTo extends UnistNode {
  type: 'element'
  name: 'a:path2DCubicBezierTo'
  attributes: Record<string, never>
  children: RequiredMap<Path2DCubicBezierToMap>[]
}

export interface Path2DCubicBezierToMap {
  pt: AdjPoint2D[]
}

export interface Path2DLineTo extends UnistNode {
  type: 'element'
  name: 'a:path2DLineTo'
  attributes: Record<string, never>
  children: RequiredMap<Path2DLineToMap>[]
}

export interface Path2DLineToMap {
  pt: AdjPoint2D
}

export interface Path2DList extends UnistNode {
  type: 'element'
  name: 'a:path2DList'
  attributes: Record<string, never>
  children: RequiredMap<Path2DListMap>[]
}

export interface Path2DListMap {
  path?: Path2D[]
}

export interface Path2DMoveTo extends UnistNode {
  type: 'element'
  name: 'a:path2DMoveTo'
  attributes: Record<string, never>
  children: RequiredMap<Path2DMoveToMap>[]
}

export interface Path2DMoveToMap {
  pt: AdjPoint2D
}

export interface Path2DQuadBezierTo extends UnistNode {
  type: 'element'
  name: 'a:path2DQuadBezierTo'
  attributes: Record<string, never>
  children: RequiredMap<Path2DQuadBezierToMap>[]
}

export interface Path2DQuadBezierToMap {
  pt: AdjPoint2D[]
}

export interface PathShadeProperties extends UnistNode {
  type: 'element'
  name: 'a:pathShadeProperties'
  attributes: {
    'a:path'?: PathShadeTypeVal
  }
  children: RequiredMap<PathShadePropertiesMap>[]
}

export interface PathShadePropertiesMap {
  fillToRect?: RelativeRect
}

export interface PatternFillProperties extends UnistNode {
  type: 'element'
  name: 'a:patternFillProperties'
  attributes: {
    'a:prst'?: PresetPatternValVal
  }
  children: RequiredMap<PatternFillPropertiesMap>[]
}

export interface PatternFillPropertiesMap {
  bgClr?: Color
  fgClr?: Color
}

export interface Percentage extends UnistNode {
  type: 'element'
  name: 'a:percentage'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface PictureLocking extends UnistNode {
  type: 'element'
  name: 'a:pictureLocking'
  attributes: {
    'a:noAdjustHandles'?: string
    'a:noChangeArrowheads'?: string
    'a:noChangeAspect'?: string
    'a:noChangeShapeType'?: string
    'a:noCrop'?: string
    'a:noEditPoints'?: string
    'a:noGrp'?: string
    'a:noMove'?: string
    'a:noResize'?: string
    'a:noRot'?: string
    'a:noSelect'?: string
  }
  children: RequiredMap<PictureLockingMap>[]
}

export interface PictureLockingMap {
  extLst?: OfficeArtExtensionList
}

export interface Point2D extends UnistNode {
  type: 'element'
  name: 'a:point2D'
  attributes: {
    'a:x': string
    'a:y': string
  }
  children: []
}

export interface Point3D extends UnistNode {
  type: 'element'
  name: 'a:point3D'
  attributes: {
    'a:x': string
    'a:y': string
    'a:z': string
  }
  children: []
}

export interface PolarAdjustHandle extends UnistNode {
  type: 'element'
  name: 'a:polarAdjustHandle'
  attributes: {
    'a:gdRefAng'?: string
    'a:gdRefR'?: string
    'a:maxAng'?: string
    'a:maxR'?: string
    'a:minAng'?: string
    'a:minR'?: string
  }
  children: RequiredMap<PolarAdjustHandleMap>[]
}

export interface PolarAdjustHandleMap {
  pos: AdjPoint2D
}

export interface PositiveFixedAngle extends UnistNode {
  type: 'element'
  name: 'a:positiveFixedAngle'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface PositiveFixedPercentage extends UnistNode {
  type: 'element'
  name: 'a:positiveFixedPercentage'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface PositivePercentage extends UnistNode {
  type: 'element'
  name: 'a:positivePercentage'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface PositiveSize2D extends UnistNode {
  type: 'element'
  name: 'a:positiveSize2D'
  attributes: {
    'a:cx': string
    'a:cy': string
  }
  children: []
}

export interface PresetColor extends UnistNode {
  type: 'element'
  name: 'a:presetColor'
  attributes: {
    'a:val': PresetColorValVal
  }
  children: RequiredMap<PresetColorMap>[]
}

export interface PresetColorMap {
  alpha?: PositiveFixedPercentage[]
  alphaMod?: PositivePercentage[]
  alphaOff?: FixedPercentage[]
  blue?: Percentage[]
  blueMod?: Percentage[]
  blueOff?: Percentage[]
  comp?: ComplementTransform[]
  gamma?: GammaTransform[]
  gray?: GrayscaleTransform[]
  green?: Percentage[]
  greenMod?: Percentage[]
  greenOff?: Percentage[]
  hue?: PositiveFixedAngle[]
  hueMod?: PositivePercentage[]
  hueOff?: Angle[]
  inv?: InverseTransform[]
  invGamma?: InverseGammaTransform[]
  lum?: Percentage[]
  lumMod?: Percentage[]
  lumOff?: Percentage[]
  red?: Percentage[]
  redMod?: Percentage[]
  redOff?: Percentage[]
  sat?: Percentage[]
  satMod?: Percentage[]
  satOff?: Percentage[]
  shade?: PositiveFixedPercentage[]
  tint?: PositiveFixedPercentage[]
}

export interface PresetGeometry2D extends UnistNode {
  type: 'element'
  name: 'a:presetGeometry2D'
  attributes: {
    'a:prst': ShapeTypeVal
  }
  children: RequiredMap<PresetGeometry2DMap>[]
}

export interface PresetGeometry2DMap {
  avLst?: GeomGuideList
}

export interface PresetLineDashProperties extends UnistNode {
  type: 'element'
  name: 'a:presetLineDashProperties'
  attributes: {
    'a:val'?: PresetLineDashValVal
  }
  children: []
}

export interface PresetShadowEffect extends UnistNode {
  type: 'element'
  name: 'a:presetShadowEffect'
  attributes: {
    'a:dir'?: string
    'a:dist'?: string
    'a:prst': PresetShadowValVal
  }
  children: RequiredMap<PresetShadowEffectMap>[]
}

export interface PresetShadowEffectMap {
  hslClr: HslColor
  prstClr: PresetColor
  schemeClr: SchemeColor
  scrgbClr: ScRgbColor
  srgbClr: SRgbColor
  sysClr: SystemColor
}

export interface PresetTextShape extends UnistNode {
  type: 'element'
  name: 'a:presetTextShape'
  attributes: {
    'a:prst': TextShapeTypeVal
  }
  children: RequiredMap<PresetTextShapeMap>[]
}

export interface PresetTextShapeMap {
  avLst?: GeomGuideList
}

export interface QuickTimeFile extends UnistNode {
  type: 'element'
  name: 'a:quickTimeFile'
  attributes: {
    'a:link': string
  }
  children: RequiredMap<QuickTimeFileMap>[]
}

export interface QuickTimeFileMap {
  extLst?: OfficeArtExtensionList
}

export interface Ratio extends UnistNode {
  type: 'element'
  name: 'a:ratio'
  attributes: {
    'a:d': string
    'a:n': string
  }
  children: []
}

export interface ReflectionEffect extends UnistNode {
  type: 'element'
  name: 'a:reflectionEffect'
  attributes: {
    'a:algn'?: RectAlignmentVal
    'a:blurRad'?: string
    'a:dir'?: string
    'a:dist'?: string
    'a:endA'?: string
    'a:endPos'?: string
    'a:fadeDir'?: string
    'a:kx'?: string
    'a:ky'?: string
    'a:rotWithShape'?: string
    'a:stA'?: string
    'a:stPos'?: string
    'a:sx'?: string
    'a:sy'?: string
  }
  children: []
}

export interface RegularTextRun extends UnistNode {
  type: 'element'
  name: 'a:regularTextRun'
  attributes: Record<string, never>
  children: RequiredMap<RegularTextRunMap>[]
}

export interface RegularTextRunMap {
  rPr?: TextCharacterProperties
  t: string
}

export interface RelativeOffsetEffect extends UnistNode {
  type: 'element'
  name: 'a:relativeOffsetEffect'
  attributes: {
    'a:tx'?: string
    'a:ty'?: string
  }
  children: []
}

export interface RelativeRect extends UnistNode {
  type: 'element'
  name: 'a:relativeRect'
  attributes: {
    'a:b'?: string
    'a:l'?: string
    'a:r'?: string
    'a:t'?: string
  }
  children: []
}

export interface Scale2D extends UnistNode {
  type: 'element'
  name: 'a:scale2D'
  attributes: Record<string, never>
  children: RequiredMap<Scale2DMap>[]
}

export interface Scale2DMap {
  sx: Ratio
  sy: Ratio
}

export interface Scene3D extends UnistNode {
  type: 'element'
  name: 'a:scene3D'
  attributes: Record<string, never>
  children: RequiredMap<Scene3DMap>[]
}

export interface Scene3DMap {
  backdrop?: Backdrop
  camera: Camera
  extLst?: OfficeArtExtensionList
  lightRig: LightRig
}

export interface SchemeColor extends UnistNode {
  type: 'element'
  name: 'a:schemeColor'
  attributes: {
    'a:val': SchemeColorValVal
  }
  children: RequiredMap<SchemeColorMap>[]
}

export interface SchemeColorMap {
  alpha?: PositiveFixedPercentage[]
  alphaMod?: PositivePercentage[]
  alphaOff?: FixedPercentage[]
  blue?: Percentage[]
  blueMod?: Percentage[]
  blueOff?: Percentage[]
  comp?: ComplementTransform[]
  gamma?: GammaTransform[]
  gray?: GrayscaleTransform[]
  green?: Percentage[]
  greenMod?: Percentage[]
  greenOff?: Percentage[]
  hue?: PositiveFixedAngle[]
  hueMod?: PositivePercentage[]
  hueOff?: Angle[]
  inv?: InverseTransform[]
  invGamma?: InverseGammaTransform[]
  lum?: Percentage[]
  lumMod?: Percentage[]
  lumOff?: Percentage[]
  red?: Percentage[]
  redMod?: Percentage[]
  redOff?: Percentage[]
  sat?: Percentage[]
  satMod?: Percentage[]
  satOff?: Percentage[]
  shade?: PositiveFixedPercentage[]
  tint?: PositiveFixedPercentage[]
}

export interface ScRgbColor extends UnistNode {
  type: 'element'
  name: 'a:scRgbColor'
  attributes: {
    'a:b': string
    'a:g': string
    'a:r': string
  }
  children: RequiredMap<ScRgbColorMap>[]
}

export interface ScRgbColorMap {
  alpha?: PositiveFixedPercentage[]
  alphaMod?: PositivePercentage[]
  alphaOff?: FixedPercentage[]
  blue?: Percentage[]
  blueMod?: Percentage[]
  blueOff?: Percentage[]
  comp?: ComplementTransform[]
  gamma?: GammaTransform[]
  gray?: GrayscaleTransform[]
  green?: Percentage[]
  greenMod?: Percentage[]
  greenOff?: Percentage[]
  hue?: PositiveFixedAngle[]
  hueMod?: PositivePercentage[]
  hueOff?: Angle[]
  inv?: InverseTransform[]
  invGamma?: InverseGammaTransform[]
  lum?: Percentage[]
  lumMod?: Percentage[]
  lumOff?: Percentage[]
  red?: Percentage[]
  redMod?: Percentage[]
  redOff?: Percentage[]
  sat?: Percentage[]
  satMod?: Percentage[]
  satOff?: Percentage[]
  shade?: PositiveFixedPercentage[]
  tint?: PositiveFixedPercentage[]
}

export interface Shape3D extends UnistNode {
  type: 'element'
  name: 'a:shape3D'
  attributes: {
    'a:contourW'?: string
    'a:extrusionH'?: string
    'a:prstMaterial'?: PresetMaterialTypeVal
    'a:z'?: string
  }
  children: RequiredMap<Shape3DMap>[]
}

export interface Shape3DMap {
  bevelB?: Bevel
  bevelT?: Bevel
  contourClr?: Color
  extLst?: OfficeArtExtensionList
  extrusionClr?: Color
}

export interface ShapeLocking extends UnistNode {
  type: 'element'
  name: 'a:shapeLocking'
  attributes: {
    'a:noAdjustHandles'?: string
    'a:noChangeArrowheads'?: string
    'a:noChangeAspect'?: string
    'a:noChangeShapeType'?: string
    'a:noEditPoints'?: string
    'a:noGrp'?: string
    'a:noMove'?: string
    'a:noResize'?: string
    'a:noRot'?: string
    'a:noSelect'?: string
    'a:noTextEdit'?: string
  }
  children: RequiredMap<ShapeLockingMap>[]
}

export interface ShapeLockingMap {
  extLst?: OfficeArtExtensionList
}

export interface ShapeProperties extends UnistNode {
  type: 'element'
  name: 'a:shapeProperties'
  attributes: {
    'a:bwMode'?: BlackWhiteModeVal
  }
  children: RequiredMap<ShapePropertiesMap>[]
}

export interface ShapePropertiesMap {
  blipFill?: BlipFillProperties
  custGeom?: CustomGeometry2D
  effectDag?: EffectContainer
  effectLst?: EffectList
  extLst?: OfficeArtExtensionList
  gradFill?: GradientFillProperties
  grpFill?: GroupFillProperties
  ln?: LineProperties
  noFill?: NoFillProperties
  pattFill?: PatternFillProperties
  prstGeom?: PresetGeometry2D
  scene3d?: Scene3D
  solidFill?: SolidColorFillProperties
  sp3d?: Shape3D
  xfrm?: Transform2D
}

export interface ShapeStyle extends UnistNode {
  type: 'element'
  name: 'a:shapeStyle'
  attributes: Record<string, never>
  children: RequiredMap<ShapeStyleMap>[]
}

export interface ShapeStyleMap {
  effectRef: StyleMatrixReference
  fillRef: StyleMatrixReference
  fontRef: FontReference
  lnRef: StyleMatrixReference
}

export interface SoftEdgesEffect extends UnistNode {
  type: 'element'
  name: 'a:softEdgesEffect'
  attributes: {
    'a:rad': string
  }
  children: []
}

export interface SolidColorFillProperties extends UnistNode {
  type: 'element'
  name: 'a:solidColorFillProperties'
  attributes: Record<string, never>
  children: RequiredMap<SolidColorFillPropertiesMap>[]
}

export interface SolidColorFillPropertiesMap {
  hslClr?: HslColor
  prstClr?: PresetColor
  schemeClr?: SchemeColor
  scrgbClr?: ScRgbColor
  srgbClr?: SRgbColor
  sysClr?: SystemColor
}

export interface SphereCoords extends UnistNode {
  type: 'element'
  name: 'a:sphereCoords'
  attributes: {
    'a:lat': string
    'a:lon': string
    'a:rev': string
  }
  children: []
}

export interface SRgbColor extends UnistNode {
  type: 'element'
  name: 'a:sRgbColor'
  attributes: {
    'a:val': string
  }
  children: RequiredMap<SRgbColorMap>[]
}

export interface SRgbColorMap {
  alpha?: PositiveFixedPercentage[]
  alphaMod?: PositivePercentage[]
  alphaOff?: FixedPercentage[]
  blue?: Percentage[]
  blueMod?: Percentage[]
  blueOff?: Percentage[]
  comp?: ComplementTransform[]
  gamma?: GammaTransform[]
  gray?: GrayscaleTransform[]
  green?: Percentage[]
  greenMod?: Percentage[]
  greenOff?: Percentage[]
  hue?: PositiveFixedAngle[]
  hueMod?: PositivePercentage[]
  hueOff?: Angle[]
  inv?: InverseTransform[]
  invGamma?: InverseGammaTransform[]
  lum?: Percentage[]
  lumMod?: Percentage[]
  lumOff?: Percentage[]
  red?: Percentage[]
  redMod?: Percentage[]
  redOff?: Percentage[]
  sat?: Percentage[]
  satMod?: Percentage[]
  satOff?: Percentage[]
  shade?: PositiveFixedPercentage[]
  tint?: PositiveFixedPercentage[]
}

export interface StretchInfoProperties extends UnistNode {
  type: 'element'
  name: 'a:stretchInfoProperties'
  attributes: Record<string, never>
  children: RequiredMap<StretchInfoPropertiesMap>[]
}

export interface StretchInfoPropertiesMap {
  fillRect?: RelativeRect
}

export interface StyleMatrix extends UnistNode {
  type: 'element'
  name: 'a:styleMatrix'
  attributes: {
    'a:name'?: string
  }
  children: RequiredMap<StyleMatrixMap>[]
}

export interface StyleMatrixMap {
  bgFillStyleLst: BackgroundFillStyleList
  effectStyleLst: EffectStyleList
  fillStyleLst: FillStyleList
  lnStyleLst: LineStyleList
}

export interface StyleMatrixReference extends UnistNode {
  type: 'element'
  name: 'a:styleMatrixReference'
  attributes: {
    'a:idx': string
  }
  children: RequiredMap<StyleMatrixReferenceMap>[]
}

export interface StyleMatrixReferenceMap {
  hslClr?: HslColor
  prstClr?: PresetColor
  schemeClr?: SchemeColor
  scrgbClr?: ScRgbColor
  srgbClr?: SRgbColor
  sysClr?: SystemColor
}

export interface SupplementalFont extends UnistNode {
  type: 'element'
  name: 'a:supplementalFont'
  attributes: {
    'a:script': string
    'a:typeface': string
  }
  children: []
}

export interface SystemColor extends UnistNode {
  type: 'element'
  name: 'a:systemColor'
  attributes: {
    'a:lastClr'?: string
    'a:val': SystemColorValVal
  }
  children: RequiredMap<SystemColorMap>[]
}

export interface SystemColorMap {
  alpha?: PositiveFixedPercentage[]
  alphaMod?: PositivePercentage[]
  alphaOff?: FixedPercentage[]
  blue?: Percentage[]
  blueMod?: Percentage[]
  blueOff?: Percentage[]
  comp?: ComplementTransform[]
  gamma?: GammaTransform[]
  gray?: GrayscaleTransform[]
  green?: Percentage[]
  greenMod?: Percentage[]
  greenOff?: Percentage[]
  hue?: PositiveFixedAngle[]
  hueMod?: PositivePercentage[]
  hueOff?: Angle[]
  inv?: InverseTransform[]
  invGamma?: InverseGammaTransform[]
  lum?: Percentage[]
  lumMod?: Percentage[]
  lumOff?: Percentage[]
  red?: Percentage[]
  redMod?: Percentage[]
  redOff?: Percentage[]
  sat?: Percentage[]
  satMod?: Percentage[]
  satOff?: Percentage[]
  shade?: PositiveFixedPercentage[]
  tint?: PositiveFixedPercentage[]
}

export interface Table extends UnistNode {
  type: 'element'
  name: 'a:table'
  attributes: Record<string, never>
  children: RequiredMap<TableMap>[]
}

export interface TableMap {
  tblGrid: TableGrid
  tblPr?: TableProperties
  tr?: TableRow[]
}

export interface TableBackgroundStyle extends UnistNode {
  type: 'element'
  name: 'a:tableBackgroundStyle'
  attributes: Record<string, never>
  children: RequiredMap<TableBackgroundStyleMap>[]
}

export interface TableBackgroundStyleMap {
  effect?: EffectProperties
  effectRef?: StyleMatrixReference
  fill?: FillProperties
  fillRef?: StyleMatrixReference
}

export interface TableCell extends UnistNode {
  type: 'element'
  name: 'a:tableCell'
  attributes: {
    'a:gridSpan'?: string
    'a:hMerge'?: string
    'a:id'?: string
    'a:rowSpan'?: string
    'a:vMerge'?: string
  }
  children: RequiredMap<TableCellMap>[]
}

export interface TableCellMap {
  extLst?: OfficeArtExtensionList
  tcPr?: TableCellProperties
  txBody?: TextBody
}

export interface TableCellBorderStyle extends UnistNode {
  type: 'element'
  name: 'a:tableCellBorderStyle'
  attributes: Record<string, never>
  children: RequiredMap<TableCellBorderStyleMap>[]
}

export interface TableCellBorderStyleMap {
  bottom?: ThemeableLineStyle
  extLst?: OfficeArtExtensionList
  insideH?: ThemeableLineStyle
  insideV?: ThemeableLineStyle
  left?: ThemeableLineStyle
  right?: ThemeableLineStyle
  tl2br?: ThemeableLineStyle
  top?: ThemeableLineStyle
  tr2bl?: ThemeableLineStyle
}

export interface TableCellProperties extends UnistNode {
  type: 'element'
  name: 'a:tableCellProperties'
  attributes: {
    'a:anchor'?: TextAnchoringTypeVal
    'a:anchorCtr'?: string
    'a:horzOverflow'?: TextHorzOverflowTypeVal
    'a:marB'?: string
    'a:marL'?: string
    'a:marR'?: string
    'a:marT'?: string
    'a:vert'?: TextVerticalTypeVal
  }
  children: RequiredMap<TableCellPropertiesMap>[]
}

export interface TableCellPropertiesMap {
  blipFill?: BlipFillProperties
  cell3D?: Cell3D
  extLst?: OfficeArtExtensionList
  gradFill?: GradientFillProperties
  grpFill?: GroupFillProperties
  headers?: Headers
  lnB?: LineProperties
  lnBlToTr?: LineProperties
  lnL?: LineProperties
  lnR?: LineProperties
  lnT?: LineProperties
  lnTlToBr?: LineProperties
  noFill?: NoFillProperties
  pattFill?: PatternFillProperties
  solidFill?: SolidColorFillProperties
}

export interface TableCol extends UnistNode {
  type: 'element'
  name: 'a:tableCol'
  attributes: {
    'a:w': string
  }
  children: RequiredMap<TableColMap>[]
}

export interface TableColMap {
  extLst?: OfficeArtExtensionList
}

export interface TableGrid extends UnistNode {
  type: 'element'
  name: 'a:tableGrid'
  attributes: Record<string, never>
  children: RequiredMap<TableGridMap>[]
}

export interface TableGridMap {
  gridCol?: TableCol[]
}

export interface TablePartStyle extends UnistNode {
  type: 'element'
  name: 'a:tablePartStyle'
  attributes: Record<string, never>
  children: RequiredMap<TablePartStyleMap>[]
}

export interface TablePartStyleMap {
  tcStyle?: TableStyleCellStyle
  tcTxStyle?: TableStyleTextStyle
}

export interface TableProperties extends UnistNode {
  type: 'element'
  name: 'a:tableProperties'
  attributes: {
    'a:bandCol'?: string
    'a:bandRow'?: string
    'a:firstCol'?: string
    'a:firstRow'?: string
    'a:lastCol'?: string
    'a:lastRow'?: string
    'a:rtl'?: string
  }
  children: RequiredMap<TablePropertiesMap>[]
}

export interface TablePropertiesMap {
  blipFill?: BlipFillProperties
  effectDag?: EffectContainer
  effectLst?: EffectList
  extLst?: OfficeArtExtensionList
  gradFill?: GradientFillProperties
  grpFill?: GroupFillProperties
  noFill?: NoFillProperties
  pattFill?: PatternFillProperties
  solidFill?: SolidColorFillProperties
  tableStyle?: TableStyle
  tableStyleId?: string
}

export interface TableRow extends UnistNode {
  type: 'element'
  name: 'a:tableRow'
  attributes: {
    'a:h': string
  }
  children: RequiredMap<TableRowMap>[]
}

export interface TableRowMap {
  extLst?: OfficeArtExtensionList
  tc?: TableCell[]
}

export interface TableStyle extends UnistNode {
  type: 'element'
  name: 'a:tableStyle'
  attributes: {
    'a:styleId': string
    'a:styleName': string
  }
  children: RequiredMap<TableStyleMap>[]
}

export interface TableStyleMap {
  band1H?: TablePartStyle
  band1V?: TablePartStyle
  band2H?: TablePartStyle
  band2V?: TablePartStyle
  extLst?: OfficeArtExtensionList
  firstCol?: TablePartStyle
  firstRow?: TablePartStyle
  lastCol?: TablePartStyle
  lastRow?: TablePartStyle
  neCell?: TablePartStyle
  nwCell?: TablePartStyle
  seCell?: TablePartStyle
  swCell?: TablePartStyle
  tblBg?: TableBackgroundStyle
  wholeTbl?: TablePartStyle
}

export interface TableStyleCellStyle extends UnistNode {
  type: 'element'
  name: 'a:tableStyleCellStyle'
  attributes: Record<string, never>
  children: RequiredMap<TableStyleCellStyleMap>[]
}

export interface TableStyleCellStyleMap {
  cell3D?: Cell3D
  fill?: FillProperties
  fillRef?: StyleMatrixReference
  tcBdr?: TableCellBorderStyle
}

export interface TableStyleList extends UnistNode {
  type: 'element'
  name: 'a:tableStyleList'
  attributes: {
    'a:def': string
  }
  children: RequiredMap<TableStyleListMap>[]
}

export interface TableStyleListMap {
  tblStyle?: TableStyle[]
}

export interface TableStyleTextStyle extends UnistNode {
  type: 'element'
  name: 'a:tableStyleTextStyle'
  attributes: {
    'a:b'?: OnOffStyleTypeVal
    'a:i'?: OnOffStyleTypeVal
  }
  children: RequiredMap<TableStyleTextStyleMap>[]
}

export interface TableStyleTextStyleMap {
  extLst?: OfficeArtExtensionList
  font?: FontCollection
  fontRef?: FontReference
  hslClr?: HslColor
  prstClr?: PresetColor
  schemeClr?: SchemeColor
  scrgbClr?: ScRgbColor
  srgbClr?: SRgbColor
  sysClr?: SystemColor
}

export interface TextAutonumberBullet extends UnistNode {
  type: 'element'
  name: 'a:textAutonumberBullet'
  attributes: {
    'a:startAt'?: string
    'a:type': TextAutonumberSchemeVal
  }
  children: []
}

export interface TextBlipBullet extends UnistNode {
  type: 'element'
  name: 'a:textBlipBullet'
  attributes: Record<string, never>
  children: RequiredMap<TextBlipBulletMap>[]
}

export interface TextBlipBulletMap {
  blip: Blip
}

export interface TextBody extends UnistNode {
  type: 'element'
  name: 'a:textBody'
  attributes: Record<string, never>
  children: RequiredMap<TextBodyMap>[]
}

export interface TextBodyMap {
  bodyPr: TextBodyProperties
  lstStyle?: TextListStyle
  p: TextParagraph[]
}

export interface TextBodyProperties extends UnistNode {
  type: 'element'
  name: 'a:textBodyProperties'
  attributes: {
    'a:anchor'?: TextAnchoringTypeVal
    'a:anchorCtr'?: string
    'a:bIns'?: string
    'a:compatLnSpc'?: string
    'a:forceAA'?: string
    'a:fromWordArt'?: string
    'a:horzOverflow'?: TextHorzOverflowTypeVal
    'a:lIns'?: string
    'a:numCol'?: string
    'a:rIns'?: string
    'a:rot'?: string
    'a:rtlCol'?: string
    'a:spcCol'?: string
    'a:spcFirstLastPara'?: string
    'a:tIns'?: string
    'a:upright'?: string
    'a:vert'?: TextVerticalTypeVal
    'a:vertOverflow'?: TextVertOverflowTypeVal
    'a:wrap'?: TextWrappingTypeVal
  }
  children: RequiredMap<TextBodyPropertiesMap>[]
}

export interface TextBodyPropertiesMap {
  extLst?: OfficeArtExtensionList
  flatTx?: FlatText
  noAutofit?: TextNoAutofit
  normAutofit?: TextNormalAutofit
  prstTxWarp?: PresetTextShape
  scene3d?: Scene3D
  sp3d?: Shape3D
  spAutoFit?: TextShapeAutofit
}

export interface TextBulletColorFollowText extends UnistNode {
  type: 'element'
  name: 'a:textBulletColorFollowText'
}

export interface TextBulletSizeFollowText extends UnistNode {
  type: 'element'
  name: 'a:textBulletSizeFollowText'
}

export interface TextBulletSizePercent extends UnistNode {
  type: 'element'
  name: 'a:textBulletSizePercent'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface TextBulletSizePoint extends UnistNode {
  type: 'element'
  name: 'a:textBulletSizePoint'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface TextBulletTypefaceFollowText extends UnistNode {
  type: 'element'
  name: 'a:textBulletTypefaceFollowText'
}

export interface TextCharacterProperties extends UnistNode {
  type: 'element'
  name: 'a:textCharacterProperties'
  attributes: {
    'a:altLang'?: string
    'a:b'?: string
    'a:baseline'?: string
    'a:bmk'?: string
    'a:cap'?: TextCapsTypeVal
    'a:dirty'?: string
    'a:err'?: string
    'a:i'?: string
    'a:kern'?: string
    'a:kumimoji'?: string
    'a:lang'?: string
    'a:noProof'?: string
    'a:normalizeH'?: string
    'a:smtClean'?: string
    'a:smtId'?: string
    'a:spc'?: string
    'a:strike'?: TextStrikeTypeVal
    'a:sz'?: string
    'a:u'?: TextUnderlineTypeVal
  }
  children: RequiredMap<TextCharacterPropertiesMap>[]
}

export interface TextCharacterPropertiesMap {
  blipFill?: BlipFillProperties
  cs?: TextFont
  ea?: TextFont
  effectDag?: EffectContainer
  effectLst?: EffectList
  extLst?: OfficeArtExtensionList
  gradFill?: GradientFillProperties
  grpFill?: GroupFillProperties
  highlight?: Color
  hlinkClick?: Hyperlink
  hlinkMouseOver?: Hyperlink
  latin?: TextFont
  ln?: LineProperties
  noFill?: NoFillProperties
  pattFill?: PatternFillProperties
  rtl?: string
  solidFill?: SolidColorFillProperties
  sym?: TextFont
  uFill?: TextUnderlineFillGroupWrapper
  uFillTx?: TextUnderlineFillFollowText
  uLn?: LineProperties
  uLnTx?: TextUnderlineLineFollowText
}

export interface TextCharBullet extends UnistNode {
  type: 'element'
  name: 'a:textCharBullet'
  attributes: {
    'a:char': string
  }
  children: []
}

export interface TextField extends UnistNode {
  type: 'element'
  name: 'a:textField'
  attributes: {
    'a:id': string
    'a:type'?: string
  }
  children: RequiredMap<TextFieldMap>[]
}

export interface TextFieldMap {
  pPr?: TextParagraphProperties
  rPr?: TextCharacterProperties
  t?: string
}

export interface TextFont extends UnistNode {
  type: 'element'
  name: 'a:textFont'
  attributes: {
    'a:charset'?: string
    'a:panose'?: string
    'a:pitchFamily'?: PitchFamilyVal
    'a:typeface': string
  }
  children: []
}

export interface TextLineBreak extends UnistNode {
  type: 'element'
  name: 'a:textLineBreak'
  attributes: Record<string, never>
  children: RequiredMap<TextLineBreakMap>[]
}

export interface TextLineBreakMap {
  rPr?: TextCharacterProperties
}

export interface TextListStyle extends UnistNode {
  type: 'element'
  name: 'a:textListStyle'
  attributes: Record<string, never>
  children: RequiredMap<TextListStyleMap>[]
}

export interface TextListStyleMap {
  defPPr?: TextParagraphProperties
  extLst?: OfficeArtExtensionList
  lvl1pPr?: TextParagraphProperties
  lvl2pPr?: TextParagraphProperties
  lvl3pPr?: TextParagraphProperties
  lvl4pPr?: TextParagraphProperties
  lvl5pPr?: TextParagraphProperties
  lvl6pPr?: TextParagraphProperties
  lvl7pPr?: TextParagraphProperties
  lvl8pPr?: TextParagraphProperties
  lvl9pPr?: TextParagraphProperties
}

export interface TextNoAutofit extends UnistNode {
  type: 'element'
  name: 'a:textNoAutofit'
}

export interface TextNoBullet extends UnistNode {
  type: 'element'
  name: 'a:textNoBullet'
}

export interface TextNormalAutofit extends UnistNode {
  type: 'element'
  name: 'a:textNormalAutofit'
  attributes: {
    'a:fontScale'?: string
    'a:lnSpcReduction'?: string
  }
  children: []
}

export interface TextParagraph extends UnistNode {
  type: 'element'
  name: 'a:textParagraph'
  attributes: Record<string, never>
  children: RequiredMap<TextParagraphMap>[]
}

export interface TextParagraphMap {
  br?: TextLineBreak[]
  endParaRPr?: TextCharacterProperties
  fld?: TextField[]
  pPr?: TextParagraphProperties
  r?: RegularTextRun[]
}

export interface TextParagraphProperties extends UnistNode {
  type: 'element'
  name: 'a:textParagraphProperties'
  attributes: {
    'a:algn'?: TextAlignTypeVal
    'a:defTabSz'?: string
    'a:eaLnBrk'?: string
    'a:fontAlgn'?: TextFontAlignTypeVal
    'a:hangingPunct'?: string
    'a:indent'?: string
    'a:latinLnBrk'?: string
    'a:lvl'?: string
    'a:marL'?: string
    'a:marR'?: string
    'a:rtl'?: string
  }
  children: RequiredMap<TextParagraphPropertiesMap>[]
}

export interface TextParagraphPropertiesMap {
  buAutoNum?: TextAutonumberBullet
  buBlip?: TextBlipBullet
  buChar?: TextCharBullet
  buClr?: Color
  buClrTx?: TextBulletColorFollowText
  buFont?: TextFont
  buFontTx?: TextBulletTypefaceFollowText
  buNone?: TextNoBullet
  buSzPct?: TextBulletSizePercent
  buSzPts?: TextBulletSizePoint
  buSzTx?: TextBulletSizeFollowText
  defRPr?: TextCharacterProperties
  extLst?: OfficeArtExtensionList
  lnSpc?: TextSpacing
  spcAft?: TextSpacing
  spcBef?: TextSpacing
  tabLst?: TextTabStopList
}

export interface TextShapeAutofit extends UnistNode {
  type: 'element'
  name: 'a:textShapeAutofit'
}

export interface TextSpacing extends UnistNode {
  type: 'element'
  name: 'a:textSpacing'
  attributes: Record<string, never>
  children: RequiredMap<TextSpacingMap>[]
}

export interface TextSpacingMap {
  spcPct: TextSpacingPercent
  spcPts: TextSpacingPoint
}

export interface TextSpacingPercent extends UnistNode {
  type: 'element'
  name: 'a:textSpacingPercent'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface TextSpacingPoint extends UnistNode {
  type: 'element'
  name: 'a:textSpacingPoint'
  attributes: {
    'a:val': string
  }
  children: []
}

export interface TextTabStop extends UnistNode {
  type: 'element'
  name: 'a:textTabStop'
  attributes: {
    'a:algn'?: TextTabAlignTypeVal
    'a:pos'?: string
  }
  children: []
}

export interface TextTabStopList extends UnistNode {
  type: 'element'
  name: 'a:textTabStopList'
  attributes: Record<string, never>
  children: RequiredMap<TextTabStopListMap>[]
}

export interface TextTabStopListMap {
  tab?: TextTabStop[]
}

export interface TextUnderlineFillFollowText extends UnistNode {
  type: 'element'
  name: 'a:textUnderlineFillFollowText'
}

export interface TextUnderlineFillGroupWrapper extends UnistNode {
  type: 'element'
  name: 'a:textUnderlineFillGroupWrapper'
  attributes: Record<string, never>
  children: RequiredMap<TextUnderlineFillGroupWrapperMap>[]
}

export interface TextUnderlineFillGroupWrapperMap {
  blipFill: BlipFillProperties
  gradFill: GradientFillProperties
  grpFill: GroupFillProperties
  noFill: NoFillProperties
  pattFill: PatternFillProperties
  solidFill: SolidColorFillProperties
}

export interface TextUnderlineLineFollowText extends UnistNode {
  type: 'element'
  name: 'a:textUnderlineLineFollowText'
}

export interface ThemeableLineStyle extends UnistNode {
  type: 'element'
  name: 'a:themeableLineStyle'
  attributes: Record<string, never>
  children: RequiredMap<ThemeableLineStyleMap>[]
}

export interface ThemeableLineStyleMap {
  ln: LineProperties
  lnRef: StyleMatrixReference
}

export interface TileInfoProperties extends UnistNode {
  type: 'element'
  name: 'a:tileInfoProperties'
  attributes: {
    'a:algn'?: RectAlignmentVal
    'a:flip'?: TileFlipModeVal
    'a:sx'?: string
    'a:sy'?: string
    'a:tx'?: string
    'a:ty'?: string
  }
  children: []
}

export interface TintEffect extends UnistNode {
  type: 'element'
  name: 'a:tintEffect'
  attributes: {
    'a:amt'?: string
    'a:hue'?: string
  }
  children: []
}

export interface Transform2D extends UnistNode {
  type: 'element'
  name: 'a:transform2D'
  attributes: {
    'a:flipH'?: string
    'a:flipV'?: string
    'a:rot'?: string
  }
  children: RequiredMap<Transform2DMap>[]
}

export interface Transform2DMap {
  ext?: PositiveSize2D
  off?: Point2D
}

export interface TransformEffect extends UnistNode {
  type: 'element'
  name: 'a:transformEffect'
  attributes: {
    'a:kx'?: string
    'a:ky'?: string
    'a:sx'?: string
    'a:sy'?: string
    'a:tx'?: string
    'a:ty'?: string
  }
  children: []
}

export interface Vector3D extends UnistNode {
  type: 'element'
  name: 'a:vector3D'
  attributes: {
    'a:dx': string
    'a:dy': string
    'a:dz': string
  }
  children: []
}

export interface VideoFile extends UnistNode {
  type: 'element'
  name: 'a:videoFile'
  attributes: {
    'a:contentType'?: string
    'a:link': string
  }
  children: RequiredMap<VideoFileMap>[]
}

export interface VideoFileMap {
  extLst?: OfficeArtExtensionList
}

export interface WholeE2oFormatting extends UnistNode {
  type: 'element'
  name: 'a:wholeE2oFormatting'
  attributes: Record<string, never>
  children: RequiredMap<WholeE2oFormattingMap>[]
}

export interface WholeE2oFormattingMap {
  effectDag?: EffectContainer
  effectLst?: EffectList
  ln?: LineProperties
}

export interface XYAdjustHandle extends UnistNode {
  type: 'element'
  name: 'a:xYAdjustHandle'
  attributes: {
    'a:gdRefX'?: string
    'a:gdRefY'?: string
    'a:maxX'?: string
    'a:maxY'?: string
    'a:minX'?: string
    'a:minY'?: string
  }
  children: RequiredMap<XYAdjustHandleMap>[]
}

export interface XYAdjustHandleMap {
  pos: AdjPoint2D
}

export type AdjAngleVal = string

export type AdjCoordinateVal = string

export type AngleVal = number

export type AnimationBuildTypeVal = 'allAtOnce'

export type AnimationChartBuildTypeVal = string

export type AnimationChartOnlyBuildTypeVal = 'series' | 'category' | 'seriesEl' | 'categoryEl'

export type AnimationDgmBuildTypeVal = string

export type AnimationDgmOnlyBuildTypeVal = 'one' | 'lvlOne' | 'lvlAtOnce'

export type BevelPresetTypeVal =
  | 'relaxedInset'
  | 'circle'
  | 'slope'
  | 'cross'
  | 'angle'
  | 'softRound'
  | 'convex'
  | 'coolSlant'
  | 'divot'
  | 'riblet'
  | 'hardEdge'
  | 'artDeco'

export type BlackWhiteModeVal =
  | 'clr'
  | 'auto'
  | 'gray'
  | 'ltGray'
  | 'invGray'
  | 'grayWhite'
  | 'blackGray'
  | 'blackWhite'
  | 'black'
  | 'white'
  | 'hidden'

export type BlendModeVal = 'over' | 'mult' | 'screen' | 'darken' | 'lighten'

export type BlipCompressionVal = 'email' | 'screen' | 'print' | 'hqprint' | 'none'

export type ChartBuildStepVal =
  | 'category'
  | 'ptInCategory'
  | 'series'
  | 'ptInSeries'
  | 'allPts'
  | 'gridLegend'

export type ColorSchemeIndexVal =
  | 'dk1'
  | 'lt1'
  | 'dk2'
  | 'lt2'
  | 'accent1'
  | 'accent2'
  | 'accent3'
  | 'accent4'
  | 'accent5'
  | 'accent6'
  | 'hlink'
  | 'folHlink'

export type CompoundLineVal = 'sng' | 'dbl' | 'thickThin' | 'thinThick' | 'tri'

export type CoordinateVal = string

export type Coordinate32Val = string

export type Coordinate32UnqualifiedVal = number

export type CoordinateUnqualifiedVal = number

export type DgmBuildStepVal = 'sp' | 'bg'

export type DrawingElementIdVal = number

export type EffectContainerTypeVal = 'sib' | 'tree'

export type FixedAngleVal = number

export type FixedPercentageVal = string

export type FontCollectionIndexVal = 'major' | 'minor' | 'none'

export type FOVAngleVal = number

export type GeomGuideFormulaVal = string

export type GeomGuideNameVal = string

export type LightRigDirectionVal = 'tl' | 't' | 'tr' | 'l' | 'r' | 'bl' | 'b' | 'br'

export type LightRigTypeVal =
  | 'legacyFlat1'
  | 'legacyFlat2'
  | 'legacyFlat3'
  | 'legacyFlat4'
  | 'legacyNormal1'
  | 'legacyNormal2'
  | 'legacyNormal3'
  | 'legacyNormal4'
  | 'legacyHarsh1'
  | 'legacyHarsh2'
  | 'legacyHarsh3'
  | 'legacyHarsh4'
  | 'threePt'
  | 'balanced'
  | 'soft'
  | 'harsh'
  | 'flood'
  | 'contrasting'
  | 'morning'
  | 'sunrise'
  | 'sunset'
  | 'chilly'
  | 'freezing'
  | 'flat'
  | 'twoPt'
  | 'glow'
  | 'brightRoom'

export type LineCapVal = 'rnd' | 'sq' | 'flat'

export type LineEndLengthVal = 'sm' | 'med' | 'lg'

export type LineEndTypeVal = 'none' | 'triangle' | 'stealth' | 'diamond' | 'oval' | 'arrow'

export type LineEndWidthVal = 'sm' | 'med' | 'lg'

export type LineWidthVal = number

export type OnOffStyleTypeVal = 'on' | 'off' | 'def'

export type PathFillModeVal = 'none' | 'norm' | 'lighten' | 'lightenLess' | 'darken' | 'darkenLess'

export type PathShadeTypeVal = 'shape' | 'circle' | 'rect'

export type PenAlignmentVal = 'ctr' | 'in'

export type PercentageVal = string

export type PitchFamilyVal =
  | '00'
  | '01'
  | '02'
  | '16'
  | '17'
  | '18'
  | '32'
  | '33'
  | '34'
  | '48'
  | '49'
  | '50'
  | '64'
  | '65'
  | '66'
  | '80'
  | '81'
  | '82'

export type PositiveCoordinateVal = number

export type PositiveCoordinate32Val = number

export type PositiveFixedAngleVal = number

export type PositiveFixedPercentageVal = string

export type PositivePercentageVal = string

export type PresetCameraTypeVal =
  | 'legacyObliqueTopLeft'
  | 'legacyObliqueTop'
  | 'legacyObliqueTopRight'
  | 'legacyObliqueLeft'
  | 'legacyObliqueFront'
  | 'legacyObliqueRight'
  | 'legacyObliqueBottomLeft'
  | 'legacyObliqueBottom'
  | 'legacyObliqueBottomRight'
  | 'legacyPerspectiveTopLeft'
  | 'legacyPerspectiveTop'
  | 'legacyPerspectiveTopRight'
  | 'legacyPerspectiveLeft'
  | 'legacyPerspectiveFront'
  | 'legacyPerspectiveRight'
  | 'legacyPerspectiveBottomLeft'
  | 'legacyPerspectiveBottom'
  | 'legacyPerspectiveBottomRight'
  | 'orthographicFront'
  | 'isometricTopUp'
  | 'isometricTopDown'
  | 'isometricBottomUp'
  | 'isometricBottomDown'
  | 'isometricLeftUp'
  | 'isometricLeftDown'
  | 'isometricRightUp'
  | 'isometricRightDown'
  | 'isometricOffAxis1Left'
  | 'isometricOffAxis1Right'
  | 'isometricOffAxis1Top'
  | 'isometricOffAxis2Left'
  | 'isometricOffAxis2Right'
  | 'isometricOffAxis2Top'
  | 'isometricOffAxis3Left'
  | 'isometricOffAxis3Right'
  | 'isometricOffAxis3Bottom'
  | 'isometricOffAxis4Left'
  | 'isometricOffAxis4Right'
  | 'isometricOffAxis4Bottom'
  | 'obliqueTopLeft'
  | 'obliqueTop'
  | 'obliqueTopRight'
  | 'obliqueLeft'
  | 'obliqueRight'
  | 'obliqueBottomLeft'
  | 'obliqueBottom'
  | 'obliqueBottomRight'
  | 'perspectiveFront'
  | 'perspectiveLeft'
  | 'perspectiveRight'
  | 'perspectiveAbove'
  | 'perspectiveBelow'
  | 'perspectiveAboveLeftFacing'
  | 'perspectiveAboveRightFacing'
  | 'perspectiveContrastingLeftFacing'
  | 'perspectiveContrastingRightFacing'
  | 'perspectiveHeroicLeftFacing'
  | 'perspectiveHeroicRightFacing'
  | 'perspectiveHeroicExtremeLeftFacing'
  | 'perspectiveHeroicExtremeRightFacing'
  | 'perspectiveRelaxed'
  | 'perspectiveRelaxedModerately'

export type PresetColorValVal =
  | 'aliceBlue'
  | 'antiqueWhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedAlmond'
  | 'blue'
  | 'blueViolet'
  | 'brown'
  | 'burlyWood'
  | 'cadetBlue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerBlue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkBlue'
  | 'darkCyan'
  | 'darkGoldenrod'
  | 'darkGray'
  | 'darkGrey'
  | 'darkGreen'
  | 'darkKhaki'
  | 'darkMagenta'
  | 'darkOliveGreen'
  | 'darkOrange'
  | 'darkOrchid'
  | 'darkRed'
  | 'darkSalmon'
  | 'darkSeaGreen'
  | 'darkSlateBlue'
  | 'darkSlateGray'
  | 'darkSlateGrey'
  | 'darkTurquoise'
  | 'darkViolet'
  | 'dkBlue'
  | 'dkCyan'
  | 'dkGoldenrod'
  | 'dkGray'
  | 'dkGrey'
  | 'dkGreen'
  | 'dkKhaki'
  | 'dkMagenta'
  | 'dkOliveGreen'
  | 'dkOrange'
  | 'dkOrchid'
  | 'dkRed'
  | 'dkSalmon'
  | 'dkSeaGreen'
  | 'dkSlateBlue'
  | 'dkSlateGray'
  | 'dkSlateGrey'
  | 'dkTurquoise'
  | 'dkViolet'
  | 'deepPink'
  | 'deepSkyBlue'
  | 'dimGray'
  | 'dimGrey'
  | 'dodgerBlue'
  | 'firebrick'
  | 'floralWhite'
  | 'forestGreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostWhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'grey'
  | 'green'
  | 'greenYellow'
  | 'honeydew'
  | 'hotPink'
  | 'indianRed'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderBlush'
  | 'lawnGreen'
  | 'lemonChiffon'
  | 'lightBlue'
  | 'lightCoral'
  | 'lightCyan'
  | 'lightGoldenrodYellow'
  | 'lightGray'
  | 'lightGrey'
  | 'lightGreen'
  | 'lightPink'
  | 'lightSalmon'
  | 'lightSeaGreen'
  | 'lightSkyBlue'
  | 'lightSlateGray'
  | 'lightSlateGrey'
  | 'lightSteelBlue'
  | 'lightYellow'
  | 'ltBlue'
  | 'ltCoral'
  | 'ltCyan'
  | 'ltGoldenrodYellow'
  | 'ltGray'
  | 'ltGrey'
  | 'ltGreen'
  | 'ltPink'
  | 'ltSalmon'
  | 'ltSeaGreen'
  | 'ltSkyBlue'
  | 'ltSlateGray'
  | 'ltSlateGrey'
  | 'ltSteelBlue'
  | 'ltYellow'
  | 'lime'
  | 'limeGreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'medAquamarine'
  | 'medBlue'
  | 'medOrchid'
  | 'medPurple'
  | 'medSeaGreen'
  | 'medSlateBlue'
  | 'medSpringGreen'
  | 'medTurquoise'
  | 'medVioletRed'
  | 'mediumAquamarine'
  | 'mediumBlue'
  | 'mediumOrchid'
  | 'mediumPurple'
  | 'mediumSeaGreen'
  | 'mediumSlateBlue'
  | 'mediumSpringGreen'
  | 'mediumTurquoise'
  | 'mediumVioletRed'
  | 'midnightBlue'
  | 'mintCream'
  | 'mistyRose'
  | 'moccasin'
  | 'navajoWhite'
  | 'navy'
  | 'oldLace'
  | 'olive'
  | 'oliveDrab'
  | 'orange'
  | 'orangeRed'
  | 'orchid'
  | 'paleGoldenrod'
  | 'paleGreen'
  | 'paleTurquoise'
  | 'paleVioletRed'
  | 'papayaWhip'
  | 'peachPuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderBlue'
  | 'purple'
  | 'red'
  | 'rosyBrown'
  | 'royalBlue'
  | 'saddleBrown'
  | 'salmon'
  | 'sandyBrown'
  | 'seaGreen'
  | 'seaShell'
  | 'sienna'
  | 'silver'
  | 'skyBlue'
  | 'slateBlue'
  | 'slateGray'
  | 'slateGrey'
  | 'snow'
  | 'springGreen'
  | 'steelBlue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whiteSmoke'
  | 'yellow'
  | 'yellowGreen'

export type PresetLineDashValVal =
  | 'solid'
  | 'dot'
  | 'dash'
  | 'lgDash'
  | 'dashDot'
  | 'lgDashDot'
  | 'lgDashDotDot'
  | 'sysDash'
  | 'sysDot'
  | 'sysDashDot'
  | 'sysDashDotDot'

export type PresetMaterialTypeVal =
  | 'legacyMatte'
  | 'legacyPlastic'
  | 'legacyMetal'
  | 'legacyWireframe'
  | 'matte'
  | 'plastic'
  | 'metal'
  | 'warmMatte'
  | 'translucentPowder'
  | 'powder'
  | 'dkEdge'
  | 'softEdge'
  | 'clear'
  | 'flat'
  | 'softmetal'

export type PresetPatternValVal =
  | 'pct5'
  | 'pct10'
  | 'pct20'
  | 'pct25'
  | 'pct30'
  | 'pct40'
  | 'pct50'
  | 'pct60'
  | 'pct70'
  | 'pct75'
  | 'pct80'
  | 'pct90'
  | 'horz'
  | 'vert'
  | 'ltHorz'
  | 'ltVert'
  | 'dkHorz'
  | 'dkVert'
  | 'narHorz'
  | 'narVert'
  | 'dashHorz'
  | 'dashVert'
  | 'cross'
  | 'dnDiag'
  | 'upDiag'
  | 'ltDnDiag'
  | 'ltUpDiag'
  | 'dkDnDiag'
  | 'dkUpDiag'
  | 'wdDnDiag'
  | 'wdUpDiag'
  | 'dashDnDiag'
  | 'dashUpDiag'
  | 'diagCross'
  | 'smCheck'
  | 'lgCheck'
  | 'smGrid'
  | 'lgGrid'
  | 'dotGrid'
  | 'smConfetti'
  | 'lgConfetti'
  | 'horzBrick'
  | 'diagBrick'
  | 'solidDmnd'
  | 'openDmnd'
  | 'dotDmnd'
  | 'plaid'
  | 'sphere'
  | 'weave'
  | 'divot'
  | 'shingle'
  | 'wave'
  | 'trellis'
  | 'zigZag'

export type PresetShadowValVal =
  | 'shdw1'
  | 'shdw2'
  | 'shdw3'
  | 'shdw4'
  | 'shdw5'
  | 'shdw6'
  | 'shdw7'
  | 'shdw8'
  | 'shdw9'
  | 'shdw10'
  | 'shdw11'
  | 'shdw12'
  | 'shdw13'
  | 'shdw14'
  | 'shdw15'
  | 'shdw16'
  | 'shdw17'
  | 'shdw18'
  | 'shdw19'
  | 'shdw20'

export type RectAlignmentVal = 'tl' | 't' | 'tr' | 'l' | 'ctr' | 'r' | 'bl' | 'b' | 'br'

export type SchemeColorValVal =
  | 'bg1'
  | 'tx1'
  | 'bg2'
  | 'tx2'
  | 'accent1'
  | 'accent2'
  | 'accent3'
  | 'accent4'
  | 'accent5'
  | 'accent6'
  | 'hlink'
  | 'folHlink'
  | 'phClr'
  | 'dk1'
  | 'lt1'
  | 'dk2'
  | 'lt2'

export type ShapeIDVal = string

export type ShapeTypeVal =
  | 'line'
  | 'lineInv'
  | 'triangle'
  | 'rtTriangle'
  | 'rect'
  | 'diamond'
  | 'parallelogram'
  | 'trapezoid'
  | 'nonIsoscelesTrapezoid'
  | 'pentagon'
  | 'hexagon'
  | 'heptagon'
  | 'octagon'
  | 'decagon'
  | 'dodecagon'
  | 'star4'
  | 'star5'
  | 'star6'
  | 'star7'
  | 'star8'
  | 'star10'
  | 'star12'
  | 'star16'
  | 'star24'
  | 'star32'
  | 'roundRect'
  | 'round1Rect'
  | 'round2SameRect'
  | 'round2DiagRect'
  | 'snipRoundRect'
  | 'snip1Rect'
  | 'snip2SameRect'
  | 'snip2DiagRect'
  | 'plaque'
  | 'ellipse'
  | 'teardrop'
  | 'homePlate'
  | 'chevron'
  | 'pieWedge'
  | 'pie'
  | 'blockArc'
  | 'donut'
  | 'noSmoking'
  | 'rightArrow'
  | 'leftArrow'
  | 'upArrow'
  | 'downArrow'
  | 'stripedRightArrow'
  | 'notchedRightArrow'
  | 'bentUpArrow'
  | 'leftRightArrow'
  | 'upDownArrow'
  | 'leftUpArrow'
  | 'leftRightUpArrow'
  | 'quadArrow'
  | 'leftArrowCallout'
  | 'rightArrowCallout'
  | 'upArrowCallout'
  | 'downArrowCallout'
  | 'leftRightArrowCallout'
  | 'upDownArrowCallout'
  | 'quadArrowCallout'
  | 'bentArrow'
  | 'uturnArrow'
  | 'circularArrow'
  | 'leftCircularArrow'
  | 'leftRightCircularArrow'
  | 'curvedRightArrow'
  | 'curvedLeftArrow'
  | 'curvedUpArrow'
  | 'curvedDownArrow'
  | 'swooshArrow'
  | 'cube'
  | 'can'
  | 'lightningBolt'
  | 'heart'
  | 'sun'
  | 'moon'
  | 'smileyFace'
  | 'irregularSeal1'
  | 'irregularSeal2'
  | 'foldedCorner'
  | 'bevel'
  | 'frame'
  | 'halfFrame'
  | 'corner'
  | 'diagStripe'
  | 'chord'
  | 'arc'
  | 'leftBracket'
  | 'rightBracket'
  | 'leftBrace'
  | 'rightBrace'
  | 'bracketPair'
  | 'bracePair'
  | 'straightConnector1'
  | 'bentConnector2'
  | 'bentConnector3'
  | 'bentConnector4'
  | 'bentConnector5'
  | 'curvedConnector2'
  | 'curvedConnector3'
  | 'curvedConnector4'
  | 'curvedConnector5'
  | 'callout1'
  | 'callout2'
  | 'callout3'
  | 'accentCallout1'
  | 'accentCallout2'
  | 'accentCallout3'
  | 'borderCallout1'
  | 'borderCallout2'
  | 'borderCallout3'
  | 'accentBorderCallout1'
  | 'accentBorderCallout2'
  | 'accentBorderCallout3'
  | 'wedgeRectCallout'
  | 'wedgeRoundRectCallout'
  | 'wedgeEllipseCallout'
  | 'cloudCallout'
  | 'cloud'
  | 'ribbon'
  | 'ribbon2'
  | 'ellipseRibbon'
  | 'ellipseRibbon2'
  | 'leftRightRibbon'
  | 'verticalScroll'
  | 'horizontalScroll'
  | 'wave'
  | 'doubleWave'
  | 'plus'
  | 'flowChartProcess'
  | 'flowChartDecision'
  | 'flowChartInputOutput'
  | 'flowChartPredefinedProcess'
  | 'flowChartInternalStorage'
  | 'flowChartDocument'
  | 'flowChartMultidocument'
  | 'flowChartTerminator'
  | 'flowChartPreparation'
  | 'flowChartManualInput'
  | 'flowChartManualOperation'
  | 'flowChartConnector'
  | 'flowChartPunchedCard'
  | 'flowChartPunchedTape'
  | 'flowChartSummingJunction'
  | 'flowChartOr'
  | 'flowChartCollate'
  | 'flowChartSort'
  | 'flowChartExtract'
  | 'flowChartMerge'
  | 'flowChartOfflineStorage'
  | 'flowChartOnlineStorage'
  | 'flowChartMagneticTape'
  | 'flowChartMagneticDisk'
  | 'flowChartMagneticDrum'
  | 'flowChartDisplay'
  | 'flowChartDelay'
  | 'flowChartAlternateProcess'
  | 'flowChartOffpageConnector'
  | 'actionButtonBlank'
  | 'actionButtonHome'
  | 'actionButtonHelp'
  | 'actionButtonInformation'
  | 'actionButtonForwardNext'
  | 'actionButtonBackPrevious'
  | 'actionButtonEnd'
  | 'actionButtonBeginning'
  | 'actionButtonReturn'
  | 'actionButtonDocument'
  | 'actionButtonSound'
  | 'actionButtonMovie'
  | 'gear6'
  | 'gear9'
  | 'funnel'
  | 'mathPlus'
  | 'mathMinus'
  | 'mathMultiply'
  | 'mathDivide'
  | 'mathEqual'
  | 'mathNotEqual'
  | 'cornerTabs'
  | 'squareTabs'
  | 'plaqueTabs'
  | 'chartX'
  | 'chartStar'
  | 'chartPlus'

export type StyleMatrixColumnIndexVal = number

export type SystemColorValVal =
  | 'scrollBar'
  | 'background'
  | 'activeCaption'
  | 'inactiveCaption'
  | 'menu'
  | 'window'
  | 'windowFrame'
  | 'menuText'
  | 'windowText'
  | 'captionText'
  | 'activeBorder'
  | 'inactiveBorder'
  | 'appWorkspace'
  | 'highlight'
  | 'highlightText'
  | 'btnFace'
  | 'btnShadow'
  | 'grayText'
  | 'btnText'
  | 'inactiveCaptionText'
  | 'btnHighlight'
  | '3dDkShadow'
  | '3dLight'
  | 'infoText'
  | 'infoBk'
  | 'hotLight'
  | 'gradientActiveCaption'
  | 'gradientInactiveCaption'
  | 'menuHighlight'
  | 'menuBar'

export type TextAlignTypeVal = 'l' | 'ctr' | 'r' | 'just' | 'justLow' | 'dist' | 'thaiDist'

export type TextAnchoringTypeVal = 't' | 'ctr' | 'b' | 'just' | 'dist'

export type TextAutonumberSchemeVal =
  | 'alphaLcParenBoth'
  | 'alphaUcParenBoth'
  | 'alphaLcParenR'
  | 'alphaUcParenR'
  | 'alphaLcPeriod'
  | 'alphaUcPeriod'
  | 'arabicParenBoth'
  | 'arabicParenR'
  | 'arabicPeriod'
  | 'arabicPlain'
  | 'romanLcParenBoth'
  | 'romanUcParenBoth'
  | 'romanLcParenR'
  | 'romanUcParenR'
  | 'romanLcPeriod'
  | 'romanUcPeriod'
  | 'circleNumDbPlain'
  | 'circleNumWdBlackPlain'
  | 'circleNumWdWhitePlain'
  | 'arabicDbPeriod'
  | 'arabicDbPlain'
  | 'ea1ChsPeriod'
  | 'ea1ChsPlain'
  | 'ea1ChtPeriod'
  | 'ea1ChtPlain'
  | 'ea1JpnChsDbPeriod'
  | 'ea1JpnKorPlain'
  | 'ea1JpnKorPeriod'
  | 'arabic1Minus'
  | 'arabic2Minus'
  | 'hebrew2Minus'
  | 'thaiAlphaPeriod'
  | 'thaiAlphaParenR'
  | 'thaiAlphaParenBoth'
  | 'thaiNumPeriod'
  | 'thaiNumParenR'
  | 'thaiNumParenBoth'
  | 'hindiAlphaPeriod'
  | 'hindiNumPeriod'
  | 'hindiNumParenR'
  | 'hindiAlpha1Period'

export type TextBulletSizeVal = string

export type TextBulletSizePercentVal = string

export type TextBulletStartAtNumVal = number

export type TextCapsTypeVal = 'none' | 'small' | 'all'

export type TextColumnCountVal = number

export type TextFontAlignTypeVal = 'auto' | 't' | 'ctr' | 'base' | 'b'

export type TextFontScalePercentOrPercentStringVal = string

export type TextFontSizeVal = number

export type TextHorzOverflowTypeVal = 'overflow' | 'clip'

export type TextIndentVal = number

export type TextIndentLevelTypeVal = number

export type TextMarginVal = number

export type TextNonNegativePointVal = number

export type TextPointVal = string

export type TextPointUnqualifiedVal = number

export type TextShapeTypeVal =
  | 'textNoShape'
  | 'textPlain'
  | 'textStop'
  | 'textTriangle'
  | 'textTriangleInverted'
  | 'textChevron'
  | 'textChevronInverted'
  | 'textRingInside'
  | 'textRingOutside'
  | 'textArchUp'
  | 'textArchDown'
  | 'textCircle'
  | 'textButton'
  | 'textArchUpPour'
  | 'textArchDownPour'
  | 'textCirclePour'
  | 'textButtonPour'
  | 'textCurveUp'
  | 'textCurveDown'
  | 'textCanUp'
  | 'textCanDown'
  | 'textWave1'
  | 'textWave2'
  | 'textDoubleWave1'
  | 'textWave4'
  | 'textInflate'
  | 'textDeflate'
  | 'textInflateBottom'
  | 'textDeflateBottom'
  | 'textInflateTop'
  | 'textDeflateTop'
  | 'textDeflateInflate'
  | 'textDeflateInflateDeflate'
  | 'textFadeRight'
  | 'textFadeLeft'
  | 'textFadeUp'
  | 'textFadeDown'
  | 'textSlantUp'
  | 'textSlantDown'
  | 'textCascadeUp'
  | 'textCascadeDown'

export type TextSpacingPercentOrPercentStringVal = string

export type TextSpacingPointVal = number

export type TextStrikeTypeVal = 'noStrike' | 'sngStrike' | 'dblStrike'

export type TextTabAlignTypeVal = 'l' | 'ctr' | 'r' | 'dec'

export type TextTypefaceVal = string

export type TextUnderlineTypeVal =
  | 'none'
  | 'words'
  | 'sng'
  | 'dbl'
  | 'heavy'
  | 'dotted'
  | 'dottedHeavy'
  | 'dash'
  | 'dashHeavy'
  | 'dashLong'
  | 'dashLongHeavy'
  | 'dotDash'
  | 'dotDashHeavy'
  | 'dotDotDash'
  | 'dotDotDashHeavy'
  | 'wavy'
  | 'wavyHeavy'
  | 'wavyDbl'

export type TextVerticalTypeVal =
  | 'horz'
  | 'vert'
  | 'vert270'
  | 'wordArtVert'
  | 'eaVert'
  | 'mongolianVert'
  | 'wordArtVertRtl'

export type TextVertOverflowTypeVal = 'overflow' | 'ellipsis' | 'clip'

export type TextWrappingTypeVal = 'none' | 'square'

export type TileFlipModeVal = 'none' | 'x' | 'y' | 'xy'

export interface document extends UnistNode {
  blip: Blip
  graphic: GraphicalObject
  tbl: Table
  tblStyleLst: TableStyleList
  theme: OfficeStyleSheet
  themeManager: EmptyElement
  themeOverride: BaseStylesOverride
  videoFile: VideoFile
}
export var document: document
