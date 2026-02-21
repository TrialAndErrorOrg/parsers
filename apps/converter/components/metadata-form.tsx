'use client'

import { useEffect, useRef, useState } from 'react'
import { useConversionStore, useCredentialsStore, type SelectedSubmission } from '../lib/store'
import type { MetaForm, Author } from '../lib/meta-to-preamble'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import { Loader2, Plus, Trash2, RefreshCw } from 'lucide-react'

const CATEGORIES = ['', 'empirical', 'meta', 'reflection', 'rga', 'editorial']

const EMPTY_FORM: MetaForm = {
  documentclassname: 'jote-new-article',
  documentclassopt: 'author-date, editorial',
  title: '',
  keywordsabstract: '',
  abstract: '',
  runningauthor: '',
  jname: 'Journal of Trial \\& Error',
  jyear: new Date().getFullYear().toString(),
  acknowledgments: '',
  funding: '',
  doi: '',
  jvolume: '',
  jissue: '',
  jpages: '',
  paperreceived: '',
  authors: [{ givenName: '', familyName: '', affiliation: '', orcid: '', email: '' }],
  paperaccepted: '',
  paperpublished: '',
  jwebsite: 'https://journal.trialanderror.org',
}

const EMPTY_AUTHOR: Author = { givenName: '', familyName: '', affiliation: '', orcid: '', email: '' }

interface PublicationData {
  fullTitle?: { en_US?: string }
  abstract?: { en_US?: string }
  keywords?: { en_US?: string[] }
  authors?: Array<{
    givenName?: { en_US?: string }
    familyName?: { en_US?: string }
    affiliation?: { en_US?: string }
    email?: string
    orcid?: string
  }>
  authorsStringShort?: string
  copyrightYear?: string
  'pub-id::doi'?: string
  pages?: string
  sectionId?: number
}

export function MetadataForm({ submission }: { submission: SelectedSubmission }) {
  const { token, endpoint } = useCredentialsStore()
  const { setPreamble } = useConversionStore()
  const [form, setForm] = useState<MetaForm>(EMPTY_FORM)
  const [loading, setLoading] = useState(true)
  const [dirty, setDirty] = useState(false)
  const initialApplyDone = useRef(false)

  // auto-apply whenever form changes after initial load, unless user has made edits
  useEffect(() => {
    if (loading || !form.title) return
    if (!initialApplyDone.current) {
      setPreamble(form)
      initialApplyDone.current = true
      return
    }
    if (!dirty) {
      setPreamble(form)
    }
  }, [form, loading, dirty, setPreamble])

  useEffect(() => {
    if (!submission.publicationUrl || !token) {
      setLoading(false)
      return
    }

    initialApplyDone.current = false
    setDirty(false)

    const load = async () => {
      setLoading(true)
      try {
        const [pubRes, filesRes] = await Promise.all([
          fetch(`/api/ojs/publication?url=${encodeURIComponent(submission.publicationUrl)}&apiToken=${encodeURIComponent(token)}`),
          fetch(`/api/ojs/files?apiToken=${encodeURIComponent(token)}&submissionId=${submission.id}&stageId=${submission.stageId}&endpoint=${encodeURIComponent(endpoint)}`),
        ])

        const pub: PublicationData = await pubRes.json()
        const files = await filesRes.json()

        const acceptedDate = files?.items?.reduce((acc: string, curr: { fileStage: number; createdAt: string }) => {
          if (curr.fileStage !== 9) return acc
          if (!acc) return curr.createdAt
          return curr.createdAt < acc ? curr.createdAt : acc
        }, '')

        const authors: Author[] =
          pub.authors?.map((a) => ({
            givenName: a.givenName?.en_US ?? '',
            familyName: a.familyName?.en_US ?? '',
            affiliation: a.affiliation?.en_US ?? '',
            email: a.email ?? '',
            orcid: a.orcid ?? '',
          })) ?? EMPTY_FORM.authors

        setForm({
          ...EMPTY_FORM,
          title: pub.fullTitle?.en_US ?? '',
          documentclassopt: `author-date, ${CATEGORIES[submission.sectionId] ?? 'editorial'}`,
          keywordsabstract: pub.keywords?.en_US?.join(', ') ?? '',
          abstract: pub.abstract?.en_US ?? '',
          runningauthor: pub.authorsStringShort ?? '',
          authors,
          jyear: pub.copyrightYear ?? new Date().getFullYear().toString(),
          doi: pub['pub-id::doi'] ?? '',
          jpages: pub.pages ?? '',
          paperreceived: submission.dateSubmitted ?? '',
          paperaccepted: acceptedDate ?? '',
        })
      } catch (e) {
        console.error('Failed to load publication data', e)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [submission, token, endpoint])

  const updateField = <K extends keyof MetaForm>(key: K, value: MetaForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setDirty(true)
  }

  const updateAuthor = (index: number, field: keyof Author, value: string) => {
    setForm((prev) => {
      const authors = [...prev.authors]
      authors[index] = { ...authors[index], [field]: value }
      return { ...prev, authors }
    })
    setDirty(true)
  }

  const addAuthor = () => {
    setForm((prev) => ({ ...prev, authors: [...prev.authors, { ...EMPTY_AUTHOR }] }))
    setDirty(true)
  }

  const removeAuthor = (index: number) => {
    setForm((prev) => ({
      ...prev,
      authors: prev.authors.filter((_, i) => i !== index),
    }))
    setDirty(true)
  }

  const handleReapply = () => {
    setPreamble(form)
    setDirty(false)
  }

  if (loading) {
    return (
      <Card className="min-w-0">
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          <span className="ml-2 text-sm text-muted-foreground">Loading publication data...</span>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="min-w-0 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Article Metadata</CardTitle>
          {dirty && (
            <Button size="sm" variant="outline" onClick={handleReapply}>
              <RefreshCw className="mr-1 h-3 w-3" /> Re-apply
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 overflow-hidden">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <FieldInput label="Document class" value={form.documentclassname} onChange={(v) => updateField('documentclassname', v)} />
          <FieldInput label="Class options" value={form.documentclassopt} onChange={(v) => updateField('documentclassopt', v)} />
        </div>

        <FieldInput label="Title" value={form.title} onChange={(v) => updateField('title', v)} />

        <Separator />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Authors</Label>
            <Button variant="ghost" size="sm" onClick={addAuthor}>
              <Plus className="mr-1 h-3 w-3" /> Add
            </Button>
          </div>
          {form.authors.map((author, i) => (
            <div key={`${author.givenName}-${author.familyName}-${i}`} className="space-y-2 rounded-md border p-3">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <FieldInput label="Given name" value={author.givenName} onChange={(v) => updateAuthor(i, 'givenName', v)} />
                <FieldInput label="Family name" value={author.familyName} onChange={(v) => updateAuthor(i, 'familyName', v)} />
              </div>
              <FieldInput label="Affiliation" value={author.affiliation} onChange={(v) => updateAuthor(i, 'affiliation', v)} />
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <FieldInput label="Email" value={author.email} onChange={(v) => updateAuthor(i, 'email', v)} />
                <FieldInput label="ORCID" value={author.orcid} onChange={(v) => updateAuthor(i, 'orcid', v)} />
              </div>
              {form.authors.length > 1 && (
                <Button variant="ghost" size="sm" className="text-destructive" onClick={() => removeAuthor(i)}>
                  <Trash2 className="mr-1 h-3 w-3" /> Remove
                </Button>
              )}
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-2">
          <Label className="text-sm">Abstract</Label>
          <Textarea
            rows={4}
            value={form.abstract}
            onChange={(e) => updateField('abstract', e.target.value)}
          />
        </div>

        <FieldInput label="Keywords" value={form.keywordsabstract} onChange={(v) => updateField('keywordsabstract', v)} />

        <div className="grid grid-cols-3 gap-2">
          <FieldInput label="Year" value={form.jyear} onChange={(v) => updateField('jyear', v)} />
          <FieldInput label="Volume" value={form.jvolume} onChange={(v) => updateField('jvolume', v)} />
          <FieldInput label="Issue" value={form.jissue} onChange={(v) => updateField('jissue', v)} />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <FieldInput label="DOI" value={form.doi} onChange={(v) => updateField('doi', v)} />
          <FieldInput label="Pages" value={form.jpages} onChange={(v) => updateField('jpages', v)} />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <FieldInput label="Received" value={form.paperreceived} onChange={(v) => updateField('paperreceived', v)} />
          <FieldInput label="Accepted" value={form.paperaccepted} onChange={(v) => updateField('paperaccepted', v)} />
          <FieldInput label="Published" value={form.paperpublished} onChange={(v) => updateField('paperpublished', v)} />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <FieldInput label="Journal name" value={form.jname} onChange={(v) => updateField('jname', v)} />
          <FieldInput label="Website" value={form.jwebsite} onChange={(v) => updateField('jwebsite', v)} />
        </div>

        <div className="space-y-2">
          <Label className="text-sm">Acknowledgments</Label>
          <Textarea
            rows={2}
            value={form.acknowledgments}
            onChange={(e) => updateField('acknowledgments', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm">Funding</Label>
          <Textarea
            rows={2}
            value={form.funding}
            onChange={(e) => updateField('funding', e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  )
}

function FieldInput({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="min-w-0 space-y-1">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <Input value={value} onChange={(e) => onChange(e.target.value)} className="h-8 text-sm" />
    </div>
  )
}
