import { all } from '../all'
import { J } from '../types'
import { Tc } from 'ooxast'
import { Td } from 'jast-types'
import { getPr } from 'ooxast-util-properties'

const createStyle = (
  name: string,
  style: Record<string, boolean | string | Record<string, string>>
) =>
  Object.entries(style)
    ?.map(
      ([key, val]) =>
        `${name}${key?.at(0)?.toUpperCase()}${key?.slice(1)}: ${
          val?.val ? val.val : `${val}`
        }`
    )
    .join('; ')

export function tc(j: J, node: Tc): Td {
  const properties = getPr(node)

  const { tcBorders, gridSpan, vAlign, shd } = properties

  const shdStyle =
    shd && typeof shd === 'object'
      ? `background-color: ${shd.fill}; color: ${shd.color}`
      : ''

  const borderStyle =
    tcBorders && typeof tcBorders === 'object'
      ? Object.entries(tcBorders)
          ?.map(
            ([border, values]) =>
              `border-${border}: ${values.sz}px ${
                values.val?.includes('dash') ? 'dashed' : 'solid'
              } #${values.color}`
          )
          ?.join('; ')
      : ''

  // const borderStyle =
  //   tcBorders && typeof tcBorders === 'object'
  //     ? createStyle('border', tcBorders)
  //     : ''

  const style = [shdStyle, borderStyle].join('; ')

  const jatsProps = {
    ...(gridSpan && gridSpan.val && +gridSpan.val > 1
      ? { colspan: gridSpan.val }
      : {}),
    ...(shdStyle ?? borderStyle ? { style } : {}),

    ...(vAlign && vAlign?.val !== 'top' ? { valign: vAlign.val } : {}),
  }

  return j(node, 'td', jatsProps, all(j, node)) as Td
}
