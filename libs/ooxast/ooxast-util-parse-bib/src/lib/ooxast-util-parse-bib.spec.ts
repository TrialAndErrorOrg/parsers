import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import { readFile } from 'fs/promises'
import { unified } from 'unified'
import {
  callAnystyleApi,
  callAnystyleCLI,
  findBib,
  bibToCSL,
  parseBib,
} from './ooxast-util-parse-bib'
import { toString } from 'xast-util-to-string'
import { writeFileSync } from 'fs'

async function getTree() {
  // If in node, get the correct docx uintarray like so
  const docxBuff = await readFile(__dirname + '/../fixtures/index.docx')
  const docxArr = new Uint8Array(docxBuff)

  // if in the browser, find some way
  // to read and convert a docxfile to uintarray

  const docxVFile = await docxToVFile(docxArr)

  const processor = unified().use(reoffParse)

  const docxTree = processor.parse(docxVFile)

  return docxTree
}

async function getBib() {
  const tree = await getTree()
  return bibToCSL(tree, {
    // when using your own web api
    apiUrl: 'https://someapiyousetup.vercel.app/api',
    //apiParams: {...}

    // when using it locally
    // if no options are entered, it will try to use
    // anystyle on your path, and will probably fail
    anyStylePath: '/usr/bin/anystyle',
  })
}

const tree = getTree()

describe('parseBib', () => {
  it('should find bib', async () => {
    const bibStart = findBib(await tree)
    expect(bibStart).toBeTruthy()
  })
  // it('should call anystyle cli', async () => {
  //   const bibStart = findBib(await tree)
  //   expect(bibStart).toBeDefined()
  //   if (!bibStart) return
  //   const bib = bibStart.join('\n')
  //   const csl = await callAnystyleCLI(bib)
  //   expect(csl).toMatchSnapshot()
  // })

  // it('should call anystyle api', async () => {
  //   const bibStart = findBib(await tree)
  //   expect(bibStart).toBeDefined()
  //   if (!bibStart) return
  //   const bib = bibStart.join('\n')
  //   const csl = await callAnystyleApi(
  //     bib,
  //     'https://anystyle-api-cote.vercel.app/api/style'
  //   )
  //   expect(csl).toMatchSnapshot()
  // })

  jest.setTimeout(20000)
  it('should crossref', async () => {
    const y = await parseBib(await tree, {
      mailto: 'support@centeroftrialanderror.com',
    })
    //console.log(y)
    expect(y).toMatchSnapshot()
  })
})
