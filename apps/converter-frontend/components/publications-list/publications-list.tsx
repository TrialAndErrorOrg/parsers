import { Autocomplete, Text, Box } from '@mantine/core'
import { definitions, paths } from 'ojs-client'
import OJS from 'ojs-client'
import React, { forwardRef, useState } from 'react'
import useSWR from 'swr'
import { HStack, VStack } from '../stack/stack'
import { FileReel } from './file-reel'
import { PublicationData } from './publication-data'

/* eslint-disable-next-line */
export interface PublicationsListProps {
  token: string
  endpoint: string
  search: string
}

interface OJSAutoCompleteProps {
  value: string
  data: definitions['Submission']
  pubs: any
  authors: string
}

const AutoCompleteItem = forwardRef<HTMLDivElement, OJSAutoCompleteProps>(
  ({ value, authors, ...others }: OJSAutoCompleteProps, ref) => (
    <div ref={ref} {...others}>
      <VStack noWrap={true}>
        <Text>{value}</Text>
        <Text size="xs" color="dimmed">
          {authors}
        </Text>
      </VStack>
    </div>
  ),
)

AutoCompleteItem.displayName = 'AutoCompleteItem'

export function PublicationsList(props: PublicationsListProps) {
  const { token, endpoint, search } = props

  const [val, setVal] = useState<OJSAutoCompleteProps>()
  const { data, error } = useSWR(
    `/api/ojs/?endpoint=${endpoint}&apiToken=${token}&searchPhrase=${search}`,
  )
  // const { data, error } = useSWR('', (thing: string, thong: RequestInit) =>
  //   ojs.submissions({ searchPhrase: search || '' })
  // )
  const sortedData = data?.items?.map((item: definitions['Submission']) => ({
    //@ts-expect-error its there
    value: item?.publications?.[0]?.fullTitle?.en_US || (item?._href as any),
    data: item,
    pubs: item?.publications,
    authors: item?.publications?.[0]?.authorsString || '',
  }))

  //console.log(error)
  //console.log(data)
  return (
    <Box>
      {data && (
        <Autocomplete
          onItemSubmit={(item) => setVal(item as any)}
          itemComponent={AutoCompleteItem}
          label="Search OJS"
          placeholder="Article name"
          data={sortedData}
          //  {JSON.stringify(data) || (error && JSON.stringify(error)) || <Loader />}
        />
      )}
      {val && <PublicationData pub={val.data} endpoint={endpoint} apiToken={token} />}
      {val && <FileReel endpoint={endpoint} data={val.data} apiToken={token} />}
    </Box>
  )
}

export default PublicationsList
