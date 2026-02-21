'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Search, Loader2 } from 'lucide-react'
import { Input } from './ui/input'
import { useCredentialsStore, useConversionStore, type SelectedSubmission } from '../lib/store'

interface OJSSubmission {
  id: number
  stageId: number
  sectionId: number
  dateSubmitted: string
  publications?: Array<{
    _href?: string
    fullTitle?: { en_US?: string }
    authorsString?: string
    authorsStringShort?: string
  }>
}

export function OjsSearch() {
  const { token, endpoint } = useCredentialsStore()
  const { setSelectedSubmission } = useConversionStore()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<OJSSubmission[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()
  const containerRef = useRef<HTMLDivElement>(null)

  const search = useCallback(
    async (phrase: string) => {
      if (!phrase || phrase.length < 2) {
        setResults([])
        return
      }
      setLoading(true)
      try {
        const res = await fetch(
          `/api/ojs/submissions?endpoint=${encodeURIComponent(endpoint)}&apiToken=${encodeURIComponent(token)}&searchPhrase=${encodeURIComponent(phrase)}`,
        )
        const data = await res.json()
        setResults(data.items ?? [])
        setOpen(true)
      } catch {
        setResults([])
      } finally {
        setLoading(false)
      }
    },
    [token, endpoint],
  )

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => search(query), 300)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query, search])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (sub: OJSSubmission) => {
    const pub = sub.publications?.[0]
    const selected: SelectedSubmission = {
      id: sub.id,
      title: pub?.fullTitle?.en_US ?? `Submission #${sub.id}`,
      authors: pub?.authorsString ?? '',
      publicationUrl: pub?._href ?? '',
      sectionId: sub.sectionId,
      stageId: sub.stageId,
      dateSubmitted: sub.dateSubmitted,
    }
    setSelectedSubmission(selected)
    setQuery(selected.title)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search OJS submissions..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => results.length > 0 && setOpen(true)}
          className="pl-10 pr-10"
        />
        {loading && (
          <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
        )}
      </div>
      {open && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover shadow-lg">
          <div className="max-h-64 overflow-y-auto p-1">
            {results.map((sub) => {
              const pub = sub.publications?.[0]
              return (
                <button
                  type="button"
                  key={sub.id}
                  onClick={() => handleSelect(sub)}
                  className="flex w-full flex-col items-start gap-0.5 rounded-sm px-3 py-2 text-left text-sm hover:bg-accent"
                >
                  <span className="font-medium leading-tight">
                    {pub?.fullTitle?.en_US ?? `Submission #${sub.id}`}
                  </span>
                  {pub?.authorsString && (
                    <span className="text-xs text-muted-foreground">{pub.authorsString}</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
