import React from 'react'
import { Title } from '@mantine/core'
import Conversion from '../components/conversion/conversion.js'

export default function Index() {
  // useEffect(() => {
  //   if (!thing) return

  //   fetch('/api/jats-to-tex', {
  //     method: 'post',
  //     headers: {
  //       Accept: 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ response: Buffer.from(thing).toString() }),
  //   })
  //     .then((res) => res.text())
  //     .then((res) => setTex(res))
  //     .catch((e) => {
  //       console.error(e)
  //       setTex(e)
  //     })
  // }, [thing])
  return (
    <>
      <Title> Convert DOCX</Title>
      <Conversion />
    </>
  )
}
