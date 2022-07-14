import { Box, Button, Text, Loader, Title, Paper } from '@mantine/core'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { FaMicrosoft } from 'react-icons/fa'
import useSWR from 'swr'
import { PublicationData } from '../components/publications-list/publication-data'
import { VStack } from '../components/stack/stack'
import qs from 'querystring'
import Link from 'next/link'

// export interface AuthorPageProps {
// //
// }

function AuthorPage(// props: AuthorPageProps
  ) {
  const { data: session, status } = useSession()
  if (status !== 'authenticated') {
    return (
      <Button onClick={() => signIn()} leftIcon={<FaMicrosoft />}>
        Sign In
      </Button>
    )
  }
  return (
    <VStack spacing={60}>
      <Paper padding="xl" shadow="xs" sx={{ width: '100%' }}>
        <Title>Issue 2</Title>
        <AuthAuthorPage query={{ issueIds: [2] }} />
      </Paper>
      <Paper>
        <Title>Issue 1</Title>
        <AuthAuthorPage query={{ issueIds: [1] }} />
      </Paper>
      <Paper>
        <Title>Uncategorized</Title>
        <AuthAuthorPage query={{ issueIds: [0] }} />
      </Paper>
    </VStack>
  )
}

export function AuthAuthorPage(props: { query?: Record<string, any> }) {
  const { query } = props
  // const { data: session, status } = useSession()
  const { data, error } = useSWR(`/api/ojs?${query ? qs.stringify(query) : ''}`)

  if (!data || error) {
    return <Loader />
  }

  // const sortedbyissue = data?.items?.reduce((acc, curr) => {
  //   //console.log(acc)
  //   //console.log(curr)
  //   acc[curr.issueId || 0] = [...(acc[curr.issueId] || []), curr]
  //   return acc
  // }, {})
  // //console.log(sortedbyissue)
  return (
    <VStack spacing={40} sx={{ alignItems: 'flex-start' }} align="flex-start">
      {/* {Object.entries(sortedbyissue).map(([issue, entry]) => (
        <Box key={issue}>
          <Title>Issue {issue}</Title> */}
      {data?.items?.map((item: any) => (
        <Paper shadow="md" padding="md" sx={{ width: 800 }} key={item.url}>
          <PublicationData
            pub={item}
            items={['title', 'subtitle', 'authors']}
          />
          <Link
            href={`https://submit.jtrialerror.com/index.php/jote/workflow/index/${item.id}/1#publication`}
            passHref
          >
            <a style={{ marginTop: 20 }} target="_blank">
              OJS Link
            </a>
          </Link>
        </Paper>
      ))}

      {/* </Box>
      ))} */}
    </VStack>
  )
}

export default AuthorPage

export async function getServerSideProps() {
  return { props: {} }
}
