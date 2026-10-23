import { useCallback, useEffect, useMemo, useState } from 'react'
import { useConversionStore } from '../lib/store'
import { docxToTypstConverter, typstProjectFiles } from '../lib/converters/docx-to-typst'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Loader2, Copy, Download, AlertTriangle, Check } from 'lucide-react'
import type { VFile } from 'vfile'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { BlobWriter, TextReader, Uint8ArrayReader, ZipWriter } from '@zip.js/zip.js'

const MIME: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  webp: 'image/webp',
}

/** main.typ, media/, bibliography.bib and the jote-article template, ready for `typst compile` */
async function downloadZip(files: Record<string, Uint8Array | string>) {
  const zipWriter = new ZipWriter(new BlobWriter('application/zip'))
  for (const [path, content] of Object.entries(files)) {
    await zipWriter.add(
      path,
      typeof content === 'string' ? new TextReader(content) : new Uint8ArrayReader(content),
    )
  }
  const zipFile = await zipWriter.close()
  const url = URL.createObjectURL(zipFile)
  const a = document.createElement('a')
  a.href = url
  a.download = 'typst.zip'
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

export function TypstOutput() {
  const { input, templateArgs } = useConversionStore()
  const [vfile, setVfile] = useState<VFile | null>(null)
  const [converting, setConverting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!input) {
      setVfile(null)
      return
    }

    let cancelled = false
    setConverting(true)
    setError(null)

    docxToTypstConverter(input, { meta: templateArgs ?? undefined })
      .then((result) => {
        if (cancelled) return
        setVfile(result)
        setConverting(false)
      })
      .catch((e) => {
        if (cancelled) return
        setError(e?.message ?? 'Conversion failed')
        setConverting(false)
      })
    return () => {
      cancelled = true
    }
  }, [input, templateArgs])

  const typString = vfile ? String(vfile) : ''

  const images = useMemo(() => {
    const files = vfile?.data.files ?? {}
    return Object.entries(files)
      .filter(([path, content]) => path.startsWith('media/') && typeof content !== 'string')
      .map(([path, content]) => {
        const ext = path.split('.').pop()?.toLowerCase() ?? ''
        const blob = new Blob([content as Uint8Array<ArrayBuffer>], {
          type: MIME[ext] ?? 'application/octet-stream',
        })
        return { path, url: MIME[ext] ? URL.createObjectURL(blob) : undefined }
      })
  }, [vfile])

  useEffect(
    () => () => {
      for (const image of images) if (image.url) URL.revokeObjectURL(image.url)
    },
    [images],
  )

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(typString).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [typString])

  const handleDownload = useCallback(() => {
    if (!vfile?.data.files) return
    downloadZip(typstProjectFiles(vfile.data.files))
  }, [vfile])

  if (!input) return null

  if (converting) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center gap-2 py-12">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span className="text-sm text-muted-foreground">Converting document to Typst...</span>
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
  const hasBibliography = Boolean(vfile.data.files?.['bibliography.bib'])

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Typst Output</CardTitle>
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
        <p className="text-xs text-muted-foreground">
          The ZIP has main.typ, the images{hasBibliography ? ', bibliography.bib' : ''} and the
          jote-article template; build it with <code>typst compile main.typ</code>.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {messages.length > 0 && (
          <div className="space-y-1">
            {messages.map((msg, i) => (
              <div key={`${i}-${String(msg)}`} className="flex items-start gap-2 text-xs">
                <Badge variant="outline" className="shrink-0 text-[10px]">
                  {msg.fatal ? 'error' : 'warning'}
                </Badge>
                <span className="text-muted-foreground">{msg.reason}</span>
              </div>
            ))}
          </div>
        )}

        {images.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">Extracted images</p>
            <div className="flex flex-wrap gap-2">
              {images.map(({ path, url }) =>
                url ? (
                  <img
                    key={path}
                    src={url}
                    alt={path}
                    title={path}
                    className="h-20 w-20 rounded border object-cover"
                  />
                ) : (
                  <div
                    key={path}
                    title={path}
                    className="flex h-20 w-20 items-center justify-center rounded border p-1 text-center text-[10px] text-muted-foreground"
                  >
                    {path.split('/').pop()}
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        <div className="relative max-h-[60vh] overflow-auto rounded-md">
          <SyntaxHighlighter
            language="text"
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
            {typString}
          </SyntaxHighlighter>
        </div>
      </CardContent>
    </Card>
  )
}
