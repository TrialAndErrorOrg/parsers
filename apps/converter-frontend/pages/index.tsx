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
export default function Index() {
  const [thing, setThing] = useState('')

  const [tex, setTex] = useState('')
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  useEffect(() => {
    if (!thing) return

    fetch('/api/jats-to-tex', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ response: thing }),
    })
      .then((res) => res.text())
      .then((res) => setTex(res))
      .catch((e) => {
        console.error(e)
        setTex(e)
      })
  }, [thing])

  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={
        <Navbar
          padding="md"
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          // viewport size > theme.breakpoints.lg – width is 400px
          width={{ sm: 300, lg: 400 }}
        >
          <Navbar height={600} padding="xs" width={{ base: 300 }}>
            <Navbar.Section>Journal of Trial and Error</Navbar.Section>
            <Navbar.Section grow mt="lg">
              <VStack>
                {['1', '2', '3', '4', '5'].map((num) => (
                  <HStack key={num}>
                    <Text>Icon {num}</Text>
                    <Text>Link {num}</Text>
                  </HStack>
                ))}
              </VStack>
            </Navbar.Section>
            <Navbar.Section>You!</Navbar.Section>
          </Navbar>
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
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
          <Button radius="md">Let's gooo</Button>
        </HStack>
      </Container>
      <Dropzone
        onDrop={async (files) => {
          console.log(files)
          const buf = await files[0].arrayBuffer()
          const string = Buffer.from(buf).toString()

          setThing(string)
          console.log(string)
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
          {thing}
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
      <Code>
        <pre
          style={{
            maxHeight: '400px',
            overflow: 'scroll',
          }}
        >
          {tex}
        </pre>
      </Code>

      {/* <Container>
        {[
          'docx',
          'xml',
          'tex',
          'pdf',
          'xlxs',
          'png',
          'jpg',
          'svg',
          'html',
          'json',
        ].map((filename: string) => (
          <FileIcon extension={filename} {...(defaultStyles[filename] || {})} />
        ))}
      </Container> */}
    </AppShell>
  )
}
