import React, { useEffect, useState } from 'react'
import {
  AppShell,
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
import { AiFillFileWord, AiOutlineUpload } from 'react-icons/ai'
import { JATSIcon, TexIcon, WordIcon } from '../components/ext-icon/ext-icon'

import { Dropzone } from '@mantine/dropzone'
import ConvertedBlock from '../components/converted-block/converted-block'
export default function Index() {
  const [thing, setThing] = useState<ArrayBuffer>()
  const [tex, setTex] = useState('')
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()

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
      <Container>
        <HStack>
          <Text>Convert</Text>
          <Select
            itemComponent={SelectItem}
            placeholder="Input format"
            defaultValue="docx"
            radius="md"
            data={[
              {
                value: 'docx',
                label: '.docx',
                description: 'You know',
                image: <WordIcon />,
              },
              {
                value: 'jats',
                label: 'JATS XML',
                description: 'Format used by academic publishers',
                image: <JATSIcon />,
              },
            ]}
          />
          <Text>to</Text>
          <Select
            defaultValue="latex"
            radius="md"
            itemComponent={SelectItem}
            placeholder="Output format"
            data={[
              { value: 'latex', label: '.tex', image: <TexIcon /> },
              { value: 'jats', label: 'JATS XML', image: <JATSIcon /> },
            ]}
          />
          <Button radius="md">Lets gooo</Button>
        </HStack>
      </Container>
      <Dropzone
        onDrop={async (files) => {
          const buf = await files[0].arrayBuffer()
          //const string = Buffer.from(buf).toString()
          //console.log(buf)
          setThing(buf)
        }}
      >
        {(status) => (
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: 'none' }}
          >
            <AiOutlineUpload
              //status={status}
              style={{
                width: 80,
                height: 80,
                color: status ? 'green' : 'grey',
              }}
            />

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        )}
      </Dropzone>
      <Title>Input</Title>
      <Code
        style={{
          maxHeight: '400px',
          overflow: 'scroll',
        }}
      >
        <pre
          style={{
            maxHeight: '400px',
            overflow: 'scroll',
          }}
        >
          {thing && Buffer.from(thing).toString()}
        </pre>
      </Code>
      <Title>Output</Title>
      <Button
        onClick={() =>
          fetch('/api/tex-to-pdf', { method: 'POST', body: tex })
            .then((res) => res.blob())
            .then((res) => {
              window.open(URL.createObjectURL(res))
            })
            .catch((e) => console.error(e))
        }
      >
        Try make pdf
      </Button>
      <pre
        style={{
          maxHeight: '400px',
          overflow: 'scroll',
        }}
      >
        {thing && <ConvertedBlock input={thing} />}
      </pre>
    </>
  )
}
