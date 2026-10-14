'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useConversionStore, useCredentialsStore } from '../lib/store'
import { SettingsSheet } from '../components/settings-sheet'
import { CredentialsPrompt } from '../components/credentials-prompt'
import { OjsSearch } from '../components/ojs-search'
import { SubmissionPanel } from '../components/submission-panel'
import { ConversionDropzone } from '../components/conversion-dropzone'
import { LatexOutput } from '../components/latex-output'
import { TypstOutput } from '../components/typst-output'
import { Separator } from '../components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

export default function Page() {
  const { token, endpoint } = useCredentialsStore()
  const { input } = useConversionStore()
  const [skippedSetup, setSkippedSetup] = useState(false)
  const [outputFormat, setOutputFormat] = useState('latex')
  const hasCredentials = Boolean(token && endpoint)

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Image src="/favicon.png" alt="JOTE" width={28} height={28} />
            <div className="flex items-baseline gap-2">
              <h1 className="text-lg font-semibold tracking-tight">JOTE Converter</h1>
              <span className="hidden text-xs text-muted-foreground sm:inline">
                DOCX to LaTeX &amp; Typst
              </span>
            </div>
          </div>
          <SettingsSheet />
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        {!hasCredentials && !skippedSetup ? (
          <CredentialsPrompt onSkip={() => setSkippedSetup(true)} />
        ) : (
          <>
            {hasCredentials && (
              <>
                <section>
                  <OjsSearch />
                </section>
                <SubmissionPanel />
                <Separator />
              </>
            )}

            <section className="space-y-4">
              <h2 className="text-base font-medium">
                {hasCredentials ? 'Or upload a file directly' : 'Upload a .docx file'}
              </h2>
              <ConversionDropzone />
            </section>

            {input && (
              <Tabs value={outputFormat} onValueChange={setOutputFormat} className="space-y-3">
                <TabsList>
                  <TabsTrigger value="latex">LaTeX</TabsTrigger>
                  <TabsTrigger value="typst">Typst</TabsTrigger>
                </TabsList>
                <TabsContent value="latex">
                  <LatexOutput />
                </TabsContent>
                <TabsContent value="typst">
                  <TypstOutput />
                </TabsContent>
              </Tabs>
            )}
          </>
        )}
      </main>

      <footer className="border-t py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 px-4 text-xs text-muted-foreground">
          <Image src="/favicon.png" alt="" width={16} height={16} className="opacity-50" />
          <span>Center of Trial &amp; Error</span>
        </div>
      </footer>
    </div>
  )
}
