import { P, R, RPr, RPrMap } from 'ooxast'
import { select } from 'xast-util-select'
import { convertElement } from 'xast-util-is-element'

const isRPr = convertElement<RPr>('w:rPr')
export type RPrAttributes = keyof RPrMap
export type RPrJSON = RPrAttributes extends keyof RPrMap
  ? Partial<
      Record<
        `w:${RPrAttributes}`,
        RPrMap[RPrAttributes] | { 'w:val'?: boolean }
      >
    >
  : never

export function getRStyle(r: R): RPrJSON {
  const style = select('w\\:rPr', r)
  if (!isRPr(style)) return {}

  return style.children.reduce((acc, curr) => {
    if (!curr.name) return acc

    const { 'w:val': val, ...attrs } = curr?.attributes
    acc[curr.name] = { ...attrs, 'w:val': true }

    return acc
  }, {} as RPrJSON)
}
