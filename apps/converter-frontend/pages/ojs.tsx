import React, { useEffect, useState } from 'react'
import {
  AppShell,
  Box,
  Burger,
  Button,
  Code,
  Container,
  Group,
  Header,
  MediaQuery,
  Navbar,
  Select,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { HStack, VStack } from '../components/stack/stack'
import SelectItem from '../components/select-item/select-item'
import { AiOutlineUpload } from 'react-icons/ai'
import { JATSIcon, TexIcon, WordIcon } from '../components/ext-icon/ext-icon'

import { Dropzone } from '@mantine/dropzone'
import ConvertedBlockLocal from '../components/converted-block-local/converted-block-local'
import { jatsToTexConverter } from '../utils/converters/jatsToTex'
import { docxToTexConverter } from '../utils/converters/docxToTex'
import { docxToJatsConverter } from '../utils/converters/docxToJats'
import Settings from '../components/settings/settings'
import Conversion from '../components/conversion/conversion'

export default function Index() {
  const [thing, setThing] = useState<ArrayBuffer>()
  const [tex, setTex] = useState('')
  const [from, setFrom] = useState<'docx' | 'jats'>('docx')
  const [to, setTo] = useState<'jats' | 'tex'>('tex')

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
      <Title> Convert with OJS help</Title>

      <Settings />

      <Conversion />
    </>
  )
}
