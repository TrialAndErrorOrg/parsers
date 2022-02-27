import { Box, Container, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { definitions } from 'ojs-client'
import React from 'react'
import { FaOrcid } from 'react-icons/fa'
import { HStack } from '../stack/stack'
import { Citations } from './citations'

export type PublicationKeys = keyof definitions['Publication']
export type PublicationTypes = definitions['Publication'][PublicationKeys]
export const RenderPubMeta = ({
  datakey,
  value,
  extra,
  options,
}: {
  datakey: PublicationKeys
  value: definitions['Publication'][typeof datakey]
  extra?: any
  options?: { showEmpty?: boolean }
}) => {
  switch (datakey) {
    case '_href':
      return <></>
    case 'abstract':
      return (
        <Container
          sx={{ overflow: 'scroll', maxHeight: 500 }}
          //@ts-expect-error booo
          dangerouslySetInnerHTML={{ __html: value?.en_US as string }}
        />
      )
    case 'authors':
      /* @ts-expect-error booo  */
      return <AuthorsContainer authors={value} />
    case 'citations':
      return <Citations {...{ value: value as any, extra: extra as any }} />
    case 'keywords':
      return (
        <HStack>
          {/*@ts-expect-error booo*/}
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
      /*@ts-expect-error booo*/
      return <Title sx={{ fontSize: '1.5em' }}>{value.en_US as string}</Title>
    case 'subtitle':
      return (
        <Text size="xl" sx={{ fontStyle: 'italic' }}>
          {/*@ts-expect-error booo*/}
          {value.en_US as string}
        </Text>
      )
    default:
      return <></>
  }
}

export const AuthorsContainer = (props: {
  authors: definitions['Publication']['authors']
}) => {
  const { authors } = props
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginLeft: 0,
      }}
    >
      {authors?.map((author) => {
        return (
          <Box key={author.id}>
            <HStack spacing={5} sx={{ fontWeight: 'bold' }}>
              {/* @ts-expect-error booo  */}
              <Text>{author?.familyName?.en_US},</Text>
              {/* @ts-expect-error booo  */}
              <Text>{author?.givenName?.en_US}</Text>
              {author?.orcid && (
                <Link href={author.orcid}>
                  <FaOrcid />
                </Link>
              )}
            </HStack>
            <Text sx={{ fontStyle: 'italic' }}>
              {/* @ts-expect-error booo  */}
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
}
