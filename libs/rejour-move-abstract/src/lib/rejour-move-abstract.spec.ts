import { unified } from 'unified'
import { rejourParse, Settings } from 'rejour-parse'
import { astStringify } from 'ast-stringify'
import rejourMoveAbstract from './rejour-move-abstract'
import { rejourStringify } from 'rejour-stringify'
import { map } from 'unist-util-map'
import { reporter } from 'vfile-reporter'

const xmlWithAbstract = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE article PUBLIC "-//NLM//DTD JATS (Z39.96) Journal Publishing DTD v1.2 20190208//EN" "https://jats.nlm.nih.gov/publishing/1.2/JATS-journalpublishing1.dtd">
<article xmlns:xlink="http://www.w3.org/1999/xlink">
  <front>
    <article-meta>
      <title-group>
        <article-title>Are we meeting best practice standards?</article-title>
        <subtitle>A longitudinal analysis of mental health practices within the Florida child welfare system with implications for child well-being</subtitle>
      </title-group>
    </article-meta>
  </front>


  <body id="body">
    <p id="_paragraph-3">Doris Duke Fellowships for the Promotion of Child Well-Being 2017</p>
    <sec id="heading-b42e8565a4eef3b2f1b5736f8303c042">
      <title>Abstract </title>
      <p id="_paragraph-6">Best practice standards are one method by which medical providers ensure effective care, thus promoting well-being. Though formal guidelines have been recently implemented to direct and standardize children’s mental healthcare in Florida, little research has evaluated the extent to which they are executed in practice. This study aims to fill this gap by analyzing Florida Medicaid data. Individual-level data will be collected from a 12-month period from a random sample of children, on Medicaid, with a mental health diagnosis; to: 1) Describe the type and frequency of mental health services provided to this sample, including to those in the child welfare system; 2) Evaluate the extent to which Florida’s Psychotherapeutic Medication Treatment Guidelines are adhered to; and 3) Analyze sociodemographic characteristics, to determine if there are predictive factors which account for undertreatment/overtreatment. Data will be coded for congruence with these standards and analyzed using multinomial logistic regression. </p>
    </sec>
  </body>
</article>`

const proc = async (xml: string, settings?: Settings) => {
  return await unified()
    .use(rejourParse, settings)
    .use(rejourMoveAbstract)
    .use(rejourStringify)
    .process(xml)
}
describe('rejourMoveAbstract', () => {
  it('should move the abstract to the front', async () => {
    const ast = await proc(xmlWithAbstract, { removeWhiteSpace: false })

    // clean up all the positions
    // prettier-ignore
    expect(String(ast)).toEqual(`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE article PUBLIC "-//NLM//DTD JATS (Z39.96) Journal Publishing DTD v1.2 20190208//EN" "https://jats.nlm.nih.gov/publishing/1.2/JATS-journalpublishing1.dtd">
<article xmlns:xlink="http://www.w3.org/1999/xlink">
  <front>
    <article-meta>
      <title-group>
        <article-title>Are we meeting best practice standards?</article-title>
        <subtitle>A longitudinal analysis of mental health practices within the Florida child welfare system with implications for child well-being</subtitle>
      </title-group>
    <abstract>
    ${'  '}
      <p id="_paragraph-6">Best practice standards are one method by which medical providers ensure effective care, thus promoting well-being. Though formal guidelines have been recently implemented to direct and standardize children’s mental healthcare in Florida, little research has evaluated the extent to which they are executed in practice. This study aims to fill this gap by analyzing Florida Medicaid data. Individual-level data will be collected from a 12-month period from a random sample of children, on Medicaid, with a mental health diagnosis; to: 1) Describe the type and frequency of mental health services provided to this sample, including to those in the child welfare system; 2) Evaluate the extent to which Florida’s Psychotherapeutic Medication Treatment Guidelines are adhered to; and 3) Analyze sociodemographic characteristics, to determine if there are predictive factors which account for undertreatment/overtreatment. Data will be coded for congruence with these standards and analyzed using multinomial logistic regression. </p>
    </abstract></article-meta>
  </front>


  <body id="body">
    <p id="_paragraph-3">Doris Duke Fellowships for the Promotion of Child Well-Being 2017</p>
  ${'  '}
  </body>
</article>`)
  })
})
