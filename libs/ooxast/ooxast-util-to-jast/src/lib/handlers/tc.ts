import { all } from '../all.js'
import { J } from '../types.js'
import { Tc } from 'ooxast'
import { Td } from 'jast-types'
import { getPr } from 'ooxast-util-properties'

const createStyle = (
  name: string,
  style: Record<string, boolean | string | Record<string, string>>,
) =>
  Object.entries(style)
    ?.map(
      ([key, val]) =>
        `${name}${key?.at(0)?.toUpperCase()}${key?.slice(1)}: ${
          typeof val === 'object' && 'val' in val ? val.val : `${val}`
        }`,
    )
    .join('; ')

export function tc(j: J, node: Tc): Td {
  const properties = getPr(node)

  const { tcBorders, gridSpan, vAlign, shd } = properties

  const shdStyle =
    shd && typeof shd === 'object' ? `background-color: ${shd.fill}; color: ${shd.color}` : ''

  const borderStyle =
    tcBorders && typeof tcBorders === 'object'
      ? Object.entries(tcBorders)
          ?.map(([border, values]) =>
            typeof values === 'object'
              ? `border-${border}: ${values.sz}px ${
                  typeof values.val === 'string' && values.val?.includes('dash')
                    ? 'dashed'
                    : 'solid'
                } #${values.color}`
              : '',
          )
          ?.join('; ')
      : ''

  const style = [shdStyle, borderStyle].join('; ')

  const jatsProps = {
    ...(typeof gridSpan === 'object' &&
    'val' in gridSpan &&
    typeof gridSpan.val === 'string' &&
    +gridSpan.val > 1
      ? { colspan: gridSpan.val }
      : {}),
    ...(shdStyle ?? borderStyle ? { style } : {}),

    ...(typeof vAlign === 'object' && typeof vAlign?.val === 'string' && vAlign?.val !== 'top'
      ? { valign: vAlign.val }
      : {}),
  }

  return j(node, 'td', jatsProps, all(j, node)) as Td
}
