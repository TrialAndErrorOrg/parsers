import { format } from 'date-fns'

export interface MetaForm {
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

export interface Author {
  givenName: string
  familyName: string
  affiliation: string
  orcid: string
  email: string
}

export const metaToPreamble = (form: MetaForm): string => {
  const entries = Object.entries(form).reduce((acc: string[], [key, value]) => {
    if (!value || typeof value === 'number') return acc

    if (key === 'documentclassname' || key === 'documentclassopt') return acc

    if (key === 'abstract') {
      acc.push(`\\abstracttext{${(value as string).replace(/<\/?.+?>/g, '')}}`)
      return acc
    }

    if (key === 'title') {
      acc.push(`\\jotetitle{${value}}`)
      return acc
    }

    if (key === 'authors') {
      const auths = (value as Author[]).flatMap((auth, index) => [
        `\\author[${index + 1}]{\\mbox{${auth.givenName} ${auth.familyName}${
          auth.orcid ? `\\orcid{${auth.orcid.split('/').pop()}}}` : ''
        }}`,
        `\\affil[${index + 1}]{${auth.affiliation}}`,
        ...(index === 0
          ? [
              `\\corremail{\\href{mailto:${auth.email}}{${auth.email}}}`,
              `\\corraddress{${auth.affiliation}}`,
              `\\runningauthor{${auth.familyName}${
                (value as Author[]).length > 3
                  ? ' et al.'
                  : (value as Author[]).length === 3
                  ? `, ${(value as Author[])[1].familyName}, \\& ${(value as Author[])[2].familyName}`
                  : (value as Author[]).length === 2
                  ? `& ${(value as Author[])[1].familyName}`
                  : ''
              }}`,
            ]
          : []),
      ])
      acc.push(...auths)
      return acc
    }

    if (key === 'paperreceived') {
      acc.push(`\\paperreceived{${format(new Date(value as string), 'MMMM d, yyyy')}}`)
      return acc
    }

    if (key === 'paperaccepted') {
      acc.push(`\\paperaccepted{${format(new Date(value as string), 'MMMM d, yyyy')}}`)
      return acc
    }

    if (key === 'paperpublished') {
      acc.push(`\\paperpublished{${format(new Date(value as string), 'MMMM d, yyyy')}}`)
      acc.push(`\\paperpublisheddate{${format(new Date(value as string), 'yyyy-MM-dd')}}`)
      return acc
    }

    if (key === 'doi') {
      acc.push(`\\paperdoi{${value}}`)
      return acc
    }

    if (key === 'year' || key === 'jyear') {
      acc.push(`\\jyear{${value}}`)
      return acc
    }

    acc.push(`\\${key}{${value}}`)
    return acc
  }, [])

  return entries.join('\n') + '\n\n'
}
