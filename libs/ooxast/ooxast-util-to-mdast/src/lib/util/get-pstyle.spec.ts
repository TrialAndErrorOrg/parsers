import { P, PPr, R } from 'ooxast'
import { getPStyle } from './get-pstyle.js'

export const test: any = {
  type: 'element',
  name: 'w:p',
  attributes: {
    // "w14:paraId": "5B996EB1",
    // "w14:textId": "2E36A374",
    'w:rsidR': '004B624E',
    'w:rsidRPr': '002F797A',
    'w:rsidRDefault': '004B624E',
    'w:rsidP': '004B624E',
    'w:rsidDel': 'atsth',
  },
  children: [
    {
      type: 'element',
      name: 'w:pPr',
      attributes: {},
      children: [
        {
          type: 'element',
          name: 'w:pStyle',
          attributes: {
            'w:val': 'Heading1',
          },
          children: [],
        },
      ],
    } as PPr,
    {
      type: 'element',
      name: 'w:r',
      attributes: {},
      children: [
        {
          type: 'element',
          name: 'w:t',
          attributes: {},
          children: [
            {
              type: 'text',
              value: 'Take-Home Message',
            },
          ],
        },
      ],
    } as unknown as R,
  ],
}

it('should get the pstyle', () => {
  expect(getPStyle(test)).toEqual('Heading1')
})
