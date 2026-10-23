import { createContext, useCallback, useContext } from 'react'
import { useApiKeyStore } from './store'

/**
 * How the converter reaches OJS. The page that hosts the converter provides it: OJS doesn't allow
 * calls from other sites' pages, so they go through that site's server, which only lets signed-in
 * editors through. Each editor uses their own OJS API key, so OJS knows who did what.
 */
export interface OjsAccess {
  /** The journal's OJS, e.g. `https://submit.trialanderror.org/index.php/jote`, for the instructions */
  url: string
  /** Whether the editor is signed in to the host site */
  signedIn: boolean
  /** Sign in to the host site. Called from a click, as it opens a popup */
  signIn: () => Promise<void>
  /**
   * GET a path of the OJS API (after `/api/v1/`) with the editor's API key. Answers 401 when the
   * sign-in to the host site has run out
   */
  fetch: (path: string, apiKey: string, params?: Record<string, string>) => Promise<Response>
}

export const OjsContext = createContext<OjsAccess | null>(null)

export const useOjsAccess = () => useContext(OjsContext)

/** GET from the OJS API with the stored key, throwing on errors */
export function useOjs() {
  const access = useOjsAccess()
  const { apiKey } = useApiKeyStore()

  return useCallback(
    async (path: string, params?: Record<string, string>) => {
      if (!access || !apiKey) throw new Error('Not connected to OJS')
      const res = await access.fetch(path, apiKey, params)
      if (!res.ok) throw new Error(`OJS answered ${res.status} for ${path}`)
      return res
    },
    [access, apiKey],
  )
}

/** The API path of a URL OJS hands out, e.g. a publication's `_href` */
export const apiPath = (href: string) => href.replace(/^.*?\/api\/v1\//, '')
