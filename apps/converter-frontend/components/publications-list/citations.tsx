import { Container, Tabs, Text } from '@mantine/core'
import { definitions } from 'ojs-client'
import React from 'react'
import useSWR from 'swr'
// @ts-expect-error no types for cites
import Cite from 'citation-js'

export const Citations = ({
  value,
  extra,
}: {
  value: definitions['Publication']['citations']
  extra: string
}) => {
  const url =
    process.env.NODE_ENV === 'production'
      ? '/api/style'
      : 'http://localhost:8000/api/style'
  const splitextra = extra
    ?.replace(/\\r/g, '')
    ?.replace(/\n([A-Z])/gm, '\n\n\n$1')
    ?.replace(/\n([^A-Z])/g, '$1')
  //console.log(splitextra)
  const { data, error } = useSWR(url, (resource: string, init: any) =>
    fetch(url, {
      method: 'post',
      body: JSON.stringify({ response: splitextra }),
    }).then((response) => response.json())
  )
  if (error || !data) {
    return (
      <Container sx={{ overflow: 'scroll', maxHeight: 500 }}>
        {value?.map((cite) => (
          <Text key={cite} dangerouslySetInnerHTML={{ __html: cite }} />
        ))}
      </Container>
    )
  }
  //console.log(data)

  const cite = new Cite(data)
  const biblatex = cite.format('biblatex')
  const bibtex = cite.format('bibtex')
  const ris = cite.format('ris')
  const csl = data
  return (
    <Tabs>
      <Tabs.Tab label="Rich Text">
        <Container sx={{ overflow: 'scroll', maxHeight: 500 }}>
          {value?.map((cite) => (
            <Text key={cite} dangerouslySetInnerHTML={{ __html: cite }} />
          ))}
        </Container>
      </Tabs.Tab>
      <Tabs.Tab label="biblatex">
        <Container sx={{ overflow: 'scroll', maxHeight: 500 }}>
          <Text>{biblatex}</Text>
        </Container>
      </Tabs.Tab>
      <Tabs.Tab label="bibtex">
        <Container sx={{ overflow: 'scroll', maxHeight: 500 }}>
          <Text>{bibtex}</Text>
        </Container>
      </Tabs.Tab>
      <Tabs.Tab label="ris">
        <Container sx={{ overflow: 'scroll', maxHeight: 500 }}>
          <Text>{ris}</Text>
        </Container>
      </Tabs.Tab>
      <Tabs.Tab label="csl">
        <Container sx={{ overflow: 'scroll', maxHeight: 500 }}>
          <Text>{JSON.stringify(csl, null, 2)}</Text>
        </Container>
      </Tabs.Tab>
    </Tabs>
  )
}
