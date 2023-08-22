/* eslint-disable import/extensions */
import { useState } from 'react'
import { Button, Checkbox, Code, Container, Group, Select, Text, Title } from '@mantine/core'
import { HStack } from '../stack/stack.js'
import SelectItem from '../select-item/select-item.js'
import { AiOutlineUpload } from 'react-icons/ai'
import { JATSIcon, TexIcon, WordIcon } from '../ext-icon/ext-icon.js'
import { shallow } from 'zustand/shallow'

import { Dropzone } from '@mantine/dropzone'
import ConvertedBlockLocal from '../converted-block-local/converted-block-local.js'
import { jatsToTexConverter } from '../../utils/converters/jatsToTex.js'
import { docxToTexConverter } from '../../utils/converters/docxToTex.js'
import { docxToJatsConverter } from '../../utils/converters/docxToJats.js'
import { useStore } from '../../utils/store.js'

/* eslint-disable-next-line */
export interface ConversionProps {}

export function Conversion(props: ConversionProps) {
  //const [thing, setThing] = useState<ArrayBuffer>()

  const [input, setInput, preamble, parseCitations, setParseCitations] = useStore(
    (state) => [
      state.input,
      state.setInput,
      state.preamble,
      state.parseCitations,
      state.setParseCitations,
    ],
    shallow,
  )

  const [from, setFrom] = useState<'docx' | 'jats'>('docx')
  const [to, setTo] = useState<'jats' | 'tex'>('tex')
  return (
    <>
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
        <HStack>
          <Text>Parse citations</Text>
          <Checkbox
            checked={parseCitations}
            onChange={(event) => setParseCitations(event.currentTarget.checked)}
          />
        </HStack>
      </Container>
      <Dropzone
        onDrop={async (files) => {
          const buf = await files[0].arrayBuffer()
          //const string = Buffer.from(buf).toString()
          setInput(buf)
        }}
      >
        <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
          <AiOutlineUpload
            //status={status}
            style={{
              width: 80,
              height: 80,
              // color: status ? 'green' : 'grey',
            }}
          />

          <div>
            <Text size="xl" inline={true}>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline={true} mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
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
              {input && Buffer.from(input).toString()}
            </pre>
          </Code>
        </>
      )}
      <Title>Output</Title>
      {input && (
        <ConvertedBlockLocal
          input={input}
          options={{
            preamble,
          }}
          converter={
            from === 'docx'
              ? to === 'tex'
                ? docxToTexConverter
                : docxToJatsConverter
              : jatsToTexConverter
          }
        />
      )}
    </>
  )
}

export default Conversion
