import { Code, Container, Tabs, Text } from '@mantine/core'
import { definitions } from 'ojs-client'
import React from 'react'
import useSWR from 'swr'
import { Data as CSL } from 'csl-json'
// @ts-expect-error no types for cites
import Cite from 'citation-js'
import { Prism } from '@mantine/prism'

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
      body: splitextra,
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

  console.log(data)
  const cite = new Cite(
    data.map((data: CSL) => {
      if (!data.type) data.type = 'article'
      return data
    })
  )
  const biblatex = cite.format('biblatex')
  const bibtex = cite.format('bibtex')
  const ris = cite.format('ris')
  const csl = data
  return (
    <Prism.Tabs>
      <Prism.Tab
        withLineNumbers
        language="actionscript"
        label="Rich Text"
        sx={{ whiteSpace: 'pre-wrap', maxWidth: '70vw' }}
      >
        {value?.join('\n')}
        {/* {value?.map((cite) => (
          <Text key={cite} dangerouslySetInnerHTML={{ __html: cite }} />
        ))} */}
      </Prism.Tab>
      <Prism.Tab withLineNumbers language="clike" label="biblatex">
        {biblatex}
      </Prism.Tab>
      <Prism.Tab withLineNumbers language="clike" label="bibtex">
        {bibtex}
      </Prism.Tab>
      <Prism.Tab withLineNumbers language="jsx" label="ris">
        {ris}
      </Prism.Tab>
      <Prism.Tab withLineNumbers language="json" label="csl">
        {JSON.stringify(csl, null, 2)}
      </Prism.Tab>
    </Prism.Tabs>
  )
}
