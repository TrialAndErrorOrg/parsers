import { PreambleCommand } from 'texast-util-add-preamble'
import create from 'zustand'
import { format } from 'date-fns'
import { combine } from 'zustand/middleware'

export interface InitialState {
  input: null | ArrayBuffer
  // inXML: string | null
  // inTex: string | null
  // outDoc: ArrayBuffer | null
  // outXML: string | null
  output: string | null
  meta: Form | null
  preamble: PreambleCommand[]
}
export interface Set {
  // setInDoc: (doc: ArrayBuffer) => void
  // setOutDoc: (doc: ArrayBuffer) => void
  // setInXML: (doc: string) => void
  // setOutXML: (doc: string) => void
  // setInTex: (doc: string) => void
  // setOutTex: (doc: string) => void
  setInput: (doc: ArrayBuffer) => void
  setOutput: (doc: string) => void
  setMeta: (form: Form) => void
  setPreamble: (form: Form) => void
}

export const useStore = create(
  combine<InitialState, Set>(
    {
      input: null,
      output: null,
      meta: null,
      preamble: [],
    },
    (set) => ({
      setInput: (val: ArrayBuffer) =>
        set((state) => ({ ...state, input: val })),
      setOutput: (val: string) => set((state) => ({ ...state, output: val })),
      setMeta: (form: Form) => set((state) => ({ ...state, meta: form })),
      setPreamble: (form: Form) =>
        set((state) => ({ ...state, preamble: metaToPreamble(form) })),
      // setInDoc: (val: ArrayBuffer) =>
      //   set((state) => ({ ...state, inDoc: val })),
      // setInXML: (val: string) => set((state) => ({ ...state, inXML: val })),
      // setInTex: (val: string) => set((state) => ({ ...state, inTex: val })),
      // setOutDoc: (val: ArrayBuffer) =>
      //   set((state) => ({ ...state, outDoc: val })),
      // setOutXML: (val: string) => set((state) => ({ ...state, outXML: val })),
      // setOutTex: (val: string) => set((state) => ({ ...state, outTex: val })),
    })
  )
)
interface Form {
  documentclassname: string
  documentclassopt: string
  title: string
  keywordsabstract: string
  abstract: string
  runningauthor: string
  jyear: string
  acknowledgments: string
  funding: string
  doi: string
  jvolume: string
  jissue: string
  jpages: string
  paperreceived: string
  authors: Author[]
  paperaccepted: string
  jname: string
  paperpublished: string
  jwebsite: string
}

interface Author {
  givenName: string
  familyName: string
  affiliation: string
  orcid: string
  email: string
}

export const metaToPreamble = (form: Form): PreambleCommand[] => {
  const numbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
  ]

  const preamble = Object.entries(form).reduce(
    (acc: PreambleCommand[], curr: [key: string, value: any]) => {
      const [key, value] = curr
      if (!value || typeof value === 'number') return acc
      switch (key) {
        case 'documentclassname':
        case 'documentclassopt':
          return acc
        case 'abstract': {
          acc.push({
            type: 'abstracttext',
            args: [value?.replace(/<\/p>/g, '')],
          })
          return acc
        }
        case 'title': {
          acc.push({ type: 'jotetitle', args: [value] })
          return acc
        }
        case 'authors': {
          const auths = value.flatMap((auth: Author, index: number) => {
            return [
              {
                type: 'author',
                args: [
                  `${auth.givenName} ${auth.familyName}`,
                  ...(auth.orcid
                    ? [{ type: 'orcid', args: [auth.orcid] }]
                    : []),
                ],
                opts: [`${index + 1}`],
              },
              {
                type: `author${numbers[index + 1]}`,
                args: [`${auth.givenName} ${auth.familyName}`],
              },
              {
                type: `affil`,
                opts: [`${index + 1}`],
                args: [auth.affiliation],
              },
              ...(index === 0
                ? [
                    {
                      type: 'corremail',
                      args: [
                        {
                          type: 'href',
                          args: [`mailto:${auth.email}`, auth.email],
                        },
                      ],
                    },
                  ]
                : []),
              ...(index === 0
                ? [{ type: 'corraddress', args: [auth.affiliation] }]
                : []),
            ]
          })
          console.log(auths)
          acc.push(...auths)
          return acc
        }
        case 'paperreceived':
        case 'paperaccepted': {
          acc.push({
            type: key,
            args: [format(new Date(value), 'MMMM d, yyyy')],
          })
          return acc
        }
        case 'paperpublished': {
          acc.push({
            type: key,
            args: [format(new Date(value), 'MMMM d, yyyy')],
          })
          acc.push({
            type: 'paperpublisheddate',
            args: [format(new Date(value), 'yyyy-MM-dd')],
          })
          return acc
        }
        case 'doi': {
          acc.push({
            type: 'paperdoi',
            args: [value],
          })
          return acc
        }

        default: {
          console.log(acc)
          acc.push({
            type: key,
            args: [value],
          })
          return acc
        }
      }
    },
    [] as PreambleCommand[]
  )
  console.log(preamble)
  return preamble
}
