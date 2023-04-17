import { Box, Button, Code, Header, Loader, Text } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import { VFile } from 'vfile'
import { Prism as SyntaxHighlighter } from '@mantine/prism'
import shallow from 'zustand/shallow'
import { useStore } from '../../utils/store'

import {
  BlobReader,
  BlobWriter,
  TextReader,
  TextWriter,
  ZipReader,
  ZipWriter,
} from '@zip.js/zip.js'
// import Prism from 'prism-react-renderer/prism'
// ;(typeof global !== 'undefined' ? global : window).Prism = Prism

// require('prismjs/components/prism-latex')
//import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'

const extensionMap: Record<string, string> = {
  emf: 'x-emf',
}

async function downloadAll(images: { [key: string]: Blob }) {
  const zipWriter = new ZipWriter(new BlobWriter('application/zip'))

  const addedStuff = await Promise.all(
    Object.entries(images).map(([url, img]) => {
      const rawExtension = url.split('.').pop() ?? 'jpg'
      const fileName = url.split('/').pop() ?? 'image.jpg'
      const extension = extensionMap[rawExtension] ?? rawExtension

      const file = new Blob([img], {
        type: `image/${extension}`,
      })
      // const blob = new Blob([arrayBufferView], {
      //   type: `image/${extension}`,
      // })
      zipWriter.add(fileName, new BlobReader(file))
    }),
  )
  const zipFile = await zipWriter.close()

  window.open((window.URL ?? window.webkitURL).createObjectURL(zipFile), '_blank')
}

/* eslint-disable-next-line */
export interface ConvertedBlockLocalProps {
  input: ArrayBuffer
  converter: (input: ArrayBuffer, options: { [key: string]: any | any[] }) => Promise<VFile>
  options?: { [key: string]: any | any[] }
}

export function ConvertedBlockLocal(props: ConvertedBlockLocalProps) {
  const { input, options = {}, converter } = props
  const [vfile, setVFile] = useState<VFile | null>(null)
  const [preamble] = useStore((state) => [state.preamble], shallow)
  const clipboard = useClipboard({ timeout: 2000 })

  if (preamble) {
    options['preamble'] = preamble
  }
  useEffect(() => {
    ;(async () => {
      setVFile(await converter(input, options))
    })()
  }, [input, preamble])

  return (
    <Box>
      {vfile && (
        <Button
          onClick={() =>
            fetch('/api/tex-to-pdf', { method: 'POST', body: String(vfile) })
              .then((res) => res.blob())
              .then((res) => {
                window.open(URL.createObjectURL(res))
              })
              .catch((e) => console.error(e))
          }
        >
          Try make pdf
        </Button>
      )}
      {/* eslint-disable-next-line*/}
      {/* @ts-ignore  */}
      {vfile?.data?.media && (
        <>
          <Box>Images extracted from doc</Box>
          <Box>
            {vfile?.data?.media
              ? Object.entries(vfile?.data?.media as { [key: string]: Blob }).map(
                  ([url, img]: [url: string, img: Blob]) => {
                    const rawExtension = url.split('.').pop() ?? 'jpg'
                    const extension = extensionMap[rawExtension] ?? rawExtension

                    const blob = new Blob([img], {
                      type: `image/${extension}`,
                    })
                    const urlCreator = window.URL || window.webkitURL
                    const imageUrl = urlCreator.createObjectURL(blob)
                    // eslint-disable-next-line
                    return <img width="30%" alt="alternative image" src={imageUrl} key={url} />
                  },
                )
              : null}
          </Box>
          <Button onClick={() => downloadAll(vfile.data.media)}> Download all ⬇️ </Button>
        </>
      )}
      {vfile?.messages && (
        <>
          <Box>Errors and warnings</Box>
          {vfile?.messages.map((message) => (
            <Text key={String(message)}>{String(message)} </Text>
          ))}
        </>
      )}
      {vfile ? (
        <Box
          sx={{
            paddingBottom: 20,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          {/* <Button
            style={{
              position: 'absolute',
              marginTop: 20,
              marginRight: 10,
              marginBottom: -200,
            }}
            sx={{
              width: 100,
            }}
            onClick={() => clipboard.copy(String(vfile))}
          >
            <HStack spacing={5}>
              <FaClipboardList />
              <Text>{clipboard.copied ? 'Copied!' : 'Copy'}</Text>
            </HStack>
          </Button> */}
          <SyntaxHighlighter
            withLineNumbers={true}
            // @ts-expect-error yeahhhh
            language="latex"
            sx={{}}
            style={{
              maxWidth: '100%',
              // height: '100%',
              maxHeight: '80vh',
              overflowY: 'scroll',
              // width: '50vw',
            }}
            // scrollAreaComponent="div"
            styles={{
              // copy: {
              //   position: 'fixed',
              //   top: 10,
              //   right: 10,
              // },
              scrollArea: {
                width: '100%',
                maxHeight: '100%',
                // overflow: 'scroll',
              },
              code: {
                width: '100%',
              },
              lineContent: {
                width: '100%',
                overflowWrap: 'break-word',
                whiteSpace: 'pre-wrap',
              },
              line: {
                width: '90%',
              },
            }}
            //showInlineLineNumbers
            //     style={nord}
            //   maxW: '80%',
            //   maxH: 200,
            //   overflowX: 'auto',
            //   whiteSpace: 'pre-wrap',
          >
            {String(vfile)}
          </SyntaxHighlighter>
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  )
}

export default ConvertedBlockLocal
