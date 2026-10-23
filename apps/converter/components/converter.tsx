import { useState } from 'react'
import { useApiKeyStore, useConversionStore } from '../lib/store'
import { OjsContext, type OjsAccess } from '../lib/ojs'
import { SettingsSheet } from './settings-sheet'
import { CredentialsPrompt } from './credentials-prompt'
import { OjsSearch } from './ojs-search'
import { SubmissionPanel } from './submission-panel'
import { ConversionDropzone } from './conversion-dropzone'
import { LatexOutput } from './latex-output'
import { TypstOutput } from './typst-output'
import { Separator } from './ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

/**
 * The converter: a .docx in, LaTeX and Typst out, all in the browser. With `ojs` it also finds
 * submissions in OJS and fills in their metadata. Without it, it only converts uploaded files.
 */
export function Converter({ ojs }: { ojs?: OjsAccess }) {
  const { apiKey } = useApiKeyStore()
  const { input } = useConversionStore()
  const [skippedSetup, setSkippedSetup] = useState(false)
  const [outputFormat, setOutputFormat] = useState('latex')
  const connected = Boolean(ojs?.signedIn && apiKey)

  return (
    <OjsContext.Provider value={ojs ?? null}>
      <div className="min-h-screen">
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
            <div className="flex items-baseline gap-2">
              <h1 className="text-lg font-semibold tracking-tight">JOTE Converter</h1>
              <span className="hidden text-xs text-muted-foreground sm:inline">
                DOCX to LaTeX &amp; Typst
              </span>
            </div>
            <SettingsSheet />
          </div>
        </header>

        <main className="mx-auto max-w-5xl space-y-6 px-4 py-8">
          {ojs && !connected && !skippedSetup ? (
            <CredentialsPrompt onSkip={() => setSkippedSetup(true)} />
          ) : (
            <>
              {connected && (
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
                  {connected ? 'Or upload a file directly' : 'Upload a .docx file'}
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
      </div>
    </OjsContext.Provider>
  )
}
