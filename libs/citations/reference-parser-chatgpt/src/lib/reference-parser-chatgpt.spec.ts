import { formatReferences } from './format-references.js'

const references = `Bennett, C. (2022). Open science from a qualitative, feminist perspective: Epistemological dogmas and a call for critical examination in JATS. Psychology of Women Quarterly, 45(4), 448-456. https://doi.org/10.1177/03616843211036460
Bennett, C., Fitzpatrick-Harnish, K., & Talbot, B. (2022). Collaborative untangling of positionality, ownership, and answerability as white researchers in indigenous spaces. International Journal of Music Education, 40(4), 628-641.`

const res = `@article{Bennett2022,
  author = {Bennett, C.},
  year = {2022},
  title = {Open science from a qualitative, feminist perspective: {E}pistemological dogmas and a call for critical examination in {JATS},
  journal = {Psychology of Women Quarterly},
  volume = {45},
  number = {4},
  pages = {448-456},
  doi = {10.1177/03616843211036460}
}
@article{Bennett2022a,
  author = {Bennett, C. and Fitzpatrick-Harnish, K. and Talbot, B.},
  year = {2022},
  title = {Collaborative untangling of positionality, ownership, and answerability as white researchers in indigenous spaces},
  journal = {International Journal of Music Education},
  volume = {40},
  number = {4},
  pages = {628-641},
}`

const othertest = `“Access controls.” (2020). Qualitative Data Repository. https://qdr.syr.edu/guidance/human-participants/access-controls
Bennett, E. A. (2021). Open science from a qualitative, feminist perspective: Epistemological dogmas and a call for critical examination. Psychology of Women Quarterly, 45(4), 448-456. https://doi.org/10.1177/03616843211036460
Bennett, C., Fitzpatrick-Harnish, K., & Talbot, B. (2022). Collaborative untangling of positionality, ownership, and answerability as white researchers in indigenous spaces. International Journal of Music Education, 40(4), 628-641.
Billups, F.D. (2014). Trustworthiness and the quest for rigor in qualitative research. NERA Researcher, 52, 10-12. https://www.nera-education.org/docs/TNR_Fall_2014_Color_Final.pdf 
Birks, M., Chapman, Y., & Francis, K. (2008). Memoing in qualitative research: Probing data and processes. Journal of Research in Nursing, 13(1), 68-75. https://doi.org/10.1177/1744987107081254 
Bornstein, J., Lustick, H., Shallish, L., Hannon, L. & Okilwa, N. (2022, April). Active Accountability for Disproportionate Discipline and Disability Classification Highlights Student Agency, Contextualization, and Racialization. Paper presented at the American Educational Research Association 2022 Conference, San Diego, California (and Virtually).
Caretta, M. A. (2016). Member checking: A feminist participatory analysis of the use of preliminary results pamphlets in cross-cultural, cross-language research. Qualitative Research, 16(3), 305-318. https://doi.org/1177/1468794115606495
Caretta, M.A., & Perez, M.A. (2019). When participants do not agree: Member checking and challenges to epistemic authority in participatory research. Field Methods, 31(4), 359-374. https://doi.org/10.1177/1525822X19866578
Clancy, M. (2013). Is reflexivity the key to minimising problems of interpretation in phenomenological research? Nurse Researcher, 20(6), 12-16. https://doi.org/10.7748/nr2013.07.20.6.12.e1209 
Clarke, V. (2022). Navigating the messy swamp of qualitative research: Are generic reporting standards the answer? Qualitative Research in Psychology, 19(4), 1004-1012. https://doi.org/10.1080/14780887.2021.1995555 
Corker, K. Davis-Kean, P. Eldon Whylly, K. & Steltenpohl, C. N. (2022). The importance of updating registrations: A round table discussion. Center for Open Science. https://www.youtube.com/watch?v=6JfsBC31en4 
Creswell, J. W., & Miller, D. L. (2000). Determining validity in qualitative inquiry, Theory Into Practice, 39(3), 124-130. https://doi.org/10.1207/s15430421tip3903_2
— & Poth, C.N. (2018). Qualitative inquiry & research design: Choosing among five approaches (4th edition). SAGE.
Cummings, J. A., Zagrodney, J. M., & Day, T. E. (2015). Impact of open data policies on consent to participate in human subjects research: Discrepancies between participant action and reported concerns. PLoS One, 10(5), e0125208. https://doi.org/10.1371/journal.pone.0125208 
Davies, D., & Dodd, J. (2002). Qualitative research and the question of rigor. Qualitative Health Researcher, 12(2), 279-289. https://doi.org/10.1177/104973230201200211
DeHaven, A. (2017). Preregistration: A plan, not a prison. Center for Open Science. https://www.cos.io/blog/preregistration-plan-not-prison 
Elson, M. (2021). [@maltoesermalte]. (2021, May 7).I'm all in favor of data sharing, even mandatory where possible, but I've now repeatedly seen datasets on @OSFramework that [Image attached] [Tweet]. Twitter. https://web.archive.org/web/20210929155622/https://twitter.com/maltoesermalte/status/1390758338321952770
`

describe('referenceParserChatgpt', () => {
  it('should work', async () => {
    const result = await formatReferences(othertest.split('\n'))
    console.log(result)
    expect(result).toEqual(res)
  }, 100000)
})
