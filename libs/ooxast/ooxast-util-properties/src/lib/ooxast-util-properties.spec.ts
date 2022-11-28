import { Element } from 'xast'
import { fromXml } from 'xast-util-from-xml'
import { getPr } from './ooxast-util-properties'

describe('ooxastUtilProperties', () => {
  const pPr =
    fromXml(`<w:p w14:paraId="1F238EC7" w14:textId="77777777" w:rsidR="00C760E8" w:rsidRPr="00F96002" w:rsidRDefault="00A80AFD">
  <w:pPr>
    <w:keepNext/>
    <w:widowControl w:val="0"/>
    <w:spacing w:after="0" w:line="240" w:lineRule="auto"/>
    <w:rPr>
      <w:rFonts w:ascii="Times New Roman" w:eastAsia="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
      <w:color w:val="000000"/>
      <w:sz w:val="24"/>
      <w:szCs w:val="24"/>
    </w:rPr>
  </w:pPr>
  <w:r w:rsidRPr="00CC3E76">
    <w:rPr>
      <w:rFonts w:ascii="Times New Roman" w:eastAsia="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
      <w:color w:val="000000"/>
      <w:sz w:val="24"/>
      <w:szCs w:val="24"/>
    </w:rPr>
    <w:t>Government source funding</w:t>
  </w:r>
</w:p>`)

  it('should work', () => {
    expect(getPr(pPr?.children?.[0] as Element)).toEqual({
      keepNext: true,
      widowControl: {
        val: '0',
      },
      spacing: {
        after: '0',
        line: '240',
        lineRule: 'auto',
      },
      rPr: {
        rFonts: {
          ascii: 'Times New Roman',
          eastAsia: 'Times New Roman',
          hAnsi: 'Times New Roman',
          cs: 'Times New Roman',
        },
        color: {
          val: '000000',
        },
        sz: {
          val: '24',
        },
        szCs: {
          val: '24',
        },
      },
    })
  })
})
