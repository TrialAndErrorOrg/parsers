import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type MetaForm, metaToPreamble } from './meta-to-preamble'
import { metaToTemplateArgs, type JoteArticleMeta } from 'docx-to-typst'

interface ApiKeyState {
  /** The editor's own OJS API key, kept in this browser only */
  apiKey: string
  setApiKey: (apiKey: string) => void
}

export const useApiKeyStore = create<ApiKeyState>()(
  persist(
    (set) => ({
      apiKey: '',
      setApiKey: (apiKey: string) => set({ apiKey: apiKey.trim() }),
    }),
    { name: 'converter-ojs-api-key' },
  ),
)

interface ConversionState {
  input: ArrayBuffer | null
  preamble: string
  documentClassName: string
  documentClassOptions: string[]
  /** The metadata form as `jote-article.with(…)` arguments for the Typst output */
  templateArgs: JoteArticleMeta | null
  output: string | null
  selectedSubmission: SelectedSubmission | null
  setInput: (input: ArrayBuffer) => void
  clearInput: () => void
  setPreamble: (form: MetaForm) => void
  setPreambleRaw: (preamble: string) => void
  setOutput: (output: string) => void
  setSelectedSubmission: (submission: SelectedSubmission | null) => void
}

export interface SelectedSubmission {
  id: number
  title: string
  authors: string
  /** The publication's path in the OJS API, e.g. `submissions/12/publications/15` */
  publicationPath: string
  sectionId: number
  stageId: number
  dateSubmitted: string
}

export const useConversionStore = create<ConversionState>()((set) => ({
  input: null,
  preamble: '',
  documentClassName: 'jote-new-article',
  documentClassOptions: ['authordate', 'empirical'],
  templateArgs: null,
  output: null,
  selectedSubmission: null,
  setInput: (input: ArrayBuffer) => set({ input }),
  clearInput: () => set({ input: null, output: null }),
  setPreamble: (form: MetaForm) =>
    set({
      preamble: metaToPreamble(form),
      documentClassName: form.documentclassname || 'jote-new-article',
      documentClassOptions: (form.documentclassopt || 'authordate, empirical')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      templateArgs: metaToTemplateArgs(form),
    }),
  setPreambleRaw: (preamble: string) => set({ preamble }),
  setOutput: (output: string) => set({ output }),
  setSelectedSubmission: (submission) => set({ selectedSubmission: submission }),
}))
