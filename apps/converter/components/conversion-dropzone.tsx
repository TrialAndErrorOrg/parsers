'use client'

import { useCallback } from 'react'
import { useConversionStore } from '../lib/store'
import { Upload, FileText } from 'lucide-react'
import { Card, CardContent } from './ui/card'

export function ConversionDropzone() {
  const { input, setInput, clearInput } = useConversionStore()

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      if (!file) return
      file.arrayBuffer().then(setInput)
    },
    [setInput],
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file) return
      file.arrayBuffer().then(setInput)
    },
    [setInput],
  )

  if (input) {
    return (
      <Card>
        <CardContent className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm">Document loaded ({(input.byteLength / 1024).toFixed(1)} KB)</span>
          </div>
          <button onClick={clearInput} className="text-sm text-muted-foreground hover:text-foreground">
            Clear
          </button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-muted-foreground/25 px-6 py-12 transition-colors hover:border-muted-foreground/50"
        >
          <Upload className="h-10 w-10 text-muted-foreground/50" />
          <div className="text-center">
            <p className="text-sm font-medium">Drop a .docx file here or click to browse</p>
            <p className="mt-1 text-xs text-muted-foreground">
              The file will be converted to LaTeX on the client side
            </p>
          </div>
          <label className="cursor-pointer rounded-md bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80">
            Choose file
            <input type="file" accept=".docx" onChange={handleFileSelect} className="hidden" />
          </label>
        </div>
      </CardContent>
    </Card>
  )
}
