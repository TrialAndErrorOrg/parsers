import { Code, Loader } from '@mantine/core'
import useSWR from 'swr'
import React from 'react'

/* eslint-disable-next-line */
export interface ConvertedBlockProps {
  input: ArrayBuffer
}

export function ConvertedBlock(props: ConvertedBlockProps) {
  const { input } = props
  const { data, error } = useSWR('/api/jats-to-tex', async (resource: string, init: RequestInit) =>
    fetch(resource, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ response: Buffer.from(input).toString() }),
    })
      .then((res) => res.json())
      .catch((e) => console.error(e)),
  )
  if (error) {
    console.error(error)
    return <Code>{error}</Code>
  }
  return <>{!data ? <Loader /> : <Code>{data.tex}</Code>}</>
}

export default ConvertedBlock
