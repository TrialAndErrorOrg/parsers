'use client'

import { useConversionStore } from '../lib/store'
import { MetadataForm } from './metadata-form'
import { FilePicker } from './file-picker'
import { Button } from './ui/button'
import { X } from 'lucide-react'

export function SubmissionPanel() {
  const { selectedSubmission, setSelectedSubmission } = useConversionStore()

  if (!selectedSubmission) return null

  return (
    <div className="min-w-0 space-y-4 overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-semibold">{selectedSubmission.title}</h2>
          <p className="truncate text-sm text-muted-foreground">{selectedSubmission.authors}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSelectedSubmission(null)}
          className="shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <MetadataForm submission={selectedSubmission} />
        <FilePicker submission={selectedSubmission} />
      </div>
    </div>
  )
}
