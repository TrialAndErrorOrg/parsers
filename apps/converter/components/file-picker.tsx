'use client'

import { useEffect, useState } from 'react'
import { useCredentialsStore, useConversionStore, type SelectedSubmission } from '../lib/store'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Loader2, FileText, Download } from 'lucide-react'

interface SubmissionFile {
  id: number
  submissionFileId?: number
  name: { en_US?: string }
  documentType?: string
  url?: string
  fileStage?: number
  createdAt?: string
  updatedAt?: string
  mimetype?: string
}

const STAGE_NAMES: Record<number, string> = {
  2: 'Submission',
  4: 'Pre-Review',
  5: 'Post-Review',
  6: 'Pre-Review 2',
  7: 'Post-Review 2',
  8: 'Pre-Copyediting',
  9: 'Post-Copyediting',
  10: 'Production',
}

const formatDate = (dateStr: string | undefined): string | null => {
  if (!dateStr) return null
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return null
  }
}

export function FilePicker({ submission }: { submission: SelectedSubmission }) {
  const { token, endpoint } = useCredentialsStore()
  const { setInput } = useConversionStore()
  const [files, setFiles] = useState<SubmissionFile[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingFile, setLoadingFile] = useState<number | null>(null)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `/api/ojs/files?apiToken=${encodeURIComponent(token)}&submissionId=${submission.id}&stageId=${submission.stageId}&endpoint=${encodeURIComponent(endpoint)}`,
        )
        const data = await res.json()
        setFiles(data.items ?? [])
      } catch {
        setFiles([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [submission, token, endpoint])

  const handleLoadFile = async (file: SubmissionFile) => {
    const fileId = file.submissionFileId ?? file.id
    setLoadingFile(file.id)
    try {
      // use the _files endpoint which works like galley downloads
      const fileUrl = `${endpoint}/_files/${fileId}?apiToken=${encodeURIComponent(token)}`
      const res = await fetch(`/api/ojs/file?url=${encodeURIComponent(fileUrl)}`)
      if (!res.ok) throw new Error(`Failed to fetch file: ${res.status}`)
      const buf = await res.arrayBuffer()
      setInput(buf)
    } catch (e) {
      console.error('Failed to load file', e)
    } finally {
      setLoadingFile(null)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          <span className="ml-2 text-sm text-muted-foreground">Loading files...</span>
        </CardContent>
      </Card>
    )
  }

  if (files.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-sm text-muted-foreground">
          No files found for this submission.
        </CardContent>
      </Card>
    )
  }

  const groupedFiles = files.reduce<Record<number, SubmissionFile[]>>((acc, file) => {
    const stage = file.fileStage ?? 0
    if (!stage) return acc
    acc[stage] = [...(acc[stage] ?? []), file]
    return acc
  }, {})

  const stageIds = Object.keys(groupedFiles).map(Number).sort((a, b) => a - b)
  const defaultTab = String(stageIds[stageIds.length - 1] ?? stageIds[0])

  return (
    <Card className="min-w-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Submission Files</CardTitle>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <Tabs defaultValue={defaultTab}>
          <TabsList className="flex-wrap">
            {stageIds.map((id) => (
              <TabsTrigger key={id} value={String(id)} className="text-xs">
                {STAGE_NAMES[id] ?? `Stage ${id}`}
                <span className="ml-1 text-muted-foreground">({groupedFiles[id].length})</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {stageIds.map((stageId) => (
            <TabsContent key={stageId} value={String(stageId)}>
              <div className="space-y-2">
                {groupedFiles[stageId].map((file) => {
                  const uploaded = formatDate(file.createdAt)
                  const updated = formatDate(file.updatedAt)
                  return (
                    <div
                      key={file.id}
                      className="flex items-start justify-between gap-3 rounded-md border px-3 py-2"
                    >
                      <div className="flex min-w-0 gap-2 pt-0.5">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <div className="min-w-0">
                          <p className="break-words text-sm leading-tight">
                            {file.name?.en_US ?? `File ${file.id}`}
                          </p>
                          <div className="mt-1 flex flex-wrap items-center gap-1.5">
                            {file.mimetype && (
                              <Badge variant="secondary" className="text-[10px]">
                                {file.mimetype.split('/').pop()}
                              </Badge>
                            )}
                            {uploaded && (
                              <span className="text-[10px] text-muted-foreground">
                                uploaded {uploaded}
                              </span>
                            )}
                            {updated && updated !== uploaded && (
                              <span className="text-[10px] text-muted-foreground">
                                / updated {updated}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="shrink-0"
                        onClick={() => handleLoadFile(file)}
                        disabled={loadingFile === file.id}
                      >
                        {loadingFile === file.id ? (
                          <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                          <Download className="h-3 w-3" />
                        )}
                        <span className="ml-1">Load</span>
                      </Button>
                    </div>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
