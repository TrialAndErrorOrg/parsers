import { Box, Button, Code, Header, Loader, Text } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import React, { useEffect, useState } from 'react'
import { VFile } from 'vfile'
import { Prism as SyntaxHighlighter } from '@mantine/prism'
import { shallow } from 'zustand/shallow'
import { useStore } from '../../utils/store.js'

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

async function downloadAll(images: { [key: string]: Blob }, text: string) {
  const zipWriter = new ZipWriter(new BlobWriter('application/zip'))

  await zipWriter.add('media', undefined, {
    directory: true,
  })
  const addedStuff = await Promise.all(
    Object.entries(images).map(([url, img]) => {
      const rawExtension = url.split('.').pop() ?? 'jpg'
      const fileName = `media/` + url.split('/').pop() ?? 'image.jpg'
      const extension = extensionMap[rawExtension] ?? rawExtension

      const file = new Blob([img], {
        type: `image/${extension}`,
      })
      // const blob = new Blob([arrayBufferView], {
      //   type: `image/${extension}`,
      // })
      zipWriter.add(fileName, new BlobReader(file), {})
    }),
  )

  await zipWriter.add('main.tex', new TextReader(text))
  const zipFile = await zipWriter.close()

  window.open((window.URL ?? window.webkitURL).createObjectURL(zipFile), '_blank')
}

/* eslint-disable-next-line */
export interface ConvertedBlockLocalProps {
  input: ArrayBuffer
  converter: (input: ArrayBuffer, options: { [key: string]: any | any[] }) => Promise<VFile>
  options?: { [key: string]: any | any[] }
}

function superJankMakeTexBetterReplace(text: string) {
  return text.replace(
    '\\begin{document}\n',
    `\\begin{document}
\\begin{frontmatter}
  \\maketitle
  \\begin{abstract}
    \\printabstracttext
  \\end{abstract}
\\end{frontmatter}
`,
  )
}

export function ConvertedBlockLocal(props: ConvertedBlockLocalProps) {
  const { input, options = {}, converter } = props
  const [vfile, setVFile] = useState<VFile | null>(null)
  const [preamble, parseCitations] = useStore(
    (state) => [state.preamble, state.parseCitations, state.setParseCitations],
    shallow,
  )
  const clipboard = useClipboard({ timeout: 2000 })

  if (preamble) {
    console.log({ preamble })
    options['preamble'] = preamble
  }
  options.parseCitations = parseCitations
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
          <Button
            onClick={() =>
              downloadAll(vfile.data.media, superJankMakeTexBetterReplace(String(vfile)))
            }
          >
            {' '}
            Download all ⬇️{' '}
          </Button>
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
          <SyntaxHighlighter
            withLineNumbers={true}
            // @ts-expect-error yeahhhh
            language="latex"
            sx={{}}
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              overflowY: 'scroll',
            }}
            styles={{
              scrollArea: {
                width: '100%',
                maxHeight: '100%',
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
          >
            {superJankMakeTexBetterReplace(String(vfile))}
          </SyntaxHighlighter>
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  )
}

export default ConvertedBlockLocal
