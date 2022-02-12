import * as Primitive from '../../xml-primitives'
import * as r from '../officeDocument/relationships'
import * as s from '../officeDocument/sharedTypes'
import { RequiredMap } from '../../ooxast'

// Source files:
// http://localhost:3000/dml-main.xsd

import { Node as UnistNode } from 'unist'
export interface AdjPoint2D extends UnistNode {
  type: 'element'
  name: 'a:adjPoint2D'
  attributes: {
    x: string
    y: string
  }
  children: []
}

export interface AdjustHandleList extends UnistNode {
  type: 'element'
  name: 'a:adjustHandleList'
  //attributes: {}
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
    thresh: string
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
  //attributes: {}
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
  //attributes: {}
  children: RequiredMap<AlphaModulateEffectMap>[]
}

export interface AlphaModulateEffectMap {
  cont: EffectContainer
}

export interface AlphaModulateFixedEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaModulateFixedEffect'
  attributes: {
    amt?: string
  }
  children: []
}

export interface AlphaOutsetEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaOutsetEffect'
  attributes: {
    rad?: string
  }
  children: []
}

export interface AlphaReplaceEffect extends UnistNode {
  type: 'element'
  name: 'a:alphaReplaceEffect'
  attributes: {
    a: string
  }
  children: []
}

export interface Angle extends UnistNode {
  type: 'element'
  name: 'a:angle'
  attributes: {
    val: string
  }
  children: []
}

export interface AnimationChartBuildProperties extends UnistNode {
  type: 'element'
  name: 'a:animationChartBuildProperties'
  attributes: {
    animBg?: string
    bld?: string
  }
  children: []
}

export interface AnimationChartElement extends UnistNode {
  type: 'element'
  name: 'a:animationChartElement'
  attributes: {
    bldStep: ChartBuildStepVal
    categoryIdx?: string
    seriesIdx?: string
  }
  children: []
}

export interface AnimationDgmBuildProperties extends UnistNode {
  type: 'element'
  name: 'a:animationDgmBuildProperties'
  attributes: {
    bld?: string
    rev?: string
  }
  children: []
}

export interface AnimationDgmElement extends UnistNode {
  type: 'element'
  name: 'a:animationDgmElement'
  attributes: {
    bldStep?: DgmBuildStepVal
    id?: string
  }
  children: []
}

export interface AnimationElementChoice extends UnistNode {
  type: 'element'
  name: 'a:animationElementChoice'
  //attributes: {}
  children: RequiredMap<AnimationElementChoiceMap>[]
}

export interface AnimationElementChoiceMap {
  chart: AnimationChartElement
  dgm: AnimationDgmElement
}

export interface AnimationGraphicalObjectBuildProperties extends UnistNode {
  type: 'element'
  name: 'a:animationGraphicalObjectBuildProperties'
  //attributes: {}
  children: RequiredMap<AnimationGraphicalObjectBuildPropertiesMap>[]
}

export interface AnimationGraphicalObjectBuildPropertiesMap {
  bldChart: AnimationChartBuildProperties
  bldDgm: AnimationDgmBuildProperties
}

export interface AudioCD extends UnistNode {
  type: 'element'
  name: 'a:audioCD'
  //attributes: {}
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
    time?: string
    track: string
  }
  children: []
}

export interface AudioFile extends UnistNode {
  type: 'element'
  name: 'a:audioFile'
  attributes: {
    contentType?: string
    link: string
  }
  children: RequiredMap<AudioFileMap>[]
}

export interface AudioFileMap {
  extLst?: OfficeArtExtensionList
}

export interface Backdrop extends UnistNode {
  type: 'element'
  name: 'a:backdrop'
  //attributes: {}
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
  //attributes: {}
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
  //attributes: {}
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
  //attributes: {}
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
  //attributes: {}
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
    h?: string
    prst?: BevelPresetTypeVal
    w?: string
  }
  children: []
}

export interface BiLevelEffect extends UnistNode {
  type: 'element'
  name: 'a:biLevelEffect'
  attributes: {
    thresh: string
  }
  children: []
}

export interface BlendEffect extends UnistNode {
  type: 'element'
  name: 'a:blendEffect'
  attributes: {
    blend: BlendModeVal
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
    cstate?: BlipCompressionVal
    embed?: string
    link?: string
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
    dpi?: string
    rotWithShape?: string
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
    grow?: string
    rad?: string
  }
  children: []
}

export interface Boolean extends UnistNode {
  type: 'element'
  name: 'a:boolean'
  attributes: {
    val: string
  }
  children: []
}

export interface Camera extends UnistNode {
  type: 'element'
  name: 'a:camera'
  attributes: {
    fov?: string
    prst: PresetCameraTypeVal
    zoom?: string
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
    prstMaterial?: PresetMaterialTypeVal
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
  //attributes: {}
  children: RequiredMap<ClipboardStyleSheetMap>[]
}

export interface ClipboardStyleSheetMap {
  clrMap: ColorMapping
  themeElements: BaseStyles
}

export interface Color extends UnistNode {
  type: 'element'
  name: 'a:color'
  //attributes: {}
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
    useA?: string
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
    accent1: ColorSchemeIndexVal
    accent2: ColorSchemeIndexVal
    accent3: ColorSchemeIndexVal
    accent4: ColorSchemeIndexVal
    accent5: ColorSchemeIndexVal
    accent6: ColorSchemeIndexVal
    bg1: ColorSchemeIndexVal
    bg2: ColorSchemeIndexVal
    folHlink: ColorSchemeIndexVal
    hlink: ColorSchemeIndexVal
    tx1: ColorSchemeIndexVal
    tx2: ColorSchemeIndexVal
  }
  children: RequiredMap<ColorMappingMap>[]
}

export interface ColorMappingMap {
  extLst?: OfficeArtExtensionList
}

export interface ColorMappingOverride extends UnistNode {
  type: 'element'
  name: 'a:colorMappingOverride'
  //attributes: {}
  children: RequiredMap<ColorMappingOverrideMap>[]
}

export interface ColorMappingOverrideMap {
  masterClrMapping: EmptyElement
  overrideClrMapping: ColorMapping
}

export interface ColorMRU extends UnistNode {
  type: 'element'
  name: 'a:colorMRU'
  //attributes: {}
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
  //attributes: {}
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
    name: string
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
  //attributes: {}
  children: RequiredMap<ColorSchemeAndMappingMap>[]
}

export interface ColorSchemeAndMappingMap {
  clrMap?: ColorMapping
  clrScheme: ColorScheme
}

export interface ColorSchemeList extends UnistNode {
  type: 'element'
  name: 'a:colorSchemeList'
  //attributes: {}
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
    id: string
    idx: string
  }
  children: []
}

export interface ConnectionSite extends UnistNode {
  type: 'element'
  name: 'a:connectionSite'
  attributes: {
    ang: string
  }
  children: RequiredMap<ConnectionSiteMap>[]
}

export interface ConnectionSiteMap {
  pos: AdjPoint2D
}

export interface ConnectionSiteList extends UnistNode {
  type: 'element'
  name: 'a:connectionSiteList'
  //attributes: {}
  children: RequiredMap<ConnectionSiteListMap>[]
}

export interface ConnectionSiteListMap {
  cxn?: ConnectionSite[]
}

export interface ConnectorLocking extends UnistNode {
  type: 'element'
  name: 'a:connectorLocking'
  attributes: {
    noAdjustHandles?: string
    noChangeArrowheads?: string
    noChangeAspect?: string
    noChangeShapeType?: string
    noEditPoints?: string
    noGrp?: string
    noMove?: string
    noResize?: string
    noRot?: string
    noSelect?: string
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
    noAdjustHandles?: string
    noChangeArrowheads?: string
    noChangeAspect?: string
    noChangeShapeType?: string
    noEditPoints?: string
    noGrp?: string
    noMove?: string
    noResize?: string
    noRot?: string
    noSelect?: string
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
    name?: string
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
  //attributes: {}
  children: RequiredMap<CustomColorListMap>[]
}

export interface CustomColorListMap {
  custClr?: CustomColor[]
}

export interface CustomGeometry2D extends UnistNode {
  type: 'element'
  name: 'a:customGeometry2D'
  //attributes: {}
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
    d: string
    sp: string
  }
  children: []
}

export interface DashStopList extends UnistNode {
  type: 'element'
  name: 'a:dashStopList'
  //attributes: {}
  children: RequiredMap<DashStopListMap>[]
}

export interface DashStopListMap {
  ds?: DashStop[]
}

export interface DefaultShapeDefinition extends UnistNode {
  type: 'element'
  name: 'a:defaultShapeDefinition'
  //attributes: {}
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
  //attributes: {}
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
    name?: string
    type?: EffectContainerTypeVal
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
  //attributes: {}
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
  //attributes: {}
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
    ref: string
  }
  children: []
}

export interface EffectStyleItem extends UnistNode {
  type: 'element'
  name: 'a:effectStyleItem'
  //attributes: {}
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
  //attributes: {}
  children: RequiredMap<EffectStyleListMap>[]
}

export interface EffectStyleListMap {
  effectStyle: EffectStyleItem[]
}

export interface EmbeddedWAVAudioFile extends UnistNode {
  type: 'element'
  name: 'a:embeddedWAVAudioFile'
  attributes: {
    embed: string
    name?: string
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
  //attributes: {}
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
    blend: BlendModeVal
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
  //attributes: {}
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
  //attributes: {}
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
    val: string
  }
  children: []
}

export interface FlatText extends UnistNode {
  type: 'element'
  name: 'a:flatText'
  attributes: {
    z?: string
  }
  children: []
}

export interface FontCollection extends UnistNode {
  type: 'element'
  name: 'a:fontCollection'
  //attributes: {}
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
    idx: FontCollectionIndexVal
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
    name: string
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
    fmla: string
    name: string
  }
  children: []
}

export interface GeomGuideList extends UnistNode {
  type: 'element'
  name: 'a:geomGuideList'
  //attributes: {}
  children: RequiredMap<GeomGuideListMap>[]
}

export interface GeomGuideListMap {
  gd?: GeomGuide[]
}

export interface GeomRect extends UnistNode {
  type: 'element'
  name: 'a:geomRect'
  attributes: {
    b: string
    l: string
    r: string
    t: string
  }
  children: []
}

export interface GlowEffect extends UnistNode {
  type: 'element'
  name: 'a:glowEffect'
  attributes: {
    rad?: string
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
    flip?: TileFlipModeVal
    rotWithShape?: string
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
    pos: string
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
  //attributes: {}
  children: RequiredMap<GradientStopListMap>[]
}

export interface GradientStopListMap {
  gs: GradientStop[]
}

export interface GraphicalObject extends UnistNode {
  type: 'element'
  name: 'a:graphicalObject'
  //attributes: {}
  children: RequiredMap<GraphicalObjectMap>[]
}

export interface GraphicalObjectMap {
  graphicData: GraphicalObjectData
}

export interface GraphicalObjectData extends UnistNode {
  type: 'element'
  name: 'a:graphicalObjectData'
  attributes: {
    uri: string
  }
  children: []
}

export interface GraphicalObjectFrameLocking extends UnistNode {
  type: 'element'
  name: 'a:graphicalObjectFrameLocking'
  attributes: {
    noChangeAspect?: string
    noDrilldown?: string
    noGrp?: string
    noMove?: string
    noResize?: string
    noSelect?: string
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
    noChangeAspect?: string
    noGrp?: string
    noMove?: string
    noResize?: string
    noRot?: string
    noSelect?: string
    noUngrp?: string
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
    bwMode?: BlackWhiteModeVal
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
    flipH?: string
    flipV?: string
    rot?: string
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
  //attributes: {}
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
  //attributes: {}
  children: RequiredMap<GvmlConnectorNonVisualMap>[]
}

export interface GvmlConnectorNonVisualMap {
  cNvCxnSpPr: NonVisualConnectorProperties
  cNvPr: NonVisualDrawingProps
}

export interface GvmlGraphicalObjectFrame extends UnistNode {
  type: 'element'
  name: 'a:gvmlGraphicalObjectFrame'
  //attributes: {}
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
  //attributes: {}
  children: RequiredMap<GvmlGraphicFrameNonVisualMap>[]
}

export interface GvmlGraphicFrameNonVisualMap {
  cNvGraphicFramePr: NonVisualGraphicFrameProperties
  cNvPr: NonVisualDrawingProps
}

export interface GvmlGroupShape extends UnistNode {
  type: 'element'
  name: 'a:gvmlGroupShape'
  //attributes: {}
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
  //attributes: {}
  children: RequiredMap<GvmlGroupShapeNonVisualMap>[]
}

export interface GvmlGroupShapeNonVisualMap {
  cNvGrpSpPr: NonVisualGroupDrawingShapeProps
  cNvPr: NonVisualDrawingProps
}

export interface GvmlPicture extends UnistNode {
  type: 'element'
  name: 'a:gvmlPicture'
  //attributes: {}
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
  //attributes: {}
  children: RequiredMap<GvmlPictureNonVisualMap>[]
}

export interface GvmlPictureNonVisualMap {
  cNvPicPr: NonVisualPictureProperties
  cNvPr: NonVisualDrawingProps
}

export interface GvmlShape extends UnistNode {
  type: 'element'
  name: 'a:gvmlShape'
  //attributes: {}
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
  //attributes: {}
  children: RequiredMap<GvmlShapeNonVisualMap>[]
}

export interface GvmlShapeNonVisualMap {
  cNvPr: NonVisualDrawingProps
  cNvSpPr: NonVisualDrawingShapeProps
}

export interface GvmlTextShape extends UnistNode {
  type: 'element'
  name: 'a:gvmlTextShape'
  //attributes: {}
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
  //attributes: {}
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
    hue?: string
    lum?: string
    sat?: string
  }
  children: []
}

export interface Hyperlink extends UnistNode {
  type: 'element'
  name: 'a:hyperlink'
  attributes: {
    action?: string
    endSnd?: string
    highlightClick?: string
    history?: string
    id?: string
    invalidUrl?: string
    tgtFrame?: string
    tooltip?: string
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
    blurRad?: string
    dir?: string
    dist?: string
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
    dir: LightRigDirectionVal
    rig: LightRigTypeVal
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
    ang?: string
    scaled?: string
  }
  children: []
}

export interface LineEndProperties extends UnistNode {
  type: 'element'
  name: 'a:lineEndProperties'
  attributes: {
    len?: LineEndLengthVal
    type?: LineEndTypeVal
    w?: LineEndWidthVal
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
    lim?: string
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
    algn?: PenAlignmentVal
    cap?: LineCapVal
    cmpd?: CompoundLineVal
    w?: string
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
  //attributes: {}
  children: RequiredMap<LineStyleListMap>[]
}

export interface LineStyleListMap {
  ln: LineProperties[]
}

export interface LuminanceEffect extends UnistNode {
  type: 'element'
  name: 'a:luminanceEffect'
  attributes: {
    bright?: string
    contrast?: string
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
  //attributes: {}
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
    isComment?: string
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
    descr?: string
    hidden?: string
    id: string
    name: string
    title?: string
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
    txBox?: string
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
  //attributes: {}
  children: RequiredMap<NonVisualGraphicFramePropertiesMap>[]
}

export interface NonVisualGraphicFramePropertiesMap {
  extLst?: OfficeArtExtensionList
  graphicFrameLocks?: GraphicalObjectFrameLocking
}

export interface NonVisualGroupDrawingShapeProps extends UnistNode {
  type: 'element'
  name: 'a:nonVisualGroupDrawingShapeProps'
  //attributes: {}
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
    preferRelativeResize?: string
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
  //attributes: {}
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
    uri: string
  }
  children: []
}

export interface OfficeArtExtensionList extends UnistNode {
  type: 'element'
  name: 'a:officeArtExtensionList'
  //attributes: {}
  children: RequiredMap<OfficeArtExtensionListMap>[]
}

export interface OfficeArtExtensionListMap {
  ext?: OfficeArtExtension[]
}

export interface OfficeStyleSheet extends UnistNode {
  type: 'element'
  name: 'a:officeStyleSheet'
  attributes: {
    name?: string
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
    algn?: RectAlignmentVal
    blurRad?: string
    dir?: string
    dist?: string
    kx?: string
    ky?: string
    rotWithShape?: string
    sx?: string
    sy?: string
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
    extrusionOk?: string
    fill?: PathFillModeVal
    h?: string
    stroke?: string
    w?: string
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
    hR: string
    stAng: string
    swAng: string
    wR: string
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
  //attributes: {}
  children: RequiredMap<Path2DCubicBezierToMap>[]
}

export interface Path2DCubicBezierToMap {
  pt: AdjPoint2D[]
}

export interface Path2DLineTo extends UnistNode {
  type: 'element'
  name: 'a:path2DLineTo'
  //attributes: {}
  children: RequiredMap<Path2DLineToMap>[]
}

export interface Path2DLineToMap {
  pt: AdjPoint2D
}

export interface Path2DList extends UnistNode {
  type: 'element'
  name: 'a:path2DList'
  //attributes: {}
  children: RequiredMap<Path2DListMap>[]
}

export interface Path2DListMap {
  path?: Path2D[]
}

export interface Path2DMoveTo extends UnistNode {
  type: 'element'
  name: 'a:path2DMoveTo'
  //attributes: {}
  children: RequiredMap<Path2DMoveToMap>[]
}

export interface Path2DMoveToMap {
  pt: AdjPoint2D
}

export interface Path2DQuadBezierTo extends UnistNode {
  type: 'element'
  name: 'a:path2DQuadBezierTo'
  //attributes: {}
  children: RequiredMap<Path2DQuadBezierToMap>[]
}

export interface Path2DQuadBezierToMap {
  pt: AdjPoint2D[]
}

export interface PathShadeProperties extends UnistNode {
  type: 'element'
  name: 'a:pathShadeProperties'
  attributes: {
    path?: PathShadeTypeVal
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
    prst?: PresetPatternValVal
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
    val: string
  }
  children: []
}

export interface PictureLocking extends UnistNode {
  type: 'element'
  name: 'a:pictureLocking'
  attributes: {
    noAdjustHandles?: string
    noChangeArrowheads?: string
    noChangeAspect?: string
    noChangeShapeType?: string
    noCrop?: string
    noEditPoints?: string
    noGrp?: string
    noMove?: string
    noResize?: string
    noRot?: string
    noSelect?: string
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
    x: string
    y: string
  }
  children: []
}

export interface Point3D extends UnistNode {
  type: 'element'
  name: 'a:point3D'
  attributes: {
    x: string
    y: string
    z: string
  }
  children: []
}

export interface PolarAdjustHandle extends UnistNode {
  type: 'element'
  name: 'a:polarAdjustHandle'
  attributes: {
    gdRefAng?: string
    gdRefR?: string
    maxAng?: string
    maxR?: string
    minAng?: string
    minR?: string
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
    val: string
  }
  children: []
}

export interface PositiveFixedPercentage extends UnistNode {
  type: 'element'
  name: 'a:positiveFixedPercentage'
  attributes: {
    val: string
  }
  children: []
}

export interface PositivePercentage extends UnistNode {
  type: 'element'
  name: 'a:positivePercentage'
  attributes: {
    val: string
  }
  children: []
}

export interface PositiveSize2D extends UnistNode {
  type: 'element'
  name: 'a:positiveSize2D'
  attributes: {
    cx: string
    cy: string
  }
  children: []
}

export interface PresetColor extends UnistNode {
  type: 'element'
  name: 'a:presetColor'
  attributes: {
    val: PresetColorValVal
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
    prst: ShapeTypeVal
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
    val?: PresetLineDashValVal
  }
  children: []
}

export interface PresetShadowEffect extends UnistNode {
  type: 'element'
  name: 'a:presetShadowEffect'
  attributes: {
    dir?: string
    dist?: string
    prst: PresetShadowValVal
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
    prst: TextShapeTypeVal
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
    link: string
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
    d: string
    n: string
  }
  children: []
}

export interface ReflectionEffect extends UnistNode {
  type: 'element'
  name: 'a:reflectionEffect'
  attributes: {
    algn?: RectAlignmentVal
    blurRad?: string
    dir?: string
    dist?: string
    endA?: string
    endPos?: string
    fadeDir?: string
    kx?: string
    ky?: string
    rotWithShape?: string
    stA?: string
    stPos?: string
    sx?: string
    sy?: string
  }
  children: []
}

export interface RegularTextRun extends UnistNode {
  type: 'element'
  name: 'a:regularTextRun'
  //attributes: {}
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
    tx?: string
    ty?: string
  }
  children: []
}

export interface RelativeRect extends UnistNode {
  type: 'element'
  name: 'a:relativeRect'
  attributes: {
    b?: string
    l?: string
    r?: string
    t?: string
  }
  children: []
}

export interface Scale2D extends UnistNode {
  type: 'element'
  name: 'a:scale2D'
  //attributes: {}
  children: RequiredMap<Scale2DMap>[]
}

export interface Scale2DMap {
  sx: Ratio
  sy: Ratio
}

export interface Scene3D extends UnistNode {
  type: 'element'
  name: 'a:scene3D'
  //attributes: {}
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
    val: SchemeColorValVal
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
    b: string
    g: string
    r: string
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
    contourW?: string
    extrusionH?: string
    prstMaterial?: PresetMaterialTypeVal
    z?: string
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
    noAdjustHandles?: string
    noChangeArrowheads?: string
    noChangeAspect?: string
    noChangeShapeType?: string
    noEditPoints?: string
    noGrp?: string
    noMove?: string
    noResize?: string
    noRot?: string
    noSelect?: string
    noTextEdit?: string
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
    bwMode?: BlackWhiteModeVal
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
  //attributes: {}
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
    rad: string
  }
  children: []
}

export interface SolidColorFillProperties extends UnistNode {
  type: 'element'
  name: 'a:solidColorFillProperties'
  //attributes: {}
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
    lat: string
    lon: string
    rev: string
  }
  children: []
}

export interface SRgbColor extends UnistNode {
  type: 'element'
  name: 'a:sRgbColor'
  attributes: {
    val: string
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
  //attributes: {}
  children: RequiredMap<StretchInfoPropertiesMap>[]
}

export interface StretchInfoPropertiesMap {
  fillRect?: RelativeRect
}

export interface StyleMatrix extends UnistNode {
  type: 'element'
  name: 'a:styleMatrix'
  attributes: {
    name?: string
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
    idx: string
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
    script: string
    typeface: string
  }
  children: []
}

export interface SystemColor extends UnistNode {
  type: 'element'
  name: 'a:systemColor'
  attributes: {
    lastClr?: string
    val: SystemColorValVal
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
  //attributes: {}
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
  //attributes: {}
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
    gridSpan?: string
    hMerge?: string
    id?: string
    rowSpan?: string
    vMerge?: string
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
  //attributes: {}
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
    anchor?: TextAnchoringTypeVal
    anchorCtr?: string
    horzOverflow?: TextHorzOverflowTypeVal
    marB?: string
    marL?: string
    marR?: string
    marT?: string
    vert?: TextVerticalTypeVal
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
    w: string
  }
  children: RequiredMap<TableColMap>[]
}

export interface TableColMap {
  extLst?: OfficeArtExtensionList
}

export interface TableGrid extends UnistNode {
  type: 'element'
  name: 'a:tableGrid'
  //attributes: {}
  children: RequiredMap<TableGridMap>[]
}

export interface TableGridMap {
  gridCol?: TableCol[]
}

export interface TablePartStyle extends UnistNode {
  type: 'element'
  name: 'a:tablePartStyle'
  //attributes: {}
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
    bandCol?: string
    bandRow?: string
    firstCol?: string
    firstRow?: string
    lastCol?: string
    lastRow?: string
    rtl?: string
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
    h: string
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
    styleId: string
    styleName: string
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
  //attributes: {}
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
    def: string
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
    b?: OnOffStyleTypeVal
    i?: OnOffStyleTypeVal
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
    startAt?: string
    type: TextAutonumberSchemeVal
  }
  children: []
}

export interface TextBlipBullet extends UnistNode {
  type: 'element'
  name: 'a:textBlipBullet'
  //attributes: {}
  children: RequiredMap<TextBlipBulletMap>[]
}

export interface TextBlipBulletMap {
  blip: Blip
}

export interface TextBody extends UnistNode {
  type: 'element'
  name: 'a:textBody'
  //attributes: {}
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
    anchor?: TextAnchoringTypeVal
    anchorCtr?: string
    bIns?: string
    compatLnSpc?: string
    forceAA?: string
    fromWordArt?: string
    horzOverflow?: TextHorzOverflowTypeVal
    lIns?: string
    numCol?: string
    rIns?: string
    rot?: string
    rtlCol?: string
    spcCol?: string
    spcFirstLastPara?: string
    tIns?: string
    upright?: string
    vert?: TextVerticalTypeVal
    vertOverflow?: TextVertOverflowTypeVal
    wrap?: TextWrappingTypeVal
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
    val: string
  }
  children: []
}

export interface TextBulletSizePoint extends UnistNode {
  type: 'element'
  name: 'a:textBulletSizePoint'
  attributes: {
    val: string
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
    altLang?: string
    b?: string
    baseline?: string
    bmk?: string
    cap?: TextCapsTypeVal
    dirty?: string
    err?: string
    i?: string
    kern?: string
    kumimoji?: string
    lang?: string
    noProof?: string
    normalizeH?: string
    smtClean?: string
    smtId?: string
    spc?: string
    strike?: TextStrikeTypeVal
    sz?: string
    u?: TextUnderlineTypeVal
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
    char: string
  }
  children: []
}

export interface TextField extends UnistNode {
  type: 'element'
  name: 'a:textField'
  attributes: {
    id: string
    type?: string
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
    charset?: string
    panose?: string
    pitchFamily?: PitchFamilyVal
    typeface: string
  }
  children: []
}

export interface TextLineBreak extends UnistNode {
  type: 'element'
  name: 'a:textLineBreak'
  //attributes: {}
  children: RequiredMap<TextLineBreakMap>[]
}

export interface TextLineBreakMap {
  rPr?: TextCharacterProperties
}

export interface TextListStyle extends UnistNode {
  type: 'element'
  name: 'a:textListStyle'
  //attributes: {}
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
    fontScale?: string
    lnSpcReduction?: string
  }
  children: []
}

export interface TextParagraph extends UnistNode {
  type: 'element'
  name: 'a:textParagraph'
  //attributes: {}
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
    algn?: TextAlignTypeVal
    defTabSz?: string
    eaLnBrk?: string
    fontAlgn?: TextFontAlignTypeVal
    hangingPunct?: string
    indent?: string
    latinLnBrk?: string
    lvl?: string
    marL?: string
    marR?: string
    rtl?: string
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
  //attributes: {}
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
    val: string
  }
  children: []
}

export interface TextSpacingPoint extends UnistNode {
  type: 'element'
  name: 'a:textSpacingPoint'
  attributes: {
    val: string
  }
  children: []
}

export interface TextTabStop extends UnistNode {
  type: 'element'
  name: 'a:textTabStop'
  attributes: {
    algn?: TextTabAlignTypeVal
    pos?: string
  }
  children: []
}

export interface TextTabStopList extends UnistNode {
  type: 'element'
  name: 'a:textTabStopList'
  //attributes: {}
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
  //attributes: {}
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
  //attributes: {}
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
    algn?: RectAlignmentVal
    flip?: TileFlipModeVal
    sx?: string
    sy?: string
    tx?: string
    ty?: string
  }
  children: []
}

export interface TintEffect extends UnistNode {
  type: 'element'
  name: 'a:tintEffect'
  attributes: {
    amt?: string
    hue?: string
  }
  children: []
}

export interface Transform2D extends UnistNode {
  type: 'element'
  name: 'a:transform2D'
  attributes: {
    flipH?: string
    flipV?: string
    rot?: string
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
    kx?: string
    ky?: string
    sx?: string
    sy?: string
    tx?: string
    ty?: string
  }
  children: []
}

export interface Vector3D extends UnistNode {
  type: 'element'
  name: 'a:vector3D'
  attributes: {
    dx: string
    dy: string
    dz: string
  }
  children: []
}

export interface VideoFile extends UnistNode {
  type: 'element'
  name: 'a:videoFile'
  attributes: {
    contentType?: string
    link: string
  }
  children: RequiredMap<VideoFileMap>[]
}

export interface VideoFileMap {
  extLst?: OfficeArtExtensionList
}

export interface WholeE2oFormatting extends UnistNode {
  type: 'element'
  name: 'a:wholeE2oFormatting'
  //attributes: {}
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
    gdRefX?: string
    gdRefY?: string
    maxX?: string
    maxY?: string
    minX?: string
    minY?: string
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

export type AnimationChartOnlyBuildTypeVal =
  | 'series'
  | 'category'
  | 'seriesEl'
  | 'categoryEl'

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

export type BlipCompressionVal =
  | 'email'
  | 'screen'
  | 'print'
  | 'hqprint'
  | 'none'

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

export type LightRigDirectionVal =
  | 'tl'
  | 't'
  | 'tr'
  | 'l'
  | 'r'
  | 'bl'
  | 'b'
  | 'br'

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

export type LineEndTypeVal =
  | 'none'
  | 'triangle'
  | 'stealth'
  | 'diamond'
  | 'oval'
  | 'arrow'

export type LineEndWidthVal = 'sm' | 'med' | 'lg'

export type LineWidthVal = number

export type OnOffStyleTypeVal = 'on' | 'off' | 'def'

export type PathFillModeVal =
  | 'none'
  | 'norm'
  | 'lighten'
  | 'lightenLess'
  | 'darken'
  | 'darkenLess'

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

export type RectAlignmentVal =
  | 'tl'
  | 't'
  | 'tr'
  | 'l'
  | 'ctr'
  | 'r'
  | 'bl'
  | 'b'
  | 'br'

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

export type TextAlignTypeVal =
  | 'l'
  | 'ctr'
  | 'r'
  | 'just'
  | 'justLow'
  | 'dist'
  | 'thaiDist'

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
