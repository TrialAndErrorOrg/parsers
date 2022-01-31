import { rejourParse } from 'rejour-parse'
import { rejourRelatex } from 'rejour-relatex'
import { relatexStringify } from 'relatex-stringify'
import { unified } from 'unified'

describe('fixtures', () => {
  const rejour = unified()
    .use(rejourParse)
    .use(rejourRelatex)
    .use(relatexStringify)
})
