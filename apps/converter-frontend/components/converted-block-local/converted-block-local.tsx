import { Code, Loader } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { jatsToTex } from '@jote/processors/jats-to-tex'
import { VFile } from 'vfile'

/* eslint-disable-next-line */
export interface ConvertedBlockLocalProps {
  input: ArrayBuffer
  converter: (
    input: ArrayBuffer,
    options: { [key: string]: string }
  ) => Promise<VFile>
  options?: { [key: string]: string }
}

export function ConvertedBlockLocal(props: ConvertedBlockLocalProps) {
  const { input, options = {}, converter } = props
  const [vfile, setVFile] = useState<VFile | null>(null)
  useEffect(() => {
    ;(async () => {
      setVFile(await converter(input, options))
    })()
  }, [input])

  return (
    <>
      {/* <Code></Code> */}
      <Code>{vfile ? String(vfile) : <Loader />}</Code>
    </>
  )
}

export default ConvertedBlockLocal
