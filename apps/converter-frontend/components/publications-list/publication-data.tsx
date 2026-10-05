import { Container, Text, Loader, Box, TextInput, Textarea, Paper, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useStore } from '../../utils/store'
import { paths, definitions } from 'ojs-client'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import { shallow } from 'zustand/shallow'
import { HStack, VStack } from '../stack/stack'
import { MetaItem } from './meta-item'
import { Publication } from '../../utils/types'
import { addDays } from 'date-fns'

type PubTypes = keyof definitions['Publication']
export const PublicationData = (props: {
  endpoint?: string
  pub: Exclude<
    paths['/submissions']['get']['responses']['200']['schema']['items'],
    undefined
  >[number]
  apiToken?: string
  items?: PubTypes[]
}) => {
  console.log({ props })
  const { pub, apiToken, endpoint, items } = props
  const url = pub.publications?.[0]?._href
  const [setPreamble, preamble] = useStore((state) => [state.setPreamble, state.preamble], shallow)

  const form = useForm({
    initialValues: {
      documentclassname: 'jote-new-article',
      documentclassopt: 'author-date, editorial',
      title: '',
      keywordsabstract: '',
      abstract: '',
      runningauthor: '',
      jname: 'Journal of Trial \\& Error',
      jyear: new Date().getFullYear().toString(),
      year: new Date().getFullYear().toString(),
      acknowledgments: '',
      funding: '',
      doi: '',
      jvolume: '',
      jpages: '',
      jissue: '',
      paperreceived: '',
      authors: [
        {
          givenName: '',
          familyName: '',
          affiliation: '',
          email: '',
          orcid: '',
        },
      ],
      paperaccepted: '',
      paperpublished: '',
      jwebsite: 'https://journal.trialanderror.org',
    },
  })

  const handleSubmit = (values: (typeof form)['values']) => {
    setPreamble(values)
  }

  // inital load does not give us that much data
  const { data, error }: { data?: Publication; error: unknown } = useSWR(
    `/api/ojs/publication?url=${encodeURIComponent(url || '')}&apiToken=${apiToken}`,
  )

  const { data: files } = useSWR(
    `/api/ojs/files?apiToken=${apiToken}&submissionId=${pub.id}&stageId=${
      pub.stageId
    }&endpoint=${encodeURIComponent(endpoint!)}`,
  )
  console.log({ files })
  // the accepted date is the date where the item has been moved to copyediting, which is the file with fileStage 9 with the lowest date
  const acceptedDate = files?.items?.reduce((acc: any, curr: any) => {
    console.log({ acc, curr })
    if (curr.fileStage === 9) {
      if (!acc) {
        return curr.createdAt
      }
      return Math.min(acc, curr.createdAt)
    }
    return acc
  }, 0)

  // set default publishedDate as two week after acceptedDate
  const publishedDate = acceptedDate ? addDays(acceptedDate, 14) : undefined
  useEffect(() => {
    if (!data || form.values.title) {
      return
    }

    form.setValues({
      ...form.values,
      title: data.fullTitle.en_US,
      documentclassopt: `${form.values?.documentclassopt}, ${categories?.[pub?.sectionId]}`,
      keywordsabstract: data?.keywords?.['en_US']?.join(', '),
      abstract: data.abstract?.en_US,
      runningauthor: data.authorsStringShort,
      // @ts-expect-error AAA
      authors: data.authors.reduce(
        (acc, curr: (typeof data.authors)[number]) => {
          acc.push({
            givenName: curr.givenName?.en_US,
            familyName: curr.familyName?.en_US,
            orcid: curr.orcid,
            email: curr.email,
            affiliation: curr.affiliation?.en_US,
          })
          return acc
        },
        [] as {
          givenName: string
          familyName: string
          orcid?: string
          email?: string
          affiliation?: string
        }[],
      ),
      jname: 'Journal of Trial \\& Error',
      jyear: data.copyrightYear || new Date().getFullYear(),
      doi: data['pub-id::doi'],
      jvolume: '',
      jissue: '',
      jpages: data.pages || '',
      paperreceived: pub.dateSubmitted || '',
      paperaccepted: acceptedDate || '',
      // funding: data?.supportingAgencies?.en_US || '',

      // @ts-expect-error AAA
      paperpublished: publishedDate || '',
    })
  }, [data, files])

  return (
    <>
      {error ? (
        <Text color="red">{JSON.stringify(error)}</Text>
      ) : data ? (
        items ? (
          <Box>
            {items.map((item) => {
              if (!data[item as keyof Publication]) {
                return null
              }
              return <MetaItem key={item} datakey={item} value={data[item as keyof Publication]} />
            })}
          </Box>
        ) : (
          <VStack sx={{ alignItems: 'flex-start' }}>
            <Paper>
              <Text>{categories[data.sectionId]}</Text>
              <Text>{data['pub-id::doi']}</Text>
              <MetaItem datakey={'title'} value={data.title.en_US} />
              <MetaItem datakey={'authors'} value={data.authors as any} />
              <MetaItem datakey={'abstract'} value={data.abstract?.en_US} />
              <MetaItem datakey={'citations'} value={data.citations} extra={data.citationsRaw} />
              <MetaItem datakey={'keywords'} value={data.keywords.en_US} />
              {/* {Object.entries(data).map((datum) => {
            const [key, value] = datum as [
              key: keyof definitions['Publication'],
              value: definitions['Publication'][keyof definitions['Publication']]
            ]

            return <MetaItem key={key} datakey={key} value={value} />
          })} */}
            </Paper>
            <Paper>
              <HStack>
                <TextInput label="documentclassopt" {...form.getInputProps('documentclassopt')} />
                <TextInput label="documentclassname" {...form.getInputProps('documentclassname')} />
              </HStack>
              <HStack>
                <TextInput label="title" {...form.getInputProps('title')} />
              </HStack>
              <VStack>
                {form?.values?.authors?.map((author, index) => {
                  return (
                    <Paper
                      shadow="sm"
                      // padding="md"
                      radius="md"
                      key={author.givenName}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        flexDirection: 'column',
                      }}
                    >
                      <HStack spacing={10}>
                        <TextInput
                          labelProps={{
                            style: { color: 'red', fontWeight: 'bold' },
                          }}
                          label="givenname"
                          value={author.givenName}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].givenName = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        />
                        <TextInput
                          label="familyname"
                          value={author.familyName}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].familyName = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        />
                      </HStack>
                      <HStack spacing={10}>
                        <TextInput
                          label="email"
                          value={author.email}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].email = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        />
                        <TextInput
                          label="orcid"
                          value={author.orcid}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].orcid = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        />
                        <TextInput
                          label="affil"
                          value={author.affiliation}
                          onChange={(value) => {
                            const authors = form.values.authors
                            authors[index].affiliation = value.target.value
                            form.setFieldValue('authors', authors)
                          }}
                        />
                      </HStack>
                    </Paper>
                  )
                })}

                <HStack sx={{ width: '100%' }}>
                  <TextInput
                    label="running"
                    {...form.getInputProps('runningauthor')}
                    sx={{ width: '100%' }}
                  />
                </HStack>
                <VStack sx={{ alignItems: 'flex-start' }}>
                  <Textarea label="abstract" {...form.getInputProps('abstract')} />
                  <TextInput label="keywords" {...form.getInputProps('keywordsabstract')} />
                </VStack>
                <HStack>
                  <TextInput label="year" {...form.getInputProps('jyear')} />
                </HStack>

                <HStack>
                  <Textarea label="acknowledgments" {...form.getInputProps('acknowledgments')} />
                  <Textarea label="funding" {...form.getInputProps('funding')} />
                </HStack>
                <HStack>
                  <TextInput label="volume" {...form.getInputProps('jvolume')} />
                  <TextInput label="issue" {...form.getInputProps('jissue')} />
                </HStack>

                <HStack spacing={10} sx={{ flexWrap: 'wrap' }}>
                  <TextInput label="received" {...form.getInputProps('paperreceived')} />
                  <TextInput label="accepted" {...form.getInputProps('paperaccepted')} />
                  <TextInput label="published" {...form.getInputProps('paperpublished')} />
                </HStack>
                <HStack>
                  <TextInput label="website" {...form.getInputProps('jwebsite')} />
                  <TextInput label="doi" {...form.getInputProps('doi')} />
                </HStack>
              </VStack>
            </Paper>
            <Button onClick={() => handleSubmit(form.values)}>Add data to template</Button>
          </VStack>
        )
      ) : (
        <Loader />
      )}
    </>
  )
}

export const categories = ['', 'empirical', 'meta', 'reflection', 'rga', 'editorial']
