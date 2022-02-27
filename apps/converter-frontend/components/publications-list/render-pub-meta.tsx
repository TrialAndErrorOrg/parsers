import { Box, Container, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { definitions } from 'ojs-client'
import React from 'react'
import { FaOrcid } from 'react-icons/fa'
import { HStack } from '../stack/stack'
import { Citations } from './citations'

export const RenderPubMeta = ({
  datakey,
  value,
  extra,
}: {
  datakey: keyof definitions['Publication']
  value: definitions['Publication'][typeof datakey]
  extra?: any
}) => {
  switch (datakey) {
    case '_href':
      return <></>
    case 'abstract':
      return (
        <Container
          sx={{ overflow: 'scroll', maxHeight: 500 }}
          dangerouslySetInnerHTML={{ __html: value?.en_US }}
        />
      )
    case 'authors':
      return (
        <Container
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            marginLeft: 0,
          }}
        >
          {(value as definitions['Publication']['authors'])?.map((author) => {
            return (
              <Box key={author.id}>
                <HStack spacing={5} sx={{ fontWeight: 'bold' }}>
                  <Text>{author?.familyName?.en_US},</Text>
                  <Text>{author?.givenName?.en_US}</Text>
                  {author?.orcid && (
                    <Link href={author.orcid}>
                      <FaOrcid />
                    </Link>
                  )}
                </HStack>
                <Text sx={{ fontStyle: 'italic' }}>
                  {author?.affiliation?.en_US}
                </Text>
                <Link href={`mailto:${author?.email}}`}>{author?.email}</Link>
                {author?.biography && <Text>{author?.biography}</Text>}
                {author?.orcid && (
                  <Link href={author.orcid} passHref>
                    <Text>{author?.orcid}</Text>
                  </Link>
                )}
              </Box>
            )
          })}
        </Container>
      )
    case 'citations':
      return <Citations {...{ value: value as any, extra: extra as any }} />
    case 'keywords':
      return (
        <HStack>
          {(value as definitions['Publication']['keywords'])?.en_US?.map(
            (keyw: string) => (
              <Box
                sx={{
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 4,
                  paddingLeft: 8,
                  paddingRight: 8,
                  backgroundColor: 'darkblue',
                  color: 'white',
                  fontWeight: 'bold',
                }}
                key={keyw}
              >
                <Text size="sm">{keyw}</Text>
              </Box>
            )
          )}
        </HStack>
      )
    case 'title':
      return <Title sx={{ fontSize: '1.5em' }}>{value.en_US as string}</Title>
    case 'subtitle':
      return (
        <Text size="xl" sx={{ fontStyle: 'italic' }}>
          {value.en_US as string}
        </Text>
      )
    default:
      return <></>
  }
}
