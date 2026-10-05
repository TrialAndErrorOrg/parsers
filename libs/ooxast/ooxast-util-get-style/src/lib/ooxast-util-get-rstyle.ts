import type { P, R, RPr, RPrMap } from 'ooxast'
import { select } from 'xast-util-select'
import { convertElement } from 'xast-util-is-element'

const isRPr = convertElement<RPr>('w:rPr')
export type RPrAttributes = keyof RPrMap
export type RPrJSON = RPrAttributes extends keyof RPrMap
  ? Partial<
      Record<
        `w:${RPrAttributes}`,
        NonNullable<RPrMap[RPrAttributes]>[number]['attributes'] | { 'w:val'?: string }
      >
    >
  : never

export function getRStyle(r: R | P): RPrJSON | undefined {
  const style = convertElement<P>('w:p')(r) ? select('w\\:pPr > w\\:rPr', r) : select('w\\:rPr', r)

  if (!isRPr(style)) return undefined

  return rPrToJson(style)
}

function rPrToJson(style: RPr) {
  return style.children.reduce((acc, curr) => {
    if (!curr.name) {
      return acc
    }

    acc[curr.name] = { 'w:val': 'true', ...curr?.attributes }

    return acc
  }, {} as RPrJSON)
}
