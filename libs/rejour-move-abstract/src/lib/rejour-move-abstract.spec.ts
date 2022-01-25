import { unified } from 'unified'
import { rejourParse } from '@jote/rejour-parse'
import { astStringify } from '@jote/json-stringifier'
import rejourMoveAbstract from './rejour-move-abstract'
import { visit } from 'unist-util-visit'
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
    </sec>`

describe('rejourMoveAbstract', () => {
  it('should work', async () => {
    console.log(xmlWithAbstract)
    const proc = await unified()
      .use(rejourParse)
      .use(rejourMoveAbstract)
      .use(astStringify)
      .process(xmlWithAbstract)

    console.log(proc)
    console.log(String(proc))

    const ast = JSON.parse(String(proc))
    visit(ast, (node) => {
      const { position, ...rest } = node
      node = rest
    })
    console.dir(ast, { depth: null })
    expect(String(proc)).toEqual('h')
  })
})
