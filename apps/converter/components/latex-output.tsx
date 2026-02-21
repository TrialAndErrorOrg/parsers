'use client'

import { useCallback, useEffect, useState } from 'react'
import { useConversionStore } from '../lib/store'
import { docxToTexConverter } from '../lib/converters/docx-to-tex'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Loader2, Copy, Download, AlertTriangle, Check } from 'lucide-react'
import type { VFile } from 'vfile'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  BlobReader,
  BlobWriter,
  TextReader,
  ZipWriter,
} from '@zip.js/zip.js'

const FRONTMATTER_INJECTION = `\\begin{frontmatter}
  \\maketitle
  \\begin{abstract}
    \\printabstracttext
  \\end{abstract}
\\end{frontmatter}
`

const injectFrontmatter = (text: string): string =>
  text.replace('\\begin{document}\n', `\\begin{document}\n${FRONTMATTER_INJECTION}`)

async function downloadZip(images: Record<string, Blob> | undefined, text: string) {
  const zipWriter = new ZipWriter(new BlobWriter('application/zip'))
  await zipWriter.add('media', undefined, { directory: true })

  if (images) {
    await Promise.all(
      Object.entries(images).map(([url, img]) => {
        const fileName = `media/${url.split('/').pop() ?? 'image.jpg'}`
        const rawExt = url.split('.').pop() ?? 'jpg'
        const file = new Blob([img], { type: `image/${rawExt}` })
        return zipWriter.add(fileName, new BlobReader(file))
      }),
    )
  }

  await zipWriter.add('main.tex', new TextReader(text))
  const zipFile = await zipWriter.close()
  const url = URL.createObjectURL(zipFile)
  window.open(url, '_blank')
}

export function LatexOutput() {
  const { input, preamble, documentClassName, documentClassOptions } = useConversionStore()
  const [vfile, setVfile] = useState<VFile | null>(null)
  const [converting, setConverting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!input) {
      setVfile(null)
      return
    }

    setConverting(true)
    setError(null)

    docxToTexConverter(input, {
      preamble: preamble || undefined,
      documentClassName,
      documentClassOptions,
    })
      .then((result) => {
        setVfile(result)
        setConverting(false)
      })
      .catch((e) => {
        setError(e?.message ?? 'Conversion failed')
        setConverting(false)
      })
  }, [input, preamble, documentClassName, documentClassOptions])

  const texString = vfile ? injectFrontmatter(String(vfile)) : ''

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(texString).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [texString])

  const handleDownload = useCallback(() => {
    const media = vfile?.data?.media as Record<string, Blob> | undefined
    downloadZip(media, texString)
  }, [vfile, texString])

  if (!input) return null

  if (converting) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center gap-2 py-12">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span className="text-sm text-muted-foreground">Converting document to LaTeX...</span>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="border-destructive/50">
        <CardContent className="flex items-center gap-2 py-6">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <span className="text-sm text-destructive">{error}</span>
        </CardContent>
      </Card>
    )
  }

  if (!vfile) return null

  const messages = vfile.messages ?? []

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">LaTeX Output</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopy}>
              {copied ? <Check className="mr-1 h-3 w-3" /> : <Copy className="mr-1 h-3 w-3" />}
              {copied ? 'Copied' : 'Copy'}
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="mr-1 h-3 w-3" /> ZIP
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {messages.length > 0 && (
          <div className="space-y-1">
            {messages.map((msg) => (
              <div key={String(msg)} className="flex items-start gap-2 text-xs">
                <Badge variant="outline" className="shrink-0 text-[10px]">
                  {msg.fatal ? 'error' : 'warning'}
                </Badge>
                <span className="text-muted-foreground">{String(msg)}</span>
              </div>
            ))}
          </div>
        )}

        {vfile?.data?.media && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">Extracted images</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(vfile.data.media as Record<string, Blob>).map(([url, img]) => {
                const ext = url.split('.').pop() ?? 'jpg'
                const blob = new Blob([img], { type: `image/${ext}` })
                const imageUrl = URL.createObjectURL(blob)
                return (
                  <img
                    key={url}
                    src={imageUrl}
                    alt={url}
                    className="h-20 w-20 rounded border object-cover"
                  />
                )
              })}
            </div>
          </div>
        )}

        <div className="relative max-h-[60vh] overflow-auto rounded-md">
          <SyntaxHighlighter
            language="latex"
            style={oneDark}
            showLineNumbers
            customStyle={{
              margin: 0,
              fontSize: '0.75rem',
              lineHeight: '1.5',
              borderRadius: '0.375rem',
            }}
            lineNumberStyle={{ minWidth: '2.5em', opacity: 0.4 }}
            wrapLongLines
          >
            {texString}
          </SyntaxHighlighter>
        </div>
      </CardContent>
    </Card>
  )
}
