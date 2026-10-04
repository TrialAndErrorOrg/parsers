import { formatReferences } from './format-references.js'
import { describe, it, expect } from 'vitest'

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

// Calls the OpenAI API: needs OPENAI_API_KEY and network access, so it is skipped without a key.
// The model output is not deterministic, so only the shape of the result is checked against `res`.
describe.skipIf(!process.env.OPENAI_API_KEY)(
  'referenceParserChatgpt (needs OPENAI_API_KEY)',
  () => {
    it('should turn references into biblatex', async () => {
      const result = await formatReferences(references.split('\n'), { streamOutput: false })
      expect(typeof result).toBe('string')
      const keys = [...(result as string).matchAll(/@\w+\{([^,]+),/g)].map((m) => m[1])
      expect(keys).toEqual([...res.matchAll(/@\w+\{([^,]+),/g)].map((m) => m[1]))
    }, 100000)
  },
)
