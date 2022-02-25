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

export default function Index() {
  const [thing, setThing] = useState<ArrayBuffer>()
  const [tex, setTex] = useState('')
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
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
      <Box sx={{ paddingLeft: 20, paddingRight: 20 }}>
        <Title> Convert DOCX</Title>
        <Container>
          <HStack>
            <Text>Convert</Text>
            <Select
              itemComponent={SelectItem}
              placeholder="Input format"
              defaultValue="docx"
              onChange={(value: 'docx' | 'jats') => setFrom(value)}
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
              defaultValue="tex"
              radius="md"
              itemComponent={SelectItem}
              placeholder="Output format"
              onChange={(value: 'tex' | 'jats') => setTo(value)}
              data={[
                { value: 'tex', label: '.tex', image: <TexIcon /> },
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
            console.log(buf)
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
        {from !== 'docx' && (
          <>
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
          </>
        )}
        <Title>Output</Title>
        {thing && (
          <ConvertedBlockLocal
            input={thing}
            converter={
              from === 'docx'
                ? to === 'tex'
                  ? docxToTexConverter
                  : docxToJatsConverter
                : jatsToTexConverter
            }
          />
        )}

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
      </Box>
    </AppShell>
  )
}
