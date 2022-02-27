import { Container, Text, Loader, Box } from '@mantine/core'
import { paths, definitions } from 'ojs-client'
import React from 'react'
import useSWR from 'swr'
import { MetaItem } from './meta-item'

type PubTypes = keyof definitions['Publication']
export const PublicationData = (props: {
  pub: Exclude<
    paths['/submissions']['get']['responses']['200']['schema']['items'],
    undefined
  >[number]
  apiToken?: string
  items?: PubTypes[]
}) => {
  const { pub, apiToken, items } = props
  const url = pub.publications?.[0]?._href

  // inital load does not give us that much data
  const { data, error } = useSWR(
    `/api/ojs/publication?url=${encodeURIComponent(
      url || ''
    )}&apiToken=${apiToken}`
  )
  error && console.log(error)
  data && console.log(data)
  return (
    <>
      {error ? (
        <Text color="red">{JSON.stringify(error)}</Text>
      ) : !data ? (
        <Loader />
      ) : items ? (
        <Box>
          {items.map((item) => {
            if (!data[item]) return null
            return <MetaItem key={item} datakey={item} value={data[item]} />
          })}
        </Box>
      ) : (
        <Container>
          <MetaItem datakey={'title'} value={data.title} />
          <MetaItem datakey={'authors'} value={data.authors} />
          <MetaItem datakey={'abstract'} value={data.abstract} />
          <MetaItem
            datakey={'citations'}
            value={data.citations}
            extra={data.citationsRaw}
          />
          <MetaItem datakey={'keywords'} value={data.keywords} />
          {/* {Object.entries(data).map((datum) => {
            const [key, value] = datum as [
              key: keyof definitions['Publication'],
              value: definitions['Publication'][keyof definitions['Publication']]
            ]

            return <MetaItem key={key} datakey={key} value={value} />
          })} */}
        </Container>
      )}
    </>
  )
}
