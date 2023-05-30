import { create } from 'zustand'
import { format } from 'date-fns'
import { combine } from 'zustand/middleware'

export interface InitialState {
  input: null | ArrayBuffer

  output: string | null
  meta: Form | null
  preamble: string
}
export interface Set {
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
      preamble: '',
    },
    (set) => ({
      setInput: (val: ArrayBuffer) => set((state) => ({ ...state, input: val })),
      setOutput: (val: string) => set((state) => ({ ...state, output: val })),
      setMeta: (form: Form) => set((state) => ({ ...state, meta: form })),
      setPreamble: (form: Form) => set((state) => ({ ...state, preamble: metaToPreamble(form) })),
    }),
  ),
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

export const metaToPreamble = (form: Form): string => {
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

  const preamble: string =
    Object.entries(form)
      .reduce((acc: string[], curr: [key: string, value: any]) => {
        const [key, value] = curr
        if (!value || typeof value === 'number') {
          return acc
        }
        switch (key) {
          case 'documentclassname':
          case 'documentclassopt':
            return acc
          case 'abstract': {
            acc.push(`\\abstracttext{${value?.replace(/<\/?.+?>/g, '')}}`)
            return acc
          }
          case 'title': {
            acc.push(`\\jotetitle{${value}}`)
            return acc
          }
          case 'authors': {
            const auths = value.flatMap((auth: Author, index: number) => {
              return [
                `\\author[${index + 1}]{${auth.givenName} ${auth.familyName}${
                  auth.orcid ? `\\orcid{${auth.orcid?.split('/').pop()}}` : ''
                }}`,
                `\\affil[${index + 1}]{${auth.affiliation}}`,
                ...(index === 0
                  ? [`\\corremail{\\href{mailto:${auth.email}}{${auth.email}}}`]
                  : []),
                ...(index === 0 ? [`\\corraddress{${auth.affiliation}}`] : []),
                ...(index === 0
                  ? [
                      `\\runningauthor{${auth.familyName}${
                        value.length > 3
                          ? ' et al.'
                          : value.length === 3
                          ? `, ${value[1].familyName}, \\& ${value[2].familyName}`
                          : value.length === 2
                          ? `& ${value[1].familyName}`
                          : ''
                      }}`,
                    ]
                  : []),
              ]
            })
            acc.push(...auths)
            return acc
          }
          case 'paperreceived':
            acc.push(`\\paperreceived{${format(new Date(value), 'MMMM d, yyyy')}}`)
            return acc
          case 'paperaccepted': {
            acc.push(`\\paperaccepted{${format(new Date(value), 'MMMM d, yyyy')}}`)
            return acc
          }
          case 'paperpublished': {
            acc.push(`\\paperpublished{${format(new Date(value), 'MMMM d, yyyy')}}`)
            acc.push(`\\paperpublisheddate{${format(new Date(value), 'yyyy-MM-dd')}}`)
            return acc
          }
          case 'doi': {
            acc.push(`\\paperdoi{${value}}`)
            return acc
          }

          case 'year': {
            acc.push(`\\jyear{${value}}`)
            return acc
          }
          default: {
            acc.push(`\\${key}{${value}}`)
            return acc
          }
        }
      }, [] as string[])
      ?.join('\n') + '\n\n'
  return preamble
}
