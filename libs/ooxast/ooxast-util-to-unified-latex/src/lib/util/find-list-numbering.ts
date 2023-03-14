import { DecimalNumber, Jc, LevelText, NumFmt, StringTag } from 'ooxast'
import { Root } from 'xast'
import { fromXml } from 'xast-util-from-xml'

type NumId = Record<
  string,
  {
    [lvlId: string]: {
      lvlText: string
      lvlJc: string
      numFmt: string
      start: string
    }
  }
>

export type ListNumbering = {
  numIds: NumId
  abstractNumIds: NumId
}

export function findListNumbering(numbering: string | Root) {
  const parsedNumbering = typeof numbering === 'string' ? fromXml(numbering) : numbering

  const numberingElement = parsedNumbering.children.find(
    (child) => child.type === 'element' && child.name === 'w:numbering',
  )

  if (
    !numberingElement ||
    numberingElement.type !== 'element' ||
    !numberingElement.children ||
    !numberingElement.children.length
  ) {
    return undefined
  }

  const abstractNums = numberingElement.children.reduce(
    (acc, child) => {
      if (child.type !== 'element') {
        return acc
      }
      if (child.name === 'w:num') {
        const numId = child.attributes?.['w:numId']
        const abstractNum = child.children.find(
          (child): child is DecimalNumber =>
            child.type === 'element' && child.name === 'w:abstractNumId',
        )
        if (!numId || !abstractNum) {
          return acc
        }

        const abstractNumId = abstractNum?.attributes?.['w:val']

        if (!numId || !abstractNumId) {
          return acc
        }

        const abstractNumData = acc.abstractNumIds[abstractNumId]

        acc.numIds[numId] = abstractNumData
        return acc
      }

      if (child.name !== 'w:abstractNum') {
        return acc
      }

      const abstractNumId = child.attributes?.['w:abstractNumId']

      if (!abstractNumId) {
        return acc
      }

      const data = child.children.reduce((acc, child) => {
        if (child.type !== 'element' || child.name !== 'w:lvl') {
          return acc
        }

        const lvlId = child.attributes?.['w:ilvl']

        if (!lvlId) {
          return acc
        }

        const lvlText = child.children.find(
          (child): child is LevelText => child.type === 'element' && child.name === 'w:lvlText',
        )

        const lvlJc = child.children.find(
          (child): child is Jc => child.type === 'element' && child.name === 'w:lvlJc',
        )

        const numFmt = child.children.find(
          (child): child is NumFmt => child.type === 'element' && child.name === 'w:numFmt',
        )

        const start = child.children.find(
          (child): child is StringTag<'start'> =>
            child.type === 'element' && child.name === 'w:start',
        )

        acc[lvlId] = {
          lvlText: lvlText?.attributes?.['w:val'] || '',
          lvlJc: lvlJc?.attributes?.['w:val'] || '',
          numFmt: numFmt?.attributes?.['w:val'] || '',
          start: start?.attributes?.['w:val'] || '',
        }

        return acc
      }, {} as ListNumbering['abstractNumIds'][string])

      acc.abstractNumIds[abstractNumId] = data

      return acc
    },
    { abstractNumIds: {}, numIds: {} } as ListNumbering,
  )

  return abstractNums
}
